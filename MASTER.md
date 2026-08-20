# Build a Test AI prototype

You are an agent in Claude Code. Follow this to build a clickable prototype.

## Before you start

- Check that a code clone `../qato` sits next to this repo (only needed to refresh templates).
- Update the ready-made screens and styles: `git pull`.

## Input

A prototype is built from a scenario (the scenario is written from the PRD).

- Scenario exists: use it as the basis.
- No scenario: create one with the `create-scenario` skill.

## Build

1. `bash prototypes/_kit/new.sh QATO-XXXX-slug` creates the prototype folder.
2. Take the screen you need from `prototypes/_kit/screens/`, link `prototypes/_kit/prod.css`, paste the markup.
3. Continue with the `build-prototype` skill: filling in data, states, and the rest.

## Rules

- Never ships to production. This is a check of a solution, not a pixel-final design.
- Do not draw from scratch: look and styles come only from `prod.css` and the screens in `_kit/screens/`.
- Build new interactivity from analogues: existing screens, Storybook, `DESIGN.md`. Do not invent it.
- Desktop only, from 1280px. Data is written straight into the markup: realistic, in Russian.
- No em dash in any text: use a colon, comma, or parentheses.

## Show it

- Local: run `python3 -m http.server` in the prototype folder.
- Demo: `vercel --prod <folder>`. Alternatives: Cloudflare Pages, Netlify.

## Where things are

- `prototypes/_kit/`: `prod.css`, `screens/`, `_template/`, `new.sh`, runtime.
- `.claude/skills/`: `create-scenario`, `build-prototype`, `create-prd`, `PLATFORM.md`.
- `DESIGN.md`: design system. `wiki/product/`: product reference.

## Refreshing templates (owner only)

`prototypes/_kit/tools/refresh-templates.sh` re-captures the screens from Storybook and commits them. It needs the `../qato` clone and Storybook. Users do not run it: `git pull` is enough.
