# Moment of a Force

When a force is applied to a body, it will produce a tendency for the body to rotate about a point that is not on the line of action of the force. This tendency to rotate is known as the **moment of a force** or torque.

## 1. Scalar Formulation (2D)

In a 2D plane, the moment of a force about a point $O$ is a scalar quantity defined by its magnitude and rotational sense (clockwise or counterclockwise).

The magnitude of the moment is:
$$ M_O = F \cdot d $$
where:
- $F$ is the magnitude of the force.
- $d$ is the **moment arm** or perpendicular distance from the axis at point $O$ to the line of action of the force.

**Sign Convention**:
By the right-hand rule, counterclockwise moments are generally considered positive ($+k$ direction), and clockwise moments are considered negative ($-k$ direction).

### Varignon's Theorem (Principle of Moments)
Varignon's theorem states that the moment of a force about a point is equal to the sum of the moments of the components of the force about the same point.
$$ M_O = F_x \cdot y \pm F_y \cdot x $$
This is extremely useful when calculating the perpendicular distance $d$ directly is geometrically difficult. We break the force into $x$ and $y$ components and sum their individual moments.

## 2. Vector Formulation (3D)

In three-dimensional space, the moment of a force $\mathbf{F}$ about a point $O$ is most easily evaluated using the vector cross product.

$$ \mathbf{M}_O = \mathbf{r} \times \mathbf{F} $$
where:
- $\mathbf{r}$ is a position vector directed from the point $O$ to *any* point on the line of action of the force $\mathbf{F}$.
- $\mathbf{F}$ is the force vector.

Using the determinant form:
$$ \mathbf{M}_O = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix} $$
$$ \mathbf{M}_O = (r_y F_z - r_z F_y)\mathbf{i} - (r_x F_z - r_z F_x)\mathbf{j} + (r_x F_y - r_y F_x)\mathbf{k} $$

The principle of transmissibility ensures that regardless of which point on the line of action of $\mathbf{F}$ the vector $\mathbf{r}$ points to, the cross product will yield the exact same moment vector.

## 3. Moment of a Force about a Specified Axis

Sometimes it is necessary to determine the component of a moment along a specific axis $a-a$ passing through point $O$. This is common when determining the torque acting on a shaft or a hinge.

1. First, calculate the moment of the force about point $O$ using the cross product: $\mathbf{M}_O = \mathbf{r} \times \mathbf{F}$.
2. Second, define a unit vector $\mathbf{u}_a$ along the specified axis $a-a$.
3. Compute the projection of $\mathbf{M}_O$ onto the axis $a-a$ using the dot product (scalar triple product):

$$ M_a = \mathbf{u}_a \cdot (\mathbf{r} \times \mathbf{F}) = \begin{vmatrix} u_{ax} & u_{ay} & u_{az} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix} $$

If $M_a$ is positive, the sense of rotation is in the direction of the unit vector $\mathbf{u}_a$ (right-hand rule). If negative, the rotation is in the opposite direction.
