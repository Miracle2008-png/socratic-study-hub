---
title: "Applications of Gas Dynamics"
---

# Applications of Gas Dynamics

The principles of 1D isentropic flow, normal shocks, oblique shocks, and expansion fans are combined to design and analyze high-speed aerospace systems.

## 1. Supersonic Airfoils (Diamond Airfoil)

At subsonic speeds, airfoils are thick and rounded (like a teardrop) to prevent flow separation. 
At supersonic speeds, a blunt teardrop shape would create a massive, detached normal bow shock, causing devastating drag. 

Supersonic wings (like on the F-104 Starfighter or missiles) must be razor-sharp to ensure shocks remain attached and oblique. The classic theoretical shape is the **Diamond Airfoil**.

**Flow Analysis over a Diamond Airfoil:**
1. **Leading Edge:** The sharp nose acts as a wedge. An oblique shock forms attached to the top and bottom edges. The flow turns parallel to the front half of the diamond. Pressure jumps up ($P_2 > P_{atm}$). This high pressure pushes backward on the front slopes, creating **Wave Drag**.
2. **Mid-Chord:** The flow reaches the peak of the diamond and encounters a convex corner. It passes through a Prandtl-Meyer Expansion fan to turn parallel to the rear half. Pressure drops substantially ($P_3 < P_2$).
3. **Trailing Edge:** The flow from the top and bottom must turn back to horizontal, passing through another oblique shock.
- *Lift:* Created by giving the airfoil an Angle of Attack. The bottom oblique shock becomes stronger (higher pressure), and the top expansion fan becomes stronger (lower pressure). The difference generates lift.

## 2. Jet Engine Inlets (Diffusers)

A jet engine compressor cannot handle supersonic air; the rotating blades would generate massive shocks and stall. The inlet must slow the incoming Mach 2.0 air down to Mach 0.4 before it hits the compressor face, recovering as much stagnation pressure as possible.

- **Pitot Inlet (Normal Shock):** A simple open hole. A massive Normal Shock stands in front of it. Slows the air instantly, but destroys a massive amount of $P_0$. Only acceptable for aircraft flying slightly supersonic (Mach 1.2).
- **Spike Inlet (Concorde, SR-71):** A sharp cone sticks out of the inlet. It generates a weak oblique shock. The air slows slightly. Then it hits the inlet lip, generating a second weak shock. By using multiple weak oblique shocks instead of one giant normal shock, the total loss of stagnation pressure is vastly reduced, maintaining engine efficiency at Mach 3.

## 3. Rocket Nozzles (Overexpansion and Underexpansion)

Rocket engines must produce thrust at sea level ($P_{atm} = 14.7$ psi) and in the vacuum of space ($P_{atm} = 0$). A CD nozzle has a fixed geometry ($A_e / A^*$), meaning its design exit pressure $P_d$ is fixed.

- **Sea Level (Overexpanded):** $P_{atm} \gg P_d$. The nozzle is trying to expand the gas too much. Oblique shock waves form *inside* or exactly at the lip of the nozzle, severely compressing the exhaust back up to atmospheric pressure. The exhaust jet pinches inward, forming visible glowing "Mach diamonds". This is inefficient and can cause flow separation that vibrates the nozzle to pieces.
- **Space (Underexpanded):** $P_{atm} = 0$. The gas exits at $P_d$, which is higher than vacuum. It violently expands outward in a massive plume via Prandtl-Meyer expansion waves from the nozzle lip. 
- **Design Compromise:** Rocket nozzles are usually designed to be perfectly expanded ($P_d = P_{atm}$) at some intermediate altitude to maximize average performance throughout the ascent.

## 4. Supersonic Wind Tunnels

To test Mach 3 models, you need a wind tunnel.
- High-pressure air enters a CD nozzle, expanding to Mach 3 in the test section.
- After the test section, the air must be slowed back down to be exhausted or recirculated. You cannot use a diverging duct (that would accelerate it to Mach 4!).
- You must use a converging duct to squeeze the flow down, forcing a Normal Shock to occur in a "diffuser throat", converting the kinetic energy back into static pressure so the exhaust fan doesn't have to do all the work.
