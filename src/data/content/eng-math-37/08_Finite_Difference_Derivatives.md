# 8. Finite Difference Derivatives

The **Finite Difference Method (FDM)** is a dominant numerical technique for solving both ODEs (specifically Boundary Value Problems) and Partial Differential Equations (PDEs). It abandons continuous calculus entirely, replacing all continuous derivatives with discrete algebraic approximations.

### Deriving Discrete Derivatives via Taylor Series
Consider a continuous function $f(x)$ discretized on a grid with spacing $h$:
$x_i$ is the current point, $x_{i+1} = x_i + h$ is the next point, and $x_{i-1} = x_i - h$ is the previous point.
Let $f_i = f(x_i)$.

Write the Taylor expansion forward:
$$f_{i+1} = f_i + h f'_i + \frac{h^2}{2} f''_i + \frac{h^3}{6} f'''_i + O(h^4) \quad \text{(Eq. 1)}$$

Write the Taylor expansion backward:
$$f_{i-1} = f_i - h f'_i + \frac{h^2}{2} f''_i - \frac{h^3}{6} f'''_i + O(h^4) \quad \text{(Eq. 2)}$$

### Approximating the First Derivative $f'(x)$
**1. Forward Difference:** Rearrange (Eq. 1) to isolate $f'_i$:
$$f'_i = \frac{f_{i+1} - f_i}{h} - \frac{h}{2}f''_i \implies \boxed{f'_i \approx \frac{f_{i+1} - f_i}{h}}$$
This is **1st-order accurate** $O(h)$.

**2. Backward Difference:** Rearrange (Eq. 2) to isolate $f'_i$:
$$f'_i = \frac{f_i - f_{i-1}}{h} + \frac{h}{2}f''_i \implies \boxed{f'_i \approx \frac{f_i - f_{i-1}}{h}}$$
This is also **1st-order accurate** $O(h)$.

**3. Central Difference:** Subtract (Eq. 2) from (Eq. 1). The $f_i$ terms and the $f''_i$ terms cancel exactly!
$$f_{i+1} - f_{i-1} = 2h f'_i + \frac{2h^3}{6}f'''_i$$
$$\boxed{f'_i \approx \frac{f_{i+1} - f_{i-1}}{2h}}$$
Because the $h^2$ terms cancelled, the dominant error is now $O(h^2)$. The central difference is **2nd-order accurate**. It is symmetric and vastly superior to forward/backward differences for interior points.

### Approximating the Second Derivative $f''(x)$
To find the second derivative, add (Eq. 1) and (Eq. 2). The $f'_i$ terms cancel exactly!
$$f_{i+1} + f_{i-1} = 2f_i + h^2 f''_i + O(h^4)$$
Rearrange to isolate $f''_i$:
$$\boxed{f''_i \approx \frac{f_{i+1} - 2f_i + f_{i-1}}{h^2}}$$

This is the standard **Central Difference approximation for the second derivative**. It is $O(h^2)$ accurate and requires three points (a 3-point stencil).

Using these simple algebraic replacements, we can convert any differential equation into a system of linear algebraic equations.
