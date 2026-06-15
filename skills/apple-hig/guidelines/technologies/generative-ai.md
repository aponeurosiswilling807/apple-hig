---
title: Generative AI
source_url: https://developer.apple.com/design/human-interface-guidelines/generative-ai
platforms: [ios, ipados, macos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Generative AI

> ⚠️ Universal. Re-verify on Apple. (Backed by **Apple Intelligence** / the **Foundation Models**
> framework; capabilities and policies evolve fast — confirm on Apple.)

## Purpose

Generative AI features create or transform content — text, images, summaries, suggestions — from a
model. Design them to be **helpful, honest, and controllable**: set clear expectations, keep the
person in charge, and handle the model's limits and errors gracefully.

## Guidelines

- **Set expectations up front.** Tell people what the feature can and can't do, that output is
  generated and may be imperfect, and when results may vary. Don't overpromise.
- **Label AI-generated output** clearly so people can distinguish it from human/authoritative content.
- **Keep people in control.** Make output **editable**, offer **undo/redo and regenerate**, and never
  apply generated changes irreversibly without confirmation. The person decides what to keep.
- **Cite and bound.** Where the feature draws on sources, **attribute** them; constrain the model to
  the relevant task and data; don't present speculation as fact.
- **Guard against harm and bias.** Avoid stereotyped or biased output; filter unsafe content; design
  prompts and safety with the model's guidance. Provide a way to report problems.
- **Protect privacy.** Prefer **on-device** processing; be explicit about what leaves the device; ask
  in context and request only what's needed. See [[privacy]].
- **Fail gracefully.** When the model can't help, errs, or is unavailable, say so plainly and offer a
  manual path — don't dead-end or fabricate. See [[feedback]], [[loading]].
- **Communicate progress.** Generation can take time; show clear in-progress states and let people
  cancel. See [[loading]].

## API

- **Foundation Models** framework — on-device LLM access (`LanguageModelSession`, guided generation /
  structured output, tool calling); **Image Playground** / **Genmoji** APIs; **Writing Tools** for
  system text transformation; **App Intents** to expose actions to Apple Intelligence / Siri.

## Accessibility

AI affordances need VoiceOver labels; announce when content is generated and when it changes. Don't
convey AI-vs-human state by color alone; keep editable output reachable. See [[accessibility]].

## Do / Don't

- ✅ Label output, allow edit/undo/regenerate, cite sources, process on-device, fail gracefully.
- ❌ Don't hide that content is AI, apply changes irreversibly, overpromise, or leak data off-device silently.

See also: [[ios]], [[macos]], [[visionos]], [[privacy]], [[feedback]], [[loading]], [[accessibility]]
