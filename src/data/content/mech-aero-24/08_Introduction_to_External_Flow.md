# Introduction to External Flow

While internal flow focuses on fluids confined by solid boundaries (focusing on pressure drops), **External Flow** deals with bodies completely immersed in an unbounded, infinite fluid stream. 

The primary engineering focus in external flow is calculating the resultant forces the fluid exerts on the body: **Lift** (the force perpendicular to the free-stream flow) and **Drag** (the force parallel to the free-stream flow).

## 1. The Origin of Aerodynamic Forces

When fluid flows over a solid body (like a car or an airplane wing), the body is subjected to exactly two distinct physical phenomena from the fluid:

1. **Pressure Distribution ($P$):** The normal stress pushing perpendicularly against every point on the surface of the body.
2. **Wall Shear Stress ($\tau_w$):** The tangential friction force dragging along the surface due to viscosity in the boundary layer.

If you integrate the pressure and shear stress over the entire complex 3D geometry of the vehicle, you get a single resultant 3D force vector. 
- The component of this vector pointing downstream is the **Drag Force ($F_D$)**.
- The component of this vector pointing upward is the **Lift Force ($F_L$)**.

## 2. Types of Drag

Drag is heavily dependent on the shape of the object.

**Friction Drag (Skin Friction):**
This is the drag caused entirely by the shear stress ($\tau_w$) dragging along the surface. 
- A highly streamlined, thin object like an airplane wing or a flat plate aligned with the flow experiences almost 100% friction drag. The pressure drag is negligible because the front area is so small.

**Pressure Drag (Form Drag):**
This is the drag caused entirely by pressure imbalances between the front and the back of the object. 
- When fluid flows over a blunt object (like a flat billboard facing the wind, or a sphere), it cannot negotiate the sharp curve at the back. The boundary layer detaches (separates), creating a massive, low-pressure chaotic "wake" region behind the object.
- High pressure pushing on the front + low pressure sucking on the back = massive Pressure Drag.
- For blunt objects, pressure drag dominates, and skin friction is negligible.

**Streamlining:** The entire goal of streamlining (making things teardrop shaped) is to prevent flow separation, thereby eliminating the low-pressure wake and killing pressure drag, even though the longer surface area slightly increases friction drag.

## 3. Lift and Drag Coefficients

Because aerodynamic forces scale with the dynamic pressure of the oncoming flow, engineers use dimensionless coefficients to describe an object's aerodynamic efficiency, completely independent of its size or speed.

**Drag Coefficient ($C_D$):**
$$C_D = \frac{F_D}{\frac{1}{2} \rho V^2 A}$$

**Lift Coefficient ($C_L$):**
$$C_L = \frac{F_L}{\frac{1}{2} \rho V^2 A}$$

Where:
- $\frac{1}{2} \rho V^2$: The dynamic pressure of the free-stream fluid.
- $A$: A reference area. 
  - For cars, spheres, and bluff bodies, $A$ is the **frontal projected area** (the silhouette you see looking head-on).
  - For airplane wings, $A$ is the **planform area** (the surface area you see looking from above).

The Drag Coefficient $C_D$ is a pure measure of aerodynamic "slickness". 
- A flat plate facing the wind: $C_D \approx 1.28$ (terrible).
- A sphere: $C_D \approx 0.47$ (better).
- A modern aerodynamic car: $C_D \approx 0.25$ (excellent).
- A perfect aerodynamic teardrop: $C_D \approx 0.04$ (the theoretical limit).
