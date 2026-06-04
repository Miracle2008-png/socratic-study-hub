# 5. Method of Integrating Factors (Worked Example)

Let's put the algorithm from the previous section into practice. The Integrating Factor method is one of the most reliable step-by-step algorithms in differential equations.

### Worked Example
**Problem:** Solve the initial value problem:
$$ x \frac{dy}{dx} - 2y = x^3 \sin(x) \quad \text{where } y(\pi) = 0 $$

**Step 1: Rearrange into Standard Form**
The equation must look like $\frac{dy}{dx} + P(x)y = Q(x)$.
Right now, there is an $x$ attached to the derivative. Divide every term by $x$:
$$ \frac{dy}{dx} - \frac{2}{x}y = x^2 \sin(x) $$

**Step 2: Identify $P(x)$**
Make sure to include the negative sign!
$$ P(x) = -\frac{2}{x} $$

**Step 3: Calculate the Integrating Factor $\mu(x)$**
$$ \mu(x) = e^{\int P(x) dx} $$
$$ \mu(x) = e^{\int -\frac{2}{x} dx} $$
$$ \mu(x) = e^{-2 \ln(x)} $$
Using logarithm properties, move the -2 into the exponent:
$$ \mu(x) = e^{\ln(x^{-2})} $$
Because $e$ and $\ln$ are inverses, they cancel out:
$$ \mu(x) = x^{-2} = \frac{1}{x^2} $$

**Step 4: Multiply the Standard Form ODE by $\mu(x)$**
$$ \frac{1}{x^2} \left( \frac{dy}{dx} - \frac{2}{x}y \right) = \frac{1}{x^2} \left( x^2 \sin(x) \right) $$
$$ \frac{1}{x^2}\frac{dy}{dx} - \frac{2}{x^3}y = \sin(x) $$

**Step 5: Collapse the Left Side**
According to the rule, the left side is *guaranteed* to be the derivative of $[\mu(x) \cdot y]$. We don't even need to verify it (though you can check it with the product rule).
$$ \frac{d}{dx} \left[ \frac{1}{x^2} \cdot y \right] = \sin(x) $$

**Step 6: Integrate Both Sides**
Integrating the left side simply removes the $\frac{d}{dx}$ operator.
$$ \int \frac{d}{dx} \left[ \frac{y}{x^2} \right] dx = \int \sin(x) dx $$
$$ \frac{y}{x^2} = -\cos(x) + C $$
*(Do not forget the $+C$ here!)*

**Step 7: Isolate $y$**
Multiply both sides by $x^2$:
$$ y(x) = -x^2 \cos(x) + Cx^2 $$
This is the **general solution**.

**Step 8: Apply Initial Condition**
We are given $y(\pi) = 0$.
$$ 0 = -(\pi)^2 \cos(\pi) + C(\pi)^2 $$
Since $\cos(\pi) = -1$:
$$ 0 = \pi^2 + C\pi^2 $$
Divide by $\pi^2$:
$$ 0 = 1 + C \implies C = -1 $$

**Final Exact Solution:**
$$ y(x) = -x^2 \cos(x) - x^2 $$
