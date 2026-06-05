# Meshing and Grid Generation

The accuracy of a CFD simulation is overwhelmingly determined by the quality of the mesh. Garbage mesh in equals garbage physics out.

Meshing is the process of dividing the continuous 3D CAD model into millions of discrete control volumes (cells).

## 1. Cell Types

There are several geometric shapes used to build a 3D mesh:

*   **Tetrahedra (Tets):** Four-sided pyramids.
    *   *Pros:* Extremely easy to generate automatically. A computer algorithm can quickly fill any complex geometry (like a highly detailed car engine) with tets.
    *   *Cons:* Very inefficient computationally. You need many more tets to achieve the same accuracy as a hex mesh. They suffer from false diffusion if the flow is not aligned with the cell faces.
*   **Hexahedra (Hexes / Bricks):** Six-sided boxes.
    *   *Pros:* The "gold standard" for CFD accuracy. They align well with fluid flow, drastically reducing numerical errors. They require far fewer cells to fill a volume.
    *   *Cons:* Incredibly difficult and time-consuming to generate on complex curved geometries. Usually requires significant manual labor by the engineer to partition the CAD model into sweepable blocks.
*   **Polyhedra:** Cells with many faces (often 10-14, looking like honeycombs).
    *   *Pros:* The modern compromise. They are automatically generated from a tetrahedral base mesh but offer the accuracy and efficiency of a hex mesh.

## 2. Inflation Layers (Prism Layers)

Perhaps the single most critical aspect of CFD meshing is capturing the **boundary layer**.

As we learned from Prandtl, the boundary layer is incredibly thin, and the velocity gradient $\partial u/\partial y$ near the wall is immense.
If you use standard, equal-sized tetrahedral cells near the wall, the cell center might be located outside the boundary layer entirely! The solver will completely fail to calculate wall shear stress, drag, or flow separation.

To fix this, engineers use **Inflation Layers**.
These are layers of highly compressed, extremely thin, flat prism cells that wrap tightly around every solid surface.
*   They provide incredibly high resolution in the direction perpendicular to the wall (to capture the steep velocity gradient).
*   They are allowed to be long in the flow direction because the flow properties change very slowly parallel to the wall.

## 3. The $y^+$ Value

How thin do the inflation layers need to be?
This is governed by a dimensionless wall distance parameter called $y^+$ (y-plus).

$y^+$ represents the non-dimensional distance from the wall to the center of the very first mesh cell.
*   **If you want to resolve the viscous sublayer directly** (crucial for predicting heat transfer or exact separation points using models like $k-\omega$ SST), the first cell must be microscopic. You need a **$y^+ \approx 1$**.
*   **If you are using "Wall Functions"** (a mathematical shortcut used by the $k-\epsilon$ model that skips the sublayer and uses empirical formulas to bridge the gap to the outer flow), the first cell must be placed *outside* the viscous sublayer. You need a **$y^+$ between 30 and 300**.

If you use a Wall Function model with a $y^+$ of 5, or a sublayer-resolving model with a $y^+$ of 50, your drag and separation predictions will be entirely wrong.

## 4. Mesh Quality Metrics

Before running a simulation, the engineer must verify the mesh is not "broken".
*   **Skewness:** Measures how distorted a cell is compared to a perfect equilateral shape. Highly skewed cells ruin the interpolation mathematics and cause the solver to crash.
*   **Aspect Ratio:** The ratio of the longest side of a cell to the shortest side. High aspect ratios are acceptable inside the boundary layer (where flow is strictly parallel) but will destroy accuracy if placed in the free-stream chaotic flow.
*   **Orthogonal Quality:** Measures how perpendicular the vector between two cell centers is to the face connecting them. Low orthogonal quality leads to massive numerical errors.
