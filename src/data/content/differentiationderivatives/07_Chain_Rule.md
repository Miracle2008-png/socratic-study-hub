# 7. The Chain Rule: Navigating Composite Systems

The Chain Rule is arguably the most critical and widely applied differentiation tool in all of engineering mathematics. While basic rules allow us to differentiate simple functions, real-world engineering systems are rarely simple. They are usually **composite functions**—systems nested inside of other systems, where a change in one variable propagates through intermediate variables to affect the final outcome.

For instance, consider the temperature $T$ of a brake pad, which depends on the friction force $F$, which in turn depends on the vehicle's velocity $v$, which depends on time $t$. To find the rate of temperature change over time ($\frac{dT}{dt}$), we must chain the rates together: how $T$ changes with $F$, how $F$ changes with $v$, and how $v$ changes with $t$.

### Chain Rule Definition
If $y = f(u)$ and $u = g(x)$, then the derivative of $y$ with respect to $x$ is:
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

Alternatively, written in Newton's prime notation for the composite function $f(g(x))$:
$$ \frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x) $$

**Conceptual Strategy:**
1. Identify the "outer" function and the "inner" function.
2. Differentiate the "outer" function, leaving the "inner" function completely untouched.
3. Multiply the result by the derivative of the "inner" function.
4. If there are more layers, continue "peeling the onion" by repeating the process.

### Engineering Applications
- **Thermodynamics:** Calculating the rate of change of pressure with respect to time when pressure depends on volume, and volume depends on temperature, and temperature depends on time.
- **Kinematics:** Converting spatial derivatives into time derivatives using velocity (e.g., $\frac{d}{dt} = \frac{dx}{dt} \frac{d}{dx} = v \frac{d}{dx}$).
- **Electromagnetics:** Finding the induced voltage in a coil where the magnetic flux depends on the current, which is a time-varying function.

---

### Worked Example 1: Basic Chain Rule (Easy)
**Problem:** A component's stress response can be modeled by $y = (3x^2 + 5x)^4$. Find the derivative $\frac{dy}{dx}$.

**Solution:**
Identify the layers:
- Outer function: $(\dots)^4$
- Inner function: $u = 3x^2 + 5x$

1. Differentiate the outer function using the Power Rule, keeping the inside intact:
$$ \frac{dy}{du} = 4(3x^2 + 5x)^3 $$
2. Multiply by the derivative of the inner function:
$$ \frac{du}{dx} = 6x + 5 $$
3. Combine them using the Chain Rule:
$$ \frac{dy}{dx} = 4(3x^2 + 5x)^3 \cdot (6x + 5) $$

---

### Worked Example 2: Exponential Decay with Oscillations (Medium)
**Problem:** The voltage in a damped RLC circuit is related to a composite trigonometric expression: $V(t) = e^{\sin(2t)}$. Differentiate $V(t)$ with respect to time $t$.

**Solution:**
This function has *three* distinct layers. We must apply the Chain Rule twice.
1. Outer layer: $e^{(\dots)}$
2. Middle layer: $\sin(\dots)$
3. Inner layer: $2t$

Peel it like an onion, from outside to inside, multiplying at each step.
1. Derivative of the outer $e^u$ is $e^u$: $\implies e^{\sin(2t)}$
2. Derivative of the middle $\sin(v)$ is $\cos(v)$: $\implies \cos(2t)$
3. Derivative of the inner $2t$ is $2$: $\implies 2$

Multiply them all together:
$$ V'(t) = e^{\sin(2t)} \cdot \cos(2t) \cdot 2 $$
$$ V'(t) = 2 \cos(2t) e^{\sin(2t)} $$

---

### Worked Example 3: The Triple Chain Rule (Hard)
**Problem:** In fluid mechanics, the velocity potential field requires finding the gradient of complex spatial functions. Find $\frac{dy}{dx}$ for $y = \sqrt{1 + \cos^2(x^3)}$.

**Solution:**
Rewrite the square root as a fractional exponent to better see the outer layer:
$$ y = \left( 1 + (\cos(x^3))^2 \right)^{1/2} $$

This is a four-layer composite function!
1. Layer 1 (Outermost): $(\dots)^{1/2}$
2. Layer 2: $1 + (\dots)^2$
3. Layer 3: $\cos(\dots)$
4. Layer 4 (Innermost): $x^3$

Apply the Chain Rule sequentially:
1. Differentiate Layer 1: $\frac{1}{2}(\dots)^{-1/2}$
$$ \frac{1}{2}(1 + \cos^2(x^3))^{-1/2} $$
2. Differentiate Layer 2: The derivative of $1$ is $0$. The derivative of $(\dots)^2$ is $2(\dots)^1$:
$$ \cdot 2\cos(x^3) $$
3. Differentiate Layer 3: The derivative of $\cos(v)$ is $-\sin(v)$:
$$ \cdot (-\sin(x^3)) $$
4. Differentiate Layer 4: The derivative of $x^3$ is $3x^2$:
$$ \cdot 3x^2 $$

Combine and simplify:
$$ \frac{dy}{dx} = \frac{1}{2}(1 + \cos^2(x^3))^{-1/2} \cdot 2\cos(x^3) \cdot (-\sin(x^3)) \cdot 3x^2 $$
$$ \frac{dy}{dx} = \frac{-3x^2 \cos(x^3) \sin(x^3)}{\sqrt{1 + \cos^2(x^3)}} $$
*(Optional: Use the double angle identity $\sin(2\theta) = 2\sin\theta\cos\theta$ to simplify further: $\frac{-1.5x^2 \sin(2x^3)}{\sqrt{1 + \cos^2(x^3)}}$)*


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Chain Rule",
        "icon": "Layers",
        "description": "Differentiating composite functions."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Identify Layers",
        "icon": "Search",
        "description": "Find outer, middle, and inner functions."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Peel the Onion",
        "icon": "Scissors",
        "description": "Differentiate from outside in."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Multiply Derivatives",
        "icon": "XCircle",
        "description": "Combine the rates of change."
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
