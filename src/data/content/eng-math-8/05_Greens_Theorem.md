# 5. Green's Theorem

If a vector field is conservative, we know that the line integral around a closed loop is zero. But what if the vector field is **not** conservative? 

If the loop is closed, parameterizing the entire path (which might be a square, a triangle, or a weird blob) can be extremely tedious. **Green's Theorem** provides a magical shortcut: it translates the difficult 1D line integral along the boundary curve into a much simpler 2D double integral over the area inside.

### The Theorem
Let $C$ be a positively oriented (counterclockwise), piecewise-smooth, simple closed curve in a plane, and let $D$ be the region bounded by $C$. If $\mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$ is a vector field with continuous partial derivatives in an open region containing $D$, then:

$$ \oint_C P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA $$

**Wait, what is that term inside the integral?**
Notice the term $\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$. 
Recall the test for a conservative vector field: $Q_x = P_y$. If the field is conservative, $Q_x - P_y = 0$, and Green's Theorem immediately proves that the closed loop integral is $\iint 0 \, dA = 0$.
When the field is *not* conservative, this term represents the "macroscopic spin" (or 2D curl) of the field. Green's Theorem states that summing up all the tiny spins inside the area perfectly equals the macroscopic circulation along the boundary!

### When to use Green's Theorem
1.  You are asked to evaluate a line integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$.
2.  The curve $C$ is a completely **closed loop**.
3.  The curve is oriented **counterclockwise** (if it's clockwise, just multiply your final answer by $-1$).

### Worked Example
**Problem:** Evaluate $\oint_C (3y - e^{\sin x}) dx + (7x + \sqrt{y^4+1}) dy$, where $C$ is the circle $x^2 + y^2 = 9$ oriented counterclockwise.

**Step 1: Attempt Parameterization (And give up)**
Imagine plugging $x = 3\cos(t)$ and $y = 3\sin(t)$ into $e^{\sin x}$ and $\sqrt{y^4+1}$. The integral would be mathematically impossible. We MUST use Green's Theorem.

**Step 2: Identify $P$ and $Q$**
$P(x,y) = 3y - e^{\sin x}$
$Q(x,y) = 7x + \sqrt{y^4+1}$

**Step 3: Calculate the Partial Derivatives**
Notice how the horrific terms completely vanish during partial differentiation:
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(7x + \sqrt{y^4+1}) = 7$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(3y - e^{\sin x}) = 3$

The "curl" term is simply: $Q_x - P_y = 7 - 3 = 4$.

**Step 4: Set up the Double Integral**
By Green's Theorem:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D (4) dA = 4 \iint_D 1 \, dA $$

**Step 5: Evaluate**
Remember from our Multiple Integrals topic: $\iint_D 1 \, dA$ is just the geometric area of region $D$.
Region $D$ is a circle of radius $r=3$. Its area is $\pi r^2 = 9\pi$.
Therefore:
$$ 4 \cdot \text{Area}(D) = 4(9\pi) = \mathbf{36\pi} $$

An impossible line integral was evaluated in three lines of basic algebra thanks to Green's Theorem.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Greens Theorem",
        "icon": "BrainCircuit",
        "description": "Topic: Greens Theorem"
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
