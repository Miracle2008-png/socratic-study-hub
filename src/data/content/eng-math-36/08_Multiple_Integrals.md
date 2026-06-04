# 8. Multiple Integrals

In physics and engineering, we frequently calculate volumes, centers of mass, moments of inertia, and electric fluxes using double or triple integrals:
$$I = \int_{a}^{b} \int_{c(x)}^{d(x)} \int_{e(x,y)}^{f(x,y)} F(x, y, z) \, dz \, dy \, dx$$

### Extension of 1D Quadrature
Standard 1D methods (Simpson's, Gaussian quadrature) can be extended to 2D and 3D by treating the multiple integral as nested 1D integrals.

For a rectangular domain $[a, b] \times [c, d]$ using 1D Gaussian quadrature with nodes $x_i$ and weights $u_i$ for the x-direction, and nodes $y_j$ and weights $v_j$ for the y-direction:

$$I = \int_a^b \left( \int_c^d F(x,y) \, dy \right) dx \approx \sum_{i=1}^{n_x} u_i \left( \sum_{j=1}^{n_y} v_j F(x_i, y_j) \right) = \sum_{i=1}^{n_x} \sum_{j=1}^{n_y} W_{ij} F(x_i, y_j)$$

Where the 2D weights are $W_{ij} = u_i v_j$. The evaluation points form a tensor-product grid.

### The Curse of Dimensionality
Nested 1D quadrature works brilliantly for 2D and 3D, but it scales catastrophically as dimensions increase.

If you use a 10-point Gaussian quadrature rule in 1D ($n=10$), you need:
*   1D: 10 evaluations.
*   2D: $10^2 = 100$ evaluations.
*   3D: $10^3 = 1,000$ evaluations.
*   10D: $10^{10} = 10 \text{ billion}$ evaluations.

This exponential explosion in computational cost is called the **Curse of Dimensionality**.

In quantum mechanics, statistical physics, and financial mathematics, integrals over 10, 50, or 1000 dimensions are common (e.g., integrating over all possible paths of a particle, or pricing complex multi-asset options).

For $D \ge 4$, nested deterministic quadrature grids become too slow to execute. We must abandon deterministic nodes entirely and transition to statistical methods — specifically, Monte Carlo Integration.
