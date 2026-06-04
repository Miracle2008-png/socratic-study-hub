# 1. The Interpolation Problem

Engineering often involves collecting discrete data points from experiments, simulations, or field measurements. However, to analyze the system, perform integration, or find roots, we often need values *between* the measured points. This is the **interpolation problem**.

### Definition
Given a set of $n+1$ discrete data points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ where all $x_i$ are distinct, find a continuous function $P(x)$ such that:
$$P(x_i) = y_i \quad \text{for all } i = 0, 1, \dots, n$$

The function $P(x)$ must pass **exactly** through every given data point.

### Interpolation vs. Curve Fitting (Regression)
It is crucial to distinguish interpolation from regression (curve fitting):
*   **Interpolation:** The function must pass exactly through all points. The error at the nodes is strictly zero. Used for high-precision, low-noise data (e.g., thermodynamic tables, precise CAD points).
*   **Regression (Curve Fitting):** The function approximates the trend of the data, minimizing an error metric (like least squares). It rarely passes through any specific point. Used for noisy, experimental data.

If you interpolate noisy data with $n=100$ points, the resulting curve will oscillate wildly to hit every noise spike.

### Types of Interpolants
The choice of the basis function $P(x)$ determines the type of interpolation:
1.  **Polynomials:** $P(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n$. Mathematically convenient, easy to differentiate and integrate.
2.  **Trigonometric functions:** $P(x) = \sum (a_k \cos kx + b_k \sin kx)$. Used for periodic data (Fourier methods).
3.  **Rational functions:** $P(x) = Q(x)/R(x)$. Used when the function has asymptotes or poles.
4.  **Piecewise functions (Splines):** Different low-degree polynomials connected continuously between points. The modern standard for computer graphics and engineering design.

### Extrapolation vs. Interpolation
*   **Interpolation** estimates $y$ for an $x$ that lies *within* the range of the known $x_i$ values $[\min(x_i), \max(x_i)]$. Generally safe and well-bounded.
*   **Extrapolation** estimates $y$ for an $x$ *outside* the known range. Extremely dangerous. Polynomials, in particular, diverge to $\pm\infty$ very rapidly outside their fitting interval. Extrapolation should only be done if the underlying physical model is known to hold outside the measured range.
