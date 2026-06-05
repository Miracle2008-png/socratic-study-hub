---
title: "Real Gas Equations of State"
---

# Real Gas Equations of State

The ideal gas law $Pv = RT$ is a convenient approximation that fails at high pressures and near the saturation curve. **Real gas equations of state** are empirical or semi-theoretical models that correct for molecular volume and intermolecular attractions.

## 1. The van der Waals Equation

The first and most historically important real gas equation, proposed by J.D. van der Waals in 1873:

$$\left(P + \frac{a}{v^2}\right)(v - b) = RT$$

Two correction terms:
*   **$a/v^2$** (pressure correction): Accounts for intermolecular attractive forces. These attractions reduce the pressure a real gas exerts on the container walls compared to ideal.
*   **$b$** (volume correction): Accounts for the finite volume occupied by the molecules themselves. Reduces the available free volume from $v$ to $(v - b)$.

Constants $a$ and $b$ are specific to each gas and determined from critical point data:
$$a = \frac{27 R^2 T_c^2}{64 P_c}, \quad b = \frac{R T_c}{8 P_c}$$

The van der Waals equation is qualitatively correct — it predicts the S-shaped ($P$-$v$) isotherm below the critical temperature that represents the phase transition. However, it is only moderately accurate quantitatively.

## 2. The Redlich-Kwong (RK) Equation

A significant improvement over van der Waals:
$$P = \frac{RT}{v - b} - \frac{a}{T^{0.5}v(v+b)}$$

RK is accurate to within a few percent for gases at moderate pressures. Constants $a$ and $b$ are again determined from $T_c$ and $P_c$.

## 3. Cubic Equations of State

Both van der Waals and RK are **cubic equations** in $v$ (when expanded). For a given $P$ and $T$ in the two-phase region, a cubic equation yields three real roots:
*   Smallest root = $v_f$ (saturated liquid specific volume)
*   Largest root = $v_g$ (saturated vapor specific volume)
*   Middle root = physically unstable state (not realized in practice)

The **Peng-Robinson equation** is the industry standard for petroleum and gas processing:
$$P = \frac{RT}{v-b} - \frac{a\alpha(T)}{v(v+b) + b(v-b)}$$

Where $\alpha(T)$ is a temperature-dependent function correcting for molecular shape (acentric factor $\omega$). Peng-Robinson is accurate over a wide range and is programmed into all process simulation software (ASPEN, HYSYS).

## 4. The Benedict-Webb-Rubin (BWR) Equation

For very high accuracy over wide ranges (used in natural gas pipeline calculations):
$$P = \frac{R_u T}{\bar{v}} + \frac{B_0 R_u T - A_0 - C_0/T^2}{\bar{v}^2} + \frac{bR_uT - a}{\bar{v}^3} + \frac{a\alpha}{\bar{v}^6} + \frac{c}{\bar{v}^3 T^2}\left(1 + \frac{\gamma}{\bar{v}^2}\right)e^{-\gamma/\bar{v}^2}$$

Eight empirical constants. Highly accurate but computationally expensive. Used in natural gas and cryogenic engineering where maximum accuracy is required.
