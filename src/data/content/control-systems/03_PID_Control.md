# PID Control

## PID Controller

$$u(t) = K_p e(t) + K_i\int_0^t e(\tau)\,d\tau + K_d\frac{de(t)}{dt}$$

$$U(s) = \left(K_p + \frac{K_i}{s} + K_d s\right)E(s) = K_p\left(1 + \frac{1}{T_i s} + T_d s\right)E(s)$$

- **Proportional ($K_p$)**: reduces error; too high → oscillation
- **Integral ($K_i$)**: eliminates steady-state error; too high → slow, overshoot
- **Derivative ($K_d$)**: anticipates error rate; improves damping; amplifies noise

## Ziegler-Nichols Tuning

**Step response method**:
Measure process reaction curve: dead time $L$, time constant $T$.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|-----------|-------|-------|-------|
| P | $T/(KL)$ | — | — |
| PI | $0.9T/(KL)$ | $3.33L$ | — |
| PID | $1.2T/(KL)$ | $2L$ | $0.5L$ |

**Ultimate gain method**:
Increase $K_p$ until sustained oscillation. Record $K_u$, $T_u$.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|-----------|-------|-------|-------|
| PID | $0.6K_u$ | $0.5T_u$ | $0.125T_u$ |

## Anti-Windup

When actuator saturates, integrator continues accumulating (windup) causing large transients.

Fix: **integrator clamping** (stop integrating when output is saturated) or **back-calculation** (feed back actuator error to desaturate integrator).

## Digital PID

Position algorithm:
$$u[n] = K_p e[n] + K_i T \sum_{k=0}^n e[k] + \frac{K_d}{T}(e[n] - e[n-1])$$

Velocity algorithm (incremental):
$$\Delta u[n] = K_p(e[n]-e[n-1]) + K_i T\, e[n] + \frac{K_d}{T}(e[n]-2e[n-1]+e[n-2])$$