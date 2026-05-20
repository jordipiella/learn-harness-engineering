[English](https://walkinglabs.github.io/learn-harness-engineering/en/) · **Español** · [中文](https://walkinglabs.github.io/learn-harness-engineering/zh/) · [Русский](https://walkinglabs.github.io/learn-harness-engineering/ru/) · [Tiếng Việt](https://walkinglabs.github.io/learn-harness-engineering/vi/) · [한국어](https://walkinglabs.github.io/learn-harness-engineering/ko/) · [Oʻzbekcha](https://walkinglabs.github.io/learn-harness-engineering/uz/)

# Learn Harness Engineering

> **Un curso basado en proyectos para construir el entorno, la gestión de estado, la verificación y los mecanismos de control que hacen fiables a los agents de programación con IA.**

Aprender Harness Ingeniería is a curso dedicado to the ingeniería of agents de programación con IA. We have deeply studied and synthesized the most avanzado Harness Ingeniería theories and practices in the industry. Our core references include:

- [OpenAI: Harness ingeniería: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective harnesses for agents de larga duración](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness diseño for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Awesome Harness Ingeniería](https://github.com/walkinglabs/awesome-harness-engineering)

> **Rápido empezar?** The [`skills/harness-creator/`](./skills/) skill can help you scaffold a production-grade harness (AGENTS.md, lista de funcionalidadess, init.sh, verificación flujos de trabajo) for your own proyecto in minutes.

---

## Table of Contents

- [✨ Vista previa visual](#-visual-preview)
- [Qué significa realmente Harness Ingeniería](#what-harness-engineering-actually-means)
- [Inicio rápido: Improve Your Agent Today](#quick-start-improve-your-agent-today)
- [Proyecto final: A Real App](#capstone-project-a-real-app)
- [Ruta de aprendizaje](#learning-path)
- [Temario](#syllabus)
- [Habilidades](#skills)
- [Other Courses](#other-courses)

---

## ✨ Vista previa visual

### 🏠 Página principal del curso
> A comprehensive curso outline and introduction to core philosophies, providing a claro ruta to get iniciado.

![Curso homepage preview](./docs/public/screenshots/readme/en-home.png)

### 📖 Lecciones inmersivas
> Deep dives into real-world pain points and práctico proyectos (like Proyecto 01) for an immersive aprendizaje experience.

![Curso lección preview](./docs/public/screenshots/readme/en-lecture-01.png)

### 🗂️ Ready-to-Use Biblioteca de recursos
> Plantillas and referencia configurations designed to solve common pitfalls in multi-turn AI agent development, such as contexto loss and premature tarea finalización.

![Recurso biblioteca preview](./docs/public/screenshots/readme/en-resources.png)

## Libros del curso en PDF

The repositorio now includes a PDF construir pipeline for the curso content.

- Ejecutar `npm ejecutar pdf:construir` to generate English and Chinese PDFs locally.
- Salida archivos are written to `artifacts/pdfs/`.
- Ejecutar `npm ejecutar screenshots:readme` if you want to refresh the README preview images.
- GitHub Actions flujo de trabajo [`release-course-pdfs.yml`](./.github/workflows/release-course-pdfs.yml) can construir the PDFs and publish them to GitHub Releases.

---

## El modelo es inteligente; el harness lo vuelve fiable

There's a hard truth most people aprender the hard way: **the strongest modelo in the world will still fail on real ingeniería tareas if you don't construir a proper entorno around it.**

You've probably seen this yourself. You give Claude or GPT a tarea in your repo. It starts well — reads archivos, escribe código, looks productive. Then something goes incorrecto. It skips a paso. It breaks a prueba. It says "terminado" but nothing actually works. You spend more time cleaning up than if you'd terminado it yourself.

This isn't a modelo problema. It's a harness problema.

The evidence is claro. Anthropic ran a controlled experiment: mismo modelo (Opus 4.5), mismo prompt ("construir a 2D retro game editor"). Without a harness, it spent $9 in 20 minutes and produced something that didn't work. With a full harness (planificador + generador + evaluador), it spent $200 in 6 hours and built a game you could actually play. The modelo didn't cambio. The harness did.

OpenAI reported the mismo thing with Codex: in a well-harnessed repositorio, the mismo modelo goes from "unreliable" to "fiable." Not a marginal improvement — a qualitative shift.

**This curso enseña you how to construir that entorno.**

```text
                    THE HARNESS PATTERN
                    ====================

    You --> give task --> Agent reads harness files --> Agent executes
                                                        |
                                              harness governs every step:
                                              |
                                              +--> Instructions: what to do, in what order
                                              +--> Scope:       one feature at a time, no overreach
                                              +--> State:       progress log, feature list, git history
                                              +--> Verification: tests, lint, type-check, smoke runs
                                              +--> Lifecycle:   init at start, clean state at end
                                              |
                                              v
                                         Agent stops only when
                                         verification passes
```

---

## Qué significa realmente Harness Ingeniería

Harness ingeniería is about construyendo a completo entorno de trabajo around the modelo so it produces fiable resultados. It's not about escritura better prompts. It's about designing the system the modelo operates inside.

A harness has five subsystems:

```text
    ┌─────────────────────────────────────────────────────────────────┐
    │                        THE HARNESS                              │
    │                                                                 │
    │   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
    │   │ Instructions  │  │    State     │  │   Verification       │ │
    │   │              │  │              │  │                      │ │
    │   │ AGENTS.md    │  │ progress.md  │  │ tests + lint         │ │
    │   │ CLAUDE.md    │  │ feature_list │  │ type-check           │ │
    │   │ feature_list │  │ git log      │  │ smoke runs           │ │
    │   │ docs/        │  │ session hand │  │ e2e pipeline         │ │
    │   └──────────────┘  └──────────────┘  └──────────────────────┘ │
    │                                                                 │
    │   ┌──────────────┐  ┌──────────────────────────────────────┐   │
    │   │    Scope     │  │         Session Lifecycle             │   │
    │   │              │  │                                      │   │
    │   │ one feature  │  │ init.sh at start                     │   │
    │   │ at a time   │  │ clean-state checklist at end          │   │
    │   │ definition   │  │ handoff note for next session        │   │
    │   │ of done      │  │ commit only when safe to resume      │   │
    │   └──────────────┘  └──────────────────────────────────────┘   │
    │                                                                 │
    └─────────────────────────────────────────────────────────────────┘

    The MODEL decides what code to write.
    The HARNESS governs when, where, and how it writes it.
    The harness doesn't make the model smarter.
    It makes the model's output reliable.
```

Each subsystem has one job:

- **Instrucciones** — Tell the agent what to do, in what order, and what to leer before starting. Not one giant archivo; a progressive disclosure estructura the agent navigates on demand.
- **Estado** — Track what's been terminado, what's in progress, and what's siguiente. Persisted to disk so the siguiente sesión picks up exactly where the last one left off.
- **Verification** — Only a passing prueba suite counts as evidence. The agent cannot declare victory without runnable proof.
- **Scope** — Constrain the agent to one feature at a time. No overreach. No half-finishing three things. No rewriting the lista de funcionalidades to hide unfinished work.
- **Session Lifecycle** — Initialize at the empezar. Limpio up at the end. Leave a limpio restart ruta for the siguiente sesión.

---

## Why This Curso Exists

The question isn't "can modelos escribir código?" They can. The question is: **can they de forma fiable completo real ingeniería tareas inside real repositorios, over multiple sesións, without constant human supervision?**

Right now, the answer is: not without a harness.

```text
    WITHOUT HARNESS                          WITH HARNESS
    ==============                          ============

    Session 1: agent writes code            Session 1: agent reads instructions
              agent breaks tests                      agent runs init.sh
              agent says "done"                       agent works on one feature
              you fix it manually                     agent verifies before claiming done
                                                       agent updates progress log
    Session 2: agent starts fresh                    agent commits clean state
              agent has no memory
              of what happened before         Session 2: agent reads progress log
              agent re-does work                       agent picks up exactly where it left off
              or does something else entirely          agent continues the unfinished feature
              you fix it again                         you review, not rescue

    Result: you spend more time                  Result: agent does the work,
            cleaning up than if you                      you verify the result
            did it yourself
```

The questions this curso actually cares about:

- Which harness designs improve tarea finalización rates?
- Which designs reduce rework and incorrect completions?
- Which mechanisms keep tareas largas progressing steadily?
- Which structures keep the system maintainable after multiple agent ejecuta?

---

## Curso Curriculum & Documentation

For the full curso materials, please visit the **[Documentation Website](https://walkinglabs.github.io/learn-harness-engineering/)**.

The curriculum is divided into three parts:

1. **Lecciones**: 12 conceptual units explaining the teoría behind harness ingeniería.
2. **Proyectos**: 6 práctico proyectos where you construir an agentic workspace from scratch.
3. **Biblioteca de recursos**: Copy-ready plantillas (`AGENTS.md`, `feature_list.json`, `init.sh`, etc.) to usar in your own repositorios today.

---

## Inicio rápido: Improve Your Agent Today

You don't need to leer all 12 lecciones before you empezar getting value. If you're already usando a agent de programación on a real proyecto, here's how to improve it right now.

The idea is simple: instead of just escritura prompts, give your agent a set of estructurado archivos that define what to do, what's been terminado, and how to verificar the work. These archivos live inside your repo, so every sesión starts from the mismo estado.

```text
    YOUR PROJECT ROOT
    ├── AGENTS.md              <-- the agent's operating manual
    ├── CLAUDE.md              <-- (alternative, if using Claude Code)
    ├── init.sh                <-- runs install + verify + start
    ├── feature_list.json      <-- what features exist, which are done
    ├── claude-progress.md     <-- what happened each session
    └── src/                   <-- your actual code
```

Grab the inicial plantillas from the [Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/es/resources/) and drop them into your proyecto. That's it. Four archivos, and your agent sesións will already be significantly more stable than ejecutando on prompts alone.

---

## Proyecto final: A Real App

All six curso proyectos revolve around the mismo product: **an Electron-based personal knowledge base desktop app**.

```text
    ┌─────────────────────────────────────────────────────┐
    │               Knowledge Base Desktop App            │
    │                                                     │
    │  ┌──────────────┐  ┌──────────────────────────────┐│
    │  │ Document List │  │       Q&A Panel              ││
    │  │              │  │                              ││
    │  │ doc-001.md   │  │  Q: What is harness eng?    ││
    │  │ doc-002.md   │  │  A: The environment built    ││
    │  │ doc-003.md   │  │     around an agent model... ││
    │  │ ...          │  │     [citation: doc-002.md]   ││
    │  └──────────────┘  └──────────────────────────────┘│
    │                                                     │
    │  ┌─────────────────────────────────────────────────┐│
    │  │ Status Bar: 42 docs | 38 indexed | last sync 3m ││
    │  └─────────────────────────────────────────────────┘│
    └─────────────────────────────────────────────────────┘

    Core features:
    ├── Import local documents
    ├── Manage a document library
    ├── Process and index documents
    ├── Run AI-powered Q&A over imported content
    └── Return grounded answers with citations
```

This proyecto was chosen because it combines potente practical value, enough real-world product complexity, and a good setting for observing before/after harness improvements.

Each curso proyecto's inicial/solución is a completo copy of this Electron app at that evolutionary stage. P(N+1)'s inicial is derived from P(N)'s solución — the app evolves as your harness skills grow.

---

## Ruta de aprendizaje

The curso is designed to be terminado in order. Each phase builds on the last.

```text
    Phase 1: SEE THE PROBLEM              Phase 2: STRUCTURE THE REPO
    ========================              ==========================

    L01  Strong models ≠ reliable         L03  Repository as single
         execution                              source of truth
    L02  What harness actually means
                                       L04  Split instructions across
         |                                   files, not one giant file
         v
    P01  Prompt-only vs.                       |
         rules-first comparison                v
                                               P02  Agent-readable workspace


    Phase 3: CONNECT SESSIONS             Phase 4: FEEDBACK & SCOPE
    ==========================           =========================

    L05  Keep context alive               L07  Draw clear task boundaries
         across sessions
                                       L08  Feature lists as harness
    L06  Initialize before every               primitives
         agent session
                                               |
         |                                     v
         v                                     P04  Runtime feedback to
    P03  Multi-session continuity                   correct agent behavior


    Phase 5: VERIFICATION                 Phase 6: PUT IT ALL TOGETHER
    =====================                 ============================

    L09  Stop agents from                 L11  Make agent's runtime
         declaring victory early               observable

    L10  Full-pipeline run =              L12  Clean handoff at end of
         real verification                      every session

         |                                     |
         v                                     v
    P05  Agent verifies its own work       P06  Build a complete harness
                                               (capstone project)
```

Each phase takes about a week if you're going part-time. If you want to go faster, phases 1–3 can be terminado in a long weekend.

---

## Temario

### Lecciones — 12 conceptual units, each answering one core question

*Leer the full text for each lección on the [Documentation Website](https://walkinglabs.github.io/learn-harness-engineering/).*

| Session | Question | Core Idea |
|---------|----------|-----------|
| [L01](./docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md) | Why do potente modelos still fail on real tareas? | The capability gap between benchmarks and real ingeniería |
| [L02](./docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md) | What does "harness" actually mean? | Five subsystems: instrucciones, estado, verificación, alcance, lifecycle |
| [L03](./docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) | Why must the repo be the single fuente de verdad? | If the agent can't see it, it doesn't exist |
| [L04](./docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md) | Why does one giant instrucción archivo fail? | Progressive disclosure: give a map, not an encyclopedia |
| [L05](./docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) | Why do tareas largas lose continuity? | Persist progress to disk; pick up where you left off |
| [L06](./docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md) | Why does inicialización need its own phase? | Verificar the entorno is healthy before the agent starts work |
| [L07](./docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) | Why do agents overreach and under-finish? | One feature at a time; explícito definition of terminado |
| [L08](./docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md) | Why are lista de funcionalidadess harness primitives? | Machine-readable alcance límites the agent can't ignore |
| [L09](./docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md) | Why do agents declare victory too early? | Verification gaps: confidence ≠ correctness |
| [L10](./docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md) | Why does end-to-end pruebas cambio resultados? | Only a de pipeline completo ejecutar counts as real verificación |
| [L11](./docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) | Why does observabilidad belong inside the harness? | If you can't see what the agent did, you can't arreglar what it broke |
| [L12](./docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md) | Why must every sesión leave a limpio estado? | The siguiente sesión's éxito depends on this sesión's cleanup |

### Proyectos — 6 práctico proyectos applying lección methods to the mismo Electron app

| Proyecto | What You Do | Harness Mechanism |
|---------|------------|-------------------|
| [P01](./docs/es/projects/project-01-baseline-vs-minimal-harness/index.md) | Ejecutar the mismo tarea twice: prompt-only vs. reglas primero | Minimal harness: AGENTS.md + init.sh + feature_list.json |
| [P02](./docs/es/projects/project-02-agent-readable-workspace/index.md) | Restructure the repo so the agent can leer it | Agent-readable workspace + persistent estado archivos |
| [P03](./docs/es/projects/project-03-multi-session-continuity/index.md) | Hacer the agent pick up from where it left off | Progress log + sesión traspaso + multi-sesión continuity |
| [P04](./docs/es/projects/project-04-incremental-indexing/index.md) | Stop the agent from doing too much or too little | Runtime feedback + alcance control + incremental indexing |
| [P05](./docs/es/projects/project-05-grounded-qa-verification/index.md) | Hacer the agent verificar its own work | Self-verificación + grounded Q&A + evidence-based finalización |
| [P06](./docs/es/projects/project-06-runtime-observability-and-debugging/index.md) | Construir a completo harness from scratch (capstone) | Full harness: all mechanisms + observabilidad + ablation study |

```text
    PROJECT EVOLUTION
    =================

    P01  Prompt-only vs. rules-first       You see the problem
     |
     v
    P02  Agent-readable workspace           You restructure the repo
     |
     v
    P03  Multi-session continuity           You connect sessions
     |
     v
    P04  Runtime feedback & scope           You add feedback loops
     |
     v
    P05  Self-verification                  You make the agent check itself
     |
     v
    P06  Complete harness (capstone)        You build the full system

    Each project's solution becomes the next project's starter.
    The app evolves. Your harness skills grow with it.
```

### Biblioteca de recursos

- [English Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/es/resources/) — plantillas, checklists, and método references
- [Chinese Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/zh/resources/) — 中文模板、清单和方法参考
- [Russian Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/ru/resources/) — шаблоны, чек-листы и справочники
- [Vietnamese Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/vi/resources/) — mẫu, danh sách kiểm tra và tài liệu tham khảo

---

## The Agent Session Lifecycle

One of the core ideas in this curso: **the agent's sesión should follow a estructurado lifecycle, not a free-for-all.** Here's what that looks like:

```text
    AGENT SESSION LIFECYCLE
    ======================

    ┌──────────────────────────────────────────────────────────────────┐
    │  START                                                          │
    │                                                                  │
    │  1. Agent reads AGENTS.md / CLAUDE.md                           │
    │  2. Agent runs init.sh (install, verify, health check)          │
    │  3. Agent reads claude-progress.md (what happened last time)    │
    │  4. Agent reads feature_list.json (what's done, what's next)    │
    │  5. Agent checks git log (recent changes)                       │
    │                                                                  │
    │  SELECT                                                          │
    │                                                                  │
    │  6. Agent picks exactly ONE unfinished feature                   │
    │  7. Agent works only on that feature                             │
    │                                                                  │
    │  EXECUTE                                                         │
    │                                                                  │
    │  8. Agent implements the feature                                 │
    │  9. Agent runs verification (tests, lint, type-check)           │
    │  10. If verification fails: fix and re-run                      │
    │  11. If verification passes: record evidence                    │
    │                                                                  │
    │  WRAP UP                                                         │
    │                                                                  │
    │  12. Agent updates claude-progress.md                           │
    │  13. Agent updates feature_list.json                            │
    │  14. Agent records what's still broken or unverified            │
    │  15. Agent commits (only when safe to resume)                   │
    │  16. Agent leaves clean restart path for next session           │
    │                                                                  │
    └──────────────────────────────────────────────────────────────────┘

    The harness governs every transition in this lifecycle.
    The model decides what code to write at each step.
    Without the harness, step 9 becomes "agent says it looks fine."
    With the harness, step 9 is "tests pass, lint is clean, types check."
```

---

## Who This Is For

This curso is for:

- Engineers already usando agents de programación who want better stability and calidad
- Researchers or builders who want a systematic comprensión of harness diseño
- Tech leads who need to entender how entorno diseño affects agent performance

This curso is not for:

- People looking for a zero-code AI introduction
- People who only care about prompts and don't plan to construir real implementations
- Learners not prepared to let agents work inside real repositorios

---

## Requirements

This is a curso where you actually ejecutar agents de programación.

You need at least one of these herramientas:

- Claude Código
- Codex
- Another IDE or CLI agent de programación that supports archivo editing, comando execution, and multi-step tareas

The curso assumes you can:

- Open a local repositorio
- Allow the agent to edit archivos
- Allow the agent to ejecutar comandos
- Inspect salida and re-run tareas

If you don't have such a herramienta, you can still leer the curso content, but you won't be able to completo the proyectos as intended.

---

## Local Preview

This repositorio uses VitePress as a documentation viewer.

```sh
npm install
npm run docs:dev        # Dev server with hot reload
npm run docs:build      # Production build
npm run docs:preview    # Preview built site
```

Then open the local URL that VitePress outputs in your browser.

---

## Prerequisites

Required:

- Familiarity with the terminal, git, and local development entornos
- Ability to leer and escribir código in at least one common application stack
- Basic software debugging experience (lectura logs, pruebas, and runtime behavior)
- Enough time to commit to implementation-focused coursework

Helpful but not required:

- Experience with Electron, desktop apps, or local-first herramientas
- Background in pruebas, logging, or software arquitectura
- Prior exposure to Codex, Claude Código, or similar agents de programación

---

## Core Referencias

Primary:

- [OpenAI: Harness ingeniería: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective harnesses for agents de larga duración](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness diseño for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [OpenAI: Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [LangChain: Improving Deep Agents with harness ingeniería](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering)
- [Thoughtworks / Martin Fowler: Harness ingeniería for agent de programación usuarios](https://martinfowler.com/articles/harness-engineering.html)
- [Cursor: Continually improving our agent harness](https://cursor.com/blog/continually-improving-agent-harness)

See the full layered referencia lista in [`docs/es/resources/reference/`](./docs/es/resources/reference/index.md).

---

## Repository Estructura

```text
learn-harness-engineering/
├── docs/                          # VitePress documentation site
│   ├── lectures/                  # 12 lectures (index.md + code/ examples)
│   │   ├── lecture-01-*/
│   │   ├── lecture-02-*/
│   │   └── ... (12 total)
│   ├── projects/                  # 6 project descriptions
│   │   ├── project-01-*/
│   │   └── ... (6 total)
│   └── resources/                 # Multilingual templates & references
│       ├── en/                    # English templates, checklists, guides
│       ├── zh/                    # Chinese templates, checklists, guides
│       ├── ru/                    # Russian templates, checklists, guides
│       └── vi/                    # Vietnamese templates, checklists, guides
├── projects/
│   ├── shared/                    # Shared Electron + TypeScript + React foundation
│   └── project-NN/               # Per-project starter/ and solution/ directories
├── skills/                        # Reusable AI agent skills
│   └── harness-creator/           # Harness engineering skill
├── package.json                   # VitePress + dev tooling
└── CLAUDE.md                      # Claude Code instructions for this repo
```

---

## How the Curso Is Organized

- Each lección focuses on one question
- The curso includes 6 proyectos
- Every proyecto requires the agent to do real work
- Every proyecto compares weak vs. potente harness resultados
- What matters is the measured difference, not how many docs were written

---

## Habilidades

This repositorio also includes reusable AI agent skills that you can install directly into your IDE or agent workspace.

- [**harness-creator**](./skills/harness-creator/): A skill that helps you scaffold a production-grade harness for your own proyecto in minutes.

---

## Other Courses

Our equipo has also created other courses! Check them out:

[![Práctico Modern RL](https://img.shields.io/badge/HANDS--ON_MODERN_RL-0052cc?style=for-the-badge)](https://github.com/walkinglabs/hands-on-modern-rl)

**Práctico Modern RL**: An open-source, práctico curriculum bridging the gap from basic RL concepts to LLM alignment, RLVR, and avanzado Agentic sistemas.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=walkinglabs/learn-harness-engineering&type=date&legend=top-left)](https://www.star-history.com/#walkinglabs/learn-harness-engineering&type=date&legend=top-left)

---

## Acknowledgments

This curso was inspired by and draws ideas from [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — a progressive guía to construyendo an agent from scratch, from a single loop to isolated autonomous execution.
