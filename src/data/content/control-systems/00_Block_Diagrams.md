# Control Systems — Block Diagrams and Feedback

## Open-Loop vs Closed-Loop

**Open-loop**: output is not fed back. $Y(s) = G(s)U(s)$. Sensitive to disturbances.

**Closed-loop (feedback)**:
$$Y(s) = \frac{G(s)}{1 + G(s)H(s)}R(s)$$

- $G(s)$: forward-path (plant + controller) transfer function
- $H(s)$: feedback transfer function
- $G(s)H(s)$: open-loop transfer function $L(s)$

**Closed-loop poles** = roots of characteristic equation $1 + L(s) = 0$.

## Block Diagram Algebra

| Configuration | Equivalent |
|--------------|-----------|
| Series | $G_1 G_2$ |
| Parallel | $G_1 + G_2$ |
| Feedback | $G/(1 + GH)$ |
| Moving summing junction past block | $G$, add $1/G$ on moved branch |

## Error Analysis

**Steady-state error** for unity feedback ($H=1$) with input $R(s)$:
$$e_{ss} = \lim_{s\to 0} s \cdot \frac{1}{1+G(s)} R(s)$$

**System type** = number of integrators in $G(s)$:

| Type | Step error | Ramp error | Parabola error |
|------|-----------|-----------|----------------|
| 0 | $1/(1+K_p)$ | $\infty$ | $\infty$ |
| 1 | 0 | $1/K_v$ | $\infty$ |
| 2 | 0 | 0 | $1/K_a$ |

Position constant: $K_p = \lim_{s\to0}G$, Velocity: $K_v = \lim_{s\to0}sG$, Acceleration: $K_a = \lim_{s\to0}s^2G$.

## Sensitivity

$$S = \frac{dY/Y}{dG/G} = \frac{1}{1+L(s)}$$

High loop gain $|L|$ reduces sensitivity to plant variations.