# 4. Linear First-Order Equations

If a first-order ODE cannot be separated (e.g., $\frac{dy}{dx} + y = x$), we must determine if it is **Linear**. If it is, there is a guaranteed algorithmic method to solve it.

### The Standard Form
A first-order linear ODE can always be rearranged into the standard form:
$$ \frac{dy}{dx} + P(x)y = Q(x) $$

**Rules for Linearity:**
*   $y'$ and $y$ must only be to the first power.
*   They cannot multiply each other.
*   $P(x)$ and $Q(x)$ can be any continuous functions, no matter how complex, as long as they only contain $x$ (or constants).

**Example Check:**
Is $x^2 y' + \sin(x) y = e^x$ linear?
Yes. Divide by $x^2$ to get it into standard form:
$y' + \frac{\sin(x)}{x^2}y = \frac{e^x}{x^2}$.
Here, $P(x) = \frac{\sin(x)}{x^2}$ and $Q(x) = \frac{e^x}{x^2}$.

### Why Standard Form Fails Direct Integration
If we look at $y' + P(x)y = Q(x)$, we cannot simply integrate both sides because we don't know $y$. 

However, notice that the left side $\left(y' + P(x)y\right)$ looks suspiciously similar to the result of the Product Rule: $(uv)' = u'v + uv'$. 

If we multiply the entire equation by a magical "helper" function, we can artificially force the left side to perfectly collapse into the reverse of the Product Rule! This helper function is called the **Integrating Factor**.

### The Integrating Factor ($\mu(x)$)
The formula for the integrating factor (often denoted as $\mu(x)$ or $I(x)$) is:
$$ \mu(x) = e^{\int P(x) dx} $$

### The Solution Algorithm
1. Rearrange the ODE into standard form: $y' + P(x)y = Q(x)$.
2. Identify $P(x)$.
3. Calculate the integrating factor: $\mu(x) = e^{\int P(x) dx}$. (You do *not* need to add a $+C$ during this integration).
4. Multiply the entire standard form ODE by $\mu(x)$.
5. The left side will **always** collapse into the derivative of the product: $\frac{d}{dx}[\mu(x) \cdot y]$.
6. Integrate both sides. The left side simply drops the derivative operator.
7. Divide by $\mu(x)$ to isolate $y$.

*(We will walk through a full example of this powerful technique in the next section).*
