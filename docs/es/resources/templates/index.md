# Guía de plantillas

Estas plantillas están listas para copiarlas en tu propio proyecto. Cada una cumple una función concreta dentro del workflow del agent. Ajusta el contenido para que coincida con los comandos, rutas, nombres de funcionalidades y pasos de verificación de tu proyecto.

## Cómo empezar

Copia primero estos cuatro archivos en la raíz de tu proyecto:

1. `AGENTS.md` o `CLAUDE.md`
2. `init.sh`
3. `claude-progress.md`
4. `feature_list.json`

Añade los demás archivos a medida que el proyecto crezca.

---

## AGENTS.md

Archivo raíz de instrucciones. Es lo primero que lee el agent cuando empieza una sesión. Define las reglas operativas: qué hacer antes de escribir código, cómo trabajar y cómo cerrar.

**Cómo usarlo:**

- Cópialo en la raíz de tu proyecto
- Sustituye los pasos del workflow de arranque por rutas y comandos reales de tu proyecto
- Ajusta las reglas de trabajo a las convenciones de tu equipo
- Mantén la sección de Definición de Terminado: es la parte más importante

**Qué aporta al agent:**

- Le pide leer progreso y estado de funcionalidades antes de empezar
- Le obliga a trabajar en una sola funcionalidad cada vez
- Exige evidencia antes de marcar algo como terminado
- Define cómo debe verse un cierre limpio de sesión

Usa `AGENTS.md` para Codex u otros agents. Usa `CLAUDE.md` si trabajas con Claude Code; la estructura es la misma, adaptada al estilo de instrucciones de Claude.

## init.sh

Script de arranque. Instala dependencias, ejecuta verificación e imprime el comando de inicio en una sola pasada.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Edita estas tres variables al principio:
  - `INSTALL_CMD`: comando para instalar dependencias (por ejemplo, `npm install`, `pip install -r requirements.txt`)
  - `VERIFY_CMD`: comando básico de verificación (por ejemplo, `npm test`, `pytest`)
  - `START_CMD`: comando para iniciar el servidor de desarrollo (por ejemplo, `npm run dev`)
- Hazlo ejecutable: `chmod +x init.sh`

**Qué hace:**

1. Imprime el directorio actual para confirmar que se ejecuta en el lugar correcto
2. Instala dependencias
3. Ejecuta el comando de verificación
4. Imprime el comando de inicio, o lo ejecuta si `RUN_START_COMMAND=1` está definido

Si la verificación falla, el agent debe detenerse y corregir el baseline antes de hacer cualquier otra cosa.

## claude-progress.md

Registro de progreso. Cada sesión escribe en este archivo y cada sesión nueva lo lee primero.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Rellena la sección "Current Verified State" con información de tu proyecto
- Después de cada sesión, actualiza el registro de sesión

**Qué significa cada campo:**

- **Current Verified State**: fuente de verdad sobre el estado del proyecto
  - `Repository root directory`: dónde vive el proyecto
  - `Standard startup path`: comando para arrancar el proyecto
  - `Standard verification path`: comando para ejecutar pruebas
  - `Highest priority unfinished feature`: qué debe trabajar la siguiente sesión
  - `Current blocker`: cualquier bloqueo activo
- **Session Record**: una entrada por sesión
  - `Goal`: qué se planeaba hacer
  - `Completed`: qué se completó realmente
  - `Verification run`: qué pruebas se ejecutaron
  - `Evidence recorded`: qué evidencia se capturó
  - `Commits`: qué se commiteó
  - `Known risks`: qué podría estar roto
  - `Next best action`: por dónde debe empezar la siguiente sesión

## feature_list.json

Tracker de funcionalidades. Lista legible por máquina de cada funcionalidad que el agent debe implementar, junto con su estado, pasos de verificación y evidencia.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Sustituye las funcionalidades de ejemplo por las tuyas
- Cada funcionalidad necesita:
  - `id`: identificador corto y único
  - `priority`: entero; cuanto menor, mayor prioridad
  - `area`: parte de la app (por ejemplo, "chat", "import", "search")
  - `title`: descripción breve
  - `user_visible_behavior`: qué debería ver el usuario cuando funcione
  - `status`: uno de `not_started`, `in_progress`, `blocked`, `passing`
  - `verification`: instrucciones paso a paso para confirmar que funciona
  - `evidence`: prueba registrada de que la verificación pasó, rellenada por el agent
  - `notes`: contexto adicional

**Reglas de estado:**

- `not_started`: todavía no se ha tocado
- `in_progress`: la única funcionalidad en la que se trabaja ahora
- `blocked`: no se puede avanzar por un bloqueo documentado
- `passing`: la verificación pasó y la evidencia está registrada

El agent solo debe tener una funcionalidad en `in_progress` al mismo tiempo.

## session-handoff.md

Nota compacta de traspaso entre sesiones. Úsala cuando una sesión termina y quieres que la siguiente retome con rapidez.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Rellénalo al final de cada sesión, o pide al agent que lo rellene

**Qué cubre cada sección:**

- **Currently verified**: qué está confirmado como funcional y qué verificación se ejecutó
- **Changes this session**: qué código o infraestructura cambió
- **Still broken or unverified**: problemas conocidos y áreas de riesgo
- **Next best action**: qué debe hacer la siguiente sesión y qué no debe tocar
- **Commands**: comandos de arranque, verificación y depuración para referencia rápida

Este archivo es opcional en sesiones pequeñas. Se vuelve importante cuando las sesiones son largas o el proyecto tiene varias áreas activas.

## clean-state-checklist.md

Checklist para recorrer antes de cerrar una sesión. Asegura que el repo queda en buen estado para que la siguiente sesión empiece limpiamente.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Revísalo antes de cerrar una sesión
- El agent también debe comprobar estos puntos como parte de su rutina de cierre

**Qué comprueba:**

- El arranque estándar sigue funcionando
- La verificación estándar sigue ejecutándose
- El registro de progreso está actualizado
- La lista de funcionalidades refleja el estado real, sin falsos `passing`
- No queda trabajo a medias sin registrar
- La siguiente sesión puede continuar sin arreglos manuales

## evaluator-rubric.md

Tarjeta de puntuación para revisar la calidad de salida del agent. Úsala después de una sesión o en hitos del proyecto para evaluar si el trabajo alcanza el nivel esperado.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Después de una sesión, o de un conjunto de sesiones, puntúa el trabajo del agent en seis dimensiones
- Cada dimensión se puntúa de 0 a 2

**Las seis dimensiones:**

1. **Correctness**: ¿la implementación coincide con el comportamiento objetivo?
2. **Verification**: ¿se ejecutaron las comprobaciones requeridas, con evidencia?
3. **Scope discipline**: ¿el agent se mantuvo dentro de la funcionalidad seleccionada?
4. **Reliability**: ¿el resultado sobrevive a un reinicio o una nueva ejecución?
5. **Maintainability**: ¿el código y la documentación son lo bastante claros para la siguiente sesión?
6. **Handoff readiness**: ¿una sesión nueva puede continuar usando solo artefactos del repo?

**Opciones de conclusión:**

- Accept: alcanza el nivel esperado
- Revise: necesita correcciones antes de aceptarse
- Block: hay problemas fundamentales que deben resolverse primero

**Importante: el evaluator necesita calibración.** De fábrica, los agents suelen juzgarse mal a sí mismos: detectan problemas y luego se convencen de aprobar. Debes iterar:

1. Ejecuta el evaluator sobre un sprint completado.
2. Compara sus puntuaciones con tu juicio humano.
3. Donde diverjan, vuelve la rúbrica más específica sobre criterios de aprobado/fallo.
4. Ejecuta de nuevo y comprueba alineación.
5. Repite hasta que el evaluator coincida de forma consistente con la revisión humana.

Planifica de 3 a 5 rondas de calibración. Registra cada cambio para saber qué mejoró la alineación.

## quality-document.md

Instantánea de calidad que puntúa cada dominio de producto y capa arquitectónica del proyecto. Sigue la salud del codebase a lo largo del tiempo, no solo la salida de una sesión.

**Cómo usarlo:**

- Cópialo en la raíz del proyecto
- Antes de una sesión: léelo para entender dónde está más débil el codebase
- Después de una sesión: actualiza las notas según lo que cambió
- Con el tiempo: compara instantáneas para ver qué cambios de harness mejoraron realmente la salud del codebase

**Qué puntúa:**

- **Dominios de producto** (por ejemplo, importación de documentos, flujo Q&A, indexación): cada dominio recibe una nota A-D en estado de verificación, legibilidad para agents, estabilidad de pruebas y brechas clave
- **Capas arquitectónicas** (por ejemplo, main process, preload, renderer, services): cada capa recibe una nota por enforcement de límites y legibilidad para agents

**Por qué importa:**

La rúbrica del evaluator puntúa salidas individuales del agent. El documento de calidad puntúa el codebase. Responden preguntas distintas:

- Rúbrica del evaluator: "¿el agent hizo buen trabajo en esta sesión?"
- Documento de calidad: "¿el proyecto se está volviendo más fuerte o más frágil con el tiempo?"

**Cuándo actualizarlo:**

- Después de cada sesión significativa
- Antes de comparaciones de benchmark
- Después de pasadas de limpieza o simplificación
- Al incorporar un nuevo agent o modelo al proyecto

**Conexión con simplificación del harness:**

El documento de calidad también ayuda a simplificar el harness. Cada componente del harness codifica una suposición sobre lo que el modelo no puede hacer. A medida que los modelos mejoran, esas suposiciones envejecen. Para comprobar si un componente sigue siendo necesario:

1. Toma una instantánea del documento de calidad.
2. Elimina un componente del harness.
3. Ejecuta la suite de tareas de benchmark.
4. Toma otra instantánea.
5. Compara: si las notas no bajan, el componente era sobrecarga; si bajan, restáuralo.
