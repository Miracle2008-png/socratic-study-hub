# 8. Implicit Differentiation

Up until now, all equations have been explicitly defined for $y$ in terms of $x$ (e.g., $y = x^2 + 3$). We simply find $\frac{dy}{dx}$.

However, some curves cannot be easily solved for $y$, such as the equation of a circle: $x^2 + y^2 = 25$. To find the slope of the tangent line at any point on this circle, we use **Implicit Differentiation**.

### The Core Concept
We treat $y$ not as an independent variable, but as an implicit function of $x$. Therefore, whenever we differentiate a term containing $y$, we **must** apply the Chain Rule and multiply by $\frac{dy}{dx}$.

### Worked Example 1: Differentiating a Circle
**Problem:** Find $\frac{dy}{dx}$ for $x^2 + y^2 = 25$.

**Solution:**
Differentiate both sides with respect to $x$:
$$ \frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25] $$

The derivative of $x^2$ is $2x$.
The derivative of $y^2$ (using the Chain Rule) is $2y \cdot \frac{dy}{dx}$.
The derivative of $25$ is $0$.

$$ 2x + 2y \frac{dy}{dx} = 0 $$

Now, use algebra to isolate $\frac{dy}{dx}$:
$$ 2y \frac{dy}{dx} = -2x $$
$$ \frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y} $$

This means the slope at any point $(x, y)$ on the circle is simply $-x/y$.

### Worked Example 2: Implicit Product Rule
**Problem:** Find $\frac{dy}{dx}$ for $x^3 + xy = 10$.

**Solution:**
Differentiate both sides. The term $xy$ requires the Product Rule!
$$ \frac{d}{dx}[x^3] + \frac{d}{dx}[x \cdot y] = \frac{d}{dx}[10] $$
$$ 3x^2 + \left[ (1)(y) + (x)\left(\frac{dy}{dx}\right) \right] = 0 $$
$$ 3x^2 + y + x \frac{dy}{dx} = 0 $$

Isolate $\frac{dy}{dx}$:
$$ x \frac{dy}{dx} = -3x^2 - y $$
$$ \frac{dy}{dx} = \frac{-3x^2 - y}{x} $$
