# Fourier Series and Transform

## Fourier Series (Periodic Signals)

For periodic $f(t)$ with period $T = 2\pi/\omega_0$:

$$f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left[a_n\cos(n\omega_0 t) + b_n\sin(n\omega_0 t)\right]$$

Coefficients:
$$a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega_0 t)\,dt,\quad b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega_0 t)\,dt$$

Complex form:
$$f(t) = \sum_{n=-\infty}^{\infty} c_n e^{jn\omega_0 t},\quad c_n = \frac{1}{T}\int_0^T f(t)e^{-jn\omega_0 t}\,dt$$

## Fourier Transform (Aperiodic Signals)

$$F(j\omega) = \int_{-\infty}^{\infty} f(t)e^{-j\omega t}\,dt$$

$$f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(j\omega)e^{j\omega t}\,d\omega$$

Relation to Laplace: $F(j\omega) = F(s)|_{s=j\omega}$ (if ROC includes $j\omega$ axis).

## Key Properties

| Property | Time domain | Frequency domain |
|----------|-------------|-----------------|
| Linearity | $af + bg$ | $aF + bG$ |
| Time shift | $f(t-t_0)$ | $e^{-j\omega t_0}F$ |
| Frequency shift | $e^{j\omega_0 t}f(t)$ | $F(\omega-\omega_0)$ |
| Convolution | $f*g$ | $F\cdot G$ |
| Multiplication | $f\cdot g$ | $\frac{1}{2\pi}F*G$ |
| Differentiation | $df/dt$ | $j\omega F$ |

## Parseval's Theorem

$$\int_{-\infty}^{\infty}|f(t)|^2\,dt = \frac{1}{2\pi}\int_{-\infty}^{\infty}|F(j\omega)|^2\,d\omega$$

## Circuit Application

System output in frequency domain: $Y(j\omega) = H(j\omega)X(j\omega)$

This is why filters work: $H$ suppresses unwanted frequencies in the input signal's spectrum.