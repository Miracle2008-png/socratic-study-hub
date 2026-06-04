# 2. Line Integrals (Scalar Fields)

In standard calculus, we integrate over straight intervals on the x-axis ($dx$). 
A **Line Integral** allows us to integrate a function along a *curved path* (or curve) $C$ in 2D or 3D space.

If $f(x,y)$ is a scalar field (like the density of a wire), the line integral of $f$ along curve $C$ with respect to arc length $s$ gives the total mass of the wire:
$$ \int_C f(x,y) ds $$

### How to Evaluate a Line Integral
You cannot integrate with respect to a curved "path" directly. You must translate the path into a single parameter $t$ (time).

**Step 1: Parameterize the Curve**
Find vector equations for the path $C$:
$$ \mathbf{r}(t) = \langle x(t), y(t) \rangle \quad \text{for} \quad a \le t \le b $$

**Step 2: Find the Arc Length Differential ($ds$)**
The tiny piece of arc length $ds$ is equal to the magnitude of the velocity vector multiplied by $dt$:
$$ ds = |\mathbf{r}'(t)| dt = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} dt $$

**Step 3: Set up and Evaluate**
Plug the parameterization into the function $f(x,y)$, substitute $ds$, and integrate from $t=a$ to $t=b$.
$$ \int_C f(x,y) ds = \int_{a}^{b} f(x(t), y(t)) \sqrt{x'(t)^2 + y'(t)^2} \, dt $$

### Worked Example
**Problem:** Evaluate $\int_C (2 + x^2 y) ds$, where $C$ is the upper half of the unit circle $x^2 + y^2 = 1$.

**Step 1: Parameterize the Path**
The standard parameterization for a unit circle is:
*   $x(t) = \cos(t)$
*   $y(t) = \sin(t)$
Since it's the upper half, $t$ goes from $0$ to $\pi$.

**Step 2: Find $ds$**
Find the derivatives:
*   $x'(t) = -\sin(t)$
*   $y'(t) = \cos(t)$
Calculate the magnitude:
$$ \sqrt{(-\sin(t))^2 + (\cos(t))^2} = \sqrt{\sin^2(t) + \cos^2(t)} = \sqrt{1} = 1 $$
So, $ds = 1 \, dt$.

**Step 3: Set up the Integral**
Substitute $x = \cos(t)$, $y = \sin(t)$, and $ds = dt$ into the original function:
$$ \int_{0}^{\pi} (2 + \cos^2(t)\sin(t)) dt $$

**Step 4: Evaluate**
Break it into two integrals:
1. $\int_{0}^{\pi} 2 \, dt = [2t]_{0}^{\pi} = 2\pi$
2. $\int_{0}^{\pi} \cos^2(t)\sin(t) \, dt$
Use u-substitution: Let $u = \cos(t) \implies du = -\sin(t)dt \implies -du = \sin(t)dt$.
Limits change: $u(0) = \cos(0) = 1$, $u(\pi) = \cos(\pi) = -1$.
$$ \int_{1}^{-1} u^2 (-du) = \int_{-1}^{1} u^2 du = \left[ \frac{1}{3}u^3 \right]_{-1}^{1} = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3} $$

Total result:
$$ 2\pi + \frac{2}{3} $$
