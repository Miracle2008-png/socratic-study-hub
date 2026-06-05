# Isentropic Efficiency of Turbines and Compressors

Ideal turbines and compressors operate **isentropically** ($s = $ constant, adiabatic and reversible). Real machines deviate from this ideal due to internal friction, heat leakage, and fluid flow irreversibilities. The **isentropic efficiency** quantifies how closely a real machine approaches its ideal counterpart.

## 1. Isentropic Efficiency of a Turbine ($\eta_T$)

A turbine expands fluid from state 1 (high $P$, high $T$) to state 2 (low $P$). The ideal isentropic expansion reaches state $2s$ (same exit pressure, but $s_{2s} = s_1$).

Real turbines produce **less work** than ideal (irreversibilities waste potential work):

$$\eta_T = \frac{w_{actual}}{w_{isentropic}} = \frac{h_1 - h_2}{h_1 - h_{2s}}$$

Using steam tables:
1. Look up $h_1$ and $s_1$ at inlet conditions.
2. Find $h_{2s}$ at exit pressure with $s_{2s} = s_1$ (isentropic exit state).
3. Apply $\eta_T$ to find actual exit enthalpy: $h_2 = h_1 - \eta_T(h_1 - h_{2s})$.

Typical steam turbine isentropic efficiency: **85–92%**.
Gas turbine isentropic efficiency: **88–92%**.

## 2. Isentropic Efficiency of a Compressor ($\eta_C$)

A compressor raises fluid from low to high pressure. Ideal isentropic compression reaches $2s$. Real compressors require **more work** than ideal:

$$\eta_C = \frac{w_{isentropic}}{w_{actual}} = \frac{h_{2s} - h_1}{h_2 - h_1}$$

The compressor isentropic efficiency is defined inversely (ideal divided by actual) so that it is $\leq 1$.

Typical axial compressor isentropic efficiency: **85–90%**.
Centrifugal compressor: **75–85%**.

## 3. Isentropic Efficiency of a Pump ($\eta_P$)

For an incompressible liquid (constant density $\rho$):

The isentropic pump work: $w_{P,s} = v(P_2 - P_1)$ [kJ/kg]

$$\eta_P = \frac{v(P_2 - P_1)}{h_2 - h_1}$$

## 4. Effect of Inefficiency on Cycle Performance

The real impact of component inefficiencies on the overall cycle efficiency is dramatic:

For a Brayton cycle with $\eta_T = \eta_C = 0.85$, $r_p = 10$, $\gamma = 1.4$:
- Ideal cycle efficiency: ~48%
- Real cycle efficiency: ~30% (a drop of 18 percentage points)

The compressor inefficiency is particularly punishing because it raises the compressor exit temperature, increasing the fuel required for a given TIT. This is why every 1% improvement in compressor efficiency translates directly into significant fuel savings — a primary driver of decades of aerodynamic refinement in gas turbine blade design.
