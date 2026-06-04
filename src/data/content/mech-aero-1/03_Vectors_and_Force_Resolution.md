---
title: "Vectors and Force Resolution"
---

# Vectors and Force Resolution

Forces are vector quantities. They possess both magnitude and direction, and must be added according to the parallelogram law.

## 1. Scalars and Vectors

- **Scalar**: A physical quantity that can be completely specified by its magnitude. Examples: mass, volume, length, time.
- **Vector**: A physical quantity that requires both a magnitude and a direction for its complete description. Examples: force, position, velocity, acceleration.

Vectors are represented graphically by arrows. The length of the arrow represents the magnitude, and the angle between the arrow and a reference axis represents the direction. The line containing the arrow is called the *line of action* of the vector.

## 2. Vector Operations

### Vector Addition (Parallelogram Law)
If two vectors $\mathbf{A}$ and $\mathbf{B}$ represent forces acting on a particle, their sum (resultant) $\mathbf{R} = \mathbf{A} + \mathbf{B}$ is the diagonal of the parallelogram formed using $\mathbf{A}$ and $\mathbf{B}$ as adjacent sides.

### Triangle Rule
Alternatively, place the tail of vector $\mathbf{B}$ at the tip of vector $\mathbf{A}$. The resultant $\mathbf{R}$ connects the tail of $\mathbf{A}$ to the tip of $\mathbf{B}$.

## 3. Resolution of a Force into Components

A single force $\mathbf{F}$ can be broken down into two components along any two non-parallel axes. The most useful resolution is into rectangular (Cartesian) components along mutually perpendicular $x$, $y$, and $z$ axes.

### 2D Rectangular Components
For a force $\mathbf{F}$ in the $xy$-plane making an angle $\theta$ with the positive $x$-axis:
$$ F_x = F \cos\theta $$
$$ F_y = F \sin\theta $$

The force vector can be written using unit vectors $\mathbf{i}$ and $\mathbf{j}$:
$$ \mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} $$

The magnitude and direction are recovered via:
$$ F = \sqrt{F_x^2 + F_y^2} $$
$$ \theta = \tan^{-1}\left(\frac{F_y}{F_x}\right) $$

### 3D Cartesian Vectors
In 3D space, a force $\mathbf{F}$ is resolved into $x$, $y$, and $z$ components:
$$ \mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k} $$

The magnitude is:
$$ F = \sqrt{F_x^2 + F_y^2 + F_z^2} $$

The direction is defined by the coordinate direction angles $\alpha, \beta, \gamma$ measured from the positive $x, y, z$ axes respectively:
$$ \cos\alpha = \frac{F_x}{F}, \quad \cos\beta = \frac{F_y}{F}, \quad \cos\gamma = \frac{F_z}{F} $$
Where:
$$ \cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1 $$

## 4. Position Vectors and Force Directed Along a Line

Often, the direction of a force is specified by two points on its line of action, say $A(x_A, y_A, z_A)$ and $B(x_B, y_B, z_B)$.
The position vector from $A$ to $B$ is:
$$ \mathbf{r}_{AB} = (x_B - x_A)\mathbf{i} + (y_B - y_A)\mathbf{j} + (z_B - z_A)\mathbf{k} $$

The unit vector $\mathbf{u}_{AB}$ defining the direction is:
$$ \mathbf{u}_{AB} = \frac{\mathbf{r}_{AB}}{|\mathbf{r}_{AB}|} $$

The force vector is then:
$$ \mathbf{F} = F \mathbf{u}_{AB} $$
