# 4. Projections and Orthogonality

One of the most useful applications of the dot product is finding **Projections**. 

Imagine shining a flashlight directly down onto Vector $\mathbf{a}$ from above, casting a shadow onto Vector $\mathbf{b}$. The shadow that Vector $\mathbf{a}$ casts on Vector $\mathbf{b}$ is called the Vector Projection of $\mathbf{a}$ onto $\mathbf{b}$.

### The Scalar Component
Before finding the shadow vector itself, we first find its length. How long is the shadow?
Using basic SOH-CAH-TOA trigonometry, if $\theta$ is the angle between them, the length of the shadow is $\|\mathbf{a}\|\cos\theta$.
Using our dot product geometric formula ($\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos\theta$), we can isolate this length:
$$ \text{comp}_{\mathbf{b}} \mathbf{a} = \|\mathbf{a}\|\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|} $$
This scalar length is often called the *component of $\mathbf{a}$ along $\mathbf{b}$*.

### The Vector Projection
Now that we have the length of the shadow, we need to turn it back into a vector that points in the direction of $\mathbf{b}$. 
How do we grab the pure direction of $\mathbf{b}$ without changing the length we just found? We use a unit vector! We multiply the scalar length by the normalized unit vector $\frac{\mathbf{b}}{\|\mathbf{b}\|}$.

$$ \text{proj}_{\mathbf{b}} \mathbf{a} = \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|} \right) \left( \frac{\mathbf{b}}{\|\mathbf{b}\|} \right) = \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{b}\|^2} \right) \mathbf{b} $$

Since $\|\mathbf{b}\|^2 = \mathbf{b} \cdot \mathbf{b}$, we can write the elegant final formula:
$$ \text{proj}_{\mathbf{b}} \mathbf{a} = \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{b} \cdot \mathbf{b}} \right) \mathbf{b} $$
*(Notice that the entire term in parentheses is just a scalar number, which then scales the vector $\mathbf{b}$).*

### Orthogonal Decomposition
Any vector $\mathbf{a}$ can be split into two perfectly perpendicular (orthogonal) pieces relative to a line $\mathbf{b}$:
1.  The piece parallel to $\mathbf{b}$ (which is just the projection we found above).
2.  The piece perpendicular to $\mathbf{b}$.

$$ \mathbf{a} = \mathbf{a}_{\parallel} + \mathbf{a}_{\perp} $$
Since $\mathbf{a}_{\parallel} = \text{proj}_{\mathbf{b}} \mathbf{a}$, we can easily find the perpendicular piece by simple subtraction:
$$ \mathbf{a}_{\perp} = \mathbf{a} - \text{proj}_{\mathbf{b}} \mathbf{a} $$

This technique is used constantly in physics to split gravitational forces into a component sliding down a ramp ($\parallel$) and a normal force pressing into the ramp ($\perp$).
