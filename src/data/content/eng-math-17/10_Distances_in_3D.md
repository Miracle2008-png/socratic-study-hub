# 10. Distances (Point to Line, Point to Plane)

In 3D geometry, calculating distances between objects is purely a game of vector projections.

### Distance from a Point to a Plane
Suppose you have a point $Q(x_1, y_1, z_1)$ floating in space above a plane ($ax+by+cz=d$). You want to find the shortest, perpendicular distance $D$ straight down to the plane.

1.  Find any random point $P_0$ that lies on the plane (just plug in $x=0, y=0$ and solve for $z$).
2.  Create the vector connecting the plane to the floating point: $\mathbf{b} = \vec{P_0Q}$.
3.  Identify the normal vector to the plane: $\mathbf{n} = \langle a, b, c \rangle$.
4.  The distance straight down is simply the length of the "shadow" of $\mathbf{b}$ cast onto the normal vector $\mathbf{n}$!

We already have a formula for this length (the scalar component):
$$ D = |\text{comp}_{\mathbf{n}} \mathbf{b}| = \frac{|\mathbf{n} \cdot \mathbf{b}|}{\|\mathbf{n}\|} $$

If you plug the algebra into this formula, you get the famous algebraic shortcut:
$$ D = \frac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}} $$

### Distance from a Point to a Line
Suppose you have a point $Q$ floating in space, and a 3D line defined by point $P$ and direction vector $\mathbf{v}$. What is the shortest distance to the line?

1.  Create the vector connecting the line to the point: $\mathbf{b} = \vec{PQ}$.
2.  If you form a parallelogram using $\mathbf{b}$ and $\mathbf{v}$, the distance $D$ is the perpendicular height of that parallelogram.
3.  Recall that Area = Base $\times$ Height. So Height = Area / Base.
4.  Recall that the Area of a parallelogram is the magnitude of the cross product!

Therefore, the distance is:
$$ D = \frac{\|\mathbf{v} \times \mathbf{b}\|}{\|\mathbf{v}\|} $$
