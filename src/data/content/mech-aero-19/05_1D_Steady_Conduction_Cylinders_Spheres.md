---
title: "1D Steady Conduction in Cylinders and Spheres"
---

# 1D Steady Conduction in Cylinders and Spheres

Heat transfer through pipes, tanks, and insulated wires involves radial geometries. The Cartesian coordinates used for plane walls must be replaced by cylindrical or spherical coordinates.

## 1. Radial Conduction in Cylinders

Consider a long pipe of length $L$, inner radius $r_1$, outer radius $r_2$, maintaining inner temperature $T_1$ and outer temperature $T_2$.
Heat flows radially outward. The area for heat transfer is not constant; it increases with radius $r$: $A(r) = 2\pi r L$.

Fourier's Law in cylindrical coordinates (radial direction only):
$$\dot{Q}_{cond} = -k A(r) \frac{dT}{dr} = -k (2\pi r L) \frac{dT}{dr}$$

Since $\dot{Q}$ is constant at steady state, separate variables and integrate from $r_1$ to $r_2$:
$$\dot{Q}_{cond} \int_{r_1}^{r_2} \frac{dr}{r} = -2\pi k L \int_{T_1}^{T_2} dT$$
$$\dot{Q}_{cond} \ln\left(\frac{r_2}{r_1}\right) = 2\pi k L (T_1 - T_2)$$

**Heat Rate:**
$$\dot{Q}_{cyl} = \frac{2\pi k L (T_1 - T_2)}{\ln(r_2 / r_1)}$$

**Thermal Resistance of a Cylinder:**
Rearranging into $\dot{Q} = \Delta T / R$:
$$R_{cyl} = \frac{\ln(r_2 / r_1)}{2\pi k L}$$

Notice that the temperature profile $T(r)$ is **logarithmic**, not linear as it was for a plane wall.

## 2. Radial Conduction in Spheres

Consider a hollow sphere of inner radius $r_1$ and outer radius $r_2$. The area is $A(r) = 4\pi r^2$.

Fourier's Law:
$$\dot{Q}_{cond} = -k (4\pi r^2) \frac{dT}{dr}$$

Separate and integrate:
$$\dot{Q}_{cond} \int_{r_1}^{r_2} \frac{dr}{r^2} = -4\pi k \int_{T_1}^{T_2} dT$$
$$\dot{Q}_{cond} \left( -\frac{1}{r_2} + \frac{1}{r_1} \right) = 4\pi k (T_1 - T_2)$$

**Heat Rate:**
$$\dot{Q}_{sph} = \frac{4\pi k (T_1 - T_2)}{\frac{1}{r_1} - \frac{1}{r_2}}$$

**Thermal Resistance of a Sphere:**
$$R_{sph} = \frac{r_2 - r_1}{4\pi k r_1 r_2}$$

The temperature profile $T(r)$ in a sphere is proportional to $1/r$.

## 3. Composite Radial Systems

Thermal resistance networks apply perfectly to radial systems, such as an insulated pipe.

For a pipe (radius $r_1$ to $r_2$) covered with insulation (radius $r_2$ to $r_3$), with hot fluid inside ($h_i$) and cold air outside ($h_o$):

$$R_{total} = R_{conv,in} + R_{pipe} + R_{insul} + R_{conv,out}$$
$$R_{total} = \frac{1}{h_i(2\pi r_1 L)} + \frac{\ln(r_2/r_1)}{2\pi k_{pipe} L} + \frac{\ln(r_3/r_2)}{2\pi k_{insul} L} + \frac{1}{h_o(2\pi r_3 L)}$$
