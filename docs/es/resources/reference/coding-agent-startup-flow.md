# Flujo de arranque para coding agents

Usa esto al comienzo de cada sesión después de completar la inicialización.

## Plantilla fija de arranque

1. Ejecuta `pwd` y confirma la raíz del repositorio.
2. Lee `claude-progress.md`.
3. Lee `feature_list.json`.
4. Revisa commits recientes con `git log --oneline -5`.
5. Ejecuta `./init.sh`.
6. Ejecuta una ruta baseline smoke o end-to-end.
7. Si el baseline está roto, corrige eso primero.
8. Selecciona la funcionalidad incompleta de mayor prioridad.
9. Trabaja solo en esa funcionalidad hasta que esté verificada o explícitamente bloqueada.

## Por qué importa este orden

- `pwd` evita trabajar por accidente en el directorio incorrecto.
- El progreso y los archivos de funcionalidades recuperan estado duradero antes de editar.
- Los commits recientes explican qué cambió más recientemente.
- `init.sh` estandariza el arranque en vez de depender de memoria.
- La verificación baseline detecta estados iniciales rotos antes de que el trabajo nuevo los oculte.

## Espejo de fin de sesión

La misma sesión debería terminar con:

1. registrar progreso
2. actualizar estado de funcionalidades
3. escribir un handoff si hace falta
4. commitear trabajo seguro
5. dejar una ruta de reinicio limpia
