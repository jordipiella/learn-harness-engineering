# ARCHITECTURE.md

Este archivo es el mapa de nivel superior del sistema. Debe mantenerse conciso y apuntar a documentos más profundos cuando haga falta.

## Forma del sistema

- Producto: `[replace with product name]`
- Workflow principal de usuario: `[replace with main workflow]`
- Superficies de runtime: `[desktop / web / cli / services / workers]`
- Fuente de verdad del comportamiento de producto: `docs/product-specs/`

## Mapa de dominios

| Dominio | Propósito | Puntos de entrada principales | Spec relacionada |
|---------|-----------|-------------------------------|------------------|
| `[domain-a]` | `[what it owns]` | `[modules / routes / commands]` | `[spec path]` |
| `[domain-b]` | `[what it owns]` | `[modules / routes / commands]` | `[spec path]` |

## Modelo de capas

Usa un modelo direccional fijo para que los agents no inventen arquitectura ad hoc:

`Types -> Config -> Repo -> Service -> Runtime -> UI`

Las preocupaciones transversales deben entrar por límites explícitos de provider o adapter en vez de atravesar capas directamente.

## Reglas duras de dependencias

- Las capas inferiores no deben depender de capas superiores.
- UI no debe saltarse contratos de runtime o service.
- El acceso a datos debe entrar por repositorios o adapters equivalentes.
- Las utilidades compartidas deben seguir siendo genéricas y no acumular lógica de dominio.
- Las dependencias nuevas deben justificarse en el plan o documento de diseño correspondiente.

## Interfaces transversales

| Preocupación | Límite aprobado | Notas |
|--------------|-----------------|-------|
| Logging y tracing | `[provider / utility path]` | `[structured only, no ad hoc console use]` |
| Auth | `[provider path]` | `[token/session rules]` |
| APIs externas | `[client or provider path]` | `[rate limit / retry guidance]` |
| Feature flags | `[flag boundary]` | `[ownership]` |

## Hot spots actuales

- `[area that is hardest for agents to change safely]`
- `[area with weak boundaries or fragile tests]`

## Checklist de cambio

Cuando toques código relevante para arquitectura:

1. Actualiza este archivo si cambió el mapa de dominios o los límites permitidos.
2. Actualiza el documento de diseño relacionado en `docs/design-docs/` si cambió el razonamiento.
3. Añade o actualiza un check ejecutable si la regla debe imponerse mecánicamente.
