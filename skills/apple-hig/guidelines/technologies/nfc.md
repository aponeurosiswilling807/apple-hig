---
title: NFC
source_url: https://developer.apple.com/design/human-interface-guidelines/nfc
platforms: [ios]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. iPhone-only (Core NFC); reading supported since iPhone 7. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# NFC

## Purpose

Near Field Communication lets an iPhone read (and where supported, write) data from electronic tags on real-world objects — posters, products, stickers, equipment — when the device is held near the tag. Core NFC supports NDEF and several native tag protocols.

## Guidelines

- **Use "scan" and "hold near", not "tap" or "touch".** The device only needs to be **in close proximity** to a tag — it doesn't need to physically touch it. Don't tell people to press the phone against the object.
- **Make the scan affordance obvious.** Clearly indicate when to scan, where the tag is, and how to hold the phone. Use the system scan UI for a foreground read session so people get familiar feedback.
- **Provide a fallback.** Not every situation or device supports the scan; offer an alternative path (manual entry, QR, link) so people aren't stuck.
- **Keep sessions short and purposeful.** A read session runs **up to 60 seconds**; show progress and end promptly. Handle timeout, no-tag-found, and unsupported-tag with clear messages.
- **Respect background reading.** On supported devices, NDEF tags can trigger reads in the background without an app open — design content/links accordingly.
- **Be transparent about data.** Explain what scanning does and what data is read/written. See [[privacy]].

## API

- **Core NFC**: `NFCNDEFReaderSession` (NDEF read/write), `NFCTagReaderSession` (native tag protocols), `NFCNDEFMessage`/`NFCNDEFPayload`. Set the session's user-facing `alertMessage`. Requires the Near Field Communication Tag Reading entitlement and a usage description.

## Accessibility

- Make scan prompts and results VoiceOver-readable; don't rely on animation or color alone to signal success/failure. Keep any on-screen controls ≥44 pt and support Dynamic Type. See [[accessibility]].

## Do / Don't

- ✅ Say "Scan the tag" / "Hold your iPhone near…"; show clear progress.
- ✅ Provide a non-NFC fallback and handle timeouts.
- ❌ Don't say "tap" or "touch the tag", or imply physical contact.
- ❌ Don't leave a failed scan without a clear next step.

See also: [[privacy]], [[feedback]], [[accessibility]], [[ios]]
