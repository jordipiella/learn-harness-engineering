# Tasks: Spanish Course Translation

**Input**: Design documents from `specs/001-spanish-translation/`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/spanish-localization-contract.md`, `quickstart.md`

**Tests**: No TDD tasks requested. Validation tasks are included for docs build, route checks, link checks, and translation QA.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files or can be reviewed independently
- **[Story]**: Maps to the user story from `spec.md`
- Every task includes concrete file or directory paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the Spanish localization workspace and source inventory.

- [X] T001 Create Spanish source inventory from `docs/en/`, `README.md`, `projects/project-01/README.md`, `projects/project-02/README.md`, `projects/project-03/README.md`, `projects/project-04/README.md`, `projects/project-05/README.md`, `projects/project-06/README.md`, and `skills/README.md` in `specs/001-spanish-translation/spanish-source-inventory.md`
- [X] T002 Create mirrored Spanish documentation directories in `docs/es/`, `docs/es/lectures/`, `docs/es/projects/`, `docs/es/resources/`, and `docs/es/skills/`
- [X] T003 [P] Create Spanish translation terminology notes in `docs/es/GLOSSARY.md` covering harness, agent, repository, verification, observability, runtime, scope, and session handoff
- [X] T004 [P] Create Spanish style guidance in `docs/es/STYLE-GUIDE.md` for neutral Spanish, preserved technical artifacts, and link localization rules

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared Spanish navigation and core page structure before story-specific translation work.

**CRITICAL**: No user story work should begin until the Spanish route and core structure are defined.

- [X] T005 Add Spanish lecture, project, resource, and skill navigation item arrays in `docs/.vitepress/config.mts`
- [X] T006 Add the Spanish locale entry, labels, sidebars, footer labels, outline labels, and top-level nav links in `docs/.vitepress/config.mts`
- [X] T007 Create Spanish landing page structure in `docs/es/index.md` with links to lectures, projects, resources, and skills
- [X] T008 [P] Create Spanish projects index structure in `docs/es/projects/index.md`
- [X] T009 [P] Create Spanish resources index structure in `docs/es/resources/index.md`
- [X] T010 [P] Create Spanish skills index structure in `docs/es/skills/index.md`
- [X] T011 Verify foundational Spanish routes declared in `docs/.vitepress/config.mts` point to existing files under `docs/es/`

**Checkpoint**: Spanish locale shell exists and user story implementation can proceed.

---

## Phase 3: User Story 1 - Leer el curso en español (Priority: P1) MVP

**Goal**: Spanish-speaking learners can read the main course experience in Spanish.

**Independent Test**: Open `/es/`, navigate to lectures, projects, resources, and skills, and confirm translated Spanish content exists for each primary area.

### Implementation for User Story 1

- [X] T012 [P] [US1] Translate the Spanish welcome page from `docs/en/index.md` into `docs/es/index.md`
- [X] T013 [P] [US1] Translate lecture 01 from `docs/en/lectures/lecture-01-why-capable-agents-still-fail/index.md` into `docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md`
- [X] T014 [P] [US1] Translate lecture 02 from `docs/en/lectures/lecture-02-what-a-harness-actually-is/index.md` into `docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md`
- [X] T015 [P] [US1] Translate lecture 03 from `docs/en/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md` into `docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md`
- [X] T016 [P] [US1] Translate lecture 04 from `docs/en/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md` into `docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md`
- [X] T017 [P] [US1] Translate lecture 05 from `docs/en/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md` into `docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md`
- [X] T018 [P] [US1] Translate lecture 06 from `docs/en/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md` into `docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md`
- [X] T019 [P] [US1] Translate lecture 07 from `docs/en/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md` into `docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md`
- [X] T020 [P] [US1] Translate lecture 08 from `docs/en/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md` into `docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md`
- [X] T021 [P] [US1] Translate lecture 09 from `docs/en/lectures/lecture-09-why-agents-declare-victory-too-early/index.md` into `docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md`
- [X] T022 [P] [US1] Translate lecture 10 from `docs/en/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md` into `docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md`
- [X] T023 [P] [US1] Translate lecture 11 from `docs/en/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md` into `docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md`
- [X] T024 [P] [US1] Translate lecture 12 from `docs/en/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md` into `docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md`
- [X] T025 [P] [US1] Translate project overview and project pages from `docs/en/projects/` into `docs/es/projects/`
- [X] T026 [P] [US1] Translate resource overview, template pages, reference pages, and advanced resource pages from `docs/en/resources/` into `docs/es/resources/`
- [X] T027 [P] [US1] Translate skills overview from `docs/en/skills/index.md` into `docs/es/skills/index.md`
- [X] T028 [P] [US1] Translate learner-facing lecture code companion Markdown files from `docs/en/lectures/*/code/*.md` into matching paths under `docs/es/lectures/`
- [X] T029 [P] [US1] Copy functional non-prose code artifacts from `docs/en/lectures/*/code/*.ts`, `docs/en/lectures/*/code/*.sh`, and `docs/en/resources/templates/` into matching paths under `docs/es/` while preserving executable content
- [X] T030 [US1] Review Spanish content in `docs/es/` against `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md` for terminology consistency and preserved technical artifacts

**Checkpoint**: User Story 1 is complete when `/es/` and the primary Spanish course areas contain translated Spanish content and preserved functional examples.

---

## Phase 4: User Story 2 - Mantener consistencia con otros idiomas (Priority: P2)

**Goal**: Spanish localization follows the structure, navigation, and maintenance conventions of existing localized versions.

**Independent Test**: Compare `docs/es/` with `docs/en/`, `docs/zh/`, `docs/ko/`, `docs/ru/`, `docs/uz/`, and `docs/vi/` and confirm the same primary course areas and ordering exist.

### Implementation for User Story 2

- [X] T031 [P] [US2] Compare the Spanish directory hierarchy in `docs/es/` against `docs/en/` and document intentional omissions or fallbacks in `specs/001-spanish-translation/spanish-source-inventory.md`
- [X] T032 [P] [US2] Align Spanish lecture, project, resource, and skill sidebar ordering in `docs/.vitepress/config.mts` with the existing localized sidebars
- [X] T033 [P] [US2] Translate root README from `README.md` into `README-ES.md`
- [X] T034 [P] [US2] Translate project README files from `projects/project-01/README.md`, `projects/project-02/README.md`, `projects/project-03/README.md`, `projects/project-04/README.md`, `projects/project-05/README.md`, and `projects/project-06/README.md` into `projects/project-01/README-ES.md`, `projects/project-02/README-ES.md`, `projects/project-03/README-ES.md`, `projects/project-04/README-ES.md`, `projects/project-05/README-ES.md`, and `projects/project-06/README-ES.md`
- [X] T035 [P] [US2] Translate skills README from `skills/README.md` into `skills/README-ES.md`
- [X] T036 [US2] Audit Spanish links in `docs/es/`, `README-ES.md`, `projects/project-*/README-ES.md`, and `skills/README-ES.md` so translated docs links prefer `/es/` targets when available and external/source links remain valid
- [X] T037 [US2] Verify existing English, Chinese, Korean, Russian, Uzbek, and Vietnamese locale entries remain present and unchanged in `docs/.vitepress/config.mts`

**Checkpoint**: User Story 2 is complete when Spanish structure and README coverage match established localization conventions.

---

## Phase 5: User Story 3 - Verificar que el proyecto sigue funcionando (Priority: P3)

**Goal**: The Spanish localization builds, routes correctly, and does not break existing locales.

**Independent Test**: Generate the documentation site and confirm Spanish routes and existing localized routes work without build errors caused by the Spanish addition.

### Implementation for User Story 3

- [X] T038 [US3] Run `npm run docs:build` from repository root and fix any Spanish-content errors in `docs/es/` or `docs/.vitepress/config.mts`
- [X] T039 [US3] Verify generated Spanish entry routes `/es/`, `/es/lectures/lecture-01-why-capable-agents-still-fail/`, `/es/projects/`, `/es/resources/`, and `/es/skills/` correspond to files in `docs/es/`
- [X] T040 [US3] Run a dead-link review for Spanish docs by checking links in `docs/es/`, `README-ES.md`, `projects/project-*/README-ES.md`, and `skills/README-ES.md`
- [X] T041 [US3] Spot-check rendered Spanish pages for the welcome page, one lecture, one project, one resource page, and the skills page using the routes documented in `specs/001-spanish-translation/quickstart.md`
- [X] T042 [US3] Record validation results, remaining known fallbacks, and build status in `specs/001-spanish-translation/validation-results.md`

**Checkpoint**: User Story 3 is complete when docs build succeeds and Spanish routes pass spot checks.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass across translation, navigation, and repository cleanliness.

- [X] T043 [P] Review Spanish terminology consistency across `docs/es/`, `README-ES.md`, `projects/project-*/README-ES.md`, and `skills/README-ES.md`
- [X] T044 [P] Review copy-ready Spanish templates and resources under `docs/es/resources/` to ensure commands, paths, placeholders, and identifiers remain usable
- [X] T045 [P] Compare `git status --short` output against expected changed paths for `docs/es/`, `docs/.vitepress/config.mts`, `README-ES.md`, `projects/project-*/README-ES.md`, `skills/README-ES.md`, and `specs/001-spanish-translation/`
- [X] T046 Update `specs/001-spanish-translation/tasks.md` task checkboxes for completed implementation work

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup; blocks user story work because Spanish routes and structure must exist first.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the MVP readable Spanish course.
- **User Story 2 (Phase 4)**: Depends on Foundational and can run partly in parallel with US1 after Spanish structure exists.
- **User Story 3 (Phase 5)**: Depends on desired content and navigation being present; should run after US1 and US2 for complete validation.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2; no dependency on US2 or US3.
- **US2 (P2)**: Can start after Phase 2; benefits from US1 content but can independently validate structure, navigation, and README conventions.
- **US3 (P3)**: Requires implemented Spanish content and navigation; validates US1 and US2 together.

### Parallel Opportunities

- T003 and T004 can run in parallel after T001.
- T008, T009, and T010 can run in parallel after T006.
- T013 through T029 can run in parallel once `docs/es/` structure exists.
- T033, T034, and T035 can run in parallel because they write separate README files.
- T043, T044, and T045 can run in parallel during final polish.

---

## Parallel Example: User Story 1

```text
Task: "T013 Translate lecture 01 from docs/en/lectures/lecture-01-why-capable-agents-still-fail/index.md into docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md"
Task: "T014 Translate lecture 02 from docs/en/lectures/lecture-02-what-a-harness-actually-is/index.md into docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md"
Task: "T025 Translate project overview and project pages from docs/en/projects/ into docs/es/projects/"
Task: "T026 Translate resource overview, template pages, reference pages, and advanced resource pages from docs/en/resources/ into docs/es/resources/"
```

## Parallel Example: User Story 2

```text
Task: "T033 Translate root README from README.md into README-ES.md"
Task: "T034 Translate project README files from projects/project-01/README.md, projects/project-02/README.md, projects/project-03/README.md, projects/project-04/README.md, projects/project-05/README.md, and projects/project-06/README.md into projects/project-01/README-ES.md, projects/project-02/README-ES.md, projects/project-03/README-ES.md, projects/project-04/README-ES.md, projects/project-05/README-ES.md, and projects/project-06/README-ES.md"
Task: "T035 Translate skills README from skills/README.md into skills/README-ES.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational Spanish route and page structure.
3. Complete Phase 3: User Story 1 translated course content.
4. Stop and validate that `/es/` gives Spanish learners access to welcome, lectures, projects, resources, and skills.

### Incremental Delivery

1. Deliver Spanish course content (US1).
2. Align localization conventions and README coverage (US2).
3. Validate build, routes, and link health (US3).
4. Polish terminology and copy-ready resource quality.

### Validation-First Review

1. After each content batch, check preserved technical artifacts in the changed files.
2. After navigation updates, confirm all Spanish nav links point to existing pages.
3. Before completion, run `npm run docs:build` and record results in `specs/001-spanish-translation/validation-results.md`.

---

## Notes

- `[P]` tasks write different files or can be reviewed independently.
- `[US1]`, `[US2]`, and `[US3]` map to the three user stories in `spec.md`.
- Preserve existing English, Chinese, Korean, Russian, Uzbek, and Vietnamese content unless a task explicitly identifies a required non-Spanish fix.
- Do not translate code identifiers, commands, filenames, configuration keys, or external URLs unless they are clearly prose labels.
