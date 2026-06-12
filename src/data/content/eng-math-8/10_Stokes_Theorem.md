# 10. Stokes' Theorem

Stokes' Theorem is the 3D big brother of Green's Theorem. 

Remember Green's Theorem? It allowed us to turn a 1D line integral around a 2D loop into a 2D double integral of the field's "curl" over the flat area inside the loop.
**Stokes' Theorem** allows us to turn a 1D line integral around a 3D loop into a 2D surface integral of the field's curl over *any* curved 3D surface bounded by that loop.

### The Theorem
Let $S$ be an oriented, piecewise-smooth surface bounded by a simple, closed, piecewise-smooth curve $C$ with positive orientation. If $\mathbf{F}$ is a vector field with continuous partial derivatives, then:

$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S \text{curl } \mathbf{F} \cdot d\mathbf{S} $$

**The "Soap Bubble" Principle:**
If you have a circular wire ring ($C$), you can dip it in soap and it creates a flat film ($S$). If you blow on it, the film bulges into a dome. Stokes' Theorem says that integrating the curl over the flat film yields the exact same answer as integrating the curl over the giant bulging dome, because both surfaces share the exact same boundary curve $C$.

### When to use Stokes' Theorem
You use this theorem when one side of the equation is a nightmare to compute, and the other side is easy.
1.  **To evaluate a Line Integral:** If $C$ is a complex 3D shape (like the intersection of a cylinder and a plane), parameterizing the curve is brutal. Instead, calculate the curl of $\mathbf{F}$, and do a surface integral over the flat planar slice inside the curve.
2.  **To evaluate a Surface Integral:** If you are asked to find the flux of a field that *happens to be the curl of another field*, you can skip the complex surface integral and just do a line integral around its boundary edge.

### The Right-Hand Rule (Orientation)
How do you know which way the surface normal $\mathbf{n}$ must point?
Point the thumb of your right hand in the direction of the normal vector $\mathbf{n}$. Your fingers will naturally curl in the direction of the positive orientation of the boundary curve $C$.

### Worked Example: Using the "Soap Bubble"
**Problem:** Evaluate the flux integral $\iint_S \text{curl } \mathbf{F} \cdot d\mathbf{S}$, where $\mathbf{F} = \langle z^2, y^2, x \rangle$ and $S$ is the upper hemisphere $x^2 + y^2 + z^2 = 4$ ($z \ge 0$), oriented upwards.

**Step 1: Recognize the trick**
Computing the curl of $\mathbf{F}$ and then doing a spherical surface integral over a hemisphere is a massive amount of work.
By Stokes' Theorem, the flux of the curl over the dome is exactly equal to the line integral around the base boundary curve $C$.

**Step 2: Find the Boundary Curve $C$**
The boundary of the hemisphere is the circle on the xy-plane ($z=0$):
$x^2 + y^2 = 4$.
Parameterize this circle (radius 2):
$\mathbf{r}(t) = \langle 2\cos(t), 2\sin(t), 0 \rangle$ for $0 \le t \le 2\pi$.

**Step 3: Evaluate the Line Integral instead!**
Find $d\mathbf{r}$:
$\mathbf{r}'(t) = \langle -2\sin(t), 2\cos(t), 0 \rangle dt$

Plug parameterization into $\mathbf{F} = \langle z^2, y^2, x \rangle$:
Since $z=0$, $\mathbf{F}(t) = \langle 0, 4\sin^2(t), 2\cos(t) \rangle$.

Take the dot product $\mathbf{F} \cdot d\mathbf{r}$:
$(0)(-2\sin(t)) + (4\sin^2(t))(2\cos(t)) + (2\cos(t))(0) = 8\sin^2(t)\cos(t)$

Integrate:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{2\pi} 8\sin^2(t)\cos(t) dt $$
U-sub ($u = \sin(t), du = \cos(t)dt$):
$$ \left[ \frac{8}{3}\sin^3(t) \right]_{0}^{2\pi} = \frac{8}{3}(0) - \frac{8}{3}(0) = \mathbf{0} $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Stokes Theorem",
        "icon": "BrainCircuit",
        "description": "Topic: Stokes Theorem"
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
