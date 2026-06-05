# Reinforced Concrete Beams

Concrete is an exceptional building material because it is extremely cheap, fire-resistant, and highly resistant to compressive stresses. 
However, it has one fatal flaw: its tensile strength is practically zero. It is incredibly brittle and cracks under the slightest tension.

Because bending a beam inherently puts one side of it into tension, a plain concrete beam would snap instantly under its own weight. To solve this, engineers embed steel reinforcing rods (rebar) inside the concrete on the side subjected to tension. This creates a highly specialized composite beam.

## 1. The Uncracked vs. Cracked Section

If the bending moment is very small, the tensile stress in the concrete might remain below its microscopic fracture limit. The entire cross-section remains intact (uncracked). This can be analyzed using the standard transformed-section method.

However, design codes dictate that beams must be analyzed under full service loads, at which point the concrete in the tension zone will inevitably crack. 

**Fundamental Assumption:** We assume that the cracked concrete carries absolutely zero tensile force. The steel rebar carries 100% of the tensile load. The concrete *only* carries the compressive load above the Neutral Axis.

## 2. Transforming the Cracked Section

We use the transformed-section method, treating the concrete as the base material.
The transformation factor is: $n = E_{steel} / E_{concrete}$

1.  **Transform the Steel:** We transform the cross-sectional area of the steel rebar ($A_s$) into an equivalent area of fictitious concrete: $A_{transformed} = n A_s$. Because the steel rods are relatively thin, we treat this area as a concentrated horizontal strip located at the depth of the rebar.
2.  **Remove the Tensile Concrete:** We completely erase all concrete located below the Neutral Axis from our drawing. 

We are left with a T-shaped or L-shaped cross-section: a solid rectangular block of concrete in compression at the top, and a floating strip of transformed steel at the bottom.

## 3. Locating the Neutral Axis

To use the flexure formula, we must find the Neutral Axis of this cracked transformed section. Let the Neutral Axis be located at a depth $x$ from the top compressive face.

We equate the first moment of area of the compressive concrete to the first moment of area of the transformed steel about the Neutral Axis:

$$ (\text{Area of Concrete}) \times (\text{distance to its centroid}) = (\text{Area of Transformed Steel}) \times (\text{distance to its centroid}) $$
$$ (b \cdot x) \cdot \left(\frac{x}{2}\right) = (n A_s) \cdot (d - x) $$

Where:
*   $b$ = width of the concrete beam.
*   $d$ = effective depth (from the top face down to the center of the steel rebar).

This yields a quadratic equation for $x$. Solving for the positive root determines the exact depth of the compressive concrete block.

## 4. Stress Calculation

Once $x$ is found, the Moment of Inertia ($I$) of the cracked transformed section is calculated about the Neutral Axis. 

The maximum compressive stress in the concrete (at the top fiber) is:
$$ \sigma_{concrete} = \frac{M x}{I} $$

The maximum tensile stress in the steel rebar is found by applying the flexure formula at depth $(d-x)$ and multiplying by the transformation factor $n$:
$$ \sigma_{steel} = n \left[ \frac{M (d - x)}{I} \right] $$
