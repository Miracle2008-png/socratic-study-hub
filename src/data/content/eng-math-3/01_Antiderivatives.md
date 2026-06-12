# 1. Introduction to Antiderivatives & Integration

While differentiation breaks down a function to find its instantaneous rate of change (e.g., finding velocity from position), **integration** is the mathematical process of putting it back together (e.g., finding position from velocity). It is the accumulation of quantities over an interval.

### The Antiderivative
If the derivative of $F(x)$ is $f(x)$, then $F(x)$ is an **antiderivative** of $f(x)$.
Mathematically:
$$ F'(x) = f(x) $$

**Example:**
If $f(x) = 2x$, what function did we differentiate to get $2x$?
We know that $\frac{d}{dx}[x^2] = 2x$. 
Therefore, $F(x) = x^2$ is an antiderivative of $2x$.

### The Constant of Integration ($+C$)
There is a catch. The derivative of a constant is zero. 
*   $\frac{d}{dx}[x^2] = 2x$
*   $\frac{d}{dx}[x^2 + 5] = 2x$
*   $\frac{d}{dx}[x^2 - 100] = 2x$

Because any constant disappears during differentiation, we cannot know the *exact* original function just from its derivative. There is an infinite family of antiderivatives, all shifted vertically by some constant.
To account for this missing information, we always add the **constant of integration**, denoted as $+ C$.

So, the general antiderivative of $2x$ is $x^2 + C$.

### Indefinite Integrals
The process of finding the general antiderivative is called **indefinite integration**. It is denoted by the integral sign $\int$.
$$ \int f(x) dx = F(x) + C $$
*   $\int$: The integral sign (an elongated 'S' for "sum").
*   $f(x)$: The **integrand** (the function being integrated).
*   $dx$: The **differential**, indicating that the variable of integration is $x$.

### Initial Value Problems
In engineering, we often have a known starting condition (an "initial value"). This allows us to solve for $C$ and find the *exact* specific antiderivative.

**Worked Example:**
A car is accelerating at $a(t) = 4t$. You know its velocity at $t = 1$ second is $10$ m/s. Find the exact velocity function $v(t)$.

1. Integrate acceleration to find general velocity:
   $$ v(t) = \int 4t \, dt = 2t^2 + C $$
2. Use the initial condition $v(1) = 10$:
   $$ 10 = 2(1)^2 + C $$
   $$ 10 = 2 + C \implies C = 8 $$
3. The exact velocity function is:
   $$ v(t) = 2t^2 + 8 $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Antiderivatives",
        "icon": "BrainCircuit",
        "description": "Core Concept: Antiderivatives"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Fundamental Theorem",
        "icon": "ArrowRightCircle",
        "description": "Linking derivatives and integrals."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "U-Substitution",
        "icon": "ArrowRightCircle",
        "description": "Reverse chain rule."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Integration by Parts",
        "icon": "CheckCircle",
        "description": "Reverse product rule."
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
