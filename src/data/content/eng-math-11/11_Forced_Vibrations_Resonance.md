# 11. Forced Vibrations & Resonance

When an external force drives an oscillating system, the nonhomogeneous equation $my'' + cy' + ky = F(t)$ applies. The consequences of this mathematical structure explain everything from how radios tune into stations to why bridges collapse.

Consider an undamped spring-mass system ($c=0$) driven by a sinusoidal force $F_0 \cos(\omega t)$.
$$ my'' + ky = F_0 \cos(\omega t) $$
Dividing by $m$:
$$ y'' + \omega_0^2 y = \frac{F_0}{m} \cos(\omega t) $$
*(Recall the natural frequency $\omega_0 = \sqrt{k/m}$)*

### Beating (When $\omega \approx \omega_0$)
If the driving frequency $\omega$ is very close to the natural frequency $\omega_0$, but not exactly equal, the particular solution $y_p$ combines with the complementary solution $y_c$ to create an interference pattern.

The result is a fast oscillation whose *amplitude* slowly pulses up and down. This phenomenon is called **Beating**. It is exactly what you hear when two guitar strings are slightly out of tune. 

### Pure Resonance (When $\omega = \omega_0$)
What happens if the external force pulses at *exactly* the same frequency that the spring naturally wants to bounce? ($\omega = \omega_0$)

Let's look at the math. 
$y_c = C_1 \cos(\omega_0 t) + C_2 \sin(\omega_0 t)$.
Since the driving force is $\cos(\omega_0 t)$, our initial guess for Undetermined Coefficients would be $y_p = A\cos(\omega_0 t) + B\sin(\omega_0 t)$.
**But this is the Duplication Trap!** The guess perfectly matches the homogeneous solution.

To fix the trap, we must multiply the guess by $t$:
$$ y_p = t (A\cos(\omega_0 t) + B\sin(\omega_0 t)) $$

Look at that $t$ in front. As time $t \to \infty$, the amplitude of the oscillation $y_p$ grows to infinity! 

This is **Pure Resonance**. If you push a child on a swing at exactly their natural frequency, they go higher and higher until the swing breaks. 
In engineering, undamped resonance is catastrophic. It is responsible for the famous collapse of the Tacoma Narrows Bridge, where wind provided a driving force matching the bridge's natural torsional frequency.

### Practical Resonance (Damped Systems)
In reality, all systems have damping ($c > 0$). Because of damping, the amplitude will not grow to infinity. However, if the driving frequency is close to the natural frequency, the amplitude will still spike to a massive, potentially dangerous peak. 

Engineers plot the amplitude versus the driving frequency to create a **Resonance Curve**. Designing structural systems (like skyscrapers in earthquakes or car engines) involves shifting the natural frequency $\omega_0$ far away from any expected driving frequencies to avoid this catastrophic resonant peak.
