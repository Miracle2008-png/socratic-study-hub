# Waves and Oscillations

## 1. Simple Harmonic Motion (SHM)

Simple Harmonic Motion occurs when the restoring force is directly proportional to the displacement from equilibrium:
$$ F = -kx $$
Using Newton's Second Law ($F = m\frac{d^2x}{dt^2}$), we get the differential equation for SHM:
$$ \frac{d^2x}{dt^2} + \omega^2 x = 0 $$
where $\omega = \sqrt{\frac{k}{m}}$ is the angular frequency.

The general solution is:
$$ x(t) = A \cos(\omega t + \phi) $$
where $A$ is the amplitude and $\phi$ is the phase constant.

- **Velocity:** $v(t) = \frac{dx}{dt} = -A\omega \sin(\omega t + \phi)$
- **Acceleration:** $a(t) = \frac{d^2x}{dt^2} = -A\omega^2 \cos(\omega t + \phi) = -\omega^2 x(t)$

**Energy in SHM:**
Total mechanical energy $E = K + U$ is conserved.
$$ E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2 $$

---

## 2. Damped and Driven Oscillations

**Damped Oscillations:**
When a damping force proportional to velocity ($F_d = -bv$) is present, the differential equation is:
$$ m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = 0 $$
For underdamped motion ($b^2 < 4mk$), the solution is:
$$ x(t) = A_0 e^{-\frac{bt}{2m}} \cos(\omega' t + \phi) $$
where $\omega' = \sqrt{\omega_0^2 - \left(\frac{b}{2m}\right)^2}$ and $\omega_0 = \sqrt{\frac{k}{m}}$.

**Driven Oscillations and Resonance:**
With an external periodic driving force $F_0 \cos(\omega_d t)$, the steady-state amplitude is:
$$ A = \frac{F_0}{\sqrt{m^2(\omega_0^2 - \omega_d^2)^2 + b^2\omega_d^2}} $$
Resonance occurs when the driving frequency $\omega_d$ matches the natural frequency $\omega_0$, maximizing the amplitude.

---

## 3. Mechanical Waves

A wave traveling in the positive x-direction is described by:
$$ y(x,t) = A \sin(kx - \omega t + \phi) $$
where $k = \frac{2\pi}{\lambda}$ is the wave number, $\lambda$ is the wavelength, and $\omega = \frac{2\pi}{T}$ is the angular frequency.

**Wave Speed:**
$$ v = \frac{\omega}{k} = \lambda f $$
For a string of linear mass density $\mu$ under tension $T_s$:
$$ v = \sqrt{\frac{T_s}{\mu}} $$

**Wave Equation:**
$$ \frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2} $$

---

## 4. Superposition and Standing Waves

When two waves $y_1 = A \sin(kx - \omega t)$ and $y_2 = A \sin(kx + \omega t)$ traveling in opposite directions interfere, they form a standing wave:
$$ y(x,t) = y_1 + y_2 = [2A \sin(kx)] \cos(\omega t) $$
Nodes occur where $\sin(kx) = 0 \implies x = n\frac{\lambda}{2}$.
Antinodes occur where $\sin(kx) = \pm 1 \implies x = (n + \frac{1}{2})\frac{\lambda}{2}$.

For a string fixed at both ends (length $L$), the allowed wavelengths and frequencies are:
$$ \lambda_n = \frac{2L}{n}, \quad f_n = n\frac{v}{2L} \quad \text{for } n = 1, 2, 3, \dots $$

---

## 5. Doppler Effect

The change in frequency observed due to relative motion between the source and the observer.
For sound waves (speed $v$):
$$ f' = f \left( \frac{v \pm v_o}{v \mp v_s} \right) $$
- Use upper signs ($+v_o$, $-v_s$) when moving towards each other.
- Use lower signs ($-v_o$, $+v_s$) when moving away from each other.

---

## 6. Solved Examples

### Example 6.1: Mass-Spring System
**Problem:** A $0.5 \text{ kg}$ mass is attached to a spring of constant $k = 200 \text{ N/m}$. The mass is pulled $0.1 \text{ m}$ from equilibrium and released from rest. Find the maximum velocity, maximum acceleration, and total energy of the system.

**Solution:**
1. Angular frequency:
   $$ \omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0.5}} = \sqrt{400} = 20 \text{ rad/s} $$
2. Amplitude is the initial displacement: $A = 0.1 \text{ m}$.
3. Maximum velocity ($v_{max} = A\omega$):
   $$ v_{max} = (0.1)(20) = 2.0 \text{ m/s} $$
4. Maximum acceleration ($a_{max} = A\omega^2$):
   $$ a_{max} = (0.1)(20)^2 = (0.1)(400) = 40 \text{ m/s}^2 $$
5. Total energy ($E = \frac{1}{2}kA^2$):
   $$ E = \frac{1}{2}(200)(0.1)^2 = 100(0.01) = 1.0 \text{ J} $$

### Example 6.2: Beat Frequency
**Problem:** Two tuning forks have frequencies of $256 \text{ Hz}$ and $260 \text{ Hz}$. When sounded together, what is the beat frequency and the frequency of the combined sound?

**Solution:**
1. The beat frequency $f_{beat}$ is the absolute difference between the two frequencies:
   $$ f_{beat} = |f_1 - f_2| = |256 - 260| = 4 \text{ Hz} $$
   This means the listener hears 4 beats (intensity maximums) per second.
2. The frequency of the combined sound (the "carrier" frequency) is the average of the two frequencies:
   $$ f_{avg} = \frac{f_1 + f_2}{2} = \frac{256 + 260}{2} = 258 \text{ Hz} $$
The listener hears a pitch of $258 \text{ Hz}$ that modulates in volume at a rate of $4 \text{ Hz}$.
