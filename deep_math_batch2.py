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

topics['Linear algebra (matrices, vectors)'] = r"""# Linear Algebra: Matrices, Vectors & Transformations

## 1. What is a Vector?
In physics, a vector is an arrow with a length (magnitude) and a direction. In computer science, a vector is a list of ordered numbers. In linear algebra, both views are unified.
A vector $\\vec{v} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$ represents a movement from the origin $(0,0)$ to the coordinate $(x,y)$.

**Example:**
If $\\vec{v} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$, we move 3 units right and 2 units up.

## 2. Vector Addition and Scalar Multiplication
Vectors can be added component-wise, geometrically representing placing arrows tip-to-tail.
$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$

Scalar multiplication stretches or shrinks a vector.
$2 \\cdot \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 2 \\end{bmatrix}$

## 3. The Dot Product
The dot product measures how much two vectors point in the same direction. It outputs a scalar (single number).
$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3$

**Geometrically:**
$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\theta)$
If the dot product is exactly 0, the vectors are perfectly perpendicular (orthogonal).

## 4. The Cross Product
In 3D space, the cross product of two vectors produces a new vector that is entirely perpendicular to both original vectors. The length of this new vector equals the area of the parallelogram formed by the original two vectors.

## 5. Linear Transformations & Matrices
A matrix is not just a grid of numbers; it is a **function** that transforms space. 
When a matrix multiplies a vector, it moves that vector to a new location.
$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = x \\begin{bmatrix} a \\\\ c \\end{bmatrix} + y \\begin{bmatrix} b \\\\ d \\end{bmatrix}$

The columns of the matrix tell you exactly where the basis vectors $\\hat{i}$ and $\\hat{j}$ land after the transformation!

## 6. The Determinant
The determinant of a matrix represents the **scaling factor of area** (or volume in 3D) during the transformation.
$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$

If $\\det(A) = 0$, the transformation squishes space into a lower dimension (like flattening a 2D plane into a 1D line). This means information is lost, and the matrix is not invertible.

## 7. Systems of Linear Equations
A system of equations like:
$2x + 3y = 8$
$5x - y = 3$
Can be rewritten as a matrix equation $A\\vec{x} = \\vec{b}$:
$\\begin{bmatrix} 2 & 3 \\\\ 5 & -1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 3 \\end{bmatrix}$

## 8. Matrix Inverses
To solve $A\\vec{x} = \\vec{b}$, we "divide" by the matrix $A$ by multiplying by its inverse, $A^{-1}$.
$\\vec{x} = A^{-1}\\vec{b}$
If the determinant is zero, $A^{-1}$ does not exist. Geometrically, you cannot "un-squish" a line back into a plane!

## 9. Eigenvectors and Eigenvalues
When a matrix transforms space, most vectors get knocked off their original span (they change direction). However, some special vectors stay exactly on their original line, only getting stretched or squished.
These are **Eigenvectors**, and the factor by which they are stretched is the **Eigenvalue** ($\\lambda$).
$$ A\\vec{v} = \\lambda\\vec{v} $$

## 10. Insane Level: Principal Component Analysis (PCA)
Eigenvectors are the core engine of modern data science. In PCA, we find the eigenvectors of a massive data covariance matrix. The eigenvector with the largest eigenvalue points in the direction of maximum variance in the data! This allows us to compress 10,000-dimensional data down to 2 or 3 dimensions while retaining the most critical information, powering image recognition and AI.
"""

topics['Real analysis'] = r"""# Real Analysis: The Strict Rigor of Limits and Continuity

## 1. The Flaw in Intuitive Calculus
Newton and Leibniz invented calculus using "infinitesimals" (infinitely small numbers). While it worked, it was mathematically sloppy. Philosophers like Bishop Berkeley mocked them for using "ghosts of departed quantities." It took 150 years for Augustin-Louis Cauchy and Karl Weierstrass to build a rigorous foundation.

## 2. Formal Definition of a Limit (Epsilon-Delta)
To formally prove $\\lim_{x \\to c} f(x) = L$, we cannot just say "$x$ gets close to $c$". We use the $\\epsilon-\\delta$ (epsilon-delta) definition.
For every error tolerance $\\epsilon > 0$, there exists a boundary $\\delta > 0$ such that:
If $0 < |x - c| < \\delta$, then $|f(x) - L| < \\epsilon$.

**Example: Prove $\\lim_{x \\to 2} (3x - 1) = 5$**
*Proof:* Let $\\epsilon > 0$ be given. We need $|(3x - 1) - 5| < \\epsilon$.
$|3x - 6| < \\epsilon \\implies 3|x - 2| < \\epsilon \\implies |x - 2| < \\frac{\\epsilon}{3}$.
Choose $\\delta = \\frac{\\epsilon}{3}$. 
Thus, if $|x - 2| < \\delta$, then $|3x - 6| < 3\\delta = 3(\\frac{\\epsilon}{3}) = \\epsilon$. QED.

## 3. Formal Definition of Continuity
A function $f$ is continuous at $x=c$ if:
1. $f(c)$ is defined.
2. $\\lim_{x \\to c} f(x)$ exists.
3. $\\lim_{x \\to c} f(x) = f(c)$.

In epsilon-delta terms, we don't have $0 < |x - c|$ because $x=c$ is allowed.

## 4. Derivatives and Differentiability
The derivative is defined via the limit of the difference quotient:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

If $f'(a)$ exists, we say $f$ is **differentiable** at $a$. 
*Theorem:* Differentiability implies continuity. However, continuity does NOT imply differentiability! A classic example is $f(x) = |x|$, which is continuous everywhere but not differentiable at $x=0$ because the limit approaches $-1$ from the left and $+1$ from the right.

## 5. The Mean Value Theorem (MVT)
If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c$ in $(a, b)$ such that:
$$ f'(c) = \\frac{f(b) - f(a)}{b - a} $$
Geometrically, this means there is at least one point where the instantaneous tangent slope is exactly parallel to the average secant slope connecting the endpoints.

## 6. The Intermediate Value Theorem (IVT)
If $f$ is continuous on $[a, b]$, and $k$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c$ in $[a, b]$ such that $f(c) = k$.
This formally proves that a continuous line crossing from negative to positive MUST cross the x-axis (have a root).

## 7. Supremum and Infimum
In real analysis, instead of just "maximum," we use the **Supremum** (Least Upper Bound). 
The set of real numbers $S = (0, 1)$ does not have a maximum element (you can always pick $0.999...$), but it does have a supremum, $\\sup(S) = 1$. The **Axiom of Completeness** states that every non-empty set of real numbers bounded above has a supremum in $\\mathbb{R}$.

## 8. Sequences in Real Numbers (Cauchy Sequences)
A sequence $(x_n)$ is a Cauchy sequence if the terms become arbitrarily close to each other as the sequence progresses.
For any $\\epsilon > 0$, there exists an $N$ such that for all $m, n > N$, $|x_m - x_n| < \\epsilon$.
In $\\mathbb{R}$, every Cauchy sequence converges to a real limit. This is not true in $\\mathbb{Q}$ (rationals).

## 9. Integration: Riemann vs. Lebesgue
The Riemann integral defines area using vertical rectangles. 
$$ \\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\Delta x $$
But this fails for highly discontinuous functions (like Dirichlet's function, which is $1$ on rationals and $0$ on irrationals). Henri Lebesgue fixed this by slicing the area *horizontally* instead, creating Lebesgue Measure theory, the foundation of modern probability.

## 10. Insane Level: Pathological Functions (Weierstrass)
Mathematicians used to believe that if a function was continuous everywhere, it must be differentiable *almost* everywhere. 
In 1872, Karl Weierstrass shocked the world by publishing a function that is **continuous everywhere, but differentiable nowhere!**
$$ f(x) = \\sum_{n=0}^{\\infty} a^n \\cos(b^n \\pi x) $$
(Where $0 < a < 1$ and $ab > 1 + \\frac{3}{2}\\pi$).
If you zoom in on the graph of this function, it never becomes a smooth line. It is infinitely jagged at every single microscopic point, pre-dating the discovery of fractals by nearly a century!
"""

topics['Multivariable Calculus & Vector Fields'] = r"""# Multivariable Calculus & Vector Fields: The 3D World

## 1. Functions of Several Variables
In single-variable calculus, we study $y = f(x)$, representing a 2D curve. 
In multivariable calculus, we study functions like $z = f(x, y)$, which represent a 3D surface (like a mountain terrain), or $w = f(x, y, z)$, which assigns a value to every point in a 3D room (like temperature in a room).

## 2. Partial Derivatives
How do we find the slope of a 3D surface? The slope depends on which direction you are walking! We solve this using **Partial Derivatives**.
To find the partial derivative with respect to $x$ (denoted $\\frac{\\partial f}{\\partial x}$ or $f_x$), we treat all other variables (like $y$) as constants and differentiate normally.

**Example Problem:** Find the partial derivatives of $f(x, y) = x^3y^2 + 5y$
* $\\frac{\\partial f}{\\partial x}$: Treat $y^2$ and $5y$ as constants. The derivative of $x^3$ is $3x^2$. Thus, $\\frac{\\partial f}{\\partial x} = 3x^2y^2$.
* $\\frac{\\partial f}{\\partial y}$: Treat $x^3$ as a constant. The derivative of $y^2$ is $2y$, and $5y$ is $5$. Thus, $\\frac{\\partial f}{\\partial y} = 2x^3y + 5$.

$\\frac{\\partial f}{\\partial x}$ gives the slope if you walk purely East-West. $\\frac{\\partial f}{\\partial y}$ gives the slope if you walk North-South.

## 3. The Gradient Vector
If we combine all the partial derivatives of a function into a vector, we get the **Gradient**, denoted by $\\nabla f$ (del $f$).
$$ \\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle $$

**Magical Properties of the Gradient:**
1. It always points in the direction of **steepest ascent** (maximum increase) on the surface.
2. Its magnitude $|\\nabla f|$ gives the exact rate of that steepest ascent.
3. It is always **orthogonal** (perpendicular) to the level curves/surfaces.

## 4. Directional Derivatives
What if you want to find the slope walking in an arbitrary direction $\\vec{u}$?
We use the **Directional Derivative**, $D_{\\vec{u}}f$. It is calculated by taking the dot product of the gradient and a unit vector $\\vec{u}$ pointing in your chosen direction:
$$ D_{\\vec{u}}f = \\nabla f \\cdot \\vec{u} $$

**Example Problem:** Find the directional derivative of $f(x,y) = x^2y$ at the point $(1,2)$ in the direction of the vector $\\vec{v} = \\langle 3, 4 \\rangle$.
1. Find gradient: $\\nabla f = \\langle 2xy, x^2 \\rangle$.
2. Evaluate gradient at $(1,2)$: $\\nabla f(1,2) = \\langle 4, 1 \\rangle$.
3. Normalize $\\vec{v}$ to a unit vector: The magnitude is $\\sqrt{3^2 + 4^2} = 5$. So $\\vec{u} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$.
4. Dot product: $\\langle 4, 1 \\rangle \\cdot \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle = \\frac{12}{5} + \\frac{4}{5} = \\frac{16}{5}$. 
The slope in that direction is exactly $3.2$.

## 5. Multiple Integrals
Just as a single integral finds the 2D area under a curve, a **Double Integral** $\\iint f(x,y)\\,dA$ finds the 3D volume under a surface.
To compute it, we iterate the integrals:
$$ \\int_{x=a}^{b} \\int_{y=c}^{d} f(x,y) \\,dy \\,dx $$
Fubini's Theorem states that you can swap the order of integration ($dx\\,dy$ instead of $dy\\,dx$) and you will get the exact same volume!

## 6. Vector Fields
A vector field assigns a vector to every point in space. Think of it as a map of ocean currents, or the magnetic field around a magnet. We define a vector field as $\\vec{F}(x,y) = \\langle P(x,y), Q(x,y) \\rangle$.

## 7. Line Integrals
A line integral measures the accumulation of a field along a specific curvy path $C$. 
$$ \\int_C \\vec{F} \\cdot d\\vec{r} $$
In physics, if $\\vec{F}$ is a force field (like gravity or a storm), this integral calculates the total **Work** done pushing an object along that path.

## 8. Conservative Fields and Potential Functions
If a vector field is the gradient of some scalar function ($\\vec{F} = \\nabla f$), it is called **Conservative**. 
Gravity is a conservative field. The incredible property of conservative fields is the **Fundamental Theorem of Line Integrals**:
The work done moving from point $A$ to point $B$ depends *only* on the start and end points, NOT the path taken!
$$ \\int_C \\nabla f \\cdot d\\vec{r} = f(B) - f(A) $$

## 9. Divergence and Curl
Two operations measure the "flow" of a vector field:
* **Divergence** ($\\nabla \\cdot \\vec{F}$): A scalar measuring how much the field is expanding or compressing at a point. If divergence is positive, it's a "source". If negative, it's a "sink".
* **Curl** ($\\nabla \\times \\vec{F}$): A vector measuring how much the field is rotating or swirling around a point. A tornado has massive curl.

## 10. Insane Level: Stokes' Theorem and Divergence Theorem
The capstones of multivariable calculus link macroscopic areas to microscopic boundary loops:
1. **Stokes' Theorem**: The macroscopic swirl of a surface equals the circulation around its edge boundary! $\\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S} = \\oint_C \\vec{F} \\cdot d\\vec{r}$
2. **Divergence Theorem**: The total flow expanding *out* of a 3D volume is exactly equal to the flux bursting through its 2D surface skin! $\\iiint_V (\\nabla \\cdot \\vec{F}) \\,dV = \\iint_S \\vec{F} \\cdot d\\vec{S}$
These theorems are the foundations of Maxwell's Equations, literally dictating how electricity, magnetism, and light work in our universe!
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded deep_math_batch2 successfully.")
