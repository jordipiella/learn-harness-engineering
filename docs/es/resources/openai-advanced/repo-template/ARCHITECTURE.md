# ARCHITECTURE.md

This archivo is the top-level map of the system. It should stay concise and point
to deeper documents when needed.

## System Shape

- Product: `[replace with product name]`
- Primary usuario flujo de trabajo: `[replace with main flujo de trabajo]`
- Runtime surfaces: `[desktop / web / cli / services / workers]`
- Fuente of truth for product behavior: `docs/product-specs/`

## Domain Map

| Domain | Purpose | Primary Entry Points | Related Spec |
|--------|---------|----------------------|--------------|
| `[domain-a]` | `[what it owns]` | `[modules / routes / comandos]` | `[spec ruta]` |
| `[domain-b]` | `[what it owns]` | `[modules / routes / comandos]` | `[spec ruta]` |

## Capa Modelo

Usar a fixed directional modelo so agents do not invent ad hoc arquitectura:

`Types -> Config -> Repo -> Service -> Runtime -> UI`

Cross-cutting concerns should enter through explícito provider or adapter
límites instead of reaching across capas directly.

## Hard Dependency Reglas

- Lower capas must not depend on higher capas.
- UI must not bypass runtime or service contracts.
- Datos access must enter through repositorios or equivalent adapters.
- Shared utilities must remain generic and must not accumulate domain logic.
- New dependencies should be justified in the matching plan or diseño doc.

## Cross-Cutting Interfaces

| Concern | Approved Boundary | Notes |
|--------|-------------------|-------|
| Logging and tracing | `[provider / utility ruta]` | `[estructurado only, no ad hoc console usar]` |
| Auth | `[provider ruta]` | `[token/sesión reglas]` |
| External APIs | `[client or provider ruta]` | `[rate limit / retry guidance]` |
| Feature flags | `[flag boundary]` | `[ownership]` |

## Current Hot Spots

- `[area that is hardest for agents to cambio safely]`
- `[area with weak límites or fragile pruebas]`

## Cambio Checklist

When you touch architecture-relevant código:

1. Update this archivo if the domain map or allowed límites changed.
2. Update the related diseño doc in `docs/design-docs/` if the reasoning changed.
3. Añadir or update an executable check if the rule should be enforced mechanically.
