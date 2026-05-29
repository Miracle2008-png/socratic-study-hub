import re

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_topic(content, topic_name, new_text):
    # Find the start of the topic
    pattern = r"(\s*'" + re.escape(topic_name) + r"': `)(.*?)(\n\s*`,?\n)"
    # We use re.DOTALL so .*? matches newlines
    
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"Could not find topic: {topic_name}")
        return content
        
    start_tag = match.group(1)
    end_tag = match.group(3)
    
    new_chunk = start_tag + "\n" + new_text + end_tag
    return content[:match.start()] + new_chunk + content[match.end():]

topics = {}

topics['Real analysis'] = """# Real Analysis: The Rigorous Foundation of Calculus

## 1. Sets and the Real Number Line

Calculus works because of the unique properties of the Real Numbers ($\\mathbb{R}$). Unlike the Rational Numbers ($\\mathbb{Q}$), the real number line has no "holes."

This property is formally defined by the **Completeness Axiom**:
*Every non-empty subset of $\\mathbb{R}$ that is bounded above has a supremum (least upper bound) in $\\mathbb{R}$.*

For example, the set of rational numbers whose square is less than 2 ($x^2 < 2$) is bounded above (e.g., by 1.5, 2, 3), but it has no supremum in $\\mathbb{Q}$. In $\\mathbb{R}$, its supremum is exactly $\\sqrt{2}$.

## 2. Limits and the $\\varepsilon-\\delta$ Definition

In introductory calculus, we say $\\lim_{x \\to a} f(x) = L$ if $f(x)$ gets "closer and closer" to $L$ as $x$ gets "closer and closer" to $a$. 
In Real Analysis, we make this mathematically bulletproof using the **Epsilon-Delta Definition**, pioneered by Karl Weierstrass.

**Definition:**
$\\lim_{x \\to a} f(x) = L$ if and only if:
For every $\\varepsilon > 0$, there exists a $\\delta > 0$ such that:
$$ 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon $$

**Translation:**
No matter how tiny a tolerance $\\varepsilon$ you challenge me with, I can always find a small window $\\delta$ around $a$ such that if $x$ is in that window, $f(x)$ is guaranteed to be within your $\\varepsilon$-tolerance of $L$.

## 3. Continuity

A function $f$ is continuous at a point $a$ if:
1. $f(a)$ is defined.
2. $\\lim_{x \\to a} f(x)$ exists.
3. $\\lim_{x \\to a} f(x) = f(a)$.

Using the $\\varepsilon-\\delta$ definition, $f$ is continuous at $a$ if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that:
$$ |x - a| < \\delta \\implies |f(x) - f(a)| < \\varepsilon $$

### The Extreme Value Theorem (EVT)
If a function $f(x)$ is continuous on a closed interval $[a, b]$, it must attain an absolute maximum and an absolute minimum value on that interval. (This fails if the interval is open, e.g., $(0, 1)$, because the function could approach infinity without ever reaching a maximum).

## 4. Derivatives and Differentiability

The derivative is defined via the limit of the difference quotient:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

If $f'(a)$ exists, we say $f$ is **differentiable** at $a$. 
*Theorem:* Differentiability implies continuity. However, continuity does NOT imply differentiability!
A classic example is $f(x) = |x|$, which is continuous everywhere but not differentiable at $x = 0$ because the limit approaches $-1$ from the left and $+1$ from the right.

### The Mean Value Theorem (MVT)
If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c$ in $(a, b)$ such that:
$$ f'(c) = \\frac{f(b) - f(a)}{b - a} $$
Geometrically, this means there is at least one point where the instantaneous tangent slope is exactly parallel to the average secant slope connecting the endpoints.

## 5. Riemann Integration

In Real Analysis, we rigorously define the integral using **Riemann Sums** and **Darboux Integrals**.

For a bounded function $f(x)$ on $[a, b]$, we partition the interval into sub-intervals. 
* The **Upper Darboux Sum** $U(f, P)$ calculates rectangular areas using the *supremum* (maximum) of $f$ on each sub-interval.
* The **Lower Darboux Sum** $L(f, P)$ uses the *infimum* (minimum).

A function is **Riemann Integrable** if and only if the infimum of all possible upper sums exactly equals the supremum of all possible lower sums.
$$ \\inf \\{ U(f, P) \\} = \\sup \\{ L(f, P) \\} = \\int_a^b f(x)dx $$

## 6. Insane Level: Pathological Functions

Real analysis was largely invented to deal with "monsters"—functions that break all intuitive rules of geometry and introductory calculus.

### The Dirichlet Function
Consider the function $D(x)$ defined as:
* $D(x) = 1$ if $x$ is rational ($\\in \\mathbb{Q}$)
* $D(x) = 0$ if $x$ is irrational ($\\notin \\mathbb{Q}$)

Because between every two rational numbers there is an irrational number, and vice-versa, this function is wildly discontinuous everywhere. It cannot be graphed, and it is **not Riemann integrable**. (It can only be integrated using advanced Lebesgue Measure Theory).

### Weierstrass's Monster
Before 1872, mathematicians believed that if a function was continuous everywhere, it had to be differentiable almost everywhere. 
Karl Weierstrass shocked the world by discovering a function that is **continuous everywhere, but differentiable NOWHERE**.

$$ f(x) = \\sum_{n=0}^{\\infty} a^n \\cos(b^n \\pi x) $$
(Where $0 < a < 1$ and $ab > 1 + \\frac{3}{2}\\pi$).

If you zoom in on the graph of this function, it never becomes a smooth line. It is infinitely jagged at every single microscopic point, pre-dating the discovery of fractals by nearly a century!"""

topics['Multivariable Calculus & Vector Fields'] = """# Multivariable Calculus: Surfaces, Gradients & Multiple Integrals

## 1. Functions of Several Variables

In single-variable calculus, we study functions $y = f(x)$, which represent 2D curves. In multivariable calculus, we study functions like $z = f(x, y)$, which represent **3D surfaces**, and $w = f(x, y, z)$, which represent **4D scalar fields** (like temperature distributed through a 3D room).

To visualize $z = f(x, y)$, we often use **Level Curves** (contour maps). A level curve is the 2D curve you get by setting $z$ to a constant $c$:
$$ f(x, y) = c $$
By drawing these for various values of $c$, you can map a 3D mountain onto a 2D topographic map.

## 2. Partial Derivatives

How do we find the slope of a 3D surface? The slope depends on which direction you are walking! We solve this using **Partial Derivatives**.

To find the partial derivative with respect to $x$ (denoted $\\frac{\\partial f}{\\partial x}$ or $f_x$), we treat all other variables (like $y$) as constants and differentiate normally.

Example: $f(x, y) = x^3y^2 + 5y$
* $\\frac{\\partial f}{\\partial x} = 3x^2y^2$ (treat $y$ as a constant number).
* $\\frac{\\partial f}{\\partial y} = 2x^3y + 5$ (treat $x$ as a constant number).

$\\frac{\\partial f}{\\partial x}$ gives the slope of the surface if you walk purely in the East-West (x) direction. $\\frac{\\partial f}{\\partial y}$ gives the slope if you walk North-South (y).

## 3. The Gradient Vector

If we combine all the partial derivatives of a function into a vector, we get the **Gradient**, denoted by $\\nabla f$ (del $f$).

For $f(x, y, z)$, the gradient is:
$$ \\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle $$

The Gradient is the most important vector in multivariable calculus because it has two magical properties:
1. It always points in the direction of the **steepest ascent** (maximum increase) of the function.
2. Its magnitude $|\\nabla f|$ gives the exact rate of that maximum increase.
3. It is always **perpendicular (orthogonal)** to the level curves/surfaces of the function.

## 4. Directional Derivatives

What if you don't want to walk strictly along the x-axis, y-axis, or the steepest path? What if you want to find the slope walking in an arbitrary direction $\\vec{u}$?

We use the **Directional Derivative**, $D_{\\vec{u}}f$. 
It is elegantly calculated by taking the dot product of the gradient and a unit vector $\\vec{u}$ pointing in your chosen direction:
$$ D_{\\vec{u}}f = \\nabla f \\cdot \\vec{u} $$

## 5. Multiple Integrals

To find the area under a 2D curve, we use a single integral $\\int f(x)dx$.
To find the **volume** under a 3D surface $z = f(x, y)$, we use a **Double Integral** over a 2D region $R$ in the xy-plane:
$$ V = \\iint_R f(x, y) \\, dA $$

By Fubini's Theorem, we can evaluate this by doing two standard 1D integrals back-to-back (Iterated Integrals).
$$ V = \\int_{x=a}^{x=b} \\left( \\int_{y=g_1(x)}^{y=g_2(x)} f(x, y) \\, dy \\right) \\, dx $$

We can also do **Triple Integrals** $\\iiint_V f(x, y, z) \\, dV$ to find hyper-volumes, or the mass of a 3D object given its variable density field.

## 6. Insane Level: Lagrange Multipliers & Constrained Optimization

Suppose you want to find the highest point on a 3D mountain $z = f(x, y)$, but you are restricted to walking along a specific circular path defined by $g(x, y) = c$.

This is a constrained optimization problem. The highest point on the path occurs exactly where the level curves of the mountain $f$ are tangent to the constraint path $g$.

Since the curves are tangent, their normal vectors (gradients) must be parallel! This gives birth to the **Method of Lagrange Multipliers**. We set up the system of equations:
$$ \\nabla f = \\lambda \\nabla g $$
$$ g(x, y) = c $$

Where $\\lambda$ (lambda) is a scalar called the Lagrange multiplier. By solving this system of partial differential equations, you can find the maximum and minimum values of complex functions subject to strict constraints, a technique heavily used in economics and quantum mechanics!"""

topics['Differential Equations'] = """# Differential Equations: Modeling the Dynamics of the Universe

## 1. What is a Differential Equation?

A differential equation (DE) is a mathematical equation that relates some function with its derivatives. 

Because a function represents a quantity, and its derivative represents the **rate of change** of that quantity, DEs are the primary tool used to model the universe. Everything from planetary orbits to population growth, heat flow, and radioactive decay is governed by DEs.

Example: **Newton's Law of Cooling** states that the rate of heat loss of a body is proportional to the difference in temperatures between the body and its surroundings.
$$ \\frac{dT}{dt} = -k(T - T_s) $$
Here, the unknown is not a number $x$, but an entire function $T(t)$ (Temperature over time). Solving the DE means finding the exact function $T(t)$ that makes the equation true.

## 2. Classification of DEs

* **Ordinary Differential Equations (ODEs)**: Contain derivatives with respect to only *one* independent variable (e.g., time $t$).
* **Partial Differential Equations (PDEs)**: Contain partial derivatives with respect to *multiple* independent variables (e.g., time $t$ and spatial coordinates $x, y, z$).
* **Order**: The order of the highest derivative in the equation. (e.g., $y'' + 3y' = x$ is a 2nd-order ODE).
* **Linearity**: A DE is linear if the unknown function and its derivatives appear only to the first power and are not multiplied together.

## 3. Separation of Variables (1st Order ODEs)

The simplest ODEs can be solved by moving all $y$ terms to one side, and all $x$ terms to the other side, and then integrating both sides.

**Example**: Solve $\\frac{dy}{dx} = k \\cdot y$ (The equation for continuous exponential growth).
1. Separate: $\\frac{1}{y} dy = k \\, dx$
2. Integrate both sides: $\\int \\frac{1}{y} \\, dy = \\int k \\, dx$
3. Evaluate: $\\ln|y| = kx + C$
4. Solve for y: $y = e^{kx+C} = e^C \\cdot e^{kx}$
5. Let $A = e^C$: $$ y(x) = Ae^{kx} $$

This proves why populations and compound interest grow exponentially!

## 4. Linear 1st Order ODEs (Integrating Factors)

For equations of the form $\\frac{dy}{dx} + P(x)y = Q(x)$, separation of variables fails because of the addition.

Instead, we use a brilliant trick. We multiply the entire equation by a magic function called the **Integrating Factor**, $\\mu(x)$, defined as:
$$ \\mu(x) = e^{\\int P(x)dx} $$

This perfectly collapses the left side of the equation into the reverse Product Rule for derivatives:
$$ \\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x) $$
From here, you simply integrate both sides with respect to $x$ and isolate $y$.

## 5. Second-Order Linear ODEs

Second-order equations model systems with acceleration, like Newton's Second Law ($F = ma = m \\frac{d^2x}{dt^2}$) or electronic RLC circuits.

The homogeneous form is: $a y'' + b y' + c y = 0$
We guess a solution of the form $y = e^{rt}$, which turns the differential equation into a simple algebraic quadratic equation called the **Characteristic Equation**:
$$ ar^2 + br + c = 0 $$

The roots of this quadratic perfectly dictate the physics of the system:
1. **Two real roots**: The system exhibits pure exponential decay (Overdamped).
2. **One repeated root**: The system returns to equilibrium as fast as possible (Critically Damped).
3. **Complex roots ($a \\pm bi$)**: By Euler's formula, the imaginary exponent creates sines and cosines. The system will oscillate back and forth as a wave (Underdamped / Harmonic Oscillator)!

## 6. Insane Level: The Laplace Transform

For non-homogeneous second-order ODEs with discontinuous forces (e.g., striking a bell with a hammer at $t=5$, modeled by the Dirac Delta function), standard calculus collapses. 

We must use the **Laplace Transform**, an integral operator that maps a function from the "time domain" $f(t)$ into a complex "frequency domain" $F(s)$:
$$ \\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} e^{-st} f(t) \\, dt $$

The supreme power of the Laplace Transform is its derivative property:
$$ \\mathcal{L}\\{f'(t)\\} = s F(s) - f(0) $$
$$ \\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0) - f'(0) $$

**The Magic:** The Laplace transform completely destroys calculus! It converts terrifying differential equations involving derivatives ($f', f''$) into purely algebraic polynomial equations involving $s$ and $s^2$. 

You solve the simple algebra equation for $F(s)$, and then use an Inverse Laplace Transform to teleport back to the time domain $f(t)$ to get the final answer. It is one of the most brilliant mathematical inventions of the 19th century."""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Batch 1 completed.")
