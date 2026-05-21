# Proyecto 02: Espacio de trabajo legible por agents

Demuestra cómo la legibilidad del repositorio y los artefactos explícitos de continuidad reducen la pérdida de contexto durante el desarrollo en varias sesiones.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: basado en la solución de P1, con importación de documentos, vista de detalle y persistencia todavía por implementar. El harness es débil: `AGENTS.md` es mínimo y no hay `session-handoff.md`. |
| `solution/` | **Implementación de referencia**: todas las funcionalidades nuevas están implementadas, con documentación completa del workspace (`ARCHITECTURE.md`, `PRODUCT.md`, `session-handoff.md`). |

## Cómo usarlo

```sh
# Requiere al menos 2 sesiones de agent para completarse
cd starter
npm install
# Sesión A: implementar importación de documentos y vista de detalle
# Sesión B: implementar persistencia (observa si el agent recupera contexto con rapidez)

cd ../solution
npm install
# Repite con el harness completo y compara la velocidad de recuperación entre sesiones
```

## Funcionalidades cubiertas

- Flujo de importación de documentos (selector de archivo más transferencia IPC)
- Vista de detalle de documento (metadatos más visualización de contenido)
- Persistencia básica (los documentos importados siguen ahí tras reiniciar)

## Lecciones relacionadas

- [Lección 03: Por qué el repositorio debe convertirse en el sistema de registro](../../docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md)
- [Lección 04: Por qué falla un único archivo gigante de instrucciones](../../docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
