# Work, Energy, and Power

## 1. Work

Work done by a force $\vec{F}$ over a displacement $d\vec{r}$ is given by the dot product:
$$ dW = \vec{F} \cdot d\vec{r} $$

For a constant force over a finite displacement $\Delta\vec{r}$:
$$ W = \vec{F} \cdot \Delta\vec{r} = |\vec{F}||\Delta\vec{r}| \cos\theta $$
where $\theta$ is the angle between the force and displacement vectors.

For a variable force in 1D:
$$ W = \int_{x_i}^{x_f} F(x) dx $$

---

## 2. Energy and the Work-Energy Theorem

**Kinetic Energy (KE):** The energy associated with motion.
$$ K = \frac{1}{2}mv^2 $$

**Work-Energy Theorem:** The net work done on an object equals its change in kinetic energy.
$$ W_{net} = \Delta K = K_f - K_i $$

**Potential Energy (PE):** The energy associated with position in a conservative force field.
- Gravitational Potential Energy: $U_g = mgh$
- Elastic Potential Energy (Spring): $U_s = \frac{1}{2}kx^2$

For conservative forces, the work done is the negative change in potential energy:
$$ W_c = -\Delta U $$

**Conservation of Mechanical Energy:**
If only conservative forces do work on a system, total mechanical energy $E = K + U$ is conserved.
$$ K_i + U_i = K_f + U_f $$

---

## 3. Power

Power is the rate at which work is done or energy is transferred.
Average power: $P_{avg} = \frac{W}{\Delta t}$
Instantaneous power: 
$$ P = \frac{dW}{dt} = \vec{F} \cdot \vec{v} $$

---

## 4. Solved Examples

### Example 4.1: Block on a Rough Incline with a Spring
**Problem:** A block of mass $m = 2 \text{ kg}$ starts from rest at the top of a rough inclined plane of angle $\theta = 30^\circ$ and length $d = 5 \text{ m}$. The coefficient of kinetic friction is $\mu_k = 0.2$. At the bottom of the incline, the block collides with an uncompressed ideal spring of constant $k = 400 \text{ N/m}$. Find the maximum compression $x$ of the spring.

**Solution:**
1. Use the Work-Energy Theorem: $W_{net} = \Delta K = 0$ (starts from rest, ends momentarily at rest at maximum compression).
2. Work done by gravity:
   $$ W_g = mgh = mg(d + x)\sin\theta $$
   (The block descends an additional vertical distance $x\sin\theta$ while compressing the spring).
3. Work done by friction:
   Normal force $N = mg\cos\theta$. Frictional force $f_k = \mu_k mg\cos\theta$.
   Friction acts over the entire path $d + x$.
   $$ W_f = -f_k(d + x) = -\mu_k mg\cos\theta(d + x) $$
4. Work done by the spring:
   $$ W_s = -\frac{1}{2}kx^2 $$
5. Sum of works equals zero:
   $$ mg(d + x)\sin\theta - \mu_k mg\cos\theta(d + x) - \frac{1}{2}kx^2 = 0 $$
6. Group terms:
   $$ \frac{1}{2}kx^2 - [mg(\sin\theta - \mu_k \cos\theta)]x - [mgd(\sin\theta - \mu_k \cos\theta)] = 0 $$
7. Calculate coefficients:
   $$ mg(\sin 30^\circ - 0.2 \cos 30^\circ) = (2)(9.81)(0.5 - 0.2(0.866)) = 19.62(0.5 - 0.1732) = 19.62(0.3268) \approx 6.41 \text{ N} $$
   Constant term: $6.41 \times 5 = 32.05 \text{ J}$.
8. Formulate the quadratic equation for $x$:
   $$ 200x^2 - 6.41x - 32.05 = 0 $$
9. Solve for $x$ using the quadratic formula:
   $$ x = \frac{6.41 \pm \sqrt{6.41^2 - 4(200)(-32.05)}}{2(200)} $$
   $$ x = \frac{6.41 \pm \sqrt{41.09 + 25640}}{400} \approx \frac{6.41 \pm 160.25}{400} $$
   Taking the positive root:
   $$ x \approx \frac{166.66}{400} \approx 0.417 \text{ m} $$
The maximum compression is approximately $41.7 \text{ cm}$.

### Example 4.2: Variable Force Integration
**Problem:** A particle is subjected to a one-dimensional variable force $F(x) = (3x^2 - 2x + 5) \text{ N}$. Calculate the work done by this force as the particle moves from $x = 1 \text{ m}$ to $x = 3 \text{ m}$.

**Solution:**
1. The work done by a variable force is $W = \int_{x_1}^{x_2} F(x) dx$.
2. Set up the integral:
   $$ W = \int_{1}^{3} (3x^2 - 2x + 5) dx $$
3. Integrate the polynomial:
   $$ W = \left[ x^3 - x^2 + 5x \right]_{1}^{3} $$
4. Evaluate at the upper and lower limits:
   Upper limit ($x=3$): $(3)^3 - (3)^2 + 5(3) = 27 - 9 + 15 = 33$
   Lower limit ($x=1$): $(1)^3 - (1)^2 + 5(1) = 1 - 1 + 5 = 5$
5. Calculate the difference:
   $$ W = 33 - 5 = 28 \text{ J} $$
The work done by the force is $28 \text{ Joules}$.
