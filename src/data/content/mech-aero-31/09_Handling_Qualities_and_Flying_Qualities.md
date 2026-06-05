---
title: "Handling Qualities and Flying Qualities"
---

# Handling Qualities and Flying Qualities

**Flying qualities** (or handling qualities) describe the subjective "feel" of an aircraft from the pilot's perspective. They are the measure of how easily and precisely a pilot can perform a specific task (like tracking a target, flying an instrument approach, or landing in a crosswind) using the aircraft's stability and control characteristics.

While stability analysis provides objective mathematical metrics (frequencies, damping ratios), handling qualities attempt to quantify the pilot's subjective workload.

## 1. Why Handling Qualities Matter

An aircraft can be mathematically stable but possess terrible handling qualities.
- If the short period frequency is too high, the aircraft feels "twitchy" and over-sensitive.
- If stick forces are too heavy, the pilot becomes fatigued.
- If control response is too sluggish, the pilot cannot perform precision maneuvers.

Poor handling qualities lead to increased pilot workload. Under high workload, pilot performance degrades, leading to errors and potentially catastrophic accidents (such as Pilot-Induced Oscillations).

## 2. The Cooper-Harper Rating Scale

To standardize the evaluation of handling qualities, test pilots use the **Cooper-Harper Rating Scale**. This is a decision-tree flow chart that guides the pilot to assign a rating from 1 to 10 based on how much "pilot compensation" is required to achieve a desired performance level.

*   **Ratings 1-3 (Level 1):** Satisfactory. The aircraft is pleasant to fly, and the task can be accomplished with minimal pilot compensation. (Required for normal flight operations).
*   **Ratings 4-6 (Level 2):** Acceptable. Deficiencies exist, and the pilot must apply significant compensation (effort/workload) to achieve adequate performance. (Usually acceptable after a system failure, e.g., loss of a hydraulic system).
*   **Ratings 7-9 (Level 3):** Controllable, but inadequate. The pilot can maintain control of the aircraft, but the required task cannot be accomplished with adequate precision. (Only acceptable for severe, rare failure states).
*   **Rating 10:** Uncontrollable. The aircraft will likely be lost.

## 3. Connecting Math to Pilot Feel

Aero engineers correlate the mathematical properties of the dynamic modes with Cooper-Harper ratings to establish design specifications. For example, military (MIL-STD-1797) and civilian (FAR Part 25) regulations specify required ranges for mode characteristics to ensure Level 1 handling.

*   **Short Period Damping ($\zeta_{sp}$):** Must typically be between 0.35 and 1.30. Below 0.35, the aircraft is too bouncy. Above 1.30, it is sluggish.
*   **Control Anticipation Parameter (CAP):** Relates the short period frequency to the initial pitch acceleration felt by the pilot. It ensures the aircraft responds predictably to stick inputs.
*   **Dutch Roll Damping:** Must be sufficiently high to prevent annoying oscillations during maneuvering or in turbulence.

## 4. Pilot-Induced Oscillations (PIO)

PIOs are sustained or uncontrollable oscillations resulting from the interaction between the pilot and the aircraft. They occur when the pilot attempts to correct a motion, but due to time delays in the aircraft's response (or the pilot's own neuromuscular lag), the control input is out of phase with the aircraft's motion. Instead of damping the oscillation, the pilot's inputs amplify it.

*   **Cause:** Often caused by an under-damped short period mode, sluggish actuator response, or excessive stick sensitivity.
*   **Cure:** The standard procedure for a pilot experiencing a severe PIO is to release the controls and let the aircraft's inherent static stability damp the motion.

## 5. Control Stick Forces

The physical force required to move the control stick is a critical handling quality parameter.
*   **Stick Force per G:** How much force is required to pull one additional 'G' in a maneuver. If it's too light, the pilot might inadvertently overstress the airframe. If it's too heavy, the aircraft is tiring to fly.
*   **Speed Stability:** The pilot must feel a noticeable change in stick force as the aircraft deviates from its trimmed airspeed.
