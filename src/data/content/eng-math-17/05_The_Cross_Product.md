# 5. The Cross Product (Vector Product)

The Dot Product inputs two vectors and outputs a scalar. 
The **Cross Product** inputs two vectors and outputs a **brand new vector** that is perfectly perpendicular to both of the original vectors!

Because it relies on the geometry of 3-dimensional space, the cross product is only defined for 3D vectors. (You cannot take the cross product of 2D or 4D vectors).

### The Right-Hand Rule
If you have two vectors $\mathbf{a}$ and $\mathbf{b}$ lying flat on a table, their cross product $\mathbf{a} \times \mathbf{b}$ will point straight up off the table, perfectly perpendicular to both. 
But wait—couldn't it also point straight *down* through the table? Both directions are perpendicular.

To resolve this ambiguity, mathematics uses the **Right-Hand Rule**:
1. Point the flat fingers of your right hand in the direction of the first vector ($\mathbf{a}$).
2. Curl your fingers toward the second vector ($\mathbf{b}$).
3. Your outstretched thumb points in the exact direction of the cross product $\mathbf{a} \times \mathbf{b}$.

### The Geometric Definition
We know the direction from the Right-Hand Rule. What about the magnitude (length) of the new vector?
$$ \|\mathbf{a} \times \mathbf{b}\| = \|\mathbf{a}\| \|\mathbf{b}\| \sin(\theta) $$
*(Notice this uses $\sin(\theta)$ instead of the $\cos(\theta)$ used in the dot product).*

**Physical Meaning:** The magnitude of the cross product is exactly equal to the **Area of the Parallelogram** formed by the two vectors! 

### The Algebraic Calculation (Determinants)
To actually calculate the coordinates of the cross product, we use a 3x3 matrix determinant.
Place the basis vectors $\mathbf{i, j, k}$ in the top row. Place $\mathbf{a}$ in the middle row. Place $\mathbf{b}$ in the bottom row.

$$ \mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} $$

Using cofactor expansion across the top row:
$$ = \mathbf{i}(a_2b_3 - a_3b_2) - \mathbf{j}(a_1b_3 - a_3b_1) + \mathbf{k}(a_1b_2 - a_2b_1) $$
$$ = \langle (a_2b_3 - a_3b_2), \, -(a_1b_3 - a_3b_1), \, (a_1b_2 - a_2b_1) \rangle $$
*(Don't forget the negative sign on the $\mathbf{j}$ component!)*
