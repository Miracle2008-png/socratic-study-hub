# 10. Continuity & The Intermediate Value Theorem

A continuous process is one without sudden jumps, interruptions, or broken logic. In mathematical terms, continuity connects the limit of a function to the actual value of a function.

### The Three Pillars of Continuity
A function $f(x)$ is continuous at a point $x = c$ if all three of these conditions are met:
1. $f(c)$ is defined (no holes or vertical asymptotes at $c$).
2. $\lim_{x \to c} f(x)$ exists (no jump discontinuities).
3. $\lim_{x \to c} f(x) = f(c)$ (the limit and the function's actual value perfectly agree).

If any of these fail, the function is **discontinuous** at $c$.

### Types of Discontinuities
1. **Removable Discontinuity (Hole):** The limit exists, but $f(c)$ is either undefined or plotted somewhere else. You can "fix" it by filling the hole.
2. **Jump Discontinuity:** The left and right limits both exist, but they are different.
3. **Infinite Discontinuity:** The function shoots to infinity (vertical asymptote).

### The Intermediate Value Theorem (IVT)
The IVT is one of the most practical theorems in engineering for finding roots numerically (e.g., the Bisection Method).

**Statement:**
If a function $f(x)$ is continuous on a closed interval $[a, b]$, and $N$ is any number strictly between $f(a)$ and $f(b)$, then there exists at least one number $c$ in the interval $(a, b)$ such that $f(c) = N$.

**Intuitive Meaning:**
If a continuous function goes from $y = 2$ to $y = 10$, it *must* hit every single number between 2 and 10 at least once along the way. It cannot teleport.

### Worked Example: Using IVT to Find Roots
**Problem:** Prove that the equation $x^3 - x - 1 = 0$ has a root between $x=1$ and $x=2$.

**Solution:**
Let $f(x) = x^3 - x - 1$. Since it is a polynomial, it is continuous everywhere.
Check the boundaries:
$f(1) = (1)^3 - (1) - 1 = -1$
$f(2) = (2)^3 - (2) - 1 = 5$

Since $f(1) < 0$ and $f(2) > 0$, the function goes from negative to positive. Because it is continuous, it must cross $y = 0$ at some point $c$ between 1 and 2. Thus, a root exists.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Continuity IVT",
        "icon": "BrainCircuit",
        "description": "Core Concept: Continuity IVT"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Indeterminate Form",
        "icon": "ArrowRightCircle",
        "description": "0/0 or inf/inf requires further manipulation."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Algebraic Manipulation",
        "icon": "ArrowRightCircle",
        "description": "Factor, conjugate, or simplify."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "L'Hôpital's Rule",
        "icon": "CheckCircle",
        "description": "Apply derivatives if applicable."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
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
    }
  ]
}
```
