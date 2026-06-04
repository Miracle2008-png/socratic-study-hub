---
title: "Inelastic Bending"
---

# Inelastic Bending

The flexure formula ($\sigma = My/I$) assumes the bending stress never exceeds the proportional limit of the material. What happens to a beam if we apply a massive bending moment that pushes the outer fibers past their yield stress?

We assume the material is **perfectly elasto-plastic**: it behaves linearly up to the yield stress ($\sigma_Y$), and then yields perfectly horizontally (no strain hardening), holding constant at $\sigma_Y$.

## 1. The Yielding Process

As the applied bending moment $M$ increases:

1.  **Maximum Elastic Limit ($M_Y$):** The stress at the very top and bottom fibers just barely reaches $\sigma_Y$. The stress distribution across the depth of the beam is a perfect, sharp triangle. The moment causing this is the elastic yield moment, $M_Y$.
2.  **Partial Yielding:** As $M$ increases further, the outer fibers yield. Because strain remains linear ($\epsilon = -y/\rho$), the inner fibers are still elastic. The stress distribution is now a combination: a flat, constant rectangular zone of stress $\sigma_Y$ at the top and bottom edges (the plastic zones), transitioning into a linear triangular zone in the center (the elastic core).
3.  **Fully Plastic State ($M_p$):** The ultimate limit is reached when the elastic core shrinks to absolutely zero. The entire cross-section has yielded. The stress distribution is a massive uniform block of tension ($\sigma_Y$) on one side of the Neutral Axis, and a massive uniform block of compression ($-\sigma_Y$) on the other side.

## 2. Calculating the Plastic Moment ($M_p$)

The moment required to create this fully plastic state is the absolute maximum theoretical strength of the beam.

To calculate $M_p$, we must first locate the plastic Neutral Axis. 
Since the entire section is yielded at $\sigma_Y$, equilibrium of horizontal forces dictates:
$$ \sum F_x = \sigma_Y (Area_{compression}) - \sigma_Y (Area_{tension}) = 0 $$
Therefore, the plastic Neutral Axis divides the cross-section into two perfectly equal areas. *(Note: For asymmetric shapes like a T-beam, the plastic NA is in a different location than the elastic centroidal NA).*

The plastic moment $M_p$ is the moment created by these two rectangular blocks of stress:
$$ M_p = \sigma_Y (A_{comp}) \cdot \bar{y}_{comp} + \sigma_Y (A_{tens}) \cdot \bar{y}_{tens} $$

## 3. The Shape Factor ($k$)

The **Shape Factor** is the ratio of the fully plastic moment to the maximum elastic moment:
$$ k = \frac{M_p}{M_Y} $$

This factor represents the "hidden reserve strength" a specific cross-sectional shape has after it begins to yield.
*   For a solid rectangular beam, $k = 1.5$. It can carry 50% more moment after the outer fibers yield before catastrophic collapse.
*   For a wide-flange I-beam, $k \approx 1.14$. Because almost all the material is located at the outer edges (flanges), once the flanges yield, there is very little core material left to carry additional load. I-beams are highly efficient elastically, but have a very small plastic reserve.

## 4. Plastic Hinges

When a localized section of a beam reaches $M_p$, it can no longer carry any additional moment. It behaves exactly like a mechanical pin or hinge, but with a constant resisting friction equal to $M_p$. 
This "plastic hinge" will rotate freely, leading to the collapse mechanism of the entire structural framework. Predicting these collapse mechanisms is the basis of **Plastic Limit Design** in civil engineering.
