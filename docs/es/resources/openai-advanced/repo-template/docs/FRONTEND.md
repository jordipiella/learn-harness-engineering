# FRONTEND.md

This archivo defines stable frontend expectations so agents do not invent UI
patterns unpredictably.

## UI Principles

- Optimize for claridad before novelty.
- Keep interaction flows discoverable and restartable.
- Prefer a small number of reusable components over one-off variants.
- Accessibility checks are part of normal verificación, not polish work.

## Guardrails

- Document the diseño system or component biblioteca in `docs/references/`.
- Record key user-facing states: empty, loading, éxito, error, retry.
- Keep copy, keyboard behavior, and visual hierarchy consistent across flows.
- When a UI bug is fixed, añadir or update the matching validation paso.

## Verification Expectations

- Capture evidence for critical usuario journeys.
- Record browser or runtime validation pasos in the relevant plan.
- If visual regressions are common, standardize screenshot or DOM checks.
