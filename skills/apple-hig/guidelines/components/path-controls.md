---
title: Path Controls
source_url: https://developer.apple.com/design/human-interface-guidelines/path-controls
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Path Controls

> ⚠️ Re-verify on Apple.

## Purpose

A path control is a **macOS-only** control that displays the file-system (or virtual) path of a
selected file or folder as a row of clickable **path components** — a breadcrumb. Use it to show
*where* something lives and to let people **navigate** to, change, or reveal that location. See [[macos]].

## Styles (NSPathControl.Style)

- **standard** — the default. Renders the path as light, segmented components separated by small
  arrows/chevrons. Good for read-only or inline display of a location.
- **popUp** — looks and behaves like a pop-up button: shows the full path and, when editable, lets
  the user pick a new location (an Open panel can be configured from `allowedTypes`).
- **automatic** — the system chooses an appropriate style.
- (Legacy `navigationBar` style is deprecated; prefer the above.)

## Guidelines

- Use a path control to **reflect a selection**, not as primary navigation chrome — pair it with a
  list, [[split-views|split view]], or browser that drives the selection.
- Keep paths **short and legible**; the control truncates the middle of long paths automatically.
  Don't put a path control where a [[toolbars|toolbar]] item or plain label would communicate
  location more simply.
- If editable, make it obvious the user can change the location (popUp style signals this best).
- Match the control's enabled/disabled state to whether a path is actually selectable.

## Behavior

- **Click** a component to act on that level; **double-click** can reveal the item in the Finder.
- When **editable** (default), users can **drag and drop** a file/folder onto the control to set its
  value; constrain accepted items with **UTIs** via `allowedTypes` or delegate methods.
- When **selectable** (default), the control's current item can be **dragged out** (URL + filename
  placed on the pasteboard).
- In **popUp** + editable mode, the menu includes a "Choose…" item that opens an `NSOpenPanel`.

## AppKit / SwiftUI

- **AppKit:** `NSPathControl` (cell: `NSPathControlItem`); set `pathStyle`,
  `url`/`pathItems`, `allowedTypes`, `isEditable`; delegate `NSPathControlDelegate`
  (`pathControl(_:shouldDrag:with:)`, `pathControl(_:validateDrop:)`).
- **SwiftUI** has no first-class path control; bridge `NSPathControl` via
  `NSViewRepresentable`, or compose a breadcrumb from buttons/menus.

## Accessibility

- Each path component is a focusable element — provide a meaningful **VoiceOver label** per
  component (not just a glyph). Support **Full Keyboard Access** so the path can be traversed and
  activated without a pointer. Don't rely on the arrow glyphs alone to convey hierarchy. See [[accessibility]].

## Do / Don't

- **Do** use it to show and change a single selected location.
- **Don't** use it as a general menu bar, a multi-level app navigation system, or on platforms other
  than macOS.

See also: [[macos]], [[split-views]], [[menus]], [[toolbars]], [[token-fields]], [[accessibility]]
