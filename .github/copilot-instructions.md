# GitHub Copilot Instructions — Fondo Lunaria · Informe 2025

## Proyecto

Micrositio interactivo del **Informe de Gestión 2025** de Fondo Lunaria, co-creado con Aquelarre Laboratorio de Diseño Feminista. Sitio estático que traduce el informe impreso a una experiencia digital navegable con metáfora marina.

## Stack

- **Astro v6** con TypeScript
- **CSS vanilla** con Custom Properties (no Tailwind, no frameworks CSS)
- **Fuentes:** Discordia (títulos) + Lato (cuerpo)
- **Ilustraciones:** SVG/PNG con transparencia en `public/illustrations/`
- **Texturas:** PNG/SVG de papel rasgado en `public/textures/`

## Archivos de contexto (leer siempre)

- **[AGENTS.md](./AGENTS.md)** — Tono, léxico, audiencia, reglas de escritura
- **[DESIGN.md](./DESIGN.md)** — Sistema de diseño: tokens de color, tipografía, componentes, do's/don'ts

## Principios

- Nunca usar negro puro (`#000`) — usar `#28275B` (azul noche)
- Nunca usar gris sobre fondos de color
- Nunca usar `box-shadow` para profundidad — usar capas, texturas e ilustraciones
- Nunca usar fuentes del sistema (Inter, Roboto, Arial)
- Los botones siempre pill-shaped
- Alternar fondos arena (`#F4C454`) y océano (`#0B6B6D`) entre secciones
- Mobile-first: muchas lectoras acceden desde celular
- Contenido en español colombiano, tono feminista senti-pensante

## Prohibido

- "beneficiarias", "usuarias", "target", "entregables", "KPI"
- Degradados purple-to-blue
- Tarjetas dentro de tarjetas
- Perífrasis vacías ("se procedió a", "se llevó a cabo")
- Pasiva burocrática

## Preferido

- Primera persona plural: "apoyamos", "diseñamos", "acompañamos"
- Cifras humanizadas con metáfora marina
- "organizaciones, colectivas y procesos comunitarios"
- Verbos: abrazar, tejer, acompañar, nutrir, navegar, sembrar
