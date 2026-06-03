# AC Circuit Fundamentals

## Sinusoidal Signals

$$v(t) = V_m\cos(\omega t + \phi)$$

- $V_m$ = amplitude (peak voltage)
- $\omega = 2\pi f$ = angular frequency (rad/s)
- $T = 1/f$ = period (s)
- $\phi$ = phase angle (rad or degrees)

**RMS value**: equivalent DC that delivers same average power.
$$V_{rms} = \frac{V_m}{\sqrt{2}} \approx 0.707 V_m$$

UK mains: $V_{rms} = 230$ V, $f = 50$ Hz, $V_m = 325$ V.

## Phase Relationships

$v_1 = V_m\cos(\omega t + \phi_1)$, $v_2 = V_m\cos(\omega t + \phi_2)$

If $\phi_1 > \phi_2$: $v_1$ **leads** $v_2$ by $(\phi_1 - \phi_2)$.

For R: voltage and current **in phase**.  
For L: voltage **leads** current by 90°.  
For C: voltage **lags** current by 90°.

## Phasors

Transform sinusoids to complex numbers (valid only at single frequency $\omega$):
$$v(t) = V_m\cos(\omega t + \phi) \longleftrightarrow \mathbf{V} = V_m\angle\phi$$

Euler's identity: $e^{j\phi} = \cos\phi + j\sin\phi$

Operations:
- Addition/subtraction: use rectangular form $a + jb$
- Multiplication/division: use polar form $r\angle\theta$

**Differentiation in phasor domain**: $d/dt \leftrightarrow j\omega$