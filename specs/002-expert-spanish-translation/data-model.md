# Data Model: Revisión experta de traducción española

## Página fuente inglesa

**Purpose**: Authoritative course content used to verify Spanish meaning and coverage.

**Fields**:

- `sourcePath`: repository-relative path to the English source file
- `contentArea`: welcome, lecture, project, resource, template, skill, root README, project README, or skills README
- `sequencePosition`: course order where applicable
- `sourceSections`: headings and major instructional sections
- `technicalArtifacts`: commands, code blocks, paths, identifiers, config keys, URLs, filenames, package names, and workflow names

**Validation Rules**:

- Each source page in review scope maps to one Spanish page or a documented non-page support artifact.
- Source order and learning intent must be preserved in the Spanish equivalent.
- Technical artifacts must be identified before editing surrounding prose.

## Página española revisada

**Purpose**: Localized page that should preserve English meaning while reading naturally in Spanish.

**Fields**:

- `spanishPath`: repository-relative path under `docs/es/` or a Spanish README path
- `sourcePath`: matching English source path when one exists
- `title`: final Spanish title
- `headings`: final Spanish heading structure
- `bodyProse`: translated learner-facing prose
- `links`: internal, cross-locale, and external links
- `reviewStatus`: draft, audited, revised, validated, or deferred

**Validation Rules**:

- Spanish title and headings preserve source intent and sequence.
- No user-facing instructional section from the source is omitted unless documented as intentionally retained or out of scope.
- Spanish prose is natural, neutral, professional, and technically accurate.
- Internal links prefer Spanish equivalents when those pages exist.

**State Transitions**:

- `draft` -> `audited` after English/Spanish comparison.
- `audited` -> `revised` after correcting missing, literal, or inaccurate translation.
- `revised` -> `validated` after terminology, artifact, link, and build checks pass.
- Any state -> `deferred` only with a documented reason and non-critical impact.

## Hallazgo de traducción

**Purpose**: Track a concrete quality issue found during expert review.

**Fields**:

- `findingId`: stable identifier for reporting
- `spanishPath`: affected Spanish file
- `sourcePath`: English source file
- `findingType`: missing-content, mistranslation, literal-phrasing, terminology-drift, unsafe-artifact-change, broken-link, or style-guide-gap
- `severity`: critical, major, minor
- `sourceEvidence`: short source reference or section name
- `resolution`: corrected, intentionally-retained, deferred, or not-applicable

**Validation Rules**:

- Critical findings cannot remain unresolved at completion.
- Deferred findings require an explicit reason and must not block learner completion.
- Resolved terminology findings should update the glossary or style guide when broadly applicable.

## Decisión terminológica

**Purpose**: Document how recurring course terms are translated or intentionally retained.

**Fields**:

- `englishTerm`: source term
- `spanishDecision`: approved Spanish rendering or retained term
- `usageContext`: where the decision applies
- `rationale`: why this rendering preserves course meaning
- `documentedIn`: glossary, style guide, validation report, or local note

**Validation Rules**:

- Recurring core terms must not alternate between unrelated Spanish renderings.
- Retained English terms must be proper nouns, functional artifacts, or justified course terminology.
- Changes affecting multiple pages must be reflected in `docs/es/GLOSSARY.md` or `docs/es/STYLE-GUIDE.md`.

## Artefacto técnico protegido

**Purpose**: Functional repository or course content that must remain usable after translation.

**Fields**:

- `artifactType`: command, path, filename, identifier, config-key, code-block, URL, package-name, branch-name, or workflow-name
- `sourceText`: exact source artifact
- `spanishText`: exact Spanish-page artifact
- `translationPolicy`: preserve, translate surrounding prose only, or adapt label only

**Validation Rules**:

- Preserve artifacts by default.
- Any adaptation must be proven valid in the project context.
- Copy-ready templates must remain usable without structural changes.

## Informe de validación

**Purpose**: Maintainer-facing evidence that the translation review met scope and quality requirements.

**Fields**:

- `reviewedAreas`: content areas included in the pass
- `coverageSummary`: counts or status for reviewed page pairs
- `qualityChecks`: terminology, artifact, link, navigation, build, and representative bilingual review checks
- `results`: pass/fail status for each check
- `knownLimitations`: intentionally deferred or retained items

**Validation Rules**:

- Must identify the final reviewed scope.
- Must include build and link validation results.
- Must record any remaining non-critical limitations plainly.
