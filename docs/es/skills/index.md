# Habilidades

Este directorio contiene las skills de AI agents incluidas con el curso. Una skill es una plantilla de instrucciones autocontenida que puede cargar un agent de programación, como Claude Code, Codex, Cursor o Windsurf, para ejecutar tareas especializadas.

## harness-creator

`harness-creator` es una skill de Harness Engineering preparada para producción. Ayuda a crear, evaluar y mejorar los cinco subsistemas centrales de un harness: instrucciones, estado, verificación, alcance y ciclo de vida de sesión.

### Qué hace

- **Crear harnesses desde cero**: AGENTS.md, listas de funcionalidades y flujos de verificación
- **Mejorar harnesses existentes**: evaluación de cinco subsistemas con mejoras priorizadas
- **Diseñar continuidad entre sesiones**: persistencia de memoria, seguimiento de progreso y traspasos
- **Aplicar patrones de producción**: memoria, ingeniería de contexto, seguridad de herramientas y coordinación multi-agent

### Inicio rápido

Los archivos de la skill están en [`skills/harness-creator/`](https://github.com/walkinglabs/learn-harness-engineering/tree/main/skills/harness-creator).

Para usarla con Claude Code, copia el directorio `harness-creator/` a la ruta de skills de tu proyecto o apunta tu agent al archivo `SKILL.md`.

### Patrones de referencia

La skill incluye 6 documentos de referencia:

| Patrón | Cuándo usarlo |
|--------|---------------|
| Persistencia de memoria | El agent olvida entre sesiones |
| Ingeniería de contexto | Gestión del presupuesto de contexto y carga JIT |
| Registro de herramientas | Seguridad de herramientas y control de concurrencia |
| Coordinación multi-agent | Paralelismo y flujos especializados |
| Ciclo de vida y arranque | Hooks, tareas en segundo plano e inicialización |
| Gotchas | Modos de fallo no obvios con correcciones |

### Plantillas

- `agents.md`: base de AGENTS.md con reglas de trabajo
- `feature-list.json`: JSON Schema y ejemplo de lista de funcionalidades
- `init.sh`: script de inicialización estándar
- `progress.md`: plantilla de registro de progreso de sesión

### Cómo se construyó esta skill

`harness-creator` se desarrolló con la metodología **skill-creator**, la meta-skill oficial de Anthropic para crear, probar e iterar skills de agents.

- **Fuente de skill-creator**: [anthropics/skills — skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)
- **Documentación de skills de Claude Code**: [anthropics/claude-code — plugin-dev/skills](https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills)
