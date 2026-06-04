# 10. Mechanical Vibrations (Mass-Spring-Damper)

The crown jewel of second-order differential equations is the Mass-Spring-Damper system. It models car suspensions, skyscraper sway during earthquakes, and the aerodynamics of airplane wings.

### The Physics
Imagine a mass ($m$) attached to a spring with stiffness ($k$), sliding on a surface with friction/damping ($c$). An external motor applies a forcing function $F(t)$.

By Newton's Second Law ($\Sigma F = ma$):
$$ \Sigma F = F_{spring} + F_{damper} + F_{external} $$
*   $F_{spring} = -ky$ (Hooke's Law: Spring pushes back proportionally to distance $y$).
*   $F_{damper} = -cy'$ (Damping pushes back proportionally to velocity $y'$).
*   $ma = my''$

Substituting these yields the master equation for mechanical vibrations:
$$ my'' + cy' + ky = F(t) $$

### 1. Free, Undamped Vibration ($c=0, F=0$)
$$ my'' + ky = 0 $$
Characteristic equation: $mr^2 + k = 0 \implies r = \pm i\sqrt{k/m}$.
This is a purely complex root (Case 3) with $\alpha = 0$.
$$ y(t) = C_1 \cos(\omega_0 t) + C_2 \sin(\omega_0 t) $$
Where $\omega_0 = \sqrt{k/m}$ is the **natural frequency**. The mass oscillates forever without losing energy.

### 2. Free, Damped Vibration ($c > 0, F=0$)
$$ my'' + cy' + ky = 0 $$
The behavior depends on the discriminant of the characteristic equation ($c^2 - 4mk$).
*   **Overdamped ($c^2 > 4mk$):** The friction is so high the mass creeps back to zero without crossing it. (Case 1: Real roots).
*   **Critically Damped ($c^2 = 4mk$):** The fastest return to zero without oscillating. (Case 2: Repeated root).
*   **Underdamped ($c^2 < 4mk$):** The mass oscillates, but the amplitude exponentially decays due to the $e^{\alpha t}$ term. (Case 3: Complex roots).

### 3. Forced Vibration & Resonance ($F(t) \neq 0$)
If an external oscillating force $F_0 \cos(\omega t)$ is applied to an undamped system, we must find the particular solution $y_p$.

If the forcing frequency $\omega$ perfectly matches the natural frequency of the spring $\omega_0$, our guess $y_p$ triggers the "Uh-Oh Rule" of Undetermined Coefficients. We must multiply $y_p$ by $t$.
$$ y_p(t) = t(A \cos(\omega_0 t) + B \sin(\omega_0 t)) $$

Because of the $t$ multiplier, the amplitude of the vibration grows linearly to infinity over time. This catastrophic phenomenon is called **Resonance**. It is why soldiers break stride when marching across a bridge, and why the Tacoma Narrows Bridge collapsed in 1940.
