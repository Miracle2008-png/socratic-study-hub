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

derivations['Quadratic equations'] = r"""## Derivation of the Quadratic Formula

The quadratic formula is not magic; it is simply the result of "Completing the Square" on the general equation $ax^2 + bx + c = 0$. Here is the rigorous step-by-step derivation:

**Step 1: Start with the standard form**
$$ ax^2 + bx + c = 0 $$

**Step 2: Divide the entire equation by $a$ (assuming $a \neq 0$)**
$$ x^2 + \frac{b}{a}x + \frac{c}{a} = 0 $$

**Step 3: Move the constant term to the right side**
$$ x^2 + \frac{b}{a}x = -\frac{c}{a} $$

**Step 4: Complete the square**
Take half of the $x$ coefficient ($\frac{b}{2a}$), square it ($\frac{b^2}{4a^2}$), and add it to both sides to maintain equality:
$$ x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = -\frac{c}{a} + \frac{b^2}{4a^2} $$

**Step 5: Factor the perfect square on the left, and find a common denominator on the right**
The left side collapses perfectly into $(x + \frac{b}{2a})^2$. 
For the right side, multiply $-\frac{c}{a}$ by $\frac{4a}{4a}$ to get $-\frac{4ac}{4a^2}$:
$$ \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} $$

**Step 6: Take the square root of both sides**
Remember to include the $\pm$ symbol, as both a positive and negative root will satisfy the square:
$$ x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{\sqrt{4a^2}} $$

**Step 7: Simplify the denominator and isolate $x$**
Since $\sqrt{4a^2} = 2a$:
$$ x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a} $$
Move $\frac{b}{2a}$ to the right side:
$$ x = -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a} $$

**Step 8: Combine into a single fraction**
$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
Q.E.D. The formula is derived!
"""

derivations['Sequences & series'] = r"""## Derivation of the Infinite Geometric Series Sum

How do we prove that an infinite geometric series with $|r| < 1$ converges to $S_\infty = \frac{a}{1-r}$?

**Step 1: Write the finite sum $S_n$**
$$ S_n = a + ar + ar^2 + ar^3 + \dots + ar^{n-1} $$

**Step 2: Multiply the entire equation by $r$**
$$ rS_n = ar + ar^2 + ar^3 + \dots + ar^{n-1} + ar^n $$

**Step 3: Subtract the second equation from the first**
Notice that almost all the terms perfectly cancel out! The $ar$ cancels with $ar$, $ar^2$ with $ar^2$, all the way up to $ar^{n-1}$.
$$ S_n - rS_n = a - ar^n $$

**Step 4: Factor out $S_n$**
$$ S_n(1 - r) = a(1 - r^n) $$
$$ S_n = \frac{a(1 - r^n)}{1 - r} $$
This gives us the formula for the sum of a *finite* geometric series of $n$ terms.

**Step 5: Take the limit as $n \to \infty$**
$$ S_\infty = \lim_{n \to \infty} \frac{a(1 - r^n)}{1 - r} $$
If the ratio $r$ is strictly between $-1$ and $1$ ($|r| < 1$), then multiplying $r$ by itself infinitely many times will drive it to zero.
$$ \lim_{n \to \infty} r^n = 0 $$
Therefore, the $r^n$ term vanishes completely:
$$ S_\infty = \frac{a(1 - 0)}{1 - r} = \frac{a}{1 - r} $$
Q.E.D.
"""

derivations['Multivariable Calculus & Vector Fields'] = r"""## Derivation of the Directional Derivative

We previously stated that the directional derivative $D_{\vec{u}}f$ is simply the dot product $\nabla f \cdot \vec{u}$. But why is this true? Here is the rigorous derivation.

**Step 1: The Definition of the Directional Derivative**
Just like a standard 1D derivative, we define it using a limit. We want to find the rate of change of $f(x,y)$ as we move from a point $(x_0, y_0)$ along a straight path defined by a unit vector $\vec{u} = \langle u_1, u_2 \rangle$.
We parameterize this path using a scalar $h$ (representing the distance walked):
$x(h) = x_0 + hu_1$
$y(h) = y_0 + hu_2$

The directional derivative is the limit as our step size $h$ approaches 0:
$$ D_{\vec{u}}f(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + hu_1, y_0 + hu_2) - f(x_0, y_0)}{h} $$

**Step 2: Apply the Multivariable Chain Rule**
Let's define a new 1D function $g(h) = f(x(h), y(h))$. 
The directional derivative is simply the standard derivative of $g$ evaluated at $h=0$:
$$ D_{\vec{u}}f = g'(0) $$

By the multivariable chain rule:
$$ g'(h) = \frac{\partial f}{\partial x}\frac{dx}{dh} + \frac{\partial f}{\partial y}\frac{dy}{dh} $$

**Step 3: Evaluate the Derivatives**
Since $x(h) = x_0 + hu_1$, the derivative $\frac{dx}{dh}$ is simply the constant $u_1$.
Since $y(h) = y_0 + hu_2$, the derivative $\frac{dy}{dh}$ is simply the constant $u_2$.

Substitute these into the chain rule:
$$ g'(h) = \frac{\partial f}{\partial x}u_1 + \frac{\partial f}{\partial y}u_2 $$

**Step 4: Convert to Dot Product Notation**
Notice that the expression $\frac{\partial f}{\partial x}u_1 + \frac{\partial f}{\partial y}u_2$ is exactly the algebraic definition of a dot product between two vectors!
Let Vector 1 be the Gradient: $\nabla f = \langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \rangle$.
Let Vector 2 be our direction vector: $\vec{u} = \langle u_1, u_2 \rangle$.

Therefore:
$$ D_{\vec{u}}f = \langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \rangle \cdot \langle u_1, u_2 \rangle = \nabla f \cdot \vec{u} $$
Q.E.D. The directional derivative is perfectly captured by the dot product!
"""

derivations['Differential Equations'] = r"""## Derivation of the Integrating Factor Method

How do we solve a first-order linear differential equation of the form $\frac{dy}{dx} + P(x)y = Q(x)$? We use an "Integrating Factor", $\mu(x)$. But where does $\mu(x)$ come from?

**Step 1: The Goal**
We want to multiply the entire equation by some mysterious function $\mu(x)$ so that the left side magically compresses into the exact derivative of a single product using the Product Rule.
Multiply both sides by $\mu(x)$:
$$ \mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x) $$

We *want* the left side to be exactly equal to $\frac{d}{dx}[\mu(x) y]$.
By the product rule, $\frac{d}{dx}[\mu(x) y] = \mu(x)\frac{dy}{dx} + \mu'(x)y$.

**Step 2: Equating the Terms**
For our multiplied equation to match the product rule, we must force the $y$ terms to be equal. We compare $\mu(x)P(x)y$ with $\mu'(x)y$:
$$ \mu(x)P(x) = \mu'(x) $$
$$ \mu(x)P(x) = \frac{d\mu}{dx} $$

**Step 3: Solve this separable DE for $\mu(x)$**
This is a simple separable differential equation! Let's solve it to find the magic formula for $\mu(x)$.
1. Separate variables: 
   $$ P(x) \, dx = \frac{1}{\mu} \, d\mu $$
2. Integrate both sides:
   $$ \int P(x) \, dx = \int \frac{1}{\mu} \, d\mu $$
   $$ \int P(x) \, dx = \ln|\mu| $$
3. Exponentiate both sides to isolate $\mu$:
   $$ \mu(x) = e^{\int P(x) \, dx} $$

**Step 4: The Final Solution**
Because we chose $\mu(x)$ to perfectly satisfy the product rule, our original multiplied equation becomes:
$$ \frac{d}{dx}[\mu(x)y] = \mu(x)Q(x) $$
Now, we just integrate both sides with respect to $x$:
$$ \mu(x)y = \int \mu(x)Q(x) \, dx + C $$
$$ y = \frac{1}{\mu(x)} \left( \int \mu(x)Q(x) \, dx + C \right) $$
Q.E.D. This is the exact formula for solving first-order linear DEs!
"""

derivations['Real analysis'] = r"""## Proof: The Derivative of $x^2$ is $2x$

In elementary calculus, you learn the Power Rule ($x^n \to nx^{n-1}$) by rote memorization. In Real Analysis, we must rigorously prove it using the limit definition of the derivative.

**Step 1: The Limit Definition**
The derivative of a function $f(x)$ is defined as the limit of the difference quotient (the slope of the secant line) as the distance $h$ between the points shrinks to absolute zero:
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

**Step 2: Substitute $f(x) = x^2$**
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} $$

**Step 3: Expand the binomial**
Using algebraic expansion, $(x+h)^2 = x^2 + 2xh + h^2$:
$$ f'(x) = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} $$

**Step 4: Cancel terms**
The $x^2$ and $-x^2$ perfectly annihilate each other:
$$ f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h} $$

**Step 5: Factor out $h$**
Since $h$ is approaching $0$ but is not exactly $0$ yet, we are legally allowed to divide by it. We factor $h$ out of the numerator:
$$ f'(x) = \lim_{h \to 0} \frac{h(2x + h)}{h} $$
The $h$'s cancel out:
$$ f'(x) = \lim_{h \to 0} (2x + h) $$

**Step 6: Evaluate the limit**
Now that the dreaded division by zero is eliminated, we can safely evaluate the limit by direct substitution. As $h$ shrinks to exactly $0$, the $+h$ term vanishes:
$$ f'(x) = 2x + 0 = 2x $$
Q.E.D. We have rigorously proven the power rule for $n=2$.
"""

for topic, text in derivations.items():
    content = append_to_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Appended derivations successfully.")
