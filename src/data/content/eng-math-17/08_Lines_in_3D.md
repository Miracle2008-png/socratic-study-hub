# 8. Lines in 3D Space

In 2D algebra, we define a line using a slope and a y-intercept ($y = mx + b$). 
In 3D space, this concept fails completely. There is no single "slope" number that can define a 3D trajectory.

To define a line in 3D, we use vectors. We need two pieces of information:
1.  A **Point** on the line: $P_0 = (x_0, y_0, z_0)$. Let $\mathbf{r_0} = \langle x_0, y_0, z_0 \rangle$ be the position vector pointing to this dot.
2.  A **Direction Vector** showing where the line goes: $\mathbf{v} = \langle a, b, c \rangle$. (This replaces "slope").

### The Vector Equation
To reach any arbitrary point $(x,y,z)$ on the line, we start at the origin, follow $\mathbf{r_0}$ to get onto the line, and then travel some distance $t$ along the direction vector $\mathbf{v}$.
Let $\mathbf{r} = \langle x, y, z \rangle$ be the general position vector.

$$ \mathbf{r}(t) = \mathbf{r_0} + t\mathbf{v} $$

*   $t$ is the **parameter** (often representing time). As $t$ changes from $-\infty$ to $\infty$, the tip of the vector traces out the entire infinite line.

### Parametric Equations
If we break the vector equation apart into its individual $x$, $y$, and $z$ components, we get a system of three parametric equations:
$$ x(t) = x_0 + at $$
$$ y(t) = y_0 + bt $$
$$ z(t) = z_0 + ct $$

### Symmetric Equations
If we solve each of the three parametric equations for the parameter $t$, and set them all equal to each other, we completely eliminate the parameter. This creates the Symmetric Equations of the line:
$$ \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c} $$
*(Note: If one of the direction components $a,b,c$ is zero, you cannot divide by it. You simply write it separately as a constant, e.g., $z=5$).*

**Two Lines:** To determine if two 3D lines intersect, parallel, or are **skew** (never intersect but not parallel, like two airplanes flying at different altitudes), you must set their parametric equations equal to each other and try to solve the resulting system.
