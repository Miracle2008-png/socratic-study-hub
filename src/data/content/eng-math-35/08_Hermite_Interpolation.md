# 8. Hermite Interpolation

Standard interpolation matches only the function values $y_i$ at the nodes. **Hermite Interpolation** constructs a polynomial that matches both the function values **and** the specified derivative values $y_i'$ at the nodes.

This is critical in robotics (planning a trajectory that passes through a point with a specific velocity vector) and computer graphics (defining tangent vectors to control curve shapes).

### The Hermite Polynomial
Given $n+1$ points with specified values $y_i$ and specified slopes $y_i'$, we have $2n+2$ pieces of information. Thus, we can uniquely determine a polynomial of degree $2n+1$.

The Newton divided difference table can be elegantly adapted for Hermite interpolation by "doubling" every node. A point $(x_i, y_i, y_i')$ is entered into the table twice. The zero-order divided difference is $y_i$ for both entries. The first-order divided difference between the identical points is defined as the specified derivative $y_i'$.

### Cubic Hermite Splines
Just as high-degree standard polynomials suffer from Runge's phenomenon, high-degree global Hermite polynomials oscillate wildly. The practical engineering solution is the **Cubic Hermite Spline**.

On the sub-interval $[x_i, x_{i+1}]$, we fit a cubic polynomial that satisfies four conditions:
$$P(x_i) = y_i, \quad P(x_{i+1}) = y_{i+1}$$
$$P'(x_i) = m_i, \quad P'(x_{i+1}) = m_{i+1}$$

Where $m_i$ are the slopes at the nodes.

Because every interval is completely defined by its two endpoints and two endpoint slopes, computing a Cubic Hermite Spline requires **no solving of global linear systems** (unlike standard Cubic Splines). The curve is computed entirely locally.

### Differences Between Cubic Splines and Hermite Splines

| Feature | Standard Cubic Spline | Cubic Hermite Spline |
|---|---|---|
| **Input required** | Points only ($x_i, y_i$) | Points and slopes ($x_i, y_i, m_i$) |
| **Continuity** | $C^2$ (smooth curvature) | $C^1$ (smooth slope, jumps in curvature) |
| **Computation** | Global (tridiagonal system) | Local (independent per interval) |
| **Local Control** | No (moving one point changes entire curve) | Yes (moving one point changes only adjacent intervals) |

### Estimating Slopes (Catmull-Rom)
If slopes are not provided, they can be estimated heuristically to use Hermite splines. The popular **Catmull-Rom spline** estimates the slope at node $i$ based on the vector between its neighbors:
$$m_i = \frac{y_{i+1} - y_{i-1}}{x_{i+1} - x_{i-1}}$$
This provides local control and $C^1$ continuity without requiring user-specified derivatives.
