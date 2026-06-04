# 9. Bilinear and Bicubic Interpolation

Interpolation extends natively to multiple dimensions, which is essential for processing 2D sensor data, contour mapping, thermal analysis, and image processing.

### Bilinear Interpolation (2D)
When data is provided on a structured rectangular grid, we can interpolate a value $f(x, y)$ within a cell bounded by four known points: $(x_1, y_1), (x_2, y_1), (x_1, y_2), (x_2, y_2)$.

Bilinear interpolation performs **linear interpolation in one direction, followed by linear interpolation in the orthogonal direction.**

1.  Interpolate in the $x$-direction at $y_1$:
    $$f(x, y_1) \approx \frac{x_2 - x}{x_2 - x_1} f(x_1, y_1) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_1)$$
2.  Interpolate in the $x$-direction at $y_2$:
    $$f(x, y_2) \approx \frac{x_2 - x}{x_2 - x_1} f(x_1, y_2) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_2)$$
3.  Interpolate in the $y$-direction between these two new points:
    $$f(x, y) \approx \frac{y_2 - y}{y_2 - y_1} f(x, y_1) + \frac{y - y_1}{y_2 - y_1} f(x, y_2)$$

**Properties:**
*   Despite the name, the resulting surface is **not linear**. The algebraic form contains an $xy$ cross-term: $P(x,y) = a_0 + a_1 x + a_2 y + a_3 xy$.
*   The surface is a hyperbolic paraboloid (a saddle shape) within each cell.
*   It provides $C^0$ continuity across grid cell boundaries (the surface matches, but the slopes have sharp creases).

### Bicubic Interpolation
To achieve smooth ($C^1$) transitions across 2D grid boundaries, we use bicubic interpolation. This requires 16 pieces of information per grid cell:
*   4 function values at the corners
*   8 partial derivatives ($f_x$ and $f_y$ at the 4 corners)
*   4 cross-derivatives ($f_{xy}$ at the 4 corners)

The interpolant within a cell is a 16-term polynomial:
$$P(x,y) = \sum_{i=0}^3 \sum_{j=0}^3 a_{ij} x^i y^j$$

Because it enforces slope and twist continuity across cell boundaries, bicubic interpolation produces visually seamless surfaces. It is the standard algorithm for high-quality image resizing and terrain rendering.

### Trilinear Interpolation (3D)
Extends bilinear interpolation to 3D voxel grids (e.g., MRI data, computational fluid dynamics meshes). It requires 8 corner values and performs 7 linear interpolations (4 in $x$, 2 in $y$, 1 in $z$).
