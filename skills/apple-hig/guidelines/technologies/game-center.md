---
title: Game Center
source_url: https://developer.apple.com/design/human-interface-guidelines/game-center
platforms: [ios, ipados, macos, tvos]
value_type: platform-specific
last_verified: 2026-06-14
---

# Game Center

> ⚠️ Re-verify on Apple.

## Purpose

Game Center is Apple's social gaming network. It provides a standard **profile, leaderboards,
achievements, challenges, multiplayer matchmaking, and friends** so a game gains social features
without building them from scratch.

## Anatomy

- **Access point** — a floating Game Center badge/avatar the system places in a screen corner. It
  shows the player's profile and opens the **dashboard** without leaving the game.
- **Dashboard** — system UI for profile, leaderboards, achievements, and friends.
- **Leaderboards** — classic or **recurring** (time-boxed) score rankings.
- **Achievements** — collectible milestones that track and reward progress.
- **Multiplayer** — matchmaking and real-time/turn-based play.

## Guidelines

- **Show the access point** so players can reach the dashboard anytime; place it in a corner that
  doesn't cover gameplay, and hide it during full-immersion moments if needed.
- **Sign in early and gracefully.** Use the system authentication flow; never block the game if a
  player declines. Handle the signed-out state cleanly.
- **Use the standard dashboard and views** rather than reinventing them; you may add **custom
  dashboard links** that deep-link to a specific leaderboard or achievement area.
- **Design meaningful achievements** that reward real progress (not trivial taps); group and order
  leaderboards sensibly. Celebrate unlocks with restraint. See [[feedback]].
- Keep the game's own visual style; let the system surfaces carry the Game Center identity.

## API

- **GameKit** — `GKAccessPoint` (set `.isActive`, `.location`), `GKGameCenterViewController`,
  `GKLeaderboard`, `GKAchievement`, `GKLocalPlayer.local.authenticateHandler`, `GKMatchmaker` /
  `GKMatch` for multiplayer.

## Accessibility

The access point and dashboard are system-accessible; ensure your custom entry points have VoiceOver
labels and adequate targets (≥44 pt). Don't rely on color alone for rank/state. See [[accessibility]].

## Do / Don't

- ✅ Show the access point, sign in gracefully, use standard dashboard + meaningful achievements.
- ❌ Don't block play when signed out, rebuild the dashboard, or gate the game behind sign-in.

See also: [[ios]], [[tvos]], [[macos]], [[feedback]], [[accessibility]]
