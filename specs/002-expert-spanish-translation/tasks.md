# Tasks: Revisión experta de traducción española

**Input**: Design documents from `specs/002-expert-spanish-translation/`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/spanish-translation-review-contract.md`, `quickstart.md`

**Tests**: No TDD test tasks were requested. This feature uses editorial coverage checks, link/navigation validation, route spot checks, and `npm run docs:build` as acceptance validation.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files or independent review surfaces
- **[Story]**: User story label for story phases only
- Every task names the file or directory path it changes or validates

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish review tracking and source mapping before editing content.

- [X] T001 Create English/Spanish source mapping inventory in `specs/002-expert-spanish-translation/translation-inventory.md`
- [X] T002 Create translation findings log with severity fields in `specs/002-expert-spanish-translation/translation-findings.md`
- [X] T003 [P] Create validation report skeleton from the contract in `specs/002-expert-spanish-translation/validation-results.md`
- [X] T004 [P] Compare `docs/en/` and `docs/es/` file lists and record missing, extra, and Spanish-only support files in `specs/002-expert-spanish-translation/translation-inventory.md`
- [X] T005 [P] Compare root and project README source surfaces and record mappings for `README-ES.md`, `projects/project-*/README-ES.md`, and `skills/README-ES.md` in `specs/002-expert-spanish-translation/translation-inventory.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Lock the terminology and artifact rules that all translation work depends on.

**CRITICAL**: No user story work should begin until this phase is complete.

- [X] T006 Update baseline terminology decisions for core course concepts in `docs/es/GLOSSARY.md`
- [X] T007 Update expert translation rules and protected artifact policy in `docs/es/STYLE-GUIDE.md`
- [X] T008 Audit Spanish navigation labels and route assumptions in `docs/.vitepress/config.mts` against `docs/es/GLOSSARY.md`
- [X] T009 Build protected artifact review checklist for commands, paths, identifiers, code blocks, URLs, and templates in `specs/002-expert-spanish-translation/translation-inventory.md`
- [X] T010 Record foundational terminology and artifact decisions in `specs/002-expert-spanish-translation/validation-results.md`

**Checkpoint**: Translation rules are ready and user story work can begin.

---

## Phase 3: User Story 1 - Contenido español completo y fiel (Priority: P1) MVP

**Goal**: Spanish learners can read the course in Spanish with the same substance, sequence, examples, warnings, and outcomes as the English source.

**Independent Test**: Compare each revised Spanish learner page against its English source and verify that no user-facing instructional section is missing or meaning-shifted.

### Implementation for User Story 1

- [X] T011 [P] [US1] Correct Spanish welcome page against the English source in `docs/es/index.md`
- [X] T012 [P] [US1] Correct Spanish projects overview against the English source in `docs/es/projects/index.md`
- [X] T013 [P] [US1] Correct Spanish resources overview against the English source in `docs/es/resources/index.md`
- [X] T014 [P] [US1] Correct Spanish skills overview against the English source in `docs/es/skills/index.md`
- [X] T015 [P] [US1] Correct lecture 01 prose against the English source in `docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md`
- [X] T016 [P] [US1] Correct lecture 02 prose against the English source in `docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md`
- [X] T017 [P] [US1] Correct lecture 03 prose against the English source in `docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md`
- [X] T018 [P] [US1] Correct lecture 04 prose against the English source in `docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/index.md`
- [X] T019 [P] [US1] Correct lecture 05 prose against the English source in `docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md`
- [X] T020 [P] [US1] Correct lecture 06 prose against the English source in `docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md`
- [X] T021 [P] [US1] Correct lecture 07 prose against the English source in `docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md`
- [X] T022 [P] [US1] Correct lecture 08 prose against the English source in `docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md`
- [X] T023 [P] [US1] Correct lecture 09 prose against the English source in `docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/index.md`
- [X] T024 [P] [US1] Correct lecture 10 prose against the English source in `docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/index.md`
- [X] T025 [P] [US1] Correct lecture 11 prose against the English source in `docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md`
- [X] T026 [P] [US1] Correct lecture 12 prose against the English source in `docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md`
- [X] T027 [P] [US1] Correct project 01 page against the English source in `docs/es/projects/project-01-baseline-vs-minimal-harness/index.md`
- [X] T028 [P] [US1] Correct project 02 page against the English source in `docs/es/projects/project-02-agent-readable-workspace/index.md`
- [X] T029 [P] [US1] Correct project 03 page against the English source in `docs/es/projects/project-03-multi-session-continuity/index.md`
- [X] T030 [P] [US1] Correct project 04 page against the English source in `docs/es/projects/project-04-incremental-indexing/index.md`
- [X] T031 [P] [US1] Correct project 05 page against the English source in `docs/es/projects/project-05-grounded-qa-verification/index.md`
- [X] T032 [P] [US1] Correct project 06 page against the English source in `docs/es/projects/project-06-runtime-observability-and-debugging/index.md`
- [X] T033 [P] [US1] Correct root Spanish README against the English source in `README-ES.md`
- [X] T034 [P] [US1] Correct Spanish project README files against English sources in `projects/project-01/README-ES.md`, `projects/project-02/README-ES.md`, `projects/project-03/README-ES.md`, `projects/project-04/README-ES.md`, `projects/project-05/README-ES.md`, and `projects/project-06/README-ES.md`
- [X] T035 [P] [US1] Correct Spanish skills README against the English source in `skills/README-ES.md`
- [X] T036 [US1] Record coverage status and resolved critical content defects in `specs/002-expert-spanish-translation/validation-results.md`

**Checkpoint**: User Story 1 is complete when primary learner pages and README entry points have no missing or meaning-shifted instructional content.

---

## Phase 4: User Story 2 - Preservar exactitud técnica y usabilidad (Priority: P2)

**Goal**: Technical examples, links, commands, templates, identifiers, and copy-ready artifacts remain usable while explanatory prose is translated correctly.

**Independent Test**: Inspect protected artifacts and links in the Spanish corpus against the English source; verify that functional content remains valid and Spanish links resolve to intended destinations.

### Implementation for User Story 2

- [X] T037 [P] [US2] Audit and correct protected artifacts in lecture 01-04 code materials under `docs/es/lectures/lecture-01-why-capable-agents-still-fail/code/`, `docs/es/lectures/lecture-02-what-a-harness-actually-is/code/`, `docs/es/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/code/`, and `docs/es/lectures/lecture-04-why-one-giant-instruction-file-fails/code/`
- [X] T038 [P] [US2] Audit and correct protected artifacts in lecture 05-08 code materials under `docs/es/lectures/lecture-05-why-long-running-tasks-lose-continuity/code/`, `docs/es/lectures/lecture-06-why-initialization-needs-its-own-phase/code/`, `docs/es/lectures/lecture-07-why-agents-overreach-and-under-finish/code/`, and `docs/es/lectures/lecture-08-why-feature-lists-are-harness-primitives/code/`
- [X] T039 [P] [US2] Audit and correct protected artifacts in lecture 09-12 code materials under `docs/es/lectures/lecture-09-why-agents-declare-victory-too-early/code/`, `docs/es/lectures/lecture-10-why-end-to-end-testing-changes-results/code/`, `docs/es/lectures/lecture-11-why-observability-belongs-inside-the-harness/code/`, and `docs/es/lectures/lecture-12-why-every-session-must-leave-a-clean-state/code/`
- [X] T040 [P] [US2] Audit and correct copy-ready template explanations without breaking structure in `docs/es/resources/templates/`
- [X] T041 [P] [US2] Audit and correct OpenAI advanced repository template materials without breaking paths or identifiers in `docs/es/resources/openai-advanced/repo-template/`
- [X] T042 [P] [US2] Audit and correct OpenAI advanced SOP materials without breaking commands or links in `docs/es/resources/openai-advanced/sops/`
- [X] T043 [P] [US2] Audit and correct reference resource pages without breaking links or file references in `docs/es/resources/reference/`
- [X] T044 [US2] Validate Spanish navigation routes and label consistency in `docs/.vitepress/config.mts`
- [X] T045 [US2] Run local Spanish markdown link validation and record the result in `specs/002-expert-spanish-translation/validation-results.md`
- [X] T046 [US2] Record protected artifact review results and unresolved intentional retentions in `specs/002-expert-spanish-translation/validation-results.md`

**Checkpoint**: User Story 2 is complete when Spanish technical artifacts remain copy-ready and local Spanish links/navigation targets validate.

---

## Phase 5: User Story 3 - Asegurar coherencia editorial en el corpus español (Priority: P3)

**Goal**: Terminology, tone, heading style, and recurring concepts are consistent across the complete Spanish course experience.

**Independent Test**: Review recurring terms and representative passages across lectures, projects, resources, templates, skills, and README content; verify glossary/style guide decisions match actual usage.

### Implementation for User Story 3

- [X] T047 [P] [US3] Apply final terminology and tone pass across lecture pages in `docs/es/lectures/`
- [X] T048 [P] [US3] Apply final terminology and tone pass across project pages and Spanish project READMEs in `docs/es/projects/` and `projects/project-*/README-ES.md`
- [X] T049 [P] [US3] Apply final terminology and tone pass across resource and template pages in `docs/es/resources/`
- [X] T050 [P] [US3] Apply final terminology and tone pass across skills and README entry surfaces in `docs/es/skills/`, `skills/README-ES.md`, and `README-ES.md`
- [X] T051 [US3] Finalize glossary entries and retained English term justifications in `docs/es/GLOSSARY.md`
- [X] T052 [US3] Finalize style guide rules for future Spanish updates in `docs/es/STYLE-GUIDE.md`
- [X] T053 [US3] Record representative bilingual editorial review sample and terminology consistency status in `specs/002-expert-spanish-translation/validation-results.md`

**Checkpoint**: User Story 3 is complete when recurring terminology follows documented decisions and Spanish prose reads consistently across the corpus.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and release evidence across all stories.

- [X] T054 Run `npm run docs:build` and record the result in `specs/002-expert-spanish-translation/validation-results.md`
- [X] T055 Validate representative Spanish routes `/es/`, `/es/lectures/lecture-01-why-capable-agents-still-fail/`, `/es/projects/`, `/es/resources/`, and `/es/skills/` and record results in `specs/002-expert-spanish-translation/validation-results.md`
- [X] T056 Review `git diff` for unintended English, Chinese, Korean, or unrelated content changes and record scope confirmation in `specs/002-expert-spanish-translation/validation-results.md`
- [X] T057 Update final reviewed/deferred status for every mapped page in `specs/002-expert-spanish-translation/translation-inventory.md`
- [X] T058 Finalize completion summary, known limitations, and pass/fail outcomes in `specs/002-expert-spanish-translation/validation-results.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all story work.
- **User Story 1 (Phase 3)**: Depends on Foundational; provides MVP translation value.
- **User Story 2 (Phase 4)**: Depends on Foundational; can run in parallel with US1 after shared artifact policy is set.
- **User Story 3 (Phase 5)**: Depends on Foundational; best finalized after major US1/US2 corrections are known.
- **Polish (Phase 6)**: Depends on desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: No dependency on other user stories; MVP scope.
- **US2 (P2)**: No hard dependency on US1, but should use the same inventory and artifact policy.
- **US3 (P3)**: Can start after Foundational, but final glossary/style decisions should incorporate findings from US1 and US2.

### Parallel Opportunities

- T003-T005 can run in parallel after T001/T002 are understood.
- T011-T035 can be distributed by file because each task targets independent learner-facing pages.
- T037-T043 can be distributed by technical content area because each task targets separate directories.
- T047-T050 can run in parallel by corpus area after major content corrections are complete.

---

## Parallel Example: User Story 1

```text
Task: "T015 Correct lecture 01 prose in docs/es/lectures/lecture-01-why-capable-agents-still-fail/index.md"
Task: "T016 Correct lecture 02 prose in docs/es/lectures/lecture-02-what-a-harness-actually-is/index.md"
Task: "T027 Correct project 01 page in docs/es/projects/project-01-baseline-vs-minimal-harness/index.md"
Task: "T033 Correct root Spanish README in README-ES.md"
```

## Parallel Example: User Story 2

```text
Task: "T037 Audit lecture 01-04 code materials under docs/es/lectures/*/code/"
Task: "T040 Audit copy-ready templates in docs/es/resources/templates/"
Task: "T041 Audit repo-template materials in docs/es/resources/openai-advanced/repo-template/"
Task: "T043 Audit reference resources in docs/es/resources/reference/"
```

## Parallel Example: User Story 3

```text
Task: "T047 Apply terminology pass across docs/es/lectures/"
Task: "T048 Apply terminology pass across docs/es/projects/ and projects/project-*/README-ES.md"
Task: "T049 Apply terminology pass across docs/es/resources/"
Task: "T050 Apply terminology pass across docs/es/skills/, skills/README-ES.md, and README-ES.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 for learner-facing Spanish content fidelity.
3. Stop and validate that every primary Spanish learner page preserves the English source meaning.
4. Record MVP status in `specs/002-expert-spanish-translation/validation-results.md`.

### Incremental Delivery

1. Setup + Foundational: inventory, findings log, glossary/style policy.
2. US1: complete faithful Spanish learner content.
3. US2: technical artifact and link correctness.
4. US3: final editorial consistency.
5. Polish: build, route checks, final report.

### Parallel Team Strategy

1. Complete Setup + Foundational together.
2. Split US1 by lectures, projects, resources, and README surfaces.
3. Split US2 by code materials, templates, advanced resources, and reference resources.
4. Run US3 by corpus area after the main correction work is stable.

## Notes

- Preserve English source meaning over literal word order.
- Do not translate functional paths, commands, identifiers, config keys, URLs, or copy-ready template structure.
- Update `docs/es/GLOSSARY.md` or `docs/es/STYLE-GUIDE.md` whenever a recurring decision changes.
- Do not edit English, Chinese, Korean, or unrelated localized content unless a later task explicitly identifies a source defect and the scope is updated.
