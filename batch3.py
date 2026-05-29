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

topics['Trigonometry'] = """# Trigonometry: Circles, Waves & Euler's Formula

## 1. Right Triangle Trigonometry (SOH CAH TOA)

Trigonometry begins with the study of right-angled triangles. For any angle $\\theta$, the ratios of the triangle's sides are constant, defining the three fundamental trigonometric functions:
* **Sine**: $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$
* **Cosine**: $\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$
* **Tangent**: $\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$

We also define their reciprocals: Cosecant ($\\csc$), Secant ($\\sec$), and Cotangent ($\\cot$).
By applying the Pythagorean Theorem ($a^2 + b^2 = c^2$) to the sides, we derive the fundamental **Pythagorean Identity**:
$$ \\sin^2(\\theta) + \\cos^2(\\theta) = 1 $$

## 2. The Unit Circle and Radians

Right triangles restrict angles to between $0^\\circ$ and $90^\\circ$. To expand trigonometry to any angle (even negative ones), we place the triangle inside a Cartesian coordinate system with a circle of radius $r=1$ centered at the origin: the **Unit Circle**.

For any point $(x, y)$ on the unit circle at an angle $\\theta$:
$$ x = \\cos(\\theta) $$
$$ y = \\sin(\\theta) $$

Instead of arbitrary degrees, advanced math uses **Radians**. One radian is the angle subtended by an arc length equal to the radius. Since the circumference of the unit circle is $2\\pi$, a full $360^\\circ$ rotation is exactly $2\\pi$ radians.
$$ 180^\\circ = \\pi \\text{ rad} $$

## 3. Trigonometric Waves

If you unwrap the Unit Circle over time, graphing $\\sin(x)$ or $\\cos(x)$ against the x-axis, you produce a repeating **sine wave**. These waves are the mathematical foundation of sound, light, alternating current (AC), and quantum mechanics.

A general trigonometric wave is written as:
$$ y = A \\sin(B(x - C)) + D $$
* **Amplitude ($A$)**: The height of the wave from its center line.
* **Period ($\\frac{2\\pi}{B}$)**: The length of one complete cycle. Frequency is the reciprocal of the period.
* **Phase Shift ($C$)**: Horizontal shift left or right. A cosine wave is just a sine wave phase-shifted by $\\frac{\\pi}{2}$.
* **Vertical Shift ($D$)**: Vertical translation up or down.

## 4. Trigonometric Identities and Laws

Trigonometry is famous for its massive toolkit of identities used to simplify complex equations in physics and engineering.

**Addition/Angle-Sum Formulas:**
$$ \\sin(\\alpha \\pm \\beta) = \\sin(\\alpha)\\cos(\\beta) \\pm \\cos(\\alpha)\\sin(\\beta) $$
$$ \\cos(\\alpha \\pm \\beta) = \\cos(\\alpha)\\cos(\\beta) \\mp \\sin(\\alpha)\\sin(\\beta) $$

**Double Angle Formulas:**
$$ \\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta) $$
$$ \\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta) $$

For generic, non-right triangles with sides $a, b, c$ and opposite angles $A, B, C$:
* **Law of Sines**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
* **Law of Cosines**: $c^2 = a^2 + b^2 - 2ab\\cos(C)$

## 5. Inverse Trigonometric Functions

To find the angle $\\theta$ given a ratio, we use inverse functions: $\\arcsin(x)$, $\\arccos(x)$, and $\\arctan(x)$. 
Because trig functions repeat infinitely, their inverses are not true functions unless we strictly restrict their domains. For example, the domain of $\\arcsin(x)$ is restricted to output angles between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$.

## 6. Insane Level: Euler's Formula & Complex Exponentials

Trigonometry is secretly just the algebra of complex numbers in disguise.
In 1748, Leonhard Euler proved a formula that Richard Feynman called "our jewel" and "the most remarkable formula in mathematics":

$$ e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta) $$

This equation builds a bridge across three separate universes of math: Exponential growth ($e$), Imaginary numbers ($i$), and Circular motion ($\\sin, \\cos$).

By setting $\\theta = \\pi$, we obtain **Euler's Identity**, an equation uniting the five most important numbers in all of mathematics:
$$ e^{i\\pi} + 1 = 0 $$

Because of Euler's formula, all the tedious angle-addition trigonometric identities in Section 4 can be derived instantly just by using basic exponent rules!
$$ e^{i(\\alpha + \\beta)} = e^{i\\alpha} \\cdot e^{i\\beta} $$
Expanding both sides into cosines and sines and multiplying them out perfectly generates the angle-sum formulas!"""

topics['Vector Calculus'] = """# Vector Calculus: Grad, Div, Curl & The Fundamental Theorems

## 1. Scalar and Vector Fields

In vector calculus, we operate on fields that fill all of space.
* **Scalar Field $\\phi(x,y,z)$**: Assigns a single number to every point in space. (e.g., Temperature, Pressure, Electric Potential).
* **Vector Field $\\vec{F}(x,y,z)$**: Assigns a vector (magnitude and direction) to every point in space. (e.g., Wind velocity, Magnetic fields, Gravitational pull).

$$ \\vec{F} = P(x,y,z)\\hat{\\imath} + Q(x,y,z)\\hat{\\jmath} + R(x,y,z)\\hat{k} $$

## 2. The Gradient, Divergence, and Curl (Del Operator)

Vector calculus relies heavily on the **Del (Nabla) Operator**, which acts like a vector of partial derivatives:
$$ \\nabla = \\left\\langle \\frac{\\partial}{\\partial x}, \\frac{\\partial}{\\partial y}, \\frac{\\partial}{\\partial z} \\right\\rangle $$

We can apply $\\nabla$ to fields in three distinct ways:

1. **Gradient ($\\nabla \\phi$)**: Applies to a scalar field to produce a vector field pointing in the direction of steepest ascent.
2. **Divergence ($\\nabla \\cdot \\vec{F}$)**: A dot product applying to a vector field to produce a scalar field. It measures the "outward flow" or source/sink density at a point. If $\\nabla \\cdot \\vec{F} = 0$, the fluid is incompressible.
3. **Curl ($\\nabla \\times \\vec{F}$)**: A cross product applying to a vector field to produce a new vector field. It measures the microscopic rotation, or "swirliness," at a point. If $\\nabla \\times \\vec{F} = \\vec{0}$, the field is irrotational (conservative).

## 3. Line Integrals & Conservative Fields

A **Line Integral** integrates a function along a curve $C$.
$$ \\int_C \\vec{F} \\cdot d\\vec{r} $$
In physics, this calculates the total **Work** done by a force field $\\vec{F}$ in moving a particle along a path.

If the vector field is the gradient of a scalar potential ($\\vec{F} = \\nabla \\phi$), it is a **Conservative Field**. Gravity and Electrostatics are conservative.
In a conservative field, the line integral is **Path Independent**. The work done only depends on the start and end points, which yields the **Fundamental Theorem for Line Integrals**:
$$ \\int_A^B \\nabla \\phi \\cdot d\\vec{r} = \\phi(B) - \\phi(A) $$

## 4. Surface Integrals & Flux

A **Surface Integral** integrates a function over a 2D surface $S$ floating in 3D space.
$$ \\iint_S \\vec{F} \\cdot d\\vec{S} = \\iint_S (\\vec{F} \\cdot \\hat{n}) \\, dS $$
Where $\\hat{n}$ is the unit normal vector pointing out of the surface. 

In physics, this calculates **Flux**: the total volume of fluid (or number of magnetic field lines) punching through a surface per unit time.

## 5. Green's, Stokes', and the Divergence Theorems

The pinnacle of vector calculus is a trio of theorems that link integrals of different dimensions. They all share the same philosophical pattern: *The integral of a "derivative" over a region equals the value of the function strictly on the boundary of that region.*

1. **Green's Theorem (2D):** Links a line integral around a closed loop $C$ to a double integral over the 2D area $D$ it encloses.
   $$ \\oint_C P\\,dx + Q\\,dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA $$

2. **Stokes' Theorem (3D Curl):** Upgrades Green's theorem to 3D. Links a line integral around a closed 3D loop $C$ to the flux of the **Curl** through *any* surface $S$ bounded by that loop.
   $$ \\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S} $$

3. **The Divergence Theorem (Gauss's Theorem):** Links the flux of a field exiting a closed 3D surface $S$ (like a balloon) to a triple integral of the **Divergence** over the 3D volume $V$ inside.
   $$ \\oiint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_V (\\nabla \\cdot \\vec{F}) \\, dV $$

## 6. Insane Level: Generalized Stokes' Theorem (Differential Forms)

While Green's, Stokes', and Gauss's theorems look like three completely different equations using messy cross and dot products, they are actually just 2D and 3D shadows of one single, universal theorem that works in any number of dimensions.

In the language of **Differential Geometry**, we abandon vector fields and use **Differential Forms**. The gradient, divergence, and curl are unified into a single operator called the **Exterior Derivative** ($d$).

The three theorems combine into the astonishingly elegant **Generalized Stokes' Theorem**:
$$ \\int_M d\\omega = \\int_{\\partial M} \\omega $$
* $\\omega$ is a differential $(k-1)$-form.
* $d\\omega$ is its exterior derivative (a $k$-form).
* $M$ is a $k$-dimensional manifold.
* $\\partial M$ is its $(k-1)$-dimensional boundary.

This single, beautiful equation encompasses the Fundamental Theorem of Calculus, Green's, Stokes', and Divergence theorems all at once!"""

topics['Single-Variable Calculus'] = """# Single-Variable Calculus: Limits, Derivatives & Integrals

## 1. Limits and Continuity

Calculus is the mathematics of continuous change, and its foundation is the **Limit**.
A limit $\\lim_{x \\to a} f(x) = L$ asks: "As the input $x$ gets infinitely close to $a$ (without actually touching it), what value does the output $f(x)$ approach?"

Limits allow us to tame infinity and divide by zero safely.
* **Continuity**: A function is continuous if it has no breaks, jumps, or holes. Formally, $\\lim_{x \\to a} f(x) = f(a)$.

## 2. The Derivative (Differential Calculus)

How fast is a car moving at exactly $t = 3$ seconds? Algebra can only calculate *average* speed over a time interval ($\\frac{\\Delta y}{\\Delta x}$). To find *instantaneous* speed, we shrink the time interval to zero using a limit.

This produces the **Derivative**, $f'(x)$ or $\\frac{dy}{dx}$, representing the instantaneous rate of change, or the geometric slope of the tangent line to the curve.
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

**Key Derivative Rules:**
* Power Rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$
* Product Rule: $(uv)' = u'v + uv'$
* Chain Rule: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$

## 3. Optimization and Concavity

Derivatives allow us to optimize functions (finding maximums and minimums).
* When $f'(x) = 0$, the tangent line is flat. This is a **critical point** (a potential peak or valley).
* The **Second Derivative**, $f''(x)$, measures concavity (how the slope itself is changing). 
* If $f''(x) > 0$, the curve holds water (concave up, indicating a local minimum).
* If $f''(x) < 0$, the curve spills water (concave down, indicating a local maximum).

## 4. The Integral (Integral Calculus)

If the derivative breaks a curve down into microscopic rates of change, the **Integral** accumulates them back together. 
Geometrically, the definite integral $\\int_a^b f(x)dx$ calculates the exact total **Area under the curve** between $x=a$ and $x=b$.

We define it rigorously using an infinite Riemann Sum: slicing the area into an infinite number of infinitely thin rectangles and adding them up:
$$ \\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i)\\Delta x $$

## 5. The Fundamental Theorem of Calculus (FTC)

For centuries, mathematicians thought finding slopes (tangents) and finding areas (quadratures) were two completely unrelated problems. 

Isaac Newton and Gottfried Leibniz discovered they are exact inverse operations! This is the **Fundamental Theorem of Calculus**.

**Part 1**: The derivative of an area accumulation function is the original curve itself.
$$ \\frac{d}{dx} \\left[ \\int_a^x f(t)dt \\right] = f(x) $$

**Part 2**: To calculate the exact area under $f(x)$ from $a$ to $b$, you just find its antiderivative $F(x)$ and subtract the endpoints!
$$ \\int_a^b f(x)dx = F(b) - F(a) $$
This mind-blowing theorem allows us to bypass the infinite Riemann sums entirely, reducing complex area calculations to simple algebra!

## 6. Insane Level: Taylor Series and Infinite Polynomials

How do calculators know that $\\sin(2) = 0.909$? They don't have a giant lookup table. They use Calculus!

Colin Maclaurin and Brook Taylor discovered that *any* smooth, infinitely differentiable function can be perfectly reconstructed as an infinitely long polynomial, called a **Taylor Series**.

You construct the polynomial by matching the function's derivatives at a specific point (usually $x=0$, called a Maclaurin series).
$$ f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\dots $$

This means that transcendental functions like $e^x$, $\\sin(x)$, and $\\cos(x)$ are actually just infinite polynomials in disguise:
$$ \\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots $$
$$ e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots $$

To calculate $\\sin(2)$, the computer simply plugs $x=2$ into the first few terms of the polynomial and adds them up. Taylor series are the ultimate mathematical bridge, allowing computers to evaluate continuous nature using only discrete addition and multiplication!"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Batch 3 completed.")
