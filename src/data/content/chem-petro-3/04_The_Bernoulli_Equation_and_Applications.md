# The Bernoulli Equation and Applications

The Bernoulli equation is the most famous equation in fluid mechanics. While it is elegant and powerful, it is also highly restricted. It is essentially a stripped-down, idealized version of the Mechanical Energy Balance.

## 1. Deriving the Bernoulli Equation

If we take the Mechanical Energy Balance from the previous module:
$$ \frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 + h_p = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_t + h_L $$

And we apply the following **strict assumptions**:
1. The fluid is **inviscid** (viscosity $\mu = 0$, meaning no friction, so $h_L = 0$).
2. There are no mechanical devices adding or removing energy ($h_p = 0$, $h_t = 0$).
3. The fluid is **incompressible** ($\rho$ is constant).
4. The flow is **steady**.
5. The analysis is performed along a single **streamline**.

The equation reduces to the **Bernoulli Equation**:
$$ \frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 $$
$$ \text{or} \quad P + \frac{1}{2}\rho V^2 + \rho g z = \text{Constant} $$

The Bernoulli equation proves that in a frictionless flow, an increase in fluid velocity must be accompanied by a simultaneous decrease in pressure or a decrease in elevation.

## 2. Classic Applications of Bernoulli

Despite its strict assumption of zero friction, the Bernoulli equation is surprisingly accurate for short flow sections where friction hasn't had time to build up (like sudden contractions or flow through nozzles).

### Torricelli's Law (Draining a Tank)
Imagine a large, open tank of water with a small hole drilled at the bottom, a depth $h$ below the surface.
We pick Point 1 at the top surface, and Point 2 just outside the hole.
- $P_1 = P_2 = P_{\text{atm}}$ (both are open to the air).
- $V_1 \approx 0$ (the tank is large, so the surface drops very slowly).
- $z_1 - z_2 = h$.

Applying Bernoulli:
$$ 0 + 0 + z_1 = 0 + \frac{V_2^2}{2g} + z_2 $$
$$ V_2 = \sqrt{2gh} $$
The fluid exits the hole at the exact same velocity it would have if it had simply been dropped from height $h$ in a vacuum.

### Venturi Meters and Orifice Plates
If a pipe contains a sudden constriction (a throat), the area decreases, so the velocity must increase (Continuity: $A_1V_1 = A_2V_2$).
According to Bernoulli, if the velocity increases, the pressure must drop. 

By measuring the pressure difference ($P_1 - P_2$) between the wide section and the narrow throat using a manometer, engineers can calculate the velocity of the fluid and, consequently, the volumetric flow rate. This is the operating principle behind Venturi meters and Orifice plates, the most common flow measurement devices in chemical plants.

## 3. The Stagnation Point
If a fluid strikes a blunt object (like a Pitot tube or the front of a submarine), the fluid particles hitting the exact center of the object come to a complete stop. This is the **stagnation point**.

At the stagnation point, $V_2 = 0$.
The Bernoulli equation becomes:
$$ P_{\text{stagnation}} = P_{\text{static}} + \frac{1}{2}\rho V^2 $$

The term $\frac{1}{2}\rho V^2$ is known as **Dynamic Pressure**. Pitot tubes use this principle to measure airspeed on commercial aircraft.
