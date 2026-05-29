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

topics['Vector Algebra & 3D Geometry'] = """# Vector Algebra & 3D Geometry: Modeling Euclidean Space

## 1. Introduction to Vectors

A scalar is a quantity with only magnitude (e.g., mass, temperature). A **vector** is a mathematical object that has both **magnitude** (length) and **direction** (e.g., velocity, force).
In 3D Euclidean space ($\\mathbb{R}^3$), a vector $\\vec{v}$ is represented by its components along the Cartesian axes (x, y, z):
$$ \\vec{v} = \\langle v_1, v_2, v_3 \\rangle = v_1\\hat{\\imath} + v_2\\hat{\\jmath} + v_3\\hat{k} $$
Where $\\hat{\\imath}, \\hat{\\jmath}, \\hat{k}$ are the standard unit vectors $(1,0,0), (0,1,0), (0,0,1)$.

The **magnitude** (or length) of the vector is found via the 3D Pythagorean theorem:
$$ |\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2} $$

## 2. The Dot Product (Scalar Product)

The dot product is a way to multiply two vectors that results in a **scalar** (a single number). It is fundamentally a measure of how much two vectors "agree" or point in the same direction.

**Algebraic Definition:**
$$ \\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 $$

**Geometric Definition:**
$$ \\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}| \\cos(\\theta) $$
where $\\theta$ is the angle between the two vectors.

**Critical Properties:**
* If $\\vec{a} \\cdot \\vec{b} = 0$, the vectors are precisely perpendicular (orthogonal).
* It is used to project one vector onto another, which is the mathematical foundation of 3D computer graphics shading (calculating the angle between a light ray and a surface normal).

## 3. The Cross Product (Vector Product)

Unlike the dot product, the cross product of two vectors in 3D space results in a **new vector**. This new vector is magically perpendicular to *both* original vectors.

**Definition via Determinant:**
$$ \\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{\\imath} & \\hat{\\jmath} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} $$
$$ = (a_2b_3 - a_3b_2)\\hat{\\imath} - (a_1b_3 - a_3b_1)\\hat{\\jmath} + (a_1b_2 - a_2b_1)\\hat{k} $$

**Geometric Properties:**
1. The magnitude $|\\vec{a} \\times \\vec{b}|$ is exactly equal to the area of the parallelogram spanned by $\\vec{a}$ and $\\vec{b}$.
2. $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}| \\sin(\\theta)$.
3. If $\\vec{a} \\times \\vec{b} = \\vec{0}$, the vectors are perfectly parallel.
4. It obeys the Right-Hand Rule to determine its direction (crucial for torque and magnetic fields in physics).

## 4. Equations of Lines in 3D

In 2D, a line is $y = mx + c$. In 3D, a single algebraic equation defines a *plane*, not a line! To define a line in 3D, we must use vectors and a parameter $t$ (like time).

To write the equation of a line, you need:
1. A point on the line: $P(x_0, y_0, z_0)$ represented by vector $\\vec{r_0}$.
2. A direction vector that the line points along: $\\vec{d} = \\langle a, b, c \\rangle$.

**Parametric Equation:**
$$ \\vec{r}(t) = \\vec{r_0} + t\\vec{d} $$
Which expands to three equations:
* $x(t) = x_0 + at$
* $y(t) = y_0 + bt$
* $z(t) = z_0 + ct$

By eliminating the parameter $t$, we get the **Symmetric Equations**:
$$ \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} $$

## 5. Equations of Planes in 3D

To define a plane in 3D space, you need:
1. A point on the plane: $P_0(x_0, y_0, z_0)$.
2. A **Normal Vector** $\\vec{n} = \\langle A, B, C \\rangle$, which is a vector perfectly perpendicular to the entire plane.

For any generic point $P(x,y,z)$ on the plane, the vector $\\vec{P_0P}$ must lie flat on the plane. Therefore, it must be orthogonal to the normal vector $\\vec{n}$.
We use the dot product to enforce this orthogonality:
$$ \\vec{n} \\cdot \\vec{P_0P} = 0 $$
$$ \\langle A, B, C \\rangle \\cdot \\langle x - x_0, y - y_0, z - z_0 \\rangle = 0 $$

This expands into the beautiful **Standard Scalar Equation of a Plane**:
$$ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 $$
$$ Ax + By + Cz = D $$

## 6. Insane Level: Geometric Algebra (Clifford Algebra)

The Cross Product is fundamentally flawed—it only works in exactly 3 dimensions! It cannot be generalized to 4D (relativity) or higher dimensions.

In the 19th century, William Kingdon Clifford united the Dot Product and a new concept called the **Wedge Product** ($\\wedge$) into a single, unified mathematical system called **Geometric Algebra**.

Instead of producing a perpendicular vector, the Wedge Product $\\vec{a} \\wedge \\vec{b}$ produces a **Bivector**—a 2D directed plane segment that has an area and a direction of rotation, but no specific shape! 
$$ \\vec{a} \\vec{b} = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\wedge \\vec{b} $$

In Geometric Algebra, complex numbers, quaternions (used in 3D game engines), vectors, dot products, and cross products all fuse into one single, elegant mathematical framework that operates flawlessly in any number of dimensions."""

topics['Conic Sections'] = """# Conic Sections: The Geometry of Orbits and Slices

## 1. Geometric Definition of Conics

A **conic section** is a curve obtained by intersecting a plane with a double-napped regular hollow cone. Depending on the angle of the plane relative to the cone's central axis, you generate four distinct curves:
1. **Circle**: The plane is perfectly horizontal (orthogonal to the axis).
2. **Ellipse**: The plane is tilted, but cuts completely through one half of the cone.
3. **Parabola**: The plane is tilted to be exactly parallel to the slanted side of the cone.
4. **Hyperbola**: The plane is steep enough to slice through *both* the top and bottom halves of the cone.

## 2. The General Quadratic Equation

Every single conic section on a 2D Cartesian plane can be described by a general quadratic polynomial equation in two variables:
$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$

The $Bxy$ term controls the *rotation* of the conic section on the graph. By rotating the coordinate axes, we can always eliminate the $Bxy$ term to get the standard equations. The type of conic is determined by the discriminant $\\Delta = B^2 - 4AC$:
* $B^2 - 4AC < 0$: Ellipse (or Circle if $A = C$)
* $B^2 - 4AC = 0$: Parabola
* $B^2 - 4AC > 0$: Hyperbola

## 3. The Parabola

**Locus Definition:** A parabola is the set of all points that are equidistant from a fixed point (the **focus**) and a fixed line (the **directrix**).
Because of this equidistant property, any wave (light, sound) originating at the focus will bounce off the parabolic curve and reflect in perfectly parallel straight lines. This is why car headlights and satellite dishes are parabolic!

**Standard Equation (Opening Up/Down):**
$$ (x - h)^2 = 4p(y - k) $$
* **Vertex**: $(h, k)$
* $p$ is the directed distance from the vertex to the focus. Focus is at $(h, k+p)$. Directrix is the line $y = k-p$.

## 4. The Ellipse

**Locus Definition:** An ellipse is the set of all points where the *sum* of the distances to two fixed points (the **foci**) is constant.
By Kepler's First Law, the planets in our solar system do not orbit in perfect circles, but in ellipses, with the Sun located exactly at one of the foci.

**Standard Equation:**
$$ \\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1 $$
* **Center**: $(h, k)$
* $a$ is the semi-major axis (half the long width), $b$ is the semi-minor axis (half the short height).
* The distance from the center to the foci is $c$, where $c^2 = a^2 - b^2$.

## 5. The Hyperbola

**Locus Definition:** A hyperbola is the set of all points where the *absolute difference* of the distances to two fixed foci is constant.
Unlike ellipses, hyperbolas consist of two separate disconnected branches and have two asymptotes that they approach at infinity. They describe the paths of comets that fly past the sun and escape the solar system forever.

**Standard Equation (Opening Left/Right):**
$$ \\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1 $$
* **Center**: $(h, k)$
* The distance from the center to the foci is $c$, where $c^2 = a^2 + b^2$.
* The asymptotes are the intersecting lines $y - k = \\pm \\frac{b}{a}(x - h)$.

## 6. Insane Level: Dandelin Spheres and Eccentricity

How do we prove that a random 3D slice of a cone actually produces the 2D locus definitions involving foci?

In 1822, Germinal Pierre Dandelin invented an incredibly elegant 3D geometric proof using spheres.
If you slice a cone with a plane to form an ellipse, you can fit exactly two perfect spheres inside the cone so that they are tangent to the cone's walls and tangent to the intersecting plane.
* The two points where the spheres touch the plane are *exactly* the foci of the ellipse!
* Using simple tangent geometry, one can prove that the sum of distances from any point on the ellipse to the two touch-points is constant, perfectly uniting the 3D and 2D definitions.

**Eccentricity ($e$):**
All conics can be unified under a single definition using **eccentricity**, the ratio of the distance to the focus over the distance to the directrix.
$$ e = \\frac{c}{a} $$
* $e = 0$: Circle (a single point focus, directrix at infinity).
* $0 < e < 1$: Ellipse (bound orbit).
* $e = 1$: Parabola (escape trajectory).
* $e > 1$: Hyperbola (interstellar flyby)."""

topics['Radial Kinematics & Polar Dynamics'] = """# Polar Dynamics: Motion Beyond Cartesian Grids

## 1. The Polar Coordinate System

Cartesian coordinates $(x, y)$ describe space as a rigid grid of squares. But many systems in the universe—like spinning motors, planetary orbits, and radar sweeps—are fundamentally circular. 

For these, we use **Polar Coordinates** $(r, \\theta)$.
* $r$ is the radial distance from the origin (the pole).
* $\\theta$ is the angle measured counter-clockwise from the positive x-axis.

**Conversion to Cartesian:**
$$ x = r \\cos(\\theta) $$
$$ y = r \\sin(\\theta) $$
$$ r^2 = x^2 + y^2 $$
$$ \\tan(\\theta) = \\frac{y}{x} $$

## 2. Polar Unit Vectors

In Cartesian grids, the basis vectors $\\hat{\\imath}$ (right) and $\\hat{\\jmath}$ (up) are fixed and never change direction.
In polar coordinates, our basis vectors **move with the particle**.

* $\\hat{e}_r$: The radial unit vector. It points straight outward from the origin through the particle.
* $\\hat{e}_\\theta$: The tangential unit vector. It is perpendicular to $\\hat{e}_r$, pointing in the direction of increasing $\\theta$ (counter-clockwise).

As the particle moves, these unit vectors rotate! Their derivatives with respect to time are not zero:
$$ \\frac{d\\hat{e}_r}{dt} = \\dot{\\theta} \\hat{e}_\\theta $$
$$ \\frac{d\\hat{e}_\\theta}{dt} = -\\dot{\\theta} \\hat{e}_r $$
*(Where the dot notation $\\dot{\\theta}$ represents the derivative with respect to time $t$, or angular velocity $\\omega$).*

## 3. Position and Velocity in Polar Dynamics

The position vector of a particle is elegantly simple in polar coordinates. It just points straight out along the radial vector with a length of $r$:
$$ \\vec{r} = r \\hat{e}_r $$

To find the **velocity vector** $\\vec{v}$, we take the time derivative of the position vector. We MUST use the product rule, because both $r$ and $\\hat{e}_r$ are changing over time!
$$ \\vec{v} = \\frac{d}{dt}(r \\hat{e}_r) = \\dot{r} \\hat{e}_r + r \\frac{d\\hat{e}_r}{dt} $$
Substituting our known unit vector derivative from Section 2:
$$ \\vec{v} = \\dot{r} \\hat{e}_r + r\\dot{\\theta} \\hat{e}_\\theta $$

This reveals that velocity has two independent components:
1. **Radial velocity ($\\dot{r}$):** How fast the particle is moving directly towards or away from the origin.
2. **Transverse velocity ($r\\dot{\\theta}$):** How fast the particle is sweeping sideways across the sky.

## 4. The Acceleration Vector

To find the **acceleration vector** $\\vec{a}$, we take the time derivative of the velocity vector. We must apply the product rule multiple times.
$$ \\vec{a} = \\frac{d}{dt}(\\dot{r} \\hat{e}_r + r\\dot{\\theta} \\hat{e}_\\theta) $$

After expanding the product rules and substituting the unit vector derivatives, the algebra simplifies into four distinct physical terms:
$$ \\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{e}_\\theta $$

## 5. Physical Breakdown of the Acceleration Terms

The equation for polar acceleration is one of the most profound equations in classical mechanics, revealing four hidden forces in rotating frames of reference:

**Radial Components ($\\hat{e}_r$ direction):**
1. $\\ddot{r}$ : Linear radial acceleration (like stepping on the gas in a straight line).
2. $-r\\dot{\\theta}^2$ : **Centripetal Acceleration**. The inward acceleration required to keep the particle moving in a circle, preventing it from flying off in a straight line.

**Transverse Components ($\\hat{e}_\\theta$ direction):**
3. $r\\ddot{\\theta}$ : Angular acceleration. The force required to make a spinning disc spin faster or slower.
4. $2\\dot{r}\\dot{\\theta}$ : **The Coriolis Acceleration**. A bizarre, counter-intuitive acceleration that occurs only when a particle is moving radially ($\\dot{r} \\neq 0$) while the system is rotating ($\\dot{\\theta} \\neq 0$).

## 6. Insane Level: Coriolis Force and Global Weather

The Coriolis term $2\\dot{r}\\dot{\\theta}$ is responsible for some of the most massive phenomena on Earth. 

Earth is a rotating sphere. If you fire a missile or throw a ball perfectly straight from the Equator towards the North Pole, the ball is changing its radial distance from the Earth's axis of rotation ($\\dot{r}$) while the Earth rotates underneath it ($\\dot{\\theta}$). 
To an observer standing on Earth, the ball will appear to magically curve to the East, pulled by an invisible "Coriolis Force."

This is exactly why **Hurricanes and Typhoons** spin! As low-pressure air moves radially inward ($\\dot{r}$) to fill a void, the Earth's rotation ($\\dot{\\theta}$) applies a Coriolis acceleration, forcing the winds to bend and spiral into massive rotating storm systems (counter-clockwise in the Northern Hemisphere, clockwise in the Southern Hemisphere)."""

topics['Algebra Fundamentals'] = """# Algebra Fundamentals: The Core Engine of Mathematics

## 1. What is Algebra?

Arithmetic is the study of specific numbers (e.g., $3 + 4 = 7$). **Algebra** is the leap into abstraction. We replace specific numbers with symbols (variables like $x, y, n$) to represent unknown quantities and discover universal patterns. 

For example, $x + x = 2x$ is a universal truth regardless of whether $x$ represents 5 apples, the mass of Jupiter, or a complex matrix. Algebra is the language used to encode the laws of nature.

## 2. Order of Operations (PEMDAS / BODMAS)

To ensure there is no ambiguity when evaluating mathematical expressions, we adhere to a strict hierarchy of operations:
1. **P / B**: Parentheses / Brackets (resolve the deepest groupings first).
2. **E / O**: Exponents / Orders (Powers and Roots).
3. **M & D**: Multiplication and Division (evaluated Left-to-Right).
4. **A & S**: Addition and Subtraction (evaluated Left-to-Right).

*Example:* Evaluate $8 + 4 \\times (3 - 1)^2 \\div 2$
* Parentheses: $3 - 1 = 2$. Expression becomes $8 + 4 \\times 2^2 \\div 2$.
* Exponents: $2^2 = 4$. Expression becomes $8 + 4 \\times 4 \\div 2$.
* Multiplication/Division (Left-to-Right): $4 \\times 4 = 16$. Then $16 \\div 2 = 8$. Expression becomes $8 + 8$.
* Addition: $8 + 8 = 16$.

## 3. The Properties of Real Numbers

Algebra manipulates equations using fundamental axioms of the Real Number field ($\\mathbb{R}$).
* **Commutative Property**: Order doesn't matter for addition or multiplication.
  $$ a + b = b + a $$
  $$ a \\cdot b = b \\cdot a $$
* **Associative Property**: Grouping doesn't matter.
  $$ (a + b) + c = a + (b + c) $$
* **Distributive Property**: Multiplication spreads over addition.
  $$ a(b + c) = ab + ac $$
* **Identities**: $a + 0 = a$ (Additive Identity) and $a \\cdot 1 = a$ (Multiplicative Identity).
* **Inverses**: $a + (-a) = 0$ (Additive Inverse) and $a \\cdot (1/a) = 1$ (Multiplicative Inverse).

## 4. Simplifying Expressions & Polynomials

A **term** is a combination of numbers and variables multiplied together (e.g., $4x^2y$). An expression containing multiple terms added together is a **polynomial**.

We simplify expressions by combining **like terms** (terms that have the exact same variables raised to the exact same powers).
$$ 3x^2 + 5x - x^2 + 2 = (3 - 1)x^2 + 5x + 2 = 2x^2 + 5x + 2 $$

To multiply polynomials, we use repeated distribution (often taught as FOIL for binomials).
$$ (x + 2)(x + 3) = x(x+3) + 2(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6 $$

## 5. Solving Linear Equations

An equation is a statement that two expressions are perfectly balanced, like a physical scale. To solve for a variable $x$, you must isolate it by "undoing" operations. 
The golden rule of algebra: **Whatever you do to one side of the equation, you MUST do to the other.**

*Example:* Solve $3(x - 4) + 2 = 11$
1. Distribute: $3x - 12 + 2 = 11$
2. Combine like terms: $3x - 10 = 11$
3. Add 10 to both sides: $3x = 21$
4. Divide both sides by 3: $x = 7$

## 6. Insane Level: Abstract Algebra & Rings

In high school, we assume "Algebra" just means working with real numbers $\\mathbb{R}$. But what if we swap out the numbers for entirely different objects?

**Abstract Algebra** studies structures like Groups, Rings, and Fields. 
A **Ring** is any set equipped with two operations (let's call them $\\oplus$ and $\\otimes$) that mimic addition and multiplication, but might have totally different mechanics.

For example, consider the Ring of $2 \\times 2$ Matrices. The Commutative property of multiplication $a \\otimes b = b \\otimes a$ **completely fails**! 
Or consider Modular Arithmetic (clock math). In the Ring $\\mathbb{Z}_5$ (integers modulo 5), $3 \\oplus 4$ equals $2$, not $7$. 

By stripping away the specific numbers and studying the raw abstract axioms, mathematicians can write a single algebraic proof that simultaneously applies to numbers, matrices, symmetries of crystals, and cryptographic algorithms!"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Batch 2 completed.")
