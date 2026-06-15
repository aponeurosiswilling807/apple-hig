---
title: Panels
source_url: https://developer.apple.com/design/human-interface-guidelines/panels
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ macOS-only auxiliary windows. Re-verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Panels

## Purpose

A **panel** is a specialized macOS window that **floats above** other open windows to provide
supplementary controls, options, or information related to the active window or current selection.
Use a panel for inspectors, tool palettes, and other helper UI that supports the main document
without becoming the focus of work. See [[windows]], [[macos]].

## Types

- **Standard panel:** a floating utility window with a thinner title bar; stays above document
  windows. Holds inspectors, formatting controls, or tool palettes.
- **HUD panel (heads-up display):** a translucent dark panel that floats over content (often
  full-screen media/editing). Minimizes visual weight so it doesn't compete with the content
  beneath it. On 26+ panel chrome uses Liquid Glass materials. See [[liquid-glass]], [[materials]].
- **Inspector:** a panel (or sidebar-style region) that shows and edits attributes of the current
  selection; contents update as the selection changes.

## Modality

- Panels are typically **non-modal** — people interact with the panel and the main window
  interchangeably. Don't trap focus.
- A panel may be **app-modal** only when it genuinely requires a decision before continuing; prefer
  a [[sheets|sheet]] or [[alerts|alert]] for true modal interruptions.

## Guidelines

- Keep panels **small and focused**; show only controls relevant to the active window or selection.
- Let the user **move** panels freely and **remember** position/visibility across launches (state
  restoration). Provide a clear show/hide toggle (often a toolbar item or menu command).
- Panels float above the windows of the **active app** only; they don't obscure other apps' windows.
- For a transient, anchored helper on iPad/Mac, prefer a **[[popovers|popover]]** instead — panels
  are persistent, free-floating macOS windows. See [[popovers]].
- Don't overuse floating panels; too many competing windows fragment attention.

## AppKit / SwiftUI

- AppKit: `NSPanel` (set `isFloatingPanel`, `.utilityWindow` / `.hudWindow` style masks);
  inspectors via the standard inspector patterns.
- SwiftUI: `.inspector(isPresented:)` presents trailing inspector UI; `Window`/`WindowGroup` with
  `.windowStyle` and `.windowLevel(.floating)` for floating auxiliary windows; `.utilityWindow`
  scene style where available. Verify exact API on Apple for the current SDK generation.

## Accessibility

Ensure VoiceOver can reach and announce panel contents; logical focus order between panel and main
window; respect Reduce Transparency for HUD panels (provide a legible opaque fallback); support
full keyboard navigation and Escape to dismiss where appropriate. See [[accessibility]].

## Do / Don't

- **Do** keep panels lightweight, movable, and tied to the active window's context.
- **Do** persist panel state and offer a clear toggle.
- **Don't** trap focus or block the main window unless a decision is truly required.
- **Don't** use a HUD panel where its translucency would hurt legibility without a Reduce
  Transparency fallback.

See also: [[windows]], [[popovers]], [[sheets]], [[toolbars]], [[macos]], [[liquid-glass]], [[materials]].
