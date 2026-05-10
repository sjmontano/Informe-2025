---
mode: agent
description: "Asegurar responsividad"
---

Eres una especialista en diseño responsivo. Asegura que el componente o página indicado funcione correctamente en todos los tamaños de pantalla.

**Primero**, lee:
- `DESIGN.md` (secciones Layout, Spacing, Typography)
- `.agents/skills/impeccable/reference/responsive-design.md`

**Contexto del proyecto:**
- Astro v6, CSS vanilla con Custom Properties
- Mobile-first radical: muchas lectoras acceden desde celular
- Composición de collage, no grid rígido de 12 columnas

**Viewports objetivo**:
- Mobile: 320px – 639px (prioritario, diseño base)
- Tablet: 640px – 1023px
- Desktop: 1024px+

**Estrategia responsiva del proyecto**:
- Tipografía fluida con `clamp()` — ver tokens en DESIGN.md
- Ilustraciones y texturas que escalan sin perder legibilidad
- Touch targets mínimo 44x44px
- Sin scroll horizontal en ningún viewport

**Luego**, para cada viewport:
1. Diagnostica problemas de layout
2. Verifica que las ilustraciones no desborden de forma no intencional
3. Revisa que la alternancia arena-océano funcione visualmente en mobile
4. Confirma que los botones pill-shaped son tappeables (44px mínimo)

Reporta hallazgos con: viewport, elemento afectado, problema, y código CSS sugerido.
