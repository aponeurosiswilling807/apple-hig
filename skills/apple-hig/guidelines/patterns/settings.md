---
title: Settings
source_url: https://developer.apple.com/design/human-interface-guidelines/settings
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Settings

> ⚠️ Universal. Re-verify on Apple.

Let people configure your app without overwhelming them. Most people never open Settings — so
**good defaults matter most**.

## Guidelines

- **Choose smart defaults** so the app works well out of the box; reserve Settings for genuine
  preferences, not decisions you can make for the user.
- **Keep frequently changed options in context** (in the relevant screen), not buried in Settings.
  Settings is for infrequent, app-wide configuration.
- **Group and label** clearly using inset-grouped lists with section headers/footers that explain
  options. See [[lists-and-tables]], [[toggles]].
- Toggles for **instant** binary settings; pickers/steppers for values; text fields for entries.
  See [[toggles]], [[pickers]], [[steppers]], [[text-fields]].
- Surface **privacy** and account controls clearly and make choices reversible. See [[privacy]].
- Provide **search** within large settings; show current values inline.

## Platform placement

- **iOS/iPadOS:** an in-app settings screen (and/or a bundle in the system Settings app for
  rarely changed system-level options). Prefer **in-app** for anything users adjust during use.
- **macOS:** a **Settings…** window (⌘,) with toolbar-tabbed panes; reachable from the app menu.
  See [[macos]], [[menus]].
- **watchOS/tvOS:** keep settings minimal and glanceable; offload complex config to the iPhone/web.

## Accessibility

Labels on every control; Dynamic Type; logical grouping for VoiceOver; don't signal state by
color alone. See [[accessibility]].

See also: [[toggles]], [[lists-and-tables]], [[privacy]], [[macos]], [[data-entry]].
