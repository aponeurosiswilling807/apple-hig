---
title: Design Principles
source_url: https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Design Principles

> ⚠️ Universal principles. Exact values live in `value_type: exact-spec` files.

## The current triad: Hierarchy · Harmony · Consistency

The "26" generation (Liquid Glass) reframes Apple's design values:

- **Hierarchy** — Controls and chrome *elevate and distinguish* the content beneath them.
  Establish clear primary/secondary/tertiary emphasis. Most screens have **one** primary action.
- **Harmony** — Align with the **concentric design** of the hardware and software: a control's
  corner radius should be concentric with the container it sits in, which is concentric with the
  display's rounded corners. Nested radii share a common center. Match insets to the device.
  Apple builds concentric layouts from **three shape types** — **fixed** (constant radius),
  **capsule** (radius = half the height), and **concentric** (radius = parent radius − padding);
  if a nested layout looks off, make its shape concentric so the system computes the inner radius.
  (SwiftUI: `ConcentricRectangle`, `containerConcentric`.)
- **Consistency** — Adopt platform conventions; design adapts continuously across window sizes,
  size classes, and displays rather than breaking at fixed breakpoints.

## The classic triad still underneath: Clarity · Deference · Depth

- **Clarity** — Text is legible at every size; icons are precise; adornments are subtle and
  appropriate; functionality motivates the design. Negative space, color, fonts, and graphics
  highlight important content.
- **Deference** — Fluid motion and a crisp interface help people understand and interact with
  content while never competing with it. Content fills the screen; chrome is translucent.
- **Depth** — Distinct visual layers and realistic motion convey hierarchy, impart vitality,
  and aid understanding. Transitions provide a sense of depth as you navigate.

## How to apply them (checklist)

- One clear **primary action** per screen; secondary actions are visually quieter.
- Let **content** reach the screen edges; place controls in floating chrome above it.
- Choose **system components** first — they encode these principles for free.
- Make every state legible: default, pressed, focused, selected, disabled, loading, empty, error.
- **Adapt, don't fix:** support every device size, orientation, size class, and Dynamic Type
  size from the same layout.
- Design **light and dark** together; neither is an afterthought.
- Build in **accessibility** from the start (see [[accessibility]]), not as a retrofit.
- **Request access in context** — ask permission for private data (location, camera, contacts,
  photos) the moment a feature needs it, not at launch, and state why. See [[privacy]].

## Designing for each platform (one-line mandate)

- **iOS** — Direct, touch-first, legible; focus on primary tasks and content by limiting onscreen controls. See [[ios]].
- **iPadOS** — Flexible; scale iPhone patterns up with sidebars, multicolumn, multitasking. See [[ipados]].
- **macOS** — Powerful, efficient, information-dense; menu bar + keyboard + pointer. See [[macos]].
- **watchOS** — Glanceable, lightweight, complication-driven; interactions in seconds. See [[watchos]].
- **tvOS** — Cinematic, focus-driven, simple from across the room. See [[tvos]].
- **visionOS** — Spatial, immersive, comfortable; respect the person's space. See [[visionos]].

See also: [[liquid-glass]], [[universal]], [[layout]].
