# Concept Drills & Examination Problems

Test your understanding of Reactor Design with these conceptual scenarios.

## Drill 1: Reactor Sizing
You are designing a plant for the reaction $A \rightarrow B$. The kinetics are normal ($-r_A = k C_A^2$). You must process $100 \text{ L/min}$ of feed and achieve 95% conversion.
1. Which reactor will require a larger physical volume: a CSTR or a PFR? Why?
2. If the feed flow rate is doubled to $200 \text{ L/min}$, what happens to the Space Time ($\tau$) of the existing reactor?
3. If you decide to use two CSTRs in series instead of one giant CSTR, will the total combined volume of the two smaller tanks be larger, smaller, or equal to the volume of the single giant tank?

## Drill 2: Selectivity
You are running the parallel reactions:
*   Desired: $A \rightarrow D \text{ (Rate } = k_1 C_A^{0.5} \text{)}$
*   Undesired: $A \rightarrow U \text{ (Rate } = k_2 C_A^{2.0} \text{)}$
1. To maximize the yield of D, do you want the concentration of A in the reactor to be as high as possible, or as low as possible?
2. Which reactor type (CSTR or PFR) should you build to achieve this?

## Drill 3: Thermodynamics vs Kinetics
You are designing a PFR for an **exothermic, reversible** reaction ($A \rightleftharpoons B$). 
1. As the fluid moves down the uncooled (adiabatic) PFR, what happens to the temperature?
2. How does this temperature change affect the *kinetic rate* of the forward reaction?
3. How does this temperature change affect the *thermodynamic equilibrium* maximum achievable conversion ($X_e$)?

## Drill 4: Non-Ideal Flow (RTD)
You inject a pulse of dye into an industrial CSTR that has a theoretical Space Time ($\tau = V/v_0$) of 30 minutes. You analyze the dye at the exit and calculate the actual mean residence time of the fluid ($t_m$) to be only 20 minutes.
1. What physical flaw inside the tank is causing this discrepancy?
2. What is the effective, active volume of this reactor compared to its physical steel volume?

---

### Solutions

**Drill 1:**
1. The **CSTR** will be much larger. For normal kinetics, the CSTR must do all its work at the lowest possible concentration (the 95% exit condition), making the rate incredibly slow. The PFR takes advantage of the high initial concentration to react very quickly at the start of the pipe.
2. Space time ($\tau = V / v_0$). If volumetric flow rate $v_0$ doubles, the space time is **cut in half**. The fluid sweeps through twice as fast.
3. The total volume of the two tanks in series will be **smaller**. The first tank operates at a medium conversion (and thus a medium reaction rate), saving it from the severe CSTR penalty of operating entirely at 95% conversion.

**Drill 2:**
1. The desired reaction is order 0.5, the undesired is order 2.0. Because the undesired reaction is far more sensitive to concentration, a high concentration of A will cause the undesired waste to explode. You want the concentration of A to be **as low as possible**.
2. You should build a **CSTR**. A CSTR instantly dilutes the incoming pure feed into the large, mostly-reacted tank, keeping the local concentration of A near zero and starving the undesired $C_A^{2.0}$ side reaction.

**Drill 3:**
1. Because the reaction is exothermic, it releases heat as it reacts. In an adiabatic pipe, the temperature will **rapidly increase** (forming a hot spot).
2. Because of the Arrhenius equation, the higher temperature will cause the kinetic rate to **exponentially increase**.
3. Because the reaction is exothermic, Le Chatelier's principle dictates that heating the system pushes the equilibrium backwards. The higher temperature will **severely decrease** the maximum equilibrium conversion ($X_e$). (This is the classic Exothermic Dilemma: fast kinetics but terrible thermodynamics).

**Drill 4:**
1. The fluid is exiting the tank 10 minutes faster than it mathematically should based on the tank's volume. This means the fluid is completely avoiding a large portion of the tank. This is caused by **Stagnant Dead Zones** (areas where the agitator isn't mixing properly).
2. The active volume is proportional to the mean time. The fluid acts as if the tank is only 20 minutes "big" instead of 30. The effective volume is $20/30 = \mathbf{66.7\%}$ of the actual physical tank volume. The other 33.3% of the tank is useless dead space.
