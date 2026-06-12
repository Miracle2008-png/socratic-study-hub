# Concept Drills: Boundary Layer Theory

Test your conceptual understanding of boundary layer theory, thickness definitions, and separation.

## Conceptual Questions

1.  **True or False:** Inside the boundary layer, viscous forces are much larger than inertial forces.
2.  If the boundary layer thickness $\delta$ is the distance where $u = 0.99 U_\infty$, what is the velocity of the fluid exactly at the wall? Why?
3.  Why is the displacement thickness ($\delta^*$) always larger than the momentum thickness ($\theta$)?
4.  According to Prandtl's order-of-magnitude analysis, how does the pressure $p$ inside the boundary layer change as you move vertically away from the wall toward the free-stream?
5.  What physical mechanism allows a turbulent boundary layer to resist flow separation longer than a laminar boundary layer?
6.  If you are designing a teardrop-shaped submarine, why do you want the "tail" to taper very gradually rather than ending bluntly?

## Analytical Problems

1.  **Blasius Thickness:** For laminar flow over a flat plate, if the free-stream velocity is doubled, by what factor does the boundary layer thickness $\delta$ at a specific point $x$ change?
2.  **Blasius Shear:** For the same flat plate, if you move from $x = 1$ meter to $x = 4$ meters downstream, by what factor does the local wall shear stress $\tau_w$ change?
3.  **Displacement Thickness Calculation:** Suppose a simplified (and physically unrealistic) boundary layer has a linear velocity profile: $u(y) = U_\infty \cdot \frac{y}{\delta}$ for $0 \le y \le \delta$. Calculate the displacement thickness $\delta^*$ in terms of $\delta$.
4.  **Momentum Thickness Calculation:** For the same linear velocity profile $u(y) = U_\infty \cdot \frac{y}{\delta}$, calculate the momentum thickness $\theta$ in terms of $\delta$.
5.  **Shape Factor:** Calculate the Shape Factor $H$ for the linear profile described above. How does it compare to the theoretical Blasius laminar profile?

---

## Solutions

### Conceptual Solutions

1.  **False.** Inside the boundary layer, viscous forces and inertial forces are roughly *equal in magnitude*. This is the fundamental assumption Prandtl made to derive the equations. (Outside the layer, viscous forces are near zero).
2.  **Zero.** This is the No-Slip Condition. The fluid molecules immediately adjacent to the solid surface stick to it due to molecular friction.
3.  Displacement thickness represents the *mass* deficit, which is just $\int (1 - u/U) dy$. Momentum thickness is the momentum deficit, which includes an extra multiplier of $u/U$ in the integral $\int (u/U)(1 - u/U) dy$. Because $u/U$ is always between 0 and 1, multiplying by it makes the integral (and the resulting thickness) smaller.
4.  **It doesn't change.** The vertical pressure gradient $\partial p/\partial y$ is practically zero. The pressure anywhere inside the boundary layer is dictated entirely by the pressure of the inviscid flow right outside the layer at that same $x$-location.
5.  Turbulence is characterized by chaotic macroscopic mixing (eddies). This mixing constantly transports high-momentum fluid from the outer edges of the boundary layer directly down to the wall. This re-energizes the sluggish fluid near the wall, giving it enough momentum to push against an adverse pressure gradient longer before stopping and separating.
6.  A blunt end creates a severe, sudden Adverse Pressure Gradient. The boundary layer will instantly separate, creating a massive low-pressure wake and tremendous form drag. A gradual taper creates a mild adverse pressure gradient that the boundary layer can negotiate without separating.

### Analytical Solutions

1.  The formula is $\delta \propto 1 / \sqrt{U_\infty}$. If $U_\infty$ is multiplied by 2, $\delta$ is multiplied by $1/\sqrt{2}$. It becomes thinner.
2.  The formula is $\tau_w \propto 1 / \sqrt{x}$. If $x$ goes from 1 to 4, $\sqrt{x}$ goes from 1 to 2. Therefore, $\tau_w$ is halved (multiplied by $1/2$).
3.  $\delta^* = \int_{0}^{\delta} \left( 1 - \frac{u}{U_\infty} \right) \, dy = \int_{0}^{\delta} \left( 1 - \frac{y}{\delta} \right) \, dy$
    $= \left[ y - \frac{y^2}{2\delta} \right]_0^\delta = \delta - \frac{\delta^2}{2\delta} = \delta - \frac{\delta}{2} = \frac{1}{2} \delta$.
4.  $\theta = \int_{0}^{\delta} \frac{u}{U_\infty} \left( 1 - \frac{u}{U_\infty} \right) \, dy = \int_{0}^{\delta} \left(\frac{y}{\delta}\right) \left( 1 - \frac{y}{\delta} \right) \, dy = \int_{0}^{\delta} \left( \frac{y}{\delta} - \frac{y^2}{\delta^2} \right) \, dy$
    $= \left[ \frac{y^2}{2\delta} - \frac{y^3}{3\delta^2} \right]_0^\delta = \frac{\delta^2}{2\delta} - \frac{\delta^3}{3\delta^2} = \frac{\delta}{2} - \frac{\delta}{3} = \frac{1}{6} \delta$.
5.  $H = \frac{\delta^*}{\theta} = \frac{\delta/2}{\delta/6} = \frac{6}{2} = 3.0$.
    The Blasius profile has $H \approx 2.59$. A value of $3.0$ implies this linear profile represents a flow that has lost more momentum near the wall and is closer to separation than a healthy Blasius flow.
