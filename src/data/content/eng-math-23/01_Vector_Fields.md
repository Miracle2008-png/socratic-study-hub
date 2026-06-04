# 1. Vector Fields

Up until this point in multivariable calculus, we have studied scalar functions like $f(x,y,z) = x^2 + yz$. If you input a 3D coordinate $(x,y,z)$, the function spits out a single scalar number (like temperature, pressure, or density).

But what if we want to model something that has both a magnitude and a direction? What if we want to model the wind blowing across a city, or the gravitational pull of a planet, or the magnetic field surrounding a wire? 

We must upgrade from Scalar Functions to **Vector Fields**.

### The Definition of a Vector Field
A Vector Field is a function $\mathbf{F}$ that assigns a specific physical vector to every single point in space. 

Instead of outputting a single number, it outputs a multi-component vector:
$$
\mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}
$$
*(Or in 3D: $\mathbf{F}(x,y,z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$)*

If you plot a vector field, you draw an entire grid of tiny arrows. At the point $(1,2)$, you plug $x=1, y=2$ into the formula, calculate the resulting vector, and draw an arrow pointing in that exact direction, scaled to the exact magnitude.

### Common Physical Examples

1.  **Velocity Fields (Fluid Dynamics):**
    Imagine water flowing down a river. At every single point in the water, a particle is moving with a specific speed in a specific direction. The entire river is a velocity vector field $\mathbf{V}(x,y,z)$.
2.  **Gravitational Fields (Astrophysics):**
    Newton's Law of Universal Gravitation is written as a vector field. The Earth generates a field in space where every single point contains an arrow pointing directly towards the center of the Earth. The closer you get to the Earth, the longer the arrows get (the stronger the force).
    $$
    \mathbf{F}(\mathbf{x}) = - \frac{GMm}{|\mathbf{x}|^3} \mathbf{x}
    $$
3.  **Electric Fields (Electromagnetism):**
    A charged particle generates an electric field. The arrows point away from positive charges and towards negative charges.

### Gradient Fields
The most mathematically important vector fields are generated directly from scalar functions. 
If you have a scalar temperature function $f(x,y)$, and you take the gradient ($\nabla f$), the output is a vector field!

$$
\nabla f = 
\left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle
$$

A vector field that is the gradient of some scalar function is called a **Gradient Vector Field** (or a **Conservative Vector Field**). As we will discover, these fields possess magical properties that make engineering calculations incredibly easy.
