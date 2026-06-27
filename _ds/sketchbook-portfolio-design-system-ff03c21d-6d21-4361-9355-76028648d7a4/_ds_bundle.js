/* @ds-bundle: {"format":3,"namespace":"SketchbookPortfolioDesignSystem_ff03c2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Doodle","sourcePath":"components/decor/Doodle.jsx"},{"name":"DottedGrid","sourcePath":"components/decor/DottedGrid.jsx"},{"name":"Sparkles","sourcePath":"components/decor/Sparkles.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0ca6e7bdf7a5","components/core/Button.jsx":"f18ed7ba998a","components/core/IconButton.jsx":"29e18e1cd43c","components/core/Tag.jsx":"342f89634627","components/decor/Doodle.jsx":"672f447a6e28","components/decor/DottedGrid.jsx":"799120ab071c","components/decor/Sparkles.jsx":"189b575feeac","components/forms/Input.jsx":"1a9645979180","components/navigation/NavBar.jsx":"18b7ae10ce8a","components/surfaces/Card.jsx":"142ec42e26cc","ui_kits/portfolio/screens/About.jsx":"95bd58329ab6","ui_kits/portfolio/screens/Hero.jsx":"83cba3dc53be","ui_kits/portfolio/screens/Mark.jsx":"56d929e683ab","ui_kits/portfolio/screens/Resume.jsx":"7b9abc9efcad","ui_kits/portfolio/screens/Works.jsx":"d06656d72ce5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SketchbookPortfolioDesignSystem_ff03c2 = window.SketchbookPortfolioDesignSystem_ff03c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a tiny status/eyebrow marker in spaced caps. Pairs with a
 * brand star/sparkle. Used for "SELECTED WORK", "01 / 06", "NEW".
 * No pulsing dot (brand rule).
 */
function Badge({
  children,
  tone = "ink",
  star = false,
  style,
  ...rest
}) {
  const tones = {
    ink: {
      color: "var(--ink-900)"
    },
    muted: {
      color: "var(--text-muted)"
    },
    gold: {
      color: "var(--gold-500)"
    },
    onDark: {
      color: "var(--paper-100)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "0.8125rem",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      ...tones[tone],
      ...style
    }
  }, rest), star && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "11px",
      height: "11px",
      display: "inline-block",
      background: "currentColor",
      WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M30 6 L34 26 L54 30 L34 34 L30 54 L26 34 L6 30 L26 26 Z' fill='black'/%3E%3C/svg%3E\")",
      maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M30 6 L34 26 L54 30 L34 34 L30 54 L26 34 L6 30 L26 26 Z' fill='black'/%3E%3C/svg%3E\")",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — a hand-drawn "sketch box" button.
 * Variants: outline (drawn ink border), ink (filled), ghost (text + doodle underline),
 *           gold (the rare accent fill).
 * The whole identity: irregular drawn corners, no slick radius, soft press-shrink.
 */
function Button({
  children,
  variant = "outline",
  size = "md",
  arrow = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: "0.9375rem"
    },
    md: {
      padding: "13px 24px",
      fontSize: "1.0625rem"
    },
    lg: {
      padding: "17px 34px",
      fontSize: "1.25rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-hand)",
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: "0.01em",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "var(--bd-ink) solid var(--line-ink)",
    borderRadius: "var(--radius-sketch)",
    background: "transparent",
    color: "var(--text-strong)",
    transition: "var(--t-hover)",
    opacity: disabled ? 0.4 : 1,
    WebkitTapHighlightColor: "transparent",
    ...sizes[size]
  };
  const variants = {
    outline: {},
    ink: {
      background: "var(--ink-900)",
      color: "var(--paper-100)",
      borderColor: "var(--ink-900)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--ink-900)",
      borderColor: "var(--ink-900)"
    },
    ghost: {
      border: "none",
      borderRadius: 0,
      padding: sizes[size].padding.split(" ").map((v, i) => i === 1 ? "2px" : v).join(" "),
      background: "transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "outline" ? {
    background: "var(--ink-900)",
    color: "var(--paper-100)"
  } : variant === "ghost" ? {} : {
    transform: "translateY(var(--hover-lift)) rotate(var(--hover-tilt))"
  } : {};
  const pressStyle = !disabled && down ? {
    transform: "scale(var(--press-scale))"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...pressStyle,
      ...style
    }
  }, rest), variant === "ghost" ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "-6px",
      height: "5px",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8' fill='none'%3E%3Cpath d='M2 5 C30 1 50 7 70 4 C90 1 105 6 118 3' stroke='%23E0A82E' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-base) var(--ease-soft)"
    }
  })) : children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      transition: "transform var(--dur-base) var(--ease-soft)",
      transform: hover ? "translateX(4px)" : "translateX(0)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a round drawn-outline button for a single icon/glyph.
 * Used for the info "ⓘ" marker, carousel arrows, the circular nav toggle.
 */
function IconButton({
  children,
  size = "md",
  variant = "outline",
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 48,
    lg: 60
  }[size];
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const variants = {
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-ink)"
    },
    ink: {
      background: "var(--ink-900)",
      color: "var(--paper-100)",
      borderColor: "var(--ink-900)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--ink-900)",
      borderColor: "var(--ink-900)"
    }
  };
  const hoverStyle = !disabled && hover ? variant === "outline" ? {
    background: "var(--ink-900)",
    color: "var(--paper-100)"
  } : {
    transform: "rotate(var(--hover-tilt))"
  } : {};
  const pressStyle = !disabled && down ? {
    transform: "scale(var(--press-scale))"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: dims * 0.42,
      fontFamily: "var(--font-hand)",
      border: "var(--bd-ink) solid",
      borderRadius: "50%",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--t-hover)",
      WebkitTapHighlightColor: "transparent",
      ...variants[variant],
      ...hoverStyle,
      ...pressStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small hand-drawn sketch pill. Categories, skills, filters.
 * The dot separator (·) echoes the "B2B · enterprise" eyebrow style.
 */
function Tag({
  children,
  variant = "outline",
  size = "md",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "3px 11px",
      fontSize: "0.8125rem"
    },
    md: {
      padding: "5px 14px",
      fontSize: "0.9375rem"
    }
  };
  const variants = {
    outline: {
      background: "var(--paper-000)",
      color: "var(--ink-800)",
      border: "var(--bd-fine) solid var(--line-ink)"
    },
    ink: {
      background: "var(--ink-900)",
      color: "var(--paper-100)",
      border: "var(--bd-fine) solid var(--ink-900)"
    },
    gold: {
      background: "var(--gold-200)",
      color: "var(--ink-900)",
      border: "var(--bd-fine) solid var(--ink-900)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-hand)",
      fontWeight: 600,
      lineHeight: 1.2,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/decor/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doodle — a single hand-drawn brand mark, inline as SVG so it inherits
 * `color` and can animate.
 * Marks: sparkle, star, squiggle, arrow, logo (path-based) and the object
 * doodles camera, frame, computer, bulb.
 * `draw` plays a stroke-reveal (line marks only); `wiggle` adds a hover wiggle.
 */
const PATHS = {
  sparkle: {
    vb: "0 0 100 100",
    fill: true,
    d: "M50 6 C54 30 70 46 94 50 C70 54 54 70 50 94 C46 70 30 54 6 50 C30 46 46 30 50 6 Z"
  },
  star: {
    vb: "0 0 60 60",
    fill: true,
    d: "M30 6 L34 26 L54 30 L34 34 L30 54 L26 34 L6 30 L26 26 Z"
  },
  squiggle: {
    vb: "0 0 240 24",
    fill: false,
    d: "M4 14 C40 4 60 20 96 12 C132 4 150 20 188 11 C210 6 226 13 236 9"
  },
  arrow: {
    vb: "0 0 120 80",
    fill: false,
    d: "M6 20 C30 10 30 60 52 56 C70 52 60 18 78 22 C96 26 92 60 110 50 M110 50 L98 44 M110 50 L104 62"
  },
  logo: {
    vb: "0 0 120 120",
    fill: false,
    d: "M60 14 C92 16 106 40 104 64 C102 92 78 108 54 104 C28 100 14 76 18 52 C21 32 38 18 60 16 M60 38 L60 82 M40 52 L80 70 M80 52 L40 70"
  },
  // object doodles (line, multi-element)
  camera: {
    vb: "0 0 100 80",
    inner: '<path d="M12 30 L30 30 L36 20 L64 20 L70 30 L88 30 Q94 30 94 36 L94 64 Q94 70 88 70 L12 70 Q6 70 6 64 L6 36 Q6 30 12 30 Z"/><circle cx="50" cy="50" r="15"/><circle cx="50" cy="50" r="7"/><circle cx="80" cy="38" r="2.4"/>'
  },
  frame: {
    vb: "0 0 90 90",
    inner: '<rect x="7" y="13" width="76" height="64" rx="3"/><path d="M18 60 L36 41 L48 53 L60 39 L72 60"/><circle cx="29" cy="32" r="5"/>'
  },
  computer: {
    vb: "0 0 100 88",
    inner: '<rect x="10" y="12" width="80" height="52" rx="4"/><path d="M42 64 L38 78 M58 64 L62 78 M32 78 L68 78"/>'
  },
  bulb: {
    vb: "0 0 64 90",
    inner: '<path d="M32 8 C17 8 9 20 9 32 C9 43 17 49 22 57 L42 57 C47 49 55 43 55 32 C55 20 47 8 32 8 Z"/><path d="M24 63 H40 M26 69 H38 M28 75 H36"/><path d="M26 40 L32 48 L38 40"/>'
  }
};
function Doodle({
  name = "sparkle",
  size = 32,
  color = "currentColor",
  strokeWidth = 3,
  draw = false,
  wiggle = false,
  style,
  ...rest
}) {
  const p = PATHS[name] || PATHS.sparkle;
  const [hover, setHover] = React.useState(false);
  const common = {
    viewBox: p.vb,
    width: size,
    height: size * heightRatio(p.vb),
    onMouseEnter: () => wiggle && setHover(true),
    onMouseLeave: () => wiggle && setHover(false),
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      color,
      overflow: "visible",
      animation: hover ? "sk-wiggle 0.5s var(--ease-spring)" : undefined,
      ...style
    },
    ...rest
  };

  // object doodles: geometry inherits stroke from the <svg>
  if (p.inner) {
    return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      dangerouslySetInnerHTML: {
        __html: p.inner
      }
    }));
  }
  return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
    d: p.d,
    fill: p.fill ? "currentColor" : "none",
    stroke: p.fill ? "none" : "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: draw && !p.fill ? {
      strokeDasharray: 600,
      strokeDashoffset: 600,
      animation: "sk-draw var(--dur-draw) var(--ease-soft) forwards"
    } : undefined
  }));
}
function heightRatio(vb) {
  const [,, w, h] = vb.split(" ").map(Number);
  return h / w;
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/decor/DottedGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DottedGrid — the signature graph-paper surface. Wrap any section to give it
 * the warm-paper dotted grid (or the dark "night" variant).
 */
function DottedGrid({
  tone = "light",
  as = "div",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const tones = {
    light: {
      backgroundColor: "var(--bg-page)",
      backgroundImage: "radial-gradient(var(--grid-dot) 1px, transparent 1px)"
    },
    dark: {
      backgroundColor: "var(--bg-page-dark)",
      backgroundImage: "radial-gradient(var(--grid-dot-dark) 1px, transparent 1px)",
      color: "var(--text-on-dark)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      backgroundSize: "var(--grid-size) var(--grid-size)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DottedGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/DottedGrid.jsx", error: String((e && e.message) || e) }); }

// components/decor/Sparkles.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sparkles — an ambient field of twinkling brand stars. Drop behind a hero
 * or dark "night" section. Purely decorative (aria-hidden). Stars are placed
 * deterministically from a seed so layout is stable across renders.
 */
function Sparkles({
  count = 28,
  color = "var(--sparkle)",
  minSize = 6,
  maxSize = 18,
  seed = 7,
  style,
  ...rest
}) {
  const stars = React.useMemo(() => {
    let s = seed * 9301 + 49297;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({
      length: count
    }, () => ({
      top: rnd() * 100,
      left: rnd() * 100,
      size: minSize + rnd() * (maxSize - minSize),
      delay: rnd() * 4,
      dur: 2.4 + rnd() * 2.6,
      gold: rnd() > 0.6
    }));
  }, [count, minSize, maxSize, seed]);
  const starMask = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 6 C54 30 70 46 94 50 C70 54 54 70 50 94 C46 70 30 54 6 50 C30 46 46 30 50 6 Z' fill='black'/%3E%3C/svg%3E\")";
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      ...style
    }
  }, rest), stars.map((st, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      top: `${st.top}%`,
      left: `${st.left}%`,
      width: `${st.size}px`,
      height: `${st.size}px`,
      background: st.gold ? color : "var(--sparkle-soft)",
      WebkitMaskImage: starMask,
      maskImage: starMask,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      animation: `sk-twinkle ${st.dur}s var(--ease-inout) ${st.delay}s infinite`
    }
  })));
}
Object.assign(__ds_scope, { Sparkles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/Sparkles.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — borderless, underline-only field (postcard style). Transparent
 * background; the underline is a drawn ink rule that turns gold on focus.
 * Supports a handwritten label and an optional "* required" note.
 */
function Input({
  label,
  required = false,
  type = "text",
  placeholder,
  multiline = false,
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: "1.0625rem",
    color: "var(--text-body)",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${focus ? "var(--gold-500)" : "var(--line-ink)"}`,
    borderRadius: 0,
    padding: "8px 2px",
    outline: "none",
    transition: "border-color var(--dur-base) var(--ease-soft)",
    resize: multiline ? "vertical" : "none"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px",
      font: "600 0.9375rem/1.2 var(--font-hand)",
      color: "var(--text-strong)",
      marginBottom: "6px"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 0.6875rem/1 var(--font-body)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--brick-500)"
    }
  }, "* required")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: 3,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — minimal, transparent top chrome. A small drawn logo mark on the
 * left, slash-separated handwriting links on the right. The active link wears
 * a gold hand-drawn underline; links grow an ink underline on hover.
 * Sits over any section; flip `tone` on dark backgrounds.
 */
function NavBar({
  items = [],
  active,
  brand = "logo",
  tone = "light",
  onNavigate,
  style,
  ...rest
}) {
  const ink = tone === "dark" ? "var(--paper-100)" : "var(--ink-900)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      padding: "20px 28px",
      color: ink,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]?.id);
    },
    style: {
      color: ink,
      display: "inline-flex",
      lineHeight: 0
    },
    "aria-label": "Home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Doodle, {
    name: brand,
    size: 40,
    wiggle: true
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    label: it.label,
    active: active === it.id,
    ink: ink,
    onClick: () => onNavigate && onNavigate(it.id)
  }), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: "600 1rem var(--font-hand)",
      opacity: 0.45
    }
  }, "/")))));
}
function NavLink({
  label,
  active,
  ink,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "2px 1px",
      font: "600 1.0625rem/1 var(--font-hand)",
      color: ink,
      letterSpacing: "0.01em",
      transition: "opacity var(--dur-base) var(--ease-soft)",
      opacity: hover || active ? 1 : 0.78
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "-7px",
      height: "5px",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8' fill='none'%3E%3Cpath d='M2 5 C30 1 50 7 70 4 C90 1 105 6 118 3' stroke='%23E0A82E' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      transform: active ? "scaleX(1)" : hover ? "scaleX(0.9)" : "scaleX(0)",
      transformOrigin: "left",
      opacity: active ? 1 : 0.8,
      transition: "transform var(--dur-base) var(--ease-soft)"
    }
  }));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a sketchbook surface. Two looks:
 *  - "photo": a taped/tilted photo with a handwritten file-name caption.
 *  - "sketch": an outlined project tile (drawn border, title, caption, ⓘ marker).
 * Depth comes from a slight tilt + the grid behind, not heavy shadow.
 */
function Card({
  variant = "sketch",
  image,
  title,
  caption,
  filename,
  tilt = "a",
  info = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tiltDeg = {
    a: "var(--tilt-a)",
    b: "var(--tilt-b)",
    c: "var(--tilt-c)",
    none: "0deg"
  }[tilt];
  if (variant === "photo") {
    return /*#__PURE__*/React.createElement("figure", _extends({
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: onClick,
      style: {
        margin: 0,
        width: "fit-content",
        transform: hover ? "rotate(0deg) translateY(-4px)" : `rotate(${tiltDeg})`,
        transition: "var(--t-hover)",
        cursor: onClick ? "pointer" : "default",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--paper-000)",
        padding: "10px 10px 12px",
        border: "var(--bd-fine) solid var(--line-ink)",
        boxShadow: hover ? "var(--shadow-tape)" : "var(--shadow-lift)",
        transition: "box-shadow var(--dur-base) var(--ease-soft)"
      }
    }, image && /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: title || filename || "",
      style: {
        display: "block",
        width: "100%",
        height: "auto",
        filter: "grayscale(0.15) contrast(1.02)"
      }
    }), children), filename && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        font: "var(--type-filename)",
        color: "var(--text-muted)",
        marginTop: "8px",
        paddingLeft: "2px"
      }
    }, filename));
  }

  // sketch tile
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "var(--bd-ink) solid var(--line-ink)",
      borderRadius: "var(--radius-sketch)",
      padding: "var(--pad-card)",
      transform: hover ? "translateY(var(--hover-lift))" : "translateY(0)",
      boxShadow: hover ? "var(--shadow-lift)" : "none",
      transition: "var(--t-hover)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), info && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "12px",
      right: "14px",
      width: "22px",
      height: "22px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "var(--bd-fine) solid var(--line-ink)",
      borderRadius: "50%",
      font: "600 0.75rem/1 var(--font-hand)"
    }
  }, "i"), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || "",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      border: "var(--bd-fine) solid var(--line-ink)",
      marginBottom: "16px",
      filter: "grayscale(0.15) contrast(1.02)"
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, title), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, caption), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/screens/About.jsx
try { (() => {
/* About — "Beyond pixels & prototypes" with taped travel photos and
   handwritten notes. Generous, scattered, sketchbook layout. */
const {
  Card,
  Doodle
} = window.SketchbookPortfolioDesignSystem_ff03c2;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "About",
    style: {
      minHeight: "100%",
      padding: "64px 6vw 96px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) clamp(2rem, 5vw, 3.4rem)/1.1 var(--font-hand)",
      color: "var(--text-strong)",
      textAlign: "center",
      maxWidth: "20ch",
      margin: "0 auto 16px"
    }
  }, "Beyond ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "pixels"), " & ", /*#__PURE__*/React.createElement("span", {
    className: "hl sky"
  }, "prototypes"), ", I love to explore"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)",
      textAlign: "center",
      maxWidth: "44ch",
      margin: "0 auto 48px"
    }
  }, "new places fuel my curiosity + excitement for life \u2014 here are a few of my favorites."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 44,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "photo",
    image: "../../assets/photo-1.png",
    filename: "rome-italy.jpeg",
    tilt: "b",
    style: {
      width: 230,
      marginTop: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      marginTop: 60
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "star",
    size: 26,
    color: "var(--brick-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "600 1.05rem/1.3 var(--font-hand)",
      color: "var(--text-strong)",
      textAlign: "center",
      maxWidth: "14ch"
    }
  }, "explore new places")), /*#__PURE__*/React.createElement(Card, {
    variant: "photo",
    image: "../../assets/photo-2.png",
    filename: "florence-italy.jpeg",
    tilt: "a",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "photo",
    image: "../../assets/photo-3.png",
    filename: "eze-france.jpeg",
    tilt: "c",
    style: {
      width: 240,
      marginTop: 40
    }
  })));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/screens/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/screens/Hero.jsx
try { (() => {
/* Hero — light paper "title card". A rotating handwritten statement with
   sketch pagination dots, an intro line, and a primary action. */
const {
  Button,
  Badge,
  Doodle,
  Sparkles
} = window.SketchbookPortfolioDesignSystem_ff03c2;
function Hero() {
  const lines = ["I love digital", "I draw, then build", "small, quiet, crafted"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % lines.length), 3400);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: "relative",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 24px 80px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    count: 22,
    seed: 11,
    color: "var(--gold-400)",
    minSize: 8,
    maxSize: 22,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    star: true,
    tone: "muted"
  }, "Designer \xA0\xB7\xA0 maker")), /*#__PURE__*/React.createElement("h1", {
    key: i,
    style: {
      font: "var(--fw-bold) clamp(2.8rem, 8vw, 5.5rem)/1.0 var(--font-hand)",
      color: "var(--text-strong)",
      margin: "0 0 8px",
      animation: "sk-rise var(--dur-slow) var(--ease-out)"
    }
  }, lines[i]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      maxWidth: "32ch",
      margin: "10px auto 0"
    }
  }, "I specialise in rich, interactive experiences for web, mobile and tablet \u2014 quiet work that invites a closer look."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    arrow: true
  }, "Learn more")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginTop: 34
    }
  }, lines.map((_, d) => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setI(d),
    "aria-label": `statement ${d + 1}`,
    style: {
      width: 13,
      height: 13,
      padding: 0,
      cursor: "pointer",
      borderRadius: "50%",
      border: "1.5px solid var(--line-ink)",
      background: d === i ? "var(--gold-500)" : "transparent",
      transition: "background var(--dur-base) var(--ease-soft)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 26,
      left: 28,
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "arrow",
    size: 56
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/screens/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/screens/Mark.jsx
try { (() => {
/* Mark — the closing "leave your mark" moment on a dark night sky.
   A real little doodle canvas; saved doodles join the gallery. No contact
   CTA / no contact info (brand capstone rule) — it invites participation. */
const {
  Button,
  IconButton,
  Badge,
  Doodle,
  Sparkles
} = window.SketchbookPortfolioDesignSystem_ff03c2;
function Mark() {
  const canvasRef = React.useRef(null);
  const drawing = React.useRef(false);
  const [gallery, setGallery] = React.useState([]);
  React.useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    ctx.scale(2, 2);
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#15120E";
  }, []);
  const pos = e => {
    const r = canvasRef.current.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return {
      x: p.clientX - r.left,
      y: p.clientY - r.top
    };
  };
  const start = e => {
    drawing.current = true;
    const ctx = canvasRef.current.getContext("2d");
    const {
      x,
      y
    } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };
  const move = e => {
    if (!drawing.current) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const {
      x,
      y
    } = pos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const end = () => {
    drawing.current = false;
  };
  const clear = () => {
    const c = canvasRef.current;
    c.getContext("2d").clearRect(0, 0, c.width, c.height);
  };
  const save = () => {
    const data = canvasRef.current.toDataURL();
    setGallery(g => [data, ...g].slice(0, 6));
    clear();
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Mark",
    style: {
      position: "relative",
      minHeight: "100%",
      backgroundColor: "var(--bg-page-dark)",
      backgroundImage: "radial-gradient(var(--grid-dot-dark) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      color: "var(--text-on-dark)",
      padding: "60px 6vw 90px",
      boxSizing: "border-box",
      textAlign: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    count: 40,
    seed: 2,
    minSize: 6,
    maxSize: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    star: true,
    tone: "onDark"
  }, "Leave your mark"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) clamp(2rem, 5vw, 3.2rem)/1.1 var(--font-hand)",
      color: "var(--paper-100)",
      margin: "14px 0 6px"
    }
  }, "add a doodle & be part of my portfolio :)"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-on-dark-muted)",
      maxWidth: "46ch",
      margin: "0 auto 30px"
    }
  }, "one of my favorite things about design is the creativity it sparks \u2014 so draw something."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    width: 640,
    height: 300,
    onMouseDown: start,
    onMouseMove: move,
    onMouseUp: end,
    onMouseLeave: end,
    onTouchStart: start,
    onTouchMove: move,
    onTouchEnd: end,
    style: {
      width: 320,
      height: 150,
      background: "var(--paper-000)",
      border: "3px solid var(--paper-100)",
      borderRadius: "var(--radius-sketch)",
      cursor: "crosshair",
      touchAction: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: clear,
    style: {
      color: "var(--paper-100)"
    }
  }, "clear"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: save
  }, "leave your doodle"))), gallery.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 40
    }
  }, gallery.map((d, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: d,
    alt: "doodle",
    style: {
      width: 116,
      height: 54,
      background: "var(--paper-000)",
      border: "1.5px solid var(--paper-300)",
      borderRadius: 4
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 22,
      color: "var(--paper-100)",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "logo",
    size: 42
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "info",
    variant: "outline",
    size: "sm",
    style: {
      borderColor: "var(--paper-100)",
      color: "var(--paper-100)"
    }
  }, "i")));
}
window.Mark = Mark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/screens/Mark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/screens/Resume.jsx
try { (() => {
/* Resume — an on-site resume view with a link out to the PDF version. */
const {
  Button,
  Badge,
  Card,
  Tag,
  Doodle
} = window.SketchbookPortfolioDesignSystem_ff03c2;
function Resume() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Resume",
    style: {
      minHeight: "100%",
      padding: "56px 6vw 90px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      maxWidth: 720,
      margin: "0 auto 28px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    star: true
  }, "Resume"), /*#__PURE__*/React.createElement(Doodle, {
    name: "squiggle",
    size: 110,
    color: "var(--gold-500)"
  })), /*#__PURE__*/React.createElement("a", {
    href: "../../assets/resume.pdf",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    arrow: true
  }, "View PDF"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: "var(--text-strong)",
      margin: "0 0 2px"
    }
  }, "Your Name"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)",
      margin: "0 0 4px"
    }
  }, "Designer & maker"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-fine)",
      margin: "20px 0",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Experience"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "8px 0 0"
    }
  }, "Product & interaction design \u2014 selected work: NestBeyond, FEU Tech Summit 3.0, Conversion Studio.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Education"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: "8px 0 0"
    }
  }, "B.S. in Design \u2014 placeholder. Swap in your own details."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "UX"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "UI"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "prototyping"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "illustration"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    variant: "gold"
  }, "design systems")))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      marginTop: 22
    }
  }, "prefer the printable version? the ", /*#__PURE__*/React.createElement("strong", null, "View PDF"), " link opens it in a new tab."));
}
window.Resume = Resume;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/screens/Resume.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/screens/Works.jsx
try { (() => {
/* Works — a grid of project cards (sketch tiles) with a section eyebrow.
   Hover straightens + lifts each card. */
const {
  Card,
  Tag,
  Badge,
  Doodle
} = window.SketchbookPortfolioDesignSystem_ff03c2;
const PROJECTS = [{
  title: "NestBeyond",
  caption: "Senior-living web platform · 2025",
  image: "../../assets/work-1.png",
  tags: ["web", "design"],
  featured: true
}, {
  title: "FEU Tech Summit 3.0",
  caption: "Event identity & site · dark",
  image: "../../assets/work-2.png",
  tags: ["brand", "web"]
}, {
  title: "Conversion Studio",
  caption: "Marketing site · senior living",
  image: "../../assets/work-3.png",
  tags: ["web"]
}];
function Works() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Works",
    style: {
      minHeight: "100%",
      padding: "64px 6vw 96px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    star: true
  }, "Selected work"), /*#__PURE__*/React.createElement(Doodle, {
    name: "squiggle",
    size: 120,
    color: "var(--gold-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 40,
      alignItems: "start"
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    title: p.title,
    caption: p.caption,
    image: p.image,
    info: true,
    tilt: ["a", "b", "c"][i % 3],
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 14
    }
  }, p.featured && /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    variant: "gold"
  }, "selected"), p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t)))))));
}
window.Works = Works;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/screens/Works.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.DottedGrid = __ds_scope.DottedGrid;

__ds_ns.Sparkles = __ds_scope.Sparkles;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

})();
