# Vector Algebra & 3D Geometry

## 1. Vector Operations

### 1.1 Dot Product
For vectors $ \mathbf{a} = \langle a_1, a_2, a_3 \rangle $ and $ \mathbf{b} = \langle b_1, b_2, b_3 \rangle $:
$$ \mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 $$
$$ \mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos \theta $$

### 1.2 Cross Product
$$ \mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} $$
Magnitude: $ |\mathbf{a} \times \mathbf{b}| = |\mathbf{a}| |\mathbf{b}| \sin \theta $, which represents the area of the parallelogram spanned by $ \mathbf{a} $ and $ \mathbf{b} $.

### 1.3 Scalar Triple Product
The volume of a parallelepiped defined by vectors $ \mathbf{a}, \mathbf{b}, \mathbf{c} $ is given by $ |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})| $.
$$ \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} $$

**Example 1:**
Find the volume of the parallelepiped determined by $ \mathbf{a} = \langle 1, 2, 3 \rangle $, $ \mathbf{b} = \langle -1, 1, 2 \rangle $, and $ \mathbf{c} = \langle 2, 1, 4 \rangle $.

*Step 1: Compute the determinant.*
$$ V = \left| \begin{vmatrix} 1 & 2 & 3 \\ -1 & 1 & 2 \\ 2 & 1 & 4 \end{vmatrix} \right| $$
$$ = |1(4 - 2) - 2(-4 - 4) + 3(-1 - 2)| $$
$$ = |2 + 16 - 9| = 9 $$

## 2. 3D Geometry

### 2.1 Lines in 3D
A line passing through point $ P_0(x_0, y_0, z_0) $ with direction vector $ \mathbf{v} = \langle a, b, c \rangle $ has parametric equations:
$$ x = x_0 + at, \quad y = y_0 + bt, \quad z = z_0 + ct $$

### 2.2 Planes in 3D
A plane containing point $ P_0(x_0, y_0, z_0) $ with normal vector $ \mathbf{n} = \langle A, B, C \rangle $ has the scalar equation:
$$ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 $$

### 2.3 Distance from a Point to a Plane
Distance $ D $ from point $ P_1(x_1, y_1, z_1) $ to the plane $ Ax + By + Cz + D = 0 $:
$$ D = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} $$

**Example 2:**
Find the line of intersection of the planes $ x + y + z = 1 $ and $ x - 2y + 3z = 1 $.

*Step 1: Find the direction vector of the line.*
The direction vector $ \mathbf{v} $ is orthogonal to both normal vectors $ \mathbf{n_1} = \langle 1, 1, 1 \rangle $ and $ \mathbf{n_2} = \langle 1, -2, 3 \rangle $.
$$ \mathbf{v} = \mathbf{n_1} \times \mathbf{n_2} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 1 & 1 \\ 1 & -2 & 3 \end{vmatrix} = \langle 3 - (-2), 1 - 3, -2 - 1 \rangle = \langle 5, -2, -3 \rangle $$

*Step 2: Find a point on the line.*
Set $ z = 0 $.
$$ x + y = 1 $$
$$ x - 2y = 1 $$
Subtracting the second from the first gives $ 3y = 0 \implies y = 0 $. Then $ x = 1 $. Point is $ (1, 0, 0) $.

*Step 3: Write parametric equations.*
$$ x = 1 + 5t, \quad y = -2t, \quad z = -3t $$
