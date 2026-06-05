# Laminar vs. Turbulent Flow

The flow regime within the boundary layer radically alters both the wall friction (fluid mechanics) and the convection coefficient (heat transfer).

## 1. Laminar Flow

Flow starts as **laminar** at the leading edge of a flat plate.
- Fluid moves in highly ordered, parallel layers (laminae).
- There is no macroscopic mixing between layers.
- Heat transfer across the streamlines occurs *strictly by molecular diffusion* (conduction).
- Because molecular diffusion is relatively slow, the thermal boundary layer acts as a strong insulating blanket. The convection coefficient $h$ is relatively low.

## 2. Transition and Turbulent Flow

As the boundary layer grows thicker, tiny disturbances in the flow (surface roughness, free-stream vibrations) amplify rather than being damped out by viscosity. At a critical distance from the leading edge, the flow undergoes **transition**, breaking down into chaotic, swirling eddies. This is **turbulent flow**.

- Intense, macroscopic mixing occurs. Eddies violently rip hot fluid from near the wall and hurl it out into the cold free-stream, simultaneously dragging cold fluid directly down to the wall.
- This macroscopic transport bypasses the slow process of molecular diffusion.
- **Result:** Heat transfer skyrockets. The convection coefficient $h$ in a turbulent boundary layer is significantly higher than in a laminar one. Wall shear stress (friction) also increases drastically.

## 3. The Viscous Sublayer

Even in fully turbulent flow, the chaotic eddies cannot exist right next to the solid wall because vertical velocity must drop to zero (the wall blocks it). 

Therefore, immediately adjacent to the wall, there exists an infinitesimally thin, purely laminar layer called the **viscous sublayer** (or laminar sublayer).
- Across this microscopic layer, heat transfer must revert to pure conduction.
- This sublayer represents the primary thermal resistance in turbulent convection.
- Increasing free-stream velocity thins out this viscous sublayer, which is why higher velocities yield higher $h$ values.

## 4. The Reynolds Number ($Re$)

The transition from laminar to turbulent flow depends on the ratio of inertial forces (momentum of the fluid keeping it moving forward) to viscous forces (internal friction damping out disturbances). This ratio is the dimensionless **Reynolds Number ($Re$)**.

$$Re_x = \frac{\text{Inertial Forces}}{\text{Viscous Forces}} = \frac{\rho V x}{\mu} = \frac{V x}{\nu}$$

Where $x$ is the distance from the leading edge, $V$ is free-stream velocity, and $\nu$ is kinematic viscosity.

**Transition criteria for flow over a flat plate:**
- $Re_x \le 5 \times 10^5$: Flow is laminar.
- $Re_x \ge 5 \times 10^5$: Flow transitions to turbulent.

*(Note: The critical Reynolds number depends heavily on the geometry. For flow *inside* a pipe, the characteristic length is diameter $D$, and transition occurs much earlier, around $Re_D \approx 2300$.)*
