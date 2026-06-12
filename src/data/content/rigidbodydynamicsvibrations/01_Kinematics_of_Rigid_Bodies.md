# Kinematics of Rigid Bodies

## Overview

Rigid body kinematics describes the geometry of motion without regard to the forces that cause it. A **rigid body** is an idealization where the distance between any two particles remains constant throughout motion — a foundational assumption underlying structural analysis, mechanism design, and flight dynamics. For real engineering systems such as satellite booms, aircraft control surfaces, and robotic arms, this assumption holds whenever elastic deformations are negligible compared to gross displacements.

Every motion of a rigid body can be decomposed into a **translation** of a reference point and a **rotation** about an axis through that point. This decomposition is not merely convenient — it is provably unique and forms the mathematical backbone of the Chasles' theorem in 3D.

---

## Degrees of Freedom

A free rigid body in the plane has **3 degrees of freedom** (2 translational, 1 rotational). In three-dimensional space it has **6 DOF** (3 translational, 3 rotational). Mechanical constraints reduce these: a pin joint removes 2 planar DOF, a slider removes 1, and a fixed support removes all 3.

---

## Velocity Analysis of a Rigid Body

For a body rotating with angular velocity $\omega$ about a fixed axis, the velocity of any point $P$ at position vector $\mathbf{r}_{P/O}$ from the axis is:

$$\mathbf{v}_P = \boldsymbol{\omega} \times \mathbf{r}_{P/O}$$

For general planar motion, the velocity of point $B$ relative to point $A$ on the same rigid body is:

$$\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega} \times \mathbf{r}_{B/A}$$

This is the **rigid body velocity equation** — perhaps the most used relation in planar kinematics.

### Instantaneous Center of Zero Velocity (IC)

Every planar rigid body in general motion has an **instantaneous center** $I$ such that every point on the body appears to rotate about $I$ at that instant. The velocity of any point $P$ is:

$$v_P = \omega \cdot r_{P/I}$$

where $r_{P/I}$ is the distance from $P$ to the IC. Locating the IC is often the fastest route to finding velocity ratios in mechanisms.

---

## Acceleration Analysis

The acceleration of point $B$ relative to point $A$ on a rigid body undergoing planar motion is:

$$\mathbf{a}_B = \mathbf{a}_A + \boldsymbol{\alpha} \times \mathbf{r}_{B/A} - \omega^2 \mathbf{r}_{B/A}$$

The term $\boldsymbol{\alpha} \times \mathbf{r}_{B/A}$ is the **tangential** (Euler) acceleration — it changes the speed of $B$ relative to $A$. The term $-\omega^2 \mathbf{r}_{B/A}$ is the **centripetal** (normal) acceleration — it always points from $B$ toward $A$ and changes direction only.

> **Key insight:** The IC concept does **not** extend to accelerations. The instantaneous center of zero acceleration is a distinct point (the **inflection pole**) and is rarely used in practice.

---

## Worked Example 1 — Velocity of a Slider-Crank Mechanism

**Problem:** A slider-crank with crank length $r = 0.15\ \text{m}$ and connecting rod length $\ell = 0.40\ \text{m}$ rotates at $\omega_{crank} = 300\ \text{rpm}$. At the instant the crank makes $\theta = 45°$ with the horizontal, find the velocity of the piston.

**Solution:**

Convert angular speed: $\omega = 300 \times \frac{2\pi}{60} = 10\pi\ \text{rad/s} \approx 31.42\ \text{rad/s}$

Velocity of the crank pin $A$ (tip of crank):

$$\mathbf{v}_A = \omega r = 31.42 \times 0.15 = 4.71\ \text{m/s}$$

Direction: perpendicular to crank, so at $\theta + 90° = 135°$ from horizontal.

$$v_{Ax} = -4.71\sin 45° = -3.33\ \text{m/s}, \quad v_{Ay} = 4.71\cos 45° = 3.33\ \text{m/s}$$

The piston moves horizontally only ($v_{Bx}$ unknown, $v_{By} = 0$). Let $\phi$ be the connecting rod angle:

$$\sin\phi = \frac{r\sin\theta}{\ell} = \frac{0.15\sin 45°}{0.40} = 0.2652 \implies \phi = 15.37°$$

From the rigid-body velocity equation with $\omega_{rod}$ unknown:

$$v_{By} = v_{Ay} + \omega_{rod}(\ell\cos\phi) = 0$$

$$\omega_{rod} = -\frac{v_{Ay}}{\ell\cos\phi} = -\frac{3.33}{0.40\cos 15.37°} = -8.63\ \text{rad/s}$$

$$v_{Bx} = v_{Ax} - \omega_{rod}(\ell\sin\phi) = -3.33 - (-8.63)(0.40\times 0.2652)$$

$$\boxed{v_{piston} = -3.33 + 0.915 = -2.42\ \text{m/s}}$$

The negative sign confirms the piston moves in the $-x$ direction (toward BDC at this instant).

---

## Worked Example 2 — IC Method for a Four-Bar Linkage

**Problem:** In a four-bar linkage, crank $OA = 0.20\ \text{m}$ rotates at $\omega_{OA} = 5\ \text{rad/s}$ CCW. Find the angular velocity of the output link $CB$ where $CB = 0.30\ \text{m}$, using the instantaneous center method.

**Solution:**

By Kennedy's theorem, the IC of links 2 and 4 (input and output) lies on the intersection of lines $OC$ (extended) and $AB$ (extended). 

Locate IC$_{24}$ graphically. Measure distances $d_2 = IC_{24}\text{–}A$ and $d_4 = IC_{24}\text{–}B$.

The velocity of the common point equals:

$$\omega_{OA} \cdot d_2 = \omega_{CB} \cdot d_4$$

$$\omega_{CB} = \frac{d_2}{d_4}\omega_{OA}$$

For $d_2/d_4 = 0.75$ (from geometry): $\omega_{CB} = 0.75 \times 5 = 3.75\ \text{rad/s}$ (direction determined by inspection).

---

## Worked Example 3 — Acceleration of a Rolling Cylinder

**Problem:** A solid cylinder of radius $R = 0.25\ \text{m}$ rolls without slip on a flat surface. Its center $G$ has acceleration $a_G = 6\ \text{m/s}^2$ to the right and speed $v_G = 4\ \text{m/s}$ at this instant. Find the acceleration of the contact point $C$ and of the topmost point $T$.

**Solution:**

For rolling without slip: $\alpha = a_G / R = 6/0.25 = 24\ \text{rad/s}^2$ (CW) and $\omega = v_G/R = 16\ \text{rad/s}$.

**Contact point $C$** ($\mathbf{r}_{C/G} = -R\hat{j}$):

$$\mathbf{a}_C = \mathbf{a}_G + \boldsymbol{\alpha}\times\mathbf{r}_{C/G} - \omega^2\mathbf{r}_{C/G}$$

$$= 6\hat{i} + (-24\hat{k})\times(-0.25\hat{j}) - (16)^2(-0.25\hat{j})$$

$$= 6\hat{i} - 6\hat{i} + 64\hat{j} = 64\hat{j}\ \text{m/s}^2 \uparrow$$

The contact point has zero velocity but nonzero (upward) acceleration — a common exam trap!

**Top point $T$** ($\mathbf{r}_{T/G} = +R\hat{j}$):

$$\mathbf{a}_T = 6\hat{i} + (-24\hat{k})\times(0.25\hat{j}) - 256(0.25\hat{j})$$

$$= 6\hat{i} + 6\hat{i} - 64\hat{j} = 12\hat{i} - 64\hat{j}\ \text{m/s}^2$$

Magnitude: $\sqrt{144 + 4096} = 64.9\ \text{m/s}^2$, directed mostly downward.

---

## Aerospace Application — Gimbal Kinematics

Satellite attitude control systems use gimbals (pivoting frames) to orient thrusters or antennas. The kinematic analysis of a 2-axis gimbal reduces to a nested application of the rigid-body velocity equation:

$$\mathbf{v}_P = \mathbf{v}_{O_1} + \boldsymbol{\omega}_1\times\mathbf{r}_{O_2/O_1} + (\boldsymbol{\omega}_1 + \boldsymbol{\omega}_2)\times\mathbf{r}_{P/O_2}$$

Misidentifying which $\omega$ applies to which frame is the most frequent error in gimbal analysis.

---

## Summary Table

| Quantity | Formula | Notes |
|---|---|---|
| Velocity (fixed axis) | $\mathbf{v} = \boldsymbol{\omega}\times\mathbf{r}$ | $r$ from axis |
| Relative velocity | $\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega}\times\mathbf{r}_{B/A}$ | Same body |
| Acceleration | $\mathbf{a}_B = \mathbf{a}_A + \boldsymbol{\alpha}\times\mathbf{r}_{B/A} - \omega^2\mathbf{r}_{B/A}$ | Tangential + centripetal |
| Rolling constraint | $v_G = \omega R$, $a_G = \alpha R$ | No-slip condition |
| IC velocity | $v_P = \omega\cdot r_{P/I}$ | Planar motion only |

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Rigid Body Motion","description":"General motion decomposed into translation + rotation"}},{"id":"2","data":{"label":"Pure Translation","description":"All points have the same velocity and acceleration"}},{"id":"3","data":{"label":"Pure Rotation","description":"One point fixed; v = ω × r for all other points"}},{"id":"4","data":{"label":"General Planar Motion","description":"Translation of reference point A plus rotation ω"}},{"id":"5","data":{"label":"Velocity Analysis","description":"v_B = v_A + ω × r_{B/A}; use IC for shortcuts"}},{"id":"6","data":{"label":"Acceleration Analysis","description":"a_B = a_A + α × r_{B/A} − ω² r_{B/A}"}},{"id":"7","data":{"label":"Mechanism Applications","description":"Slider-crank, four-bar linkage, cam-follower"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"special case"},{"id":"e2","source":"1","target":"3","label":"special case"},{"id":"e3","source":"1","target":"4","label":"general case"},{"id":"e4","source":"4","target":"5","label":"differentiate position"},{"id":"e5","source":"5","target":"6","label":"differentiate velocity"},{"id":"e6","source":"4","target":"7","label":"applied to"}]}
```
