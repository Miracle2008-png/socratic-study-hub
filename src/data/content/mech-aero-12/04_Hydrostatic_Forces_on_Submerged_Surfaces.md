---
title: "Hydrostatic Forces on Submerged Surfaces"
---

# Hydrostatic Forces on Submerged Surfaces

Knowing that pressure varies with depth, we must now calculate the total force that a body of water exerts on a flat submerged surface (like the wall of a dam, a floodgate, or a ship hull plate). This is a foundational problem in hydraulic engineering.

## 1. The Resultant Hydrostatic Force ($F_R$)

The pressure varies with depth, so we cannot simply multiply one pressure value by the area. We must integrate the pressure distribution over the entire surface.

Consider a flat, inclined plate submerged in a liquid of specific weight $\gamma$. The plate has area $A$. The centroid of the plate is at a depth $\bar{h}$ below the free surface.

Integrating the pressure over the area yields the total **Resultant Force**:
$$ F_R = \int P \, dA = \int (\gamma h) \, dA = \gamma \int h \, dA $$

Recognizing that $\int h \, dA = \bar{h} A$ (by the definition of the centroid of the area):
$$ \boxed{F_R = \gamma \bar{h} A = P_C \cdot A} $$

**This remarkable result states: The total hydrostatic force on any flat submerged surface equals the pressure at the centroid of the surface ($P_C$) multiplied by the total area of the surface ($A$).**

It does not matter if the plate is tilted at an angle. The total force only depends on the depth of the centroid and the total area.

## 2. The Center of Pressure ($y_P$)

Although the total force $F_R$ is calculated using the centroidal pressure, the resultant force does **not** act at the centroid. Because pressure increases with depth, the lower portion of the plate has higher pressure and contributes more force. This pulls the resultant force's point of action downward, below the centroid.

The specific point where the resultant force acts is called the **Center of Pressure**. Its location (measured along the inclined plate from the free surface) is:
$$ y_P = \bar{y} + \frac{I_{xc}}{\bar{y} A} $$

Where:
*   $\bar{y}$ is the distance from the free surface to the centroid of the plate (measured along the inclined angle).
*   $I_{xc}$ is the **Second Moment of Area** (Moment of Inertia) of the plate's cross-section about its own centroidal x-axis.
*   The term $\frac{I_{xc}}{\bar{y} A}$ is always positive, confirming that the center of pressure is always below the centroid.

## 3. Engineering Significance

If a civil engineer is designing a hinged floodgate at the bottom of a dam, they must know exactly *where* the resultant water force acts. This point determines the moment arm for calculating the hinge reaction force. Placing the hinge at the wrong height could lead to catastrophic collapse of the gate.
