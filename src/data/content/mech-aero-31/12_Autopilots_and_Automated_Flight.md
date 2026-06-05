# Autopilots and Automated Flight

While Stability Augmentation Systems (SAS) improve the aircraft's dynamic response to short-term disturbances, **Autopilots** (Automatic Flight Control Systems - AFCS) handle outer-loop control: guiding the aircraft along a desired trajectory, navigating, and managing long-term flight phases without direct pilot intervention on the flight controls.

## 1. Outer-Loop vs. Inner-Loop Control

*   **Inner Loop (SAS/CAS):** Fast, high-frequency. Controls attitude rates (pitch rate, roll rate) and damps oscillations. Operates transparently to the pilot.
*   **Outer Loop (Autopilot):** Slower, low-frequency. Controls the actual flight path—heading, altitude, airspeed, and navigation waypoints. Provides commands *to* the inner loop.

## 2. Basic Autopilot Modes

An autopilot system builds capability in hierarchical layers:

1.  **Attitude Hold (Basic):** The lowest level. The pilot points the aircraft in a specific pitch and bank angle, engages the mode, and the autopilot maintains that exact attitude in space, fighting off gusts.
2.  **Heading Hold / Select:** The pilot dials in a magnetic heading. The autopilot rolls the aircraft to a standard bank angle, turns to the desired heading, and levels the wings to maintain it.
3.  **Altitude Hold / Select:** The autopilot adjusts the pitch (elevator) to capture and maintain a specific barometric altitude.
4.  **Airspeed/Mach Hold (Autothrottle):** A separate but integrated system adjusts engine power to maintain a selected airspeed or Mach number.

## 3. Advanced Autopilot Functions

Modern commercial autopilots integrate with the Flight Management System (FMS) for comprehensive flight automation:

*   **LNAV (Lateral Navigation):** Follows a pre-programmed complex 3D route stored in the FMS, flying from GPS waypoint to GPS waypoint, accounting for wind drift automatically.
*   **VNAV (Vertical Navigation):** Manages climbs and descents to meet altitude and airspeed restrictions at specific waypoints, optimizing the descent profile for fuel efficiency (e.g., executing a continuous idle-thrust descent).
*   **Approach and Autoland:** The autopilot tracks the instrument landing system (ILS) radio beams (Localizer for lateral, Glide Slope for vertical) down to the runway. Category III (Cat III) autoland systems can automatically flare the aircraft, touch down, and apply brakes and thrust reversers in zero-visibility fog.

## 4. The Architecture of an Autopilot

A basic altitude hold loop works as follows:
1.  **Sensor:** An air data computer measures current altitude via static pressure.
2.  **Error Calculation:** The system compares actual altitude to the pilot's *reference altitude*. If actual < reference, an altitude error exists.
3.  **Gain and PID Controller:** The error signal is processed through Proportional, Integral, and Derivative (PID) control laws to determine a smooth pitch command.
4.  **Inner Loop Command:** The autopilot sends a "pitch up" command to the pitch SAS/CAS.
5.  **Actuation:** The elevator moves, the aircraft climbs, the error reduces to zero, and the system levels off.

## 5. Automation Dependency and the Pilot's Role

As autopilots handle 95% of the flight profile (from shortly after takeoff to short final), the pilot's role has shifted from "stick-and-rudder flyer" to "systems manager."

This introduces new human-factors challenges:
*   **Mode Confusion:** Pilots may not understand what mode the autopilot is in or what it is trying to do (e.g., "Why is it turning left?").
*   **Skill Fade:** Lack of manual flying practice can degrade fundamental flying skills needed when the automation fails.
*   **Automation Complacency:** Pilots trusting the system too much and failing to monitor the flight path adequately.

Modern flight training heavily emphasizes automation management—ensuring pilots know how to program the systems, monitor their performance, and appropriately intervene or disconnect them when they behave unexpectedly.
