# 9. Triple Integrals in Cylindrical Coordinates

For 3D solids that exhibit radial symmetry about an axis (usually the z-axis)—such as cones, cylinders, and paraboloids—Cartesian coordinates $(x,y,z)$ are often too complex to integrate. 

In these cases, we use **Cylindrical Coordinates** $(r, \theta, z)$. 
Cylindrical coordinates are simply 2D Polar coordinates for the xy-plane, with a standard Cartesian $z$-axis added on top.

### The Coordinate Transformation
*   $x = r\cos(\theta)$
*   $y = r\sin(\theta)$
*   $z = z$
*   $r^2 = x^2 + y^2$

### The Volume Element $dV$
In Cartesian, $dV = dx\,dy\,dz$. 
In Cylindrical, because the base is in polar coordinates, we must include the Jacobian factor '$r$'.
$$ dV = r \, dz \, dr \, d\theta $$

**NEVER FORGET THE EXTRA '$r$'!**

### Set up for Cylindrical Integrals
A solid $E$ described in cylindrical coordinates usually looks like this:
*   The angle $\theta$ goes from $\alpha$ to $\beta$.
*   The radius $r$ goes from $h_1(\theta)$ to $h_2(\theta)$.
*   The height $z$ goes from a bottom surface $u_1(r,\theta)$ to a top surface $u_2(r,\theta)$.

The triple integral formula is:
$$ \iiint_E f(x,y,z) dV = \int_{\alpha}^{\beta} \int_{h_1(\theta)}^{h_2(\theta)} \int_{u_1(r,\theta)}^{u_2(r,\theta)} f(r\cos\theta, r\sin\theta, z) \, r \, dz \, dr \, d\theta $$

### Worked Example: Volume of a Solid
**Problem:** Find the volume of the solid $E$ that lies within the cylinder $x^2 + y^2 = 1$, below the plane $z = 4$, and above the paraboloid $z = 1 - x^2 - y^2$.

**Step 1: Convert boundaries to Cylindrical**
*   Cylinder: $x^2 + y^2 = 1 \implies r^2 = 1 \implies r = 1$. So the region is bounded by $r=0$ and $r=1$, wrapping all the way around: $0 \le \theta \le 2\pi$.
*   Top Plane: $z = 4$.
*   Bottom Paraboloid: $z = 1 - (x^2 + y^2) \implies z = 1 - r^2$.

Our limits are:
*   $0 \le \theta \le 2\pi$
*   $0 \le r \le 1$
*   $1 - r^2 \le z \le 4$

**Step 2: Set up the Integral**
To find volume, the integrand is simply $1$. Do not forget $dV = r\,dz\,dr\,d\theta$.
$$ V = \int_{0}^{2\pi} \int_{0}^{1} \int_{1-r^2}^{4} 1 \cdot r \, dz \, dr \, d\theta $$

**Step 3: Evaluate Inner Integral ($dz$)**
$$ \int_{1-r^2}^{4} r \, dz = [rz]_{z=1-r^2}^{z=4} = r(4) - r(1 - r^2) = 4r - r + r^3 = 3r + r^3 $$

**Step 4: Evaluate Middle Integral ($dr$)**
$$ \int_{0}^{1} (3r + r^3) dr = \left[ \frac{3}{2}r^2 + \frac{1}{4}r^4 \right]_{0}^{1} = \frac{3}{2} + \frac{1}{4} = \frac{6}{4} + \frac{1}{4} = \frac{7}{4} $$

**Step 5: Evaluate Outer Integral ($d\theta$)**
$$ \int_{0}^{2\pi} \frac{7}{4} d\theta = \left[ \frac{7}{4}\theta \right]_{0}^{2\pi} = \frac{7}{4}(2\pi) = \frac{7\pi}{2} $$

The total volume of the solid is $\mathbf{7\pi/2}$.
