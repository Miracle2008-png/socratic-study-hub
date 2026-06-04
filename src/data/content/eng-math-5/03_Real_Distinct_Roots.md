# 3. Case 1: Real and Distinct Roots

When the characteristic equation $ar^2 + br + c = 0$ has a positive discriminant ($b^2 - 4ac > 0$), the quadratic formula yields two distinct, real numbers: $r_1$ and $r_2$.

### The General Solution
Because we guessed that our solution takes the form $y = e^{rt}$, and we found two valid values for $r$, we have two valid building block solutions:
$y_1 = e^{r_1 t}$ and $y_2 = e^{r_2 t}$.

By the principle of superposition, the general solution is:
$$ y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t} $$

### Physical Interpretation: The Overdamped System
In mechanical systems, this case occurs when the damping coefficient (friction/viscosity) is extremely high compared to the spring stiffness. 
If you push an overdamped pendulum, it will slowly creep back to its resting position without ever swinging past the center line. It will not oscillate.

### Worked Example
**Problem:** Solve the initial value problem $y'' + 5y' + 6y = 0$, given $y(0) = 2$ and $y'(0) = -1$.

**1. Form the Characteristic Equation:**
Replace derivatives with powers of $r$:
$$ r^2 + 5r + 6 = 0 $$

**2. Find the roots:**
Factor the quadratic:
$$ (r + 2)(r + 3) = 0 $$
The roots are $r_1 = -2$ and $r_2 = -3$.

**3. Write the General Solution:**
$$ y(t) = C_1 e^{-2t} + C_2 e^{-3t} $$

**4. Apply Initial Conditions to find $C_1$ and $C_2$:**
First condition: $y(0) = 2$
$$ 2 = C_1 e^{0} + C_2 e^{0} $$
$$ C_1 + C_2 = 2 \quad \text{--- (Eq. 1)} $$

Second condition requires the derivative. Differentiate the general solution:
$$ y'(t) = -2C_1 e^{-2t} - 3C_2 e^{-3t} $$
Apply $y'(0) = -1$:
$$ -1 = -2C_1 e^{0} - 3C_2 e^{0} $$
$$ -2C_1 - 3C_2 = -1 \quad \text{--- (Eq. 2)} $$

**5. Solve the System of Equations:**
From Eq. 1: $C_1 = 2 - C_2$.
Substitute into Eq. 2:
$$ -2(2 - C_2) - 3C_2 = -1 $$
$$ -4 + 2C_2 - 3C_2 = -1 $$
$$ -C_2 = 3 \implies C_2 = -3 $$
Plug back into Eq. 1:
$$ C_1 - 3 = 2 \implies C_1 = 5 $$

**6. Final Exact Solution:**
$$ y(t) = 5e^{-2t} - 3e^{-3t} $$
