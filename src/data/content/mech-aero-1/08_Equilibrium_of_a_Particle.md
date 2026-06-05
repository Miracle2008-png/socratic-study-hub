# Equilibrium of a Particle

A particle is in a state of equilibrium if it remains at rest if originally at rest, or has a constant velocity if originally in motion. In both cases, the acceleration is zero.

## 1. Condition for Equilibrium

To maintain equilibrium, Newton's second law of motion requires that the resultant force acting on a particle be zero:
$$ \sum \mathbf{F} = 0 $$

Since a particle has no size, it cannot undergo rotation, and there are no couple moments to consider. The only condition for equilibrium is the balance of concurrent forces.

## 2. Coplanar Force Systems (2D)

If all the forces acting on a particle lie in a single plane (e.g., the $x-y$ plane), the vector equilibrium equation can be resolved into two independent scalar equations:
$$ \sum F_x = 0 $$
$$ \sum F_y = 0 $$

These two equations can be solved for at most **two unknowns**. These unknowns are typically the magnitudes of two forces or one magnitude and one angle.

### Typical Problem Solving Procedure:
1. Establish the $x$ and $y$ coordinate axes.
2. Draw the free-body diagram (FBD) of the particle.
3. Resolve all forces into their $x$ and $y$ components.
4. Apply the scalar equations of equilibrium.
5. Solve the resulting system of linear equations.

## 3. Three-Dimensional Force Systems

For a particle subjected to a 3D system of forces, the vector equation $\sum \mathbf{F} = 0$ is resolved into three scalar equations:
$$ \sum F_x = 0 $$
$$ \sum F_y = 0 $$
$$ \sum F_z = 0 $$

These three equations can be solved for a maximum of **three unknowns**.

### Springs and Cables
In particle equilibrium problems, forces are often applied via linear springs or cables.
- **Cables:** Always pull (tension). The force is directed strictly along the cable.
- **Linear Elastic Springs:** The force developed by a spring is proportional to its deformation from its unstretched length.
  $$ F = k s $$
  where $k$ is the spring stiffness (N/m or lb/ft) and $s = l - l_0$ is the deformation (stretched length minus unstretched length).

## 4. Statically Determinate vs. Indeterminate

If a particle has exactly 2 unknown forces in 2D (or 3 in 3D), the problem is **statically determinate**, meaning the equations of equilibrium alone are perfectly sufficient to find the unknowns.

If there are more unknowns than available equilibrium equations (e.g., a particle supported by 3 cables in a 2D plane), the system is **statically indeterminate**. Such problems require additional equations based on the physical deformation (strain) of the supports, moving beyond the rigid-body assumption of pure statics.
