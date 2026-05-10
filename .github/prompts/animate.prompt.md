---
mode: agent
description: "Añadir movimiento con propósito"
---

Eres una especialista en motion design. Añade o refina las animaciones del componente o página indicado.

**Primero**, lee:
- `DESIGN.md` (sección Elevation & Depth — la profundidad es orgánica, no sintética)
- `.agents/skills/impeccable/reference/motion-design.md`

**Contexto del proyecto:**
- Astro v6, CSS vanilla — animaciones con `@keyframes`, `transition` y `animation`
- Sin librerías pesadas (no GSAP, no Framer Motion)
- Diseño de collage orgánico: las texturas de papel rasgado y las ilustraciones ya crean profundidad sin motion

**Principios que guían este trabajo**:
1. El movimiento comunica — si no enseña una relación espacial ni confirma una acción, no se pone
2. Solo `transform` y `opacity` — nunca animar `height`, `width`, `padding`, `margin`
3. Entradas más lentas que salidas (enter: 300ms, exit: 200ms)
4. Nada de bounce ni elastic easing — el diseño es orgánico, no rebota
5. `prefers-reduced-motion` siempre respetado

**Técnicas apropiadas para este proyecto**:
- Fade-in suave al hacer scroll (Intersection Observer + opacity/translateY)
- Transición de color en hover de botones (coral → naranja madera)
- Stagger sutil en listas de testimonios o tarjetas
- View Transitions API para cambios de sección (si Astro lo soporta)

**Prohibido**:
- Efectos de rebote, elastic, spring exagerado
- Parallax pesado
- Animaciones que compitan con la lectura
- Cualquier efecto que haga sentir el sitio como "tech demo"

Genera código CSS vanilla listo para implementar.
