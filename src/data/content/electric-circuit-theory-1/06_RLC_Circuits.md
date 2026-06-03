# Second-Order RLC Circuits

## Series RLC — Step Response

KVL: $L\dfrac{di}{dt} + Ri + \dfrac{1}{C}\int i\,dt = V_s$

Differentiating: $L\dfrac{d^2i}{dt^2} + R\dfrac{di}{dt} + \dfrac{i}{C} = 0$

**Characteristic equation**:
$$s^2 + 2\alpha s + \omega_0^2 = 0$$

$$\alpha = \frac{R}{2L}\quad\text{(damping coefficient)},\quad \omega_0 = \frac{1}{\sqrt{LC}}\quad\text{(resonant frequency)}$$

**Roots**: $s_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_0^2}$

## Three Cases

### Overdamped ($\alpha > \omega_0$)
Two distinct real roots $s_1, s_2$:
$$x(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t} + x(\infty)$$

### Critically Damped ($\alpha = \omega_0$)
Repeated root $s = -\alpha$:
$$x(t) = (A_1 + A_2 t)e^{-\alpha t} + x(\infty)$$

Fastest settling without oscillation.

### Underdamped ($\alpha < \omega_0$)
Complex roots $s = -\alpha \pm j\omega_d$, where $\omega_d = \sqrt{\omega_0^2 - \alpha^2}$:
$$x(t) = e^{-\alpha t}(A_1\cos\omega_d t + A_2\sin\omega_d t) + x(\infty)$$

Oscillatory response, decaying envelope.

## Parallel RLC

$$\alpha = \frac{1}{2RC},\quad \omega_0 = \frac{1}{\sqrt{LC}}$$

Same characteristic equation, same three cases.

## Quality Factor

$$Q = \frac{\omega_0}{2\alpha}$$

$Q > 0.5$: underdamped. $Q < 0.5$: overdamped. $Q = 0.5$: critically damped.