# Ordinary Differential Equations (ODEs)

Welcome to the comprehensive guide on **Ordinary Differential Equations**. A differential equation is simply an equation that contains an unknown function and one or more of its derivatives. If the function depends on only *one* independent variable (typically $x$ or $t$), it is called an *Ordinary* Differential Equation (ODE). If it depends on multiple independent variables, it is a *Partial* Differential Equation (PDE).

Differential equations are the language of nature. They describe how things *change*. Whether it is the cooling of a hot cup of coffee, the oscillation of a pendulum, or the charging of a capacitor in a circuit, ODEs are used to model the system.

---

## 1. Classifying ODEs

Before solving an ODE, you must classify it. The method you use to solve it depends entirely on its classification.

1. **Order:** The highest derivative present in the equation.
   - $y' + 2y = 0$ is a **First-Order** ODE.
   - $y'' - 5y' + 6y = 0$ is a **Second-Order** ODE.
2. **Linearity:** An ODE is linear if the unknown function $y$ and its derivatives appear only to the first power, and they are not multiplied together or inside another function (like $\sin(y)$ or $e^y$).
   - $x^2 y'' + 3x y' = \sin(x)$ is **Linear**.
   - $y' + y^2 = x$ is **Non-Linear** (because of $y^2$).

---

## 2. Solving First-Order Separable ODEs

A first-order ODE is called **separable** if you can move all the $y$ terms (including $dy$) to one side of the equation, and all the $x$ terms (including $dx$) to the other side. 

$$ \frac{dy}{dx} = g(x)h(y) \implies \frac{1}{h(y)}dy = g(x)dx $$

Once separated, you simply integrate both sides.

### Example 1: Solving a Separable ODE
**Problem:** Solve the differential equation $\frac{dy}{dx} = -2xy^2$ with the initial condition $y(0) = 1$.

**Step-by-Step Solution:**
**1. Separate the variables:**
Move $y^2$ to the left by dividing, and move $dx$ to the right by multiplying.
$$ \frac{1}{y^2} dy = -2x dx $$
$$ y^{-2} dy = -2x dx $$

**2. Integrate both sides:**
$$ \int y^{-2} dy = \int -2x dx $$
Using the power rule for integration:
$$ \frac{y^{-1}}{-1} = -x^2 + C $$
$$ -\frac{1}{y} = -x^2 + C $$

**3. Solve for $y$ (The General Solution):**
Multiply by $-1$:
$$ \frac{1}{y} = x^2 - C $$
(Note: $-C$ is just another arbitrary constant, so we can just write $+C$, but let's keep it as $C$ for simplicity).
Invert both sides:
$$ y(x) = \frac{1}{x^2 + C} $$
This is the *general solution*, representing a family of curves depending on the constant $C$.

**4. Apply the initial condition $y(0) = 1$:**
Substitute $x = 0$ and $y = 1$ into the general solution to find the specific value of $C$.
$$ 1 = \frac{1}{(0)^2 + C} $$
$$ 1 = \frac{1}{C} \implies C = 1 $$

**Final Answer (The Particular Solution):**
$$ y(x) = \frac{1}{x^2 + 1} $$

---

## 3. Solving First-Order Linear ODEs (Integrating Factor)

If a first-order ODE is linear, it can be written in the standard form:
$$ \frac{dy}{dx} + P(x)y = Q(x) $$

To solve this, we use the **Integrating Factor Method**. The trick is to multiply the entire equation by a magic function, $\mu(x)$, which will collapse the left side into the exact derivative of a product.

The integrating factor is calculated as:
$$ \mu(x) = e^{\int P(x) dx} $$

### Example 2: Using the Integrating Factor
**Problem:** Solve the linear ODE $\frac{dy}{dx} - \frac{2}{x}y = x^2 \cos(x)$ for $x > 0$.

**Step-by-Step Solution:**
**1. Identify $P(x)$ and $Q(x)$:**
The equation is already in standard form.
$$ P(x) = -\frac{2}{x} $$
$$ Q(x) = x^2 \cos(x) $$

**2. Calculate the Integrating Factor $\mu(x)$:**
$$ \mu(x) = e^{\int -\frac{2}{x} dx} $$
$$ \mu(x) = e^{-2 \ln|x|} = e^{\ln(x^{-2})} = x^{-2} = \frac{1}{x^2} $$

**3. Multiply the entire ODE by $\mu(x)$:**
$$ \frac{1}{x^2} \frac{dy}{dx} - \frac{2}{x^3}y = \cos(x) $$

**4. Collapse the left side:**
The left side is now exactly the derivative of the product $(\mu(x) \cdot y)$.
$$ \frac{d}{dx} \left( \frac{1}{x^2} y \right) = \cos(x) $$

**5. Integrate both sides:**
Integrating a derivative just leaves the original function.
$$ \int \frac{d}{dx} \left( \frac{1}{x^2} y \right) dx = \int \cos(x) dx $$
$$ \frac{1}{x^2} y = \sin(x) + C $$

**6. Solve for $y$:**
Multiply by $x^2$:
$$ y(x) = x^2 \sin(x) + C x^2 $$

This is the final general solution.

---

## 4. Second-Order Linear Homogeneous ODEs (Constant Coefficients)

These equations govern mechanical vibrations, RLC circuits, and many other physical systems. They take the form:
$$ a y'' + b y' + c y = 0 $$
Where $a$, $b$, and $c$ are constants.

Because the derivative of an exponential function $e^{rx}$ is just $r e^{rx}$, we guess that the solution looks like $y = e^{rx}$. Plugging this in yields the **Characteristic Equation**:
$$ a r^2 + b r + c = 0 $$

We solve this quadratic equation for $r$. The roots $r_1$ and $r_2$ dictate the form of the solution:

1. **Distinct Real Roots ($r_1 \neq r_2$):** Overdamped system.
   $$ y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x} $$
2. **Repeated Real Roots ($r_1 = r_2 = r$):** Critically damped system.
   $$ y(x) = (C_1 + C_2 x) e^{r x} $$
3. **Complex Roots ($r = \alpha \pm i\beta$):** Underdamped (oscillating) system.
   $$ y(x) = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x)) $$

### Example 3: Solving a Second-Order ODE
**Problem:** Find the general solution to $y'' - 4y' + 13y = 0$.

**Step-by-Step Solution:**
**1. Write the characteristic equation:**
Substitute $r^2$ for $y''$, $r$ for $y'$, and $1$ for $y$.
$$ r^2 - 4r + 13 = 0 $$

**2. Solve for $r$ using the quadratic formula:**
$$ r = \frac{-(-4) \pm \sqrt{(-4)^2 - 4(1)(13)}}{2(1)} $$
$$ r = \frac{4 \pm \sqrt{16 - 52}}{2} $$
$$ r = \frac{4 \pm \sqrt{-36}}{2} $$
$$ r = \frac{4 \pm 6i}{2} = 2 \pm 3i $$

**3. Identify $\alpha$ and $\beta$:**
The roots are complex, so we are in Case 3 (Underdamped).
$\alpha = 2$ (the real part)
$\beta = 3$ (the imaginary part)

**4. Write the final general solution:**
Substitute $\alpha$ and $\beta$ into the Case 3 template:
$$ y(x) = e^{2x} (C_1 \cos(3x) + C_2 \sin(3x)) $$
This represents an oscillation with an exponentially growing amplitude.
