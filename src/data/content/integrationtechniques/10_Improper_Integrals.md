# 10. Improper Integrals

The Fundamental Theorem of Calculus is a powerful tool, but it strictly requires two conditions to be met: the interval $[a, b]$ must be finite, and the function $f(x)$ must be continuous across that entire interval. 

When dealing with real-world engineering and physics problems, we frequently encounter scenarios where these conditions are violated. For instance, calculating the total energy dissipated by a resistor over an infinite amount of time, determining the work required to launch a satellite out of Earth's gravitational pull (moving it to an infinite distance), or analyzing the electric field near a point charge where the force approaches infinity. These scenarios require us to evaluate **Improper Integrals**.

### Type 1: Infinite Intervals
An integral of Type 1 involves integrating to positive or negative infinity. This represents accumulating a quantity over an unbounded domain. The integral looks like this:
$$ \int_{a}^{\infty} f(x) dx $$

Because infinity is a concept, not a definitive number, we cannot simply plug it into an antiderivative. Instead, we must replace the infinite bound with a variable (such as $t$), evaluate the definite integral over the finite interval $[a, t]$, and then take the limit as $t \to \infty$.
$$ \lim_{t \to \infty} \int_{a}^{t} f(x) dx $$

*   **Convergence:** If the limit evaluates to a finite number, the integral converges. Physically, this means that even though the process continues forever, the total accumulated value (like energy or area) is finite.
*   **Divergence:** If the limit is $\pm\infty$ or does not exist, the integral diverges. The accumulation grows without bound.

#### Example 1: Work against an Inverse-Square Force (Easy)
**Scenario:** Calculate the total work done moving a particle from $x = 1$ to infinity, subject to a repulsive force $F(x) = \frac{1}{x^2}$.
$$ W = \int_{1}^{\infty} \frac{1}{x^2} dx $$
**Step 1:** Set up the limit.
$$ W = \lim_{t \to \infty} \int_{1}^{t} x^{-2} dx $$
**Step 2:** Integrate using the power rule.
$$ W = \lim_{t \to \infty} \left[ -\frac{1}{x} \right]_{1}^{t} $$
**Step 3:** Evaluate the bounds and apply the limit.
$$ W = \lim_{t \to \infty} \left( -\frac{1}{t} - \left(-\frac{1}{1}\right) \right) = \lim_{t \to \infty} \left( 1 - \frac{1}{t} \right) $$
As $t \to \infty$, the fraction $\frac{1}{t} \to 0$. The total work is $1$ Joule (assuming standard units). The integral **converges**.

#### Example 2: The Harmonic Analog (Medium)
**Scenario:** Evaluate the integral of $f(x) = \frac{1}{x}$ from $1$ to $\infty$.
$$ \int_{1}^{\infty} \frac{1}{x} dx = \lim_{t \to \infty} \int_{1}^{t} \frac{1}{x} dx $$
**Step 1:** Integrate.
$$ = \lim_{t \to \infty} \left[ \ln|x| \right]_{1}^{t} $$
**Step 2:** Evaluate the bounds.
$$ = \lim_{t \to \infty} (\ln(t) - \ln(1)) = \lim_{t \to \infty} (\ln(t) - 0) $$
As $t \to \infty$, the natural logarithm $\ln(t)$ also grows towards infinity. The integral **diverges**.

#### Example 3: Expected Value in Probability (Hard)
**Scenario:** In reliability engineering, the mean time to failure (MTTF) of a component with a constant failure rate is modeled by $\int_{0}^{\infty} x e^{-x} dx$. Let's evaluate it.
**Step 1:** Set up the limit.
$$ \lim_{t \to \infty} \int_{0}^{t} x e^{-x} dx $$
**Step 2:** Use Integration by Parts ($u = x$, $dv = e^{-x}dx \implies du = dx$, $v = -e^{-x}$).
$$ \int x e^{-x} dx = -x e^{-x} - \int -e^{-x} dx = -x e^{-x} - e^{-x} $$
**Step 3:** Apply the finite bounds and limits.
$$ \lim_{t \to \infty} \left[ -x e^{-x} - e^{-x} \right]_{0}^{t} $$
$$ = \lim_{t \to \infty} \left( \left( -t e^{-t} - e^{-t} \right) - \left( 0 - e^{0} \right) \right) $$
$$ = \lim_{t \to \infty} \left( -\frac{t}{e^t} - \frac{1}{e^t} + 1 \right) $$
By L'Hôpital's Rule, $\lim_{t \to \infty} \frac{t}{e^t} = 0$. The second term $\frac{1}{e^t} \to 0$. Thus, the limit evaluates to $0 - 0 + 1 = 1$. The component has an MTTF of $1$ unit. The integral **converges**.

### Type 2: Infinite Discontinuities (Vertical Asymptotes)
If $f(x)$ has a vertical asymptote at $x=c$ inside the interval $[a, b]$, the function's value shoots to infinity. You cannot simply evaluate the FTC across it. You must split the integral at the asymptote and use one-sided limits to approach it from the left and the right.
$$ \int_{a}^{b} f(x) dx = \lim_{t \to c^-} \int_{a}^{t} f(x) dx + \lim_{k \to c^+} \int_{k}^{b} f(x) dx $$

#### Example 4: Potential Near a Singularity (Medium)
**Scenario:** Evaluate the area under the curve $f(x) = \frac{1}{\sqrt{x}}$ from $0$ to $4$. The function has an infinite discontinuity at $x=0$, behaving like a singularity.
$$ \int_{0}^{4} \frac{1}{\sqrt{x}} dx $$
**Step 1:** Set up the right-sided limit approaching $0$.
$$ = \lim_{t \to 0^+} \int_{t}^{4} x^{-1/2} dx $$
**Step 2:** Integrate.
$$ = \lim_{t \to 0^+} \left[ 2x^{1/2} \right]_{t}^{4} $$
**Step 3:** Evaluate bounds and limit.
$$ = \lim_{t \to 0^+} (2\sqrt{4} - 2\sqrt{t}) = \lim_{t \to 0^+} (4 - 2\sqrt{t}) $$
As $t \to 0^+$, the term $2\sqrt{t} \to 0$. The total area is exactly $4$. The integral **converges**.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Improper Integrals",
        "icon": "Infinity",
        "description": "Integration involving infinity or asymptotes."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Type 1: Infinite Intervals",
        "icon": "ArrowRight",
        "description": "Domain extends to ±∞. Use limits as bounds approach infinity."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Type 2: Discontinuities",
        "icon": "AlertTriangle",
        "description": "Vertical asymptotes inside bounds. Use one-sided limits."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Convergence vs Divergence",
        "icon": "CheckCircle",
        "description": "Does the limit yield a finite value?"
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
