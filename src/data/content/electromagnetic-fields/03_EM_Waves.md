# Electromagnetic Waves

## Wave Equation

From Maxwell's equations in source-free medium:
$$\nabla^2\mathbf{E} = \mu\varepsilon\frac{\partial^2\mathbf{E}}{\partial t^2}$$

Wave speed: $v = 1/\sqrt{\mu\varepsilon}$. In free space: $c = 1/\sqrt{\mu_0\varepsilon_0} = 3\times10^8$ m/s.

## Uniform Plane Wave

$$\mathbf{E}(z,t) = E_0\cos(\omega t - \beta z)\hat{x}$$
$$\mathbf{H}(z,t) = \frac{E_0}{\eta}\cos(\omega t - \beta z)\hat{y}$$

**Wavenumber**: $\beta = \omega/v = \omega\sqrt{\mu\varepsilon}$

**Intrinsic impedance**: $\eta = \sqrt{\mu/\varepsilon}$. Free space: $\eta_0 = 377\,\Omega$

**E ⊥ H ⊥ direction of propagation** (TEM wave).

## Power Flow — Poynting Vector

$$\mathbf{S} = \mathbf{E}\times\mathbf{H}\quad\text{(W/m}^2\text{)}$$

Time-average power density:
$$\mathbf{S}_{av} = \frac{1}{2}\text{Re}(\mathbf{E}\times\mathbf{H}^*) = \frac{|E_0|^2}{2\eta}\hat{z}$$

## Propagation in Lossy Media

Complex propagation constant: $\gamma = \alpha + j\beta = j\omega\sqrt{\mu(\varepsilon - j\sigma/\omega)}$

Attenuation constant $\alpha$ (Np/m): $E \propto e^{-\alpha z}$

**Skin depth**: $\delta = 1/\alpha = \sqrt{2/(\omega\mu\sigma)}$

At 50 Hz in copper ($\sigma = 5.8\times10^7$ S/m): $\delta \approx 9.4$ mm.

## Reflection and Transmission

Normal incidence at planar boundary:

$$\Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1}\quad\text{(reflection coefficient)}$$
$$\tau = \frac{2\eta_2}{\eta_2 + \eta_1}\quad\text{(transmission coefficient)}$$

Power check: $|\Gamma|^2 + \frac{\eta_1}{\eta_2}|\tau|^2 = 1$