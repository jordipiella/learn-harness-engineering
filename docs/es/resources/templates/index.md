# Plantilla Guía

These plantillas are ready to copy into your own proyecto. Each one serves a específico purpose in the agent's flujo de trabajo. Edit the contents to match your proyecto's comandos, paths, feature names, and verificación pasos.

## How to Get Iniciado

Copy these four archivos into your proyecto root first:

1. `AGENTS.md` or `CLAUDE.md`
2. `init.sh`
3. `claude-progress.md`
4. `feature_list.json`

Añadir the remaining archivos as your proyecto grows.

---

## AGENTS.md

The root instrucción archivo. This is the first thing the agent reads when it starts a sesión. It defines the operating reglas: what to do before escritura código, how to work, and how to wrap up.

**How to usar it:**

- Copy to your proyecto root directory
- Replace the startup flujo de trabajo pasos with your real proyecto paths and comandos
- Adjust the working reglas to match your equipo's conventions
- Keep the definition of terminado sección — it's the most important part

**What it does for the agent:**

- Tells it to leer progress and feature estado before starting work
- Forces it to work on one feature at a time
- Requires evidence before marking anything as terminado
- Defines what a limpio end-of-sesión looks like

Usar `AGENTS.md` for Codex or other agents. Usar `CLAUDE.md` if you're working with Claude Código — the estructura is the mismo, just formatted for Claude's instrucción style.

## init.sh

The startup script. Ejecuta dependency installation, verificación, and prints the empezar comando — all in one shot.

**How to usar it:**

- Copy to your proyecto root
- Edit these three variables at the top:
  - `INSTALL_CMD` — your dependency install comando (e.g. `npm install`, `pip install -r requirements.txt`)
  - `VERIFY_CMD` — your basic verificación comando (e.g. `npm prueba`, `pytest`)
  - `START_CMD` — your dev server empezar comando (e.g. `npm ejecutar dev`)
- Hacer it executable: `chmod +x init.sh`

**What it does:**

1. Prints the current directory (so you can confirm it's ejecutando in the right place)
2. Installs dependencies
3. Ejecuta the verificación comando
4. Prints the empezar comando (or ejecuta it if `RUN_START_COMMAND=1` is set)

If verificación falla, the agent should stop and arreglar the baseline before doing anything else.

## claude-progress.md

The progress log. Every sesión escribe to this archivo, and every new sesión reads it first.

**How to usar it:**

- Copy to your proyecto root
- Fill in the "Current Verified Estado" sección with your proyecto's info
- After each sesión, update the sesión record

**What each field means:**

- **Current Verified Estado** — the single fuente de verdad for where the proyecto stands
  - `Repository root directory` — where the proyecto lives
  - `Standard startup ruta` — the comando to get the proyecto ejecutando
  - `Standard verificación ruta` — the comando to ejecutar pruebas
  - `Highest priority unfinished feature` — what the siguiente sesión should work on
  - `Current blocker` — anything that's stuck
- **Session Record** — one entry per sesión
  - `Objetivo` — what you planned to do
  - `Completed` — what actually got terminado
  - `Verification ejecutar` — what pruebas were executed
  - `Evidence recorded` — what proof was captured
  - `Commits` — what was committed
  - `Known risks` — what might be broken
  - `Siguiente best action` — where the siguiente sesión should empezar

## feature_list.json

The feature tracker. A machine-readable lista of every feature the agent needs to implement, along with its status, verificación pasos, and evidence.

**How to usar it:**

- Copy to your proyecto root
- Replace the ejemplo funcionalidades with your own
- Each feature needs:
  - `id` — a short unique identifier
  - `priority` — integer, lower = higher priority
  - `area` — which part of the app (e.g. "chat", "import", "search")
  - `title` — short description
  - `user_visible_behavior` — what the usuario should see when it works
  - `status` — one of `not_started`, `in_progress`, `blocked`, `passing`
  - `verificación` — step-by-step instrucciones to confirm it works
  - `evidence` — recorded proof that verificación passed (filled in by the agent)
  - `notes` — any extra contexto

**Status reglas:**

- `not_started` — hasn't been touched
- `in_progress` — the one feature currently being worked on (only one at a time)
- `blocked` — can't proceed due to a documented issue
- `passing` — verificación passed and evidence is recorded

The agent should only have one feature in `in_progress` at any time.

## sesión-traspaso.md

A compact traspaso note between sesións. Usar this when a sesión ends and you want the siguiente one to pick up quickly.

**How to usar it:**

- Copy to your proyecto root
- Fill it out at the end of each sesión (or have the agent fill it out)

**What each sección covers:**

- **Currently verified** — what's confirmed working and what verificación was ejecutar
- **Cambios this sesión** — what código or infrastructure changed
- **Still broken or unverified** — known issues and risky areas
- **Siguiente best action** — what the siguiente sesión should do, and what not to touch
- **Comandos** — startup, verificación, and depurar comandos for rápido referencia

This archivo is optional for small sesións. It becomes important when sesións are long or when the proyecto has multiple active areas.

## clean-state-checklist.md

A checklist to ejecutar through before ending each sesión. Hace sure the repo is in a good estado for the siguiente sesión to empezar cleanly.

**How to usar it:**

- Copy to your proyecto root
- Ejecutar through it before you close a sesión
- The agent should also check these items as part of its end-of-sesión routine

**What it checks:**

- Standard startup still works
- Standard verificación still ejecuta
- Progress log is updated
- Feature lista reflects real estado (no false `passing` entries)
- No half-finished work left unrecorded
- Siguiente sesión can continue without manual arregla

## evaluator-rubric.md

A scorecard for reviewing agent salida calidad. Usar this after a sesión or at proyecto milestones to evaluate whether the work meets the bar.

**How to usar it:**

- Copy to your proyecto root
- After a sesión (or a set of sesións), score the agent's work across six dimensions
- Each dimension is scored 0-2

**The six dimensions:**

1. **Correctness** — does the implementation match the target behavior?
2. **Verification** — were the required checks actually ejecutar, with evidence?
3. **Scope discipline** — did the agent stay within the selected feature?
4. **Reliability** — does the resultado survive a restart or re-run?
5. **Maintainability** — is the código and documentation claro enough for the siguiente sesión?
6. **Handoff readiness** — can a new sesión continue usando only repo artifacts?

**Conclusion options:**

- Accept — meets the bar
- Revise — needs arregla before accepting
- Block — fundamental issues that need to be resolved first

**Important: the evaluador needs tuning.** Out of the box, agents are poor self-judges — they identify issues then talk themselves into approving. You will need to iterate:

1. Ejecutar the evaluador on a completed sprint.
2. Comparar its scores against your own human judgment.
3. Where they diverge, hacer the rúbrica more específico about pass/fail criterios.
4. Re-run and check alignment.
5. Repeat until the evaluador consistently matches human revisión.

Plan for 3-5 tuning rounds. Record each cambio so you can track what improved alignment.

## quality-document.md

A calidad snapshot that grades each product domain and architectural capa in your proyecto. Tracks codebase health over time, not just individual sesión salida.

**How to usar it:**

- Copy to your proyecto root
- Before starting a sesión: leer it to entender where the codebase is weakest
- After a sesión: update grades based on what changed
- Over time: comparar snapshots to see which harness cambios actually improved codebase health

**What it grades:**

- **Product domains** (e.g., document import, Q&A flow, indexing): each domain gets a grade (A-D) across verificación status, agent legibility, prueba stability, and key gaps
- **Architectural capas** (e.g., main proceso, preload, renderer, services): each capa gets a grade for boundary enforcement and agent legibility

**Why it matters:**

The evaluador rúbrica scores individual agent outputs. The calidad document scores the codebase itself. They answer diferente questions:

- Evaluador rúbrica: "Did the agent do good work this sesión?"
- Calidad document: "Is the proyecto getting stronger or weaker over time?"

**When to update:**

- After each significant sesión
- Before benchmark comparisons
- After cleanup or simplification passes
- When onboarding a new agent or modelo to the proyecto

**Harness simplification tie-in:**

The calidad document also supports harness simplification. Every harness component encodes an assumption about what the modelo cannot do. As modelos improve, these assumptions go stale. To check whether a component is still needed:

1. Take a calidad document snapshot.
2. Remove one harness component.
3. Ejecutar the benchmark tarea suite.
4. Take another snapshot.
5. Comparar — if grades didn't drop, the component was overhead. If they did, restore it.
