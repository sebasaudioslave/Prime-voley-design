/* global React */
// Prime Voley · club-web UI kit — shared primitives
const { useState, useEffect, useRef } = React;

// --- Lucide icon wrapper (stroke icons, 2px, technical) ---
function Icon({ name, size = 20, color, strokeWidth = 2, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    ref.current.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, "stroke-width": strokeWidth },
      nameAttr: "data-lucide",
    });
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      style={{ display: "inline-flex", color: color || "currentColor", lineHeight: 0, ...style }}
    />
  );
}

// --- Prime isotype: Greek laurel crown + Olympic flame (logo stand-in) ---
function PrimeMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-label="Prime Voley">
      <path d="M60 24 C 52 36, 48 44, 51 54 C 45 52, 43 46, 43 46 C 40 56, 48 70, 60 70 C 72 70, 78 58, 74 47 C 72 40, 64 36, 60 24 Z" fill="#C9A84C" />
      <path d="M60 40 C 56 48, 55 56, 60 63 C 66 57, 65 47, 60 40 Z" fill="#4C3B9A" />
      <g stroke="#C9A84C" strokeWidth="3.5" fill="none" strokeLinecap="round">
        <path d="M50 98 C 26 90, 18 60, 30 34" />
        <path d="M70 98 C 94 90, 102 60, 90 34" />
      </g>
      <g fill="#C9A84C">
        <ellipse cx="33" cy="46" rx="7.5" ry="3.4" transform="rotate(-76 33 46)" />
        <ellipse cx="24" cy="60" rx="8" ry="3.6" transform="rotate(-62 24 60)" />
        <ellipse cx="23" cy="74" rx="8" ry="3.6" transform="rotate(-44 23 74)" />
        <ellipse cx="28" cy="87" rx="7.5" ry="3.4" transform="rotate(-26 28 87)" />
        <ellipse cx="87" cy="46" rx="7.5" ry="3.4" transform="rotate(76 87 46)" />
        <ellipse cx="96" cy="60" rx="8" ry="3.6" transform="rotate(62 96 60)" />
        <ellipse cx="97" cy="74" rx="8" ry="3.6" transform="rotate(44 97 74)" />
        <ellipse cx="92" cy="87" rx="7.5" ry="3.4" transform="rotate(26 92 87)" />
      </g>
    </svg>
  );
}

// --- Typographic wordmark / logo lockup ---
function Wordmark({ size = 22, mark = true }) {
  return (
    <span className="pv-wordmark" style={{ "--wm": size + "px" }}>
      {mark && <PrimeMark size={size * 1.6} />}
      <span className="pv-wm-text">
        <span className="pv-wm-p">PRIME</span>
        <span className="pv-wm-v">VOLEY</span>
      </span>
    </span>
  );
}

function Eyebrow({ children, className = "" }) {
  return <span className={"pv-eyebrow " + className}>{children}</span>;
}

function Btn({ children, variant = "primary", icon, onClick, type = "button", full }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"pv-btn pv-btn-" + variant + (full ? " pv-btn-full" : "")}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

function Chip({ children, tone = "neutral" }) {
  return <span className={"pv-chip pv-chip-" + tone}>{children}</span>;
}

function Stat({ value, label, accent }) {
  return (
    <div className="pv-stat">
      <span className="pv-stat-v" style={accent ? { color: "var(--gold)" } : null}>{value}</span>
      <span className="pv-stat-l">{label}</span>
    </div>
  );
}

// jersey-number tile (player avatar stand-in — no photo needed)
function NumberTile({ n, initials, size = 64 }) {
  return (
    <div className="pv-numtile" style={{ width: size, height: size }}>
      <span className="pv-numtile-n">{n}</span>
      {initials && <span className="pv-numtile-i">{initials}</span>}
    </div>
  );
}

Object.assign(window, { Icon, PrimeMark, Wordmark, Eyebrow, Btn, Chip, Stat, NumberTile });
