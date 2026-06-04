# 9. Homogeneous Substitutions

Another class of nonlinear differential equations can be solved by recognizing a specific structural pattern. If a first-order ODE can be algebraically manipulated so that the right side is entirely a function of the ratio $\left(\frac{y}{x}\right)$, it is called a **Homogeneous Equation**.

### Identifying a Homogeneous Equation
The standard check is to replace every $x$ with $tx$ and every $y$ with $ty$. If the $t$ variables completely cancel out, the equation is homogeneous.

Alternatively, if you can rewrite the ODE as:
$$ \frac{dy}{dx} = F\left(\frac{y}{x}\right) $$
then it is homogeneous.

**Example Check:**
Is $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$ homogeneous?
Divide the numerator and denominator by $x^2$:
$$ \frac{dy}{dx} = \frac{1 + (y/x)^2}{(y/x)} $$
Since every variable is perfectly locked inside a $(y/x)$ ratio, it is homogeneous!

### The Substitution Strategy
Because the entire equation relies on the ratio $\frac{y}{x}$, we define a new variable $v$:
$$ v = \frac{y}{x} \implies y = vx $$

To find $\frac{dy}{dx}$, we must use the Product Rule on $y = vx$ (since both $v$ and $x$ are variables):
$$ \frac{dy}{dx} = v + x\frac{dv}{dx} $$

By substituting $v$ and this new derivative into the homogeneous equation, the ODE will *always* transform into a **Separable Equation** in terms of $v$ and $x$.

### Worked Example
**Problem:** Solve $\frac{dy}{dx} = \frac{y^2 + 2xy}{x^2}$.

**1. Verify Homogeneous:**
Divide top and bottom by $x^2$:
$$ \frac{dy}{dx} = \left(\frac{y}{x}\right)^2 + 2\left(\frac{y}{x}\right) $$
It is homogeneous.

**2. Substitute:**
Let $v = \frac{y}{x}$. Then $\frac{dy}{dx} = v + x\frac{dv}{dx}$.
$$ v + x\frac{dv}{dx} = v^2 + 2v $$

**3. Separate Variables:**
Subtract $v$ from both sides:
$$ x\frac{dv}{dx} = v^2 + v $$
Move $v$'s to the left and $x$'s to the right:
$$ \frac{1}{v^2 + v} dv = \frac{1}{x} dx $$

**4. Integrate:**
The right side is simply $\ln|x| + C$.
The left side requires **Partial Fractions**:
$$ \frac{1}{v(v+1)} = \frac{1}{v} - \frac{1}{v+1} $$
$$ \int \left( \frac{1}{v} - \frac{1}{v+1} \right) dv = \ln|v| - \ln|v+1| = \ln\left|\frac{v}{v+1}\right| $$

Equating both sides:
$$ \ln\left|\frac{v}{v+1}\right| = \ln|x| + C $$
$$ \frac{v}{v+1} = A x $$

**5. Substitute $y$ back in:**
Since $v = y/x$:
$$ \frac{y/x}{(y/x) + 1} = Ax \implies \frac{y}{y+x} = Ax $$
