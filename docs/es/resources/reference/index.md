# Referencia en español

These notes explain how to usar the plantillas as a working harness instead of a
loose pile of archivos.

## Internal Referencia Notes

- [`method-map.md`](./method-map.md): map common long-running fallo modes to
  the artifact or policy that addresses them first
- [`initializer-agent-playbook.md`](./initializer-agent-playbook.md): what the
  initializer should leave behind before feature work starts
- [`coding-agent-startup-flow.md`](./coding-agent-startup-flow.md): fixed
  sesión-start flow for later coding ejecuta
- [`prompt-calibration.md`](./prompt-calibration.md): how to keep root
  instrucciones sharp without making them bloated and brittle

## Primary Articles

This lista is intentionally narrow. A harness means the execution system around
the modelo: the agent loop, herramienta execution, sandboxing, estado, contexto,
verificación, termination, orchestration, and observabilidad. General prompt
ingeniería or broad agent-framework articles do not belong in the primary
lista.

The original three articles remain the backbone of the curso:

- [OpenAI: Harness ingeniería: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) (2026-02-11): agent-first repositorios, repo-local contexto, custom linting, and structural guardrails.
- [Anthropic: Effective harnesses for agents de larga duración](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (2025-11-26): initializer agent, agent de programación, lista de funcionalidades, progress log, and traspaso across contexto windows.
- [Anthropic: Harness diseño for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) (2026-03-24): planificador / generador / evaluador roles, contexto resets, harness simplification, and stale assumptions.

Only a few highly relevant 2026 articles are added:

- [OpenAI: Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) (2026-01-23): the Codex runtime harness, herramienta calls, contexto growth, and loop termination.
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (2026-01-09): evaluating the modelo and harness together, and distinguishing evaluation harnesses from agent harnesses.
- [LangChain: Improving Deep Agents with harness ingeniería](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering) (2026-02-17): holding the modelo fixed while improving system prompts, herramientas, middleware, tracing, and self-verificación to move a agent de programación from Top 30 to Top 5 on Terminal Bench 2.0.
- [Thoughtworks / Martin Fowler: Harness ingeniería for agent de programación usuarios](https://martinfowler.com/articles/harness-engineering.html) (2026-04-02): coding-agent usuario harnesses as feedforward guías and feedback sensors, with deterministic and inferential controls.
- [Cursor: Continually improving our agent harness](https://cursor.com/blog/continually-improving-agent-harness) (2026-04-30): treating the harness as a continuously improved product system with offline evals, online metrics, tool-error taxonomy, model-specific tuning, and mid-chat modelo switching.

## 2026 Extended Referencias

These are not core curso sources, but they are useful when designing específico
harness modules. This sección only keeps sources whose body directly covers the
agent loop, herramienta execution, contexto gestión, verificación, sandboxing,
control capas, or regression governance. Pure agent products, platform
announcements, equipo case studies, and benchmarks are excluded.

- [OpenAI: Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/) (2026-02-04): the harness as a reusable App Server protocol with thread lifecycle, resume, fork, diffs, and client integrations.
- [OpenAI Desarrolladores: Ejecutar long horizon tareas with Codex](https://desarrolladores.openai.com/blog/run-long-horizon-tasks-with-codex) (2026-02-23): durable proyecto memory, milestone validation, and done-when ejemplos for tareas largas.
- [OpenAI: The siguiente evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) (2026-04-15): model-native harnesses, sandbox execution, and archivo/comando execution.
- [OpenAI: An open-source spec for Codex orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) (2026-04-27): turning an issue tracker or Linear board into a multi-agent control plane.
- [Anthropic: Construyendo a C compiler with a equipo of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) (2026-02-05): parallel agent equipos, tarea locks, git synchronization, container isolation, and autonomous loops.
- [Anthropic: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) (2026-04-08): a meta-harness view that separates sesión, harness, and sandbox as swappable interfaces.
- [Anthropic: An update on recent Claude Código calidad reports](https://www.anthropic.com/engineering/april-23-postmortem) (2026-04-23): reasoning effort, contexto pruning, and system prompts as harness cambios that need regression governance.
- [LangChain: Contexto Gestión for Deep Agents](https://www.langchain.com/blog/context-management-for-deepagents) (2026-01-28): filesystem offloading, tool-call truncation, summarization, and targeted evals for context-management harnesses.
- [LangChain: Tuning Deep Agents to Work Well with Diferente Modelos](https://www.langchain.com/blog/tuning-deep-agents-different-models) (2026-04-29): model-specific harness profiles for prompts, herramienta names, middleware, and subagent configuration.
- [LangChain: Continual aprendizaje for AI agents](https://www.langchain.com/blog/continual-learning-for-ai-agents) (2026-04-05): splitting agent improvement into modelo, harness, and contexto capas, powered by traces.
- [Microsoft: Agent Harness in Agent Framework](https://devblogs.microsoft.com/agent-framework/agent-harness-in-agent-framework/) (2026-03-12): shell/filesystem harnesses, approval flow, hosted shell execution, and contexto compaction.
- [Google: Announcing ADK for Java 1.0.0](https://desarrolladores.googleblog.com/announcing-adk-for-java-100-building-the-future-of-ai-agents-in-java/) (2026-03-30): plugins, event compaction, HITL, sesión/memory services, and A2A as reusable harness primitives.
- [GitHub: Automate repositorio tareas with GitHub Agentic Flujos de trabajo](https://github.blog/ai-and-ml/automate-repositorio-tasks-with-github-agentic-workflows/) (2026-02-13): GitHub Actions as an agentic flujo de trabajo runner with safe outputs, sandboxing, permissions, and revisión.
- [AWS: AI agents in enterprises: Best practices with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/ai-agents-in-enterprises-best-practices-with-amazon-bedrock-agentcore/) (2026-02-03): enterprise harness capas across Runtime, Memory, Gateway, Identity/Policy, Observability, and Evaluations.
- [Stripe: Minions: Stripe's one-shot, end-to-end agents de programación](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) (2026-02-09) and [Part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) (2026-02-19): devbox isolation, custom agent harnesses, blueprint estado machines, rule archivos, MCP herramienta curation, security controls, and pre-push/CI feedback loops.
- [Cognition: What We Learned Construyendo Cloud Agents](https://cognition.ai/blog/what-we-learned-building-cloud-agents) (2026-04-23): VM isolation, sesión snapshot/resume, orchestration, governance, audit logging, and integrations for cloud-agent runtimes.
- [Cognition: Multi-Agents: What's Actually Working](https://cognition.ai/blog/multi-agents-working) (2026-04-22): generator-verifier loops, clean-context reviewers, smart-friend routing, manager-child coordination, and cross-agent communication límites.
- [Replit: Decision-Time Guidance: Keeping Replit Agent Fiable](https://blog.replit.com/decision-time-guidance) (2026-01-20, updated 2026-01-23): a lightweight classifier injects short situational guidance at the decision point instead of stuffing all reglas into the system prompt.
- [Vercel: How we made v0 an effective agent de programación](https://vercel.com/blog/how-we-made-v0-an-effective-coding-agent) (2026-01-07): dynamic system prompts, a streaming rewrite capa, and deterministic/model-driven autofixers.
- [Vercel: Introducing deepsec](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base) (2026-05-04): a security-focused coding-agent harness with scan, investigate, revalidate, enrich, export, plugin, and refusal-checker pasos.
- [Fuentegraph: CodeScaleBench](https://sourcegraph.com/blog/codescalebench-testing-coding-agents-on-large-codebases-and-multi-repo-software-engineering-tasks) (2026-03-03): an eval/tooling harness referencia covering MCP herramienta adoption, tool-use transcripts, benchmark QA, verifier/reproducibility gates, and prompt/preamble iteration.

Strictly 2025-only general references are excluded from the primary lista. The
original 2025 Anthropic harness article remains because it is a foundation
source for the curso.

## Suggested Lectura Order

1. `method-map.md`
2. `initializer-agent-playbook.md`
3. `coding-agent-startup-flow.md`
4. `prompt-calibration.md`
5. OpenAI Harness ingeniería
6. Anthropic Effective harnesses
7. Anthropic Harness diseño for long-running application development
8. OpenAI Codex agent loop
9. Anthropic agent evals
10. LangChain Improving Deep Agents
11. Thoughtworks / Martin Fowler Harness ingeniería for agent de programación usuarios
12. Cursor Continually improving our agent harness
