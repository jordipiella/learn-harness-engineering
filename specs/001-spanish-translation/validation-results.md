# Validation Results: Spanish Course Translation

**Date**: 2026-05-20

## Build

- `npm run docs:build`: PASS

## Local Link Review

- Checked 100 Spanish Markdown and README files.
- Result: PASS, no local broken links found.

## Route Spot Checks

Checked against local VitePress dev server at `http://127.0.0.1:5174/learn-harness-engineering/`.

| Route | Status |
|-------|--------|
| `/es/` | 200 OK |
| `/es/lectures/lecture-01-why-capable-agents-still-fail/` | 200 OK |
| `/es/projects/` | 200 OK |
| `/es/resources/` | 200 OK |
| `/es/skills/` | 200 OK |

## Known Follow-Up

- The Spanish localization is functional and broadly translated, but several deep reference/template pages are machine-assisted drafts and should receive a human copy-edit pass before publication-quality release.
