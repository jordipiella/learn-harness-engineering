# Contract: Spanish Localization

## Scope

The Spanish localization exposes a learner-facing documentation experience at `/es/` with the same primary course areas as the existing localized versions.

## Locale Contract

| Field | Required Value |
|-------|----------------|
| Locale key | `es` |
| Language label | `Español` |
| Language code | `es` |
| Entry route | `/es/` |
| Content root | `docs/es/` |

## Navigation Contract

The Spanish locale must expose these top-level areas:

| Area | Expected Route | Notes |
|------|----------------|-------|
| Lectures | `/es/lectures/lecture-01-why-capable-agents-still-fail/` | Entry should start at the first lecture after welcome |
| Projects | `/es/projects/` | Must list projects in P01 to P06 order |
| Resources | `/es/resources/` | Must preserve resource groups and copy-ready templates |
| Skills | `/es/skills/` | Must preserve learner-facing skills overview |

## Content Mapping Contract

Each Spanish page in scope must maintain this mapping:

```text
docs/en/<relative-path>/index.md -> docs/es/<relative-path>/index.md
docs/en/<relative-path>/<file>.md -> docs/es/<relative-path>/<file>.md
README.md -> README-ES.md
projects/project-N/README.md -> projects/project-N/README-ES.md
skills/README.md -> skills/README-ES.md
```

## Link Contract

- Internal links to translated docs pages should point to `/es/` equivalents when those equivalents exist.
- Links to code files, external references, GitHub URLs, and source artifacts must remain valid.
- Links without Spanish equivalents must still resolve to an existing target.

## Translation Contract

- Translate learner-facing prose, page titles, headings, navigation labels, callouts, and instructional explanations.
- Preserve code blocks, commands, file paths, package names, config keys, identifiers, placeholders, and URLs unless they are clearly prose labels.
- Use consistent terminology for recurring concepts: harness, agent, repository, verification, observability, runtime, scope, and session handoff.

## Validation Contract

The implementation is complete only when:

- Spanish navigation entries resolve to existing pages.
- Representative lecture, project, resource, and skill pages load under `/es/`.
- `npm run docs:build` completes without errors caused by Spanish content.
- No existing English, Chinese, Korean, Russian, Uzbek, or Vietnamese route is removed or degraded.
