---
title: "Axial and Torsional Loading"
---

# Axial and Torsional Loading

The combination of an axial force and a torsional moment is a classic loading scenario, commonly found in drive shafts that are also subjected to thrust (such as a ship's propeller shaft or a drill bit pushing into rock).

This is a very straightforward combined loading case because the resulting stresses act on completely different planes and do not mathematically interfere with each other during the initial superposition phase.

## 1. Analyzing the Cross-Section

Consider a solid circular shaft of radius $c$ subjected simultaneously to a tensile axial force $P$ and a twisting torque $T$.

We make a transverse cut through the shaft to expose the cross-section. 

**Normal Stress ($\sigma$):**
The axial load $P$ causes a uniform normal stress pulling the entire face outward.
$$ \sigma_x = \frac{P}{A} $$
This stress is identical for every single point on the cross-section.

**Shear Stress ($\tau$):**
The torque $T$ causes a shear stress that varies linearly from zero at the center to a maximum at the outer rim.
$$ \tau = \frac{T \rho}{J} $$

## 2. The Critical Point

To design the shaft, we must locate the **critical point**—the point on the cross-section experiencing the most severe combination of stresses.

*   At the center ($\rho = 0$), the normal stress is $P/A$, but the shear stress is zero.
*   At the outer surface ($\rho = c$), the normal stress is still $P/A$, but the shear stress is at its absolute maximum, $\tau_{max} = Tc/J$.

Therefore, the critical point (actually, an entire critical ring) is located anywhere on the outer boundary of the shaft.

## 3. The State of Stress on the Outer Surface

Let's extract an infinitesimally small square element of material from the top outer surface of the shaft.

If we draw this small square block, we show the stresses acting on its faces:
1.  **Normal Stress:** An outward-pulling arrow $\sigma_x = P/A$ acts on the right face (and an equal/opposite arrow on the left face for equilibrium).
2.  **Shear Stress:** A tangential arrow $\tau_{xy} = Tc/J$ acts along the top edge of the right face. (To satisfy rotational equilibrium, complementary shear arrows must be drawn on the top, bottom, and left faces, forming a "pinwheel" effect).

This element is now in a classic state of **plane stress** (stresses acting in the x and y directions, with zero stress on the outer Z-face pointing into the air). We have successfully mapped the combined macroscopic loads ($P, T$) into the microscopic reality ($\sigma_x, \tau_{xy}$) for the most stressed particle in the shaft.
