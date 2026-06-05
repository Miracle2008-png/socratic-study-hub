# Center of Mass and Centroids

The **center of mass** is the point at which an object would balance perfectly if it were supported there. For an object with uniform density, the center of mass is purely a function of its geometry and is called the **centroid**.

## 1. Discrete Point Masses (1D)

Imagine a seesaw with masses sitting at different locations.
*   Masses: $m_1, m_2, \dots, m_n$
*   Positions along the x-axis: $x_1, x_2, \dots, x_n$

The **Moment** ($M$) of a mass about the origin is its mass times its position: $M = m \cdot x$. It measures the tendency of the mass to rotate the system.

To balance the seesaw, the sum of the moments must equal the total mass times the center of mass ($\bar{x}$).
$$ \bar{x} \cdot \sum m_i = \sum (m_i \cdot x_i) $$
$$ \bar{x} = \frac{M_{total}}{m_{total}} = \frac{\sum m_i x_i}{\sum m_i} $$

## 2. Continuous 1D Rods

What if the mass is not in discrete chunks, but spread out continuously along a rod of length $L$?

Instead of a sum $\sum$, we use an integral $\int$.
Let the linear mass density (mass per unit length) at position $x$ be $\rho(x)$.
*   A tiny slice of the rod has length $dx$.
*   The mass of this slice is $dm = \rho(x) \, dx$.
*   The total mass is $M = \int_{0}^{L} \rho(x) \, dx$.
*   The total moment about the origin is $\int_{0}^{L} x \cdot \rho(x) \, dx$.

The center of mass is:
$$ \bar{x} = \frac{\int_{0}^{L} x \rho(x) \, dx}{\int_{0}^{L} \rho(x) \, dx} $$

## 3. Centroids of 2D Regions (Planar Laminas)

Consider a flat, thin plate (a lamina) covering a region in the xy-plane bounded by $y = f(x)$, $y = 0$, $x = a$, and $x = b$. Assume the density $\rho$ is constant everywhere. Because density is constant, it will cancel out of the equations, so we are essentially finding the geometric center (the centroid).

We need to find two coordinates: $(\bar{x}, \bar{y})$.

**Finding $\bar{x}$:**
We break the region into vertical strips of width $dx$ and height $f(x)$.
*   The area (mass) of one strip is $dA = f(x) \, dx$.
*   The x-coordinate of the centroid of this thin vertical strip is simply $x$.
*   The moment about the y-axis ($M_y$) is $\int x \, dA = \int x f(x) \, dx$.

$$ \bar{x} = \frac{M_y}{A} = \frac{\int_{a}^{b} x f(x) \, dx}{\int_{a}^{b} f(x) \, dx} $$

**Finding $\bar{y}$:**
Take the same vertical strip of width $dx$ and height $f(x)$.
*   The area is still $dA = f(x) \, dx$.
*   What is the y-coordinate of the centroid of this specific vertical strip? Because it's a rectangle from $y=0$ to $y=f(x)$, its center is exactly halfway up: $\frac{1}{2}f(x)$.
*   The moment about the x-axis ($M_x$) is $\int \tilde{y} \, dA = \int \left[\frac{1}{2}f(x)\right] [f(x) \, dx] = \frac{1}{2} \int [f(x)]^2 \, dx$.

$$ \bar{y} = \frac{M_x}{A} = \frac{\frac{1}{2} \int_{a}^{b} [f(x)]^2 \, dx}{\int_{a}^{b} f(x) \, dx} $$

## 4. Region bounded by two curves

If the lamina is bounded between a top curve $f(x)$ and a bottom curve $g(x)$:
*   The height of the vertical strip is $f(x) - g(x)$.
*   The y-center of the vertical strip is halfway between them: $\frac{f(x) + g(x)}{2}$.

Therefore:
*   Area $A = \int_{a}^{b} [f(x) - g(x)] \, dx$
*   $M_y = \int_{a}^{b} x [f(x) - g(x)] \, dx \implies \bar{x} = M_y / A$
*   $M_x = \int_{a}^{b} \left[\frac{f(x) + g(x)}{2}\right] [f(x) - g(x)] \, dx = \frac{1}{2} \int_{a}^{b} ([f(x)]^2 - [g(x)]^2) \, dx \implies \bar{y} = M_x / A$
