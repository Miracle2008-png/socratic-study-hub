# Head Loss and the Darcy-Weisbach Equation

When fluid flows through a pipe, viscous friction against the walls generates shear stress ($\tau_w$). This shear stress does irreversible work on the fluid, converting mechanical energy (pressure) into thermal energy (heat). 

In a horizontal pipe, this mechanical energy loss manifests as a steady drop in static pressure along the pipe length ($\Delta P$). In the mechanical energy equation, this is quantified as **Head Loss ($h_L$)** with units of meters (or feet).

## 1. The Energy Equation 

Recall the steady, incompressible, 1D energy equation between point 1 and point 2 in a pipe:
$$\frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_L$$

If the pipe has a constant diameter, $V_1 = V_2$. If it is horizontal, $z_1 = z_2$. The equation simplifies to:
$$h_L = \frac{P_1 - P_2}{\rho g} = \frac{\Delta P}{\rho g}$$

## 2. The Darcy-Weisbach Equation

How do we calculate this frictional head loss theoretically? 
A force balance on a cylindrical fluid element reveals that the pressure drop relates to the wall shear stress ($\tau_w$): $\Delta P = \frac{4L}{D}\tau_w$.

Dimensional analysis reveals that wall shear stress is proportional to the dynamic pressure of the fluid ($\frac{1}{2}\rho V^2$). We define the proportionality constant as the **Darcy Friction Factor ($f$)**.

This yields the universal foundation of all pipe flow calculations, the **Darcy-Weisbach Equation**:

$$\boxed{h_L = f \frac{L}{D} \frac{V^2}{2g}}$$
or, in terms of pressure drop:
$$\Delta P = f \frac{L}{D} \frac{\rho V^2}{2}$$

Where:
- $h_L$: Major head loss (meters)
- $f$: Darcy friction factor (dimensionless)
- $L$: Pipe length (m)
- $D$: Pipe inner diameter (m)
- $V$: Average fluid velocity (m/s)

This equation is valid for ALL fully developed flows: laminar or turbulent, circular or non-circular pipes. The entire engineering challenge reduces simply to finding the correct value for $f$.

## 3. Friction Factor in Laminar Flow

For laminar flow, the flow is governed strictly by viscosity, not roughness. We actually derived the exact pressure drop using the Navier-Stokes equations (Hagen-Poiseuille Law: $\Delta P = 8\mu L V / R^2$).

If we equate the theoretical Hagen-Poiseuille $\Delta P$ to the Darcy-Weisbach $\Delta P$ and solve for $f$, we get a wonderfully simple result:

$$f_{laminar} = \frac{64}{Re}$$

In laminar flow, the friction factor depends *only* on the Reynolds number. It is completely independent of how rough or smooth the pipe wall is.

## 4. Friction Factor in Turbulent Flow

For turbulent flow, chaotic eddies continuously smash into the pipe walls. The microscopic roughness of the pipe surface physically interrupts the laminar sublayer near the wall, significantly increasing momentum transfer and drag.

Therefore, for turbulent flow, the friction factor $f$ depends on both:
1. The **Reynolds Number ($Re$)**.
2. The **Relative Roughness ($\varepsilon/D$)**, where $\varepsilon$ is the average height of the microscopic bumps on the inner pipe wall (e.g., commercial steel is $\varepsilon \approx 0.045$ mm, PVC plastic is $\varepsilon \approx 0.0015$ mm).

Because turbulence is unsolveable analytically, $f$ must be determined empirically from experimental data, commonly read from the **Moody Chart** or the **Colebrook Equation**.
