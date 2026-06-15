---
title: Mac Catalyst
source_url: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation (macOS 27 "Golden Gate"); confirm current window/sidebar Liquid Glass behavior on Apple.

# Mac Catalyst

## Purpose

Mac Catalyst brings an iPad app to the Mac as a native Mac app, sharing one codebase. The goal isn't a scaled iPad window — it's an app that **feels like a Mac app**: menu bar, pointer, windows, keyboard shortcuts.

## Scaling options

- **Scale interface to match iPad** — quicker port; the UI is scaled down from iPad metrics.
- **Optimize interface for Mac** (recommended) — native Mac point sizes, denser layouts, more idiomatic controls. Choose this for a real Mac feel.

## Guidelines

- **Adopt the menu bar.** Move actions and keyboard shortcuts into the Mac menu bar; people expect to discover commands there. Don't hide everything behind touch-style overflow buttons. See [[menus]].
- **Design for the pointer, not the finger.** Not every Mac has a trackpad; some have no gesture/scroll support — keep gesture-driven actions reachable with a mouse. Provide pointer hover/effects on controls.
- **Use real window chrome.** Adopt a title bar/toolbar, resizable windows, sidebars, and standard window controls; support multiple windows where it makes sense. See [[toolbars]], [[split-views]].
- **Add full keyboard support** — shortcuts (`⌘`-based), tab/focus order, Escape, arrow-key navigation.
- **Don't ship touch-only UI.** Replace large finger targets, swipe-only actions, and iOS-only controls (e.g. action sheets) with Mac equivalents (menus, context menus, popovers, panels).
- **Respect Mac conventions** — right-click context menus, drag and drop, Services, standard Edit/File/Window/Help menus, Preferences/Settings.

## API

- **UIKit + Mac Catalyst** (`UIApplication`, `UIWindowScene`); enable Catalyst and choose "Optimize for Mac" in Xcode.
- `UIMenuBuilder` / `UIKeyCommand` for the menu bar and shortcuts; `UIPointerInteraction` for pointer effects; `UIToolbar` / `NSToolbar` bridging; `UIContextMenuInteraction` for context menus.
- For deeper Mac-only behavior, use **AppKit** APIs via plug-in bundles where needed.

## Accessibility

- Full VoiceOver and keyboard navigation; honor system Reduce Motion/Transparency. Note **Dynamic Type does not apply on macOS** — respect the Mac text size conventions instead. See [[accessibility]], [[macos]].

## Do / Don't

- ✅ Populate the menu bar, support pointer + keyboard, use native windows.
- ✅ Choose "Optimize for Mac" for idiomatic metrics.
- ❌ Don't present an unscaled, touch-only iPad UI in a window.
- ❌ Don't rely on swipe/long-press as the only way to reach an action.

See also: [[macos]], [[ipados]], [[menus]], [[toolbars]], [[split-views]], [[liquid-glass]]
