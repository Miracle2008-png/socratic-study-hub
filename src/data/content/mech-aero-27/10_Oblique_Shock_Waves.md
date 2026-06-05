---
title: "Oblique Shock Waves"
---

# Oblique Shock Waves

Normal shocks stand perfectly straight across a flow, causing a massive, devastating loss of stagnation pressure. However, if a supersonic flow encounters a physical wedge or turns into a corner, the shock wave forms at an angle. This is an **Oblique Shock Wave**.

Because they are angled, oblique shocks are "weaker" than normal shocks—they decelerate the flow less, and destroy far less stagnation pressure. Supersonic aircraft are meticulously shaped into sharp wedges and cones specifically to generate oblique shocks rather than normal shocks.

## 1. Kinematics of an Oblique Shock

Consider a supersonic flow ($M_1 > 1$) encountering a sharp wedge with a half-angle of $\theta$ (the **deflection angle**).
To get around the wedge, the flow must instantaneously turn by angle $\theta$. It does this by passing through an oblique shock wave that sits at an angle $\beta$ (the **shock angle**) relative to the incoming flow.

We analyze oblique shocks by resolving the upstream velocity $V_1$ into two components relative to the shock wave:
- $V_{1n}$: The component **normal** (perpendicular) to the shock. ($V_{1n} = V_1 \sin\beta$)
- $V_{1t}$: The component **tangential** (parallel) to the shock. ($V_{1t} = V_1 \cos\beta$)

**The Fundamental Trick:**
The oblique shock behaves *exactly* like a normal shock, but **only with respect to the normal velocity component**. 
The tangential velocity component is completely unaffected and passes straight through unchanged ($V_{1t} = V_{2t}$).

## 2. Using Normal Shock Rules

Because only the normal component experiences the shock, we define a "Normal Mach Number":
$$M_{1n} = M_1 \sin\beta$$

For a shock to physically exist, the normal component must be supersonic: **$M_{1n} > 1$**.
Therefore, the shock angle $\beta$ must always be larger than the Mach angle $\mu = \sin^{-1}(1/M_1)$.

To find the properties behind the shock ($P_2, T_2, \rho_2$), you simply plug the normal Mach number $M_{1n}$ into the standard 1D Normal Shock tables or equations.
It outputs the downstream normal Mach number $M_{2n}$. The flow is now normal-subsonic ($M_{2n} < 1$).

However, because the tangential velocity $V_{2t}$ remains huge and unchanged, the total downstream Mach number $M_2$ (the vector sum of the normal and tangential parts) is almost always still **supersonic** ($M_2 > 1$). 
*(Unlike a normal shock, an oblique shock does not have to slow the flow to subsonic!).*

## 3. The $\theta$-$\beta$-$M$ Relation

The geometry of turning the flow links the upstream Mach number $M_1$, the deflection angle $\theta$, and the resulting shock angle $\beta$:

$$\tan\theta = 2 \cot\beta \left[ \frac{M_1^2 \sin^2\beta - 1}{M_1^2(k + \cos 2\beta) + 2} \right]$$

This complex equation is universally solved using graphical $\theta-\beta-M$ charts.
For a given $M_1$ and a given wedge angle $\theta$, the chart shows:
1. **Weak Shock Solution:** A smaller $\beta$. This occurs naturally in open aerodynamics (flying jets). The flow remains supersonic ($M_2 > 1$), and pressure loss is minimized.
2. **Strong Shock Solution:** A much steeper $\beta$ (nearly a normal shock). The flow becomes subsonic ($M_2 < 1$). This only occurs if forced by high back-pressure, such as deep inside an engine inlet.

## 4. Detached Shocks

Looking at the $\theta-\beta-M$ chart, for any given $M_1$, there is a **maximum possible deflection angle $\theta_{max}$**.
If an airplane has a wedge angle larger than $\theta_{max}$, the flow simply cannot turn sharply enough while remaining attached to the tip.

The oblique shock detaches, moving out in front of the wedge to form a curved **Bow Shock**. Directly in front of the tip, the bow shock is perfectly vertical (a Normal Shock!), causing massive drag and stagnation pressure loss. This is why supersonic jets have needle-like noses ($\theta < \theta_{max}$), while Apollo reentry capsules were deliberately blunt to create massive detached bow shocks to intentionally create extreme aerodynamic drag.
