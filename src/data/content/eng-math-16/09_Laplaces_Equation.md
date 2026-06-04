# 9. Laplace's Equation (Steady-State Temperature)

The third major PDE is Laplace's Equation in two dimensions (2D):
**PDE:** $u_{xx} + u_{yy} = 0$

Notice there is no time variable $t$. This equation models the **steady-state** behavior of a system after an infinite amount of time has passed and all fluctuations have settled down. 
We will solve this for a 2D rectangular metal plate (width $a$, height $b$).

**Boundary Conditions:**
Imagine the left, right, and bottom edges of the plate are held in ice water (0 degrees).
1. $u(0, y) = 0$
2. $u(a, y) = 0$
3. $u(x, 0) = 0$
The top edge is held against a hot wire with a specific temperature profile $f(x)$.
4. $u(x, b) = f(x)$

### Separation of Variables
Assume $u(x,y) = X(x)Y(y)$.
Substitute: $X'' Y + X Y'' = 0$.
Separate: $\frac{X''}{X} = -\frac{Y''}{Y} = -\lambda$.

We get two ODEs:
1. $X'' + \lambda X = 0$
2. $Y'' - \lambda Y = 0$  *(Notice the minus sign!)*

### Solving the ODEs
Because the left and right edges ($x=0, x=a$) are zero, the $X$ equation acts exactly like our 1D heat equation boundaries. 
Solving it gives the sine wave eigenvalue solution:
$\lambda = (\frac{n\pi}{a})^2$ and $X_n(x) = \sin(\frac{n\pi x}{a})$.

Now we plug this $\lambda$ into the $Y$ equation: $Y'' - (\frac{n\pi}{a})^2 Y = 0$.
Because of the minus sign, this is NOT a sine/cosine oscillating equation. It is a hyperbolic exponential equation!
The solution is: $Y_n(y) = A_n \cosh(\frac{n\pi y}{a}) + B_n \sinh(\frac{n\pi y}{a})$.

To satisfy the bottom boundary condition $u(x,0)=0 \implies Y(0)=0$.
Since $\cosh(0)=1$ and $\sinh(0)=0$, we must set $A_n = 0$. 
This leaves $Y_n(y) = B_n \sinh(\frac{n\pi y}{a})$.

### The Final 2D Solution
Multiplying $X$ and $Y$ and summing over $n$ gives the general solution:
$$ u(x,y) = \sum_{n=1}^{\infty} B_n \sin\left(\frac{n\pi x}{a}\right) \sinh\left(\frac{n\pi y}{a}\right) $$

To find the constants $B_n$, we plug in the final top boundary condition $y=b$:
$$ u(x,b) = \sum_{n=1}^{\infty} \left[ B_n \sinh\left(\frac{n\pi b}{a}\right) \right] \sin\left(\frac{n\pi x}{a}\right) = f(x) $$

This is once again a Fourier Sine Series! The term in the brackets is just the standard Fourier coefficient $b_n$. We can integrate to find the exact temperature at any point $(x,y)$ on the 2D plate!
