/* global React, Eyebrow, Btn, Chip, Icon */
// Prime Voley · club-web — hero with next-match panel
function Hero({ onJoin }) {
  return (
    <section className="pv-hero">
      <image-slot
        id="pv-hero-photo"
        className="pv-hero-photo"
        shape="rect"
        fit="cover"
        placeholder="Arrastra una foto del equipo (atlética, fría, alto contraste)"
      ></image-slot>
      <div className="pv-hero-grad"></div>
      <div className="pv-hero-pinstripe"></div>

      <div className="pv-hero-content">
        <div className="pv-hero-left">
          <Eyebrow>Temporada 2026 · Liga Cundinamarca</Eyebrow>
          <h1 className="pv-hero-title">
            DISCIPLINA<br />SOBRE LA<br /><em>RED</em>
          </h1>
          <p className="pv-hero-sub">
            Club de voleibol competitivo en Zipaquirá. Potencia, técnica y garra —
            formamos atletas de élite con estándar profesional.
          </p>
          <div className="pv-hero-actions">
            <Btn variant="primary" icon="arrow-right" onClick={onJoin}>Reserva tu prueba</Btn>
            <Btn variant="secondary" icon="play">Ver el equipo</Btn>
          </div>
        </div>

        <aside className="pv-nextmatch">
          <div className="pv-nextmatch-top">
            <Chip tone="gold">Próximo partido</Chip>
            <span className="pv-nextmatch-when">SÁB 14 JUN</span>
          </div>
          <div className="pv-nextmatch-vs">
            <div className="pv-nm-team">
              <span className="pv-nm-name is-home">PRIME</span>
              <span className="pv-nm-tag">Local</span>
            </div>
            <span className="pv-nm-x">VS</span>
            <div className="pv-nm-team pv-nm-right">
              <span className="pv-nm-name">HALCONES</span>
              <span className="pv-nm-tag">Visitante</span>
            </div>
          </div>
          <div className="pv-nextmatch-meta">
            <span><Icon name="map-pin" size={14} /> Polideportivo Zipaquirá</span>
            <span><Icon name="clock" size={14} /> 7:00 p.m.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
window.Hero = Hero;
