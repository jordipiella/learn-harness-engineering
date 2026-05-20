# Pass Gate Policy

A feature may only move from `passes: false` to `passes: true` when:

- the expected flujo de trabajo has been exercised
- the evidence of éxito is recorded
- no blocking error is present in the tested ruta
- the implementation does not leave the app in a broken or ambiguous estado
