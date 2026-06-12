# Fick's First Law of Diffusion

In 1855, the physiologist Adolf Fick mathematically quantified molecular diffusion by drawing a direct analogy to Fourier's Law of heat conduction. **Fick's First Law** defines the rate at which a species diffuses through a medium at steady state.

## 1. The Mathematical Formulation

For a binary mixture of species A and B, the molar diffusion flux of species A in the z-direction, denoted as $J_{A,z}$, is given by:

$$ J_{A,z} = -D_{AB} \frac{dC_A}{dz} $$

Where:
*   $J_{A,z}$ is the molar diffusion flux of species A ($\text{mol} / \text{m}^2\text{s}$). It is a vector quantity; the flux represents the moles of A passing through a unit area per unit time.
*   $D_{AB}$ is the **mass diffusivity** or **diffusion coefficient** of species A in species B ($\text{m}^2/\text{s}$).
*   $C_A$ is the molar concentration of species A ($\text{mol}/\text{m}^3$).
*   $dC_A/dz$ is the concentration gradient in the z-direction ($\text{mol}/\text{m}^4$).

**The Negative Sign:** Just like in Fourier's Law ($q = -k \cdot dT/dx$), the negative sign is critical. It indicates that diffusion occurs strictly "downhill" — from a region of high concentration to a region of low concentration. If concentration is increasing in the +z direction ($dC_A/dz$ is positive), the flux will be in the -z direction.

## 2. The Diffusion Coefficient ($D_{AB}$)

The diffusion coefficient $D_{AB}$ is the mass-transfer analogue to thermal conductivity ($k$) in heat transfer and kinematic viscosity ($\nu$) in fluid mechanics.

*   **In Gases:** Diffusion is rapid because molecules are far apart and travel in straight lines between collisions. $D_{AB} \approx 10^{-5} \, \text{m}^2/\text{s}$.
*   **In Liquids:** Molecules are tightly packed. To diffuse, a molecule must "squeeze" past its neighbours. $D_{AB} \approx 10^{-9} \, \text{m}^2/\text{s}$. (Diffusion in liquids is roughly 10,000 times slower than in gases).
*   **In Solids:** Molecules are locked in a rigid lattice. Diffusion requires breaking bonds or finding vacancies. $D_{AB} \approx 10^{-14}$ to $10^{-10} \, \text{m}^2/\text{s}$.

## 3. Total Flux vs. Diffusive Flux

Fick's First Law only describes the flux due to *random molecular motion relative to the bulk fluid*. 

If the entire fluid mixture is flowing down a pipe with an average velocity $v$, species A is being carried along by the bulk flow. The **total molar flux** of species A relative to a stationary observer, denoted $N_A$, is the sum of the convective flux and the diffusive flux:

$$ N_A = C_A v + J_A $$

Where $C_A v$ is the bulk convective flux. 

Since the bulk velocity $v$ is determined by the total flux of all species ($v = (N_A + N_B)/C_{\text{total}}$), we can rewrite the equation in its most rigorous form for a binary mixture:

$$ N_A = x_A (N_A + N_B) - C_{\text{total}} D_{AB} \frac{dx_A}{dz} $$

Where $x_A$ is the mole fraction of species A. This equation is the foundation for almost all advanced mass transfer calculations. It explicitly shows that species A moves due to the bulk movement of the mixture $x_A(N_A + N_B)$ *plus* the diffusion of A relative to the mixture.

## 4. Analogy to Heat and Momentum Transfer

Fick's First Law completes the triad of phenomenal transport equations:

| Phenomenon | Law | Equation | Diffusivity Property |
| :--- | :--- | :--- | :--- |
| **Momentum Transfer** | Newton's Law of Viscosity | $\tau = -\nu \frac{d(\rho v_x)}{dy}$ | Kinematic Viscosity ($\\nu$) |
| **Heat Transfer** | Fourier's Law of Conduction | $q = -\alpha \frac{d(\rho c_p T)}{dx}$ | Thermal Diffusivity ($\\alpha$) |
| **Mass Transfer** | Fick's First Law of Diffusion | $J_A = -D_{AB} \frac{dC_A}{dz}$ | Mass Diffusivity ($D_{AB}$) |

Notice how they all take the exact same form: $\text{Flux} = -(\text{Diffusivity Property}) \times \text{Gradient}$.

## 5. Transport Analogies

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "fick", "data": { "label": "Fick's (Mass)", "icon": "Activity", "description": "Diffusivity D_AB." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "four", "data": { "label": "Fourier's (Heat)", "icon": "Thermometer", "description": "Thermal Diffusivity alpha." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "newt", "data": { "label": "Newton's (Momentum)", "icon": "Move", "description": "Kinematic Viscosity nu." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": []
}
```
