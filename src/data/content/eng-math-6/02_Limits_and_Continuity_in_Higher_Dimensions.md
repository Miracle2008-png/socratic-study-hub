# Limits and Continuity in Higher Dimensions

The concept of a limit is much more fragile in higher dimensions. In single-variable calculus, if you want to find $\lim_{x \to a} f(x)$, there are only two directions you can approach $a$ from: the left or the right. If the left limit equals the right limit, the overall limit exists.

In two variables, we evaluate $\lim_{(x,y) \to (a,b)} f(x,y)$. You can approach the point $(a,b)$ from **an infinite number of directions** (straight lines, parabolas, spirals).

## 1. The Two-Path Test for Non-Existence

For the limit to exist, the function must approach the *exact same value $L$* no matter which path you take to reach $(a,b)$.

This means it is very hard to prove a limit exists, but it is relatively easy to prove a limit **does not exist**:
> If $f(x,y) \to L_1$ as $(x,y) \to (a,b)$ along path $C_1$, and $f(x,y) \to L_2$ as $(x,y) \to (a,b)$ along a different path $C_2$, where $L_1 \neq L_2$, then the limit does not exist.

*Example:* Does $\lim_{(x,y) \to (0,0)} \frac{x^2 - y^2}{x^2 + y^2}$ exist?
*   **Path 1 (along the x-axis):** Let $y=0$. The limit becomes $\lim_{x \to 0} \frac{x^2 - 0}{x^2 + 0} = \lim_{x \to 0} 1 = 1$.
*   **Path 2 (along the y-axis):** Let $x=0$. The limit becomes $\lim_{y \to 0} \frac{0 - y^2}{0 + y^2} = \lim_{y \to 0} -1 = -1$.
Because $1 \neq -1$, the limit **does not exist**. The surface is torn or twisted at the origin.

*Example 2:* Sometimes straight lines aren't enough. Consider $\lim_{(x,y) \to (0,0)} \frac{xy^2}{x^2 + y^4}$.
*   If you approach along any straight line $y = mx$, the limit goes to 0.
*   However, if you approach along the parabola $x = y^2$, the limit becomes $\lim_{y \to 0} \frac{y^2(y^2)}{(y^2)^2 + y^4} = \frac{y^4}{2y^4} = \frac{1}{2}$.
Since $0 \neq 1/2$, the limit does not exist.

## 2. Proving a Limit Exists (Squeeze Theorem and Polar Coordinates)

If you suspect a limit *does* exist, checking paths isn't enough (you can't check infinite paths). You must use algebraic manipulation, the Squeeze Theorem, or switch to polar coordinates.

**Using Polar Coordinates at the Origin:**
If $(x,y) \to (0,0)$, we can substitute $x = r\cos\theta$ and $y = r\sin\theta$. The limit $(x,y) \to (0,0)$ becomes simply $r \to 0$, regardless of the angle $\theta$.

*Example:* Evaluate $\lim_{(x,y) \to (0,0)} \frac{3x^2y}{x^2 + y^2}$.
Substitute polar coordinates:
$$ \lim_{r \to 0} \frac{3(r\cos\theta)^2(r\sin\theta)}{(r\cos\theta)^2 + (r\sin\theta)^2} = \lim_{r \to 0} \frac{3r^3\cos^2\theta\sin\theta}{r^2(\cos^2\theta + \sin^2\theta)} $$
$$ = \lim_{r \to 0} 3r \cos^2\theta \sin\theta $$
Because $\cos^2\theta \sin\theta$ is bounded between $-1$ and $1$, as $r \to 0$, the whole expression goes to $0$, regardless of $\theta$. The limit exists and is 0.

## 3. Continuity

A function $f(x,y)$ is **continuous** at a point $(a,b)$ if:
$$ \lim_{(x,y) \to (a,b)} f(x,y) = f(a,b) $$
This means the limit exists, the function is defined there, and the two values match. A continuous surface has no holes, tears, or jumps.

**Polynomials** (like $x^2y^3 - 3xy + 5$) are continuous everywhere.
**Rational functions** (polynomial divided by polynomial) are continuous everywhere their denominator is not zero.


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Limits and Continuity in Higher Dimensions",
        "icon": "BrainCircuit",
        "description": "Topic: Limits and Continuity in Higher Dimensions"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Partial Derivative (∂f/∂x)",
        "icon": "FunctionSquare",
        "description": "Holding other variables constant while differentiating."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Gradient Vector (∇f)",
        "icon": "Sigma",
        "description": "Vector pointing in the direction of steepest ascent."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Directional Derivative",
        "icon": "Activity",
        "description": "Rate of change in a specific unit vector direction."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Tangent Planes",
        "icon": "Layers",
        "description": "Linear approximation of a surface at a specific point."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Optimization (Lagrange)",
        "icon": "Target",
        "description": "Finding local maxima/minima using critical points & multipliers."
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
