# 4. Changing the Order of Integration

Sometimes, you are given an iterated integral that is mathematically impossible to solve as written. 

Consider the classic impossible integral:
$$
\int_{0}^{1} \int_{y}^{1} e^{x^2} \, dx \, dy
$$

Look at the inner integral: $\int e^{x^2} \, dx$.
This is a famous non-elementary integral. There is no mathematical function in the universe whose derivative is $e^{x^2}$. If you try to integrate this, you will be stuck forever.

### The Solution: Swap the Order
If integrating $dx$ first is impossible, we must swap the order to make it $dy \, dx$. 

However, because this is a general curved region (not a rectangle), **you cannot just blindly swap the limits!** If you just moved the $y$ to the outside integral, your final answer would be a function of $y$ instead of a scalar number. The outer bounds must ALWAYS be constants.

You must completely redesign the region from scratch!

### Step-by-Step Order Swap

**1. Extract the current inequalities:**
Look at the limits given in the impossible equation.
*   Inner ($x$ bounds): $y \le x \le 1$
*   Outer ($y$ bounds): $0 \le y \le 1$

**2. Draw the Region:**
You must draw this on an $xy$-plane.
*   The left boundary is the line $x=y$ (a diagonal line).
*   The right boundary is the vertical line $x=1$.
*   The region is trapped between $y=0$ and $y=1$.
This forms a perfect flat triangle on the floor.

**3. Redefine the Region (from Type II to Type I):**
Look at the exact same triangle, but slice it vertically instead of horizontally.
*   **New Outer ($x$ bounds):** What is the absolute minimum and maximum $x$ for the whole triangle? The triangle exists between $x=0$ and $x=1$. So, $0 \le x \le 1$.
*   **New Inner ($y$ bounds):** Draw a vertical slice through the triangle. The bottom of the slice hits the x-axis ($y=0$). The top of the slice hits the diagonal line ($y=x$). So, $0 \le y \le x$.

**4. Rewrite the Integral:**
Now we place our newly derived Type I bounds onto the integral in the order $dy \, dx$:
$$
\int_{0}^{1} \int_{0}^{x} e^{x^2} \, dy \, dx
$$

### Watch the Magic Happen
Let's evaluate our new integral!
**Inner Integral ($dy$):**
$$
\int_{0}^{x} e^{x^2} \, dy = \left[ y e^{x^2} \right]_{y=0}^{y=x} = x e^{x^2} - 0 = x e^{x^2}
$$

**Outer Integral ($dx$):**
$$
\int_{0}^{1} x e^{x^2} \, dx
$$
Suddenly, because the inner integration multiplied an $x$ onto the front, we can use a standard U-Substitution! ($u = x^2, du = 2x \, dx$). The "impossible" integral is now trivially easy to solve!
