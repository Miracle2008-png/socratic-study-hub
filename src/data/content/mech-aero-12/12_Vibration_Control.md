# Vibration Control: Passive, Active, and Semi-Active

The ultimate engineering goal is not just to analyze vibration — but to control it. Three fundamentally different philosophies exist for managing structural vibration, each with distinct trade-offs in effectiveness, cost, and complexity.

## 1. Passive Control

Passive control requires no external power. It relies solely on physical properties of added materials or devices:

**Constrained Layer Damping (CLD):** A thin layer of viscoelastic polymer (e.g., adhesive foam tape) is sandwiched between the vibrating structure and a stiff constraining layer. When the structure bends, the polymer layer is shear-deformed, dissipating energy as heat. Used extensively in aircraft fuselage panels and automotive body panels to reduce cabin noise.

**Rubber Dampers:** High-damping rubber ($\zeta \approx 0.1$–$0.3$) mounted at key locations. Simple, low-cost. Limited frequency range. Rubber properties degrade with temperature and age.

**Particle Dampers:** Cavities filled with granular materials (sand, metal shot). As the structure vibrates, particles collide, dissipating energy through impact and friction. Operates at high temperatures where rubber fails. Used in cutting tools to reduce chatter.

**Tuned Mass Dampers (TMDs):** As discussed — passive, but tuned to one frequency only.

## 2. Active Control

Active control systems use sensors, a controller, and actuators to generate forces that actively cancel vibration in real time.

**Architecture:**
1.  **Sensors** (accelerometers, strain gauges) measure the current vibration state.
2.  **Controller** (digital signal processor) computes the optimal cancellation force using a control law.
3.  **Actuators** (piezoelectric stacks, voice-coil actuators, hydraulic actuators) apply the computed force to the structure.

**Active Noise Control (ANC):** Microphones measure acoustic noise; speakers emit an equal-amplitude, phase-inverted sound wave. The waves cancel each other — used in noise-canceling headphones, aircraft cabin panels, and HVAC duct silencers.

**Active Vibration Control (AVC):** Used in precision instruments (electron microscopes on active isolation tables), helicopter rotor blades, and large space structures.

**Advantage:** Effective at very low frequencies (below 5 Hz) where passive methods are useless.
**Disadvantage:** Requires power, sensors, actuators, and sophisticated control software. Risk of instability if the controller is poorly designed.

## 3. Semi-Active Control

Semi-active systems vary the properties of a passive device in real time using a small amount of power, but never inject energy directly into the structure (they can only dissipate or redirect it). This makes them inherently stable.

**Magnetorheological (MR) Dampers:** Contain a smart fluid (iron particles in oil) that changes viscosity within milliseconds when a magnetic field is applied. A small electromagnet coil ($< 50$ watts) can vary the damping coefficient by a factor of 10:1 in real time. Used in high-end vehicle suspensions, seismic dampers in buildings, and prosthetic knees. The sweet spot between passive simplicity and active effectiveness.
