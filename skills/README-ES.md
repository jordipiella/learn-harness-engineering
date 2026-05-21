# Skills

[中文版](./README-CN.md) · [한국어](./README-KO.md)

Este directorio contiene skills reutilizables para AI agents dentro del proyecto Learn Harness Engineering. Cada skill es una plantilla de prompt autocontenida que pueden cargar agents de programación con IA (Claude Code, Codex, Cursor, Windsurf, etc.) para realizar tareas especializadas.

## Skills disponibles

### harness-creator

Skill de Harness Engineering preparada para producción para agents de programación con IA. Ayuda a crear, evaluar y mejorar archivos de harness para agents (`AGENTS.md`, listas de funcionalidades, workflows de verificación y mecanismos de continuidad entre sesiones).

- **5 patrones de referencia**: persistencia de memoria, ingeniería de contexto, registro de herramientas, coordinación multi-agent, ciclo de vida y bootstrap
- **Plantillas**: `AGENTS.md`, `feature-list.json`, `init.sh`, `progress.md`
- **5 casos de evaluación integrados**
- **Bilingüe**: English + 中文

Consulta [harness-creator/README.md](harness-creator/README.md) para la documentación completa.

## Cómo se construyó harness-creator

La skill `harness-creator` se desarrolló con la metodología **skill-creator**, la meta-skill oficial de Anthropic para crear, probar e iterar skills de agents. `skill-creator` proporciona un workflow estructurado (draft → test → evaluate → iterate) con runners de evaluación, graders y un visor de benchmarks.

- **Fuente de skill-creator**: [anthropics/skills — skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)
- **Documentación de skills de Anthropic Claude Code**: [anthropics/claude-code — plugin-dev/skills](https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills)

## Estructura de directorios

```text
skills/
├── README.md                    # Este archivo
├── README-CN.md                 # Versión china
└── harness-creator/             # Skill de Harness Engineering
    ├── SKILL.md                 # Definición principal de la skill (bilingüe)
    ├── SKILL.md.en              # Versión solo en inglés
    ├── README.md                # Documentación detallada
    ├── metadata.json            # Metadatos y disparadores de la skill
    ├── evals/                   # Casos de prueba
    ├── templates/               # Plantillas de scaffolding
    └── references/              # Documentos de patrones en profundidad
```

## Cómo funcionan las skills

Cada skill sigue una estructura estándar:

1. **SKILL.md**: punto de entrada. Contiene frontmatter YAML (nombre y descripción para activación) e instrucciones Markdown para el agent.
2. **references/**: documentación adicional que se carga en contexto cuando hace falta.
3. **templates/**: plantillas iniciales que la skill puede generar para usuarios.

Las skills usan divulgación progresiva: el agent ve primero solo el nombre y la descripción; cuando la skill se activa, carga el cuerpo completo de `SKILL.md` y lee recursos incluidos solo cuando son necesarios.

## Auditoría de seguridad

Todos los archivos de este directorio se han auditado por seguridad:

- Sin backdoors, URLs ocultas ni payloads codificados
- Sin exfiltración de datos ni credenciales hardcodeadas
- Sin vulnerabilidades de inyección de comandos
- `init.sh` ejecuta únicamente comandos estándar del ciclo de vida de npm

## Licencia

MIT
