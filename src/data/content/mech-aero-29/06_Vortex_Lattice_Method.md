---
title: "Vortex Lattice Method"
---

# Vortex Lattice Method

The **Vortex Lattice Method (VLM)** extends Prandtl's lifting line theory from a single line of vortices into a 2D lattice of horseshoe vortices distributed across the entire planform. It remains one of the most widely used tools in computational aerodynamics for its combination of speed, accuracy, and versatility.

## 1. Limitations of Lifting Line Theory

Lifting line theory (LLT) has important restrictions:
- **Straight, unswept wings only:** LLT assumes the bound vortex lies along a single straight line perpendicular to the flow. For highly swept wings, delta wings, or complex multi-element configurations, LLT yields poor results.
- **No fuselage interaction:** Cannot model the interference between wing and fuselage.
- **Steady flow only:** Cannot directly handle unsteady maneuvers.

## 2. The VLM Concept

VLM distributes **horseshoe vortex elements** over the wing planform as a 2D lattice:

1. **Divide** the wing planform into $M \times N$ panels (spanwise × chordwise).
2. **Place** a horseshoe vortex on each panel, with its bound vortex segment at the **quarter-chord** of each panel, and its two trailing vortex legs extending to infinity downstream.
3. **Apply** the no-penetration boundary condition at the **three-quarter-chord** control point of each panel (this placement — bound vortex at $c/4$, control point at $3c/4$ — is exact for thin airfoils and is the VLM equivalent of the Kutta condition).
4. **Solve** the resulting $MN \times MN$ system of linear equations for all vortex strengths $\Gamma_{ij}$.

The governing equation is the kinematic condition: the sum of normal velocity components from all horseshoe vortices plus the free-stream must equal zero at each control point.

## 3. Computing Velocities — Biot-Savart

The velocity induced by a finite vortex filament segment from point $A$ to $B$ with circulation $\Gamma$ at a field point $P$ is given by the **Biot-Savart law**:

$$\vec{V}_{induced} = \frac{\Gamma}{4\pi} \frac{(\vec{r}_1 \times \vec{r}_2)}{|\vec{r}_1 \times \vec{r}_2|^2} \cdot \left(\frac{\vec{r}_1}{r_1} - \frac{\vec{r}_2}{r_2}\right) \cdot (\vec{r}_1 - \vec{r}_2)$$

This is applied to every segment (bound + two trailing legs) of every horseshoe vortex for every control point — $O(MN)^2$ operations.

## 4. Post-Processing Results

Once the $\Gamma_{ij}$ are solved:

**Span loading:** The local bound circulation $\Gamma(y)$ gives the spanwise lift distribution — exactly analogous to LLT.

**Chord loading:** Because VLM resolves chordwise, it gives the chordwise pressure distribution and hence **pitching moment** — impossible with LLT.

**Lift:** By Kutta-Joukowski, integrating $\rho V \Gamma$ over all panels.

**Induced drag (Trefftz plane method):** Compute the kinetic energy in the far-field wake cross-section (the Trefftz plane) from the vortex wake geometry. More accurate than near-field force integration for drag.

## 5. VLM vs. Panel Methods

| Feature | VLM | Panel Method |
|---------|-----|--------------|
| Models thickness | No | Yes |
| Fuselage/body | Difficult | Natural |
| Speed | Very fast | Fast |
| Chordwise pressure | Approximate | Accurate |
| Best for | Preliminary wing design | Detailed pressure analysis |

VLM (like NASTRAN Aerodynamics, AVL, or OpenVSP's built-in solver) can analyze a complete aircraft in milliseconds, making it ideal for high-volume design space exploration, stability and control analysis, and aeroelastic load calculations.
