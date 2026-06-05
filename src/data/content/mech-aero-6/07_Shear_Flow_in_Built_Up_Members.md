# Shear Flow in Built-Up Members

As introduced earlier, built-up members are constructed by joining multiple separate components using fasteners like nails, bolts, rivets, or welds. A typical example is a wooden box beam or a steel plate girder.

To design these connections, we must calculate the exact amount of longitudinal shear force the fasteners must resist. This is done using the concept of **shear flow**, $q$.

## 1. The Shear Flow Equation

Shear flow is the longitudinal shear force per unit length along the beam.
$$ q = \frac{V Q}{I} $$
Where:
*   $V$ is the total internal transverse shear force at the cross-section.
*   $I$ is the moment of inertia of the *entire* built-up cross-section.
*   $Q$ is the crucial variable. It is the first moment of area of the specific component(s) that are being held onto the beam by the fasteners in question.

## 2. Calculating Q for Fasteners

The calculation of $Q$ depends entirely on *which* fasteners you are analyzing.

**Example: A Wooden Box Beam**
Imagine a box beam made of a top plank, a bottom plank, and two vertical side webs, nailed together at the four corners.
You want to find the required spacing for the nails holding the top plank to the two side webs.

1.  **Identify the connected part:** The nails are holding the *top plank* onto the rest of the beam.
2.  **Calculate Q:** $Q$ is calculated using *only* the cross-sectional area of the top plank ($A^\prime$) and the distance from the Neutral Axis to the centroid of the top plank ($\bar{y}^\prime$).
    $$ Q = A_{top} \cdot \bar{y}_{top} $$

## 3. Fastener Spacing and Capacity

Once you have the shear flow $q$ (in N/m or lb/in), you relate it to the strength of your fasteners.

Let $F_{allow}$ be the allowable shear force a single fastener (one nail, one bolt) can safely carry.
Let $s$ be the longitudinal spacing between the fasteners along the length of the beam.

The total shear force generated over a length $s$ is: $F_{total} = q \cdot s$.
This total force must be resisted by the fasteners in that segment.

**Crucial detail:** How many rows of fasteners are resisting the force?
In our box beam example, the top plank is held down by *two* rows of nails (one row into each side web). Therefore, over a length $s$, there are 2 nails resisting the force.
$$ q \cdot s = n \cdot F_{allow} $$
Where $n$ is the number of fastener rows at the connection interface.

Rearranging to solve for the required spacing:
$$ s = \frac{n \cdot F_{allow}}{q} = \frac{n \cdot F_{allow} \cdot I}{V Q} $$

If the beam is glued or continuously welded instead of nailed, the connection must simply be designed such that the allowable shear strength of the glue/weld per unit length ($\tau_{allow} \cdot t_{glue}$) is strictly greater than the shear flow $q$.
