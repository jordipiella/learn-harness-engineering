# Quickstart: Revisión experta de traducción española

## 1. Confirmar la feature activa

```bash
git status --short --branch
cat .specify/feature.json
```

Expected feature directory:

```text
specs/002-expert-spanish-translation
```

## 2. Inventariar pares inglés/español

```bash
find docs/en -type f | sort
find docs/es -type f | sort
find projects skills -maxdepth 2 -name 'README*.md' | sort
```

Use English files as the source of truth. Spanish-only support files such as `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md` should be reviewed for consistency rather than source parity.

## 3. Revisar por áreas

Recommended order:

1. `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md`
2. `docs/es/index.md` and top-level section indexes
3. `docs/es/lectures/`
4. `docs/es/projects/`
5. `docs/es/resources/`
6. `docs/es/skills/`
7. `README-ES.md`, project README Spanish files, and `skills/README-ES.md`

For each file pair, check:

- No English learner-facing prose remains unintentionally.
- No source section is missing.
- Meaning, warnings, examples, prerequisites, and outcomes match the English source.
- Spanish reads naturally and professionally.
- Functional artifacts remain unchanged where required.

## 4. Registrar decisiones y hallazgos

Update the glossary/style guide when recurring terminology changes. Record final evidence in a validation report under:

```text
specs/002-expert-spanish-translation/validation-results.md
```

## 5. Validar técnicamente

```bash
npm run docs:build
```

Then perform Spanish link/navigation checks and representative route checks:

```text
/es/
/es/lectures/lecture-01-why-capable-agents-still-fail/
/es/projects/
/es/resources/
/es/skills/
```

## 6. Completion criteria

Before marking implementation complete:

- 100% of Spanish pages with English counterparts have been reviewed.
- Critical translation defects are resolved.
- Glossary/style guide decisions reflect final terminology.
- Internal Spanish links and navigation targets resolve.
- `npm run docs:build` passes.
- `validation-results.md` documents the final review status.
