---
title: Game Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/game-controls
platforms: [ios, ipados, macos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Game Controls

> ⚠️ Re-verify on Apple.

## Purpose

Precise, intuitive controls keep players immersed. Support the input methods that fit each
platform — hardware game controllers, touch, keyboard/mouse, and Siri Remote — and make switching
between them seamless.

## Input types

- **Game controllers:** standard profiles (extended gamepad, also Sony DualShock/DualSense and Xbox
  controllers). Use the **GameController** framework so you handle current and future controllers and
  any user remapping without hardcoding.
- **Touch (iOS/iPadOS/visionOS):** on-screen controls; keep them out of the way and within reach.
- **Keyboard & mouse (Mac, iPad):** support common conventions; allow rebinding.
- **Siri Remote (tvOS):** map to a sensible scheme; many tvOS games also expect a paired controller.

## Guidelines

- **Use the standard button layout** and the GameController framework's element mappings so players'
  muscle memory transfers and remapped controls are respected.
- **Show the correct glyphs:** display the symbols for the **connected** controller (don't show Xbox
  prompts for a DualSense). The framework provides the right SF Symbols / glyphs per controller.
- **Detect connect/disconnect** gracefully — pause when a controller disconnects mid-game, and adopt
  a newly connected controller without forcing a restart. Support **multiple controllers** for
  local multiplayer.
- **Let players remap controls** and adjust sensitivity; never assume one fixed scheme works for all.
- **Provide on-screen and hardware paths where it makes sense** (e.g. touch fallback when no
  controller is attached), and a clear **pause / menu** affordance reachable from every input.
- Give responsive **haptic and visual feedback** for input; respect system settings. See [[feedback]].

## API

- **GameController** framework: `GCController` (controllers + `controllerDidConnect`/`Disconnect`
  notifications), `GCExtendedGamepad`, `GCKeyboard`, `GCMouse`, `GCVirtualController` (on-screen),
  and controller **glyph/symbol** lookups for prompts. Use the **Game Mode** affordances on macOS.

## Accessibility

Support **remapping**, alternative schemes, and reduced-precision options; respect system input
accommodations and don't gate progress behind a single hard-to-perform input. Provide captions/visual
cues alongside audio. See [[accessibility]].

## Do / Don't

- **Do** use GameController mappings + correct glyphs, support hot-swap and multiple controllers, and allow remapping.
- **Don't** hardcode one controller's buttons, show wrong prompts, ignore disconnects, or skip a pause path.

See also: [[ios]], [[ipados]], [[macos]], [[tvos]], [[visionos]], [[focus-and-selection]], [[feedback]], [[accessibility]], [[sf-symbols]]
