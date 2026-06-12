# Multivariable Calculus and Vector Fields

## 1. Partial Derivatives and Gradients
For a multivariable function $f(x, y, z)$, the **partial derivative** with respect to $x$, denoted $\frac{\partial f}{\partial x}$ or $f_x$, is the derivative of $f$ holding all other variables constant.
The **gradient vector** $\nabla f$ combines all first-order partial derivatives:
$$ \nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle $$
It points in the direction of steepest ascent.

## 2. Directional Derivatives
The rate of change of $f$ in the direction of a unit vector $\mathbf{u}$ is:
$$ D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u} $$

## 3. Vector Fields, Divergence, and Curl
A **vector field** assigns a vector to every point in space: $\mathbf{F}(x,y,z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$.
- **Divergence** (flux density): $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
- **Curl** (circulation density): $\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial/\partial x & \partial/\partial y & \partial/\partial z \\ P & Q & R \end{vmatrix}$

## 4. Fundamental Theorems of Vector Calculus
- **Line Integrals of Conservative Fields:** $\int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a))$
- **Green's Theorem:** Relates line integral around a closed curve $C$ to double integral over the region $D$ it encloses (in 2D).
  $$ \oint_C (P dx + Q dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA $$
- **Stokes' Theorem:** Relates surface integral of curl to line integral around the boundary curve.
  $$ \oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$
- **Divergence Theorem:** Relates flux across a closed surface to a volume integral of divergence.
  $$ \iint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F}) dV $$

## 5. Step-by-Step Solved Examples

### Example 1: Gradient and Directional Derivative
**Problem:** Find the directional derivative of $f(x,y) = x^2y^3$ at the point $(1, 2)$ in the direction of $\mathbf{v} = 3\mathbf{i} - 4\mathbf{j}$.
**Solution:**
1. Compute partial derivatives:
   $f_x = 2xy^3 \implies f_x(1, 2) = 2(1)(8) = 16$
   $f_y = 3x^2y^2 \implies f_y(1, 2) = 3(1)(4) = 12$
2. Gradient at $(1,2)$: $\nabla f(1,2) = \langle 16, 12 \rangle$.
3. Normalize direction vector $\mathbf{v}$: $\|\mathbf{v}\| = \sqrt{3^2 + (-4)^2} = 5$.
   $\mathbf{u} = \langle 3/5, -4/5 \rangle$.
4. Compute directional derivative:
   $D_{\mathbf{u}} f(1,2) = \langle 16, 12 \rangle \cdot \langle 3/5, -4/5 \rangle = \frac{48}{5} - \frac{48}{5} = 0$.

### Example 2: Divergence and Curl
**Problem:** Find the divergence and curl of $\mathbf{F}(x,y,z) = x^2y\mathbf{i} + xyz\mathbf{j} - z^2y\mathbf{k}$.
**Solution:**
1. Identify components: $P = x^2y$, $Q = xyz$, $R = -z^2y$.
2. **Divergence:**
   $\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial y}(xyz) + \frac{\partial}{\partial z}(-z^2y)$
   $= 2xy + xz - 2zy$.
3. **Curl:**
   $\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial/\partial x & \partial/\partial y & \partial/\partial z \\ x^2y & xyz & -z^2y \end{vmatrix}$
   $\mathbf{i} component: \frac{\partial}{\partial y}(-z^2y) - \frac{\partial}{\partial z}(xyz) = -z^2 - xy$
   $\mathbf{j} component: -\left(\frac{\partial}{\partial x}(-z^2y) - \frac{\partial}{\partial z}(x^2y)\right) = -(0 - 0) = 0$
   $\mathbf{k} component: \frac{\partial}{\partial x}(xyz) - \frac{\partial}{\partial y}(x^2y) = yz - x^2$
   Curl $= \langle -z^2 - xy, 0, yz - x^2 \rangle$.

### Example 3: Applying Green's Theorem
**Problem:** Evaluate $\oint_C (x^2y dx + x dy)$ where $C$ is the counterclockwise boundary of the unit square $0 \le x \le 1, 0 \le y \le 1$.
**Solution:**
1. Identify $P = x^2y$ and $Q = x$.
2. Compute partials for Green's Theorem:
   $\frac{\partial Q}{\partial x} = 1$, $\frac{\partial P}{\partial y} = x^2$.
3. Set up the double integral over the square $D$:
   $$ \iint_D (1 - x^2) dA = \int_0^1 \int_0^1 (1 - x^2) dy dx $$
4. Integrate with respect to $y$:
   $$ \int_0^1 [y - x^2y]_0^1 dx = \int_0^1 (1 - x^2) dx $$
5. Integrate with respect to $x$:
   $$ \left[ x - \frac{x^3}{3} \right]_0^1 = 1 - \frac{1}{3} = \frac{2}{3} $$
6. The value of the line integral is $2/3$.

### Interactive Visualization

See vector fields in action in 3D:

```visualizer
mode: math
sub: vector
```
