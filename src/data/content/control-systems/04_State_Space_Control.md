# State-Space Control Design

## Pole Placement (Full State Feedback)

Control law: $u = -K\mathbf{x}$ (assumes all states measurable).

Closed-loop system: $\dot{\mathbf{x}} = (A - BK)\mathbf{x}$

Choose $K$ so that eigenvalues of $(A - BK)$ are at desired pole locations.

**Ackermann's formula** (SISO):
$$K = \begin{bmatrix}0 & 0 & \cdots & 1\end{bmatrix} \mathcal{C}^{-1}\alpha_c(A)$$

where $\alpha_c(s) = (s-p_1)(s-p_2)\cdots(s-p_n)$ is the desired characteristic polynomial.

Requires system to be **controllable**.

## Luenberger Observer (Estimator)

When states are not all measurable, estimate $\hat{\mathbf{x}}$ using output $y$:

$$\dot{\hat{\mathbf{x}}} = A\hat{\mathbf{x}} + Bu + L(y - C\hat{\mathbf{x}})$$

Error $\mathbf{e} = \mathbf{x} - \hat{\mathbf{x}}$ evolves as $\dot{\mathbf{e}} = (A - LC)\mathbf{e}$.

Choose $L$ to place observer poles faster than controller poles (rule of thumb: observer poles 3–5× faster).

Requires system to be **observable**.

## Separation Principle

Controller and observer can be designed independently. Combined control law: $u = -K\hat{\mathbf{x}}$.

Closed-loop poles = controller poles ∪ observer poles.

## LQR (Linear Quadratic Regulator)

Minimise:
$$J = \int_0^{\infty} (\mathbf{x}^T Q \mathbf{x} + u^T R u)\,dt$$

Optimal gain: $K^* = R^{-1}B^T P$ where $P$ is solution to algebraic Riccati equation:
$$A^T P + PA - PBR^{-1}B^T P + Q = 0$$

Guarantees stability and provides good gain and phase margins ($GM \geq 6$ dB, $PM \geq 60°$).