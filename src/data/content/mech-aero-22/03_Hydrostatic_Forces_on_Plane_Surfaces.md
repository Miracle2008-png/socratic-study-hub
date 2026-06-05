---
title: "Hydrostatic Forces on Plane Surfaces"
---

# Hydrostatic Forces on Plane Surfaces

When a flat surface (like a dam wall, a submarine hatch, or an aquarium glass) is submerged in a static liquid, the fluid exerts a distributed pressure force on it. Because pressure increases with depth ($P = \rho g h$), the pressure distribution is non-uniform (triangular or trapezoidal). 

Engineers need to determine two things:
1. The **Magnitude** of the resultant force ($F_R$).
2. The **Location** (Center of Pressure) where this resultant force acts.

## 1. Magnitude of the Resultant Force ($F_R$)

Consider a plane surface of area $A$ inclined at an angle $\theta$ to the free surface. 
The total force is the integral of pressure over the area: $F_R = \int_A P \, dA$.

Since $P = \rho g h$ and depth $h = y \sin\theta$ (where $y$ is the distance measured down the inclined plane from the free surface):
$$F_R = \int_A (\rho g y \sin\theta) dA = \rho g \sin\theta \int_A y \, dA$$

The integral $\int y \, dA$ is the *first moment of area*, which equals the $y$-coordinate of the centroid ($y_c$) multiplied by the total area $A$. Therefore:
$$F_R = (\rho g y_c \sin\theta) A = (\rho g h_c) A$$

$$\boxed{F_R = P_c A}$$

**Conclusion:** The magnitude of the resultant hydrostatic force is simply the pressure at the **centroid** ($P_c$) of the surface multiplied by the total area $A$. It does not matter how the surface is rotated; if the centroid's depth $h_c$ stays the same, the total force stays the same.

## 2. Location of the Resultant Force (Center of Pressure)

While the magnitude is calculated using the centroid, the force does *not* act at the centroid. 
Because pressure is higher at the bottom of the surface than at the top, the resultant force must act somewhat below the centroid. This specific point of application is called the **Center of Pressure ($CP$)**.

To find the $y$-coordinate of the center of pressure ($y_p$), we sum the moments. The moment of the resultant force must equal the moment of the distributed pressure force:
$$y_p F_R = \int_A y P \, dA = \int_A y (\rho g y \sin\theta) dA = \rho g \sin\theta \int_A y^2 \, dA$$

The integral $\int y^2 \, dA$ is the *second moment of area* (moment of inertia) $I_{xx}$ about the free surface. Using the parallel axis theorem ($I_{xx} = I_{xc} + y_c^2 A$):
$$y_p = \frac{\rho g \sin\theta (I_{xc} + y_c^2 A)}{\rho g \sin\theta y_c A}$$

$$\boxed{y_p = y_c + \frac{I_{xc}}{y_c A}}$$

Where:
- $y_c$: Distance to the centroid from the free surface (along the incline).
- $y_p$: Distance to the center of pressure (along the incline).
- $I_{xc}$: Moment of inertia of the shape about its own centroidal axis.

**Key Observations:**
1. The term $\frac{I_{xc}}{y_c A}$ is always positive. Therefore, $y_p > y_c$. The center of pressure is *always* below the centroid.
2. As the depth increases ($y_c \to \infty$), the fraction $\frac{I_{xc}}{y_c A}$ approaches zero. For very deep surfaces, the center of pressure moves closer and closer to the centroid.
3. The horizontal center of pressure ($x_p$) depends on the product of inertia $I_{xyc}$. For shapes with a vertical axis of symmetry (rectangles, circles, isosceles triangles), $I_{xyc} = 0$, so $x_p = x_c$ (it lies on the axis of symmetry).
