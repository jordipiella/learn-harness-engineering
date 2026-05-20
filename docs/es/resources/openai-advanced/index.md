# OpenAI Paquete avanzado

This carpeta packages the more opinionated repositorio shape described in
OpenAI's "Harness ingeniería: leveraging Codex in an agent-first world"
article into listo para copiar inicial archivos.

Usar this pack when the minimal harness is no longer enough and your repositorio
now needs:

- a short routing-style `AGENTS.md`
- durable system-of-record docs inside the repo
- active and completed execution plans
- explícito product, reliability, security, and frontend policy archivos
- calidad scoring by product domain and architectural capa
- model-friendly referencia material carpetas
- standard operating procedures for arquitectura, knowledge capture, and runtime validation

## Included Inicial Layout

The inicial pack under [`repo-template/`](./repo-template/index.md) mirrors the
estructura below:

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

## How To Adopt It

1. Empezar from the minimal pack if your repo is still small.
2. Copy the archivos in [`repo-template/`](./repo-template/index.md) into your
   own repositorio once you need stronger estructura.
3. Keep `AGENTS.md` short. Treat it as a router into the deeper docs, not as an
   encyclopedia.
4. Update the calidad, reliability, and plan docs as part of normal work, not
   as a separate cleanup day.
5. Keep generated artifacts and external references explícito so agents can find
   them without relying on chat history.

## SOP Biblioteca

The [`sops/`](./sops/index.md) carpeta turns the article's diagrams into
step-by-step operating procedures:

- layered domain arquitectura setup
- encode unseen knowledge into the repositorio
- local observabilidad stack and feedback-loop flujo de trabajo
- Chrome DevTools validation loop for UI work

## Diseño Principles

- Short entrypoint, deeper linked docs
- Repository as sistema de registro
- Mechanical checks beat remembered reglas
- Plans and calidad history live beside the código
- Cleanup and simplification are first-class responsibilities

This pack is intentionally opinionated, but it should still be adapted to your
proyecto rather than copied blindly.
