# Signals and Systems — Fundamentals

## Signal Classification

**Continuous-time (CT)**: $x(t)$, defined for all $t \in \mathbb{R}$.  
**Discrete-time (DT)**: $x[n]$, defined only at integer $n$.

**Energy and Power**:

$$E_x = \int_{-\infty}^{\infty}|x(t)|^2\,dt,\quad P_x = \lim_{T\to\infty}\frac{1}{2T}\int_{-T}^T|x(t)|^2\,dt$$

- Energy signal: $E_x < \infty$, $P_x = 0$
- Power signal: $P_x < \infty$, $E_x = \infty$
- Neither: e.g., $x(t) = e^t$

## Elementary Signals

**Unit step**: $u(t) = 1$ for $t \geq 0$, else 0.

**Unit impulse (Dirac delta)**: $\delta(t) = 0$ for $t \neq 0$, $\int_{-\infty}^{\infty}\delta(t)\,dt = 1$.

Sifting property: $\int_{-\infty}^{\infty} x(t)\delta(t-t_0)\,dt = x(t_0)$

**Complex exponential**: $x(t) = Ae^{st}$, where $s = \sigma + j\omega$.  
For $s = j\omega$: $e^{j\omega t} = \cos\omega t + j\sin\omega t$ (Euler).

## Signal Operations

**Time shift**: $x(t - t_0)$ — right shift by $t_0$.

**Time scaling**: $x(at)$ — compression if $|a| > 1$, expansion if $|a| < 1$.

**Time reversal**: $x(-t)$ — flip about $t = 0$.

**Even/odd decomposition**:
$$x_e(t) = \frac{x(t)+x(-t)}{2},\quad x_o(t) = \frac{x(t)-x(-t)}{2}$$

## System Properties

| Property | Definition |
|----------|-----------|
| **Linearity** | $ax_1 + bx_2 \to ay_1 + by_2$ |
| **Time-invariance** | $x(t-t_0) \to y(t-t_0)$ |
| **Causality** | Output depends only on present and past inputs |
| **Stability (BIBO)** | Bounded input $\Rightarrow$ bounded output |
| **Memory** | Output depends on past/future inputs |