# 4. Calculating Fourier Coefficients

By applying the orthogonality trick described on the previous page, we derive the **Euler-Fourier Formulas** for the coefficients. 
To build the Fourier series for a function $f(x)$ over the interval $[-L, L]$, you simply evaluate these three integrals:

$$ a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \, dx $$
$$ a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx $$
$$ b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx $$
*(where $n = 1, 2, 3, \dots$)*

### Worked Example: The Square Wave
Let's find the Fourier series of a simple square wave defined on $[-\pi, \pi]$:
*   $f(x) = 0$ for $-\pi < x < 0$
*   $f(x) = 1$ for $0 < x < \pi$
The interval is $[-\pi, \pi]$, so $2L = 2\pi \implies L = \pi$.

**1. Calculate $a_0$:**
$$ a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \, dx = \frac{1}{\pi} \left( \int_{-\pi}^{0} 0 \, dx + \int_{0}^{\pi} 1 \, dx \right) = \frac{1}{\pi} [\pi] = 1 $$

**2. Calculate $a_n$:**
$$ a_n = \frac{1}{\pi} \int_{0}^{\pi} 1 \cdot \cos(nx) \, dx = \frac{1}{\pi} \left[ \frac{1}{n} \sin(nx) \right]_0^\pi $$
Since $\sin(n\pi) = 0$ and $\sin(0) = 0$ for all integers $n$, $a_n = 0$. (There are no cosine terms!)

**3. Calculate $b_n$:**
$$ b_n = \frac{1}{\pi} \int_{0}^{\pi} 1 \cdot \sin(nx) \, dx = \frac{1}{\pi} \left[ -\frac{1}{n} \cos(nx) \right]_0^\pi $$
$$ b_n = -\frac{1}{n\pi} (\cos(n\pi) - \cos(0)) = \frac{1 - (-1)^n}{n\pi} $$
*(Note: $\cos(n\pi)$ alternates between -1 and 1, so it is written mathematically as $(-1)^n$).*
*   If $n$ is even (2, 4, 6...): $1 - (1) = 0$. The even sine waves vanish.
*   If $n$ is odd (1, 3, 5...): $1 - (-1) = 2$. The odd sine waves survive as $\frac{2}{n\pi}$.

**The Final Series:**
$$ f(x) = \frac{1}{2} + \frac{2}{\pi} \sum_{n=\text{odd}} \frac{\sin(nx)}{n} $$
$$ f(x) = \frac{1}{2} + \frac{2}{\pi}\left( \sin(x) + \frac{1}{3}\sin(3x) + \frac{1}{5}\sin(5x) + \dots \right) $$

As you add more and more odd sine waves, the graph will perfectly shape itself into a hard, 90-degree square wave!
