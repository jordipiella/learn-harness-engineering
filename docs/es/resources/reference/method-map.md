# Mapa de método

Esta tabla conecta los modos de fallo más comunes en tareas largas con coding agents
con el artefacto o regla operativa que suele corregirlos primero.

| Modo de fallo | Cómo se ve en la práctica | Corrección principal | Artefacto de apoyo |
| --- | --- | --- | --- |
| Confusión de arranque | Una sesión nueva pasa la mayor parte del tiempo redescubriendo setup y estado | Convertir el repositorio en el sistema de registro | `claude-progress.md` |
| Expansión de alcance | El agent empieza varias funcionalidades y no termina ninguna limpiamente | Restringir el alcance activo | `feature_list.json` |
| Finalización prematura | El agent declara que terminó después de editar código, pero antes de aportar evidencia ejecutable | Vincular la finalización a evidencia | `clean-state-checklist.md` |
| Arranque frágil | Cada sesión vuelve a aprender cómo iniciar el proyecto | Estandarizar setup y verificación | `init.sh` |
| Traspaso débil | La siguiente sesión no sabe qué está verificado, roto o pendiente | Terminar con un traspaso explícito | `session-handoff.md` |
| Revisión subjetiva | La calidad de la revisión depende del gusto o la memoria | Puntuar la salida con categorías fijas | `evaluator-rubric.md` |

## Principio operativo

Añade el artefacto más pequeño que responda directamente al modo de fallo observado.
Evita resolver todos los problemas de fiabilidad acumulando más texto en un único
archivo global de instrucciones.
