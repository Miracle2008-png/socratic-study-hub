---
title: "Virtual Work Applied to Trusses"
---

# Virtual Work Applied to Trusses

Trusses are the perfect application for the Principle of Virtual Work. Because trusses are composed entirely of two-force members, the internal deformation $dL$ is strictly axial stretching or shrinking.

From Hooke's Law, we know the real axial deformation of a truss member is:
$$ dL = \frac{N L}{A E} $$
Where $N$ is the real internal axial force caused by the real external loads.

Substitute this into the general Virtual Work equation ($1 \cdot \Delta = \sum n \cdot dL$) to get the truss-specific formula:

$$ 1 \cdot \Delta = \sum \frac{n N L}{A E} $$

## 1. The Step-by-Step Procedure

To find the deflection of a specific joint on a truss:

1.  **Analyze the Real System:** Apply all real external loads to the truss. Use the Method of Joints or Sections to solve for the real internal force ($N$) in every single member. Note whether they are tension (+) or compression (-).
2.  **Create the Virtual System:** Remove all real loads from your drawing. Apply a single virtual force of 1.0 to the joint where you want to find the deflection. Point it in the direction you *guess* it will move (e.g., downward).
3.  **Analyze the Virtual System:** Use the Method of Joints again to solve for the virtual internal force ($n$) in every single member due to the 1.0 load.
4.  **Tabulate:** Create a table with a row for each member. List $n$, $N$, $L$, $A$, and $E$. Multiply them all together ($nNL/AE$) for each member.
5.  **Summate:** Add up the final column of the table. The sum is the exact deflection $\Delta$.

## 2. Interpreting the Result

The mathematics automatically handles the geometry. If a member is in real tension ($N$ is positive) and virtual compression ($n$ is negative), the product is negative.

*   If the final sum $\Delta$ is **positive**, it means your initial guess for the direction of the 1.0 virtual load was correct. The joint moved in that direction.
*   If the final sum $\Delta$ is **negative**, the joint moved in the exact opposite direction of your applied virtual load.

## 3. Dealing with Temperature and Fabrication Errors

The brilliant thing about Virtual Work is that $dL$ represents *any* type of real internal deformation.
If a truss member deforms not because of load, but because it was left in the sun and expanded thermally, you simply substitute the thermal expansion formula ($\Delta L = \alpha \Delta T L$) in for $dL$:
$$ 1 \cdot \Delta = \sum n (\alpha \Delta T L) $$

If a truss member was manufactured 5 mm too short at the factory, you just plug $dL = -0.005$ meters directly into the equation. The Virtual Work equation will instantly tell you how that one manufacturing error warps the entire truss geometry.
