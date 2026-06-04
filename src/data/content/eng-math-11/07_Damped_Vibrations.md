# 7. Damped Vibrations

In reality, frictionless systems do not exist. A moving mass experiences air resistance, friction, or internal viscous drag (like a car's shock absorber).

This damping force is typically proportional to the velocity of the mass, acting in the opposite direction: $F_d = -c y'$, where $c > 0$ is the damping constant.

Adding this to Newton's Second Law ($my'' = -ky - cy'$) gives the standard equation for **Free Damped Vibration**:
$$ my'' + cy' + ky = 0 $$

The characteristic equation is $mr^2 + cr + k = 0$. By the quadratic formula, the behavior of the system depends entirely on the discriminant: $\Delta = c^2 - 4mk$.

### Case 1: Underdamped ($\Delta < 0$)
If $c^2 < 4mk$, the friction is weak compared to the spring stiffness. The roots are complex: $r = \alpha \pm \beta i$, where $\alpha = -c/2m$.
Solution: $y(t) = e^{-\frac{c}{2m} t} (C_1 \cos(\beta t) + C_2 \sin(\beta t))$

*Physical Behavior:* The mass oscillates back and forth, passing through the equilibrium point multiple times, but the amplitude decays exponentially to zero. This is how a tuning fork or a bouncing car suspension behaves.

### Case 2: Overdamped ($\Delta > 0$)
If $c^2 > 4mk$, the friction is immensely strong (imagine the mass is submerged in thick honey). The roots are distinct and real: $r_1, r_2$ (both negative).
Solution: $y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$

*Physical Behavior:* There is NO oscillation. The friction is so strong that the mass slowly oozes back toward the equilibrium position, never crossing it (unless heavily pushed initially). 

### Case 3: Critically Damped ($\Delta = 0$)
If $c^2 = 4mk$, the system is perfectly balanced between oscillating and not oscillating. There is one repeated real root: $r = -c/2m$.
Solution: $y(t) = C_1 e^{rt} + C_2 t e^{rt}$

*Physical Behavior:* The mass returns to the equilibrium position as fast as physically possible without ever oscillating. 

**Engineering Importance:** 
Critical damping is the holy grail of mechanical engineering. 
*   If your car's suspension is underdamped, you hit a bump and bounce up and down for a mile. 
*   If it is overdamped, you hit a bump and the car takes 10 minutes to level out. 
*   If it is critically damped, you hit a bump and the car instantly and smoothly absorbs the shock, returning to level immediately without bouncing. All precision mechanisms (door closers, artillery recoil systems, analog gauges) are tuned to be critically damped.
