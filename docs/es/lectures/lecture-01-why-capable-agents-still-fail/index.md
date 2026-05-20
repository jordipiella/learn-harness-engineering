[Versión en chino →](../../../zh/lectures/lecture-01-why-capable-agents-still-fail/)

> Ejemplos de código: [código/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/lectures/lecture-01-why-capable-agents-still-fail/code/)
> Proyecto práctico: [Proyecto 01. Prompt-only vs. reglas primero](./../../projects/project-01-baseline-vs-minimal-harness/index.md)

# Lección 01. Modelos potentes no significan ejecución fiable

You consider yourself well-traveled in the AI world — Claude Pro subscription, GPT-4o API key, SWE-bench leaderboard numbers memorized. One day you finally hand a real proyecto to an AI agent, brimming with confidence. The resultado? It añade a feature but breaks the pruebas, arregla a bug but introduces two more, ejecuta for 20 minutes and proudly declares "terminado" — and you look at the código and it's not what you asked for at all.

Your first instinct? "This modelo isn't good enough. Time to upgrade." Hold on. Before you reach for your wallet, consider that the problema might not be the modelo at all.

Let's look at some numbers. As of late 2025, the strongest agents de programación on SWE-bench Verified achieve roughly 50-60%. And that's on carefully selected tareas with claro issue descriptions and existing prueba cases. Move to your diario development entorno — vago requirements, no existing pruebas, implícito business reglas scattered everywhere — and that number only goes down.

But behind these numbers lies a counterintuitive truth.

## El mismo caballo, destinos distintos

Anthropic ran a controlled experiment. Mismo prompt ("construir a 2D retro game maker"), mismo modelo (Opus 4.5). First ejecutar: bare, no soporte — 20 minutes, $9, the game's core funcionalidades didn't work at all. Second ejecutar: full harness (planificador + generador + evaluador three-agent arquitectura) — 6 hours, $200, the game was playable.

They didn't cambio the modelo. Opus 4.5 was still Opus 4.5. What changed was the saddle.

OpenAI's 2025 harness ingeniería article puts it plainly: Codex in a well-harnessed repositorio goes from "unreliable" to "fiable." Note their wording — not "a bit better," but a qualitative shift. Like a thoroughbred: you can ride it without a saddle, but you won't go far, won't go fast, and falling off is no surprise. The harness is that saddle — **everything in the ingeniería infrastructure outside the modelo weights.**

## Dónde se atascan realmente los agents

So what specifically goes incorrecto?

The most common: you never clearly defined the tarea. You say "añadir a search feature," and the agent's comprensión is completely diferente from yours — search what? Full-text or estructurado? Pagination? Highlighting? You didn't specify, so the agent guesses. A correcto guess is luck; a incorrecto one costs more to arreglar than being específico would have cost in the first place. It's like walking into a restaurant and telling the chef "I'll have fish" — whether you get it braised, steamed, or in a hot pot is entirely up to chance.

Even when you do specify, the proyecto has implícito architectural conventions the agent doesn't know. Your equipo standardized on SQLAlchemy 2.0 syntax, but the agent escribe 1.x código by default. All API endpoints must usar OAuth 2.0 authentication, but that rule only exists in your head and a Slack message from three months ago. The agent can't see these — it's not that it doesn't want to comply, it literally doesn't know these reglas exist.

The entorno is a trap too. Incomplete dev entorno, faltante dependencies, incorrecto herramienta versions. The agent burns precious contexto window on `pip install` fallos and Node version mismatches instead of solving your real tarea. Like hiring a skilled carpenter but forgetting to proporcionar a hammer, nails, or a level workbench — no matter how talented, they can't do the job.

Even more common: there's simply no way to verificar. No pruebas, no lint, or verificación comandos never communicated to the agent. The agent escribe código, looks at it, decides it's fine, says "terminado." It's like asking a student to submit homework with no answer key — they think they got it right, but when you grade it there's a pile of errors. Anthropic also observed an interesting phenomenon: when agents sense contexto is ejecutando low, they rush to finish, skip verificación, and choose a simple solución over the optimal one. They call it "contexto anxiety" — the mismo thing that happens when you realize time is almost up on an exam and empezar randomly guessing on the remaining multiple-choice questions.

Long tareas spanning sesións are even worse — all discoveries from the anterior sesión are lost, and every new sesión has to re-explore the proyecto estructura and re-understand the código organization. Agents without persistent estado see fallo rates spike sharply on tareas exceeding 30 minutes.

## Terminología clave

With these scenarios in mind, these concepts are no longer just jargon:

- **Capability Gap**: The huge gulf between modelo performance on benchmarks and performance on real tareas. A 50-60% pass rate on SWE-bench Verified means nearly half of real issues can't be resolved.
- **Harness**: Everything outside the modelo — instrucciones, herramientas, entorno, gestión de estado, feedback de verificación. If it's not modelo weights, it's harness. What we've been calling the "saddle."
- **Harness-Induced Fallo**: The modelo has enough capability, but the execution entorno has structural defects. Anthropic's controlled experiment already proved this.
- **Verification Gap**: The gap between the agent's confidence in its salida and real correctness. The agent says "I'm terminado" when it's not terminado — this is the most common fallo mode.
- **Diagnostic Loop**: Execute, observe fallo, attribute to a específico harness capa, arreglar that capa, re-execute. This is the core methodology of harness ingeniería.
- **Definición de Terminado**: A set of machine-verifiable condiciones — pruebas pass, lint is limpio, type checks pass. Without an explícito definition of terminado, the agent will invent its own.

## Cuando algo falla, arregla primero el harness

Core principle: **When things fail, don't swap the modelo first — check the harness.** If the mismo modelo tiene éxito on similar, well-structured tareas, assume it's a harness problema. It's like a car breaking down — you don't immediately suspect the engine. You check if it's out of gas first.

Concrete pasos:

**Attribute every fallo to a específico capa.** Don't just say "the modelo sucks." Ask: was the tarea unclear? Was contexto insufficient? Were there no verificación methods? Map each fallo to one of the five fallo capas (tarea specification, contexto provision, execution entorno, feedback de verificación, gestión de estado). Construir this habit, and you'll find "the modelo isn't good enough" appearing less and less in your logs.

**Escribir an explícito Definición de Terminado for every tarea.** Don't say "añadir a search feature." Say:
```
Completion criteria:
- New endpoint GET /api/search?q=xxx
- Supports pagination, default 20 items
- Results include highlighted snippets
- All new code passes pytest
- Type checking passes (mypy --strict)
```

**Crear an AGENTS.md archivo.** Put it in the repo root to tell the agent the proyecto's tech stack, architectural conventions, and verificación comandos. This is the first paso in harness ingeniería and the highest-ROI paso you can take. One `AGENTS.md` archivo might be more effective than upgrading to a more expensive modelo — I'm not joking.

**Construir a bucle diagnóstico.** Don't treat fallos as "the modelo being dumb again." Treat them as signals that your harness has a defect. Each fallo, identify the capa, arreglar it, never fail that way again. After a few rounds, your harness gets stronger and agent performance stabilizes. Like road repair — every pothole you fill hace the siguiente stretch smoother.

**Quantify improvements.** Keep a simple log: did each tarea succeed or fail, and which capa caused the fallo. After a few rounds you'll see which capa is the bottleneck — focus your energy there.

## El experimento del millón de líneas

OpenAI ran an aggressive experiment in 2025: usar Codex to construir a completo internal product from an empty git repositorio. Five months later, the repo had roughly one million lines of código — application logic, infrastructure, tooling, documentation, internal dev herramientas — all agent-generated. Three engineers drove Codex, opening and merging about 1,500 PRs. An average of 3.5 PRs per person per day.

The key constraint: **humans never escribir código directly.** This wasn't a gimmick — it was designed to force the equipo to figure out what cambios when the engineer's primary job is no longer escritura código, but designing entornos, expressing intent, and construyendo feedback loops.

Early progress was slower than expected. Not because Codex wasn't capaz, but because the entorno wasn't completo enough — the agent lacked necessary herramientas, abstractions, and internal structures to advance high-level objectives. The engineers' work became: breaking large objetivos into small construyendo blocks (diseño, código, revisión, prueba), letting the agent assemble them, then usando those blocks to unlock more complex tareas. When something falló, the arreglar was almost never "try harder" — it was "what capability is the agent faltante, and how do we hacer it both understandable and executable?"

This experiment directly proves this lección's core thesis: **the mismo modelo produces fundamentally diferente salida in a bare entorno versus one with a completo harness.** The modelo didn't cambio. The entorno did.

> Fuente: [OpenAI: Harness ingeniería: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)

## Un ejemplo más cercano

A equipo usado Claude Sonnet to añadir a new API endpoint to a mid-sized Python web app (FastAPI + PostgreSQL + Redis, ~15,000 lines of código).

Initially they gave only one sentence: "añadir usuario preferences endpoints under `/api/v2/usuarios`." The resultado? The agent spent 40% of its contexto window exploring the repo estructura, produced código that looked reasonable but didn't follow the proyecto's error handling patterns, usado old SQLAlchemy syntax, and declared finalización while the endpoint had runtime errors. The siguiente sesión had to redo all the discovery work.

Later they added `AGENTS.md` (describing proyecto arquitectura and tech stack versions), explícito verificación comandos (`pytest pruebas/api/v2/ && python -m mypy src/`), and arquitectura decision records. The mismo modelo succeeded in all three independent ejecuta, with ~60% better contexto efficiency.

They didn't cambio the modelo. They changed the harness.

## Ideas clave

- Modelo capability and execution reliability are diferente things. A thoroughbred still needs a good saddle.
- When things fail, check the harness first, then the modelo. Swapping modelos is the most expensive option — and often it's not even a modelo problema.
- Every fallo is a signal: your harness has a structural defect. Find it, arreglar it.
- Five defense capas: tarea specification, contexto provision, execution entorno, feedback de verificación, gestión de estado. Check them systematically, like a doctor ruling out the most common causes first.
- One `AGENTS.md` archivo might be more effective than upgrading to a more expensive modelo. Seriously.

## Lecturas adicionales

- [OpenAI: Harness Ingeniería — Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [HumanLayer: Skill Issue — Harness Ingeniería for Coding Agents](https://humanlayer.dev/articles/harness-engineering-for-coding-agents/)
- [SWE-bench Leaderboard](https://www.swebench.com/)
- [Thoughtworks Technology Radar: Harness Ingeniería](https://www.thoughtworks.com/radar)

## Ejercicios

1. **Comparación experiment**: Pick a codebase you know well and a non-trivial modification tarea. First, ejecutar the agent with no harness soporte and record fallos. Then añadir an `AGENTS.md` with explícito verificación comandos and ejecutar again with the mismo agent. Comparar resultados, attributing each fallo to one of the five defense capas.

2. **Verification gap measurement**: Pick 5 coding tareas. After each tarea, record whether the agent claims finalización, then verificar real correctness with independent pruebas. Calculate the proportion of times the agent claims terminado when it's actually not terminado — that's your verificación gap. Then think: what verificación comandos would reduce this proportion?

3. **Diagnostic loop práctica**: Find a tarea where the agent repeatedly falla in your proyecto. Ejecutar once, record the fallo. Attribute it to one of the five capas. Arreglar that capa. Ejecutar again. Repeat three to five rounds, recording improvements each time.
