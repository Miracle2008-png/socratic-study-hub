---
title: "Space Trusses"
---

# Space Trusses

A **space truss** is a three-dimensional framework constructed from members joined at their ends to form a stable spatial structure. 

While planar trusses are built from basic triangles, space trusses are built from basic **tetrahedrons** (a pyramid shape with four triangular faces and six members connecting four joints).

## 1. Stability and Determinacy

To maintain a rigid 3D framework, you start with a base tetrahedron (6 members, 4 joints). For every new joint added to the spatial structure, exactly 3 new members must be added to anchor it rigidly to the existing framework.

The relationship between the number of members $m$ and joints $j$ for an internally determinate space truss is:
$$ m = 3j - 6 $$
If $m > 3j - 6$, it is statically indeterminate.

Furthermore, a rigid space truss requires at least six independent external reaction components to prevent translation and rotation in 3D space.

## 2. Method of Joints in 3D

The method of joints applies exactly the same way to space trusses, but requires 3D vector math.

At each joint, the concurrent force system must be in equilibrium:
$$ \sum \mathbf{F} = 0 $$
Which expands to three scalar equations:
$$ \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0 $$

### Procedure:
1. Define a Cartesian coordinate system.
2. Use position vectors to find the unit vector $\mathbf{u}$ for each member connected to the joint.
3. Express each unknown member force as a Cartesian vector: $\mathbf{F} = F \mathbf{u}$.
4. Find a joint with at most **three** unknown member forces.
5. Apply the three scalar equilibrium equations and solve the resulting $3 \times 3$ system of linear equations.

## 3. Zero-Force Members in Space Trusses

Identifying zero-force members is crucial for simplifying the 3D algebra.

**Rule 1:** If all members connected to a joint lie in the same plane, EXCEPT for one single member, and there is no external load at the joint, then the out-of-plane member is a zero-force member.
*(Proof: Summing forces in the axis perpendicular to the plane yields only the out-of-plane member).*

**Rule 2:** If exactly three members connect to a joint, and they do NOT lie in the same plane, and there is no external load, then ALL THREE members are zero-force members.

## 4. Method of Sections in 3D

The method of sections can also be applied to space trusses. A sectioning plane is passed completely through the truss. The isolated portion is a 3D rigid body, meaning six equilibrium equations are available:
$$ \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0 $$
$$ \sum M_x = 0, \quad \sum M_y = 0, \quad \sum M_z = 0 $$

By cleverly choosing moment axes that intersect the lines of action of several unknown cut members, you can often solve directly for a single desired member force in 3D without solving a massive system of equations.
