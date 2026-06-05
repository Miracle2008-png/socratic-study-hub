---
title: "3D Panel Methods and Numerical Wing Analysis"
---

# 3D Panel Methods and Numerical Wing Analysis

The 2D panel method (discussed for airfoil analysis) extends naturally to 3D for complete wing and aircraft configurations. Three-dimensional panel methods are the industry standard for rapid aerodynamic analysis of complex geometries where VLM is insufficient (VLM ignores thickness) but full CFD would be prohibitively expensive.

## 1. Extension to 3D

In 3D, we discretize the **surface** of a wing, fuselage, nacelle, and any other aerodynamic component into quadrilateral or triangular flat panels. On each panel, we distribute:
- **Source panels** of uniform strength (for modeling thickness and body shape).
- **Doublet panels** (equivalent to a distribution of vortex rings, representing bound circulation and lift).

The strength of each panel is unknown; we have as many unknowns as panels.

## 2. Boundary Conditions

**No-penetration:** The normal component of the total velocity (free stream + induced from all panels) is zero at each panel control point (located at the panel centroid):
$$\vec{V}_{induced} \cdot \hat{n} + V_\infty \cos\alpha_{eff} = 0$$

**Kutta condition (3D):** At the trailing edge panels, the doublet strength must match between upper and lower surfaces such that the velocity is finite and smooth — implemented by a **wake panel sheet** that trails downstream from the trailing edge.

**Wake shape:** The wake sheet must align with the local streamlines (it cannot sustain pressure jumps — a free shear layer condition). For steady flow, a flat horizontal wake is usually assumed (first-order approximation). For accurate induced drag calculations, an iterative **relaxed wake** procedure is used where the wake shape is allowed to deform under its own induced velocities.

## 3. Solving the Linear System

Applying the no-penetration condition at $N$ panel control points yields $N$ linear equations in $N$ unknown panel strengths. In matrix form:
$$[A_{ij}][\Gamma_j] = \{b_i\}$$

where $A_{ij}$ is the **influence coefficient matrix** — the normal velocity at control point $i$ induced by a unit-strength singularity on panel $j$. This dense matrix is computed once (expensive: $O(N^2)$ operations) and then solved by LU decomposition for each flight condition.

## 4. Results and Validation

From the solved panel strengths:
- **Surface pressure distribution:** $C_p(x,y,z)$ over the entire surface.
- **Lift, drag, pitching moment:** By integration of pressures.
- **Span loading:** Extract chordwise-integrated lift at each spanwise station.
- **Induced drag:** Via Trefftz plane integral of far-field wake kinetic energy.

Famous 3D panel codes:
- **PANAIR (Boeing/NASA):** High-order doublet-source method; used for Space Shuttle aerodynamics and many transport aircraft.
- **VSAERO (Analytical Methods):** Used in Formula 1 car design and helicopter rotor analysis.
- **OpenVSP + VSPAERO:** NASA open-source parametric aircraft modeler with integrated VLM/panel solver; widely used in academia and small firms.

## 5. Coupling with Boundary Layer Analysis

Pure inviscid panel methods predict zero friction drag (d'Alembert's paradox). To obtain realistic drag predictions, 3D panel methods are coupled with integral boundary layer methods:

1. **Panel method** computes inviscid surface velocity distribution.
2. **Boundary layer solver** uses this velocity distribution as input to compute local boundary layer thickness, state (laminar/turbulent), friction coefficient, and skin friction drag.
3. The **displacement thickness** $\delta^*$ (the effective thickening of the body due to boundary layer displacement) is added back to the panel method geometry.
4. Iteration continues until convergence.

This coupled approach (implemented in codes like XFOIL for 2D, and MGAERO/VSAERO-viscous for 3D) gives friction drag within 2–5% of experiment for attached flow conditions — acceptable for preliminary design while running in seconds.
