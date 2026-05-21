# Feature Specification: Revisión experta de traducción española

**Feature Branch**: `002-expert-spanish-translation`  
**Created**: 2026-05-20  
**Status**: Draft  
**Input**: User description: "En la parte de español de @docs/es hay traducciones faltantes y mal hechas. Planifica una traduccción experta del inglés al español respetando al máximo el contenido"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Contenido español completo y fiel (Priority: P1)

Una persona hispanohablante puede leer la versión española del curso y recibir la misma sustancia didáctica, ejemplos, advertencias, estructura y progresión de aprendizaje que ofrece la fuente en inglés, sin encontrar párrafos sin traducir, secciones ausentes ni traducciones artificiales que cambien el significado.

**Why this priority**: El material español solo es útil si representa con precisión el curso original. Una traducción incompleta o inexacta rompe el valor principal de aprendizaje.

**Independent Test**: Revisar cada página española de aprendizaje contra su fuente inglesa. La historia se considera superada cuando cada sección original tiene un equivalente español que conserva significado, orden e intención didáctica.

**Acceptance Scenarios**:

1. **Dado** una página inglesa del curso con títulos, explicaciones, ejemplos e instrucciones de acción, **cuando** una persona revisora abre su equivalente español, **entonces** toda la prosa dirigida al lector aparece en español y mantiene el mismo significado que la fuente inglesa.
2. **Dado** una página española derivada de la fuente inglesa, **cuando** la persona revisora compara párrafo por párrafo, **entonces** no falta ningún concepto, advertencia, dependencia, resultado esperado ni prerrequisito de la página inglesa.
3. **Dado** una página inglesa que usa deliberadamente términos técnicos en inglés, **cuando** la página española presenta ese contenido, **entonces** los términos conservados siguen el glosario aprobado y están acompañados por prosa explicativa clara en español.

---

### User Story 2 - Preservar exactitud técnica y usabilidad (Priority: P2)

Una persona que aprende o enseña puede copiar comandos, nombres de archivo, claves de configuración, identificadores de código, enlaces y plantillas del material español sin romperlos, mientras lee el contenido explicativo en español experto.

**Why this priority**: Una traducción fiel no puede volver inutilizables los ejemplos, plantillas o enlaces. Los artefactos técnicos forman parte del contrato del curso.

**Independent Test**: Revisar los artefactos técnicos incluidos en el corpus español contra la fuente inglesa y verificar que la prosa dirigida al lector esté traducida mientras los identificadores funcionales permanecen intactos.

**Acceptance Scenarios**:

1. **Dado** una página inglesa que contiene comandos, rutas de archivo, bloques de código o claves de configuración, **cuando** se revisa su equivalente español, **entonces** los artefactos funcionales permanecen sin cambios salvo que la fuente inglesa presente explícitamente prosa traducible dentro de ellos.
2. **Dado** una página española con enlaces a contenido del curso, **cuando** se comprueban los enlaces, **entonces** los enlaces internos resuelven a la página española prevista cuando existe y los enlaces externos siguen siendo válidos.
3. **Dado** una plantilla del curso lista para copiar, **cuando** se inspecciona la versión española, **entonces** la plantilla sigue siendo operativa y cualquier prosa traducida no altera nombres de campos, comandos ni estructura requeridos.

---

### User Story 3 - Asegurar coherencia editorial en el corpus español (Priority: P3)

Una persona mantenedora del curso puede confiar en que terminología, tono, estilo de títulos y conceptos recurrentes son coherentes en lecciones, proyectos, recursos, skills, plantillas, glosario y guía de estilo.

**Why this priority**: La coherencia hace que el curso parezca escrito y revisado, no convertido automáticamente, y ayuda a construir modelos mentales estables.

**Independent Test**: Revisar términos recurrentes y pasajes representativos en todas las áreas del contenido español. La historia se considera superada cuando un mismo concepto se traduce de forma consistente y la guía de estilo refleja las decisiones finales.

**Acceptance Scenarios**:

1. **Dado** términos recurrentes como "harness", "agent", "runtime", "scope", "observability" y "verification", **cuando** aparecen en el material español, **entonces** siguen una decisión de traducción documentada en todo el corpus.
2. **Dado** una página que antes mezclaba prosa inglesa, traducción literal o formulaciones torpes en español, **cuando** se revisa, **entonces** la prosa final se lee como español profesional natural y conserva el significado original.
3. **Dado** una decisión terminológica tomada durante la revisión, **cuando** afecta a varias páginas, **entonces** el glosario o la guía de estilo recoge la decisión para mantener la coherencia en futuras actualizaciones españolas.

### Edge Cases

- El contenido inglés puede incluir nombres propios, nombres de producto, etiquetas de interfaz citadas, acrónimos o identificadores de código que deben permanecer en inglés.
- Algunas páginas fuente pueden contener ejemplos donde traducir cadenas visibles volvería el ejemplo inconsistente con el código o los nombres de archivo cercanos.
- Las páginas españolas pueden incluir contenido adicional solo de localización, como glosario o guía de estilo, sin página fuente inglesa; ese contenido debe revisarse por coherencia, no por paridad de fuente.
- Algunas formulaciones inglesas pueden no tener un equivalente español natural palabra por palabra; la versión española debe preservar intención y resultado de aprendizaje antes que el orden literal.
- La navegación del curso, las etiquetas laterales, las páginas iniciales y los enlaces de idioma en README deben permanecer alineados con la terminología española revisada.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El corpus español debe auditarse contra el corpus fuente inglés para identificar contenido sin traducir, secciones faltantes, cambios de significado, formulaciones torpes, terminología inconsistente y decisiones de localización rotas.
- **FR-002**: Cada página fuente inglesa con contraparte española debe tener cobertura española equivalente para todo el contenido didáctico dirigido al lector.
- **FR-003**: Las traducciones españolas deben preservar significado fuente, secuencia pedagógica, ejemplos, advertencias, prerrequisitos, resultados esperados e instrucciones de acción.
- **FR-004**: La prosa española debe leerse como español neutro, profesional y natural para personas técnicas, evitando formulaciones literales o mecánicas cuando debiliten la claridad.
- **FR-005**: La traducción debe seguir una política terminológica consistente para conceptos recurrentes del curso y actualizar el glosario o la guía de estilo en español cuando cambien las decisiones.
- **FR-006**: Comandos, rutas de archivo, nombres de directorio, identificadores de código, claves de configuración, nombres de paquete, URLs, nombres de rama, nombres de workflow y otros artefactos funcionales deben seguir siendo válidos y no deben traducirse cuando la traducción rompa su uso.
- **FR-007**: Las plantillas listas para copiar y los ejemplos técnicos en español deben conservar su estructura operativa y traducir solo la prosa explicativa que pueda localizarse con seguridad.
- **FR-008**: La navegación y los enlaces internos españoles deben dirigir a la página española equivalente cuando exista, y deben seguir siendo válidos cuando enlacen a material fuente o externo.
- **FR-009**: El contenido español de páginas iniciales, índices, proyectos, recursos, skills y README debe usar las mismas decisiones terminológicas y de alcance que las páginas detalladas del curso.
- **FR-010**: La revisión debe registrar el resultado de validación, incluyendo estado de cobertura, controles de calidad realizados y cualquier elemento residual que permanezca intencionalmente sin traducir o aplazado.
- **FR-011**: Cualquier término inglés conservado en prosa española dirigida al lector debe ser un nombre propio, un artefacto funcional, un término aprobado por el glosario o estar explícitamente justificado por la terminología del curso.
- **FR-012**: La versión española no debe introducir requisitos, afirmaciones, ejemplos, herramientas u objetivos de aprendizaje nuevos que no existan o no estén respaldados por la fuente inglesa, salvo material de apoyo a la localización como glosario y guía de estilo.

### Key Entities

- **Página fuente inglesa**: Contenido autoritativo del curso usado como fuente de traducción; incluye títulos, prosa, ejemplos, enlaces y artefactos técnicos.
- **Página traducida al español**: Equivalente localizado para personas hispanohablantes; debe preservar el significado fuente y leerse con naturalidad en español.
- **Decisión terminológica**: Mapeo documentado o regla de conservación para conceptos recurrentes del curso y términos técnicos.
- **Artefacto técnico**: Comando, ruta, identificador, clave de configuración, bloque de código, URL, plantilla o nombre de workflow funcional que debe seguir siendo usable tras la localización.
- **Hallazgo de revisión**: Problema de traducción detectado, como contenido faltante, significado impreciso, terminología inconsistente, enlace roto o traducción insegura de artefactos.
- **Informe de validación**: Registro para mantenimiento que indica qué se revisó, qué pasó y qué queda como limitación conocida.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: El 100% de las páginas españolas con contraparte inglesa se revisan contra su página fuente para comprobar cobertura y significado.
- **SC-002**: El 100% de las secciones didácticas inglesas dirigidas al lector en páginas revisadas tienen una versión española equivalente, salvo que se documenten explícitamente como conservadas en inglés de forma intencional.
- **SC-003**: Quedan 0 defectos críticos de traducción sin resolver; crítico significa contenido fuente faltante, significado invertido, instrucciones rotas o artefactos funcionales traducidos de forma que impidan completar el material.
- **SC-004**: Al menos el 95% de la terminología recurrente revisada usa de forma consistente el glosario español aprobado o una regla de conservación documentada en todo el corpus.
- **SC-005**: El 100% de los enlaces internos españoles y destinos de navegación comprobados resuelven al destino previsto.
- **SC-006**: Una persona revisora bilingüe puede inspeccionar una muestra representativa de lecciones, proyectos, recursos, plantillas, skills y contenido README y calificar la prosa española como fiel, natural y técnicamente precisa, sin revisiones bloqueantes.
- **SC-007**: El informe final de validación identifica áreas revisadas, controles realizados, resultados de aprobado/fallo y cualquier elemento de edición deliberadamente aplazado.

## Assumptions

- El contenido inglés del curso es la fuente de verdad para significado, estructura e intención didáctica.
- El glosario y la guía de estilo españoles existentes son puntos de partida, no restricciones inmutables; pueden refinarse para mejorar la calidad de traducción experta.
- El español debe usar un registro neutro y profesional apto para personas técnicas de distintas regiones hispanohablantes.
- Los artefactos funcionales deben seguir listos para copiar y ser válidos incluso cuando la prosa explicativa cercana esté traducida.
- El alcance cubre la documentación española y superficies relacionadas de README/localización, no un rediseño del contenido del curso ni de la arquitectura de navegación.
