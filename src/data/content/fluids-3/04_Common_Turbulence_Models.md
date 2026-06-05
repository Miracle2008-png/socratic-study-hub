# Common Turbulence Models

Because the Mixing Length model is too primitive, modern CFD codes rely on advanced models that transport turbulence downstream. These models solve additional partial differential equations alongside the RANS equations to calculate the Eddy Viscosity, $\mu_t$.

## 1. The Spalart-Allmaras Model (One-Equation Model)

Developed in the early 1990s specifically for Boeing aircraft, the Spalart-Allmaras (S-A) model is a "one-equation" model.
It solves a single additional transport equation for a variable directly related to the eddy viscosity.

**Strengths:** It is highly robust, computationally inexpensive, and exceptionally good at predicting aerospace flows (boundary layers over wings, airfoils experiencing mild separation).
**Weaknesses:** It struggles with massive separation, severe pressure gradients, and free shear flows (like a jet of gas injecting into a room), because a single equation cannot capture the complex interplay between the generation and dissipation of turbulence.

## 2. The $k-\epsilon$ Model (Two-Equation Model)

The $k-\epsilon$ (k-epsilon) model is the undisputed workhorse of industrial CFD. If you open a commercial CFD package, this is usually the default model.
It solves two extra equations to calculate $\mu_t$:
1.  **Turbulent Kinetic Energy ($k$):** The total energy contained in the turbulent fluctuations (how energetic the eddies are).
2.  **Turbulent Dissipation Rate ($\epsilon$):** The rate at which the turbulent kinetic energy is being destroyed by viscosity at the microscopic Kolmogorov scale.

By solving for $k$ and $\epsilon$, the model calculates the eddy viscosity as: $\mu_t = \rho C_\mu \frac{k^2}{\epsilon}$ (where $C_\mu$ is an empirical constant, usually 0.09).

**Strengths:** It is well-tested, stable, and performs excellently for internal flows (pipes, ducts, heat exchangers) and free shear flows (jets, mixing layers).
**Weaknesses:** It is notoriously bad at predicting flows with strong adverse pressure gradients, strong curvature, or boundary layer separation. It over-predicts turbulence near the wall, often failing to predict separation entirely.

## 3. The $k-\omega$ SST Model (Two-Equation Model)

Developed by F.R. Menter in 1994, the Shear Stress Transport (SST) $k-\omega$ model was designed to fix the fatal flaws of $k-\epsilon$.
It also solves two equations:
1.  **Turbulent Kinetic Energy ($k$).**
2.  **Specific Dissipation Rate ($\omega$):** The frequency at which the eddies decay. ($\omega \approx \epsilon/k$).

The genius of the SST model is that it is a *hybrid*.
*   Near the solid wall (inside the boundary layer), the $k-\omega$ formulation is incredibly accurate and highly sensitive to adverse pressure gradients.
*   Far away from the wall (in the free stream), standard $k-\omega$ becomes unstable. So, the SST model mathematically blends into the $k-\epsilon$ formulation in the outer region.

**Strengths:** It is currently the most popular model in modern aerodynamics and automotive design because it captures boundary layer separation and complex pressure gradients far better than almost any other RANS model.
**Weaknesses:** It is more computationally expensive and sensitive to the quality of the mesh near the wall.

## 4. Large Eddy Simulation (LES)

If RANS models (which rely entirely on modeled Eddy Viscosity) are failing, engineers turn to Large Eddy Simulation (LES).

Instead of time-averaging the equations, LES uses a spatial filter.
*   The large, energetic, geometry-dependent eddies are explicitly simulated by the Navier-Stokes equations on a very fine grid.
*   The microscopic, dissipating eddies (which are more universal and isotropic) are filtered out and replaced with a "Sub-grid Scale" (SGS) model.

**Strengths:** Incredibly accurate. It captures the unsteady, chaotic flapping of wakes, acoustic noise generation, and highly separated flows that RANS completely fails to predict.
**Weaknesses:** It requires massive computational power. LES must be run as an unsteady (time-dependent) simulation on a very fine 3D grid. It is often 100 to 1000 times more expensive than a RANS simulation.
