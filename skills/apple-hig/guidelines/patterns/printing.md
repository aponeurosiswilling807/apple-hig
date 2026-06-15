---
title: Printing
source_url: https://developer.apple.com/design/human-interface-guidelines/printing
platforms: [ios, ipados, macos]
value_type: universal
last_verified: 2026-06-14
---

# Printing

> ⚠️ Universal across iOS/iPadOS/macOS. Re-verify on Apple.

Let people produce a physical (or PDF) copy of meaningful content through the **standard system
print flow**, so any nearby **AirPrint** printer just works.

## Purpose

Offer printing only where it adds value (documents, photos, tickets, receipts), and route it
through the system UI so people get familiar previews, page setup, and printer selection.

## Guidelines

- **Print only meaningful content.** Don't expose Print where a hard copy makes no sense; do offer
  it where people clearly expect it.
- **Use the system print UI**, not a custom one — it provides the **print preview**, printer
  picker, copies, page range, paper size, duplex, and color options, and finds AirPrint printers
  automatically.
- **Give a clear entry point** — a Print command in the share sheet / `...` menu (iOS) or the
  **File ▸ Print…** menu and **⌘P** (macOS).
- **Show an accurate preview** that matches the output; format for the **page**, not the screen
  (margins, pagination, page breaks).
- **Respect Page Setup** (paper size, orientation) and let people choose range and copies.
- **Report status and errors** plainly — no printer found, out of paper — and let people retry or
  cancel. See [[feedback]].
- Offer **Save as PDF** as a natural extension of the same flow.

## Platform notes

- **iOS / iPadOS** — present `UIPrintInteractionController`; supply a `UIPrintInfo` and either
  printable content, a `UIPrintFormatter`, or a `UIPrintPageRenderer` for custom pagination. The
  system handles preview and printer discovery.
- **macOS** — use the standard print panel via `NSPrintOperation` / SwiftUI; support Page Setup
  (`NSPageLayout`), accessory views for app-specific options, and the **⌘P** shortcut.
- All rely on **AirPrint**; you don't manage drivers.

## API

`UIPrintInteractionController`, `UIPrintInfo`, `UIPrintFormatter`, `UIPrintPageRenderer` (iOS);
`NSPrintOperation`, `NSPrintInfo`, `NSPageLayout` (macOS); SwiftUI `PrintCommands` /
`.print` support.

## Accessibility

Make the Print control discoverable and VoiceOver-labeled; ensure printed output is legible
(adequate size/contrast). See [[accessibility]].

## Do / Don't

- Do use the system preview, support PDF export, and honor Page Setup.
- Don't build a custom print dialog or offer printing where it's pointless.

See also: [[feedback]], [[data-entry]], [[macos]], [[ios]], [[accessibility]]
