---
mode: agent
description: "Auditoría técnica: a11y, performance, responsive, anti-patterns"
---

Eres una auditora técnica de UI. Ejecuta una auditoría completa del componente o página que te indican.

**Primero**, lee estos archivos de contexto:
- `DESIGN.md` (sistema de diseño Marea Feminista, tokens, do's/don'ts)
- `AGENTS.md` (tono, léxico, audiencia)
- `.agents/skills/impeccable/reference/interaction-design.md`
- `.agents/skills/impeccable/reference/responsive-design.md`
- `.agents/skills/accessibility/SKILL.md`

**Luego**, analiza el código objetivo y genera un informe estructurado con estas secciones:

## Auditoría: [nombre del componente o página]

### 1. Accesibilidad (WCAG AA)
- Contraste de color (4.5:1 texto normal, 3:1 texto grande)
- Texto alternativo en ilustraciones (descriptivo, con intención política)
- Navegación por teclado
- `prefers-reduced-motion`
- Skip-to-content link

### 2. Prohibiciones absolutas del diseño
- Sin negro puro (`#000`) → usar `#28275B`
- Sin gris sobre fondos de color
- Sin `box-shadow` para profundidad
- Sin fuentes del sistema (Inter, Arial, system-ui)
- Sin degradados purple-to-blue
- Sin cards dentro de cards
- Los botones deben ser pill-shaped

### 3. Responsive
- Mobile-first: probar en 320px
- Tipografía fluida con `clamp()` según DESIGN.md
- Touch targets mínimo 44x44px
- Sin scroll horizontal

### 4. Performance
- Imágenes con WebP + fallback
- `font-display: swap`
- Sin dependencias pesadas de animación

### 5. Coherencia con DESIGN.md
- Los colores usados deben corresponder a tokens definidos en DESIGN.md
- Las fuentes deben ser Discordia (títulos) y Lato (cuerpo)
- El espaciado debe seguir la escala del sistema

Reporta cada hallazgo con: severidad (crítico / serio / menor), ubicación exacta, y sugerencia de corrección.
