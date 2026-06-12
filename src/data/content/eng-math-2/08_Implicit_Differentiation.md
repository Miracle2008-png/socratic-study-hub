# 8. Implicit Differentiation: Unlocking Hidden Relationships

Up until now, all equations have been explicitly defined for $y$ in terms of $x$ (e.g., $y = x^2 + 3$). When a function is explicitly solved for $y$, we simply find $\frac{dy}{dx}$ by directly applying differentiation rules to the $x$-terms.

However, in engineering and physics, mathematical models often generate equations where $y$ cannot be isolated easily, or doing so would yield messy, multi-valued functions. Consider the equation of a circle: $x^2 + y^2 = 25$. If we solve for $y$, we get $y = \pm \sqrt{25 - x^2}$, forcing us to handle two separate functions. 

To find the slope of the tangent line at any point on such a curve seamlessly, we use **Implicit Differentiation**.

### The Core Concept
We treat $y$ not as an independent variable, but as an implicit function of $x$. Therefore, whenever we differentiate a term containing $y$ with respect to $x$, we **must** apply the Chain Rule. 
For example:
$$ \frac{d}{dx}[y^3] = 3y^2 \cdot \frac{dy}{dx} $$

**Conceptual Strategy:**
1. Differentiate both sides of the equation with respect to $x$.
2. Apply standard differentiation rules (Power, Product, Quotient, Chain).
3. Every time you differentiate a variable $y$, multiply by $\frac{dy}{dx}$ (or $y'$).
4. Move all terms containing $\frac{dy}{dx}$ to one side of the equation, and all other terms to the opposite side.
5. Factor out $\frac{dy}{dx}$ and solve for it algebraically.

### Engineering Applications
- **Mechanical Linkages:** Tracking the velocity of joints where coordinates $x$ and $y$ are constrained by fixed-length rods (e.g., $x^2 + y^2 = L^2$).
- **Thermodynamics:** Differentiating Implicit Equations of State, such as the Van der Waals equation for real gases, to find the isothermal compressibility $\frac{dV}{dP}$.
- **Fluid Dynamics:** Calculating slopes of streamlines defined by implicit potential functions.

---

### Worked Example 1: Mechanical Constraint (Easy)
**Problem:** A robotic arm traces a circular path defined by $x^2 + y^2 = 25$. Find the expression for the slope of the tangent line, $\frac{dy}{dx}$.

**Solution:**
1. Differentiate both sides with respect to $x$:
$$ \frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25] $$

2. The derivative of $x^2$ is $2x$. The derivative of $y^2$ (using the Chain Rule) is $2y \frac{dy}{dx}$. The derivative of a constant (25) is $0$.
$$ 2x + 2y \frac{dy}{dx} = 0 $$

3. Isolate the $\frac{dy}{dx}$ term:
$$ 2y \frac{dy}{dx} = -2x $$

4. Divide to solve:
$$ \frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y} $$
This tells us that at the point $(3, 4)$ on the circle, the slope is $-3/4$.

---

### Worked Example 2: The Folium of Descartes (Medium)
**Problem:** Find $\frac{dy}{dx}$ for the curve $x^3 + y^3 - 9xy = 0$, a famous curve often used to test pathfinding algorithms.

**Solution:**
1. Differentiate both sides. Notice that the term $-9xy$ requires the **Product Rule**!
$$ \frac{d}{dx}[x^3] + \frac{d}{dx}[y^3] - \frac{d}{dx}[9xy] = \frac{d}{dx}[0] $$

2. Apply the rules:
$$ 3x^2 + 3y^2 \frac{dy}{dx} - 9 \left( x \cdot \frac{dy}{dx} + y \cdot 1 \right) = 0 $$

3. Distribute the $-9$ and collect $\frac{dy}{dx}$ terms:
$$ 3x^2 + 3y^2 \frac{dy}{dx} - 9x \frac{dy}{dx} - 9y = 0 $$

4. Move all non-$\frac{dy}{dx}$ terms to the right side:
$$ 3y^2 \frac{dy}{dx} - 9x \frac{dy}{dx} = 9y - 3x^2 $$

5. Factor out $\frac{dy}{dx}$:
$$ \frac{dy}{dx} (3y^2 - 9x) = 9y - 3x^2 $$

6. Divide to isolate:
$$ \frac{dy}{dx} = \frac{9y - 3x^2}{3y^2 - 9x} = \frac{3(3y - x^2)}{3(y^2 - 3x)} = \frac{3y - x^2}{y^2 - 3x} $$

---

### Worked Example 3: Nonlinear Wave Interference (Hard)
**Problem:** In optics, interference patterns can create implicit curves. Find $\frac{dy}{dx}$ given the equation $\sin(xy) + \cos(y) = x^2$.

**Solution:**
1. Differentiate both sides with respect to $x$:
$$ \frac{d}{dx}[\sin(xy)] + \frac{d}{dx}[\cos(y)] = \frac{d}{dx}[x^2] $$

2. Apply the Chain Rule and Product Rule:
- For $\sin(xy)$, the derivative is $\cos(xy) \cdot \frac{d}{dx}[xy]$.
- Applying Product Rule to $xy$ yields $\left( x\frac{dy}{dx} + y \right)$.
- For $\cos(y)$, the derivative is $-\sin(y) \frac{dy}{dx}$.
- For $x^2$, the derivative is $2x$.

Putting it all together:
$$ \cos(xy) \left( x \frac{dy}{dx} + y \right) - \sin(y) \frac{dy}{dx} = 2x $$

3. Distribute $\cos(xy)$ to separate the terms:
$$ x \cos(xy) \frac{dy}{dx} + y \cos(xy) - \sin(y) \frac{dy}{dx} = 2x $$

4. Move terms without $\frac{dy}{dx}$ to the right side:
$$ x \cos(xy) \frac{dy}{dx} - \sin(y) \frac{dy}{dx} = 2x - y \cos(xy) $$

5. Factor out $\frac{dy}{dx}$:
$$ \frac{dy}{dx} \left( x \cos(xy) - \sin(y) \right) = 2x - y \cos(xy) $$

6. Solve for $\frac{dy}{dx}$:
$$ \frac{dy}{dx} = \frac{2x - y \cos(xy)}{x \cos(xy) - \sin(y)} $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Implicit Equations",
        "icon": "Lock",
        "description": "When y is not isolated."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Differentiate Both Sides",
        "icon": "Scale",
        "description": "Apply standard rules everywhere."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Chain Rule for y",
        "icon": "Link",
        "description": "Multiply by dy/dx."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Algebraic Isolation",
        "icon": "Wrench",
        "description": "Factor and solve for dy/dx."
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
