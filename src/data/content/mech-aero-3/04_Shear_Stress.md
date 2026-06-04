---
title: "Shear Stress"
---

# Shear Stress

While normal stress acts perpendicular to a cut surface, pulling it apart or crushing it together, **shear stress** acts tangentially across the surface, tending to slice or slide one portion of the material past the other.

## 1. Direct Shear

Direct shear occurs when applied forces directly attempt to slide one cross-section of a member past an adjacent cross-section. This is the primary mode of failure in mechanical connections like bolts, rivets, and pins.

Consider two plates bolted together and pulled in opposite directions by a force $P$. The bolt prevents the plates from sliding.
If we pass a cutting plane straight through the shank of the bolt at the interface between the two plates, equilibrium requires an internal shear force $V$ equal to the applied load $P$.

The **average shear stress** $\tau_{avg}$ on the cross-section of the bolt is defined as:
$$ \tau_{avg} = \frac{V}{A} $$
where:
- $\tau_{avg}$ = average shear stress.
- $V$ = internal resultant shear force on the section.
- $A$ = cross-sectional area of the section where the shear force acts.

*Note:* Unlike normal stress under axial loading, the true shear stress is rarely perfectly uniform across the entire cross-section. It is typically maximum at the center and zero at the outer edges. However, for the design of simple connections like bolts, assuming a uniform average shear stress is standard engineering practice.

## 2. Single Shear vs. Double Shear

Understanding the geometry of a connection is vital for calculating the correct shear area $A$.

### Single Shear
In a standard lap joint (two plates overlapping, joined by one bolt), there is only **one** plane of the bolt subjected to shear. The internal shear force $V$ acting on that single cross-section is equal to the total applied load $P$.
$$ \tau_{avg} = \frac{P}{A_{bolt}} $$

### Double Shear
In a double-lap joint (a central plate sandwiched between two outer plates, with a bolt passing through all three), there are **two** distinct shear planes on the bolt.
To satisfy equilibrium of the central plate, the total applied load $P$ is resisted equally by the two cross-sections of the bolt. Therefore, the internal shear force $V$ on *each* plane is $P/2$.
$$ \tau_{avg} = \frac{P/2}{A_{bolt}} = \frac{P}{2 A_{bolt}} $$
A bolt in double shear can safely carry twice the load of a bolt in single shear.

## 3. Punching Shear

Punching shear occurs when a highly concentrated load attempts to punch a hole straight through a flat plate or slab. 
Example: A metal punch creating a circular hole in a sheet of steel.
The shear area $A$ is the *cylindrical surface area* of the slug being punched out, not the cross-sectional area of the punch itself.
$$ A = \text{Perimeter} \times \text{Thickness} = (\pi d) t $$
$$ \tau_{avg} = \frac{P}{\pi d t} $$
