---
title: "External Flow: Drag, Lift, and the Boundary Layer"
---

# External Flow: Drag, Lift, and the Boundary Layer

**Internal flow** occurs inside pipes and ducts, where the fluid is fully bounded. **External flow** is when a fluid flows over and around an external surface — an aircraft wing, a car body, a submarine, or a bridge pylon. The aerodynamic and hydrodynamic forces generated are the central concern of aerospace and naval engineering.

## 1. The Boundary Layer

When a real viscous fluid flows past a solid wall, the fluid molecules directly touching the wall are dragged to a complete stop by molecular adhesion. This is the **No-Slip Condition** — the most fundamental boundary condition in viscous flow.

Moving away from the wall, the fluid velocity gradually recovers from zero (at the wall) to the full free-stream velocity ($U_\infty$) at some distance $\delta$ from the wall. This thin region of rapidly varying velocity is the **Boundary Layer**.

The boundary layer starts infinitesimally thin at the leading edge of a surface and grows thicker downstream. Within the boundary layer, viscous shear stresses are enormous. Outside the boundary layer, viscosity is negligible and the flow can be treated as inviscid (Bernoulli applies there).

The boundary layer eventually transitions from laminar to turbulent (at $\text{Re} \approx 5 \times 10^5$ for a flat plate), dramatically increasing the wall shear stress and skin friction drag.

## 2. Drag Force

The total drag force on a body has two components:
*   **Friction Drag (Skin Friction):** Direct shear stress on the surface tangential to the flow. Dominant for streamlined bodies (aircraft fuselages, submarines).
*   **Pressure Drag (Form Drag):** Due to flow separation. The fluid cannot follow the body's rear surface, leaving a low-pressure turbulent wake. Dominant for bluff bodies (spheres, cylinders, cars).

The total drag is expressed using the **Drag Coefficient ($C_D$)**:
$$ F_D = C_D A \frac{1}{2}\rho V^2 $$

Where $A$ is a reference area (frontal area for bluff bodies, planform area for wings).

## 3. Lift Force

For an airfoil, the curved upper surface causes flow to accelerate over it, reducing pressure. The flat lower surface has slower flow and higher pressure. This pressure difference generates the **Lift Force**:
$$ F_L = C_L A \frac{1}{2}\rho V^2 $$

The **Lift Coefficient ($C_L$)** depends on the airfoil shape and the **Angle of Attack ($\alpha$)** — the angle between the chord line and the oncoming flow.

## 4. The Navier-Stokes Equations

All external flow physics — boundary layers, drag, lift, turbulence — are ultimately governed by the **Navier-Stokes Equations**: Newton's Second Law applied to a viscous fluid continuum. These are a system of nonlinear partial differential equations with no general analytical solution. The **Millennium Prize Problem** — one of the seven greatest unsolved problems in mathematics — asks whether smooth solutions always exist. In engineering, they are solved numerically using **Computational Fluid Dynamics (CFD)** software (ANSYS Fluent, OpenFOAM) running on supercomputers with millions of mesh cells, forming the bedrock of modern aircraft, car, and turbomachinery design.
