// Sketchbook scroll doodle — a hand-drawn BROKEN line that wanders down the
// whole page (curving left, right, with a loop) and inks itself in gold as you
// scroll, with a little walking character (walking.gif) strolling along the
// drawn tip. Absolutely placed down the right margin so it scrolls with the
// content; redrawn on resize.
(() => {
  const W = 156;     // strip width (px) on the right margin
  const CX = 80;     // doodle centre line inside the strip
  const AMP = 56;    // left/right swing
  const WALK = 92;   // walker size (px)

  function buildPath(H, top) {
    const bot = Math.max(top + 200, H - 80);
    const span = bot - top;
    const waves = Math.max(3, Math.round(span / 300));
    const step = span / waves;
    const loopAt = Math.max(1, Math.floor(waves * 0.45));
    let d = 'M ' + CX + ' ' + top;
    let y = top, dir = 1;
    for (let i = 0; i < waves; i++) {
      const y2 = y + step;
      if (i === loopAt) {
        const yl = y;
        d += ' C ' + (CX + dir * AMP) + ' ' + (yl + step * 0.18) +
             ', ' + (CX + dir * (AMP + 28)) + ' ' + (yl + step * 0.5) +
             ', ' + (CX + 8) + ' ' + (yl + step * 0.62);
        d += ' C ' + (CX - dir * (AMP + 26)) + ' ' + (yl + step * 0.74) +
             ', ' + (CX - dir * (AMP - 6)) + ' ' + (yl + step * 0.16) +
             ', ' + (CX + 16) + ' ' + (yl + step * 0.26);
        d += ' C ' + (CX + dir * (AMP - 4)) + ' ' + (yl + step * 0.34) +
             ', ' + (CX + dir * 12) + ' ' + (yl + step * 0.86) +
             ', ' + CX + ' ' + y2;
      } else {
        d += ' C ' + (CX + dir * AMP) + ' ' + (y + step * 0.25) +
             ', ' + (CX + dir * AMP) + ' ' + (y + step * 0.75) +
             ', ' + CX + ' ' + y2;
      }
      y = y2; dir *= -1;
    }
    return d;
  }

  let wrap, svg, base, prog, walker, flag, L = 0, curH = 0;

  function ensureBody() {
    if (getComputedStyle(document.body).position === 'static') document.body.style.position = 'relative';
  }

  function build() {
    const H = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    if (!wrap) {
      ensureBody();
      wrap = document.createElement('div');
      wrap.id = 'scroll-doodle';
      wrap.setAttribute('aria-hidden', 'true');
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('fill', 'none');
      svg.style.position = 'absolute'; svg.style.top = '0'; svg.style.left = '0';
      base = document.createElementNS(svg.namespaceURI, 'path');
      prog = document.createElementNS(svg.namespaceURI, 'path');
      // broken / dashed base line, a touch thicker
      base.setAttribute('stroke', 'var(--ink-300, #C2BBAD)');
      base.setAttribute('stroke-width', '3.4');
      base.setAttribute('stroke-linecap', 'round');
      base.setAttribute('stroke-linejoin', 'round');
      base.setAttribute('stroke-dasharray', '10 12');
      base.setAttribute('opacity', '0.55');
      // gold inked trail (thicker), revealed by scroll
      prog.setAttribute('stroke', 'var(--gold-500, #E0A82E)');
      prog.setAttribute('stroke-width', '4.4');
      prog.setAttribute('stroke-linecap', 'round');
      prog.setAttribute('stroke-linejoin', 'round');
      prog.setAttribute('stroke-dasharray', '9 11');
      svg.appendChild(base); svg.appendChild(prog);
      // little finish flag planted at the end of the path
      flag = document.createElementNS(svg.namespaceURI, 'g');
      const pole = document.createElementNS(svg.namespaceURI, 'line');
      pole.setAttribute('x1', 0); pole.setAttribute('y1', 8); pole.setAttribute('x2', 0); pole.setAttribute('y2', -50);
      pole.setAttribute('stroke', 'var(--ink-900, #15120E)'); pole.setAttribute('stroke-width', '3.6'); pole.setAttribute('stroke-linecap', 'round');
      const pennant = document.createElementNS(svg.namespaceURI, 'path');
      pennant.setAttribute('d', 'M0 -49 C 14 -47, 24 -42, 33 -44 C 26 -37, 26 -31, 33 -25 C 22 -27, 11 -25, 0 -27 Z');
      pennant.setAttribute('fill', 'var(--gold-500, #E0A82E)');
      pennant.setAttribute('stroke', 'var(--ink-900, #15120E)'); pennant.setAttribute('stroke-width', '2.4'); pennant.setAttribute('stroke-linejoin', 'round');
      const knob = document.createElementNS(svg.namespaceURI, 'circle');
      knob.setAttribute('cx', 0); knob.setAttribute('cy', -52); knob.setAttribute('r', 3.4); knob.setAttribute('fill', 'var(--ink-900, #15120E)');
      flag.appendChild(pole); flag.appendChild(pennant); flag.appendChild(knob);
      svg.appendChild(flag);
      walker = document.createElement('img');
      walker.src = 'assets/walking.webp';
      walker.alt = '';
      walker.style.cssText = 'position:absolute;left:0;top:0;width:' + WALK + 'px;height:' + WALK + 'px;transform-origin:' + (WALK / 2) + 'px ' + (WALK / 2) + 'px;will-change:transform;filter:drop-shadow(0 2px 3px rgba(21,18,14,.25));';
      wrap.appendChild(svg); wrap.appendChild(walker);
      document.body.appendChild(wrap);
    }
    curH = H;
    wrap.style.width = W + 'px';
    wrap.style.height = H + 'px';
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    // start the doodle (and the walker at scroll 0) level with the HOME title
    let startTop = 64;
    const homeEl = document.querySelector('#home .tc-title');
    if (homeEl) {
      const r = homeEl.getBoundingClientRect();
      const sy = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY || 0;
      startTop = Math.max(24, Math.round(r.top + sy));
    }
    const d = buildPath(H, startTop);
    base.setAttribute('d', d);
    prog.setAttribute('d', d);
    L = prog.getTotalLength();
    const end = prog.getPointAtLength(L);
    flag.setAttribute('transform', 'translate(' + end.x + ',' + end.y + ')');
    update();
  }

  function update() {
    if (!prog) return;
    const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const viewH = window.innerHeight || document.documentElement.clientHeight;
    const max = docH - viewH;
    const st = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY || 0;
    const p = max > 0 ? Math.min(1, Math.max(0, st / max)) : 0;
    // reveal the gold trail up to the walker (keep its own dash pattern by
    // offsetting a full-length gap beyond the drawn portion)
    const drawn = L * p;
    prog.style.strokeDasharray = drawn + ' ' + (L - drawn + 40);
    const at = Math.max(0.0001, Math.min(L, drawn));
    const pt = prog.getPointAtLength(at);
    const pb = prog.getPointAtLength(Math.max(0, at - 3));
    const flip = (pt.x - pb.x) < 0 ? ' scaleX(-1)' : '';
    walker.style.transform = 'translate(' + (pt.x - WALK / 2) + 'px,' + (pt.y - WALK + 6) + 'px)' + flip;
    walker.style.opacity = p > 0.001 ? '1' : '0';
  }

  let raf = 0;
  function onScroll() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; update(); }); }
  function maybeRebuild() {
    const H = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    if (Math.abs(H - curH) > 24) build(); else update();
  }

  // feed each work-tile deck its card count + per-card index so the compressed
  // pile and the hover fan stay centred regardless of how many previews it has
  function decks() {
    document.querySelectorAll('.wt-deck').forEach(function (d) {
      const cards = d.querySelectorAll('.wt-thumb');
      d.style.setProperty('--n', cards.length);
      cards.forEach(function (c, i) { c.style.setProperty('--i', i); c.style.zIndex = String(i + 1); });
    });
  }

  function init() {
    const style = document.createElement('style');
    style.textContent =
      '#scroll-doodle{position:absolute;top:0;right:6px;z-index:55;pointer-events:none;overflow:visible;}' +
      '@media (max-width:1024px){#scroll-doodle{display:none;}}';
    document.head.appendChild(style);
    build();
    document.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', maybeRebuild);
    if (window.ResizeObserver) { try { new ResizeObserver(maybeRebuild).observe(document.body); } catch (e) {} }
    decks();
    [120, 400, 900, 1600].forEach(function (t) { setTimeout(function () { build(); decks(); }, t); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
