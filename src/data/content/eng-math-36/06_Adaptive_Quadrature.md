# 6. Adaptive Quadrature

When using composite rules (like Simpson's), a uniform step size $h$ is inefficient. A function might be smooth and flat over 90% of the interval, but have sharp spikes or rapid oscillations in the remaining 10%.

Using a tiny $h$ globally wastes thousands of function evaluations on the flat regions. Using a large $h$ completely misses the sharp features.

**Adaptive Quadrature** algorithms automatically adjust the step size $h$, placing dense nodes only where the function curvature is high, and sparse nodes where the function is smooth, guaranteeing a target error tolerance with the minimum possible evaluations.

### The Mechanism of Adaptation
The algorithm works by estimating the local error dynamically.

1.  **Evaluate:** Compute the integral over a panel $[a, b]$ using Simpson's rule with step size $h$. Call this $I_1$.
2.  **Subdivide:** Cut the panel in half. Compute the integral over $[a, b]$ again using the two sub-panels (step size $h/2$). Call this $I_2$.
3.  **Estimate Error:** Since $I_2$ is more accurate, the difference $|I_1 - I_2|$ provides an estimate of the local truncation error. (Specifically, Richardson Extrapolation shows the error in $I_2$ is approximately $|I_1 - I_2|/15$).
4.  **Decision:**
    *   If the estimated error is **less** than the user-defined tolerance $\varepsilon$, accept $I_2$ as the integral for this panel and move on.
    *   If the estimated error is **greater** than $\varepsilon$, the panel is too wide. Recursively apply the algorithm to the left half and the right half separately.

### Example Behavior
If $f(x) = \sin(1/x)$ on $[0.1, 1]$, the function oscillates wildly near $0.1$ but smoothly near $1.0$.

An adaptive quadrature routine will recursively subdivide the region near $0.1$ into hundreds of tiny microscopic panels to capture the oscillations, while evaluating the region near $1.0$ using just one or two massive panels.

### Gauss-Kronrod Quadrature (The Industry Standard)
The recursive Simpson's method is good, but modern software (like MATLAB's `integral` or `quadgk`, and SciPy's `quad`) uses **Gauss-Kronrod adaptive quadrature**.

*   Standard Gaussian quadrature uses $n$ optimal points. If you increase to $n+1$ points to check the error, the optimal nodes completely shift. You have to discard the $n$ evaluations and do $n+1$ completely new ones.
*   **Kronrod** discovered a way to add $n+1$ *new* points to the original $n$ Gauss points, creating a $2n+1$ point rule of much higher order, while reusing the original $n$ evaluations.
*   The difference between the $n$-point Gauss estimate and the $(2n+1)$-point Gauss-Kronrod estimate provides a highly accurate, virtually "free" error estimate to drive the adaptive mesh refinement.
