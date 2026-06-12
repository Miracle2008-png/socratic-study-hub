# 3. Power Rule & Constant Multiple Rule

Using first principles (the limit definition) every single time you need to find a derivative would take hours for complex engineering equations. Fortunately, over centuries, mathematicians rigorously evaluated those limits to derive generalized, shortcut rules. These rules allow us to compute derivatives rapidly and accurately.

### Linearity: Superposition Principle in Calculus
Before diving into the specific rules, it is crucial to understand that differentiation is a **linear operator**. In engineering, this is directly analogous to the **superposition principle** used in circuits or structural analysis: the response of a complex system to multiple inputs is the sum of the responses to the individual inputs.
$$ \frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x) $$
This is known as the **Sum and Difference Rule**. It allows us to differentiate complex polynomials term-by-term.

### The Constant Rule
The derivative of any isolated constant number is exactly zero. Geometrically, a constant function (e.g., $y = 5$) represents a perfectly flat horizontal line. The slope of a flat horizontal line is zero everywhere.
$$ \frac{d}{dx}[c] = 0 $$

### The Power Rule
The Power Rule is arguably the most widely used derivative rule for polynomials. To differentiate $x$ raised to any real power $n$, you multiply by the power, and then decrease the exponent by 1.
$$ \frac{d}{dx}[x^n] = nx^{n-1} $$
This rule is incredibly robust. It works for positive integers, negative integers, and even fractional exponents.

### The Constant Multiple Rule
If a constant is multiplying a function, the constant simply "comes along for the ride." It scales the derivative just as it scales the original function.
$$ \frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x) $$

### Worked Examples: Applying the Rules

**Example 1: Basic Polynomial Differentiation (Easy)**
**Problem:** Differentiate the function $f(x) = 7x^5 - 3x^2 + 4$.
**Step-by-Step Solution:**
1. Apply the Sum and Difference Rule to differentiate term-by-term:
$$ f'(x) = \frac{d}{dx}(7x^5) - \frac{d}{dx}(3x^2) + \frac{d}{dx}(4) $$
2. Apply the Constant Multiple and Power Rules to each term:
$$ f'(x) = 7(5x^{5-1}) - 3(2x^{2-1}) + 0 $$
3. Simplify the coefficients and exponents:
$$ f'(x) = 35x^4 - 6x $$

**Example 2: Negative and Fractional Exponents (Medium)**
**Problem:** Find the derivative of $g(x) = \frac{4}{x^3} - 2\sqrt[3]{x}$.
**Step-by-Step Solution:**
1. Rewrite the expression using purely exponential notation. Recall that $\frac{1}{x^n} = x^{-n}$ and $\sqrt[n]{x} = x^{1/n}$:
$$ g(x) = 4x^{-3} - 2x^{1/3} $$
2. Differentiate using the Power Rule:
$$ g'(x) = 4(-3x^{-3-1}) - 2\left(\frac{1}{3}x^{\frac{1}{3}-1}\right) $$
3. Compute the new exponents:
$$ g'(x) = -12x^{-4} - \frac{2}{3}x^{-2/3} $$
4. (Optional) Rewrite in the original algebraic form:
$$ g'(x) = -\frac{12}{x^4} - \frac{2}{3\sqrt[3]{x^2}} $$

**Example 3: Kinematics Application (Hard)**
**Problem:** The trajectory of a mechanical actuator is modeled by the position function $s(t) = \frac{1}{3}t^3 - 2t^2 + 3t$ (meters, seconds). Find the times at which the actuator is temporarily at rest.
**Step-by-Step Solution:**
1. "At rest" means the velocity is zero. First, find the velocity function $v(t) = s'(t)$:
$$ v(t) = \frac{1}{3}(3t^2) - 2(2t) + 3(1) $$
$$ v(t) = t^2 - 4t + 3 $$
2. Set the velocity function to zero:
$$ t^2 - 4t + 3 = 0 $$
3. Factor the quadratic equation:
$$ (t - 1)(t - 3) = 0 $$
4. Solve for $t$:
$$ t = 1 \text{ second, and } t = 3 \text{ seconds} $$
*Conclusion:* The actuator comes to a stop at $t=1$ and $t=3$ seconds before changing direction.

**Example 4: Materials Engineering / Thermal Expansion (Hard)**
**Problem:** The volume of a metal alloy as it heats up is approximated by $V(T) = V_0(1 + \beta T + \alpha T^2)$, where $V_0$, $\beta$, and $\alpha$ are constants, and $T$ is temperature. Find the rate of change of volume with respect to temperature, $\frac{dV}{dT}$.
**Step-by-Step Solution:**
1. Distribute $V_0$ to see the terms clearly (though you can also treat it as an outer constant multiplier):
$$ V(T) = V_0 + V_0\beta T + V_0\alpha T^2 $$
2. Differentiate term-by-term with respect to $T$. Remember that $V_0$, $\beta$, and $\alpha$ are constants:
$$ \frac{dV}{dT} = \frac{d}{dT}(V_0) + \frac{d}{dT}(V_0\beta T) + \frac{d}{dT}(V_0\alpha T^2) $$
3. Apply the rules ($T$ has a power of 1; $T^2$ has a power of 2):
$$ \frac{dV}{dT} = 0 + V_0\beta(1) + V_0\alpha(2T) $$
4. Simplify to obtain the final thermal expansion rate function:
$$ \frac{dV}{dT} = V_0\beta + 2V_0\alpha T $$
$$ \frac{dV}{dT} = V_0(\beta + 2\alpha T) $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Linearity (Superposition)",
        "icon": "Layers",
        "description": "Differentiating polynomials term-by-term."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Constant & Multiple Rules",
        "icon": "Hash",
        "description": "Constants disappear (0) or pull through."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Power Rule",
        "icon": "ChevronsDown",
        "description": "Multiply by exponent, decrease by 1."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Engineering Practice",
        "icon": "Settings",
        "description": "Kinematics, Thermodynamics, Circuits."
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
