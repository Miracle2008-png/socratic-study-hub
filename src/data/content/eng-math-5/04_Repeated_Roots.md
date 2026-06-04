# 4. Case 2: Repeated Roots

When the characteristic equation $ar^2 + br + c = 0$ has a discriminant of exactly zero ($b^2 - 4ac = 0$), the quadratic formula yields a single, repeated real root: $r = -\frac{b}{2a}$.

### The Missing Second Solution
We have one building block: $y_1 = e^{rt}$.
However, a second-order ODE mathematically *must* have two linearly independent solutions. If we try to use $y_2 = e^{rt}$, it is identical to $y_1$. The Wronskian would be zero.

To generate a second, linearly independent solution, we use a technique called **Reduction of Order**. Multiplying the first solution by the independent variable $t$ creates a valid second solution.
$$ y_2 = t e^{rt} $$

### The General Solution
By the principle of superposition, we combine $y_1$ and $y_2$:
$$ y(t) = C_1 e^{rt} + C_2 t e^{rt} $$
Or factored:
$$ y(t) = (C_1 + C_2 t) e^{rt} $$

### Physical Interpretation: Critical Damping
In mechanical systems, this case represents the "Goldilocks zone" between an overly stiff system and an oscillating system. 
A **critically damped** system returns to equilibrium as fast as physically possible without oscillating. This is how the suspension of a high-performance sports car, or the recoil mechanism of an artillery cannon, is engineered.

### Worked Example
**Problem:** Solve $y'' - 6y' + 9y = 0$.

**1. Form the Characteristic Equation:**
$$ r^2 - 6r + 9 = 0 $$

**2. Find the roots:**
Factor the quadratic (it's a perfect square):
$$ (r - 3)^2 = 0 $$
The only root is $r = 3$.

**3. Write the General Solution:**
Because the root is repeated, we must include the $t$ multiplier for the second term.
$$ y(t) = C_1 e^{3t} + C_2 t e^{3t} $$

*(If we were given initial conditions, we would follow the exact same process as the previous section: plug in $t=0$, take the derivative (requiring the Product Rule on the second term!), plug in $t=0$ again, and solve the system for $C_1$ and $C_2$.)*
