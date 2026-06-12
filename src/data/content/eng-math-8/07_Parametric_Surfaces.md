# 7. Parametric Surfaces and Surface Area

Just as we parameterized a 1D curve $C$ using a single variable $t$, we can parameterize a 2D surface $S$ floating in 3D space using two variables, typically called $u$ and $v$.

A **Parametric Surface** is defined by a vector function:
$$ \mathbf{r}(u,v) = x(u,v)\mathbf{i} + y(u,v)\mathbf{j} + z(u,v)\mathbf{k} $$
where $(u,v)$ lie in some 2D parameter domain $D$.

### Finding the Surface Area
Recall that when finding arc length, we used the length of the tangent vector: $ds = |\mathbf{r}'(t)| dt$.
For a surface, there are TWO tangent vectors at every point: one in the $u$ direction ($\mathbf{r}_u$) and one in the $v$ direction ($\mathbf{r}_v$).

If we take the cross product of these two tangent vectors, $\mathbf{r}_u \times \mathbf{r}_v$, we get a **normal vector** that points perfectly perpendicular to the surface.
The *magnitude* of this cross product gives the area of the tiny parallelogram patch on the surface.

Therefore, the differential surface area element $dS$ is:
$$ dS = |\mathbf{r}_u \times \mathbf{r}_v| \, du \, dv $$

To find the total surface area of $S$, we integrate this element over the parameter domain $D$:
$$ A(S) = \iint_D |\mathbf{r}_u \times \mathbf{r}_v| \, dA $$

### The Special Case: Graphs of Functions $z = f(x,y)$
Most surfaces in engineering are given simply as a height function above the xy-plane: $z = f(x,y)$.
In this case, parameterization is trivial. Just let $u=x$ and $v=y$.
*   $\mathbf{r}(x,y) = \langle x, y, f(x,y) \rangle$

When we take the partial derivatives and cross product of this specific parameterization, a beautifully simple formula emerges. You should memorize this shortcut:
$$ |\mathbf{r}_x \times \mathbf{r}_y| = \sqrt{1 + \left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2} $$

So, for a surface given as $z=f(x,y)$, the surface area is:
$$ A(S) = \iint_D \sqrt{1 + (f_x)^2 + (f_y)^2} \, dA $$

### Worked Example
**Problem:** Find the surface area of the portion of the paraboloid $z = x^2 + y^2$ that lies below the plane $z=9$.

**Step 1: Use the Shortcut Formula**
The surface is $f(x,y) = x^2 + y^2$.
$f_x = 2x$
$f_y = 2y$
The magnitude is $\sqrt{1 + (2x)^2 + (2y)^2} = \sqrt{1 + 4x^2 + 4y^2}$.

**Step 2: Determine the Domain $D$**
The surface is capped at $z=9$. The intersection is $9 = x^2 + y^2$.
So the shadow $D$ on the xy-plane is a solid circle of radius 3.

**Step 3: Set up the Integral (Use Polar)**
Because the shadow is a circle, we convert $x^2+y^2$ to $r^2$ and use polar coordinates.
$$ A(S) = \iint_D \sqrt{1 + 4(x^2 + y^2)} \, dA = \int_{0}^{2\pi} \int_{0}^{3} \sqrt{1 + 4r^2} \cdot r \, dr \, d\theta $$

**Step 4: Evaluate**
Inner Integral (u-sub: $u = 1+4r^2, du = 8rdr \implies \frac{1}{8}du = rdr$):
$$ \int_{0}^{3} r(1+4r^2)^{1/2} dr = \frac{1}{8} \left[ \frac{2}{3}(1+4r^2)^{3/2} \right]_{0}^{3} $$
$$ = \frac{1}{12} \left[ (1+4(9))^{3/2} - (1)^{3/2} \right] = \frac{1}{12} (37^{3/2} - 1) $$

Outer Integral:
$$ \int_{0}^{2\pi} \frac{1}{12} (37\sqrt{37} - 1) d\theta = \frac{2\pi}{12}(37\sqrt{37} - 1) = \mathbf{\frac{\pi}{6}(37\sqrt{37} - 1)} $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Parametric Surfaces",
        "icon": "BrainCircuit",
        "description": "Topic: Parametric Surfaces"
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
