# Functions of Several Variables

Until now, we have studied functions of a single independent variable, $y = f(x)$, which represent curves in a 2D plane. However, the physical world is multi-dimensional. The temperature in a room depends on your x, y, and z coordinates. The pressure in a pipe depends on location and time. To model these, we need functions of several variables.

## 1. Definition

A function of two variables, $z = f(x, y)$, is a rule that assigns a unique real number $z$ to each ordered pair $(x, y)$ in a specific domain $D$.
*   $x$ and $y$ are the **independent variables**.
*   $z$ is the **dependent variable**.

Graphically, $z = f(x, y)$ represents a **surface** in 3D space. Just as $y = x^2$ is a 1D parabola curving through a 2D plane, $z = x^2 + y^2$ is a 2D paraboloid (a bowl shape) curving through 3D space.

## 2. Domain and Range

Finding the domain of $f(x, y)$ is similar to single-variable calculus, but instead of finding a segment of the x-axis, you are finding a region in the xy-plane.

*Example:* Find the domain of $f(x, y) = \sqrt{9 - x^2 - y^2}$.
*   The expression inside the square root must be non-negative: $9 - x^2 - y^2 \ge 0$.
*   Rearranging gives $x^2 + y^2 \le 9$.
*   The domain is a solid disk in the xy-plane centered at the origin with a radius of 3. You can only "feed" the function coordinates that lie on or inside this disk.

## 3. Level Curves (Contour Maps)

Drawing 3D surfaces on 2D paper is difficult. A powerful way to visualize a 3D function in 2D is using **level curves** (also known as contour lines).

A level curve is the 2D curve you get when you set the function equal to a constant $k$:
$$ f(x, y) = k $$

Think of a topographical map used by hikers. The contour lines represent paths of constant elevation.
*   If you walk along a level curve, your altitude ($z$) does not change.
*   Where the level curves are tightly packed together, the surface is very steep.
*   Where the level curves are far apart, the surface is relatively flat.

*Example:* The level curves of $z = x^2 + y^2$ are circles. Setting $x^2 + y^2 = k$, we see that for $k=1$, the curve is a circle of radius 1. For $k=4$, it is a circle of radius 2. The concentric circles get closer together as $k$ increases, indicating the bowl gets steeper the further you go from the center.

## 4. Functions of Three or More Variables

We can extend this concept to $w = f(x, y, z)$.
The domain of this function is a 3D solid region in space.

We cannot draw the graph of a function of 3 variables, because it would require 4 dimensions ($x, y, z, w$). However, we can visualize its **level surfaces**:
$$ f(x, y, z) = k $$

*Example:* If $T(x,y,z)$ represents the temperature inside a solid block of metal, the level surface $T(x,y,z) = 100^\circ\text{C}$ is a 3D shell inside the block where every point on that shell is exactly 100 degrees. These are called **isotherms**. In fluid mechanics, surfaces of constant pressure are called **isobars**.
