# Flow Past Immersed Bodies

Until now, we have discussed "Internal Flow" (fluids flowing inside closed pipes). Now we shift to "External Flow"—how fluids behave when they flow *around* objects, like an airplane wing, an automobile, or a catalyst pellet in a chemical reactor.

## 1. Drag and Lift Forces

When a fluid flows past a solid body, it exerts mechanical forces on the surface of the object. These forces are resolved into two components:
- **Drag Force ($F_D$)**: The force acting parallel to the direction of flow. It resists the motion of the object.
- **Lift Force ($F_L$)**: The force acting perpendicular to the direction of flow.

The total drag force is calculated using the **Drag Coefficient ($C_D$)**, an empirical, dimensionless number similar to the friction factor $f$:
$$ F_D = C_D \cdot \left(\frac{1}{2} \rho V^2\right) \cdot A $$

Where:
- $\frac{1}{2} \rho V^2$ is the dynamic pressure of the oncoming fluid.
- $A$ is the frontal (projected) area of the object.

## 2. Friction Drag vs. Form Drag

The total Drag Force on an object is the sum of two entirely different physical phenomena:

1. **Friction Drag (Viscous Drag)**: Caused by the fluid shear stress rubbing directly against the surface of the object. A flat plate parallel to the flow experiences almost 100% friction drag.
2. **Form Drag (Pressure Drag)**: Caused by the pressure difference between the front of the object (high pressure stagnation point) and the back of the object (low pressure wake). A flat plate held perpendicular to the flow experiences almost 100% form drag.

For blunt objects like spheres and cylinders, the total drag is a combination of both.

## 3. The Boundary Layer

When fluid hits the leading edge of a flat plate, the no-slip condition forces the fluid touching the plate to a dead stop ($u=0$). The fluid above it slows down, and the fluid above that slows down. 

This creates a very thin region near the surface where the velocity grows from zero to the free-stream velocity ($V$). This thin region of intense velocity gradients and shear stress is the **Boundary Layer**.

Outside the boundary layer, the fluid velocity is uniform, there are no velocity gradients, and viscous forces are virtually zero (meaning the Bernoulli equation applies perfectly *outside* the boundary layer).

**Boundary Layer Transition**:
- Initially, the boundary layer is smooth and **Laminar**.
- As the fluid moves further down the plate, the boundary layer grows thicker until it becomes unstable and transitions into a **Turbulent** boundary layer.
- The transition depends on the local Reynolds number ($Re_x = \rho V x / \mu$), where $x$ is the distance from the leading edge. Transition typically occurs around $Re_x = 5 \times 10^5$.

## 4. Flow Separation

For blunt objects like cylinders or spheres, the boundary layer behaves strangely. As the fluid travels from the front of the sphere to the top (the widest part), it accelerates, and pressure drops (per Bernoulli). 
However, as the fluid moves from the top to the back of the sphere, it must slow down, meaning the pressure is *increasing* in the direction of flow.

This "adverse pressure gradient" pushes backward against the boundary layer. If the gradient is strong enough, it completely stops the fluid near the wall and forces it to flow backward. 

This rips the boundary layer off the surface of the object, a phenomenon called **Flow Separation**.

Behind the separation point, a massive, chaotic, low-pressure **Wake** forms. This low-pressure wake is the direct cause of Form Drag.

## 5. The Dimpled Golf Ball Paradox

For a smooth sphere at low Reynolds numbers, the boundary layer is laminar. Laminar boundary layers separate very early, creating a massive wake and huge form drag.

If you intentionally trip the boundary layer into turbulence (by adding dimples to a golf ball), the turbulent mixing pulls high-energy fluid down to the surface. This high-energy fluid can fight against the adverse pressure gradient much longer before separating. 

Therefore, the turbulent boundary layer stays attached to the back of the sphere longer, resulting in a much smaller wake. The dimpled golf ball has *more* friction drag, but significantly *less* form drag, resulting in a lower total drag coefficient ($C_D$) and allowing it to fly much further.

## 6. External Flow Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "force", "data": { "label": "Forces", "icon": "ArrowUpRight", "description": "Drag & Lift." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "type", "data": { "label": "Drag Types", "icon": "Activity", "description": "Friction & Form." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "bl", "data": { "label": "Boundary Layer", "icon": "Layers", "description": "Separation." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "wake", "data": { "label": "Wake", "icon": "Cloud", "description": "Low pressure." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "force", "target": "type", "animated": true },
    { "source": "type", "target": "bl", "animated": true },
    { "source": "bl", "target": "wake", "animated": true }
  ]
}
```
