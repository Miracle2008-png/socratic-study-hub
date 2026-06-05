# Internal Energy Changes and Specific Processes

Understanding how internal energy changes in specific thermodynamic processes is essential for calculating heat transfer and work in engines, compressors, and other devices. Each named process fixes one thermodynamic variable, simplifying the First Law analysis.

## 1. The Four Standard Processes

### Isobaric Process (Constant Pressure, $P = C$)
Occurs in boilers, condensers, combustion chambers at open exhaust.
$$W = P(v_2 - v_1) = mR(T_2 - T_1) \quad \text{(ideal gas)}$$
$$Q = mc_p(T_2 - T_1) = \Delta H$$
$$\Delta u = mc_v(T_2 - T_1)$$

### Isochoric Process (Constant Volume, $v = C$)
Occurs in rigid pressure vessels, Otto cycle combustion.
$$W = 0 \quad \text{(no boundary movement)}$$
$$Q = mc_v(T_2 - T_1) = \Delta U$$
All heat goes into internal energy — no work is done.

### Isothermal Process (Constant Temperature, $T = C$)
Occurs in isothermal compressors, ideal battery charging.

For an **ideal gas**: $u = u(T)$ only, so $\Delta u = 0$.
$$Q = W = \int P\,dv = mRT\ln\frac{v_2}{v_1} = mRT\ln\frac{P_1}{P_2}$$

### Isentropic (Adiabatic Reversible) Process ($s = C$, $Q = 0$)
Occurs in ideal turbines, compressors, nozzles.
$$Q = 0, \quad W = -\Delta u = mc_v(T_1 - T_2)$$

For an **ideal gas** undergoing an isentropic process:
$$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma} = \left(\frac{v_1}{v_2}\right)^{\gamma-1}$$

This is the **isentropic relations** — fundamental to compressible flow, gas turbine analysis, and nozzle design.

## 2. The Polytropic Process

Real processes are approximated by the **polytropic** relation:
$$Pv^n = \text{constant}$$

Where $n$ is the **polytropic index**:
| $n$ | Process |
|---|---|
| $n = 0$ | Isobaric ($P = C$) |
| $n = 1$ | Isothermal ($T = C$ for ideal gas) |
| $n = \gamma$ | Isentropic ($s = C$, adiabatic reversible) |
| $n = \infty$ | Isochoric ($v = C$) |

Real compressors fall between $n = 1$ (isothermal, impossible in practice) and $n = \gamma$ (isentropic, also idealized). Actual polytropic indices for air compressors: $n \approx 1.2$–$1.35$.

Work for a polytropic process:
$$W = \frac{P_2v_2 - P_1v_1}{1 - n} = \frac{mR(T_2 - T_1)}{1 - n} \quad (n \neq 1)$$

## 3. Transient Processes

Not all thermodynamic processes are steady. **Filling a tank** from a supply line, or **discharging a compressed gas cylinder**, are transient — the mass inside the CV changes with time.

The transient energy balance is:
$$Q_{CV} - W_{CV} + \sum_{in} m_{in} h_{in} - \sum_{out} m_{out} h_{out} = m_2 u_2 - m_1 u_1$$

This combines mass balance with energy balance and is solved using initial and final states from property tables.
