# 10. The Fourier Transform

The Fourier Transform converts a non-periodic, isolated signal in the time domain $f(t)$ into a continuous spectrum in the frequency domain $F(\omega)$.

### The Forward Transform (Time to Frequency)
To find the frequency spectrum of a signal, evaluate this integral:
$$ \mathcal{F}\{f(t)\} = F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt $$

This formula acts as a mathematical prism. You shine a complex wave of white light $f(t)$ through the integral, and it spreads it out into a continuous rainbow of frequencies $F(\omega)$.

### The Inverse Transform (Frequency to Time)
If you are given a frequency spectrum $F(\omega)$ and you want to reconstruct the original time signal, you use the Inverse Fourier Transform:
$$ \mathcal{F}^{-1}\{F(\omega)\} = f(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} \, d\omega $$

*(Note: Different textbooks use slightly different scaling factors, like placing $1/2\pi$ on the inverse transform and $1$ on the forward. We use the symmetric $1/\sqrt{2\pi}$ convention here).*

### Fourier vs. Laplace
You may notice that the Fourier Transform looks suspiciously similar to the Laplace Transform ($e^{-st}$). 

They are closely related! The variable $s$ in Laplace is a complex number $s = \sigma + i\omega$. 
If you set the real part $\sigma = 0$, the Laplace Transform perfectly collapses into the Fourier Transform (with $e^{-i\omega t}$).

*   **Laplace Transform:** Primarily used for solving Initial Value Problems and Transient Circuit Analysis (systems that start at $t=0$). The $e^{-\sigma t}$ damping term forces divergent functions to converge.
*   **Fourier Transform:** Primarily used for Signal Processing, Communications, and Steady-State Analysis (systems running from $t=-\infty$ to $\infty$). It breaks signals into physical, measurable frequencies.
