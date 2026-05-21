# Translation Findings

**Feature**: `002-expert-spanish-translation`

| ID | Severity | Type | Spanish Path | Source Path | Finding | Resolution |
|----|----------|------|--------------|-------------|---------|------------|
| F001 | Critical | literal-phrasing | `docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md` | `docs/en/lectures/lecture-01-why-capable-agents-still-fail/index.md` | Page contains extensive mixed English/Spanish prose and machine-word substitutions. | Corrected during US1 pass. |
| F002 | Critical | unsafe-artifact-change | `docs/es/resources/reference/method-map.md` | `docs/en/resources/reference/method-map.md` | Functional artifact `session-handoff.md` was translated as `sesión-traspaso.md`. | Corrected during US2 resource pass. |
| F003 | Major | terminology-drift | `docs/es/` | `docs/en/` | Terms such as model, agent, verification, runtime, scope, and handoff are inconsistently rendered. | Centralized in glossary and style guide. |
| F004 | Major | style-guide-gap | `docs/es/STYLE-GUIDE.md` | n/a | Previous style guide did not define enough acceptance criteria for expert review. | Expanded during foundational phase. |

## Severity Rules

- **Critical**: Missing source content, reversed meaning, broken instructions, broken artifact paths, or unusable copy-ready material.
- **Major**: Awkward or inconsistent translation that materially harms comprehension but does not block completion.
- **Minor**: Tone, punctuation, or wording polish that does not change meaning.
