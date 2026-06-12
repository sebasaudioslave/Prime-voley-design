# Handoff: Prime Voley Design System

## Qué es
Sistema de identidad visual + herramientas de admin para **Prime Voley Club** (voleibol competitivo, Zipaquirá).

## Estructura del repo

```
assets/           → Logo escudo, isotipo SVG, jersey de referencia
components/       → Componentes React (club-web: Header, Hero, Sections)
  club-web/
documents/        → Documentos HTML del club (Actas, Estatutos, Formularios, Solicitudes)
docs/             → Este archivo + documentación
export/           → Exportaciones PNG/HTML generadas
preview/          → Cards del Design System (solo referencia visual)
recibos/          → Plantilla A5 + recibos generados (001–009)
scraps/           → Internos, no usar
uploads/          → Archivos originales subidos, no usar
colors_and_type.css → Tokens globales de color y tipografía
README.md         → Manual de identidad y convenciones (leer primero)
```

## Lo que existe

### Brand
- **Logo escudo**: `assets/escudo-prime.png` (gorila + escudo, PNG transparente, 1448×1086)
- **Isotipo**: `assets/isotipo-prime.svg` (arco y flecha dorado, usar <80px)
- **Wordmark**: "PRIME VOLEY" — Barlow Condensed, blanco + dorado
- **Colores**: Carbon `#0E0F13` · Gold `#C9A84C` · Purple `#4C3B9A` · White `#F2F2F2`
- **Tipografía**: Barlow Condensed (headlines) · Space Grotesk (body)
- **Iconos**: Lucide CDN — stroke, 2px, dorado/blanco. Sin emoji.

### Herramientas
- **Recibos A5**: `recibos/plantilla-recibo.html` + generados 001–009
  - Folio: `PV · YYMMDD · [método] · NNN`
  - Métodos: **N** Nequi · **E** Efectivo · **D** Davivienda · **T** Transferencia
  - Tipos: "Recibo de Pago" (completo, sello PAGADO) / "Recibo de Abono" (parcial + saldo pendiente)
- **Documentos**: `documents/` — Actas, Estatutos, Formularios, Solicitudes (HTML → PDF)

### Design System
- **Tokens**: `colors_and_type.css` — colores, tipografía, espaciado
- **Cards visuales**: `preview/` — brand, colores, tipo, componentes, spacing
- **Normas de logo**: `preview/brand-logo-standards.html`
- **Convenciones completas**: `README.md`

## Para Claude Code
**Leer `README.md` primero** — tiene todo: paleta, tipografía, iconos, convención de recibos.

Los HTML en este repo son **referencias de diseño**, no código de producción. Recrearlos en el stack real usando los tokens de `colors_and_type.css`.

**Prioridades sugeridas:**
1. Dashboard admin — crear, buscar y exportar recibos
2. Sitio web del club — landing + sección miembros
3. App mobile — check-in, estadísticas, pagos

---

**Repo**: https://github.com/sebasaudioslave/Prime-voley-design.git
