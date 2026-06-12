# Concept Drills & Examination Problems

Test your understanding of Mass Transfer and Diffusion with these conceptual questions and engineering calculations.

## Drill 1: Identifying the Limiting Resistance
A chemical plant is designed to absorb highly soluble $SO_2$ gas into water in a packed tower. The plant manager wants to increase the absorption rate by 30%. He proposes replacing the liquid pumps to double the water flow rate, arguing that more water will "pull" the $SO_2$ in faster.
1. Using the Two-Film Theory equation ($\frac{1}{K_y} = \frac{1}{k_y} + \frac{m}{k_x}$), explain why his proposal will likely fail.
2. What operational change should the manager make instead to achieve the 30% increase?

## Drill 2: Unimolecular vs. Equimolar Diffusion
An open beaker of liquid ethanol is sitting in a perfectly still, isothermal room. Ethanol vapour evaporates and diffuses through the air to the top of the beaker.
1. Is this process equimolar counterdiffusion or unimolecular diffusion? Justify your answer based on the fluxes ($N_A$ and $N_B$).
2. The distance from the liquid surface to the top of the beaker is $10 \text{ cm}$. If the room pressure drops drastically (e.g., a massive storm moves in), but the temperature remains perfectly constant, what happens to the diffusion coefficient ($D_{AB}$) of the ethanol in air? What happens to the overall evaporation rate?

## Drill 3: Fick's Second Law and Case Hardening
A steel gear (initially containing 0.1 wt% Carbon) is placed in a high-temperature carburising furnace. The furnace atmosphere is rich in carbon-containing gases, maintaining the surface of the gear at a constant 1.0 wt% Carbon.
1. Does the diffusion of carbon into the iron lattice primarily occur via vacancy diffusion or interstitial diffusion? Why?
2. If it takes 2 hours for the carbon concentration to reach 0.4 wt% at a depth of 0.5 mm, how long will it take to achieve that exact same 0.4 wt% concentration at a depth of 1.0 mm? (Hint: Use the penetration depth approximation $z \propto \sqrt{D t}$).

## Drill 4: The Chilton-Colburn Analogy
A mechanical engineer has perfectly characterised the heat transfer performance of a new, highly turbulent pipe design using water. She has derived an empirical equation for the Nusselt number ($Nu = 0.05 Re^{0.7} Pr^{0.4}$).
You are a chemical engineer who wants to use this exact same pipe design to dissolve a solid coating off the inner walls using a liquid solvent. 
Write the empirical equation for the Sherwood number ($Sh$) that you can use to predict the mass transfer coefficient ($k_c$), assuming the Chilton-Colburn analogy holds perfectly.

---

### Solutions

**Drill 1:**
1. Because $SO_2$ is highly soluble in water, the Henry's Law constant ($m$) is very small. Therefore, the liquid resistance term ($\frac{m}{k_x}$) approaches zero. The process is **gas-film controlled** ($K_y \approx k_y$). Doubling the water flow rate increases $k_x$, but since the liquid film isn't the bottleneck anyway, it will have almost zero effect on the overall mass transfer rate.
2. He should increase the gas velocity (e.g., install a larger blower). This increases turbulence in the gas phase, increasing $k_y$, which directly increases $K_y$ and the overall absorption rate.

**Drill 2:**
1. It is **unimolecular diffusion** (diffusion through a stagnant gas). The flux of ethanol ($N_A$) is positive upwards. The air cannot dissolve into the liquid ethanol, so it has nowhere to go; its net flux is zero ($N_B = 0$).
2. According to the Chapman-Enskog theory, diffusivity in gases is inversely proportional to pressure ($D_{AB} \propto 1/P$). Therefore, if the pressure drops, the diffusion coefficient **increases**. Consequently, the evaporation rate will **increase**.

**Drill 3:**
1. **Interstitial diffusion.** Carbon atoms are significantly smaller than Iron atoms and fit into the empty spaces (interstices) between the iron atoms in the crystal lattice. This is much faster than waiting for iron vacancies.
2. The penetration depth is proportional to the square root of time: $z \propto \sqrt{t}$. To double the depth (from 0.5 mm to 1.0 mm), you must increase the time by a factor of $2^2 = 4$. Therefore, it will take $2 \text{ hours} \times 4 = \mathbf{8 \text{ hours}}$.

**Drill 4:**
The Chilton-Colburn analogy relies on the symmetry of the dimensionless numbers. You simply replace the heat transfer dimensionless groups with their exact mass transfer analogues.
*   Replace $Nu$ with $Sh$.
*   Replace $Pr$ with $Sc$.
The Reynolds number ($Re$) represents the bulk fluid hydrodynamics, which is identical for both cases, so it remains unchanged.
The resulting mass transfer equation is:
**$Sh = 0.05 Re^{0.7} Sc^{0.4}$**

## Mass Transfer Summary

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "coef", "data": { "label": "MT Coefficients", "icon": "Layers", "description": "Films & Analogies." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "gas", "data": { "label": "Gas Regimes", "icon": "Wind", "description": "Bulk vs Knudsen." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "liq", "data": { "label": "Dense Media", "icon": "Box", "description": "Viscosity & Lattice barriers." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "cases", "data": { "label": "Limiting Cases", "icon": "Activity", "description": "EMCD & Unimolecular." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": []
}
```
