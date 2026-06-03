# Fourier Analysis

## Continuous-Time Fourier Series (CTFS)

For periodic $x(t)$ with period $T_0 = 2\pi/\omega_0$:

$$x(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t},\quad c_k = \frac{1}{T_0}\int_{T_0} x(t)e^{-jk\omega_0 t}\,dt$$

**Parseval's theorem (power)**:
$$P_x = \frac{1}{T_0}\int_{T_0}|x(t)|^2\,dt = \sum_{k=-\infty}^{\infty}|c_k|^2$$

## Continuous-Time Fourier Transform (CTFT)

$$X(j\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t}\,dt$$
$$x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} X(j\omega)e^{j\omega t}\,d\omega$$

**Key pairs**:

| $x(t)$ | $X(j\omega)$ |
|--------|--------------|
| $\delta(t)$ | $1$ |
| $1$ | $2\pi\delta(\omega)$ |
| $u(t)$ | $\pi\delta(\omega)+1/j\omega$ |
| $e^{-at}u(t)$, $a>0$ | $1/(a+j\omega)$ |
| $\text{rect}(t/\tau)$ | $\tau\,\text{sinc}(\omega\tau/2)$ |
| $e^{-at^2}$ | $\sqrt{\pi/a}\,e^{-\omega^2/4a}$ |

**Convolution theorem**: $x(t)*h(t) \longleftrightarrow X(j\omega)H(j\omega)$

**Parseval's theorem (energy)**: $\int|x|^2\,dt = \frac{1}{2\pi}\int|X|^2\,d\omega$

## Discrete-Time Fourier Transform (DTFT)

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n}$$

Periodic in $\omega$ with period $2\pi$. Inverse:
$$x[n] = \frac{1}{2\pi}\int_{2\pi} X(e^{j\omega})e^{j\omega n}\,d\omega$$