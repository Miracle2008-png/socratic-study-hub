---
title: "Virtual Work Applied to Beams and Frames"
---

# Virtual Work Applied to Beams and Frames

While trusses deform purely by axial stretching, beams and rigid frames deform primarily by bending. We can adapt the Virtual Work equation to handle continuous bending structures.

## 1. The Bending Virtual Work Equation

For a truss, the internal virtual work was the sum of discrete members ($n \cdot dL$). For a continuous beam, the internal virtual work is the integral of the virtual internal moment ($m$) acting through the real internal rotation angle ($d\theta$).

From beam theory, we know the real rotation over a small slice $dx$ is related to the real internal moment ($M$) by: $d\theta = (M / EI) dx$.

Substituting this into the virtual work concept yields the beam equation:

$$ 1 \cdot \Delta = \int_0^L \frac{m M}{EI} dx $$

Where:
*   **$1$** is the virtual unit load applied at the point of interest.
*   **$\Delta$** is the physical deflection you want to calculate.
*   **$m$** is the algebraic equation for the virtual internal moment caused by the unit load.
*   **$M$** is the algebraic equation for the real internal moment caused by the real loads.

## 2. Finding Slope ($\theta$) instead of Deflection

What if you want to find the angle of slope ($\theta$) at a specific point on the beam, rather than the vertical sag?
Virtual Work handles this beautifully. Instead of applying a virtual unit *force* of 1.0, you apply a virtual unit *moment* (a couple) of 1.0 at the point of interest.

The external virtual work is now $1.0 \cdot \theta$, giving the equation:
$$ 1 \cdot \theta = \int_0^L \frac{m_\theta M}{EI} dx $$
(Where $m_\theta$ is the internal virtual moment caused by the 1.0 unit couple).

## 3. The Integration Process

To solve a beam using Virtual Work:
1.  **Real System:** Analyze the real beam. Write the equation $M(x)$ for the internal moment. If there are multiple loads, you must slice the beam into segments and write an $M(x)$ for each segment.
2.  **Virtual System:** Remove all loads. Apply a 1.0 load at the target point. Write the equation $m(x)$ for the internal virtual moment for the exact same segments.
3.  **Integrate:** Multiply the two equations together ($m \cdot M$), divide by $EI$, and integrate over the length of the segment. Sum the results of all segments.

**Why use this over Integration or Macaulay?**
Virtual work might seem tedious because you have to analyze the beam twice. However, it is vastly superior when analyzing **rigid frames** (structures with vertical columns bolted rigidly to horizontal beams). The geometric compatibility equations for frames are a nightmare. With Virtual Work, you simply write $M(x)$ and $m(x)$ for the column, integrate, and add it to the integration of the beam. The scalar nature of energy bypasses the complex 3D geometry entirely.
