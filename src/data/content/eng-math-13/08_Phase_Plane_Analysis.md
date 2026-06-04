# 8. Phase Plane Analysis

Because a 2x2 system defines two functions $x(t)$ and $y(t)$, we can plot these functions parametrically on an $xy$-coordinate system. As time $t$ progresses, the system traces out a curve. 
This plot is called a **Phase Portrait**. 

The origin $(0,0)$ is always an equilibrium point for a homogeneous linear system ($\mathbf{X}' = \mathbf{A}\mathbf{X}$). The visual shape of the phase portrait, and the stability of the origin, is dictated entirely by the eigenvalues!

### 1. Distinct Real Eigenvalues
*   **Stable Node ($\lambda_1 < 0, \lambda_2 < 0$):** Both exponential terms decay to zero. All trajectories curve smoothly inwards and crash into the origin.
*   **Unstable Node ($\lambda_1 > 0, \lambda_2 > 0$):** Both terms explode. All trajectories start near the origin and curve outwards to infinity.
*   **Saddle Point (One positive, One negative):** Trajectories get sucked in along the eigenvector corresponding to the negative $\lambda$, but then get violently pushed away along the eigenvector corresponding to the positive $\lambda$. Forming hyperbola-like shapes. Highly unstable.

### 2. Complex Eigenvalues ($\lambda = \alpha \pm \beta i$)
Complex roots involve sine and cosine, which physically represent oscillation (circular motion in the phase plane).
*   **Stable Spiral ($\alpha < 0$):** The exponential envelope $e^{\alpha t}$ shrinks. The trajectories spiral inwards like water draining in a sink, terminating at the origin.
*   **Unstable Spiral ($\alpha > 0$):** The exponential envelope grows. Trajectories spiral outwards to infinity like an expanding galaxy.
*   **Center ($\alpha = 0$):** Pure oscillation. The trajectories form perfect, closed ellipses circling the origin forever, never shrinking or growing. (This is an undamped pendulum).

### 3. Repeated Eigenvalues ($\lambda$)
*   **Proper Node (Complete Matrix):** The trajectories are perfectly straight lines radiating out from the origin in every single direction (like a starburst). Stable if $\lambda < 0$, Unstable if $\lambda > 0$.
*   **Improper Node (Defective Matrix):** Because there is only one true eigenvector, all trajectories are "swept" to align parallel with that single eigenvector line. It looks like an S-curve funnel. Stable if $\lambda < 0$, Unstable if $\lambda > 0$.

By simply calculating the eigenvalues of the coefficient matrix $\mathbf{A}$, an engineer can instantly categorize the long-term geometric behavior and stability of an interconnected physical system without ever fully solving the equation!
