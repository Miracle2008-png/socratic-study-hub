# Inelastic Buckling and the Tangent Modulus

Euler's buckling formula ($P_{cr} = \pi^2 EI/L^2$) relies heavily on the Modulus of Elasticity ($E$). It mathematically assumes that the material remains perfectly linear-elastic all the way up until the moment it buckles.

## 1. The Short Column Problem

For long, slender columns (high $L/r$ ratio), the critical buckling stress is very low. The column buckles elastically long before the stress ever reaches the yield point $\sigma_Y$. Euler's formula is perfectly valid.

However, for shorter, "stocky" columns (low $L/r$ ratio), Euler's formula might predict a critical buckling stress of 500 MPa. But if the steel yields at 250 MPa, Euler's formula is completely wrong. 
When the stress hits 250 MPa, the steel begins to yield plastically. The stress-strain curve flattens out. The material suddenly loses its stiffness. Because it loses its stiffness, it can no longer resist bowing, and it instantly buckles.

This is called **Inelastic Buckling**. 

## 2. Engesser's Tangent Modulus Theory

In 1889, F. Engesser proposed a brilliant modification to Euler's theory to account for inelastic buckling.

Look at a real, non-linear stress-strain curve for a ductile metal. 
*   In the linear elastic region, the slope of the curve is a constant: Young's Modulus ($E$).
*   Once the material yields, the curve bends over. The slope of the curve at any given high stress level is no longer $E$; it is a much smaller value.

This instantaneous slope at a specific stress level is called the **Tangent Modulus ($E_t$)**.
$$ E_t = \frac{d\sigma}{d\epsilon} $$

Engesser argued that if a column is loaded into the inelastic region, its resistance to bending is no longer governed by the original elastic stiffness $E$, but by the reduced tangent stiffness $E_t$.

He modified Euler's formula to create the **Tangent Modulus Formula**:
$$ P_{cr} = \frac{\pi^2 E_t I}{L^2} $$
$$ \sigma_{cr} = \frac{\pi^2 E_t}{(L/r)^2} $$

## 3. The Difficulty of Application

While theoretically elegant, the Tangent Modulus formula is notoriously difficult to use in practice.
To find $P_{cr}$, you need to know $E_t$. But $E_t$ depends on the stress level, which depends on the load $P_{cr}$ that you are trying to find!

You must test a physical sample of the exact material in a lab to generate the stress-strain curve, plot the slope $E_t$ against stress, and then use an iterative trial-and-error process to find the point where the equation balances.

Because this is impractical for daily engineering, professional design codes (like the AISC manual) have replaced the Tangent Modulus formula with simplified, empirical parabolic curves that perfectly blend the horizontal yield line into the sweeping elastic Euler curve, allowing for rapid, safe design of intermediate-length columns.
