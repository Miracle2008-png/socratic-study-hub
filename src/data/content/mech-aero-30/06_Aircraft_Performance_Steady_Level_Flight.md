# Aircraft Performance: Steady Level Flight

Aircraft performance analysis answers the fundamental engineering questions: How far can this aircraft fly? How fast? How high? How efficiently? The analysis begins with the simplest case — steady, level, unaccelerated flight — and builds toward more complex maneuvers.

## 1. Steady Level Flight Equilibrium

For an aircraft in steady, level, unaccelerated flight:
$$\text{Lift} = \text{Weight}: \quad L = W \implies C_L = \frac{2W}{\rho V^2 S}$$
$$\text{Thrust} = \text{Drag}: \quad T = D \implies T = \frac{1}{2}\rho V^2 S C_D$$

These two equations, combined with the drag polar $C_D = C_{D_0} + C_L^2/(\pi e AR)$, determine all aspects of cruise performance.

## 2. Minimum Drag Speed

Minimum drag occurs when the induced drag equals the parasite drag:
$$C_{D_i} = C_{D_0} \implies \frac{C_L^2}{\pi e AR} = C_{D_0}$$

This gives the optimal lift coefficient: $C_{L,opt} = \sqrt{\pi e AR \cdot C_{D_0}}$

The corresponding **minimum drag speed**:
$$V_{MD} = \sqrt{\frac{2W}{\rho S C_{L,opt}}}$$

At $V_{MD}$, the lift-to-drag ratio $L/D$ is maximized:
$$\left(\frac{L}{D}\right)_{max} = \frac{1}{2}\sqrt{\frac{\pi e AR}{C_{D_0}}}$$

**$V_{MD}$ is the speed for maximum range of a propeller aircraft** (or maximum glide range for an unpowered aircraft). Flying faster or slower than $V_{MD}$ increases drag and worsens range.

## 3. Power Required and Power Available

For jet aircraft, the key relationship is **thrust** vs. **drag**.
For propeller aircraft, the key relationship is **power** vs. **power required**.

**Power required:**
$$P_{req} = D \cdot V = \frac{1}{2}\rho V^3 S C_D$$

As speed increases, power required first decreases (less induced drag) then increases sharply (more parasite drag). The minimum of the power-required curve occurs at $V_{min P} = V_{MD}/3^{1/4} \approx 0.76 V_{MD}$.

**Maximum endurance:**
- **Jet aircraft:** Maximum endurance at minimum drag speed ($V_{MD}$) — minimum thrust = minimum fuel flow rate.
- **Propeller aircraft:** Maximum endurance at minimum power speed ($V_{min P}$) — minimum shaft power = minimum fuel flow.

**Maximum range:**
- **Jet aircraft:** Maximum range at $(\sqrt{C_L}/C_D)_{max}$ — typically $\approx 1.32 \times V_{MD}$.
- **Propeller aircraft:** Maximum range at $V_{MD}$.

## 4. The Breguet Range Equation

The most fundamental performance equation for jet aircraft is the **Breguet Range Equation**, derived by integrating the range-fuel relationship:

$$R = \frac{V_{cruise}}{c_{SFC}} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_{initial}}{W_{final}}\right)$$

or equivalently:
$$R = \frac{1}{c_{SFC}} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_{TOW}}{W_{TOW} - W_{fuel}}\right)$$

where $c_{SFC}$ is the specific fuel consumption (kg/N/hr), and $W_{fuel}$ is the fuel burned.

**Interpretation:** To maximize range:
1. **Low specific fuel consumption** — efficient engines (high bypass ratio turbofans).
2. **High $L/D$** — aerodynamically efficient aircraft (high aspect ratio, laminar flow).
3. **Low cruise speed** — but speed determines productivity (commercial reality limits this trade).
4. **High fuel fraction** — carry proportionally more fuel (structural efficiency).

The Breguet equation reveals why modern long-haul aircraft (Boeing 787, Airbus A350) take off at 50–60% fuel fraction by weight — the fuel required to carry fuel (the "fuel to carry fuel" penalty) makes the logarithmic term crucial.

## 5. Cruise-Climb Technique

As fuel burns off, the aircraft weight decreases. To maintain optimal $L/D$, the aircraft should fly at constant $C_L$ — which requires constant $\rho V^2$. As weight decreases, $\rho V^2$ must decrease proportionally. At constant speed, the aircraft must **climb** to lower density altitude.

This **cruise-climb** technique (continuously climbing from, e.g., FL350 to FL430 over a 12-hour flight) is aerodynamically optimal but requires ATC coordination with "step climb" clearances in controlled airspace.
