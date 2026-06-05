# Transient Conduction: Spatial Effects 

When the Biot number $Bi > 0.1$, the temperature within the solid is no longer uniform. The surface cools (or heats) rapidly, while the core lags behind. Temperature is now a function of both time and position: $T = T(x,t)$ or $T(r,t)$.

To solve this, we must return to the partial differential heat equation (Fourier's equation).

## 1. 1D Transient Equation and Non-dimensionalization

For a plane wall of thickness $2L$ (centerline at $x=0$), initially at uniform $T_i$, suddenly exposed to fluid at $T_\infty$ with convection $h$:

$$\frac{\partial^2 T}{\partial x^2} = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$

To make the solution universal, we introduce dimensionless variables:
- Dimensionless temperature: $\theta^* = \frac{T(x,t) - T_\infty}{T_i - T_\infty}$
- Dimensionless coordinate: $X = \frac{x}{L}$
- Dimensionless time (**Fourier Number, $Fo$**): $\tau = \frac{\alpha t}{L^2}$
- Biot Number: $Bi = \frac{hL}{k}$

The PDE transforms to $\frac{\partial^2 \theta^*}{\partial X^2} = \frac{\partial \theta^*}{\partial \tau}$, with boundary conditions defined entirely by $Bi$.
Therefore, the solution is a function of only three dimensionless parameters: $\theta^* = f(X, Bi, Fo)$.

## 2. Analytical Solution

Solving the PDE (typically using separation of variables) yields an infinite series:
$$\theta^*(X, \tau) = \sum_{n=1}^{\infty} A_n e^{-\lambda_n^2 \tau} \cos(\lambda_n X)$$
Where $\lambda_n$ are the discrete eigenvalues (roots of $\lambda \tan(\lambda) = Bi$).

## 3. The One-Term Approximation

For values of Fourier number $Fo > 0.2$ (meaning a short initial transient period has passed), the higher-order terms in the infinite series decay rapidly to zero. The solution can be truncated to just the first term ($n=1$) with an error of less than 2%:

$$\theta^*(X, \tau) \approx A_1 e^{-\lambda_1^2 \tau} \cos(\lambda_1 X)$$

The constants $A_1$ and $\lambda_1$ depend only on $Bi$ and are provided in standard engineering lookup tables.

**Centerline Temperature:**
At the centerline ($x=0 \implies X=0$), $\cos(0) = 1$. The centerline dimensionless temperature $\theta_0^*$ is simply:
$$\theta_0^*(\tau) = A_1 e^{-\lambda_1^2 \tau}$$

**Temperature Anywhere Else:**
The temperature at any other location is related to the centerline temperature by:
$$\theta^*(X, \tau) = \theta_0^*(\tau) \cos(\lambda_1 X)$$
*(For cylinders, the cosine is replaced by the Bessel function $J_0$; for spheres, by $(\sin \lambda r)/(\lambda r)$).*

## 4. Heisler Charts

Before computers were widespread, engineers evaluated these complex one-term approximation equations using graphical plots known as **Heisler Charts**. 

A typical Heisler chart plots $\theta_0^*$ on a logarithmic y-axis against $Fo$ on the x-axis, with a family of curves representing different values of $1/Bi$. Separate charts exist for position corrections and total heat transfer. While exact analytical calculation via the one-term approximation is standard today, Heisler charts remain a valuable tool for visualizing the relationships between $Bi$, $Fo$, and transient cooling rates.
