# 10. PDEs in Polar Coordinates (Vibrating Drumhead)

What happens if we want to model the vibrations of a circular drum, or the heat diffusing through a round pipe? 

Rectangular $(x,y)$ coordinates are terrible for circular boundaries. We must rewrite our PDEs in **Polar Coordinates $(r, \theta)$**.

### The Laplacian in Polar Coordinates
The core of all three major PDEs is the spatial Laplacian operator: $\nabla^2 u = u_{xx} + u_{yy}$.
Using the chain rule and the conversions $x = r\cos\theta$ and $y = r\sin\theta$, the Laplacian transforms into a much uglier equation:
$$ \nabla^2 u = \frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r} + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2} $$

The 2D Wave Equation for a circular drumhead is therefore:
$$ u_{tt} = c^2 \left( u_{rr} + \frac{1}{r}u_r + \frac{1}{r^2}u_{\theta\theta} \right) $$

### Solving the Drumhead (Radially Symmetric)
To keep things manageable, let's assume the drummer hits the exact center of the drum. The vibration spreads out in perfect concentric circles. This means the height $u$ does not depend on the angle $\theta$ at all! The $u_{\theta\theta}$ term becomes zero.

$$ u_{tt} = c^2 \left( u_{rr} + \frac{1}{r}u_r \right) $$

We use Separation of Variables again: $u(r,t) = R(r)T(t)$.
Skipping the algebra, separating the variables yields two ODEs:
1. $T'' + c^2\lambda T = 0$ (Standard time oscillation, sine/cosine)
2. $r^2 R'' + r R' + \lambda r^2 R = 0$ 

### Return of the Bessel Function
Look very closely at the $R$ equation. If we substitute $\lambda = \omega^2$ and make a variable substitution $s = \omega r$, the equation becomes:
$$ s^2 \frac{d^2R}{ds^2} + s \frac{dR}{ds} + s^2 R = 0 $$

This is exactly **Bessel's Equation of order zero** ($\nu = 0$)!
This is why we learned Bessel Functions in Topic 14! The solution to the spatial vibration of a circular drumhead is precisely the Bessel Function $J_0(\omega r)$. 

The boundary condition that the edge of the drum ($r=a$) cannot move ($R(a)=0$) forces us to find the specific "roots" (x-intercepts) of the Bessel function to determine the harmonic frequencies of the drum.
