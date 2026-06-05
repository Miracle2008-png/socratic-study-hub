# Velocity Triangles and Kinematics

To use the Euler Turbomachine Equation ($w = U_2 V_{\theta 2} - U_1 V_{\theta 1}$), we must know the tangential fluid velocities ($V_{\theta}$). However, fluid does not flow straight through a rotating machine. To figure out the fluid's true trajectory, we use **Velocity Triangles**, which relate the absolute fluid velocity, the relative fluid velocity, and the blade velocity.

## 1. The Three Velocity Vectors

At any point in a turbomachine (specifically at the inlet "1" and outlet "2" of the rotor), the fluid flow is described by three vectors:

1. **Blade Velocity ($\vec{U}$):** The physical speed of the solid rotor blade at radius $r$. It always acts in the tangential direction. $U = \omega r$.
2. **Relative Velocity ($\vec{W}$):** The velocity of the fluid *as seen by an observer sitting on the rotating blade*. If the fluid perfectly follows the curvature of the blade, $\vec{W}$ is perfectly tangent to the blade angle $\beta$.
3. **Absolute Velocity ($\vec{V}$):** The true velocity of the fluid *as seen by a stationary observer standing outside the casing*. 

These three vectors form a closed triangle defined by basic relative motion:
$$\vec{V} = \vec{W} + \vec{U}$$

## 2. Resolving the Vectors

To plug values into the Euler equation, we must break the absolute velocity $\vec{V}$ into two orthogonal components:
- **Tangential Component ($V_\theta$ or $V_t$):** The swirl component parallel to $\vec{U}$. This generates torque.
- **Meridional Component ($V_m$ or $V_r$ or $V_a$):** The component perpendicular to $\vec{U}$ (radial in a centrifugal machine, axial in an axial machine). This dictates the mass flow rate. 
  $$\dot{m} = \rho A V_m$$

## 3. Drawing the Velocity Triangles

Consider a centrifugal pump impeller.

**Inlet Triangle (Point 1):**
- Fluid usually enters from a stationary pipe, meaning it has no initial swirl. Therefore, $\vec{V}_1$ points straight radially outward ($V_{\theta 1} = 0$, $V_1 = V_{m1}$).
- The blade is moving tangentially at $U_1$.
- The relative velocity $\vec{W}_1$ connects the tip of $U_1$ to the tip of $V_1$. 
- The angle of $\vec{W}_1$ dictates how the leading edge of the blade should be angled to slice into the water without shock or flow separation.

**Outlet Triangle (Point 2):**
- The blade is moving at $U_2$ (much faster than $U_1$ because $r_2 > r_1$).
- The fluid leaves the blade trailing edge at relative velocity $\vec{W}_2$. The angle of $\vec{W}_2$ ($\beta_2$) is the physical exit angle of the metal blade (assuming ideal flow).
- The absolute velocity $\vec{V}_2$ is the vector sum of $U_2$ and $W_2$. 
- Because the blade usually sweeps backward, $\vec{V}_2$ ends up pointing strongly in the tangential direction, giving a large $V_{\theta 2}$.

## 4. Using the Triangles for Design

Velocity triangles are the graphical heart of turbomachinery design. 
- If you know the required mass flow rate, you know $V_m$.
- If you know the motor speed and impeller radius, you know $U$.
- Using trigonometry on the outlet triangle, you can find $V_{\theta 2} = U_2 - V_{m2} \cot \beta_2$.
- Substitute this into the Euler equation:
  $$H = \frac{U_2 (U_2 - V_{m2} \cot \beta_2) - U_1 V_{\theta 1}}{g}$$
This equation links the physical geometry of the blade ($\beta_2$) directly to the head ($H$) the pump will produce!
