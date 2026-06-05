# Applications of Inviscid Aerodynamics

Inviscid aerodynamic methods — from simple analytical results to panel methods and linearized supersonic theory — remain essential engineering tools, providing fast, accurate predictions where viscous effects are secondary. Here we survey key real-world applications.

## 1. Aircraft Preliminary Design

In the conceptual design phase, an aerodynamicist must evaluate thousands of geometric configurations (wing sweep, aspect ratio, camber, twist distributions) to find the optimal trade-off between lift, drag, weight, and stability. CFD simulations of each configuration would take weeks.

Panel methods solve each configuration in seconds:
- **Fuselage + Wing + Tail panel model:** Evaluates lift distribution, induced drag, pitching moment, and aerodynamic center location for any combination of geometry and flight condition.
- **Optimization loops:** Automated panel method solvers can evaluate 10,000+ configurations per day, identifying Pareto-optimal designs before any CFD is run.

This is how every major commercial airliner (Boeing 787, Airbus A350) was initially sized and aerodynamically shaped.

## 2. Wind Turbine Blade Design

Wind turbine blades are rotating airfoils operating at low speeds (incompressible) with very well-defined clean flow (the boundary layer remains largely laminar or mildly turbulent). Inviscid panel methods + boundary layer integral methods give excellent predictions of:
- Optimal blade chord and twist distribution for maximum power extraction.
- Lift-to-drag ratio ($L/D$) across the operating range of wind speed and RPM.
- Structural loading from pressure distributions.

The Betz limit (maximum 59.3% of wind kinetic energy can be extracted) comes from inviscid actuator disk theory — a direct application of inviscid momentum analysis.

## 3. Helicopter Rotor Aerodynamics

Helicopter rotors are complex: each blade section sees a different inflow velocity (faster on the advancing blade, slower on the retreating blade), creating a highly non-uniform lift distribution. Inviscid analysis provides the foundational tools:
- **Blade element momentum theory (BEMT):** Combines thin airfoil section lift/drag with inviscid momentum analysis of the rotor disk.
- **Free-wake panel methods:** Model the complex helical vortex wake trailing behind each blade, predicting blade-vortex interaction noise and vibration.

## 4. Ship Hull and Propeller Design

Naval architects use potential flow methods to:
- Minimize **wave-making resistance** (the drag from surface waves a ship creates) by optimizing hull form — the bow shape, shoulder shape, and stern angles are all tuned using inviscid wave drag calculations.
- Design propeller blades using lifting surface theory (the 3D equivalent of thin airfoil theory) to maximize efficiency while avoiding cavitation.
- Predict wake patterns behind the hull to design the propeller for the specific non-uniform inflow it will experience.

## 5. Racing Car Aerodynamics

Formula 1 cars generate immense downforce from complex wing systems. While viscous effects (turbulent boundary layer, flow separation) are critical for accurate drag predictions, the initial sizing and layout of:
- Front and rear wing element angles and chord sizes.
- Diffuser geometry for underbody downforce.
- Bargeboard and turning vane concepts.

...all come from rapid inviscid panel calculations that can be run by the aerodynamics department overnight, with CFD validation reserved for the final few candidates. During a race weekend, inviscid tools are used to quickly estimate the aerodynamic impact of setup changes.
