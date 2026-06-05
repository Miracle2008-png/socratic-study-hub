# Hypersonic Flow and Re-entry

When a vehicle travels faster than roughly Mach 5, the aerodynamics change so profoundly that we give this regime a new name: **Hypersonics**. This is the domain of spacecraft re-entry, intercontinental ballistic missiles, and advanced experimental scramjets. In hypersonics, aerodynamics and thermodynamics become inextricably linked.

## 1. What Makes Hypersonics Different?

The transition from supersonic to hypersonic flow is not marked by a sudden physical phenomenon (like the onset of choking at Mach 1). Instead, it is a gradual transition where several effects become dominant:

**1. Thin Shock Layers:**
As Mach number increases, oblique shock waves are swept back closer and closer to the body surface. The region between the shock wave and the body (the "shock layer") becomes extremely thin. The flow in this thin layer is highly compressed and intensely hot.

**2. Entropy Layers:**
A blunt body (like the Apollo capsule) creates a strong, highly curved bow shock. The streamline passing through the normal part of the shock experiences a massive entropy increase; streamlines passing through the oblique parts experience less. This creates strong gradients of entropy (and therefore temperature and velocity) that persist far downstream, interfering with the boundary layer.

**3. Viscous Interaction:**
At hypersonic speeds, the boundary layer grows very thick because the extremely high temperatures increase the gas viscosity and decrease its density. This thick boundary layer actually changes the effective shape of the vehicle that the outer inviscid flow "sees," leading to complex interactions.

**4. High-Temperature Gas Dynamics (Real Gas Effects):**
This is the most defining characteristic of hypersonics. The kinetic energy of the flow is so immense that when it is decelerated by a shock wave or boundary layer friction, temperatures soar to thousands of degrees. At these temperatures, air ceases to be a perfect gas.

## 2. Real Gas Effects

At standard conditions, air is mostly diatomic nitrogen ($N_2$) and diatomic oxygen ($O_2$). As temperature rises in a hypersonic shock layer:

*   **~800 K:** Vibrational energy modes of the molecules become excited. Specific heat ($c_p$) is no longer constant.
*   **~2,000 K:** Oxygen molecules begin to dissociate into individual atoms ($O_2 \rightarrow 2O$). This process absorbs a massive amount of energy, lowering the temperature compared to what a perfect-gas calculation would predict.
*   **~4,000 K:** Nitrogen begins to dissociate ($N_2 \rightarrow 2N$).
*   **~9,000 K:** Atoms begin to ionize, stripping off electrons to form a plasma. The gas becomes electrically conductive. This plasma sheath surrounds re-entering spacecraft, blocking radio communications (the "communications blackout").

These chemical reactions happen at finite rates. If the flow passes the vehicle faster than the reactions can reach equilibrium, the flow is in **non-equilibrium**. Predicting heat transfer in non-equilibrium reacting plasma is one of the hardest problems in aerospace engineering.

## 3. The Re-entry Heating Problem

A spacecraft returning from low Earth orbit enters the atmosphere at roughly 7.8 km/s (Mach 25). It possesses immense kinetic energy. To land safely, it must dissipate nearly all of this energy using aerodynamic drag.

If a vehicle is sharp-nosed, the shock wave is attached, and the intense heat of the decelerated air is transferred directly into the vehicle surface via the thin boundary layer. Early missile designers found their sharp warheads melting.

**The Blunt Body Concept (H. Julian Allen, 1952):**
A brilliant, counter-intuitive breakthrough. If the vehicle is blunt-nosed (like the Apollo, Soyuz, or Dragon capsules), a strong, detached bow shock forms ahead of the vehicle.
*   The immense kinetic energy of the vehicle is converted into thermal energy *in the shock wave*, not on the vehicle surface.
*   The incredibly hot, compressed gas is swept away around the vehicle.
*   Over 90% of the heating goes into the air; less than 10% reaches the vehicle.

## 4. Thermal Protection Systems (TPS)

Even with a blunt body, the heat flux to the vehicle is extreme. A Thermal Protection System is required:

*   **Ablative Shields:** Used on all manned return capsules (Apollo, Dragon). A thick layer of composite material (often phenolic resin) that chars, melts, and vaporizes under intense heat. The vaporization absorbs heat, and the outgassing pushes the hot shock layer away from the surface. The shield is consumed during re-entry.
*   **Radiative Tiles:** Used on the Space Shuttle. Made of extremely low-density silica fibers. They are phenomenal insulators and radiate heat away as quickly as they absorb it. They are reusable but brittle and fragile.
