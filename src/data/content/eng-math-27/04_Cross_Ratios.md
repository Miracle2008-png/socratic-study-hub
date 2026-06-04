# 4. Cross-Ratios and Fixed Points

Because Möbius Transformations ($\frac{az+b}{cz+d}$) are so powerful, engineers often need to "custom build" a specific transformation to force a specific shape to map to another specific shape.

How do you find the unknown constants $a, b, c, d$ to build your custom map?

### The Three-Point Rule
A straight line in standard geometry is defined by exactly 2 points.
A circle in 2D geometry is defined by exactly 3 points.

Because Möbius transformations only deal with circles and lines, a specific Möbius transformation is completely and uniquely defined by how it maps exactly **three specific points**!

If you choose three input points on your starting shape ($z_1, z_2, z_3$), and you choose three target output points on your destination shape ($w_1, w_2, w_3$), there is exactly ONE specific Möbius transformation in the universe that will perfectly connect them.

### The Cross-Ratio Formula
To physically build that transformation without doing pages of algebraic substitution, we use the **Cross-Ratio** formula. 

The Cross-Ratio of four complex numbers is a massive fraction that is miraculously invariant (it never changes) under any Möbius transformation! Therefore, the Cross-Ratio of the input points must perfectly equal the Cross-Ratio of the output points!

**The Master Mapping Equation:**
$$
\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}
$$

To find your custom map $w = f(z)$:
1. Plug your three known $z$ numbers into the right side.
2. Plug your three known target $w$ numbers into the left side.
3. Keep the abstract variables $w$ and $z$ exactly as they are.
4. Perform basic middle-school algebra to isolate $w$ on the left side! The resulting fraction will be your custom $\frac{az+b}{cz+d}$ mapping!

### Dealing with Infinity ($\infty$)
Because the inversion mapping $\frac{1}{z}$ blasts the origin out to infinity, infinity is treated as a valid, physical coordinate in Complex Mapping!
If you want to map a circle into a straight line, you MUST map one of the points on the circle to $w = \infty$ (because a straight line is just a circle that stretches to infinity).

If any of your chosen points ($z_i$ or $w_i$) are $\infty$, you simply delete every single parenthesis group in the Cross-Ratio formula that contains that specific point, and the formula continues to work perfectly!

### Fixed Points
A **Fixed Point** is a coordinate that is completely unaffected by the transformation. The mapping tries to warp it, but it lands in the exact same spot!
To find the fixed points of a map, you simply set the output $w$ equal to the input $z$:
$$
z = \frac{az+b}{cz+d}
$$
Multiplying the denominator over yields $cz^2 + dz = az + b$. This is a standard quadratic equation. By the Fundamental Theorem of Algebra, a Möbius transformation can have a maximum of two fixed points!
