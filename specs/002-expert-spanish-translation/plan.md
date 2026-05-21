# Implementation Plan: Revisión experta de traducción española

**Branch**: `002-expert-spanish-translation` | **Date**: 2026-05-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/002-expert-spanish-translation/spec.md`

## Summary

Revisar de forma experta el corpus español existente en `docs/es/` y las superficies README españolas contra la fuente inglesa, corrigiendo traducciones faltantes, literales o incorrectas sin alterar la estructura didáctica del curso. La implementación conservará artefactos técnicos funcionales, reforzará glosario y guía de estilo, documentará hallazgos de cobertura/calidad y validará que la documentación española siga compilando y enlazando correctamente.

## Technical Context

**Language/Version**: Markdown content, TypeScript VitePress configuration, Node.js project with TypeScript 5.7  
**Primary Dependencies**: VitePress 1.6, vitepress-plugin-mermaid, npm scripts from `package.json`, existing Spanish glossary/style guide  
**Storage**: Static repository files only; no runtime storage  
**Testing**: Translation coverage review, terminology checks, local link checks, `npm run docs:build`, representative route spot checks  
**Target Platform**: Static documentation website generated from `docs/`  
**Project Type**: Documentation website / expert localization quality pass  
**Performance Goals**: No added runtime dependencies; Spanish learners should be able to navigate the revised course through existing static pages with normal VitePress behavior  
**Constraints**: Preserve English source meaning; preserve code blocks, commands, paths, identifiers, URLs, config keys, package names, and copy-ready templates; do not redesign course structure; VitePress navigation changes only in `docs/.vitepress/config.mts` if needed  
**Scale/Scope**: Full Spanish documentation corpus under `docs/es/`, Spanish glossary and style guide, Spanish README surfaces, navigation labels, and validation artifacts for the translation review

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Before Phase 0 — verify all apply:**

- [x] **I. Educational-First**: The feature improves learner comprehension by making Spanish course content faithful, complete, and technically accurate.
- [x] **II. Progressive Disclosure**: The Spanish review mirrors the existing English course sequence and does not introduce concepts ahead of schedule.
- [x] **III. Bilingual Parity**: No new English curriculum is introduced; EN and ZH parity remains preserved while this feature improves an additional Spanish localization.
- [x] **V. Project Chain Integrity**: No `src/shared/types.ts`, app source, or service interface changes are planned.
- [x] **VI. Type Safety + Test Gate**: No project app code changes are planned; documentation validation uses `npm run docs:build` plus link/content checks.
- [x] **VII. Copy-Ready Resources**: Spanish templates and examples must remain copy-ready, preserving functional artifacts and translating only safe explanatory prose.

**After Phase 1 design — re-verify:**

- [x] **IV. Harness Authenticity**: Existing harness-related templates remain usable in real agent sessions; the review strengthens rather than abstracts them.
- [x] **Technical Constraints**: No database, IPC, or Electron architecture changes; any VitePress config touch remains isolated to `docs/.vitepress/config.mts`.

## Project Structure

### Documentation (this feature)

```text
specs/002-expert-spanish-translation/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── spanish-translation-review-contract.md
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
│   ├── GLOSSARY.md
│   ├── STYLE-GUIDE.md
│   ├── index.md
│   ├── lectures/
│   ├── projects/
│   ├── resources/
│   └── skills/
└── zh/ ... existing required localization preserved

README.md
README-ES.md
README-CN.md
README-KO.md

projects/
├── project-01/README-ES.md
├── project-02/README-ES.md
├── project-03/README-ES.md
├── project-04/README-ES.md
├── project-05/README-ES.md
└── project-06/README-ES.md

skills/
└── README-ES.md
```

**Structure Decision**: Keep the existing Spanish locale structure created under `docs/es/`. The review operates in place, comparing each Spanish page to its English counterpart, updating glossary/style guidance as translation decisions become final, and touching `docs/.vitepress/config.mts` only if navigation or label defects are found.

## Complexity Tracking

No constitution violations require justification.
