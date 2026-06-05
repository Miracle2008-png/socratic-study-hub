# Specific Speed and Machine Selection

Suppose an engineer needs to design a pump for a new water treatment plant. They know the required flow rate $Q$ and the required head $H$. They know standard motor speeds $N$ (e.g., 1750 rpm). 
How do they know whether to design a centrifugal (radial) pump, a mixed-flow pump, or an axial-flow propeller pump?

The geometry is entirely dictated by a dimensionless parameter called **Specific Speed ($N_s$)**.

## 1. Deriving Specific Speed

We can mathematically eliminate the physical diameter $D$ from the flow coefficient ($C_Q$) and head coefficient ($C_H$) to create a new parameter that depends *only* on the operating requirements ($N, Q, H$).

$$N_s = \frac{C_Q^{1/2}}{C_H^{3/4}} = \frac{(Q / N D^3)^{1/2}}{(gH / N^2 D^2)^{3/4}} = \frac{N \sqrt{Q}}{(gH)^{3/4}}$$

This dimensionless parameter is called the **Kinematic Specific Speed**. It describes the shape and fundamental operating characteristics of the impeller, independent of its actual physical size.

Any two geometrically similar pumps operating at their best efficiency points will have the exact same specific speed.

## 2. Practical (Dimensional) Specific Speed

In industry (particularly in the US), engineers drop the gravity term $g$ and use inconsistent units to calculate a dimensional specific speed. While technically messy, it is the standard catalog value used by pump and turbine manufacturers.

**For Pumps:**
$$N_s = \frac{N \sqrt{Q}}{H^{3/4}}$$
(Where $N$ is in RPM, $Q$ is in gallons per minute (gpm), and $H$ is in feet).

**For Turbines:**
Because turbines are rated by power $P$ output rather than flow rate $Q$, we substitute power to get Turbine Specific Speed ($N_{st}$):
$$N_{st} = \frac{N \sqrt{P}}{H^{5/4}}$$
(Where $P$ is in Brake Horsepower).

## 3. Selecting Pump Geometry based on $N_s$ (US Units)

The value of $N_s$ immediately tells the engineer what shape the impeller *must* be to achieve maximum efficiency for the given $(N, Q, H)$ conditions.

1. **Low Specific Speed ($500 < N_s < 4000$): Radial Flow (Centrifugal)**
   - High Head $H$, Low Flow $Q$.
   - The fluid must be flung far outward radially to build high pressure. The impeller has a large outer diameter relative to its inlet eye (it looks like a flat disc).
2. **Medium Specific Speed ($4000 < N_s < 10,000$): Mixed Flow**
   - Moderate Head, Moderate Flow.
   - The fluid leaves the impeller at an angle between purely radial and purely axial. The impeller looks like a bowl.
3. **High Specific Speed ($10,000 < N_s < 15,000$): Axial Flow**
   - Low Head $H$, High Flow $Q$.
   - The fluid passes straight through. The impeller looks like a ship's propeller.

## 4. Selecting Turbine Geometry based on $N_{st}$

The exact same concept applies to hydroelectric turbines:

1. **Low Specific Speed (High Head, Low Flow): Pelton Wheel**
   - Typically $H > 300$ meters. Used in steep mountain reservoirs.
2. **Medium Specific Speed (Medium Head, Medium Flow): Francis Turbine**
   - Typically $H$ between 30 and 300 meters. The workhorse of hydroelectricity.
3. **High Specific Speed (Low Head, Huge Flow): Kaplan Turbine**
   - Typically $H < 30$ meters. Used on large, slow-moving rivers.
