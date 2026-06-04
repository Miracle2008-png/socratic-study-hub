---
title: "Equivalent Systems of Forces"
---

# Equivalent Systems of Forces

A rigid body is often subjected to a complex system of multiple forces and couple moments applied at various points. For analysis, it is necessary to reduce this complex system to a simpler, equivalent system.

Two systems of forces are considered **equivalent** if they impart the exact same translational and rotational effects on the rigid body as a whole.

## 1. Reduction to a Single Resultant Force and Resultant Couple Moment

Any system of forces and couple moments acting on a rigid body can be reduced to a single resultant force $\mathbf{F}_R$ acting at an arbitrary point $O$ and a single resultant couple moment $(\mathbf{M}_R)_O$.

The reduction is performed by moving all forces to the common reference point $O$. As each force is moved, a corresponding couple moment is generated.

1. **Resultant Force:** The resultant force is the vector sum of all the individual forces.
   $$ \mathbf{F}_R = \sum \mathbf{F} $$
   In Cartesian components:
   $$ \mathbf{F}_R = (\sum F_x)\mathbf{i} + (\sum F_y)\mathbf{j} + (\sum F_z)\mathbf{k} $$

2. **Resultant Moment:** The resultant couple moment at $O$ is the vector sum of all the moments of the forces about $O$, plus all the free couple moments $\mathbf{M}_c$ originally present in the system.
   $$ (\mathbf{M}_R)_O = \sum \mathbf{M}_O + \sum \mathbf{M}_c $$
   $$ (\mathbf{M}_R)_O = \sum (\mathbf{r} \times \mathbf{F}) + \sum \mathbf{M}_c $$

If the reference point $O$ is changed to a new point $P$, the resultant force $\mathbf{F}_R$ remains unchanged, but the resultant moment will change according to:
$$ (\mathbf{M}_R)_P = (\mathbf{M}_R)_O + \mathbf{r}_{PO} \times \mathbf{F}_R $$

## 2. Reduction to a Single Resultant Force (Simplest Resultant)

Under certain conditions, a force and couple system can be further reduced to just a **single resultant force** without any couple moment, by simply shifting the line of action of the resultant force.

If we have $\mathbf{F}_R$ and $(\mathbf{M}_R)_O$ at point $O$, we can eliminate the couple moment by moving the line of action of $\mathbf{F}_R$ away from $O$ by a perpendicular distance $d$. The new location creates a moment that exactly cancels $(\mathbf{M}_R)_O$.

$$ d = \frac{(\mathbf{M}_R)_O}{F_R} $$

This further reduction to a single force is possible ONLY for:
- **Concurrent force systems** (all forces intersect at one point, so moment is inherently zero).
- **Coplanar force systems** (all forces lie in the same plane, so $\mathbf{F}_R$ and $\mathbf{M}_R$ are strictly perpendicular).
- **Parallel force systems** (all forces are parallel).

## 3. Wrench (The Most General Case)

In general 3D space, $\mathbf{F}_R$ and $(\mathbf{M}_R)_O$ are rarely perpendicular. In this general case, the system cannot be reduced to a single force. 

Instead, it reduces to a **wrench**, which consists of a resultant force $\mathbf{F}_R$ and a collinear resultant moment $\mathbf{M}_{\parallel}$.
The moment $(\mathbf{M}_R)_O$ is broken into components parallel and perpendicular to $\mathbf{F}_R$. The perpendicular component is eliminated by shifting the line of action of $\mathbf{F}_R$. The parallel component remains collinear with $\mathbf{F}_R$. This combined "push and twist" along the same axis is called a wrench.
