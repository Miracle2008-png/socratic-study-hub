# Delta Wings and Supersonic Planforms

Wing planform (the top-view shape) fundamentally affects both subsonic and supersonic aerodynamics. The requirements for efficient supersonic flight drove the development of radically different wing shapes from conventional subsonic designs.

## 1. The Swept Wing Family

**Conventional swept wings** (B-52, F-86 Sabre): High sweep angle (35–45°) delays critical Mach number for transonic aircraft. Retain relatively conventional aspect ratios.

**Trade-offs of high sweep:**
- Lower effective lift slope (reduced $C_{L\alpha}$).
- Stronger spanwise flow component — boundary layer accumulates at wingtips, promoting tip stall before root stall (dangerous: ailerons become ineffective before stall warning).
- Complex aeroelastic behavior: swept wings tend to wash-out under load (tip angle decreases), reducing lift distribution efficiency.
- Structurally heavy: bending loads are amplified.

## 2. The Delta Wing

The **delta wing** (triangular planform, like Greek letter $\Delta$) was developed to overcome swept-wing limitations at supersonic speeds.

**Geometry:** Highly swept leading edges (typically 55–75°), very low aspect ratio, moderate thickness.

**Subsonic behavior of delta wings — Leading Edge Vortices:**
At moderate angles of attack, flow separates from the highly swept leading edges. Instead of catastrophic separation, the separated shear layer rolls up into powerful **leading edge vortices** that spiral back over the upper surface of the wing.

These conical vortices have very low core pressure, creating massive suction on the upper surface. This **vortex lift** supplements the classical potential flow lift:
$$C_L = C_{L,potential} + C_{L,vortex} = \frac{\pi AR}{2}\alpha + k\alpha^2$$

The nonlinear $\alpha^2$ term from vortex lift allows delta wings to operate at very high angles of attack without stalling — the vortices simply strengthen. This is why fighters like the F-16 and Eurofighter Typhoon can pull extreme maneuvers without stalling.

**The Concorde's delta wing** used this vortex lift principle extensively: the aircraft rotated to very high $\alpha$ during takeoff/landing, using vortex lift (plus the powerful engines) to achieve acceptable low-speed performance despite the minimal wing area.

## 3. Supersonic Aerodynamics of Delta Wings

In supersonic flight, the critical concern is whether the leading edge is **subsonic** or **supersonic**:

**Subsonic leading edge** (leading edge inside the Mach cone): The flow is not "aware" of the leading edge until after passing it. Classical swept-wing subsonic behavior applies. Round leading edges can be used.

**Supersonic leading edge** (leading edge outside the Mach cone): A bow shock forms. Conventional aerodynamics with sharp edges is required to minimize drag.

For a given flight Mach number, the leading edge is subsonic if the sweep angle $\Lambda > 90° - \mu$, where $\mu = \arcsin(1/M)$ is the Mach angle. Delta wings are often designed to keep leading edges subsonic even at their cruise Mach number.

## 4. Variable Sweep Wings

Some aircraft (F-111, F-14 Tomcat, B-1 Lancer) use **variable sweep** (swing-wing) designs. At low speeds, wings swing forward to low sweep — achieving high aspect ratio and good subsonic efficiency. At high speeds, wings sweep back sharply to reduce wave drag.

**Disadvantages:** Extremely heavy, mechanically complex pivot mechanism. Largely replaced by aerodynamically clean fixed-wing designs with advanced aerodynamics.
