---
title: Maps
source_url: https://developer.apple.com/design/human-interface-guidelines/maps
platforms: [ios, ipados, macos, tvos, visionos]
value_type: platform-specific
last_verified: 2026-06-14
---

> ⚠️ Re-verify on Apple. Verify on Apple as the HIG migrates from the 26 to the 27/Golden Gate generation.

# Maps

## Purpose

MapKit lets you embed an interactive Apple map in your app to show places, routes, and context. Use a map to give people a real sense of place — with annotations, overlays, Look Around, and directions — without cluttering the view.

## Anatomy

- **Annotations / markers** — pins or custom views marking points (`Marker`, `Annotation`).
- **Overlays** — shapes drawn on the map (routes, regions, heatmaps).
- **Map controls** — user-location button, compass, scale, pitch/3D, zoom.
- **Look Around** — street-level immersive imagery for supported locations.
- **Selectable map features** — built-in POIs people can tap for details.

## Guidelines

- **Don't clutter the map.** Show only relevant annotations; cluster dense pins; let detail emerge as people zoom. Avoid burying the map under chrome.
- **Use the standard user-location flow.** Request location **in context** with a clear purpose string; support "While Using" and approximate location; don't demand precise/always location unless truly needed. See [[privacy]].
- **Make annotations legible and tappable** (≥44 pt targets) and give each a clear title/subtitle and accessible label.
- **Offer Look Around** where it adds orientation value; provide a clear entry point and a way back to the map.
- **Hand off directions appropriately** — open Apple Maps for full turn-by-turn rather than reimplementing navigation, unless navigation is your app's purpose.
- **Respect map styling and attribution.** Use `MapStyle` (standard/imagery/hybrid); keep the Apple attribution and legal links visible and unobstructed.
- **Keep controls clear of safe areas** and the Dynamic Island / sensor regions. See [[layout]].

## API

- **MapKit for SwiftUI**: `Map`, `Marker`, `Annotation`, `MapPolyline`, `MapCircle`, `MapStyle`, `LookAroundPreview`, `MapUserLocationButton`, `MapCompass`, `MapScaleView`.
- **MapKit (UIKit/AppKit)**: `MKMapView`, `MKAnnotation`/`MKAnnotationView`, `MKOverlay`/`MKOverlayRenderer`, `MKLookAroundScene`, `MKDirections`, `MKLocalSearch`.
- Location via **Core Location** (`CLLocationManager`); request authorization in context.

## Accessibility

- Provide VoiceOver labels for annotations and controls; don't encode meaning in pin color alone. Support Dynamic Type in callouts; keep targets ≥44 pt (60 pt visionOS). See [[accessibility]].

## Do / Don't

- ✅ Cluster pins, reveal detail on zoom, keep Apple attribution visible.
- ✅ Request location in context; support approximate location.
- ❌ Don't flood the map with pins or hide the map under panels.
- ❌ Don't demand precise/always location without need.

See also: [[privacy]], [[layout]], [[accessibility]], [[ios]], [[visionos]]
