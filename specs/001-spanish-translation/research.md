# Research: Spanish Course Translation

## Decision: Use English as the translation source of truth

**Rationale**: The feature explicitly requests a Spanish version translated from English. English also contains the canonical learning sequence and the most complete source paths for lectures, projects, resources, and skills.

**Alternatives considered**: Translating from another localized version was rejected because existing localized versions may adapt wording or omit source-specific files. Combining multiple localized versions was rejected because it would make consistency harder to verify.

## Decision: Add Spanish as `docs/es/`

**Rationale**: Existing localized documentation uses short language directories under `docs/` such as `zh`, `ko`, `ru`, `uz`, and `vi`. `es` is the standard short locale path for Spanish and fits the established route pattern.

**Alternatives considered**: `docs/es-ES/` was rejected because the course should use broadly understandable neutral Spanish rather than a country-specific variant. `docs/spanish/` was rejected because it differs from existing locale conventions.

## Decision: Preserve technical artifacts verbatim

**Rationale**: Code blocks, shell commands, filenames, config keys, and identifiers must keep working. Translating them can break copy-paste workflows and undermine the course's copy-ready resources principle.

**Alternatives considered**: Translating comments and code strings broadly was rejected because it creates functional risk and inconsistent examples. Translating only prose around artifacts provides the intended learner value with lower risk.

## Decision: Update VitePress navigation in the existing config

**Rationale**: The constitution states that VitePress navigation and sidebar changes belong only in `docs/.vitepress/config.mts`. Existing locales are declared there, so Spanish should follow the same arrays and locale entry pattern.

**Alternatives considered**: Creating separate config files was rejected because it would split the source of truth. Hard-coding links inside pages only was rejected because it would not make Spanish discoverable from the language selector.

## Decision: Treat EN/ZH parity as preserved, not expanded

**Rationale**: The constitution requires EN/ZH parity for course content additions. This feature adds a Spanish localization of existing English content and does not introduce new curriculum content. The implementation must therefore preserve existing EN and ZH content and avoid creating Spanish-only concepts.

**Alternatives considered**: Editing EN and ZH in parallel was rejected unless translation review reveals source defects that must be fixed. Adding Spanish-only explanations was rejected because it would create localized content drift.

## Decision: Validate with docs build plus navigation checks

**Rationale**: The project is a static documentation site. The relevant publishability gate is the docs build, supplemented by checks that Spanish navigation entries and internal links resolve.

**Alternatives considered**: Project app `npm run check` and `npm run test` were rejected as primary gates because this feature does not modify project app code and those scripts are not the root documentation validation path.
