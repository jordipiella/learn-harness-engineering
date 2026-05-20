# SOP: Encode Unseen Knowledge Into The Repo

Usar this SOP when important contexto still lives in Google Docs, chat threads,
tickets, or people's heads.

## Objetivo

Hacer agent-invisible knowledge discoverable in the codebase so a fresh sesión
can act on it without relying on prior conversation.

## Trigger Signals

- The agent keeps asking how the system works.
- Humans say "we decided this in Slack" or "follow what X said last week."
- Reviews referencia product or security reglas that are not written in-repo.
- New sesións repeat discovery work that should already be settled.

## Execution SOP

1. Lista the invisible knowledge sources: docs, chats, tacit equipo reglas, verbal decisions.
2. For each source, ask: is this arquitectura, product behavior, security policy,
   reliability expectation, plan contexto, or referencia material?
3. Encode it into the matching repo artifact:
   - arquitectura -> `ARCHITECTURE.md`
   - product behavior -> `docs/product-specs/`
   - diseño rationale -> `docs/design-docs/`
   - execution estado -> `docs/exec-plans/`
   - repeated external references -> `docs/references/`
   - calidad or reliability expectations -> `docs/QUALITY_SCORE.md` or `docs/RELIABILITY.md`
4. Replace vago statements with operationally useful wording.
5. Remove or deprecate stale copies so the repo keeps one discoverable truth.

## Good Encoding Reglas

- Escribir for discoverability, not for literary completeness.
- Prefer short documents with claro filenames.
- Link related artifacts together.
- Store durable reglas, not meeting transcripts.
- Update the repo in the mismo sesión that the decision is made.

## Definition Of Terminado

- A fresh agent can discover the relevant rule without asking a human.
- The mismo fact is not scattered across multiple contradictory archivos.
- The new artifact lives close to the código or flujo de trabajo it governs.
