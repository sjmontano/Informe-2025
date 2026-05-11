/**
 * generar-variantes-fondos.mjs
 *
 * Optimiza los 17 fondos de sección para carga rápida:
 *  - Desktop:  mantiene 1920px de ancho, re-comprime a calidad 70.
 *  - Mobile:   redimensiona a 828px de ancho, calidad 65.
 *  - LQIP:     miniatura de 20px de ancho, calidad 20 (para placeholder inline).
 *
 * Uso: node scripts/generar-variantes-fondos.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync, mkdirSync } from 'fs';
import { join } from 'path';

const DIR = join(process.cwd(), 'public', 'resources', 'fondos');
const BACKUP_DIR = join(DIR, '_originales');
const DESKTOP_W = 1920;
const MOBILE_W = 828;
const LQIP_W = 60;
const DESKTOP_Q = 70;
const MOBILE_Q = 65;
const LQIP_Q = 35;

async function main() {
  const archivos = readdirSync(DIR).filter(f => f.match(/^fondo-seccion-\d{2}\.webp$/));
  if (archivos.length === 0) throw new Error('No se encontraron fondos en ' + DIR);

  mkdirSync(BACKUP_DIR, { recursive: true });

  console.log(`\n> ${archivos.length} fondos encontrados\n`);

  for (const nombre of archivos) {
    const ruta = join(DIR, nombre);
    const nombreSinExt = nombre.replace('.webp', '');
    const pesoOrig = (statSync(ruta).size / 1024).toFixed(0);

    // ── Backup ───────────────────────────────────────────────────────
    const rutaBackup = join(BACKUP_DIR, nombre);
    const yaRespaldado = statSync(rutaBackup, { throwIfNoEntry: false });
    if (!yaRespaldado) {
      renameSync(ruta, rutaBackup);
      console.log(`  [backup] ${nombre}  (${pesoOrig} KB)`);
    }

    // Leer del backup, escribir al destino original
    const archivoOrig = rutaBackup;

    // ── Desktop ──────────────────────────────────────────────────────
    await sharp(archivoOrig)
      .resize({ width: DESKTOP_W, withoutEnlargement: true })
      .webp({ quality: DESKTOP_Q, effort: 4 })
      .toFile(ruta);

    const pesoOk = (statSync(ruta).size / 1024).toFixed(0);

    // ── Mobile ───────────────────────────────────────────────────────
    const archivoSm = join(DIR, `${nombreSinExt}-sm.webp`);
    await sharp(archivoOrig)
      .resize({ width: MOBILE_W, withoutEnlargement: true })
      .webp({ quality: MOBILE_Q, effort: 4 })
      .toFile(archivoSm);

    const pesoSm = (statSync(archivoSm).size / 1024).toFixed(0);

    // ── LQIP ─────────────────────────────────────────────────────────
    const archivoLqip = join(DIR, `${nombreSinExt}-lqip.webp`);
    await sharp(archivoOrig)
      .resize({ width: LQIP_W, withoutEnlargement: true })
      .webp({ quality: LQIP_Q, effort: 6 })
      .toFile(archivoLqip);

    const pesoLqip = (statSync(archivoLqip).size / 1024).toFixed(2);
    const reduccion = (((pesoOrig - pesoOk) / pesoOrig) * 100).toFixed(0);

    console.log(`  ${nombreSinExt}  desktop: ${pesoOk} KB  mobile: ${pesoSm} KB  lqip: ${pesoLqip} KB  (-${reduccion}%)`);
  }

  console.log(`\n> Originales respaldados en ${BACKUP_DIR}`);
  console.log('> Variantes generadas: desktop, sm (mobile), lqip (placeholder)');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
