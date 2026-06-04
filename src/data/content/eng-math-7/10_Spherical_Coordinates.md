# 10. Triple Integrals in Spherical Coordinates

When a 3D solid is perfectly spherical or exhibits point-symmetry around the origin (such as spheres and cones originating from the origin), even cylindrical coordinates can become cumbersome. 

In these cases, we use **Spherical Coordinates** $(\rho, \theta, \phi)$.

### Understanding the Coordinates
Instead of moving along grids or cylinders, we describe a point by its distance and two angles:
*   $\rho$ (rho): The straight-line distance from the origin to the point in 3D space ($\rho \ge 0$).
*   $\theta$ (theta): The same angle as in polar/cylindrical coordinates. It sweeps around the z-axis on the xy-plane ($0 \le \theta \le 2\pi$).
*   $\phi$ (phi): The angle dropping down from the positive z-axis. ($\phi = 0$ is the North Pole, $\phi = \pi/2$ is the Equator, $\phi = \pi$ is the South Pole). Therefore, $0 \le \phi \le \pi$.

### The Coordinate Transformation
To convert between Spherical and Cartesian:
*   $x = \rho \sin(\phi) \cos(\theta)$
*   $y = \rho \sin(\phi) \sin(\theta)$
*   $z = \rho \cos(\phi)$
*   $\rho^2 = x^2 + y^2 + z^2$

### The Volume Element $dV$
The volume of a tiny spherical wedge expands as you move further out ($\rho^2$) and is largest at the equator ($\sin\phi$). The mathematical Jacobian is complex, but the result is a formula you must memorize:
$$ dV = \rho^2 \sin(\phi) \, d\rho \, d\phi \, d\theta $$

**NEVER FORGET the $\rho^2 \sin(\phi)$ multiplier!**

### Spherical Integral Setup
$$ \iiint_E f(x,y,z) dV = \int_{\alpha}^{\beta} \int_{c}^{d} \int_{g_1(\theta,\phi)}^{g_2(\theta,\phi)} f(\rho, \theta, \phi) \, \rho^2 \sin(\phi) \, d\rho \, d\phi \, d\theta $$

### Worked Example: Volume of a Sphere
**Problem:** Prove that the volume of a sphere of radius $R$ is $\frac{4}{3}\pi R^3$ using a triple integral.

**Step 1: Define the Limits**
A solid sphere is the simplest possible shape in this system. All limits are constants!
*   Distance goes from origin to edge: $0 \le \rho \le R$
*   Angle drops from North Pole to South Pole: $0 \le \phi \le \pi$
*   Angle sweeps all the way around: $0 \le \theta \le 2\pi$

**Step 2: Set up the Integral**
$$ V = \int_{0}^{2\pi} \int_{0}^{\pi} \int_{0}^{R} 1 \cdot \left(\rho^2 \sin\phi\right) d\rho \, d\phi \, d\theta $$

**Step 3: Evaluate Inner Integral ($d\rho$)**
$$ \int_{0}^{R} \rho^2 \sin\phi \, d\rho = \left[ \frac{1}{3}\rho^3 \sin\phi \right]_{\rho=0}^{\rho=R} = \frac{1}{3}R^3 \sin\phi $$

**Step 4: Evaluate Middle Integral ($d\phi$)**
$$ \int_{0}^{\pi} \frac{1}{3}R^3 \sin\phi \, d\phi = \left[ -\frac{1}{3}R^3 \cos\phi \right]_{0}^{\pi} $$
Plug in $\phi=\pi$: $-\frac{1}{3}R^3(-1) = \frac{1}{3}R^3$
Plug in $\phi=0$: $-\frac{1}{3}R^3(1) = -\frac{1}{3}R^3$
Subtract: $\frac{1}{3}R^3 - (-\frac{1}{3}R^3) = \frac{2}{3}R^3$

**Step 5: Evaluate Outer Integral ($d\theta$)**
$$ \int_{0}^{2\pi} \frac{2}{3}R^3 \, d\theta = \left[ \frac{2}{3}R^3 \theta \right]_{0}^{2\pi} = \frac{2}{3}R^3 (2\pi) = \mathbf{\frac{4}{3}\pi R^3} $$
The proof is complete.
