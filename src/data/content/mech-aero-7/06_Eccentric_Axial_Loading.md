---
title: "Eccentric Axial Loading"
---

# Eccentric Axial Loading

A special and highly common case of combined axial and bending loading occurs when a straight column or member is loaded with an axial force that does *not* pass perfectly through the geometric centroid of the cross-section.

This is known as **eccentric loading**. Even a slight deviation from the center axis can induce massive bending stresses that eclipse the simple axial compression, causing slender columns to fail unexpectedly.

## 1. Resolving the Eccentric Force

Consider a vertical column subjected to a compressive force $P$ applied at the top face.
Instead of acting at the centroid $C$, the force $P$ acts at a specific point with coordinates $(e_y, e_z)$ relative to the principal axes. 

The distances $e_y$ and $e_z$ are called the **eccentricities**.

To analyze the stress on any cross-section down the length of the column, we must use statics to "move" the force $P$ to the geometric centroid $C$.
When we translate a force, we must apply statically equivalent couple moments to maintain equilibrium.

Moving $P$ to the centroid creates three internal resultants:
1.  A central axial force: $N = P$
2.  A bending moment about the y-axis: $M_y = P \cdot e_z$
3.  A bending moment about the z-axis: $M_z = P \cdot e_y$

## 2. Superposition of the Stresses

The eccentric load $P$ has generated one uniform axial stress and two unsymmetric bending stresses. All three of these cause normal stress ($\sigma$) on the cross-section.

We superimpose the three formulas to find the stress at any specific coordinate point $(y, z)$:

$$ \sigma = \pm \frac{P}{A} \pm \frac{M_y z}{I_y} \pm \frac{M_z y}{I_z} $$

*Note:* Instead of memorizing strict sign conventions for this formula, it is far safer to look at the physical geometry of the load and apply signs logically.
*   If $P$ is compressive, $P/A$ is negative.
*   If the moment $M_y$ pushes the $(+z)$ quadrant into compression, then that term is negative for positive $z$ coordinates.

## 3. Finding the Neutral Axis

Just as with combined axial and bending loading, the Neutral Axis (the line where $\sigma = 0$) will be shifted away from the centroid. Furthermore, because there is unsymmetric bending about two axes, the Neutral Axis will be skewed at an angle.

We find the equation of the Neutral Axis line by setting the total stress to zero:
$$ 0 = \frac{P}{A} + \frac{P e_z z}{I_y} + \frac{P e_y y}{I_z} $$

Notice that the force $P$ cancels out entirely. The orientation and position of the Neutral Axis for an eccentrically loaded member depends purely on the geometry of the cross-section ($A, I_y, I_z$) and the location of the eccentricity ($e_y, e_z$), completely regardless of how heavy the load $P$ actually is.
