# 4. The Fundamental Theorem of Line Integrals

In single-variable calculus, the Fundamental Theorem of Calculus states that to evaluate an integral, you simply find the antiderivative and plug in the endpoints:
$$ \int_{a}^{b} F'(x) dx = F(b) - F(a) $$

The **Fundamental Theorem of Line Integrals** provides the exact same shortcut for multivariable vector fields!

### The Theorem
If a vector field $\mathbf{F}$ is **conservative** (meaning it is the gradient of some scalar potential function $f$, so $\mathbf{F} = \nabla f$), then the line integral along ANY curve $C$ depends ONLY on the starting point $A$ and the ending point $B$.
$$ \int_C \nabla f \cdot d\mathbf{r} = f(B) - f(A) $$

**Consequences of the Theorem:**
1.  **Path Independence:** It does not matter if the path between $A$ and $B$ is a straight line, a jagged zig-zag, or a wild spiral. If the field is conservative, the work done is exactly the same.
2.  **Closed Loops:** If you travel in a complete circle and return to your starting point (so $A=B$), the work done by a conservative field is strictly zero: $f(A) - f(A) = 0$.
    $$ \oint_C \mathbf{F} \cdot d\mathbf{r} = 0 $$

### How to Find the Potential Function $f$
If you verify that $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the field is conservative. How do you find the "antiderivative" $f(x,y)$?

**Step 1:** You know $\frac{\partial f}{\partial x} = P$. Integrate $P$ with respect to $x$ (treating $y$ as a constant). Instead of adding $+C$, add a function of $y$, $+ g(y)$.
**Step 2:** Take the derivative of your new $f$ with respect to $y$, and set it equal to $Q$.
**Step 3:** Solve for $g'(y)$, integrate it to find $g(y)$, and plug it back into your $f$ equation.

### Worked Example
**Problem:** Find the work done by $\mathbf{F} = (2x \cos(y)) \mathbf{i} + (-x^2 \sin(y)) \mathbf{j}$ in moving a particle from $(1, 0)$ to $(3, \pi/2)$ along a jagged path.

**1. Is it conservative?**
$P = 2x \cos(y) \implies P_y = -2x \sin(y)$
$Q = -x^2 \sin(y) \implies Q_x = -2x \sin(y)$
Since $P_y = Q_x$, it is conservative! Path Independence applies.

**2. Find potential function $f(x,y)$**
Integrate $P$ with respect to $x$:
$$ f(x,y) = \int 2x \cos(y) dx = x^2 \cos(y) + g(y) $$

Differentiate this $f$ with respect to $y$ and set it equal to $Q$:
$$ f_y = -x^2 \sin(y) + g'(y) $$
Set equal to $Q$:
$$ -x^2 \sin(y) + g'(y) = -x^2 \sin(y) $$
$$ g'(y) = 0 \implies g(y) = C $$
So, our potential function is $f(x,y) = x^2 \cos(y)$.

**3. Apply the Fundamental Theorem**
Instead of parameterizing the jagged path, simply plug the endpoints into $f$:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A) = f(3, \pi/2) - f(1, 0) $$
$$ = [(3)^2 \cos(\pi/2)] - [(1)^2 \cos(0)] $$
$$ = [9(0)] - [1(1)] = -1 $$

The work done is exactly **-1**, without doing any nasty path parameterization!


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Fundamental Theorem",
        "icon": "BrainCircuit",
        "description": "Topic: Fundamental Theorem"
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
