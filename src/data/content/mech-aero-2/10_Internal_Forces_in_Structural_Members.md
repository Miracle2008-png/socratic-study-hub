---
title: "Internal Forces in Structural Members"
---

# Internal Forces in Structural Members

Until now, we have treated individual members (like beams or multi-force frame members) as rigid black boxes. We found the external forces and pin reactions acting on their surfaces, but we did not look *inside* the material.

To ensure a structural member won't break under load, engineers must determine the forces acting internally within the material itself. 

## 1. The Method of Sections for Beams

To find the internal forces at a specific point within a member, we use the method of sections:
1. Pass an imaginary cutting plane through the member at the point of interest.
2. Discard one half of the member.
3. The internal forces holding the two halves together are now exposed as external forces on the cut face of the remaining half.
4. Apply the equilibrium equations to this remaining half to solve for the exposed internal forces.

## 2. The Three Internal Loadings (2D)

In a two-dimensional coplanar analysis, the internal forces acting on the cut cross-section of a slender member reduce to three distinct resultant components:

1. **Normal Force ($N$):** The force component acting perpendicular (normal) to the cross-section. It measures the total tension or compression trying to elongate or crush the member.
2. **Shear Force ($V$):** The force component lying entirely within the plane of the cross-section. It measures the tendency for one part of the member to slide vertically past the other part.
3. **Bending Moment ($M$):** The couple moment acting on the cross-section. It measures the tendency of the member to bend or curve at that point.

## 3. Standard Sign Convention

To avoid chaos when communicating internal forces, engineers strictly adhere to a universal sign convention. 

If we cut a beam and analyze the **left segment**:
- Positive Normal Force ($N$) pulls out of the cut (Tension).
- Positive Shear Force ($V$) points **downward**.
- Positive Bending Moment ($M$) is **counterclockwise** (tends to make the beam "smile" or concave up).

If we analyze the **right segment**, the directions are exactly reversed to satisfy Newton's Third Law:
- Positive $N$ pulls out (Tension, points left).
- Positive $V$ points **upward**.
- Positive $M$ is **clockwise** (still makes the beam "smile").

## 4. 3D Internal Loadings

If the member is subjected to three-dimensional spatial loading, the cut cross-section will expose six internal resultants:
- 1 Normal Force ($N$)
- 2 Shear Forces ($V_y, V_z$)
- 1 Torsional Moment ($T$ or $M_x$, twisting the member)
- 2 Bending Moments ($M_y, M_z$)
