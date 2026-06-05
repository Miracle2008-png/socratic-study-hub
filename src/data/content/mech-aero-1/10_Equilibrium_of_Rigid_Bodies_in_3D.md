# Equilibrium of Rigid Bodies in 3D

The analysis of three-dimensional structures follows the exact same logical progression as two-dimensional problems, but requires the use of full vector algebra to handle the spatial geometry.

## 1. Six Scalar Equations of Equilibrium

In 3D space, the two vector equilibrium equations ($\sum \mathbf{F} = 0$ and $\sum \mathbf{M}_O = 0$) expand into **six independent scalar equations**:

$$ \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0 $$
$$ \sum M_x = 0, \quad \sum M_y = 0, \quad \sum M_z = 0 $$

These six equations can solve for a maximum of **six unknowns**.

## 2. 3D Support Reactions

Identifying support reactions in 3D is critical. The rule remains: a reaction force develops if translation is prevented, and a reaction couple moment develops if rotation is prevented.

Common 3D supports include:
- **Ball and Socket Joint:** Prevents translation in all three directions but allows free rotation. Provides 3 force unknowns ($R_x, R_y, R_z$) and 0 moment unknowns.
- **Journal Bearing:** Prevents translation perpendicular to the shaft and rotation about the transverse axes. It allows the shaft to spin and slide along its axis. Provides 2 force unknowns and 2 moment unknowns.
- **Thrust Bearing:** Like a journal bearing but also prevents sliding along the axis. Provides 3 force unknowns and 2 moment unknowns.
- **Single Hinge:** Provides 3 force unknowns and 2 moment unknowns (allows rotation about the hinge axis).
- **Fixed Support:** Prevents all translation and rotation. Provides 6 unknowns (3 forces, 3 moments).

*Note:* In many problems involving bearings or hinges, if the body is supported by two or more properly aligned bearings, the couple moments at the bearings are often assumed to be zero (or are physically incapable of being developed), simplifying the problem back to a statically determinate state.

## 3. The Vector Cross Product in Equilibrium

For 3D problems, scalar moment arms are difficult to determine geometrically. You must rely entirely on the vector cross product.

The moment equation is formulated as:
$$ \sum \mathbf{M}_O = \sum (\mathbf{r} \times \mathbf{F}) + \sum \mathbf{M}_c = 0 $$

Where $\mathbf{r}$ is the position vector from the reference point $O$ to any point on the line of action of the force $\mathbf{F}$. Setting the resulting $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ coefficients to zero yields the three scalar moment equations.

## 4. Constraints and Static Determinacy

To ensure a rigid body is completely constrained against all possible translation and rotation, it must be supported by reactions containing at least six unknowns.

- **Improper Constraints:** Even if there are six unknowns, if the reaction forces all intersect a common axis or are all parallel, the body is improperly constrained and will collapse or rotate.
- **Statically Indeterminate:** If there are more than six unknown support reactions, the problem cannot be solved using statics alone.
