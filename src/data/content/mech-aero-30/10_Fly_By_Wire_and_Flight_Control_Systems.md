# Fly-By-Wire and Flight Control Systems

Modern commercial and military aircraft use **Fly-By-Wire (FBW)** flight control systems — the pilot's control inputs are converted to electrical signals processed by flight computers, which then command hydraulic or electric actuators to move control surfaces. There are no direct mechanical linkages between cockpit and control surfaces.

## 1. Conventional (Mechanical) Controls

In early aircraft, control surfaces were moved by direct mechanical linkages: cables, pulleys, and pushrods from the control column to ailerons, elevator, and rudder.

**Limitations at high speed:**
- Control forces increase with dynamic pressure — at high speed, the pilot could not physically generate enough force to deflect surfaces.
- **Powered flight controls:** Hydraulic boosters multiplied the pilot's force to move large, aerodynamically loaded surfaces. A **feel system** provided artificial force feedback so the pilot sensed surface loads.
- **Irreversible controls:** Most modern hydraulic systems are irreversible — the pilot's input goes to the actuator, but aerodynamic loads on the surface don't feed back to the cockpit. Artificial feel (springs, $q$-feel) simulates appropriate feedback forces.

## 2. The Fly-By-Wire Architecture

In FBW, the pilot's sidestick or control column is a sensor — it measures the pilot's **desired motion** (force or displacement), converts it to a signal, and sends it to the **Flight Control Computer (FCC)**.

The FCC:
1. Receives pilot input.
2. Reads hundreds of aircraft state sensors ($\alpha$, $\beta$, $p$, $q$, $r$, accelerations, airspeed, altitude).
3. Calculates **required control surface deflections** to achieve the desired motion — incorporating stability augmentation, envelope protection, and gust alleviation.
4. Commands the hydraulic/electric **actuators**.
5. Provides **artificial feel force** to the pilot's sidestick to simulate appropriate control forces.

**Redundancy:** Flight-critical computers are typically triplicated (or even quadruplicated). The Airbus A380 has three independent hydraulic systems + an electric backup system, and four flight control computers voting on commands.

## 3. Control Laws and Envelope Protection

The FCC implements **control laws** — software algorithms defining the relationship between pilot input and aircraft response:

**Rate command/attitude hold:** The pilot's stick deflection commands a pitch rate or roll rate. Release the stick → the computer holds the current attitude. Eliminates the need for constant trim adjustments.

**Normal law (Airbus):** The aircraft is commanded to maintain load factor proportional to stick deflection in pitch, and roll rate in roll. The computer will not let the aircraft exceed its structural or aerodynamic limits regardless of pilot input — **envelope protection** prevents stall, overspeed, excessive bank angles, and structural overload. A pilot cannot physically make the aircraft stall in Normal Law.

**Alternate/Direct law:** Degraded modes if sensors fail — progressively less automation with more direct control surface response to pilot input.

## 4. Active Load Alleviation and Gust Suppression

FBW enables **active aeroelastic control** — the flight computer detects gusts (via accelerometers) and instantly deflects the ailerons to generate an equal and opposite aerodynamic moment, canceling the gust load before it loads the wing structure.

The Boeing 787 uses outboard ailerons (called "flaperon") as load alleviation surfaces during turbulence. This reduces peak wing root bending moments by 10–15%, allowing the wing to be designed lighter (less structure). This weight saving cascades into lower fuel burn for the life of the aircraft.

## 5. Fly-By-Wire Benefits Summary

| Feature | Mechanical | Fly-By-Wire |
|---------|-----------|-------------|
| Weight | Heavy (cables, pulleys) | Lighter (wires, sensors) |
| Stability | Must be inherently stable | Can be artificially stabilized |
| Envelope protection | None | Full protection |
| Redundancy | Difficult | Easily multiplexed |
| Maintenance | Manual rigging | Software updates |
| Handling qualities | Fixed by aerodynamics | Tunable by software |
