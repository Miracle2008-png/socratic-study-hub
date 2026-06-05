# Torsion of Noncircular Solid Shafts

The fundamental kinematic assumption that planar cross-sections remain perfectly flat during twisting is only true for circular and tubular shafts (because they are axisymmetric). 

If a solid shaft has a non-circular cross-section (e.g., a square, rectangle, triangle, or ellipse), the cross-section will severely distort out-of-plane when twisted. This phenomenon is known as **warping**.

## 1. The Breakdown of the Torsion Formula

Because of warping, the shear strain does not vary linearly from the center. Consequently, the standard torsion formula ($\tau_{max} = Tc/J$) is completely invalid for non-circular shafts. Using it will result in catastrophic, unsafe underestimations of stress.

The exact mathematical analysis of non-circular torsion is highly complex and requires advanced theory of elasticity (often using Prandtl's membrane analogy).

## 2. Shear Stress Distribution in Rectangular Shafts

The most counter-intuitive result of non-circular torsion concerns the location of the maximum shear stress.

In a circular shaft, maximum stress occurs everywhere along the outer boundary. 
If we twist a square shaft, one might instinctively guess the maximum stress occurs at the sharp corners, because they are furthest from the center axis.

**This is entirely wrong.** 
The theory of elasticity dictates that the shear stress must be directed perfectly tangent to the boundary. At a sharp $90^\circ$ corner, the stress must be tangent to two perpendicular faces simultaneously. The only mathematical way a single vector can be tangent to two perpendicular lines is if the vector has a magnitude of zero. 

Therefore, **the shear stress at the sharp corners of a rectangular shaft is exactly zero.**

The maximum shear stress actually occurs at the **midpoints of the widest sides** of the cross-section.

## 3. Empirical Formulas for Rectangular Shafts

For a solid rectangular shaft with width $a$ and height $b$ (where $a \ge b$), the maximum shear stress and the angle of twist can be approximated using empirical formulas derived from elasticity theory:

$$ \tau_{max} = \frac{T}{c_1 a b^2} $$
$$ \phi = \frac{TL}{c_2 a b^3 G} $$

Where $c_1$ and $c_2$ are specific numerical coefficients determined by the aspect ratio ($a/b$) of the cross-section. These coefficients are tabulated in engineering handbooks.
- For a perfect square ($a/b = 1$), $c_1 = 0.208$ and $c_2 = 0.141$.
- As the rectangle becomes very thin and wide ($a/b \to \infty$), both $c_1$ and $c_2$ approach exactly $1/3$.

This analysis proves that solid non-circular cross-sections are highly inefficient at transmitting torque compared to circular shafts, as massive portions of the material (like the corners) carry almost zero stress and act purely as dead weight.
