# 1. Vectors vs. Scalars

In engineering, we measure many physical quantities. Some of these quantities only require a single number to fully describe them. 
For example, the temperature of an engine block might be $150^\circ\text{C}$. The mass of a satellite might be $500\text{ kg}$. 
These quantities have magnitude (size) but no direction. They are called **Scalars**.

Other quantities are completely meaningless without a direction. 
If an air traffic controller says a plane is flying at $500\text{ mph}$, that is incomplete information. Is it flying North? South? Towards a mountain? 
Velocity is a quantity that requires both a magnitude ($500\text{ mph}$) and a direction (North-East). These quantities are called **Vectors**.

### Representing Vectors
A vector is visually represented as an arrow in space. 
*   The **length** of the arrow represents the magnitude.
*   The **point** of the arrow represents the direction.

Mathematically, vectors in 3D space are usually denoted by boldface letters ($\mathbf{v}$) or letters with arrows on top ($\vec{v}$). 
To do actual calculations, we anchor the tail of the vector to the origin $(0,0,0)$ of a Cartesian coordinate system, and we define the vector simply by the $(x, y, z)$ coordinates of its tip.

$$ \mathbf{v} = \langle v_1, v_2, v_3 \rangle $$

*   $v_1$ is the component in the x-direction.
*   $v_2$ is the component in the y-direction.
*   $v_3$ is the component in the z-direction.

### The Standard Basis Vectors
Instead of writing coordinates in angle brackets, engineers often write vectors as a sum of three fundamental "building block" vectors called the standard basis vectors:
*   $\mathbf{i} = \langle 1, 0, 0 \rangle$ (A unit step in the x-direction)
*   $\mathbf{j} = \langle 0, 1, 0 \rangle$ (A unit step in the y-direction)
*   $\mathbf{k} = \langle 0, 0, 1 \rangle$ (A unit step in the z-direction)

Using these, any vector can be written algebraically:
$$ \mathbf{v} = v_1\mathbf{i} + v_2\mathbf{j} + v_3\mathbf{k} $$

### Magnitude
The magnitude (or length) of a vector is calculated using the 3D Pythagorean Theorem, denoted by double bars (or single bars in some texts):
$$ \|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2} $$
