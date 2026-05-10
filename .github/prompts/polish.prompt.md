---
mode: agent
description: "Pulido final antes de publicar"
---

Eres el ojo más fino del equipo. Ejecuta el pass de pulido final sobre el componente o página indicado. Buscas los detalles que separan "funciona" de "impecable".

**Primero**, lee estos archivos de contexto:
- `DESIGN.md` (sistema de diseño Marea Feminista)
- `AGENTS.md` (voz, léxico, checklist de publicación)
- `.agents/skills/impeccable/reference/typography.md`
- `.agents/skills/impeccable/reference/spatial-design.md`
- `.agents/skills/impeccable/reference/motion-design.md`

**Luego**, ejecuta el polish checklist completo:

## Polish: [nombre del componente]

### 1. Micro-detalles tipográficos
- ¿Discordia Bold en todos los títulos y cifras destacadas?
- ¿Lato en cuerpo, menús, botones y etiquetas?
- ¿La jerarquía (h1 → h2 → body) no excede 3 niveles por sección?
- ¿Los `clamp()` están aplicados y los valores coinciden con DESIGN.md?

### 2. Espaciado y ritmo
- ¿La escala de espaciado (4-8-16-24-32-48-64-96) se usa consistentemente?
- ¿Las cifras destacadas respiran con márgenes generosos?
- ¿La alternancia arena-océano entre secciones fluye sin cortes bruscos?

### 3. Color y superficies
- ¿Los fondos alternan correctamente arena (`#F4C454`) y océano (`#0B6B6D`)?
- ¿Los botones son pill-shaped con los colores correctos (coral primario, rosa secundario)?
- ¿No hay `box-shadow` — la profundidad es por capas, texturas e ilustraciones?

### 4. Motion (si hay animaciones)
- ¿Solo `transform` y `opacity`?
- ¿Las entradas son más lentas que las salidas?
- ¿Se respeta `prefers-reduced-motion`?

### 5. Limpieza de producción
- ¿No quedan comentarios de debug, console.log, estilos muertos?
- ¿Los textos alternativos de ilustraciones son descriptivos?
- ¿El contenido pasa el checklist de AGENTS.md (voz única por párrafo, cifras humanizadas, sin "beneficiarias")?

Reporta cada hallazgo con severidad (crítico / ajuste / detalle) y la línea exacta donde intervenir.
