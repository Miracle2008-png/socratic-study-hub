# 6. Accelerated Life Testing

A component with an MTTF of 20 years cannot be tested to failure in the laboratory under normal operating conditions. **Accelerated Life Testing (ALT)** applies elevated stresses — temperature, voltage, humidity, vibration — to force failures in a practical test duration, then uses mathematical models to extrapolate results back to normal operating conditions.

### Acceleration Models
These models relate the failure rate (or MTTF) at a test stress level $S_\text{test}$ to the failure rate at normal use stress $S_\text{use}$.

**1. The Arrhenius Model (temperature acceleration):**
Used for thermally-driven failure mechanisms (corrosion, dielectric breakdown, electromigration).

$$\lambda(T) = A \exp\!\left(-\frac{E_a}{k_B T}\right)$$

*   $T$ = absolute temperature (Kelvin).
*   $E_a$ = activation energy (eV) — a material property characterizing the failure mechanism.
*   $k_B = 8.617 \times 10^{-5}$ eV/K (Boltzmann's constant).

The **Acceleration Factor (AF)** between test temperature $T_2$ and use temperature $T_1$ (with $T_2 > T_1$):
$$AF = \frac{\lambda(T_2)}{\lambda(T_1)} = \exp\!\left[\frac{E_a}{k_B}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)\right]$$

**Example:** $E_a = 0.7$ eV, $T_1 = 298$ K (25°C), $T_2 = 398$ K (125°C).
$$AF = \exp\!\left[0.7 / (8.617\times10^{-5}) \times (1/298 - 1/398)\right] = \exp(8122 \times 0.000844) = e^{6.86} \approx \mathbf{950}$$

One hour at 125°C corresponds to approximately 950 hours of use at 25°C.

**2. The Inverse Power Law (stress or voltage acceleration):**
Used for voltage overstress, mechanical fatigue, and wear mechanisms:
$$\lambda = A S^n$$
$$AF = \left(\frac{S_\text{test}}{S_\text{use}}\right)^n$$

**3. The Eyring Model (combined temperature and voltage):**
$$\lambda(T, V) = A T^{-p} \exp\!\left(-\frac{E_a}{k_B T}\right) \exp\!\left(\frac{BV}{T}\right)$$

### Estimating Life at Use Conditions
From ALT data at multiple stress levels, fit the acceleration model to estimate $E_a$ and $A$ by regression on $\ln(\hat{\lambda})$ vs. $1/T$. Then project the failure rate to use conditions using the fitted model equation.

The confidence interval on the projected MTTF accounts for both statistical uncertainty in the failure rate estimates and uncertainty in the acceleration model parameters.
