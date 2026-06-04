# 9. Transforms of Periodic Functions

In engineering, we frequently deal with repeating signals: square waves, sawtooth waves, or rectified sine waves. These are **Periodic Functions**. 

A function $f(t)$ is periodic with period $T$ if $f(t + T) = f(t)$ for all $t > 0$.

Taking the Laplace Transform of a function that repeats infinitely might seem like it requires integrating to infinity. However, because the shape repeats perfectly, we only need to integrate over *one single period*, and then multiply by a scaling factor that accounts for the infinite repetitions.

### The Periodic Transform Theorem
If $f(t)$ is piecewise continuous and periodic with period $T$, then its Laplace Transform is given by:

$$ \mathcal{L}\{f(t)\} = \frac{1}{1 - e^{-sT}} \int_{0}^{T} e^{-st} f(t) \, dt $$

Notice that the integral is no longer an improper integral to infinity. It is a standard, finite definite integral from $0$ to $T$.

**Where does the fraction come from?**
It comes from the infinite geometric series! The transform of the first period is just $\int_0^T$. The second period is shifted by $T$, so by the Second Shifting Theorem, it's multiplied by $e^{-sT}$. The third is shifted by $2T$, so it's multiplied by $e^{-2sT}$, and so on.
The total transform is the sum:
$$ \text{Total} = \text{Integral} \cdot (1 + e^{-sT} + e^{-2sT} + e^{-3sT} + \dots) $$
By the formula for an infinite geometric series ($S = \frac{a}{1-r}$ where $r = e^{-sT}$), we get exactly the fraction $\frac{1}{1 - e^{-sT}}$.

### Worked Example: The Square Wave
Find the Laplace Transform of a square wave $E(t)$ with amplitude $1$ and period $T=2$, defined as:
*   $E(t) = 1$ for $0 \le t < 1$
*   $E(t) = 0$ for $1 \le t < 2$

**Step 1: Set up the integral over one period ($T=2$)**
$$ \int_{0}^{2} e^{-st} E(t) \, dt $$
Because the function changes at $t=1$, we split the integral:
$$ = \int_{0}^{1} e^{-st} (1) \, dt + \int_{1}^{2} e^{-st} (0) \, dt $$
$$ = \left[ -\frac{1}{s}e^{-st} \right]_{0}^{1} + 0 $$
$$ = -\frac{1}{s}e^{-s} - \left(-\frac{1}{s}e^{0}\right) = \frac{1 - e^{-s}}{s} $$

**Step 2: Multiply by the Periodic Scaling Factor**
The period is $T=2$. Multiply the integral result by $\frac{1}{1 - e^{-2s}}$:
$$ \mathcal{L}\{E(t)\} = \frac{1}{1 - e^{-2s}} \left( \frac{1 - e^{-s}}{s} \right) $$

**Step 3: Simplify (Algebraic Trick)**
Notice that $1 - e^{-2s}$ is a difference of squares! It factors as $(1 - e^{-s})(1 + e^{-s})$.
$$ \mathcal{L}\{E(t)\} = \frac{1 - e^{-s}}{(1 - e^{-s})(1 + e^{-s}) \cdot s} = \frac{1}{s(1 + e^{-s})} $$

This perfectly algebraic fraction represents an infinitely repeating square wave!
