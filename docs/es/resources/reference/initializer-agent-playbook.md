# Initializer Agent Playbook

Usar this playbook for the first serious sesión in a repositorio, before
incremental feature work begins.

## Objetivo

Crear a stable operating surface so later sesións can implement behavior
without re-deriving startup comandos, current status, or tarea límites.

## Required Outputs

The initializer should leave behind at least these artifacts:

- a root instrucción archivo such as `AGENTS.md` or `CLAUDE.md`
- a machine-readable feature surface such as `feature_list.json`
- a durable progress artifact such as `claude-progress.md`
- a standard startup helper such as `init.sh`
- an initial safe commit that captures the baseline scaffold

## Checklist

1. Define the standard startup ruta.
2. Define the standard verificación ruta.
3. Crear the progress log and record the starting estado.
4. Decompose the work into explícito funcionalidades with statuses.
5. Crear the first limpio baseline commit.

## Éxito Prueba

A fresh sesión with no prior chat contexto should be able to answer:

- what this repositorio does
- how to empezar it
- how to verificar it
- what is unfinished
- what the siguiente best paso is
