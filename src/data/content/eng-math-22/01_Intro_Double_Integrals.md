# 1. Introduction to Double Integrals

In single-variable calculus, the definite integral $\int_a^b f(x) \, dx$ calculates the geometric **Area** under a 1D curve $y = f(x)$ over an interval $[a,b]$ on the x-axis.

In multivariable calculus, we graduate to 3D geometry. We have a function $z = f(x,y)$, which represents a curved 2D surface floating in 3D space (like a parachute or a topological map).
Instead of integrating over a 1D line interval, we integrate over a flat 2D region $R$ in the $xy$-plane below the surface.

This process calculates the geometric **Volume** trapped between the $xy$-plane and the floating surface! We denote this with a **Double Integral**:

$$
V = \iint_R f(x,y) \, dA
$$

### The Riemann Sum (Chopping up the Volume)
Just as single integrals chop an area into infinitely thin rectangles, a double integral chops a volume into infinitely thin 3D rectangular pillars.

1.  Take the flat region $R$ on the ground and cut it into a grid of tiny rectangles.
2.  Let the area of each tiny rectangle on the ground be $\Delta A = \Delta x \Delta y$.
3.  Pick a point $(x_i, y_j)$ inside one of those tiny rectangles. 
4.  Plug that point into the function $f(x,y)$ to find the height $z$ of the surface at that specific spot.
5.  The volume of that single tiny rectangular pillar is exactly $\text{Height} \times \text{Base Area} = f(x_i, y_j) \Delta A$.
6.  Add up the volumes of all the pillars across the entire grid!

The Double Integral is formally defined as the limit of this massive summation as the size of the tiny rectangles shrinks to zero:

$$
\iint_R f(x,y) \, dA = \lim_{n,m \to \infty} \sum_{i=1}^n \sum_{j=1}^m f(x_i, y_j) \Delta A
$$

### The Area Differential ($dA$)
The symbol $dA$ represents an infinitesimally small patch of area on the $xy$-plane. 
Because area is simply width multiplied by height, we can immediately rewrite the general $dA$ into strict Cartesian coordinates:
$$
dA = dx \, dy \quad \text{or} \quad dA = dy \, dx
$$

This translates our abstract double integral into an actionable calculation:
$$
\iint_R f(x,y) \, dx \, dy
$$
On the next page, we will learn exactly how to calculate this nested equation.
