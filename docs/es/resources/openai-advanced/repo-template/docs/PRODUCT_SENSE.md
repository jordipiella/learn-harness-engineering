# PRODUCT_SENSE.md

Este archivo captura juicio de producto duradero que los agents no pueden inferir de forma fiable solo desde el código.

## Núcleo de producto

- Usuario principal: `[replace]`
- Trabajo a completar: `[replace]`
- Frustración principal a eliminar: `[replace]`
- Barra de calidad para aceptación: `[replace]`

## Reglas de producto

- Prioriza fiabilidad visible para el usuario frente a cantidad de funcionalidades.
- Trata el comportamiento ambiguo como hueco de spec, no como permiso para adivinar.
- Si la implementación cambia lo que los usuarios ven o confían, actualiza la spec correspondiente.
- Usa specs de producto para flujos concretos y este archivo para prioridades transversales de producto.

## Patrones prohibidos

- Acciones destructivas ocultas.
- Fallo silencioso sin feedback de usuario.
- Fuente de verdad poco clara para estado visible.
- Funcionalidades que no pueden explicarse en una frase.
