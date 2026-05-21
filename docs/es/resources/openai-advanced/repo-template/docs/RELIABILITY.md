# RELIABILITY.md

Este archivo define cómo demuestra el sistema que está sano y es reiniciable.

## Rutas estándar

- Bootstrap: `[command]`
- Verificación: `[command]`
- Arrancar app o servicio: `[command]`
- Depurar o inspeccionar runtime: `[command]`

## Señales de runtime requeridas

- logs estructurados para arranque y flujos críticos
- health checks para servicios clave
- datos de trazas o tiempos para rutas lentas cuando estén disponibles
- estados de error visibles para el usuario en fallos recuperables

## Recorridos dorados

- `[journey 1]`
- `[journey 2]`
- `[journey 3]`

Cada recorrido dorado debería tener una ruta de verificación repetible y señales de fallo claras.

## Reglas de fiabilidad

- Ninguna funcionalidad está completa si el sistema no puede reiniciarse limpiamente después.
- Los fallos de runtime deberían poder diagnosticarse desde señales locales al repo.
- Si aparece un modo de fallo repetido, añade un benchmark o guardrail para él.
- La limpieza es parte de la fiabilidad, no una preocupación separada.
