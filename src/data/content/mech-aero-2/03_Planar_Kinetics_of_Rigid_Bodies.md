# Planar Kinetics of Rigid Bodies

## Overview

Planar kinetics extends Newton's second law from point masses to extended bodies undergoing **general planar motion**. This is where kinematics meets dynamics: knowing how a body moves (kinematics) we now determine why it moves that way, or conversely, given applied forces and moments we predict the resulting motion.

Aircraft control surfaces, landing gear mechanisms, automotive crankshafts, and manufacturing robots all demand this framework. The governing equations are elegant yet powerful — three scalar equations linking six possible unknowns per body.

---

## Newton-Euler Equations for a Rigid Body

For a rigid body of mass $m$ undergoing planar motion, with $G$ as the center of mass and $\bar{I}$ as the mass moment of inertia about $G$:

$$\sum \mathbf{F} = m\mathbf{a}_G$$

$$\sum M_G = \bar{I}\alpha$$

These are the **Newton-Euler equations** in their simplest form. In component form:

$$\sum F_x = m\bar{a}_x, \qquad \sum F_y = m\bar{a}_y, \qquad \sum M_G = \bar{I}\alpha$$

> **Critical point:** The moment equation $\sum M_G = \bar{I}\alpha$ is valid **only** when moments are summed about the center of mass $G$. Special cases exist for a fixed axis or instantaneous center, but they require care.

---

## Moment About an Arbitrary Point

When taking moments about any point $A$ (which may or may not be $G$):

$$\sum M_A = \bar{I}\alpha + \mathbf{r}_{G/A}\times m\mathbf{a}_G$$

For a **fixed pivot** $O$:

$$\sum M_O = I_O\alpha$$

where $I_O = \bar{I} + md^2$ is the moment of inertia about $O$ (parallel-axis theorem), and $d = |r_{G/O}|$.

---

## Mass Moments of Inertia — Key Formulas

| Body | Axis | $\bar{I}$ |
|---|---|---|
| Slender rod, length $L$ | Through center, $\perp$ to rod | $\frac{1}{12}mL^2$ |
| Slender rod, length $L$ | Through end, $\perp$ to rod | $\frac{1}{3}mL^2$ |
| Thin disk, radius $R$ | Through center, $\perp$ to disk | $\frac{1}{2}mR^2$ |
| Solid cylinder, radius $R$ | Through central axis | $\frac{1}{2}mR^2$ |
| Hollow cylinder | Central axis | $\frac{1}{2}m(R_o^2+R_i^2)$ |
| Rectangular plate, $a\times b$ | Through center | $\frac{1}{12}m(a^2+b^2)$ |

**Parallel-axis theorem:** $I_P = \bar{I} + md^2$ where $d$ is the distance from $G$ to the new axis $P$.

---

## Worked Example 1 — Pivoting Door (Fixed-Axis Rotation)

**Problem:** A uniform rectangular door ($m = 45\ \text{kg}$, width $w = 1.0\ \text{m}$, height $h = 2.2\ \text{m}$) is hinged at one vertical edge. A horizontal force $F = 120\ \text{N}$ is applied at the free edge, perpendicular to the door. Find the angular acceleration and hinge reactions.

**Solution:**

The door rotates about the hinge axis (vertical edge). Using $I_{hinge}$:

$$I_{hinge} = \frac{1}{3}mw^2 = \frac{1}{3}(45)(1.0)^2 = 15\ \text{kg·m}^2$$

Moment about hinge axis ($\sum M_O = I_O\alpha$):

$$F \cdot w = I_{hinge}\cdot\alpha$$

$$120(1.0) = 15\alpha \implies \alpha = 8\ \text{rad/s}^2$$

Acceleration of center of mass ($\bar{x} = w/2 = 0.5\ \text{m}$ from hinge):

$$\bar{a} = \alpha\cdot\bar{x} = 8 \times 0.5 = 4\ \text{m/s}^2$$

(at $t=0$, $\omega = 0$ so centripetal term vanishes)

Newton's law in the horizontal direction:

$$\sum F_x = m\bar{a}: \quad F + H_x = m\bar{a}$$

$$120 + H_x = 45(4) \implies H_x = 180 - 120 = 60\ \text{N}$$

Vertical hinge reaction (no vertical acceleration):

$$H_y = mg = 45(9.81) = \boxed{441.5\ \text{N}}$$

The hinge must provide a horizontal reaction **opposite to** the applied force direction — it actually pulls the door toward the frame.

---

## Worked Example 2 — Cylinder Rolling Down an Incline

**Problem:** A solid cylinder ($m = 20\ \text{kg}$, $R = 0.15\ \text{m}$) rolls without slip down a $30°$ incline. Find the angular acceleration, linear acceleration of the center, and the friction force.

**Solution:**

Equations of motion (take positive down the incline for translation, clockwise positive for rotation):

$$\sum F_{\parallel}: \quad mg\sin\theta - f = m\bar{a}$$

$$\sum M_G: \quad fR = \bar{I}\alpha = \frac{1}{2}mR^2\alpha$$

Rolling constraint: $\bar{a} = \alpha R$

From the moment equation: $f = \frac{1}{2}mR\alpha = \frac{1}{2}m\bar{a}$

Substituting into Newton's law:

$$mg\sin\theta - \frac{1}{2}m\bar{a} = m\bar{a}$$

$$g\sin 30° = \frac{3}{2}\bar{a} \implies \bar{a} = \frac{2g\sin 30°}{3} = \frac{2(9.81)(0.5)}{3}$$

$$\boxed{\bar{a} = 3.27\ \text{m/s}^2}$$

$$\alpha = \frac{\bar{a}}{R} = \frac{3.27}{0.15} = 21.8\ \text{rad/s}^2$$

$$f = \frac{1}{2}m\bar{a} = \frac{1}{2}(20)(3.27) = 32.7\ \text{N}$$

**Verification:** $f_{max} = \mu_s N = \mu_s mg\cos 30°$. The cylinder rolls without slip provided $\mu_s \geq \frac{\tan 30°}{3} = \frac{1}{\sqrt{3}\cdot 3} \approx 0.192$.

**Insight:** The linear acceleration is $2/3$ of the frictionless sliding acceleration — the remaining $1/3$ goes into rotational kinetic energy. A hollow cylinder ($\bar{I} = mR^2$) gives $\bar{a} = g\sin\theta/2$, a slower value.

---

## Worked Example 3 — Connecting Rod Kinetics

**Problem:** In an engine at TDC+90°, the connecting rod ($m = 2.1\ \text{kg}$, $\bar{I} = 0.0085\ \text{kg·m}^2$) has its center of mass accelerating at $\mathbf{a}_G = (-450\hat{i} + 120\hat{j})\ \text{m/s}^2$ and angular acceleration $\alpha = 340\ \text{rad/s}^2$ (CW). Find the resultant force and moment system on the rod.

**Solution:**

Newton's law (resultant force equals $m\mathbf{a}_G$):

$$\mathbf{F}_{res} = m\mathbf{a}_G = 2.1(-450\hat{i} + 120\hat{j})$$

$$\mathbf{F}_{res} = (-945\hat{i} + 252\hat{j})\ \text{N}$$

$$|\mathbf{F}_{res}| = \sqrt{945^2 + 252^2} = \sqrt{893025 + 63504} = 978\ \text{N}$$

Resultant moment about $G$:

$$M_{res} = \bar{I}\alpha = 0.0085 \times 340 = \boxed{2.89\ \text{N·m\ (CW)}}$$

These resultant quantities must equal the sum of all pin forces and pressure loads acting on the connecting rod — the basis for bearing load calculations in internal combustion engine design.

---

## Special Case — Translation (No Rotation)

If a body translates without rotation ($\alpha = 0$), all points have the same acceleration. The moment equation about **any point** reduces to:

$$\sum M_P = m\mathbf{a}_G \times \mathbf{r}_{G/P}$$

This is a common simplification for elevator cabins, linear actuators, and sled tests.

---

## Aerospace Application — Aircraft Elevator Control

When a pilot deflects the elevator, an aerodynamic moment $M_{aero}$ acts on the horizontal stabilizer assembly (mass $m_s$, inertia $\bar{I}_s$). The angular acceleration of the aircraft's pitch axis is:

$$\alpha_{pitch} = \frac{M_{aero} - M_{gravity}}{I_{yy,aircraft}}$$

where $I_{yy}$ is the full aircraft pitch-axis moment of inertia. Proper accounting of the tail assembly contribution using the parallel-axis theorem is essential for flight dynamics modeling.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Planar Rigid Body Kinetics","description":"Three equations: ΣFx=ma_x, ΣFy=ma_y, ΣM_G=Ī α"}},{"id":"2","data":{"label":"Fixed-Axis Rotation","description":"ΣM_O = I_O α; pivot at O; use parallel-axis theorem"}},{"id":"3","data":{"label":"General Planar Motion","description":"Translation of G plus rotation; both equations active"}},{"id":"4","data":{"label":"Pure Translation","description":"α = 0; all points same acceleration; ΣM_G = 0"}},{"id":"5","data":{"label":"Rolling Without Slip","description":"Kinematic constraint: a_G = αR links translation and rotation"}},{"id":"6","data":{"label":"Mass Moment of Inertia","description":"Ī about G; parallel-axis theorem: I_P = Ī + md²"}},{"id":"7","data":{"label":"Engine & Mechanism Loads","description":"Connecting rod forces, bearing loads, crankshaft torque"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"special case"},{"id":"e2","source":"1","target":"3","label":"general"},{"id":"e3","source":"1","target":"4","label":"special case"},{"id":"e4","source":"3","target":"5","label":"applies to"},{"id":"e5","source":"6","target":"1","label":"needed for"},{"id":"e6","source":"3","target":"7","label":"application"}]}
```
