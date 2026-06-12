# 4. Product & Quotient Rules

While the Sum Rule allows us to distribute the derivative across addition ($ (f+g)' = f' + g' $), this intuitive approach does **NOT** work for multiplication or division. The assumption that $(f \cdot g)' = f' \cdot g'$ is a common pitfall. To differentiate products and quotients correctly, we require specialized rules rooted in the fundamental definition of the derivative.

### Engineering Context: Why We Need These Rules
In engineering, variables rarely change in isolation. 
- **Kinematics & Dynamics:** Momentum is mass times velocity ($p = m \cdot v$). For a rocket losing mass as it burns fuel, both $m$ and $v$ are functions of time $t$. The rate of change of momentum requires the Product Rule!
- **Electrical Engineering:** Instantaneous electrical power is voltage times current ($P(t) = V(t) \cdot I(t)$). When analyzing transient responses in AC circuits, both voltage and current vary with time, making the Product Rule essential for finding the rate of change of power.
- **Thermodynamics & Fluids:** Density is mass divided by volume ($\rho = m / V$). If a gas is being heated and expanding (changing volume) while leaking (changing mass), finding the rate of change of density requires the Quotient Rule.

---

### The Product Rule

If you have two functions multiplying each other, the derivative is the first function times the derivative of the second, PLUS the second function times the derivative of the first. 

Visually, think of a rectangle with sides $u$ and $v$. Its area is $A = u \cdot v$. If both sides grow by a tiny amount, the new area isn't just the product of the growths; it's the original width times the new height, plus the original height times the new width.

$$ \frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Memory Trick:** "Derivative of the first, times the second. Plus derivative of the second, times the first."

#### Example 1: Easy (Standard Product Rule)
**Problem:** Find the derivative of $f(x) = (x^3 + 2x)(4x - 5)$.

**Solution:**
Let $u = x^3 + 2x$ and $v = 4x - 5$.
Compute their individual derivatives:
$u' = 3x^2 + 2$
$v' = 4$

Apply the Product Rule formula:
$$ f'(x) = u'v + uv' $$
$$ f'(x) = (3x^2 + 2)(4x - 5) + (x^3 + 2x)(4) $$

Expand and simplify:
$$ f'(x) = (12x^3 - 15x^2 + 8x - 10) + (4x^3 + 8x) $$
$$ f'(x) = 16x^3 - 15x^2 + 16x - 10 $$

#### Example 2: Medium (Applied Product Rule - Rocket Momentum)
**Problem:** A rocket's mass decreases over time according to $m(t) = 5000 - 10t^2$ (in kg), while its velocity increases according to $v(t) = 20t^3 + 50$ (in m/s). Find the rate of change of its momentum $p(t) = m(t)v(t)$ at $t = 2$ seconds.

**Solution:**
Using the Product Rule for $p(t)$:
$p'(t) = m'(t)v(t) + m(t)v'(t)$

Find the derivatives:
$m'(t) = -20t$
$v'(t) = 60t^2$

Substitute $t = 2$:
$m(2) = 5000 - 10(4) = 4960$ kg
$m'(2) = -20(2) = -40$ kg/s
$v(2) = 20(8) + 50 = 210$ m/s
$v'(2) = 60(4) = 240$ m/s²

Calculate $p'(2)$:
$p'(2) = (-40)(210) + (4960)(240)$
$p'(2) = -8400 + 1190400 = 1182000$ kg·m/s²

---

### The Quotient Rule

When a function is divided by another function, the differentiation rule involves subtraction, meaning the order of operations matters immensely. 

$$ \frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} $$

**Memory Trick:** "Low D-High minus High D-Low, all over Low squared."
(Where "Low" is the denominator $v(x)$, "High" is the numerator $u(x)$, and "D" means derivative).

#### Example 3: Medium (Standard Quotient Rule)
**Problem:** Differentiate $y = \frac{3x^2 + 1}{x^2 - 2}$.

**Solution:**
Identify High ($u$) and Low ($v$):
$u = 3x^2 + 1 \implies u' = 6x$
$v = x^2 - 2 \implies v' = 2x$

Apply the Quotient Rule:
$$ y' = \frac{(6x)(x^2 - 2) - (3x^2 + 1)(2x)}{(x^2 - 2)^2} $$

Expand the numerator carefully:
$$ y' = \frac{(6x^3 - 12x) - (6x^3 + 2x)}{(x^2 - 2)^2} $$

Combine like terms (notice the $6x^3$ terms cancel out):
$$ y' = \frac{6x^3 - 12x - 6x^3 - 2x}{(x^2 - 2)^2} $$
$$ y' = \frac{-14x}{(x^2 - 2)^2} $$

#### Example 4: Hard (Product within a Quotient)
**Problem:** Find the derivative of $f(x) = \frac{x(x+2)}{x-1}$.

**Solution:**
First, recognize that the numerator is a product. While we could use the Product Rule for the numerator, it's easier to expand it first:
$u = x^2 + 2x \implies u' = 2x + 2$
$v = x - 1 \implies v' = 1$

Now apply the Quotient Rule:
$$ f'(x) = \frac{(2x + 2)(x - 1) - (x^2 + 2x)(1)}{(x - 1)^2} $$

Expand the numerator:
$$ f'(x) = \frac{(2x^2 - 2x + 2x - 2) - (x^2 + 2x)}{(x - 1)^2} $$
$$ f'(x) = \frac{2x^2 - 2 - x^2 - 2x}{(x - 1)^2} $$
$$ f'(x) = \frac{x^2 - 2x - 2}{(x - 1)^2} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Functions combining",
        "icon": "BrainCircuit",
        "description": "Identifying products and quotients"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Product Rule",
        "icon": "ArrowRightCircle",
        "description": "u'v + uv'"
      },
      "style": {
        "background": "#065f46",
        "color": "#d1fae5"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Quotient Rule",
        "icon": "ArrowRightCircle",
        "description": "(u'v - uv') / v²"
      },
      "style": {
        "background": "#991b1b",
        "color": "#fee2e2"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Engineering Applications",
        "icon": "CheckCircle",
        "description": "Power, Momentum, Density rates"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "2",
      "target": "4",
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
