# Conservation of Linear Momentum

Newton's Second Law ($\sum \vec{F} = d\vec{P}/dt$) states that the sum of all external forces acting on a system equals the rate of change of the system's linear momentum.

To apply this to a fluid control volume, we use the Reynolds Transport Theorem.

## 1. Derivation using RTT

Let the extensive property $B$ be momentum, $\vec{P} = m\vec{V}$.
The intensive property is $b = \vec{P}/m = \vec{V}$.

Plugging this into the RTT:
$$\sum \vec{F}_{external} = \frac{d}{dt} \int_{CV} \vec{V} \rho \, dV + \int_{CS} \vec{V} \rho (\vec{V} \cdot \hat{n}) dA$$

This is the integral form of the **Linear Momentum Equation** for a control volume. Note that it is a **vector equation**; it must be solved independently for the $x$, $y$, and $z$ directions.

## 2. 1D Steady Flow Formulation

For steady flow through a set of 1D inlets and outlets, the momentum equation simplifies to:

$$\sum \vec{F}_{external} = \sum_{out} \dot{m} \vec{V}_{out} - \sum_{in} \dot{m} \vec{V}_{in}$$

The sum of external forces includes:
1. **Body Forces:** Gravity acting on the mass of the fluid inside the CV ($\vec{W}_{fluid}$).
2. **Pressure Forces:** The fluid pressure acting *inward* on all external control surfaces. (Important: pressure always pushes *inward* on a control volume).
3. **Reaction Forces:** The physical forces exerted by solid boundaries (pipes, vanes, nozzles) onto the fluid to hold it in place or turn it.

## 3. Engineering Applications

The momentum equation is heavily used to calculate the physical forces required to hold pipes and fittings together, or to calculate the thrust of an engine.

### Example 1: Force on a Pipe Elbow
Water flows through a 90-degree elbow. What force must the bolts withstand to keep the elbow from flying off?
- Draw a CV encompassing the fluid inside the elbow.
- The momentum entering is $\dot{m} V_{in}$ in the +x direction.
- The momentum leaving is $\dot{m} V_{out}$ in the +y direction.
- The fluid must have been pushed by the elbow wall to turn the corner. 
- Using $\sum F_x = \dot{m} u_{out} - \dot{m} u_{in}$, we find the reaction force $R_x$ required to turn the water. (Don't forget to include the static pressure $P_1 A_1$ pushing the water into the CV!).

### Example 2: Jet Engine Thrust
A jet engine sits on a test stand. Air enters the front with velocity $V_1$, fuel is added, and hot exhaust leaves the back with velocity $V_2$ at pressure $P_e$.
- Draw a CV around the entire engine.
- Applying the momentum equation in the axial direction:
$$Thrust_{engine\_on\_air} = \dot{m}_e V_2 - \dot{m}_a V_1 + (P_e - P_{atm})A_e$$
By Newton's Third Law, the thrust the air exerts forward on the engine is equal and opposite to this value. This is how jet engines and rockets calculate their thrust.
