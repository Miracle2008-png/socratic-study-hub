# Kinematics

## 1. One-Dimensional Motion

Kinematics describes the motion of objects without considering the forces causing the motion. 

For a particle moving in one dimension with **constant acceleration** $a$, the equations of motion are:
1. $v = u + at$
2. $s = ut + \frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \left(\frac{u+v}{2}\right)t$

Where $u$ is initial velocity, $v$ is final velocity, $a$ is acceleration, $t$ is time, and $s$ is displacement.

For **variable acceleration**, we use calculus:
$$ v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} = v\frac{dv}{ds} $$
$$ s = \int v \, dt, \quad v = \int a \, dt $$

---

## 2. Projectile Motion

Projectile motion is a form of two-dimensional motion experienced by an object projected near the Earth's surface under the influence of gravity alone (ignoring air resistance).

Let the initial velocity be $u$ at an angle $\theta$ to the horizontal.
- **Initial Velocity Components:**
  $$ u_x = u \cos\theta, \quad u_y = u \sin\theta $$
- **Acceleration:**
  $$ a_x = 0, \quad a_y = -g $$
- **Equations of Trajectory:**
  $$ x(t) = (u \cos\theta)t $$
  $$ y(t) = (u \sin\theta)t - \frac{1}{2}gt^2 $$
  Eliminating $t$ yields the parabolic equation of trajectory:
  $$ y = x \tan\theta - \frac{gx^2}{2u^2 \cos^2\theta} $$
- **Key Formulas:**
  - Time of Flight: $T = \frac{2u \sin\theta}{g}$
  - Maximum Height: $H = \frac{u^2 \sin^2\theta}{2g}$
  - Horizontal Range: $R = \frac{u^2 \sin(2\theta)}{g}$

---

## 3. Relative Motion

The velocity of object $A$ relative to object $B$ is given by:
$$ \vec{v}_{AB} = \vec{v}_A - \vec{v}_B $$
Where $\vec{v}_A$ and $\vec{v}_B$ are the velocities of $A$ and $B$ relative to a common reference frame (usually the ground).

---

## 4. Solved Examples

### Example 4.1: Catching Up Problem
**Problem:** A speeder passes a parked police car at a constant velocity of $30 \text{ m/s}$. The police car starts from rest at the exact moment the speeder passes, accelerating uniformly at $3 \text{ m/s}^2$. How long does it take for the police car to catch the speeder, and what is the distance covered?

**Solution:**
1. Let the time elapsed be $t$.
2. Distance covered by the speeder (constant velocity):
   $$ s_s = 30t $$
3. Distance covered by the police car (constant acceleration):
   $$ s_p = u_pt + \frac{1}{2}a_pt^2 = 0 + \frac{1}{2}(3)t^2 = 1.5t^2 $$
4. To catch up, the distances must be equal:
   $$ 30t = 1.5t^2 $$
   Since $t > 0$, divide by $t$:
   $$ 1.5t = 30 \implies t = 20 \text{ s} $$
5. Calculate the distance covered:
   $$ s = 30 \times 20 = 600 \text{ m} $$

### Example 4.2: Rain and Umbrella
**Problem:** Rain is falling vertically at a speed of $4 \text{ m/s}$. A man is walking horizontally at a speed of $3 \text{ m/s}$. At what angle to the vertical should he hold his umbrella to protect himself from the rain?

**Solution:**
1. Velocity of rain $\vec{v}_r = -4\hat{j} \text{ m/s}$.
2. Velocity of man $\vec{v}_m = 3\hat{i} \text{ m/s}$.
3. We need the velocity of the rain relative to the man, $\vec{v}_{rm}$:
   $$ \vec{v}_{rm} = \vec{v}_r - \vec{v}_m = -4\hat{j} - 3\hat{i} = -3\hat{i} - 4\hat{j} $$
4. The direction of the relative velocity vector makes an angle $\theta$ with the vertical ($\hat{j}$-axis):
   $$ \tan\theta = \frac{|\vec{v}_{rm,x}|}{|\vec{v}_{rm,y}|} = \frac{3}{4} $$
5. Therefore, $\theta = \arctan(0.75) \approx 36.87^\circ$.
6. He should hold the umbrella at $36.87^\circ$ to the vertical, tilted forward in the direction he is walking.

### Example 4.3: Projectile on an Incline
**Problem:** A particle is projected from the base of an inclined plane of angle $\beta$ with an initial speed $u$ at an angle $\alpha$ to the horizontal. Find the range along the inclined plane.

**Solution:**
1. Align the coordinate system with the incline: let the x-axis be parallel to the incline upwards, and the y-axis be perpendicular to it.
2. Initial velocity components:
   $$ u_x = u \cos(\alpha - \beta), \quad u_y = u \sin(\alpha - \beta) $$
3. Acceleration components:
   $$ a_x = -g \sin\beta, \quad a_y = -g \cos\beta $$
4. Time of flight $T$ is determined by the y-motion ($y(T) = 0$):
   $$ 0 = u_y T - \frac{1}{2}g \cos\beta T^2 \implies T = \frac{2u \sin(\alpha - \beta)}{g \cos\beta} $$
5. Range along the incline $R$ is the x-position at time $T$:
   $$ R = u_x T - \frac{1}{2}g \sin\beta T^2 $$
6. Substitute $T$:
   $$ R = u \cos(\alpha - \beta) \left[ \frac{2u \sin(\alpha - \beta)}{g \cos\beta} \right] - \frac{1}{2}g \sin\beta \left[ \frac{2u \sin(\alpha - \beta)}{g \cos\beta} \right]^2 $$
7. Simplifying using trigonometric identities yields:
   $$ R = \frac{u^2}{g \cos^2\beta} \left[ \sin(2\alpha - \beta) - \sin\beta \right] $$
