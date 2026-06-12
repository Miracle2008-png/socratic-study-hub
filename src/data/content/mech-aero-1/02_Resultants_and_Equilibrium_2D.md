# Resultants and Equilibrium in 2D

## Introduction

When multiple forces act on a structure — say, wind pressure, snow load, and self-weight on a cable-stayed bridge pylon — engineers need to know their **combined effect**. The resultant force is the single equivalent force (and couple) that produces the same external effect as the entire force system. Mastering resultants is the first step toward understanding how loads flow through structures and how equilibrium is satisfied or violated.

In 2-D (planar) problems, forces lie in the $xy$-plane and moments point in the $\pm z$-direction. This is the workhorse setting for most introductory structural and machine analysis.

---

## Force Resultants

### Rectangular Components

Any force $\vec{F}$ at angle $\theta$ from the positive $x$-axis decomposes into:

$$
F_x = F\cos\theta, \qquad F_y = F\sin\theta
$$

The **resultant** of a concurrent force system (forces meeting at a point) is:

$$
R_x = \sum F_x, \qquad R_y = \sum F_y
$$

$$
R = \sqrt{R_x^2 + R_y^2}, \qquad \theta_R = \arctan\!\left(\frac{R_y}{R_x}\right)
$$

### Moment of a Force — Varignon's Theorem

The moment of force $\vec{F}$ about point $O$ equals:

$$
M_O = r \times F = F_x\,d_y - F_y\,d_x
$$

where $(d_x, d_y)$ is the position of the force's point of application relative to $O$. Varignon's theorem states that the moment of a resultant equals the sum of moments of its components — allowing you to choose whichever arm is easiest to compute.

### Resultant of a General Force System

For a system of forces not all concurrent, find the resultant force magnitude/direction as above, then locate its **line of action** by equating its moment about $O$ to the sum of individual moments:

$$
M_O^{\text{resultant}} = \sum M_O^{(i)}
$$

The perpendicular distance $d$ from $O$ to the resultant line of action:

$$
d = \frac{|M_O^{\text{resultant}}|}{R}
$$

---

## 2-D Equilibrium Equations

A rigid body in 2-D equilibrium satisfies three independent scalar equations:

$$
\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum M_O = 0
$$

These can be written in two alternative equivalent sets:
- **Two-force + one-moment:** $\sum F_x=0$, $\sum M_A=0$, $\sum M_B=0$ (provided $A$–$B$ line is not perpendicular to $x$).
- **Three-moment:** $\sum M_A=0$, $\sum M_B=0$, $\sum M_C=0$ (provided $A$, $B$, $C$ are non-collinear).

---

## Worked Example 1 — Roof Truss Panel Point Loading

A gable roof truss has a top chord inclined at $\alpha = 30°$. Wind creates a horizontal pressure resultant $W = 18\ \text{kN}$ acting at the ridge (top center), and dead + snow loads produce a vertical force $V = 45\ \text{kN}$ also at the ridge. Find the single resultant and its direction.

$$
R_x = W = 18\ \text{kN} \rightarrow
$$

$$
R_y = -V = -45\ \text{kN} \downarrow
$$

$$
R = \sqrt{18^2 + 45^2} = \sqrt{324 + 2025} = \sqrt{2349} \approx 48.5\ \text{kN}
$$

$$
\theta_R = \arctan\!\left(\frac{-45}{18}\right) = \arctan(-2.5) \approx -68.2°
$$

The resultant acts at $68.2°$ below the horizontal, pointing down-right. The truss must be designed to resist this combined load without lateral buckling.

---

## Worked Example 2 — Aircraft Control Surface Hinge Loads

A control surface (aileron) of span $b = 2.0\ \text{m}$ is attached to the wing at two hinges, $A$ (at $x = 0$) and $B$ (at $x = 1.6\ \text{m}$). Aerodynamic pressure applies a distributed force, modeled as two point forces: $P_1 = 3.2\ \text{kN}$ downward at $x = 0.5\ \text{m}$ and $P_2 = 1.8\ \text{kN}$ downward at $x = 1.2\ \text{m}$. Find hinge reactions.

**FBD:** Hinges $A$ and $B$ each provide vertical reactions $A_y$ and $B_y$ (and $A_x$ for horizontal; no horizontal external loads so $A_x = 0$).

$$
\sum M_A = 0: \quad B_y(1.6) = 3.2(0.5) + 1.8(1.2)
$$

$$
B_y = \frac{1.6 + 2.16}{1.6} = \frac{3.76}{1.6} = 2.35\ \text{kN} \uparrow
$$

$$
\sum F_y = 0: \quad A_y + 2.35 = 3.2 + 1.8 = 5.0
$$

$$
A_y = 2.65\ \text{kN} \uparrow
$$

**Verification** ($\sum M_B = 0$):

$$
-A_y(1.6) + 3.2(1.1) + 1.8(0.4) = -4.24 + 3.52 + 0.72 = 0\ ✓
$$

Hinge $A$ carries the larger share because it is closest to the larger aerodynamic load $P_1$.

---

## Worked Example 3 — Engine Mount Bracket Resultant

A jet engine is hung from a pylon by three attach bolts in a triangular pattern. Bolt forces in the $xy$-plane (aft view of the pylon) are:

| Bolt | $F_x$ (kN) | $F_y$ (kN) | Position $(x, y)$ m |
|------|-----------|-----------|---------------------|
| 1 | +12 | +85 | (0.0, 0.0) |
| 2 | −6 | +42 | (0.3, 0.0) |
| 3 | −6 | +43 | (0.15, −0.26) |

**Resultant force:**

$$
R_x = 12 - 6 - 6 = 0\ \text{kN}
$$

$$
R_y = 85 + 42 + 43 = 170\ \text{kN} \uparrow
$$

$$
R = 170\ \text{kN (purely vertical — engine weight plus thrust redistribution)}
$$

**Resultant moment about bolt 1:**

$$
M_O = (-6)(0) - 42(0.3) + (-6)(0) - 43(-0.26) \cdot (-1)
$$

Expanding carefully using $M = F_x\,y - F_y\,x$:

$$
M = [(-6)(0) - 42(0.3)] + [(-6)(-0.26) - 43(0.15)]
$$

$$
M = [-12.6] + [1.56 - 6.45] = -12.6 - 4.89 = -17.49\ \text{kN·m}
$$

The resultant 170 kN acts at $d = 17.49/170 = 0.103\ \text{m}$ from bolt 1 — this offset drives the load distribution design of the pylon structure.

---

## Statical Determinacy Criteria

For a 2-D structure with $r$ unknown reactions and $n$ members:

$$
r = 3 \quad \Rightarrow \quad \text{statically determinate}
$$

$$
r < 3 \quad \Rightarrow \quad \text{mechanism (unstable)}
$$

$$
r > 3 \quad \Rightarrow \quad \text{statically indeterminate (degree} = r - 3\text{)}
$$

Real structures are often indeterminate (redundant) to provide safety margin — if one support fails, loads redistribute rather than causing collapse.

---

## Engineering Insight

In aircraft design, resultant force analysis determines the **load path** — the route that force travels from an applied aerodynamic load through skin panels, spars, ribs, and ultimately into the fuselage. Every structural member along the path must be sized to carry its share of the resultant without yielding, buckling, or fatiguing.

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Identify All Forces","description":"List every external force with magnitude, direction, and point of application"}},{"id":"2","data":{"label":"Resolve to Components","description":"Decompose each force: Fx = F·cosθ, Fy = F·sinθ"}},{"id":"3","data":{"label":"Sum Components","description":"Rx = ΣFx, Ry = ΣFy to find resultant magnitude and direction"}},{"id":"4","data":{"label":"Compute Moments","description":"Use Varignon's theorem: M_O = Fx·dy − Fy·dx for each force"}},{"id":"5","data":{"label":"Locate Resultant Line of Action","description":"d = |ΣM_O| / R gives perpendicular distance from reference point"}},{"id":"6","data":{"label":"Apply Equilibrium Equations","description":"ΣFx=0, ΣFy=0, ΣM_O=0 to solve for unknown reactions"}},{"id":"7","data":{"label":"Verify Solution","description":"Use alternate moment center or spare equation to confirm answers"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"decompose"},{"id":"e2","source":"2","target":"3","label":"sum"},{"id":"e3","source":"3","target":"4","label":"moment arm"},{"id":"e4","source":"4","target":"5","label":"locate"},{"id":"e5","source":"5","target":"6","label":"equilibrium"},{"id":"e6","source":"6","target":"7","label":"check"}]}
```
