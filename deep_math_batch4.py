import re

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_topic(content, topic_name, new_text):
    pattern = r"(\s*'" + re.escape(topic_name) + r"': `)(.*?)(\n\s*`,?\n)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"Could not find topic: {topic_name}")
        return content
    start_tag = match.group(1)
    end_tag = match.group(3)
    new_chunk = start_tag + "\n" + new_text + end_tag
    return content[:match.start()] + new_chunk + content[match.end():]

topics = {}

topics['Single-Variable Calculus'] = r"""# Single-Variable Calculus: The Mathematics of Change

## 1. Introduction to the Limit
Calculus is the mathematics of continuous change, and its foundation is the **Limit**.
Before calculus, math was static. You could find the average speed of a car over 1 hour, but finding its exact speed at an instantaneous moment ($t = 2.500$ seconds) resulted in dividing by zero: $\frac{0}{0}$.
The limit allows us to infinitely approach that moment without ever touching it. We say $\lim_{x \to a} f(x) = L$ if $f(x)$ gets arbitrarily close to $L$ as $x$ gets arbitrarily close to $a$.

## 2. The Derivative (Differential Calculus)
The derivative $f'(x)$ is the instantaneous rate of change of a function. Geometrically, it is the slope of the tangent line to the curve at a specific point.
It is defined by the difference quotient:
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

## 3. Rules of Differentiation
Using the limit definition for every problem would take hours. Instead, we use derived rules:
1. **Power Rule**: $\frac{d}{dx} x^n = n x^{n-1}$
2. **Product Rule**: $\frac{d}{dx} [u(x)v(x)] = u'v + uv'$
3. **Quotient Rule**: $\frac{d}{dx} \left[\frac{u(x)}{v(x)}\right] = \frac{u'v - uv'}{v^2}$
4. **Chain Rule**: $\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$

## 4. Derivatives of Transcendental Functions
* **Trigonometry**: $\frac{d}{dx}\sin(x) = \cos(x)$, $\frac{d}{dx}\cos(x) = -\sin(x)$, $\frac{d}{dx}\tan(x) = \sec^2(x)$.
* **Exponentials**: The magical property of $e^x$ is that it is its own derivative! $\frac{d}{dx} e^x = e^x$.
* **Logarithms**: $\frac{d}{dx} \ln(x) = \frac{1}{x}$.

## 5. The Integral (Integral Calculus)
While the derivative finds the slope, the **Integral** finds the area under the curve.
The Definite Integral is defined as the limit of a Riemann Sum (adding up an infinite number of infinitely thin rectangles):
$$ \int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\Delta x $$

## 6. The Fundamental Theorem of Calculus (FTC)
The most brilliant discovery in human history: Finding slopes (derivatives) and finding areas (integrals) are **exact inverse operations**.
If you integrate a rate of change, you get the total accumulated change:
$$ \int_a^b f'(x)\,dx = f(b) - f(a) $$

## Derivation of the Power Rule
Let's prove that $\frac{d}{dx} x^n = n x^{n-1}$ using the Binomial Theorem.

**Step 1:** Plug $f(x) = x^n$ into the limit definition.
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^n - x^n}{h} $$

**Step 2:** Expand $(x+h)^n$ using the Binomial Theorem.
$$ (x+h)^n = x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \dots + h^n $$

**Step 3:** Substitute back and subtract $x^n$.
$$ f'(x) = \lim_{h \to 0} \frac{x^n + nx^{n-1}h + h^2(\dots) - x^n}{h} $$
The $x^n$ terms cancel out.

**Step 4:** Factor out $h$ and divide.
$$ f'(x) = \lim_{h \to 0} \frac{h(nx^{n-1} + h(\dots))}{h} = \lim_{h \to 0} [nx^{n-1} + h(\dots)] $$

**Step 5:** Evaluate the limit as $h \to 0$.
Every term with an $h$ goes to $0$, leaving only the first term:
$$ f'(x) = nx^{n-1} $$
Q.E.D.

## Derivation of the Product Rule
How do we prove $\frac{d}{dx} [u(x)v(x)] = u'v + uv'$?

**Step 1:** Use the limit definition.
$$ \lim_{h \to 0} \frac{u(x+h)v(x+h) - u(x)v(x)}{h} $$

**Step 2:** The magical algebraic trick. Add and subtract $u(x+h)v(x)$ in the numerator!
$$ \lim_{h \to 0} \frac{u(x+h)v(x+h) - u(x+h)v(x) + u(x+h)v(x) - u(x)v(x)}{h} $$

**Step 3:** Group the terms.
$$ \lim_{h \to 0} \left[ u(x+h) \frac{v(x+h) - v(x)}{h} + v(x) \frac{u(x+h) - u(x)}{h} \right] $$

**Step 4:** Take the limits.
As $h \to 0$, $u(x+h) \to u(x)$. The fractions become the definitions of $v'(x)$ and $u'(x)$ respectively.
$$ = u(x)v'(x) + v(x)u'(x) $$
Q.E.D.

## Derivation of the Quotient Rule
Prove $\frac{d}{dx} \left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}$.

**Step 1:** We can rewrite division as multiplication using a negative exponent.
$$ y = u(x) \cdot [v(x)]^{-1} $$

**Step 2:** Apply the Product Rule and Chain Rule!
$$ y' = u'(x)[v(x)]^{-1} + u(x) \cdot \frac{d}{dx}([v(x)]^{-1}) $$
By the chain rule, $\frac{d}{dx}([v(x)]^{-1}) = -1[v(x)]^{-2} \cdot v'(x)$.
$$ y' = \frac{u'}{v} - \frac{uv'}{v^2} $$

**Step 3:** Find a common denominator ($v^2$).
Multiply the first term by $\frac{v}{v}$:
$$ y' = \frac{u'v}{v^2} - \frac{uv'}{v^2} = \frac{u'v - uv'}{v^2} $$
Q.E.D.

## Derivation of the Derivative of $\sin(x)$
Prove $\frac{d}{dx} \sin(x) = \cos(x)$.

**Step 1:** Limit definition.
$$ \lim_{h \to 0} \frac{\sin(x+h) - \sin(x)}{h} $$

**Step 2:** Use the trigonometric angle addition identity: $\sin(A+B) = \sin A\cos B + \cos A\sin B$.
$$ \lim_{h \to 0} \frac{\sin(x)\cos(h) + \cos(x)\sin(h) - \sin(x)}{h} $$

**Step 3:** Group the $\sin(x)$ terms together.
$$ \lim_{h \to 0} \left[ \sin(x) \frac{\cos(h) - 1}{h} + \cos(x) \frac{\sin(h)}{h} \right] $$

**Step 4:** Apply fundamental trigonometric limits.
We know that $\lim_{h \to 0} \frac{\sin(h)}{h} = 1$ and $\lim_{h \to 0} \frac{\cos(h) - 1}{h} = 0$.
$$ = \sin(x)(0) + \cos(x)(1) = \cos(x) $$
Q.E.D.

## Derivation of Integration by Parts
Where does the formula $\int u\,dv = uv - \int v\,du$ come from? It is just the Product Rule in reverse!

**Step 1:** Start with the Product Rule for derivatives.
$$ \frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Step 2:** Integrate both sides with respect to $x$.
$$ \int \frac{d}{dx}[u(x)v(x)]\,dx = \int v(x)u'(x)\,dx + \int u(x)v'(x)\,dx $$

**Step 3:** The integral of a derivative cancels out (by FTC).
$$ u(x)v(x) = \int v(x) \,du + \int u(x) \,dv $$

**Step 4:** Rearrange the equation to solve for $\int u \,dv$.
$$ \int u \,dv = uv - \int v \,du $$
Q.E.D.

## Derivation of U-Substitution
Where does the formula $\int f(g(x))g'(x)\,dx = \int f(u)\,du$ come from? It is just the Chain Rule in reverse!

**Step 1:** Start with the Chain Rule for derivatives.
Let $F(x)$ be the antiderivative of $f(x)$, meaning $F'(x) = f(x)$.
$$ \frac{d}{dx}[F(g(x))] = F'(g(x))g'(x) = f(g(x))g'(x) $$

**Step 2:** Integrate both sides with respect to $x$.
$$ \int \frac{d}{dx}[F(g(x))] \,dx = \int f(g(x))g'(x) \,dx $$
$$ F(g(x)) = \int f(g(x))g'(x) \,dx $$

**Step 3:** Let $u = g(x)$. Then $du = g'(x)dx$.
Since $F(u)$ is the integral of $f(u)$, we can write:
$$ \int f(u) \,du = \int f(g(x))g'(x) \,dx $$
Q.E.D.
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded Single-Variable Calculus with extensive derivations.")
