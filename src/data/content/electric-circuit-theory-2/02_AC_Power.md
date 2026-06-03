# AC Power Analysis

## Instantaneous Power
$$p(t) = v(t)\cdot i(t) = V_m I_m \cos(\omega t + \theta_v)\cos(\omega t + \theta_i)$$

Using product-to-sum identity:
$$p(t) = \frac{V_m I_m}{2}\cos(\theta_v - \theta_i) + \frac{V_m I_m}{2}\cos(2\omega t + \theta_v + \theta_i)$$

## Average (Real) Power

$$P = \frac{1}{T}\int_0^T p\,dt = \frac{V_m I_m}{2}\cos\theta = V_{rms}I_{rms}\cos\theta\quad\text{(watts)}$$

where $\theta = \theta_v - \theta_i$ is the impedance angle.

For resistor: $P = I_{rms}^2 R = V_{rms}^2/R$ (all real power).  
For pure L or C: $P = 0$ (no average power consumed).

## Reactive Power

$$Q = V_{rms}I_{rms}\sin\theta\quad\text{(VAR — volt-ampere reactive)}$$

Positive for inductive ($\theta > 0$), negative for capacitive ($\theta < 0$).

## Complex Power

$$\mathbf{S} = \frac{1}{2}\mathbf{V}\mathbf{I}^* = P + jQ\quad\text{(VA)}$$

Apparent power: $|\mathbf{S}| = V_{rms}I_{rms}$

Power factor: $PF = \cos\theta = P/|S|$

**Power factor correction**: add parallel capacitor to bring $PF \to 1$:
$$C = \frac{Q_C}{\omega V_{rms}^2} = \frac{P(\tan\theta_1 - \tan\theta_2)}{\omega V_{rms}^2}$$

## Conservation of Complex Power

In any network: $\sum \mathbf{S}_{sources} = \sum \mathbf{S}_{loads}$ (real and reactive separately).