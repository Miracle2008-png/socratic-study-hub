# Concept Drills: Computational Fluid Dynamics

Test your conceptual understanding of the Finite Volume Method, meshing, boundary conditions, and convergence.

## Conceptual Questions

1.  **True or False:** If the residuals in a CFD simulation drop to $10^{-6}$ and form a perfectly flat line, the calculated drag force is guaranteed to be physically accurate.
2.  Why do engineers use highly compressed "Inflation Layers" (prism cells) near solid walls instead of standard tetrahedral cells?
3.  What does the $y^+$ value represent, and why must an engineer check it after a simulation finishes?
4.  In the Finite Volume Method, the fluid properties are stored at the center of the cell. Why is the "Upwind Differencing Scheme" needed?
5.  If you are simulating flow over a car and the solver crashes instantly on the first iteration, what is the most likely cause?
6.  You are running a steady-state simulation of flow over a cylinder. The residuals drop initially but then start oscillating endlessly in a repeating wave pattern. What physical phenomenon is likely causing this?

## Analytical Problems

1.  **Mesh Sizing:** A cube-shaped domain has a side length of $1$ meter. You mesh it using perfect hexahedral (cubic) cells with a side length of $\Delta x = 0.1$ m. How many cells are in the domain?
2.  **Mesh Independence Scaling:** If you want to cut the cell size in half ($\Delta x = 0.05$ m) to check for mesh independence in that 3D domain, how many cells will the new mesh have? By what factor did the computational cost increase?
3.  **Boundary Conditions:** You are simulating water flowing through a converging pipe (a nozzle). The inlet diameter is $0.2$ m, and the outlet diameter is $0.1$ m. If you set a "Mass Flow Inlet" of $50$ kg/s, what must the solver calculate the average velocity to be at the inlet? ($\rho = 1000$ kg/m³).
4.  **Conservation in FVM:** Consider a single cubic finite volume cell. Water flows into the left face at $5$ kg/s, into the top face at $2$ kg/s, and out of the right face at $4$ kg/s. Assuming steady, incompressible flow with no internal sources, what must be the mass flow rate and direction across the bottom face?

---

## Solutions

### Conceptual Solutions

1.  **False.** Dropping residuals only proves that the *mathematics* converged (the matrix was solved). It does not mean the mesh was fine enough (discretization error), nor does it mean you chose the correct turbulence model or boundary conditions (modeling error).
2.  The boundary layer is extremely thin with massive velocity gradients perpendicular to the wall. Tetrahedral cells would need to be microscopic in all three directions to capture this, resulting in an impossibly large mesh. Inflation layers are squashed thin perpendicular to the wall to capture the gradient, but can be long parallel to the wall, saving millions of cells.
3.  $y^+$ is the non-dimensional distance to the center of the first wall cell. It dictates whether the mesh is resolving the viscous sublayer ($y^+ \approx 1$) or relying on wall functions ($y^+ > 30$). If the $y^+$ does not match the requirements of the chosen turbulence model, the wall friction and separation predictions will be entirely wrong.
4.  The N-S equations require calculating the flux crossing the *face* between two cells. Because the software only knows the values at the cell *centers*, it must interpolate to find the face value. Upwind differencing looks to the upstream cell to determine the face value, prioritizing stability over accuracy.
5.  A catastrophic failure on iteration 1 is almost always due to **poor initialization**. If the initial guess for the flow field is wildly unrealistic, the non-linear equations generate massive errors instantly, and the matrix solver diverges.
6.  Flow over a cylinder naturally produces **Von Kármán vortex shedding**—an inherently unsteady, oscillating phenomenon. You cannot force an unsteady physical reality into a steady-state mathematical solver. The solver is trying to find a single, unmoving answer, but the physics dictate the flow must flap back and forth, hence the oscillating residuals. You must switch to an unsteady (Transient) solver.

### Analytical Solutions

1.  The volume of one cell is $(0.1)^3 = 0.001$ m³. The total volume is $1$ m³. Total cells = $1 / 0.001 = 1000$ cells. (Or simply 10 x 10 x 10).
2.  If you cut the 1D length in half, the number of cells in 3D increases by $2^3 = 8$. The new mesh will have $8,000$ cells. The computational cost increases by a factor of 8 (or slightly more due to matrix inversion overhead).
3.  $\dot{m} = \rho A V$.
    Area at inlet $= \pi r^2 = \pi (0.1)^2 = 0.01\pi \approx 0.0314$ m².
    $50 = (1000) (0.0314) V \implies 50 = 31.4 V \implies V = 50 / 31.4 \approx 1.59$ m/s.
4.  By conservation of mass for a steady flow, $\sum \dot{m}_{in} = \sum \dot{m}_{out}$.
    In: $5$ (left) $+ 2$ (top) = $7$ kg/s.
    Out: $4$ (right).
    To balance, $3$ kg/s must be flowing **out** of the bottom face.
