---
title: Gestures
source_url: https://developer.apple.com/design/human-interface-guidelines/gestures
platforms: [ios, ipados, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Gestures

## Purpose
A gesture is a physical motion a person uses to directly affect an object onscreen or in space. People make gestures on a touchscreen, in the air (visionOS), or on a touch-capable input surface (trackpad, mouse, Siri Remote, game controller). Direct manipulation makes interactions feel immediate and familiar.

## Standard gestures
- **Tap** — activate a control, select an item.
- **Touch and hold (long press)** — reveal contextual menus, previews, edit modes.
- **Swipe** — scroll, reveal row actions, navigate pages, dismiss.
- **Drag (pan)** — move an object or content directly.
- **Pinch** — zoom in/out, scale.
- **Rotate** — two-finger rotation to spin an object.
- **Double tap** — secondary action (e.g., zoom, like).
- **Edge swipe** — swipe in from the leading screen edge for back navigation; from edges for system surfaces.

In visionOS, people target with their eyes and **tap** (indirect pinch), **drag**, and **zoom/rotate** with their hands; they can also reach out and touch elements directly (direct gestures).

## Guidelines
- Use **standard gestures consistently** so behavior matches user expectations across apps; don't repurpose a familiar gesture for an unfamiliar action.
- Reserve **multifinger and complex gestures** for optional accelerators, not the only path to a feature.
- **Never override or block system gestures** — edge-swipe back, Control Center / Notification Center pulls, App Switcher, Home indicator swipe, screen-edge reveal. If a full-screen experience (game, media) needs an edge, use the system's deferred-edge mechanism rather than capturing it outright.
- Make targets **comfortable to hit**: keep interactive targets at least **44x44 pt** (60x60 pt in visionOS).
- Give **immediate visual feedback** as a gesture progresses, and let people cancel mid-gesture (e.g., drag back before releasing).

## Platform notes
- **iOS / iPadOS** — touch-first; edge-swipe back is the system back gesture. iPad also supports trackpad/mouse pointer and keyboard alongside touch (see [[pointing-devices]], [[keyboards]]).
- **visionOS** — eyes + hands; ensure targets are large and well-spaced for reliable eye targeting; prefer indirect pinch gestures over reach-out interactions for comfort.
- **macOS / tvOS** rely on pointer and remote rather than touch gestures; covered in [[pointing-devices]] and [[remotes]].

## SwiftUI / UIKit / API
- SwiftUI: `TapGesture`, `LongPressGesture`, `DragGesture`, `MagnifyGesture`, `RotateGesture`, `SpatialTapGesture`; compose with `.simultaneously(with:)`, `.sequenced(before:)`, `.exclusively(before:)`; attach with `.gesture(_:)` / `.highPriorityGesture(_:)`.
- UIKit: `UITapGestureRecognizer`, `UILongPressGestureRecognizer`, `UIPanGestureRecognizer`, `UIPinchGestureRecognizer`, `UIRotationGestureRecognizer`, `UISwipeGestureRecognizer`, `UIScreenEdgePanGestureRecognizer`; use `gestureRecognizer(_:shouldRecognizeSimultaneouslyWith:)` to coordinate.
- Defer system edge gestures with `preferredScreenEdgesDeferringSystemGestures`.

## Accessibility
- **Always provide a non-gesture alternative** — a visible button or menu — for any action triggered by a gesture; never make a gesture the only way to do something.
- Support **AssistiveTouch**, **Switch Control**, and **VoiceOver** (which remaps standard gestures); don't rely on multifinger or path-based gestures alone.
- Honor **Reduce Motion** for gesture-driven animation.
- Label icon-only controls for VoiceOver.

## Do / Don't
- Do use familiar standard gestures for their conventional meaning.
- Do give continuous feedback and allow cancellation.
- Don't hijack system gestures or invent obscure multifinger shortcuts as the only access path.
- Don't require precise timing or pressure that some people can't perform.

See also: [[accessibility]], [[pointing-devices]], [[remotes]], [[keyboards]], [[visionos]], [[ios]], [[ipados]], [[layout]]
