# Diffusion in Gases

Of all the phases of matter, diffusion in gases is the fastest and the most thoroughly understood from a theoretical standpoint. Because gas molecules are widely separated, they spend most of their time flying in straight lines through empty space, interrupted only by brief, perfectly elastic collisions with other molecules.

This allows us to use the **Kinetic Theory of Gases** to derive highly accurate mathematical models for the diffusion coefficient ($D_{AB}$).

## 1. The Kinetic Theory Derivation

Using a simplified hard-sphere model from kinetic theory, the diffusion coefficient of a binary gas mixture of species A and B can be estimated. The theory predicts that diffusivity depends on three main factors:
1.  **Velocity of the molecules:** Faster molecules diffuse faster. Average molecular velocity is proportional to $\sqrt{T/M}$, where $T$ is temperature and $M$ is molecular weight.
2.  **Mean Free Path ($\lambda$):** The average distance a molecule travels between collisions. A longer mean free path means faster diffusion. $\lambda$ is inversely proportional to pressure ($P$) and the collision cross-sectional area of the molecules.
3.  **Collision Frequency:** How often molecules hit each other.

Combining these concepts, early kinetic theory predicted:
$$ D_{AB} \propto \frac{T^{3/2}}{P \cdot d_{AB}^2 \sqrt{M_{AB}}} $$
Where $d_{AB}$ is the average collision diameter and $M_{AB}$ is a function of the molecular weights.

## 2. The Chapman-Enskog Equation

The most rigorous and widely used equation for predicting binary gas diffusivity at low to moderate pressures was derived independently by Sydney Chapman and David Enskog in the 1910s. They abandoned the "hard sphere" model and used the Lennard-Jones intermolecular potential to account for the attractive and repulsive forces between real molecules.

The Chapman-Enskog equation is:
$$ D_{AB} = \frac{0.001858 \cdot T^{3/2} \sqrt{\frac{1}{M_A} + \frac{1}{M_B}}}{P \cdot \sigma_{AB}^2 \cdot \Omega_D} $$

Where:
*   $D_{AB}$ = mass diffusivity ($\text{cm}^2/\text{s}$)
*   $T$ = absolute temperature ($\text{K}$)
*   $P$ = absolute pressure ($\text{atm}$)
*   $M_A, M_B$ = molecular weights of species A and B ($\text{g/mol}$)
*   $\sigma_{AB}$ = the "collision diameter" (Lennard-Jones parameter, in Angstroms $\text{Å}$)
*   $\Omega_D$ = the **collision integral** for diffusion (a dimensionless quantity of order 1, representing the deviation from the hard-sphere model).

**Key Takeaways from the Chapman-Enskog Equation:**
1.  **Temperature Dependence:** Diffusivity increases strongly with temperature ($D_{AB} \propto T^{3/2}$ or slightly higher due to $\Omega_D$). Hotter gases diffuse much faster.
2.  **Pressure Dependence:** Diffusivity is inversely proportional to pressure ($D_{AB} \propto 1/P$). If you double the pressure, the gas becomes twice as dense, the molecules collide twice as often, and diffusion is cut in half.
3.  **Molecular Weight:** Heavy molecules diffuse slower than light ones (Graham's Law of Effusion).

## 3. Knudsen Diffusion

The Chapman-Enskog equation assumes that a molecule's primary obstacle is *other molecules* (bulk diffusion). 
However, what happens if a gas is diffusing through a highly porous catalyst pellet with microscopic pores (e.g., $10$ to $100 \, \text{nm}$ in diameter)?

If the pore diameter ($d_{\text{pore}}$) is smaller than the mean free path ($\lambda$) of the gas, the gas molecules will collide with the solid walls of the pore far more frequently than they collide with each other. This regime is called **Knudsen Diffusion**.

The Knudsen diffusion coefficient ($D_{KA}$) is given by kinetic theory as:
$$ D_{KA} = \frac{d_{\text{pore}}}{3} \sqrt{\frac{8 R T}{\pi M_A}} $$

**Crucial Differences from Bulk Diffusion:**
1.  Knudsen diffusion is completely **independent of pressure**. Changing the pressure changes the number of gas-gas collisions, but gas-gas collisions are irrelevant here; only gas-wall collisions matter.
2.  It depends only on the properties of species A ($M_A$) and the pore size. It does not depend on the presence of species B.

In real catalyst pores, diffusion is often in the "transition regime" where both bulk diffusion and Knudsen diffusion are significant. The effective diffusivity is found by adding the resistances in series:
$$ \frac{1}{D_{\text{effective}}} = \frac{1}{D_{AB}} + \frac{1}{D_{KA}} $$
