---
title: "Induced Drag and Winglets"
---

# Induced Drag and Winglets

**Induced drag** (drag due to lift) is the aerodynamic penalty for generating lift with a finite-span wing. Unlike profile drag (which can theoretically be reduced toward zero in frictionless flow), induced drag is an inherent consequence of the physics of finite-span lift generation — it cannot be eliminated, only reduced.

## 1. The Physics of Induced Drag

The trailing vortex sheet induces downwash over the wing. This downwash tilts the local lift vector slightly backward (away from the perpendicular to the free stream). The component of this tilted lift vector that aligns with the drag direction is induced drag.

**Energy perspective:** The aircraft continuously deposits kinetic energy into the trailing vortices. This rotational kinetic energy in the wake is exactly equal to the induced drag power ($D_i \cdot V_\infty = $ kinetic energy deposited per unit time). The trailing vortex wake of a large aircraft persists for several minutes and can extend many kilometers behind it — this is the energy extracted from the propulsion system to maintain lift on a finite wing.

## 2. Induced Drag Formula

$$D_i = \frac{1}{2}\rho V^2 S \cdot C_{D_i} = \frac{1}{2}\rho V^2 S \cdot \frac{C_L^2}{\pi e AR}$$

Since lift equals weight for level flight ($L = W = \frac{1}{2}\rho V^2 S C_L$), we can substitute:

$$D_i = \frac{W^2}{\frac{1}{2}\rho V^2 \pi e b^2}$$

**Critical insights from this form:**
- Induced drag increases as **velocity decreases** (inversely proportional to $V^2$). Induced drag is worst at low speed — takeoff, landing, and slow flight.
- Induced drag is proportional to **weight squared** — a heavier airplane pays a double penalty (more lift required → more induced drag).
- Induced drag is inversely proportional to **wingspan squared** ($b^2$) — longer wings dramatically reduce induced drag.

## 3. Winglets — The Engineering Solution

Why not simply make all wings longer to reduce induced drag? **Structural weight** — doubling span increases bending moment at the root by much more than double, requiring massively heavier spars. There is a practical span limit determined by where the weight savings from reduced induced drag are outweighed by increased structural weight.

**Winglets** offer a clever alternative: redirect the trailing vortex energy to provide a thrust component rather than depositing it as wake kinetic energy.

**Physical mechanism:**
A winglet is a small vertical (or canted) fin at the wingtip. It acts as a small airfoil in the intense upwash and swirling flow near the wingtip vortex. The winglet generates lift (in the horizontal plane) that, when resolved, has a forward-pointing component — **an induced thrust**, effectively opposing some of the induced drag.

**Aerodynamic effect:**
The winglet effectively increases the **effective span** of the wing — the vortex is pushed outboard by the winglet's blocking effect, spreading the trailing vortex sheet over a larger effective diameter. The induced drag decreases as if the span were larger.

Typical winglet benefits:
- 3–5% reduction in fuel burn on commercial transports.
- The Boeing 737 MAX winglets (split scimitar design) reduce fuel burn by ~1.5% compared to the previous 737 blended winglet.
- The Airbus A320neo uses **sharklet** winglets saving approximately 3–4% fuel.

## 4. Winglet Design Considerations

**Height:** Taller winglets provide more effective span but add structural weight and wetted area (friction drag). Optimum height is typically 15–25% of semi-span.

**Cant angle:** Vertical winglets are aerodynamically optimal but structurally challenging (large bending moment at junction). Canted winglets (inclined outboard) reduce this moment but are slightly less aerodynamically effective. **Blended winglets** use a smooth curve to gradually transition, reducing stress concentrations.

**Tip fences:** Airbus uses a two-sided tip fence on older A320 aircraft — a small upward fin above and downward fin below the wingtip. Less efficient than a winglet but lighter.

**Raked wingtips:** Boeing 787 uses a simple upswept-and-raked wingtip extension rather than a winglet. Aerodynamically equivalent or superior to a winglet for the structural weight invested, but requires additional airport gate clearance.
