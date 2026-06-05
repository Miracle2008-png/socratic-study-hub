# Wing Stall Patterns and High-Lift Devices

The aerodynamic stall is a critical design constraint: not just whether the wing stalls, but **where** along the span it stalls first, and **how** the stall progresses. Equally important are the high-lift devices that allow aircraft to fly at the low speeds required for takeoff and landing without exceeding the stall limit.

## 1. Spanwise Stall Progression Patterns

Three archetypal stall patterns are observed, depending on planform shape and twist:

**Root Stall:**
Separation initiates at the wing root and progresses outward toward the tips. The tips and ailerons remain immersed in attached flow — roll control is maintained throughout the stall. The burbling turbulent wake from the root stall impinges on the tail, creating strong buffeting that provides an unmistakable physical warning to the pilot. This is the **safest** stall pattern. Rectangular wings and properly twisted tapered wings exhibit root stall.

**Tip Stall:**
Separation begins at the wingtip and progresses inboard. The ailerons stall and lose effectiveness before the root provides buffet warning. The separated tip may generate a strong rolling moment (one tip stalling before the other), causing the aircraft to snap into a violent roll and potentially spin entry. Highly tapered wings without adequate washout exhibit tip stall. **Extremely dangerous** on approach to landing.

**Trailing Edge Stall (progressive):**
Turbulent boundary layer separation begins at the trailing edge and gradually moves forward as $\alpha$ increases. Provides the gentlest, most gradual stall onset — good stall warning from gradual buffeting. Typical of thick, round leading edge airfoils.

**Leading Edge Stall (abrupt):**
A thin, sharp laminar separation bubble near the leading edge abruptly bursts at critical $\alpha$, causing instantaneous full chord separation. Virtually no warning — $C_L$ drops precipitously. Characteristic of thin airfoils. Very dangerous.

## 2. High-Lift Devices — Flaps

**Purpose:** At takeoff/landing speeds, the wing must generate enough lift at low velocity ($L = \frac{1}{2}\rho V^2 S C_L$). Increasing $C_{L,max}$ allows lower stall speed, shorter runway requirements.

**Plain flap (simple rotation):** Trailing edge rotates downward, increasing camber. Modest lift increase ($\Delta C_{L,max} \approx 0.5$), significant drag increase. Used on small general aviation aircraft.

**Split flap:** Only the lower surface rotates down. Even more drag (acts as a spoiler on the lower surface), used where rapid descent without speed increase is needed.

**Slotted flap (Fowler flap):** Flap translates aft (increasing chord) and rotates down. The slot between main wing and flap injects a jet of high-energy air from the high-pressure underside to re-energize the boundary layer on the flap upper surface, delaying separation. Most efficient. $\Delta C_{L,max} \approx 1.2-2.0$. Used on virtually all commercial transports.

**Multi-element Fowler flap:** Two or three slotted flap segments, each reenergizing the next. $\Delta C_{L,max}$ up to 3.0 achievable. Complex, heavy, expensive. Used on large commercial jets.

## 3. High-Lift Devices — Leading Edge Devices

Flaps alone do not fully solve the high-$\alpha$ stall problem — the leading edge pressure peak intensifies as the flap adds camber, promoting leading edge stall.

**Leading edge slats:** Drooped leading edge segments that translate forward and downward, creating a slot. The slot injects energized flow into the suction region. Dramatically delays leading edge stall to higher $\alpha$. Used on all modern commercial transports and many fighters.

**Krueger flaps:** Hinged lower-surface panels that rotate forward and downward to form a leading edge extension. Less effective than slats but simpler. Used on inner wing sections of some aircraft (Boeing 747 inner wing uses Krueger flaps combined with outer wing slats).

## 4. Maximum Lift Coefficient Budget

A modern commercial jet with full high-lift deployment:
- Clean wing: $C_{L,max} \approx 1.3–1.5$
- Slats only: $C_{L,max} \approx 1.7–2.0$ (delayed stall $\alpha$)
- Slats + Fowler flaps: $C_{L,max} \approx 2.5–3.0$ (increased camber + delayed stall)
- All devices deployed (landing config): $C_{L,max} \approx 2.8–3.5$

This allows landing approach at 70–80 m/s (1.3 × stall speed) rather than the 150+ m/s the clean wing would require.
