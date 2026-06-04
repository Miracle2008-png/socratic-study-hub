# 9. Planes in 3D Space

A plane is an infinitely large, flat, 2D sheet floating in 3D space. 

How do we mathematically define the orientation of a flat sheet of paper? We could try using two direction vectors lying flat on the paper. But mathematically, dealing with two vectors is complicated. 

Instead, mathematicians realized that the fastest way to define the orientation of a plane is to define the one single vector that is perfectly perpendicular to it! This perpendicular vector is called the **Normal Vector, $\mathbf{n}$**.

To define a plane in 3D, we need two pieces of information:
1.  A **Point** on the plane: $P_0 = (x_0, y_0, z_0)$.
2.  A **Normal Vector** perpendicular to the plane: $\mathbf{n} = \langle a, b, c \rangle$.

### The Vector Equation
Let $P(x,y,z)$ be any random point on the plane.
The vector connecting $P_0$ to $P$ lies perfectly flat on the plane. Its components are $\langle x-x_0, y-y_0, z-z_0 \rangle$.
Because the normal vector $\mathbf{n}$ is perpendicular to the entire plane, it must be perpendicular to this vector!
How do we mathematically force two vectors to be perpendicular? We set their dot product to zero!

$$ \mathbf{n} \cdot \vec{P_0P} = 0 $$
$$ \langle a, b, c \rangle \cdot \langle x-x_0, y-y_0, z-z_0 \rangle = 0 $$

### The Scalar Equation
By performing the dot product, we arrive at the standard scalar equation for a plane:
$$ a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 $$

If you distribute and move all the constants to the right side, it takes the **Linear Form**:
$$ ax + by + cz = d $$
*(Notice that the coefficients of x, y, and z are simply the components of the normal vector!)*

### Finding the Normal Vector
What if you are given three random points in space ($P, Q, R$) and asked to find the plane that connects them?
1.  Create two vectors lying on the plane: $\vec{PQ}$ and $\vec{PR}$.
2.  How do you find a vector perpendicular to two other vectors? Take their **Cross Product**!
3.  $\mathbf{n} = \vec{PQ} \times \vec{PR}$. 
4.  Use this $\mathbf{n}$ and point $P$ in the scalar equation.
