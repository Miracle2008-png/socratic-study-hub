# Boundary Layer Thickness Definitions

The edge of a boundary layer is not a hard wall. The fluid velocity $u(y)$ asymptotically approaches the free-stream velocity $U_\infty$ as you move further away from the surface. Because of this asymptotic approach, we need rigorous mathematical definitions to define exactly "how thick" the boundary layer is.

## 1. Boundary Layer Disturbance Thickness ($\delta$)

The most intuitive definition is the disturbance thickness, usually denoted as $\delta$ or $\delta_{99}$.

It is defined as the distance $y$ from the solid surface where the local fluid velocity $u$ reaches 99% of the free-stream velocity $U_\infty$.

$$ \delta \text{ is the value of } y \text{ where } u(y) = 0.99 U_\infty $$

While easy to visualize, $\delta_{99}$ is somewhat arbitrary (why not 95% or 99.9%?) and is very difficult to measure accurately in a wind tunnel because the velocity curve is almost completely flat at that point.

## 2. Displacement Thickness ($\delta^*$)

A much more rigorous and physically meaningful definition is the displacement thickness, $\delta^*$.

Because the fluid inside the boundary layer is slowed down, the total mass flow rate near the wall is less than it would be if the flow were entirely inviscid. By conservation of mass, this forces the outer streamlines of the free-stream flow to deflect outward, away from the wall.

**Definition:** The displacement thickness $\delta^*$ is the distance by which the solid boundary would have to be displaced outward into an ideal, inviscid stream to produce the same reduction in mass flow rate that is caused by the real viscous boundary layer.

Mathematically, it is defined by equating the "missing" mass flow to a hypothetical block of missing inviscid flow:
$$ \rho U_\infty \delta^* = \int_{0}^{\infty} \rho (U_\infty - u) \, dy $$
Assuming incompressible flow (constant density $\rho$):
$$ \delta^* = \int_{0}^{\infty} \left( 1 - \frac{u}{U_\infty} \right) \, dy $$

**Application:** When aerodynamicists design a wind tunnel or an aircraft fuselage, they calculate the inviscid flow not around the physical object, but around a slightly larger "effective" object that has been "thickened" by adding $\delta^*$ to every surface.

## 3. Momentum Thickness ($\theta$)

Just as the boundary layer causes a deficit in mass flow, it also causes a deficit in momentum. This momentum loss is directly responsible for the skin friction drag on the surface.

**Definition:** The momentum thickness $\theta$ is the distance by which the solid boundary would have to be displaced outward to produce the same reduction in total momentum flux that is caused by the real viscous boundary layer.

The missing momentum flux is calculated as the product of the mass flow rate within the layer ($\rho u dy$) and the velocity deficit ($U_\infty - u$):
$$ \rho U_\infty^2 \theta = \int_{0}^{\infty} \rho u (U_\infty - u) \, dy $$
Assuming incompressible flow:
$$ \theta = \int_{0}^{\infty} \frac{u}{U_\infty} \left( 1 - \frac{u}{U_\infty} \right) \, dy $$

**Application:** The momentum thickness is incredibly important because it is directly linked to the drag force on the plate. By the momentum integral equation, the wall shear stress $\tau_w$ is directly proportional to the rate of growth of the momentum thickness:
$$ \tau_w = \rho U_\infty^2 \frac{d\theta}{dx} $$

## 4. The Shape Factor ($H$)

The ratio of the displacement thickness to the momentum thickness is called the Shape Factor, $H$:
$$ H = \frac{\delta^*}{\theta} $$

The Shape Factor provides a quick way to characterize the "shape" of the velocity profile.
*   For a typical **laminar** boundary layer (Blasius profile), $H \approx 2.59$.
*   For a typical **turbulent** boundary layer, the velocity profile is much "fuller" (more "U" shaped), resulting in a lower Shape Factor, typically $H \approx 1.3$ to $1.4$.
*   If $H$ increases significantly (approaching 3.5), it indicates the boundary layer is in severe danger of **separating** from the surface.
