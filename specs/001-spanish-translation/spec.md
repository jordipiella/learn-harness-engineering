# Feature Specification: Spanish Course Translation

**Feature Branch**: `001-spanish-translation`  
**Created**: 2026-05-20  
**Status**: Draft  
**Input**: User description: "Crea la versión en español traducida del inglés siguiendo la estructura de los otros idiomas y que funcione el proyecto. Debes traducir"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Leer el curso en español (Priority: P1)

Como estudiante hispanohablante, quiero acceder a una versión en español del contenido principal del curso para poder seguir las lecciones, proyectos, recursos y habilidades sin depender de la versión en inglés.

**Why this priority**: Este es el valor principal de la feature: hacer que el curso sea usable para usuarios hispanohablantes.

**Independent Test**: Puede probarse revisando la experiencia de navegación de la versión en español y verificando que las páginas equivalentes al contenido principal en inglés existen, cargan y muestran texto traducido.

**Acceptance Scenarios**:

1. **Given** un visitante que prefiere español, **When** abre la página inicial de la versión española, **Then** puede navegar a las secciones de bienvenida, lecciones, proyectos, recursos y habilidades en español.
2. **Given** una página principal existente en inglés, **When** el visitante abre su equivalente en español, **Then** el contenido conserva el significado, la estructura y los enlaces relevantes de la página original.

---

### User Story 2 - Mantener consistencia con otros idiomas (Priority: P2)

Como mantenedor del curso, quiero que la versión en español siga la misma organización que las versiones localizadas existentes para que el mantenimiento, la revisión y la navegación sean predecibles.

**Why this priority**: La consistencia reduce errores de navegación y evita que la localización española se convierta en una variante difícil de mantener.

**Independent Test**: Puede probarse comparando la estructura visible de la versión española con las versiones localizadas existentes y confirmando que las secciones equivalentes aparecen en el mismo orden conceptual.

**Acceptance Scenarios**:

1. **Given** las versiones localizadas existentes, **When** se compara la versión española con ellas, **Then** la versión española ofrece las mismas áreas principales y una jerarquía de contenidos equivalente.
2. **Given** un usuario que cambia entre idiomas, **When** pasa de otra versión localizada a la española, **Then** encuentra nombres de secciones, rutas de aprendizaje y flujo de lectura coherentes.

---

### User Story 3 - Verificar que el proyecto sigue funcionando (Priority: P3)

Como mantenedor, quiero validar que la incorporación del español no rompe la construcción ni la navegación del sitio para poder publicar la traducción con confianza.

**Why this priority**: La traducción solo está lista si el sitio completo sigue siendo navegable y publicable.

**Independent Test**: Puede probarse generando una versión publicable del sitio y revisando que no haya páginas españolas inaccesibles, enlaces internos rotos dentro del alcance traducido ni errores visibles de navegación.

**Acceptance Scenarios**:

1. **Given** la versión española integrada, **When** se valida el sitio completo, **Then** la validación termina sin errores atribuibles a la nueva localización.
2. **Given** una página española con enlaces internos, **When** un usuario sigue esos enlaces, **Then** llega a contenido existente o a una equivalencia razonable en el idioma adecuado.

### Edge Cases

- Si un recurso inglés no tiene equivalente localizado en otros idiomas, la versión española debe conservar el acceso al recurso sin ocultarlo ni dejar enlaces rotos.
- Si un término técnico no tiene una traducción española clara o común, debe mantenerse el término técnico original y explicarse de forma natural en español cuando sea necesario.
- Si una página incluye ejemplos de código, comandos, nombres de archivo o identificadores, esos elementos deben conservarse funcionalmente y solo traducir el texto explicativo.
- Si una página contiene enlaces cruzados entre secciones, los enlaces deben apuntar a la versión española cuando exista y a la fuente apropiada cuando no exista una equivalencia traducida.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El curso DEBE ofrecer un punto de entrada en español que sea descubrible desde la misma experiencia de selección de idioma usada por las versiones localizadas existentes.
- **FR-002**: La versión española DEBE incluir equivalentes traducidos de las áreas principales del curso en inglés: bienvenida, lecciones, proyectos, recursos y habilidades.
- **FR-003**: La versión española DEBE conservar la misma secuencia de aprendizaje que la fuente en inglés para que los estudiantes sigan el curso en el orden previsto.
- **FR-004**: La traducción española DEBE conservar el significado, la intención didáctica, los ejemplos, las advertencias y las expectativas de trabajo del contenido fuente en inglés.
- **FR-005**: La versión española DEBE seguir el mismo patrón estructural usado por las versiones localizadas existentes, incluyendo agrupación de secciones, jerarquía de páginas y orden de navegación.
- **FR-006**: La versión española DEBE localizar al español natural las etiquetas visibles de navegación, los títulos de secciones, los títulos de página y el texto dirigido al estudiante.
- **FR-007**: La versión española DEBE preservar artefactos funcionales como ejemplos de código, comandos, nombres de archivo, claves de configuración, marcadores e identificadores técnicos salvo que el artefacto sea claramente texto explicativo.
- **FR-008**: La versión española DEBE mantener la navegación interna usable, asegurando que los enlaces en páginas traducidas resuelvan a equivalentes en español cuando existan o a un destino válido cuando no exista equivalente español.
- **FR-009**: El proyecto DEBE seguir siendo construible y navegable tras añadir el contenido en español, sin fallos de validación causados por la nueva localización española.
- **FR-010**: El contenido traducido DEBE usar terminología coherente para conceptos recurrentes del curso como harness, agent, repository, verification, observability, runtime, scope y session handoff.
- **FR-011**: La versión española DEBE incluir documentos de entrada tipo README traducidos cuando otras versiones localizadas ya ofrezcan documentos equivalentes dirigidos al estudiante.
- **FR-012**: La localización española NO DEBE eliminar, renombrar ni degradar contenido existente en inglés u otros idiomas.

### Key Entities

- **Localización española**: La experiencia completa del curso en español, incluyendo punto de entrada, etiquetas de navegación, jerarquía de páginas y contenido traducido.
- **Página fuente**: Página del curso en inglés o documento de entrada dirigido al estudiante que actúa como fuente autorizada para la traducción española.
- **Página traducida**: Página en español que replica el propósito, la estructura, el valor didáctico y las referencias funcionales de la página fuente.
- **Elemento de navegación localizado**: Etiqueta visible o enlace que permite llegar al contenido español con el mismo orden y agrupación que otras versiones localizadas.
- **Artefacto técnico**: Código, comando, nombre de archivo, texto de configuración o identificador incrustado en contenido didáctico que debe seguir funcionando mientras se traduce el texto alrededor.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: El 100% de las páginas principales en inglés dentro del alcance acordado tienen una página española correspondiente o una alternativa válida documentada.
- **SC-002**: El 100% de las entradas de navegación en español llevan a páginas existentes.
- **SC-003**: Un estudiante hispanohablante que visita el curso por primera vez puede llegar a la bienvenida, la lista de lecciones, la lista de proyectos, recursos y habilidades desde el punto de entrada español en menos de 2 minutos.
- **SC-004**: Al menos el 95% de las páginas traducidas revisadas conservan los mismos encabezados, la misma secuencia didáctica y las mismas acciones requeridas al estudiante que su fuente en inglés.
- **SC-005**: La validación de una versión publicable del sitio termina sin errores causados por el contenido español o por cambios de navegación.
- **SC-006**: Una revisión terminológica encuentra como máximo 3 traducciones inconsistentes entre los conceptos recurrentes principales del contenido español.

## Assumptions

- El contenido en inglés es la fuente de verdad para la traducción española.
- La primera versión española debe igualar la estructura de las versiones localizadas existentes en lugar de crear una arquitectura de información nueva.
- Los ejemplos de código, comandos, identificadores y rutas de archivo no se traducen salvo que sean claramente etiquetas en prosa.
- El español debe ser neutro, profesional y comprensible de forma amplia en regiones hispanohablantes.
- Las versiones localizadas existentes sirven como referencia para decidir qué significa "misma estructura" cuando difieren ligeramente del inglés.
- La preparación para publicación se determina mediante validación correcta del proyecto y revisiones puntuales de navegación traducida y páginas representativas.
