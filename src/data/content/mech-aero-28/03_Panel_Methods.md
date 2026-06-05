# Panel Methods

Analytical conformal mapping works beautifully for simple geometric shapes, but designing a modern transonic supercritical wing or a complex multi-element flap system requires a numerical approach. **Panel Methods** (also called boundary element methods) are the classical numerical implementation of inviscid potential flow theory.

## 1. The Core Concept

Instead of deriving an exact complex potential for the entire airfoil analytically, we approximate the airfoil surface as a series of small, flat line segments (**panels**). On each panel, we distribute a surface density of source/sink and/or vortex singularities of unknown strength.

The flow field is then:
$$\phi_{total} = \phi_{\infty} + \sum_{j=1}^{N} \phi_{singularity,j}$$

where $\phi_\infty$ is the uniform free-stream potential.

## 2. The Neumann Boundary Condition

The fundamental condition is that the airfoil surface must be a streamline—no fluid can flow through the solid surface. This **no-penetration** (or **no-normal-flow**) boundary condition is applied at a **control point** on the center of each panel:

$$(\vec{V} \cdot \hat{n})_{surface} = 0$$

For $N$ panels with $N$ unknown singularity strengths, applying this condition at each of the $N$ control points gives exactly $N$ equations in $N$ unknowns—a linear algebra problem solvable by matrix methods.

## 3. The Kutta Condition Implementation

For a sharp trailing edge, we enforce the Kutta condition numerically: the vortex strength at the trailing edge panels must be such that the velocity there remains finite and smooth. For vortex panel methods, this typically means the vortex strength at the upper and lower trailing edge panels must sum to zero.

## 4. Types of Panel Methods

**Source Panel Methods:**
- Distribute sources and sinks only.
- Good for modeling symmetric, non-lifting bodies (fuselages, nacelles).
- Cannot generate lift (no circulation).

**Vortex Panel Methods:**
- Distribute vortex sheets on the surface.
- The Kutta condition determines circulation and hence lift.
- Used for thin cambered airfoils.

**Doublet Panel Methods (Higher Order):**
- Modern implementations use doublet distributions (equivalent to distributed sources + sinks) plus vortex sheets.
- Allow quadratic variation of singularity strength across each panel.
- Much higher accuracy for the same number of panels.

**3D Panel Methods:**
- Extend the concept to 3D lifting surfaces (wings, complete aircraft).
- Panels become flat quadrilateral surface elements.
- Used by the aerospace industry until the 1990s for preliminary design.

## 5. Results and Post-Processing

Once the singularity strengths are solved:
1. **Velocity:** Computed at any point by summing contributions from all panels.
2. **Pressure:** From Bernoulli's equation: $C_p = 1 - (V/V_\infty)^2$.
3. **Lift:** Integrate pressure over the chord: $C_L = \oint C_p \, d(x/c)$.
4. **Pitching Moment:** Similarly integrated.
5. **Drag:** Within pure inviscid potential theory, drag is zero (d'Alembert's paradox). Engineers couple panel methods with boundary layer codes to estimate friction drag and predict separation.

Panel methods remain the workhorse of early-stage aircraft design because they run in milliseconds on a laptop, allowing engineers to rapidly evaluate thousands of geometric configurations before committing to expensive CFD simulations.
