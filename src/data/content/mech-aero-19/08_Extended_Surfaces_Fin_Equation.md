---
title: "Extended Surfaces: The Fin Equation"
---

# Extended Surfaces: The Fin Equation

Newton's Law of Cooling is $\dot{Q} = h A_s (T_s - T_\infty)$. To increase heat transfer from a surface, you can either:
1. Increase the temperature difference (rarely possible/safe).
2. Increase the convection coefficient $h$ (requires a stronger fan/pump).
3. Increase the surface area $A_s$.

Adding **extended surfaces (fins)** is the most common way to dramatically increase $A_s$ without needing moving parts. Fins are ubiquitous on motorcycle engines, computer heat sinks, and HVAC heat exchangers.

## 1. The Energy Balance on a Fin

Consider a straight fin of constant cross-sectional area $A_c$, perimeter $p$, length $L$, and thermal conductivity $k$, attached to a base at temperature $T_b$ and exposed to fluid at $T_\infty$.

Take a differential slice of the fin of thickness $dx$. Heat conducts *in* at $x$, conducts *out* at $x+dx$, and convects *away* from the perimeter over length $dx$.

$$\dot{Q}_{cond, x} - \dot{Q}_{cond, x+dx} - \dot{Q}_{conv} = 0$$

Substitute Fourier's Law and Newton's Law of Cooling:
$$-k A_c \left.\frac{dT}{dx}\right|_x - \left( -k A_c \left.\frac{dT}{dx}\right|_{x+dx} \right) - h(p \cdot dx)(T - T_\infty) = 0$$

Divide by $dx$ and let $dx \to 0$:
$$k A_c \frac{d^2T}{dx^2} - h p (T - T_\infty) = 0$$

## 2. The General Fin Equation

To simplify, define the excess temperature $\theta(x) = T(x) - T_\infty$. Note that $d^2\theta/dx^2 = d^2T/dx^2$. Let $m^2 = \frac{hp}{kA_c}$.

The governing differential equation becomes:
$$\frac{d^2\theta}{dx^2} - m^2 \theta = 0$$

This is a classic second-order linear homogeneous ODE. The general solution is:
$$\theta(x) = C_1 e^{mx} + C_2 e^{-mx}$$
or equivalently in hyperbolic functions:
$$\theta(x) = C_1 \cosh(mx) + C_2 \sinh(mx)$$

## 3. Applying Boundary Conditions

To find $C_1$ and $C_2$, we need two boundary conditions.

**Base Condition (always the same):**
At $x=0$, the temperature is the base temperature $T_b$.
$$\theta(0) = T_b - T_\infty = \theta_b$$

**Tip Condition (varies based on physics):**
1. **Infinitely Long Fin:** The tip reaches fluid temperature. $\theta(L \to \infty) = 0$.
   Result: $\theta(x) = \theta_b e^{-mx}$
2. **Adiabatic (Insulated) Tip:** The fin is relatively long, and heat loss from the small tip area is negligible. $d\theta/dx|_{x=L} = 0$.
   Result: $\frac{\theta(x)}{\theta_b} = \frac{\cosh[m(L-x)]}{\cosh(mL)}$
3. **Convection at Tip:** The most accurate case. Conduction to the tip equals convection from the tip. $-k(d\theta/dx) = h\theta$ at $x=L$.

## 4. Fin Heat Transfer Rate ($\dot{Q}_{fin}$)

The total heat dissipated by the fin equals the heat conducted into its base at $x=0$.
$$\dot{Q}_{fin} = -k A_c \left.\frac{dT}{dx}\right|_{x=0} = -k A_c \left.\frac{d\theta}{dx}\right|_{x=0}$$

For the infinitely long fin:
$$\dot{Q}_{fin} = \sqrt{hpkA_c} \, \theta_b$$

For the adiabatic tip fin (most common approximation for real fins):
$$\dot{Q}_{fin} = \sqrt{hpkA_c} \, \theta_b \tanh(mL)$$
