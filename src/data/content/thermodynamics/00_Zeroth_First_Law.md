# Thermodynamics — Zeroth and First Law

## Basic Concepts

**System**: region of interest (closed, open, or isolated).  
**Surroundings**: everything outside the system.  
**State**: described by intensive properties (T, P, ρ) independent of mass, and extensive properties (U, H, S, V) proportional to mass.

**Thermodynamic equilibrium**: thermal + mechanical + phase + chemical equilibrium simultaneously.

## Zeroth Law

If system A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. This defines **temperature** as a state property.

## First Law — Closed System

$$\Delta U = Q - W$$

Sign convention: $Q > 0$ heat into system; $W > 0$ work done by system.

**Work** for a quasi-static process:
$$W = \int_{V_1}^{V_2} P\,dV$$

**Internal energy** $U$ is a state function — depends only on state, not path.

For an ideal gas: $U = U(T)$ only (Joule's experiment).

## Specific Heats

$$C_v = \left(\frac{\partial u}{\partial T}\right)_v,\quad C_p = \left(\frac{\partial h}{\partial T}\right)_P$$

For ideal gas: $C_p - C_v = R$, and $\gamma = C_p/C_v$.

$$\Delta u = C_v \Delta T,\quad \Delta h = C_p \Delta T\quad\text{(ideal gas)}$$

## First Law — Open System (Control Volume)

Steady-flow energy equation:
$$\dot{Q} - \dot{W}_s = \dot{m}\left[(h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)\right]$$

For adiabatic, no shaft work, negligible KE/PE: $h_1 = h_2$ (throttling, isenthalpic process).

## Enthalpy

$$H = U + PV,\quad h = u + Pv$$

Enthalpy is conserved in steady-flow processes with no work or heat exchange other than shaft work.