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

topics['Differential Equations'] = r"""# Differential Equations: The Language of the Universe

## 1. What is a Differential Equation?
Algebraic equations ask you to find a specific *number* (e.g., solve $x^2 = 4$ for $x$). 
A **Differential Equation (DE)** asks you to find a specific *function* (e.g., solve $y' = y$ for $y(t)$).
It is an equation that relates an unknown function to its own derivatives. Because derivatives represent rates of change, DEs are the mathematical language used to describe anything that changes over time: population growth, radioactive decay, planetary motion, and chemical reactions.

## 2. Order and Linearity
* **Order**: The highest derivative present. $y'' + y = 0$ is a second-order DE.
* **Linearity**: A DE is linear if the unknown function $y$ and its derivatives only appear to the first power, and are not multiplied together or stuffed inside other functions (like $\\sin(y)$).

## 3. Separable First-Order Equations
The easiest DEs to solve are **Separable**. You can literally move all the $y$'s and $dy$'s to one side, and all the $x$'s and $dx$'s to the other side, and integrate both independently.

**Example: Population Growth ($dP/dt = kP$)**
The rate of population growth is proportional to the current population.
1. Separate: $\\frac{dP}{P} = k \\, dt$
2. Integrate both sides: $\\int \\frac{1}{P} \\, dP = \\int k \\, dt$
3. Result: $\\ln|P| = kt + C$
4. Solve for $P$: $P(t) = e^{kt+C} = e^C e^{kt} = P_0 e^{kt}$
This yields the famous exponential growth formula!

## 4. Linear First-Order Equations & Integrating Factors
If an equation looks like $\\frac{dy}{dx} + P(x)y = Q(x)$, it is a first-order linear DE. It is not always separable.
We solve it using an **Integrating Factor**, $\\mu(x) = e^{\\int P(x) \\, dx}$.
Multiplying the entire equation by $\\mu(x)$ magically compresses the left side into the exact derivative of a product: $\\frac{d}{dx}[\\mu(x) y]$. You can then just integrate both sides!

## 5. Second-Order Linear Homogeneous Equations
These equations look like $ay'' + by' + cy = 0$ (like a mass-spring system with damping).
Because taking derivatives of $e^{rx}$ just brings down constants ($re^{rx}$), we guess that the solution looks like $y = e^{rx}$.
Substituting this in gives the **Characteristic Equation**:
$$ ar^2 + br + c = 0 $$
You solve this simple quadratic for $r$! The roots dictate the physics of the system:
1. **Two real roots**: The system is heavily overdamped and sluggishly returns to equilibrium.
2. **One repeated root**: The system is critically damped (returns to equilibrium as fast as possible, like car shock absorbers).
3. **Complex roots ($a \\pm bi$)**: The system is underdamped. The imaginary part creates sines and cosines, meaning the system oscillates or bounces (like a pendulum).

## 6. Non-Homogeneous Equations (Undetermined Coefficients)
What if the equation is driven by an external force? $ay'' + by' + cy = F(t)$.
The total solution is $y(t) = y_h(t) + y_p(t)$.
You find the homogeneous solution $y_h$ (as if $F(t)=0$), and then you "guess" a particular solution $y_p$ based on the shape of $F(t)$. If $F(t)$ is a sine wave, you guess $y_p = A\\sin(t) + B\\cos(t)$ and solve for $A$ and $B$.

## 7. The Laplace Transform
For discontinuous driving forces (like a sudden voltage spike or a hammer striking a bell), traditional calculus fails. Oliver Heaviside and Pierre-Simon Laplace pioneered a method to transform the entire differential equation out of the "Time Domain" ($t$) and into a purely algebraic "Frequency Domain" ($s$).
$$ \\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} f(t)e^{-st} \\, dt $$
In the $s$-domain, derivatives become simple multiplication by $s$. You solve the algebra problem, and then use an Inverse Laplace Transform to jump back to the time domain!

## 8. Systems of Differential Equations
In the real world, variables interact. The population of wolves depends on the population of rabbits, and vice-versa (Predator-Prey models).
$$ \\frac{dx}{dt} = ax - bxy $$
$$ \\frac{dy}{dt} = -cy + dxy $$
These are solved using **Linear Algebra**. You create a matrix of the coefficients, find its **Eigenvalues**, and the eigenvalues instantly tell you if the populations will spiral out of control, crash to zero, or form a stable oscillating cycle!

## 9. Partial Differential Equations (PDEs)
When a function depends on multiple variables (like space *and* time), you get PDEs. 
* **The Heat Equation**: $\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u$ (How heat diffuses through a metal plate).
* **The Wave Equation**: $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u$ (How a guitar string vibrates, or how light travels).

## 10. Insane Level: Chaos Theory & The Lorenz Attractor
In 1963, meteorologist Edward Lorenz was simulating weather using a simple system of three coupled non-linear differential equations:
$dx/dt = \\sigma(y - x)$
$dy/dt = x(\\rho - z) - y$
$dz/dt = xy - \\beta z$
He discovered that an infinitesimally small change in the starting conditions (like rounding $0.506127$ to $0.506$) completely altered the long-term solution. This birthed **Chaos Theory** and the "Butterfly Effect"—proving that while the universe is deterministic (governed by exact DEs), it is fundamentally unpredictable over long timespans.
"""

topics['Vector Algebra & 3D Geometry'] = r"""# Vector Algebra & 3D Geometry: Mapping the Universe

## 1. The 3D Coordinate System
While 2D geometry lives on a flat piece of paper with $x$ and $y$ axes, 3D geometry adds a $z$-axis representing depth.
A point in 3D space is written as $(x, y, z)$. 
The distance between two points $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$ is an extension of the Pythagorean theorem:
$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} $$

## 2. Vectors in 3D Space
A vector $\\vec{v} = \\langle v_1, v_2, v_3 \\rangle$ represents a displacement. 
It can also be written using the standard unit basis vectors $\\hat{i}, \\hat{j}, \\hat{k}$ (which point perfectly along the x, y, and z axes):
$$ \\vec{v} = v_1\\hat{i} + v_2\\hat{j} + v_3\\hat{k} $$
The magnitude (length) of the vector is $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$.

## 3. The Dot Product (Scalar Product)
The dot product multiplies two vectors to yield a single number (a scalar).
Algebraically: $\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 + u_3v_3$
Geometrically: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos\\theta$

**Crucial Property:**
If $\\vec{u} \\cdot \\vec{v} = 0$, the vectors are perfectly **orthogonal** (perpendicular) at 90 degrees.

**Example Problem:** Find the angle between $\\vec{u} = \\langle 1, 2, 3 \\rangle$ and $\\vec{v} = \\langle 4, -5, 6 \\rangle$.
1. Dot product: $(1)(4) + (2)(-5) + (3)(6) = 4 - 10 + 18 = 12$
2. Magnitudes: $|\\vec{u}| = \\sqrt{14}$, $|\\vec{v}| = \\sqrt{77}$
3. $\\cos\\theta = \\frac{12}{\\sqrt{14}\\sqrt{77}}$. 
4. $\\theta \\approx 68.6^\\circ$.

## 4. The Cross Product (Vector Product)
Unlike the dot product, the cross product $\\vec{u} \\times \\vec{v}$ yields a *new vector* that is orthogonal to *both* original vectors.
It is calculated using the determinant of a $3 \\times 3$ matrix:
$$ \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} $$

Geometrically, the magnitude $|\\vec{u} \\times \\vec{v}| = |\\vec{u}| |\\vec{v}| \\sin\\theta$.
This magnitude perfectly equals the **Area of the parallelogram** formed by the two vectors!

## 5. Equations of Lines in 3D
You cannot use $y = mx + b$ in 3D. A line requires two things: a starting point $P_0(x_0, y_0, z_0)$ and a direction vector $\\vec{v} = \\langle a, b, c \\rangle$.
We define the line using a parameter $t$ (think of $t$ as time).
**Parametric Equations:**
$x = x_0 + at$
$y = y_0 + bt$
$z = z_0 + ct$

## 6. Equations of Planes in 3D
A flat plane in 3D space is defined by a point on the plane $P_0(x_0, y_0, z_0)$ and a **Normal Vector** $\\vec{n} = \\langle A, B, C \\rangle$ that points perfectly perpendicular to the entire plane.
Because any vector lying on the plane must be orthogonal to the normal vector, their dot product must be zero:
$$ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 $$

**Example Problem:** Find the plane passing through three points $P, Q, R$.
1. Create two vectors on the plane: $\\vec{PQ}$ and $\\vec{PR}$.
2. Take their cross product $\\vec{PQ} \\times \\vec{PR}$. This gives you the normal vector $\\vec{n}$.
3. Plug $\\vec{n}$ and point $P$ into the plane equation!

## 7. Intersections and Distances
* **Distance from a point to a plane:** Uses the projection of a vector onto the normal vector. $D = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.
* **Intersection of two planes:** Two non-parallel planes intersect to form a line. The direction vector of this line is simply the cross product of the two planes' normal vectors!

## 8. Cylindrical Coordinates
Instead of $(x, y, z)$, we can map 3D space using a radius $r$, an angle $\\theta$, and a height $z$. This is just 2D polar coordinates with a vertical $z$-axis stacked on top. It is perfect for analyzing cylinders, pipes, and symmetrical rotation.

## 9. Spherical Coordinates
We can also map 3D space using a radius from the origin $\\rho$, an azimuthal angle $\\theta$ (longitude), and a polar angle $\\phi$ (latitude from the north pole). 
$(x, y, z) \\to (\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)$
This is the coordinate system used by GPS satellites to pinpoint locations on Earth!

## 10. Insane Level: N-Dimensional Geometry
Who says we have to stop at 3 dimensions? Using vectors, we can instantly generalize geometry to 4, 5, or 100 dimensions!
A sphere in $n$-dimensions (a hypersphere) is simply the set of all vectors $\\vec{v}$ where $|\\vec{v}| = R$.
Using the dot product formula, we can calculate the exact angle between two diagonal lines in a 10-dimensional hypercube. Linear algebra allows our math to explore dimensions our physical brains are utterly incapable of visualizing!
"""

topics['Conic Sections'] = r"""# Conic Sections: The Geometry of Orbits

## 1. Slicing the Cone
Over 2,000 years ago, Apollonius of Perga discovered that if you take a double-napped cone (two ice cream cones stacked tip-to-tip) and slice it with a flat plane at different angles, you produce four perfectly beautiful 2D curves: the **Circle**, the **Ellipse**, the **Parabola**, and the **Hyperbola**.
These curves, studied purely for their geometric beauty by the ancient Greeks, turned out to be the exact trajectories of planets, comets, and spacecraft in Newtonian physics!

## 2. The General Equation
Every single conic section can be represented by a general second-degree algebraic equation:
$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$
By looking at the discriminant $B^2 - 4AC$, you can instantly identify the shape:
* $B^2 - 4AC < 0$: Ellipse (or Circle)
* $B^2 - 4AC = 0$: Parabola
* $B^2 - 4AC > 0$: Hyperbola

## 3. The Circle
A circle is formed when the cutting plane is perfectly horizontal.
* **Geometric Definition**: The set of all points $(x,y)$ that are a fixed distance (radius $r$) from a center point $(h,k)$.
* **Standard Equation**: 
  $$ (x - h)^2 + (y - k)^2 = r^2 $$

## 4. The Parabola
A parabola is formed when the plane slices parallel to the slanted edge of the cone.
* **Geometric Definition**: The set of all points perfectly equidistant from a fixed point (the **Focus**) and a fixed line (the **Directrix**).
* **Standard Equation (Vertical)**: $(x - h)^2 = 4p(y - k)$
* **Standard Equation (Horizontal)**: $(y - k)^2 = 4p(x - h)$
The distance $p$ is the distance from the vertex to the focus.
* **Optical Property**: Any light ray traveling perfectly straight down into a parabolic mirror will reflect and hit the focus perfectly. This is how satellite dishes and telescope mirrors work!

## 5. The Ellipse
An ellipse is formed when the plane slices the cone at a shallow angle.
* **Geometric Definition**: The set of all points where the *sum* of the distances to two fixed points (the **Foci**) is perfectly constant.
* **Standard Equation**:
  $$ \\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1 $$
Here, $a$ is the semi-major axis (longest radius) and $b$ is the semi-minor axis. 
The foci are located at a distance $c$ from the center, where $c^2 = a^2 - b^2$.
* **Kepler's First Law**: Every planet in our solar system orbits the Sun in a perfect ellipse, with the Sun located exactly at one of the two foci!

## 6. The Hyperbola
A hyperbola is formed when the plane slices vertically through *both* halves of the double cone, creating two mirrored, U-shaped branches.
* **Geometric Definition**: The set of all points where the *difference* of the distances to two foci is perfectly constant.
* **Standard Equation (Horizontal)**:
  $$ \\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1 $$
Unlike an ellipse, a hyperbola has strict **Asymptotes** (diagonal lines the curve approaches but never touches).
* **Physical Application**: If a rogue comet flies into our solar system incredibly fast, it won't be trapped in an elliptical orbit. It will slingshot around the Sun and fly off into deep space forever, tracing a perfect hyperbolic path.

## 7. Eccentricity ($e$)
A single number, **Eccentricity ($e$)**, defines the "squished-ness" of any conic section.
$$ e = \\frac{c}{a} $$
* $e = 0$: Perfect Circle.
* $0 < e < 1$: Ellipse. (Earth's orbit has $e = 0.0167$, it's nearly circular!).
* $e = 1$: Parabola.
* $e > 1$: Hyperbola.

## 8. Polar Coordinates and Conics
In astrophysics, we don't use $(x,y)$ grids to track planets. We use polar coordinates $(r, \\theta)$ with the Sun at the origin.
Remarkably, all four conic sections collapse into ONE single, elegant equation in polar coordinates:
$$ r = \\frac{ed}{1 \\pm e \\cos\\theta} $$
This single equation governs the motion of every orbiting body in the universe!

## 9. Degenerate Conics
What happens if the slicing plane passes perfectly through the sharp tip (the apex) of the double cone?
You don't get curves. You get **Degenerate Conics**:
1. A single point (a collapsed circle/ellipse).
2. A single straight line (a collapsed parabola).
3. Two intersecting straight lines (a collapsed hyperbola).

## 10. Insane Level: Projective Geometry
Why do a parabola and hyperbola look so different on paper, yet come from the same cone?
In the 1600s, Girard Desargues invented **Projective Geometry**. He realized that if you add a "line at infinity" to our flat 2D plane, all conic sections are actually the exact same shape!
A parabola is just an ellipse that is tangent to the line at infinity. A hyperbola is just an ellipse that intersects the line at infinity twice! To the universe, there is only one shape.
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded deep_math_batch3 successfully.")
