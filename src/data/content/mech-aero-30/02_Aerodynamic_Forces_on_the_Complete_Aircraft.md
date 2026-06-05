# Aerodynamic Forces on the Complete Aircraft

The aerodynamic forces and moments on a complete aircraft are far more complex than those of an isolated wing. The fuselage, tail surfaces, engine nacelles, and the interactions among all components must all be accounted for. Engineers use dimensionless aerodynamic derivatives to characterize these forces over the entire flight envelope.

## 1. Angle of Attack and Sideslip

**Angle of attack ($\alpha$):** The angle between the aircraft's longitudinal axis ($x_B$) and the velocity vector projected into the $x_B$-$z_B$ plane:
$$\alpha = \arctan\left(\frac{w}{u}\right)$$

**Sideslip angle ($\beta$):** The angle between the velocity vector and the $x_B$-$z_B$ symmetry plane:
$$\beta = \arcsin\left(\frac{v}{V_{TAS}}\right)$$

In normal coordinated flight, $\beta = 0$. Sideslip occurs in crosswind landings, skidding turns, and engine failures.

## 2. The Aerodynamic Coefficient System

Total aerodynamic forces and moments on the aircraft are expressed as dimensionless coefficients referenced to dynamic pressure $\bar{q} = \frac{1}{2}\rho V^2$, wing area $S$, and characteristic lengths (chord $\bar{c}$ for pitch, span $b$ for roll/yaw):

$$L = C_L \bar{q} S \qquad D = C_D \bar{q} S \qquad Y = C_Y \bar{q} S$$
$$\mathcal{L} = C_l \bar{q} S b \qquad M = C_m \bar{q} S \bar{c} \qquad N = C_n \bar{q} S b$$

where $L, D, Y$ are lift, drag, side force; $\mathcal{L}, M, N$ are rolling, pitching, yawing moments; $C_l, C_m, C_n$ are the corresponding moment coefficients.

## 3. Stability Derivatives

The aerodynamic coefficients vary with the aircraft's state. For small perturbations from a trim condition, these variations are approximated as linear using **stability derivatives**:

$$C_L \approx C_{L_0} + C_{L_\alpha}\alpha + C_{L_{\dot{\alpha}}}\dot{\alpha}\frac{\bar{c}}{2V} + C_{L_q}\frac{q\bar{c}}{2V} + C_{L_{\delta_e}}\delta_e + \ldots$$

Each subscript denotes the partial derivative:
- $C_{L_\alpha} = \partial C_L/\partial\alpha$ — lift curve slope (main wing + fuselage + tail contribution).
- $C_{L_q}$ — pitch damping (tail contribution to lift from pitch rate $q$).
- $C_{m_\alpha}$ — **pitch stiffness** — the single most important static stability derivative.
- $C_{m_q}$ — **pitch damping derivative** — resists pitching oscillations.

## 4. Fuselage and Tail Contributions

**Wing-body lift curve slope:**
The fuselage adds a small lift contribution (about +10–15% of wing lift) and significantly modifies the downwash field seen by the tail.

**Horizontal tail contribution to $C_m$:**
$$\Delta C_{m_{tail}} = -V_H \eta_H C_{L_{\alpha,tail}}\left(\alpha - \varepsilon - i_H + \frac{\partial\varepsilon}{\partial\alpha}\alpha\right)$$

where $\eta_H = q_H/q_\infty$ is the tail efficiency (ratio of dynamic pressure at tail to free stream, typically 0.85–0.95), $\varepsilon$ is the downwash angle, and $i_H$ is the horizontal stabilizer incidence.

**Vertical tail contribution to $C_n$:**
$$\Delta C_{n_{fin}} = -V_V \eta_V C_{L_{\alpha,fin}}\beta$$

The fin provides **weathervane stability** (directional stability) — just as a weathervane points into the wind, the fin restores the aircraft to zero sideslip.

## 5. The Drag Polar

The aircraft drag polar is:
$$C_D = C_{D_0} + \frac{C_L^2}{\pi e AR} + \Delta C_{D_{compressibility}} + \Delta C_{D_{induced,trim}}$$

The trim drag ($\Delta C_{D,trim}$) represents the extra induced drag from the tail download needed to balance the wing pitching moment — for conventional tails this is typically 1–3% of total drag at cruise. This is the direct efficiency penalty of having a tail-balanced, statically stable aircraft.

Canard configurations, where the forward surface provides positive lift, have **negative** trim drag contributions — explaining the efficiency interest in canard layouts.
