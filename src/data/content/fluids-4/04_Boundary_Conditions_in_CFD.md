# Boundary Conditions in CFD

A CFD domain is just a bounded box of air. The Navier-Stokes equations inside that box have an infinite number of possible solutions. To get the single, specific solution for your engineering problem, you must tell the solver exactly what is happening at the boundaries of the box.

If boundary conditions are set incorrectly, the simulation will either crash immediately or, worse, converge to a beautiful but physically impossible result.

## 1. Inlet Boundaries

This tells the solver how fluid enters the domain.
*   **Velocity Inlet:** You explicitly state the velocity vectors (e.g., $u=10$ m/s, $v=0, w=0$). This is commonly used for incompressible flows (like water in a pipe) where the flow rate is known. It is dangerous to use for compressible gas flows because pressure can fluctuate wildly to force that specific velocity to occur.
*   **Mass Flow Inlet:** You specify the mass flow rate ($\dot{m}$ in kg/s). The solver adjusts the local velocity based on the density to ensure exactly that much mass enters.
*   **Pressure Inlet:** You specify the Total Pressure (Stagnation Pressure) and the static pressure. The solver calculates the resulting velocity based on Bernoulli dynamics. This is highly robust and is the standard for compressible flows (like jet engine intakes).

## 2. Outlet Boundaries

This tells the solver how fluid leaves the domain.
*   **Pressure Outlet:** The most common and robust outlet. You specify the static pressure at the exit (usually 0 Pa gauge pressure for exhausting to the atmosphere). The solver calculates the velocities required to push the fluid out against that pressure.
    *   *Crucial Rule:* Never place a pressure outlet immediately behind a bluff body (like the trunk of a car). The swirling wake will try to cross the boundary, causing flow to "reverse" back into the domain through the outlet. This almost always crashes the solver. The outlet must be placed far downstream where the flow has smoothed out.
*   **Outflow:** Used when the exit pressure is completely unknown. It assumes the flow is fully developed and all velocity gradients in the flow direction are zero ($\partial u/\partial x = 0$). This cannot be used if there is any backflow or if compressible physics are active.

## 3. Wall Boundaries

*   **No-Slip Wall:** The default setting for all physical objects (car bodies, pipe walls). The fluid velocity at the wall is forced to exactly 0 m/s relative to the wall. This activates viscous shear stress calculations.
*   **Moving Wall:** Used for rotating tires, conveyor belts, or moving pistons. You assign a translational or rotational velocity to the wall, and the adjacent fluid sticks to that velocity.
*   **Slip Wall / Symmetry Plane:** A theoretical boundary where fluid cannot pass *through* it (normal velocity = 0), but fluid does not stick to it either (viscosity is ignored, shear stress = 0).
    *   If you are simulating a symmetrical car in a wind tunnel, you only need to simulate half the car. You place a Symmetry Plane straight down the middle. This cuts your mesh size and computing time in half while yielding the exact same result.

## 4. Initialization

Before the solver can take its first iteration, it must have a starting guess for the pressure and velocity in every single cell in the domain.
*   If your guess is too far from reality, the mathematical errors in the first few iterations will multiply exponentially, causing the solver to "diverge" (crash) immediately.
*   Engineers usually initialize the entire domain with the inlet values, or use "Hybrid Initialization," where the software solves simplified Laplace equations to generate a smooth, mathematically stable starting field before turning on the brutal non-linear Navier-Stokes equations.
