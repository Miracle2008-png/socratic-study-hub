# 3D Wing Geometry and Parameters

Moving from a 2D airfoil cross-section to a real 3D wing introduces new geometric parameters that profoundly affect aerodynamic performance. Understanding these parameters is essential before analyzing the aerodynamics of finite wings.

## 1. Wing Planform Geometry

**Span ($b$):** The total length of the wing from tip to tip. Measured as the straight-line distance between wingtips projected onto a plane perpendicular to the aircraft centerline.

**Wing area ($S$):** The reference planform area — the projection of the wing onto a horizontal plane, typically including the portion of the wing "inside" the fuselage (the theoretical area if the fuselage were transparent). Units: $m^2$.

**Root chord ($c_r$):** The chord length at the wing root (centerline of the aircraft).

**Tip chord ($c_t$):** The chord length at the wingtip.

**Mean aerodynamic chord (MAC):** The chord length $\bar{c}$ of a theoretically equivalent rectangular wing. For a linearly tapered wing:
$$\bar{c} = \frac{2}{3}c_r\frac{1 + \lambda + \lambda^2}{1 + \lambda}$$
The MAC location is the aerodynamic center of the wing and the standard reference for aircraft center of gravity calculations.

## 2. Taper Ratio ($\lambda$)

$$\lambda = \frac{c_t}{c_r}$$

- **$\lambda = 1$ (Rectangular wing):** Constant chord. Simplest to manufacture; structurally poor (carries excessive bending loads at the tip where structure weighs more than it contributes).
- **$\lambda = 0$ (Triangular/Delta wing):** Chord tapers to zero at tip.
- **$\lambda \approx 0.3-0.5$ (Typical transport wing):** Best compromise between structural efficiency and aerodynamic performance. A taper ratio near 0.45 approximates an elliptical span loading with a simple trapezoidal planform.

## 3. Aspect Ratio ($AR$)

$$AR = \frac{b^2}{S} = \frac{b}{\bar{c}}$$

The most aerodynamically important wing parameter. High $AR$ means a long, slender wing; low $AR$ means a short, stubby wing.

- **Gliders:** $AR \approx 30–40$ (maximize range, minimize induced drag).
- **Commercial airliners:** $AR \approx 10–12$ (balance efficiency vs. structural weight).
- **Fighter jets:** $AR \approx 2–4$ (minimize structural weight and wave drag at supersonic speeds; induced drag matters less at high speed).

## 4. Sweep Angle ($\Lambda$)

Measured as the angle between a line at constant percentage chord (usually 25% chord line or leading edge) and a line perpendicular to the aircraft centerline.

- **Forward sweep ($\Lambda < 0$):** Leading edge sweeps forward. Improves root stall behavior but causes severe aeroelastic divergence — tips tend to twist in a direction that increases local angle of attack, a self-reinforcing divergence. Requires advanced composite structures (X-29 demonstrator).
- **Aft sweep ($\Lambda > 0$):** Most common. Delays wave drag, improves directional stability contribution from wing.

## 5. Geometric and Aerodynamic Twist

**Geometric twist (washout):** The wing is physically twisted so the tip chord is at a lower angle of attack than the root chord. Promotes root stall before tip stall (safer — ailerons remain effective).

**Aerodynamic twist:** Variation in airfoil profile (and hence zero-lift angle) along the span, producing a similar effect without geometric rotation.

A wing with **positive washout** (tip trailing edge twisted upward) has reduced local $\alpha$ at the tip, reducing the probability of tip stall and tailoring the spanwise lift distribution toward elliptical for minimum induced drag.

## 6. Dihedral ($\Gamma$) and Anhedral

**Dihedral:** Wings tilted upward from root to tip. When the aircraft rolls (banks), the lowered wing presents more area to the oncoming flow, generating more lift and creating a restoring roll moment — **dihedral effect** (positive lateral stability). Commercial transports have 3–7° of dihedral.

**Anhedral (negative dihedral):** Wings tilted downward. Used on some high-wing aircraft (C-5 Galaxy) to lower the center of gravity contribution from the wings, and on fighter jets to reduce lateral stability (allowing quicker rolling response).
