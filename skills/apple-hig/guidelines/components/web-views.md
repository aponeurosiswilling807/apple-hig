---
title: Web Views
source_url: https://developer.apple.com/design/human-interface-guidelines/web-views
platforms: [ios, ipados, macos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Web Views

> ⚠️ Re-verify on Apple.

## Purpose

A web view loads and displays rich web content — embedded HTML, documents, or full websites —
**directly within your app**. Use it to surface web content that complements your app; it is **not a
substitute for the system browser** (Safari) and shouldn't try to be one. For opening a normal URL,
prefer Safari or `SFSafariViewController` (in-app browser with shared cookies/privacy) over a raw
web view.

## When to use

- **Web view (`WKWebView`)** — render your own or trusted embedded HTML/web content as part of the UI.
- **`SFSafariViewController`** — show an external web page with browser chrome, Reader, AutoFill, and
  privacy protections, without leaving the app.
- **Open in Safari** — for general browsing or when the user expects the real browser.

## Guidelines

- **Don't imitate Safari.** A web view is a content surface, not a browser; avoid duplicating a full
  address bar and browser UI unless you're genuinely building a browser.
- **Provide navigation controls only when needed.** Forward/back navigation is **disabled by
  default**; enable it when people will visit multiple pages, and reflect loading state. See
  [[loading]], [[feedback]].
- **Respect safe areas and insets** so web content isn't clipped by the notch, home indicator, or
  window chrome; let content scroll within the layout. See [[layout]].
- **Show progress** while pages load and handle failures gracefully (offline, errors) with a clear
  message and retry. See [[loading]].
- **Match appearance:** pass the system **light/dark** appearance and Dynamic Type preferences to web
  content where you control it; keep contrast legible. See [[color]], [[typography]].
- **Stay within App Store policy:** don't use a web view to load an alternative app experience,
  marketplace, or remote code that circumvents review or in-app purchase rules. See [[privacy]].
- **Handle links and privacy carefully:** validate URLs, scope what the web view can load, and don't
  leak user data to embedded pages. See [[privacy]].

## Platform notes

- **macOS:** integrate with window/toolbar chrome; support standard navigation and find. See [[macos]].
- **visionOS:** web content renders within your app's window; mind depth and legibility. See [[visionos]].
- Not available as a HIG component on **watchOS** or **tvOS**; surface web content differently there.

## API (WebKit)

`import WebKit`; `WKWebView` (load via `load(_:)` / `loadHTMLString(_:baseURL:)`);
`WKNavigationDelegate` for navigation/loading callbacks; `allowsBackForwardNavigationGestures`;
`SFSafariViewController` (SafariServices) for an in-app browser. SwiftUI: wrap `WKWebView` in
`UIViewRepresentable`/`NSViewRepresentable`.

## Accessibility

Web content participates in VoiceOver via its own DOM semantics — ensure the loaded HTML is
accessible (labels, headings, contrast). Don't trap focus; provide a clear way out. See
[[accessibility]].

## Do / Don't

- **Do** prefer `SFSafariViewController` for external pages; show progress; respect safe areas and policy.
- **Don't** fake a browser, load review-circumventing remote code, or ignore load failures.

See also: [[loading]], [[layout]], [[privacy]], [[accessibility]], [[macos]], [[visionos]]
