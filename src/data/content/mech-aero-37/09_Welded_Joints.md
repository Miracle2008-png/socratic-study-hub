# Welded Joints

While bolts are excellent for components that must be disassembled for maintenance, welding is the primary method for permanently joining structural steel elements (frames, pressure vessels, ship hulls, and bridges).

Welding is not simply "gluing" metal together; it is a complex metallurgical process that essentially casts a new piece of metal directly between two existing pieces.

## 1. The Anatomy of a Weld

A welded joint consists of three distinct metallurgical zones:

1.  **The Weld Metal (Fusion Zone):** The area that was completely melted. It is a mixture of the base metal and the filler rod. Because it cooled rapidly from a liquid state, its crystal structure looks like a casting (often columnar grains).
2.  **The Heat-Affected Zone (HAZ):** The most critical area. This is the base metal immediately adjacent to the weld. It did not melt, but it was heated to extreme temperatures (perhaps 1000°C) and then cooled rapidly.
    -   This localized heat cycle completely alters the carefully engineered microstructure of the base metal.
    -   It often causes severe grain growth, destroying the toughness of the metal. In high-carbon steels, the rapid cooling can accidentally form brittle martensite.
    -   The HAZ is the weakest link in a weldment. A properly designed weld will almost never break through the weld metal; it will break in the HAZ.
3.  **The Base Metal (Unaffected Zone):** The metal far enough away that its temperature never rose enough to alter its microstructure.

## 2. Types of Welded Joints

The strength calculations for a weld depend entirely on its geometry.

**1. Butt Welds (Groove Welds):**
-   Two plates are placed edge-to-edge. Often, the edges are beveled (cut into a V-shape) so the welder can fill the gap with filler metal, ensuring full penetration through the entire thickness of the plate.
-   **Analysis:** If the weld fully penetrates the plates, and the filler metal is as strong as the base metal, the butt weld is assumed to be as strong as the plates themselves. It is simply analyzed as a solid piece of metal in tension or compression.

**2. Fillet Welds:**
-   Used for T-joints or lap joints (plates overlapping). The weld forms a triangular cross-section in the corner between the two plates.
-   This is the most common and cheapest weld because it requires no beveling or edge preparation.
-   **Analysis:** Fillet welds are complex. Regardless of how the external plates are loaded (tension, bending, or shear), the geometry of the triangular fillet means **it is assumed to always fail in shear**.
-   The failure plane is assumed to be the "throat" of the weld—the shortest distance from the root (the corner) to the face of the weld. For a standard 45° triangle, the throat thickness ($t$) is $0.707 \times h$ (where $h$ is the leg length of the weld).
-   Stress calculation: $\tau = \frac{F}{0.707 \cdot h \cdot L}$ (where L is the length of the weld).

## 3. Residual Stresses and Distortion

When a puddle of liquid steel freezes and cools down to room temperature, it shrinks (thermal contraction).

-   Because the weld metal is fused to the massive, cold base plates, it cannot shrink freely.
-   The base plates hold the weld metal stretched out. This puts the weld and the HAZ into a state of immense **residual tensile stress** (often reaching the yield strength of the material), even when the part is just sitting on a table with no load applied.
-   To compensate, the base plates are often pulled slightly inward, causing the entire structure to warp or distort (the classic "potato chip" effect when welding thin sheet metal).
-   **The Danger:** If a weld is already experiencing residual tensile stress near its yield point, adding a small external operational load can easily push it over the edge into failure.
-   **The Fix:** Critical welds (like in pressure vessels) must undergo **Post-Weld Heat Treatment (Stress Relieving)**. The entire structure is placed in a giant furnace and heated to around 600°C for several hours. This softens the metal just enough to allow the atoms to shift, relieving the internal rubber-band tension before the part is put into service.

## 4. Fatigue in Welds

Welds have terrible fatigue life compared to machined parts.
-   The transition from the flat plate to the raised crown of the weld acts as a severe geometric stress concentrator.
-   The root of the weld often contains microscopic un-fused gaps.
-   Slag inclusions or porosity (gas bubbles trapped in the frozen metal) act as internal cracks.
-   Therefore, when designing welded structures subjected to cyclic loads (like bridges or crane booms), engineers must drastically reduce the allowable stresses compared to static structures.
