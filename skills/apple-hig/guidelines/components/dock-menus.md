---
title: Dock Menus
source_url: https://developer.apple.com/design/human-interface-guidelines/dock-menus
platforms: [macos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Dock Menus

> ⚠️ Re-verify on Apple.

## Purpose

On a Mac, people **secondary-click (right-click) an app's icon in the Dock** to reveal a Dock menu
of **app-level quick actions** and **recent items**. It presents both **system-provided** items
(Options, Show in Finder, Quit, Open at Login, plus the app's open windows) and your **custom**
items. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

## Anatomy

- **Custom items** (your app-defined commands) appear at the **top**.
- **System items** below: app windows, **Options** submenu (Keep in Dock, Open at Login, Show in
  Finder), Hide, Quit.
- Items may include SF Symbols and submenus; keep it shallow. See [[sf-symbols]].

## Guidelines

- Offer a **small set of high-value, app-level actions** that make sense even when the app isn't
  frontmost (e.g. New Document, Compose, recent files, current playback controls).
- Surface **recent items / documents** so people can jump straight back in.
- Use clear, **verb-first** labels; keep the custom list short so it doesn't crowd system items.
  See [[writing]].
- Don't duplicate the entire **menu bar** here; the Dock menu is for quick, global shortcuts. See
  [[the-menu-bar]], [[menus]].
- Keep items meaningful when the app is **not running** vs running (avoid actions that require a
  document context when none exists).

## API

- Implement `applicationDockMenu(_:)` on the `NSApplicationDelegate` to return an `NSMenu`.
- The system merges your menu with standard items automatically; you supply only the custom portion.

## Accessibility

VoiceOver reads each item's title and state; ensure custom items have meaningful labels and that
shortcuts/state (checkmarks) are conveyed. See [[accessibility]].

## Do / Don't

- ✅ Provide a few global quick actions + recents; ✅ verb-first labels; ✅ keep it short.
- ❌ Don't mirror the whole app menu; ❌ don't list actions that fail with no open document; ❌ don't
  rely on the Dock menu as the only path to a feature.

See also: [[the-menu-bar]], [[menus]], [[context-menus]], [[macos]], [[sf-symbols]]
