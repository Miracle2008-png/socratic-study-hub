---
title: "Shear Stress in Beams"
---

# Shear Stress in Beams

Applying the Shear Formula ($\tau = VQ/It$) to various cross-sectional shapes reveals distinct and critical patterns of stress distribution that heavily influence structural design.

## 1. General Distribution Profile

Unlike normal bending stress, which varies perfectly linearly from the Neutral Axis, shear stress varies **parabolically** with depth.

Because $Q$ involves the multiplication of an area and a centroidal distance—both of which change simultaneously as you move your point of interest $y^\prime$ up or down—the resulting function for $Q$ (and thus $\tau$) is a second-order polynomial (a parabola).

*   **Top and Bottom Edges:** $\tau = 0$ (because $Q = 0$).
*   **Neutral Axis:** $\tau = \tau_{max}$ (because $Q$ is maximum).

## 2. Fasteners and Built-Up Beams

One of the most practical applications of the shear formula is analyzing "built-up" beams. These are beams constructed by joining multiple separate pieces of material together using nails, bolts, glue, or welds.

A classic example is a wooden box beam made by nailing a top plank to two vertical side planks. When this composite beam bends, the massive longitudinal shear stresses will try to slide the top plank horizontally along the side planks.

If the nails are not strong enough, the beam will split apart longitudinally and collapse.

## 3. Calculating Fastener Spacing (Shear Flow)

To design the connections in a built-up beam, we use a variation of the shear formula called **Shear Flow ($q$)**.

Shear flow is the longitudinal shear force transmitted per unit length along the beam.
$$ q = \tau t = \frac{V Q}{I} $$
*(Notice that the width $t$ has been multiplied out).*

Where:
*   $q$ is the shear flow (units: Force/Length, e.g., N/m or lb/in).
*   $Q$ is calculated strictly for the cross-sectional area of the specific part that is *being attached* by the fasteners (e.g., the area of the top plank only).

If you are using nails, and each nail can safely resist a specific shear force $F_{nail}$, the required longitudinal spacing $s$ between the nails is determined by:
$$ s = \frac{F_{nail}}{q} = \frac{F_{nail} \cdot I}{V Q} $$

This ensures that over any length $s$, the fasteners provide exactly enough resistance to perfectly balance the longitudinal shear flow attempting to tear the beam apart.
