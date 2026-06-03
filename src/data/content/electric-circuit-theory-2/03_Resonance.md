# Resonance

## Series RLC Resonance

Impedance: $\mathbf{Z} = R + j\omega L + 1/(j\omega C) = R + j(\omega L - 1/\omega C)$

At **resonance** $\omega_0$: imaginary part = 0.
$$\omega_0 = \frac{1}{\sqrt{LC}},\quad f_0 = \frac{1}{2\pi\sqrt{LC}}$$

At $\omega_0$: $\mathbf{Z} = R$ (minimum impedance), current is maximum.

**Half-power frequencies** (where $|\mathbf{Z}| = \sqrt{2}R$):
$$\omega_{1,2} = \pm\frac{R}{2L} + \sqrt{\left(\frac{R}{2L}\right)^2 + \omega_0^2}$$

**Bandwidth**: $B = \omega_2 - \omega_1 = R/L$

**Quality factor**: $Q = \omega_0/B = \omega_0 L/R = 1/(\omega_0 RC)$

At resonance: $V_L = V_C = QV_s$ (voltage magnification!)

## Parallel RLC Resonance

Admittance: $\mathbf{Y} = G + j\omega C + 1/(j\omega L)$

At resonance: $\omega_0 = 1/\sqrt{LC}$ (same formula).

At $\omega_0$: $\mathbf{Y} = G$ (minimum admittance, maximum impedance), voltage is maximum.

$Q = \omega_0 C/G = R/(\omega_0 L)$, Bandwidth $B = G/C = 1/(RC)$

## Frequency Response Plot

$$H(j\omega) = \frac{1}{1 + jQ(\omega/\omega_0 - \omega_0/\omega)}$$

Peak at $\omega_0$. Sharpness of peak determined by Q.