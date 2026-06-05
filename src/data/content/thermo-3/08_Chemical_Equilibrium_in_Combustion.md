# Chemical Equilibrium in Combustion

At very high temperatures, the simple assumption that combustion produces only CO₂ and H₂O breaks down. The products partially dissociate back into CO, H₂, O₂, OH, H, O, N, NO, and other radical species. Calculating the true equilibrium composition at high temperature requires thermochemical equilibrium analysis.

## 1. Why Equilibrium Matters in Combustion

**At 1,000 K:** CO₂ and H₂O are essentially stable. The assumption of complete combustion is accurate.

**At 2,500 K (stoichiometric methane/air AFT):** A significant fraction of CO₂ has dissociated back to CO + ½O₂, and H₂O has dissociated to H₂ + ½O₂, OH, H, and O. Ignoring this gives an AFT that is 200–400 K too high.

**Practical Implications:**
*   Accurate cycle analysis for high-performance engines and gas turbines.
*   NOₓ formation prediction (NO equilibrium at flame temperature).
*   CO emissions prediction (whether CO oxidizes to CO₂ as gases cool).
*   Rocket nozzle performance calculations.

## 2. The Equilibrium Constant ($K_p$)

For any reversible reaction at equilibrium, the ratio of product to reactant concentrations (or partial pressures) follows a definite relationship governed by the **Equilibrium Constant ($K_p$)**.

For the general reaction: $aA + bB \rightleftharpoons cC + dD$

$$ K_p(T) = \frac{P_C^c \cdot P_D^d}{P_A^a \cdot P_B^b} $$

Where $P_i$ are the partial pressures of each species (in atm or bar). Crucially, $K_p$ is a **function of temperature only** — it does not depend on pressure.

**Van't Hoff Equation:** How $K_p$ changes with temperature:
$$ \frac{d(\ln K_p)}{dT} = \frac{\Delta H_{rxn}}{RT^2} $$

For an exothermic reaction ($\Delta H_{rxn} < 0$): As temperature increases, $K_p$ decreases — equilibrium shifts toward the reactants (Le Chatelier's Principle). More dissociation at higher temperature.

**Example: CO₂ Dissociation:**
$CO_2 \rightleftharpoons CO + \frac{1}{2}O_2 \quad \Delta H_{rxn} = +283 \text{ kJ/mol}$

At 1,500 K: $K_p \approx 3 \times 10^{-7}$ → essentially no dissociation.
At 2,500 K: $K_p \approx 0.14$ → substantial dissociation (~10–15% CO₂ → CO).
At 3,000 K: $K_p \approx 2.5$ → majority has dissociated.

## 3. Adiabatic Flame Temperature with Dissociation

Finding the true AFT requires solving the energy equation and the equilibrium equations simultaneously:

**System of Equations:**
1.  **Energy balance:** The enthalpy of the products (at $T_{AFT}$, including their actual composition) equals the enthalpy of the reactants.
2.  **Atom balances:** The total number of C, H, O, and N atoms is conserved.
3.  **Equilibrium expressions:** One $K_p$ equation for each independent equilibrium reaction (CO₂ ⇌ CO + ½O₂; H₂O ⇌ H₂ + ½O₂; H₂O ⇌ OH + ½H₂; ½N₂ + ½O₂ ⇌ NO; etc.)

This is typically a system of 10+ nonlinear equations solved iteratively by computer (NASA CEA code, CANTERA, CHEMKIN).

## 4. Effect of Pressure on Equilibrium

**Le Chatelier's Principle applied to pressure:**
For reactions where the number of moles changes (like CO₂ → CO + ½O₂, which increases moles from 1 to 1.5), increasing pressure suppresses dissociation — the reaction shifts back toward the side with fewer moles.

Gas turbines operating at 30–40 atm have significantly less CO₂ and H₂O dissociation than a low-pressure lab burner at 1 atm. This means higher actual flame temperatures and slightly higher NOₓ formation at high pressure.

Rocket engines operating at 100–300 atm have almost no dissociation in the combustion chamber. Dissociation occurs later in the nozzle expansion as pressure drops.
