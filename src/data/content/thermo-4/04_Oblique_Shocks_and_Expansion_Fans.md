# Oblique Shocks and Expansion Fans

When a supersonic flow encounters a surface at an angle (like the leading edge of a supersonic wing or the ramp of an inlet), the shock that forms is not perpendicular to the flow — it is inclined at an angle. These **oblique shocks** are far more efficient than normal shocks because they cause less stagnation pressure loss, making them the basis of all practical supersonic inlet design.

## 1. Oblique Shock Geometry

An oblique shock is defined by two angles:
*   **Deflection Angle ($\theta$):** The angle through which the flow turns after passing through the shock (determined by the geometry of the surface).
*   **Shock Angle ($\beta$):** The angle between the shock wave and the upstream flow direction (what we are solving for).

**The $\theta$-$\beta$-$M$ Relation:**
$$ \tan\theta = 2\cot\beta \cdot \frac{M_1^2 \sin^2\beta - 1}{M_1^2(k + \cos 2\beta) + 2} $$

This equation implicitly relates all three quantities. For a given upstream Mach number $M_1$ and deflection angle $\theta$, there are **two solutions for $\beta$**:

**Weak Shock Solution (smaller $\beta$):**
The shock makes a small angle with the flow. The downstream flow is still supersonic (most common in practice). Small stagnation pressure loss.

**Strong Shock Solution (larger $\beta$):**
The shock is closer to normal. The downstream flow is subsonic. Large stagnation pressure loss. Occurs at specially designed geometries or in front of blunt bodies.

**Maximum Deflection Angle ($\theta_{max}$):**
For a given $M_1$, there is a maximum turning angle the flow can achieve with an attached oblique shock. If $\theta > \theta_{max}$, the shock detaches from the surface and forms a **bow shock** — a curved, detached shock that stands off the body (like the bow shock in front of the Space Shuttle at high Mach).

## 2. Properties Across an Oblique Shock

An oblique shock can be decomposed into:
*   A **normal component** ($M_{n,1} = M_1 \sin\beta$) — this component goes through what is effectively a normal shock.
*   A **tangential component** — this passes through the shock unchanged.

Therefore, we can use normal shock tables with the effective normal Mach number $M_{n,1}$:
$$ M_{n,1} = M_1 \sin\beta $$

The downstream normal Mach number $M_{n,2}$ is found from normal shock relations, and the actual downstream Mach number is:
$$ M_2 = \frac{M_{n,2}}{\sin(\beta - \theta)} $$

Since $M_{n,1} < M_1$, the oblique shock causes far less stagnation pressure loss than a normal shock at the same upstream Mach number.

## 3. Shock-on-Shock Interactions and Wedge Inlets

Supersonic aircraft inlets use a sequence of oblique shocks to slow the flow from freestream supersonic to subsonic for the engine, minimizing total pressure loss.

**Example: SR-71 Blackbird inlet (Mach 3.2):**
Instead of a single normal shock (which at $M_1 = 3.2$ causes ~65% stagnation pressure loss), a series of 3–4 oblique shocks decelerate the flow — each causing only a modest loss — followed by a final weak normal shock at $M \approx 1.5$ (much smaller loss). The total recovery is far superior.

## 4. Prandtl-Meyer Expansion Fans

The opposite of a shock — an expansion fan — occurs when supersonic flow turns away from itself (around a convex corner). Instead of compressing (as in a shock), the flow accelerates and expands.

An expansion fan is an **isentropic** process — no stagnation pressure loss, no entropy production. It consists of an infinite family of infinitesimally weak Mach waves spread over a fan angle.

**Prandtl-Meyer Function ($\nu(M)$):**
$$ \nu(M) = \sqrt{\frac{k+1}{k-1}} \tan^{-1}\sqrt{\frac{k-1}{k+1}(M^2-1)} - \tan^{-1}\sqrt{M^2-1} $$

For a flow turning through angle $\theta$ via an expansion fan:
$$ \nu(M_2) = \nu(M_1) + \theta $$

This elegant result means the exit Mach number $M_2$ can be found directly from the entry Mach number and the turning angle, with no iteration (just looking up the $\nu$ function).

**Applications:** Nozzle walls in the diverging section (the supersonic portion follows curved expansion fans), supersonic aircraft aft bodies, wind tunnel design.
