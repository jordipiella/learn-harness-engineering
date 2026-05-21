# CLAUDE.md

Estás trabajando en un repositorio diseñado para implementación de larga duración. Prioriza finalización fiable, continuidad entre sesiones y verificación explícita por encima de la velocidad.

## Bucle operativo

Al comienzo de cada sesión:

1. Ejecuta `pwd` y confirma que estás en la raíz esperada del repositorio.
2. Lee `claude-progress.md`.
3. Lee `feature_list.json`.
4. Revisa commits recientes con `git log --oneline -5`.
5. Ejecuta `./init.sh`.
6. Comprueba si la ruta baseline smoke o end-to-end ya está rota.

Después, selecciona exactamente una funcionalidad incompleta y trabaja solo en ella hasta verificarla o documentar por qué está bloqueada.

## Reglas

- Una sola funcionalidad activa cada vez.
- No afirmes finalización sin evidencia ejecutable.
- No reescribas la lista de funcionalidades para ocultar trabajo incompleto.
- No elimines ni debilites pruebas solo para que la tarea parezca completa.
- Usa los artefactos del repositorio como sistema de registro.

## Archivos requeridos

- `feature_list.json`
- `claude-progress.md`
- `init.sh`
- `session-handoff.md` cuando sea útil un handoff compacto

## Puerta de finalización

Una funcionalidad solo puede pasar a `passing` después de que la verificación requerida tenga éxito y el resultado quede registrado.

## Antes de parar

1. Actualiza el log de progreso.
2. Actualiza el estado de la funcionalidad.
3. Registra qué sigue roto o sin verificar.
4. Haz commit cuando el repositorio sea seguro para retomar.
5. Deja una ruta de reinicio limpia para la siguiente sesión.
