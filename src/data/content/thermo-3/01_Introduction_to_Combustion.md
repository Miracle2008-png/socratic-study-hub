# Introduction to Combustion

Combustion is a rapid chemical reaction between a fuel and an oxidizer (almost always oxygen from air) that releases large amounts of thermal energy. It is the dominant source of energy for transportation, electricity generation, heating, and industrial processes worldwide — responsible for over 80% of global energy consumption.

Understanding combustion thermodynamics is essential for designing engines, gas turbines, furnaces, and understanding pollutant formation.

## 1. Types of Fuels

**1. Hydrocarbon Fuels (Most Common):**
Composed of carbon (C) and hydrogen (H) atoms. Examples include:
*   **Methane (CH₄):** The primary component of natural gas. Simplest hydrocarbon.
*   **Octane (C₈H₁₈):** A primary reference fuel representing gasoline.
*   **Dodecane (C₁₂H₂₆):** Representative of diesel fuel.
*   **Propane (C₃H₈):** LPG (liquefied petroleum gas). Used in grills and rural heating.

**2. Hydrogen (H₂):**
Burns with zero carbon dioxide emissions (water is the only product). Increasingly important for decarbonization of heavy transport and industry.

**3. Alcohols (Methanol, Ethanol):**
Contain oxygen in their molecular structure. Slightly lower heating value per kg than pure hydrocarbons, but excellent antiknock properties for gasoline engines.

**4. Coal:**
Primarily carbon with varying hydrogen, sulfur, and ash content. Used almost exclusively for large-scale power generation. High carbon intensity makes it the most CO₂-intensive fuel.

## 2. Stoichiometric Combustion

The **stoichiometric** (or theoretical) combustion reaction is the idealized reaction where exactly enough oxygen is supplied to completely burn all the fuel — no excess fuel and no excess oxygen remain.

**General reaction for a hydrocarbon fuel ($C_x H_y$):**
$$ C_x H_y + \left(x + \frac{y}{4}\right) O_2 \rightarrow x CO_2 + \frac{y}{2} H_2O $$

**Example: Methane combustion:**
$$ CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O \quad \Delta H_{rxn} = -802 \text{ kJ/mol} $$

**Combustion with Air:**
Air is approximately 21% O₂ and 79% N₂ by volume. For every mole of O₂ needed, we must supply 3.76 moles of N₂ (which is inert — it does not react but absorbs heat). For methane:
$$ CH_4 + 2O_2 + 2(3.76)N_2 \rightarrow CO_2 + 2H_2O + 7.52N_2 $$

The nitrogen in the products carries energy out of the combustion chamber as hot exhaust, reducing efficiency.

## 3. Equivalence Ratio and Air-Fuel Ratio

**Air-Fuel Ratio (AFR):**
$$ AFR = \frac{\text{mass of air supplied}}{\text{mass of fuel supplied}} $$

Stoichiometric AFR for methane: ~17.2 (by mass). For gasoline: ~14.7. For diesel: ~14.5.

**Equivalence Ratio ($\phi$):**
A normalized way to express the fuel-air mixture composition, independent of fuel type:
$$ \phi = \frac{(AFR)_{stoichiometric}}{(AFR)_{actual}} = \frac{\text{fuel-to-air ratio, actual}}{\text{fuel-to-air ratio, stoichiometric}} $$

*   **$\phi = 1$ (Stoichiometric):** Perfectly balanced mixture.
*   **$\phi < 1$ (Lean):** Excess air. Not enough fuel. Complete combustion of all fuel; unreacted O₂ in exhaust. Lower flame temperature. Used in gas turbines and lean-burn engines for low NOₓ.
*   **$\phi > 1$ (Rich):** Excess fuel. Not enough oxygen. Incomplete combustion; CO and unburned hydrocarbons in exhaust. Higher flame temperature (up to stoichiometric). Used in rocket engines (rich combustion to prevent component overheating).
