# Static Longitudinal Stability

**Static stability** is the tendency of an aircraft to return to its equilibrium state following a small disturbance, when we consider only the initial aerodynamic force response (not the dynamic time history). **Longitudinal static stability** specifically concerns pitching motion — whether the aircraft naturally resists nose-up or nose-down perturbations.

## 1. The Concept of Pitch Stability

Imagine a trimmed (balanced) aircraft flying straight and level. A vertical gust momentarily increases the angle of attack by $\Delta\alpha$:
- **Statically stable:** The increased $\alpha$ generates a nose-down pitching moment that tends to restore $\alpha$ to its original value.
- **Statically neutral:** No pitching moment change — the aircraft stays at the new $\alpha$.
- **Statically unstable:** The increased $\alpha$ generates a nose-up pitching moment that drives $\alpha$ further upward — a divergent, dangerous situation.

## 2. The Pitch Stiffness Derivative $C_{m_\alpha}$

The key indicator of longitudinal static stability is the **pitch stiffness derivative**:
$$C_{m_\alpha} = \frac{\partial C_m}{\partial \alpha}$$

- **$C_{m_\alpha} < 0$:** Statically stable (increasing $\alpha$ creates nose-down moment — correct restoring direction).
- **$C_{m_\alpha} = 0$:** Neutrally stable.
- **$C_{m_\alpha} > 0$:** Statically unstable.

$C_{m_\alpha} < 0$ is a design requirement for conventional aircraft (without fly-by-wire).

## 3. Center of Gravity vs. Neutral Point

The pitching moment coefficient about the aircraft's center of gravity (CG) can be written:
$$C_m = C_{m_{ac,wing-body}} + C_{L_{aircraft}} \left(\frac{x_{ac}}{c} - \frac{x_{CG}}{c}\right) + \text{tail term}$$

The **neutral point** ($x_{NP}$) is the CG location at which $C_{m_\alpha} = 0$ — the boundary between stable and unstable. For CG forward of the neutral point: stable. For CG aft: unstable.

$$C_{m_\alpha} = C_{L_\alpha}\left(\frac{x_{CG} - x_{NP}}{\bar{c}}\right)$$

For stability: $x_{CG} < x_{NP}$ (CG must be ahead of neutral point).

**Static margin ($K_n$):** The normalized distance between CG and neutral point:
$$K_n = \frac{x_{NP} - x_{CG}}{\bar{c}}$$

Positive static margin = stable. Typical values:
- General aviation: $K_n \approx 10-20\%$ (comfortable stability, somewhat sluggish response).
- Commercial transport: $K_n \approx 5-15\%$ (optimized for efficiency and handling).
- Military fighter: $K_n \approx 0$ to $-5\%$ (neutrally stable or mildly unstable, requiring fly-by-wire).

## 4. Effect of CG Position on Stability and Performance

**Forward CG:**
- Larger positive static margin → very stable → requires large tail download to trim → more trim drag → worse fuel efficiency.
- Heavy pitch control forces required for maneuvering.
- More runway required for rotation at takeoff (tail must push harder against extra stability).

**Aft CG:**
- Smaller static margin → easier to maneuver → less trim drag → better fuel efficiency.
- Approaches neutral point → handling becomes sluggish in recovery from perturbations.
- Beyond neutral point → unstable → cannot be hand-flown.

Modern fly-by-wire transports (A320, B-777, B-787) operate at very small or even slightly negative static margins at cruise, with flight computers providing artificial stability. This reduces trim drag and improves fuel efficiency by 2–5%.

## 5. Horizontal Tail Sizing

The neutral point location:
$$\frac{x_{NP}}{\bar{c}} = \frac{x_{ac,WB}}{\bar{c}} + V_H \eta_H \frac{C_{L_{\alpha,tail}}}{C_{L_\alpha}} \left(1 - \frac{d\varepsilon}{d\alpha}\right)$$

For a given CG range (determined by operational loading), the designer must ensure the neutral point is far enough aft to guarantee adequate static margin for all loading conditions. This directly drives horizontal tail **size** and **placement** — a larger, further-aft tail increases $V_H$, moving the NP further aft and providing more stability margin.
