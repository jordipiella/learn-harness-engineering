# Proyecto 06: Observabilidad en runtime y depuración (capstone)

Proyecto final: construye y mide un harness completo, luego ejecuta bucles de limpieza para verificar calidad y mantenibilidad.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: código de producto completo, pero con el harness debilitado intencionalmente (solo `AGENTS.md` básico, sin `feature_list.json`, `session-handoff.md` ni `clean-state-checklist.md`). |
| `solution/` | **Implementación de referencia**: harness máximo, con todos los artefactos presentes, puntuaciones altas en `quality-document.md`, scripts de benchmark y scanners de limpieza. |

## Cómo usarlo

```sh
cd starter
npm install
# Ejecuta la suite de benchmark con el harness débil y registra los resultados

cd ../solution
npm install
# Ejecuta el mismo benchmark con el harness completo
# Ejecuta bucles de limpieza
# Compara cambios de puntuación en quality-document.md

# Ejecutar pruebas de benchmark
./scripts/benchmark.sh

# Ejecutar scanner de limpieza
./scripts/cleanup-scanner.sh
```

## Funcionalidades cubiertas

- Importar documentos
- Construir o refrescar el índice
- Responder preguntas con citas
- Feedback en runtime
- Estado de repositorio legible y reiniciable

## Lecciones relacionadas

- [Lección 11: Por qué la observabilidad pertenece al interior del harness](../../docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md)
- [Lección 12: Por qué cada sesión debe dejar un estado limpio](../../docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
