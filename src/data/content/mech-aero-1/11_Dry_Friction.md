# Dry Friction

Whenever two rough solid surfaces are in contact and a tendency for sliding exists, a tangential force known as **friction** develops that opposes the motion. 

In statics, we are concerned with **dry friction** (Coulomb friction), which occurs between non-lubricated surfaces.

## 1. The Mechanism of Dry Friction

Microscopically, surfaces are rough. Contact occurs only at discrete high points (asperities). When a normal force $N$ pushes the surfaces together, these asperities interlock. A tangential force $P$ must overcome this interlocking to cause sliding.

As the pulling force $P$ increases:
1. **Static Region:** The friction force $F$ increases equally to balance $P$ ($F = P$). The body remains perfectly still. 
2. **Impending Motion:** The friction force reaches its maximum possible limit, $F_s$. The body is on the absolute verge of slipping.
3. **Kinetic Region:** Once $P$ exceeds $F_s$, the interlocking breaks, the body slides, and the friction force drops slightly to a constant kinetic value, $F_k$.

## 2. Laws of Dry Friction

Experimental observations lead to the following empirical laws:

- **Maximum Static Friction:** The maximum friction force before slipping is proportional to the normal force $N$.
  $$ F_s = \mu_s N $$
  where $\mu_s$ is the **coefficient of static friction**.

- **Kinetic Friction:** Once sliding occurs, the friction force is constant and proportional to the normal force.
  $$ F_k = \mu_k N $$
  where $\mu_k$ is the **coefficient of kinetic friction**. Typically, $\mu_k < \mu_s$.

*Crucial Note:* The equation $F = \mu_s N$ is ONLY valid when motion is strictly *impending*. If the body is in stable equilibrium and not about to slip, $F$ must be found purely from the equations of equilibrium ($\sum F_x = 0$), and $F < \mu_s N$.

## 3. Angle of Friction

If we combine the normal force $N$ and the friction force $F$ into a single resultant contact force $\mathbf{R}$, the angle $\phi_s$ that $\mathbf{R}$ makes with the normal is called the **angle of static friction**.

At impending motion:
$$ \tan \phi_s = \frac{F_s}{N} = \frac{\mu_s N}{N} = \mu_s $$
$$ \phi_s = \tan^{-1}(\mu_s) $$

This defines a "cone of friction." If the resultant line of action falls inside the cone, the object will not slip.

## 4. Tipping vs. Slipping

When a force is applied at a height above the surface, a rigid block can either slip or tip over. 

- To check for **slipping**, assume equilibrium and solve for $F$. If $F > \mu_s N$, the assumption is false and it slips.
- To check for **tipping**, assume equilibrium and solve for the location of the normal force $N$ (let it act at a distance $x$ from the centerline to counteract the moment). If $x$ falls outside the physical base of the block, the assumption is false and it tips.

The mode of failure (slipping or tipping) that requires the *smaller* applied force $P$ is the one that will actually occur.
