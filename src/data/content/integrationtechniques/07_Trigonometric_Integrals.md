# 7. Trigonometric Integrals

In the realm of engineering, periodic behaviors are ubiquitous. Whether you are analyzing alternating current (AC) circuits, calculating the root-mean-square (RMS) voltage, studying the mechanical vibrations of a suspension bridge, or analyzing sinusoidal fluid flow rates to determine total fluid accumulation, you will frequently encounter integrals involving powers of trigonometric functions. 

For instance, finding the average power in an AC circuit often requires integrating terms like $\sin^2(\omega t)$ or $\cos^2(\omega t)$. When analyzing complex waveforms using Fourier analysis, integrals like $\int \sin^m(x) \cos^n(x) dx$ naturally arise.

Evaluating these integrals requires a solid mastery of trigonometric identities to algebraically manipulate the integrand into a form where standard techniques—like U-Substitution—can easily be applied.

## Core Strategy: Sine & Cosine Powers

When evaluating integrals of the form $\int \sin^m(x) \cos^n(x) dx$, we use the Pythagorean identities and double-angle formulas to "peel off" one trigonometric function to serve as our derivative ($du$) for U-Substitution.

### Case A: Power of Sine ($m$) is Odd and Positive
If $m = 2k + 1$, we can peel off one $\sin(x)$ to save for the $du$ term. We then convert the remaining even powers of sine to cosine using the identity $\sin^2(x) = 1 - \cos^2(x)$.
*   **Substitution:** Let $u = \cos(x)$, which means $du = -\sin(x) dx$.

### Case B: Power of Cosine ($n$) is Odd and Positive
If $n = 2k + 1$, peel off one $\cos(x)$ to reserve for the $du$ term. Convert the remaining even powers of cosine to sine using $\cos^2(x) = 1 - \sin^2(x)$.
*   **Substitution:** Let $u = \sin(x)$, which means $du = \cos(x) dx$.

*(Note: If both $m$ and $n$ are odd, either Case A or Case B will work. It is usually easier to convert the function with the smaller power.)*

### Case C: Both Powers ($m$ and $n$) are Even and Positive
When there are no odd powers to peel off, U-substitution directly won't work. Instead, we must reduce the degree of the integrand using the half-angle (power-reducing) identities:
*   $\sin^2(x) = \frac{1 - \cos(2x)}{2}$
*   $\cos^2(x) = \frac{1 + \cos(2x)}{2}$
*   $\sin(x)\cos(x) = \frac{\sin(2x)}{2}$

---

## Example 1: Easy Level (Odd Power of Sine)
**Problem:** Evaluate $\int \sin^3(x) dx$.

**Solution:**
Here, $m=3$ (odd) and $n=0$ (even). We fall into **Case A**. Let's peel off one sine factor.
$$ \int \sin^3(x) dx = \int \sin^2(x) \cdot \sin(x) dx $$

Convert the remaining $\sin^2(x)$ to cosines using the Pythagorean identity:
$$ \int (1 - \cos^2(x)) \cdot \sin(x) dx $$

Apply U-Substitution. Let $u = \cos(x)$, so $du = -\sin(x) dx$, which implies $-du = \sin(x) dx$.
Substitute this into our integral:
$$ \int (1 - u^2) (-du) = \int (u^2 - 1) du $$

Integrate using the Power Rule:
$$ \frac{u^3}{3} - u + C $$

Substitute $x$ back in:
$$ \frac{\cos^3(x)}{3} - \cos(x) + C $$

---

## Example 2: Medium Level (Odd Power of Cosine, Mixed Terms)
**Problem:** Evaluate $\int \sin^2(x) \cos^3(x) dx$.

**Solution:**
The power of cosine is odd ($n=3$), falling into **Case B**. We peel off one cosine factor:
$$ \int \sin^2(x) \cos^2(x) \cdot \cos(x) dx $$

Convert the even $\cos^2(x)$ to sines using the Pythagorean identity:
$$ \int \sin^2(x) (1 - \sin^2(x)) \cdot \cos(x) dx $$

Apply U-Substitution. Let $u = \sin(x)$, so $du = \cos(x) dx$.
Substitute:
$$ \int u^2 (1 - u^2) du $$

Distribute the $u^2$:
$$ \int (u^2 - u^4) du $$

Integrate using the Power Rule:
$$ \frac{u^3}{3} - \frac{u^5}{5} + C $$

Substitute $x$ back in:
$$ \frac{\sin^3(x)}{3} - \frac{\sin^5(x)}{5} + C $$

---

## Example 3: Medium-Hard Level (Both Even Powers)
**Problem:** Evaluate $\int \sin^2(x) \cos^2(x) dx$.

**Solution:**
Both powers are even ($m=2, n=2$), which means we must use **Case C** (power-reducing identities).
First, let's rewrite the integrand to make use of the double angle identity $\sin(2x) = 2\sin(x)\cos(x)$:
$$ \sin^2(x)\cos^2(x) = (\sin(x)\cos(x))^2 = \left(\frac{\sin(2x)}{2}\right)^2 = \frac{\sin^2(2x)}{4} $$

Our integral becomes:
$$ \frac{1}{4} \int \sin^2(2x) dx $$

We still have an even power, so we apply the power-reducing identity for sine, keeping in mind that the angle is already $2x$:
$$ \sin^2(2x) = \frac{1 - \cos(4x)}{2} $$

Substitute this back into the integral:
$$ \frac{1}{4} \int \frac{1 - \cos(4x)}{2} dx = \frac{1}{8} \int (1 - \cos(4x)) dx $$

Now, integrate term-by-term:
$$ \frac{1}{8} \left( x - \frac{\sin(4x)}{4} \right) + C $$

Distributing the constant gives our final answer:
$$ \frac{x}{8} - \frac{\sin(4x)}{32} + C $$

---

## Example 4: Hard Level (Secant and Tangent)
**Problem:** Evaluate $\int \tan^3(x) \sec^4(x) dx$.

**Solution:**
Integrals involving secant and tangent have their own similar rules, leveraging the identity $\sec^2(x) = 1 + \tan^2(x)$ and the derivative relationships $d(\tan(x)) = \sec^2(x) dx$ and $d(\sec(x)) = \sec(x)\tan(x) dx$.

Since the power of secant is even and positive ($n=4$), we can save a $\sec^2(x)$ factor for $du$ and convert the remaining secants to tangents.
$$ \int \tan^3(x) \sec^2(x) \cdot \sec^2(x) dx $$

Convert $\sec^2(x)$ to tangents:
$$ \int \tan^3(x) (1 + \tan^2(x)) \cdot \sec^2(x) dx $$

Let $u = \tan(x)$, so $du = \sec^2(x) dx$:
$$ \int u^3 (1 + u^2) du = \int (u^3 + u^5) du $$

Integrate:
$$ \frac{u^4}{4} + \frac{u^6}{6} + C $$

Substitute back $u = \tan(x)$:
$$ \frac{\tan^4(x)}{4} + \frac{\tan^6(x)}{6} + C $$

*(Note: We could have also solved this by factoring out $\sec(x)\tan(x)$ since the power of tangent is odd, letting $u = \sec(x)$.)*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Trigonometric Integrals",
        "icon": "Activity",
        "description": "Handling periodic functions in engineering analysis."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Odd Powers",
        "icon": "Scissors",
        "description": "Peel off one factor, use Pythagorean Identities."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Even Powers",
        "icon": "Minimize2",
        "description": "Reduce degree using Half-Angle Identities."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "U-Substitution",
        "icon": "ArrowRightCircle",
        "description": "Finish evaluating the transformed integral."
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
