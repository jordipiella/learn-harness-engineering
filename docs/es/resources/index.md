# Biblioteca de recursos en español

Esta carpeta convierte los métodos del curso en plantillas listas para copiar y referencias compactas que puedes usar en un repositorio real.

## Cuándo usarla

Empieza aquí cuando quieras que Codex, Claude Code u otro agent de programación trabaje durante varias sesiones sin redescubrir constantemente la configuración, el estado y el alcance.

Es especialmente útil cuando:

- el trabajo se extiende durante varias sesiones
- hay muchas funcionalidades y es fácil dejarlas a medias
- los agents tienden a declarar victoria demasiado pronto
- los pasos de arranque se redescubren cada vez

## Empieza por aquí

Para una configuración mínima, usa:

- instrucciones raíz: [`templates/AGENTS.md`](./templates/AGENTS.md) o [`templates/CLAUDE.md`](./templates/CLAUDE.md)
- estado de funcionalidades: [`templates/feature_list.json`](./templates/feature_list.json)
- registro de progreso: [`templates/claude-progress.md`](./templates/claude-progress.md)
- referencia de arranque: [`templates/init.sh`](./templates/init.sh)

Después añade:

- traspaso entre sesiones: [`templates/session-handoff.md`](./templates/session-handoff.md)
- checklist de salida limpia: [`templates/clean-state-checklist.md`](./templates/clean-state-checklist.md)
- rúbrica de evaluación: [`templates/evaluator-rubric.md`](./templates/evaluator-rubric.md)

Para una estructura más completa al estilo del artículo de OpenAI sobre Harness Engineering, usa el paquete avanzado:

- [`openai-advanced/index.md`](./openai-advanced/index.md)

## Estructura de la biblioteca

- [`templates/`](./templates/index.md): plantillas para copiar en un repositorio real
- [`reference/`](./reference/index.md): notas de método, flujo de arranque y mapas de modos de fallo
- [`openai-advanced/`](./openai-advanced/index.md): esqueleto avanzado de repositorio, documentos de sistema de registro y plantillas de gobernanza agent-first

## Pack mínimo recomendado

- `AGENTS.md` o `CLAUDE.md`
- `feature_list.json`
- `claude-progress.md`
- `init.sh`

Estos cuatro archivos bastan para hacer que la mayoría de flujos con agents sean notablemente más estables.
