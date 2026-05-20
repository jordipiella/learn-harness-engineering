[Versión en chino →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> Related lecciones: [Lección 01. Potente modelos don't mean fiable execution](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [Lección 02. What harness actually means](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> Plantilla archivos: [plantillas/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 01. Solo prompt frente a reglas primero: How Much Difference Does It Hacer

## What You Do

Construir a minimal Electron knowledge-base app shell — a window with a document lista on the left, a Q&A panel on the right, and a local datos directory. The tarea itself is not complex. What's complex is how you get the agent to completo it.

You ejecutar it twice. First time: just a prompt, no preparation. Second time: `AGENTS.md`, `init.sh`, `feature_list.json` pre-placed in the repo. Then comparar.

The core of this proyecto is not escritura código — it's figuring out how big the gap is between "spend 15 minutes preparing reglas first" and "just let the agent go."

## Herramientas

- Claude Código or Codex (pick one, usar it for both ejecuta)
- Git (manage branches and comparar)
- Node.js + Electron (proyecto stack)
- A timer (record each ejecutar's duration)

## Harness Mechanism

Minimal harness: `AGENTS.md` + `init.sh` + `feature_list.json`
