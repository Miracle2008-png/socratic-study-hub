# Laplace Transform

## Definition

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} f(t)e^{-st}\,dt,\quad s = \sigma + j\omega$$

## Common Transform Pairs

| $f(t)$ ($t \geq 0$) | $F(s)$ |
|---------------------|--------|
| $\delta(t)$ (impulse) | $1$ |
| $u(t)$ (unit step) | $1/s$ |
| $t$ (ramp) | $1/s^2$ |
| $e^{-at}$ | $1/(s+a)$ |
| $\sin\omega t$ | $\omega/(s^2+\omega^2)$ |
| $\cos\omega t$ | $s/(s^2+\omega^2)$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{-at}\sin\omega t$ | $\omega/[(s+a)^2+\omega^2]$ |
| $e^{-at}\cos\omega t$ | $(s+a)/[(s+a)^2+\omega^2]$ |

## Properties

**Linearity**: $\mathcal{L}\{af+bg\} = aF + bG$

**Time shift**: $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$

**Differentiation**: $\mathcal{L}\{f'(t)\} = sF(s) - f(0^-)$

Second derivative: $\mathcal{L}\{f''\} = s^2 F(s) - sf(0^-) - f'(0^-)$

**Integration**: $\mathcal{L}\left\{\int_0^t f\,d\tau\right\} = F(s)/s$

**Frequency shift**: $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$

## Initial and Final Value Theorems

$$f(0^+) = \lim_{s\to\infty} sF(s)$$
$$f(\infty) = \lim_{s\to 0} sF(s)\quad\text{(if final value exists)}$$

## Inverse Laplace — Partial Fractions

For $F(s) = N(s)/D(s)$ with $\deg N < \deg D$:

**Distinct real poles**: $F(s) = \sum_k \dfrac{K_k}{s - p_k}$, where $K_k = (s-p_k)F(s)|_{s=p_k}$

**Complex conjugate poles**: $(s+a)^2 + \omega^2$ in denominator → $e^{-at}(A\cos\omega t + B\sin\omega t)$

**Repeated poles**: $K_k/(s-p)^k$ → $K_k t^{k-1}e^{pt}/(k-1)!$