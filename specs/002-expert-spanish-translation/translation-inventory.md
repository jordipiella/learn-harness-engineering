# Translation Inventory

**Feature**: `002-expert-spanish-translation`  
**Source of truth**: English content under `docs/en/`, root `README.md`, `projects/project-*/README.md`, and `skills/README.md`.

## Scope Summary

- Spanish documentation markdown/text files found under `docs/es/`: 96
- English documentation markdown/text source files found under `docs/en/`: 94
- Spanish-only support files: `docs/es/GLOSSARY.md`, `docs/es/STYLE-GUIDE.md`
- README Spanish entry files in scope: `README-ES.md`, `projects/project-01/README-ES.md` through `projects/project-06/README-ES.md`, `skills/README-ES.md`

## Mapping Policy

| Source | Spanish target | Status |
|--------|----------------|--------|
| `docs/en/<relative-path>` | `docs/es/<relative-path>` | Reviewed by relative path |
| `README.md` | `README-ES.md` | Reviewed as root entry point |
| `projects/project-N/README.md` | `projects/project-N/README-ES.md` | Reviewed as project entry point |
| `skills/README.md` | `skills/README-ES.md` | Reviewed as skills entry point |
| No English source | `docs/es/GLOSSARY.md`, `docs/es/STYLE-GUIDE.md` | Reviewed for Spanish consistency |

## Protected Artifact Checklist

For each reviewed page, preserve these unless the English source itself presents translatable prose:

- Shell commands and command flags
- File and directory paths
- Route slugs
- Package names
- Configuration keys
- Code identifiers
- Code blocks
- URLs
- Branch, workflow, and script names
- Copy-ready template structure

## Coverage Findings

Initial spot checks found critical Spanglish in:

- `docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md`
- `docs/es/resources/reference/method-map.md`

These findings indicate the issue is systemic in machine-assisted pages, so the implementation uses a corpus-wide review model: visible course entry points, all lecture and project pages, technical artifact directories, resource/template pages, and README surfaces.

## Final Status

Reviewed and validated on 2026-05-21.

- `docs/es/` learner pages: reviewed.
- `docs/es/lectures/lecture-01` through `lecture-12`: reviewed.
- Lecture `code/*.md` materials: reviewed for protected artifacts and corrected where user-facing Spanglish appeared.
- `docs/es/projects/` pages: reviewed.
- `docs/es/resources/templates/`: reviewed.
- `docs/es/resources/reference/`: reviewed.
- `docs/es/resources/openai-advanced/`: reviewed, including `repo-template/` and `sops/`.
- `README-ES.md`, `projects/project-*/README-ES.md`, and `skills/README-ES.md`: reviewed.
- `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md`: finalized as ongoing controls for Spanish terminology and protected artifacts.

Deferred items: none blocking. Intentional English remains only for protected artifacts, official titles, commands, placeholders, identifiers, code/demo strings, and established technical terms documented in the glossary.
