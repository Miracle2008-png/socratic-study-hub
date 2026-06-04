# Advanced Thermodynamics

## 1. Thermodynamic Potentials

Thermodynamic potentials are scalar quantities used to represent the thermodynamic state of a system. The four fundamental potentials are Internal Energy ($U$), Enthalpy ($H$), Helmholtz Free Energy ($F$ or $A$), and Gibbs Free Energy ($G$).

### 1.1 Internal Energy ($U$)
The fundamental thermodynamic relation for internal energy in a reversible process is:
$$ dU = TdS - pdV $$
where $T$ is temperature, $S$ is entropy, $p$ is pressure, and $V$ is volume.
Natural variables: $S, V$.

### 1.2 Enthalpy ($H$)
Enthalpy is defined via a Legendre transformation of $U$ with respect to $V$:
$$ H = U + pV $$
Taking the differential:
$$ dH = dU + pdV + Vdp = TdS + Vdp $$
Natural variables: $S, p$.

### 1.3 Helmholtz Free Energy ($F$)
Defined via a Legendre transformation of $U$ with respect to $S$:
$$ F = U - TS $$
$$ dF = dU - TdS - SdT = -pdV - SdT $$
Natural variables: $V, T$.

### 1.4 Gibbs Free Energy ($G$)
Defined by transforming both $S$ and $V$:
$$ G = H - TS = U + pV - TS $$
$$ dG = dH - TdS - SdT = Vdp - SdT $$
Natural variables: $p, T$.

---

## 2. Maxwell Relations

By applying Euler's reciprocity relation to the exact differentials of the thermodynamic potentials, we derive the Maxwell relations. For a function $f(x, y)$ where $df = Mdx + Ndy$, we know that $\left(\frac{\partial M}{\partial y}\right)_x = \left(\frac{\partial N}{\partial x}\right)_y$.

From $dU = TdS - pdV$:
$$ \left( \frac{\partial T}{\partial V} \right)_S = -\left( \frac{\partial p}{\partial S} \right)_V $$

From $dH = TdS + Vdp$:
$$ \left( \frac{\partial T}{\partial p} \right)_S = \left( \frac{\partial V}{\partial S} \right)_p $$

From $dF = -SdT - pdV$:
$$ \left( \frac{\partial S}{\partial V} \right)_T = \left( \frac{\partial p}{\partial T} \right)_V $$

From $dG = -SdT + Vdp$:
$$ \left( \frac{\partial S}{\partial p} \right)_T = -\left( \frac{\partial V}{\partial T} \right)_p $$

---

## 3. Solved Examples

### Example 3.1: Entropy Change of an Ideal Gas
**Problem:** Derive the expression for the change in entropy $\Delta S$ of $n$ moles of an ideal gas undergoing a process from $(T_1, V_1)$ to $(T_2, V_2)$. Assume constant molar heat capacity $C_V$.

**Solution:**
1. Start with the First Law of Thermodynamics:
   $$ dQ = dU + dW $$
2. For a reversible process, $dQ = TdS$ and $dW = pdV$:
   $$ TdS = dU + pdV $$
3. For an ideal gas, $dU = n C_V dT$ and $p = \frac{nRT}{V}$:
   $$ TdS = n C_V dT + \frac{nRT}{V} dV $$
4. Divide by $T$:
   $$ dS = n C_V \frac{dT}{T} + nR \frac{dV}{V} $$
5. Integrate from state 1 to state 2:
   $$ \Delta S = \int_{T_1}^{T_2} n C_V \frac{dT}{T} + \int_{V_1}^{V_2} nR \frac{dV}{V} $$
   $$ \Delta S = n C_V \ln\left(\frac{T_2}{T_1}\right) + nR \ln\left(\frac{V_2}{V_1}\right) $$

### Example 3.2: Clapeyron Equation Derivation
**Problem:** Use the Maxwell relations to derive the Clapeyron equation, which relates the change in pressure with temperature to the latent heat of phase transition.

**Solution:**
1. Consider a two-phase system (e.g., liquid and vapor) in equilibrium at temperature $T$ and pressure $p$.
2. The relevant Maxwell relation from the Helmholtz Free Energy ($dF = -SdT - pdV$) is:
   $$ \left( \frac{\partial p}{\partial T} \right)_V = \left( \frac{\partial S}{\partial V} \right)_T $$
3. During a phase transition, pressure depends only on temperature, $p = p(T)$, meaning the derivative $\left(\frac{\partial p}{\partial T}\right)_V$ becomes a total derivative $\frac{dp}{dT}$.
4. The change in entropy is $\Delta S = \frac{L}{T}$, where $L$ is the latent heat. The change in volume is $\Delta V = V_2 - V_1$.
5. Substituting these into the Maxwell relation:
   $$ \frac{dp}{dT} = \frac{\Delta S}{\Delta V} = \frac{L}{T(V_2 - V_1)} $$
This is the fundamental Clapeyron equation.

---

## 4. Availability (Exergy)

Exergy represents the maximum useful work possible during a process that brings the system into equilibrium with a heat reservoir.

For a closed system interacting with an environment at $T_0$ and $p_0$, the non-flow exergy $\Phi$ is defined as:
$$ \Phi = (U - U_0) + p_0(V - V_0) - T_0(S - S_0) $$

### Example 4.1: Exergy of a Compressed Gas
**Problem:** Calculate the specific exergy of air at 5 bar and 300 K. The environment is at $p_0 = 1$ bar and $T_0 = 300$ K. Air is assumed an ideal gas with $R = 287 \text{ J/kg}\cdot\text{K}$.

**Solution:**
1. Since $T = T_0 = 300$ K, $\Delta U = c_v(T - T_0) = 0$.
2. Specific exergy formula simplifies to:
   $$ \phi = p_0(v - v_0) - T_0(s - s_0) $$
3. Entropy change at constant temperature:
   $$ s - s_0 = -R \ln\left(\frac{p}{p_0}\right) $$
4. Specific volumes:
   $$ v = \frac{RT}{p}, \quad v_0 = \frac{RT_0}{p_0} $$
5. Substitute terms:
   $$ \phi = p_0 \left( \frac{RT}{p} - \frac{RT_0}{p_0} \right) + T_0 R \ln\left(\frac{p}{p_0}\right) $$
   $$ \phi = RT_0 \left( \frac{p_0}{p} - 1 + \ln\left(\frac{p}{p_0}\right) \right) $$
6. Insert numerical values:
   $$ \phi = (287)(300) \left( \frac{1}{5} - 1 + \ln(5) \right) $$
   $$ \phi \approx 86100 \times (-0.8 + 1.609) = 86100 \times 0.809 = 69,655 \text{ J/kg} = 69.66 \text{ kJ/kg} $$
