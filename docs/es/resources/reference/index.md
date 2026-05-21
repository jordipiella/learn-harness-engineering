# Referencia en español

Estas notas explican cómo usar las plantillas como un harness de trabajo, no como una pila suelta de archivos.

## Notas internas de referencia

- [`method-map.md`](./method-map.md): mapea modos de fallo comunes en tareas largas al artefacto o política que suele corregirlos primero.
- [`initializer-agent-playbook.md`](./initializer-agent-playbook.md): qué debería dejar preparado el initializer antes de empezar trabajo de funcionalidades.
- [`coding-agent-startup-flow.md`](./coding-agent-startup-flow.md): flujo fijo de inicio de sesión para ejecuciones posteriores de coding agents.
- [`prompt-calibration.md`](./prompt-calibration.md): cómo mantener instrucciones raíz precisas sin volverlas infladas y frágiles.

## Artículos principales

Esta lista es intencionalmente estrecha. Un harness es el sistema de ejecución alrededor del modelo: loop del agent, ejecución de herramientas, sandboxing, estado, contexto, verificación, terminación, orquestación y observabilidad. La ingeniería de prompts general o los artículos amplios sobre frameworks de agents no pertenecen a la lista principal.

Los tres artículos originales siguen siendo la columna vertebral del curso:

- [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) (2026-02-11): repositorios agent-first, contexto local al repo, linting personalizado y guardrails estructurales.
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (2025-11-26): initializer agent, coding agent, lista de funcionalidades, log de progreso y handoff entre ventanas de contexto.
- [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) (2026-03-24): roles planner/generator/evaluator, reinicios de contexto, simplificación de harness y supuestos obsoletos.

Solo se añaden unos pocos artículos de 2026 muy relevantes:

- [OpenAI: Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) (2026-01-23): runtime harness de Codex, llamadas a herramientas, crecimiento de contexto y terminación de loop.
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (2026-01-09): evaluar modelo y harness juntos, y distinguir evaluation harnesses de agent harnesses.
- [LangChain: Improving Deep Agents with harness engineering](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering) (2026-02-17): mantener fijo el modelo mientras se mejoran system prompts, herramientas, middleware, tracing y autoverificación.
- [Thoughtworks / Martin Fowler: Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html) (2026-04-02): harnesses de usuario para coding agents como guías feedforward y sensores de feedback.
- [Cursor: Continually improving our agent harness](https://cursor.com/blog/continually-improving-agent-harness) (2026-04-30): tratar el harness como producto con evals offline, métricas online, taxonomía de errores de herramientas y tuning por modelo.

## Referencias extendidas de 2026

No son fuentes centrales del curso, pero son útiles al diseñar módulos concretos de harness. Esta sección solo conserva fuentes cuyo cuerpo cubre directamente loop de agent, ejecución de herramientas, gestión de contexto, verificación, sandboxing, capas de control o gobernanza de regresiones.

- [OpenAI: Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/) (2026-02-04): harness como protocolo App Server reutilizable, ciclo de vida de threads, resume, fork, diffs e integraciones cliente.
- [OpenAI Developers: Run long horizon tasks with Codex](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex) (2026-02-23): memoria duradera de proyecto, validación por hitos y ejemplos done-when para tareas largas.
- [OpenAI: The next evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) (2026-04-15): harnesses nativos de modelo, ejecución sandbox y ejecución de archivos/comandos.
- [OpenAI: An open-source spec for Codex orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) (2026-04-27): convertir un issue tracker o tablero Linear en plano de control multi-agent.
- [Anthropic: Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) (2026-02-05): equipos paralelos de agents, locks de tareas, sincronización Git, aislamiento por contenedor y loops autónomos.
- [Anthropic: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) (2026-04-08): vista meta-harness que separa sesión, harness y sandbox como interfaces intercambiables.
- [Anthropic: An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem) (2026-04-23): razonamiento, pruning de contexto y system prompts como cambios de harness que necesitan gobernanza de regresiones.
- [LangChain: Context Management for Deep Agents](https://www.langchain.com/blog/context-management-for-deepagents) (2026-01-28): descarga al filesystem, truncamiento de tool calls, resumen y evals dirigidas para harnesses de gestión de contexto.
- [LangChain: Tuning Deep Agents to Work Well with Different Models](https://www.langchain.com/blog/tuning-deep-agents-different-models) (2026-04-29): perfiles de harness por modelo para prompts, nombres de herramientas, middleware y configuración de subagents.
- [LangChain: Continual Learning for AI agents](https://www.langchain.com/blog/continual-learning-for-ai-agents) (2026-04-05): dividir la mejora del agent en capas de modelo, harness y contexto, impulsadas por trazas.
- [Microsoft: Agent Harness in Agent Framework](https://devblogs.microsoft.com/agent-framework/agent-harness-in-agent-framework/) (2026-03-12): harnesses shell/filesystem, flujos de aprobación, shell hospedada y compactación de contexto.
- [Google: Announcing ADK for Java 1.0.0](https://developers.googleblog.com/announcing-adk-for-java-100-building-the-future-of-ai-agents-in-java/) (2026-03-30): plugins, compactación de eventos, HITL, servicios de sesión/memoria y A2A como primitivas reutilizables de harness.
- [GitHub: Automate repository tasks with GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repositorio-tasks-with-github-agentic-workflows/) (2026-02-13): GitHub Actions como runner de workflows agentic con salidas seguras, sandboxing, permisos y revisión.
- [AWS: AI agents in enterprises: Best practices with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/ai-agents-in-enterprises-best-practices-with-amazon-bedrock-agentcore/) (2026-02-03): capas empresariales de harness para Runtime, Memory, Gateway, Identity/Policy, Observability y Evaluations.
- [Stripe: Minions: Stripe's one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) (2026-02-09) y [Part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) (2026-02-19): aislamiento devbox, harnesses personalizados, máquinas de estado blueprint, archivos de reglas, curación de herramientas MCP, controles de seguridad y feedback pre-push/CI.
- [Cognition: What We Learned Building Cloud Agents](https://cognition.ai/blog/what-we-learned-building-cloud-agents) (2026-04-23): aislamiento VM, snapshot/resume de sesión, orquestación, gobernanza, auditoría e integraciones para runtimes de cloud agents.
- [Cognition: Multi-Agents: What's Actually Working](https://cognition.ai/blog/multi-agents-working) (2026-04-22): loops generator-verifier, reviewers con contexto limpio, routing smart-friend, coordinación manager-child y límites de comunicación cross-agent.
- [Replit: Decision-Time Guidance: Keeping Replit Agent Reliable](https://blog.replit.com/decision-time-guidance) (2026-01-20, actualizado 2026-01-23): un clasificador ligero inyecta guía situacional corta en el punto de decisión en vez de meter todas las reglas en el system prompt.
- [Vercel: How we made v0 an effective coding agent](https://vercel.com/blog/how-we-made-v0-an-effective-coding-agent) (2026-01-07): system prompts dinámicos, capa de streaming rewrite y autofixers deterministas o guiados por modelo.
- [Vercel: Introducing deepsec](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base) (2026-05-04): harness de coding agent enfocado en seguridad con scan, investigación, revalidación, enriquecimiento, exportación, plugin y refusal-checker.
- [Sourcegraph: CodeScaleBench](https://sourcegraph.com/blog/codescalebench-testing-coding-agents-on-large-codebases-and-multi-repo-software-engineering-tasks) (2026-03-03): referencia de eval/tooling harness con adopción MCP, transcripciones de uso de herramientas, QA de benchmark, puertas de verificador/reproducibilidad e iteración de prompt/preamble.

Las referencias generales solo de 2025 quedan fuera de la lista principal. El artículo original de Anthropic de 2025 se mantiene porque es una fuente fundacional para el curso.

## Orden de lectura sugerido

1. `method-map.md`
2. `initializer-agent-playbook.md`
3. `coding-agent-startup-flow.md`
4. `prompt-calibration.md`
5. OpenAI Harness engineering
6. Anthropic Effective harnesses
7. Anthropic Harness design for long-running application development
8. OpenAI Codex agent loop
9. Anthropic agent evals
10. LangChain Improving Deep Agents
11. Thoughtworks / Martin Fowler Harness engineering for coding agent users
12. Cursor Continually improving our agent harness
