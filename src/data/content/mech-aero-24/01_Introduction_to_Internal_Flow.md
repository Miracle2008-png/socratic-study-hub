# Introduction to Internal Flow

Fluid flow can be broadly categorized as **internal** (fully bounded by solid surfaces, like flow in pipes and HVAC ducts) or **external** (flowing over an object surrounded by an infinite fluid, like an airplane wing). 

In Internal Incompressible Flow, our primary engineering goal is to calculate the **pressure drop** ($\Delta P$) or the **head loss** ($h_L$) caused by viscous friction as the fluid travels through a piping network. This allows us to size the correct pump or fan for the system.

## 1. Laminar vs. Turbulent Flow

Viscous flow exhibits two entirely different physical regimes:

1. **Laminar Flow:** Fluid particles move in smooth, highly ordered, parallel layers (laminae). There is no mixing between layers. Dye injected into the flow forms a perfect, straight ribbon. Highly viscous fluids (honey, oil) or very slow flows are typically laminar.
2. **Turbulent Flow:** Fluid particles move in highly chaotic, random, 3D swirling motions (eddies) superimposed on the main forward flow. There is intense macroscopic mixing of mass and momentum. Dye injected instantly scatters and diffuses. Almost all practical engineering flows (water in pipes, air in ducts) are turbulent.

## 2. The Reynolds Number ($Re$)

In 1883, Osborne Reynolds performed a classic experiment to determine what causes flow to transition from smooth laminar to chaotic turbulent. He discovered that the transition depends on a single dimensionless parameter, now called the **Reynolds Number ($Re$)**:

$$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$$

Where:
- $\rho$: Fluid density ($kg/m^3$)
- $V$: Average fluid velocity ($m/s$)
- $D$: Characteristic length (Pipe internal diameter, $m$)
- $\mu$: Dynamic viscosity ($kg/m\cdot s$)
- $\nu$: Kinematic viscosity ($\nu = \mu/\rho$, $m^2/s$)

**Physical Meaning:** The Reynolds number is the ratio of **inertial forces** (which want to push fluid particles into chaotic, swirling paths) to **viscous forces** (friction, which wants to damp out disturbances and keep the flow smooth and ordered).

## 3. Transition Regimes for Pipe Flow

For flow inside a circular pipe, the flow regime is universally dictated by the Reynolds number:

1. **$Re < 2300$ (Laminar Flow):** Viscous forces dominate. Any chaotic disturbances are quickly damped out.
2. **$2300 < Re < 4000$ (Transitional Flow):** The flow oscillates unpredictably between laminar and turbulent bursts. Engineers try to avoid designing systems in this unpredictable zone.
3. **$Re > 4000$ (Turbulent Flow):** Inertial forces dominate. The flow is fully chaotic and turbulent.

## 4. The Entrance Region and Fully Developed Flow

When fluid from a large tank enters a pipe, it takes time and distance for the effects of wall friction to reach the center of the pipe.

1. **Hydrodynamic Entrance Region:** Immediately upon entering the pipe, the fluid right at the wall stops (no-slip condition). This forms a growing boundary layer. The fluid in the center (the inviscid core) accelerates to maintain mass continuity. The velocity profile is changing shape continuously as you move down the pipe.
2. **Fully Developed Flow:** At a certain distance downstream ($L_e$), the boundary layers from the top and bottom walls merge in the center. The velocity profile stops changing shape. $\partial u/\partial x = 0$.

For laminar flow, the entrance length $L_e \approx 0.05 Re D$. (For highly viscous oil, this can be tens of meters!).
For turbulent flow, intense mixing establishes the profile much faster: $L_e \approx 10D$. 
Unless explicitly analyzing a short pipe near a tank, engineers assume flow is **fully developed**.
