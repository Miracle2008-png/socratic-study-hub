---
title: "State of Stress Caused by Combined Loadings"
---

# State of Stress Caused by Combined Loadings

When multiple types of loads act on a body simultaneously, we use the method of sections to expose the internal resultant forces. 

For a fully general 3D problem, making a cut exposes a maximum of **six** internal resultants acting precisely at the centroid of the cross-section:
*   Three forces: Normal ($N$), Shear-y ($V_y$), Shear-z ($V_z$)
*   Three moments: Torsion ($T$), Bending-y ($M_y$), Bending-z ($M_z$)

## 1. The Four Fundamental Stress Formulas

To analyze a specific point on the cross-section, we calculate the stress contribution from each of these six resultants using the four foundational equations of mechanics of materials:

1.  **Normal Stress from Axial Load ($N$):** 
    $$ \sigma = \frac{N}{A} $$ 
    *(Uniform across the entire section).*
2.  **Normal Stress from Bending ($M_y, M_z$):** 
    $$ \sigma = - \frac{M y}{I} $$ 
    *(Zero at the neutral axis, maximum at outer fibers).*
3.  **Shear Stress from Transverse Shear ($V_y, V_z$):** 
    $$ \tau = \frac{V Q}{I t} $$ 
    *(Maximum at the neutral axis, zero at outer edges).*
4.  **Shear Stress from Torsion ($T$):** 
    $$ \tau = \frac{T \rho}{J} \quad \text{(for circular shafts)} $$ 
    *(Zero at center, maximum at outer edge).*

## 2. Superimposing the Components

We select an infinitesimally small cubic volume element of material located at our specific point of interest.

**Step 1: Superimpose Normal Stresses**
Normal stresses always act perpendicular to the cut face (the x-axis). We algebraically add the normal stresses from $N$, $M_y$, and $M_z$.
$$ \sigma_x = \frac{N}{A} - \frac{M_z y}{I_z} + \frac{M_y z}{I_y} $$
*(Pay excruciatingly close attention to whether the moment puts your specific coordinate point in tension (+) or compression (-).*

**Step 2: Superimpose Shear Stresses**
Shear stresses act within the plane of the cut face. We must add them as vectors, strictly tracking their y and z components.
*   Torsion creates a shear vector tangent to a circle drawn through the point.
*   Transverse shear creates a shear vector parallel to the applied shear force.
$$ \tau_{xy} = (\tau_{torsion})_y + (\tau_{transverse})_y $$
$$ \tau_{xz} = (\tau_{torsion})_z + (\tau_{transverse})_z $$

## 3. The Resulting State of Stress

After superposition, our microscopic volume element is subjected to a combined "State of Stress." 
For the face of the element exposed by our x-axis cut, we have calculated exactly three numbers: $\sigma_x$, $\tau_{xy}$, and $\tau_{xz}$.

This defines the complete loading reality for that specific particle of material. The next critical step (covered in Topic 8) will be taking these three numbers and determining the absolute maximum principal stresses required to evaluate failure.
