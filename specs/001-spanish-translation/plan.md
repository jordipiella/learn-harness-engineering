# Implementation Plan: Spanish Course Translation

**Branch**: `001-spanish-translation` | **Date**: 2026-05-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-spanish-translation/spec.md`

## Summary

Create a Spanish localization of the course by translating the English source content into a new `docs/es/` locale, following the hierarchy and navigation conventions already used by the existing localized docs. The implementation will preserve code, commands, identifiers, and file paths while translating learner-facing prose, adding Spanish navigation to the site configuration, and validating the publishable docs build.

## Technical Context

**Language/Version**: Markdown content, TypeScript configuration, Node.js project with TypeScript 5.7  
**Primary Dependencies**: VitePress 1.6, vitepress-plugin-mermaid, npm scripts already defined in `package.json`  
**Storage**: Static files in the repository; no runtime storage  
**Testing**: `npm run docs:build`; navigation and translated-page spot checks  
**Target Platform**: Static documentation website generated from `docs/`  
**Project Type**: Documentation website / course content localization  
**Performance Goals**: Spanish navigation pages should load as normal static docs pages with no added runtime dependencies; first-time Spanish users should reach main course areas in under 2 minutes  
**Constraints**: Preserve EN/ZH content; place VitePress navigation changes only in `docs/.vitepress/config.mts`; preserve functional code blocks, commands, identifiers, and file paths  
**Scale/Scope**: Spanish equivalents for the main English course docs, localized navigation, and README-style entry documents where other localizations already provide equivalents

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Before Phase 0 — verify all apply:**

- [x] **I. Educational-First**: The feature directly serves learners by making the course usable in Spanish without changing the pedagogical sequence.
- [x] **II. Progressive Disclosure**: The Spanish version mirrors the existing course structure and does not introduce new harness concepts.
- [x] **III. Bilingual Parity**: No new English course content is introduced; existing EN and ZH content remain in scope as preserved source/required parity.
- [x] **V. Project Chain Integrity**: No `src/shared/types.ts` or service interface changes are planned.
- [x] **VI. Type Safety + Test Gate**: No project app code changes are planned; docs validation is covered by `npm run docs:build`.
- [x] **VII. Copy-Ready Resources**: Translated resources must remain copy-ready and preserve functional artifacts.

**After Phase 1 design — re-verify:**

- [x] **IV. Harness Authenticity**: No new harness artifacts are introduced; existing artifact templates remain usable and are translated only where learner-facing.
- [x] **Technical Constraints**: No database, IPC, or Electron architecture changes; VitePress navigation changes are isolated to `docs/.vitepress/config.mts`.

## Project Structure

### Documentation (this feature)

```text
specs/001-spanish-translation/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── spanish-localization-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
docs/
├── .vitepress/
│   └── config.mts
├── en/
│   ├── index.md
│   ├── lectures/
│   ├── projects/
│   ├── resources/
│   └── skills/
├── es/
│   ├── index.md
│   ├── lectures/
│   ├── projects/
│   ├── resources/
│   └── skills/
└── zh/ ... existing localized content preserved

README.md
README-CN.md
README-KO.md
README-ES.md

projects/
├── project-01/
│   └── README-ES.md
├── project-02/
│   └── README-ES.md
├── project-03/
│   └── README-ES.md
├── project-04/
│   └── README-ES.md
├── project-05/
│   └── README-ES.md
└── project-06/
    └── README-ES.md

skills/
└── README-ES.md
```

**Structure Decision**: Use the existing docs localization pattern. Spanish docs live under `docs/es/`, navigation is added beside the existing locale item arrays and `locales` entries in `docs/.vitepress/config.mts`, and root/project/skills README translations follow the existing suffix convention used by `README-CN.md` and `README-KO.md`.

## Complexity Tracking

No constitution violations require justification.
