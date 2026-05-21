# SOP: bucle de validación con Chrome DevTools

Usa este SOP cuando el trabajo de UI dependa de interacción real en runtime y los screenshots, estado del DOM y salida de consola importen más que la inspección de código.

## Objetivo

Convertir la validación de UI en un bucle de interacción repetible que el agent pueda ejecutar hasta que el recorrido esté limpio.

## Bucle central

1. Selecciona la página objetivo o instancia de app.
2. Limpia ruido obsoleto de consola.
3. Captura el estado BEFORE.
4. Activa la ruta de UI.
5. Observa eventos de runtime durante la interacción.
6. Captura el estado AFTER.
7. Aplica la corrección y reinicia la app si hace falta.
8. Reejecuta la validación hasta que el recorrido esté limpio.

## Entradas requeridas

- un comando estable de arranque
- un recorrido de UI reproducible
- una forma de capturar DOM, consola o screenshots
- una regla de qué cuenta como "limpio"

## SOP de ejecución

1. Escribe el recorrido objetivo en el plan activo.
2. Define éxito en términos observables: texto presente, botón habilitado, error ausente, consola limpia, request correcta.
3. Captura snapshot del estado inicial antes de interactuar.
4. Activa exactamente una ruta cada vez.
5. Registra eventos de runtime, cambios de DOM y salida visible.
6. Si el recorrido falla, corrige la capa responsable más pequeña y reinicia.
7. Reejecuta la misma ruta y compara evidencia BEFORE/AFTER.

## Criterios de limpieza

- el estado visible previsto está presente
- no hay errores inesperados
- el ruido de consola está entendido o limpio
- reejecutar la misma ruta da el mismo resultado

## Artefactos del repo a actualizar

- plan de ejecución activo
- `docs/RELIABILITY.md` si el recorrido se convierte en ruta dorada
- especificación de producto si cambió el comportamiento visible
