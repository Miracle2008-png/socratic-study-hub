# Mohr's Circle for Plane Strain

Because the transformation equations for plane strain are mathematically identical to those for plane stress, we can use the exact same geometric tool—Mohr's Circle—to analyze strain states.

## 1. Setting Up the Strain Circle

The coordinate axes for the Strain Mohr's Circle are defined as follows:
*   **Horizontal Axis:** Represents Normal Strain ($\epsilon$). Stretching (elongation) is positive (+, right). Shrinking (contraction) is negative (-, left).
*   **Vertical Axis:** Represents **half** the engineering Shear Strain ($\gamma / 2$). *Downward* is positive (+).

It is a very common mistake to plot full $\gamma$ on the vertical axis. The geometry of the circle only works if you plot $\gamma/2$.

## 2. Constructing the Circle

Given an initial measured state of strain on the surface of a part ($\epsilon_x, \epsilon_y, \gamma_{xy}$):

1.  **Plot Point A:** Coordinates are $(\epsilon_x, \gamma_{xy}/2)$. This represents the strain associated with the x-axis.
2.  **Plot Point B:** Coordinates are $(\epsilon_y, -\gamma_{xy}/2)$. This represents the strain associated with the y-axis.
3.  **Draw the Diameter:** Connect Point A to Point B.
4.  **Find the Center (C):** The circle crosses the horizontal axis at the average normal strain:
    $$ C = \epsilon_{avg} = \frac{\epsilon_x + \epsilon_y}{2} $$
5.  **Calculate the Radius (R):**
    $$ R = \sqrt{(\epsilon_x - C)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$
6.  **Draw the Circle.**

## 3. Extracting the Principal Strains

Just like the stress circle, the points where the circle crosses the horizontal axis represent the absolute maximum and minimum normal strains (the Principal Strains, $\epsilon_1$ and $\epsilon_2$).

At these points, the vertical coordinate ($\gamma/2$) is strictly zero. This physically means that if you cut a square element oriented at the principal angles, it will stretch into a rectangle but the $90^\circ$ corners will remain perfectly square (no shear warping).

The absolute lowest and highest points on the circle define the Maximum In-Plane Shear Strain.
$$ \frac{\gamma_{max, in-plane}}{2} = R \implies \gamma_{max, in-plane} = 2R = \epsilon_1 - \epsilon_2 $$

## 4. The 3D Reality of Plane Stress

A vital point of confusion arises when connecting Stress and Strain.
When a part is subjected to Plane **Stress** ($\sigma_x, \sigma_y \ne 0, \sigma_z = 0$), the material is free to expand or contract in the z-direction due to the Poisson effect.
Therefore, Plane Stress inherently produces a 3D state of strain ($\epsilon_z \ne 0$).

Conversely, true Plane **Strain** ($\epsilon_z = 0$) implies the material is physically blocked from moving in the z-direction. The walls blocking it must be exerting a massive reactive pressure on the material.
Therefore, Plane Strain inherently produces a 3D state of stress ($\sigma_z \ne 0$).
