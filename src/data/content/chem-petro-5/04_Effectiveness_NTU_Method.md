# The Effectiveness-NTU Method

While the LMTD method is perfect for *sizing* an exchanger when temperatures are known, it becomes tedious and requires trial-and-error iteration for **rating** problems — calculating the outlet temperatures of a given heat exchanger (where $A$ and $U$ are already known).

To solve rating problems directly, Kays and London (1955) developed the **Effectiveness-NTU ($\varepsilon$-NTU) Method**.

## 1. Heat Exchanger Effectiveness ($\varepsilon$)

Effectiveness is defined as the ratio of the actual heat transfer rate to the maximum possible heat transfer rate:

$$\varepsilon = \frac{Q}{Q_{\text{max}}}$$

The actual heat transfer rate is defined by the energy balance:
$$Q = C_h(T_{h,in} - T_{h,out}) = C_c(T_{c,out} - T_{c,in})$$
Where $C = \dot{m}c_p$ is the heat capacity rate.

The **maximum possible heat transfer rate ($Q_{\text{max}}$)** occurs in a theoretical counter-flow exchanger of infinite length. In such an exchanger, the fluid with the smaller heat capacity rate ($C_{\min}$) will undergo the maximum possible temperature change: the difference between the two inlet temperatures.

$$Q_{\text{max}} = C_{\min}(T_{h,in} - T_{c,in})$$

Therefore, the actual duty can be calculated directly if we know $\varepsilon$:
$$Q = \varepsilon C_{\min} (T_{h,in} - T_{c,in})$$

Notice that to find $Q$, we only need the inlet temperatures! We do not need the outlet temperatures.

## 2. Number of Transfer Units (NTU)

To find $\varepsilon$, we use dimensionless relationships. $\varepsilon$ is a function of the flow geometry and two dimensionless parameters:

**1. Number of Transfer Units (NTU):**
$$\text{NTU} = \frac{U A}{C_{\min}}$$
NTU is a measure of the heat transfer size of the exchanger. A larger NTU means a larger physical area $A$. In industry, $\text{NTU} \approx 1$ to $3$ is common. Anything above $\text{NTU} \approx 5$ yields diminishing returns (the exchanger gets massive for barely any extra heat transfer).

**2. Heat Capacity Ratio ($c$):**
$$c = \frac{C_{\min}}{C_{\max}}$$
This ratio varies from 0 to 1.
- If $c = 1$, the temperature profiles are parallel straight lines.
- If $c = 0$, one fluid is changing phase (boiling or condensing), because its effective specific heat is infinite.

## 3. Effectiveness-NTU Equations

For any heat exchanger geometry, $\varepsilon = f(\text{NTU}, c)$.

**For a parallel-flow double-pipe exchanger:**
$$\varepsilon = \frac{1 - \exp[-\text{NTU}(1+c)]}{1+c}$$

**For a counter-flow double-pipe exchanger:**
$$\varepsilon = \frac{1 - \exp[-\text{NTU}(1-c)]}{1 - c \exp[-\text{NTU}(1-c)]} \quad (\text{for } c < 1)$$
$$\varepsilon = \frac{\text{NTU}}{1 + \text{NTU}} \quad (\text{for } c = 1)$$

**For a condenser or boiler ($c=0$), regardless of flow arrangement:**
$$\varepsilon = 1 - \exp(-\text{NTU})$$

Engineers rarely calculate these by hand; they read them from standard $\varepsilon$-NTU charts or software.

## 4. Worked Example: Rating an Existing Exchanger

**Problem:** An existing counter-flow double-pipe exchanger has an area $A = 5.0 \, \text{m}^2$ and $U = 400 \, \text{W/m}^2\text{K}$. Hot oil ($c_p = 2.2 \, \text{kJ/kg·K}$) flows at $0.4 \, \text{kg/s}$ and enters at 90°C. Cooling water ($c_p = 4.18 \, \text{kJ/kg·K}$) flows at $0.3 \, \text{kg/s}$ and enters at 15°C. Find the outlet temperatures of both fluids.

**Step 1: Calculate Capacity Rates**
$$C_h = \dot{m}_h c_{p,h} = 0.4 \times 2200 = 880 \, \text{W/K}$$
$$C_c = \dot{m}_c c_{p,c} = 0.3 \times 4180 = 1254 \, \text{W/K}$$

Thus, the oil is the minimum fluid: $C_{\min} = 880 \, \text{W/K}$ and $C_{\max} = 1254 \, \text{W/K}$.

**Step 2: Calculate NTU and c**
$$c = \frac{C_{\min}}{C_{\max}} = \frac{880}{1254} = 0.702$$
$$\text{NTU} = \frac{U A}{C_{\min}} = \frac{400 \times 5.0}{880} = 2.27$$

**Step 3: Calculate Effectiveness (Counter-flow)**
$$\varepsilon = \frac{1 - \exp[-2.27(1-0.702)]}{1 - 0.702\exp[-2.27(1-0.702)]} = \frac{1 - \exp(-0.676)}{1 - 0.702\exp(-0.676)}$$
$$\varepsilon = \frac{1 - 0.508}{1 - 0.702(0.508)} = \frac{0.492}{1 - 0.357} = \frac{0.492}{0.643} = 0.765$$

**Step 4: Calculate Duty and Outlet Temperatures**
$$Q = \varepsilon C_{\min} (T_{h,in} - T_{c,in}) = 0.765 \times 880 \times (90 - 15) = 0.765 \times 880 \times 75 = 50{,}490 \, \text{W} \approx 50.5 \, \text{kW}$$

Hot oil outlet (from $Q = C_h \Delta T$):
$$T_{h,out} = 90 - \frac{50490}{880} = 90 - 57.4 = 32.6\text{°C}$$

Cold water outlet (from $Q = C_c \Delta T$):
$$T_{c,out} = 15 + \frac{50490}{1254} = 15 + 40.3 = 55.3\text{°C}$$

No iterative guessing was required to find these temperatures!
