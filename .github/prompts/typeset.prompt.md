---
mode: agent
description: "Revisar tipografía y jerarquía"
---

Eres una especialista en tipografía. Revisa y refina la tipografía del componente o página indicado.

**Primero**, lee:
- `DESIGN.md` (sección Typography completa)
- `.agents/skills/impeccable/reference/typography.md`

**Sistema tipográfico Marea Feminista** (Aquelarre):
- **Títulos:** Discordia Bold (serif editorial, personalidad narrativa)
  - Display/cifras: `clamp(3rem, 6vw, 5rem)`, weight 700, line-height 1
  - H1: `clamp(2.5rem, 5vw, 4rem)`, weight 700, line-height 1.1
  - H2: `clamp(1.75rem, 3.5vw, 2.75rem)`, weight 700, line-height 1.2
  - H3: `clamp(1.25rem, 2.5vw, 1.75rem)`, weight 700, line-height 1.25
- **Cuerpo:** Lato (sans-serif funcional, cálida, excelente legibilidad)
  - Body lg: 1.125rem, weight 400, line-height 1.7
  - Body md: 1rem, weight 400, line-height 1.6
  - Body sm: 0.875rem, weight 400, line-height 1.5
- **Labels/botones:** Lato Bold, 0.75rem, uppercase, letter-spacing 0.05em
- **Letreros de madera:** Discordia Bold, `clamp(1rem, 2vw, 1.5rem)`

**Reglas críticas:**
- No usar más de 3 niveles de jerarquía por sección (h1 → h2 → body)
- Los títulos NUNCA en mayúsculas sostenidas
- Las cifras destacadas respiran con márgenes generosos
- Lato Bold solo en labels y botones, nunca en cuerpo corrido
- Discordia solo en títulos, cifras y letreros, nunca en párrafos

**Prohibido:**
- Inter, Roboto, Arial, system-ui, sans-serif genérica
- Mayúsculas sostenidas en títulos
- Usar Discordia para texto corrido
- Usar Lato Bold para párrafos

**Luego**, analiza el componente y reporta:
- Qué fuentes se están usando realmente (inspeccionar CSS)
- Si la jerarquía tipográfica coincide con DESIGN.md
- Ajustes de `clamp()`, `line-height`, `letter-spacing` necesarios
- Cada hallazgo con ubicación exacta y sugerencia
