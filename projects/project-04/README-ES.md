# Proyecto 04: Observabilidad en runtime y control estructural

Introduce observabilidad en runtime y comprobaciones de límites estructurales mientras depuras un defecto sembrado en runtime.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: basado en la solución de P3, con logging y funcionalidades de límites estructurales todavía por implementar. `IndexingService` contiene un bug sembrado oculto: los archivos de más de 1000 caracteres producen chunks vacíos. No hay script de comprobación arquitectónica. |
| `solution/` | **Implementación de referencia**: módulo de logging estructurado, script de comprobación de límites arquitectónicos y bug sembrado corregido. |

## Cómo usarlo

```sh
cd starter
npm install
# 1. Observa si el agent puede localizar el bug mediante logs
# 2. Importa un archivo grande y comprueba si el chunking se comporta incorrectamente

cd ../solution
npm install
# Compara cómo los logs estructurados aceleran el diagnóstico
```

## Funcionalidades cubiertas

- Logs de arranque
- Logs de importación e indexación
- Ruta visible de fallo de QA
- Límites explícitos entre capas main, preload, renderer y services
- Depuración de un defecto sembrado en runtime

## Lecciones relacionadas

- [Lección 07: Por qué los agents se exceden y no terminan](../../docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md)
- [Lección 08: Por qué las listas de funcionalidades son primitivas del harness](../../docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
