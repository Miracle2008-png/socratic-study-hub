---
title: "Equilibrium of Rigid Bodies in 2D"
---

# Equilibrium of Rigid Bodies in 2D

Unlike a particle, a rigid body has size and shape. Consequently, the forces applied to it do not all intersect at a single point, meaning they can cause the body to rotate. 

For a rigid body to be in equilibrium, both the resultant force **and** the resultant couple moment must be zero.

## 1. Conditions for Rigid-Body Equilibrium

The general conditions for equilibrium of a rigid body are expressed by two vector equations:
$$ \sum \mathbf{F} = 0 $$
$$ \sum \mathbf{M}_O = 0 $$

The second equation states that the sum of the moments of all forces about *any* arbitrary point $O$ must be zero. If the body is not translating ($\sum \mathbf{F} = 0$) and not rotating about $O$ ($\sum \mathbf{M}_O = 0$), then it is in complete static equilibrium.

## 2. Coplanar (2D) Equilibrium Equations

When all forces and couple moments acting on the body lie in the $x-y$ plane, the vector equations reduce to three independent scalar equations:
$$ \sum F_x = 0 $$
$$ \sum F_y = 0 $$
$$ \sum M_O = 0 $$

These three equations can solve for a maximum of **three unknowns** (typically support reactions). 

*Note:* The point $O$ chosen for the moment summation is entirely arbitrary. However, strategically choosing $O$ at a point where the lines of action of several unknown forces intersect will eliminate those forces from the moment equation, significantly simplifying the algebra.

## 3. Alternative Sets of Equilibrium Equations

Instead of two force equations and one moment equation, we can use alternative sets of three independent equations:

- **Two Moment Equations, One Force Equation:**
  $$ \sum F_x = 0, \quad \sum M_A = 0, \quad \sum M_B = 0 $$
  *(Provided the line connecting A and B is not perpendicular to the x-axis).*

- **Three Moment Equations:**
  $$ \sum M_A = 0, \quad \sum M_B = 0, \quad \sum M_C = 0 $$
  *(Provided points A, B, and C do not lie on the same straight line).*

## 4. Two-Force and Three-Force Members

Recognizing special types of loading can drastically simplify analysis.

### Two-Force Members
A member subjected to forces at only two points, with no applied couple moments, is a **two-force member**. For equilibrium, the two resultant forces at these points must be equal, opposite, and collinear (meaning their line of action must pass exactly through the two points of application). This immediately defines the direction of the force.

### Three-Force Members
If a member is subjected to only three forces, equilibrium requires that the lines of action of the three forces be either **concurrent** (intersecting at a single point) or **parallel**. If they did not intersect at one point, the third force would create an unbalanced moment about the intersection of the first two.
