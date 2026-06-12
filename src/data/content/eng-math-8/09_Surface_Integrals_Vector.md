# 9. Surface Integrals of Vector Fields (Flux)

Just as the line integral of a vector field calculates **Work** (the tangential component along a curve), the surface integral of a vector field calculates **Flux** (the perpendicular component flowing *through* a surface).

If $\mathbf{F}$ is a vector field representing the flow of a fluid (like wind or water), and $S$ is a surface (like a net or a sail), the Flux is the total volume of fluid passing through the surface per unit time.

### The Mathematical Definition
$$ \Phi = \iint_S \mathbf{F} \cdot d\mathbf{S} $$

Notice the bold $d\mathbf{S}$. This is a vector. It combines the scalar surface area element $dS$ with the unit normal vector $\mathbf{n}$ that points outward from the surface: $d\mathbf{S} = \mathbf{n} dS$.

The dot product $\mathbf{F} \cdot \mathbf{n}$ isolates only the component of the flow that is perfectly perpendicular to the surface. (Water flowing parallel to a net doesn't go *through* it).

### How to Evaluate a Flux Integral
**Step 1: Parameterize the Surface**
Find $\mathbf{r}(u,v)$ over domain $D$.

**Step 2: Find the Cross Product Vector**
Calculate the standard cross product of the tangent vectors: $\mathbf{r}_u \times \mathbf{r}_v$.
*(Note: Do not take the magnitude! We want the actual vector. Also, ensure the resulting vector points in the correct "positive" direction specified by the problem. If it points backwards, just multiply the whole vector by -1).*

**Step 3: Set up and Evaluate**
Substitute the parameterization into $\mathbf{F}$, take the dot product with the cross product vector, and integrate over $D$.
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v) \, dA $$

### The Shortcut for $z = g(x,y)$
If the surface is given by $z = g(x,y)$ and is oriented strictly "upward" (the z-component of the normal is positive), the entire cross product math simplifies instantly to:
$$ d\mathbf{S} = \langle -g_x, -g_y, 1 \rangle dA $$

So the flux integral becomes:
$$ \iint_D \langle P, Q, R \rangle \cdot \langle -g_x, -g_y, 1 \rangle dA = \iint_D (-P g_x - Q g_y + R) dA $$

### Worked Example: Upward Flux
**Problem:** Find the upward flux of the field $\mathbf{F} = \langle x, y, z \rangle$ across the paraboloid $z = 4 - x^2 - y^2$ lying above the xy-plane.

**Step 1: Use the Shortcut**
The surface is $g(x,y) = 4 - x^2 - y^2$.
$g_x = -2x$
$g_y = -2y$
The upward normal vector is $\langle -(-2x), -(-2y), 1 \rangle = \langle 2x, 2y, 1 \rangle$.

**Step 2: Take the Dot Product**
$\mathbf{F}$ evaluated on the surface is $\langle x, y, 4 - x^2 - y^2 \rangle$.
$$ \mathbf{F} \cdot (\mathbf{r}_x \times \mathbf{r}_y) = \langle x, y, 4 - x^2 - y^2 \rangle \cdot \langle 2x, 2y, 1 \rangle $$
$$ = 2x^2 + 2y^2 + 4 - x^2 - y^2 = x^2 + y^2 + 4 $$

**Step 3: Integrate over $D$**
The surface hits the xy-plane ($z=0$) at $0 = 4 - x^2 - y^2 \implies x^2 + y^2 = 4$.
The shadow $D$ is a circle of radius 2. Convert to Polar!
$$ \Phi = \int_{0}^{2\pi} \int_{0}^{2} (r^2 + 4) \cdot r \, dr \, d\theta $$
$$ = \int_{0}^{2\pi} \int_{0}^{2} (r^3 + 4r) \, dr \, d\theta $$
$$ = \int_{0}^{2\pi} \left[ \frac{1}{4}r^4 + 2r^2 \right]_{0}^{2} d\theta = \int_{0}^{2\pi} (4 + 8) d\theta = 12(2\pi) = \mathbf{24\pi} $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Surface Integrals Vector",
        "icon": "BrainCircuit",
        "description": "Topic: Surface Integrals Vector"
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
