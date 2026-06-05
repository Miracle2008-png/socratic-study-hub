# Fanno and Rayleigh Flow

Real gas flows in ducts are affected by friction (viscous losses at the walls) and heat transfer. **Fanno flow** and **Rayleigh flow** are the two classical limiting cases: Fanno flow considers friction alone (adiabatic, constant-area duct with friction), while Rayleigh flow considers heat transfer alone (frictionless, constant-area duct with heating or cooling).

## 1. Fanno Flow — Adiabatic Duct Flow with Friction

**Physical Setup:** A gas flows through a constant-area duct. The walls create friction (through a wall shear stress). No heat transfer ($q = 0$ — adiabatic walls). The gas may be subsonic or supersonic.

**What Friction Does:**
Friction removes momentum from the flow. By the impulse-momentum theorem, the friction force reduces the gas velocity. To maintain continuity in a constant-area duct, the density must change.

**Key Results:**
*   For **subsonic** flow: Friction causes the Mach number to *increase* toward $M = 1$. The flow accelerates toward sonic. This seems counter-intuitive (friction increases velocity?) but is correct: friction decreases pressure, which decreases density — and to maintain mass flow in constant area, velocity must increase.
*   For **supersonic** flow: Friction causes the Mach number to *decrease* toward $M = 1$. The flow decelerates toward sonic.
*   **In both cases:** The Mach number moves toward unity. A Fanno flow line terminates at $M = 1$ — this is the **maximum friction length** for a given inlet condition.
*   If the duct is longer than this maximum, the flow chokes (becomes blocked for the intended mass flow). Subsonic flow: inlet conditions change (reduced mass flow). Supersonic flow: a normal shock forms and the flow becomes subsonic.

**4T Parameter (Total-to-Total Temperature):**
Since Fanno flow is adiabatic, stagnation temperature ($T_0$) is constant throughout.

**The Fanno Line on the h-s (Mollier) Diagram:**
All possible Fanno flow states from a given inlet form a characteristic curve (the Fanno line) on the enthalpy-entropy diagram. The subsonic states lie on the upper branch (higher enthalpy); the supersonic states on the lower branch. Both branches connect at the maximum-entropy sonic state.

## 2. Rayleigh Flow — Heat Transfer in a Duct

**Physical Setup:** A gas flows through a constant-area frictionless duct. External heat is added (or removed). No friction.

**What Heat Transfer Does:**
Adding heat to a flow increases its stagnation temperature $T_0$. The flow properties adjust to maintain continuity and momentum.

**Key Results:**
*   For **subsonic** flow: Adding heat increases the Mach number toward $M = 1$. Adding heat *accelerates* subsonic flow.
*   For **supersonic** flow: Adding heat decreases the Mach number toward $M = 1$. Adding heat *decelerates* supersonic flow.
*   **Thermal choking:** If so much heat is added that the flow reaches $M = 1$, the flow is "thermally choked." Additional heat addition is impossible for the same inlet conditions — the system adjusts (mass flow is reduced for subsonic; a shock forms for supersonic).

**Applications of Rayleigh Flow:**
*   **Ramjet combustors:** Supersonic flow enters a combustor (after an inlet shock). Heat addition decelerates the supersonic flow. If the combustor adds too much heat, thermal choking limits the engine's performance.
*   **Afterburners:** Heat added to subsonic (post-turbine) gas in a jet engine afterburner.

## 3. The Fanno-Rayleigh Intersection: Normal Shocks

An extraordinary fact: on the $h$-$s$ diagram, the **Fanno line and the Rayleigh line for the same mass flow and geometry intersect at exactly two points** — one subsonic and one supersonic. These two intersection points represent the upstream and downstream states of a **normal shock wave**.

This elegant thermodynamic construction confirms that the normal shock relations are thermodynamically consistent: the shock transitions the flow from one Rayleigh-Fanno state to the other, with entropy increasing (moving right on the $h$-$s$ diagram) as required by the Second Law.
