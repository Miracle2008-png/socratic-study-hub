---
title: "Pipe Flow: Head Losses and the Darcy-Weisbach Equation"
---

# Pipe Flow: Head Losses and the Darcy-Weisbach Equation

Bernoulli's Equation assumed frictionless, ideal flow. Real pipe networks dissipate energy due to viscous friction at pipe walls and through fittings (valves, elbows, bends). Quantifying these **head losses** is the core engineering task in designing pumping systems, water supply networks, and hydraulic circuits.

## 1. The Modified Bernoulli Equation

The real-world Bernoulli equation, accounting for energy losses between points 1 and 2, is:

$$ \frac{P_1}{\gamma} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\gamma} + \frac{V_2^2}{2g} + z_2 + h_L $$

Where $h_L$ is the total **head loss** [m] — a measure of the mechanical energy per unit weight dissipated between points 1 and 2. If a pump adds energy to the flow, it appears as a positive $h_p$ term on the left side.

## 2. Major Losses: The Darcy-Weisbach Equation

**Major losses** ($h_f$) are friction losses distributed along the entire length of a straight pipe. These are calculated using the **Darcy-Weisbach Equation**, the single most important equation in pipe flow design:

$$ h_f = f \frac{L}{D} \frac{V^2}{2g} $$

Where:
*   $h_f$ = head loss due to friction [m]
*   $f$ = **Darcy friction factor** (dimensionless) — the key unknown
*   $L$ = pipe length [m]
*   $D$ = pipe diameter [m]
*   $V$ = average flow velocity [m/s]

## 3. The Friction Factor $f$

The friction factor $f$ depends entirely on the flow regime and pipe roughness ($\varepsilon$):

**For Laminar Flow ($\text{Re} < 2300$):**
$$ f = \frac{64}{\text{Re}} $$
A perfectly clean theoretical result derived analytically from the Navier-Stokes equations.

**For Turbulent Flow ($\text{Re} > 4000$):**
The friction factor depends on both Re and the **relative roughness** ($\varepsilon/D$) of the pipe wall. It is determined from the empirical **Moody Chart** — a log-log plot mapping Re and $\varepsilon/D$ to $f$.

Alternatively, the **Colebrook Equation** gives $f$ implicitly:
$$ \frac{1}{\sqrt{f}} = -2.0 \log\left(\frac{\varepsilon/D}{3.7} + \frac{2.51}{\text{Re}\sqrt{f}}\right) $$

(Requires iteration to solve). The explicit **Swamee-Jain approximation** avoids iteration:
$$ f \approx \frac{0.25}{\left[\log\left(\frac{\varepsilon/D}{3.7} + \frac{5.74}{\text{Re}^{0.9}}\right)\right]^2} $$

## 4. Minor Losses

**Minor losses** ($h_m$) occur at fittings, valves, elbows, pipe entrances, and exits. Each fitting is assigned a **Loss Coefficient ($K$)**:
$$ h_m = K \frac{V^2}{2g} $$

*   Sharp pipe entrance: $K = 0.5$
*   90° elbow: $K \approx 0.9$
*   Fully open globe valve: $K \approx 10$
*   Sudden pipe expansion: $K = (1 - A_1/A_2)^2$

Despite being called "minor," in systems with many fittings (e.g., building HVAC), minor losses can dominate the total head loss.
