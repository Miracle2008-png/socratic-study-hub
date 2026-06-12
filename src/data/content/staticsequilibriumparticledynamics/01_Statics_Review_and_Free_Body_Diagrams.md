# Statics Review and Free Body Diagrams

## Introduction

Statics is the branch of mechanics concerned with the analysis of loads — forces and torques — on physical systems in static equilibrium. Unlike dynamics, which tracks acceleration and time-varying motion, statics freezes the clock and asks: **given all forces acting on a body, does the system remain at rest?** This fundamental discipline underpins structural engineering (bridges, towers, airframes), machine design (landing gear, engine mounts), and virtually every load-bearing component ever manufactured.

The **Free Body Diagram (FBD)** is the indispensable tool of statics. By isolating a body from its surroundings and representing every external force and moment acting on it as a vector, the FBD converts a complex real-world problem into a tractable mathematical statement.

---

## Core Principles

### Newton's Laws Revisited

For a body in **static equilibrium**, Newton's first and second laws collapse to two simple vector conditions:

$$
\sum \vec{F} = \vec{0} \qquad \text{(force equilibrium)}
$$

$$
\sum \vec{M}_O = \vec{0} \qquad \text{(moment equilibrium about any point } O \text{)}
$$

These six scalar equations (three force, three moment in 3-D; two force, one moment in 2-D) are the complete statement of static equilibrium.

### Types of Forces and Reactions

| Support Type | Reactions Provided |
|---|---|
| Pin / Hinge | $F_x$, $F_y$ (2-D); $F_x$, $F_y$, $F_z$ (3-D) |
| Roller | Normal force only |
| Fixed Wall | $F_x$, $F_y$, $M_z$ (2-D); all six in 3-D |
| Cable / Rope | Tension along cable axis only |
| Smooth Surface | Normal force perpendicular to surface |

A body is **statically determinate** when the number of unknowns equals the number of independent equilibrium equations. More unknowns yield a statically **indeterminate** structure requiring compatibility conditions.

---

## Drawing a Free Body Diagram — Step-by-Step Protocol

1. **Identify the body** of interest and define its boundary clearly.
2. **Remove all supports and contacts**, replacing them with their reaction forces and moments.
3. **Draw all external forces** — applied loads, gravity ($W = mg$ acting downward through the center of mass), distributed loads replaced by their resultants.
4. **Assign a coordinate system** and label every force with magnitude and direction.
5. **Verify completeness**: every removed constraint must appear as a reaction vector.

---

## Worked Example 1 — Simply Supported Bridge Beam

A highway bridge girder of length $L = 30\ \text{m}$ and self-weight $W = 480\ \text{kN}$ (acting at midspan) carries a truck load of $P = 120\ \text{kN}$ at $x = 10\ \text{m}$ from the left pin support $A$. A roller support exists at $B$.

**FBD:** Pin $A$ gives reactions $A_x$ (horizontal) and $A_y$ (vertical); roller $B$ gives only $B_y$ (vertical). No horizontal external forces exist, so $A_x = 0$ by inspection.

**Moment equilibrium about $A$:**

$$
\sum M_A = 0: \quad B_y(30) - 120(10) - 480(15) = 0
$$

$$
B_y = \frac{1200 + 7200}{30} = \frac{8400}{30} = 280\ \text{kN}
$$

**Force equilibrium (vertical):**

$$
A_y + B_y = 120 + 480 \implies A_y = 600 - 280 = 320\ \text{kN}
$$

**Check:** $\sum M_B = 0 \Rightarrow -A_y(30) + 480(15) + 120(20) = -9600 + 7200 + 2400 = 0\ ✓$

---

## Worked Example 2 — Aircraft Wing Attachment Bracket

An aluminum bracket bolts a wing spar to the fuselage frame. The bracket is a cantilever of length $a = 0.4\ \text{m}$ pinned at wall $C$. The spar exerts a downward load $V = 85\ \text{kN}$ and a horizontal drag force $H = 20\ \text{kN}$ at the free end $D$.

The fixed wall provides reactions $C_x$, $C_y$, and moment $M_C$.

**Horizontal equilibrium:**

$$
\sum F_x = 0: \quad C_x - 20 = 0 \implies C_x = 20\ \text{kN} \rightarrow
$$

**Vertical equilibrium:**

$$
\sum F_y = 0: \quad C_y - 85 = 0 \implies C_y = 85\ \text{kN} \uparrow
$$

**Moment at $C$ (counterclockwise positive):**

$$
\sum M_C = 0: \quad M_C - 85(0.4) + 20(0) = 0
$$

$$
M_C = 34\ \text{kN·m} \quad \text{(counterclockwise, i.e., resisting rotation)}
$$

This moment becomes the **design bending moment** for the bracket weld or bolt pattern.

---

## Worked Example 3 — Landing Gear Pin Reaction

A nose landing gear strut is modeled as a two-force member. The strut inclines at $\theta = 65°$ to the horizontal and carries a compressive ground reaction $R = 210\ \text{kN}$ along its axis. Find the horizontal and vertical components transmitted to the fuselage attachment pin.

The strut force acts along its axis, so:

$$
F_x = R\cos\theta = 210\cos 65° = 210 \times 0.4226 \approx 88.7\ \text{kN}
$$

$$
F_y = R\sin\theta = 210\sin 65° = 210 \times 0.9063 \approx 190.3\ \text{kN}
$$

The pin must resist these two orthogonal components simultaneously. Its shear stress is:

$$
\tau = \frac{\sqrt{F_x^2 + F_y^2}}{A_{pin}} = \frac{\sqrt{88.7^2 + 190.3^2}}{A_{pin}} = \frac{210\ \text{kN}}{A_{pin}}
$$

— confirming the resultant equals the axial strut load, as expected for a two-force member.

---

## Key Takeaways

- **Always isolate first.** The FBD must show the body *alone*, not connected to anything.
- **Moment about a smart point** (usually where multiple unknowns intersect) eliminates variables and simplifies algebra.
- **Two-force members** carry load only along their axis — a powerful simplification used in truss analysis.
- In aerospace applications, weight ($mg$), aerodynamic lift and drag, and inertial relief loads all appear simultaneously on FBDs, making systematic diagramming non-negotiable.

---

## Common Pitfalls

| Mistake | Consequence |
|---|---|
| Forgetting self-weight | Under-designed beams, unsafe structures |
| Wrong reaction direction assumed | Sign errors propagate; check at the end |
| Moment arm error | Largest source of numerical mistakes |
| Skipping the check equation | Errors go undetected |

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Identify System Boundary","description":"Choose the body or subsystem to isolate for analysis"}},{"id":"2","data":{"label":"Remove All Supports","description":"Replace pins, rollers, walls, and cables with reaction force vectors"}},{"id":"3","data":{"label":"Add External Loads","description":"Draw applied forces, weight W=mg, and distributed load resultants"}},{"id":"4","data":{"label":"Assign Coordinates","description":"Define x-y (2D) or x-y-z (3D) axes and label every vector"}},{"id":"5","data":{"label":"Write Equilibrium Equations","description":"Sum Fx=0, Sum Fy=0, Sum M_O=0 for the isolated FBD"}},{"id":"6","data":{"label":"Solve for Unknowns","description":"Use algebra or matrix methods to find reaction magnitudes"}},{"id":"7","data":{"label":"Verify with Check Equation","description":"Substitute results into an unused equilibrium equation to confirm correctness"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"isolate"},{"id":"e2","source":"2","target":"3","label":"replace supports"},{"id":"e3","source":"3","target":"4","label":"define axes"},{"id":"e4","source":"4","target":"5","label":"apply equations"},{"id":"e5","source":"5","target":"6","label":"solve"},{"id":"e6","source":"6","target":"7","label":"validate"}]}
```
