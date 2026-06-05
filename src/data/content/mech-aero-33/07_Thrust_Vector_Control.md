---
title: "Thrust Vector Control (TVC)"
---

# Thrust Vector Control (TVC)

To steer a rocket during ascent—especially when it is moving too slowly for aerodynamic fins to be effective, or when it is operating in the vacuum of space—the vehicle must alter the direction of its thrust. This is known as Thrust Vector Control (TVC).

## 1. Gimbaling the Main Engine

The most common and effective method for steering large liquid-propellant rockets is engine gimbaling.

- The entire engine (or at least the combustion chamber and nozzle assembly) is mounted on a flexible pivot joint (gimbal) at its head.
- Powerful hydraulic or electromechanical actuators tilt the engine slightly off the rocket's longitudinal centerline.
- If the engine tilts to the left, the thrust vector points slightly left, pushing the bottom of the rocket right, which pitches the nose to the left.
- For a single-engine rocket (like the Falcon 9 first stage), gimbaling provides Pitch and Yaw control. Roll control must be provided by separate, smaller thrusters.
- For multi-engine rockets, differential gimbaling can provide Roll control as well.

## 2. Jet Vanes

Used primarily on smaller, older missiles (like the V-2) or solid rocket boosters.
- Heat-resistant vanes (made of graphite or tungsten) are placed directly inside the high-velocity exhaust plume.
- Actuators rotate these vanes, physically deflecting the exhaust gas to vector the thrust.
- **Advantage:** Relatively simple, allows a solid rocket (which can't easily be gimbaled) to steer.
- **Disadvantage:** The vanes drag on the exhaust flow, causing a significant loss of thrust (drag penalty) and requiring heavy materials to survive the extreme heat and erosion.

## 3. Secondary Injection Thrust Vector Control (SITVC)

A method commonly used on large Solid Rocket Motors (like the Titan IV SRMs).
- Instead of moving the nozzle or placing vanes in the flow, a fluid (often a reactive liquid like strontium perchlorate) is injected through a small hole into the side of the divergent nozzle section.
- This creates an oblique shock wave inside the nozzle, altering the pressure distribution and effectively deflecting the main exhaust plume in the opposite direction.
- **Advantage:** No moving parts in the primary exhaust stream, highly responsive.

## 4. Vernier Thrusters

Used extensively on older Soviet rockets (like the Soyuz) and early US rockets (like the Atlas).
- The main engines are fixed (they do not gimbal).
- Steering is provided by a set of small, separately gimbaled "vernier" engines mounted around the base of the rocket.
- While the main engines provide the bulk of the thrust straight down, the verniers pivot rapidly to provide fine-tuning for pitch, yaw, and roll control.

## 5. Reaction Control Systems (RCS)

Once a spacecraft separates from its main booster and is in orbit, it requires a separate system for attitude control (pointing) and small translational maneuvers (like docking).
- RCS consists of clusters of very small thrusters (often burning hypergolic liquids or cold gas like nitrogen) mounted at the extremities of the spacecraft to maximize their moment arm.
- By firing specific thrusters in bursts, the spacecraft can rotate in Pitch, Yaw, and Roll.
