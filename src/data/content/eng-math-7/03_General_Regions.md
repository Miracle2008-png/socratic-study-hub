# 3. Double Integrals over General Regions

Most engineering problems do not involve perfect rectangles. We must integrate over general 2D regions where the boundaries are curved functions, not constants. 

We classify 2D regions into two types based on how we slice them.

### Type I Regions (Vertical Slicing)
A Type I region is bounded on the left and right by constants $x=a$ and $x=b$, and bounded on the top and bottom by continuous curves $y = g_2(x)$ and $y = g_1(x)$.
*   $a \le x \le b$ (Outer limits are constants)
*   $g_1(x) \le y \le g_2(x)$ (Inner limits are functions of $x$)

For a Type I region, we integrate with respect to $y$ first ($dy\,dx$):
$$ \iint_D f(x,y) dA = \int_{a}^{b} \int_{g_1(x)}^{g_2(x)} f(x,y) dy \, dx $$

### Type II Regions (Horizontal Slicing)
A Type II region is bounded on the bottom and top by constants $y=c$ and $y=d$, and bounded on the left and right by continuous curves $x = h_1(y)$ and $x = h_2(y)$.
*   $c \le y \le d$ (Outer limits are constants)
*   $h_1(y) \le x \le h_2(y)$ (Inner limits are functions of $y$)

For a Type II region, we integrate with respect to $x$ first ($dx\,dy$):
$$ \iint_D f(x,y) dA = \int_{c}^{d} \int_{h_1(y)}^{h_2(y)} f(x,y) dx \, dy $$

**Golden Rule:** The outermost integral limits MUST be constants. You cannot have variables in your final evaluation step.

### Worked Example: Type I Region
**Problem:** Evaluate $\iint_D (x + 2y) dA$, where $D$ is the region bounded by the parabolas $y = 2x^2$ and $y = 1 + x^2$.

**Step 1: Find the Intersection Points (the x-limits)**
To find where the parabolas cross, set them equal:
$$ 2x^2 = 1 + x^2 \implies x^2 = 1 \implies x = \pm 1 $$
So, our constant outer limits for $x$ are $-1$ to $1$.

**Step 2: Determine Top and Bottom curves**
Between $x=-1$ and $x=1$ (e.g., at $x=0$), the curve $y = 1+x^2$ is at $y=1$, while $y=2x^2$ is at $y=0$. 
Therefore, $g_2(x) = 1+x^2$ (top curve) and $g_1(x) = 2x^2$ (bottom curve).

**Step 3: Set up and Solve the Integral ($dy$ first)**
$$ I = \int_{-1}^{1} \int_{2x^2}^{1+x^2} (x + 2y) dy \, dx $$

Inner integral (with respect to $y$):
$$ \left[ xy + y^2 \right]_{y=2x^2}^{y=1+x^2} $$
Upper limit: $x(1+x^2) + (1+x^2)^2 = x + x^3 + 1 + 2x^2 + x^4$
Lower limit: $x(2x^2) + (2x^2)^2 = 2x^3 + 4x^4$
Subtract lower from upper:
$$ (x^4 + x^3 + 2x^2 + x + 1) - (4x^4 + 2x^3) = -3x^4 - x^3 + 2x^2 + x + 1 $$

Outer integral (with respect to $x$):
$$ I = \int_{-1}^{1} (-3x^4 - x^3 + 2x^2 + x + 1) dx $$
Since $-x^3$ and $x$ are odd functions integrated over a symmetric interval $[-1, 1]$, they evaluate to 0. We only need to integrate the even terms:
$$ I = 2 \int_{0}^{1} (-3x^4 + 2x^2 + 1) dx $$
$$ I = 2 \left[ -\frac{3}{5}x^5 + \frac{2}{3}x^3 + x \right]_{0}^{1} $$
$$ I = 2 \left( -\frac{3}{5} + \frac{2}{3} + 1 \right) = 2 \left( -\frac{9}{15} + \frac{10}{15} + \frac{15}{15} \right) = 2 \left( \frac{16}{15} \right) = \frac{32}{15} $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "General Regions",
        "icon": "BrainCircuit",
        "description": "Topic: General Regions"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Double Integrals",
        "icon": "FunctionSquare",
        "description": "Integrating over 2D regions (Area/Volume)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Fubini's Theorem",
        "icon": "Sigma",
        "description": "Evaluating via iterated single integrals."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Polar Coordinates (r, θ)",
        "icon": "Activity",
        "description": "Jacobian transformation: dx dy = r dr dθ."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Triple Integrals",
        "icon": "Layers",
        "description": "Integrating over 3D volumes (Mass/Density)."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Cylindrical & Spherical",
        "icon": "Target",
        "description": "Advanced coordinate transformations for symmetric regions."
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
