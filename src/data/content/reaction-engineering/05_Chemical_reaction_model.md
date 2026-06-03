# Chemical reaction model

Chemical reaction models transform physical knowledge into a mathematical formulation that can be utilized in computational simulation of practical problems in chemical engineering. Computer simulation provides the flexibility to study chemical processes under a wide range of conditions. Modeling of a chemical reaction involves solving conservation equations describing convection, diffusion, and reaction source for each component species.

## Species transport equation ${\frac {\partial (\rho Y_{i})}{\partial t}}+\nabla \cdot (\rho {\vec {v}}Y_{i})=-\nabla \cdot {\vec {J}}_{i}+R_{i}$
Ri is the net rate of production of species i by chemical reaction and Si is the rate of creation by addition from the dispersed phase and the user defined source. Ji is the diffusion flux of species i, which arises due to concentration gradients and differs in both laminar and turbulent flows. In turbulent flows, computational fluid dynamics also considers the effects of turbulent diffusivity. The net source of chemical species i due to reaction, Ri which appeared as the source term in the species transport equation is computed as the sum of the reaction sources over the NR reactions among the species.

## Reaction models

These reaction rates R can be calculated by following models:

Laminar finite rate model

Eddy dissipation model

Eddy dissipation concept

### Laminar finite rate model

The laminar finite rate model computes the chemical source terms using the Arrhenius expressions and ignores turbulence fluctuations. This model provides with the exact solution for laminar flames but gives inaccurate solution for turbulent flames, in which turbulence highly affects the chemistry reaction rates, due to highly non-linear Arrhenius chemical kinetics. However this model may be accurate for combustion with small turbulence fluctuations, for example supersonic flames.

### Eddy dissipation model

The eddy dissipation model or the Magnussen model, based on the work of Magnussen and Hjertager, is a turbulent-chemistry reaction model. Most fuels are fast burning and the overall rate of reaction is controlled by turbulence mixing. In the non-premixed flames, turbulence slowly mixes the fuel and oxidizer into the reaction zones where they burn quickly. In premixed flames the turbulence slowly mixes cold reactants and hot products into the reaction zones where reaction occurs rapidly. In such cases the combustion is said to be mixing-limited, and the complex and often unknown chemical kinetics can be safely neglected. In this model, the chemical reaction is governed by large eddy mixing time scale. Combustion initiates whenever there is turbulence present in the flow. It does not need an ignition source to initiate the combustion. This type of model is valid for the non-premixed combustion, but for the premixed flames the reactant is assumed to burn at the moment it enters the computation model, which is a shortcoming of this model as in practice the reactant needs some time to get to the ignition temperature to initiate the combustion.

### Eddy dissipation concept

The eddy dissipation concept (EDC) model is an extension of the eddy dissipation model to include detailed chemical mechanism in turbulent flows. The EDC model attempts to incorporate the significance of fine structures in a turbulent reacting flow in which combustion is important.  EDC has been proven efficient without the need for changing the constants for a great variety of premixed and diffusion controlled combustion problems, both where the chemical kinetics is faster than the overall fine structure mixing as well as in cases where the chemical kinetics has a dominating influence.
