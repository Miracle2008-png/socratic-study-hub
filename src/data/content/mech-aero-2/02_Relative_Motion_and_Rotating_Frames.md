# Relative Motion and Rotating Frames

## Overview

When analyzing motion in engineering systems — rotating machinery, aircraft maneuvering in turbulence, robotic manipulators, or satellites in orbit — it is often more natural to express quantities in a **non-inertial (rotating) reference frame** that moves with part of the system. The challenge is correctly accounting for the fictitious accelerations that arise from the frame's own rotation.

This topic bridges kinematics and dynamics: the kinematic results derived here feed directly into the equations of motion for complex aerospace systems (Chapter 6), gyroscopes, and control system design.

---

## The Transport Theorem

Let $\{x,y,z\}$ be a body-fixed frame rotating at angular velocity $\boldsymbol{\Omega}$ relative to an inertial frame $\{X,Y,Z\}$. For any vector $\mathbf{Q}$ expressed in the rotating frame, its time derivative as seen from the inertial frame is:

$$\left(\frac{d\mathbf{Q}}{dt}\right)_{inertial} = \left(\frac{d\mathbf{Q}}{dt}\right)_{rotating} + \boldsymbol{\Omega}\times\mathbf{Q}$$

This is the **Transport Theorem** (also called the **Basic Kinematic Equation**). The extra term $\boldsymbol{\Omega}\times\mathbf{Q}$ accounts for the fact that the frame's basis vectors themselves are rotating.

> **Physical interpretation:** Even if $\mathbf{Q}$ is constant in the rotating frame (so the local derivative is zero), it still changes in the inertial frame if $\boldsymbol{\Omega} \neq \mathbf{0}$.

---

## Velocity in a Rotating Frame

Let $P$ be a particle, $O'$ the origin of the rotating frame fixed to a moving body $B$, and $O$ the inertial origin. The position of $P$:

$$\mathbf{r}_P = \mathbf{r}_{O'} + \mathbf{r}_{P/O'}$$

Differentiating and applying the transport theorem:

$$\mathbf{v}_P^{(inertial)} = \mathbf{v}_{O'} + \boldsymbol{\Omega}\times\mathbf{r}_{P/O'} + \mathbf{v}_{rel}$$

where $\mathbf{v}_{rel} = \left(\dot{\mathbf{r}}_{P/O'}\right)_{rotating}$ is the velocity of $P$ **as measured in the rotating frame**. This is the velocity a pilot or sensor mounted on the rotating body would read.

---

## Acceleration in a Rotating Frame

Differentiating the velocity equation once more:

$$\mathbf{a}_P^{(inertial)} = \mathbf{a}_{O'} + \dot{\boldsymbol{\Omega}}\times\mathbf{r}_{P/O'} + \boldsymbol{\Omega}\times(\boldsymbol{\Omega}\times\mathbf{r}_{P/O'}) + 2\boldsymbol{\Omega}\times\mathbf{v}_{rel} + \mathbf{a}_{rel}$$

Each term has a name and physical meaning:

| Term | Name | Physical Meaning |
|---|---|---|
| $\mathbf{a}_{O'}$ | Frame acceleration | Acceleration of origin $O'$ |
| $\dot{\boldsymbol{\Omega}}\times\mathbf{r}_{P/O'}$ | Euler acceleration | Due to changing $\boldsymbol{\Omega}$ |
| $\boldsymbol{\Omega}\times(\boldsymbol{\Omega}\times\mathbf{r}_{P/O'})$ | Centripetal | Always toward rotation axis |
| $2\boldsymbol{\Omega}\times\mathbf{v}_{rel}$ | **Coriolis** | Due to motion within rotating frame |
| $\mathbf{a}_{rel}$ | Relative acceleration | As seen in rotating frame |

The **Coriolis acceleration** is the most counter-intuitive term. It is responsible for the deflection of projectiles on Earth, the spiraling of cyclones, and the load path instability in helicopter rotor blades.

---

## Worked Example 1 — Turntable with Sliding Collar

**Problem:** A collar slides outward along a radial arm at constant speed $\dot{r} = 1.5\ \text{m/s}$ (in the rotating frame). The arm rotates at constant $\Omega = 4\ \text{rad/s}$ (CCW). At the instant $r = 0.8\ \text{m}$, find the absolute velocity and absolute acceleration of the collar.

**Solution:**

In polar coordinates (which naturally suit rotating frames):

$$\mathbf{v}_{rel} = \dot{r}\hat{e}_r = 1.5\hat{e}_r\ \text{m/s}$$

$$\boldsymbol{\Omega} = \Omega\hat{k} = 4\hat{k}\ \text{rad/s}$$

**Absolute velocity:**

$$\mathbf{v}_{abs} = \mathbf{v}_{rel} + \boldsymbol{\Omega}\times\mathbf{r}$$

$$= 1.5\hat{e}_r + 4\hat{k}\times 0.8\hat{e}_r = 1.5\hat{e}_r + 3.2\hat{e}_\theta$$

$$|\mathbf{v}_{abs}| = \sqrt{1.5^2 + 3.2^2} = \sqrt{2.25 + 10.24} = \sqrt{12.49} \approx 3.53\ \text{m/s}$$

**Absolute acceleration:**

Since $\dot{r} = \text{const}$ and $\Omega = \text{const}$: $\ddot{r} = 0$, $\dot{\Omega} = 0$

$$\mathbf{a}_{rel} = 0, \quad \mathbf{a}_{centripetal} = -\Omega^2 r\hat{e}_r = -12.8\hat{e}_r\ \text{m/s}^2$$

$$\mathbf{a}_{Coriolis} = 2\boldsymbol{\Omega}\times\mathbf{v}_{rel} = 2(4)(1.5)\hat{e}_\theta = 12\hat{e}_\theta\ \text{m/s}^2$$

$$\mathbf{a}_{abs} = -12.8\hat{e}_r + 12\hat{e}_\theta$$

$$\boxed{|\mathbf{a}_{abs}| = \sqrt{12.8^2 + 12^2} = 17.54\ \text{m/s}^2}$$

---

## Worked Example 2 — Coriolis Effect on an Artillery Shell

**Problem:** An artillery shell is fired due North at latitude $\lambda = 45°\text{N}$ with muzzle velocity $v_0 = 800\ \text{m/s}$. Estimate the eastward Coriolis deflection after a flight time of $t = 60\ \text{s}$ (neglect Earth's curvature and vertical component of Coriolis).

**Solution:**

Earth's angular velocity: $\Omega_E = 7.292\times 10^{-5}\ \text{rad/s}$

Vertical component of $\boldsymbol{\Omega}_E$ at latitude $\lambda$:

$$\Omega_z = \Omega_E\sin\lambda = 7.292\times 10^{-5}\sin 45° = 5.155\times 10^{-5}\ \text{rad/s}$$

Coriolis acceleration (horizontal, eastward for northward motion in NH):

$$a_{Cor} = 2\Omega_z v_0 = 2(5.155\times 10^{-5})(800) = 0.0825\ \text{m/s}^2$$

Deflection over flight time:

$$d = \frac{1}{2}a_{Cor}t^2 = \frac{1}{2}(0.0825)(60)^2 = \frac{1}{2}(0.0825)(3600)$$

$$\boxed{d \approx 148.5\ \text{m}\ \text{(to the East)}}$$

This calculation is used in ballistic correction tables for long-range artillery and naval gunnery.

---

## Worked Example 3 — Helicopter Rotor Blade Analysis

**Problem:** A rotor blade of length $R = 6\ \text{m}$ rotates at $\Omega = 25\ \text{rad/s}$. A blade section at $r = 4\ \text{m}$ from the hub moves radially at $\dot{r} = 0$ (constant radius), but flaps vertically at $\dot{z}_{rel} = 0.8\ \text{m/s}$ in the rotating frame. Find the Coriolis acceleration on this section.

**Solution:**

$$\mathbf{v}_{rel} = \dot{z}_{rel}\hat{k} = 0.8\hat{k}\ \text{m/s}$$

$$\boldsymbol{\Omega} = 25\hat{k}_{rotor}\ \text{rad/s}$$

The Coriolis acceleration:

$$\mathbf{a}_{Cor} = 2\boldsymbol{\Omega}\times\mathbf{v}_{rel} = 2(25\hat{k})\times(0.8\hat{k}) = \mathbf{0}$$

Wait — since both $\boldsymbol{\Omega}$ and $\mathbf{v}_{rel}$ are in the same direction (axial), the cross product is zero! 

But if we include the lead-lag velocity $\dot{\psi}_{rel}\hat{e}_\theta$ due to blade flapping coupling:

$$\mathbf{a}_{Cor,\theta} = 2\Omega\dot{r}\hat{e}_\theta$$

For a blade with $\dot{r} = 0$ this term also vanishes — the dominant Coriolis effect in rotorcraft comes from **flapwise-lagwise coupling** when blades have both flap and lag degrees of freedom simultaneously.

---

## Engineering Application — Inertial Navigation Systems

INS in aircraft and missiles integrates accelerometer readings to find position. Because accelerometers measure **specific force** (acceleration minus gravity) in the body frame, the navigation computer must apply the rotating-frame equations to convert body-frame measurements to inertial-frame position increments. Failure to properly account for the Coriolis and centripetal terms causes **Schuler oscillations** with a period of ~84 minutes.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Inertial Frame {X,Y,Z}","description":"Newton's laws apply directly; fixed in space"}},{"id":"2","data":{"label":"Rotating Frame {x,y,z}","description":"Attached to moving/rotating body; angular velocity Ω"}},{"id":"3","data":{"label":"Transport Theorem","description":"(dQ/dt)_I = (dQ/dt)_R + Ω × Q"}},{"id":"4","data":{"label":"Absolute Velocity","description":"v_abs = v_O' + Ω × r + v_rel"}},{"id":"5","data":{"label":"Absolute Acceleration","description":"Five terms: frame + Euler + centripetal + Coriolis + relative"}},{"id":"6","data":{"label":"Coriolis Acceleration","description":"2Ω × v_rel; deflects motion in rotating frame"}},{"id":"7","data":{"label":"Aerospace Applications","description":"INS, rotor dynamics, orbital mechanics, missile guidance"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"transformation"},{"id":"e2","source":"2","target":"3","label":"applies"},{"id":"e3","source":"3","target":"4","label":"first derivative"},{"id":"e4","source":"4","target":"5","label":"second derivative"},{"id":"e5","source":"5","target":"6","label":"key term"},{"id":"e6","source":"5","target":"7","label":"used in"}]}
```
