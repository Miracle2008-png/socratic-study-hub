# Rotational Mechanics

## 1. Moment of Inertia

The Moment of Inertia ($I$) is the rotational analog of mass. For a system of discrete particles:
$$ I = \sum m_i r_i^2 $$
For a continuous rigid body:
$$ I = \int r^2 dm $$
where $r$ is the perpendicular distance from the axis of rotation.

### Theorems of Moment of Inertia
- **Parallel Axis Theorem:** $I = I_{cm} + Md^2$
- **Perpendicular Axis Theorem (for planar laminae):** $I_z = I_x + I_y$

---

## 2. Torque and Angular Momentum

**Torque ($\vec{\tau}$):** The rotational equivalent of force.
$$ \vec{\tau} = \vec{r} \times \vec{F} $$
Newton's Second Law for Rotation:
$$ \Sigma \vec{\tau} = I\vec{\alpha} $$

**Angular Momentum ($\vec{L}$):**
For a particle: $\vec{L} = \vec{r} \times \vec{p}$
For a rigid body rotating about a fixed axis: $L = I\omega$

Newton's Second Law in terms of angular momentum:
$$ \Sigma \vec{\tau} = \frac{d\vec{L}}{dt} $$

**Conservation of Angular Momentum:** If the net external torque on a system is zero, the total angular momentum is conserved.
$$ I_1 \omega_1 = I_2 \omega_2 $$

---

## 3. Rotational Kinetic Energy and Rolling

**Rotational Kinetic Energy:**
$$ K_{rot} = \frac{1}{2}I\omega^2 $$

**Rolling Motion (Without Slipping):**
Rolling is a combination of translation of the center of mass (CM) and rotation about the CM.
The condition for pure rolling is:
$$ v_{cm} = R\omega, \quad a_{cm} = R\alpha $$
Total Kinetic Energy of a rolling body:
$$ K_{total} = K_{trans} + K_{rot} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2 $$

---

## 4. Solved Examples

### Example 4.1: The Unwinding Yo-Yo
**Problem:** A solid cylinder (yo-yo) of mass $M$ and radius $R$ is wrapped with a string. The end of the string is held fixed, and the cylinder is allowed to fall. Find the downward acceleration of the cylinder and the tension in the string.

**Solution:**
1. Identify forces: Gravity ($Mg$) acts downwards at the CM. Tension ($T$) acts upwards at the edge (radius $R$).
2. Write the translational equation of motion (downward is positive):
   $$ Mg - T = Ma_{cm} $$
3. Write the rotational equation of motion about the CM:
   The only torque is provided by tension $T$.
   $$ \tau = TR = I_{cm}\alpha $$
4. For a solid cylinder, $I_{cm} = \frac{1}{2}MR^2$.
   $$ TR = \left(\frac{1}{2}MR^2\right)\alpha \implies T = \frac{1}{2}MR\alpha $$
5. Since the string does not slip, $a_{cm} = R\alpha$. Substitute this into the tension equation:
   $$ T = \frac{1}{2}M(R\alpha) = \frac{1}{2}Ma_{cm} $$
6. Substitute $T$ back into the translational equation:
   $$ Mg - \frac{1}{2}Ma_{cm} = Ma_{cm} $$
   $$ Mg = \frac{3}{2}Ma_{cm} \implies a_{cm} = \frac{2}{3}g $$
7. Find the tension:
   $$ T = \frac{1}{2}M\left(\frac{2}{3}g\right) = \frac{1}{3}Mg $$

### Example 4.2: Cylinder Rolling Down an Incline
**Problem:** A solid uniform cylinder of mass $M$ and radius $R$ rolls without slipping down an incline of angle $\theta$. Find its acceleration and the minimum coefficient of static friction required to prevent slipping.

**Solution:**
1. Identify forces: Gravity ($Mg$) downwards, Normal force ($N$) perpendicular to the incline, static friction ($f_s$) up the incline.
2. Equations of motion:
   - Translation parallel to incline: $Mg \sin\theta - f_s = Ma_{cm}$
   - Translation perpendicular to incline: $N = Mg \cos\theta$
   - Rotation about CM: $f_s R = I_{cm}\alpha$
3. Use $I_{cm} = \frac{1}{2}MR^2$ and the rolling condition $a_{cm} = R\alpha$:
   $$ f_s R = \left(\frac{1}{2}MR^2\right)\left(\frac{a_{cm}}{R}\right) \implies f_s = \frac{1}{2}Ma_{cm} $$
4. Substitute $f_s$ into the first equation:
   $$ Mg \sin\theta - \frac{1}{2}Ma_{cm} = Ma_{cm} $$
   $$ Mg \sin\theta = \frac{3}{2}Ma_{cm} \implies a_{cm} = \frac{2}{3}g \sin\theta $$
5. Determine the required friction force:
   $$ f_s = \frac{1}{2}M\left(\frac{2}{3}g \sin\theta\right) = \frac{1}{3}Mg \sin\theta $$
6. To prevent slipping, $f_s \le \mu_s N$:
   $$ \frac{1}{3}Mg \sin\theta \le \mu_s (Mg \cos\theta) $$
   $$ \mu_s \ge \frac{1}{3} \tan\theta $$
The minimum coefficient of static friction required is $\mu_s = \frac{1}{3} \tan\theta$.
