# FRONTEND.md

Este archivo define expectativas estables de frontend para que los agents no inventen patrones de UI de forma impredecible.

## Principios de UI

- Optimiza por claridad antes que novedad.
- Mantén los flujos de interacción descubribles y reiniciables.
- Prefiere un número pequeño de componentes reutilizables frente a variantes únicas.
- Los checks de accesibilidad son parte de la verificación normal, no trabajo de pulido.

## Guardrails

- Documenta el design system o biblioteca de componentes en `docs/references/`.
- Registra estados clave de usuario: vacío, carga, éxito, error, reintento.
- Mantén consistentes el copy, comportamiento de teclado y jerarquía visual entre flujos.
- Cuando se corrija un bug de UI, añade o actualiza el paso de validación correspondiente.

## Expectativas de verificación

- Captura evidencia para recorridos críticos de usuario.
- Registra pasos de validación de navegador o runtime en el plan relevante.
- Si las regresiones visuales son comunes, estandariza checks de screenshot o DOM.
