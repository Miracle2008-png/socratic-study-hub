# 5. Infinite Limits & Vertical Asymptotes

Often, as a function's input $x$ approaches a specific value $c$, the output of the function grows without bound. In these cases, the limit does not exist as a finite number, but we use the symbol $\infty$ or $-\infty$ to precisely describe *how* it fails to exist.

In engineering, infinite limits often correspond to physical phenomena reaching critical states:
*   **Mechanical Resonance:** A system driven at its natural frequency where vibrational amplitude theoretically goes to infinity (leading to catastrophic failure, like a collapsing bridge).
*   **Electromagnetism:** The electric field strength as you approach a point charge grows infinitely large.
*   **Fluid Dynamics:** Pressure changes drastically when moving fluid reaches supersonic speeds across a shockwave.

### Defining Infinite Limits

We say:
$$\lim_{x \to c} f(x) = \infty$$
if, as $x$ gets arbitrarily close to $c$, the values of $f(x)$ become arbitrarily large and positive.

Similarly, we say:
$$\lim_{x \to c} f(x) = -\infty$$
if the values of $f(x)$ become arbitrarily large and negative.

### Vertical Asymptotes
Whenever a function exhibits an infinite limit as it approaches a value $c$ (from the left, right, or both), the vertical line $x = c$ is called a **vertical asymptote**.

Vertical asymptotes most commonly occur in rational functions $\frac{P(x)}{Q(x)}$ at values where the denominator $Q(c) = 0$ but the numerator $P(c) \neq 0$. If both are zero, it is an indeterminate form, which may be a hole instead of an asymptote.

---

### Worked Examples

#### Example 1 (Easy): Magnetic Force Approaching Zero Distance
**Evaluate:** $\lim_{x \to 3} \frac{1}{(x-3)^2}$

This resembles an inverse-square law, such as the force between two magnets as the distance between them approaches zero.
**Step-by-Step Solution:**
1. As $x$ approaches 3, the denominator $(x-3)^2$ approaches 0.
2. Because any real number squared is strictly positive, the denominator is always a very small *positive* number, regardless of whether $x$ approaches from the left (e.g., $2.999$) or the right (e.g., $3.001$). 
3. Dividing a constant ($1$) by an infinitesimally small positive number yields an infinitely large positive number.
   $$ \lim_{x \to 3} \frac{1}{(x-3)^2} = \infty $$
4. The line $x = 3$ is a vertical asymptote. The physical system implies force grows without bound, suggesting an eventual collision or material failure.

#### Example 2 (Medium): Differing One-Sided Infinite Limits
**Evaluate:** $\lim_{x \to 0} \frac{1}{x}$

This relates to a single point dipole or a source/sink in a vector field.
**Step-by-Step Solution:**
1. Evaluate the right-hand limit. As $x$ approaches 0 from the right ($x \to 0^+$), we divide $1$ by very small *positive* numbers ($1/0.001 = 1000$).
   $$ \lim_{x \to 0^+} \frac{1}{x} = \infty $$
2. Evaluate the left-hand limit. As $x$ approaches 0 from the left ($x \to 0^-$), we divide $1$ by very small *negative* numbers ($1/-0.001 = -1000$).
   $$ \lim_{x \to 0^-} \frac{1}{x} = -\infty $$
3. Because the left and right limits diverge to opposite infinities, the overall limit $\lim_{x \to 0} \frac{1}{x}$ **Does Not Exist (DNE)**. However, the line $x=0$ is definitively a vertical asymptote.

#### Example 3 (Hard): Mechanical Resonance in a Driven System
The amplitude $A$ of a driven mechanical oscillator depends on the driving frequency $\omega$. If the system has no damping, the amplitude near the natural resonant frequency $\omega_0$ is modeled by:
$$ A(\omega) = \frac{F_0}{m(\omega_0^2 - \omega^2)} $$
Assuming $F_0 > 0$ and $m > 0$. **Evaluate the limit as $\omega$ approaches $\omega_0$ from below ($\omega \to \omega_0^-$) and from above ($\omega \to \omega_0^+$).**

**Step-by-Step Solution:**
1. Factor the denominator: $\omega_0^2 - \omega^2 = (\omega_0 - \omega)(\omega_0 + \omega)$.
2. Evaluate the left-hand limit ($\omega \to \omega_0^-$):
   Here, $\omega$ is slightly less than $\omega_0$, so $(\omega_0 - \omega)$ is a very small positive number. The term $(\omega_0 + \omega)$ is roughly $2\omega_0$ (positive). The numerator is positive.
   $$ \lim_{\omega \to \omega_0^-} A(\omega) = \frac{\text{positive}}{\text{very small positive}} = \infty $$
   This means the amplitude grows positively without bound.
3. Evaluate the right-hand limit ($\omega \to \omega_0^+$):
   Here, $\omega$ is slightly greater than $\omega_0$, so $(\omega_0 - \omega)$ is a very small negative number. The numerator is positive.
   $$ \lim_{\omega \to \omega_0^+} A(\omega) = \frac{\text{positive}}{\text{very small negative}} = -\infty $$
   This change in sign indicates a 180° phase shift in the oscillation when crossing the resonant frequency. The line $\omega = \omega_0$ is a vertical asymptote indicating infinite resonance.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Check Denominator",
        "icon": "Search",
        "description": "Does Q(c) = 0?"
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Check Numerator",
        "icon": "Filter",
        "description": "If P(c) != 0, it's an asymptote"
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Analyze Signs",
        "icon": "PlusMinus",
        "description": "Is denominator positive or negative near c?"
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Determine Infinity",
        "icon": "ArrowUpCircle",
        "description": "Assign +∞ or -∞ for each side"
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    }
  ],
  "edges": [
    { "source": "1", "target": "2", "animated": true },
    { "source": "2", "target": "3", "animated": true },
    { "source": "3", "target": "4", "animated": true }
  ]
}
```
