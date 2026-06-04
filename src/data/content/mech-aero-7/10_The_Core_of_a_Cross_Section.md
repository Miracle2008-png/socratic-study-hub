---
title: "The Core of a Cross-Section"
---

# The Core of a Cross-Section

When dealing with eccentrically loaded columns (axial load + bending), a critical civil engineering concept arises, particularly when dealing with brittle materials like concrete, stone, or unreinforced masonry.

These materials possess massive compressive strength but virtually zero tensile strength. If an eccentric load causes *any* tensile stress to develop in the cross-section, the material will instantly crack.

## 1. The Condition for Zero Tension

Recall the stress formula for eccentric loading (load $P$ offset by $e$ from the y-axis):
$$ \sigma = \frac{P}{A} - \frac{(P \cdot e) y}{I} $$

Assume $P$ is a compressive force (negative). The first term (axial) causes compression everywhere. The second term (bending) causes additional compression on one side, but causes **tension** on the other side.

To prevent the masonry from cracking, the total stress must be compressive (or exactly zero) everywhere. The worst-case point for tension is the outer edge furthest from the load ($y = -c$).
We set the stress at this edge to zero to find the absolute maximum allowable eccentricity $e$:

$$ 0 = -\frac{P}{A} - \frac{P \cdot e (-c)}{I} $$
$$ \frac{P}{A} = \frac{P \cdot e \cdot c}{I} $$
$$ e = \frac{I}{A \cdot c} $$

## 2. Defining the Core (Kern)

The equation $e = I / (Ac)$ defines a physical boundary around the centroid. 

If the compressive load $P$ is applied absolutely anywhere within this specific geometric area, the entire cross-section will remain in pure compression. No tension will develop anywhere.

This geometric area is called the **Core** (or Kern) of the cross-section. 

## 3. The "Middle Third" Rule

Let's calculate the core for a standard solid rectangular column of width $b$ and depth $h$.

*   Area $A = b \cdot h$
*   Moment of Inertia $I = \frac{1}{12} b \cdot h^3$
*   Distance to outer edge $c = h/2$

Substitute these into the core formula to find the maximum eccentricity $e_y$ along the y-axis:
$$ e_y = \frac{(bh^3/12)}{(bh)(h/2)} = \frac{bh^3/12}{bh^2/2} = \frac{1}{6}h $$

The load can be placed anywhere from $-h/6$ to $+h/6$. The total width of this safe zone is $2 \times (h/6) = h/3$.

This leads to the famous structural engineering axiom: **The Middle Third Rule**.
For a rectangular foundation or column, as long as the resultant compressive load acts within the middle third of the base, the entire base remains in compression, and there is no risk of the foundation lifting off the ground or the masonry cracking under tension.
