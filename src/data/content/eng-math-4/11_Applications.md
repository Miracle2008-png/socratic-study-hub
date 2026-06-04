# 11. Engineering Applications of First-Order ODEs

First-order differential equations govern systems where the rate of change is proportional to the current state. This applies to thermal, electrical, and chemical engineering.

### 1. Newton's Law of Cooling (Thermodynamics)
The rate at which an object changes temperature is proportional to the difference between its own temperature $T(t)$ and the ambient temperature $T_m$ of its surroundings.
$$ \frac{dT}{dt} = -k(T - T_m) $$
Where $k > 0$ is a constant depending on the material's thermal conductivity.
This is a **separable** and **linear** equation. Its solution is:
$$ T(t) = T_m + (T_0 - T_m)e^{-kt} $$
*(Notice that as $t \to \infty$, the exponential term vanishes, and the object's temperature perfectly matches the ambient room temperature $T_m$).*

### 2. RC Circuits (Electrical Engineering)
In a circuit with a resistor $R$, a capacitor $C$, and a voltage source $V(t)$, Kirchhoff's Voltage Law yields a differential equation for the charge $q(t)$ on the capacitor.
$$ R \frac{dq}{dt} + \frac{1}{C}q = V(t) $$
Dividing by $R$ puts it into the standard Linear First-Order form:
$$ \frac{dq}{dt} + \frac{1}{RC}q = \frac{V(t)}{R} $$
The term $RC$ is called the **time constant** ($\tau$) of the circuit, which dictates how quickly the capacitor charges or discharges. It is solved using an **Integrating Factor**.

### 3. Mixing Problems (Chemical Engineering)
Imagine a large tank holding brine (saltwater). Pure water flows in, the tank is mixed, and brine flows out. We want to know the amount of salt $A(t)$ in the tank at any time.

The fundamental law of mixing is:
$$ \frac{dA}{dt} = (\text{Rate In}) - (\text{Rate Out}) $$
*   **Rate In** = (Concentration of incoming fluid) $\times$ (Flow rate in)
*   **Rate Out** = (Concentration in tank) $\times$ (Flow rate out)
Because the concentration in the tank is simply $\frac{A(t)}{\text{Volume}}$, the ODE becomes:
$$ \frac{dA}{dt} + \left( \frac{\text{Flow Out}}{\text{Volume}} \right) A = \text{Rate In} $$
This forms a classic **Linear First-Order** equation, solvable via an Integrating Factor.
