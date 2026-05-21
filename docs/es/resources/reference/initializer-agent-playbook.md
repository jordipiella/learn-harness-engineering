# Playbook del initializer agent

Usa este playbook para la primera sesión seria en un repositorio, antes de empezar trabajo incremental de funcionalidades.

## Objetivo

Crear una superficie operativa estable para que las sesiones posteriores puedan implementar comportamiento sin volver a derivar comandos de arranque, estado actual ni límites de tarea.

## Salidas requeridas

El initializer debería dejar al menos estos artefactos:

- un archivo raíz de instrucciones como `AGENTS.md` o `CLAUDE.md`
- una superficie de funcionalidades legible por máquina como `feature_list.json`
- un artefacto duradero de progreso como `claude-progress.md`
- un helper estándar de arranque como `init.sh`
- un commit inicial seguro que capture el andamiaje baseline

## Checklist

1. Define la ruta estándar de arranque.
2. Define la ruta estándar de verificación.
3. Crea el log de progreso y registra el estado inicial.
4. Descompón el trabajo en funcionalidades explícitas con estados.
5. Crea el primer commit baseline limpio.

## Prueba de éxito

Una sesión fresca sin contexto de chat previo debería poder responder:

- qué hace este repositorio
- cómo arrancarlo
- cómo verificarlo
- qué está incompleto
- cuál es el siguiente mejor paso
