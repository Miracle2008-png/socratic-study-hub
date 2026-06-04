# 11. Applications: Velocity, Acceleration & Optimization

Derivatives are not abstract mathematical exercises; they describe the physical world. 

### Kinematics: Position, Velocity, Acceleration
In classical mechanics, the movement of an object along a line is described by a position function $s(t)$.
*   **Velocity:** $v(t) = s'(t)$. The rate at which position changes. Positive velocity means moving forward; negative means moving backward.
*   **Acceleration:** $a(t) = v'(t) = s''(t)$. The rate at which velocity changes. Positive acceleration means speeding up (if velocity is positive) or slowing down (if velocity is negative).

When an object reverses direction, its velocity must cross zero. Setting $v(t) = 0$ reveals the exact time the object turns around.

### Optimization: Maxima and Minima
Engineering is the science of optimization: minimizing cost, maximizing structural load, or finding the exact angle that maximizes thrust.

**Fermat's Theorem:** If a continuous function $f(x)$ has a local maximum or minimum at $x = c$, then the derivative at that point must be zero (a horizontal tangent line) or undefined.
$$ f'(c) = 0 $$
Points where $f'(c) = 0$ are called **Critical Points**.

### The First Derivative Test
How do you know if a critical point is a maximum or a minimum?
1. Find all critical points $c$ where $f'(c) = 0$.
2. Test the sign of $f'(x)$ on either side of $c$.
3. If $f'(x)$ changes from positive (+) to negative (-), the function went up and then down. It is a **Local Maximum**.
4. If $f'(x)$ changes from negative (-) to positive (+), the function went down and then up. It is a **Local Minimum**.

### Worked Example: Optimizing Volume
**Problem:** You have 1200 $cm^2$ of material to build a box with a square base and an open top. What dimensions maximize the volume of the box?

**Solution:**
Let the base side be $x$, and the height be $y$.
Volume $V = x^2 y$.
Surface Area $SA = x^2 + 4xy = 1200$.

1. We have two variables. We must isolate one using the constraint equation:
   $$ 4xy = 1200 - x^2 \implies y = \frac{1200 - x^2}{4x} = \frac{300}{x} - \frac{x}{4} $$
2. Substitute $y$ into the Volume equation so it is entirely in terms of $x$:
   $$ V(x) = x^2 \left( \frac{300}{x} - \frac{x}{4} \right) = 300x - \frac{x^3}{4} $$
3. To maximize volume, take the derivative and set it to 0 (Critical Point):
   $$ V'(x) = 300 - \frac{3x^2}{4} = 0 $$
   $$ \frac{3x^2}{4} = 300 \implies 3x^2 = 1200 \implies x^2 = 400 \implies x = 20 $$
4. Since $x=20$, solve for $y$:
   $$ y = \frac{300}{20} - \frac{20}{4} = 15 - 5 = 10 $$

The dimensions that maximize volume are $20 \times 20 \times 10$ cm.
