# Inlets and Nozzles

While the engine core (compressor, combustor, turbine) generates the high-energy gas, the inlet (diffuser) and the nozzle are critical for managing the flow into and out of the engine. They are responsible for converting between kinetic energy (velocity) and static pressure.

## 1. The Inlet (Diffuser)

The primary function of the inlet is to provide a steady, uniform supply of air to the compressor face at the correct velocity and pressure. Compressors require air to arrive at relatively low subsonic speeds (typically Mach 0.4 to 0.5) to operate efficiently and avoid shock waves on the compressor blades.

**Subsonic Inlets:**
For commercial airliners, the inlet acts as a **diffuser**. As the aircraft flies forward, the air entering the engine must be slowed down from the cruise speed (e.g., Mach 0.85) to the required compressor face speed.
- A subsonic diffuser is a divergent duct (increasing cross-sectional area).
- As area increases, velocity decreases, and static pressure increases (Bernoulli's principle). This "ram recovery" provides a slight pre-compression before the air even reaches the mechanical compressor.
- The lip of the inlet is carefully shaped to prevent flow separation at high angles of attack (during takeoff) or in crosswinds.

**Supersonic Inlets:**
Supersonic flight presents a massive challenge. A simple divergent duct cannot slow supersonic air to subsonic speeds; it would actually accelerate it. A supersonic inlet must utilize **shock waves** to decelerate the flow.
- The inlet uses a combination of oblique shocks (which slow the air while keeping it supersonic) and a final normal shock (which drops the speed to subsonic).
- **Variable Geometry:** Because the required shock pattern changes drastically with Mach number, supersonic inlets (like those on the F-15 or Concorde) often have movable ramps or spikes to adjust the geometry in flight, ensuring the shock waves remain optimally positioned.

## 2. The Propelling Nozzle

The nozzle's job is the exact opposite of the inlet's: it takes the high-pressure, slow-moving gas exiting the turbine and accelerates it to a high velocity to produce thrust. It acts as an **expander**.

**Subsonic Nozzles (Convergent):**
Most subsonic commercial aircraft use a simple convergent nozzle (decreasing cross-sectional area).
- As the gas flows through the converging duct, it accelerates, and its static pressure drops.
- **Choking:** A convergent nozzle can only accelerate gas up to the local speed of sound (Mach 1) at the exit throat. If the pressure ratio across the nozzle is high enough, the flow becomes "choked" at Mach 1. Any further increase in engine pressure does not increase the exit velocity, but it does increase the static pressure at the exit, leading to "pressure thrust."

**Supersonic Nozzles (Convergent-Divergent or CD Nozzle):**
To accelerate exhaust gas beyond Mach 1 (necessary for supersonic flight or maximizing thrust in high-performance engines), a Convergent-Divergent (CD) nozzle must be used.
- **Convergent Section:** Accelerates the subsonic flow up to exactly Mach 1 at the narrowest point (the throat).
- **Divergent Section:** Once the flow is supersonic, an *increasing* area is required to accelerate it further. The divergent section expands the gas, increasing its velocity to Mach > 1 while dropping its static pressure until it ideally matches ambient pressure.
- **Variable Exhaust Nozzle (VEN):** Like supersonic inlets, the optimum shape of a CD nozzle changes with altitude and throttle setting (especially when using afterburners). High-performance military engines use complex, mechanically variable nozzles (the "petals" you see opening and closing on the back of a fighter jet) to adjust the throat and exit areas dynamically.

## 3. Afterburners (Reheat)

Used primarily on military aircraft, an afterburner provides a massive, temporary boost in thrust.
- Because the gas exiting the turbine still contains a large amount of unburned oxygen (due to the bypass air used for cooling), additional fuel can be injected directly into the exhaust pipe *after* the turbine and ignited.
- This massively increases the temperature and volume of the exhaust gas before it enters the nozzle, resulting in a much higher exhaust velocity.
- **Trade-off:** Afterburners can increase thrust by 50% or more, but they are incredibly fuel-inefficient, consuming fuel at a prodigious rate. They are used only for takeoff, rapid climb, or combat maneuvers.
