# Introduction to Jet Propulsion

Jet propulsion is the primary method of powering high-speed, high-altitude aircraft. It operates on the principle of Newton's Third Law of Motion: for every action, there is an equal and opposite reaction. A jet engine creates a high-velocity jet of exhaust gas backwards; the reaction force pushes the engine (and the aircraft) forward.

## 1. The Principle of Thrust

Unlike a propeller, which generates thrust by accelerating a large mass of air by a small amount, a jet engine generates thrust by accelerating a smaller mass of air (and combustion products) by a very large amount.

The fundamental thrust equation for a jet engine in steady flight is:

$$F = \dot{m}_e v_e - \dot{m}_a v_a + (p_e - p_a)A_e$$

Where:
- $F$ is the net thrust.
- $\dot{m}_e$ is the mass flow rate of the exhaust gas.
- $v_e$ is the exhaust velocity.
- $\dot{m}_a$ is the mass flow rate of the incoming air.
- $v_a$ is the aircraft's forward velocity (free-stream velocity).
- $p_e$ is the exhaust static pressure at the nozzle exit.
- $p_a$ is the ambient atmospheric pressure.
- $A_e$ is the nozzle exit area.

**Momentum Thrust:** The term $(\dot{m}_e v_e - \dot{m}_a v_a)$ represents the rate of change of momentum of the working fluid. This is usually the dominant component of thrust. Assuming the mass of the added fuel ($\dot{m}_f$) is very small compared to the air mass flow ($\dot{m}_e \approx \dot{m}_a = \dot{m}$), this simplifies to:
$F_{momentum} = \dot{m}(v_e - v_a)$

**Pressure Thrust:** The term $(p_e - p_a)A_e$ accounts for the force resulting from the difference between the exhaust pressure and the ambient pressure. Ideally, a nozzle expands the exhaust gas completely so that $p_e = p_a$, maximizing the exhaust velocity and the momentum thrust.

## 2. The Brayton Cycle

Air-breathing jet engines operate on the thermodynamic **Brayton cycle** (or Joule cycle). The ideal cycle consists of four processes:

1.  **Isentropic Compression:** Incoming air is compressed, raising its pressure and temperature. (Occurs in the inlet and compressor).
2.  **Isobaric Heat Addition:** Fuel is injected and burned continuously at constant pressure, dramatically increasing the temperature and volume of the gas. (Occurs in the combustor).
3.  **Isentropic Expansion:** The hot, high-pressure gas expands, first through a turbine (which extracts work to drive the compressor) and then through a nozzle, accelerating to high velocity. (Occurs in the turbine and nozzle).
4.  **Isobaric Heat Rejection:** The exhaust gas mixes with the atmosphere, cooling down to ambient temperature at constant pressure. (This completes the cycle in the open atmosphere).

## 3. Types of Jet Engines

While all jet engines use the Brayton cycle, they differ in how they extract energy from the exhaust and generate thrust:

1.  **Turbojet:** The simplest form. All intake air passes through the core (compressor, combustor, turbine). The turbine extracts only enough energy to drive the compressor; the remaining energy accelerates the exhaust gas to produce thrust. Very inefficient at low speeds, used primarily on older supersonic fighters.
2.  **Turbofan:** The dominant engine for modern commercial and military aircraft. A large fan at the front (driven by an additional turbine stage) accelerates a large mass of air that *bypasses* the engine core. The core still produces a high-velocity jet, but the fan produces the majority of the thrust by accelerating a large mass of air relatively slowly. Much more fuel-efficient and quieter than turbojets.
3.  **Turboprop:** Almost all the energy from the exhaust gas is extracted by the turbine to drive a conventional propeller via a reduction gearbox. Very efficient at low speeds (up to ~Mach 0.6), commonly used on regional airliners and cargo planes.
4.  **Turboshaft:** Similar to a turboprop, but the output shaft drives a helicopter rotor, tank transmission, or electrical generator instead of a propeller.
5.  **Ramjet/Scramjet:** Has no moving parts (no compressor or turbine). Relies entirely on the aircraft's high forward speed (ram effect) to compress the incoming air. Only functions at supersonic speeds.
