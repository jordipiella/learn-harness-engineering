# Ejemplo de componentes de harness

Para un agent de programación que trabaja en un repositorio local:

- Modelo:
  the LLM itself

- Harness:
  - system prompt
  - AGENTS.md
  - herramienta bash
  - herramientas de lectura/escritura de archivos
  - git access
  - local filesystem
  - startup scripts
  - comandos de prueba
  - stop hooks
  - lint checks
  - bucle de evaluador

Si cambias cualquiera de estas piezas del harness, cambias el agent efectivo.
