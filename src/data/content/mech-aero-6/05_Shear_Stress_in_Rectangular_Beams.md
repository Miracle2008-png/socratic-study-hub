---
title: "Shear Stress in Rectangular Beams"
---

# Shear Stress in Rectangular Beams

The most common cross-section for timber beams is the solid rectangle. Let's apply the Shear Formula specifically to a rectangular cross-section of width $b$ and total height $h$.

## 1. The Parabolic Distribution

We want to find the shear stress $\tau$ at an arbitrary vertical distance $y$ from the Neutral Axis. 

1.  **Moment of Inertia:** For a rectangle, $I = \frac{1}{12} b h^3$.
2.  **Width:** The width $t$ is constant everywhere, $t = b$.
3.  **Calculate $Q$:** We draw a line at distance $y$. The area above this line is a rectangle of width $b$ and height $(h/2 - y)$.
    The centroid of this area is located halfway between $y$ and the top edge $h/2$, so $\bar{y}^\prime = y + \frac{1}{2}(h/2 - y) = \frac{1}{2}(h/2 + y)$.
    $$ Q = A^\prime \bar{y}^\prime = \left[ b \left(\frac{h}{2} - y\right) \right] \left[ \frac{1}{2}\left(\frac{h}{2} + y\right) \right] $$
    $$ Q = \frac{b}{2} \left[ \left(\frac{h}{2}\right)^2 - y^2 \right] $$

Substitute $I$, $t$, and $Q$ into the Shear Formula ($\tau = VQ/It$):
$$ \tau = \frac{V}{I b} \frac{b}{2} \left[ \left(\frac{h}{2}\right)^2 - y^2 \right] $$
$$ \tau = \frac{V}{2I} \left[ \left(\frac{h}{2}\right)^2 - y^2 \right] $$

This equation clearly demonstrates that the shear stress distribution over the depth of a rectangular beam is a perfect **parabola**.

## 2. Maximum Shear Stress

The maximum shear stress occurs where the parabola peaks, which is at the Neutral Axis ($y = 0$).

Substitute $y = 0$ into the equation:
$$ \tau_{max} = \frac{V}{2I} \left(\frac{h}{2}\right)^2 = \frac{V h^2}{8I} $$

Substitute the definition of $I$ for a rectangle ($I = bh^3/12$) back into the equation:
$$ \tau_{max} = \frac{V h^2}{8 (b h^3 / 12)} = \frac{12 V h^2}{8 b h^3} = \frac{3 V}{2 b h} $$

Because the total cross-sectional area of the rectangle is $A = bh$, the formula simplifies to a beautiful and highly useful engineering absolute:
$$ \tau_{max} = 1.5 \left( \frac{V}{A} \right) $$

**Conclusion:** For any solid rectangular beam, the absolute maximum shear stress (occurring at the Neutral Axis) is exactly 50% larger than the simple average shear stress ($V/A$) across the entire section. 

Engineers use this simple $1.5(V/A)$ formula constantly when designing rectangular timber beams to quickly check if the wood will fail in longitudinal shear (splitting down the middle) before it fails in bending.
