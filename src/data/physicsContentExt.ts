export const physicsContentExt: Record<string, string> = {

  'Kinematics & Projectile Motion': `
# Kinematics: The Geometry of Motion

## 1. Position, Displacement, and Distance
Kinematics is the mathematical description of motion without considering the forces that cause it. Everything starts with understanding where an object is located.

* **Position ($\\vec{x}$ or $\\vec{r}$)**: A vector pointing from a chosen origin to the location of an object.
* **Distance ($d$)**: A scalar quantity representing the total path length traveled. If you walk 5 meters east and 5 meters west, your distance is 10 meters.
* **Displacement ($\\Delta\\vec{x}$)**: A vector representing the *change* in position. $\\Delta\\vec{x} = \\vec{x}_f - \\vec{x}_i$. If you walk 5 meters east and 5 meters west, your displacement is $0$ meters because you ended up exactly where you started!

**Example:** A runner goes once around a standard $400\\text{m}$ circular track.
* Distance traveled = $400\\text{m}$.
* Displacement = $0\\text{m}$ (initial and final positions are the same).

## 2. Velocity and Speed
How fast is position changing? 

* **Average Speed**: Total distance divided by total time ($s = d / \\Delta t$).
* **Average Velocity**: Total displacement divided by total time ($\\vec{v}_{avg} = \\Delta\\vec{x} / \\Delta t$).
* **Instantaneous Velocity**: The exact velocity at a specific infinitely small moment in time. This requires calculus! It is the derivative of position with respect to time.
$$ \\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta\\vec{x}}{\\Delta t} = \\frac{d\\vec{x}}{dt} $$

## 3. Acceleration
Acceleration is the rate of change of velocity. If you step on the gas pedal (speeding up), hit the brakes (slowing down), or turn the steering wheel (changing direction), you are accelerating!

* **Average Acceleration**: $\\vec{a}_{avg} = \\frac{\\Delta\\vec{v}}{\\Delta t} = \\frac{\\vec{v}_f - \\vec{v}_i}{t_f - t_i}$
* **Instantaneous Acceleration**: The derivative of velocity with respect to time, or the *second derivative* of position with respect to time!
$$ \\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{x}}{dt^2} $$

## 4. Constant Acceleration (The Big Four Equations)
When acceleration is perfectly constant (like free-fall near Earth's surface where $a = -9.81 \\text{ m/s}^2$), the complex calculus integrals simplify into four incredibly powerful algebraic equations.

1. **Velocity without position**: $v_f = v_i + at$
2. **Position without final velocity**: $\\Delta x = v_i t + \\frac{1}{2}at^2$
3. **Velocity without time**: $v_f^2 = v_i^2 + 2a\\Delta x$
4. **Position without acceleration**: $\\Delta x = \\frac{v_i + v_f}{2} t$

*Tip: Every equation is missing exactly one variable. Identify which variable you don't know and don't care about, and choose the equation that is missing it!*

**Example problem:** A car is traveling at $20\\text{ m/s}$. The driver slams on the brakes, causing a constant deceleration of $-5\\text{ m/s}^2$. How far does the car travel before coming to a complete stop?
* **Knowns:** $v_i = 20\\text{ m/s}$, $a = -5\\text{ m/s}^2$, $v_f = 0\\text{ m/s}$ (since it stops).
* **Unknown:** $\\Delta x$
* **Don't care about:** $t$ (time)
* **Equation to use:** $v_f^2 = v_i^2 + 2a\\Delta x$
* **Solution:** $0^2 = 20^2 + 2(-5)\\Delta x \\implies 0 = 400 - 10\\Delta x \\implies 10\\Delta x = 400 \\implies \\Delta x = 40\\text{ meters}$.

## 5. Projectile Motion (2D Kinematics)
When you throw a ball through the air, it moves in two dimensions ($x$ and $y$). The most profound realization of Galilean physics is that **horizontal and vertical motions are completely independent** and do not affect each other.

To solve projectile problems, simply decompose the initial velocity vector:
* $v_{ix} = v_i \\cos(\\theta)$
* $v_{iy} = v_i \\sin(\\theta)$

If we ignore air resistance:
* **Horizontal ($x$)**: There are no forces pushing it forward or backward, so acceleration is $0$. It moves at a perfect constant velocity. Equation: $\\Delta x = v_{ix} t$
* **Vertical ($y$)**: Gravity pulls it down, so it experiences a constant downward acceleration of $-9.81 \\text{ m/s}^2$. Equation: $\\Delta y = v_{iy} t + \\frac{1}{2}at^2$

Time ($t$) is the **only** variable that crosses over between the two axes! Find time using the $y$-axis, then plug it into the $x$-axis (or vice versa).

## Derivation of the First Kinematic Equation
How do we mathematically prove $v_f = v_i + at$? We start with the fundamental calculus definition of constant acceleration.

**Step 1:** Start with the definition of acceleration.
$$ a = \\frac{dv}{dt} $$

**Step 2:** Separate the variables. Multiply both sides by $dt$.
$$ dv = a \\, dt $$

**Step 3:** Integrate both sides. Since acceleration $a$ is constant, we can pull it out of the integral. We integrate from initial velocity $v_i$ to final velocity $v_f$, and from time $0$ to time $t$.
$$ \\int_{v_i}^{v_f} dv = a \\int_0^t dt $$

**Step 4:** Evaluate the integrals. The integral of $dv$ is just $v$, and the integral of $dt$ is just $t$.
$$ [v]_{v_i}^{v_f} = a [t]_0^t $$
$$ v_f - v_i = at $$

**Step 5:** Rearrange for $v_f$.
$$ v_f = v_i + at $$
*Q.E.D.*

## Derivation of the Second Kinematic Equation
How do we prove $\\Delta x = v_i t + \\frac{1}{2}at^2$? We start with our newly derived first equation!

**Step 1:** Start with the definition of velocity.
$$ v = \\frac{dx}{dt} $$

**Step 2:** Substitute the first kinematic equation for $v$.
$$ \\frac{dx}{dt} = v_i + at $$

**Step 3:** Separate variables by multiplying by $dt$.
$$ dx = (v_i + at) \\, dt $$

**Step 4:** Integrate both sides from initial position $x_i$ to final position $x_f$, and time $0$ to $t$.
$$ \\int_{x_i}^{x_f} dx = \\int_0^t (v_i + at) \\, dt $$

**Step 5:** Evaluate the integrals.
$$ [x]_{x_i}^{x_f} = \\left[ v_i t + \\frac{1}{2}at^2 \\right]_0^t $$
$$ x_f - x_i = v_i t + \\frac{1}{2}at^2 - (0 + 0) $$

**Step 6:** Replace $x_f - x_i$ with displacement $\\Delta x$.
$$ \\Delta x = v_i t + \\frac{1}{2}at^2 $$
*Q.E.D.*

## Derivation of the Third Kinematic Equation
How do we prove $v_f^2 = v_i^2 + 2a\\Delta x$ without using time? We use the Chain Rule!

**Step 1:** Start with the definition of acceleration.
$$ a = \\frac{dv}{dt} $$

**Step 2:** Use the chain rule to rewrite $\\frac{dv}{dt}$ as $\\frac{dv}{dx} \\cdot \\frac{dx}{dt}$.
$$ a = \\frac{dv}{dx} \\frac{dx}{dt} $$

**Step 3:** Notice that $\\frac{dx}{dt}$ is simply velocity, $v$.
$$ a = v \\frac{dv}{dx} $$

**Step 4:** Separate variables. Multiply by $dx$.
$$ a \\, dx = v \\, dv $$

**Step 5:** Integrate both sides. (From $x_i$ to $x_f$ and $v_i$ to $v_f$).
$$ \\int_{x_i}^{x_f} a \\, dx = \\int_{v_i}^{v_f} v \\, dv $$

**Step 6:** Evaluate integrals. $a$ is constant, so it pulls out. The integral of $v \\, dv$ is $\\frac{1}{2}v^2$.
$$ a [x]_{x_i}^{x_f} = \\left[ \\frac{1}{2}v^2 \\right]_{v_i}^{v_f} $$
$$ a (x_f - x_i) = \\frac{1}{2}v_f^2 - \\frac{1}{2}v_i^2 $$

**Step 7:** Replace $(x_f - x_i)$ with $\\Delta x$ and multiply everything by $2$.
$$ 2a\\Delta x = v_f^2 - v_i^2 $$

**Step 8:** Rearrange for $v_f^2$.
$$ v_f^2 = v_i^2 + 2a\\Delta x $$
*Q.E.D.*

---flashcards---
[
  {
    "front": "What is the difference between velocity and speed?",
    "back": "Velocity is a vector (requires magnitude and direction), whereas speed is a scalar (magnitude only)."
  },
  {
    "front": "What is the difference between distance and displacement?",
    "back": "Distance is the total scalar path length traveled. Displacement is the straight-line vector difference between the final and initial positions ($$\\\\Delta\\\\vec{x} = \\\\vec{x}_f - \\\\vec{x}_i$$)."
  },
  {
    "front": "What is the exact calculus definition of instantaneous velocity?",
    "back": "$$\\\\vec{v} = \\\\frac{d\\\\vec{x}}{dt}$$ (The derivative of position with respect to time)."
  },
  {
    "front": "What is the exact calculus definition of instantaneous acceleration?",
    "back": "$$\\\\vec{a} = \\\\frac{d\\\\vec{v}}{dt} = \\\\frac{d^2\\\\vec{x}}{dt^2}$$ (The second derivative of position with respect to time)."
  },
  {
    "front": "What is the kinematic equation to use if you do NOT know the final velocity?",
    "back": "$$\\\\Delta x = v_i t + \\\\frac{1}{2}at^2$$"
  },
  {
    "front": "What is the kinematic equation to use if you do NOT know the time ($$t$$)?",
    "back": "$$v_f^2 = v_i^2 + 2a\\\\Delta x$$"
  },
  {
    "front": "In ideal projectile motion, what is the horizontal acceleration?",
    "back": "$$0\\\\text{ m/s}^2$$. The horizontal velocity remains perfectly constant because there are no forces acting horizontally."
  },
  {
    "front": "In ideal projectile motion, what is the vertical acceleration?",
    "back": "$$-9.81\\\\text{ m/s}^2$$ (due to gravity)."
  },
  {
    "front": "In a 2D projectile motion problem, what is the ONLY variable shared between the horizontal ($$x$$) and vertical ($$y$$) equations?",
    "back": "Time ($$t$$)."
  },
  {
    "front": "How do you mathematically prove $$v_f^2 = v_i^2 + 2a\\\\Delta x$$?",
    "back": "By using the Chain Rule to rewrite acceleration: $$a = \\\\frac{dv}{dt} = \\\\frac{dv}{dx}\\\\frac{dx}{dt} = v\\\\frac{dv}{dx}$$, and then integrating both sides with respect to position and velocity."
  }
]
`,

  // Foundation

  'Force & Newton’s laws': `
# Force & Newton's Laws: The Engine of Dynamics

## 1. What is a Force?
A **force** is fundamentally a push or a pull resulting from an object's interaction with another object. Forces are vector quantities, meaning they possess both a magnitude (how strong the push/pull is, measured in Newtons, $N$) and a direction. 

When multiple forces act upon a single object simultaneously, we cannot simply add their magnitudes. We must perform **vector addition** to find the **Net Force** ($\\Sigma\\vec{F}$).

## 2. Newton's First Law (The Law of Inertia)
*“An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.”*

Before Galileo and Newton, Aristotelian physics claimed that objects naturally come to rest. Newton's First Law shattered this paradigm. It states that a net force is **NOT** required to keep an object moving. If you throw a baseball in the vacuum of deep space, it will travel in a perfectly straight line at a perfectly constant speed forever. A force is only required to *change* an object's motion (to accelerate it).

**Inertia** is the natural tendency of an object to resist changes to its state of motion. **Mass** is simply the quantitative, measurable value of an object's inertia.

## 3. Newton's Second Law ($\\vec{F} = m\\vec{a}$)
*“The acceleration of an object is directly proportional to the net force acting upon it, and inversely proportional to its mass.”*

$$ \\Sigma\\vec{F} = m\\vec{a} $$

This is perhaps the most famous equation in classical mechanics. However, Newton's original formulation was far more profound. He defined force based on **momentum** ($\\vec{p} = m\\vec{v}$). He stated that force is the true *rate of change of momentum* over time:

$$ \\Sigma\\vec{F} = \\frac{d\\vec{p}}{dt} $$

If the mass of an object is perfectly constant, we can pull $m$ out of the derivative:
$$ \\frac{d(m\\vec{v})}{dt} = m\\frac{d\\vec{v}}{dt} = m\\vec{a} $$

**Why the momentum formulation is superior:** The equation $\\Sigma\\vec{F} = m\\vec{a}$ completely fails when analyzing a rocket launching into space! Why? Because the rocket is constantly burning fuel and expelling it out the back, meaning its mass $m$ is rapidly decreasing over time. You *must* use $\\Sigma\\vec{F} = \\frac{d\\vec{p}}{dt}$ to correctly calculate rocket mechanics!

## 4. Newton's Third Law (Action & Reaction)
*“For every action, there is an equal and opposite reaction.”*

If object A exerts a force on object B, then object B exerts a force on object A of the exact same magnitude but in the exact opposite direction.

$$ \\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A} $$

**A Common Misconception:** If the forces are equal and opposite, why don't they just cancel out to zero? Why does anything ever move? 
They don't cancel out because **they act on entirely different objects!** If you push on a wall with 100N, the wall pushes back on *you* with 100N. The force on the wall is 100N. The force on you is 100N. Since there is only one force acting on *you*, you can accelerate backward!

## 5. Free Body Diagrams (FBDs)
To solve any complex mechanics problem, physicists isolate the object of interest and draw all external forces acting *on* it.

* **Gravity ($W = mg$)**: The long-range attractive force exerted by the Earth. It always points perfectly straight down toward the center of the planet.
* **Normal Force ($N$ or $F_N$)**: The contact force exerted by a surface to prevent solid objects from passing through each other. It is always *perpendicular* (normal) to the surface.
* **Tension ($T$)**: The pulling force transmitted axially through a string, cable, or rope. Tension only pulls; you cannot push with a rope!
* **Friction ($f = \\mu N$)**: The contact force that resists sliding motion. It always points perfectly parallel to the surface, directly opposing the direction of attempted motion.

## 6. The Mathematical Proof of Conservation of Momentum
How do physicists know that in an isolated collision between two asteroids, the total momentum before the crash exactly equals the total momentum after? It is not a guess; it is a direct mathematical consequence of Newton's 3rd Law!

**Step 1:** Imagine two objects, A and B, colliding in space.
During the collision, they exert violent contact forces on each other. By Newton's Third Law:
$$ \\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A} $$

**Step 2:** Apply Newton's Second Law in its fundamental momentum form.
We established earlier that $\\vec{F} = \\frac{d\\vec{p}}{dt}$.
Therefore, the force A exerts on B dictates how B's momentum changes: $\\vec{F}_{A \\to B} = \\frac{d\\vec{p}_B}{dt}$.
Likewise, $\\vec{F}_{B \\to A} = \\frac{d\\vec{p}_A}{dt}$.

**Step 3:** Substitute these derivatives into the Third Law equation.
$$ \\frac{d\\vec{p}_B}{dt} = -\\frac{d\\vec{p}_A}{dt} $$

**Step 4:** Move all terms to one side of the equation.
$$ \\frac{d\\vec{p}_A}{dt} + \\frac{d\\vec{p}_B}{dt} = 0 $$
Using the sum rule of calculus:
$$ \\frac{d}{dt} (\\vec{p}_A + \\vec{p}_B) = 0 $$

**Step 5:** Interpret the ultimate calculus result.
If the derivative (the rate of change) of the total momentum $(\\vec{p}_A + \\vec{p}_B)$ is exactly $0$, that means the total momentum is a **perfect constant**! It never increases or decreases over time.
Therefore, the total momentum before the collision must identically equal the total momentum after.
$$ \\Sigma\\vec{p}_{initial} = \\Sigma\\vec{p}_{final} $$
**Q.E.D.** The Law of Conservation of Momentum is perfectly proven from Newton's Laws of Motion.

---flashcards---
[
  {
    "front": "What does Newton's First Law (Law of Inertia) state?",
    "back": "An object at rest stays at rest, and an object in motion stays in motion with the same velocity, unless acted upon by a net external force."
  },
  {
    "front": "What is the formula for Newton's Second Law in terms of acceleration?",
    "back": "$$\\\\Sigma\\\\vec{F} = m\\\\vec{a}$$"
  },
  {
    "front": "What is the true fundamental formulation of Newton's Second Law in terms of momentum?",
    "back": "$$\\\\Sigma\\\\vec{F} = \\\\frac{d\\\\vec{p}}{dt}$$"
  },
  {
    "front": "Why is the momentum formulation of Newton's Second Law superior to the mass-acceleration formulation?",
    "back": "Because it remains accurate even when an object's mass is changing over time (e.g., a rocket burning and expelling fuel)."
  },
  {
    "front": "What does Newton's Third Law state?",
    "back": "For every action force, there is an equal and opposite reaction force ($$\\\\vec{F}_{A \\\\to B} = -\\\\vec{F}_{B \\\\to A}$$)."
  },
  {
    "front": "If action and reaction forces are equal and opposite, why don't they cancel each other out?",
    "back": "Because they act on entirely different objects."
  },
  {
    "front": "In a Free Body Diagram, what is the Normal Force ($$N$$)?",
    "back": "The contact force exerted by a surface to prevent objects from passing through it, always pointing perpendicular to the surface."
  },
  {
    "front": "The Law of Conservation of Momentum is directly derived from which of Newton's Laws?",
    "back": "Newton's Third Law (Action & Reaction) combined with Newton's Second Law (Force as the derivative of momentum)."
  }
]
`,


  'Advanced Thermodynamics': `

# Statistical Mechanics & Thermodynamics: Potentials, Maxwell Relations & Entropy


## 1. Classical Laws of Thermodynamics

1.  **Zeroth Law**: Establishes temperature as a transitive state property.

2.  **First Law**: $\\Delta U = Q - W$. Internal energy is a state function.

3.  **Second Law**: $\\Delta S_{universe} \\ge 0$. Natural processes increase net entropy.

4.  **Third Law**: As $T \\to 0$ Kelvin, $S \\to S_0$ (a constant minimum).


---


## 2. Statistical Mechanics: Defining Entropy ($S = k_B \\ln \\Omega$)

In modern physics, thermodynamics is explained via microstates.

Let $\\Omega$ be the multiplicity — the number of microscopic configurations corresponding to a given macroscopic state. Ludwig Boltzmann proved:

$$ S = k_B \\ln \\Omega $$

Where $k_B$ is the Boltzmann constant.


---


## 3. Insane Level: Thermodynamic Potentials & Maxwell Relations

To describe systems under various physical constraints, we define specific Legendre transformations of the internal energy $U(S, V, N)$:

*   **Enthalpy ($H$)**: Constrained pressure. $H = U + PV$.

*   **Helmholtz Free Energy ($F$ or $A$)**: Constrained temperature and volume. $F = U - TS$.

*   **Gibbs Free Energy ($G$)**: Constrained temperature and pressure. $G = H - TS$.


### Derivation: Maxwell Relations from Thermodynamic Potentials

We write the differential forms for these potentials:

$$ dU = TdS - PdV $$

$$ dH = TdS + VdP $$

$$ dF = -SdT - PdV $$

$$ dG = -SdT + VdP $$


Since these potentials are exact differentials, their mixed second partial derivatives must be equal (Clairaut's Theorem).

Applying this to $dF = -SdT - PdV$:

$$ \\left( \\frac{\\partial F}{\\partial V} \\right)_T = -P \\quad \\text{and} \\quad \\left( \\frac{\\partial F}{\\partial T} \\right)_V = -S $$

Equating the mixed derivatives:

$$ \\frac{\\partial^2 F}{\\partial T \\partial V} = \\frac{\\partial^2 F}{\\partial V \\partial T} $$

Yields the Maxwell Relation:

$$ \\left( \\frac{\\partial P}{\\partial T} \\right)_V = \\left( \\frac{\\partial S}{\\partial V} \\right)_T $$

Similarly, from $dG = -SdT + VdP$:

$$ \\left( \\frac{\\partial V}{\\partial T} \\right)_P = -\\left( \\frac{\\partial S}{\\partial P} \\right)_T $$

These relations allow scientists to calculate unmeasurable quantities like entropy change ($dS$) using measurable quantities like volume thermal expansion ($dV/dT$). ∎

`,


  'Quantum physics': `
# Quantum Physics: The Strange Micro-World

## 1. Wave-Particle Duality
In the classical world, particles (like baseballs) and waves (like ocean ripples) are totally separate. In the quantum realm, everything is both.
Light acts like a wave in the double-slit experiment, but acts like a particle (photons) in the photoelectric effect.
In 1924, Louis de Broglie hypothesized that if light can act like matter, matter can act like light! Every moving electron, proton, and even your own body has an associated wavelength:
$$ \\lambda = \\frac{h}{p} $$
(Where $p$ is momentum and $h$ is Planck's constant).

## 2. The Heisenberg Uncertainty Principle
You cannot precisely know both the exact position ($x$) and the exact momentum ($p$) of a quantum particle at the same time. The act of measuring one inherently blurs the other.
$$ \\Delta x \\Delta p \\ge \\frac{\\hbar}{2} $$
This is not a limitation of our measuring tools. It is a fundamental blurring of the universe itself.

## 3. The Schrödinger Equation
Instead of Newton's $F = ma$ determining exact trajectories, quantum mechanics uses Erwin Schrödinger's wave equation to determine probabilities. 
It calculates the Wavefunction ($\\Psi$). The square of the wavefunction ($|\\Psi|^2$) tells you the exact mathematical probability of finding the electron at any specific location!

## Derivation of the Bohr Model Radii
How did Niels Bohr calculate the exact orbital radius of an electron in Hydrogen before modern quantum mechanics was invented" He simply quantized angular momentum!

**Step 1:** The Classical Orbit.
The electron is held in circular orbit by the electrostatic force from the proton.
$$ \\frac{mv^2}{r} = k_e \\frac{e^2}{r^2} $$
$$ mv^2 = k_e \\frac{e^2}{r} $$

**Step 2:** Bohr's Quantum Postulate.
Bohr guessed that the angular momentum ($L = mvr$) of the electron could not be any arbitrary number. It had to be a perfect integer multiple of Planck's constant divided by $2\\pi$ ($\\hbar$).
$$ mvr = n\\hbar \\implies v = \\frac{n\\hbar}{mr} $$

**Step 3:** Substitute the velocity.
Plug Bohr's velocity into the classical orbit equation:
$$ m \\left( \\frac{n\\hbar}{mr} \\right)^2 = k_e \\frac{e^2}{r} $$
$$ m \\left( \\frac{n^2 \\hbar^2}{m^2 r^2} \\right) = k_e \\frac{e^2}{r} $$

**Step 4:** Solve for $r$.
Cancel one $m$ and one $r$:
$$ \\frac{n^2 \\hbar^2}{mr} = k_e e^2 $$
$$ r_n = \\frac{n^2 \\hbar^2}{m k_e e^2} $$
Q.E.D. By simply plugging in $n=1$, $n=2$, etc., this formula perfectly predicted the exact physical sizes of hydrogen atoms, proving that electrons can only exist in very specific, quantized orbits!


`,


  'Work, Energy & Power': `
# Work, Energy & Power: The Currency of Physics

## 1. Work: The Transfer of Energy
In physics, "Work" is not effort; it is a very specific mechanical transfer of energy. Work is done when a force causes an object to displace.
If the force is constant and perfectly aligns with the displacement: $W = Fd$.
If the force is applied at an angle $\\theta$:
$$ W = Fd \\cos\\theta $$
This is mathematically equivalent to the dot product: $W = \\vec{F} \\cdot \\vec{d}$.
* If you carry a heavy box and walk horizontally, you do $0$ work on the box because your lifting force (up) is at a $90^\\circ$ angle to the displacement (forward), and $\\cos(90^\\circ) = 0$.

## 2. Kinetic Energy
Kinetic Energy ($K$) is the energy of motion. 
$$ K = \\frac{1}{2}mv^2 $$
If you double your driving speed, your kinetic energy quadruples. This is why high-speed car crashes are exponentially more devastating.

## 3. Potential Energy
Potential Energy ($U$) is stored energy based on an object's position in a conservative force field (like gravity or a spring).
* **Gravitational Potential Energy (near Earth)**: $U_g = mgh$
* **Elastic Potential Energy (Spring)**: $U_s = \\frac{1}{2}kx^2$ (where $k$ is the spring constant).

## 4. The Law of Conservation of Energy
Energy cannot be created or destroyed, only transformed from one form to another. 
In a closed, frictionless system, the total mechanical energy $E_{total} = K + U$ remains perfectly constant.
If a roller coaster drops from a high peak, it trades its potential energy for kinetic energy as it accelerates downward, but the total sum remains identical.

## 5. Power
Power is the rate at which work is done (or energy is transferred) over time.
$$ P = \\frac{W}{t} = \\frac{dE}{dt} $$
It is measured in Watts (1 Watt = 1 Joule per second).
Since $W = \\vec{F} \\cdot \\vec{d}$, Power can also be calculated as Force times velocity:
$$ P = \\vec{F} \\cdot \\vec{v} $$

## Derivation of the Kinetic Energy Formula
Why is kinetic energy exactly $\\frac{1}{2}mv^2$" Where does this specific formula come from" It is rigorously derived from the Work-Energy Theorem.

**Step 1:** Define Work using calculus.
The total work done by a net force moving an object from position $x_1$ to $x_2$ is the integral of the force over distance:
$$ W = \\int_{x_1}^{x_2} F_{net} \\, dx $$

**Step 2:** Substitute Newton's Second Law.
We know $F_{net} = ma$. So:
$$ W = \\int_{x_1}^{x_2} ma \\, dx $$

**Step 3:** Use the Chain Rule trick for acceleration.
We know $a = \\frac{dv}{dt}$. By the chain rule, $a = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$.
Substitute this into the integral:
$$ W = \\int_{x_1}^{x_2} m \\left( v \\frac{dv}{dx} \\right) dx $$

**Step 4:** Cancel the $dx$ differentials.
The integral transforms from an integral over distance ($dx$) to an integral over velocity ($dv$)! The limits change from initial velocity $v_i$ to final velocity $v_f$:
$$ W = \\int_{v_i}^{v_f} mv \\, dv $$

**Step 5:** Evaluate the integral.
Since mass $m$ is constant, we just integrate $v$:
$$ W = m \\left[ \\frac{1}{2}v^2 \\right]_{v_i}^{v_f} $$
$$ W = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2 $$

**Step 6:** Define Kinetic Energy.
We see that the Work done exactly equals the change in a quantity defined by $\\frac{1}{2}mv^2$. We define this quantity as Kinetic Energy ($K$).
$$ W = K_f - K_i = \\Delta K $$
Q.E.D. We have proven both the formula for Kinetic Energy and the Work-Energy Theorem in one stroke!

---flashcards---
[
  {
    "front": "What is the formula for calculating Work done by a constant force at an angle $${\\\\theta}$$?",
    "back": "$$W = Fd \\\\cos\\\\theta$$, or equivalently the dot product $$W = \\\\vec{F} \\\\cdot \\\\vec{d}$$"
  },
  {
    "front": "If you carry a heavy box and walk perfectly horizontally, how much work are you doing on the box?",
    "back": "$$0$$ Joules. Your lifting force is vertical, while the displacement is horizontal ($$\\\\cos(90^\\\\circ) = 0$$)."
  },
  {
    "front": "What is the formula for Kinetic Energy?",
    "back": "$$K = \\\\frac{1}{2}mv^2$$"
  },
  {
    "front": "What is the formula for Elastic Potential Energy stored in an ideal spring?",
    "back": "$$U_s = \\\\frac{1}{2}kx^2$$"
  },
  {
    "front": "State the Law of Conservation of Energy for an isolated system.",
    "back": "Total mechanical energy ($$E = K + U$$) remains constant if only conservative forces act."
  },
  {
    "front": "What is Power?",
    "back": "The rate at which work is done or energy is transferred: $$P = \\\\frac{W}{t} = \\\\frac{dE}{dt}$$"
  },
  {
    "front": "How can Power be expressed in terms of Force and velocity?",
    "back": "$$P = \\\\vec{F} \\\\cdot \\\\vec{v}$$"
  },
  {
    "front": "The Work-Energy Theorem states that the net work done on an object equals what?",
    "back": "Its change in Kinetic Energy: $$W_{net} = \\\\Delta K$$"
  }
]
`,

  'Circular Motion & Gravitation': `
# Circular Motion & Gravitation: The Celestial Clockwork

When an object moves in a perfect circle at a constant speed, its velocity vector is constantly changing direction. Because velocity is changing, the object is absolutely accelerating, even though it never speeds up!
This acceleration always points perfectly inwards toward the center of the circle, and is called **Centripetal Acceleration**:
$$ a_c = \\frac{v^2}{r} $$

## 2. Centripetal Force
By Newton's Second Law ($\\Sigma F = ma$), there must be a net force pulling the object inward to cause this acceleration. 
$$ F_c = m\\frac{v^2}{r} $$
"Centripetal Force" is not a magical new force; it is simply a label for whichever physical force (like string tension, gravity, or friction) is currently keeping the object locked in its circular path.

## 3. Newton's Law of Universal Gravitation
In 1687, Isaac Newton published the profound realization that the force causing an apple to fall to the earth is the *exact same force* keeping the Moon locked in its orbit. 
Every mass in the universe attracts every other mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
$$ F_g = G \\frac{m_1 m_2}{r^2} $$
*(Where $G = 6.674 \\times 10^{-11} \\text{ N m}^2/\\text{kg}^2$ is the universal gravitational constant).*

## 4. Gravitational Fields and Orbits
The gravitational field strength $g$ (which is $9.81$ m/s$^2$ on Earth's surface) is calculated by dividing out the test mass:
$$ g = \\frac{F_g}{m} = \\frac{GM}{r^2} $$
For a satellite to orbit a planet, the gravitational pull provides the exact centripetal force required to keep it in a circle. The satellite is technically in a state of endless free-fall, but it is moving sideways so fast that the Earth curves away beneath it just as fast as it falls!

## 5. Kepler's Laws of Planetary Motion
Before Newton, Johannes Kepler used observational data from Tycho Brahe to formulate three empirical laws:
1. **The Law of Ellipses**: Planets orbit the Sun in ellipses, with the Sun at one focus.
2. **The Law of Equal Areas**: A line drawn from a planet to the Sun sweeps out equal areas in equal time intervals. (Planets whip around faster when they are closer to the Sun).
3. **The Law of Harmonies**: The square of the orbital period is proportional to the cube of the orbital radius.

## Derivation of Centripetal Acceleration
How do we prove $a_c = v^2/r$ for a circle"

**Step 1:** Define the position vector.
Imagine an object moving in a circle of radius $R$ at a constant angular speed $\\omega$. Its position vector in the $x-y$ plane is:
$$ \\vec{r}(t) = \\langle R\\cos(\\omega t), R\\sin(\\omega t) \\rangle $$

**Step 2:** Find the velocity vector by differentiating.
Take the derivative with respect to time $t$. By the chain rule, $\\frac{d}{dt} \\cos(\\omega t) = -\\omega \\sin(\\omega t)$.
$$ \\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\langle -R\\omega\\sin(\\omega t), R\\omega\\cos(\\omega t) \\rangle $$
*(Notice that the dot product $\\vec{r} \\cdot \\vec{v} = 0$, proving velocity is always perfectly tangent to the circle!)*

**Step 3:** Find the acceleration vector by differentiating again.
$$ \\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\langle -R\\omega^2\\cos(\\omega t), -R\\omega^2\\sin(\\omega t) \\rangle $$

**Step 4:** Factor out the $-\\omega^2$.
$$ \\vec{a}(t) = -\\omega^2 \\langle R\\cos(\\omega t), R\\sin(\\omega t) \\rangle $$
$$ \\vec{a}(t) = -\\omega^2 \\vec{r}(t) $$
The negative sign proves that acceleration always points in the exact opposite direction of position (i.e., towards the center!).

**Step 5:** Find the magnitude of acceleration.
$|\\vec{a}| = \\omega^2 |\\vec{r}| = \\omega^2 R$.
Since the linear speed $v = \\omega R$, we can substitute $\\omega = \\frac{v}{R}$:
$$ a = \\left(\\frac{v}{R}\\right)^2 R = \\frac{v^2}{R} $$
Q.E.D.

## Derivation of Kepler's Third Law
How did Newton rigorously prove Kepler's empirical Third Law using Gravity"

**Step 1:** Set up the orbit equations.
Assume a planet of mass $m$ is in a perfectly circular orbit of radius $r$ around a massive star of mass $M$.
The gravitational force $F_g$ provides the centripetal force $F_c$.
$$ F_g = F_c $$
$$ G\\frac{Mm}{r^2} = m\\frac{v^2}{r} $$

**Step 2:** Simplify the equation.
The mass of the orbiting planet $m$ cancels out entirely (this is why heavy satellites and light satellites orbit at the exact same speed!). Multiply both sides by $r$:
$$ \\frac{GM}{r} = v^2 $$

**Step 3:** Introduce the orbital period $T$.
The speed $v$ of the planet is the distance of one full orbit (circumference $= 2\\pi r$) divided by the time it takes (Period $= T$).
$$ v = \\frac{2\\pi r}{T} $$

**Step 4:** Substitute $v$ into the equation.
$$ \\frac{GM}{r} = \\left( \\frac{2\\pi r}{T} \\right)^2 $$
$$ \\frac{GM}{r} = \\frac{4\\pi^2 r^2}{T^2} $$

**Step 5:** Rearrange to isolate $T^2$.
Cross-multiply to get:
$$ T^2 = \\left( \\frac{4\\pi^2}{GM} \\right) r^3 $$
Since $4$, $\\pi^2$, $G$, and $M$ are all constant numbers, this proves that $T^2 \\propto r^3$.
Q.E.D. Newton proved mathematically what Kepler observed empirically through telescopes!


`,


  'Rotational Mechanics': `
# Rotational Mechanics: The Physics of Spinning

## 1. The Rotational Analogy
Everything you learned in linear kinematics and dynamics has an exact, beautiful mathematical twin in the world of rotation!
* Position ($x$) $\\to$ Angle ($\\theta$)
* Velocity ($v$) $\\to$ Angular Velocity ($\\omega$)
* Acceleration ($a$) $\\to$ Angular Acceleration ($\\alpha$)
* Mass ($m$) $\\to$ Moment of Inertia ($I$)
* Force ($F$) $\\to$ Torque ($\\tau$)
* Momentum ($p$) $\\to$ Angular Momentum ($L$)

## 2. Moment of Inertia ($I$)
Mass measures how hard it is to push an object. **Moment of Inertia** measures how hard it is to *spin* an object.
Crucially, $I$ depends not just on how much mass an object has, but *where* that mass is located relative to the axis of rotation. 
Mass further away from the axis is exponentially harder to spin.
For a discrete point mass: $I = mr^2$.
For a continuous object, it is the integral: $I = \\int r^2 \\, dm$.

## 3. Torque ($\\tau$)
Torque is a twisting force that causes angular acceleration.
$$ \\vec{\\tau} = \\vec{r} \\times \\vec{F} $$
Magnitude: $\\tau = rF \\sin\\theta$.
To maximize torque (like using a wrench to untighten a bolt), you want to apply the force as far away from the pivot as possible ($r$), and perfectly perpendicular to the wrench ($\\theta = 90^\\circ$).

## 4. Newton's Second Law for Rotation
Just as $F = ma$, the rotational equivalent is:
$$ \\Sigma\\tau = I\\alpha $$
If you apply a net torque to a wheel, it will undergo angular acceleration. A heavier wheel (larger $I$) will accelerate slower.

## 5. Angular Momentum ($L$)
Angular momentum is the quantity of rotation.
$$ \\vec{L} = I\\vec{\\omega} = \\vec{r} \\times \\vec{p} $$
**Conservation of Angular Momentum:** If there is zero net external torque on a system, its total angular momentum is perfectly conserved. 
This is why an ice skater spins blindingly fast when they pull their arms in! By pulling mass closer to the axis, their Moment of Inertia ($I$) drops. To keep $L$ constant, their angular velocity ($\\omega$) must drastically increase!

## Derivation of the Moment of Inertia for a Uniform Rod
Prove that the moment of inertia of a uniform rod of mass $M$ and length $L$, spinning exactly around its center, is $I = \\frac{1}{12}ML^2$.

**Step 1:** The Integral Definition.
$$ I = \\int r^2 \\, dm $$

**Step 2:** Relate mass to position.
Assume the rod is uniform, meaning its linear mass density $\\lambda$ is constant.
$$ \\lambda = \\frac{M}{L} $$
Therefore, a microscopic slice of the rod with width $dx$ has mass $dm$:
$$ dm = \\lambda \\, dx = \\left(\\frac{M}{L}\\right) dx $$

**Step 3:** Set up the integral.
Let the center of the rod be $x = 0$. The rod spans from $x = -L/2$ to $x = +L/2$.
Substitute $r = x$ and $dm$.
$$ I = \\int_{-L/2}^{L/2} x^2 \\left(\\frac{M}{L}\\right) dx $$

**Step 4:** Evaluate the integral.
Pull the constants out.
$$ I = \\frac{M}{L} \\left[ \\frac{x^3}{3} \\right]_{-L/2}^{L/2} $$

**Step 5:** Plug in the limits.
$$ I = \\frac{M}{3L} \\left( \\left(\\frac{L}{2}\\right)^3 - \\left(-\\frac{L}{2}\\right)^3 \\right) $$
$$ I = \\frac{M}{3L} \\left( \\frac{L^3}{8} - \\left(-\\frac{L^3}{8}\\right) \\right) $$
$$ I = \\frac{M}{3L} \\left( \\frac{2L^3}{8} \\right) = \\frac{M}{3L} \\left( \\frac{L^3}{4} \\right) $$

**Step 6:** Simplify.
$$ I = \\frac{ML^3}{12L} = \\frac{1}{12}ML^2 $$
Q.E.D.

## Derivation of Rotational Kinetic Energy
Prove that the kinetic energy of a purely rotating object is $K_{rot} = \\frac{1}{2}I\\omega^2$.

**Step 1:** Consider a rigid body as a collection of $N$ tiny point masses $m_i$.
Each point mass is distance $r_i$ from the axis of rotation, and is moving with a linear speed $v_i$.

**Step 2:** Sum the standard kinetic energy of all particles.
$$ K_{total} = \\sum_{i=1}^N \\frac{1}{2} m_i v_i^2 $$

**Step 3:** Convert linear velocity to angular velocity.
Because the object is rigid, every single particle has the *exact same* angular velocity $\\omega$. 
We know $v_i = r_i \\omega$.
$$ K_{total} = \\sum_{i=1}^N \\frac{1}{2} m_i (r_i \\omega)^2 $$
$$ K_{total} = \\sum_{i=1}^N \\frac{1}{2} m_i r_i^2 \\omega^2 $$

**Step 4:** Factor out the constants.
Both $\\frac{1}{2}$ and $\\omega^2$ are constant for the entire object.
$$ K_{total} = \\frac{1}{2} \\left( \\sum_{i=1}^N m_i r_i^2 \\right) \\omega^2 $$

**Step 5:** Identify the Moment of Inertia.
The term in the parenthesis is the exact definition of the total Moment of Inertia $I$.
$$ K_{rot} = \\frac{1}{2}I\\omega^2 $$
Q.E.D.


`,


  'Waves & Oscillations': `
# Waves & Oscillations: The Rhythm of Nature

## 1. Simple Harmonic Motion (SHM)
Whenever a restoring force is directly proportional to displacement ($F = -kx$), the object will undergo Simple Harmonic Motion. This applies to masses on springs, swinging pendulums, and even atoms vibrating in a crystal lattice.
The motion follows a sinusoidal wave:
$$ x(t) = A \\cos(\\omega t + \\phi) $$
Where $A$ is amplitude, $\\omega$ is angular frequency, and $\\phi$ is the phase shift.

## 2. The Wave Equation
A wave is a disturbance that transfers energy through space without permanently transferring matter. 
The 1D Wave Equation is a second-order partial differential equation that perfectly describes any wave (sound, water, or string):
$$ \\frac{\\partial^2 y}{\\partial t^2} = v^2 \\frac{\\partial^2 y}{\\partial x^2} $$
The solution is a traveling wave: $y(x,t) = A \\sin(kx - \\omega t)$.

## 3. Sound and the Doppler Effect
Sound is a longitudinal wave (compressions and rarefactions of air molecules).
When a fire engine speeds towards you, the sound waves bunch up, resulting in a higher pitch (frequency). As it passes and speeds away, the waves stretch out, resulting in a lower pitch.
$$ f' = f_0 \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right) $$

## Derivation of the Pendulum Period
Prove that the period of a simple pendulum of length $L$ is exactly $T = 2\\pi\\sqrt{L/g}$ for small angles.

**Step 1:** Identify the restoring force.
When a pendulum is displaced by an angle $\\theta$, gravity pulls it straight down. The component of gravity pulling it tangentially *back* towards the center is:
$$ F = -mg \\sin\\theta $$

**Step 2:** Apply Newton's Second Law.
$$ -mg \\sin\\theta = ma $$
Since acceleration along the arc $s$ is $a = d^2s/dt^2$ and $s = L\\theta$, we know $a = L \\frac{d^2\\theta}{dt^2}$.
$$ -mg \\sin\\theta = m L \\frac{d^2\\theta}{dt^2} $$

**Step 3:** The Small Angle Approximation.
For small angles (less than 15 degrees), $\\sin\\theta \\approx \\theta$ (in radians).
$$ -g \\theta = L \\frac{d^2\\theta}{dt^2} $$
$$ \\frac{d^2\\theta}{dt^2} = -\\left(\\frac{g}{L}\\right) \\theta $$

**Step 4:** Recognize SHM.
This is the defining differential equation of Simple Harmonic Motion ($a = -\\omega^2 x$).
Therefore, the angular frequency is:
$$ \\omega^2 = \\frac{g}{L} \\implies \\omega = \\sqrt{\\frac{g}{L}} $$

**Step 5:** Convert to Period.
Since $\\omega = 2\\pi/T$:
$$ \\frac{2\\pi}{T} = \\sqrt{\\frac{g}{L}} $$
$$ T = 2\\pi \\sqrt{\\frac{L}{g}} $$
Q.E.D. The mass of the bob completely cancels out! A heavy pendulum and a light pendulum swing at the exact same rate.


`,


  // Fluid Mechanics & Thermodynamics are in Engineering metadata

  'Electrostatics': `
# Electrostatics: The Invisible Force

## 1. Electric Charge ($q$)
Charge is a fundamental, quantized property of matter. It comes in two flavors: positive (protons) and negative (electrons).
* Like charges repel.
* Opposite charges attract.
Charge is always conserved; it can only be transferred, never created or destroyed.

## 2. Coulomb's Law
The electrostatic force between two point charges ($q_1, q_2$) is directly proportional to their product and inversely proportional to the square of the distance ($r$) between them.
$$ \\vec{F}_E = k_e \\frac{q_1 q_2}{r^2} \\hat{r} $$
Where $k_e = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99 \\times 10^9 \\text{ N m}^2/\\text{C}^2$.
Notice how this formula is a mirror image of Newton's Law of Gravity! However, the electric force between two electrons is roughly $10^{42}$ times stronger than their gravitational attraction.

## 3. The Electric Field ($\\vec{E}$)
A charge doesn't just "reach out" across empty space to push another charge. It creates an invisible "Electric Field" everywhere in space. When a second charge enters this field, the field pushes it.
$$ \\vec{E} = \\frac{\\vec{F}}{q} = k_e \\frac{Q}{r^2} \\hat{r} $$
Electric field lines originate on positive charges and terminate on negative charges.

## 4. Gauss's Law (Maxwell's First Equation)
Gauss's Law is a more profound, topological formulation of Coulomb's Law. It states that the total "Electric Flux" (the number of field lines) piercing outward through any closed imaginary 3D surface is directly proportional to the total charge enclosed *inside* that surface.
$$ \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0} $$
This law is incredibly powerful for finding the electric field of highly symmetric objects (like spheres, infinite lines, or flat sheets) without doing horrific calculus.

## 5. Electric Potential ($V$) and Voltage
Just as lifting a rock creates gravitational potential energy, pushing a positive charge toward another positive charge stores **Electric Potential Energy** ($U_E$).
Electric Potential ($V$), commonly known as Voltage, is simply the potential energy *per unit charge*.
$$ V = \\frac{U_E}{q} $$
$$ V = k_e \\frac{Q}{r} $$
The electric field is exactly the negative spatial gradient (slope) of the voltage: $\\vec{E} = -\\nabla V$.

## Derivation of the Electric Field of an Infinite Line Charge
Use Gauss's Law to derive the electric field at a distance $r$ from an infinitely long straight wire with uniform linear charge density $\\lambda$ (Coulombs/meter).

**Step 1:** Choose a Gaussian Surface.
Because the wire has cylindrical symmetry, we choose a closed imaginary cylinder of radius $r$ and length $L$, perfectly centered around the wire.

**Step 2:** Analyze the Electric Flux ($\\Phi_E$).
The electric field lines point radially outward from the wire.
* The flux through the two flat end-caps of the cylinder is $0$, because the field lines run parallel to the caps ($\\vec{E} \\cdot d\\vec{A} = 0$).
* The flux through the curved barrel is $E \\times Area$, because $\\vec{E}$ is perfectly constant and perpendicular to the surface everywhere.
$$ \\oint \\vec{E} \\cdot d\\vec{A} = E(2\\pi r L) $$

**Step 3:** Calculate the enclosed charge ($Q_{enc}$).
The amount of wire trapped inside our imaginary cylinder has length $L$.
$$ Q_{enc} = \\lambda L $$

**Step 4:** Apply Gauss's Law.
$$ \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0} $$
$$ E(2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0} $$

**Step 5:** Solve for $E$.
The arbitrary length $L$ beautifully cancels out!
$$ E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r} $$
Q.E.D. The field drops off as $1/r$, not $1/r^2$!

## Derivation of the Capacitance of a Parallel-Plate Capacitor
Prove that the capacitance of two parallel metal plates of area $A$ separated by a distance $d$ is $C = \\frac{\\varepsilon_0 A}{d}$.

**Step 1:** The Electric Field of one plate.
Using Gauss's Law on an infinite 2D sheet of charge with surface density $\\sigma = Q/A$, the field is $E = \\frac{\\sigma}{2\\varepsilon_0}$.

**Step 2:** The total Electric Field between two plates.
One plate is $+Q$ and the other is $-Q$. Their fields point in the exact same direction between the plates and add together!
$$ E = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{A\\varepsilon_0} $$

**Step 3:** Find the Voltage (Potential Difference).
In a uniform electric field, the voltage difference is simply the field times the distance.
$$ V = E \\cdot d $$
$$ V = \\left( \\frac{Q}{A\\varepsilon_0} \\right) d $$

**Step 4:** Define Capacitance.
Capacitance is defined as the amount of charge stored per volt of potential difference ($C = Q/V$).
Substitute our equation for $V$:
$$ C = \\frac{Q}{\\left( \\frac{Q d}{A\\varepsilon_0} \\right)} $$

**Step 5:** Simplify.
The $Q$'s cancel completely!
$$ C = \\frac{\\varepsilon_0 A}{d} $$
Q.E.D. This proves that a capacitor's ability to store charge depends *purely on its geometric physical shape*, not on the battery hooked up to it!


`,


  'Magnetism & Electromagnetism': `
# Magnetism & Electromagnetism: The Twin Forces

## 1. The Source of Magnetism
Unlike electric charges (which can exist as isolated protons or electrons), magnetic poles *always* come in pairs (North and South). There is no such thing as a "magnetic monopole" in classical physics.
Fundamentally, all magnetic fields are generated by **moving electric charges**. A permanent magnet is magnetic because the electrons inside its atoms are orbiting and spinning in aligned directions, creating billions of microscopic current loops!

## 2. Magnetic Fields ($\\vec{B}$)
Magnetic field lines point from North to South outside a magnet. 
When a moving charge enters a magnetic field, it experiences a force that is *perpendicular* to both its velocity and the magnetic field. This is calculated using the cross product:
$$ \\vec{F}_B = q(\\vec{v} \\times \\vec{B}) $$
Because the force is always perpendicular to velocity, a magnetic field can *never do work* on a moving charge; it can only change its direction, causing it to spiral or orbit.

## 3. Ampère's Law
Just as Gauss's Law links charge to Electric Fields, Ampère's Law links electric current ($I$) to Magnetic Fields. It states that the magnetic field integrated around a closed loop is proportional to the total current passing through that loop.
$$ \\oint \\vec{B} \\cdot d\\vec{s} = \\mu_0 I_{enc} $$
(Where $\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A is the permeability of free space).

## 4. Faraday's Law of Induction
In 1831, Michael Faraday made a world-changing discovery: if moving charges create magnetic fields, then *changing magnetic fields can create electric currents*.
The induced Electromotive Force ($\\mathcal{E}$) in a loop of wire is exactly equal to the negative rate of change of magnetic flux ($\\Phi_B$) through the loop.
$$ \\mathcal{E} = -\\frac{d\\Phi_B}{dt} $$
This single equation is the foundation of the modern electrical grid. Every power plant on Earth (except solar) generates electricity by physically spinning giant magnets inside coils of wire!

## 5. Lenz's Law
Notice the negative sign in Faraday's Law" That is Lenz's Law. It dictates that nature hates change. The induced current will always flow in a direction that creates its *own* magnetic field to oppose the original change in flux.

## Derivation of the Magnetic Field of a Solenoid
Use Ampère's Law to prove that the magnetic field inside an infinitely long, tightly wound solenoid (a coil of wire) is $B = \\mu_0 n I$, where $n$ is the number of turns per unit length.

**Step 1:** Define the Amperian Loop.
Imagine a rectangular loop of length $L$ and width $w$. We place it so that one long side is exactly inside the solenoid (parallel to the central axis), and the other long side is far outside the solenoid.

**Step 2:** Evaluate the line integral $\\oint \\vec{B} \\cdot d\\vec{s}$ for all four sides.
* Side 1 (Inside, length $L$): The magnetic field is perfectly parallel to the path, so $\\int \\vec{B} \\cdot d\\vec{s} = B L$.
* Sides 2 & 4 (Perpendicular sides): The magnetic field is perpendicular to the path, so the dot product is exactly $0$.
* Side 3 (Far outside): The magnetic field outside an ideal infinite solenoid is $0$, so the integral is $0$.
Therefore:
$$ \\oint \\vec{B} \\cdot d\\vec{s} = B L $$

**Step 3:** Calculate the enclosed current $I_{enc}$.
The rectangular loop slices through the coils of the solenoid. If the solenoid has $n$ turns per unit length, then our loop of length $L$ encloses $N = nL$ turns of wire.
Since each turn carries current $I$, the total current passing through the rectangle is:
$$ I_{enc} = (nL)I $$

**Step 4:** Apply Ampère's Law.
$$ \\oint \\vec{B} \\cdot d\\vec{s} = \\mu_0 I_{enc} $$
$$ B L = \\mu_0 (nL) I $$

**Step 5:** Solve for $B$.
The arbitrary length $L$ perfectly cancels out!
$$ B = \\mu_0 n I $$
Q.E.D. The magnetic field inside an ideal solenoid is perfectly uniform and depends only on the wire density and current.


`,


  'Optics': `
# Optics: The Physics of Light

## 1. The Nature of Light
For centuries, physicists argued over whether light was a wave or a particle. Thanks to Quantum Mechanics, we now know it exhibits wave-particle duality. In classical optics, however, we treat light strictly as an Electromagnetic Wave—an oscillating electric and magnetic field traveling through a vacuum at exactly $c = 299,792,458$ m/s.

## 2. Reflection and Refraction
When light strikes a boundary between two different transparent mediums (like air and water), two things happen:
* **Reflection**: The light bounces off. The angle of incidence exactly equals the angle of reflection ($\\theta_i = \\theta_r$).
* **Refraction**: The light bends as it enters the new medium because it slows down. The speed of light in a material is defined by its Index of Refraction ($n = c/v$). Water has $n = 1.33$, meaning light travels 33% slower in water than in a vacuum!

## 3. Snell's Law
The exact angle of bending during refraction is governed by Snell's Law:
$$ n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 $$

## 4. Total Internal Reflection
If light tries to exit a slow medium (like water, $n_1=1.33$) into a fast medium (like air, $n_2=1.0$), it bends *away* from the normal. At a specific "critical angle", it bends so far that it mathematically cannot exit the water at all, and acts as a perfect mirror!
$$ \\theta_{crit} = \\arcsin\\left(\\frac{n_2}{n_1}\\right) $$
This phenomenon is how Fiber Optic cables transmit internet data across the ocean without losing any light!

## 5. Diffraction and Interference
Because light is a wave, it bends around sharp corners (Diffraction). When two light waves overlap, their peaks and troughs add together (Interference). If peak meets peak, you get bright Constructive Interference. If peak meets trough, they annihilate each other in dark Destructive Interference. This creates the beautiful rainbow patterns seen on soap bubbles and oil slicks.

## Derivation of Snell's Law (Fermat's Principle)
Fermat's Principle of Least Time states that light traveling between two points will always take the path that requires the absolute minimum amount of time. Let's use calculus to prove Snell's Law from this profound principle!

**Step 1:** The Geometric Setup.
Imagine light traveling from Point A (in medium 1 with speed $v_1$) to Point B (in medium 2 with speed $v_2$). The horizontal boundary between the mediums is the x-axis. 
Point A is at $(0, y_1)$ and Point B is at $(L, -y_2)$.
The light hits the boundary at some unknown horizontal position $x$.

**Step 2:** Define the total time $T$.
Time is Distance divided by Speed. By the Pythagorean theorem, the distances traveled in each medium are:
$D_1 = \\sqrt{x^2 + y_1^2}$
$D_2 = \\sqrt{(L-x)^2 + y_2^2}$
Total Time:
$$ T(x) = \\frac{\\sqrt{x^2 + y_1^2}}{v_1} + \\frac{\\sqrt{(L-x)^2 + y_2^2}}{v_2} $$

**Step 3:** Minimize the time using Calculus.
To find the exact path $x$ that minimizes time, we take the derivative of $T(x)$ and set it perfectly to $0$.
$$ \\frac{dT}{dx} = \\frac{1}{v_1} \\cdot \\frac{x}{\\sqrt{x^2 + y_1^2}} + \\frac{1}{v_2} \\cdot \\frac{-(L-x)}{\\sqrt{(L-x)^2 + y_2^2}} = 0 $$

**Step 4:** Relate the geometry back to angles.
Look at the right triangles formed by the light path!
The hypotenuse of the first triangle is $D_1$. The opposite side to the angle of incidence $\\theta_1$ is exactly $x$.
Therefore, $\\sin\\theta_1 = \\frac{x}{D_1} = \\frac{x}{\\sqrt{x^2 + y_1^2}}$.
Likewise, $\\sin\\theta_2 = \\frac{L-x}{D_2} = \\frac{L-x}{\\sqrt{(L-x)^2 + y_2^2}}$.

**Step 5:** Substitute the angles into the derivative equation.
$$ \\frac{1}{v_1} \\sin\\theta_1 - \\frac{1}{v_2} \\sin\\theta_2 = 0 $$
$$ \\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2} $$

**Step 6:** Convert to Index of Refraction ($n$).
We know $n = c/v$, which implies $v = c/n$. Substitute this for both velocities:
$$ \\frac{\\sin\\theta_1}{(c/n_1)} = \\frac{\\sin\\theta_2}{(c/n_2)} $$
Multiply both sides by $c$:
$$ n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 $$
Q.E.D. The universe naturally computes the absolute fastest path, which mathematically produces Snell's Law!


`,


  'Modern Physics & Relativity': `
# Modern Physics & Relativity: The Fabric of Reality

## 1. The Postulates of Special Relativity
In 1905, Albert Einstein completely shattered our Newtonian understanding of the universe with two simple postulates:
1. The laws of physics are identical in all inertial (non-accelerating) reference frames.
2. The speed of light in a vacuum ($c$) is exactly the same for ALL observers, regardless of how fast the observer or the light source is moving.

## 2. Time Dilation
If you shine a flashlight forward while driving a car at $0.9c$, Newton would say the light travels at $1.9c$. Einstein said the light still travels at exactly $1.0c$.
To make this mathematically possible, time itself must slow down for the moving car!
$$ \\Delta t' = \\gamma \\Delta t $$
Where $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ is the Lorentz Factor.
If you travel close to the speed of light, you will age slower than your twin on Earth. This is not an optical illusion; it is a fundamental property of spacetime.

## 3. Length Contraction
Not only does time stretch, but physical space compresses. If a spaceship flies past Earth at $0.9c$, observers on Earth will measure the spaceship as physically shorter than its true length!
$$ L' = \\frac{L}{\\gamma} $$

## 4. Mass-Energy Equivalence
Einstein's most famous equation proved that mass is not a conserved quantity. Mass is simply a highly concentrated form of energy. They are two sides of the exact same coin.
$$ E = mc^2 $$
Because $c^2$ is an astronomically huge number ($9 \\times 10^{16}$), a single paperclip contains enough latent energy to level a city—if you could completely convert its mass into pure energy.

## 5. The Photoelectric Effect
While Einstein is famous for relativity, he actually won his Nobel Prize for proving light is a particle. He showed that shining ultraviolet light on a metal plate ejects electrons, but shining intense red light does nothing. He realized light comes in quantized packets called **Photons**. A red photon simply doesn't have enough energy to knock an electron loose, no matter how many you fire!
Photon Energy: $E = hf$ (where $h$ is Planck's constant and $f$ is frequency).

## Derivation of Time Dilation
How do we prove that time slows down for moving objects using only middle-school algebra and the speed of light"

**Step 1:** The Light Clock Setup.
Imagine a "Light Clock" consisting of two mirrors facing each other, separated by a distance $L$. A single photon bounces up and down between them. One "tick" of the clock is the time it takes for the photon to bounce from the bottom, to the top, and back to the bottom.

**Step 2:** The clock at rest ($\\Delta t_0$).
To an observer standing next to the stationary clock, the light travels a distance of $2L$. Since light travels at speed $c$, the time for one tick is:
$$ \\Delta t_0 = \\frac{2L}{c} $$

**Step 3:** The clock in motion ($\\Delta t$).
Now, imagine the clock is placed on a train moving to the right at velocity $v$. To an observer standing on the ground, the photon doesn't just travel up and down. Because the mirrors are moving to the right, the photon must travel in a diagonal zig-zag path!

**Step 4:** The Pythagorean Geometry.
Let's analyze half a tick (from bottom to top).
* The vertical distance is still $L$.
* The horizontal distance the train moved is velocity times time: $v (\\frac{\\Delta t}{2})$.
* The diagonal distance the light traveled is $c (\\frac{\\Delta t}{2})$. (Crucially, Einstein's postulate says $c$ is constant!)
By the Pythagorean theorem:
$$ L^2 + \\left(v \\frac{\\Delta t}{2}\\right)^2 = \\left(c \\frac{\\Delta t}{2}\\right)^2 $$

**Step 5:** Solve for $\\Delta t$.
We want to find $\\Delta t$ in terms of our stationary time $\\Delta t_0$.
Multiply the entire equation by 4 to remove the fractions:
$$ 4L^2 + v^2 \\Delta t^2 = c^2 \\Delta t^2 $$
Group the $\\Delta t$ terms:
$$ 4L^2 = c^2 \\Delta t^2 - v^2 \\Delta t^2 $$
$$ 4L^2 = \\Delta t^2 (c^2 - v^2) $$
Isolate $\\Delta t^2$:
$$ \\Delta t^2 = \\frac{4L^2}{c^2 - v^2} $$

**Step 6:** Factor out $c^2$ in the denominator.
$$ \\Delta t^2 = \\frac{4L^2}{c^2 (1 - v^2/c^2)} $$
Take the square root of both sides:
$$ \\Delta t = \\frac{2L}{c} \\cdot \\frac{1}{\\sqrt{1 - v^2/c^2}} $$

**Step 7:** Substitute the stationary time.
Notice that the term $\\frac{2L}{c}$ is exactly equal to our stationary time $\\Delta t_0$!
$$ \\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}} $$
$$ \\Delta t = \\gamma \\Delta t_0 $$
Q.E.D. Because the denominator is less than 1, $\\Delta t$ is strictly larger than $\\Delta t_0$. The moving clock takes *longer* to tick. Time has mathematically dilated!


`,


  'Nuclear Physics': `
# Nuclear Physics: The Heart of the Atom

## 1. The Nucleus
The atom is almost entirely empty space. The nucleus at its center is 100,000 times smaller than the atom, yet contains 99.9% of its mass. It consists of positively charged Protons ($Z$) and neutral Neutrons ($N$). Together, they are called Nucleons.

## 2. The Strong Nuclear Force
Why doesn't the nucleus explode" You have dozens of positively charged protons packed impossibly close together, which should violently repel each other due to the Electrostatic force.
The nucleus is held together by the **Strong Nuclear Force**. It is 100 times stronger than electromagnetism, but it only operates at incredibly microscopic ranges (around $10^{-15}$ meters, or 1 femtometer). Neutrons act as the "glue" that provides extra strong force without adding any electrostatic repulsion!

## 3. Mass Defect and Binding Energy
If you put 2 individual protons and 2 individual neutrons on a scale, and then weigh an assembled Helium nucleus (which is made of the exact same 4 particles), the assembled nucleus actually weighs *less*!
This missing mass is called the **Mass Defect** ($\\Delta m$).
Where did the mass go" By $E=mc^2$, it was converted into pure **Binding Energy** to hold the nucleus tightly together. To break the nucleus apart, you must inject that exact amount of energy back in.

## 4. Radioactivity and Decay
If a nucleus is too large or has a poor ratio of neutrons to protons, the short-range Strong Force can no longer overcome the long-range Electrostatic repulsion. The nucleus becomes unstable and decays.
* **Alpha Decay ($\\alpha$)**: The nucleus spits out a helium nucleus (2 protons, 2 neutrons). Heavy, slow, and easily blocked by a sheet of paper.
* **Beta Decay ($\\beta$)**: A neutron literally transforms into a proton by spitting out a high-speed electron! Moderately penetrating.
* **Gamma Decay ($\\gamma$)**: The nucleus shifts into a lower energy state and releases a blinding flash of high-energy electromagnetic radiation (a photon). Highly penetrating and dangerous.

## 5. Fission and Fusion
* **Fission**: A massive, unstable nucleus (like Uranium-235) is struck by a neutron, causing it to violently split into two smaller nuclei, releasing immense energy and more neutrons (a chain reaction). This powers nuclear reactors and atomic bombs.
* **Fusion**: Two incredibly light nuclei (like Hydrogen) are smashed together with such intense heat and pressure that the Strong Force takes over, fusing them into a heavier element and releasing exponentially more energy than fission. This is what powers the Sun and hydrogen bombs!

## Derivation of the Radioactive Decay Law
Why does radioactive decay follow a perfectly exponential curve, $N(t) = N_0 e^{-\\lambda t}$" It is a direct result of probability!

**Step 1:** The fundamental premise of probability.
In a sample of radioactive material, every single unstable nucleus is entirely independent. The probability of any specific nucleus decaying in the next microscopic second is exactly constant.
Therefore, the total number of nuclei that decay per second (the rate of change, $dN/dt$) is strictly proportional to the total number of unstable nuclei $N$ currently remaining in the sample.
$$ \\frac{dN}{dt} = -\\lambda N $$
Where $\\lambda$ is the decay constant, representing the probability of decay per unit time. The negative sign ensures the population is decreasing.

**Step 2:** Separate the variables.
This is a first-order separable differential equation! Move $N$ to the left side and $dt$ to the right side.
$$ \\frac{1}{N} dN = -\\lambda \\, dt $$

**Step 3:** Integrate both sides over time.
We integrate from $t=0$ (where the initial population is $N_0$) to time $t$ (where the population is $N$).
$$ \\int_{N_0}^N \\frac{1}{N} \\, dN = \\int_0^t -\\lambda \\, dt $$

**Step 4:** Evaluate the integrals.
The integral of $1/N$ is the natural logarithm $\\ln(N)$.
$$ [\\ln(N)]_{N_0}^N = -\\lambda [t]_0^t $$
$$ \\ln(N) - \\ln(N_0) = -\\lambda t $$

**Step 5:** Use logarithm properties.
$$ \\ln\\left(\\frac{N}{N_0}\\right) = -\\lambda t $$

**Step 6:** Exponentiate both sides to isolate $N$.
To cancel the natural log, raise $e$ to the power of both sides.
$$ \\frac{N}{N_0} = e^{-\\lambda t} $$
$$ N(t) = N_0 e^{-\\lambda t} $$
Q.E.D. The exponential decay formula is perfectly derived from the simple probability that rate of decay depends on the amount of material remaining!

## Derivation of Half-Life ($T_{1/2}$)
Using the decay formula, calculate the exact formula for a substance's Half-Life (the time required for exactly 50% of the material to decay).

**Step 1:** Define the Half-Life condition.
At time $t = T_{1/2}$, the remaining population $N(t)$ is exactly half of the initial population, meaning $N = \\frac{1}{2}N_0$.

**Step 2:** Substitute this into the decay equation.
$$ \\frac{1}{2}N_0 = N_0 e^{-\\lambda T_{1/2}} $$

**Step 3:** Cancel $N_0$.
$$ \\frac{1}{2} = e^{-\\lambda T_{1/2}} $$

**Step 4:** Take the natural logarithm of both sides.
$$ \\ln\\left(\\frac{1}{2}\\right) = -\\lambda T_{1/2} $$

**Step 5:** Simplify the logarithm.
By log rules, $\\ln(1/2) = \\ln(1) - \\ln(2) = 0 - \\ln(2) = -\\ln(2)$.
$$ -\\ln(2) = -\\lambda T_{1/2} $$

**Step 6:** Isolate $T_{1/2}$.
The negative signs cancel.
$$ T_{1/2} = \\frac{\\ln(2)}{\\lambda} $$
Q.E.D. The half-life is a perfect constant depending only on the probability constant $\\lambda$, roughly equal to $0.693 / \\lambda$.


`,


};

