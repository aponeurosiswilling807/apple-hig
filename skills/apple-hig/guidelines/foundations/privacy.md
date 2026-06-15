---
title: Privacy
source_url: https://developer.apple.com/design/human-interface-guidelines/privacy
platforms: [ios, ipados, macos, watchos, tvos, visionos]
value_type: universal
last_verified: 2026-06-14
---

# Privacy

> ⚠️ Universal. Re-verify on Apple.

Privacy is a core Apple value. Collect the **minimum** data needed, **in context**, with a clear
explanation, and give people control.

## Guidelines

- **Request access in context.** Ask for a permission (camera, location, contacts, photos,
  microphone, notifications, tracking) at the moment it's needed and the benefit is obvious — not
  all at launch.
- **Write clear purpose strings.** Every permission prompt needs a specific, honest usage
  description ("…to attach a photo to your message"), not a generic one.
- **Prefer the least-privileged option.** Use system pickers (Photos picker, document picker,
  location "While Using"/approximate, **Sign in with Apple**) so you get only what's needed
  without full access.
- **Minimize and localize data.** Process on-device where possible; don't collect data you don't
  use.
- **Be transparent about tracking.** Use App Tracking Transparency before tracking across apps;
  respect the choice.
- **Show clear indicators** when using camera/microphone/location; never hide active capture.
- **Make privacy choices reversible** and easy to find in your settings (see [[settings]]).
- **Handle denial gracefully** — degrade to a useful state; don't nag or block the whole app.

## Apply it

- Map each data request to a concrete user benefit before adding it.
- Provide an in-app explanation **before** the system prompt when the reason isn't obvious.
- Keep an accurate **privacy nutrition label**; collect for the stated purpose only.

See also: [[settings]], [[onboarding]], [[inclusion]], [[notifications]].
