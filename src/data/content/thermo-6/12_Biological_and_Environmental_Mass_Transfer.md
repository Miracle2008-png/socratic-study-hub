# Biological and Environmental Mass Transfer

The principles of mass transfer developed by chemical engineers for distillation columns and catalytic reactors apply equally to the natural world. Mass transfer governs how lungs breathe, how kidneys filter, how drugs enter the bloodstream, and how pollutants disperse in the environment.

## 1. Mass Transfer in the Lungs

The human respiratory system is a highly optimized mass transfer device designed to exchange oxygen ($O_2$) and carbon dioxide ($CO_2$).

**The Alveoli:**
The lungs branch into roughly 500 million microscopic air sacs called alveoli, wrapped in a dense network of capillaries. This provides an enormous surface area (~70 m²) for mass transfer within a small volume.

**The Resistance Network:**
Oxygen must cross several barriers to get from the air into a red blood cell:
1.  Diffusion through the alveolar gas space.
2.  Diffusion across the alveolar membrane (tissue).
3.  Diffusion across the capillary endothelium.
4.  Diffusion through blood plasma.
5.  Diffusion across the red blood cell membrane.
6.  Chemical reaction (binding with hemoglobin).

This is a classic series-resistance mass transfer problem. The governing equation is Fick's Law across a membrane:
$$ \dot{V}_{O_2} = D_L (P_{A,O_2} - P_{c,O_2}) $$
Where $D_L$ is the diffusing capacity of the lung (analogous to the overall mass transfer coefficient $U_m \times Area$), and the driving force is the partial pressure difference between the alveolar air and the capillary blood. Diseases like emphysema (destruction of alveoli, reducing area) or pulmonary fibrosis (thickening of the membrane, increasing resistance) drastically reduce $D_L$.

## 2. Pharmacokinetics: Drug Delivery

Pharmacokinetics is the study of how a drug is absorbed, distributed, metabolized, and excreted by the body. All of these are mass transfer processes.

**Transdermal Patches:**
A patch delivers drugs (e.g., nicotine, fentanyl) through the skin. The stratum corneum (the outermost layer of dead skin cells) is highly hydrophobic and represents the dominant mass transfer resistance.
The drug release is modeled as transient diffusion from a reservoir (the patch) through a membrane (the skin) into a semi-infinite sink (the bloodstream). Formulations often include chemical permeation enhancers to artificially increase the skin's diffusivity $D_{AB}$ for the drug.

**Controlled Release Pills:**
Instead of a drug dissolving instantly (causing a spike in blood concentration followed by a rapid crash), controlled-release pills use a porous polymer matrix. The drug must slowly diffuse out of the tortuous pore network of the pill, providing a steady, zero-order release rate into the gastrointestinal tract over 12–24 hours.

## 3. Environmental Dispersion

When a pollutant is released into a river or the atmosphere, it spreads via two mechanisms:
*   **Advection:** Transport by the bulk motion of the fluid (the river current or the wind).
*   **Dispersion:** Spreading due to turbulence and molecular diffusion.

**The Advection-Diffusion Equation:**
$$ \frac{\partial C}{\partial t} + \vec{u} \cdot \nabla C = \nabla \cdot (D_{eff} \nabla C) + R $$
Where $\vec{u}$ is the fluid velocity, $D_{eff}$ is the effective turbulent dispersion coefficient (which is orders of magnitude larger than molecular diffusivity $D_{AB}$), and $R$ represents source/sink terms (e.g., chemical degradation).

**The Gaussian Plume Model:**
Used to predict the concentration of air pollution downwind from a smokestack. It assumes steady-state advection by the wind and Gaussian (bell-curve) dispersion in the cross-wind and vertical directions.
It predicts that the ground-level concentration of a pollutant depends strongly on the wind speed and the atmospheric stability (how much thermal turbulence exists to mix the plume).

## 4. Ocean-Atmosphere CO₂ Exchange

The oceans are the largest carbon sink on Earth, absorbing about 25% of anthropogenic $CO_2$ emissions.

The mass transfer of $CO_2$ across the air-sea interface is modeled by the two-film theory:
$$ Flux = K_L (C_{water}^* - C_{water}) $$
Where $C_{water}^*$ is the equilibrium concentration of $CO_2$ in water (governed by Henry's Law and the atmospheric $CO_2$ level), and $C_{water}$ is the actual concentration.

*   Because $CO_2$ reacts with water to form carbonic acid (which lowers ocean pH—ocean acidification), the effective solubility is enhanced.
*   The mass transfer coefficient $K_L$ is a strong function of wind speed, which generates waves, breaking the surface film and increasing turbulence and interfacial area. Accurately modeling this mass transfer coefficient is a critical source of uncertainty in global climate models.
