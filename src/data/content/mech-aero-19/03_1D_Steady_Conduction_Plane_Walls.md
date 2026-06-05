---
title: "1D Steady Conduction in Plane Walls"
---

# 1D Steady Conduction in Plane Walls

The simplest application of the heat equation is one-dimensional, steady-state conduction through a plane wall with no internal heat generation. 

## 1. The Governing Equation

Starting from the general heat equation with $k = \text{constant}$, steady state ($\partial T / \partial t = 0$), no generation ($\dot{q}_{gen} = 0$), and 1D ($y$ and $z$ derivatives are zero):

$$\frac{d^2 T}{dx^2} = 0$$

This is a second-order ordinary differential equation.

## 2. The Temperature Distribution

Integrating once:
$$\frac{dT}{dx} = C_1$$

Integrating twice:
$$T(x) = C_1 x + C_2$$

This proves that **the temperature distribution through a plane wall under steady 1D conduction with constant $k$ is perfectly linear.**

To find the constants $C_1$ and $C_2$, we apply boundary conditions. Assume the wall spans from $x=0$ to $x=L$, with surface temperatures $T(0) = T_1$ and $T(L) = T_2$.
- $T(0) = C_2 = T_1$
- $T(L) = C_1 L + T_1 = T_2 \implies C_1 = \frac{T_2 - T_1}{L}$

Substituting back:
$$T(x) = \left(\frac{T_2 - T_1}{L}\right)x + T_1$$

## 3. Heat Transfer Rate

Applying Fourier's Law to find the total heat transfer rate $\dot{Q}$:
$$\dot{Q} = -k A \frac{dT}{dx} = -k A \left(\frac{T_2 - T_1}{L}\right) = k A \frac{T_1 - T_2}{L}$$

Note that the heat transfer rate $\dot{Q}$ is constant everywhere through the wall (since $dT/dx = C_1$). This must be true for steady state; if $\dot{Q}$ varied with $x$, energy would accumulate, violating the steady-state assumption.

## 4. Boundary Conditions

In real problems, we often do not know the surface temperatures $T_1$ and $T_2$ directly. Instead, the wall is exposed to a fluid at $T_{\infty}$ with a convective heat transfer coefficient $h$.

An energy balance at the surface dictates that the heat convected *to* the surface must equal the heat conducted *away* from the surface into the solid:

$$-k \left.\frac{dT}{dx}\right|_{surface} = h(T_{surface} - T_{\infty})$$

If the surface is subjected to a specified heat flux $q''_s$ (e.g., radiation, electrical heater):
$$-k \left.\frac{dT}{dx}\right|_{surface} = q''_s$$

If the surface is perfectly insulated:
$$-k \left.\frac{dT}{dx}\right|_{surface} = 0 \implies \frac{dT}{dx} = 0$$
(The temperature profile is horizontal at an insulated boundary).
