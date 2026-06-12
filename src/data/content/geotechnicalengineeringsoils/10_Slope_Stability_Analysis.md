# Slope Stability Analysis

## Introduction to Slope Stability

Earth slopes exist everywhere—some occur naturally as hillsides and mountains, while others are engineered by humans as highway embankments, earth dams, levee systems, and deep excavations. A slope is fundamentally a mass of soil resting at an angle to the horizontal. Gravity relentlessly exerts a downward force on the soil mass, attempting to pull it to a flatter, more stable configuration. Resisting this gravitational pull is the sheer strength of the soil itself.

When the driving forces (gravity, water seepage, earthquake accelerations) exceed the resisting forces (soil cohesion and friction) along any continuous surface within the soil mass, a landslide or slope failure occurs.

Slope stability analysis is the engineering process of evaluating the safety of a slope against failure. It is quantified using a **Factor of Safety (FS)**, defined as the ratio of the available shear strength of the soil ($\tau_f$) to the average shear stress ($\tau_d$) required to maintain equilibrium along a potential failure surface:
$$ \text{FS} = \frac{\tau_f}{\tau_d} $$
If $\text{FS} > 1.0$, the slope is theoretically stable. In engineering practice, due to uncertainties in soil properties and analysis methods, a minimum $\text{FS}$ of 1.5 is typically required for permanent slopes.

## Modes of Slope Failure

Soil slopes can fail in several ways depending on the soil type, stratigraphy, and geometry:
1. **Translational Slide**: The failure surface is roughly planar and parallel to the face of the slope. This commonly occurs in infinite slopes (long, shallow surface layers) or where a weak soil layer exists parallel to the surface.
2. **Rotational Slide**: The failure surface is curved, resembling a spoon or a circular arc. The soil mass rotates backward as it slides. This is the most common failure mode in homogeneous cohesive soils (clays).
   - *Toe Failure*: The failure circle intersects the toe of the slope.
   - *Base Failure*: The failure circle passes below the toe, usually because a weak layer exists beneath the foundation of the slope.
3. **Flow Failure**: The soil mass behaves like a viscous fluid, flowing rapidly downslope. This often happens in loose, saturated sands subjected to seismic shaking (liquefaction) or highly sensitive clays.

## Infinite Slope Analysis

For a translational slide on a very long slope where the depth to the failure plane ($H$) is small compared to the length of the slope, the "infinite slope" model is used. The failure plane is assumed to be parallel to the slope face (angle $\beta$).

For a homogeneous soil with cohesion $c'$ and friction angle $\phi'$, the Factor of Safety against sliding along a plane at depth $H$ is:
$$ \text{FS} = \frac{c' + \gamma H \cos^2\beta \tan\phi'}{\gamma H \sin\beta \cos\beta} $$

If the soil is a clean sand ($c' = 0$), the equation simplifies drastically:
$$ \text{FS} = \frac{\tan\phi'}{\tan\beta} $$
This indicates that for a dry sand slope, stability is independent of depth. The slope is stable as long as the slope angle $\beta$ is less than the internal friction angle $\phi'$.

## Method of Slices for Rotational Failure

For complex slopes where failure is expected to be rotational (circular), engineers use the **Method of Slices**. The potential sliding mass above a trial circular failure surface is divided into a series of vertical slices.
The forces acting on each slice are evaluated:
- The weight of the slice ($W$).
- The normal and shear forces on the base of the slice.
- The inter-slice normal and shear forces acting on the vertical sides.

Because the system is statically indeterminate (too many unknown forces), various methods make different simplifying assumptions about the inter-slice forces to solve for the Factor of Safety.

### Fellenius (Ordinary) Method of Slices
The simplest method. It assumes that the inter-slice forces are purely horizontal and equal on both sides, effectively canceling them out. It satisfies moment equilibrium but not force equilibrium. It tends to be conservative (underestimating the true FS).
$$ \text{FS} = \frac{\sum [c'l + (W \cos\alpha - u \cdot l)\tan\phi']}{\sum W \sin\alpha} $$
Where $\alpha$ is the angle of the base of the slice, $l$ is the length of the slice base, and $u$ is the pore water pressure.

### Bishop's Simplified Method
A more rigorous and widely used approach. It assumes the inter-slice shear forces are zero but accounts for inter-slice normal forces. It satisfies vertical force equilibrium and overall moment equilibrium. Because FS appears on both sides of the resulting equation, it requires an iterative trial-and-error solution, perfectly suited for computer software.

## Mathematical Examples

### Example 1: Infinite Slope in Dry Sand

A highway is cut into a hillside composed of dry, clean sand. The sand has a unit weight of $17.5 \text{ kN/m}^3$ and an angle of internal friction $\phi' = 34^\circ$. The cut slope is designed at an angle of 2 Horizontal to 1 Vertical (2H:1V). Calculate the Factor of Safety against a shallow translational failure.

**Solution:**
First, determine the slope angle $\beta$ from the 2H:1V ratio.
$$ \tan\beta = \frac{\text{Vertical}}{\text{Horizontal}} = \frac{1}{2} = 0.5 $$
$$ \beta = \arctan(0.5) = 26.56^\circ $$

Since it is a clean, dry sand, $c' = 0$. We use the simplified infinite slope equation:
$$ \text{FS} = \frac{\tan\phi'}{\tan\beta} $$
$$ \text{FS} = \frac{\tan(34^\circ)}{\tan(26.56^\circ)} $$
$$ \text{FS} = \frac{0.6745}{0.5000} = 1.35 $$

The slope is stable ($\text{FS} > 1.0$), but an engineer might prefer $\text{FS} \ge 1.5$ for a permanent highway cut.

### Example 2: Infinite Slope with Seepage

Re-evaluate the slope from Example 1 ($\beta = 26.56^\circ, \phi' = 34^\circ, \gamma_{sat} = 19.5 \text{ kN/m}^3$), but assume heavy rainfall has caused groundwater to seep parallel to the slope face, completely saturating the soil right up to the surface. Calculate the new Factor of Safety. ($\gamma_w = 9.81 \text{ kN/m}^3$).

**Solution:**
When seepage is parallel to the slope face and the water table is at the surface, the effective stress on the failure plane is reduced by the upward seepage force.
The equation for an infinite slope with parallel seepage to the surface ($c'=0$) is:
$$ \text{FS} = \frac{\gamma'}{\gamma_{sat}} \cdot \frac{\tan\phi'}{\tan\beta} $$
Where buoyant (submerged) unit weight $\gamma' = \gamma_{sat} - \gamma_w = 19.5 - 9.81 = 9.69 \text{ kN/m}^3$.

$$ \text{FS} = \frac{9.69}{19.5} \cdot \frac{\tan(34^\circ)}{\tan(26.56^\circ)} $$
$$ \text{FS} = 0.4969 \cdot \frac{0.6745}{0.5000} = 0.4969 \cdot 1.349 = 0.67 $$

The Factor of Safety has dropped from 1.35 down to 0.67. Because $\text{FS} < 1.0$, the slope will fail. Water seepage is the most common trigger for landslides.

### Example 3: Fellenius Method Calculation for One Slice

In a slope stability analysis using the Ordinary Method of Slices, a specific slice has a width $b = 2 \text{ m}$ and an average height $h = 4 \text{ m}$. The angle of the base of the slice is $\alpha = 30^\circ$. The soil properties are $c' = 15 \text{ kPa}$, $\phi' = 25^\circ$, and $\gamma = 18 \text{ kN/m}^3$. The slice is above the water table ($u = 0$). Calculate the resisting force and driving force for this single slice.

**Solution:**
Calculate the weight of the slice ($W$):
$$ W = \text{Volume} \times \gamma = (b \cdot h) \cdot \gamma = (2 \cdot 4) \cdot 18 = 144 \text{ kN/m} $$

Calculate the length of the base of the slice ($l$):
$$ l = \frac{b}{\cos\alpha} = \frac{2}{\cos(30^\circ)} = \frac{2}{0.866} = 2.31 \text{ m} $$

Calculate the Driving Force (shear force parallel to the base due to weight):
$$ \text{Driving Force} = W \sin\alpha = 144 \cdot \sin(30^\circ) = 144 \cdot 0.5 = 72.0 \text{ kN/m} $$

Calculate the Resisting Force (available shear strength along the base):
Normal force on base $N = W \cos\alpha = 144 \cdot \cos(30^\circ) = 144 \cdot 0.866 = 124.7 \text{ kN/m}$.
Since $u = 0$, effective normal force $N' = N$.
$$ \text{Resisting Force} = c' \cdot l + N' \cdot \tan\phi' $$
$$ \text{Resisting Force} = (15 \cdot 2.31) + (124.7 \cdot \tan(25^\circ)) $$
$$ \text{Resisting Force} = 34.65 + (124.7 \cdot 0.466) = 34.65 + 58.11 = 92.76 \text{ kN/m} $$

For this individual slice, resisting force > driving force. The overall FS is the sum of resisting forces of all slices divided by the sum of driving forces of all slices.

## Engineering Applications

Slope stability dictates the geometry of massive infrastructure projects.

When designing an **earth dam**, engineers analyze dozens of potential failure circles under various conditions. The most critical condition for the upstream face is often "Rapid Drawdown". If the reservoir water level drops quickly, the water pressure pushing against the slope is removed, but the clay within the dam remains saturated with high pore pressures. This severely reduces effective stress and resisting forces. Engineers combat this by zoning the dam, placing highly permeable rockfill on the outer shells to allow rapid drainage.

In **open-pit mining**, the economics of the mine depend heavily on the slope angle. Steeper slopes mean less waste rock needs to be excavated to reach the ore. However, a failure could bury equipment and halt production. Geotechnical engineers use complex 3D limit equilibrium software (running Bishop's or Spencer's methods on thousands of trial surfaces) to find the absolute steepest slope that maintains a $\text{FS}$ of 1.2 or 1.3.

When constructing a **highway on a side-hill**, if the analysis shows $\text{FS} < 1.5$, engineers might utilize stabilization techniques rather than just flattening the slope (which requires more land). They might install horizontal drains to lower the water table, drive soil nails or ground anchors deep into the hillside to increase the normal force ($N'$) on the failure plane, or construct a retaining wall at the toe to provide a passive resisting force.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Define Slope Geometry & Stratigraphy"},
    {"id": "B", "label": "Determine Soil Properties (c', \\phi', \\gamma, S_u)"},
    {"id": "C", "label": "Define Groundwater Conditions"},
    {"id": "D", "label": "Select Failure Mechanism"},
    {"id": "E", "label": "Infinite Slope (Translational)"},
    {"id": "F", "label": "Circular Slip (Rotational)"},
    {"id": "G", "label": "Apply Infinite Slope Equation"},
    {"id": "H", "label": "Apply Method of Slices (Bishop, Fellenius)"},
    {"id": "I", "label": "Calculate Factor of Safety (FS)"},
    {"id": "J", "label": "Is FS >= Minimum Required (e.g., 1.5)?"},
    {"id": "K", "label": "Design Acceptable"},
    {"id": "L", "label": "Redesign: Flatten Slope, Add Drains, Soil Nails"}
  ],
  "edges": [
    {"source": "A", "target": "D"},
    {"source": "B", "target": "D"},
    {"source": "C", "target": "D"},
    {"source": "D", "target": "E"},
    {"source": "D", "target": "F"},
    {"source": "E", "target": "G"},
    {"source": "F", "target": "H"},
    {"source": "G", "target": "I"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J"},
    {"source": "J", "target": "K", "label": "Yes"},
    {"source": "J", "target": "L", "label": "No"}
  ]
}
```
