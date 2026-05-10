# Agentes de IA — Guía rápida

Esta carpeta contiene prompts y configuraciones para agentes de IA orientados al proyecto.

Cómo usarlos (rápido):

- Instalar `agentation` (o usar `npx`):

  ```bash
  npm run agents:install
  # o sin instalar:
  npx agentation run --dir agents
  ```

- Scripts útiles en este repo:

  - `npm run design:lint` — valida `DESIGN.md`.
  - `npm run impeccable` — ejecuta `impeccable detect src/`.
  - `npm run agents:run` — ejecuta `agentation` sobre esta carpeta.

Estructura:

- `frontend-design.agent.md` — arquitectura de páginas y componentes.
- `accessibility.agent.md` — auditoría WCAG y parches.
- `seo.agent.md` — metadatos y marcado estructurado.
- `impeccable.agent.md` — mejoras de redacción y tono.
- `google-design-md.agent.md` — specs formales desde `DESIGN.md`.
- `typeset.prompt.md` — pautas tipográficas y snippets CSS.

Notas:

- Cada agente está escrito como prompt para LLM; adapta su uso con `agentation` u otras herramientas que soporten ejecución de prompts por archivo.
- Antes de aplicar cambios automáticos, revisa manualmente los parches sugeridos: las decisiones de contenido y tono deben respetar `AGENTS.md`.
