# Hydrostatic Forces on Curved Surfaces

Calculating hydrostatic forces on curved surfaces (like arched dams, spherical tanks, or cylindrical drain pipes) is more complex than for plane surfaces. The pressure force on a differential area $dA$ always acts normal (perpendicular) to the surface. On a curved surface, the surface normal continuously changes direction, meaning the direction of the pressure force continuously changes.

Integrating these varying vectors directly is difficult. Instead, engineers use a much simpler method: **analyzing the fluid volume enclosed by the curved surface**.

## 1. The Projected Area Method

Consider a curved surface submerged in a fluid. We isolate a block of fluid bounded by:
1. The curved surface itself.
2. Vertical planes extending straight up from the edges of the curved surface to the free surface.
3. A horizontal plane at the free surface.

This enclosed volume of fluid is static, so it must be in equilibrium ($\sum F = 0$). We analyze the horizontal and vertical forces separately.

## 2. Horizontal Force Component ($F_H$)

The horizontal force exerted by the fluid on the curved surface is exactly opposed by the horizontal force acting on the imaginary vertical projection of that surface.

**Rule:** The horizontal component of hydrostatic force on a curved surface is exactly equal in magnitude and line of action to the hydrostatic force acting on the **vertical projection** of that curved surface.

$$F_H = F_{\text{projected\_vertical\_plane}}$$

You calculate this exactly like a plane wall: $F_H = P_c A_{proj}$, where $A_{proj}$ is the area of the vertical shadow of the curved surface, and $P_c$ is the pressure at the centroid of that shadow. The line of action goes through the center of pressure of the projected plane.

## 3. Vertical Force Component ($F_V$)

The vertical forces keeping the fluid block in equilibrium are the weight of the fluid block itself ($W$) pushing down, and the vertical reaction from the curved surface pushing up.

**Rule:** The magnitude of the vertical component of hydrostatic force on a curved surface is exactly equal to the **weight of the fluid column directly above the surface** extending up to the free surface (real or imaginary).

$$F_V = W = \gamma \cdot \text{Volume}$$
Where $\gamma = \rho g$ is the specific weight of the fluid, and Volume is the geometric volume of the fluid enclosed between the curved surface and the free surface.

The line of action of $F_V$ passes straight through the **centroid of that fluid volume**.

## 4. The Resultant Force ($F_R$)

Once the horizontal ($F_H$) and vertical ($F_V$) components are calculated, the resultant force vector is easily found:

**Magnitude:** 
$$F_R = \sqrt{F_H^2 + F_V^2}$$

**Direction (Angle from horizontal):**
$$\alpha = \tan^{-1}\left(\frac{F_V}{F_H}\right)$$

**Line of Action (Special Case for Circular/Spherical Surfaces):**
For any surface that forms an arc of a circle or sphere, every elemental pressure force $dF$ acts perfectly normal to the surface, meaning it points directly toward (or directly away from) the center of curvature. 
Therefore, **the resultant force vector $F_R$ must pass exactly through the center of curvature.** This geometric fact drastically simplifies calculating moments on hinges or pivots located at the center of curvature.
