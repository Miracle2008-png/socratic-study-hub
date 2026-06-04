# 9. Monte Carlo Integration

When integrating over high-dimensional spaces ($D \ge 4$), the Curse of Dimensionality destroys standard grid-based quadrature. The solution is **Monte Carlo Integration** — evaluating the function at random points rather than a structured grid.

### The Statistical Foundation
By the Mean Value Theorem for Integrals, the integral of $f(\mathbf{x})$ over a volume $V$ is equal to the volume multiplied by the average value of the function within that volume:
$$I = \int_V f(\mathbf{x}) \, d\mathbf{x} = V \cdot \langle f \rangle$$

The Monte Carlo method estimates the average value $\langle f \rangle$ by sampling $N$ completely random points uniformly distributed throughout $V$:
$$I \approx V \cdot \frac{1}{N} \sum_{i=1}^N f(\mathbf{x}_i)$$

### Error and Convergence Rate
Because this is a statistical sampling process, the error is governed by the Central Limit Theorem. The expected error is proportional to the standard deviation of the function values $\sigma$, divided by the square root of the number of samples:
$$\text{Error} \propto \frac{\sigma}{\sqrt{N}}$$

**The critical insight:** The convergence rate $O(1/\sqrt{N})$ is **completely independent of the spatial dimension $D$.**

*   In 1D, Simpson's rule converges at $O(N^{-4})$, obliterating Monte Carlo's pathetic $O(N^{-0.5})$.
*   In 10D, a nested Simpson's rule converges at $O(N^{-4/10}) = O(N^{-0.4})$. Monte Carlo is now faster.
*   In 100D, a grid-based approach is impossible. Monte Carlo still converges at $O(N^{-0.5})$.

### Variance Reduction Techniques
The naive $1/\sqrt{N}$ convergence is painfully slow. To add one decimal place of accuracy, you must increase the number of samples by 100x. Advanced Monte Carlo methods focus on reducing $\sigma$ (the variance of the samples).

1.  **Importance Sampling:** Instead of sampling uniformly, sample more densely in regions where the function $f(\mathbf{x})$ is large. Multiply by a correction weight so the integral remains unbiased. This drastically reduces the variance.
2.  **Stratified Sampling:** Divide the volume $V$ into sub-regions and sample randomly within each sub-region, guaranteeing a more even spread than pure randomness.
3.  **Quasi-Monte Carlo (QMC):** Use deterministic, low-discrepancy sequences (like Sobol or Halton sequences) instead of pseudo-random numbers. These sequences "fill" space more uniformly than random points, improving convergence from $O(1/\sqrt{N})$ to roughly $O(1/N)$, making QMC the preferred choice in quantitative finance.
