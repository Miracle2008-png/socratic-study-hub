---
title: "External Work and Strain Energy"
---

# External Work and Strain Energy

Before we can use the Conservation of Energy ($U_e = U_i$), we must derive the mathematical formulas for both external work and internal strain energy.

## 1. External Work ($U_e$)

In physics, work is defined as Force multiplied by Distance: $W = F \cdot d$.
However, when a load $P$ is applied to a structure, it is not applied instantly. It is applied gradually, starting from zero and increasing to its final value $P$. 

As the force slowly increases, the deflection $\Delta$ also increases linearly (assuming an elastic material). 
If we plot Force vs. Deflection, we get a straight line starting at the origin. 
The External Work done is the **area under this curve** (a triangle).

Therefore, the work done by a gradually applied point load is:
$$ U_e = \frac{1}{2} P \Delta $$

Similarly, if a moment $M$ causes a rotation $\theta$, the work done by the moment is:
$$ U_e = \frac{1}{2} M \theta $$

*The $1/2$ factor is critical. It accounts for the fact that the load was applied gradually, not slammed onto the structure all at once.*

## 2. Strain Energy ($U_i$)

As external work deforms the structure, the material itself stores energy. 
Consider a microscopic cube of material with volume $dV$ experiencing a normal stress $\sigma$ and normal strain $\epsilon$.

The stress-strain diagram for a linear elastic material is a straight line. The area under this curve is the **Strain Energy Density ($u$)**:
$$ u = \frac{1}{2} \sigma \epsilon $$

Since Hooke's Law states $\sigma = E\epsilon$, we can rewrite this as:
$$ u = \frac{\sigma^2}{2E} $$

This is the energy stored in one tiny microscopic cube. To find the **Total Strain Energy ($U_i$)** stored in the entire macroscopic structural member, we must integrate the strain energy density over the entire volume ($V$) of the member:

$$ U_i = \int_V \frac{\sigma^2}{2E} dV $$

## 3. The Power of the Formula

The formula $U_i = \int \frac{\sigma^2}{2E} dV$ is the universal master equation for all internal strain energy. 
Whether the member is being pulled, twisted, or bent, we simply substitute the appropriate formula for stress ($\sigma$) into this integral. 

Because we square the stress ($\sigma^2$), the resulting strain energy is always **positive**, regardless of whether the member is in tension or compression. Energy is a positive scalar quantity, which is exactly why it simplifies structural analysis.
