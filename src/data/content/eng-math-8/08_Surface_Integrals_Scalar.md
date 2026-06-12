# 8. Surface Integrals (Scalar Fields)

We just learned how to find the area of a surface $S$. Now, what if the surface is made of metal, and the density of that metal changes depending on where you are? Or what if a temperature field acts upon the surface?

We need to compute a **Surface Integral of a Scalar Field**. 
This is the 2D equivalent of a line integral. Instead of integrating along a curved wire, we integrate over a curved surface.

### The Mathematical Definition
If $f(x,y,z)$ is a scalar function (like density or temperature), the surface integral of $f$ over the surface $S$ is:
$$ \iint_S f(x,y,z) dS $$

Notice the capital $dS$. This distinguishes it from a flat $dA$ (dxdy) or a path $ds$. It means "sum up the function multiplied by the tiny patches of curved surface area".

### How to Evaluate
Remember from the previous page that $dS = |\mathbf{r}_u \times \mathbf{r}_v| du dv$. 
We simply parameterize the surface, plug the parameterization into the function, and multiply by the surface area element.

$$ \iint_S f(x,y,z) dS = \iint_D f(\mathbf{r}(u,v)) \, |\mathbf{r}_u \times \mathbf{r}_v| \, dA $$

### Using the Function Shortcut
If the surface $S$ is given simply as $z = g(x,y)$, then we use the shortcut $dS = \sqrt{1 + (g_x)^2 + (g_y)^2} dA$.
The integral evaluates as:
$$ \iint_D f(x, y, g(x,y)) \sqrt{1 + \left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2} dA $$

### Worked Example
**Problem:** Evaluate $\iint_S z^2 dS$, where $S$ is the unit sphere $x^2 + y^2 + z^2 = 1$.

**Step 1: Parameterize the Sphere**
The shortcut $z = f(x,y)$ is annoying for a full sphere because you have to split it into a top and bottom hemisphere. 
Instead, parameterize the sphere using spherical coordinates where $\rho = 1$:
$$ \mathbf{r}(\phi, \theta) = \langle \sin\phi\cos\theta, \sin\phi\sin\theta, \cos\phi \rangle $$
Domain $D$: $0 \le \phi \le \pi$, $0 \le \theta \le 2\pi$.

**Step 2: Find the $dS$ element for a Sphere**
You can do the cross product $|\mathbf{r}_\phi \times \mathbf{r}_\theta|$, but for a sphere of radius $R$, the result is always $R^2 \sin\phi$.
Since $R=1$, our $dS = \sin\phi \, d\phi \, d\theta$.

**Step 3: Plug into the Function**
Our function is $f(x,y,z) = z^2$. 
From our parameterization, $z = \cos\phi$. Therefore, $f(\mathbf{r}(\phi, \theta)) = \cos^2\phi$.

**Step 4: Set up and Evaluate**
$$ \iint_S z^2 dS = \int_{0}^{2\pi} \int_{0}^{\pi} (\cos^2\phi) (\sin\phi) \, d\phi \, d\theta $$

Inner integral ($d\phi$):
$$ \int_{0}^{\pi} \cos^2\phi \sin\phi \, d\phi $$
Use u-sub: $u = \cos\phi \implies du = -\sin\phi d\phi \implies -du = \sin\phi d\phi$.
Limits: $u(0)=1$, $u(\pi)=-1$.
$$ \int_{1}^{-1} u^2 (-du) = \int_{-1}^{1} u^2 du = \left[ \frac{1}{3}u^3 \right]_{-1}^{1} = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3} $$

Outer integral ($d\theta$):
$$ \int_{0}^{2\pi} \frac{2}{3} d\theta = \frac{2}{3}(2\pi) = \mathbf{\frac{4\pi}{3}} $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Surface Integrals Scalar",
        "icon": "BrainCircuit",
        "description": "Topic: Surface Integrals Scalar"
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
