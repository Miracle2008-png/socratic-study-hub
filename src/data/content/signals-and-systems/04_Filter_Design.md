# Filter Design

## Ideal Filters

| Filter | Pass-band | Stop-band |
|--------|-----------|-----------|
| Low-pass | $|\omega| < \omega_c$ | $|\omega| > \omega_c$ |
| High-pass | $|\omega| > \omega_c$ | $|\omega| < \omega_c$ |
| Band-pass | $\omega_1 < |\omega| < \omega_2$ | otherwise |
| Band-stop | otherwise | $\omega_1 < |\omega| < \omega_2$ |

Ideal LPF impulse response: $h(t) = \frac{\omega_c}{\pi}\text{sinc}(\omega_c t)$ — non-causal, infinite length.

## Butterworth Filter

Maximally flat, monotone roll-off:
$$|H(j\omega)|^2 = \frac{1}{1+(\omega/\omega_c)^{2N}}$$

$N$ = filter order. Poles equally spaced on left semicircle of radius $\omega_c$ in $s$-plane.

## Chebyshev Filters

**Type I**: equiripple in pass-band, monotone in stop-band.  
**Type II**: monotone in pass-band, equiripple in stop-band.

Sharper roll-off than Butterworth for same order, but phase distortion is worse.

## FIR vs IIR Digital Filters

| | FIR | IIR |
|--|-----|-----|
| Poles | At origin only | Anywhere in $z$-plane |
| Stability | Always stable | Must check pole locations |
| Phase | Linear phase possible | Generally non-linear |
| Efficiency | More taps needed | Fewer coefficients |
| Design | Window method, Parks-McClellan | Bilinear transform of analog prototype |

**Bilinear transform**: maps $s$-plane to $z$-plane:
$$s = \frac{2}{T}\cdot\frac{z-1}{z+1}$$

Warps frequency: $\omega_{digital} = 2\arctan(\omega_{analog}\cdot T/2)$ — pre-warp $\omega_c$ before design.