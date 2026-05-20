<!-- SYNC IMPACT REPORT
Version change: none → 1.0.0 (initial ratification — first fill of blank template)
Added principles:
  - I. Educational-First (NON-NEGOTIABLE)
  - II. Progressive Disclosure
  - III. Bilingual Parity (NON-NEGOTIABLE)
  - IV. Harness Authenticity
  - V. Project Chain Integrity
  - VI. Type Safety + Test Gate
  - VII. Copy-Ready Resources
Added sections:
  - Core Principles (7 principles)
  - Technical Constraints
  - Development Workflow
  - Governance
Templates updated:
  - .specify/templates/plan-template.md ✅ (Constitution Check gates populated)
  - .specify/templates/spec-template.md ✅ (no changes needed — structure is constitution-agnostic)
  - .specify/templates/tasks-template.md ✅ (no changes needed — structure is constitution-agnostic)
Follow-up TODOs: none — all placeholders resolved
-->

# Learn Harness Engineering Constitution

## Core Principles

### I. Educational-First (NON-NEGOTIABLE)

Every code or content change MUST serve the learner's progressive journey. Code MUST be
pedagogically clear before being idiomatic or elegant. When tension exists between
"best-practice code" and "code that teaches the concept clearly," teaching wins.
Complexity MUST be introduced only at the project stage where it becomes the lesson.

### II. Progressive Disclosure

The course is a deliberate narrative: P01 → P06. Each project MUST be comprehensible
using only the knowledge introduced in previous projects. Harness concepts MUST NOT be
introduced ahead of their designated project stage. The starter of P(N+1) MUST equal
the solution of P(N) — breaking this chain is a blocking defect.

### III. Bilingual Parity (NON-NEGOTIABLE)

All course content MUST exist in both English and Chinese. No English content addition
is complete without a corresponding Chinese counterpart in the same PR/commit.
Translations MUST be conceptually equivalent — not literal word-for-word. When meaning
cannot transfer directly, the Chinese version MUST adapt to convey the same
pedagogical intent.

### IV. Harness Authenticity

Harness artifacts (AGENTS.md, CLAUDE.md, feature_list.json, init.sh,
claude-progress.md) MUST be genuinely usable in real projects — not fabricated demos.
The course MUST practice what it teaches: the repo's own harness is a living example.
If a harness artifact would not survive contact with a real AI coding agent session, it
MUST be revised before publication.

### V. Project Chain Integrity

`projects/shared/` is the authoritative base. Structural changes to app code (IPC
channels, service interfaces, shared types) MUST be propagated forward through all
affected projects — from the changed project's solution through P06's solution. No
project may depend on code structure from a later project in the chain. Breaking the
starter/solution chain is a blocking defect equivalent to a failing test.

### VI. Type Safety + Test Gate

All project apps carry two tsconfigs: `tsconfig.json` for the renderer and
`tsconfig.node.json` for main/preload. No project code change is complete until both
`npm run check` and `npm run test` pass with zero errors. These gates are
NON-NEGOTIABLE — skipping them for "minor" changes is not permitted.

### VII. Copy-Ready Resources

Templates in `docs/resources/` MUST be immediately usable in a real production project
without more than 5 minutes of adaptation. If a template requires domain knowledge
beyond what is taught in the course to adapt, it MUST be simplified or annotated.
Theoretical or aspirational templates that cannot be directly applied are not permitted.

## Technical Constraints

- **Storage**: Local JSON/text files only in course project apps. No databases, no
  ORMs, no cloud storage SDKs.
- **IPC channels**: Defined exclusively as constants in `src/shared/types.ts`
  (`IPC_CHANNELS`). This is the single source of truth — no inline string literals for
  IPC channel names anywhere in the codebase.
- **VitePress config**: Navigation and sidebar changes go only in
  `docs/.vitepress/config.mts`. Both EN and ZH locales MUST be updated in the same
  commit.
- **Electron architecture**: Main process in `src/main/`, preload in `src/preload/`,
  renderer in `src/renderer/`, services in `src/services/`. Cross-boundary interfaces
  live in `src/shared/types.ts`.

## Development Workflow

- Feature work MUST follow the speckit pipeline: `speckit-specify` →
  `speckit-clarify` (if needed) → `speckit-plan` → `speckit-tasks` →
  `speckit-implement`.
- Each project task MUST verify the project's own harness artifacts are consistent
  with the changes before the task is marked done.
- Content changes (lectures, project descriptions, resources) MUST update both EN and
  ZH in the same PR. Partial bilingual updates are not mergeable.
- Whenever `src/shared/types.ts` or any service interface changes, Principle V
  (Project Chain Integrity) MUST be explicitly checked and the forward-propagation
  scope confirmed before work begins.

## Governance

This constitution is the highest authority for all development decisions in this
repository. In case of conflict, it supersedes CLAUDE.md, AGENTS.md, and any other
guidance files.

All PRs MUST demonstrate compliance with relevant principles. Reviewers MUST call out
violations — not as style preferences but as constitutional requirements.

Amendments require:
1. A documented justification explaining why the principle no longer serves the project.
2. A version bump following semantic versioning:
   - MAJOR: Principle removed or fundamentally redefined.
   - MINOR: New principle or section added, or material expansion of existing guidance.
   - PATCH: Clarifications, wording improvements, non-semantic refinements.
3. An updated `Last Amended` date in the version line below.

**Version**: 1.0.0 | **Ratified**: 2026-05-20 | **Last Amended**: 2026-05-20
