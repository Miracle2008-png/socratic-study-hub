# 7. Trigonometric Integrals

In fields like signal processing and alternating current power analysis, engineers frequently encounter integrals involving powers of trigonometric functions, such as $\int \sin^3(x) \cos^2(x) dx$.

Solving these requires using trigonometric identities to rewrite the integrand so that a standard U-Substitution can be applied.

### Strategy 1: Sine & Cosine Powers
When evaluating $\int \sin^m(x) \cos^n(x) dx$:

**Case A: If the power of sine ($m$) is odd and positive:**
Peel off one sine to save for the $du$. Convert the remaining even powers of sine to cosine using $\sin^2(x) = 1 - \cos^2(x)$. Then use $u = \cos(x)$.

**Case B: If the power of cosine ($n$) is odd and positive:**
Peel off one cosine to save for the $du$. Convert the remaining even powers of cosine to sine using $\cos^2(x) = 1 - \sin^2(x)$. Then use $u = \sin(x)$.

**Case C: If both powers are even and positive:**
Use the half-angle (power-reducing) identities:
*   $\sin^2(x) = \frac{1 - \cos(2x)}{2}$
*   $\cos^2(x) = \frac{1 + \cos(2x)}{2}$

### Worked Example: Odd Power of Cosine
**Problem:** Evaluate $\int \sin^2(x) \cos^3(x) dx$.

**Solution:**
The power of cosine is odd (3). Let's peel one off.
$$ \int \sin^2(x) \cos^2(x) \cdot \cos(x) dx $$

Convert the even $\cos^2(x)$ to sines using the Pythagorean identity:
$$ \int \sin^2(x) (1 - \sin^2(x)) \cdot \cos(x) dx $$

Now, apply U-Substitution. Let $u = \sin(x)$, so $du = \cos(x) dx$.
Substitute:
$$ \int u^2 (1 - u^2) du $$

Distribute the $u^2$:
$$ \int (u^2 - u^4) du $$

Integrate using the Power Rule:
$$ \frac{u^3}{3} - \frac{u^5}{5} + C $$

Substitute $x$ back in:
$$ \frac{\sin^3(x)}{3} - \frac{\sin^5(x)}{5} + C $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Trigonometric Integrals",
        "icon": "BrainCircuit",
        "description": "Core Concept: Trigonometric Integrals"
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
