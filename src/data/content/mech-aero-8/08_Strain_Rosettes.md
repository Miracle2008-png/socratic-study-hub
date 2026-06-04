---
title: "Strain Rosettes"
---

# Strain Rosettes

The entire process of finding principal stresses in real-world machinery hinges on physically measuring the strain on the surface of the part while the machine is operating.

## 1. The Measurement Problem

We use electronic strain gauges to measure strain. A strain gauge is a tiny zig-zag pattern of extremely fine wire glued to the metal. When the metal stretches, the wire stretches, its cross-section narrows, and its electrical resistance increases.

However, a standard strain gauge can only measure normal strain ($\epsilon$) in **one single direction** (along its axis). It cannot measure shear strain ($\gamma$) directly.

To fully define the state of plane strain ($\epsilon_x, \epsilon_y, \gamma_{xy}$) at a single point, we have exactly three unknown variables. Therefore, we must physically glue three separate strain gauges at the exact same location, but pointing in three different directions. This cluster of three gauges is called a **Strain Rosette**.

## 2. The General Strain Transformation Equation

If we glue a strain gauge at an arbitrary angle $\theta$ relative to the x-axis, the normal strain $\epsilon_\theta$ it measures is dictated by the fundamental transformation equation:

$$ \epsilon_\theta = \epsilon_x \cos^2\theta + \epsilon_y \sin^2\theta + \gamma_{xy} \sin\theta \cos\theta $$

If we glue three gauges (a, b, and c) at three known angles ($\theta_a, \theta_b, \theta_c$), we obtain three distinct equations. By reading the physical stretch of the gauges ($\epsilon_a, \epsilon_b, \epsilon_c$), we have three equations and exactly three unknowns ($\epsilon_x, \epsilon_y, \gamma_{xy}$).

## 3. The $45^\circ$ Rectangular Rosette

The most common, commercially available rosette arranges the three gauges at $0^\circ, 45^\circ$, and $90^\circ$ relative to a local x-axis.

*   Gauge A ($0^\circ$): $\epsilon_a = \epsilon_x \cos^2(0) + \dots \implies \mathbf{\epsilon_x = \epsilon_a}$
*   Gauge C ($90^\circ$): $\epsilon_c = \epsilon_x \cos^2(90) + \dots \implies \mathbf{\epsilon_y = \epsilon_c}$

We immediately have two of the unknowns just by reading gauges A and C. We use the reading from the diagonal gauge B ($45^\circ$) to find the hidden shear strain:

*   Gauge B ($45^\circ$): $\epsilon_b = \epsilon_x \cos^2(45) + \epsilon_y \sin^2(45) + \gamma_{xy} \sin(45)\cos(45)$
*   Solving for the shear strain yields: $\mathbf{\gamma_{xy} = 2\epsilon_b - \epsilon_a - \epsilon_c}$

## 4. The $60^\circ$ Delta Rosette

Another common arrangement spaces the three gauges equally at $0^\circ, 60^\circ$, and $120^\circ$ forming a triangle. 

Solving the simultaneous equations for this specific geometry yields:
*   $\epsilon_x = \epsilon_a$
*   $\epsilon_y = \frac{1}{3} (2\epsilon_b + 2\epsilon_c - \epsilon_a)$
*   $\gamma_{xy} = \frac{2}{\sqrt{3}} (\epsilon_b - \epsilon_c)$

Once $\epsilon_x, \epsilon_y$, and $\gamma_{xy}$ are calculated from the raw electrical readings of the rosette, the engineer uses Mohr's Circle to find the principal strains, applies Generalized Hooke's Law to convert them to principal stresses, and applies a failure theory to see if the machine is going to break.
