# 11. Applications of Triple Integrals

Just as double integrals are used to find the physical properties of thin 2D plates, triple integrals are used to calculate the physical properties of solid 3D objects. 

Let $E$ be a 3D solid region, and let $\rho(x,y,z)$ be its volumetric density function (mass per unit volume, e.g., $\text{kg}/\text{m}^3$).

### 1. Total Mass ($m$)
$$ m = \iiint_E \rho(x,y,z) dV $$

### 2. Moments about the Coordinate Planes
Instead of moments about an axis (like in 2D), in 3D we calculate moments about the 2D coordinate planes:
*   **Moment about the yz-plane ($M_{yz}$):** Distance to the yz-plane is $x$.
    $$ M_{yz} = \iiint_E x \cdot \rho(x,y,z) dV $$
*   **Moment about the xz-plane ($M_{xz}$):** Distance to the xz-plane is $y$.
    $$ M_{xz} = \iiint_E y \cdot \rho(x,y,z) dV $$
*   **Moment about the xy-plane ($M_{xy}$):** Distance to the xy-plane is $z$.
    $$ M_{xy} = \iiint_E z \cdot \rho(x,y,z) dV $$

### 3. Center of Mass $(\bar{x}, \bar{y}, \bar{z})$
The 3D balancing point of the solid object:
$$ \bar{x} = \frac{M_{yz}}{m}, \quad \bar{y} = \frac{M_{xz}}{m}, \quad \bar{z} = \frac{M_{xy}}{m} $$

### 4. Moments of Inertia ($I_x, I_y, I_z$)
In mechanical engineering, the **Moment of Inertia** (or second moment of mass) measures an object's resistance to rotational acceleration about an axis.
It is calculated by integrating the square of the distance from the axis of rotation:

*   **About the x-axis ($I_x$):** The distance squared from the x-axis is $(y^2 + z^2)$.
    $$ I_x = \iiint_E (y^2 + z^2) \rho(x,y,z) dV $$
*   **About the y-axis ($I_y$):** The distance squared from the y-axis is $(x^2 + z^2)$.
    $$ I_y = \iiint_E (x^2 + z^2) \rho(x,y,z) dV $$
*   **About the z-axis ($I_z$):** The distance squared from the z-axis is $(x^2 + y^2)$.
    $$ I_z = \iiint_E (x^2 + y^2) \rho(x,y,z) dV $$

### Worked Example: Constant Density Inertia
**Problem:** Let $E$ be a uniform solid cylinder of radius $R$ and height $H$, with constant density $\rho_0$. Find its moment of inertia about its central axis ($I_z$).

**Step 1: Set up in Cylindrical Coordinates**
Because it's a cylinder, we use cylindrical coordinates. The density is $\rho_0$.
The formula is $I_z = \iiint_E (x^2 + y^2) \rho_0 dV$.
In cylindrical, $x^2 + y^2 = r^2$, and $dV = r\,dz\,dr\,d\theta$.
The integral becomes:
$$ I_z = \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{H} (r^2) \rho_0 (r) \, dz \, dr \, d\theta $$
$$ I_z = \rho_0 \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{H} r^3 \, dz \, dr \, d\theta $$

**Step 2: Evaluate**
$$ \int_{0}^{H} r^3 dz = r^3 H $$
$$ \int_{0}^{R} r^3 H dr = \left[ \frac{1}{4} r^4 H \right]_{0}^{R} = \frac{1}{4} R^4 H $$
$$ \int_{0}^{2\pi} \frac{1}{4} R^4 H d\theta = \frac{1}{4} R^4 H (2\pi) = \frac{\pi}{2} R^4 H \rho_0 $$

*(Note: The total mass of this cylinder is $m = \rho_0 (\pi R^2 H)$. Substituting this in, we get the famous physics formula $I_z = \frac{1}{2}mR^2$).*
