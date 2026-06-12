/* global React, Eyebrow, Btn, Chip, Icon, NumberTile, Stat */
// Prime Voley · club-web — content sections

function SectionHead({ eyebrow, title, action }) {
  return (
    <div className="pv-sechead">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="pv-sectitle">{title}</h2>
      </div>
      {action && <a className="pv-seclink" href="#">{action} <Icon name="arrow-right" size={15} /></a>}
    </div>
  );
}

// ---- Resultados (recent results) ----
function Results() {
  const data = [
    { vs: "Cóndores", us: 3, them: 0, win: true, sets: "25–18 · 25–22 · 25–19", when: "07 JUN" },
    { vs: "Halcones B", us: 3, them: 1, win: true, sets: "25–21 · 23–25 · 25–17 · 25–19", when: "31 MAY" },
    { vs: "Titanes", us: 2, them: 3, win: false, sets: "25–22 · 20–25 · 25–18 · 22–25 · 12–15", when: "24 MAY" },
  ];
  return (
    <section className="pv-section" id="resultados">
      <SectionHead eyebrow="Forma reciente" title="Resultados" action="Todos los partidos" />
      <div className="pv-results">
        {data.map((m, i) => (
          <article key={i} className={"pv-result" + (m.win ? " is-win" : "")}>
            <div className="pv-result-top">
              <span className="pv-result-tag">{m.win ? "Victoria" : "Derrota"}</span>
              <span className="pv-result-when">{m.when}</span>
            </div>
            <div className="pv-result-score">
              <span className="pv-result-us">PRIME</span>
              <span className="pv-result-nums"><b>{m.us}</b><i>–</i><b>{m.them}</b></span>
              <span className="pv-result-vs">{m.vs}</span>
            </div>
            <div className="pv-result-sets">{m.sets}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---- Roster ----
function Roster() {
  const players = [
    { n: "7", nm: "D. Rojas", pos: "Opuesto", initials: "DR" },
    { n: "3", nm: "M. Salas", pos: "Armador", initials: "MS" },
    { n: "12", nm: "K. Pérez", pos: "Central", initials: "KP" },
    { n: "9", nm: "A. Niño", pos: "Líbero", initials: "AN" },
    { n: "5", nm: "J. Quiroga", pos: "Punta", initials: "JQ" },
    { n: "21", nm: "S. Mora", pos: "Central", initials: "SM" },
  ];
  return (
    <section className="pv-section" id="equipo">
      <SectionHead eyebrow="Plantel 2026" title="El Roster" action="Conoce al equipo" />
      <div className="pv-roster">
        {players.map((p, i) => (
          <article key={i} className="pv-player">
            <div className="pv-player-num">{p.n}</div>
            <div className="pv-player-body">
              <span className="pv-player-nm">{p.nm}</span>
              <span className="pv-player-pos">{p.pos}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---- Calendario (schedule) ----
function Schedule() {
  const fix = [
    { d: "14", mo: "JUN", vs: "Halcones", home: true, time: "7:00 p.m.", venue: "Polideportivo Zipaquirá" },
    { d: "21", mo: "JUN", vs: "Titanes", home: false, time: "5:30 p.m.", venue: "Coliseo Chía" },
    { d: "28", mo: "JUN", vs: "Cóndores", home: true, time: "7:00 p.m.", venue: "Polideportivo Zipaquirá" },
  ];
  return (
    <section className="pv-section" id="calendario">
      <SectionHead eyebrow="Temporada 2026" title="Calendario" action="Calendario completo" />
      <div className="pv-schedule">
        {fix.map((f, i) => (
          <article key={i} className="pv-fixture">
            <div className="pv-fix-date"><b>{f.d}</b><span>{f.mo}</span></div>
            <div className="pv-fix-main">
              <span className="pv-fix-vs">Prime <i>vs.</i> {f.vs}</span>
              <span className="pv-fix-venue"><Icon name="map-pin" size={13} /> {f.venue}</span>
            </div>
            <div className="pv-fix-meta">
              <span className={"pv-fix-loc " + (f.home ? "home" : "away")}>{f.home ? "Local" : "Visitante"}</span>
              <span className="pv-fix-time">{f.time}</span>
            </div>
            <Btn variant="secondary" icon="ticket">Entradas</Btn>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---- Tryouts CTA ----
function Tryouts({ onJoin }) {
  return (
    <section className="pv-cta" id="club">
      <image-slot id="pv-cta-photo" className="pv-cta-photo" shape="rect" fit="cover"
        placeholder="Foto de entrenamiento (fría, alto contraste)"></image-slot>
      <div className="pv-cta-grad"></div>
      <div className="pv-cta-inner">
        <Eyebrow>Pruebas abiertas · Sub-17 / Sub-19 / Mayores</Eyebrow>
        <h2 className="pv-cta-title">¿TIENES LA<br /><em>OBSESIÓN?</em></h2>
        <p className="pv-cta-sub">Entrena con estándar de élite. Disciplina, técnica y garra — el club busca a los que no se conforman.</p>
        <div className="pv-cta-stats">
          <Stat value="48" label="Atletas" accent />
          <Stat value="6" label="Categorías" />
          <Stat value="3" label="Títulos · 2025" accent />
        </div>
        <Btn variant="primary" icon="arrow-right" onClick={onJoin}>Reserva tu prueba</Btn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pv-footer">
      <div className="pv-footer-top">
        <Wordmark size={20} />
        <div className="pv-footer-social">
          <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
          <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
          <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
        </div>
      </div>
      <div className="pv-footer-bottom">
        <span>Club de Voleibol · Zipaquirá, Cundinamarca</span>
        <span>© 2026 Prime Voley</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Results, Roster, Schedule, Tryouts, Footer });
