# Phase Equilibrium and Separation

Before mass transfer can happen between two phases (like a liquid and a gas), we must know the destination: the state of equilibrium. If a system is not in equilibrium, a concentration driving force exists, and mass transfer occurs. Phase equilibrium is the foundation of separation processes like distillation, absorption, and extraction.

## 1. The Condition of Phase Equilibrium

Consider two phases, $\alpha$ (e.g., a liquid) and $\beta$ (e.g., a vapor), in contact.
Thermodynamics dictates that for species $i$ to be in equilibrium between the two phases, its **chemical potential** ($\mu$) must be equal in both phases:
$$ \mu_i^\alpha = \mu_i^\beta $$

Alternatively, engineers often use **fugacity** ($f$), which has units of pressure and acts as a "corrected" partial pressure. At equilibrium:
$$ \hat{f}_i^\alpha = \hat{f}_i^\beta $$
The fugacity of component $i$ in the liquid phase equals its fugacity in the vapor phase.

## 2. Vapor-Liquid Equilibrium (VLE)

VLE is the basis of distillation. We relate the composition of the liquid phase (mole fraction $x_i$) to the composition of the vapor phase (mole fraction $y_i$).

**Raoult's Law (Ideal Solutions):**
For chemically similar liquids (e.g., benzene and toluene), the molecules interact with each other identically. In this ideal case, the partial pressure $p_i$ of component $i$ in the vapor is proportional to its mole fraction in the liquid and its pure-component saturation vapor pressure ($P_i^{sat}$):

$$ y_i P_{total} = x_i P_i^{sat}(T) $$

*   $y_i P_{total}$ is the partial pressure in the vapor phase.
*   $P_i^{sat}(T)$ is a strong function of temperature, given by the Antoine equation.
*   The component with the higher $P_i^{sat}$ is more volatile. It will have a higher concentration in the vapor ($y_i > x_i$), which is why boiling a mixture separates the components.

**Relative Volatility ($\alpha_{12}$):**
A measure of how easy it is to separate two components by distillation.
$$ \alpha_{12} = \frac{y_1/x_1}{y_2/x_2} = \frac{P_1^{sat}}{P_2^{sat}} \quad \text{(for ideal mixtures)} $$
If $\alpha_{12} = 1$, the vapor has the exact same composition as the liquid. Distillation is impossible.

## 3. Non-Ideal Solutions and Azeotropes

Most liquid mixtures are not ideal. The molecules may attract each other strongly (e.g., water and ethanol) or repel each other. We introduce the **activity coefficient** ($\gamma_i$) to correct Raoult's law:

$$ y_i P_{total} = \gamma_i x_i P_i^{sat}(T) $$

*   If $\gamma_i > 1$ (Positive deviation): The molecules "dislike" each other compared to their pure state. They escape into the vapor phase easier than Raoult's law predicts.
*   If $\gamma_i < 1$ (Negative deviation): Strong intermolecular forces (like hydrogen bonding) keep the molecules in the liquid.

**Azeotropes:**
In highly non-ideal mixtures, the vapor curve and liquid curve on a T-x-y diagram can touch. At this specific composition and temperature, the vapor produced has the exact same composition as the boiling liquid ($y_i = x_i$). This is an azeotrope.
*   **Ethanol/Water:** Forms a positive azeotrope at ~95.6% ethanol. No matter how many distillation stages you use, you cannot produce 100% pure ethanol from a water mixture via simple distillation; it will get "stuck" at 95.6%. Special techniques (azeotropic distillation, molecular sieves) are required to break the azeotrope.

## 4. Gas-Liquid Equilibrium (Absorption)

When separating a dilute gas from a gas mixture by absorbing it into a liquid solvent (e.g., removing $CO_2$ from flue gas using liquid amines), the solute concentration in the liquid is usually very low.

In this dilute regime, we use **Henry's Law**:
$$ p_i = H_i x_i $$
Where $p_i$ is the partial pressure of the gas in the vapor phase, $x_i$ is the mole fraction in the liquid, and $H_i$ is the Henry's law constant (which depends strongly on temperature and the specific solute-solvent pair).

*   A large $H_i$ (e.g., oxygen in water) means the gas is poorly soluble. A high pressure is required to force even a small amount into the liquid.
*   A small $H_i$ (e.g., ammonia in water) means the gas is highly soluble.

If a gas stream with partial pressure $p_A$ contacts a liquid where the equilibrium partial pressure is $p_A^* = H_A x_A$, the **driving force** for mass transfer into the liquid is $(p_A - p_A^*)$. When $p_A = p_A^*$, absorption stops.
