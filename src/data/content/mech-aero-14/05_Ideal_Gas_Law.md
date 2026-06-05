# The Ideal Gas Law

At low pressures and high temperatures — far from the two-phase dome — the behavior of all gases converges toward a simple, unified mathematical model: the **Ideal Gas Law**.

## 1. The Ideal Gas Model

An ideal gas is a theoretical model assuming:
1.  Gas molecules are point masses with negligible volume compared to the total volume.
2.  There are no intermolecular forces between molecules (except during perfectly elastic collisions).

These assumptions hold well when the gas is at low pressure and high temperature — where molecules are far apart and their interactions are minimal.

## 2. The Ideal Gas Equation of State

$$\boxed{PV = nR_u T}$$

Where:
*   $P$ = absolute pressure [Pa]
*   $V$ = total volume [m³]
*   $n$ = number of moles [mol]
*   $R_u$ = universal gas constant = **8.314 J/(mol·K)**
*   $T$ = absolute temperature [K]

Per unit mass, using the specific gas constant $R = R_u / M$ (where $M$ is molar mass [kg/kmol]):
$$Pv = RT \quad \text{or} \quad P = \rho R T$$

Common specific gas constants:
*   Air: $R = 287 \text{ J/(kg·K)}$
*   Nitrogen $\text{N}_2$: $R = 297 \text{ J/(kg·K)}$
*   Oxygen $\text{O}_2$: $R = 260 \text{ J/(kg·K)}$
*   Helium: $R = 2077 \text{ J/(kg·K)}$

## 3. Specific Heats of Ideal Gases

**Specific heat at constant volume ($c_v$):** Energy required to raise 1 kg of gas by 1 K at constant volume.
$$c_v = \left(\frac{\partial u}{\partial T}\right)_v$$

**Specific heat at constant pressure ($c_p$):** Energy required to raise 1 kg of gas by 1 K at constant pressure. $c_p > c_v$ because at constant pressure, the gas also does expansion work.
$$c_p = \left(\frac{\partial h}{\partial T}\right)_p$$

For an ideal gas:
$$c_p - c_v = R$$
$$\gamma = \frac{c_p}{c_v} \quad \text{(ratio of specific heats, the adiabatic index)}$$

*   Monatomic gases (He, Ar): $\gamma = 5/3 \approx 1.667$
*   Diatomic gases (Air, N₂, O₂): $\gamma \approx 1.4$ (at room temperature)
*   Polyatomic gases (CO₂, H₂O): $\gamma \approx 1.3$

For an ideal gas with constant specific heats (calorically perfect gas):
$$\Delta u = c_v \Delta T, \quad \Delta h = c_p \Delta T$$

## 4. The Compressibility Factor Z

Real gas behavior deviates from ideal at high pressures and low temperatures (near the saturation curve). The deviation is quantified by the **compressibility factor $Z$**:
$$Pv = ZRT$$

$Z = 1$ for an ideal gas. The **generalized compressibility chart** (a single universal chart valid for all gases) plots $Z$ vs. the **reduced pressure** $P_r = P/P_c$ and **reduced temperature** $T_r = T/T_c$. This law of corresponding states allows estimation of $Z$ for any gas using only its critical properties.
