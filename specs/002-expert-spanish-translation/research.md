# Research: Revisión experta de traducción española

## Decision: Use English as the authoritative source for every reviewed Spanish page

**Rationale**: The feature requests expert English-to-Spanish correction with maximum respect for the original content. English is the source of truth for meaning, instructional order, examples, warnings, and learner outcomes.

**Alternatives considered**: Reviewing Spanish in isolation was rejected because it would miss omissions and meaning drift. Comparing against another localization was rejected because non-English localizations may contain adaptation choices that are not authoritative for Spanish.

## Decision: Perform an in-place quality pass over the existing Spanish corpus

**Rationale**: `docs/es/` already exists and is wired into the project. The problem is missing or poor translation quality, not absence of a Spanish locale. Correcting in place preserves routes, existing navigation, and prior structural work.

**Alternatives considered**: Regenerating all Spanish files from scratch was rejected because it risks losing manually polished pages and functional fixes. Creating a second Spanish locale was rejected because it would split learner traffic and maintenance.

## Decision: Review by content area, with English/Spanish pairs as the unit of work

**Rationale**: Lectures, projects, resources, templates, skills, and README surfaces have different risks. Pairing each Spanish file with its English source makes omissions and mistranslations visible while allowing targeted validation for copy-ready technical content.

**Alternatives considered**: A single global search-and-replace pass was rejected because translation quality issues are contextual. Reviewing only representative samples was rejected because the success criteria require full coverage for Spanish pages with English counterparts.

## Decision: Preserve functional artifacts by default

**Rationale**: Commands, paths, identifiers, config keys, URLs, code blocks, package names, branch names, and workflow names must remain valid. The Spanish review should translate explanatory prose around them, not break copy/paste behavior.

**Alternatives considered**: Translating code comments and visible strings broadly was rejected because it can alter examples and template behavior. Translating slugs or filenames was rejected because those are route and repository contracts.

## Decision: Treat glossary and style guide as living translation controls

**Rationale**: Existing `docs/es/GLOSSARY.md` and `docs/es/STYLE-GUIDE.md` are useful starting points, but an expert pass may reveal terms that need sharper decisions. Updating these controls keeps future Spanish work consistent.

**Alternatives considered**: Free-form page-by-page wording was rejected because it creates drift for recurring concepts. Freezing the current glossary was rejected because some existing choices may be part of the quality problem.

## Decision: Validate with editorial evidence plus site build/link checks

**Rationale**: Translation quality needs both human-readable evidence and technical validation. A validation report should document coverage, terminology checks, unresolved intentional retentions, and the result of docs build/link checks.

**Alternatives considered**: Relying only on `npm run docs:build` was rejected because a site can compile with bad translation. Relying only on manual review was rejected because broken links or VitePress issues can still ship.

## Decision: Preserve EN/ZH parity rather than expand EN/ZH scope

**Rationale**: This feature does not add new English course content. It corrects an additional Spanish localization while existing English and Chinese surfaces remain untouched unless a source defect is discovered and explicitly handled later.

**Alternatives considered**: Editing Chinese alongside Spanish was rejected because it is outside the user request and can introduce unrelated translation risk. Editing English source content during Spanish review was rejected unless a clear source error blocks faithful translation.
