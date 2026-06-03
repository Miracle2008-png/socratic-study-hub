# Capacitors and Inductors

## Capacitor

Stores energy in electric field.

$$i = C\frac{dv}{dt},\quad v(t) = \frac{1}{C}\int_{-\infty}^t i\,d\tau + v(0)$$

Energy: $w = \frac{1}{2}Cv^2$

**Key properties**:
- Voltage cannot change instantaneously: $v(0^+) = v(0^-)$
- DC steady state: open circuit ($i = 0$)

Series: $\frac{1}{C_{eq}} = \sum \frac{1}{C_k}$, Parallel: $C_{eq} = \sum C_k$

## Inductor

Stores energy in magnetic field.

$$v = L\frac{di}{dt},\quad i(t) = \frac{1}{L}\int_{-\infty}^t v\,d\tau + i(0)$$

Energy: $w = \frac{1}{2}Li^2$

**Key properties**:
- Current cannot change instantaneously: $i(0^+) = i(0^-)$
- DC steady state: short circuit ($v = 0$)

Series: $L_{eq} = \sum L_k$, Parallel: $\frac{1}{L_{eq}} = \sum \frac{1}{L_k}$

## Time Constants

**RC circuit**: $\tau = RC$  
**RL circuit**: $\tau = L/R$

## First-Order Step Response

General solution for any first-order circuit:
$$x(t) = x(\infty) + [x(0^+) - x(\infty)]e^{-t/\tau},\quad t > 0$$

**Procedure**:
1. Find $x(0^+)$ (initial condition — capacitor voltage or inductor current)
2. Find $x(\infty)$ (DC steady state after switch)
3. Find $\tau$ (time constant from equivalent resistance seen by storage element)