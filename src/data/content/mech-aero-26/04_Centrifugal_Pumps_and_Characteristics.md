---
title: "Centrifugal Pumps and Characteristics"
---

# Centrifugal Pumps and Characteristics

Centrifugal pumps are the most widely used turbomachines in the world. Fluid enters the center (the "eye") of the spinning impeller, is flung outward by centrifugal force, and exits at the outer rim with massive kinetic energy. The stationary casing (volute) acts as a diffuser, slowing the fluid down to convert that kinetic energy into high static pressure.

## 1. Blade Angles and the Ideal Head Curve

Recall the theoretical Euler head equation (assuming no pre-swirl at the inlet, $V_{\theta 1} = 0$):
$$H_{ideal} = \frac{U_2^2}{g} - \frac{U_2 V_{m2} \cot \beta_2}{g}$$

Since mass flow rate is proportional to $V_{m2}$ ($Q = A_2 V_{m2}$), we can rewrite this as:
$$H_{ideal} = k_1 - k_2 Q \cot \beta_2$$

This reveals how the blade exit angle $\beta_2$ dictates the pump's performance curve ($H$ vs. $Q$):
1. **Forward-curved blades ($\beta_2 > 90^\circ$):** $\cot \beta_2$ is negative. Head *increases* as flow rate increases. This is highly unstable and rarely used in liquids, though common in "squirrel cage" HVAC fans.
2. **Radial blades ($\beta_2 = 90^\circ$):** $\cot \beta_2 = 0$. Head is constant regardless of flow rate. Used for highly erosive fluids (slurry pumps) because they are easy to clean.
3. **Backward-curved blades ($\beta_2 < 90^\circ$):** $\cot \beta_2$ is positive. Head *decreases* steadily as flow rate increases. This is a stable, self-regulating curve. **Almost all centrifugal pumps use backward-curved blades.**

## 2. Actual Performance Curves

The ideal linear curve is never achieved. Real fluids suffer from three major losses:
- **Slip:** Fluid doesn't perfectly follow the blade angle. It "slips" backward relative to the rotation, reducing $V_{\theta 2}$ and thus reducing head at all flow rates.
- **Friction Losses:** Fluid rubs against the impeller and casing walls. Friction scales with velocity squared ($h_f \propto Q^2$).
- **Shock (Incidence) Losses:** At the inlet, the fluid only perfectly aligns with the blade angle at one specific "design" flow rate. If $Q$ is higher or lower, the fluid hits the blades at an angle, causing turbulence and separation.

Subtracting these losses from the ideal line yields the **Actual Pump Performance Curve**, which is an inverted parabola that curves downward as $Q$ increases.

## 3. The Operating Point

A pump's performance curve tells you what the pump *can* do. To find out what it *will* do, you must plot the **System Curve**.

The system curve dictates how much pressure is required to push a given flow rate $Q$ through your specific piping network. It consists of:
- **Static Head ($H_{stat}$):** The physical elevation change the water must be lifted, plus any pressure differences between tanks. (Constant, independent of $Q$).
- **Dynamic Head:** Friction in pipes, valves, and elbows. (Increases with $Q^2$).
$$H_{system} = H_{stat} + K Q^2$$

**The Operating Point** is the exact intersection of the Pump Curve and the System Curve. This is the single steady-state flow rate and pressure at which the system will operate. 
If you close a valve (increasing $K$), the system curve becomes steeper, the intersection moves left, and the flow rate drops.

## 4. Efficiency and Power

The hydraulic power actually delivered to the fluid is:
$$\dot{W}_{water} = \rho g Q H$$

The brake horsepower (BHP) required from the electric motor is higher due to hydraulic, volumetric (leakage), and mechanical (bearing) losses. The pump efficiency $\eta$ is:
$$\eta = \frac{\dot{W}_{water}}{BHP}$$
Pump curves typically plot lines of constant efficiency ("iso-efficiency contours") resembling topographical maps. The pump should be selected so the operating point lands as close to the Best Efficiency Point (BEP) as possible.
