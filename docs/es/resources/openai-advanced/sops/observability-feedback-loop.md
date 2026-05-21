# SOP: bucle de feedback de observabilidad

Usa este SOP cuando depurar sea lento, los agents sigan afirmando éxito sin evidencia o el comportamiento de runtime sea más difícil de inspeccionar que el código.

## Objetivo

Dar al agent un bucle local de feedback sobre logs, métricas, trazas y workloads ejecutables para que razone desde la ejecución, no solo desde inspección de código.

## Stack mínimo

- la aplicación emite logs estructurados
- la aplicación emite métricas y trazas cuando sea viable
- capa local de fan-out o recolección
- interfaces de consulta para logs, métricas y trazas
- workload o recorrido de usuario repetible para reejecutar tras cada cambio

## SOP de ejecución

1. Define los recorridos dorados de runtime que más importan.
2. Añade logs estructurados al arranque y a la ruta crítica.
3. Añade métricas de latencia, conteos de fallos o profundidad de cola donde sea útil.
4. Añade trazas o marcas de tiempo para flujos lentos o multipaso.
5. Haz que las señales sean consultables desde el entorno local de desarrollo.
6. Da al agent un workload o escenario repetible que pueda reejecutar.
7. Exige el bucle: consultar -> correlacionar -> razonar -> implementar -> reiniciar -> reejecutar -> verificar.

## Checklist de sesión de depuración

- ¿Qué falló?
- ¿Qué señal prueba el fallo?
- ¿Qué capa posee el fallo?
- ¿Qué cambió después de la corrección?
- ¿La app reinició limpiamente?
- ¿El mismo workload pasó tras reejecutar?

## Definition Of Done

- El agent puede explicar un modo de fallo desde evidencia de runtime.
- El mismo workload puede reejecutarse después de cada cambio.
- Reiniciar y reejecutar son parte del loop normal de tarea.
- Las señales de fiabilidad están documentadas en `docs/RELIABILITY.md`.
