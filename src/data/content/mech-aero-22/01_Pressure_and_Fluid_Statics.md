---
title: "Pressure and Fluid Statics"
---

# Pressure and Fluid Statics

Fluid mechanics is the study of fluids (liquids and gases) under the action of applied forces. **Fluid statics** (or hydrostatics) is the sub-discipline dealing with fluids at rest. 

In a static fluid, there is no relative motion between adjacent fluid layers. Consequently, there are **no shear (viscous) stresses** in the fluid. The only stress present is a normal stress: **Pressure**.

## 1. The Concept of Pressure

Pressure $P$ is defined as the normal force $F_n$ exerted by a fluid per unit area $A$:
$$P = \frac{F_n}{A}$$
- **Units:** Pascals (Pa) = $N/m^2$. In engineering, $kPa$, $MPa$, $bar$ (1 bar = 100 kPa), and $psi$ (lbf/in²) are common.
- Pressure is a **scalar quantity**. Although force is a vector, pressure at a point in a fluid acts equally in *all directions*. This is known as **Pascal's Law**.

## 2. Absolute, Gage, and Vacuum Pressure

Pressure can be measured relative to different zero reference points.

1. **Absolute Pressure ($P_{abs}$):** Measured relative to a perfect vacuum ($P=0$). It is the true thermodynamic pressure used in equations of state (like the ideal gas law). It can never be negative.
2. **Gage Pressure ($P_{gage}$):** Measured relative to the local atmospheric pressure ($P_{atm}$). This is what most pressure gauges (like tire pressure gauges) read.
   $$P_{gage} = P_{abs} - P_{atm}$$
3. **Vacuum Pressure ($P_{vac}$):** Used when the absolute pressure is lower than the local atmospheric pressure.
   $$P_{vac} = P_{atm} - P_{abs}$$

*Standard atmospheric pressure at sea level is $P_{atm} = 101,325 \, Pa = 101.325 \, kPa = 1.01325 \, bar = 14.7 \, psi$.*

## 3. The Hydrostatic Equation

How does pressure vary within a static fluid? Consider a differential fluid element $dx \, dy \, dz$.
Summing the forces in the vertical ($z$) direction (gravity acts downward) and setting them to zero (since the fluid is static) yields the fundamental equation of fluid statics:

$$\frac{dP}{dz} = -\rho g = -\gamma$$

Where:
- $\rho$: fluid density [$kg/m^3$]
- $g$: acceleration due to gravity [$m/s^2$]
- $\gamma$: specific weight of the fluid [$\gamma = \rho g$, $N/m^3$]
- $z$: the vertical coordinate (positive pointing *up*).

**Key Conclusions:**
1. $dP/dx = 0$ and $dP/dy = 0$. Pressure does not change in the horizontal directions. **All points at the same depth in a continuous, static fluid have the same pressure.**
2. Pressure decreases as you go up (positive $z$) and increases as you go down (negative $z$).

## 4. Pressure in Incompressible Fluids (Liquids)

For liquids, the density $\rho$ is essentially constant. We can define depth $h = z_{surface} - z$. Integrating the hydrostatic equation downward from a free surface (where $P = P_{atm}$):

$$\int_{P_{atm}}^P dP = \int_0^h \rho g \, dh$$
$$\boxed{P = P_{atm} + \rho g h}$$

The term $\rho g h$ is the hydrostatic gage pressure. Note that the pressure depends *only* on depth $h$, not on the shape or width of the container. This is the origin of the **hydrostatic paradox**: a thin tube of water 10 meters high exerts the exact same pressure at the bottom as a massive lake 10 meters deep.
