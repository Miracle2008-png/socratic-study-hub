---
title: "Heat Generation in Solids"
---

# Heat Generation in Solids

In many engineering applications, heat is generated internally within a solid medium. Examples include Joule ($I^2R$) heating in electrical conductors, chemical exothermic reactions, and nuclear fission in fuel rods. 

When internal generation $\dot{q}_{gen}$ [$W/m^3$] is present, the heat flux $\dot{Q}$ is no longer constant through the material, and thermal resistance networks cannot be directly applied.

## 1. Plane Wall with Heat Generation

Consider a plane wall of thickness $2L$ (from $x = -L$ to $x = +L$) with uniform generation $\dot{q}_{gen}$ and both surfaces maintained at temperature $T_s$.

The 1D steady heat equation is:
$$\frac{d^2 T}{dx^2} + \frac{\dot{q}_{gen}}{k} = 0$$

Integrate twice:
$$T(x) = -\frac{\dot{q}_{gen}}{2k}x^2 + C_1 x + C_2$$

Apply boundary conditions: $T(-L) = T_s$ and $T(L) = T_s$. Because the problem is symmetric, $dT/dx = 0$ at the centerline ($x=0$), yielding $C_1 = 0$.
Solving for $C_2$:
$$T_s = -\frac{\dot{q}_{gen}}{2k}L^2 + C_2 \implies C_2 = T_s + \frac{\dot{q}_{gen}L^2}{2k}$$

**Temperature Profile (Parabolic):**
$$T(x) = \frac{\dot{q}_{gen}L^2}{2k}\left(1 - \frac{x^2}{L^2}\right) + T_s$$

The maximum temperature occurs at the centerline ($x=0$):
$$T_{max} = T_s + \frac{\dot{q}_{gen}L^2}{2k}$$

## 2. Solid Cylinder with Heat Generation

Consider a solid wire or nuclear fuel rod of radius $r_o$ with uniform $\dot{q}_{gen}$, surface at $T_s$.

The 1D steady radial equation is:
$$\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) + \frac{\dot{q}_{gen}}{k} = 0$$

Integrate once:
$$r\frac{dT}{dr} = -\frac{\dot{q}_{gen} r^2}{2k} + C_1 \implies \frac{dT}{dr} = -\frac{\dot{q}_{gen} r}{2k} + \frac{C_1}{r}$$

Apply B.C. 1: Temperature must be finite at the centerline $r=0$. This requires $C_1 = 0$.
Integrate again:
$$T(r) = -\frac{\dot{q}_{gen} r^2}{4k} + C_2$$

Apply B.C. 2: $T(r_o) = T_s \implies C_2 = T_s + \frac{\dot{q}_{gen} r_o^2}{4k}$

**Temperature Profile (Parabolic):**
$$T(r) = \frac{\dot{q}_{gen}r_o^2}{4k}\left(1 - \frac{r^2}{r_o^2}\right) + T_s$$

Maximum temperature at centerline ($r=0$):
$$T_{max} = T_s + \frac{\dot{q}_{gen}r_o^2}{4k}$$

## 3. Finding Surface Temperature $T_s$

Often, $T_s$ is not given. Instead, the solid is cooled by a fluid at $T_\infty$ with convection coefficient $h$. 
By overall energy balance at steady state, all heat generated must be convected away:

$$\dot{E}_{gen} = \dot{E}_{conv}$$
$$(\dot{q}_{gen})(\text{Volume}) = h A_s (T_s - T_\infty)$$

For a cylinder of length $L$:
$$\dot{q}_{gen}(\pi r_o^2 L) = h(2\pi r_o L)(T_s - T_\infty)$$
$$T_s = T_\infty + \frac{\dot{q}_{gen} r_o}{2h}$$

Substitute this $T_s$ back into the $T_{max}$ equation to find the peak internal temperature, a critical step to ensure electrical wires don't melt or nuclear rods don't suffer core meltdown.
