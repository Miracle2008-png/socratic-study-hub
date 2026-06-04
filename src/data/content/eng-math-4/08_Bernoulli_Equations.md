# 8. Bernoulli Equations

Sometimes, a nonlinear ODE is tantalizingly close to being linear. Jacob Bernoulli discovered a brilliant substitution trick to convert a specific family of nonlinear equations into perfectly linear ones.

### The Bernoulli Form
An equation is a Bernoulli equation if it fits this standard form:
$$ \frac{dy}{dx} + P(x)y = Q(x)y^n $$
Where $n$ is any real number. 
*   If $n = 0$, it is a standard Linear equation.
*   If $n = 1$, it is a Separable equation.
*   For any other $n$ (like $y^2, y^{-1}, y^{1/2}$), it is a nonlinear Bernoulli equation.

### The Magic Substitution
To linearize the equation, we define a new variable $v$:
$$ v = y^{1-n} $$

Taking the derivative of $v$ with respect to $x$ (using the chain rule) yields:
$$ \frac{dv}{dx} = (1-n)y^{-n} \frac{dy}{dx} $$

By substituting $v$ and $\frac{dv}{dx}$ into the original equation, it will magically transform into a standard First-Order Linear equation in terms of $v$ and $x$, which can be solved using an integrating factor!

### Worked Example
**Problem:** Solve $y' - y = xy^2$.

**1. Identify $n$ and the Substitution:**
This is Bernoulli with $n=2$.
Let $v = y^{1-2} = y^{-1} = \frac{1}{y}$.

**2. Find the derivative $\frac{dv}{dx}$:**
$$ \frac{dv}{dx} = -1y^{-2} \frac{dy}{dx} $$

**3. Prepare the original equation:**
To make the substitution easier, multiply the original ODE by $(1-n)y^{-n}$.
In our case, multiply by $-1y^{-2}$:
$$ -y^{-2}y' + y^{-1} = -x $$

**4. Substitute:**
Notice that $-y^{-2}y'$ perfectly matches our $\frac{dv}{dx}$, and $y^{-1}$ is exactly $v$.
$$ \frac{dv}{dx} + v = -x $$

This is now a **linear** equation in standard form! $P(x) = 1, Q(x) = -x$.

**5. Solve using Integrating Factor:**
$$ \mu(x) = e^{\int 1 dx} = e^x $$
Multiply by $e^x$:
$$ e^x \frac{dv}{dx} + e^x v = -xe^x $$
$$ \frac{d}{dx}[e^x v] = -xe^x $$
Integrate both sides (the right side requires Integration by Parts):
$$ e^x v = -xe^x + e^x + C $$
Divide by $e^x$:
$$ v = -x + 1 + C e^{-x} $$

**6. Substitute back to $y$:**
Since $v = y^{-1} = \frac{1}{y}$:
$$ \frac{1}{y} = -x + 1 + C e^{-x} $$
$$ y = \frac{1}{-x + 1 + C e^{-x}} $$
