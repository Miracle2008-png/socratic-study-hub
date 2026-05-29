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

topics['Algebra Fundamentals'] = r"""# Algebra Fundamentals: The Architecture of Logic

## 1. Variables and Abstraction
Algebra is the transition from arithmetic (working with specific numbers like $5+3$) to true mathematics (working with generalized structures like $a+b$). A variable like $x$ is not a "missing number"; it is a placeholder for *any* number, allowing us to discover universal laws that apply to all numbers simultaneously.

## 2. Polynomials
A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents.
$$ P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 $$
The highest power $n$ is the **degree** of the polynomial, which dictates exactly how many complex roots the equation has (The Fundamental Theorem of Algebra).

## 3. Factoring and Expanding
* **Expanding**: Using the distributive property (FOIL) to multiply polynomials. $(x+a)(x+b) = x^2 + (a+b)x + ab$.
* **Factoring**: The reverse process, breaking a complex polynomial down into irreducible prime pieces. Example: $x^2 - y^2 = (x-y)(x+y)$.

## 4. Rational Expressions
A rational expression is a fraction where both the numerator and the denominator are polynomials. 
$$ \frac{P(x)}{Q(x)} $$
They behave exactly like normal fractions, requiring common denominators to add or subtract, but you must strictly state the domain restrictions (any $x$ that makes $Q(x) = 0$ is mathematically illegal).

## Derivation of the Difference of Two Squares
Prove that $a^2 - b^2 = (a-b)(a+b)$.

**Step 1:** Start with the right-hand side.
$$ (a - b)(a + b) $$

**Step 2:** Distribute $a$ to the second binomial.
$$ a(a + b) - b(a + b) $$

**Step 3:** Distribute fully.
$$ a^2 + ab - ba - b^2 $$

**Step 4:** Cancel terms.
By the commutative property of multiplication, $ab = ba$, so they perfectly annihilate each other:
$$ a^2 - b^2 $$
Q.E.D.

## Derivation of the Difference of Two Cubes
Prove that $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.

**Step 1:** Expand the right-hand side.
$$ (a - b)(a^2 + ab + b^2) $$

**Step 2:** Distribute $a$ to the trinomial.
$$ a(a^2 + ab + b^2) = a^3 + a^2b + ab^2 $$

**Step 3:** Distribute $-b$ to the trinomial.
$$ -b(a^2 + ab + b^2) = -a^2b - ab^2 - b^3 $$

**Step 4:** Combine all terms.
$$ a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 $$

**Step 5:** Cancel the middle terms.
The $+a^2b$ cancels with $-a^2b$, and the $+ab^2$ cancels with $-ab^2$:
$$ a^3 - b^3 $$
Q.E.D.
"""

topics['Trigonometry'] = r"""# Trigonometry: The Geometry of Circles

## 1. The Unit Circle
Trigonometry is not about triangles; it is about circles. The fundamental definition of $\sin(\theta)$ and $\cos(\theta)$ is the $y$ and $x$ coordinate of a point traveling around a circle of radius $1$.
$$ x^2 + y^2 = 1 \implies \cos^2\theta + \sin^2\theta = 1 $$

## 2. Radians vs. Degrees
Degrees ($360^\circ$) are an arbitrary human invention from the Babylonians. 
**Radians** are the natural language of the universe. An angle of $1$ radian means the arc length on the edge of the circle is exactly equal to the radius. Since the circumference is $2\pi r$, a full circle is $2\pi$ radians.

## 3. Sine, Cosine, and Tangent
* $\sin(\theta) = \text{Opposite} / \text{Hypotenuse}$
* $\cos(\theta) = \text{Adjacent} / \text{Hypotenuse}$
* $\tan(\theta) = \sin(\theta) / \cos(\theta) = \text{Opposite} / \text{Adjacent}$

## 4. Trigonometric Identities
Trig identities are equations that are universally true for all angles. They allow us to radically simplify complex mathematical expressions in physics and engineering.
* **Pythagorean Identity**: $\sin^2\theta + \cos^2\theta = 1$
* **Double Angle Identity**: $\sin(2\theta) = 2\sin\theta\cos\theta$
* **Angle Addition Identity**: $\sin(A+B) = \sin A\cos B + \cos A\sin B$

## Derivation of the Pythagorean Identity
Prove that $\sin^2\theta + \cos^2\theta = 1$ for any angle.

**Step 1:** Draw a right triangle inside a circle.
Let the hypotenuse be the radius $r$ of the circle, making an angle $\theta$ with the x-axis. The base of the triangle is $x$, and the height is $y$.

**Step 2:** Apply the Pythagorean Theorem.
$$ x^2 + y^2 = r^2 $$

**Step 3:** Use SOH CAH TOA.
By definition, $\cos\theta = \frac{x}{r}$ and $\sin\theta = \frac{y}{r}$.
Therefore, $x = r\cos\theta$ and $y = r\sin\theta$.

**Step 4:** Substitute $x$ and $y$ back into the theorem.
$$ (r\cos\theta)^2 + (r\sin\theta)^2 = r^2 $$
$$ r^2\cos^2\theta + r^2\sin^2\theta = r^2 $$

**Step 5:** Divide the entire equation by $r^2$.
$$ \cos^2\theta + \sin^2\theta = 1 $$
Q.E.D.

## Derivation of the Law of Cosines
Prove that $c^2 = a^2 + b^2 - 2ab\cos(C)$ for any arbitrary triangle.

**Step 1:** Set up the geometry.
Drop a perpendicular height $h$ from the top vertex of the triangle down to the base. This splits the base into two segments: $x$ and $b-x$. 
This forms two smaller right-angled triangles inside the big triangle.

**Step 2:** Use the Pythagorean Theorem on both small triangles.
Triangle 1 (left): $x^2 + h^2 = a^2$
Triangle 2 (right): $(b-x)^2 + h^2 = c^2$

**Step 3:** Isolate $h^2$ in Triangle 1 and substitute it into Triangle 2.
$h^2 = a^2 - x^2$
Substitute:
$$ (b-x)^2 + (a^2 - x^2) = c^2 $$

**Step 4:** Expand the binomial and simplify.
$$ b^2 - 2bx + x^2 + a^2 - x^2 = c^2 $$
The $x^2$ terms perfectly cancel!
$$ a^2 + b^2 - 2bx = c^2 $$

**Step 5:** Express $x$ in terms of angles.
Looking at Triangle 1, $\cos(C) = \frac{x}{a}$. Therefore, $x = a\cos(C)$.
Substitute this back into the equation:
$$ a^2 + b^2 - 2b(a\cos C) = c^2 $$
$$ c^2 = a^2 + b^2 - 2ab\cos C $$
Q.E.D. This is a brilliant, generalized version of the Pythagorean theorem that works even when the triangle is not $90^\circ$!
"""

topics['Vector Calculus'] = r"""# Vector Calculus: Grad, Div, Curl & The Fundamental Theorems

## 1. Scalar vs. Vector Fields
* **Scalar Field**: Assigns a single number to every point in space (e.g., Temperature in a room).
* **Vector Field**: Assigns a vector (magnitude and direction) to every point in space (e.g., Wind velocity, Gravity, Magnetic Fields).

## 2. The Gradient ($\nabla f$)
The Gradient takes a scalar field and turns it into a vector field. It points in the direction of the *steepest ascent*, and its magnitude is the rate of that ascent.
$$ \nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle $$

## 3. Divergence ($\nabla \cdot \vec{F}$)
Divergence measures how much a vector field acts like a "source" or a "sink" at a given point. If you drop confetti in a flowing river, divergence measures if the confetti spreads out (positive) or bunches together (negative).
$$ \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} $$

## 4. Curl ($\nabla \times \vec{F}$)
Curl measures the macroscopic rotation or "swirliness" of a vector field. If you drop a tiny paddlewheel in a river, the curl vector tells you exactly how fast it spins, and the direction points along the axis of rotation.
$$ \nabla \times \vec{F} = \text{det} \begin{pmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{pmatrix} $$

## 5. The Grand Theorems
Vector calculus culminates in three generalized versions of the Fundamental Theorem of Calculus. They all state that the integral of a "derivative" over a region is equal to the value of the function on the *boundary* of that region:
1. **Gradient Theorem (Line Integrals)**
2. **Stokes' Theorem (Surface Integrals of Curl)**
3. **Divergence Theorem (Volume Integrals of Flux)**

## Derivation of the Gradient Theorem (Fundamental Theorem of Line Integrals)
Prove that $\int_C \nabla f \cdot d\vec{r} = f(B) - f(A)$.

**Step 1:** Parameterize the path $C$.
Let the path from point $A$ to point $B$ be parameterized by a vector function $\vec{r}(t) = \langle x(t), y(t), z(t) \rangle$, for $a \le t \le b$.
Thus, $\vec{r}(a) = A$ and $\vec{r}(b) = B$.

**Step 2:** Write the line integral in terms of $t$.
$$ \int_C \nabla f \cdot d\vec{r} = \int_a^b \left( \nabla f(\vec{r}(t)) \cdot \frac{d\vec{r}}{dt} \right) dt $$

**Step 3:** Expand the dot product.
$$ = \int_a^b \left( \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt} \right) dt $$

**Step 4:** Recognize the Multivariable Chain Rule.
The entire expression in the parentheses is exactly the time derivative of the composite function $f(x(t), y(t), z(t))$!
$$ = \int_a^b \frac{d}{dt} [f(\vec{r}(t))] \, dt $$

**Step 5:** Apply the 1D Fundamental Theorem of Calculus.
The integral of a total derivative simply evaluates the original function at its bounds:
$$ = \left[ f(\vec{r}(t)) \right]_a^b $$
$$ = f(\vec{r}(b)) - f(\vec{r}(a)) $$
$$ = f(B) - f(A) $$
Q.E.D. This proves that for a conservative vector field, the path taken between two points absolutely does not matter! The total work done depends purely on the endpoints.
"""

topics['Radial Kinematics & Polar Dynamics'] = r"""# Radial Kinematics & Polar Dynamics

## 1. Beyond the Cartesian Grid
When tracking a rocket launch or a planet in orbit, using a standard $(x,y)$ grid is incredibly mathematically clumsy. The math simplifies beautifully if we switch to **Polar Coordinates**, tracking the object using its distance from the origin ($r$) and its angle ($\theta$).

## 2. Position in Polar Coordinates
Instead of $\vec{r} = x\hat{i} + y\hat{j}$, we define two new dynamic unit vectors that rotate with the object:
* $\hat{e}_r$: Points straight outwards from the origin.
* $\hat{e}_\theta$: Points perpendicular to $r$, in the direction of increasing angle.
The position vector is astonishingly simple:
$$ \vec{r} = r \hat{e}_r $$

## 3. Velocity in Polar Coordinates
Taking the derivative of position is tricky because, unlike $\hat{i}$ and $\hat{j}$, the unit vector $\hat{e}_r$ *changes direction* as the object moves! We must use the product rule.
$$ \vec{v} = \dot{r}\hat{e}_r + r\dot{\theta}\hat{e}_\theta $$
This means the velocity has two distinct parts:
1. **Radial Velocity ($\dot{r}$)**: How fast it moves away from the origin.
2. **Transverse Velocity ($r\dot{\theta}$)**: How fast it sweeps across the angle.

## 4. Acceleration in Polar Coordinates
Taking another derivative yields an even more complex formula with four terms:
$$ \vec{a} = (\ddot{r} - r\dot{\theta}^2)\hat{e}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\hat{e}_\theta $$
This beautiful equation dictates orbital mechanics!

## Derivation of Polar Acceleration (The Coriolis Term)
Let's rigorously prove the acceleration formula and discover the mysterious Coriolis term: $2\dot{r}\dot{\theta}$.

**Step 1:** The derivatives of the unit vectors.
As the object rotates by $d\theta$, the vector $\hat{e}_r$ tilts towards $\hat{e}_\theta$, and $\hat{e}_\theta$ tilts towards $-\hat{e}_r$.
Calculus proves:
$\frac{d\hat{e}_r}{dt} = \dot{\theta}\hat{e}_\theta$
$\frac{d\hat{e}_\theta}{dt} = -\dot{\theta}\hat{e}_r$

**Step 2:** Start with the velocity vector.
$$ \vec{v} = \dot{r}\hat{e}_r + r\dot{\theta}\hat{e}_\theta $$

**Step 3:** Take the time derivative $\vec{a} = \frac{d\vec{v}}{dt}$.
We must apply the product rule to *both* terms!
For the first term ($\dot{r}\hat{e}_r$):
$$ \frac{d}{dt}(\dot{r}\hat{e}_r) = \ddot{r}\hat{e}_r + \dot{r}\frac{d\hat{e}_r}{dt} = \ddot{r}\hat{e}_r + \dot{r}(\dot{\theta}\hat{e}_\theta) $$

For the second term ($r\dot{\theta}\hat{e}_\theta$), apply the product rule across all three variables:
$$ \frac{d}{dt}(r\dot{\theta}\hat{e}_\theta) = \dot{r}\dot{\theta}\hat{e}_\theta + r\ddot{\theta}\hat{e}_\theta + r\dot{\theta}\frac{d\hat{e}_\theta}{dt} $$
Substitute the unit vector derivative:
$$ = \dot{r}\dot{\theta}\hat{e}_\theta + r\ddot{\theta}\hat{e}_\theta - r\dot{\theta}^2\hat{e}_r $$

**Step 4:** Combine all terms.
$$ \vec{a} = \left( \ddot{r}\hat{e}_r + \dot{r}\dot{\theta}\hat{e}_\theta \right) + \left( \dot{r}\dot{\theta}\hat{e}_\theta + r\ddot{\theta}\hat{e}_\theta - r\dot{\theta}^2\hat{e}_r \right) $$

**Step 5:** Group by $\hat{e}_r$ and $\hat{e}_\theta$.
$$ \vec{a} = (\ddot{r} - r\dot{\theta}^2)\hat{e}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\hat{e}_\theta $$
Q.E.D.
* $\ddot{r}$ is radial acceleration.
* $-r\dot{\theta}^2$ is centripetal acceleration.
* $r\ddot{\theta}$ is angular acceleration.
* $2\dot{r}\dot{\theta}$ is the **Coriolis Acceleration**—a bizarre fictitious force you feel when you walk radially outwards on a spinning merry-go-round!
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded remaining Mathematics topics successfully.")
