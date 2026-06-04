# Differentiation & Derivatives

## 1. The Derivative as a Rate of Change
The derivative represents the instantaneous rate of change of a function with respect to its variable. Geometrically, it is the slope of the tangent line to the curve $y = f(x)$ at a given point. In engineering physics, it often represents velocity (the derivative of position) or acceleration (the derivative of velocity).

**Formal Definition (First Principles):**
The derivative of a function $f(x)$ with respect to $x$ is defined as the limit of the difference quotient:
$$ f'(x) = \frac{d}{dx}f(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$
provided this limit exists.

## 2. Fundamental Rules of Differentiation
Rather than using first principles for every function, we utilize established rules derived from the definition.

*   **Constant Rule:** $\frac{d}{dx}[c] = 0$
*   **Power Rule:** $\frac{d}{dx}[x^n] = nx^{n-1}$
*   **Constant Multiple Rule:** $\frac{d}{dx}[c f(x)] = c f'(x)$
*   **Sum/Difference Rule:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$

### Product and Quotient Rules
When dealing with products or fractions of functions, standard additive distribution does not apply.

**Product Rule:**
$$ \frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Quotient Rule:**
$$ \frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} $$

### Worked Example 1: Applying the Quotient Rule
**Problem:** Differentiate $f(x) = \frac{2x^2 + 1}{x - 3}$.

**Solution:**
Let $u = 2x^2 + 1$ and $v = x - 3$.
Then $u' = 4x$ and $v' = 1$.
Applying the quotient rule:
$$ f'(x) = \frac{(4x)(x - 3) - (2x^2 + 1)(1)}{(x - 3)^2} $$
Expand the numerator:
$$ = \frac{4x^2 - 12x - 2x^2 - 1}{(x - 3)^2} = \frac{2x^2 - 12x - 1}{(x - 3)^2} $$

## 3. The Chain Rule
The Chain Rule is arguably the most critical differentiation tool in engineering, used for differentiating composite functions.

**Chain Rule Definition:**
If $y = f(u)$ and $u = g(x)$, then:
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$
Alternatively, $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$.

### Worked Example 2: The Chain Rule
**Problem:** Find the derivative of the damped oscillation envelope $y = e^{-3x^2}$.

**Solution:**
This is a composition where the outer function is $e^u$ and the inner function is $u = -3x^2$.
1. Derivative of the outer function $e^u$ is $e^u$.
2. Derivative of the inner function $u = -3x^2$ is $-6x$.
Multiply them together:
$$ \frac{dy}{dx} = e^{-3x^2} \cdot (-6x) = -6x e^{-3x^2} $$

## 4. Implicit Differentiation
When equations cannot be easily rearranged to isolate $y$ explicitly in terms of $x$ (e.g., $x^2 + y^2 = r^2$), we differentiate both sides of the equation with respect to $x$, treating $y$ as a function of $x$ (which invokes the Chain Rule).

### Worked Example 3: Implicit Differentiation
**Problem:** Find $\frac{dy}{dx}$ for the circle equation $x^2 + y^2 = 25$.

**Solution:**
Differentiate both sides with respect to $x$:
$$ \frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(25) $$
$$ 2x + 2y \frac{dy}{dx} = 0 $$
Solve for $\frac{dy}{dx}$:
$$ 2y \frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y} $$

## 5. Concept Drills
Test your understanding. Select your answer to immediately reveal the worked correction.

```drill
Question: What is the derivative of $f(x) = x^3 \sin(x)$?
Options:
A) $3x^2 \cos(x)$
B) $3x^2 \sin(x) - x^3 \cos(x)$
C) $3x^2 \sin(x) + x^3 \cos(x)$
D) $x^3 \cos(x)$
Answer: C
Explanation: Use the Product Rule: $(uv)' = u'v + uv'$.
Let $u = x^3$ and $v = \sin(x)$.
Then $u' = 3x^2$ and $v' = \cos(x)$.
Substitute these into the formula:
$$ f'(x) = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin(x) + x^3 \cos(x) $$
```

```drill
Question: Find $\frac{dy}{dx}$ if $y = \ln(x^2 + 4x)$.
Options:
A) $\frac{1}{x^2 + 4x}$
B) $\frac{2x + 4}{x^2 + 4x}$
C) $\frac{1}{2x + 4}$
D) $\frac{2}{x}$
Answer: B
Explanation: Use the Chain Rule. The derivative of $\ln(u)$ is $\frac{1}{u} \cdot u'$.
Let $u = x^2 + 4x$. Then $u' = 2x + 4$.
$$ \frac{dy}{dx} = \frac{1}{x^2 + 4x} \cdot (2x + 4) = \frac{2x + 4}{x^2 + 4x} $$
```

```drill
Question: Determine the slope of the tangent line to the curve $x^3 + y^3 = 9$ at the point $(1, 2)$.
Options:
A) $-\frac{1}{4}$
B) $\frac{1}{4}$
C) $-4$
D) $-\frac{1}{2}$
Answer: A
Explanation: Use implicit differentiation.
$$ \frac{d}{dx}[x^3 + y^3] = \frac{d}{dx}[9] $$
$$ 3x^2 + 3y^2 \frac{dy}{dx} = 0 $$
Solve for $\frac{dy}{dx}$:
$$ \frac{dy}{dx} = -\frac{3x^2}{3y^2} = -\frac{x^2}{y^2} $$
Evaluate at $(x, y) = (1, 2)$:
$$ m = -\frac{(1)^2}{(2)^2} = -\frac{1}{4} $$
```
