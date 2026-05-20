# Habilidades

[中文版](./README-CN.md) · [한국어](./README-KO.md)

This directory contains reusable AI agent skills for the Aprender Harness Ingeniería proyecto. Each skill is a self-contained prompt plantilla that can be loaded by agents de programación con IA (Claude Código, Codex, Cursor, Windsurf, etc.) to perform specialized tareas.

## Available Habilidades

### harness-creator

Producción harness ingeniería skill for agents de programación con IA. Helps crear, assess, and improve agent harness archivos (AGENTS.md, lista de funcionalidadess, verificación flujos de trabajo, sesión continuity mechanisms).

- **5 referencia patterns**: Memory Persistence, Contexto Ingeniería, Herramienta Registry, Multi-Agent Coordination, Lifecycle & Bootstrap
- **Plantillas**: AGENTS.md, feature-list.json, init.sh, progress.md
- **5 built-in eval prueba cases**
- **Bilingual**: English + 中文

See [harness-creator/README.md](harness-creator/README.md) for full documentation.

## How harness-creator Was Built

The `harness-creator` skill was developed usando the **skill-creator** methodology — Anthropic's official meta-skill for creating, pruebas, and iterating on agent skills. The skill-creator proporciona a estructurado flujo de trabajo (draft → prueba → evaluate → iterate) with built-in eval runners, graders, and a benchmark viewer.

- **skill-creator source**: [anthropics/skills — skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)
- **Anthropic Claude Código skills docs**: [anthropics/claude-code — plugin-dev/skills](https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills)

## Directory Estructura

```
skills/
├── README.md                    # This file
├── README-CN.md                 # Chinese version
└── harness-creator/             # Harness engineering skill
    ├── SKILL.md                 # Main skill definition (bilingual)
    ├── SKILL.md.en              # English-only version
    ├── README.md                # Detailed documentation
    ├── metadata.json            # Skill metadata & triggers
    ├── evals/                   # Test cases
    ├── templates/               # Scaffold templates
    └── references/              # Deep-dive pattern docs
```

## How Habilidades Work

Each skill follows a standard estructura:

1. **SKILL.md** — The entry point. Contains YAML frontmatter (name, description for triggering) and Markdown instrucciones for the agent.
2. **references/** — Additional docs loaded into contexto as needed.
3. **plantillas/** — Starting plantillas that the skill can generate for usuarios.

Habilidades usar progressive disclosure — the agent first sees only the name + description, then loads the full SKILL.md body when triggered, and reads bundled recursos only when needed.

## Security Audit

All archivos in this directory have been audited for security:

- No backdoors, hidden URLs, or encoded payloads
- No datos exfiltration or hardcoded credentials
- No comando injection vulnerabilities
- `init.sh` ejecuta only standard npm lifecycle comandos

## License

MIT
