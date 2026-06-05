# The Elastic Curve

When a beam bends under a transverse load, its longitudinal centroidal axis deforms from a perfectly straight line into a continuous curve. This deformed axis is called the **Elastic Curve**.

Our primary mathematical objective is to derive the precise algebraic equation of this curve: $v(x)$, where $v$ is the vertical deflection (sag) at any position $x$ along the beam.

## 1. The Moment-Curvature Relationship

Recall from our derivation of bending stress that the normal strain $\epsilon$ varies linearly with distance $y$ from the neutral axis: $\epsilon = -y/\rho$, where $\rho$ is the radius of curvature.

We also know Hooke's law: $\sigma = E\epsilon$.
And the flexure formula: $\sigma = -My/I$.

Equating these relationships:
$$ E\left(-\frac{y}{\rho}\right) = -\frac{My}{I} $$

Simplifying, we arrive at the fundamental **Moment-Curvature Equation**:
$$ \frac{1}{\rho} = \frac{M}{EI} $$

Where:
*   $1/\rho$ is the curvature of the beam at a specific point $x$.
*   $M$ is the internal bending moment at that point $x$.
*   $E$ is the Modulus of Elasticity (material stiffness).
*   $I$ is the Moment of Inertia (geometric stiffness).
*   The product **$EI$** is known as the **Flexural Rigidity** of the beam. It represents the beam's total resistance to bending.

This equation proves a profound physical reality: **the curvature of a beam is directly proportional to the internal bending moment.**
*   Where the moment is zero (e.g., at a pinned end), the curvature is zero ($\rho = \infty$), meaning the beam is perfectly straight at that exact point.
*   Where the moment is maximized, the beam is curved the sharpest.

## 2. Relating Curvature to Deflection $v(x)$

From calculus, the exact mathematical expression for the curvature ($1/\rho$) of any function $v(x)$ is:
$$ \frac{1}{\rho} = \frac{\frac{d^2v}{dx^2}}{[1 + (\frac{dv}{dx})^2]^{3/2}} $$

Because we assume **small deflections**, the slope of the beam ($dv/dx$) is incredibly small (almost zero). Therefore, the term $(dv/dx)^2$ is infinitesimally small and can be safely approximated as zero.

The complex calculus equation simplifies dramatically to:
$$ \frac{1}{\rho} \approx \frac{d^2v}{dx^2} $$

## 3. The Differential Equation of the Elastic Curve

By substituting this simplified calculus expression into the moment-curvature equation, we establish the governing differential equation for all beam deflection:

$$ \frac{d^2v}{dx^2} = \frac{M(x)}{EI} $$

This is a second-order linear differential equation. To find the equation for the physical sag $v(x)$, we must find the mathematical function for the internal bending moment $M(x)$ and integrate it twice.
