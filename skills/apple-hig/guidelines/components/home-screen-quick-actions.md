---
title: Home Screen Quick Actions
source_url: https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions
platforms: [ios, ipados]
value_type: platform-specific
last_verified: 2026-06-14
---

# Home Screen Quick Actions

> ⚠️ Re-verify on Apple.

## Purpose

Home Screen quick actions let people perform **app-specific actions directly from the Home Screen**
by **long-pressing the app icon**. Each item **deep-links** into a specific task or screen, so people
skip the launch-and-navigate steps. Verify on Apple as the HIG migrates from the 26 to the
27/Golden Gate generation.

## Types

- **Static** quick actions — defined in `Info.plist`, available immediately after install (before
  first launch). Use for your most important, always-relevant tasks.
- **Dynamic** quick actions — created at runtime from app state (recent items, current context);
  available only after the app has launched at least once.

## Guidelines

- Offer a **small number** of the **most useful** actions — practically **up to ~4** are shown
  (count is system/version-dependent; the OS may also reserve rows for widgets/sharing). Don't try
  to expose everything.
- Give each action a concise, **verb-first title**, an optional subtitle, and an **SF Symbol** icon.
  See [[sf-symbols]], [[writing]].
- Make every action **deep-link** to the exact destination and **complete quickly**; don't drop the
  user at a generic launch screen.
- Order by **importance/frequency**; keep titles short enough to fit.
- Don't duplicate the same action multiple ways or include rarely used commands.

## API

- Static: `UIApplicationShortcutItems` array in `Info.plist`
  (`UIApplicationShortcutItemType`, `…Title`, `…Subtitle`, `…IconSymbolName`).
- Dynamic: set `UIApplication.shared.shortcutItems = [UIApplicationShortcutItem(…)]`.
- Handle launches via `windowScene(_:performActionFor:completionHandler:)` /
  `application(_:performActionFor:)`; route to the deep-linked screen.

## Accessibility

VoiceOver reads each action's title and subtitle; ensure icons are paired with clear labels and
that destinations are reachable and operable after the jump. See [[accessibility]].

## Do / Don't

- ✅ A few high-value, deep-linked actions; ✅ SF Symbol + verb title; ✅ land on the exact task.
- ❌ Don't expose everything; ❌ don't deep-link to a dead/generic screen; ❌ don't rely on quick
  actions as the only path to a feature.

See also: [[menus]], [[widgets]], [[sf-symbols]], [[ios]], [[ipados]]
