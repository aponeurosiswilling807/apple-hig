---
title: Motion
source_url: https://developer.apple.com/design/human-interface-guidelines/motion
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Motion

> ⚠️ Universal. Re-verify on Apple.

## Purpose, not decoration

- Use motion to **convey hierarchy and spatial relationships**, communicate status, give
  feedback, direct attention, and celebrate key moments.
- Keep motion **brief, smooth, and consistent** with system transitions (push, modal present,
  zoom). Liquid Glass adds fluid morph transitions for chrome — see [[liquid-glass]].
- Don't animate for its own sake; gratuitous motion distracts and can cause discomfort.

## Reduce Motion (must honor)

- When **Reduce Motion** is on, replace large translational/parallax/zoom animation with a
  **crossfade** or no animation.
- **Never convey essential information through motion alone** — pair with text/state changes so
  a reduced-motion or VoiceOver user gets the same information.
- In SwiftUI, gate animations on `accessibilityReduceMotion`; in UIKit, check
  `UIAccessibility.isReduceMotionEnabled`.

## Complement with haptics & audio

- Pair meaningful moments with **haptics** (iOS/watchOS) and/or audio where appropriate — but
  never make haptics/audio the *only* channel.

## Platform notes

- **visionOS:** avoid moving the **camera/viewpoint** or large field-of-view motion — it causes
  motion sickness. Keep a **stationary frame of reference**, animate objects not the world, and
  prefer gentle, damped motion. See [[visionos]].
- **tvOS:** focus uses a subtle **parallax**/tilt on the focused item; keep it consistent. See [[tvos]].
- **watchOS:** short, glanceable transitions; respect the small screen and battery.

## Performance (animate cheaply)

> Editorial: Apple's HIG covers motion *intent*; the property-level performance practice below is
> cross-platform engineering (notably for the web), not verbatim from the HIG page.

Janky motion comes from animating the wrong properties, animating *forever*, and forcing layout work
every frame.

- **Animate only compositor properties: `transform` and `opacity`.** They run on the GPU with no
  layout or paint. Animating layout/paint properties every frame — `width`, `height`, `top`/`left`,
  `margin`, `box-shadow`, `clip`/`clip-path` geometry, `background-position` — forces a reflow/repaint
  per frame and drops frames. (Example: a "live" dot's pulse should be a scaled, fading
  `transform`+`opacity` ring on a pseudo-element, **not** an animated `box-shadow`.) On Apple platforms
  animate view `transform`/`opacity` and let the system drive layout transitions.
- **`filter` / `backdrop-filter` blur is GPU-expensive** (fill-rate cost, even when composited) — don't
  animate it, and use it sparingly. See [[liquid-glass]].
- **Don't force synchronous layout inside an animation / `rAF` loop.** Reading layout —
  `getBoundingClientRect`, `offsetWidth`/`offsetTop`, `getComputedStyle`, or SVG
  `getPointAtLength`/`getBBox` — flushes pending layout *that frame*; doing it every frame turns the
  loop into a per-frame reflow ("layout thrashing"). Read once up front (or batch all reads before
  writes); e.g. sample a path's points once and interpolate, rather than querying geometry per frame.
- **Fonts with big feature tables are slow — to *shape* and to *load*.** On Windows (DirectWrite), a
  font with large ligature / `GSUB` coverage is slow both when shaping text (a reflow re-shapes the
  visible text) **and** when the engine first **creates the font face** (it reads the whole feature
  coverage) — either can **freeze the page** (e.g. on scroll). `font-variant-ligatures: none` removes
  the *shaping* cost but **not** the face-creation cost, so it can't rescue a heavy webfont. The real
  fix is to **not ship the heavy webfont**: use **SVG icons** instead of an icon webfont (they carry
  thousands of glyphs + large tables), and keep text on system fonts where you can. If you must keep an
  icon font, **self-host a subset with the OpenType layout tables (`GSUB`/`GPOS`) stripped** — the icons
  render from Private-Use codepoints, so the ligature table is dead weight (`pyftsubset font.woff2
  --unicodes='*' --drop-tables+=GSUB,GPOS,GDEF --flavor=woff2`, often ~800 KB → a few KB). See [[typography]].
- **Pause continuous animation when it isn't visible.** A persistent/decorative loop keeps repainting
  even when its element is scrolled off-screen or the tab/app is backgrounded — wasting CPU/GPU and
  battery, and it can hitch on refocus. On the web, pause via an `IntersectionObserver` (off-screen)
  **and** the Page Visibility API (`document.hidden`), and let `content-visibility: auto` skip off-screen
  sections. On Apple platforms, stop animations / `CADisplayLink`s when the view disappears or the app
  backgrounds. (Brief loaders that can't scroll off-screen don't need this.)
- **Use `will-change` (web) sparingly** — it promotes an element to its own layer; right for a few
  small, genuinely-animating elements, wasteful if applied broadly.
- Target the platform's frame rate (often 60–120 fps); avoid jank during scroll. Don't block the
  main thread during animation. Honoring **Reduce Motion** (above) is also the cheapest path.

See also: [[liquid-glass]], [[accessibility]], [[feedback]].
