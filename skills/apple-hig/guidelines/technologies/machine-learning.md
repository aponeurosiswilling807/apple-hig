---
title: Machine Learning
source_url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Machine Learning

## Purpose

Machine learning powers experiences that adapt to people — suggestions, recognition, generation, personalization. Apple's frameworks favor **on-device** inference for speed, offline use, and privacy. Design the *experience*, not just the model: set expectations, handle uncertainty, and keep people in control.

## Guidelines

- **Set honest expectations.** Tell people what the feature can and can't do; don't imply perfection. Frame outputs as suggestions, not facts, when confidence is limited.
- **Handle uncertainty visibly.** Models are probabilistic. Show confidence appropriately, offer alternatives, and design graceful fallbacks for low-confidence or no-result cases instead of guessing confidently.
- **Let people correct and undo.** Make it easy to fix, reject, or refine a result and to opt out. Use corrections to improve the experience where appropriate.
- **Keep a human in control** for consequential actions; don't auto-apply irreversible changes from a model's guess.
- **Be private.** Prefer on-device processing; minimize data; explain what's collected and why; give controls. See [[privacy]].
- **Guard against bias and harm.** Consider who the model serves and fails; test across diverse inputs; avoid stereotyping or excluding people. See [[inclusion]].
- **Explain attribution and limits** for generated content; label AI-generated output where appropriate.
- **Communicate working state** (analyzing, on-device processing) so latency doesn't read as a freeze. See [[loading]].

## API

- **Core ML** (`MLModel`) — run trained models on device; **Create ML** to train.
- Task frameworks: **Vision**, **Natural Language**, **Sound Analysis**, **Speech**, **Translation**.
- **Foundation Models** framework — on-device large language model for generation/summarization where available (verify on Apple).
- Optimize with Core ML Tools (quantization/compression) for on-device performance.

## Accessibility

- Don't convey model output by color or imagery alone — pair with text/VoiceOver. Ensure adaptive/predicted UI remains navigable and predictable. See [[accessibility]].

## Do / Don't

- ✅ Present results as suggestions; show confidence; allow correction.
- ✅ Process on-device and minimize data.
- ❌ Don't auto-apply irreversible actions from an uncertain prediction.
- ❌ Don't hide that content is AI-generated when it matters.

See also: [[privacy]], [[inclusion]], [[loading]], [[feedback]], [[accessibility]]
