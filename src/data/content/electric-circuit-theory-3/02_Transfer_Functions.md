# Transfer Functions and Stability

## Transfer Function

$$H(s) = \frac{b_m s^m + \cdots + b_0}{s^n + a_{n-1}s^{n-1} + \cdots + a_0} = K\frac{(s-z_1)(s-z_2)\cdots(s-z_m)}{(s-p_1)(s-p_2)\cdots(s-p_n)}$$

**Zeros** $z_k$: values of $s$ where $H(s) = 0$  
**Poles** $p_k$: values of $s$ where $H(s) \to \infty$

## Stability

System is **BIBO stable** if and only if all poles lie in the **open left-half s-plane** ($\text{Re}(p_k) < 0$).

- Poles on $j\omega$ axis: marginally stable (sustained oscillation)
- Poles in right-half plane: unstable (growing response)

## Standard Second-Order System

$$H(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$$

- $\omega_n$ = natural frequency
- $\zeta$ = damping ratio

Poles: $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$

| $\zeta$ | Response type |
|---------|--------------|
| $\zeta > 1$ | Overdamped |
| $\zeta = 1$ | Critically damped |
| $0 < \zeta < 1$ | Underdamped (oscillatory) |
| $\zeta = 0$ | Undamped (pure oscillation) |

## Time-Domain Specifications (Underdamped, Step Response)

$$\%OS = 100\,e^{-\pi\zeta/\sqrt{1-\zeta^2}},\quad T_s \approx \frac{4}{\zeta\omega_n},\quad T_r \approx \frac{1.8}{\omega_n}$$