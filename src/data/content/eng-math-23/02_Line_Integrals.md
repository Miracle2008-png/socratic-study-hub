# 2. Line Integrals

Standard definite integrals $\int_a^b f(x) \, dx$ are calculated along a perfectly straight line on the x-axis. 
But what if you want to integrate a function while traveling along a curved, winding path $C$ through 3D space? We use a **Line Integral** (sometimes called a Path Integral).

There are two very different types of Line Integrals:

### 1. Line Integrals of Scalar Functions
Imagine a curved wire floating in 3D space. The wire is not perfectly uniform; its density changes along its length, given by the scalar function $f(x,y,z)$. 
If you want to calculate the total mass of the wire, you must integrate the density along the curve $C$.

$$
\int_C f(x,y,z) \, ds
$$
Here, $ds$ represents an infinitesimally tiny arc length of the wire. 
To actually calculate this, you must **Parameterize** the curve using a variable $t$ (time).
Let the curve be $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$, from $t=a$ to $t=b$.

The formula becomes:
$$
\int_a^b f(\mathbf{r}(t)) \, |\mathbf{r}'(t)| \, dt
$$
*(You plug the $t$ formulas into the function, multiply by the magnitude of the velocity vector, and integrate normally).*

### 2. Line Integrals of Vector Fields (Work)
This is the most important integral in mechanical engineering.
Imagine a particle moving along a curved path $C$ through a swirling wind storm (a Vector Field $\mathbf{F}$). The wind is pushing and pulling on the particle. 

How much physical **Work** does the wind do on the particle over the entire journey?
Work is defined as Force multiplied by Distance. But because the force is a vector, and the path is curved, we must take the **Dot Product** of the Force field $\mathbf{F}$ and the tiny tangent movement vector $d\mathbf{r}$ at every single point!

$$
W = \int_C \mathbf{F} \cdot d\mathbf{r}
$$

### How to Calculate the Work Integral
Just like the scalar integral, we must parameterize the path with $t$.
1.  Find the path vector: $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$.
2.  Find the derivative (velocity) vector: $\mathbf{r}'(t) = \langle x'(t), y'(t), z'(t) \rangle$.
3.  Plug the path $t$ formulas into the Force field $\mathbf{F}$.
4.  Take the Dot Product of $\mathbf{F}$ and $\mathbf{r}'(t)$. This turns the vectors into a single scalar expression!
5.  Integrate from $t=a$ to $t=b$.

$$
\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt
$$

If the wind pushes perfectly along the path, the Work is positive. If the wind blows perfectly perpendicular to the path, the Dot Product is zero, and the Work is zero!
