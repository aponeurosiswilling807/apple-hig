---
title: Remotes
source_url: https://developer.apple.com/design/human-interface-guidelines/remotes
platforms: [tvos]
value_type: platform-specific
last_verified: 2026-06-14
---
> ⚠️ Re-verify on Apple.

# Remotes

## Purpose
On Apple TV, the **Siri Remote** is the primary input, letting people interact with onscreen content from across the room. There is **no cursor** — people move a **focus** highlight between interface elements and select the focused item. Design must feel effortless and "lean-back."

## Focus-based navigation
- People navigate by moving focus across elements (posters, buttons, rows); the **focused item is highlighted** and visually emphasized.
- Make the **focused state unmistakable** — scale, lift, parallax, and shadow help people see where they are from a distance.
- Lay out content in a **predictable grid/row structure** so directional moves (up/down/left/right) go where people expect; ensure a clear, logical focus path with no traps.

## Siri Remote input
- **Swipe** on the touch-enabled clickpad to move focus; **click** to select the focused item; use **Menu/Back** to go up a level; **Play/Pause**, volume, and Siri buttons for media and voice.
- The current Siri Remote uses a **clickpad with directional buttons plus a touch surface**; support both swipe-to-move and click-the-edges navigation.

## Guidelines
- **Minimize text entry** — onscreen keyboards are slow with a remote. Prefer selection, suggestions, voice dictation, *Sign in with Apple*, or continuity with a nearby iPhone over typing.
- Keep interactions **simple and forgiving**; avoid requiring precise or rapid input.
- Provide responsive feedback for every focus move and selection.

## Older remotes & game controllers
- Support **older/alternate remotes** (e.g., previous Apple TV Remote, the Apple TV Remote app, and infrared remotes) and their button-based navigation.
- Support **game controllers** (MFi / standard gamepads) for games and, where appropriate, general navigation — but don't *require* a game controller for core app functionality.

## SwiftUI / UIKit / API
- SwiftUI: the focus system — `@FocusState`, `.focusable()`, `.focused(_:)`, `.focusSection()`, `.defaultFocus(_:_:)`; buttons/cards gain focus styling automatically.
- UIKit: the **Focus Engine** — `UIFocusGuide`, `preferredFocusEnvironments`, `canBecomeFocused`, `didUpdateFocus(in:with:)`.
- Controllers: **Game Controller** framework (`GCController`) for remotes treated as controllers and gamepads.

## Accessibility
- Ensure every element is **reachable by focus**, with a logical order and a clearly visible focus indicator.
- Support **VoiceOver** on tvOS; label focusable controls.
- Don't depend on swipe-only gestures — directional clicks must also reach everything.
- Avoid time-sensitive interactions that some people can't complete with a remote.

## Do / Don't
- Do make the focused state highly visible and the focus path predictable.
- Do minimize typing; favor selection, voice, and continuity.
- Don't require a game controller or precise/rapid input for core tasks.
- Don't leave any control unreachable by focus.

See also: [[accessibility]], [[gestures]], [[keyboards]], [[tvos]], [[layout]]
