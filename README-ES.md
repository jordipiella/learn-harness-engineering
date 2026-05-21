[English](https://walkinglabs.github.io/learn-harness-engineering/en/) · **Español** · [中文](https://walkinglabs.github.io/learn-harness-engineering/zh/) · [Русский](https://walkinglabs.github.io/learn-harness-engineering/ru/) · [Tiếng Việt](https://walkinglabs.github.io/learn-harness-engineering/vi/) · [한국어](https://walkinglabs.github.io/learn-harness-engineering/ko/) · [Oʻzbekcha](https://walkinglabs.github.io/learn-harness-engineering/uz/)

# Learn Harness Engineering

> **Un curso basado en proyectos para construir el entorno, la gestión de estado, la verificación y los mecanismos de control que hacen fiables a los agents de programación con IA.**

Learn Harness Engineering es un curso dedicado a la ingeniería de agents de programación con IA. Sintetiza teorías y prácticas avanzadas de Harness Engineering para enseñar cómo diseñar los entornos, artefactos y bucles de feedback que hacen más fiable el trabajo de herramientas como Codex y Claude Code.

Referencias principales:

- [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Awesome Harness Engineering](https://github.com/walkinglabs/awesome-harness-engineering)

> **¿Quieres empezar rápido?** La skill [`skills/harness-creator/`](./skills/) puede ayudarte a crear un harness de producción (`AGENTS.md`, listas de funcionalidades, `init.sh` y workflows de verificación) para tu propio proyecto en minutos.

---

## Tabla de contenidos

- [Vista previa visual](#-vista-previa-visual)
- [Qué significa realmente Harness Engineering](#qué-significa-realmente-harness-engineering)
- [Inicio rápido: mejora tu agent hoy](#inicio-rápido-mejora-tu-agent-hoy)
- [Proyecto final: una app real](#proyecto-final-una-app-real)
- [Ruta de aprendizaje](#ruta-de-aprendizaje)
- [Temario](#temario)
- [Skills](#skills)
- [Otros cursos](#otros-cursos)

---

## ✨ Vista previa visual

### 🏠 Página principal del curso
> Un índice completo del curso y una introducción a sus ideas centrales.

![Vista previa de la página principal](./docs/public/screenshots/readme/en-home.png)

### 📖 Lecciones inmersivas
> Explicaciones profundas de problemas reales y proyectos prácticos, como el Proyecto 01.

![Vista previa de la lección](./docs/public/screenshots/readme/en-lecture-01.png)

### 🗂️ Biblioteca de recursos lista para usar
> Plantillas y referencias diseñadas para resolver fallos frecuentes en desarrollo multi-turn con AI agents.

![Vista previa de la biblioteca de recursos](./docs/public/screenshots/readme/en-resources.png)

## Libros del curso en PDF

El repositorio incluye un pipeline para generar PDFs del contenido del curso.

- Ejecuta `npm run pdf:build` para generar PDFs localmente.
- Los archivos de salida se escriben en `artifacts/pdfs/`.
- Ejecuta `npm run screenshots:readme` si quieres refrescar las imágenes del README.
- El workflow [`release-course-pdfs.yml`](./.github/workflows/release-course-pdfs.yml) puede construir los PDFs y publicarlos en GitHub Releases.

---

## El modelo es inteligente; el harness lo vuelve fiable

Hay una verdad dura que muchas personas aprenden por experiencia: **el modelo más fuerte del mundo seguirá fallando en tareas reales de ingeniería si no construyes un entorno adecuado alrededor de él.**

Probablemente ya lo has visto. Das a Claude o GPT una tarea dentro de tu repo. Empieza bien: lee archivos, escribe código, parece productivo. Luego algo falla: salta un paso, rompe una prueba o dice "terminado" aunque nada funciona. Acabas limpiando más de lo que habrías tardado en hacerlo tú.

Eso no es solo un problema de modelo. Es un problema de harness.

Anthropic lo mostró con un experimento controlado: mismo modelo (Opus 4.5), mismo prompt ("construye un editor de juegos retro 2D"). Sin harness, gastó 9 dólares en 20 minutos y produjo algo que no funcionaba. Con un harness completo (planner + generator + evaluator), gastó 200 dólares en 6 horas y construyó un juego jugable. El modelo no cambió; cambió el harness.

OpenAI informó algo similar con Codex: en un repositorio bien preparado, el mismo modelo pasa de "unreliable" a "reliable". No es una mejora marginal, sino un cambio cualitativo.

**Este curso enseña a construir ese entorno.**

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

## Qué significa realmente Harness Engineering

Harness Engineering consiste en construir un entorno de trabajo completo alrededor del modelo para que produzca resultados fiables. No va de escribir mejores prompts, sino de diseñar el sistema en el que opera el modelo.

Un harness tiene cinco subsistemas:

- **Instrucciones**: indican al agent qué hacer, en qué orden y qué leer antes de empezar. No es un archivo gigante, sino divulgación progresiva.
- **Estado**: registra qué está terminado, qué está en progreso y qué sigue. Se persiste en disco para que la siguiente sesión continúe donde quedó la anterior.
- **Verificación**: solo una suite de pruebas en verde cuenta como evidencia. El agent no puede declarar victoria sin prueba ejecutable.
- **Alcance**: limita al agent a una funcionalidad a la vez. Sin exceso de alcance, sin medias implementaciones y sin reescribir la lista de funcionalidades para ocultar trabajo pendiente.
- **Ciclo de vida de sesión**: inicializa al comienzo, limpia al final y deja una ruta clara para reanudar.

```text
    The MODEL decides what code to write.
    The HARNESS governs when, where, and how it writes it.
    The harness doesn't make the model smarter.
    It makes the model's output reliable.
```

---

## Por qué existe este curso

La pregunta no es "¿pueden los modelos escribir código?". Pueden. La pregunta es: **¿pueden completar de forma fiable tareas reales de ingeniería dentro de repositorios reales, durante varias sesiones, sin supervisión humana constante?**

Ahora mismo, la respuesta es: no sin un harness.

Este curso se centra en preguntas concretas:

- Qué diseños de harness mejoran las tasas de finalización.
- Qué diseños reducen retrabajo y falsas declaraciones de finalización.
- Qué mecanismos mantienen tareas largas avanzando con estabilidad.
- Qué estructuras mantienen el sistema comprensible tras muchas ejecuciones de agents.

---

## Material del curso y documentación

Para el material completo, visita la **[web de documentación](https://walkinglabs.github.io/learn-harness-engineering/es/)**.

El currículo se divide en tres partes:

1. **Lecciones**: 12 unidades conceptuales sobre la teoría de Harness Engineering.
2. **Proyectos**: 6 proyectos prácticos donde construyes un workspace agentic desde cero.
3. **Biblioteca de recursos**: plantillas listas para copiar (`AGENTS.md`, `feature_list.json`, `init.sh`, etc.) para usar hoy en tus propios repositorios.

---

## Inicio rápido: mejora tu agent hoy

No necesitas leer las 12 lecciones para obtener valor. Si ya usas un agent de programación en un proyecto real, empieza por darle archivos estructurados que definan qué debe hacer, qué está terminado y cómo verificar el trabajo.

```text
    YOUR PROJECT ROOT
    ├── AGENTS.md              <-- manual operativo del agent
    ├── CLAUDE.md              <-- alternativa si usas Claude Code
    ├── init.sh                <-- instala, verifica y arranca
    ├── feature_list.json      <-- funcionalidades existentes y estado
    ├── claude-progress.md     <-- qué ocurrió en cada sesión
    └── src/                   <-- tu código real
```

Copia las plantillas iniciales desde la [Biblioteca de recursos](https://walkinglabs.github.io/learn-harness-engineering/es/resources/) y colócalas en tu proyecto. Cuatro archivos pueden hacer que las sesiones del agent sean mucho más estables que trabajar solo con prompts.

---

## Proyecto final: una app real

Los seis proyectos giran alrededor del mismo producto: **una app de escritorio tipo base de conocimiento personal construida con Electron**.

```text
    Core features:
    ├── Import local documents
    ├── Manage a document library
    ├── Process and index documents
    ├── Run AI-powered Q&A over imported content
    └── Return grounded answers with citations
```

Este producto se eligió porque combina valor práctico, complejidad de producto suficiente y un buen entorno para observar mejoras antes/después del harness.

Cada `starter/` y `solution/` es una copia completa de esta app en una etapa evolutiva. El `starter/` de P(N+1) deriva de la `solution/` de P(N): la app evoluciona a medida que crecen tus habilidades de harness.

---

## Ruta de aprendizaje

El curso está diseñado para completarse en orden. Cada fase se apoya en la anterior.

```text
    Phase 1: SEE THE PROBLEM              Phase 2: STRUCTURE THE REPO
    ========================              ==========================

    L01  Strong models != reliable        L03  Repository as single
         execution                              source of truth
    L02  What harness actually means      L04  Split instructions across files
         |                                     |
         v                                     v
    P01  Prompt-only vs. rules-first      P02  Agent-readable workspace

    Phase 3: CONNECT SESSIONS             Phase 4: FEEDBACK & SCOPE
    ==========================            =========================

    L05  Keep context alive               L07  Draw clear task boundaries
    L06  Initialize before every          L08  Feature lists as harness primitives
         agent session                         |
         |                                     v
         v                                P04  Runtime feedback to correct behavior
    P03  Multi-session continuity

    Phase 5: VERIFICATION                 Phase 6: PUT IT ALL TOGETHER
    =====================                 ============================

    L09  Stop agents from declaring       L11  Make agent runtime observable
         victory early
    L10  Full-pipeline run =              L12  Clean handoff at end of every session
         real verification
         |                                     |
         v                                     v
    P05  Agent verifies its own work       P06  Build a complete harness
```

---

## Temario

### Lecciones

| Sesión | Pregunta | Idea central |
|--------|----------|--------------|
| [L01](./docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md) | ¿Por qué los modelos potentes siguen fallando en tareas reales? | La brecha entre benchmarks y tareas reales de ingeniería |
| [L02](./docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md) | ¿Qué significa realmente "harness"? | Cinco subsistemas: instrucciones, estado, verificación, alcance y ciclo de vida |
| [L03](./docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) | ¿Por qué el repo debe ser la fuente de verdad? | Si el agent no puede verlo, no existe |
| [L04](./docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md) | ¿Por qué falla un único archivo gigante de instrucciones? | Divulgación progresiva: un mapa, no una enciclopedia |
| [L05](./docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) | ¿Por qué las tareas largas pierden continuidad? | Persistir progreso en disco y retomar donde quedó |
| [L06](./docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md) | ¿Por qué la inicialización necesita su propia fase? | Verificar el entorno antes de empezar trabajo real |
| [L07](./docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) | ¿Por qué los agents se exceden y no terminan? | Una funcionalidad a la vez y Definición de Terminado explícita |
| [L08](./docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md) | ¿Por qué las listas de funcionalidades son primitivas del harness? | Límites de alcance legibles por máquina |
| [L09](./docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md) | ¿Por qué los agents declaran victoria demasiado pronto? | Brecha de verificación: confianza no equivale a corrección |
| [L10](./docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md) | ¿Por qué las pruebas end-to-end cambian resultados? | Solo una ejecución de pipeline completo cuenta como verificación real |
| [L11](./docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) | ¿Por qué la observabilidad pertenece dentro del harness? | Si no ves qué hizo el agent, no puedes corregir lo que rompió |
| [L12](./docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md) | ¿Por qué cada sesión debe dejar un estado limpio? | El éxito de la siguiente sesión depende del cierre de esta |

### Proyectos

| Proyecto | Qué haces | Mecanismo de harness |
|----------|-----------|----------------------|
| [P01](./docs/es/projects/project-01-baseline-vs-minimal-harness/index.md) | Ejecutas la misma tarea dos veces: solo prompt frente a reglas primero | Harness mínimo: `AGENTS.md` + `init.sh` + `feature_list.json` |
| [P02](./docs/es/projects/project-02-agent-readable-workspace/index.md) | Reestructuras el repo para que el agent pueda leerlo | Workspace legible por agents + estado persistente |
| [P03](./docs/es/projects/project-03-multi-session-continuity/index.md) | Haces que el agent retome desde donde quedó | Registro de progreso + traspaso de sesión |
| [P04](./docs/es/projects/project-04-incremental-indexing/index.md) | Evitas que el agent haga demasiado o demasiado poco | Feedback en runtime + control de alcance |
| [P05](./docs/es/projects/project-05-grounded-qa-verification/index.md) | Haces que el agent verifique su propio trabajo | Autoverificación + QA fundamentada + evidencia |
| [P06](./docs/es/projects/project-06-runtime-observability-and-debugging/index.md) | Construyes un harness completo desde cero | Harness completo + observabilidad + estudio de ablación |

### Biblioteca de recursos

- [Biblioteca de recursos en español](https://walkinglabs.github.io/learn-harness-engineering/es/resources/): plantillas, checklists y referencias de método
- [Biblioteca de recursos en chino](https://walkinglabs.github.io/learn-harness-engineering/zh/resources/): 中文模板、清单和方法参考
- [Biblioteca de recursos en ruso](https://walkinglabs.github.io/learn-harness-engineering/ru/resources/): шаблоны, чек-листы и справочники
- [Biblioteca de recursos en vietnamita](https://walkinglabs.github.io/learn-harness-engineering/vi/resources/): mẫu, danh sách kiểm tra và tài liệu tham khảo

---

## Ciclo de vida de una sesión de agent

Una idea central del curso: **la sesión del agent debe seguir un ciclo de vida estructurado, no una exploración libre.**

```text
    AGENT SESSION LIFECYCLE
    ======================

    1. Agent reads AGENTS.md / CLAUDE.md
    2. Agent runs init.sh (install, verify, health check)
    3. Agent reads claude-progress.md
    4. Agent reads feature_list.json
    5. Agent checks git log
    6. Agent picks exactly ONE unfinished feature
    7. Agent works only on that feature
    8. Agent implements the feature
    9. Agent runs verification (tests, lint, type-check)
    10. If verification fails: fix and re-run
    11. If verification passes: record evidence
    12. Agent updates progress and leaves a clean restart path
```

Sin harness, el paso 9 se convierte en "parece correcto". Con harness, significa "tests pass, lint is clean, types check".

---

## Para quién es

Este curso es para:

- Ingenieros que ya usan agents de programación y quieren más estabilidad y calidad.
- Investigadores o builders que quieren entender de forma sistemática el diseño de harnesses.
- Tech leads que necesitan entender cómo el diseño del entorno afecta al rendimiento del agent.

No es para:

- Personas que buscan una introducción a IA sin código.
- Personas interesadas solo en prompts, sin construir implementaciones reales.
- Estudiantes que no quieren dejar que agents trabajen dentro de repositorios reales.

---

## Requisitos

Necesitas al menos una herramienta:

- Claude Code
- Codex
- Otro agent de programación en IDE o CLI que pueda editar archivos, ejecutar comandos y seguir tareas de varios pasos

El curso asume que puedes abrir un repositorio local, permitir ediciones, ejecutar comandos, inspeccionar salidas y repetir tareas.

---

## Vista previa local

Este repositorio usa VitePress como visor de documentación.

```sh
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

Después abre en el navegador la URL local que muestre VitePress.

---

## Referencias principales

- [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [OpenAI: Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [LangChain: Improving Deep Agents with harness engineering](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering)
- [Thoughtworks / Martin Fowler: Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html)
- [Cursor: Continually improving our agent harness](https://cursor.com/blog/continually-improving-agent-harness)

Consulta la lista completa de referencias en [`docs/es/resources/reference/`](./docs/es/resources/reference/index.md).

---

## Estructura del repositorio

```text
learn-harness-engineering/
├── docs/                          # Sitio de documentación VitePress
├── projects/                      # Proyectos con starter/ y solution/
├── skills/                        # Skills reutilizables para AI agents
├── package.json                   # VitePress + tooling
└── CLAUDE.md                      # Instrucciones para Claude Code
```

---

## Cómo se organiza el curso

- Cada lección responde una pregunta.
- El curso incluye 6 proyectos.
- Cada proyecto requiere que el agent haga trabajo real.
- Cada proyecto compara resultados con harness débil frente a harness fuerte.
- Lo importante es la diferencia medida, no cuántos documentos se escribieron.

---

## Skills

El repositorio incluye skills reutilizables para AI agents que puedes instalar en tu IDE o workspace de agent.

- [**harness-creator**](./skills/harness-creator/): skill para crear un harness de producción para tu propio proyecto en minutos.

---

## Otros cursos

[![Hands-On Modern RL](https://img.shields.io/badge/HANDS--ON_MODERN_RL-0052cc?style=for-the-badge)](https://github.com/walkinglabs/hands-on-modern-rl)

**Hands-On Modern RL**: currículo open source y práctico que conecta conceptos básicos de RL con alineación de LLMs, RLVR y sistemas agentic avanzados.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=walkinglabs/learn-harness-engineering&type=date&legend=top-left)](https://www.star-history.com/#walkinglabs/learn-harness-engineering&type=date&legend=top-left)

---

## Agradecimientos

Este curso se inspira en [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code), una guía progresiva para construir un agent desde cero, desde un único bucle hasta ejecución autónoma aislada.
