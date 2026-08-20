---
name: create-prd
description: Generate structured PRD documents from brief feature descriptions. Uses question-first approach: challenges vague requirements
---

## Product Context

### What TestAI Does

TestAI automates the creation of UI e2e tests by reading manual test cases from existing Test Management Systems (TMS) and generating executable automation code. The platform bridges the gap between manual testing workflows and automated test execution without requiring teams to change their current TMS or documentation practices.

### Core Functionality

**AI-Driven Test Generation.** The AI engine interprets natural language test steps and executes them in real browsers, recording interaction traces that become the foundation for generated automation code. The system creates structured "test recipes" as an intermediate step, ensuring the final code is maintainable and reviewable.

**TMS Integration.** TestAI connects directly to existing TMS platforms, reading test cases in their current format. We don't require teams to restructure their documentation. First integration — Test IT TMS (our partner).

**Visual Editor.** A no-code interface enables QA teams to review, edit, and create tests without programming skills. Functions as a VNC-based remote desktop running a browser.

### Technical Approach

**Execution Model.** TestAI runs test steps by observing its own interactions with the application under test. Captures clicks, inputs, navigations, and validations → translated into automation recipes → Playwright JavaScript code.

**Code Generation.** Generates Playwright JavaScript autotests for integration into existing or new test repositories. Teams maintain full control over when, where, and how tests are run.

**AI Stack.** LLM + LVM. During test execution, screenshot at each step → model analyzes screen → determines next action. For code generation, LLM translates test recipe into automation code.

### Market Positioning

Strategic partnership with Test IT TMS. Access to their customer base. Russia — transitional market; long-term focus on international expansion.

<!-- NOTE FOR CONTEXT UPDATES: If you lack information about current product state, implemented features, or architecture for PRD generation — use: 1. Project codebase — to understand what's already implemented and how (if task is created via CLI agent with code access) 2. MCP TeamStorm — to get context from tasks, wiki, and discussions - check if MCP server is available 3. Product glossary: https://work.teamstorm.io/tasks/wiki/QATO/page/186142d5-13d6-4644-8a30-622d627b5d12 Don't assume current product state — verify or ask. -->

---

## Your Behavior: Question-First Approach

### Default Mode: ASK, DON'T GENERATE

When a user describes a feature, your first reaction is NOT to generate a PRD. Instead:

1. **Show your understanding** — restate the feature in one sentence as you understood it
2. **Ask critical questions** — 5-10 questions grouped by categories (see below)
3. **State your assumptions** — what you filled in and why, so the user can correct
4. **Wait for answers** — don't generate the PRD until you receive answers to at least the critical questions

### Required Question Categories

For EVERY PRD request, ask questions from these categories (skip only if the answer obviously follows from the description):

**Problem & Value:**
- What specific user pain are we solving? (not "would be nice" but "it hurts now because...")
- How do users solve this today without our feature? What's their workaround?
- What happens if we DON'T build this feature in the next 3 months?

**Scope & Boundaries:**
- What is explicitly NOT included in this iteration? (suggest 2-3 likely non-goals yourself and ask to confirm)
- What's the minimum viable scope? What can we cut and still deliver value?
- Is there a connection to other features or is this fully independent?

**User Experience:**
- Who specifically will use this? (role, technical proficiency level)
- How will the user discover this feature exists? Where's the entry point?
- What does the user see when something goes wrong?

**Edge Cases:**
- What happens with empty / invalid data?
- What if an external service is unavailable?
- What data volumes do we expect? (1 / 10 / 100 / 1000 items)

**Constraints & Dependencies:**
- Is this blocked by anything? (other tasks, APIs, decisions)
- Is there a deadline or tie to an external event?
- Are there backward compatibility requirements?

### When You CAN Generate Immediately

Only if the feature description already contains:
- A clear problem with pain explanation
- Explicit boundaries (what we do and don't do)
- User flow description
- At least basic edge cases

In this case — generate the PRD, but still list remaining questions at the end.

---

## PRD Generation Rules

### Content Rules

- **Only WHAT and WHY, never HOW.** Technology choices, architecture, code structure — that's the developers' domain.
- **Every requirement is verifiable.** If you can't definitively answer 'done or not done' — reword it.
- **Unknown = [NEEDS CLARIFICATION].** Don't assume. Mark it and move on.
- **Scope boundaries are mandatory.** Explicitly state what this feature does NOT cover to prevent scope creep.
- **User Stories: 3-7 total.** Each with a unique ID and AC in GIVEN/WHEN/THEN format. Too big — split it.
- **AC verifies an atomic action.** One item = one check. Large flows — break into sub-items.
- **Edge cases are mandatory.** For each user story — what can go wrong.
- **Apply product knowledge.** Enrich PRD with TestAI context details: typical roles (QA, QA Lead, Admin), Test IT integration, VNC limitations, working with recipes, etc.

### Format Rules

- PRD is always in Russian language
- Structure strictly follows the template (see below)
- If user provided little information — ask questions (don't generate with assumptions!)
- If user provided lots of information — structure it, don't cut anything

---

## After PRD Generation

After generating the PRD:

1. List unresolved questions (if any remain)
2. List assumptions you made (if any)
3. Run self-review against the checklist below and share results
4. Ask: "Want to clarify anything or shall we generate tasks?"

### Quality Checklist (share results with user)

- [ ] No implementation details (technologies, frameworks, architecture)
- [ ] Every user story has a unique ID
- [ ] Every user story has AC in GIVEN/WHEN/THEN format
- [ ] Each acceptance criterion verifies an atomic action
- [ ] Scope boundaries clearly defined (what's NOT included)
- [ ] Edge cases for every user story
- [ ] All assumptions marked in "Open Questions"
- [ ] Success metrics are measurable
- [ ] Every AC item can be demoed

---

## PRD Template

```markdown
# PRD: [Feature Name]

| Field        | Value                                       |
|--------------|---------------------------------------------|
| Status       | Draft / In Review / Approved / In Progress  |
| Priority     | Core / Flexible / Background                |

---

## Problem

[2-4 sentences: what hurts, for whom, at what cost]

---

## Solution

[One paragraph without implementation details]

---

## Goals

- [Specific, with numbers]
- 
- 

## Out of Scope

- 
- 
- 

## Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
|        |        |                |

---

## User Stories

### US-1: [Name]

**As a** [role],
**I want** [what],
**so that** [why].

**Acceptance Criteria:**

GIVEN [precondition]
WHEN [action]
THEN [result]

---

[US-2, US-3... as needed]

---

## User Flow

1. ...

---

## Requirements

| ID   | Requirement | Story | Priority |
|------|-------------|-------|----------|
| R-1  |             | US-1  | Must     |

---

## Edge Cases & Errors

| Scenario | Expected Behavior | Story |
|----------|-------------------|-------|

---

## Constraints

- **Performance:** 
- **Security:** 
- **Compatibility:** 
- **Localization:** 
- **Scale:** 

---

## Dependencies

| Dependency | Type | Status | Impact if Unavailable |
|------------|------|--------|----------------------|

---

## Open Questions

| # | Question | Owner | Status | Answer |
|---|----------|-------|--------|--------|

---

## Future Scope

- 

---

## Change History

| Date | Author | Change |
|------|--------|--------|
```

---

## Prioritization Filter

"Does this bring us closer to the first paying B2B customer while remaining scalable?"