# Free Undamped Vibration: The SDOF System

The single-degree-of-freedom (SDOF) undamped system is the mathematical foundation of all vibrations theory. It is the simplest possible vibrating system: a mass $m$ attached to a spring of stiffness $k$, with no energy dissipation.

## 1. Equation of Motion

Apply Newton's Second Law to the free mass (displaced a distance $x$ from equilibrium):

The spring exerts a restoring force $-kx$ opposing the displacement.
$$m\ddot{x} = -kx$$
$$\boxed{m\ddot{x} + kx = 0}$$

This is a second-order, linear, homogeneous ODE. From calculus, the general solution is:
$$x(t) = A\sin(\omega_n t) + B\cos(\omega_n t)$$

Where $\omega_n$ is the **Natural Frequency**:
$$\boxed{\omega_n = \sqrt{\frac{k}{m}}} \quad \text{[rad/s]}$$

The constants $A$ and $B$ are determined by initial conditions (initial displacement $x_0$ and initial velocity $\dot{x}_0$):
$$x(t) = \frac{\dot{x}_0}{\omega_n}\sin(\omega_n t) + x_0\cos(\omega_n t)$$

## 2. The Natural Frequency: Physical Meaning

The natural frequency $\omega_n = \sqrt{k/m}$ is the most important parameter of any vibrating system. It reveals immediately:

*   **Stiffer system (higher $k$):** Higher natural frequency — vibrates faster.
*   **Heavier mass (higher $m$):** Lower natural frequency — vibrates slower.

The system will always vibrate at this frequency during free vibration, regardless of how large or small the initial disturbance was. Only the amplitude changes; the frequency does not.

## 3. Alternative Form Using Static Deflection

When a mass $m$ is hung on a spring, it deflects statically by $\delta_{st} = mg/k$.
Substituting $k = mg/\delta_{st}$ into the natural frequency formula:

$$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{g}{\delta_{st}}}$$

This is a remarkably useful result. You don't need to know $k$ and $m$ separately. Simply measure the static sag $\delta_{st}$ of a beam or spring under its own load, and you can calculate the natural frequency directly.

## 4. Energy Method for Finding $\omega_n$

For complex systems (beams, disks, pendulums), deriving the equation of motion can be cumbersome. The Energy Method provides a shortcut.

For undamped free vibration, total mechanical energy is conserved: $E = KE + PE = \text{constant}$.

Therefore: $\frac{d}{dt}(KE + PE) = 0$.

Substituting the general solution $x = X\sin(\omega_n t)$:
- $KE_{max} = \frac{1}{2}m\omega_n^2 X^2$ (when passing through equilibrium)
- $PE_{max} = \frac{1}{2}kX^2$ (at maximum displacement)

Setting $KE_{max} = PE_{max}$ and solving for $\omega_n$ gives the exact same result without needing to write the equation of motion explicitly. This technique is called **Rayleigh's Method** and is invaluable for estimating the natural frequencies of complex continuous structures.
