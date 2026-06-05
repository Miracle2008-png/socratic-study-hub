# Moments of Inertia

While the Center of Mass (the "first moment of mass") tells us where an object balances, the **Moment of Inertia** (the "second moment of mass") tells us how difficult it is to *spin* that object.

In structural engineering, the "second moment of area" tells us how resistant a beam is to *bending*.

## 1. Mass Moment of Inertia (Dynamics)

For a single point mass $m$ rotating at a distance $r$ from an axis, its moment of inertia $I$ is:
$$ I = m r^2 $$

For a continuous solid, we sum up the contributions of infinitely many infinitesimal masses $dm$ using integration:
$$ I = \int r^2 \, dm $$
Where $r$ is the perpendicular distance from the axis of rotation to the mass element $dm$.

*   A solid sphere has $I = \frac{2}{5}mR^2$.
*   A thin hoop has all its mass at the outer edge, so $I = mR^2$. The hoop is much harder to start spinning than a sphere of the same mass and radius.

## 2. Area Moment of Inertia (Solid Mechanics)

In statics and mechanics of materials, engineers use the "Area Moment of Inertia" (usually denoted $I$, but sometimes $I_x, I_y$) to calculate the deflection of beams under load.

Instead of mass, we integrate over the Area $A$ of the beam's cross-section.
$$ I_x = \int y^2 \, dA $$
$$ I_y = \int x^2 \, dA $$

*   $I_x$ determines resistance to bending around the x-axis (like a diving board).
*   $I_y$ determines resistance to bending around the y-axis.

**Example: A Rectangular Beam**
Consider a wooden 2x4 joist supporting a floor. It is a rectangle of width $b$ and height $h$.
We place the origin at the centroid of the rectangle (so $y$ goes from $-h/2$ to $h/2$).
Take a horizontal strip of area: $dA = b \cdot dy$.
$$ I_x = \int_{-h/2}^{h/2} y^2 (b \, dy) = b \left[ \frac{y^3}{3} \right]_{-h/2}^{h/2} = b \left( \frac{h^3}{24} - \left(-\frac{h^3}{24}\right) \right) = \frac{bh^3}{12} $$

**Why does this matter?**
Notice the formula is $\frac{1}{12} b h^3$. The height $h$ is cubed, while the width $b$ is only to the first power.
*   If you lay a 2x4 flat on the ground (width=4, height=2), its bending resistance is proportional to $4 \times 2^3 = 32$.
*   If you stand a 2x4 vertically on its narrow edge (width=2, height=4), its bending resistance is proportional to $2 \times 4^3 = 128$.
*   It is **four times stronger** when placed vertically, which is why floor joists are always installed vertically!

## 3. The Parallel Axis Theorem

Often, it is easy to find the moment of inertia about an axis passing through the centroid ($I_c$). But what if the object rotates (or bends) around a different axis?

The Parallel Axis Theorem states that the moment of inertia $I$ around any axis is equal to the moment of inertia around the centroidal axis parallel to it, plus the area (or mass) times the square of the distance $d$ between the two axes.
$$ I = I_c + A d^2 $$
(or $I = I_c + m d^2$ for mass).

This theorem is immensely useful for calculating the moment of inertia of complex composite shapes (like an I-beam). You break the I-beam into three rectangles, calculate $I_c$ for each one, and use the parallel axis theorem to shift them all to the global neutral axis.
