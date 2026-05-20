# Quickstart: Spanish Course Translation

## 1. Confirm the active feature

```bash
git status --short --branch
cat .specify/feature.json
```

Expected feature directory:

```text
specs/001-spanish-translation
```

## 2. Inventory English source pages

```bash
find docs/en -type f | sort
find projects skills -maxdepth 2 -name 'README.md' | sort
```

Use these files as the translation source. Preserve code blocks, commands, filenames, config keys, and identifiers.

## 3. Create Spanish content structure

Create `docs/es/` by mirroring the relevant `docs/en/` hierarchy. Translate learner-facing prose into neutral Spanish and keep the course sequence intact.

Also create Spanish README-style entry documents where existing localized README variants are present:

```text
README-ES.md
projects/project-01/README-ES.md
projects/project-02/README-ES.md
projects/project-03/README-ES.md
projects/project-04/README-ES.md
projects/project-05/README-ES.md
projects/project-06/README-ES.md
skills/README-ES.md
```

## 4. Add Spanish navigation

Update only `docs/.vitepress/config.mts` for VitePress navigation and sidebars. Add Spanish item arrays and a locale entry matching the contract in `contracts/spanish-localization-contract.md`.

## 5. Validate

```bash
npm run docs:build
```

Then spot-check that these routes exist in the generated or previewed site:

```text
/es/
/es/lectures/lecture-01-why-capable-agents-still-fail/
/es/projects/
/es/resources/
/es/skills/
```

## 6. Review completion

Before marking implementation complete, verify:

- Spanish pages follow the same learning order as English.
- Top-level Spanish navigation links resolve.
- Technical artifacts remain copy-ready.
- Existing non-Spanish locales remain intact.
