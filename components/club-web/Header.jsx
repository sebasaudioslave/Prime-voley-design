/* global React, Icon, Wordmark, Btn */
// Prime Voley · club-web — sticky header / nav
function Header({ active, onNav, onJoin }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: "equipo", label: "Equipo" },
    { id: "calendario", label: "Calendario" },
    { id: "resultados", label: "Resultados" },
    { id: "club", label: "El Club" },
  ];
  return (
    <header className="pv-header">
      <div className="pv-header-inner">
        <a className="pv-brand" href="#" onClick={(e) => { e.preventDefault(); onNav("inicio"); }}>
          <Wordmark size={22} />
        </a>
        <nav className="pv-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={"pv-nav-link" + (active === l.id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); onNav(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="pv-header-cta">
          <Btn variant="primary" icon="arrow-right" onClick={onJoin}>Pruebas</Btn>
          <button className="pv-burger" onClick={() => setOpen(!open)} aria-label="Menú">
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>
      {open && (
        <div className="pv-mobile-nav">
          {links.map((l) => (
            <a key={l.id} href={"#" + l.id}
              onClick={(e) => { e.preventDefault(); onNav(l.id); setOpen(false); }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
window.Header = Header;
