---
title: "The P-v Diagram and Quality"
---

# The P-v Diagram and Quality

The **Pressure-specific volume ($P$-$v$)** diagram is the most important thermodynamic diagram for engineers. It maps all possible states of a pure substance and visually reveals the two-phase region where phase change occurs.

## 1. Shape of the P-v Diagram

At a given pressure, plot specific volume $v$ vs. temperature for water as we heat it:
*   Compressed liquid: Very small $v$ (water is nearly incompressible). Small increase with $T$.
*   At saturation: $v$ jumps dramatically when liquid converts to vapor.
*   Superheated vapor: Large $v$, increasing with $T$.

Repeating this at many pressures and connecting:
*   The **saturated liquid line** (locus of $v_f$ values at each pressure) curves left.
*   The **saturated vapor line** (locus of $v_g$ values) curves right.
*   They meet at the **Critical Point** — the apex of the dome.
*   The region inside the dome is the **two-phase (wet) region**.
*   Left of the dome: compressed liquid.
*   Right of the dome: superheated vapor.

## 2. Quality ($x$)

Inside the two-phase dome, both saturated liquid (subscript $f$) and saturated vapor (subscript $g$) coexist. The **quality** $x$ is the mass fraction of vapor in the mixture:

$$x = \frac{m_{vapor}}{m_{total}} = \frac{m_g}{m_f + m_g}$$

Quality ranges from $x = 0$ (saturated liquid, on the left boundary) to $x = 1$ (saturated vapor, on the right boundary).

## 3. Lever Rule for Two-Phase Properties

Any specific property $y$ of a wet mixture can be calculated using the lever rule:

$$y = y_f + x \cdot y_{fg}$$

Where $y_{fg} = y_g - y_f$ is the difference between saturated vapor and saturated liquid values.

Applying to specific volume:
$$v = v_f + x(v_g - v_f) = v_f + x \cdot v_{fg}$$

Applying to specific internal energy:
$$u = u_f + x \cdot u_{fg}$$

Applying to specific enthalpy:
$$h = h_f + x \cdot h_{fg}$$

Where $h_{fg}$ is the **latent heat of vaporization** — the energy required to convert 1 kg of saturated liquid to saturated vapor at constant temperature and pressure.
*   Water at 1 atm: $h_{fg} = 2257 \text{ kJ/kg}$ — extraordinarily high, making steam an excellent working fluid.
*   R-134a at 0°C: $h_{fg} = 197 \text{ kJ/kg}$.

## 4. Inverting: Finding Quality from Measured Properties

If you measure the specific volume $v$ of a wet mixture at a known pressure, you can calculate quality:
$$x = \frac{v - v_f}{v_g - v_f}$$

This relationship is used in steam quality meters for industrial boilers — measuring the specific volume of flowing steam to determine how "wet" it is before it enters a turbine (wet steam erodes turbine blades).
