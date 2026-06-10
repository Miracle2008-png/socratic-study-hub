# Introduction to Equilibrium Separations

Chemical engineers rarely encounter pure substances in nature. Almost every raw material (crude oil, natural gas, biomass) and reactor effluent is a complex mixture of chemicals. The ability to separate these mixtures into pure, salable products is the hallmark of the chemical process industry.

While mechanical separations (like filtration or centrifugation) separate phases (solid from liquid), chemical separations rely on **thermodynamics and phase equilibrium** to separate homogeneous mixtures (liquid from liquid, or gas from gas).

## 1. The Principle of Phase Creation

To separate a homogeneous liquid mixture of species A and B, we must force the mixture into a two-phase state. 

This is typically done by adding or removing energy (heat) or by changing the pressure.
*   **Vaporisation/Condensation:** Heating the liquid until it boils creates a second phase (a vapour). Because species A and species B have different boiling points (different volatilities), the composition of the new vapour phase will be fundamentally different from the composition of the remaining liquid phase.
*   This difference in composition between two equilibrium phases is the driving force for all equilibrium separations.

## 2. Common Separation Processes

The chemical process industry relies on a core set of equilibrium unit operations:

1.  **Distillation:** The most ubiquitous and energy-intensive separation process in the world. It separates liquid mixtures based on differences in boiling point (volatility). A vapour phase is created from a liquid phase by applying heat.
2.  **Absorption:** A gas mixture is contacted with a liquid solvent. One component of the gas dissolves preferentially into the liquid. (e.g., removing $CO_2$ from natural gas using an amine solution).
3.  **Stripping (Desorption):** The exact opposite of absorption. A liquid mixture is contacted with a stripping gas, which pulls a dissolved solute out of the liquid.
4.  **Liquid-Liquid Extraction:** A liquid mixture is contacted with a second, immiscible liquid solvent. A solute selectively transfers from the first liquid into the second liquid based on differential solubility.
5.  **Adsorption:** A fluid mixture is passed over a highly porous solid (like activated carbon or zeolite). Specific molecules stick (adsorb) to the massive internal surface area of the solid.

## 3. The Concept of an Equilibrium Stage

To mathematically model these massive industrial towers, engineers break them down into hypothetical building blocks called **equilibrium stages** (or theoretical plates).

An ideal equilibrium stage is defined by three rules:
1.  Two distinct phases (e.g., a liquid and a vapour) enter the stage and are violently mixed together.
2.  Mass and heat transfer occur rapidly until the two phases reach perfect thermodynamic equilibrium.
3.  The two phases are then separated and leave the stage.

By definition, the vapour stream and the liquid stream leaving a single equilibrium stage are in perfect equilibrium with each other. 
In reality, no physical tray in a distillation column perfectly achieves equilibrium. We account for this using **tray efficiency** (often 60% to 80%). If a calculation dictates that 10 theoretical stages are required, and tray efficiency is 70%, the engineer must physically build a column with $10 / 0.70 \approx 15$ actual trays.

## 4. The Separation Factor

The ease of separating species A from species B is quantified by a generic separation factor, $\alpha$.
For distillation, this is called the **relative volatility** ($\alpha_{AB}$).

*   If $\alpha = 1.0$, the two species are identical in terms of phase preference. They cannot be separated by this thermodynamic method. (An azeotrope has formed).
*   If $\alpha = 1.1$, separation is possible but incredibly difficult, requiring hundreds of equilibrium stages and immense energy.
*   If $\alpha > 2.0$, separation is relatively easy and requires few stages.

The entire goal of separation design is finding operating conditions (pressures, temperatures) or solvents that maximise this separation factor.
