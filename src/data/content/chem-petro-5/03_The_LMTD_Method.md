# The Log-Mean Temperature Difference (LMTD) Method

The LMTD method is the standard approach for sizing a heat exchanger — calculating the required heat transfer area $A$ — when the inlet and outlet temperatures of both fluid streams are known or can be easily calculated from an energy balance.

## 1. Temperature Profiles in Heat Exchangers

In a heat exchanger, the temperature difference between the hot and cold streams, $\Delta T = T_h - T_c$, is not constant. It varies along the length of the exchanger.

Because heat transfer is driven by $\Delta T$, we cannot simply use an arithmetic average. By integrating the differential heat transfer equation $dQ = U \, dA \, (T_h - T_c)$ over the length of the exchanger, assuming constant $U$ and specific heats, we derive the exact average temperature driving force: the **Log-Mean Temperature Difference ($\Delta T_{lm}$)**.

## 2. Defining LMTD for Double-Pipe Exchangers

The LMTD is defined based on the temperature differences at the two distinct ends of the exchanger:
- End 1: $\Delta T_1$
- End 2: $\Delta T_2$

$$\Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1 / \Delta T_2)}$$

The definitions of End 1 and End 2 depend entirely on the flow arrangement.

### Parallel Flow
Hot and cold fluids enter at the same end.
- $\Delta T_1 = T_{h,in} - T_{c,in}$ (large difference)
- $\Delta T_2 = T_{h,out} - T_{c,out}$ (small difference)

### Counter-Flow
Hot and cold fluids enter at opposite ends. This is the industrial standard.
- $\Delta T_1 = T_{h,in} - T_{c,out}$ (hot end)
- $\Delta T_2 = T_{h,out} - T_{c,in}$ (cold end)

**Key property**: For the exact same inlet and outlet temperatures, the counter-flow $\Delta T_{lm}$ is always mathematically larger than the parallel-flow $\Delta T_{lm}$. Since $Q = U A \Delta T_{lm}$, **a counter-flow exchanger always requires less area** than a parallel-flow exchanger to do the exact same job.

*(Note: If $\Delta T_1 = \Delta T_2$, the formula yields $0/0$. In this special case, the LMTD is simply equal to the arithmetic difference $\Delta T_1$.)*

## 3. The Correction Factor (F) for Multi-Pass Exchangers

Pure counter-flow only exists in simple double-pipe exchangers. Industrial shell-and-tube exchangers and cross-flow units have complex flow paths that are a mixture of parallel, counter, and cross flow.

To account for this, we calculate the theoretical $\Delta T_{lm}$ assuming pure counter-flow, and multiply it by a **correction factor $F$**:

$$Q = U A F \Delta T_{lm, \text{counter}}$$

The correction factor $F$ is a dimensionless number between 0 and 1. It is read from standard charts (Bowman, Mueller, Nagle charts) based on two dimensionless temperature ratios:
- **P (Temperature effectiveness)**: $P = \frac{t_2 - t_1}{T_1 - t_1}$
- **R (Heat capacity ratio)**: $R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{\dot{m}_c c_{p,c}}{\dot{m}_h c_{p,h}}$

*(Capital $T$ is usually the shell-side fluid, lowercase $t$ is the tube-side fluid).*

**Design Rule of Thumb**: If $F < 0.75$, the design is unacceptable. The crossing of temperature profiles is too severe, and multiple shells in series must be used to approach pure counter-flow behaviour.

## 4. Worked Example: Sizing with LMTD

**Problem:** A counter-flow double-pipe heat exchanger is to cool $0.5 \, \text{kg/s}$ of hot oil ($c_p = 2.0 \, \text{kJ/kg·K}$) from 100°C to 60°C. Cooling water ($c_p = 4.18 \, \text{kJ/kg·K}$) enters at 20°C and flows at $0.2 \, \text{kg/s}$. If the overall heat transfer coefficient is $U = 300 \, \text{W/m}^2\text{K}$, what is the required heat transfer area?

**Step 1: Energy balance to find water outlet temperature.**
$$Q_{\text{hot}} = \dot{m}_h c_{p,h} (T_{h,in} - T_{h,out}) = 0.5 \times 2000 \times (100 - 60) = 40{,}000 \, \text{W} = 40 \, \text{kW}$$
$$Q_{\text{cold}} = \dot{m}_c c_{p,c} (T_{c,out} - T_{c,in}) \implies 40{,}000 = 0.2 \times 4180 \times (T_{c,out} - 20)$$
$$T_{c,out} - 20 = \frac{40000}{836} = 47.8\text{°C} \implies T_{c,out} = 67.8\text{°C}$$

*(Note: The cold water exits hotter than the oil exits ($67.8 > 60$). This is only possible in counter-flow!)*

**Step 2: Calculate LMTD.**
For counter-flow:
- $\Delta T_1 = T_{h,in} - T_{c,out} = 100 - 67.8 = 32.2\text{°C}$
- $\Delta T_2 = T_{h,out} - T_{c,in} = 60 - 20 = 40.0\text{°C}$

$$\Delta T_{lm} = \frac{32.2 - 40.0}{\ln(32.2 / 40.0)} = \frac{-7.8}{-0.217} = 35.9\text{°C}$$

**Step 3: Calculate Area.**
$$Q = U A \Delta T_{lm} \implies A = \frac{Q}{U \Delta T_{lm}}$$
$$A = \frac{40{,}000}{300 \times 35.9} = \frac{40000}{10770} = 3.71 \, \text{m}^2$$

The required heat transfer area is $3.71 \, \text{m}^2$.

## 5. LMTD Sizing Process

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "size", "data": { "label": "Sizing Problem", "icon": "Search", "description": "Goal: Find Area A." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "temps", "data": { "label": "Known Temps", "icon": "Thermometer", "description": "All 4 temps known." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "lmtd", "data": { "label": "Calculate LMTD", "icon": "Activity", "description": "Log-mean difference." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "corr", "data": { "label": "Correction Factor (F)", "icon": "CheckCircle", "description": "For multi-pass shells." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "size", "target": "temps", "animated": true },
    { "source": "temps", "target": "lmtd", "animated": true },
    { "source": "lmtd", "target": "corr", "animated": true }
  ]
}
```
