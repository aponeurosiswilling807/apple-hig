---
title: Pointing Devices
source_url: https://developer.apple.com/design/human-interface-guidelines/pointing-devices
platforms: [ipados, macos]
value_type: platform-specific
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Pointing Devices

## Purpose
People use a pointing device — **trackpad or mouse** — to navigate the interface and initiate actions with precision. On macOS the pointer is fundamental; on iPadOS an **adaptive pointer** (introduced in iPadOS 13.4) bridges the touch UI and pointer precision, morphing to fit the control it's over.

## The adaptive pointer (iPadOS)
- The pointer is a **soft circle** by default and **adapts** as it moves: it snaps to and reshapes over controls (buttons, segmented controls, list rows), becomes an **I-beam** over text, and can take custom shapes in your content.
- **Pointer effects**: *highlight* (content morphs around the pointer — typical for buttons/bars), *lift* (element scales/elevates), and *hover* (element responds without the pointer disappearing).
- Use effects to communicate what's interactive; don't over-apply them to non-interactive elements.

## Hover & states
- Provide clear **hover states** to preview interactivity before clicking (highlight, tooltip, reveal controls), but never hide essential functionality behind hover-only.
- On macOS, the pointer changes shape contextually (arrow, I-beam, resize, open-hand) to signal what an area does.

## Right-click / secondary actions
- Support **secondary click (right-click / two-finger trackpad click / Control-click)** to open **context menus** with relevant, frequent actions.
- Keep context menus short and contextual; mirror their actions elsewhere so they aren't the only path.

## Precision & density
- A pointer enables **precise, dense layouts** — but keep primary touch targets comfortable (**>= 44x44 pt**) since iPad also supports touch. Don't shrink everything just because a pointer is attached.
- Support **trackpad gestures** (two-finger scroll, pinch-to-zoom, swipe) and **keyboard modifiers** (e.g., Shift/Command-click for selection) alongside the pointer.

## Platform notes
- **macOS** — pointer-first; expect hover, precise hit areas, and context menus everywhere.
- **iPadOS** — pointer is optional and adaptive; design must work for both touch and pointer. Pair with [[keyboards]] for full hardware-accessory experiences.
- iOS/visionOS/tvOS use touch, eyes-and-hands, or a remote instead (see [[gestures]], [[remotes]]).

## SwiftUI / UIKit / AppKit
- SwiftUI: `.hoverEffect(_:)` (`.automatic`, `.highlight`, `.lift`), `.onHover { ... }`, `.contextMenu { ... }`, `.pointerStyle(_:)`.
- UIKit: `UIPointerInteraction`, `UIPointerStyle` / `UIPointerEffect` (`.highlight`, `.lift`, `.hover`), `UIHoverGestureRecognizer`, `UIContextMenuInteraction`.
- AppKit: `NSTrackingArea` for hover, `NSCursor`, `menu(for:)` for context menus.

## Accessibility
- Don't make any action **pointer-only**; ensure keyboard and (on iPad) touch equivalents.
- Honor **Pointer accessibility** settings (pointer size/color, contrast) and **Reduce Motion** for pointer animations.
- Hover-revealed controls must also be reachable via keyboard focus and VoiceOver.

## Do / Don't
- Do use pointer effects to signal interactivity and provide context menus for shortcuts.
- Do keep touch targets >= 44 pt even when a pointer is attached.
- Don't hide essential features behind hover or right-click only.
- Don't apply lift/highlight effects to non-interactive elements.

See also: [[accessibility]], [[gestures]], [[keyboards]], [[ipados]], [[macos]], [[layout]], [[buttons]]
