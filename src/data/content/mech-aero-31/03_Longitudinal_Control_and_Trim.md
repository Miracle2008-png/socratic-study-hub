# Longitudinal Control and Trim

While static stability determines the aircraft's tendency to return to equilibrium, **control** determines the pilot's ability to establish that equilibrium (trim) at various speeds and attitudes, and to maneuver the aircraft.

## 1. The Elevator

The primary longitudinal control surface on a conventional aircraft is the elevator, located on the trailing edge of the horizontal stabilizer.

- **Deflecting the elevator down ($\delta_e > 0$):** Increases the camber of the tail, increasing tail lift. This creates a nose-down pitching moment.
- **Deflecting the elevator up ($\delta_e < 0$):** Decreases camber (or creates negative camber), decreasing tail lift. This creates a nose-up pitching moment.

## 2. The Pitching Moment Equation with Elevator

We expand the pitching moment equation to include the effect of the elevator:

$$C_m = C_{m_0} + C_{m_\alpha}\alpha + C_{m_{\delta e}}\delta_e$$

Where:
- $C_{m_{\delta e}}$ is the **elevator control power** (or elevator effectiveness). It represents the change in pitching moment coefficient per unit deflection of the elevator.
- For a conventional aft tail, $C_{m_{\delta e}}$ is always negative (positive/down deflection creates negative/nose-down moment).

## 3. Longitudinal Trim

**Trim** is the state of equilibrium where the net forces and moments are zero. For steady, unaccelerated level flight, the aircraft must be trimmed such that $C_m = 0$ and Lift = Weight.

Setting $C_m = 0$ in our equation allows us to find the elevator deflection required to trim at a specific angle of attack ($\alpha_{trim}$):

$$\delta_{e, trim} = -\frac{C_{m_0} + C_{m_\alpha}\alpha_{trim}}{C_{m_{\delta e}}}$$

Since angle of attack is directly related to airspeed (lower speed requires higher $\alpha$ to maintain lift), the trim equation shows that **different airspeeds require different elevator deflections to maintain level flight.**

## 4. Trim Tabs and Trim Systems

Holding continuous force on the control column to maintain a required elevator deflection is exhausting for the pilot. Aircraft use trim systems to neutralize these stick forces.

**Trim Tabs:** Small hinged surfaces on the trailing edge of the primary control surface (e.g., the elevator).
- If the pilot needs to hold the elevator up to maintain a low-speed trim, they adjust the trim tab down.
- The downward-deflected tab creates aerodynamic forces that push the main elevator surface up.
- The pilot can adjust the tab until the aerodynamic forces hold the elevator in the required position without pilot input. The stick forces are "trimmed out."

**Stabilator Trim:** Some aircraft (like many Piper models or modern fighter jets) use an all-moving horizontal tail (stabilator) instead of a fixed stabilizer with an elevator. Trim is often achieved by an anti-servo tab or by moving the entire surface's neutral position.

## 5. Elevator Angle vs. Speed

A crucial characteristic for handling qualities is how the required elevator deflection changes with airspeed.
- For a stable aircraft ($C_{m_\alpha} < 0$), to trim at a lower speed (higher $\alpha$), the elevator must be deflected further *trailing-edge up* (more negative $\delta_e$).
- This provides natural speed stability feedback to the pilot: to fly slower, pull back; to fly faster, push forward. If the aircraft requires a push forward to fly slower, it exhibits static instability.
