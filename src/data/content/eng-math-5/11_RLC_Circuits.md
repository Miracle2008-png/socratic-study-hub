# 11. RLC Circuits

What makes mathematics so incredibly powerful in engineering is that entirely different physical systems are often governed by the exact same differential equation.

A series RLC circuit consists of a Resistor ($R$), an Inductor ($L$), a Capacitor ($C$), and a Voltage Source $E(t)$.

### The Physics
By Kirchhoff's Voltage Law, the sum of the voltage drops around the closed loop must equal the supplied voltage $E(t)$.
*   $V_R = I R$ (Ohm's Law)
*   $V_L = L \frac{dI}{dt}$ (Faraday's Law)
*   $V_C = \frac{1}{C} Q$ (Capacitor Law)

$$ L \frac{dI}{dt} + R I + \frac{1}{C} Q = E(t) $$

Because current $I$ is the derivative of charge ($I = \frac{dQ}{dt}$), and thus $\frac{dI}{dt} = \frac{d^2Q}{dt^2}$, we can rewrite the entire equation in terms of charge $Q(t)$:

$$ L \frac{d^2Q}{dt^2} + R \frac{dQ}{dt} + \frac{1}{C} Q = E(t) $$
Or, in prime notation:
$$ L Q'' + R Q' + \frac{1}{C} Q = E(t) $$

### The Mathematical Analogy
Compare the RLC equation to the Mass-Spring-Damper equation:
$$ m y'' + c y' + k y = F(t) $$
$$ L Q'' + R Q' + \frac{1}{C} Q = E(t) $$

They are mathematically identical! You don't need to learn new math for electrical engineering; you just swap the variables.
*   **Inductance ($L$)** acts like **Mass ($m$)**. It resists changes in current just like mass resists changes in velocity (inertia).
*   **Resistance ($R$)** acts like **Damping ($c$)**. It dissipates energy as heat.
*   **Capacitance ($1/C$)** acts like **Stiffness ($k$)**. It stores potential energy.
*   **Voltage ($E(t)$)** acts like **External Force ($F(t)$)**.

### Tuning a Radio (Electrical Resonance)
Just like a mechanical system has a natural frequency $\omega_0 = \sqrt{k/m}$, an LC circuit (no resistor) has a natural electrical frequency:
$$ \omega_0 = \sqrt{\frac{1/C}{L}} = \frac{1}{\sqrt{LC}} $$

When you turn the dial on an old analog radio, you are physically changing the capacitance $C$ of the circuit. When you adjust $C$ such that the circuit's natural frequency perfectly matches the frequency of an incoming radio wave in the air, the circuit achieves **electrical resonance**. The amplitude of that specific signal spikes to infinity (or as high as physical resistance allows), drowning out all other stations!
