import re

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def append_to_topic(content, topic_name, new_text):
    pattern = r"(\s*'" + re.escape(topic_name) + r"': `)(.*?)(\n\s*`,?\n)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"Could not find topic: {topic_name}")
        return content
    start_tag = match.group(1)
    existing_text = match.group(2)
    end_tag = match.group(3)
    
    new_chunk = start_tag + existing_text + "\n\n" + new_text + end_tag
    return content[:match.start()] + new_chunk + content[match.end():]

derivations = {}

derivations['Single-Variable Calculus'] = r"""## Derivation of the Chain Rule
How do we rigorously prove the Chain Rule: $\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$?

**Step 1:** Use the limit definition of the derivative for the composite function.
$$ \lim_{h \to 0} \frac{f(g(x+h)) - f(g(x))}{h} $$

**Step 2:** A clever algebraic multiplication.
Multiply the numerator and denominator by the difference in the inner function, $[g(x+h) - g(x)]$:
$$ \lim_{h \to 0} \left( \frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} \cdot \frac{g(x+h) - g(x)}{h} \right) $$

**Step 3:** Separate the limits.
$$ \lim_{h \to 0} \left( \frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} \right) \cdot \lim_{h \to 0} \left( \frac{g(x+h) - g(x)}{h} \right) $$

**Step 4:** Evaluate the second limit.
The second term is precisely the definition of $g'(x)$.
$$ \dots \cdot g'(x) $$

**Step 5:** Evaluate the first limit using substitution.
Let $k = g(x+h) - g(x)$. As $h \to 0$, $k \to 0$ (assuming $g$ is continuous). 
Also note that $g(x+h) = g(x) + k$.
Substitute $k$ into the first limit:
$$ \lim_{k \to 0} \frac{f(g(x) + k) - f(g(x))}{k} $$
This is exactly the definition of the derivative of $f$, evaluated at $g(x)$, which is $f'(g(x))$.

**Step 6:** Combine the results.
$$ f'(g(x)) \cdot g'(x) $$
Q.E.D.

## Derivation of the Derivative of $e^x$
Why is the derivative of $e^x$ exactly $e^x$?

**Step 1:** The limit definition.
$$ \frac{d}{dx} e^x = \lim_{h \to 0} \frac{e^{x+h} - e^x}{h} $$

**Step 2:** Use the exponent rule $e^{A+B} = e^A e^B$.
$$ \lim_{h \to 0} \frac{e^x e^h - e^x}{h} $$

**Step 3:** Factor out the $e^x$.
Because $e^x$ does not depend on $h$, it acts as a constant and can be pulled outside the limit:
$$ e^x \cdot \lim_{h \to 0} \frac{e^h - 1}{h} $$

**Step 4:** The definition of Euler's Number ($e$).
The value $e$ is uniquely mathematically defined as the exact base that makes the slope of the curve at $x=0$ perfectly equal to $1$. Therefore, by definition:
$$ \lim_{h \to 0} \frac{e^h - 1}{h} = 1 $$

**Step 5:** Final substitution.
$$ e^x \cdot 1 = e^x $$
Q.E.D.

## Derivation of the Derivative of $\ln(x)$
Prove that $\frac{d}{dx} \ln(x) = \frac{1}{x}$.

**Step 1:** Start with the inverse relationship between exponentials and logarithms.
Let $y = \ln(x)$.
Therefore, $e^y = x$.

**Step 2:** Differentiate both sides implicitly with respect to $x$.
$$ \frac{d}{dx} [e^y] = \frac{d}{dx} [x] $$

**Step 3:** Apply the Chain Rule on the left side.
Since $y$ is a function of $x$, the derivative of $e^y$ is $e^y$ multiplied by the derivative of the inside ($y'$):
$$ e^y \cdot y' = 1 $$

**Step 4:** Isolate $y'$.
$$ y' = \frac{1}{e^y} $$

**Step 5:** Substitute $x$ back into the equation.
Since we established in Step 1 that $e^y = x$:
$$ y' = \frac{1}{x} $$
Q.E.D.

## Derivation of the Derivative of $\tan(x)$
Prove $\frac{d}{dx} \tan(x) = \sec^2(x)$.

**Step 1:** Rewrite tangent using sine and cosine.
$$ \tan(x) = \frac{\sin(x)}{\cos(x)} $$

**Step 2:** Apply the Quotient Rule.
Let $u = \sin(x)$ and $v = \cos(x)$. 
We know $u' = \cos(x)$ and $v' = -\sin(x)$.
The quotient rule states: $\frac{u'v - uv'}{v^2}$
$$ \frac{(\cos(x))(\cos(x)) - (\sin(x))(-\sin(x))}{(\cos(x))^2} $$

**Step 3:** Simplify the numerator.
$$ \frac{\cos^2(x) + \sin^2(x)}{\cos^2(x)} $$

**Step 4:** Apply the Pythagorean Identity.
We know that $\cos^2(x) + \sin^2(x) = 1$.
$$ \frac{1}{\cos^2(x)} $$

**Step 5:** Convert back to secant.
Since $\sec(x) = \frac{1}{\cos(x)}$, squaring it yields:
$$ \sec^2(x) $$
Q.E.D.

## Derivation of the Derivative of $\arcsin(x)$
Prove $\frac{d}{dx} \arcsin(x) = \frac{1}{\sqrt{1 - x^2}}$.

**Step 1:** Set up the inverse equation.
Let $y = \arcsin(x)$.
This implies $\sin(y) = x$.

**Step 2:** Differentiate implicitly with respect to $x$.
$$ \cos(y) \cdot y' = 1 $$
$$ y' = \frac{1}{\cos(y)} $$

**Step 3:** Express $\cos(y)$ in terms of $x$.
Using the Pythagorean identity $\sin^2(y) + \cos^2(y) = 1$:
$$ \cos(y) = \sqrt{1 - \sin^2(y)} $$
Since we defined $\sin(y) = x$, we can substitute $x$ back in:
$$ \cos(y) = \sqrt{1 - x^2} $$

**Step 4:** Substitute the denominator.
$$ y' = \frac{1}{\sqrt{1 - x^2}} $$
Q.E.D.

## Derivation of the Arc Length Formula
Why is the length of a curve given by $L = \int \sqrt{1 + (f'(x))^2} \, dx$?

**Step 1:** Approximate the curve with tiny straight line segments.
By the Pythagorean theorem, the length of a microscopic straight line segment $dL$ is:
$$ (dL)^2 = (dx)^2 + (dy)^2 $$
$$ dL = \sqrt{(dx)^2 + (dy)^2} $$

**Step 2:** Factor out $dx$ from the square root.
$$ dL = \sqrt{(dx)^2 \left( 1 + \frac{(dy)^2}{(dx)^2} \right)} $$
$$ dL = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \cdot dx $$

**Step 3:** Sum up all the microscopic segments.
To find the total length, we integrate $dL$ from the starting point $a$ to the ending point $b$:
$$ L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx $$
Q.E.D.

## Derivation of the Fundamental Theorem of Calculus (Part 1)
Prove that $\frac{d}{dx} \int_a^x f(t)\,dt = f(x)$.

**Step 1:** Define the area function.
Let $A(x) = \int_a^x f(t)\,dt$. This represents the area under the curve $f(t)$ from a fixed point $a$ to a moving point $x$.

**Step 2:** Apply the limit definition of the derivative to $A(x)$.
$$ A'(x) = \lim_{h \to 0} \frac{A(x+h) - A(x)}{h} $$

**Step 3:** Geometrically interpret the numerator.
$A(x+h) - A(x)$ is the area from $a$ to $x+h$, minus the area from $a$ to $x$. This leaves only the tiny vertical strip of area from $x$ to $x+h$:
$$ \int_x^{x+h} f(t)\,dt $$

**Step 4:** Approximate the tiny strip's area.
For a very small width $h$, the area of this strip is approximately a rectangle with width $h$ and height $f(x)$:
$$ \int_x^{x+h} f(t)\,dt \approx f(x) \cdot h $$

**Step 5:** Substitute back into the limit.
$$ A'(x) = \lim_{h \to 0} \frac{f(x) \cdot h}{h} $$
The $h$'s perfectly cancel:
$$ A'(x) = f(x) $$
Q.E.D. This proves that taking the derivative of an integral simply returns the original function!
"""

for topic, text in derivations.items():
    content = append_to_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Appended mass derivations successfully.")
