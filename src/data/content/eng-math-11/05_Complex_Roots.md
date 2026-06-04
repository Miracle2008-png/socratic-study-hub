# 5. Complex Roots (Euler's Formula)

The final and most important case of the characteristic equation occurs when the discriminant is negative ($b^2 - 4ac < 0$).

### Case 3: Complex Conjugate Roots
If the discriminant is negative, the quadratic formula yields a pair of complex conjugate roots:
$$ r = \alpha \pm \beta i $$
where $\alpha$ is the real part ($-b/2a$) and $\beta$ is the imaginary part ($\sqrt{|b^2-4ac|}/2a$).

Mathematically, our two solutions are:
$$ y_1 = e^{(\alpha + \beta i)t} \quad \text{and} \quad y_2 = e^{(\alpha - \beta i)t} $$

While this is mathematically correct, it is completely useless for engineering. If we are modeling a physical pendulum or a circuit, the solution $y(t)$ must be a purely real number. We cannot have imaginary position or imaginary voltage!

### Euler's Formula to the Rescue
To convert our complex exponentials into real functions, we use **Euler's Formula**:
$$ e^{i\theta} = \cos(\theta) + i\sin(\theta) $$

Let's expand $y_1$:
$$ y_1 = e^{(\alpha + \beta i)t} = e^{\alpha t} e^{i\beta t} = e^{\alpha t} (\cos(\beta t) + i\sin(\beta t)) $$
Expand $y_2$:
$$ y_2 = e^{(\alpha - \beta i)t} = e^{\alpha t} e^{-i\beta t} = e^{\alpha t} (\cos(\beta t) - i\sin(\beta t)) $$

*(Note: $\cos(-\theta) = \cos(\theta)$ and $\sin(-\theta) = -\sin(\theta)$).*

By the Superposition Principle, any linear combination of $y_1$ and $y_2$ is a valid solution.
If we add them together ($y_1 + y_2$) and divide by 2, the imaginary sine terms perfectly cancel out, leaving just $e^{\alpha t}\cos(\beta t)$.
If we subtract them ($y_1 - y_2$) and divide by $2i$, the cosine terms cancel out, leaving just $e^{\alpha t}\sin(\beta t)$.

### The Real General Solution
We have just constructed two purely real, linearly independent solutions!
The general solution for complex roots $r = \alpha \pm \beta i$ is:
$$ y(t) = e^{\alpha t} (C_1 \cos(\beta t) + C_2 \sin(\beta t)) $$

**What does this mean physically?**
*   The $\cos$ and $\sin$ terms dictate that the system is **Oscillating** back and forth with frequency $\beta$.
*   The $e^{\alpha t}$ term acts as an "envelope" that modulates the amplitude of the oscillation over time. If $\alpha < 0$, the oscillations decay to zero (damping). If $\alpha > 0$, the oscillations explode to infinity.

**Worked Example:** Solve $y'' - 4y' + 13y = 0$.
1.  Characteristic equation: $r^2 - 4r + 13 = 0$.
2.  Quadratic formula: $r = \frac{4 \pm \sqrt{16 - 52}}{2} = \frac{4 \pm \sqrt{-36}}{2} = \frac{4 \pm 6i}{2} = 2 \pm 3i$.
3.  We have $\alpha = 2, \beta = 3$.
4.  General Solution: $y(t) = e^{2t} (C_1 \cos(3t) + C_2 \sin(3t))$.
