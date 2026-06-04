# 11. Coordinates and Change of Basis

When you write the vector $\mathbf{v} = \langle 3, -2 \rangle$, those numbers aren't absolute truths of the universe. They are just weights for a specific linear combination of the Standard Basis vectors $\mathbf{i}$ and $\mathbf{j}$.
$$
\mathbf{v} = 3\mathbf{i} - 2\mathbf{j}
$$

What if an engineer working on a robotic arm decides to define a completely different, skewed coordinate grid based on the joint angles of the robot? 
Let their basis be $\mathcal{B} = \{\mathbf{b_1}, \mathbf{b_2}\}$.
To them, the exact same physical arrow in space requires a completely different set of weights (coordinates) to describe it!

The coordinates of vector $\mathbf{v}$ relative to the basis $\mathcal{B}$ are written as a column vector with a subscript: $[\mathbf{v}]_\mathcal{B}$.

### The Change of Coordinate Matrix

If we know the weights in the "Robot Basis" $[\mathbf{v}]_\mathcal{B} = \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$, how do we translate that back into Standard coordinates $\mathbf{v}$?

We know the definition is simply a linear combination:
$$
\mathbf{v} = c_1\mathbf{b_1} + c_2\mathbf{b_2}
$$

But we know from Topic 19 that a linear combination can be rewritten as a Matrix-Vector multiplication!
We can take the basis vectors $\mathbf{b_1}, \mathbf{b_2}$ and pack them side-by-side to form the columns of a matrix. This is called the **Change of Coordinate Matrix, $P_\mathcal{B}$**.

$$
P_\mathcal{B} = \begin{bmatrix} \mathbf{b_1} & \mathbf{b_2} \end{bmatrix}
$$

To translate from Robot Coordinates to Standard Coordinates, you just multiply the matrix by the coordinate vector!
$$
\mathbf{v} = P_\mathcal{B} [\mathbf{v}]_\mathcal{B}
$$

### Translating Backwards
What if we have the Standard Coordinates $\mathbf{v}$, and we need to program the robot, so we need to find the Robot Coordinates $[\mathbf{v}]_\mathcal{B}$?

Look at the equation above. It is simply $A\mathbf{x} = \mathbf{b}$.
To isolate the unknown vector on the right, we multiply both sides by the **Inverse Matrix**!

$$
[\mathbf{v}]_\mathcal{B} = P_\mathcal{B}^{-1} \mathbf{v}
$$

Because a Basis is mathematically required to be Linearly Independent, the matrix $P_\mathcal{B}$ will ALWAYS be Full Rank, which guarantees that the Inverse Matrix $P_\mathcal{B}^{-1}$ perfectly exists! This allows us to smoothly translate data back and forth between any coordinate systems in the universe.
