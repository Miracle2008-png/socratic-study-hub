---
title: "Torsional and Bending Loading"
---

# Torsional and Bending Loading

The combination of a twisting torque and a bending moment is one of the most critical combined loading scenarios in mechanical engineering, particularly for the design of rotating power transmission shafts. 

When gears or pulleys are mounted on a shaft, the tension in the drive belts causes severe transverse bending, while the rotation transmits pure torque.

## 1. Analyzing the State of Stress

Consider a solid circular shaft of radius $c$ subjected to a bending moment $M$ and a torque $T$.

We must find the critical points on the cross-section where the stresses are maximized.

**Bending Stress ($\sigma$):**
The bending moment causes a normal stress that varies linearly with distance $y$ from the neutral axis.
$$ \sigma = \frac{M y}{I} $$
This stress is absolutely maximized at the outer top and bottom fibers ($y = c$).
$$ \sigma_{max} = \frac{M c}{I} $$
Because it is a solid circle, $I = \frac{\pi}{4} c^4$.
Therefore, $\sigma_{max} = \frac{4M}{\pi c^3}$

**Torsional Shear Stress ($\tau$):**
The torque causes a shear stress that varies linearly with radius $\rho$.
$$ \tau = \frac{T \rho}{J} $$
This stress is maximized at the entire outer perimeter ($\rho = c$).
$$ \tau_{max} = \frac{T c}{J} $$
Because it is a solid circle, $J = \frac{\pi}{2} c^4$.
Therefore, $\tau_{max} = \frac{2T}{\pi c^3}$

## 2. Locating the Critical Point

Because both the maximum bending stress and the maximum torsional shear stress occur simultaneously at the extreme outer fibers (top and bottom), these specific points are the most heavily stressed particles in the entire shaft.

If we extract a microscopic square element from the top surface:
*   It experiences a massive normal stress $\sigma_x$ due to bending.
*   It experiences a massive shear stress $\tau_{xy}$ due to torsion.
*   (If there is a transverse shear force $V$, the transverse shear stress $\tau = VQ/It$ is precisely zero at the top surface, so it does not add to the stress state at this specific critical point).

This combined state of stress requires advanced transformation (Mohr's Circle) to find the true principal stresses that will cause the shaft to fracture.

## 3. Equivalent Bending Moment

Historically, before computers, engineers used simplified "equivalent moment" formulas to rapidly size shafts under combined bending and torsion. By substituting the stress equations into the principal stress formula, they derived an "equivalent bending moment" $M_e$ that would theoretically produce the exact same principal normal stress if it acted alone.

$$ M_e = \frac{1}{2} \left[ M + \sqrt{M^2 + T^2} \right] $$

A shaft could then be sized purely using the simple flexure formula ($\sigma = M_e c / I$), which saved massive amounts of calculation time. While less rigorously used today for final verification, it remains a powerful tool for initial conceptual sizing.
