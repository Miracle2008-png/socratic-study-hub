# Area Between Curves

One of the most immediate applications of the definite integral is finding the area of a region bounded by two or more curves.

## 1. Area Between a Top and Bottom Curve (Integration with respect to $x$)

If you have a region bounded above by the curve $y = f(x)$, below by the curve $y = g(x)$, and on the left and right by the vertical lines $x = a$ and $x = b$, the area is found by integrating the difference between the upper and lower functions.

For this to work cleanly, $f(x) \geq g(x)$ must hold for all $x$ in the interval $[a, b]$.

$$ \text{Area} = \int_{a}^{b} [f(x) - g(x)] \, dx $$

**Visualizing it:**
Imagine slicing the region into infinitesimally thin vertical rectangles.
*   The width of each rectangle is $dx$.
*   The height of each rectangle is the top y-value minus the bottom y-value: $f(x) - g(x)$.
*   The area of one rectangle is $[f(x) - g(x)] \, dx$.
*   The integral sums up all these infinitesimal areas from $x=a$ to $x=b$.

**Finding Intersection Points:**
Often, the problem will not give you the bounds $a$ and $b$. Instead, it asks for the area enclosed *between* two curves. To find the bounds, you must set the two functions equal to each other and solve for $x$:
$$ f(x) = g(x) $$
The solutions to this equation are the $x$-coordinates where the curves intersect.

## 2. When the Curves Cross Over

If $f(x)$ and $g(x)$ intersect within the interval $[a, b]$ such that $f(x)$ is the top curve for part of the interval and $g(x)$ is the top curve for the rest, you cannot just blindly evaluate $\int [f(x) - g(x)] \, dx$. Doing so will result in "net area" where regions cancel each other out.

To find the true geometric area, you must split the integral at the intersection points:

$$ \text{Area} = \int_{a}^{c} (\text{Top}_1 - \text{Bottom}_1) \, dx + \int_{c}^{b} (\text{Top}_2 - \text{Bottom}_2) \, dx $$

Alternatively, using absolute value:
$$ \text{Area} = \int_{a}^{b} |f(x) - g(x)| \, dx $$

## 3. Area Between a Right and Left Curve (Integration with respect to $y$)

Sometimes, a region is bounded by a rightmost curve $x = f(y)$ and a leftmost curve $x = g(y)$, between horizontal lines $y = c$ and $y = d$.

In this case, it is much easier to slice the region into horizontal rectangles and integrate with respect to $y$.

$$ \text{Area} = \int_{c}^{d} [f(y) - g(y)] \, dy $$

*Note: $f(y)$ is the right curve (larger x-values), and $g(y)$ is the left curve (smaller x-values).*

**When to integrate with respect to y:**
1.  When the equations are given as $x$ in terms of $y$ (e.g., $x = y^2 - 2$).
2.  When the "top" curve or "bottom" curve changes if you use vertical slices, requiring two or more $x$-integrals, but the "right" and "left" curves remain consistent if you use horizontal slices.
