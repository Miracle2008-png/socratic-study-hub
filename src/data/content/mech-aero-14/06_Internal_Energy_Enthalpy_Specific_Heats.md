---
title: "Internal Energy, Enthalpy, and Specific Heats"
---

# Internal Energy, Enthalpy, and Specific Heats

Two of the most important thermodynamic properties in engineering analysis are **internal energy** and **enthalpy**. They appear in virtually every energy balance equation and determine how much heat and work a process exchanges with its surroundings.

## 1. Internal Energy ($u$)

**Internal energy** $u$ [kJ/kg] is the total microscopic energy of a substance — the sum of all kinetic energies (translational, rotational, vibrational) and potential energies (intermolecular bonds) of all the molecules.

For a pure substance, $u$ is a function of **state only** — it depends only on the current thermodynamic state, not on how the state was reached. This is a direct consequence of the First Law.

For an ideal gas, $u$ depends only on temperature: $u = u(T)$ only.

For a real substance (like steam in the two-phase region), $u$ depends on both $T$ and $v$ (or equivalently $T$ and $P$), and is tabulated in steam tables.

## 2. Enthalpy ($h$)

**Enthalpy** $h$ is a thermodynamic convenience — a **derived property** defined as:
$$h \equiv u + Pv$$

It appears naturally whenever analyzing steady-flow processes (turbines, compressors, nozzles, heat exchangers) because the combination $u + Pv$ represents the total energy carried by a flowing fluid (internal energy plus the "flow work" $Pv$ required to push fluid into/out of a control volume).

For an ideal gas:
$$h = u + Pv = u + RT \implies h = h(T) \text{ only}$$

## 3. Specific Heats as Functions of Temperature

For real gases and many engineering fluids, specific heats $c_p$ and $c_v$ vary with temperature. For accurate calculations over wide temperature ranges, use:

$$\Delta h = \int_{T_1}^{T_2} c_p(T) dT$$
$$\Delta u = \int_{T_1}^{T_2} c_v(T) dT$$

The temperature dependence is often expressed as a polynomial:
$$c_p = a + bT + cT^2 + dT^3 \quad \text{[kJ/(kmol·K)]}$$

Coefficients ($a, b, c, d$) for common gases (N₂, O₂, H₂O, CO₂, CO) are tabulated in thermodynamics textbook appendices.

## 4. Ideal Gas Tables

To avoid integrating polynomial $c_p(T)$ expressions repeatedly, engineers use **ideal gas tables** — tabulated values of $h(T)$, $u(T)$, and $s°(T)$ at discrete temperatures, precomputed at reference state $T_{ref} = 0 \text{ K}$:

$$h(T_2) - h(T_1) = \bar{h}(T_2) - \bar{h}(T_1) \quad \text{(look up both values from table, subtract)}$$

This is faster and more accurate than using constant $c_p$. Air tables are the primary reference for gas turbine and combustion analysis.

**When to use constant $c_p$ vs. tables:**
*   Temperature range $\Delta T < 200 \text{ K}$: Constant $c_p$ at average temperature is adequate.
*   Temperature range $\Delta T > 200 \text{ K}$ or combustion products: Use ideal gas tables for accuracy.
