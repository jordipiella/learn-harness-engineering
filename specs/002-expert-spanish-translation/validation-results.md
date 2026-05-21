# Validation Results: Expert Spanish Translation Review

**Date**: 2026-05-21  
**Feature**: `002-expert-spanish-translation`

## Checklist Status

| Checklist | Total | Completed | Incomplete | Status |
|-----------|-------|-----------|------------|--------|
| `requirements.md` | 16 | 16 | 0 | PASS |

## Foundational Decisions

- English remains the source of truth for meaning, order, examples, warnings, and outcomes.
- Spanish uses a neutral, professional technical register.
- Functional artifacts are protected by default: commands, paths, slugs, identifiers, URLs, package names, configuration keys, and copy-ready template structure.
- `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md` are the controls for recurring terminology and future Spanish updates.

## Review Coverage

- Completed:
  - Spanish glossary and style guide rewritten with expert translation rules.
  - Spanish landing page, projects index, resources index, and skills index reviewed.
  - Root `README-ES.md` rewritten into coherent Spanish while preserving commands, links, and functional names.
  - Project README Spanish files rewritten and functional directory names restored (`starter/`, `solution/`).
  - `skills/README-ES.md` rewritten.
  - Project pages under `docs/es/projects/` rewritten.
  - `docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md` rewritten.
  - `docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md` rewritten.
  - `docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md` rewritten.
  - `docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md` rewritten.
  - `docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md` rewritten.
  - `docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md` rewritten.
  - `docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md` rewritten.
  - `docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md` rewritten.
  - `docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md` rewritten.
  - `docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md` rewritten.
  - `docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md` rewritten.
  - `docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md` rewritten.
  - Lecture `code/*.md` materials audited and corrected for protected paths, commands, states, and copy-ready structure.
  - `docs/es/resources/templates/index.md` rewritten.
  - `docs/es/resources/templates/*.md` rewritten or corrected as copy-ready Spanish templates.
  - `docs/es/resources/reference/method-map.md` rewritten and broken translated artifact `sesión-traspaso.md` corrected to `session-handoff.md`.
  - `docs/es/resources/reference/*.md` rewritten or corrected.
  - `docs/es/resources/openai-advanced/`, including `repo-template/` and `sops/`, rewritten or corrected while preserving template paths, commands, placeholders, and identifiers.

## Editorial Sample

Representative bilingual review sample:

- English source: "The entry file is a router, not an encyclopedia."
- Spanish rendering: "El archivo de entrada es un enrutador, no una enciclopedia."
- Decision: preserve the conceptual metaphor and translate only the prose; keep `AGENTS.md`, paths, commands, and template field names unchanged.

Terminology consistency status: PASS. Core terms follow `docs/es/GLOSSARY.md`: `harness`, `agent`, `runtime`, `scope`, `verificación`, `sistema de registro`, `estado limpio`, `lista de funcionalidades`, and `handoff`/`traspaso de sesión` according to context.

## Protected Artifact Review

- Commands, flags, paths, slugs, URLs, package names, JSON keys, code identifiers, and copy-ready placeholder structures were preserved.
- Intentional English retained: official article titles, command examples, code identifiers, placeholder values, `Definition Of Done`/`Definition Of Done`-style template headings where copied usage benefits from the original term, and code/demo strings in TypeScript examples.
- Corrected translated protected artifacts included `sesión-traspaso.md` -> `session-handoff.md`, visible `[código/]` -> `[code/]`, visible `[plantillas/]` -> `[templates/]`, `npm ejecutar` -> `npm run`, and `pdf:construir` -> `pdf:build`.

## Build

- `npm run docs:build`: PASS on 2026-05-21 after final Spanish translation pass.
- `git diff --check`: PASS on 2026-05-21.

## Link and Route Checks

- Local Spanish markdown link validation: PASS, 100 files checked, no local broken markdown links found.
- VitePress dev route checks at `http://127.0.0.1:5174/learn-harness-engineering/`: PASS.

| Route | Status |
|-------|--------|
| `/es/` | 200 |
| `/es/lectures/lecture-01-why-capable-agents-still-fail/` | 200 |
| `/es/lectures/lecture-04-why-one-giant-instruction-file-fails/` | 200 |
| `/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/` | 200 |
| `/es/projects/` | 200 |
| `/es/resources/` | 200 |
| `/es/resources/openai-advanced/` | 200 |
| `/es/skills/` | 200 |

## Scope Confirmation

- `git diff --name-only` was reviewed. Changes are limited to the active Spec Kit feature files, `.specify/feature.json`, `AGENTS.md`, Spanish documentation under `docs/es/`, Spanish README surfaces, project `README-ES.md` files, and `skills/README-ES.md`.
- No English, Chinese, Korean, or unrelated localized content files were edited.

## Known Limitations

- No blocking limitations remain for the requested Spanish expert translation pass.
- Some copy-ready template fields and code/demo strings intentionally remain in English because translating them would reduce direct usability or alter functional artifacts.

## Final Outcome

PASS. The Spanish learner-facing corpus, README surfaces, technical markdown artifacts, template resources, reference notes, and OpenAI advanced resources have been corrected against the English source and validated through build, local link checks, route checks, and diff review.
