# Conservation of Energy: Bernoulli Equation

The First Law of Thermodynamics states that the rate of energy added to a system (via heat $\dot{Q}$ and work $\dot{W}$) equals the rate of change of its total energy ($E$).

Applying the Reynolds Transport Theorem to Energy ($B=E$, $b = e = u + V^2/2 + gz$) yields the integral Energy Equation. For steady, 1D flow with one inlet and one outlet, this reduces to the familiar steady-flow energy equation from thermodynamics:

$$\dot{Q} - \dot{W} = \dot{m} \left( [h_2 + \frac{V_2^2}{2} + g z_2] - [h_1 + \frac{V_1^2}{2} + g z_1] \right)$$

By substituting internal energy $u + P/\rho$ for enthalpy $h$, and converting heat transfer into irreversible frictional head losses ($h_L$), we obtain the **Mechanical Energy Equation**:

$$\frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 + h_{pump} = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_{turbine} + h_L$$

This is the most widely used equation in pipe network design, tracking the transformation of pressure energy, kinetic energy, and potential energy.

## 1. The Bernoulli Equation

If we take the mechanical energy equation and apply highly restrictive idealizations:
1. **Steady flow**
2. **Incompressible flow** ($\rho = \text{constant}$)
3. **Inviscid flow** (No friction, so $h_L = 0$)
4. **No mechanical work** (No pumps or turbines)
5. **Flow along a single streamline**

The equation simplifies into the legendary **Bernoulli Equation**:

$$\frac{P}{\rho g} + \frac{V^2}{2g} + z = \text{constant along a streamline}$$

Or, multiplying by $\rho g$ to express it in terms of pressure:
$$\boxed{P + \frac{1}{2}\rho V^2 + \rho g z = P_{total}}$$

## 2. Physical Meaning of Bernoulli

The Bernoulli equation is simply a statement of the conservation of mechanical energy for a frictionless fluid.
- $P$: Static Pressure (Energy of the fluid due to being squeezed).
- $\frac{1}{2}\rho V^2$: Dynamic Pressure (Kinetic energy per unit volume).
- $\rho g z$: Hydrostatic Pressure (Potential energy per unit volume).
- $P_{total}$: Stagnation Pressure (The total energy of the fluid).

The equation states that if elevation ($z$) is constant, an increase in velocity ($V$) *must* be accompanied by a decrease in static pressure ($P$), so that the total energy remains constant. 
This is why the pressure is lowest at the narrow throat of a Venturi tube where the flow is fastest.

## 3. Applications and Limitations

**The Pitot-Static Tube:**
Airplanes use a forward-facing probe to measure airspeed. It has a central hole that brings the air to a dead stop ($V=0$), measuring the stagnation pressure $P_{total}$. It has side holes that measure the undisturbed static pressure $P$.
Applying Bernoulli between the undisturbed air and the stagnation point:
$$P_{atm} + \frac{1}{2}\rho V_{plane}^2 = P_{total}$$
$$V_{plane} = \sqrt{\frac{2(P_{total} - P_{atm})}{\rho}}$$

**Limitations:**
The Bernoulli equation is dangerously easy to misuse. It absolutely **cannot** be used across a pump, turbine, or shock wave, or in long pipes where friction is significant, or in highly viscous flows like honey, or across the boundary layer near a wall. It is strictly for ideal, frictionless flow regions.
