# Bending Deformation of a Straight Member

Before we can derive an equation for the stress inside a bending beam, we must understand the kinematics of how the material physically deforms. We restrict our analysis to prismatic beams having a longitudinal plane of symmetry, with the bending moment applied precisely in this plane.

## 1. Kinematic Observations

Imagine a straight rubber beam with a grid drawn on its side. When we apply pure bending moments to the ends, the beam curves into an arc of a circle. We observe two fundamental kinematic facts:

1.  **Plane sections remain plane:** The vertical grid lines (representing cross-sections) remain perfectly straight and flat during bending. They do not warp.
2.  **Sections remain perpendicular to the axis:** The flat cross-sections simply pivot; they remain strictly perpendicular to the curving longitudinal axis of the beam.

## 2. The Neutral Surface

Because the beam bends into a curve, the longitudinal fibers at the top of the beam are crushed together (compressed and shortened), while the fibers at the bottom are stretched apart (elongated).

If the top is shrinking and the bottom is stretching, there must be a transitional plane somewhere in the middle of the beam that does neither. 
This surface undergoes zero change in length. It is called the **Neutral Surface**. 
The line where the neutral surface intersects the cross-section is called the **Neutral Axis (NA)**.

## 3. Deriving the Normal Strain ($\epsilon$)

Let the radius of curvature of the Neutral Surface be $\rho$.
Consider a longitudinal fiber located at an arbitrary distance $y$ *above* the Neutral Axis. 

*   The length of the unstressed fiber is the same as the length of the neutral surface: $L_0 = \rho \Delta \theta$.
*   The length of the fiber *after* bending, which is now at a radius of $(\rho - y)$, is: $L = (\rho - y) \Delta \theta$.

The normal strain $\epsilon$ in that specific fiber is the change in length divided by the original length:
$$ \epsilon = \frac{L - L_0}{L_0} = \frac{(\rho - y)\Delta\theta - \rho\Delta\theta}{\rho\Delta\theta} $$

Simplifying this yields the profound geometric relationship for bending strain:
$$ \epsilon = - \frac{y}{\rho} $$

## 4. Linear Variation of Strain

The equation $\epsilon = -y/\rho$ reveals that the normal strain in a bending beam varies **linearly** with the vertical distance $y$ from the Neutral Axis. 

*   At the Neutral Axis ($y = 0$), the strain is strictly zero.
*   The maximum strains occur at the outermost fibers (the top and bottom surfaces of the beam), where $y$ is maximum.

Let $c$ be the distance to the absolute outermost fiber. The maximum absolute strain is $\epsilon_{max} = c/\rho$. 
Therefore, the strain at any depth $y$ can be expressed as a ratio of the maximum strain:
$$ \epsilon = - \left(\frac{y}{c}\right) \epsilon_{max} $$
