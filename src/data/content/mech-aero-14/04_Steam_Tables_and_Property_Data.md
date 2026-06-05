# Steam Tables and Thermodynamic Property Data

The properties of real substances (water, refrigerants, combustion gases) cannot be computed from a simple equation. They must be determined from extensive experimental measurements. These data are compiled into **thermodynamic property tables** — the fundamental engineering reference for solving thermodynamics problems.

## 1. Structure of Steam Tables

Steam (water) tables are organized into three sections corresponding to the three regions of the $P$-$v$ diagram:

**Table A: Saturated Water (Temperature-Based)**
For each saturation temperature $T_{sat}$: lists $P_{sat}$, $v_f$, $v_g$, $u_f$, $u_{fg}$, $u_g$, $h_f$, $h_{fg}$, $h_g$, $s_f$, $s_{fg}$, $s_g$.

**Table B: Saturated Water (Pressure-Based)**
Same data as Table A, but indexed by saturation pressure $P_{sat}$. Use this when pressure is the known quantity.

**Table C: Superheated Vapor**
For combinations of pressure $P$ and temperature $T$ in the superheated region: lists $v$, $u$, $h$, $s$. These are tabulated at fixed pressures (0.1 MPa, 0.2 MPa, 0.4 MPa, ...) with temperatures at each pressure.

**Table D: Compressed Liquid**
For compressed liquid states. In practice, compressed liquid properties are often approximated using the saturated liquid values at the same temperature:
$$y_{compressed}(T, P) \approx y_f(T)$$
This approximation introduces less than 1% error for most engineering calculations.

## 2. Using the Tables: Determining State

Before looking up any property, you must identify which region (compressed liquid, two-phase, superheated) the state is in. Given any two independent properties:

**Given $T$ and $P$:**
Look up $T_{sat}$ at the given $P$ from Table B.
*   If $T < T_{sat}$: Compressed liquid.
*   If $T = T_{sat}$: Saturated (liquid or vapor — need another property to tell).
*   If $T > T_{sat}$: Superheated vapor → use Table C.

**Given $P$ and $v$:**
Look up $v_f$ and $v_g$ at the given $P$ from Table B.
*   If $v < v_f$: Compressed liquid.
*   If $v_f \leq v \leq v_g$: Two-phase mixture. Calculate $x = (v - v_f)/v_{fg}$.
*   If $v > v_g$: Superheated vapor → use Table C.

## 3. Interpolation

Steam tables provide data at discrete intervals. For states between tabulated values, linear interpolation is required:

$$y = y_1 + \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$$

**Example:** Find $h$ of superheated steam at $P = 0.3 \text{ MPa}$, $T = 250°\text{C}$.
The table gives data at 0.2 MPa and 0.4 MPa (interpolate in $P$), and at 200°C and 300°C (interpolate in $T$). For two-dimensional interpolation, interpolate in one variable first, then the other — a process called **double interpolation**.

## 4. Property Diagrams for Analysis

The **$h$-$s$ diagram (Mollier diagram)** is the working diagram for steam turbine and compressor analysis. Enthalpy $h$ (related to energy content) on the y-axis, entropy $s$ on the x-axis. The two-phase dome appears prominently. Isentropic processes (ideal turbines/compressors) are vertical lines. The diagram instantly shows how much enthalpy drop (turbine work output) a given expansion process yields.
