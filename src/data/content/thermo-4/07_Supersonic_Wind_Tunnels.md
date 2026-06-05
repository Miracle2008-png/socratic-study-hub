# Supersonic Wind Tunnels

Aerospace vehicles must be tested before they fly. Testing vehicles that travel faster than the speed of sound requires creating a continuous or intermittent supersonic flow in a controlled environment: the supersonic wind tunnel.

## 1. The Challenge of Supersonic Testing

Creating a subsonic wind tunnel is relatively easy: put a large fan in a tube. The fan increases the stagnation pressure slightly, and the flow accelerates.

Creating a supersonic flow is much harder:
1.  **Choking:** You cannot simply push air faster and faster through a straight pipe. Once the flow reaches $M=1$ (choking), it will not accelerate further regardless of how much pressure you apply upstream. You *must* use a converging-diverging (C-D) nozzle.
2.  **Power Requirements:** The power required to maintain a continuous supersonic flow is enormous. A large continuous-flow supersonic tunnel can require tens or hundreds of megawatts of electrical power just to run the compressor.
3.  **Condensation:** As air accelerates through the nozzle to supersonic speeds, its static temperature drops dramatically. If the air contains any moisture, the water vapor will condense and form a fog, or even freeze into ice crystals, completely ruining the aerodynamics of the test. The air must be rigorously dried before use.

## 2. Types of Supersonic Wind Tunnels

Because of the massive power requirements, many supersonic tunnels are intermittent (run for only a few seconds or minutes at a time).

**1. Continuous Flow Tunnels:**
A closed-loop system where a massive axial compressor continuously circulates the air.
*   *Advantage:* Can run indefinitely. Excellent for long-duration testing.
*   *Disadvantage:* Extremely expensive to build and operate. Huge power demand. Must have a large heat exchanger to remove the heat added by the compressor.

**2. Blowdown Tunnels (Intermittent):**
Air is pumped slowly over hours into a large high-pressure storage tank. When a test is run, a fast-acting valve opens, and the high-pressure air "blows down" through the tunnel and exhausts to the atmosphere (or a vacuum sphere).
*   *Advantage:* Requires a much smaller compressor (it has hours to fill the tank). Can achieve very high Mach numbers and Reynolds numbers.
*   *Disadvantage:* Short run times (10 to 60 seconds). Pressure in the tank drops during the run, requiring a complex pressure-regulating valve to maintain constant conditions in the test section.

**3. Indraft Tunnels (Intermittent):**
The opposite of a blowdown tunnel. The tunnel inlet is open to the atmosphere. A large vacuum sphere downstream is pumped down to near-vacuum. A valve opens, and atmospheric pressure pushes air through the tunnel into the vacuum sphere.
*   *Advantage:* Clean, uniform inlet air (from the atmosphere). Constant total pressure ($P_0 = 1$ atm) and total temperature ($T_0 = T_{ambient}$).
*   *Disadvantage:* Limited to lower supersonic Mach numbers ($M < 4$) because the maximum pressure ratio is fixed by the atmosphere. Very short run times.

## 3. Tunnel Components

A typical supersonic wind tunnel consists of:

**1. Settling Chamber:**
A large, low-velocity section upstream of the nozzle. Contains honeycomb screens to straighten the flow, reduce turbulence, and ensure uniform stagnation pressure and temperature.

**2. Converging-Diverging Nozzle:**
Accelerates the flow from near-zero velocity to the desired supersonic test Mach number. The exact contour of the diverging section is critical to produce a uniform, parallel, shock-free flow in the test section. Many tunnels have flexible steel nozzle walls adjusted by hydraulic jacks to change the Mach number.

**3. Test Section:**
Where the model is mounted. Must have optical windows (e.g., quartz) for Schlieren imaging to visualize the shock waves.

**4. Diffuser:**
The section downstream of the test section. Its job is to decelerate the supersonic flow back to subsonic speeds and recover as much static pressure as possible, minimizing the power required by the compressor (or the pressure difference required for a blowdown tunnel). A good diffuser uses a "second throat" to decelerate the supersonic flow through a weak normal shock, rather than a strong normal shock at the test section Mach number.

## 4. Flow Visualization: Seeing the Invisible

At supersonic speeds, the density changes in the air are significant enough to bend light (refraction). Aerodynamicists use this to "see" shock waves and expansion fans.

*   **Schlieren Photography:** Uses a collimated light source and a knife-edge to make density *gradients* visible. Shock waves appear as sharp dark or light lines. The standard technique for supersonic testing.
*   **Shadowgraphy:** Simpler than Schlieren, it visualizes the *second derivative* of density. Good for very strong shocks.
*   **Interferometry:** Uses lasers to measure the actual density field quantitatively by analyzing the interference pattern of light waves passing through the flow.
