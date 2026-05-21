# Guía de estilo para la localización española

Esta guía define cómo debe leerse la versión española: fiel a la fuente inglesa,
natural para lectores técnicos y segura para copiar comandos, rutas y plantillas.

## Voz

- Usar español neutro, profesional y directo.
- Hablar al lector en segunda persona cuando el original lo haga.
- Mantener el tono práctico del curso: explicar qué hacer, por qué importa y cómo verificarlo.
- Evitar calcos como `hacer el repositorio the sistema de registro`, `el agent escribe código by default` o `contexto is running low`.
- No suavizar advertencias técnicas: si el original marca un riesgo o una condición de finalización, la traducción debe conservarlo.

## Fidelidad

- Traducir ideas, no sustituir palabras sueltas.
- Mantener orden pedagógico, ejemplos, analogías, requisitos, advertencias y resultados esperados.
- No añadir herramientas, promesas, pasos o conclusiones que no estén respaldados por la fuente inglesa.
- Cuando una expresión inglesa no tenga equivalente natural, reformular en español sin perder intención.

## Terminología

- Seguir `docs/es/GLOSSARY.md`.
- Mantener `harness`, `agent`, `runtime`, `feature_list.json`, `AGENTS.md` y otros artefactos con la forma definida por el glosario.
- No alternar entre sinónimos para conceptos centrales. Por ejemplo, usar `verificación` cuando el original trate de evidencia de corrección.
- Evitar traducciones parciales dentro de una misma frase. Una oración debe estar en español natural, con términos técnicos retenidos solo cuando corresponda.

## Artefactos técnicos protegidos

No traducir:

- comandos de shell
- nombres de archivo y directorio
- rutas y slugs
- claves JSON o de configuración
- nombres de paquetes
- identificadores de código
- URLs
- nombres de ramas, scripts o workflows
- estructura de plantillas copiables

Traducir únicamente el texto explicativo que rodea esos artefactos. Si un bloque es
una plantilla que el lector copiará, preservar campos, placeholders y comandos salvo
que el propio original contenga prosa claramente traducible.

## Enlaces

- Si existe una página equivalente en español, enlazar a `/es/` o a la ruta relativa española.
- Si no existe equivalente español, mantener un enlace válido al recurso original.
- No traducir slugs de carpetas existentes porque forman parte de rutas funcionales.
- El texto visible de un enlace puede traducirse si no es una ruta, comando, título oficial o nombre propio.

## Plantillas

Las plantillas en `docs/es/resources/templates/` deben seguir siendo copiables en menos de cinco minutos. Puede traducirse la explicación, pero los bloques que el usuario copiará a un repositorio real deben conservar nombres, campos y comandos funcionales.

## Criterio de aceptación editorial

Una página española revisada debe cumplir todas estas condiciones:

- No queda prosa inglesa dirigida al lector salvo términos aprobados.
- No faltan secciones de la fuente inglesa.
- La traducción conserva significado, tono y secuencia.
- Los artefactos técnicos siguen funcionando.
- Los términos recurrentes coinciden con el glosario.
