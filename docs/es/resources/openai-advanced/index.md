# Paquete avanzado de OpenAI

Esta carpeta empaqueta la forma de repositorio más opinada descrita en el artículo de OpenAI "Harness engineering: leveraging Codex in an agent-first world" como archivos iniciales listos para copiar.

Usa este paquete cuando el harness mínimo ya no baste y tu repositorio necesite:

- un `AGENTS.md` corto con estilo de enrutador
- documentos duraderos de sistema de registro dentro del repo
- planes de ejecución activos y completados
- archivos explícitos de política de producto, fiabilidad, seguridad y frontend
- puntuación de calidad por dominio de producto y capa arquitectónica
- carpetas de material de referencia legible por el modelo
- procedimientos operativos estándar para arquitectura, captura de conocimiento y validación en runtime

## Layout inicial incluido

El paquete inicial en [`repo-template/`](./repo-template/index.md) replica esta estructura:

```text
AGENTS.md
ARCHITECTURE.md
docs/
├── design-docs/
│   ├── index.md
│   └── core-beliefs.md
├── exec-plans/
│   ├── active/
│   ├── completed/
│   └── tech-debt-tracker.md
├── generated/
│   └── db-schema.md
├── product-specs/
│   ├── index.md
│   └── new-user-onboarding.md
├── references/
│   ├── design-system-reference-llms.txt
│   ├── nixpacks-llms.txt
│   └── uv-llms.txt
├── DESIGN.md
├── FRONTEND.md
├── PLANS.md
├── PRODUCT_SENSE.md
├── QUALITY_SCORE.md
├── RELIABILITY.md
└── SECURITY.md
```

## Cómo adoptarlo

1. Empieza por el paquete mínimo si tu repo aún es pequeño.
2. Copia los archivos de [`repo-template/`](./repo-template/index.md) a tu propio repositorio cuando necesites una estructura más fuerte.
3. Mantén `AGENTS.md` corto. Trátalo como un enrutador hacia documentación más profunda, no como una enciclopedia.
4. Actualiza los documentos de calidad, fiabilidad y planes como parte del trabajo normal, no como un día separado de limpieza.
5. Mantén explícitos los artefactos generados y las referencias externas para que los agents puedan encontrarlos sin depender del historial de chat.

## Biblioteca de SOP

La carpeta [`sops/`](./sops/index.md) convierte los diagramas del artículo en procedimientos operativos paso a paso:

- configuración de arquitectura de dominio por capas
- codificación de conocimiento invisible dentro del repositorio
- stack local de observabilidad y workflow de bucle de feedback
- bucle de validación con Chrome DevTools para trabajo de UI

## Principios de diseño

- Entrada corta, documentos enlazados más profundos.
- Repositorio como sistema de registro.
- Los checks mecánicos ganan a las reglas recordadas.
- Los planes y el historial de calidad viven junto al código.
- Limpieza y simplificación son responsabilidades de primer nivel.

Este paquete es intencionalmente opinado, pero aun así debe adaptarse a tu proyecto en vez de copiarse a ciegas.
