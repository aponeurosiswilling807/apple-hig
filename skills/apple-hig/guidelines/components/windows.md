---
title: Windows
source_url: https://developer.apple.com/design/human-interface-guidelines/windows
platforms: [macos, ipados, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Window behavior is platform-specific and version-dependent. WWDC 2026 (June 2026) refined Liquid Glass; macOS 27 ("Golden Gate") standardized window borders/shapes. Re-verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Windows

## Purpose

A **window** is the primary container for an app's content and controls. People move, resize, and
arrange windows to organize their workspace. Relevant where multiple resizable surfaces exist —
**macOS**, **iPadOS** (multitasking/Stage Manager), and **visionOS**. iOS/watchOS/tvOS apps are
generally full-screen and don't expose user-managed windows. See [[macos]], [[ipados]], [[visionos]].

## Anatomy (macOS)

- **Title bar / toolbar:** window controls (close/minimize/zoom), title, and an optional integrated
  [[toolbars|toolbar]]. On 26+ window chrome uses Liquid Glass; **macOS 27 ("Golden Gate")**
  standardized window **borders and corner shapes**. See [[liquid-glass]], [[toolbars]].
- **Content area:** the app's primary content; may include a [[split-views|sidebar]] and detail.
- **Resize / arrangement:** edges and corners resize; system tiling and zoom arrange windows.

## Guidelines

- Set a sensible **minimum size** so essential controls never clip; allow generous resizing for
  content-heavy apps. Provide a reasonable **default size** on first launch.
- **Restore state:** remember window size, position, and content (state restoration) across launches
  and across multiple windows; reopen the user's prior arrangement.
- **Multiple windows:** support opening several windows of the same scene where it aids the workflow
  (e.g. comparing documents). Give each window a meaningful title. See [[macos]].
- Keep one **clear primary task** per window; use [[panels|panels]] or [[sheets|sheets]] for
  auxiliary or modal work rather than spawning extra full windows.
- Don't reposition or resize the user's windows unexpectedly; respect their arrangement.

## Platform notes

- **visionOS:** people **independently resize, reposition, and scale** each window using system
  controls. The system enforces a **standard minimum and maximum size** for all windows regardless
  of content. Content uses **dynamic scale** so it stays legible as the window moves nearer/farther.
  Use `defaultSize` to suggest an initial size; the system restores window placement (incl. locked
  or surface-snapped windows in recent visionOS). Avoid pinning UI to fixed pixel sizes — design for
  resizing and scaling. See [[visionos]], [[spatial-layout]].
- **iPadOS:** windows participate in **Split View / Slide Over / Stage Manager**; adapt fluidly
  between compact and regular widths as the window resizes. See [[multitasking]], [[layout]].
- **macOS:** integrate the toolbar into the title bar; support full-screen and tiling; use the
  standard window controls. **Golden Gate** standardized borders/shapes and refined sidebars
  (expand and regain active-window color). See [[split-views]].

## SwiftUI / AppKit

- SwiftUI: `WindowGroup`, `Window`, `Settings`, `DocumentGroup`; `.defaultSize(_:)`,
  `.windowResizability(_:)`, `.windowStyle(_:)`, `.windowToolbarStyle(_:)`,
  `.windowLevel(_:)`; `@Environment(\.openWindow)` to open additional windows. State restoration
  is automatic for scenes; customize via the scene/restoration APIs.
- AppKit: `NSWindow` (`minSize`, `setFrameAutosaveName(_:)` for position persistence,
  `NSWindowController`, `styleMask`).

## Accessibility

Each window must be reachable and labeled for VoiceOver; support full keyboard navigation and
window-management shortcuts; ensure minimum size keeps content legible at large Dynamic Type / zoom;
respect Reduce Transparency on window chrome. See [[accessibility]].

## Do / Don't

- **Do** set min/default sizes, restore state, and title every window.
- **Do** design visionOS/iPadOS windows for fluid resize and (visionOS) dynamic scale.
- **Don't** move or resize the user's windows unexpectedly.
- **Don't** spawn extra full windows for auxiliary tasks — use panels, popovers, or sheets.

See also: [[macos]], [[ipados]], [[visionos]], [[panels]], [[sheets]], [[toolbars]], [[split-views]], [[multitasking]], [[liquid-glass]].
