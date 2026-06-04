# Circular Motion and Gravitation

## 1. Circular Motion

When a particle moves in a circular path of radius $r$ with speed $v$, its motion is described using angular kinematics:
- **Angular position:** $\theta$
- **Angular velocity:** $\omega = \frac{d\theta}{dt}$
- **Angular acceleration:** $\alpha = \frac{d\omega}{dt}$

Linear and angular quantities are related by:
$$ s = r\theta, \quad v = r\omega, \quad a_t = r\alpha $$

### Acceleration in Circular Motion
The total acceleration has two components:
1. **Centripetal (Radial) Acceleration ($a_c$):** Directed towards the center, changes the direction of velocity.
   $$ a_c = \frac{v^2}{r} = \omega^2 r $$
2. **Tangential Acceleration ($a_t$):** Directed along the tangent, changes the magnitude of velocity.
   $$ a_t = \frac{dv}{dt} = r\alpha $$
Total acceleration magnitude: $a = \sqrt{a_c^2 + a_t^2}$

---

## 2. Universal Gravitation

Newton's Law of Universal Gravitation states that the attractive force between two point masses $m_1$ and $m_2$ separated by a distance $r$ is:
$$ F = G \frac{m_1 m_2}{r^2} $$
where $G = 6.674 \times 10^{-11} \text{ N}\cdot\text{m}^2/\text{kg}^2$.

### Gravitational Field and Potential
- **Gravitational Field ($g$):** Force per unit mass.
  $$ g = \frac{GM}{r^2} $$
- **Gravitational Potential ($V$):** Potential energy per unit mass.
  $$ V = -\frac{GM}{r} $$
- **Gravitational Potential Energy ($U$):**
  $$ U = -\frac{GMm}{r} $$

---

## 3. Orbital Motion and Kepler's Laws

**Kepler's Laws of Planetary Motion:**
1. **Law of Orbits:** All planets move in elliptical orbits with the Sun at one focus.
2. **Law of Areas:** A line connecting a planet to the Sun sweeps out equal areas in equal times. (Conservation of Angular Momentum).
3. **Law of Periods:** The square of the orbital period is proportional to the cube of the semi-major axis.
   $$ T^2 = \frac{4\pi^2}{GM} a^3 $$

**Circular Orbits:**
For a satellite of mass $m$ in a circular orbit of radius $r$ around a mass $M$:
- Orbital speed: $v_{orb} = \sqrt{\frac{GM}{r}}$
- Kinetic Energy: $K = \frac{GMm}{2r}$
- Total Energy: $E = K + U = -\frac{GMm}{2r}$

**Escape Velocity:**
The minimum speed required to escape the gravitational pull of a planet of mass $M$ and radius $R$:
$$ v_{esc} = \sqrt{\frac{2GM}{R}} $$

---

## 4. Solved Examples

### Example 4.1: Conical Pendulum
**Problem:** A small mass $m$ is attached to a string of length $L$ and whirls in a horizontal circle at constant speed $v$. The string makes an angle $\theta$ with the vertical. Derive the expression for the speed $v$ and the period $T$.

**Solution:**
1. Identify forces acting on the mass:
   - Tension $T_s$ directed along the string.
   - Gravity $mg$ directed downwards.
2. Set up equations of motion. The vertical forces sum to zero, and the horizontal component of tension provides the centripetal force.
   - Vertical: $T_s \cos\theta - mg = 0 \implies T_s \cos\theta = mg$
   - Horizontal: $T_s \sin\theta = \frac{mv^2}{r}$
3. The radius of the circular path is $r = L \sin\theta$.
4. Divide the horizontal equation by the vertical equation:
   $$ \tan\theta = \frac{v^2}{rg} $$
5. Solve for $v$:
   $$ v = \sqrt{rg \tan\theta} = \sqrt{Lg \sin\theta \tan\theta} $$
6. The period $T$ is the circumference divided by the speed:
   $$ T = \frac{2\pi r}{v} = \frac{2\pi(L \sin\theta)}{\sqrt{Lg \sin\theta \tan\theta}} = 2\pi \sqrt{\frac{L \cos\theta}{g}} $$

### Example 4.2: Satellite Orbital Changes
**Problem:** A satellite of mass $m$ is initially in a circular orbit of radius $r_1$ around the Earth (mass $M$). It transfers to a larger circular orbit of radius $r_2$. Calculate the work done by the satellite's engines to achieve this transfer.

**Solution:**
1. The work done by the engines equals the change in the total mechanical energy of the satellite.
   $$ W = \Delta E = E_2 - E_1 $$
2. The total energy of a satellite in a circular orbit of radius $r$ is $E = -\frac{GMm}{2r}$.
3. Energy in the initial orbit:
   $$ E_1 = -\frac{GMm}{2r_1} $$
4. Energy in the final orbit:
   $$ E_2 = -\frac{GMm}{2r_2} $$
5. Calculate the change in energy:
   $$ W = \left(-\frac{GMm}{2r_2}\right) - \left(-\frac{GMm}{2r_1}\right) $$
   $$ W = \frac{GMm}{2} \left( \frac{1}{r_1} - \frac{1}{r_2} \right) $$
Since $r_2 > r_1$, the term in the parentheses is positive, confirming that positive work must be done by the engines to move to a higher orbit.
