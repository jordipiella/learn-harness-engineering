# Glosario de traducción al español

Este glosario fija las decisiones terminológicas para la localización española de
Learn Harness Engineering. La regla general es preservar el significado técnico del
curso antes que traducir palabra por palabra.

| Inglés | Español recomendado | Nota |
|--------|---------------------|------|
| harness | harness | Concepto central del curso. Se conserva en inglés y se explica con prosa española. |
| Harness Engineering | Harness Engineering | Nombre del área. Puede explicarse como ingeniería del entorno, reglas y feedback que rodean a un agent. |
| agent | agent | Se conserva para mantener alineación con el vocabulario del curso y con los artefactos `AGENTS.md`. |
| AI coding agent | agent de programación con IA | Usar cuando convenga aclarar el tipo de agent. |
| model | modelo | No usar como sinónimo de agent; el modelo es solo una parte del sistema. |
| repository | repositorio | Puede usarse `repo` cuando el original ya lo use en contexto técnico. |
| source of truth | fuente de verdad | Usar para el lugar autoritativo del conocimiento del proyecto. |
| system of record | sistema de registro | Usar cuando el curso se refiere al repositorio como registro operativo. |
| verification | verificación | Evitar `validación` si el sentido es comprobar evidencia de trabajo terminado. |
| validation | validación | Usar para comprobaciones de formato, rutas o builds cuando ese sea el matiz. |
| observability | observabilidad | Mantener como término técnico. |
| runtime | runtime | Mantener en inglés cuando se refiere al comportamiento durante ejecución. |
| scope | alcance | En contextos de control de trabajo: `control de alcance`. |
| context window | ventana de contexto | No traducir como ventana de "contexto ejecutando". |
| session handoff | traspaso de sesión | Usar para notas o procedimientos que dejan contexto a la siguiente sesión. |
| clean state | estado limpio | Usar para cierre de sesión y repositorio listo para continuar. |
| feature list | lista de funcionalidades | Mantener `feature_list.json` como nombre de archivo. |
| Definition of Done | Definición de Terminado | Mantener mayúsculas cuando sea un concepto formal. |
| diagnostic loop | bucle diagnóstico | Usar para ejecutar, observar, atribuir y corregir. |
| verification gap | brecha de verificación | Brecha entre confianza declarada del agent y corrección real. |
| capability gap | brecha de capacidad | Brecha entre rendimiento en benchmark y rendimiento en tareas reales. |
| harness-induced failure | fallo inducido por el harness | Mantener la relación causal: el modelo puede ser capaz, pero el entorno falla. |
| end-to-end | end-to-end | Mantener como término técnico ampliamente usado. |
| prompt-only | solo con prompt | Puede conservarse `prompt-only` en títulos si contrasta con `rules-first`. |
| rules-first | reglas primero | Puede conservarse `rules-first` en títulos si forma parte del nombre del proyecto. |

## Reglas rápidas

- No traducir nombres de archivo, comandos, rutas, claves de configuración, identificadores de código, slugs, paquetes ni URLs.
- Traducir la prosa didáctica que rodea a los artefactos técnicos.
- Preferir español neutro, profesional y directo.
- No mezclar inglés y español dentro de una oración salvo para términos aprobados por este glosario o artefactos funcionales.
- Si una traducción literal cambia el concepto del harness, conservar el término técnico y explicarlo.
