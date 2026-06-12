# 3. Line Integrals of Vector Fields (Work)

While scalar line integrals are useful for finding the mass of a wire, integrating a **Vector Field** along a curve $C$ calculates a vital physics concept: **Work**.

If $\mathbf{F}$ is a force field (like wind or gravity), and a particle moves along a path $C$, the total work done by the force field on the particle is the line integral of the tangential component of the force.

### Mathematical Definition
$$ W = \int_C \mathbf{F} \cdot d\mathbf{r} $$

Notice the dot product! We are dotting the force vector $\mathbf{F}$ with the displacement vector $d\mathbf{r}$. 
*   If the force pushes *with* your motion, work is positive.
*   If the force pushes *against* your motion, work is negative.
*   If the force is completely *perpendicular* to your motion, it does zero work.

### How to Evaluate Vector Line Integrals
The process is very similar to scalar line integrals.

**Step 1: Parameterize the Curve**
$$ \mathbf{r}(t) = \langle x(t), y(t) \rangle \quad \text{for} \quad a \le t \le b $$

**Step 2: Find the Derivative Vector ($d\mathbf{r}$)**
Instead of finding the magnitude $ds$, simply take the derivative vector and multiply by $dt$.
$$ \mathbf{r}'(t) = \langle x'(t), y'(t) \rangle \implies d\mathbf{r} = \mathbf{r}'(t)dt $$

**Step 3: Set up and Evaluate**
Substitute the parameterization into $\mathbf{F}$, take the dot product with $\mathbf{r}'(t)$, and integrate from $a$ to $b$.
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt $$

### Alternative Notation ($dx$ and $dy$)
Often, vector line integrals are written in differential form without the dot product:
If $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$ and $d\mathbf{r} = dx\mathbf{i} + dy\mathbf{j}$, the dot product expands to:
$$ \int_C P\,dx + Q\,dy $$

### Worked Example
**Problem:** Find the work done by the force field $\mathbf{F}(x,y) = x^2 \mathbf{i} - xy \mathbf{j}$ in moving a particle along the quarter circle $\mathbf{r}(t) = \cos(t)\mathbf{i} + \sin(t)\mathbf{j}$ from $t=0$ to $t=\pi/2$.

**Step 1: Parameterization** (Given)
*   $x = \cos(t)$
*   $y = \sin(t)$
*   $0 \le t \le \pi/2$

**Step 2: Find $\mathbf{r}'(t)$**
*   $x' = -\sin(t)$
*   $y' = \cos(t)$
$$ \mathbf{r}'(t) = \langle -\sin(t), \cos(t) \rangle $$

**Step 3: Plug into $\mathbf{F}$**
Substitute $x$ and $y$ into $\mathbf{F} = \langle x^2, -xy \rangle$:
$$ \mathbf{F}(t) = \langle \cos^2(t), -\cos(t)\sin(t) \rangle $$

**Step 4: Take the Dot Product**
$$ \mathbf{F}(t) \cdot \mathbf{r}'(t) = (\cos^2(t))(-\sin(t)) + (-\cos(t)\sin(t))(\cos(t)) $$
$$ = -\cos^2(t)\sin(t) - \cos^2(t)\sin(t) = -2\cos^2(t)\sin(t) $$

**Step 5: Integrate**
$$ W = \int_{0}^{\pi/2} -2\cos^2(t)\sin(t) \, dt $$
Use u-substitution: Let $u = \cos(t)$, $du = -\sin(t)dt$.
Limits: $u(0) = 1$, $u(\pi/2) = 0$.
$$ \int_{1}^{0} -2u^2 (-du) = \int_{1}^{0} 2u^2 du = \left[ \frac{2}{3}u^3 \right]_{1}^{0} = 0 - \frac{2}{3} = \mathbf{-\frac{2}{3}} $$

The force field does negative work, meaning it generally opposed the particle's motion.


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Line Integrals Vector",
        "icon": "BrainCircuit",
        "description": "Topic: Line Integrals Vector"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Vector Fields (F)",
        "icon": "FunctionSquare",
        "description": "Assigning a vector to every point in space."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Line Integrals",
        "icon": "Sigma",
        "description": "Integrating a function or field along a curve C."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Conservative Fields",
        "icon": "Activity",
        "description": "Path independence where ∇ × F = 0."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Curl (∇ × F)",
        "icon": "Layers",
        "description": "Measures the macroscopic rotation of the field."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Divergence (∇ · F)",
        "icon": "Target",
        "description": "Measures the magnitude of a source or sink at a given point."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "5",
      "target": "6",
      "animated": true
    }
  ]
}
```
