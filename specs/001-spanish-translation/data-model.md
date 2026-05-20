# Data Model: Spanish Course Translation

## Localización Española

**Purpose**: Represents the complete Spanish course experience.

**Fields**:

- `localeCode`: `es`
- `languageLabel`: visible label for Spanish in the language selector
- `rootPath`: `/es/`
- `navItems`: localized top-level navigation entries
- `sidebarGroups`: localized sidebar groups for lectures, projects, resources, and skills
- `translatedPages`: collection of Spanish translated content pages

**Validation Rules**:

- `rootPath` must resolve to an existing Spanish welcome page.
- Every `navItems` link must resolve to an existing page or intentional external target.
- Sidebar ordering must mirror the established course sequence.

## Página Fuente

**Purpose**: English page or learner-facing README used as authoritative translation input.

**Fields**:

- `sourcePath`: repository-relative path to the English source file
- `contentArea`: welcome, lecture, project, resource, skill, root README, project README, or skills README
- `sequencePosition`: ordering within the course where applicable
- `technicalArtifacts`: code blocks, commands, identifiers, and file paths that must remain functional

**Validation Rules**:

- Each source page in scope must map to exactly one translated page or an explicitly documented fallback.
- Technical artifacts must be identified before translation review.

## Página Traducida

**Purpose**: Spanish page that preserves the source page's instructional value.

**Fields**:

- `translatedPath`: repository-relative path under `docs/es/` or Spanish README path
- `sourcePath`: matching English source path
- `title`: Spanish title
- `body`: translated learner-facing prose
- `links`: internal, cross-locale, and external links
- `status`: not-started, translated, reviewed, or validated

**Validation Rules**:

- `translatedPath` must follow the source hierarchy when under `docs/es/`.
- `title` and headings must preserve the source sequence and learning intent.
- Internal links should prefer Spanish equivalents when available.
- Code, commands, config keys, filenames, and identifiers must remain functional.

**State Transitions**:

- `not-started` -> `translated` when a Spanish draft exists.
- `translated` -> `reviewed` when terminology and structure are checked against the source.
- `reviewed` -> `validated` when navigation and build validation pass.

## Elemento de Navegación Localizado

**Purpose**: Visible Spanish route entry used by learners to move through the course.

**Fields**:

- `text`: Spanish navigation label
- `link`: target route
- `activeMatch`: route matching pattern where applicable
- `section`: lectures, projects, resources, or skills

**Validation Rules**:

- Link targets must exist.
- Labels must be short, natural Spanish.
- Top-level sections must match the existing localized course areas.

## Artefacto Técnico

**Purpose**: Functional content embedded in educational prose that should not be translated in a way that breaks use.

**Fields**:

- `artifactType`: code, command, filename, path, config key, placeholder, identifier, or URL
- `sourceText`: exact source artifact
- `translationPolicy`: preserve, translate surrounding prose only, or adapt prose label

**Validation Rules**:

- Preserve artifacts by default.
- Any adapted artifact must remain valid in the project context.
- Copy-ready templates must remain usable after translation.
