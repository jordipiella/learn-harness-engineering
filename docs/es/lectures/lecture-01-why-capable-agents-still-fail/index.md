[中文版本 →](../../../zh/lectures/lecture-01-why-capable-agents-still-fail/)

> Ejemplos de código: [code/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/lectures/lecture-01-why-capable-agents-still-fail/code/)
> Proyecto práctico: [Proyecto 01. Prompt-only vs. reglas primero](./../../projects/project-01-baseline-vs-minimal-harness/index.md)

# Lección 01. Modelos potentes no significan ejecución fiable

Conoces bien el mundo de la IA: tienes una suscripción a Claude Pro, una clave de API de GPT-4o y te sabes de memoria los números de SWE-bench. Un día decides por fin entregar un proyecto real a un AI agent con plena confianza. ¿El resultado? Añade una funcionalidad pero rompe las pruebas, arregla un bug pero introduce dos más, trabaja durante 20 minutos y declara orgullosamente que ha terminado. Luego miras el código y no es lo que pediste.

Tu primer impulso puede ser: "este modelo no es lo bastante bueno; toca actualizar". Espera. Antes de abrir la cartera, considera que quizá el problema no sea el modelo.

Mira algunos números. A finales de 2025, los agents de programación más fuertes en SWE-bench Verified rondan el 50-60%. Y eso ocurre en tareas cuidadosamente seleccionadas, con descripciones claras y pruebas existentes. Si lo llevas a tu entorno diario de desarrollo, con requisitos vagos, reglas de negocio implícitas y pocas pruebas, ese porcentaje solo baja.

Pero detrás de esos números hay una verdad poco intuitiva.

## El mismo caballo, destinos distintos

Anthropic ejecutó un experimento controlado: mismo prompt ("construye un creador de juegos retro 2D"), mismo modelo (Opus 4.5). Primera ejecución: sin soporte, sin harness. Tras 20 minutos y 9 dólares, las funciones centrales del juego no funcionaban. Segunda ejecución: con un harness completo, formado por planner, generator y evaluator. Tras 6 horas y 200 dólares, el juego era jugable.

No cambiaron el modelo. Opus 4.5 seguía siendo Opus 4.5. Lo que cambió fue la silla de montar.

El artículo de OpenAI de 2025 sobre Harness Engineering lo formula de forma directa: Codex, en un repositorio bien preparado con harness, pasa de "unreliable" a "reliable". No dicen "un poco mejor", sino un cambio cualitativo. Como con un purasangre: puedes montarlo sin silla, pero no llegarás lejos, no irás rápido y caerte no debería sorprenderte. El harness es esa silla: **toda la infraestructura de ingeniería que rodea al modelo y que no forma parte de sus pesos.**

## Dónde se atascan realmente los agents

¿Qué falla exactamente?

Lo más habitual es que la tarea nunca se definiera con claridad. Dices "añade búsqueda" y la interpretación del agent puede ser completamente distinta a la tuya: ¿búsqueda de qué?, ¿texto completo o campos estructurados?, ¿paginación?, ¿resaltado de resultados? Si no lo especificas, el agent adivina. Si acierta, es suerte; si falla, arreglarlo suele costar más que haber sido específico desde el principio. Es como entrar en un restaurante y pedir "pescado": que llegue guisado, al vapor o en una sopa queda al azar.

Incluso cuando especificas bien la tarea, el proyecto tiene convenciones arquitectónicas implícitas que el agent no conoce. Tu equipo usa sintaxis de SQLAlchemy 2.0, pero el agent escribe código 1.x por defecto. Todos los endpoints deben usar OAuth 2.0, pero esa regla solo está en tu cabeza y en un mensaje de Slack de hace tres meses. El agent no puede verla; no es que no quiera cumplirla, es que literalmente no sabe que existe.

El entorno también puede ser una trampa. Dependencias incompletas, versiones de herramientas incorrectas, configuración de desarrollo a medias. El agent gasta una parte preciosa de la ventana de contexto en fallos de `pip install` y conflictos de versión de Node en lugar de resolver la tarea real. Es como contratar a un carpintero excelente y no darle martillo, clavos ni banco de trabajo.

Otro caso muy común: no hay forma de verificar. No hay pruebas, no hay lint, o nunca se comunicaron al agent los comandos de verificación. El agent escribe código, lo mira, decide que parece correcto y dice "terminado". Es como pedir a un estudiante que entregue un examen sin clave de respuestas: cree que lo hizo bien, pero al corregirlo aparecen errores. Anthropic observó además un fenómeno interesante: cuando los agents perciben que el contexto se agota, aceleran, saltan verificación y eligen una solución simple antes que una óptima. Lo llaman "ansiedad de contexto"; es lo mismo que ocurre cuando queda poco tiempo en un examen y empiezas a marcar respuestas al azar.

Las tareas largas que cruzan sesiones empeoran todavía más. Los descubrimientos de la sesión anterior se pierden y cada nueva sesión debe volver a explorar la estructura del proyecto y entender la organización del código. Sin estado persistente, las tasas de fallo suben bruscamente cuando una tarea supera los 30 minutos.

## Terminología clave

Con estos escenarios en mente, estos conceptos dejan de ser jerga:

- **Brecha de capacidad**: la distancia entre el rendimiento de un modelo en benchmarks y su rendimiento en tareas reales. Un 50-60% en SWE-bench Verified significa que casi la mitad de los issues reales no se resuelven.
- **Harness**: todo lo que está fuera del modelo: instrucciones, herramientas, entorno, gestión de estado y feedback de verificación. Si no son pesos del modelo, forma parte del harness. Es la "silla" de la analogía.
- **Fallo inducido por el harness**: el modelo tiene capacidad suficiente, pero el entorno de ejecución tiene defectos estructurales. El experimento controlado de Anthropic lo demuestra.
- **Brecha de verificación**: la distancia entre la confianza declarada por el agent y la corrección real. El agent dice "he terminado" cuando no ha terminado; este es el modo de fallo más común.
- **Bucle diagnóstico**: ejecutar, observar el fallo, atribuirlo a una capa concreta del harness, corregir esa capa y volver a ejecutar. Es el método central de Harness Engineering.
- **Definición de Terminado**: conjunto de condiciones verificables por máquina: pruebas en verde, lint limpio, type checks correctos. Sin una definición explícita, el agent inventará la suya.

## Cuando algo falla, arregla primero el harness

Principio central: **cuando algo falla, no cambies primero el modelo; revisa el harness.** Si el mismo modelo funciona en tareas parecidas y bien estructuradas, asume que el problema está en el harness. Es como un coche averiado: no sospechas inmediatamente del motor; primero miras si tiene gasolina.

Pasos concretos:

**Atribuye cada fallo a una capa concreta.** No digas simplemente "el modelo es malo". Pregunta: ¿la tarea era ambigua?, ¿faltaba contexto?, ¿no había métodos de verificación? Mapea cada fallo a una de las cinco capas: especificación de tarea, provisión de contexto, entorno de ejecución, feedback de verificación y gestión de estado. Si construyes ese hábito, verás que "el modelo no es suficiente" aparece cada vez menos en tus registros.

**Escribe una Definición de Terminado explícita para cada tarea.** No digas "añade búsqueda". Di:

```text
Criterios de finalización:
- Nuevo endpoint GET /api/search?q=xxx
- Soporta paginación, con 20 elementos por defecto
- Los resultados incluyen fragmentos resaltados
- Todo el código nuevo pasa pytest
- El type checking pasa (mypy --strict)
```

**Crea un archivo AGENTS.md.** Ponlo en la raíz del repositorio para explicar al agent el stack, las convenciones arquitectónicas y los comandos de verificación. Es el primer paso de Harness Engineering y una de las acciones con mejor retorno. Un solo `AGENTS.md` puede ser más eficaz que pagar por un modelo más caro; no es una broma.

**Construye un bucle diagnóstico.** No trates los fallos como "otra vez el modelo haciendo tonterías". Trátalos como señales de que tu harness tiene un defecto. En cada fallo, identifica la capa, corrígela y evita que vuelva a ocurrir. Tras unas cuantas rondas, el harness se fortalece y el rendimiento del agent se estabiliza. Como reparar una carretera: cada bache que tapas hace más suave el siguiente tramo.

**Cuantifica las mejoras.** Lleva un registro sencillo: si cada tarea tuvo éxito o falló, y qué capa causó el fallo. Después de varias rondas verás cuál es el cuello de botella y podrás concentrar ahí la energía.

## El experimento del millón de líneas

OpenAI ejecutó en 2025 un experimento agresivo: usar Codex para construir un producto interno completo desde un repositorio vacío. Cinco meses después, el repo tenía alrededor de un millón de líneas de código: lógica de aplicación, infraestructura, tooling, documentación y herramientas internas, todo generado por agents. Tres ingenieros dirigieron Codex, abrieron y fusionaron unas 1.500 PRs, con una media de 3,5 PRs por persona y día.

La restricción clave era esta: **los humanos nunca escribían código directamente.** No era un truco; estaba diseñado para forzar al equipo a descubrir qué cambia cuando el trabajo principal del ingeniero deja de ser escribir código y pasa a ser diseñar entornos, expresar intención y construir bucles de feedback.

Al principio, el progreso fue más lento de lo esperado. No porque Codex no fuera capaz, sino porque el entorno no estaba lo bastante completo: al agent le faltaban herramientas, abstracciones y estructuras internas para avanzar en objetivos de alto nivel. El trabajo de los ingenieros pasó a ser dividir metas grandes en bloques pequeños (diseño, código, revisión, prueba), dejar que el agent los ensamblara y usar esos bloques para desbloquear tareas más complejas. Cuando algo fallaba, la solución casi nunca era "inténtalo con más fuerza"; era "¿qué capacidad le falta al agent y cómo la hacemos comprensible y ejecutable?".

Este experimento demuestra directamente la tesis central de la lección: **el mismo modelo produce resultados fundamentalmente distintos en un entorno desnudo y en un entorno con un harness completo.** El modelo no cambió. Cambió el entorno.

> Fuente: [OpenAI: Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)

## Un ejemplo más cercano

Un equipo usó Claude Sonnet para añadir un endpoint a una aplicación Python de tamaño medio (FastAPI + PostgreSQL + Redis, unas 15.000 líneas).

Al principio solo dieron una frase: "añade endpoints de preferencias de usuario bajo `/api/v2/users`". ¿El resultado? El agent gastó un 40% de su ventana de contexto explorando la estructura del repo, produjo código que parecía razonable pero no seguía los patrones de manejo de errores del proyecto, usó sintaxis antigua de SQLAlchemy y declaró la tarea terminada aunque el endpoint fallaba en runtime. La siguiente sesión tuvo que repetir todo el trabajo de descubrimiento.

Más tarde añadieron `AGENTS.md` con la arquitectura y versiones del stack, comandos explícitos de verificación (`pytest tests/api/v2/ && python -m mypy src/`) y registros de decisiones arquitectónicas. El mismo modelo tuvo éxito en tres ejecuciones independientes, con alrededor de un 60% más de eficiencia de contexto.

No cambiaron el modelo. Cambiaron el harness.

## Ideas clave

- Capacidad del modelo y fiabilidad de ejecución son cosas distintas. Un purasangre sigue necesitando una buena silla.
- Cuando algo falla, revisa primero el harness y después el modelo. Cambiar de modelo es la opción más cara y a menudo ni siquiera resuelve el problema.
- Cada fallo es una señal: tu harness tiene un defecto estructural. Encuéntralo y arréglalo.
- Cinco capas defensivas: especificación de tarea, provisión de contexto, entorno de ejecución, feedback de verificación y gestión de estado. Revísalas de forma sistemática.
- Un `AGENTS.md` puede ser más eficaz que actualizar a un modelo más caro. En serio.

## Lecturas adicionales

- [OpenAI: Harness Engineering — Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)
- [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [HumanLayer: Skill Issue — Harness Engineering for Coding Agents](https://humanlayer.dev/articles/harness-engineering-for-coding-agents/)
- [SWE-bench Leaderboard](https://www.swebench.com/)
- [Thoughtworks Technology Radar: Harness Engineering](https://www.thoughtworks.com/radar)

## Ejercicios

1. **Experimento comparativo**: elige un codebase que conozcas bien y una modificación no trivial. Primero ejecuta el agent sin soporte de harness y registra los fallos. Luego añade un `AGENTS.md` con comandos explícitos de verificación y vuelve a ejecutar con el mismo agent. Compara resultados y atribuye cada fallo a una de las cinco capas defensivas.

2. **Medición de la brecha de verificación**: elige 5 tareas de programación. Después de cada una, registra si el agent afirma haber terminado y verifica la corrección real con pruebas independientes. Calcula la proporción de veces que el agent dice "terminado" cuando en realidad no lo está: esa es tu brecha de verificación. Luego piensa qué comandos de verificación reducirían esa proporción.

3. **Práctica de bucle diagnóstico**: busca una tarea en la que el agent falle repetidamente en tu proyecto. Ejecuta una vez y registra el fallo. Atribúyelo a una de las cinco capas. Corrige esa capa. Ejecuta de nuevo. Repite entre tres y cinco rondas y registra las mejoras.
