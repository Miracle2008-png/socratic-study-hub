# 3. Separable Equations

The simplest and most straightforward method for solving a first-order ODE is **Separation of Variables**. 

You can use this method if, and only if, the ODE can be factored into a function entirely of $x$ multiplied (or divided) by a function entirely of $y$.

### The Standard Form
A separable ODE looks like this:
$$ \frac{dy}{dx} = g(x) \cdot h(y) $$

### The Solution Algorithm
1. Treat $\frac{dy}{dx}$ as a fraction of differentials (a slight abuse of notation, but mathematically valid here).
2. Move all terms containing $y$ (including $dy$) to the left side of the equation.
3. Move all terms containing $x$ (including $dx$) to the right side of the equation.
   $$ \frac{1}{h(y)} dy = g(x) dx $$
4. Integrate both sides independently.
   $$ \int \frac{1}{h(y)} dy = \int g(x) dx $$
5. Add a single constant of integration $+C$ to the side with the independent variable ($x$).
6. If possible, solve algebraically for $y$ to get an explicit solution $y(x)$.

### Worked Example 1: Radioactive Decay
**Problem:** The rate of decay of an isotope is proportional to its current mass: $\frac{dm}{dt} = -k m$. Solve for $m(t)$.

**Solution:**
1. Separate variables. Divide by $m$ and multiply by $dt$:
   $$ \frac{1}{m} dm = -k dt $$
2. Integrate both sides:
   $$ \int \frac{1}{m} dm = \int -k dt $$
   $$ \ln|m| = -kt + C $$
3. Solve for $m$ by exponentiating both sides:
   $$ e^{\ln|m|} = e^{-kt + C} $$
   $$ |m| = e^{-kt} \cdot e^C $$
4. Let $e^C$ be a new constant $A$ (which absorbs the absolute value sign):
   $$ m(t) = A e^{-kt} $$
*(This is the classic exponential decay formula used universally in engineering).*

### Worked Example 2: Nonlinear Separable ODE
**Problem:** Solve $\frac{dy}{dx} = \frac{x^2}{y}$.

**Solution:**
1. Separate variables. Multiply by $y$ and $dx$:
   $$ y dy = x^2 dx $$
2. Integrate both sides:
   $$ \int y dy = \int x^2 dx $$
   $$ \frac{y^2}{2} = \frac{x^3}{3} + C_1 $$
3. Isolate $y$. Multiply by 2:
   $$ y^2 = \frac{2x^3}{3} + 2C_1 $$
4. Replace $2C_1$ with a simpler constant $C$:
   $$ y = \pm \sqrt{\frac{2x^3}{3} + C} $$
