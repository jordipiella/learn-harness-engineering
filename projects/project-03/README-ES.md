# Proyecto 03: Control de alcance y verificación fundamentada

Evalúa si el control explícito de alcance y las puertas de verificación mejoran la precisión de entrega.

## Guía de directorios

| Directorio | Significado |
|------|------|
| `starter/` | **Punto de partida**: basado en la solución de P2, con chunking de documentos, extracción de metadatos, estado del índice y QA básica todavía por implementar. No existe una restricción estratégica de "una funcionalidad a la vez". |
| `solution/` | **Implementación de referencia**: todas las funcionalidades están implementadas. `AGENTS.md` incluye la estrategia de "una funcionalidad a la vez" y `feature_list.json` muestra la transición de fallo a aprobado con evidencia de verificación. |

## Cómo usarlo

```sh
cd starter
npm install
# Observa si el agent implementa varias funcionalidades a la vez (deriva de alcance)

cd ../solution
npm install
# Repite con control de alcance y compara la precisión de entrega por funcionalidad
```

## Funcionalidades cubiertas

- Chunking de documentos (por párrafos, alrededor de 500 caracteres)
- Extracción de metadatos (número de palabras, líneas y párrafos)
- Estado del índice mostrado en la UI
- Flujo básico de QA con citas de fuente

## Lecciones relacionadas

- [Lección 05: Por qué las tareas largas pierden continuidad](../../docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md)
- [Lección 06: Por qué la inicialización necesita su propia fase](../../docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
