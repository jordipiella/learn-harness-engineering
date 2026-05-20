# Método Map

This table maps the most common long-running coding-agent fallo modes to the
artifact or operating rule that usually arregla them first.

| Fallo mode | What it looks like in práctica | Primary arreglar | Supporting artifact |
| --- | --- | --- | --- |
| Cold-start confusion | A new sesión spends most of its time rediscovering setup and status | Hacer the repositorio the sistema de registro | `claude-progress.md` |
| Scope sprawl | The agent starts several funcionalidades and finishes none of them cleanly | Restrict active alcance | `feature_list.json` |
| Premature finalización | The agent claims terminado after código edits but before runnable proof | Bind finalización to evidence | `clean-state-checklist.md` |
| Fragile startup | Every sesión re-learns how to boot the proyecto | Standardize setup and verificación | `init.sh` |
| Weak traspaso | The siguiente sesión cannot tell what is verified, broken, or siguiente | End with an explícito traspaso | `sesión-traspaso.md` |
| Subjective revisión | Revisión calidad depends on taste or memory | Score salida with fixed categories | `evaluator-rubric.md` |

## Operating Principle

Añadir the smallest artifact that directly addresses the observed fallo mode.
Avoid solving every reliability problema by dumping more text into one global
instrucción archivo.
