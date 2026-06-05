# Numerical Errors and Convergence

When a CFD simulation finishes, how do you know if the answer is actually right? A colored plot is not proof of reality. The engineer must rigorously prove that mathematical and physical errors have been minimized.

## 1. Residuals (Did the math converge?)

Because the Navier-Stokes equations are non-linear, the computer solves them iteratively.
In iteration 1, it guesses the velocities. It plugs those guesses into the conservation equations. Because it was just a guess, the equations don't balance.
$$ (\text{Mass In}) - (\text{Mass Out}) = \text{Error (Residual)} $$

The solver adjusts the velocities to try to reduce that error in iteration 2.

The **Residuals** are the absolute magnitudes of these mathematical imbalances, summed over all the cells in the domain.
As the solver iterates, you watch a plot of the residuals dropping.
*   If the residuals drop by 3 orders of magnitude ($10^{-3}$) and level out, the solution is generally considered "converged" for basic engineering tasks.
*   For highly sensitive calculations (like heat transfer or precise drag), you must wait for them to drop to $10^{-5}$ or $10^{-6}$.
*   If the residuals bounce wildly or shoot up to infinity, the solver has **diverged** (crashed), usually due to a bad mesh, an impossible boundary condition, or a time-step that is too large.

## 2. Monitor Points (Did the physics converge?)

Residuals only prove that the mathematical matrix was inverted successfully. They do not prove the flow is physically stable.

An engineer must set up **Monitor Points**. While the solver is running, you plot a physical value you care about—like the total Drag Force on a car, or the average temperature at an outlet.
*   Even if the mathematical residuals have dropped to $10^{-4}$, the drag force might still be slowly creeping upward.
*   You must not stop the simulation until the physical monitor points have flattened out into a perfectly straight horizontal line.

## 3. Discretization Error (Is the mesh fine enough?)

The Navier-Stokes equations assume space is continuous. FVM chops space into discrete blocks. This introduces **Discretization Error**.
If your cells are too large, they "blur" the physics, completely missing sharp pressure gradients or thin boundary layers.

To prove your answer is real, you must perform a **Mesh Independence Study**:
1.  Run the simulation on a coarse mesh (e.g., 1 million cells). The drag force is 400 N.
2.  Refine the mesh globally, making all cells smaller (e.g., 3 million cells). Run it again. The drag force is 430 N.
3.  Refine it again (e.g., 8 million cells). Run it again. The drag force is 435 N.
4.  Refine it again (e.g., 15 million cells). The drag force is 436 N.

Notice how the answer changes significantly at first, but then "asymptotically" approaches a final value. Once the result stops changing when you add more cells, your solution is **Mesh Independent**. Publishing results from a mesh that hasn't been verified this way is professional malpractice.

## 4. Modeling Error (Is the physics right?)

Even if the math converged, and the mesh is infinitely fine, the answer can still be wrong if you chose the wrong physical models.
*   Using an incompressible solver for a supersonic jet.
*   Using a $k-\epsilon$ turbulence model when predicting separation over an airfoil.
*   Ignoring buoyancy in a hot room simulation.

The only way to verify modeling choices is through **Validation**—comparing the CFD output against real-world experimental wind-tunnel data.
