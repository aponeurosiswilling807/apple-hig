---
title: Modality
source_url: https://developer.apple.com/design/human-interface-guidelines/modality
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Modality

> ⚠️ Universal. Re-verify on Apple.

## What modality is

A **modal** view takes over the flow to focus the user on a **single self-contained task or
critical decision**, blocking other interaction until they finish or dismiss. Use it
**deliberately and sparingly** — it interrupts.

## When to use a modal

- ✅ A focused subtask (compose, edit, configure) that benefits from isolation.
- ✅ A **critical** decision or information that must be acknowledged. See [[alerts]].
- ✅ Capturing a small set of related inputs before continuing.
- ❌ Don't make routine navigation modal; don't stack modals; don't use a modal where inline UI
  works.

## Pick the right presentation

| Need | Use |
|---|---|
| A task/form over current context | **[[sheets|Sheet]]** (detents on iOS) |
| Choices for one action the user started | **[[action-sheets|Action sheet]]** / confirmationDialog |
| Critical decision / must-acknowledge | **[[alerts|Alert]]** |
| Contextual options anchored to a control (iPad/Mac; on iPhone, present as a sheet instead) | **[[popovers|Popover]]** |
| Fully immersive task | **Full-screen cover** |

## Rules

- Always provide an obvious **way out**: Cancel (discard) and Done/Save (commit). If dismissing
  could lose data, **confirm**. See [[sheets]].
- Keep modal scope tight; don't bury deep navigation inside a modal.
- Return the user to exactly where they were on dismiss.

See also: [[sheets]], [[alerts]], [[action-sheets]], [[popovers]], [[navigation]].
