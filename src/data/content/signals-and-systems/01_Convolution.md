# Convolution and Impulse Response

## LTI Systems

A **Linear Time-Invariant (LTI)** system is completely characterised by its **impulse response** $h(t)$.

Any input can be decomposed as a sum of scaled, shifted impulses:
$$x(t) = \int_{-\infty}^{\infty} x(\tau)\delta(t-\tau)\,d\tau$$

Output by superposition:
$$y(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau = x(t) * h(t)$$

## Convolution Integral

$$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau$$

**Graphical method**:
1. Flip $h(\tau)$ to get $h(-\tau)$
2. Shift by $t$ to get $h(t-\tau)$
3. Multiply by $x(\tau)$, integrate over all $\tau$
4. Vary $t$

## Properties of Convolution

- **Commutative**: $x * h = h * x$
- **Associative**: $(x * h_1) * h_2 = x * (h_1 * h_2)$
- **Distributive**: $x * (h_1 + h_2) = x*h_1 + x*h_2$

## Causality and Stability from $h(t)$

**Causal**: $h(t) = 0$ for $t < 0$

**BIBO stable**: $\int_{-\infty}^{\infty}|h(t)|\,dt < \infty$

## Discrete-Time Convolution

$$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k]\,h[n-k]$$

For FIR filter of length $N$: finite sum from $k=0$ to $N-1$.