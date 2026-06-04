# 6. Curl and Divergence

Green's theorem showed us that vector fields have a hidden "microscopic swirl" factor. When we expand to full 3D space, we must formalize two fundamental operations that describe exactly how fluid flows in a vector field: **Curl** and **Divergence**.

We define the "Del" operator as a vector of partial derivatives:
$$
\nabla = \left\langle \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \right\rangle
$$

### 1. Curl (The Microscopic Rotation)
If you place a tiny, microscopic paddlewheel into a flowing river (a vector field $\mathbf{F}$), will the paddlewheel spin? If the water on the left side of the paddle is moving faster than the water on the right, it will!

The **Curl** of a vector field is a brand new Vector Field that measures the axis and magnitude of that microscopic rotation.
We calculate it by taking the **Cross Product** of the Del operator and the Vector Field:

$$
\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = 
\det \begin{bmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{bmatrix}
$$

*   **Irrotational Fields:** If $\text{curl } \mathbf{F} = \mathbf{0}$ everywhere, the fluid has zero microscopic rotation. The paddlewheel will glide down the river without spinning. This is the ultimate 3D test for a Conservative Vector Field! If curl is zero, the field is conservative!

### 2. Divergence (The Microscopic Expansion)
If you dump a drop of dye into the river, does it spread out and expand, or does it compress?
The **Divergence** of a vector field is a Scalar function that measures whether fluid is acting as a "Source" (expanding outward) or a "Sink" (compressing inward) at a given point.

We calculate it by taking the **Dot Product** of the Del operator and the Vector Field:

$$
\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

*   If Divergence is Positive: The fluid is expanding (a Source, like a bomb exploding).
*   If Divergence is Negative: The fluid is compressing (a Sink, like water draining down a bathtub).
*   **Incompressible Fields:** If $\text{div } \mathbf{F} = 0$ everywhere, the fluid never expands or compresses. (Water is highly incompressible, making this a foundational assumption in Naval Architecture and Fluid Dynamics).
