---
title: "Introduction to Beam Deflection"
---

# Introduction to Beam Deflection

Up to this point, our structural analysis has focused entirely on **strength**. We calculated the internal stresses ($\sigma, \tau$) to ensure the material would not fracture or permanently yield under load.

However, a safe design requires more than just strength; it requires **stiffness**. A beam might be incredibly strong, but if it sags by two feet when a load is applied, it is completely useless. A sagging floor will crack plaster ceilings below it, misalign sensitive machinery, and cause doors to jam in their frames.

Therefore, we must rigorously calculate the **deflection** (displacement) and the **slope** (angle of rotation) of a beam at every point along its length.

## 1. The Design Criteria

Structural engineering codes specify strict maximum allowable deflections based on the beam's function.

*   **Standard Floor Joists:** The maximum allowable deflection is often restricted to $L / 360$ (where $L$ is the span length of the beam). For a 20-foot span, the beam cannot sag more than $2/3$ of an inch, regardless of how strong the steel is.
*   **Roof Beams:** Deflection might be limited to $L / 240$ to prevent water from ponding on a flat roof, which could lead to catastrophic collapse.
*   **Precision Machinery:** The bed of a CNC milling machine might have allowable deflections measured in micrometers to maintain machining tolerances.

## 2. Solving Statically Indeterminate Structures

Beyond simply verifying stiffness, calculating deflection is the absolute mathematical key to solving **statically indeterminate beams**.

If a continuous beam is supported by three columns, statics provides two usable equations ($\sum F_y = 0$, $\sum M = 0$), but there are three unknown reaction forces. The problem is unsolvable using statics alone.

To find the third equation, we must use kinematics. We analyze the deflection of the beam and enforce a **boundary condition**: the deflection exactly at the middle support must be strictly zero. This physical geometric constraint provides the final mathematical equation necessary to solve for all the internal forces.

## 3. Assumptions of Deflection Theory

To derive the mathematical models for deflection, we maintain the same foundational assumptions used in deriving the flexure formula:
1.  **Linear Elasticity:** The material obeys Hooke's law. If the load is removed, the beam springs perfectly back to straightness.
2.  **Small Deflections:** The maximum deflection is extremely small compared to the length of the beam. This allows us to make critical mathematical approximations (like assuming the arc length of the bent beam is roughly equal to its straight horizontal length).
3.  **Bending Dominates:** The deflection is caused almost entirely by internal bending moments. We assume the deflection caused by transverse shear strain is negligible (which is highly accurate for long, slender beams).
