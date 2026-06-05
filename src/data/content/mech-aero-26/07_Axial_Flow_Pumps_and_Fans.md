---
title: "Axial Flow Pumps and Fans"
---

# Axial Flow Pumps and Fans

While centrifugal machines use centrifugal force to fling fluid outward, **axial flow machines** push fluid straight through a pipe, parallel to the rotating shaft. They function essentially like boat propellers or airplane propellers confined within a tube.

Axial flow pumps and fans are designed for **high flow rates ($Q$) and low pressure heads ($H$)**. 

## 1. Kinematics of Axial Flow

In a purely axial machine, the fluid does not change its radial position as it passes through the rotor. Therefore, the fluid enters at radius $r$ and leaves at radius $r$. 
- This means the blade speed $U = \omega r$ is identical at the inlet and outlet: $U_1 = U_2 = U$.
- Because the fluid is not moving radially or expanding outwardly, the axial (meridional) velocity remains constant to satisfy mass conservation: $V_{m1} = V_{m2} = V_{axial}$.

The Euler turbomachine equation dramatically simplifies:
$$w = U_2 V_{\theta 2} - U_1 V_{\theta 1} \implies \boxed{w = U (V_{\theta 2} - V_{\theta 1})}$$

The work done on the fluid depends entirely on how much the blade can "twist" or "swirl" the fluid ($V_{\theta 2} - V_{\theta 1}$).

## 2. Radial Variation (The Free Vortex Design)

An axial blade is long, stretching from the central hub to the outer casing tip. 
Because $U = \omega r$, the tip of the blade moves much faster than the root of the blade. 
If the entire blade had the same pitch angle $\beta$, the fast-moving tip would transfer vastly more energy to the fluid than the slow-moving root, creating chaotic pressure imbalances and turbulent mixing in the wake.

To prevent this, engineers design axial blades so that the work done ($w$) is constant at every radius from root to tip.
$$w = U \Delta V_\theta = (\omega r) \Delta V_\theta = \text{constant}$$

This implies that $\Delta V_\theta$ must be proportional to $1/r$. The swirl imparted to the fluid must be highest at the hub and lowest at the tip. 
To achieve this, the blade must be physically twisted. **Axial blades have a steep pitch at the hub and a shallow, flat pitch at the tip.** This is called *free-vortex design*.

## 3. Stator Vanes (Guide Vanes)

Because the rotor imparts significant swirl ($V_{\theta 2}$) to the fluid to do work, the fluid exiting an axial fan or pump is spiraling like a corkscrew. 
This swirling kinetic energy is essentially wasted. 

To recover this energy, axial machines almost always feature a row of stationary blades (stator vanes) immediately downstream of the rotor. The stator vanes act as a diffuser, catching the swirling fluid and straightening it out, converting the kinetic swirl energy ($V_{\theta}^2/2g$) into useful static pressure.

## 4. Performance Characteristics

The performance curve of an axial pump is fundamentally different from a centrifugal pump.
- **Centrifugal pump:** Power ($BHP$) increases as flow rate $Q$ increases. You should start a centrifugal pump with the discharge valve *closed* to minimize motor startup load.
- **Axial pump:** Power ($BHP$) is maximum at zero flow rate (shut-off) and *decreases* as flow rate increases. The head curve is also very steep, and can dip/stall at low flow rates. You must always start an axial pump with the discharge valve *fully open* to prevent snapping the shaft or burning out the motor.
