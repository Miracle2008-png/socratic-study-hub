# Pressure Distribution Over Airfoils

The pressure distribution over an airfoil is the fundamental bridge between aerodynamic theory and physical performance. It determines lift, pitching moment, drag, and flow separation characteristics simultaneously.

## 1. The Cp Distribution

The **pressure coefficient** $C_p$ is plotted versus chordwise position $x/c$ for both upper and lower surfaces. By convention:
- **Upper surface** is plotted with $-C_p$ upward (positive lift appears as the upper curve going up).
- **Lower surface** is plotted below the axis.
- Stagnation pressure gives $C_p = 1.0$ at the leading edge.
- The total lift force is proportional to the area enclosed between the upper and lower $C_p$ curves.

## 2. Features of a Typical Cambered Airfoil $C_p$ at Moderate $\alpha$

**Leading Edge Stagnation Point:**
At positive angle of attack, the stagnation point sits slightly below the leading edge. $C_p = 1.0$ at this exact point.

**Upper Surface (Suction Side):**
The flow accelerates rapidly around the leading edge onto the upper surface, creating a sharp suction peak (highly negative $C_p$) very close to the leading edge. This peak represents the "leading edge suction" that is responsible for much of the lift. Moving downstream, pressure gradually recovers toward $C_p \approx 0$ at the trailing edge.

**Lower Surface (Pressure Side):**
The flow is decelerated slightly below the leading edge stagnation point. Pressure on the lower surface is mildly positive ($C_p > 0$) over most of the chord, providing an upward push.

**Trailing Edge:**
For a real, sharp trailing edge with the Kutta condition enforced, the upper and lower pressures must converge at approximately the same value at the trailing edge (though an exact closure is geometry-dependent).

## 3. Effect of Angle of Attack on $C_p$

As angle of attack $\alpha$ increases:
- The stagnation point moves further toward the lower surface.
- The leading edge suction peak on the upper surface becomes sharper and more intense.
- The enclosed area (and thus lift) grows.
- The adverse pressure gradient after the suction peak steepens.
- Eventually the boundary layer separates from near the leading edge → **stall**.

## 4. Effect of Camber on $C_p$

A cambered airfoil (positively cambered, curving upward) at zero angle of attack:
- Already has a significant pressure difference between upper and lower surfaces.
- Generates a specific **zero-lift angle** $\alpha_{L=0}$ (negative for positive camber) — you must point the airfoil nose-down to generate zero lift.
- The suction peak is more spread-out and gentle compared to a symmetric airfoil at high $\alpha$.

## 5. Center of Pressure vs. Aerodynamic Center

**Center of Pressure (CP):** The point on the chord where the resultant lift force effectively acts (zero pitching moment). For symmetric airfoils, the CP is fixed at $c/4$. For cambered airfoils, the CP moves chordwise with $\alpha$ — it moves backward as lift decreases. This makes it a poor reference point for stability analysis.

**Aerodynamic Center (AC):** The point about which the pitching moment coefficient $C_m$ remains constant regardless of angle of attack. Thin airfoil theory proves the AC is at the **quarter chord** ($c/4$) for subsonic flow (and at the half chord for supersonic). The AC is the preferred reference because it separates lift generation from pitching moment behavior, greatly simplifying aircraft stability analysis.

## 6. Measuring Pressure Distributions in Wind Tunnels

Physical airfoils tested in wind tunnels have dozens of small pressure taps drilled into the surface at specific chordwise locations. Each tap is connected via tubing to a manometer or electronic pressure transducer that measures the local static pressure. Plotting these measurements gives the experimental $C_p$ distribution, which is then compared to theoretical predictions to validate codes and assess separation.
