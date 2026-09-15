# Seatify Startup MVP Upgrade

## Goal
Turn the existing Seatify prototype into a convincing daily-use student product while preserving its warm, editorial coffee aesthetic. The experience will prioritize mobile interaction, realistic product states, and a clear presentation narrative rather than backend infrastructure.

## Experience flow

```text
First visit
  Onboarding 1 → Onboarding 2 → Onboarding 3 → Personalized Home

Returning visit
  Personalized Home
    ├─ Explore and filter cafes
    ├─ Save cafes
    ├─ View cafe atmosphere and details
    ├─ Reserve seat → choose options → QR confirmation
    └─ Review bookings, activity, and profile
```

## What will change

### 1. First-time onboarding
- Add a three-screen, full-height mobile onboarding flow using the existing premium cafe photography.
- Screen one uses the requested “Never Waste Time Finding a Seat Again” message and strong photographic treatment.
- Screens two and three use editorial image-led compositions for “Know Before You Go” and “Support Hidden Gem Cafes.”
- Add progress indicators, Back/Next controls, Skip, and Get Started.
- Remember completion in the browser so returning users land directly on the personalized home; provide a profile control to replay onboarding for presentation purposes.

### 2. Personalized daily home
- Replace the marketing-style home with an application home headed “Good Morning, Student 👋” and “Universitas Indonesia.”
- Add a large personalized recommendation for FIB Corner Coffee with live availability, reason tags, distance, rating, and a clear detail action.
- Add horizontally scrollable mobile sections for Available Now, Trending Around Campus, and Hidden Gems.
- Add a concise “Your recent visits” section with the FEB Coffee Corner three-hour visit.
- Keep desktop presentation spacious by expanding the mobile rows into balanced editorial grids.

### 3. Richer cafe cards and atmosphere
- Extend shared cafe data with noise level, atmosphere category, recommendation copy, popularity labels, and distinct route slugs.
- Upgrade cards with live status, seats available, a stable occupancy bar and percentage, distance, rating, noise, facilities, and bookmark control.
- Add restrained fade-in sequencing, image movement, button press feedback, and animated availability indicators.
- Add “What’s the vibe?” to cafe details with Quiet Study, WFC Friendly, Group Discussion, and Casual Hangout tags.

### 4. Saved cafes and recent activity
- Make bookmarks work consistently across Home, Explore, and Cafe Detail.
- Persist saved choices in the browser for the prototype session and render them on Saved Cafes.
- Preserve a polished empty state when no cafes are saved, with a direct path back to discovery.
- Display realistic recent activity, including visit date and study duration.

### 5. Reservation and booking flow
- Replace the instant reservation toggle with a mobile-first reservation panel.
- Let users choose Today, a duration of 1–3 hours, and party size from 1 to 4+.
- Show a confirmation state with “Your seat is reserved,” booking summary, reservation code, and a simple QR ticket.
- Surface confirmed reservations on Bookings; retain the designed empty state before the first reservation.

### 6. Student profile
- Expand Profile with an illustrated student avatar, Universitas Indonesia identity, and editable presentation-ready profile header.
- Add stats for 12 cafes visited, 36 study hours, and Quiet Study as the favorite category.
- Add achievement badges for Campus Explorer, Early Bird, and Coffee Hunter.
- Include recent visits, preference controls, and the onboarding replay action.

### 7. Product polish and verification
- Preserve the coffee brown, warm white, muted green, Playfair Display, and DM Sans system.
- Add semantic animation utilities for fade-in, scale/press feedback, and staggered card entrances, respecting reduced-motion settings.
- Keep the bottom app navigation on mobile and the clean top navigation on desktop.
- Ensure all cafe links resolve to realistic cafe-specific content instead of one repeated detail record.
- Verify onboarding, bookmarking, reservation confirmation, empty states, navigation, and presentation at mobile and desktop sizes with no console errors or overlapping content.

## Technical details
- Use shared typed mock cafe, activity, achievement, and reservation data so every screen stays consistent.
- Add a small browser-state provider for onboarding completion, saved cafe IDs, and the current reservation; no backend or login is introduced for this visual MVP.
- Use accessible modal/panel primitives already available in the project for reservation steps and confirmation.
- Generate the QR ticket locally as a deterministic visual pattern; it is a presentation artifact, not a scannable production credential.
- Maintain unique metadata on every content route and retain the current responsive route architecture.

## Out of scope
- Real-time occupancy infrastructure, payment, authentication, merchant data synchronization, push notifications, and production QR validation.
