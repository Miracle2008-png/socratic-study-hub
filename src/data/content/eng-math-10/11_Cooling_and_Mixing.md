# 11. Applications: Cooling & Mixing

First-order ODEs are exceptionally good at modeling thermodynamic heat transfer and fluid concentration problems in chemical engineering.

### 1. Newton's Law of Cooling
Newton postulated that the rate at which an object's temperature $T(t)$ changes is strictly proportional to the difference between its own temperature and the ambient temperature of its surroundings ($T_m$).

$$ \frac{dT}{dt} = -k(T - T_m) $$
*(The negative sign ensures that if $T > T_m$, the object cools down, and if $T < T_m$, it heats up).*

This equation is both **separable** and **linear**. 
Separating the variables:
$$ \int \frac{1}{T - T_m} dT = \int -k \, dt $$
$$ \ln|T - T_m| = -kt + C $$
$$ T(t) - T_m = e^{-kt+C} = A e^{-kt} $$
$$ T(t) = T_m + A e^{-kt} $$
Notice the exponential decay! As $t \to \infty$, the term $e^{-kt}$ approaches $0$, meaning the object's temperature $T(t)$ perfectly approaches the ambient room temperature $T_m$.

### 2. Mixture Problems (Chemical Engineering)
Consider a tank filled with water. A chemical solution flows IN at a certain rate, mixes instantly, and the mixed solution flows OUT at a certain rate. We want an equation for $A(t)$, the total mass of the chemical in the tank at time $t$.

The fundamental law of mass balance is:
**Rate of Change = (Rate In) - (Rate Out)**
$$ \frac{dA}{dt} = R_{\text{in}} - R_{\text{out}} $$

*   **Rate In ($R_{\text{in}}$):** (Concentration of incoming fluid) $\times$ (Flow rate of incoming fluid). This is usually a constant number.
*   **Rate Out ($R_{\text{out}}$):** (Concentration of fluid currently in the tank) $\times$ (Flow rate out). 
    The concentration in the tank is $\frac{A(t)}{V(t)}$, where $V(t)$ is the volume of water in the tank.

So the master equation for any mixing problem is:
$$ \frac{dA}{dt} = C_{\text{in}} f_{\text{in}} - \left( \frac{A}{V(t)} \right) f_{\text{out}} $$

**Worked Example:**
A 100-gallon tank is full of pure water. Saltwater with a concentration of 2 lbs/gal flows IN at 3 gal/min. The well-mixed solution flows OUT at 3 gal/min. Find the amount of salt $A(t)$ in the tank.

1.  **Rate In:** $(2 \text{ lbs/gal}) \times (3 \text{ gal/min}) = 6 \text{ lbs/min}$.
2.  **Volume:** Since fluid enters at 3 gal/min and leaves at 3 gal/min, the volume is constant: $V(t) = 100$.
3.  **Rate Out:** $\left( \frac{A}{100} \text{ lbs/gal} \right) \times (3 \text{ gal/min}) = \frac{3A}{100} \text{ lbs/min}$.

The differential equation is:
$$ \frac{dA}{dt} = 6 - \frac{3A}{100} $$
This is a standard Linear First-Order ODE. Rewrite in standard form:
$$ \frac{dA}{dt} + 0.03A = 6 $$
Integrating Factor: $\mu(t) = e^{\int 0.03 dt} = e^{0.03t}$.
Multiply: $\frac{d}{dt}[e^{0.03t} A] = 6e^{0.03t}$
Integrate: $e^{0.03t} A = \frac{6}{0.03}e^{0.03t} + C = 200e^{0.03t} + C$.
$$ A(t) = 200 + C e^{-0.03t} $$
Since it started as pure water, $A(0) = 0$. So $0 = 200 + C \implies C = -200$.
**Final Answer:** $A(t) = 200(1 - e^{-0.03t})$. Over infinite time, the tank will contain 200 lbs of salt.
