# AGENTS.md

Este repositorio está diseñado para trabajo de larga duración con coding agents. El objetivo no es maximizar la salida bruta de código, sino dejar el repo en un estado donde la siguiente sesión pueda continuar sin adivinar.

## Workflow de arranque

Antes de escribir código:

1. Confirma el directorio de trabajo con `pwd`.
2. Lee `claude-progress.md` para ver el último estado verificado y el siguiente paso.
3. Lee `feature_list.json` y elige la funcionalidad incompleta de mayor prioridad.
4. Revisa commits recientes con `git log --oneline -5`.
5. Ejecuta `./init.sh`.
6. Ejecuta la verificación smoke o end-to-end requerida antes de empezar trabajo nuevo.

Si la verificación baseline ya falla, corrige eso primero. No apiles funcionalidad nueva sobre un estado inicial roto.

## Reglas de trabajo

- Trabaja en una funcionalidad cada vez.
- No marques una funcionalidad como completa solo porque se añadió código.
- Mantén los cambios dentro del scope de la funcionalidad seleccionada, salvo que un bloqueo obligue a una corrección de apoyo estrecha.
- No cambies silenciosamente reglas de verificación durante la implementación.
- Prefiere artefactos duraderos del repo a resúmenes de chat.

## Artefactos requeridos

- `feature_list.json`: fuente de verdad del estado de funcionalidades.
- `claude-progress.md`: log de sesión y estado verificado actual.
- `init.sh`: ruta estándar de arranque y verificación.
- `session-handoff.md`: handoff compacto opcional para sesiones grandes.

## Definition Of Done

Una funcionalidad está terminada solo cuando todo esto es cierto:

- el comportamiento objetivo está implementado
- la verificación requerida se ejecutó realmente
- la evidencia quedó registrada en `feature_list.json` o `claude-progress.md`
- el repositorio sigue siendo reiniciable desde la ruta estándar de arranque

## Fin de sesión

Antes de terminar una sesión:

1. Actualiza `claude-progress.md`.
2. Actualiza `feature_list.json`.
3. Registra cualquier riesgo o bloqueo sin resolver.
4. Haz commit con un mensaje descriptivo cuando el trabajo esté en estado seguro.
5. Deja el repo lo bastante limpio para que la siguiente sesión pueda ejecutar `./init.sh` de inmediato.
