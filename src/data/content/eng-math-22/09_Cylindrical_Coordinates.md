# 9. Triple Integrals in Cylindrical Coordinates

If you need to calculate the volume of a pipe, a barrel, or a rocket fuselage, standard Cartesian coordinates $(x,y,z)$ will trap you in a nightmare of square roots. 
We need a coordinate system explicitly designed for shapes that possess rotational symmetry around an axis. We use **Cylindrical Coordinates** $(r, \theta, z)$.

### How Cylindrical Coordinates Work
Cylindrical coordinates are incredibly simple. They are literally just 2D Polar Coordinates on the ground floor, combined with a standard Cartesian $z$-axis pointing straight up.

*   $r$: The radius (distance from the z-axis to the point).
*   $\theta$: The angle around the z-axis.
*   $z$: The standard vertical height.

**The Conversions:**
$$
x = r\cos\theta
$$
$$
y = r\sin\theta
$$
$$
z = z
$$
$$
x^2 + y^2 = r^2
$$

### The Differential Volume ($dV$)
Just like Polar Coordinates required an extra $r$ to account for the stretching area wedges ($dA = r\,dr\,d\theta$), Cylindrical Coordinates require the exact same adjustment.

A tiny infinitesimal block of volume in a cylinder is NOT a perfect cube. It is a curved wedge of cheese. Its volume is slightly larger the further away from the center axis it is.
Therefore, the differential volume is:
$$
dV = r \, dz \, dr \, d\theta
$$
*(Do not forget this $r$, or your integral will be wildly incorrect!)*

### Setting up the Integral
Most cylindrical integrals are set up with $dz$ on the inside.

**Step 1:** The inner bounds are the physical floor and physical roof of the solid, written as functions of $(r, \theta)$.
$$
u_1(r,\theta) \le z \le u_2(r,\theta)
$$

**Step 2:** The outer two integrals represent the flat circular shadow the object casts on the floor. You set up these $r$ and $\theta$ bounds exactly as you would for a standard 2D Polar integral!

### Example Setup
Find the volume of the solid bounded by the paraboloid $z = x^2 + y^2$ and the flat plane $z = 4$.

1.  **Visualize:** This is a bowl opening upwards, chopped off by a flat lid at $z=4$.
2.  **Inner Bounds ($dz$):** The floor is the paraboloid. In cylindrical, $z = r^2$. The roof is the flat lid $z = 4$. So, $r^2 \le z \le 4$.
3.  **Shadow ($dr \, d\theta$):** Look straight down from above. The widest part of the bowl is where $z=4$. If $r^2 = 4$, the radius is 2. The shadow is a perfect circle of radius 2! So, $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.

$$
V = \int_{0}^{2\pi} \int_{0}^{2} \int_{r^2}^{4} 1 \cdot \mathbf{r} \, dz \, dr \, d\theta
$$
