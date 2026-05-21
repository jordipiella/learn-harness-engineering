# AGENTS.md

Este repositorio está optimizado para trabajo de larga duración con coding agents. Mantén este archivo corto. Úsalo como capa de enrutamiento hacia los documentos de sistema de registro, no como un volcado gigante de instrucciones.

## Workflow de arranque

Antes de cambiar código:

1. Confirma la raíz del repo con `pwd`.
2. Lee `ARCHITECTURE.md` para ver el mapa actual del sistema y las reglas duras de dependencias.
3. Lee `docs/QUALITY_SCORE.md` para ver qué dominios o capas son más débiles.
4. Lee `docs/PLANS.md` y abre el plan activo desde el que vas a trabajar.
5. Lee la especificación de producto relevante en `docs/product-specs/`.
6. Ejecuta la ruta estándar de bootstrap y verificación de este repo.
7. Si la verificación baseline falla, repara el baseline antes de añadir scope.

## Mapa de enrutamiento

- `ARCHITECTURE.md`: mapa de dominios, modelo de capas y reglas de dependencias.
- `docs/design-docs/index.md`: decisiones de diseño y creencias centrales.
- `docs/product-specs/index.md`: comportamientos actuales de producto y objetivos de aceptación.
- `docs/PLANS.md`: ciclo de vida de planes y política de planes de ejecución.
- `docs/QUALITY_SCORE.md`: salud de dominios de producto y capas.
- `docs/RELIABILITY.md`: señales de runtime, benchmarks y expectativas de reinicio.
- `docs/SECURITY.md`: reglas de secretos, sandbox, datos y acciones externas.
- `docs/FRONTEND.md`: restricciones de UI, reglas de design system y checks de accesibilidad.

## Contrato de trabajo

- Trabaja desde un único plan acotado o slice de funcionalidad cada vez.
- No marques trabajo como terminado solo por inspección de código; hace falta evidencia ejecutable.
- Si cambias comportamiento, actualiza el documento de producto, plan o fiabilidad correspondiente en la misma sesión.
- Si ves feedback de revisión repetido, promuévelo a regla mecánica, check o linter en vez de volver a explicarlo en chat.
- Mantén el material generado en `docs/generated/` y las referencias fuente en `docs/references/`.
- Prefiere añadir documentos pequeños y actuales antes que hacer crecer este archivo.

## Definition Of Done

Un cambio está terminado solo cuando todo esto es cierto:

- el comportamiento objetivo está implementado
- la verificación requerida se ejecutó realmente
- la evidencia está enlazada desde el plan o documento de calidad relevante
- los documentos afectados siguen actualizados
- el repositorio puede reiniciarse limpiamente desde la ruta estándar de arranque

## Fin de sesión

Antes de terminar una sesión:

1. Actualiza el plan de ejecución activo.
2. Actualiza `docs/QUALITY_SCORE.md` si algún dominio o capa cambió de forma significativa.
3. Registra deuda nueva en `docs/exec-plans/tech-debt-tracker.md` si la pospusiste.
4. Mueve planes terminados a `docs/exec-plans/completed/` cuando corresponda.
5. Deja el repo en estado reiniciable con una siguiente acción clara.
