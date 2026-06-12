# Work-Energy Methods for Rigid Bodies

## Overview

The work-energy theorem for rigid bodies provides a powerful scalar alternative to the Newton-Euler vector equations. Rather than solving for accelerations at each instant, we relate the **total kinetic energy** of a body to the **net work** done by all forces and moments, jumping directly between two configurations. This is especially efficient when the problem involves displacement, speed, or power — without needing reactions at smooth supports.

Work-energy methods are the foundation of energy-based structural analysis, aerospace vehicle performance calculations, and optimal trajectory planning.

---

## Kinetic Energy of a Rigid Body

For a rigid body in planar motion, the total kinetic energy is:

$$T = \frac{1}{2}m v_G^2 + \frac{1}{2}\bar{I}\omega^2$$

The first term is the **translational KE** of the center of mass, and the second is the **rotational KE** about the center of mass. These two components are independent and additive — a profound result that follows from König's theorem.

For **rotation about a fixed axis** through point $O$:

$$T = \frac{1}{2}I_O\omega^2$$

This is because the translational and rotational contributions merge when the body pivots about $O$:

$$\frac{1}{2}mv_G^2 + \frac{1}{2}\bar{I}\omega^2 = \frac{1}{2}(md^2 + \bar{I})\omega^2 = \frac{1}{2}I_O\omega^2$$

---

## Work Done on a Rigid Body

### Work by a Force

$$U_F = \int_{s_1}^{s_2} \mathbf{F}\cdot d\mathbf{r}_P$$

where $\mathbf{r}_P$ is the displacement of the point of application of $\mathbf{F}$.

### Work by a Couple (Moment)

$$U_M = \int_{\theta_1}^{\theta_2} M\,d\theta$$

For a constant couple $M_0$: $U_M = M_0(\theta_2 - \theta_1)$.

### Work Done by Non-Working Forces

- **Reactions at smooth (frictionless) pins or rollers:** No work (no displacement at the point of application or force perpendicular to motion).
- **Friction at a rolling-without-slip contact:** No work (instantaneous velocity of contact point is zero).
- **Internal forces between rigid body parts:** No net work (by Newton's third law, equal and opposite forces on same deformation → zero net work for rigid bodies).

These zero-work forces are precisely what make the energy method so powerful — we can ignore them entirely.

---

## The Work-Energy Theorem

$$T_2 - T_1 = \sum U_{1\to2}$$

or equivalently:

$$T_1 + \sum U_{1\to2} = T_2$$

The left side tracks where energy comes from; the right side where it goes.

---

## Potential Energy and Conservation of Energy

If all forces are conservative (gravity, springs), define:

$$V = V_{gravity} + V_{spring} = mgy_G + \frac{1}{2}ks^2$$

Conservation of energy:

$$T_1 + V_1 = T_2 + V_2$$

This is the most efficient formulation when no non-conservative forces (friction, applied variable forces) act.

---

## Worked Example 1 — Flywheel Spin-Up

**Problem:** A flywheel ($m = 120\ \text{kg}$, $R = 0.4\ \text{m}$, modeled as a solid disk) is brought from rest to $1800\ \text{rpm}$ by a constant torque $M = 250\ \text{N·m}$. Find the number of revolutions required.

**Solution:**

Final angular velocity: $\omega_2 = 1800 \times \frac{2\pi}{60} = 60\pi\ \text{rad/s}$

Moment of inertia: $I = \frac{1}{2}mR^2 = \frac{1}{2}(120)(0.4)^2 = 9.6\ \text{kg·m}^2$

Kinetic energy gained (from rest):

$$T_2 = \frac{1}{2}I\omega_2^2 = \frac{1}{2}(9.6)(60\pi)^2 = \frac{1}{2}(9.6)(3553) = 17054\ \text{J}$$

Work-energy theorem: $U = T_2 - T_1 = 17054 - 0$

Work by constant torque: $U = M\Delta\theta$

$$\Delta\theta = \frac{U}{M} = \frac{17054}{250} = 68.2\ \text{rad}$$

Number of revolutions:

$$n = \frac{\Delta\theta}{2\pi} = \frac{68.2}{2\pi} \approx \boxed{10.85\ \text{revolutions}}$$

---

## Worked Example 2 — Compound Pendulum Released from Horizontal

**Problem:** A slender uniform rod ($m = 4\ \text{kg}$, $L = 1.2\ \text{m}$) is released from horizontal position and pivots about a pin at one end. Find its angular velocity when it reaches the vertical (hanging) position.

**Solution:**

Using conservation of energy. Set datum at the pivot:

State 1 (horizontal): $T_1 = 0$ (released from rest), center of mass is at the pivot level:

$$V_1 = mg(0) = 0 \qquad [\text{G is at height 0 from pivot}]$$

Wait — G is at $L/2 = 0.6\ \text{m}$ horizontally from pivot but **same height** as pivot when rod is horizontal. So $V_1 = -mg \cdot 0 = 0$.

Actually, taking the pivot as datum: when horizontal, G is at the same height as pivot → $y_{G1} = 0$. When vertical (hanging down), G is at $y_{G2} = -L/2 = -0.6\ \text{m}$.

$$V_1 = mgy_{G1} = 0, \quad V_2 = mgy_{G2} = 4(9.81)(-0.6) = -23.54\ \text{J}$$

$$I_O = \frac{1}{3}mL^2 = \frac{1}{3}(4)(1.44) = 1.92\ \text{kg·m}^2$$

$$T_2 = \frac{1}{2}I_O\omega^2 = \frac{1}{2}(1.92)\omega^2 = 0.96\omega^2$$

Energy conservation:

$$0 + 0 = 0.96\omega^2 + (-23.54)$$

$$\omega^2 = \frac{23.54}{0.96} = 24.52$$

$$\boxed{\omega = 4.95\ \text{rad/s}}$$

---

## Worked Example 3 — Disk Rolling Down a Spring-Loaded Ramp

**Problem:** A solid disk ($m = 5\ \text{kg}$, $R = 0.12\ \text{m}$) rolls without slip from rest down a $20°$ ramp for $s = 1.5\ \text{m}$ before engaging a spring ($k = 2000\ \text{N/m}$). Find the maximum spring compression $\delta$.

**Solution:**

At maximum compression, the disk momentarily stops: $T_{final} = 0$.

Height dropped by G over distance $s$: $h = s\sin 20° = 1.5(0.342) = 0.513\ \text{m}$

At the spring contact point, additional height drop: $h_2 = \delta\sin 20°$

Total height drop: $h_{total} = (s + \delta)\sin 20°$

Energy conservation (no slip → no friction work):

$$0 + mg(s+\delta)\sin 20° = 0 + \frac{1}{2}k\delta^2$$

$$5(9.81)(1.5 + \delta)(0.342) = \frac{1}{2}(2000)\delta^2$$

$$16.79 + 16.79\delta/1.5 \cdot 1.5 = 1000\delta^2$$

$$16.79(1.5 + \delta) = 1000\delta^2$$

$$25.185 + 16.79\delta = 1000\delta^2$$

$$1000\delta^2 - 16.79\delta - 25.185 = 0$$

Quadratic formula: $\delta = \frac{16.79 + \sqrt{16.79^2 + 4(1000)(25.185)}}{2000}$

$$= \frac{16.79 + \sqrt{282 + 100740}}{2000} = \frac{16.79 + 317.8}{2000}$$

$$\boxed{\delta \approx 0.167\ \text{m} = 16.7\ \text{cm}}$$

---

## Power and Efficiency

**Power** delivered by a force: $P = \mathbf{F}\cdot\mathbf{v}$

**Power** delivered by a couple: $P = M\omega$

**Mechanical efficiency:** $\eta = P_{out}/P_{in}$

For a gearbox with friction losses: $P_{out} = \eta P_{in}$, where $\eta$ typically ranges from 0.94–0.98 for helical gears and 0.50–0.90 for worm gears.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Work-Energy Theorem","description":"T₂ - T₁ = ΣU₁→₂; scalar equation, avoids reactions"}},{"id":"2","data":{"label":"Kinetic Energy","description":"T = ½mv_G² + ½Ī ω² (general planar)"}},{"id":"3","data":{"label":"Work by Forces","description":"U = ∫F·dr at point of application"}},{"id":"4","data":{"label":"Work by Couples","description":"U = ∫M dθ; constant M: U = M·Δθ"}},{"id":"5","data":{"label":"Zero-Work Forces","description":"Smooth pins, rolling contact friction, internal forces"}},{"id":"6","data":{"label":"Conservative Forces","description":"Gravity: V = mgy_G; Spring: V = ½ks²"}},{"id":"7","data":{"label":"Energy Conservation","description":"T₁ + V₁ = T₂ + V₂ when no non-conservative work"}},{"id":"8","data":{"label":"Power and Efficiency","description":"P = F·v or M·ω; η = P_out/P_in"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"uses"},{"id":"e2","source":"1","target":"3","label":"includes"},{"id":"e3","source":"1","target":"4","label":"includes"},{"id":"e4","source":"3","target":"5","label":"identify zero-work"},{"id":"e5","source":"6","target":"7","label":"leads to"},{"id":"e6","source":"7","target":"1","label":"special case of"},{"id":"e7","source":"1","target":"8","label":"time-rate form"}]}
```
