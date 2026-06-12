# PRIME VOLEY CLUB — Design System

> **Club de voleibol competitivo · Zipaquirá, Cundinamarca, Colombia** Brand essence: **black with a gold edge and purple precision.** Aggressive technical excellence — powerful but disciplined.

This repository is the visual identity system for **Prime Voley Club**. It contains the brand's colors, typography, assets, tone-of-voice rules, reusable CSS foundations, and high-fidelity UI-kit + slide recreations so any designer (human or agent) can produce on-brand work.

---

## 1. What Prime is

Prime is a **competitive volleyball club** based in **Zipaquirá**, a city just north of Bogotá, Colombia. The brand is built for an athletic, high-performance audience: players, families, sponsors, and rivals. It is **not** a casual rec-league look. Every element is meant to feel **premium, dark, athletic, and technically precise** — closer to a pro football club's identity kit than a community-sports flyer.

The visual world is anchored by a **gorilla mascot on a diamond shield**: a black gorilla, dark-purple shield field, gold borders, white **"PRIME"** and gold **"VOLEY"** lettering. The exact color balance follows the **adidas Manchester United "Icons"** jersey (black base · gold authority stripes · thin purple pinstripes) — that jersey is included as the canonical reference for proportion and restraint.

### Surfaces this system supports

- **Club web / fan surface** — schedule, roster, results, tryouts, store teaser. (See `ui_kits/club-web/`.)
- **Match-day & social graphics** — scoreboards, lineup cards, result posts. (See `slides/`.)
- Future: player app, sponsor decks — extend from the same foundations.

---

## 2. Sources & references provided

> Keep these on file even though the reader may not have access.

- **`assets/escudo-prime.png`** ✅ — **logo oficial del club** (escudo gorila, PNG 1448×1086, fondo transparente). Es la **marca primaria**: gorila negro sobre escudo morado con bordes dorados, tipografía «PRIME» blanca / «VOLEY» dorada. Úsalo en camisetas, documentos oficiales, presentaciones y formatos grandes. Ya no se usa el wordmark tipográfico como stand-in — el escudo real está disponible.
- **`uploads/camiseta_Icons_Manchester_United_Negro_JN2818_HM1.avif`** — the reference jersey (adidas × Man Utd Icons, black/gold/purple). Canonical color-balance reference. Copied to `assets/jersey-reference.avif`.
- **Written brand manual** (provided in the brief) — color hierarchy, type, personality.

---

## 3. Brand color hierarchy (STRICT)

The percentages are a **discipline**, not a suggestion. The brand is **black-dominant**; gold is authority; purple is precision and lives only in details; white is for reading.

| Token | Hex | Share | Role |
| --- | --- | --- | --- |
| **Carbon Black** | `#15161C` | **84%** | Backgrounds, base, dominant territory |
| **Royal Gold** | `#C9A84C` | **8%** | Authority — borders, stripes, key details, shield edges, callouts |
| **Technical Purple** | `#4C3B9A` | **5%** | Precision — thin lines, pinstripes, textures, subtle energy |
| **Functional White** | `#F2F2F2` | **3%** | Readability only — body text, data, fine print |

> **The brand is black with a gold edge and purple precision — NOT "purple-and-black."** If a layout reads as purple, it's wrong. Purple never fills areas; it draws lines.

Full ramps and semantic tokens live in **`colors_and_type.css`**.

---

## 4. Typography

| Role | Family | Usage |
| --- | --- | --- |
| **Display / Headlines** | **Barlow Condensed** ExtraBold/Black | ALL CAPS, condensed, tight leading. Club name, tournament titles, jersey numbers, big callouts. |
| **Body / Supporting** | **Space Grotesk** | Descriptions, labels, data, captions. Modern, technical, clean. |

- Display is **always uppercase**, heavy weight (800–900), nearly solid leading (0.92–1.0).
- Eyebrow labels: Space Grotesk 700, uppercase, **heavy letter-spacing (0.22em)**, gold.
- Data/stats: Space Grotesk 600 with `tabular-nums`.

> ⚠️ Fonts are loaded from **Google Fonts CDN** (`@import` in `colors_and_type.css`). Both are free Google Fonts and match the brief exactly — no substitution. If you need offline TTFs, ask and I'll vendor them into `fonts/`.

---

## 5. CONTENT FUNDAMENTALS — how Prime writes

**Voice: aggressive technical excellence. Disciplined, confident, never cute.** The club speaks like a high-performance program, not a neighborhood team.

- **Language:** primarily **Spanish (Colombian)**, the club's real language. English may appear for short sport terms ("set", "match point") but default to Spanish. Keep a bilingual-ready structure in components (labels are short enough to swap).
- **Person:** addresses the athlete/fan directly with collective pride — **"nosotros / el club"** and an aspirational **"tú"** for calls to action ("Entrena con Prime", "Únete"). Avoid corporate "we value…" filler.
- **Casing:** **Display is ALL CAPS, always.** Body is sentence case. Labels/eyebrows are ALL CAPS, tracked. Never Title Case Every Word — it reads soft.
- **Tone words:** *disciplina, potencia, precisión, técnica, élite, garra.* Short. Declarative. Command-form verbs for CTAs.
- **Numbers & data are heroes.** Scores, set counts, jersey numbers, rankings get the display face at large size. Stats are stated flatly and confidently — no exclamation marks.
- **No emoji.** The brand is premium and serious; emoji break it. (Exception: none.)
- **Punctuation:** minimal. Em-dashes and thin separators (·, /, —) over chatty commas.

**Examples (on-brand):**

- Eyebrow: `TEMPORADA 2026 · ZIPAQUIRÁ`
- Headline: `PRIME DERROTA A SUS RIVALES 3–0`
- CTA: `RESERVA TU PRUEBA`
- Caption: `Polideportivo Zipaquirá · Cancha central · 7:00 p.m.`
- Stat block: `34 PUNTOS / 8 BLOQUEOS / 5 ACES`

**Off-brand (avoid):** "¡Ven a jugar vóley con nosotros! 🏐😄", soft Title Case, hedging copy, pastel friendliness, exclamation spam.

---

## 6. VISUAL FOUNDATIONS

**Overall vibe:** a dark, technical equipment-kit. Think jersey tech-pack and pro scoreboard, not poster. Carbon black fields, gold hairlines doing the structural work, purple pinstripes adding precision energy, white reserved for legibility. Sharp, engineered, restrained.

- **Backgrounds:** dominant **Carbon Black** (`#15161C`). Two background tones max per surface: the base (`--carbon-800`) and a raised surface (`--carbon-700`). Optional signature texture: **thin vertical purple pinstripes** (`--pinstripe`) at low opacity, or a single trio of **gold authority stripes** anchored to an edge. No photographic gradients, no glow soup.
- **Imagery:** athletic photography rendered **cool and slightly desaturated**, pushed toward the carbon shadow — high-contrast, moody, a touch of grain is welcome. Never warm/sunny. Full-bleed photos sit behind a carbon **protection gradient** (bottom-up `--carbon-900` → transparent) so white text stays legible. Use the `image-slot` placeholders for real photos.
- **Borders:** the workhorse. **Gold hairline (1px) borders** mark authority and frame key cards/callouts. Neutral dividers use `--carbon-500` or a white ghost hairline. Purple appears as **1px precision lines / pinstripes**, never as fills.
- **Corner radii:** **sharp and athletic.** Default `--r-sm` (2px) to `--r-md` (4px). Cards rarely exceed `--r-lg` (8px). Pills (`--r-pill`) only for status chips/tags. When in doubt, sharper.
- **Cards:** carbon-700 surface, 1px border (`--carbon-500`), optional **gold top-edge accent** (2px) for "authority" cards. Subtle shadow (`--shadow-md`). A featured card gets the `--glow-gold` ring. No heavy drop shadows, no soft rounded "friendly" cards.
- **Shadows / elevation:** restrained, near-black, tight. `--shadow-sm/md/lg`. Gold gets a faint glow (`--glow-gold`) only on hero/active elements. Avoid colored ambient shadows elsewhere.
- **Stripes & diamonds — signature motifs:** the **gold 3-stripe** (adidas energy) anchored to a corner/edge; the **diamond/shield** silhouette echoing the logo; **vertical pinstripes** as texture. Used sparingly, always as accents framing the carbon field.
- **Controls / diagramming (VNL-aligned):** product UI — **tabs, buttons, dropdowns, status tags** — are **clean rounded rectangles** (`--r-control` 7px / `--r-button` 8px), never pills and never skewed. The active tab/button is **gold-filled with carbon text**; secondary controls are a **1.5px outline**. Dropdown filters carry a small **gold caret**; sub-navigation uses an **underline indicator** (2.5px gold) rather than a filled pill; toggles are standard switches. This is the real broadcast-volleyball product vocabulary (Volleyball World / VNL) — crafted and functional, not decorative. (An earlier skewed-parallelogram pass was rejected as generic — do not reintroduce it.)
- **Hover states:** surfaces lighten one step (`--carbon-700 → --carbon-600`); gold elements go to `--gold-bright`; gold hairlines thicken/brighten. Subtle, fast.
- **Press / active:** slight scale-down (\~0.98) + gold deepens to `--gold-deep`. Crisp, no bounce.
- **Focus:** 2px `--purple-bright` ring offset from carbon (`--glow-focus`) — purple earns its keep as the precision/interaction color.
- **Transparency & blur:** sparing. Used for protection gradients over photos and for ghost hairlines (`--white-ghost`). Light backdrop-blur acceptable on sticky headers over photos.
- **Motion:** disciplined and quick. `--dur` 200ms, `--ease-out` for entrances, `--ease-sharp` for state changes. Fades and short translates only — **no bounces, no playful springs.**
- **Layout:** strict **4px grid**. Generous negative space on carbon. Strong left alignment; display type set in tight stacked blocks. Fixed elements (headers/scorebars) get a hairline bottom border and a whisper of blur.

---

## 7. ICONOGRAFÍA Y LOGO

### Sistema de marca (jerarquía)

En un manual de identidad visual profesional, el logo tiene variantes para distintos usos. Prime cuenta actualmente con las siguientes piezas:

| Pieza | Archivo | Estado | Uso |
| --- | --- | --- | --- |
| **Escudo completo** (marca primaria) | `assets/escudo-prime.png` | ✅ Disponible | Camisetas, documentos, formatos ≥ 80px, presentaciones |
| **Wordmark tipográfico** | `assets/wordmark.html` | ✅ Disponible | Alternativa textual, headers web, contextos de bajo contraste |
| **Isotipo** (arco y flecha) | `assets/isotipo-prime.svg` | ✅ Disponible | App icon, avatar, favicon, bordado, uso ≤ 64px, headers de documentos |

> **¿Por qué hace falta un isotipo?** El escudo gorila tiene muchísimo detalle — a tamaños pequeños (app icon, avatar de Instagram, bordado) los detalles se pierden y se vuelve ilegible. El isotipo oficial es un **arco y flecha** en Royal Gold (`assets/isotipo-prime.svg`). Usarlo por debajo de 80px donde el escudo pierde legibilidad. Mínimo 24px. Normas de uso completas en `preview/brand-logo-standards.html`.

### Iconos UI

- **Set de trabajo: [Lucide](https://lucide.dev) via CDN** — elegido por su geometría de trazo limpio y técnico (2px uniforme), coherente con la personalidad disciplinada de la marca. Vinculado desde CDN en los UI kits. **⚠️ Sustitución, no asset de marca** — actualizar si el club adopta su propio set.
  - Solo outline, 2px, puntas cuadradas. Color `--white-dim` por defecto, `--gold` cuando activo/enfatizado. Nunca multicolor, nunca rellenos redondeados.
  - Tamaños: 16 / 20 / 24px. Peso óptico consistente con la tipografía.
- **Sin emoji.** Nunca. (Ver §5.)
- **Unicode como conectores/marcas:** `·` separador, `/` divisor de stats, `—` em-dash, `–` guión de marcador (ej. `3–0`), `▸`/`◆` solo cuando un SVG sería innecesario.

---

## 8. RECIBOS DE PAGO — convención de folio

Plantilla: `recibos/plantilla-recibo.html` (A5 horizontal, imprimible → PDF). Cada recibo se copia y se edita; se exporta con Cmd/Ctrl+P → "Guardar como PDF" en tamaño **A5 horizontal**.

**Formato del folio:** `PV · YYMMDD · [método] · NNN`

- `PV` — Prime Voley
- `YYMMDD` — fecha del pago (ej. 260610 = 10-jun-2026)
- `[método]` — **letra del MÉTODO DE PAGO** (no del concepto):
  - **N** = Nequi
  - **E** = Efectivo
  - **D** = Davivienda
  - **T** = Transferencia bancaria
- `NNN` — consecutivo global (001, 002, …) sin reiniciar

> ⚠️ **La letra es SIEMPRE el método de pago**, nunca el concepto. Un abono pagado por Nequi lleva `N`, no `A`. El concepto (suscripción, mensualidad, inscripción, abono) va en el cuerpo del recibo, no en el folio.

**Tipos de recibo en el cuerpo:**

- **Recibo de Pago** — pago completo. Sello dorado: `PAGADO · Verificado`.
- **Recibo de Abono** — pago parcial. Sello dorado: `ABONO · Pago parcial`. Mostrar siempre el **saldo pendiente** (inscripción total · abonado · saldo).

El header usa el **isotipo** (`assets/isotipo-prime.svg`) a 38px, no el escudo (muy pequeño).

---

## 9. INDEX — what's in this system

**Root**

- `README.md` — this file. Brand context, content + visual foundations, iconography, manifest.
- `colors_and_type.css` — all CSS variables: color ramps, semantic tokens, type scale, spacing, radii, shadows, motion, signature gradients/textures. **Import this in every artifact.**
- `SKILL.md` — Agent-Skill manifest so this system works as a downloadable Claude skill.

**`assets/`** — visual assets

- `escudo-prime.png` — **logo oficial** (marca primaria). Escudo gorila PNG transparente 1448×1086.
- `isotipo-prime.svg` — **isotipo oficial** (marca reducida). Arco y flecha vectorial en Royal Gold. Usar en headers de documentos, formatos pequeños.
- `jersey-reference.avif` — jersey de referencia de color (adidas × Man Utd Icons, negro/dorado/morado).
- `wordmark.html` — lockup tipográfico "PRIME VOLEY" como marca secundaria / alternativa textual.

**`preview/`** — Design System tab cards (colors, type, spacing, components, brand).

**`ui_kits/club-web/`** — high-fidelity recreation of the club's fan-facing web surface (`index.html` + JSX components). See its own `README.md`.

**`Carrusel - Prime.html`** — Instagram carousel (3 slides 9:16) summarizing the formal club launch meeting:

- **Slide 1 (Portada):** headline, club identity, brand promise
- **Slide 2 (Valor):** 4 membership benefits + training schedule (3×/week, 2 locations, times)
- **Slide 3 (Precios, Pagos, FAQ):** pricing tiers, payment methods, payment due-date rules, 6 FAQs
- Export: 3 PNG files (909×1920) ready to post.

**`slides/`** — match-day / social graphic templates (`index.html` + JSX slide types).

---

*Maintained as the single source of truth for the Prime Voley Club brand. When the real logo arrives, drop it into `assets/` and replace the wordmark stand-in + image slots.*
