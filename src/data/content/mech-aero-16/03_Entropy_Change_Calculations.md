---
title: "Entropy Change Calculations"
---

# Entropy Change Calculations

Computing entropy changes for pure substances, ideal gases, and incompressible solids/liquids is a routine but essential engineering skill. The method depends on the substance model and the process type.

## 1. Entropy Change from Property Tables

For steam, refrigerants, and other tabulated substances, entropy $s$ [kJ/(kg·K)] is directly listed in the property tables alongside $h$, $u$, and $v$.

**Two-phase mixture:**
$$s = s_f + x \cdot s_{fg} = s_f + x(s_g - s_f)$$

**Superheated vapor:** Read $s$ directly from the superheated table at given $P$ and $T$. Interpolate if needed.

**Compressed liquid:** $s_{compressed}(T, P) \approx s_f(T)$ — approximated by the saturated liquid entropy at the same temperature.

## 2. Entropy Change of an Ideal Gas

Starting from the Gibbs relation $Tds = du + Pdv$ with $du = c_v dT$ and $Pv = RT$:

$$ds = c_v \frac{dT}{T} + R\frac{dv}{v}$$

Integrating (with constant $c_v$, $c_p$):

$$s_2 - s_1 = c_v \ln\frac{T_2}{T_1} + R\ln\frac{v_2}{v_1}$$

Equivalently, using $Tds = dh - vdP$ with $dh = c_p dT$:

$$\boxed{s_2 - s_1 = c_p \ln\frac{T_2}{T_1} - R\ln\frac{P_2}{P_1}}$$

This is the most-used form in engineering (since $P$ is usually the measured variable).

**Variable specific heats** (accurate over large temperature ranges): Use the tabulated function $s°(T)$ from ideal gas tables:
$$s_2 - s_1 = s°(T_2) - s°(T_1) - R\ln\frac{P_2}{P_1}$$

## 3. Isentropic Process Condition

For an isentropic process: $s_2 = s_1$, i.e., $\Delta s = 0$.

For an ideal gas:
$$0 = c_p \ln\frac{T_2}{T_1} - R\ln\frac{P_2}{P_1}$$

This derives the isentropic relations:
$$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}, \quad \frac{T_2}{T_1} = \left(\frac{v_1}{v_2}\right)^{k-1}$$

## 4. Entropy Change of Incompressible Solids and Liquids

For an incompressible substance ($v = $ constant, $dv = 0$), the Gibbs relation simplifies to:
$$ds = c\frac{dT}{T}$$

$$s_2 - s_1 = c\ln\frac{T_2}{T_1}$$

Where $c$ is the specific heat (single value since $c_v = c_p = c$ for incompressible substances). Valid for metals, water (approximate), and dense liquids.
