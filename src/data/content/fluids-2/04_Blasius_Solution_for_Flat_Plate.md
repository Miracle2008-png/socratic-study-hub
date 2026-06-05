# Blasius Solution for a Flat Plate

In 1908, Paul Blasius (one of Prandtl's first PhD students) achieved a historic mathematical feat: he found an exact analytical solution to the Prandtl Boundary Layer equations for the specific case of steady, laminar flow over a flat plate.

## 1. The Flat Plate Setup

Imagine a razor-thin flat plate perfectly aligned with a uniform fluid stream of velocity $U_\infty$.
Because the plate is flat and perfectly aligned, the free-stream flow does not speed up or slow down. Therefore, by Bernoulli's principle, the pressure outside the boundary layer is perfectly constant.

If $p$ is constant, then $\frac{dp}{dx} = 0$.

The Prandtl x-momentum equation simplifies further to:
$$ u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = \nu \frac{\partial^2 u}{\partial y^2} $$

## 2. The Similarity Transformation

Blasius realized that the shape of the velocity profile (how $u$ changes with $y$) looks exactly the same at any point $x$ along the plate, just stretched vertically. Because the layer grows thicker as $x$ increases, the curves are all "similar" to each other.

He introduced a dimensionless similarity variable, $\eta$ (eta), which combines both $x$ and $y$:
$$ \eta = y \sqrt{\frac{U_\infty}{\nu x}} $$

He also introduced a dimensionless stream function $f(\eta)$ such that the velocities are given by:
$$ u = U_\infty f'(\eta) $$
$$ v = \frac{1}{2} \sqrt{\frac{\nu U_\infty}{x}} (\eta f' - f) $$

By substituting these into the PDE, Blasius achieved something miraculous. The two variables $x$ and $y$ collapsed into the single variable $\eta$. The complex partial differential equation transformed into a single, third-order Ordinary Differential Equation (ODE):

$$ 2f''' + f f'' = 0 $$

With boundary conditions:
1. At the wall ($y=0 \implies \eta=0$): $f(0) = 0$ and $f'(0) = 0$ (No slip).
2. At infinity ($y \to \infty \implies \eta \to \infty$): $f'(\infty) = 1$ (Matches free-stream).

## 3. Solving the Blasius Equation

The equation $2f''' + ff'' = 0$ is non-linear and has no known closed-form analytical solution (you cannot write the answer using sines, cosines, or exponentials).

Blasius had to solve it numerically by hand using a power series. Today, a computer can solve this ODE using a Runge-Kutta method in a fraction of a millisecond.

The solution provides a table of values mapping $\eta$ to $f'(\eta)$, which directly gives the velocity profile $u/U_\infty$.

## 4. Key Results of the Blasius Solution

By analyzing the numerical solution, engineers derive exact formulas for the flat plate boundary layer:

**1. Boundary Layer Thickness ($\delta$):**
The numerical solution shows that $u/U_\infty$ reaches 0.99 when $\eta \approx 4.91$.
Substituting $\eta = y \sqrt{U_\infty/\nu x}$ and solving for $y = \delta$:
$$ \delta = \frac{4.91 x}{\sqrt{Re_x}} $$
*(Where $Re_x = \frac{U_\infty x}{\nu}$ is the local Reynolds number). Notice the boundary layer grows proportionally to $\sqrt{x}$.*

**2. Wall Shear Stress ($\tau_w$):**
By taking the derivative of the velocity profile at the wall, we find the local friction acting on the plate:
$$ \tau_w = \frac{0.332 \rho U_\infty^2}{\sqrt{Re_x}} $$
*(Notice that shear stress approaches infinity at the leading edge $x=0$, and decreases as the boundary layer grows thicker downstream).*

**3. Skin Friction Coefficient ($C_f$):**
A dimensionless measure of local drag:
$$ C_{f,x} = \frac{\tau_w}{\frac{1}{2}\rho U_\infty^2} = \frac{0.664}{\sqrt{Re_x}} $$

By integrating the local shear stress over the entire length $L$ of the plate, we get the total drag coefficient $C_D = 1.328 / \sqrt{Re_L}$.
