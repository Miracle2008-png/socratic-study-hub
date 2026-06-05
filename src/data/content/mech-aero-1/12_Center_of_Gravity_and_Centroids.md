# Center of Gravity and Centroids

In many engineering problems, forces are distributed over a volume, area, or line rather than being concentrated at a single point. Gravity is the most common example of a distributed volume force. To simplify analysis, we locate the single point where the *resultant* of these distributed forces acts.

## 1. Center of Gravity (CG)

The center of gravity is a point $G$ which locates the resultant weight of a system of particles or a solid body. 
By equating the moment of the resultant weight $W$ to the sum of the moments of the weights of all individual particles $dW$, we derive the coordinates of the CG:

$$ \bar{x} = \frac{\int x \, dW}{\int dW}, \quad \bar{y} = \frac{\int y \, dW}{\int dW}, \quad \bar{z} = \frac{\int z \, dW}{\int dW} $$

## 2. Center of Mass

If the acceleration due to gravity $g$ is constant over the entire body, then $dW = g \, dm$. The $g$ cancels out, and the CG perfectly coincides with the **center of mass**:

$$ \bar{x} = \frac{\int x \, dm}{\int dm}, \quad \bar{y} = \frac{\int y \, dm}{\int dm}, \quad \bar{z} = \frac{\int z \, dm}{\int dm} $$

## 3. Centroid of a Volume, Area, or Line

If the material comprising the body is uniform and homogeneous, the density $\rho$ is constant. The mass is proportional to the volume ($dm = \rho \, dV$). The density cancels out, leaving a strictly geometric property called the **centroid**.

For an **Area** ($A$):
$$ \bar{x} = \frac{\int x \, dA}{\int dA}, \quad \bar{y} = \frac{\int y \, dA}{\int dA} $$

The integral $\int x \, dA$ is known as the **first moment of area** with respect to the y-axis, denoted $Q_y$.

### Symmetry
If an area or volume possesses an axis of symmetry, the centroid *must* lie on that axis. If it has two axes of symmetry, the centroid is located precisely at their intersection.

## 4. Composite Bodies

Most complex engineering structures are composed of simpler geometric shapes (rectangles, triangles, circles). Instead of performing calculus integrations, we can find the centroid of a composite body by treating it as a sum of discrete parts.

$$ \bar{x} = \frac{\sum \tilde{x}_i A_i}{\sum A_i}, \quad \bar{y} = \frac{\sum \tilde{y}_i A_i}{\sum A_i} $$
where:
- $A_i$ is the area of the $i$-th component.
- $\tilde{x}_i, \tilde{y}_i$ are the coordinates of the centroid of the $i$-th component.

*Holes or cutouts* are treated as parts with **negative** area.

## 5. Distributed Loads on Beams

A common application of centroids in statics is replacing a distributed load $w(x)$ (force per unit length) on a beam with a single equivalent concentrated force $F_R$.

1. The magnitude of the resultant force $F_R$ is equal to the total **area** under the load distribution diagram: $F_R = \int w(x) dx$.
2. The line of action of the resultant force passes through the **centroid** of the area under the load diagram.
