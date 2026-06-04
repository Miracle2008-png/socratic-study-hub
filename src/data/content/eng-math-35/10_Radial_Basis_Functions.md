# 10. Radial Basis Functions (Scattered Data)

Bilinear and bicubic methods require the data to be perfectly arranged on a rectangular grid. In many real engineering scenarios (e.g., weather stations, geological boreholes, random sensor placement), data points are scattered randomly in 2D or 3D space.

**Radial Basis Function (RBF) interpolation** is the premier method for multidimensional scattered data interpolation.

### The RBF Concept
Instead of polynomials, the interpolating function is constructed as a weighted sum of radially symmetric functions centered at each data point:
$$s(\mathbf{x}) = \sum_{i=1}^n w_i \phi(\|\mathbf{x} - \mathbf{x}_i\|)$$

*   $\mathbf{x}$ is the evaluation point in space.
*   $\mathbf{x}_i$ are the locations of the $n$ known data points.
*   $\|\mathbf{x} - \mathbf{x}_i\|$ is the Euclidean distance from the evaluation point to data point $i$.
*   $\phi(r)$ is a chosen radial basis function.
*   $w_i$ are the unknown weights.

### Common Radial Basis Functions
1.  **Gaussian:** $\phi(r) = e^{-(\varepsilon r)^2}$ (infinitely smooth, local effect).
2.  **Multiquadric:** $\phi(r) = \sqrt{1 + (\varepsilon r)^2}$ (highly accurate, global effect).
3.  **Inverse Quadratic:** $\phi(r) = \frac{1}{1 + (\varepsilon r)^2}$.
4.  **Thin Plate Spline:** $\phi(r) = r^2 \ln r$ (minimizes bending energy, mimics physical sheet metal).

The parameter $\varepsilon$ controls the "width" or influence radius of the basis function.

### Solving for the Weights
To guarantee the function passes exactly through all measured data points $y_j$:
$$s(\mathbf{x}_j) = \sum_{i=1}^n w_i \phi(\|\mathbf{x}_j - \mathbf{x}_i\|) = y_j \quad \text{for } j = 1, \dots, n$$

This forms a dense $n \times n$ linear system:
$$\boldsymbol{\Phi} \mathbf{w} = \mathbf{y}$$
Where the interpolation matrix entries are $\Phi_{ji} = \phi(\|\mathbf{x}_j - \mathbf{x}_i\|)$.

Because $\boldsymbol{\Phi}$ relies solely on distance, it is invariant to spatial dimension. The exact same math code works for 1D, 2D, 3D, or 100D data.

### Kriging (Gaussian Process Regression)
In geostatistics, RBF interpolation is statistically formalized as **Kriging**. Instead of an arbitrary basis function, Kriging uses a variogram derived from the spatial covariance of the data itself. It not only interpolates the value but also provides a confidence interval (uncertainty bound) at every interpolated point, making it the industry standard in mining and petroleum engineering.
