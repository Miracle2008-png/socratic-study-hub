# 6. Derivatives of Exponential & Logarithmic Functions

Exponential and logarithmic functions are intimately tied to the concept of proportional rates of change. While polynomials change at rates governed by their powers, exponential functions change at a rate proportional to their current size.

### Engineering Context: Growth, Decay, and Perception
- **Electrical Engineering:** The charging and discharging of capacitors in RC circuits, and inductors in RL circuits, follow exponential decay curves (e.g., $V(t) = V_0 e^{-t/\tau}$). Differentiating these equations gives the current flowing through the circuit.
- **Thermodynamics & Nuclear Engineering:** Newton's Law of Cooling and radioactive halflife decay are modeled exponentially. The rate at which heat is lost is directly proportional to the temperature difference.
- **Acoustics & Control Systems:** Human hearing operates logarithmically, which is why sound intensity is measured in Decibels (dB). Logarithmic derivatives are also fundamental when creating Bode plots for frequency response analysis in control systems.

### Euler's Number ($e$)

The number $e \approx 2.71828...$ is a mathematical constant uniquely defined by a phenomenal property: the slope of the curve $y = e^x$ at any point is exactly equal to its y-value at that point. 

This leads to the most elegant derivative in all of calculus:
$$ \frac{d}{dx}[e^x] = e^x $$
The function is its own derivative. It is completely immune to the differentiation operator!

### Natural Logarithm ($\ln x$)

The natural logarithm ($\ln x$ or $\log_e x$) is the mathematical inverse of $e^x$. Its derivative represents a hyperbolic curve:
$$ \frac{d}{dx}[\ln(x)] = \frac{1}{x} \quad (\text{for } x > 0) $$

### General Exponentials and Logarithms

What if the base is not $e$? If we are dealing with standard computer science binary (base 2) or standard engineering decibels (base 10)? We introduce a scaling factor.

For a general exponential base $a$:
$$ \frac{d}{dx}[a^x] = a^x \ln(a) $$
*(Notice that if $a=e$, this becomes $e^x \ln(e) = e^x(1) = e^x$.)*

For a general logarithm of base $a$:
$$ \frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)} $$

---

### Worked Example 1: Easy (Linear Combination)
**Problem:** Find the derivative of $f(x) = 4e^x - 7\ln(x) + 2^x$.

**Solution:**
Differentiate term by term using the standard rules. Remember that $2^x$ requires the general exponential rule.
$$ f'(x) = 4(e^x) - 7\left(\frac{1}{x}\right) + 2^x \ln(2) $$
$$ f'(x) = 4e^x - \frac{7}{x} + 2^x \ln(2) $$

### Worked Example 2: Medium (Product Rule with Exponentials)
**Problem:** The voltage in a damped circuit is given by $V(t) = t^2 e^t$. Find the rate of change of voltage, $V'(t)$.

**Solution:**
We have a product of two functions, so we apply the Product Rule ($u'v + uv'$):
Let $u = t^2 \implies u' = 2t$
Let $v = e^t \implies v' = e^t$

$$ V'(t) = (2t)(e^t) + (t^2)(e^t) $$
Factor out the common terms to simplify (standard practice in engineering to find critical points):
$$ V'(t) = t e^t (2 + t) $$

### Worked Example 3: Medium (Product Rule with Logarithms)
**Problem:** Differentiate $y = x \ln(x) - x$.

**Solution:**
The first term $x \ln(x)$ requires the Product Rule. The second term $-x$ is a simple polynomial.
For the first term, let $u = x \implies u' = 1$ and $v = \ln(x) \implies v' = \frac{1}{x}$.
Derivative of $x \ln(x)$: $(1)(\ln x) + (x)\left(\frac{1}{x}\right) = \ln(x) + 1$.

Now include the derivative of the second term (which is $-1$):
$$ y' = (\ln(x) + 1) - 1 $$
$$ y' = \ln(x) $$
*(Note: This proves that the integral of $\ln(x)$ is $x \ln(x) - x$!)*

### Worked Example 4: Hard (Quotient Rule Combo)
**Problem:** Differentiate $f(x) = \frac{e^x}{\ln(x)}$.

**Solution:**
We must use the Quotient Rule ($\frac{u'v - uv'}{v^2}$).
Let $u = e^x \implies u' = e^x$
Let $v = \ln(x) \implies v' = \frac{1}{x}$

$$ f'(x) = \frac{(e^x)(\ln x) - (e^x)\left(\frac{1}{x}\right)}{(\ln x)^2} $$

Factor out $e^x$ from the numerator to make it cleaner:
$$ f'(x) = \frac{e^x \left(\ln x - \frac{1}{x}\right)}{(\ln x)^2} $$

To eliminate the complex fraction in the numerator, multiply the top and bottom by $x$:
$$ f'(x) = \frac{e^x (x\ln x - 1)}{x(\ln x)^2} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Transcendental Functions",
        "icon": "BrainCircuit",
        "description": "Exponentials & Logarithms"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Euler's Number",
        "icon": "ArrowRightCircle",
        "description": "d/dx [eˣ] = eˣ"
      },
      "style": {
        "background": "#065f46",
        "color": "#d1fae5"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Natural Log",
        "icon": "ArrowRightCircle",
        "description": "d/dx [ln x] = 1/x"
      },
      "style": {
        "background": "#991b1b",
        "color": "#fee2e2"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "General Bases",
        "icon": "CheckCircle",
        "description": "Requires scaling by ln(a)"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
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
