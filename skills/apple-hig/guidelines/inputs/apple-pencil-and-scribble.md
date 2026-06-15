---
title: Apple Pencil & Scribble
source_url: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble
platforms: [ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Apple Pencil & Scribble

> ⚠️ Re-verify on Apple. Some gestures (squeeze, hover, barrel-roll) are Pencil-model-specific.

## Purpose

Apple Pencil makes drawing, handwriting, and marking up feel natural on iPad, and also works as a
precise pointer. **Scribble** turns handwriting into typed text in any standard text field. Feature
availability varies by Pencil model (USB-C, 2nd gen, Pencil Pro) and iPad — detect, don't assume.

## Inputs & gestures

- **Latency & precision:** keep ink latency minimal; render strokes immediately under the tip.
- **Pressure & tilt:** vary width/opacity with force and angle for natural marks.
- **Hover** (supported iPad + Pencil): preview where the tip will land; show tool/cursor affordances.
- **Double-tap** (Pencil 2 / Pro): user-configurable quick action — typically switch tool / eraser.
  Honor the system preference; offer a sensible default and let users change it.
- **Squeeze** (Pencil Pro): summon a contextual palette/tool menu near the tip.
- **Barrel-roll** (Pencil Pro): rotation for shaped/calligraphy brushes.
- **Haptic feedback** (Pencil Pro): confirm actions like squeeze or snap.

## Scribble guidelines

- Works in **any text input field** by default — let people write instead of type; converts
  handwriting to text automatically.
- Support gestures: **scratch to delete**, **circle/draw to select**, **tap to insert**, and
  join/split words with vertical strokes.
- Don't block Scribble in standard fields; if you build a custom canvas/field, add the interaction
  explicitly rather than disabling handwriting.

## API

- **PencilKit:** `PKCanvasView`, `PKToolPicker`, `PKDrawing` for drawing surfaces.
- **Scribble:** standard `UITextField`/`UITextView`/SwiftUI `TextField` get it free; custom views use
  `UIScribbleInteraction` / `UIIndirectScribbleInteraction`.
- **Pencil interactions:** `UIPencilInteraction` (double-tap, squeeze), hover via the pointer/hover
  APIs. Read the user's preferred double-tap action from the system.

## Accessibility

Pencil and Scribble are **additions**, never the only path — keep an on-screen keyboard and
touch/VoiceOver alternatives. Don't gate core tasks behind Pencil-only gestures. See [[accessibility]].

## Do / Don't

- **Do** keep ink instant, honor the user's double-tap/squeeze preference, and allow Scribble everywhere.
- **Don't** require a specific Pencil model, hide tools behind undiscoverable gestures, or disable
  handwriting in standard fields.

See also: [[ipados]], [[text-fields]], [[data-entry]], [[accessibility]], [[drag-and-drop]], [[pencilkit → technologies]]
