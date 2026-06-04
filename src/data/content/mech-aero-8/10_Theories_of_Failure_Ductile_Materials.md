---
title: "Theories of Failure: Ductile Materials"
---

# Theories of Failure: Ductile Materials

With the Principal Stresses ($\sigma_1, \sigma_2$) calculated, we must predict if a **ductile material** (like steel, aluminum, brass) will fail under this complex multiaxial loading.

Ductile materials fail by yielding (microscopic slip along crystallographic planes). This slip is driven entirely by **shear stress**. Therefore, ductile failure theories focus on maximum shear.

## 1. Maximum-Shear-Stress Theory (Tresca Criterion)

Henri Tresca proposed that a material will yield under a complex multiaxial stress state when the absolute maximum shear stress ($\tau_{abs,max}$) reaches the exact same value of shear stress that caused the material to yield in a simple uniaxial tensile test.

In a simple tensile test, the piece yields when the pull reaches $\sigma_Y$.
If we draw Mohr's Circle for simple tension (stresses are $\sigma_Y, 0, 0$), the absolute maximum shear stress is simply the radius: $\tau_{yield} = \sigma_Y / 2$.

Therefore, the Tresca Criterion states the part will fail if:
$$ \tau_{abs,max} \ge \frac{\sigma_Y}{2} $$

Recall that $\tau_{abs,max} = (\sigma_{max} - \sigma_{min}) / 2$. Substituting this gives the final design equation:
$$ |\sigma_1 - \sigma_2| \ge \sigma_Y \quad \text{(if } \sigma_1, \sigma_2 \text{ have opposite signs)} $$
$$ |\sigma_1| \ge \sigma_Y \quad \text{(if they have the same sign, because } \sigma_3=0 \text{ becomes } \sigma_{min} \text{)} $$

This creates a distinct hexagonal "safe zone" when plotted on a graph of $\sigma_1$ vs $\sigma_2$. If the coordinate $(\sigma_1, \sigma_2)$ falls inside the hexagon, the part is safe.

## 2. Maximum-Distortion-Energy Theory (von Mises Criterion)

Richard von Mises observed that the Tresca theory was often overly conservative. He proposed a theory based on energy rather than strict maximum stress.

When you stress a block of metal, you pump strain energy into it. Some energy changes its volume (hydrostatic energy), and some energy changes its shape by warping it (distortion energy). 
Yielding is purely a change in shape. Therefore, von Mises stated that yielding occurs when the **distortion energy** per unit volume reaches the exact same distortion energy that caused yielding in the simple tensile test.

The mathematical derivation results in the calculation of a single, equivalent **von Mises Stress ($\sigma_v$)**:
$$ \sigma_v = \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2} $$

The von Mises Criterion states the part will fail if the von Mises stress exceeds the yield strength:
$$ \sigma_v \ge \sigma_Y $$

When plotted on a graph of $\sigma_1$ vs $\sigma_2$, the von Mises safe zone is a perfect ellipse that circumscribes the Tresca hexagon. 
Because the ellipse extends slightly further out, von Mises allows for slightly higher combined stresses before predicting failure, and is widely considered the most accurate theory for ductile metals. It is the default theory used in modern FEA software.
