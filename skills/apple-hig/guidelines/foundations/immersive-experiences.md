---
title: Immersive Experiences
source_url: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences
platforms: [visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Immersive Experiences

> ⚠️ Re-verify on Apple.

## Purpose

On visionOS, immersive experiences extend content beyond windows and volumes into the space
around the wearer. Choose the right level of immersion for the task, keep people comfortable and
safe, and ground them with a stable frame of reference.

## Shared Space vs Full Space

- **Shared Space (default).** Apps launch here side by side, like multiple windows on a desktop,
  alongside the real surroundings via passthrough. Best for everyday, multitasking apps.
- **Full Space.** A dedicated space where only your app's content appears; other apps are hidden
  to avoid distraction. Use it for focused or deeply immersive moments — and return people to the
  Shared Space when the moment ends.

## Levels of immersion (immersion styles)

When in a Full Space, choose an immersion style (people can adjust passthrough with the **Digital
Crown**):

- **Mixed** — virtual content is placed in the context of the real surroundings; full passthrough.
  The most connected/contextual option.
- **Progressive** — a radial **portal** (~180° view) into immersive content while passthrough
  remains around the edges; people rotate the **Digital Crown** to grow or shrink the portal.
  Supports landscape and (visionOS 2+) portrait aspect ratios.
- **Full** — immersive content completely replaces the surroundings, transporting the person to a
  new place; passthrough is hidden.

## Guidelines

- **Make immersion intentional and reversible.** Let people enter and exit easily; respect Digital
  Crown adjustments by reacting to immersion changes rather than fighting them.
- **Avoid sudden, jarring transitions.** Ease between immersion levels; abrupt changes are
  disorienting and can cause discomfort.
- **Discourage movement in full immersion.** With passthrough hidden, people can lose track of
  real surroundings. Bring content to the person instead of asking them to walk to it.
- **Ground with a frame of reference.** Keep a stable horizon/element so vestibular cues match;
  avoid moving large fields of view that conflict with what the body feels.
- **Prioritize safety and comfort** over spectacle — especially in full immersion. Keep hazards
  in mind and keep people oriented.

## visionOS / API

- SwiftUI: `ImmersiveSpace` scene; `ImmersionStyle` values `.mixed`, `.progressive`, `.full`;
  `.immersionStyle(selection:in:)`; `openImmersiveSpace` / `dismissImmersiveSpace` actions.
- Use RealityKit for 3D content; ARKit (with authorization) for scene understanding.
- React to the Digital Crown immersion amount to adjust passthrough/portal dynamically.

## Accessibility

- Provide a clear, always-available way to exit immersion.
- Honor **Reduce Motion** — minimize sweeping motion and rapid immersion changes. See [[motion]].
- Interactive targets ≥ **60×60 pt** (eye-tracking imprecision); keep important content within a
  comfortable field of view. See [[spatial-layout]], [[accessibility]].
- Don't rely on color alone; provide VoiceOver labels and support hands/eyes input.

## Do / Don't

- ✅ Match the immersion level to the task and let people adjust it with the Digital Crown.
- ✅ Ease transitions and keep a stable frame of reference.
- ❌ Snap people into full immersion abruptly or trap them with no easy exit.
- ❌ Require physical movement while passthrough is hidden.

See also: [[spatial-layout]], [[visionos]], [[motion]], [[materials]], [[accessibility]]
