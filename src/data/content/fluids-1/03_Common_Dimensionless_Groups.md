# Common Dimensionless Groups in Fluid Mechanics

Through the application of the Buckingham Pi theorem to different physical scenarios, a few specific dimensionless groups appear repeatedly. These groups are so fundamental that they have been named after prominent scientists and are the vocabulary used by aerodynamicists, naval architects, and chemical engineers worldwide.

Each dimensionless group represents the ratio of two competing physical effects (usually forces).

## 1. The Reynolds Number ($Re$)

By far the most important dimensionless number in fluid mechanics.

$$ Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu} $$

*   $\rho$: Fluid density
*   $V$: Characteristic velocity
*   $L$: Characteristic length (e.g., pipe diameter, airfoil chord length)
*   $\mu$: Dynamic viscosity
*   $\nu = \mu/\rho$: Kinematic viscosity

**Physical Meaning:** Ratio of **Inertial Forces** (fluid momentum, tendency to keep moving in a straight line) to **Viscous Forces** (fluid friction, tendency to resist shear).
*   **Low Re ($Re \ll 1$):** Viscous forces dominate. The flow is highly ordered, smooth, and reversible. This is "creeping flow" or Stokes flow (e.g., a microbe swimming in water, honey poured from a jar).
*   **High Re ($Re \gg 1$):** Inertial forces dominate. Viscosity only matters in a very thin boundary layer near surfaces. The flow is prone to instability and becomes chaotic and turbulent (e.g., an airplane in flight, water rushing from a fire hose).

## 2. The Froude Number ($Fr$)

Critical for flows with a free surface (waves, ships, open channels, spillways).

$$ Fr = \frac{V}{\sqrt{g L}} $$

*   $g$: Acceleration due to gravity.

**Physical Meaning:** Ratio of **Inertial Forces** to **Gravitational Forces**.
*   It also represents the ratio of the flow velocity ($V$) to the speed of a shallow water surface wave ($\sqrt{gL}$).
*   **$Fr < 1$ (Subcritical flow):** The flow is slow and deep. Surface waves can travel upstream.
*   **$Fr > 1$ (Supercritical flow):** The flow is fast and shallow. Surface waves are swept downstream; the flow outruns its own waves.
*   The transition from supercritical to subcritical flow results in a hydraulic jump.

## 3. The Mach Number ($M$ or $Ma$)

Governs compressible flow and gas dynamics.

$$ M = \frac{V}{c} = \frac{V}{\sqrt{k R T}} $$

*   $c$: Local speed of sound in the fluid.

**Physical Meaning:** Ratio of **Inertial Forces** to **Compressibility Forces**.
*   Also represents the ratio of flow velocity to the speed at which pressure waves (sound) propagate through the fluid.
*   Determines if flow is subsonic ($M < 1$), transonic ($M \approx 1$), supersonic ($M > 1$), or hypersonic ($M > 5$).

## 4. The Euler Number ($Eu$)

Also known as the Pressure Coefficient ($C_p$).

$$ Eu = \frac{\Delta P}{\frac{1}{2} \rho V^2} $$

*   $\Delta P$: A characteristic pressure difference.
*   The term $\frac{1}{2} \rho V^2$ is the dynamic pressure.

**Physical Meaning:** Ratio of **Pressure Forces** to **Inertial Forces**.
*   It represents how much of the flow's kinetic energy is converted into pressure, or vice versa. It is the primary metric for calculating drag, lift, and pressure drops across valves and fittings.

## 5. The Weber Number ($We$)

Important for multiphase flows involving droplets, bubbles, or thin films (e.g., fuel injection sprays, inkjet printers, ocean spray).

$$ We = \frac{\rho V^2 L}{\sigma} $$

*   $\sigma$: Surface tension coefficient (N/m).

**Physical Meaning:** Ratio of **Inertial Forces** to **Surface Tension Forces**.
*   High $We$: Inertial forces overcome surface tension. Droplets break apart and shatter into a fine mist.
*   Low $We$: Surface tension dominates. Droplets remain intact and spherical.

## 6. The Strouhal Number ($St$)

Used for unsteady, oscillating flows (e.g., vortex shedding behind a cylinder, a flapping flag).

$$ St = \frac{f L}{V} $$

*   $f$: Frequency of oscillation (Hz).

**Physical Meaning:** A dimensionless frequency. It relates the characteristic time of the flow passing the object ($L/V$) to the characteristic time of the oscillation ($1/f$).
