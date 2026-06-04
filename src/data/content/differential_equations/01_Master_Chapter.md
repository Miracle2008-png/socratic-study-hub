# Differential Equations

## 1. First-Order Ordinary Differential Equations (ODEs)

### 1.1 Separable Equations
A first-order differential equation $ \frac{dy}{dx} = f(x, y) $ is separable if it can be written as $ \frac{dy}{dx} = g(x)h(y) $.

**Solution Method:**
1. Separate variables: $ \frac{dy}{h(y)} = g(x) dx $
2. Integrate both sides: $ \int \frac{dy}{h(y)} = \int g(x) dx + C $

**Example 1:**
Solve $ \frac{dy}{dx} = x y $ with the initial condition $ y(0) = 2 $.

*Step 1: Separate variables.*
$$ \frac{1}{y} dy = x dx $$

*Step 2: Integrate both sides.*
$$ \int \frac{1}{y} dy = \int x dx $$
$$ \ln|y| = \frac{1}{2}x^2 + C $$

*Step 3: Solve for $y$.*
$$ y = e^{\frac{1}{2}x^2 + C} = A e^{\frac{1}{2}x^2} $$
where $ A = e^C $.

*Step 4: Apply initial condition.*
$$ y(0) = A e^0 = A \implies A = 2 $$
$$ y(x) = 2 e^{\frac{1}{2}x^2} $$

### 1.2 Linear First-Order ODEs
A linear first-order ODE has the form $ \frac{dy}{dx} + P(x)y = Q(x) $.

**Solution Method:**
1. Compute the integrating factor: $ \mu(x) = \exp \left( \int P(x) dx \right) $.
2. Multiply the ODE by $ \mu(x) $: $ \mu(x) \frac{dy}{dx} + \mu(x) P(x) y = \mu(x) Q(x) $, which simplifies to $ \frac{d}{dx} [\mu(x) y] = \mu(x) Q(x) $.
3. Integrate both sides: $ \mu(x) y = \int \mu(x) Q(x) dx + C $.

**Example 2:**
Solve $ \frac{dy}{dx} - \frac{2}{x}y = x^2 \sin(x) $.

*Step 1: Identify $ P(x) $ and compute $ \mu(x) $.*
$ P(x) = -\frac{2}{x} $.
$$ \mu(x) = e^{\int -\frac{2}{x} dx} = e^{-2 \ln|x|} = x^{-2} = \frac{1}{x^2} $$

*Step 2: Multiply and rewrite.*
$$ \frac{1}{x^2} \frac{dy}{dx} - \frac{2}{x^3} y = \sin(x) $$
$$ \frac{d}{dx} \left( \frac{1}{x^2} y \right) = \sin(x) $$

*Step 3: Integrate.*
$$ \frac{1}{x^2} y = -\cos(x) + C $$
$$ y(x) = -x^2 \cos(x) + C x^2 $$

## 2. Second-Order Linear ODEs

### 2.1 Homogeneous Equations with Constant Coefficients
Form: $ a \frac{d^2y}{dx^2} + b \frac{dy}{dx} + c y = 0 $.

Assume a solution of the form $ y = e^{rx} $. Substituting this into the ODE yields the characteristic equation:
$$ a r^2 + b r + c = 0 $$

Roots of the characteristic equation dictate the general solution:
1. **Distinct real roots ($r_1 \neq r_2$):** $ y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x} $
2. **Repeated real root ($r_1 = r_2 = r$):** $ y(x) = (C_1 + C_2 x) e^{r x} $
3. **Complex conjugate roots ($r = \alpha \pm i \beta$):** $ y(x) = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x)) $

**Example 3:**
Solve $ y'' - 4y' + 13y = 0 $.

*Step 1: Characteristic equation.*
$$ r^2 - 4r + 13 = 0 $$

*Step 2: Find roots.*
$$ r = \frac{4 \pm \sqrt{16 - 52}}{2} = \frac{4 \pm \sqrt{-36}}{2} = 2 \pm 3i $$

*Step 3: Write general solution.*
Here, $ \alpha = 2, \beta = 3 $.
$$ y(x) = e^{2x} (C_1 \cos(3x) + C_2 \sin(3x)) $$
