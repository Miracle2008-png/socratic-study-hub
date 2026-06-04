---
title: "Stress Concentrations in Bending"
---

# Stress Concentrations in Bending

Just as we saw in torsion, the flexure formula ($\sigma = My/I$) predicts the nominal average stress in a perfectly straight, uniform beam. 

If the beam's cross-section features sudden geometric discontinuities—such as holes drilled through the web, notches cut into the flanges, or sudden changes in depth (shoulder fillets)—the smooth longitudinal flow of internal normal stress is disrupted.

## 1. Flow Lines of Bending Stress

Imagine the tensile and compressive normal stresses as flow lines running parallel to the top and bottom edges of the beam. 
When these flow lines encounter a hole or a notch, they must abruptly bend to squeeze past the obstruction.

This crowding of stress lines results in a highly localized, immense spike in the normal stress exactly at the edge of the discontinuity. This is a **stress concentration**.

## 2. Stress Concentration Factor ($K$)

The absolute maximum stress at the discontinuity is calculated by multiplying the nominal stress by an empirical Stress Concentration Factor ($K$):

$$ \sigma_{max} = K \frac{M c}{I} $$

Where $Mc/I$ is the nominal stress calculated using the **net** cross-sectional area at the smallest part of the discontinuity (e.g., subtracting the area of the hole from the moment of inertia $I$).

## 3. Determining $K$ for Bending

The value of $K$ is entirely dependent on geometry and is independent of the material stiffness ($E$). Engineers determine $K$ using standardized charts based on extensive photoelastic testing or finite element analysis.

Common configurations include:
*   **Flat bar with a central circular hole:** $K$ depends on the ratio of the hole radius $r$ to the bar width $w$. The smaller the hole, the closer $K$ gets to its theoretical maximum limit of 3.0.
*   **Stepped bar with shoulder fillets:** $K$ depends on the fillet radius $r$, the smaller depth $d$, and the larger depth $D$. A sharper fillet yields a drastically higher $K$.

## 4. Static Loading vs. Fatigue

The severity of a stress concentration depends heavily on the material properties and the nature of the loading.

*   **Ductile Materials under Static Load:** If a ductile material (like mild steel) is loaded slowly and the localized stress at the notch exceeds the yield point, the material simply yields and stretches microscopically at that tiny spot. The excess stress is redistributed to the surrounding, lower-stressed material. For this reason, engineers often safely ignore $K$ factors for ductile materials under steady, static loads.
*   **Brittle Materials under Static Load:** Brittle materials (like glass or cast iron) cannot yield. When the localized stress at the notch hits the fracture limit, a crack immediately forms and propagates, shattering the part. $K$ factors must always be used for brittle materials.
*   **Cyclic/Fatigue Loading:** Even if a material is incredibly ductile, if the bending moment fluctuates repeatedly (e.g., an axle rotating under load), the localized yielding at the notch will eventually cause microscopic fatigue cracks to initiate. Fatigue failure is the cause of over 90% of mechanical breakages, and stress concentrations are the prime suspect. $K$ factors are absolutely critical for any fatigue design.
