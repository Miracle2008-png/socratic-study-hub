# Concept Drills and Examination Problems

This section tests your practical understanding of heat transfer equipment design.

---

## Drill 1: The Temperature Cross

**Problem:** A process engineer proposes the following design for a single-pass parallel-flow double-pipe heat exchanger: 
Hot oil ($C_h = 1000 \, \text{W/K}$) enters at 120°C and exits at 60°C. 
Cooling water ($C_c = 2000 \, \text{W/K}$) enters at 20°C.

**(a)** Determine the outlet temperature of the cooling water.
**(b)** Is this design physically possible? Explain why or why not.

**Solution:**

**(a)** By energy balance:
$$Q = C_h (T_{h,in} - T_{h,out}) = 1000 \times (120 - 60) = 60{,}000 \, \text{W}$$
$$Q = C_c (T_{c,out} - T_{c,in}) \implies 60{,}000 = 2000 \times (T_{c,out} - 20)$$
$$T_{c,out} - 20 = 30 \implies T_{c,out} = 50\text{°C}$$

**(b)** In a parallel-flow heat exchanger, the fluids enter at the same end and flow in the same direction. As they flow, heat transfers from the hot fluid to the cold fluid. The hot fluid cools down, and the cold fluid heats up. They approach each other's temperatures asymptotically.

Therefore, in parallel flow, the cold fluid outlet temperature **can never exceed** the hot fluid outlet temperature. 

Checking our values:
- Hot fluid out: $T_{h,out} = 60\text{°C}$
- Cold fluid out: $T_{c,out} = 50\text{°C}$

Because $50\text{°C} < 60\text{°C}$, this design **is physically possible**. However, the terminal $\Delta T_2$ is only 10°C, which implies a very long exchanger. If the calculations had yielded $T_{c,out} > T_{h,out}$, it would violate the Second Law of Thermodynamics for a parallel-flow configuration.

---

## Drill 2: Fluid Allocation Logic

**Problem:** You are designing a shell-and-tube heat exchanger to condense high-pressure steam (150 bar, very clean) using river water (1 bar, highly scaling and containing silt). Justify which fluid you will place in the tubes and which in the shell.

**Solution:**

**River water goes in the tubes.**
**High-pressure steam goes in the shell.**

*Justifications:*
1. **Fouling and Cleaning:** River water is highly fouling (silt, algae, scale). It is far easier to mechanically clean the inside of straight tubes (by running a brush or hydroblaster through them) than it is to clean the outside of the tube bundle inside the shell.
2. **Pressure:** High-pressure steam (150 bar) would normally go in the tubes to avoid the cost of a high-pressure thick-walled shell. However, the cleaning requirement of the river water is absolutely non-negotiable. If the river water is in the shell, the bundle will become plugged and impossible to clean. Thus, we must put the water in the tubes and bear the capital cost of a high-pressure shell. 
3. **Phase Change:** Condensing vapor is very well suited to the shell side. The large volume of the shell accommodates the large specific volume of the vapor, and as it condenses, it drips off the tubes to the bottom of the shell.

---

## Drill 3: Area Calculation with Effectiveness-NTU

**Problem:** You need to heat $0.5 \, \text{kg/s}$ of a chemical product ($c_p = 3.0 \, \text{kJ/kg·K}$) from 25°C to 75°C. You have an unlimited supply of saturated steam condensing at 120°C. You will use a 1-pass shell-and-tube exchanger with steam condensing in the shell. The overall heat transfer coefficient is estimated to be $U = 800 \, \text{W/m}^2\text{K}$. 

Using the $\varepsilon$-NTU method, determine the required heat transfer area.

**Solution:**

**Step 1: Calculate heat capacity rates.**
For the chemical product (cold fluid):
$$C_c = \dot{m} c_p = 0.5 \times 3000 = 1500 \, \text{W/K}$$

For the condensing steam (hot fluid):
Because it is undergoing a phase change at constant temperature, its effective specific heat is infinite. Therefore, $C_h = \infty$.

This means the chemical product is the minimum fluid: $C_{\min} = 1500 \, \text{W/K}$.
The heat capacity ratio is: $c = C_{\min} / C_{\max} = 1500 / \infty = 0$.

**Step 2: Calculate the required duty $Q$.**
$$Q = C_c (T_{c,out} - T_{c,in}) = 1500 \times (75 - 25) = 1500 \times 50 = 75{,}000 \, \text{W} = 75 \, \text{kW}$$

**Step 3: Calculate the maximum possible duty $Q_{\max}$.**
$$Q_{\max} = C_{\min} (T_{h,in} - T_{c,in})$$
Here, the hot fluid is at a constant 120°C.
$$Q_{\max} = 1500 \times (120 - 25) = 1500 \times 95 = 142{,}500 \, \text{W}$$

**Step 4: Calculate the required effectiveness $\varepsilon$.**
$$\varepsilon = \frac{Q}{Q_{\max}} = \frac{75{,}000}{142{,}500} = 0.526$$

**Step 5: Calculate NTU.**
For a condenser ($c = 0$), the effectiveness relationship is the same for all flow geometries:
$$\varepsilon = 1 - \exp(-\text{NTU})$$
$$0.526 = 1 - \exp(-\text{NTU})$$
$$\exp(-\text{NTU}) = 0.474$$
$$-\text{NTU} = \ln(0.474) = -0.746$$
$$\text{NTU} = 0.746$$

**Step 6: Calculate Area.**
$$\text{NTU} = \frac{U A}{C_{\min}} \implies A = \frac{\text{NTU} \cdot C_{\min}}{U}$$
$$A = \frac{0.746 \times 1500}{800} = \frac{1119}{800} = 1.40 \, \text{m}^2$$

The required heat transfer area is $1.40 \, \text{m}^2$.
