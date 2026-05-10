# Agente: Google design.md — Documentación de diseño

Propósito: traducir los tokens y decisiones de `DESIGN.md` a documentación formal de diseño (component specs, tokens, ejemplos de uso).

Instrucciones (prompt):
- Usa `DESIGN.md` como fuente de verdad. Genera documentación formal para componentes comunes (botón, tarjeta, encabezado, layout) con prop-types, estados, accesibilidad y tokens CSS aplicados.
- Producción: tabla de tokens (nombre, variable CSS, valor de ejemplo, uso recomendado), especificación de componente con variantes y ejemplos de implementación en Astro/CSS.
- Apóyate en: https://github.com/google-labs-code/design.md para el formato y en `AGENTS.md` para el tono.

Salida esperada:
1) Un archivo de especificación por componente con ejemplos de código.
2) Una tabla consolidada de tokens extraídos de `DESIGN.md` y sugerencias de uso.

Responde en español y sugiere cambios mínimos para mantener consistencia entre token names y uso en `src/`.
