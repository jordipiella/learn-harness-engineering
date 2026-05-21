# Contract: Spanish Translation Review

## Scope Contract

The review covers the existing Spanish learner-facing documentation and Spanish entry surfaces:

```text
docs/es/
README-ES.md
projects/project-01/README-ES.md
projects/project-02/README-ES.md
projects/project-03/README-ES.md
projects/project-04/README-ES.md
projects/project-05/README-ES.md
projects/project-06/README-ES.md
skills/README-ES.md
```

English files under `docs/en/`, `README.md`, `projects/project-*/README.md`, and `skills/README.md` are the source references.

## Coverage Contract

Each reviewed Spanish file with an English counterpart must satisfy:

| Requirement | Expected Result |
|-------------|-----------------|
| Source mapping | Spanish file maps to the intended English source file |
| Section coverage | English learner-facing sections are represented in Spanish |
| Meaning fidelity | Spanish preserves source claims, order, examples, warnings, prerequisites, and outcomes |
| Natural Spanish | Spanish reads as professional neutral Spanish, not literal machine output |
| No unsupported additions | Spanish does not introduce new course claims or objectives unsupported by English |

## Protected Artifact Contract

The following content is preserved unless there is a documented safe reason to adapt it:

- Shell commands
- File and directory paths
- Route slugs
- Package names
- Configuration keys
- Code identifiers
- Code blocks
- URLs
- Branch, workflow, and script names
- Copy-ready template structure

Surrounding explanations, labels, and instructional prose should be translated where safe.

## Terminology Contract

Recurring terms must follow `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md`. If review changes a recurring decision, the relevant guidance must be updated before the review is complete.

Core terms requiring consistency include:

| English Term | Review Requirement |
|--------------|--------------------|
| harness | Keep approved course term and explain through Spanish prose |
| agent | Keep approved course term unless glossary changes |
| repository/repo | Use consistent Spanish rendering by context |
| verification | Avoid drifting into unrelated validation terminology |
| observability | Preserve technical meaning |
| runtime | Preserve technical meaning |
| scope | Use consistent Spanish when referring to work boundaries |
| session handoff | Use one documented Spanish rendering |

## Link and Navigation Contract

- Internal links should point to Spanish equivalents when those pages exist.
- Links to external sources must remain valid URLs.
- Links to code, templates, and source artifacts must not be translated into nonexistent paths.
- Navigation labels in Spanish must stay aligned with reviewed terminology.

## Validation Contract

Completion requires:

- A documented English/Spanish coverage review for all Spanish pages in scope.
- Zero unresolved critical translation defects.
- Updated glossary or style guide entries for changed recurring decisions.
- Passing docs build.
- Passing local link/navigation checks for Spanish content.
- A final validation report that records reviewed areas, checks performed, results, and known limitations.
