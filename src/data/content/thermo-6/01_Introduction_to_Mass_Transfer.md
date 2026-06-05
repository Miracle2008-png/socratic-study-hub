# Introduction to Mass Transfer

Thermodynamics tells us the equilibrium state. Heat transfer tells us how energy moves due to temperature differences. **Mass transfer** tells us how chemical species move due to concentration differences. It is the fundamental process behind evaporation, drying, distillation, absorbing CO₂ from the atmosphere, and how oxygen reaches our blood.

## 1. The Analogy Between Heat and Mass Transfer

Mass transfer is mathematically and physically analogous to heat transfer. If you understand conduction and convection, you already understand the framework of mass transfer.

| Property | Heat Transfer | Mass Transfer |
| :--- | :--- | :--- |
| **What is moving?** | Thermal Energy | Chemical Species (Mass or Moles) |
| **Driving Force** | Temperature Gradient ($\nabla T$) | Concentration Gradient ($\nabla C_A$) |
| **Diffusive Flux Law** | Fourier's Law ($q'' = -k \nabla T$) | Fick's First Law ($J_A^* = -D_{AB} \nabla C_A$) |
| **Transport Property** | Thermal Diffusivity ($\alpha$) | Mass Diffusivity ($D_{AB}$) |
| **Convective Rate Law** | Newton's Law of Cooling ($q'' = h(T_s - T_\infty)$) | Convective Mass Transfer ($N_A'' = h_m(C_{A,s} - C_{A,\infty})$) |

## 2. Concentrations, Velocities, and Fluxes

Because mass transfer deals with mixtures, we must be precise about how we define "concentration" and "velocity." Consider a binary mixture of species A and species B.

**Concentrations:**
*   **Mass density ($\rho_A$):** Mass of A per unit volume (kg/m³). Total density $\rho = \rho_A + \rho_B$.
*   **Molar concentration ($C_A$):** Moles of A per unit volume (kmol/m³). Total concentration $C = C_A + C_B$.
*   **Mass fraction ($m_A$):** $\rho_A / \rho$. Note that $m_A + m_B = 1$.
*   **Mole fraction ($x_A$ or $y_A$):** $C_A / C$. Note that $x_A + x_B = 1$.

**Velocities:**
When species A moves relative to species B, what is the "velocity" of the fluid?
*   **Mass-average velocity ($\vec{v}$):** The velocity that would be measured by a pitot tube. It is the velocity of the center of mass of the fluid element.
    $$ \vec{v} = m_A \vec{v}_A + m_B \vec{v}_B $$
*   **Molar-average velocity ($\vec{V}^*$):** The velocity weighted by moles instead of mass.
    $$ \vec{V}^* = x_A \vec{v}_A + x_B \vec{v}_B $$

**Fluxes:**
Flux is the amount of material crossing a unit area per unit time. We can define flux relative to stationary coordinates, or relative to the moving fluid.
*   **Absolute molar flux ($\vec{N}_A$):** Moles of A crossing a stationary plane per unit area per unit time ($kmol/m^2 \cdot s$).
    $$ \vec{N}_A = C_A \vec{v}_A $$
*   **Diffusive molar flux ($\vec{J}_A^*$):** Moles of A crossing a plane that is moving at the molar-average velocity $\vec{V}^*$. This represents transport due *purely* to concentration gradients, independent of bulk fluid motion.
    $$ \vec{J}_A^* = C_A (\vec{v}_A - \vec{V}^*) $$

The relationship between them is fundamental:
$$ \vec{N}_A = \vec{J}_A^* + C_A \vec{V}^* $$
*(Absolute Flux) = (Diffusive Flux) + (Bulk Convective Flux)*

## 3. Fick's First Law of Diffusion

Adolf Fick (1855) formulated the law governing pure diffusion (the $\vec{J}_A^*$ term), analogous to Fourier's law of conduction.

For a binary mixture of A and B at constant total temperature and pressure:
$$ \vec{J}_A^* = -C D_{AB} \nabla x_A $$

Where:
*   $\vec{J}_A^*$ is the molar diffusive flux of species A ($kmol/m^2 \cdot s$).
*   $C$ is the total molar concentration ($kmol/m^3$).
*   $D_{AB}$ is the **binary diffusion coefficient** or **mass diffusivity** of A diffusing through B ($m^2/s$).
*   $\nabla x_A$ is the gradient of the mole fraction of A.

The negative sign indicates that species A diffuses from regions of high concentration to regions of low concentration.

## 4. The Diffusion Coefficient ($D_{AB}$)

The mass diffusivity dictates how quickly one species diffuses through another. It depends on temperature, pressure, and the molecular properties of the two species.

*   **Gases:** Diffusion is rapid. $D_{AB} \sim 10^{-5} \text{ m}^2\text{/s}$. Follows kinetic theory roughly as $T^{3/2} / P$.
*   **Liquids:** Diffusion is much slower due to molecules being packed tightly. $D_{AB} \sim 10^{-9} \text{ m}^2\text{/s}$. Given by the Stokes-Einstein equation ($D \propto T / \mu$).
*   **Solids:** Extremely slow, often taking years or centuries at room temperature. $D_{AB} \sim 10^{-14} \text{ to } 10^{-20} \text{ m}^2\text{/s}$. Highly dependent on temperature (Arrhenius behavior) and crystal lattice structure.
