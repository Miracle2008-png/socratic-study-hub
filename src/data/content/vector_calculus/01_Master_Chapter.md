# Vector Calculus

## 1. Differential Operators

Given a scalar field $ f(x,y,z) $ and a vector field $ \mathbf{F} = P \mathbf{i} + Q \mathbf{j} + R \mathbf{k} $:

### 1.1 Gradient
$$ \nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k} $$
Gradient points in the direction of greatest increase of $ f $.

### 1.2 Divergence
$$ \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} $$
Measures the outward flux of a vector field from an infinitesimal volume.

### 1.3 Curl
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} $$
Measures the local rotation of a vector field.

**Example 1:**
Compute the divergence and curl of $ \mathbf{F} = (x^2y)\mathbf{i} + (xyz)\mathbf{j} + (z^2y)\mathbf{k} $.

*Step 1: Divergence.*
$$ \nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial y}(xyz) + \frac{\partial}{\partial z}(z^2y) $$
$$ = 2xy + xz + 2zy $$

*Step 2: Curl.*
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ x^2y & xyz & z^2y \end{vmatrix} $$
$$ = \mathbf{i}(\partial_y(z^2y) - \partial_z(xyz)) - \mathbf{j}(\partial_x(z^2y) - \partial_z(x^2y)) + \mathbf{k}(\partial_x(xyz) - \partial_y(x^2y)) $$
$$ = \mathbf{i}(z^2 - xy) - \mathbf{j}(0 - 0) + \mathbf{k}(yz - x^2) $$
$$ = (z^2 - xy)\mathbf{i} + (yz - x^2)\mathbf{k} $$

## 2. Integral Theorems

### 2.1 Line Integrals and Conservative Fields
Work done by a force field along curve $ C $:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} $$
If $ \nabla \times \mathbf{F} = \mathbf{0} $, the field is conservative, and there exists a potential $ f $ such that $ \mathbf{F} = \nabla f $. In this case:
$$ \int_{P_1}^{P_2} \mathbf{F} \cdot d\mathbf{r} = f(P_2) - f(P_1) $$

### 2.2 Green's Theorem
For a closed curve $ C $ bounding a region $ D $ in the plane:
$$ \oint_C (P dx + Q dy) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA $$

**Example 2:**
Evaluate $ \oint_C (3y - e^{\sin x}) dx + (7x + \sqrt{y^4+1}) dy $ where $ C $ is the circle $ x^2 + y^2 = 9 $.

*Step 1: Identify $ P $ and $ Q $.*
$ P = 3y - e^{\sin x} $, $ Q = 7x + \sqrt{y^4+1} $.

*Step 2: Compute partial derivatives.*
$$ \frac{\partial Q}{\partial x} = 7, \quad \frac{\partial P}{\partial y} = 3 $$

*Step 3: Apply Green's Theorem.*
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D (7 - 3) dA = 4 \iint_D dA $$
The area of the circle of radius 3 is $ 9\pi $.
$$ = 4(9\pi) = 36\pi $$

### 2.3 Divergence Theorem
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F}) dV $$

### 2.4 Stokes' Theorem
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$
