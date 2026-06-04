# 3. Double Integrals over General Regions

Fubini's Theorem on the previous page is nice, but in real engineering, the region on the floor ($R$) is almost never a perfect rectangle. It is usually a curved, organic shape defined by intersecting functions (e.g., the area trapped between a parabola $y = x^2$ and a line $y = 2x$).

To integrate over a curved region, we must rethink our limits of integration. **The limits are no longer just pure numbers; they are actual algebraic functions!**

### Type I Regions (Vertical Slices)
A Type I region is bounded by two distinct curves on the top and bottom, but it is bounded by hard, flat numerical lines on the left and right.

*   **Left and Right Bounds:** $a \le x \le b$ (Constants)
*   **Bottom and Top Bounds:** $g_1(x) \le y \le g_2(x)$ (Functions of x)

**The Integration Rule:**
If the bounds of $y$ contain the variable $x$, you MUST integrate $y$ first (on the inside)! The outer integral must always have pure constant numbers as its bounds, otherwise your final answer will contain variables instead of being a solid volume.

$$
V = \int_{a}^{b} \left[ \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \right] dx
$$

1. When you do the inner $dy$ integral, you plug the functions $g_1(x)$ and $g_2(x)$ into the $y$ variables.
2. This ensures that only $x$ variables are left over.
3. The outer $dx$ integral then evaluates those remaining $x$ variables across the pure numbers $a$ and $b$, leaving a final scalar answer.

### Type II Regions (Horizontal Slices)
A Type II region is bounded by curves on the left and right, but bounded by hard horizontal lines on the top and bottom.

*   **Bottom and Top Bounds:** $c \le y \le d$ (Constants)
*   **Left and Right Bounds:** $h_1(y) \le x \le h_2(y)$ (Functions of y)

**The Integration Rule:**
Because the $x$ bounds contain the variable $y$, you MUST integrate $x$ first (on the inside)!

$$
V = \int_{c}^{d} \left[ \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \right] dy
$$

### Example Setup
Set up the integral for the volume of $f(x,y) = xy$ bounded by the parabola $y = x^2$ and the line $y = 4$.
1.  Draw the region! The parabola is the bottom curve. The line is the top curve.
2.  Find the intersections: $x^2 = 4 \implies x = -2$ and $x = 2$.
3.  This is a perfect Type I region. The bounds are $-2 \le x \le 2$ (outer) and $x^2 \le y \le 4$ (inner).

$$
V = \int_{-2}^{2} \int_{x^2}^{4} (xy) \, dy \, dx
$$
