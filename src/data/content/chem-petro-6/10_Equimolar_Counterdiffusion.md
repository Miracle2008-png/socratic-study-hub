# Equimolar Counterdiffusion

In many industrial mass transfer operations, the total pressure and temperature of the system remain perfectly constant. If we have a binary mixture of gases A and B, and species A is diffusing in one direction, species B must diffuse in the exact opposite direction to maintain constant total pressure and uniform total molar concentration.

When the molar flux of species A is exactly equal and opposite to the molar flux of species B, the process is called **Equimolar Counterdiffusion (EMCD)**.

## 1. The Classic Example: Distillation

The most common industrial example of EMCD is a binary distillation column. 
Imagine a bubble of vapour rising through a tray of liquid. The more volatile species A evaporates from the liquid and diffuses into the vapour bubble. Simultaneously, the less volatile species B condenses out of the vapour bubble and diffuses into the liquid.

Because the latent heats of vaporisation for chemically similar compounds are usually very close (Trouton's Rule), the evaporation of one mole of A requires the condensation of exactly one mole of B to maintain the energy balance.
Therefore, for every mole of A that moves *into* the vapour, one mole of B must move *out of* the vapour.

Mathematically:
$$ N_A = -N_B $$
Where $N_A$ is the total molar flux of A, and $N_B$ is the total molar flux of B.

## 2. Deriving the Flux Equation for EMCD

Recall the rigorous general flux equation for species A in a binary mixture:
$$ N_A = x_A (N_A + N_B) - c_{total} D_{AB} \frac{dx_A}{dz} $$

Substitute the EMCD condition ($N_A = -N_B$, or $N_A + N_B = 0$) into the general equation:
$$ N_A = x_A (0) - c_{total} D_{AB} \frac{dx_A}{dz} $$
$$ N_A = -c_{total} D_{AB} \frac{dx_A}{dz} $$

This is a profoundly important result: **In equimolar counterdiffusion, the bulk convective flow term vanishes entirely.** The total flux $N_A$ is strictly equal to the diffusive flux $J_A$. The fluid mixture as a whole is completely stationary; the molecules are just swapping places.

## 3. Integrating the EMCD Equation

For diffusion through a stagnant film of thickness $z$ (from point 1 to point 2) at steady state, $N_A$ is constant. We can separate variables and integrate:

$$ N_A \int_{z_1}^{z_2} dz = -c_{total} D_{AB} \int_{x_{A1}}^{x_{A2}} dx_A $$

$$ N_A (z_2 - z_1) = c_{total} D_{AB} (x_{A1} - x_{A2}) $$

For an ideal gas mixture, we can substitute $c_{total} = \frac{P}{RT}$ and $x_A = \frac{p_A}{P}$:

$$ N_A = \frac{D_{AB}}{RT (z_2 - z_1)} (p_{A1} - p_{A2}) $$

Where:
*   $p_{A1}$ is the partial pressure of A at the start of the diffusion path.
*   $p_{A2}$ is the partial pressure of A at the end of the diffusion path.

### The Concentration Profile
Because $N_A$ is constant and the equation is linear with respect to distance $z$, **the partial pressure (and concentration) profile of species A in equimolar counterdiffusion is a perfectly straight line** from $p_{A1}$ to $p_{A2}$. 

Simultaneously, the profile for species B is a perfectly straight line sloping in the opposite direction.
