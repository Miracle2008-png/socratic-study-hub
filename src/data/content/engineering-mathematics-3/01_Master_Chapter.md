# Engineering Mathematics III: Differential Equations and Transform Methods

## 1. Ordinary Differential Equations (ODEs)
ODE models systems involving rate of change of a single independent variable.

### 1.1 First-Order Linear ODEs
The standard form is:
$$ \frac{dy}{dx} + P(x)y = Q(x) $$
Solved using the integrating factor $IF = e^{\int P(x) dx}$.

**Solved Example 1.1: Integrating Factor Method**
Solve the differential equation: $\frac{dy}{dx} + \frac{2}{x}y = x^2$ for $x > 0$.

*Solution:*
1. Identify $P(x) = \frac{2}{x}$ and $Q(x) = x^2$.
2. Calculate Integrating Factor (IF):
   $$ IF = e^{\int \frac{2}{x} dx} = e^{2 \ln x} = e^{\ln(x^2)} = x^2 $$
3. Multiply ODE by IF:
   $$ x^2 \frac{dy}{dx} + 2x y = x^4 $$
   $$ \frac{d}{dx} (x^2 y) = x^4 $$
4. Integrate both sides:
   $$ x^2 y = \int x^4 dx = \frac{x^5}{5} + C $$
5. Solve for $y$:
   $$ y(x) = \frac{x^3}{5} + \frac{C}{x^2} $$

### 1.2 Second-Order Linear Homogeneous ODEs
Form: $a y'' + b y' + c y = 0$.
Characteristic equation: $ar^2 + br + c = 0$.

**Solved Example 1.2: Distinct Real Roots**
Solve $y'' - 5y' + 6y = 0$ with initial conditions $y(0)=2, y'(0)=5$.

*Solution:*
1. Characteristic equation:
   $$ r^2 - 5r + 6 = 0 \implies (r-2)(r-3) = 0 \implies r = 2, 3 $$
2. General solution:
   $$ y(t) = C_1 e^{2t} + C_2 e^{3t} $$
3. Apply initial conditions:
   $y(0) = C_1 + C_2 = 2$
   $y'(t) = 2C_1 e^{2t} + 3C_2 e^{3t} \implies y'(0) = 2C_1 + 3C_2 = 5$
4. Solve the system:
   Multiply first equation by 2: $2C_1 + 2C_2 = 4$
   Subtract from second: $(2C_1 + 3C_2) - (2C_1 + 2C_2) = 5 - 4 \implies C_2 = 1$
   $C_1 + 1 = 2 \implies C_1 = 1$
5. Final solution:
   $$ y(t) = e^{2t} + e^{3t} $$

## 2. Laplace Transforms
Useful for solving initial value problems for linear ODEs.
Definition: $\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt$.

### 2.1 Solving ODEs with Laplace Transforms
Key properties:
$$ \mathcal{L}\{y'(t)\} = sY(s) - y(0) $$
$$ \mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0) $$

**Solved Example 2.1: Laplace Transform Application**
Solve $y'' + 4y = \sin(3t)$ with $y(0)=0, y'(0)=0$.

*Solution:*
1. Apply Laplace Transform:
   $$ (s^2 Y(s) - sy(0) - y'(0)) + 4Y(s) = \mathcal{L}\{\sin(3t)\} $$
   $$ s^2 Y(s) + 4Y(s) = \frac{3}{s^2 + 9} $$
2. Solve for $Y(s)$:
   $$ Y(s)(s^2 + 4) = \frac{3}{s^2 + 9} \implies Y(s) = \frac{3}{(s^2 + 4)(s^2 + 9)} $$
3. Partial Fraction Decomposition:
   $$ \frac{3}{(s^2 + 4)(s^2 + 9)} = \frac{A}{s^2 + 4} + \frac{B}{s^2 + 9} $$
   $$ 3 = A(s^2 + 9) + B(s^2 + 4) $$
   Let $u = s^2$. $3 = A(u + 9) + B(u + 4)$.
   If $u = -4$, $3 = A(5) \implies A = 3/5$.
   If $u = -9$, $3 = B(-5) \implies B = -3/5$.
   $$ Y(s) = \frac{3/5}{s^2 + 4} - \frac{3/5}{s^2 + 9} $$
4. Inverse Laplace Transform:
   $$ \mathcal{L}^{-1}\left\{\frac{\omega}{s^2 + \omega^2}\right\} = \sin(\omega t) $$
   For the first term, $\omega=2$, so multiply and divide by 2:
   $$ \frac{3/5}{s^2 + 4} = \frac{3}{10} \frac{2}{s^2 + 4} \implies \frac{3}{10}\sin(2t) $$
   For the second term, $\omega=3$, so multiply and divide by 3:
   $$ \frac{3/5}{s^2 + 9} = \frac{1}{5} \frac{3}{s^2 + 9} \implies \frac{1}{5}\sin(3t) $$
5. Final solution:
   $$ y(t) = \frac{3}{10}\sin(2t) - \frac{1}{5}\sin(3t) $$
