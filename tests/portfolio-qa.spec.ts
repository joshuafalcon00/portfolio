import { test, expect } from '@playwright/test';
import * as fs from 'fs';

type Check = { name: string; capstone?: boolean; pass: boolean; detail: string };
const results: Check[] = [];
const add = (name: string, pass: boolean, detail = '', capstone = false) =>
  results.push({ name, pass, detail: String(detail), capstone });

const SOCIAL = ['linkedin', 'github.com', 'twitter.com', 'x.com', 'instagram.com',
  'facebook.com', 'bsky', 'mastodon', 'threads.net', 't.me', 'wa.me', 'tiktok.com'];

test('Portfolio QA — capstone-gated', async ({ page, baseURL }) => {
  // 1) Load + wait for the client-rendered page
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('footer', { timeout: 20_000 });
  await page.waitForTimeout(1500);

  // 2) Title + meta description
  const title = await page.title();
  add('Title set correctly', /joshua falcon/i.test(title), `"${title}"`);
  const desc = await page.locator('head meta[name="description"]').first().getAttribute('content');
  add('Meta description set (<=160 chars)', !!desc && desc.length > 20 && desc.length <= 160, `len=${desc?.length ?? 0}`);

  // 3) Hero asset loads (doodle-face image-slot, shadow DOM)
  const heroOk = await page.evaluate(() => {
    const sl = document.getElementById('doodle-face') as any;
    const img = sl?.shadowRoot?.querySelector('img') as HTMLImageElement | null;
    return !!img && img.complete && img.naturalWidth > 0;
  });
  add('Hero image loads', heroOk, heroOk ? 'doodle-face.webp rendered' : 'hero image not loaded');

  // 4) CAPSTONE 1 — no contact details / social links
  const offenders = await page.evaluate((socials) => {
    const bad: string[] = [];
    document.querySelectorAll('a[href]').forEach((a) => {
      const h = (a.getAttribute('href') || '').toLowerCase();
      if (h.startsWith('mailto:') || h.startsWith('tel:') || socials.some((s: string) => h.includes(s))) {
        bad.push((a as HTMLElement).outerHTML.slice(0, 140));
      }
    });
    return bad;
  }, SOCIAL);
  add('CAPSTONE 1 — no contact/social links', offenders.length === 0,
    offenders.length ? `FOUND: ${offenders.join(' || ')}` : 'no mailto/tel/social anchors', true);

  // 5) CAPSTONE 2 — Arca footer present, links arca.ph, is the last element
  const arca = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    const link = footer?.querySelector('a.arca-credit, a[href="https://arca.ph"]') as HTMLAnchorElement | null;
    const lastChildOfFooter = !!(footer && link && footer.lastElementChild &&
      (footer.lastElementChild === link || footer.lastElementChild.contains(link)));
    const parent = footer?.parentElement;
    let nothingAfter = true;
    if (footer && parent) {
      const sibs = Array.from(parent.children);
      const after = sibs.slice(sibs.indexOf(footer) + 1).filter((el) => {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' || el.tagName === 'CANVAS') return false;
        if (el.getAttribute('aria-hidden') === 'true') return false;
        return (el as HTMLElement).offsetParent !== null; // visible only
      });
      nothingAfter = after.length === 0;
    }
    return {
      exists: !!link,
      madeForArca: /made for arca\.ph/i.test(link?.textContent || ''),
      href: link?.getAttribute('href') || '',
      lastChildOfFooter, nothingAfter,
    };
  });
  add('CAPSTONE 2 — Arca block present + "Made for Arca.ph"', arca.exists && arca.madeForArca, `href=${arca.href}`, true);
  add('CAPSTONE 2 — links to https://arca.ph', arca.href === 'https://arca.ph', arca.href, true);
  add('CAPSTONE 2 — Arca is the last element', arca.lastChildOfFooter && arca.nothingAfter,
    `lastChildOfFooter=${arca.lastChildOfFooter}, nothingAfter=${arca.nothingAfter}`, true);

  // 6) CAPSTONE 3 — clicking the resume button opens OR downloads a real PDF
  const downloadP = page.waitForEvent('download', { timeout: 9_000 }).catch(() => null);
  const popupP = page.context().waitForEvent('page', { timeout: 9_000 }).catch(() => null);
  await page.getByRole('button', { name: /download/i }).first().click();
  const download = await downloadP;
  const popup = download ? null : await popupP;
  let opensOrDownloads = false, dlDetail = 'no download or popup';
  if (download) {
    const fn = download.suggestedFilename();
    opensOrDownloads = /\.pdf$/i.test(fn);
    dlDetail = `download: ${fn}`;
  } else if (popup) {
    const u = popup.url();
    opensOrDownloads = /\.pdf(\?|#|$)/i.test(u) || /resume/i.test(u);
    dlDetail = `popup: ${u}`;
    await popup.close().catch(() => {});
  }
  add('CAPSTONE 3 — Download button opens/downloads a .pdf', opensOrDownloads, dlDetail, true);
  const pdfResp = await page.request.get((baseURL || '') + '/assets/joshua-falcon-resume.pdf');
  const pdfBuf = await pdfResp.body().catch(() => Buffer.from(''));
  add('CAPSTONE 3 — resume.pdf is a real PDF',
    pdfResp.status() === 200 && pdfBuf.slice(0, 4).toString() === '%PDF',
    `status=${pdfResp.status()} bytes=${pdfBuf.length}`, true);

  // 7) "View live" links return < 400
  const liveLinks: string[] = await page.locator('#works a[href^="http"]').evaluateAll(
    (els) => Array.from(new Set(els.map((e) => (e as HTMLAnchorElement).href))));
  for (const url of liveLinks) {
    let status = 0;
    try { status = (await page.request.get(url, { timeout: 25_000 })).status(); } catch { status = 0; }
    add(`Live link OK: ${url}`, status > 0 && status < 400, `status=${status}`);
  }

  // 8) Screenshots — desktop / tablet / mobile
  fs.mkdirSync('tests/screenshots', { recursive: true });
  const viewports: [string, number, number][] = [['desktop', 1440, 900], ['tablet', 768, 1024], ['mobile', 375, 667]];
  for (const [name, w, h] of viewports) {
    await page.setViewportSize({ width: w, height: h });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `tests/screenshots/${name}.png`, fullPage: true });
  }
  add('Screenshots captured (desktop/tablet/mobile)', true, 'tests/screenshots/*.png');

  // 9) No horizontal scroll on mobile (375x667)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(400);
  const scroll = await page.evaluate(() => {
    const de = document.documentElement;
    return { sw: de.scrollWidth, cw: de.clientWidth };
  });
  add('No horizontal scroll (mobile 375)', scroll.sw <= scroll.cw + 2, `scrollWidth=${scroll.sw} clientWidth=${scroll.cw}`);

  // 10) Write the markdown report
  const stamp = new Date().toISOString();
  const row = (c: Check) => `| ${c.pass ? '✅' : '❌'} | ${c.capstone ? '**' + c.name + '**' : c.name} | ${c.detail} |`;
  const md = [
    `# Portfolio QA report`,
    ``,
    `- Target: \`${baseURL}\``,
    `- Run: ${stamp}`,
    `- Result: **${results.every((r) => r.pass) ? 'PASS ✅' : 'FAIL ❌'}**`,
    ``,
    `## Capstone rules (non-negotiable)`,
    `| | Rule | Detail |`,
    `|---|---|---|`,
    ...results.filter((r) => r.capstone).map(row),
    ``,
    `## All checks`,
    `| | Check | Detail |`,
    `|---|---|---|`,
    ...results.map(row),
    ``,
    `## Screenshots`,
    `- ![desktop](screenshots/desktop.png)`,
    `- ![tablet](screenshots/tablet.png)`,
    `- ![mobile](screenshots/mobile.png)`,
    ``,
  ].join('\n');
  fs.writeFileSync('tests/qa-report.md', md);

  // ----- gates -----
  const capstoneFails = results.filter((r) => r.capstone && !r.pass).map((r) => `${r.name} (${r.detail})`);
  expect(capstoneFails, 'CAPSTONE rules must all pass to ship').toEqual([]);
  const allFails = results.filter((r) => !r.pass).map((r) => `${r.name} (${r.detail})`);
  expect(allFails, 'All QA checks must pass').toEqual([]);
});
