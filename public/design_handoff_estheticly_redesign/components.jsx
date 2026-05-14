/* global React */
const { useState, useRef, useEffect } = React;

/* ============ Icons (SF-style strokes) ============ */
const Icon = {
  home: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 12.2 13 4l9.5 8.2"/><path d="M5.5 11v9.2c0 .8.6 1.3 1.3 1.3h3.7v-5.5h5v5.5h3.7c.8 0 1.3-.5 1.3-1.3V11"/>
    </svg>
  ),
  prep: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h8l-1 5h-6L9 3Z"/><path d="M10 8c-2 3-3 6-3 9 0 3 2 6 6 6s6-3 6-6c0-3-1-6-3-9"/>
    </svg>
  ),
  aftercare: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 22s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z"/>
    </svg>
  ),
  faq: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="13" r="9"/><path d="M10 10.5a3 3 0 1 1 4.5 2.6c-.7.4-1.5.9-1.5 2"/><circle cx="13" cy="18" r="0.6" fill={c}/>
    </svg>
  ),
  book: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="18" height="16" rx="2.5"/><path d="M4 11h18M9 4v4M17 4v4"/>
    </svg>
  ),
  about: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="9" r="4"/><path d="M5 22c1.5-4 4.5-6 8-6s6.5 2 8 6"/>
    </svg>
  ),
  contact: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 6.5C5 5.7 5.7 5 6.5 5h3l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5L16 19l4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 25 1 15 1 7.5 1 6.7 1.7 6 2.5 6"/>
    </svg>
  ),
  mail: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="20" height="14" rx="2.5"/><path d="m4 8 9 6 9-6"/>
    </svg>
  ),
  phone: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5C5 4.7 5.7 4 6.5 4h3l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5L16 13l4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 19 5 13 5 5.5Z"/>
    </svg>
  ),
  pin: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="13" cy="10" r="2.5"/>
    </svg>
  ),
  clock: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="13" r="9"/><path d="M13 8v5l3 2"/>
    </svg>
  ),
  ig: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="18" height="18" rx="5"/><circle cx="13" cy="13" r="4"/><circle cx="18.5" cy="7.5" r=".8" fill={c} stroke="none"/>
    </svg>
  ),
  fb: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 13H14v8h-3v-8H9v-3h2V8.2c0-2 1.2-3.2 3.4-3.2H17v3h-1.5c-.8 0-1 .4-1 1v1h2.5l-.5 3Z"/>
    </svg>
  ),
  spark: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3v6M13 17v6M3 13h6M17 13h6M6 6l4 4M16 16l4 4M20 6l-4 4M10 16l-4 4"/>
    </svg>
  ),
  leaf: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 5c-9 0-15 5-15 12 0 2 1 4 2.5 4.5C9 13 14 8 21 5Z"/><path d="M5 21C8 14 14 8 21 5"/>
    </svg>
  ),
  giftcard: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="20" height="14" rx="2"/><path d="M3 12h20M13 7v14M9 7c-2 0-3-1.5-3-2.5S7 3 8 3.5 13 7 13 7s3.5-3 4.5-3.5S20 3.5 20 4.5 19 7 17 7"/>
    </svg>
  ),
  drop: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z"/>
    </svg>
  ),
  check: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 5 5L21 7"/>
    </svg>
  ),
  share: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4v12M8 9l5-5 5 5"/><path d="M5 13v6.5C5 20.3 5.7 21 6.5 21h13c.8 0 1.5-.7 1.5-1.5V13"/>
    </svg>
  ),
  close: (c="currentColor") => (
    <svg viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
      <path d="m7 7 12 12M19 7 7 19"/>
    </svg>
  ),
  cog: (c="currentColor") => (
    <svg viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="3"/>
      <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.6 4.6l1.4 1.4M16 16l1.4 1.4M4.6 17.4 6 16M16 6l1.4-1.4"/>
    </svg>
  ),
};

/* ============ Status Bar ============ */
function StatusBar() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s?(AM|PM)/i, '');
  });
  useEffect(() => {
    const i = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s?(AM|PM)/i, ''));
    }, 30000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="status-bar">
      <span>{time}</span>
      <div className="right">
        <div className="signal-dots"><span/><span/><span/><span/></div>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 2.2c1.7 0 3.3.6 4.6 1.7l1.1-1.2A8.5 8.5 0 0 0 8 .5 8.5 8.5 0 0 0 2.3 2.7l1.1 1.2A6.7 6.7 0 0 1 8 2.2Z" fill="currentColor"/>
          <path d="M8 5.5c.9 0 1.7.3 2.4.9l1.1-1.2A5.4 5.4 0 0 0 8 3.7c-1.4 0-2.6.5-3.5 1.5l1.1 1.2A3.7 3.7 0 0 1 8 5.5Z" fill="currentColor"/>
          <circle cx="8" cy="8.7" r="1.5" fill="currentColor"/>
        </svg>
        <div className="battery"><div className="fill"/></div>
      </div>
    </div>
  );
}

/* ============ Nav Bar ============ */
function NavBar({ title, leftLabel, onBack, scrolled, right }) {
  return (
    <div className={"nav-bar" + (scrolled ? " scrolled" : "")}>
      <div style={{ display:'flex', alignItems:'center' }}>
        {onBack && (
          <button className="nav-button" onClick={onBack} aria-label="Back">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2 2 10l8 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ marginLeft: 2 }}>{leftLabel || 'Back'}</span>
          </button>
        )}
      </div>
      <div className="nav-title">{title}</div>
      <div>{right}</div>
    </div>
  );
}

/* ============ List Row ============ */
function ListRow({ leading, leadingColor, title, subtitle, trailing, onClick, chevron = true, noLeading }) {
  return (
    <div className={"list-row" + (noLeading ? " no-leading" : "")} onClick={onClick}>
      {leading && (
        <div className="leading" style={{ background: leadingColor || 'var(--tint)' }}>
          {leading}
        </div>
      )}
      <div className="body">
        <div className="title">{title}</div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
      <div className="trailing">
        {trailing}
        {chevron && <span className="chevron"/>}
      </div>
    </div>
  );
}

/* ============ Disclosure (Accordion) ============ */
function Disclosure({ summary, children, defaultOpen=false }) {
  return (
    <details className="disclosure" open={defaultOpen}>
      <summary className="disclosure-summary">
        <span style={{ flex: 1 }}>{summary}</span>
        <span className="disclose-icon"/>
      </summary>
      <div className="disclosure-content">{children}</div>
    </details>
  );
}

/* ============ Sheet ============ */
function Sheet({ open, onClose, title, children }) {
  return (
    <React.Fragment>
      <div className={"sheet-backdrop" + (open ? " open" : "")} onClick={onClose}/>
      <div className={"sheet" + (open ? " open" : "")}>
        <div className="sheet-handle"/>
        <div className="sheet-header">
          <span style={{ width: 60 }}/>
          <div className="sheet-title">{title}</div>
          <button className="nav-button" onClick={onClose} style={{ minWidth:60 }}>Done</button>
        </div>
        <div className="sheet-body">{children}</div>
      </div>
    </React.Fragment>
  );
}

/* ============ Segmented Control ============ */
function Segmented({ options, value, onChange }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (!ref.current) return;
    const idx = options.findIndex(o => o.value === value);
    const w = 100 / options.length;
    setStyle({
      width: `calc(${w}% - 4px)`,
      transform: `translateX(calc(${idx * 100}% + ${idx * 4}px))`,
      left: 2,
    });
  }, [value, options]);
  return (
    <div className="segmented" ref={ref}>
      <div className="indicator" style={style}/>
      {options.map(o => (
        <button key={o.value} onClick={() => onChange(o.value)} style={{ color: o.value === value ? 'var(--label)' : 'var(--label-secondary)' }}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* Export */
Object.assign(window, { Icon, StatusBar, NavBar, ListRow, Disclosure, Sheet, Segmented });
