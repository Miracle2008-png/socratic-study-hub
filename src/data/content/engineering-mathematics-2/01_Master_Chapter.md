# Engineering Mathematics II: Master Chapter

## 1. Ordinary Differential Equations (ODEs)

### 1.1 Second-Order Linear Homogeneous ODEs
The general form is:
$$ a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0 $$
The characteristic equation is:
$$ ar^2 + br + c = 0 $$
The roots $r_1, r_2$ determine the general solution:
1. **Real and Distinct Roots ($b^2 - 4ac > 0$):**
   $$ y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x} $$
2. **Real and Repeated Roots ($b^2 - 4ac = 0$):**
   $$ y(x) = (C_1 + C_2 x) e^{r x} $$
3. **Complex Roots ($b^2 - 4ac < 0$), $r = \alpha \pm i\beta$:**
   $$ y(x) = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x) $$

### Solved Example 1: Mass-Spring-Damper System
**Problem:** Solve the differential equation for an underdamped oscillator:
$$ y'' + 2y' + 5y = 0 $$
with initial conditions $y(0) = 1, y'(0) = 0$.
**Solution:**
1. Characteristic equation: $r^2 + 2r + 5 = 0$.
2. Solve for $r$:
   $$ r = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = -1 \pm 2i $$
3. Identify $\alpha = -1, \beta = 2$. General solution:
   $$ y(t) = e^{-t} (C_1 \cos 2t + C_2 \sin 2t) $$
4. Apply initial conditions:
   $y(0) = 1 \implies e^0 (C_1(1) + C_2(0)) = 1 \implies C_1 = 1$.
   Derivative $y'(t)$:
   $$ y'(t) = -e^{-t} (C_1 \cos 2t + C_2 \sin 2t) + e^{-t} (-2C_1 \sin 2t + 2C_2 \cos 2t) $$
   $y'(0) = 0 \implies -1(C_1) + 1(2C_2) = 0 \implies -1 + 2C_2 = 0 \implies C_2 = 0.5$.
5. Final solution:
   $$ y(t) = e^{-t} \left( \cos 2t + 0.5 \sin 2t \right) $$

## 2. Laplace Transforms

The Laplace transform converts linear differential equations into algebraic equations.
Definition:
$$ \mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st} f(t) dt $$

### 2.1 Important Transform Pairs
- $\mathcal{L}\{1\} = \frac{1}{s}$
- $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$
- $\mathcal{L}\{\sin \omega t\} = \frac{\omega}{s^2 + \omega^2}$
- $\mathcal{L}\{\cos \omega t\} = \frac{s}{s^2 + \omega^2}$

### 2.2 Derivative Property
$$ \mathcal{L}\{f'(t)\} = sF(s) - f(0) $$
$$ \mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0) $$

### Solved Example 2: Solving ODE with Laplace Transforms
**Problem:** Solve $y' + 3y = e^{-2t}$, given $y(0) = 1$.
**Solution:**
1. Take Laplace transform of both sides:
   $$ [sY(s) - y(0)] + 3Y(s) = \frac{1}{s+2} $$
2. Substitute $y(0) = 1$:
   $$ sY(s) - 1 + 3Y(s) = \frac{1}{s+2} $$
   $$ Y(s)(s + 3) = 1 + \frac{1}{s+2} = \frac{s+3}{s+2} $$
3. Solve for $Y(s)$:
   $$ Y(s) = \frac{1}{s+2} $$
4. Take Inverse Laplace transform:
   $$ y(t) = \mathcal{L}^{-1}\left\{ \frac{1}{s+2} \right\} = e^{-2t} $$

## 3. Fourier Series

A periodic function $f(t)$ with period $T = 2L$ can be expanded into a Fourier series:
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos \frac{n\pi t}{L} + b_n \sin \frac{n\pi t}{L} \right) $$
Where the coefficients are:
$$ a_0 = \frac{1}{L} \int_{-L}^{L} f(t) dt $$
$$ a_n = \frac{1}{L} \int_{-L}^{L} f(t) \cos \frac{n\pi t}{L} dt $$
$$ b_n = \frac{1}{L} \int_{-L}^{L} f(t) \sin \frac{n\pi t}{L} dt $$

### Solved Example 3: Square Wave Fourier Series
**Problem:** Find the Fourier series for the square wave $f(t) = 1$ for $0 < t < \pi$ and $f(t) = -1$ for $-\pi < t < 0$, with period $2\pi$ ($L = \pi$).
**Solution:**
1. The function is odd, so $a_0 = 0$ and $a_n = 0$.
2. Calculate $b_n$:
   $$ b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin(nt) dt = \frac{2}{\pi} \int_0^{\pi} (1) \sin(nt) dt $$
   $$ b_n = \frac{2}{\pi} \left[ \frac{-\cos(nt)}{n} \right]_0^{\pi} = \frac{2}{n\pi} (1 - \cos(n\pi)) $$
3. Since $\cos(n\pi) = (-1)^n$:
   If $n$ is even, $b_n = 0$.
   If $n$ is odd, $b_n = \frac{4}{n\pi}$.
4. The Fourier series is:
   $$ f(t) = \frac{4}{\pi} \left( \sin t + \frac{1}{3}\sin 3t + \frac{1}{5}\sin 5t + \dots \right) $$
