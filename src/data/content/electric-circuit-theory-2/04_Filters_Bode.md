# Filters and Bode Plots

## Transfer Function

$$H(j\omega) = \frac{\mathbf{V}_{out}}{\mathbf{V}_{in}}$$

## Basic Filter Types

**Low-pass RC**: $H = \dfrac{1/(j\omega C)}{R + 1/(j\omega C)} = \dfrac{1}{1 + j\omega RC}$

Corner frequency: $\omega_c = 1/RC$. Gain = $1/\sqrt{2}$ at $\omega_c$.

**High-pass RC**: $H = \dfrac{R}{R + 1/(j\omega C)} = \dfrac{j\omega RC}{1 + j\omega RC}$

**Band-pass (series RLC)**: peak at $\omega_0$, bandwidth $B = R/L$.

**Band-stop (notch)**: zero transmission at $\omega_0$.

## Bode Plots

Express magnitude in dB: $|H|_{dB} = 20\log_{10}|H(j\omega)|$

**Rules for straight-line Bode approximation**:
- Zero at $\omega = z$: slope increases by $+20$ dB/decade above $z$
- Pole at $\omega = p$: slope decreases by $-20$ dB/decade above $p$
- Constant gain $K$: $20\log_{10}K$ horizontal line

Phase contribution:
- Zero: $+45°$/decade around $z$, total $+90°$
- Pole: $-45°$/decade around $p$, total $-90°$

## Butterworth Filter

Maximally flat magnitude response:
$$|H(j\omega)|^2 = \frac{1}{1 + (\omega/\omega_c)^{2n}}$$

$n$ = filter order. Higher $n$ → steeper roll-off ($-20n$ dB/decade).