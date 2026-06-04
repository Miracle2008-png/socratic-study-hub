# 7. Scalar Triple Product (Volume)

We know how to multiply two vectors. What if we want to multiply three vectors together? 
There are multiple ways to do this, but the most useful in engineering is the **Scalar Triple Product**.

It combines a cross product and a dot product:
$$ \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) $$

Because the cross product $(\mathbf{b} \times \mathbf{c})$ outputs a vector, and you then dot it with vector $\mathbf{a}$, the final result is a scalar number.

### Geometric Meaning: Volume
If you take any three 3D vectors and place their tails together at the origin, they will form the edges of a slanted, 3D rectangular box called a **Parallelepiped**.

The magnitude of the cross product $\|\mathbf{b} \times \mathbf{c}\|$ gives the Area of the base. 
The dot product with $\mathbf{a}$ calculates the perpendicular Height of the box. 
Area of base $\times$ Height = Volume.

**The absolute value of the scalar triple product is exactly equal to the Volume of the parallelepiped formed by the three vectors!**
$$ V = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})| $$

### The Algebraic Calculation
Calculating a cross product and then a dot product by hand is tedious. Fortunately, linear algebra provides a massive shortcut. The scalar triple product is exactly equal to the determinant of the 3x3 matrix formed by simply stacking the three vectors on top of each other!

$$ \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} $$

### Coplanar Test
What happens if the volume of the box is zero? That means the box has been squished completely flat.
If the scalar triple product equals zero, it means all three vectors lie perfectly flat in the exact same 2D plane. 
This is the ultimate mathematical test to check if three vectors are **Coplanar**.
