# QUALITY_SCORE.md

Este documento rastrea si el repositorio se está fortaleciendo o debilitando con el tiempo.

## Escala de calificación

- `A`: verificado, legible, estable, límites impuestos.
- `B`: funcional con huecos menores.
- `C`: parcialmente funcional, confusión o inestabilidad notable.
- `D`: roto, inseguro o estructuralmente poco claro.

## Dominios de producto

| Dominio | Calificación | Verificación | Legibilidad para agents | Estabilidad de pruebas | Huecos clave | Última actualización |
|---------|--------------|--------------|-------------------------|------------------------|--------------|----------------------|
| `[domain-a]` | - | - | - | - | - | - |
| `[domain-b]` | - | - | - | - | - | - |
| `[domain-c]` | - | - | - | - | - | - |

## Capas arquitectónicas

| Capa | Calificación | Enforcement de límites | Legibilidad para agents | Huecos clave | Última actualización |
|------|--------------|------------------------|-------------------------|--------------|----------------------|
| Types | - | - | - | - | - |
| Services | - | - | - | - | - |
| Runtime | - | - | - | - | - |
| UI | - | - | - | - | - |

## Snapshots de benchmark

| Fecha | Variante de harness | Tasa de finalización | Reintentos | Defectos antes de revisión | Notas |
|-------|---------------------|----------------------|------------|----------------------------|-------|
| YYYY-MM-DD | `[baseline / improved / simplified]` | - | - | - | - |

## Log de simplificación

| Fecha | Componente eliminado | Resultado | Decisión |
|-------|----------------------|-----------|----------|
| YYYY-MM-DD | `[component]` | `[degraded / unchanged]` | `[restore / keep removed]` |
