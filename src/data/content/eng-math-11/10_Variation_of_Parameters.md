# 10. Variation of Parameters

What if the driving force $g(x)$ is $\tan(x)$ or $\ln(x)$? The method of undetermined coefficients fails completely because the derivatives of $\tan(x)$ (secant squared, etc.) generate an infinite chain of new function types. You cannot guess the form.

For these equations, we must use the universal, brute-force method: **Variation of Parameters**.

### The Theory
Suppose we have found the complementary solution: $y_c = C_1 y_1 + C_2 y_2$.
Instead of guessing the algebraic form of $y_p$, we assume that $y_p$ is formed by replacing the constant parameters $C_1$ and $C_2$ with unknown **functions** $u_1(x)$ and $u_2(x)$:
$$ y_p = u_1(x) y_1(x) + u_2(x) y_2(x) $$

By plugging this assumption into the ODE and enforcing a constraint to simplify the derivatives, mathematicians derived exact integral formulas to calculate $u_1$ and $u_2$.

### The Formulas
To find the unknown functions $u_1$ and $u_2$, evaluate these two integrals:
$$ u_1 = -\int \frac{y_2 g(x)}{W} dx $$
$$ u_2 = \int \frac{y_1 g(x)}{W} dx $$

Where:
*   $y_1, y_2$ are the fundamental solutions from $y_c$.
*   $g(x)$ is the driving force (ensure the ODE is in standard form $y''+py'+qy=g(x)$).
*   $W$ is the Wronskian determinant: $W = y_1 y'_2 - y_2 y'_1$.

*(Note: Do not add $+C$ when performing these integrals).*

### Worked Example
**Problem:** Solve $y'' + y = \sec(x)$

**Step 1: Find $y_c$**
$r^2 + 1 = 0 \implies r = \pm i$.
$y_1 = \cos(x), y_2 = \sin(x)$.
$y_c = C_1 \cos(x) + C_2 \sin(x)$.

**Step 2: Calculate the Wronskian $W$**
$W = y_1 y'_2 - y_2 y'_1$
$W = (\cos x)(\cos x) - (\sin x)(-\sin x) = \cos^2 x + \sin^2 x = 1$.

**Step 3: Integrate for $u_1$ and $u_2$**
$g(x) = \sec(x) = 1/\cos(x)$.

$$ u_1 = -\int \frac{(\sin x)(\sec x)}{1} dx = -\int \frac{\sin x}{\cos x} dx = -\int \tan(x) dx $$
$$ u_1 = \ln|\cos(x)| $$

$$ u_2 = \int \frac{(\cos x)(\sec x)}{1} dx = \int 1 \, dx = x $$

**Step 4: Form the Particular Solution $y_p$**
$y_p = u_1 y_1 + u_2 y_2$
$y_p = (\ln|\cos(x)|)\cos(x) + (x)\sin(x)$

**Step 5: Final General Solution**
$$ y(x) = C_1 \cos(x) + C_2 \sin(x) + \cos(x)\ln|\cos(x)| + x\sin(x) $$
