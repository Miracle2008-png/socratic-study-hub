# Effectiveness-NTU Method

The Effectiveness-NTU (ε-NTU) method is an elegant alternative to the LMTD approach for heat exchanger analysis. It is superior for **rating** problems — when the exchanger already exists and you want to predict how it will perform given new operating conditions (different flow rates or inlet temperatures).

## 1. The Problem with LMTD for Rating

With LMTD, you need all four terminal temperatures to proceed. If you're given an existing exchanger and only know the two *inlet* temperatures plus the flow rates, you're stuck in a loop:
- You need outlet temperatures to calculate LMTD.
- You can't find outlet temperatures without LMTD.

The LMTD method requires tedious trial-and-error iteration. The ε-NTU method solves the same problem directly with no iteration.

## 2. Heat Exchanger Effectiveness (ε)

Effectiveness is defined as the ratio of the **actual heat transfer** to the **maximum theoretically possible heat transfer**:

$$ \varepsilon = \frac{\dot{Q}_{actual}}{\dot{Q}_{max}} $$

**What is $\dot{Q}_{max}$?**
The maximum possible heat transfer is limited by thermodynamics. The fluid with the *smaller* heat capacity rate ($C_{min} = \dot{m} c_p$, in W/K) will undergo the largest possible temperature change — from its inlet temperature all the way to the *other* fluid's inlet temperature. Therefore:

$$ \dot{Q}_{max} = C_{min} \cdot (T_{h,in} - T_{c,in}) $$

## 3. Number of Transfer Units (NTU)

NTU is a dimensionless parameter representing the "size" of the heat exchanger — how much heat transfer area it has relative to the minimum thermal capacity rate flowing through it.

$$ \text{NTU} = \frac{UA}{C_{min}} $$

*   A large NTU means a very large, powerful exchanger.
*   As NTU → ∞, the effectiveness approaches its limiting (maximum) value for that flow arrangement.
*   As NTU → 0, the effectiveness approaches 0 (no heat transfer in a tiny exchanger).

## 4. The ε-NTU Relationships

The effectiveness is a function of NTU and the heat capacity ratio $C_r = C_{min}/C_{max}$. Different flow arrangements have different formulas.

**Counter-Flow (the most important case):**
$$ \varepsilon = \frac{1 - \exp[-\text{NTU}(1-C_r)]}{1 - C_r \exp[-\text{NTU}(1-C_r)]} \quad \text{(for } C_r < 1\text{)} $$

**Parallel Flow:**
$$ \varepsilon = \frac{1 - \exp[-\text{NTU}(1+C_r)]}{1 + C_r} $$

**Special Case: $C_r = 0$ (condensers or evaporators):**
One fluid is a pure condensing vapor or evaporating liquid. Its temperature is constant (phase change), so its effective $\dot{m}c_p$ is infinite. Therefore $C_{min}/C_{max} = C_r = 0$.

For ALL flow arrangements when $C_r = 0$:
$$ \varepsilon = 1 - e^{-\text{NTU}} $$

This is a beautifully simple result — all heat exchanger types perform identically when one fluid is undergoing phase change.

## 5. Solving Rating Problems with ε-NTU

Given: $U$, $A$, $\dot{m}_h$, $\dot{m}_c$, $c_{p,h}$, $c_{p,c}$, $T_{h,in}$, $T_{c,in}$
Find: $T_{h,out}$, $T_{c,out}$

**Step 1:** Calculate $C_h = \dot{m}_h c_{p,h}$, $C_c = \dot{m}_c c_{p,c}$. Identify $C_{min}$ and $C_{max}$.
**Step 2:** Calculate $C_r = C_{min}/C_{max}$.
**Step 3:** Calculate $\text{NTU} = UA/C_{min}$.
**Step 4:** Use the appropriate ε-NTU formula to find $\varepsilon$.
**Step 5:** Calculate $\dot{Q}_{max} = C_{min}(T_{h,in} - T_{c,in})$.
**Step 6:** Calculate $\dot{Q}_{actual} = \varepsilon \cdot \dot{Q}_{max}$.
**Step 7:** Find outlet temperatures: $T_{h,out} = T_{h,in} - \dot{Q}/C_h$ and $T_{c,out} = T_{c,in} + \dot{Q}/C_c$.

No iteration required — a direct computation from start to finish.
