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
    "front": "How do you mathematically prove $$v_f^2 = v_i^2 + 2a\\Delta x$$?",
    "back": "By using the Chain Rule to rewrite acceleration: $$a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$$, and then integrating both sides with respect to position and velocity."
  }
]
`,

  // Foundation

  'Force & Newton\'s laws': `
# Force & Newton's Laws: The Engine of Dynamics

## 0. Before We Begin: What Is Dynamics?
Kinematics described *how* objects move. Dynamics asks *why* they move. The answer is always **forces**. This entire topic flows from three deceptively simple laws published by Isaac Newton in his *Philosophiae Naturalis Principia Mathematica* (1687) — arguably the most important scientific text in history.

---

## 1. What Is a Force?
A **force** is a push or a pull. Physically, it is a **vector** quantity with both:
- A **magnitude** — how strong the push/pull is, measured in **Newtons (N)**
- A **direction** — which way the push/pull acts

$$1 \text{ N} = 1 \text{ kg} \cdot \text{m/s}^2$$

### 1.1 Contact Forces vs. Field Forces

| Category | Description | Examples |
|---|---|---|
| **Contact Forces** | Require physical touching | Normal force, Friction, Tension, Applied force |
| **Field Forces** | Act at a distance with no touching | Gravity, Electromagnetism, Nuclear |

> **Everyday Example:** Sliding a book across a table — your hand applies a *contact* force forward; friction acts *contact* backward; Earth's gravity pulls *down* as a *field* force, no touching needed.

### 1.2 The Net Force
When multiple forces act simultaneously on one object, we find the **Net Force** ($\Sigma\vec{F}$) by vector addition — we cannot just add magnitudes:
$$\Sigma\vec{F} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + \ldots$$

**Example:** Push a box rightward with 50 N and leftward with 30 N.
$$\Sigma F = 50 - 30 = 20 \text{ N (rightward)}$$
The box behaves as if a single 20 N force acts on it to the right.

---

## 2. Newton's First Law — The Law of Inertia
> *"An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force."*

### 2.1 The Revolutionary Idea
Before Newton, Aristotle taught that objects need continuous force just to keep moving. This seemed intuitive — push a book and it stops when you stop. But Aristotle was ignoring **friction**. Newton realized that in the absence of all friction, an object would keep moving forever.

A space probe (Voyager 1) launched in 1977 is still coasting through interstellar space today with its engine off. Pure First Law behavior.

### 2.2 Inertia and Mass
**Inertia** is matter's resistance to changes in its motion. **Mass** ($m$, in kg) is its quantitative measure.

- A ping-pong ball: low mass, low inertia — easy to deflect.
- A freight train: enormous mass, enormous inertia — takes kilometers to stop.

**Mass ≠ Weight.** Mass is the same everywhere in the universe. Weight is the gravitational force on that mass, and changes depending on local gravity.

---

## 3. Newton's Second Law — $\Sigma\vec{F} = m\vec{a}$
> *"The acceleration of an object is directly proportional to the net force acting on it, and inversely proportional to its mass."*

$$\boxed{\Sigma\vec{F} = m\vec{a}}$$

- **Larger net force** → **greater acceleration** (direct proportion)
- **Larger mass** → **smaller acceleration** (inverse proportion)

### 3.1 The Momentum Form (More Fundamental)
Newton's original formulation used **momentum** ($\vec{p} = m\vec{v}$):
$$\Sigma\vec{F} = \frac{d\vec{p}}{dt}$$

When mass is constant, this simplifies to $F = ma$. But when mass changes (like a rocket), you **must** use the momentum form.

> **Rocket example:** As a rocket burns fuel, its mass decreases every second. Using $F = ma$ with a fixed $m$ gives the wrong answer. The momentum form $F = \frac{d\vec{p}}{dt}$ handles this correctly and leads to the Tsiolkovsky Rocket Equation.

### 3.2 Weight vs. Mass (Critical Distinction)
$$\vec{W} = m\vec{g}$$

| Property | Mass | Weight |
|---|---|---|
| What it measures | Inertia | Gravitational force |
| Unit | kg | N (Newtons) |
| Changes with location? | **No** — same everywhere | **Yes** — depends on local $g$ |

**Example:** A 70 kg astronaut:
- On Earth ($g = 9.81\ \text{m/s}^2$): Weight = $70 \times 9.81 = 686.7$ N
- On the Moon ($g = 1.62\ \text{m/s}^2$): Weight = $70 \times 1.62 = 113.4$ N
- In deep space (no gravity): Weight = **0 N** (but mass is still 70 kg!)

### 3.3 Worked Examples

**Example 1 — Find acceleration:**
A 5 kg block is pushed with a net force of 20 N. Find its acceleration.
$$a = \frac{\Sigma F}{m} = \frac{20}{5} = 4 \text{ m/s}^2$$

**Example 2 — Multiple forces:**
A 10 kg box on a frictionless table: 40 N rightward, 15 N leftward.
$$\Sigma F = 40 - 15 = 25 \text{ N} \implies a = \frac{25}{10} = 2.5 \text{ m/s}^2 \text{ (right)}$$

**Example 3 — Find mass:**
A car accelerates at $3\ \text{m/s}^2$ under a net force of 6000 N.
$$m = \frac{F}{a} = \frac{6000}{3} = 2000 \text{ kg}$$

---

## 4. Newton's Third Law — Action & Reaction
> *"For every action force, there is an equal and opposite reaction force."*

$$\vec{F}_{A \to B} = -\vec{F}_{B \to A}$$

### 4.1 Clearing Up the Biggest Misconception
**Q: If forces are equal and opposite, why does anything accelerate?**

**A:** Because the two forces **never act on the same object**. Action-reaction pairs act on *different* objects and therefore can never cancel.

> Push a wall with 100 N → wall pushes *you* with 100 N backward. The wall has one 100 N force on it (from you). You have one 100 N force on you (from wall). These are separate objects — no cancellation.

### 4.2 Real-World Action-Reaction Pairs

| Situation | Action | Reaction |
|---|---|---|
| Walking | Foot pushes ground backward | Ground pushes foot forward (this moves you!) |
| Firing a gun | Gun pushes bullet forward | Bullet pushes gun backward (recoil) |
| Rocket in space | Engine pushes gas backward | Gas pushes rocket forward |
| Gravity on you | Earth pulls you downward | You pull Earth upward with identical force |

> **Mind-bending:** You pull Earth toward you just as hard as Earth pulls you. Earth doesn't visibly move because $a = F/m$ — its mass ($5.97 \times 10^{24}$ kg) makes its acceleration utterly negligible.

---

## 5. Free Body Diagrams (FBDs)
An FBD is the most critical tool in dynamics. To draw one:
1. Represent the object as a simple dot or box.
2. Draw every external force acting **on** that object as a labeled arrow.
3. Choose a coordinate system (+x right, +y up is standard).

### 5.1 The Common Forces

**Weight ($W = mg$):** Always straight downward. Always.

**Normal Force ($N$):** Contact force from a surface. Always **perpendicular** (normal) to the surface.
- Standing on flat ground → $N$ points straight up.
- Standing on a ramp → $N$ points diagonally away from the ramp.
- Resting on a ceiling (imagine) → $N$ points straight down.

**Tension ($T$):** Pulling force through a string/rope/cable. Always **pulls** the object toward the rope — ropes can never push.

**Friction ($f$):** Always **parallel** to the surface, opposing (attempted) sliding motion.
- **Static friction** ($f_s \leq \mu_s N$): Prevents stationary object from starting to slide. Adjustable up to a maximum.
- **Kinetic friction** ($f_k = \mu_k N$): Acts on already-sliding objects. Fixed value. Always $\mu_k < \mu_s$.

---

## 6. Worked Problems — Step by Step

### 6.1 Horizontal Push with Friction
**Problem:** A 20 kg crate on a floor ($\mu_k = 0.3$). You push horizontally with 80 N. Find acceleration.

**Step 1 — Vertical ($y$) direction:** No vertical acceleration.
$$N - mg = 0 \implies N = mg = 20 \times 9.81 = 196.2 \text{ N}$$

**Step 2 — Calculate kinetic friction:**
$$f_k = \mu_k N = 0.3 \times 196.2 = 58.86 \text{ N}$$

**Step 3 — Horizontal ($x$) direction:**
$$\Sigma F_x = ma \implies 80 - 58.86 = 20a$$
$$21.14 = 20a \implies a = 1.06 \text{ m/s}^2$$

---

### 6.2 The Inclined Plane (Ramp)
**Problem:** A 5 kg block slides **down** a frictionless ramp at $\theta = 30°$. Find its acceleration.

**Key technique:** Tilt your coordinate axes so x runs *along* the slope and y runs *perpendicular* to it. Then only gravity needs decomposing.

**Step 1 — Decompose weight into tilted axes:**
- Along slope: $W_{\parallel} = mg\sin\theta = 5 \times 9.81 \times \sin 30° = 24.53$ N (down slope)
- Perpendicular: $W_{\perp} = mg\cos\theta = 5 \times 9.81 \times \cos 30° = 42.48$ N (into slope)

**Step 2 — y-direction (no acceleration into/out of slope):**
$$N = mg\cos\theta = 42.48 \text{ N}$$

**Step 3 — x-direction (along the slope):**
$$mg\sin\theta = ma \implies a = g\sin\theta = 9.81 \times 0.5 = 4.91 \text{ m/s}^2$$

The mass cancels! All blocks (heavy or light) accelerate identically on a frictionless ramp of the same angle. This is Galileo's famous result.

**With friction ($\mu_k = 0.2$):**
$$a = g\sin\theta - \mu_k g\cos\theta = g(\sin\theta - \mu_k\cos\theta)$$
$$= 9.81(0.5 - 0.2 \times 0.866) = 9.81(0.5 - 0.173) = 9.81 \times 0.327 = 3.21 \text{ m/s}^2$$

---

### 6.3 The Atwood Machine (Two Hanging Masses)
**Problem:** Two masses connected by a string over a frictionless pulley: $m_1 = 3$ kg, $m_2 = 5$ kg. Released from rest. Find acceleration $a$ and string tension $T$.

Since the string is inextensible, both masses have the same magnitude of acceleration. $m_2$ (heavier) goes down; $m_1$ goes up.

**Step 1 — Write Newton's 2nd Law for each mass separately.**
Define downward as positive for $m_2$, upward as positive for $m_1$:

For $m_1$ (going up): $\quad T - m_1 g = m_1 a \quad \ldots (i)$

For $m_2$ (going down): $\quad m_2 g - T = m_2 a \quad \ldots (ii)$

**Step 2 — Eliminate $T$ by adding the two equations:**
$$(T - m_1 g) + (m_2 g - T) = m_1 a + m_2 a$$
$$m_2 g - m_1 g = (m_1 + m_2)a$$
$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 3) \times 9.81}{3 + 5} = \frac{19.62}{8} = 2.45 \text{ m/s}^2$$

**Step 3 — Find tension from equation (i):**
$$T = m_1(g + a) = 3 \times (9.81 + 2.45) = 3 \times 12.26 = 36.8 \text{ N}$$

**Sanity check:** $T$ must be *less* than $m_2 g = 5 \times 9.81 = 49.05$ N (otherwise $m_2$ wouldn't accelerate down). ✓ $36.8 < 49.05$. And $T$ must be *greater* than $m_1 g = 3 \times 9.81 = 29.43$ N (otherwise $m_1$ wouldn't accelerate up). ✓ $36.8 > 29.43$. 

---

## 7. Derivation: Conservation of Momentum from Newton's Laws

**Setup:** Two objects A and B collide in space (isolated system — no external forces).

**Step 1:** Newton's 3rd Law:
$$\vec{F}_{A \to B} = -\vec{F}_{B \to A}$$

**Step 2:** Newton's 2nd Law (momentum form) for each object:
$$\vec{F}_{A \to B} = \frac{d\vec{p}_B}{dt}, \qquad \vec{F}_{B \to A} = \frac{d\vec{p}_A}{dt}$$

**Step 3:** Substitute into 3rd Law:
$$\frac{d\vec{p}_B}{dt} = -\frac{d\vec{p}_A}{dt}$$

**Step 4:** Rearrange:
$$\frac{d\vec{p}_A}{dt} + \frac{d\vec{p}_B}{dt} = 0 \implies \frac{d}{dt}(\vec{p}_A + \vec{p}_B) = 0$$

**Step 5:** A quantity whose time-derivative is zero is **constant**:
$$\vec{p}_{A,i} + \vec{p}_{B,i} = \vec{p}_{A,f} + \vec{p}_{B,f}$$

Total momentum before = Total momentum after. **Q.E.D.**

Conservation of Momentum is not an axiom — it is a proven consequence of Newton's 2nd and 3rd Laws.

---flashcards---
[
  {
    "front": "What two properties does every force have (as a vector)?",
    "back": "Magnitude (strength, measured in Newtons) and Direction."
  },
  {
    "front": "What is the difference between a contact force and a field force?",
    "back": "Contact forces require physical touching (friction, tension, normal force). Field forces act at a distance without touching (gravity, electromagnetism)."
  },
  {
    "front": "State Newton's First Law in one sentence.",
    "back": "An object keeps its current state of motion (rest or constant velocity) unless a net external force acts on it."
  },
  {
    "front": "What is inertia and how is it measured?",
    "back": "Inertia is matter's resistance to changes in its motion. It is quantified by mass (kg). More mass = more inertia = harder to accelerate."
  },
  {
    "front": "State Newton's Second Law in two forms.",
    "back": "Acceleration form: $$\\\\Sigma\\\\vec{F} = m\\\\vec{a}$$. Fundamental momentum form: $$\\\\Sigma\\\\vec{F} = \\\\frac{d\\\\vec{p}}{dt}$$"
  },
  {
    "front": "Why must you use $$F = \\\\frac{d\\\\vec{p}}{dt}$$ for a rocket instead of $$F = ma$$?",
    "back": "Because the rocket's mass constantly decreases as it burns and expels fuel. The simpler $$F=ma$$ assumes constant mass, which is incorrect for a rocket."
  },
  {
    "front": "What is the difference between mass and weight?",
    "back": "Mass (kg) measures inertia — same everywhere. Weight (N) is the gravitational force on that mass: $$W = mg$$. Weight depends on local $$g$$."
  },
  {
    "front": "What is the weight of a 70 kg person on the Moon where $$g_{moon} = 1.62 \\\\text{ m/s}^2$$?",
    "back": "$$W = mg = 70 \\\\times 1.62 = 113.4 \\\\text{ N}$$. Their mass is still 70 kg."
  },
  {
    "front": "State Newton's Third Law.",
    "back": "For every action force, there is an equal and opposite reaction force: $$\\\\vec{F}_{A \\\\to B} = -\\\\vec{F}_{B \\\\to A}$$"
  },
  {
    "front": "Why don't action-reaction force pairs cancel each other out?",
    "back": "They always act on DIFFERENT objects. Forces can only cancel if they act on the SAME object."
  },
  {
    "front": "What direction does the Normal Force always point?",
    "back": "Perpendicular (normal) to the surface — never parallel to it."
  },
  {
    "front": "What is the difference between static and kinetic friction?",
    "back": "Static friction ($$f_s \\\\leq \\\\mu_s N$$) prevents a stationary object from starting to slide. Kinetic friction ($$f_k = \\\\mu_k N$$) acts on already-sliding objects. Always $$\\\\mu_k < \\\\mu_s$$."
  },
  {
    "front": "On a frictionless ramp at angle $$\\\\theta$$, what is the acceleration of a sliding block?",
    "back": "$$a = g\\\\sin\\\\theta$$. Mass cancels — all blocks accelerate identically."
  },
  {
    "front": "What is the acceleration formula for an Atwood machine with masses $$m_1$$ and $$m_2$$?",
    "back": "$$a = \\\\frac{(m_2 - m_1)g}{m_1 + m_2}$$ where $$m_2 > m_1$$."
  },
  {
    "front": "Conservation of Momentum is derived from which Newton's Laws?",
    "back": "Newton's 3rd Law (action-reaction) combined with Newton's 2nd Law (force = rate of change of momentum)."
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

## 0. Why Energy?
After kinematics (where) and dynamics (why via forces), energy gives us a third — often simpler — lens on motion. Instead of tracking every force at every instant, we ask: *how much energy entered the system, and where did it go?* Energy is the most unifying concept across all of physics.

---

## 1. Work — The Transfer of Energy

### 1.1 The Definition
In everyday language "work" means effort. In physics it is precise: **work is the transfer of energy by a force acting through a displacement**. If nothing moves, no work is done — no matter how hard you push.

For a constant force $\vec{F}$ producing displacement $\vec{d}$:
$$W = \vec{F}\cdot\vec{d} = Fd\cos\theta$$

where $\theta$ is the angle between the force and displacement directions. Work is a **scalar** with unit **Joule (J)**: $1\text{ J} = 1\text{ N}\cdot\text{m}$.

### 1.2 The Angle Decides Everything

| Angle $\theta$ | $\cos\theta$ | Work Done | Meaning |
|---|---|---|---|
| $0°$ | $+1$ | $W = Fd$ (maximum) | Force perfectly aligned with motion |
| $90°$ | $0$ | $W = 0$ | Force perpendicular — zero energy transferred |
| $180°$ | $-1$ | $W = -Fd$ (minimum) | Force opposes motion — energy removed |

> **Classic example:** You carry a 20 kg box and walk 10 m horizontally. Your arms push 196 N **upward**; displacement is **horizontal**. Since $\theta = 90°$, $W = Fd\cos90° = 0$. You do **zero** mechanical work on the box — its KE and PE are unchanged. You feel tired (biological energy is burned), but no mechanical energy is transferred.

### 1.3 Work by Variable Forces
When force changes with position (e.g. a spring), you must integrate:
$$W = \int_{x_1}^{x_2} F(x)\,dx$$
This equals the **area under the Force-vs-Position graph**.

**Spring example:** Compress a spring ($k = 200\text{ N/m}$) by $0.10\text{ m}$. Hooke's Law gives $F(x) = kx$:
$$W = \int_0^{0.10} 200x\,dx = 200\left[\frac{x^2}{2}\right]_0^{0.10} = 200 \times 0.005 = 1\text{ J}$$
This is exactly why the elastic PE formula is $U_s = \frac{1}{2}kx^2$.

---

## 2. Kinetic Energy — Energy of Motion

$$\boxed{K = \frac{1}{2}mv^2}$$

KE depends on mass and the **square** of speed.

> **Speed-squared consequence:** Double your car speed from 30 to 60 mph and KE **quadruples**. At 90 mph it is **nine times** greater. This is the physics behind why high-speed collisions are exponentially more deadly.

### 2.1 The Work-Energy Theorem
$$W_{net} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

Net work done on an object equals its change in KE. This is the bridge between forces and energy.

**Example:** A 2 kg ball starts from rest. Net force 10 N over 5 m.
$$W = Fd = 50\text{ J} \implies 50 = \frac{1}{2}(2)v_f^2 \implies v_f = \sqrt{50} \approx 7.07\text{ m/s}$$

---

## 3. Potential Energy — Stored Energy

### 3.1 Gravitational PE (near Earth's surface)
$$U_g = mgh$$

Only **changes** in $U_g$ matter physically. The reference ($h=0$) is your choice.

> A 5 kg ball on a 1 m table: $U_g = 5\times9.81\times1 = 49.1\text{ J}$ (floor reference). Move reference to the tabletop: $U_g = 0$. Physics doesn't change — only $\Delta U_g$ when the ball falls is meaningful.

### 3.2 Elastic PE (Springs)
$$U_s = \frac{1}{2}kx^2$$

$k$ = spring constant (N/m — stiffness); $x$ = compression or extension from natural length.

**Example:** Spring with $k = 500\text{ N/m}$ stretched $x = 0.04\text{ m}$:
$$U_s = \frac{1}{2}(500)(0.04)^2 = 250 \times 0.0016 = 0.4\text{ J}$$

### 3.3 Conservative vs. Non-Conservative Forces

| Property | Conservative | Non-Conservative |
|---|---|---|
| Work depends on? | Start and end points only | Full path taken |
| Has potential energy? | Yes | No |
| Examples | Gravity, spring, electric | Friction, air drag |

Friction always converts mechanical energy into **heat** — it can never be recovered as PE.

---

## 4. Conservation of Mechanical Energy

When **only conservative forces** act:
$$\boxed{K_i + U_i = K_f + U_f}$$

Energy transforms between KE and PE — nothing leaks away.

### 4.1 Roller Coaster Drop (Frictionless)
**Problem:** An 800 kg coaster starts at rest at the top of a 30 m drop. Find speed at the bottom.

Set reference: bottom = $h=0$:
$$mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2\times9.81\times30} = \sqrt{588.6} \approx 24.3\text{ m/s}$$

Mass cancels — **all coasters reach the same speed regardless of mass!**

### 4.2 Spring Launches a Block
**Problem:** Spring ($k = 800\text{ N/m}$) compressed $x = 0.15\text{ m}$ releases a 0.5 kg block (frictionless). Find speed.

All spring PE converts to KE:
$$\frac{1}{2}kx^2 = \frac{1}{2}mv^2 \implies v = x\sqrt{\frac{k}{m}} = 0.15\sqrt{\frac{800}{0.5}} = 0.15\times40 = 6\text{ m/s}$$

### 4.3 With Friction — Modified Energy Equation
$$K_i + U_i = K_f + U_f + W_{friction}$$

where $W_{friction} = f_k \times d$ (energy dissipated as heat).

**Example:** 2 kg block slides 5 m down a ramp ($\theta=30°$, $\mu_k=0.2$), starting from rest.

- $h = 5\sin30° = 2.5\text{ m}$
- $N = mg\cos30° = 2\times9.81\times0.866 = 17.0\text{ N}$
- $f_k = 0.2\times17.0 = 3.4\text{ N}$, so $W_f = 3.4\times5 = 17\text{ J}$

$$2(9.81)(2.5) = \frac{1}{2}(2)v^2 + 17 \implies 49.05 - 17 = v^2 \implies v = \sqrt{32.05} \approx 5.66\text{ m/s}$$

---

## 5. Power — Rate of Energy Transfer
$$\boxed{P = \frac{W}{t} = \frac{dE}{dt}}$$

Unit: **Watt (W)** where $1\text{ W} = 1\text{ J/s}$.

| Device | Typical Power |
|---|---|
| LED light bulb | ~10 W |
| Human sprinting | ~800 W |
| Car engine | ~100 kW |
| Jet engine | ~50 MW |

Since $P = W/t = Fd/t$, we get: $P = Fv$

**Example 1:** Motor lifts 500 kg elevator 20 m in 10 s at constant speed.
$$P = \frac{mgh}{t} = \frac{500\times9.81\times20}{10} = 9810\text{ W} \approx 9.81\text{ kW}$$

**Example 2:** Car engine applies 2000 N forward force at 30 m/s.
$$P = Fv = 2000\times30 = 60\,000\text{ W} = 60\text{ kW}$$

---

## 6. Derivation: Proving $K = \frac{1}{2}mv^2$ from Newton's Laws

**Step 1:** Define work as an integral.
$$W_{net} = \int_{x_i}^{x_f} F_{net}\,dx$$

**Step 2:** Substitute Newton's Second Law ($F_{net} = ma$):
$$W_{net} = \int_{x_i}^{x_f} ma\,dx$$

**Step 3:** Chain Rule on acceleration. Since $a = \frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\frac{dv}{dx}$:
$$W_{net} = \int_{x_i}^{x_f} mv\frac{dv}{dx}\,dx$$

**Step 4:** The $dx$ terms cancel. Change limits to velocities:
$$W_{net} = \int_{v_i}^{v_f} mv\,dv$$

**Step 5:** Evaluate ($m$ constant):
$$W_{net} = m\left[\frac{v^2}{2}\right]_{v_i}^{v_f} = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

**Step 6:** Define $K \equiv \frac{1}{2}mv^2$:
$$W_{net} = \Delta K \quad \textbf{Q.E.D.}$$

Both the formula for KE and the Work-Energy Theorem fall out of the same derivation.

---flashcards---
[
  {
    "front": "What is the physics definition of Work?",
    "back": "Work is the transfer of energy by a force through a displacement: $$W = Fd\\\\cos\\\\theta$$"
  },
  {
    "front": "A 50 N force is applied at 60° to a 4 m displacement. Calculate the work done.",
    "back": "$$W = 50\\\\times4\\\\times\\\\cos60° = 200\\\\times0.5 = 100\\\\text{ J}$$"
  },
  {
    "front": "You carry a box horizontally across a room. How much work do you do on it?",
    "back": "Zero. Your upward lifting force is perpendicular to the horizontal displacement, so $$\\\\cos(90°) = 0$$."
  },
  {
    "front": "When must you integrate to find work?",
    "back": "When the force varies with position (e.g. a spring). Use $$W = \\\\int_{x_1}^{x_2} F(x)\\\\,dx$$."
  },
  {
    "front": "State the Work-Energy Theorem.",
    "back": "$$W_{net} = \\\\Delta K = \\\\frac{1}{2}mv_f^2 - \\\\frac{1}{2}mv_i^2$$"
  },
  {
    "front": "If a car's speed triples, what happens to its kinetic energy?",
    "back": "It increases by a factor of 9. KE scales with the square of speed: $$K = \\\\frac{1}{2}mv^2$$."
  },
  {
    "front": "What is elastic potential energy stored in a spring with constant $$k$$ compressed by $$x$$?",
    "back": "$$U_s = \\\\frac{1}{2}kx^2$$"
  },
  {
    "front": "What is the difference between a conservative and non-conservative force?",
    "back": "Conservative forces (gravity, springs) do path-independent work and store PE. Non-conservative forces (friction) convert energy to heat and depend on path length."
  },
  {
    "front": "State conservation of mechanical energy for a frictionless system.",
    "back": "$$K_i + U_i = K_f + U_f$$. Total mechanical energy is constant."
  },
  {
    "front": "A roller coaster drops frictionlessly from rest at height $$h$$. What is its speed at the bottom?",
    "back": "$$v = \\\\sqrt{2gh}$$. Mass cancels — speed is independent of the coaster's weight."
  },
  {
    "front": "How do you modify the energy equation when friction acts?",
    "back": "$$K_i + U_i = K_f + U_f + W_{friction}$$ where $$W_{friction} = f_k \\\\times d$$."
  },
  {
    "front": "What is Power and what are its units?",
    "back": "Rate of energy transfer: $$P = W/t = dE/dt$$. Units: Watts (W), where $$1\\\\text{ W} = 1\\\\text{ J/s}$$."
  },
  {
    "front": "How do you express Power in terms of Force and velocity?",
    "back": "$$P = Fv$$. Derived from $$P = W/t = Fd/t = F\\\\cdot v$$."
  },
  {
    "front": "How is $$K = \\\\frac{1}{2}mv^2$$ derived?",
    "back": "Integrate $$W = \\\\int F\\\\,dx$$, substitute $$F=ma$$, use chain rule $$a = v\\\\frac{dv}{dx}$$, integrate $$\\\\int mv\\\\,dv = \\\\frac{1}{2}mv_f^2 - \\\\frac{1}{2}mv_i^2$$. Define this as $$\\\\Delta K$$."
  }
]
`

  'Circular Motion & Gravitation': `
# Circular Motion & Gravitation: The Celestial Clockwork

## 0. Introduction
Why does the Moon stay in orbit? Why do you feel pressed outward on a roundabout? Both phenomena come from the same physics: **circular motion** and **gravitation**. Understanding these ideas takes you from a car cornering on a wet road all the way to calculating satellite orbits.

---

## 1. Uniform Circular Motion

An object moving in a circle at **constant speed** is still accelerating — because its velocity direction constantly changes. Velocity is a vector, so any change (even in direction alone) is acceleration.

### 1.1 Centripetal Acceleration
The acceleration always points **toward the centre** of the circle (centripetal = "centre-seeking"):
$$a_c = \frac{v^2}{r}$$

where $v$ is the linear speed and $r$ is the radius. The direction is always inward — never tangential.

### 1.2 Period and Frequency
- **Period** $T$: time for one full revolution (seconds)
- **Frequency** $f$: revolutions per second (Hz); $f = 1/T$
- **Angular velocity** $\omega$: radians per second; $\omega = 2\pi f = 2\pi/T$

Linear speed relates to angular velocity: $v = \omega r$

**Example:** A car goes around a roundabout of radius 20 m in 8 seconds. Find $v$, $\omega$, and $a_c$.
$$v = \frac{2\pi r}{T} = \frac{2\pi\times20}{8} = 15.7\text{ m/s}$$
$$\omega = \frac{2\pi}{T} = \frac{2\pi}{8} = 0.785\text{ rad/s}$$
$$a_c = \frac{v^2}{r} = \frac{(15.7)^2}{20} = \frac{246.5}{20} = 12.3\text{ m/s}^2$$

---

## 2. Centripetal Force
Newton's 2nd Law: a net inward force is required to sustain circular motion:
$$F_c = m\frac{v^2}{r} = m\omega^2 r$$

**Centripetal force is not a new type of force.** It is simply the label for whichever physical force (gravity, tension, friction, normal force) is currently providing the inward acceleration.

| Situation | Force providing centripetal acceleration |
|---|---|
| Ball on a string | String tension $T$ |
| Car cornering on flat road | Static friction |
| Satellite orbiting Earth | Gravity |
| Roller coaster at the top of a loop | Weight minus normal force |

### 2.1 Worked Example — Car on a Flat Bend
**Problem:** A 1200 kg car goes around a flat bend of radius 50 m at 20 m/s. What is the minimum friction coefficient to prevent skidding?

Friction provides centripetal force:
$$f_s = m\frac{v^2}{r} = 1200\times\frac{400}{50} = 1200\times8 = 9600\text{ N}$$

Maximum static friction: $f_s = \mu_s mg$, so:
$$\mu_s = \frac{v^2}{rg} = \frac{400}{50\times9.81} = \frac{400}{490.5} \approx 0.816$$

The road needs $\mu_s \geq 0.816$ or the car skids.

### 2.2 Worked Example — Roller Coaster Loop (Top)
**Problem:** A 60 kg rider is at the **top** of a vertical loop of radius 8 m. The car moves at 12 m/s. Find the normal force on the rider.

At the top, both weight ($mg$) and normal force ($N$) point **downward** (toward the centre):
$$mg + N = m\frac{v^2}{r}$$
$$N = m\frac{v^2}{r} - mg = m\left(\frac{v^2}{r} - g\right) = 60\left(\frac{144}{8} - 9.81\right) = 60(18 - 9.81) = 60\times8.19 = 491\text{ N}$$

The rider still feels pressed into the seat ($N > 0$). If the car slowed below $v_{min} = \sqrt{rg} = \sqrt{8\times9.81} = 8.85\text{ m/s}$, $N$ would go negative — meaning the track would need to pull the rider, which it cannot do (no seatbelt), and the rider would fall.

---

## 3. Newton's Law of Universal Gravitation
In 1687, Newton unified terrestrial and celestial mechanics with one equation:

$$\boxed{F_g = G\frac{m_1 m_2}{r^2}}$$

- $G = 6.674\times10^{-11}\text{ N m}^2/\text{kg}^2$ — the universal gravitational constant
- $r$ = distance between the **centres** of the two masses
- Force is attractive, along the line joining the two centres

> **Newton's insight:** The same force that pulls an apple to the ground is what keeps the Moon in orbit. Before Newton, these were thought to be completely different phenomena.

### 3.1 Gravitational Field Strength
The gravitational field $g$ at distance $r$ from a mass $M$:
$$g = \frac{GM}{r^2}$$

On Earth's surface ($M_E = 5.97\times10^{24}\text{ kg}$, $R_E = 6.371\times10^6\text{ m}$):
$$g = \frac{6.674\times10^{-11}\times5.97\times10^{24}}{(6.371\times10^6)^2} = 9.81\text{ m/s}^2 \checkmark$$

---

## 4. Orbital Motion
A satellite orbits because gravity provides exactly the centripetal force needed:
$$G\frac{Mm}{r^2} = m\frac{v^2}{r}$$

The satellite mass $m$ cancels:
$$v_{orbit} = \sqrt{\frac{GM}{r}}$$

The satellite is in a state of **perpetual freefall** — it falls toward Earth, but moves sideways so fast that Earth curves away beneath it at the same rate.

### 4.1 Orbital Speed Example
**Problem:** Calculate the orbital speed of the International Space Station (ISS), which orbits at $r = 6.77\times10^6\text{ m}$ from Earth's centre.

$$v = \sqrt{\frac{GM_E}{r}} = \sqrt{\frac{6.674\times10^{-11}\times5.97\times10^{24}}{6.77\times10^6}} = \sqrt{\frac{3.984\times10^{14}}{6.77\times10^6}} = \sqrt{5.886\times10^7} \approx 7672\text{ m/s}$$

That is about $7.67\text{ km/s}$ — the ISS circles Earth every 92 minutes.

---

## 5. Kepler's Three Laws of Planetary Motion

Kepler discovered these empirically from Tycho Brahe's observations (before Newton's laws were known):

1. **Law of Ellipses:** Planets orbit the Sun in ellipses, with the Sun at one focus.
2. **Law of Equal Areas:** A line from the Sun to a planet sweeps equal areas in equal times. (Planets move faster when closer to the Sun.)
3. **Law of Harmonies:** $T^2 \propto r^3$ — the square of the orbital period is proportional to the cube of the semi-major axis.

---

## 6. Derivation: Centripetal Acceleration $a_c = v^2/r$

**Step 1:** Write position on a circle of radius $R$ at angular speed $\omega$:
$$\vec{r}(t) = R\cos(\omega t)\,\hat{x} + R\sin(\omega t)\,\hat{y}$$

**Step 2:** Differentiate to get velocity:
$$\vec{v}(t) = -R\omega\sin(\omega t)\,\hat{x} + R\omega\cos(\omega t)\,\hat{y}$$

Note: $|\vec{v}| = R\omega = v$, and $\vec{r}\cdot\vec{v} = 0$ — velocity is always perpendicular to position (tangent to the circle). ✓

**Step 3:** Differentiate again to get acceleration:
$$\vec{a}(t) = -R\omega^2\cos(\omega t)\,\hat{x} - R\omega^2\sin(\omega t)\,\hat{y} = -\omega^2\vec{r}(t)$$

The negative sign proves acceleration always points **opposite to position** — i.e., toward the centre.

**Step 4:** Find the magnitude:
$$|\vec{a}| = \omega^2 R$$

Since $v = \omega R$, substitute $\omega = v/R$:
$$a_c = \left(\frac{v}{R}\right)^2 R = \frac{v^2}{R} \quad \textbf{Q.E.D.}$$

---

## 7. Derivation: Kepler's Third Law from Newton's Law of Gravitation

**Setup:** Planet mass $m$ in a circular orbit of radius $r$ around a star of mass $M$.

**Step 1:** Gravity provides centripetal force:
$$G\frac{Mm}{r^2} = m\frac{v^2}{r}$$

**Step 2:** Cancel $m$ and one $r$:
$$\frac{GM}{r} = v^2$$

**Step 3:** Express $v$ in terms of period $T$ (circumference ÷ time):
$$v = \frac{2\pi r}{T}$$

**Step 4:** Substitute:
$$\frac{GM}{r} = \frac{4\pi^2 r^2}{T^2}$$

**Step 5:** Rearrange:
$$T^2 = \frac{4\pi^2}{GM}\,r^3$$

Since $4\pi^2$, $G$, and $M$ are all constants, $T^2 \propto r^3$. **Q.E.D.** Newton mathematically proved what Kepler observed empirically.

---flashcards---
[
  {
    "front": "What is centripetal acceleration and which direction does it always point?",
    "back": "$$a_c = v^2/r$$. It always points toward the centre of the circle (inward)."
  },
  {
    "front": "What provides centripetal force for a car cornering on a flat road?",
    "back": "Static friction between the tyres and the road."
  },
  {
    "front": "What provides centripetal force for a satellite orbiting Earth?",
    "back": "Gravity."
  },
  {
    "front": "What is the minimum speed at the top of a vertical loop of radius $$r$$?",
    "back": "$$v_{min} = \\\\sqrt{rg}$$. Below this speed the normal force would go negative (impossible without a restraint)."
  },
  {
    "front": "State Newton's Law of Universal Gravitation.",
    "back": "$$F_g = G\\\\frac{m_1 m_2}{r^2}$$ where $$G = 6.674\\\\times10^{-11}\\\\text{ N m}^2/\\\\text{kg}^2$$."
  },
  {
    "front": "What is the gravitational field strength $$g$$ at distance $$r$$ from a planet of mass $$M$$?",
    "back": "$$g = \\\\frac{GM}{r^2}$$"
  },
  {
    "front": "What is the orbital speed of a satellite at radius $$r$$ from a planet of mass $$M$$?",
    "back": "$$v = \\\\sqrt{\\\\frac{GM}{r}}$$. Note: the satellite's own mass cancels."
  },
  {
    "front": "State Kepler's Third Law.",
    "back": "$$T^2 \\\\propto r^3$$. The square of the orbital period is proportional to the cube of the orbital radius."
  },
  {
    "front": "Derive Kepler's Third Law in one sentence.",
    "back": "Set gravity equal to centripetal force, cancel the satellite mass, substitute $$v = 2\\\\pi r/T$$, and rearrange to get $$T^2 = \\\\frac{4\\\\pi^2}{GM}r^3$$."
  },
  {
    "front": "How is $$a_c = v^2/r$$ derived?",
    "back": "Write position as $$\\\\vec{r}(t) = R\\\\cos(\\\\omega t)\\\\hat{x} + R\\\\sin(\\\\omega t)\\\\hat{y}$$, differentiate twice to get $$\\\\vec{a} = -\\\\omega^2\\\\vec{r}$$, so $$|a| = \\\\omega^2 R = v^2/R$$."
  },
  {
    "front": "A car rounds a flat bend of radius $$r$$ at speed $$v$$. What minimum friction coefficient is needed?",
    "back": "$$\\\\mu_s \\\\geq \\\\frac{v^2}{rg}$$"
  }
]
`


  'Rotational Mechanics': `
# Rotational Mechanics: The Physics of Spinning Objects

## 0. Introduction
Everything you learned in linear mechanics has a direct rotational analogue. Force becomes **torque**, mass becomes **moment of inertia**, and $F=ma$ becomes $\tau = I\alpha$. Understanding rotational mechanics lets you analyse everything from spinning tops and flywheels to the rotation of planets and the motion of a gymnast tucking in mid-air.

---

## 1. Angular Quantities

| Linear | Symbol | Rotational | Symbol |
|---|---|---|---|
| Position | $x$ | Angle | $\theta$ (rad) |
| Velocity | $v$ | Angular velocity | $\omega = d\theta/dt$ (rad/s) |
| Acceleration | $a$ | Angular acceleration | $\alpha = d\omega/dt$ (rad/s²) |
| Mass | $m$ | Moment of inertia | $I$ (kg·m²) |
| Force | $F$ | Torque | $\tau$ (N·m) |
| Momentum | $p = mv$ | Angular momentum | $L = I\omega$ (kg·m²/s) |
| KE | $\frac{1}{2}mv^2$ | Rotational KE | $\frac{1}{2}I\omega^2$ |

**Relationship between linear and angular quantities** (for a point at radius $r$):
$$v = \omega r, \qquad a_t = \alpha r, \qquad a_c = \omega^2 r$$

---

## 2. Torque — Rotational Force

Torque is the rotational effect of a force. It depends on the force magnitude, the distance from the pivot, and the angle:
$$\tau = rF\sin\phi = \vec{r}\times\vec{F}$$

where $\phi$ is the angle between the position vector $\vec{r}$ and force vector $\vec{F}$.

> **Intuition:** A long wrench makes it easier to undo a bolt than a short one — you apply the same force but at a greater radius, producing more torque. Door handles are placed far from the hinge for the same reason.

**Example:** A 30 N force is applied perpendicular ($\phi=90°$) to a 0.4 m wrench.
$$\tau = rF\sin90° = 0.4\times30\times1 = 12\text{ N·m}$$

---

## 3. Moment of Inertia — Rotational Inertia

The moment of inertia $I$ is the rotational equivalent of mass. It measures resistance to angular acceleration. Crucially, it depends not just on the total mass but on **how that mass is distributed** relative to the rotation axis. Mass farther from the axis contributes much more.

$$I = \sum_i m_i r_i^2 \quad \text{(discrete)} \qquad I = \int r^2\,dm \quad \text{(continuous)}$$

**Common moments of inertia:**

| Object | Axis | $I$ |
|---|---|---|
| Point mass | Distance $r$ from axis | $mr^2$ |
| Solid sphere | Through centre | $\frac{2}{5}mr^2$ |
| Hollow sphere | Through centre | $\frac{2}{3}mr^2$ |
| Solid cylinder / disk | Through central axis | $\frac{1}{2}mr^2$ |
| Thin hollow cylinder / hoop | Through central axis | $mr^2$ |
| Thin rod | Through centre | $\frac{1}{12}mL^2$ |
| Thin rod | Through end | $\frac{1}{3}mL^2$ |

> **Why does it matter?** A solid cylinder and a hollow hoop of the same mass and radius will roll down a ramp at different speeds. The hoop (all mass at the rim, $I = mr^2$) has more rotational inertia than the solid cylinder ($I = \frac{1}{2}mr^2$) and rolls slower.

### 3.1 Parallel Axis Theorem
If you know $I_{cm}$ (moment of inertia about the centre of mass), the moment of inertia about any parallel axis a distance $d$ away is:
$$I = I_{cm} + md^2$$

**Example:** A thin rod (mass $m$, length $L$) about its end:
$$I_{end} = I_{cm} + m\left(\frac{L}{2}\right)^2 = \frac{1}{12}mL^2 + \frac{1}{4}mL^2 = \frac{1}{3}mL^2 \checkmark$$

---

## 4. Newton's Second Law for Rotation

$$\boxed{\tau_{net} = I\alpha}$$

This is the direct rotational analogue of $F = ma$.

**Example:** A solid disk ($m = 2\text{ kg}$, $r = 0.5\text{ m}$) has a net torque of 3 N·m applied. Find angular acceleration.
$$I = \frac{1}{2}mr^2 = \frac{1}{2}(2)(0.5)^2 = 0.25\text{ kg·m}^2$$
$$\alpha = \frac{\tau}{I} = \frac{3}{0.25} = 12\text{ rad/s}^2$$

---

## 5. Rotational Kinetic Energy

A rotating object has kinetic energy due to its rotation:
$$K_{rot} = \frac{1}{2}I\omega^2$$

An object that **rolls without slipping** has both translational and rotational KE:
$$K_{total} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

Since $v = \omega r$ for rolling without slipping:
$$K_{total} = \frac{1}{2}mv^2 + \frac{1}{2}I\frac{v^2}{r^2} = \frac{1}{2}mv^2\left(1 + \frac{I}{mr^2}\right)$$

### 5.1 Rolling Race Down a Ramp
**Problem:** A solid cylinder and a hollow hoop (both mass $m$, radius $r$) roll from rest down a frictionless ramp of height $h$. Which wins?

Apply energy conservation for each:
$$mgh = \frac{1}{2}mv^2\left(1 + \frac{I}{mr^2}\right) \implies v = \sqrt{\frac{2gh}{1 + I/mr^2}}$$

- **Solid cylinder** ($I = \frac{1}{2}mr^2$): $v = \sqrt{\frac{2gh}{1 + 1/2}} = \sqrt{\frac{4gh}{3}}$
- **Hollow hoop** ($I = mr^2$): $v = \sqrt{\frac{2gh}{1 + 1}} = \sqrt{gh}$

Since $\sqrt{4gh/3} > \sqrt{gh}$, the **solid cylinder always wins**, regardless of mass or radius. The object with less rotational inertia relative to its mass rolls faster.

---

## 6. Angular Momentum

$$\boxed{L = I\omega}$$

### 6.1 Conservation of Angular Momentum
In an isolated system (no net external torque), angular momentum is conserved:
$$L_i = L_f \implies I_i\omega_i = I_f\omega_f$$

> **Figure skater:** A spinning skater pulls their arms inward, reducing $I$ (mass moves closer to the axis). Since $L = I\omega$ is conserved, $\omega$ must increase — the skater spins faster. Let out the arms: $I$ increases, $\omega$ decreases.

**Example:** A skater with $I_i = 4\text{ kg·m}^2$ spins at $\omega_i = 2\text{ rad/s}$. She pulls in her arms to $I_f = 1\text{ kg·m}^2$. Find $\omega_f$.
$$I_i\omega_i = I_f\omega_f \implies 4\times2 = 1\times\omega_f \implies \omega_f = 8\text{ rad/s}$$

---

## 7. Derivation: Rotational KE from First Principles

Consider a rigid body rotating at angular velocity $\omega$. Each tiny piece of mass $m_i$ at radius $r_i$ moves at linear speed $v_i = \omega r_i$.

Total KE:
$$K = \sum_i \frac{1}{2}m_i v_i^2 = \sum_i \frac{1}{2}m_i(\omega r_i)^2 = \frac{1}{2}\omega^2\sum_i m_i r_i^2$$

Since $I = \sum_i m_i r_i^2$ by definition:
$$\boxed{K_{rot} = \frac{1}{2}I\omega^2} \quad \textbf{Q.E.D.}$$

The rotational KE formula is not a guess — it follows directly from summing the KE of every infinitesimal particle in the body.

---flashcards---
[
  {
    "front": "What is torque and its formula?",
    "back": "Torque is the rotational effect of a force: $$\\\\tau = rF\\\\sin\\\\phi$$ where $$\\\\phi$$ is the angle between the force and the lever arm."
  },
  {
    "front": "What is the rotational analogue of Newton's Second Law?",
    "back": "$$\\\\tau_{net} = I\\\\alpha$$ (Net torque = Moment of inertia × Angular acceleration)"
  },
  {
    "front": "What is the moment of inertia of a solid disk about its central axis?",
    "back": "$$I = \\\\frac{1}{2}mr^2$$"
  },
  {
    "front": "What is the moment of inertia of a hollow hoop about its central axis?",
    "back": "$$I = mr^2$$ (all mass at radius $$r$$)"
  },
  {
    "front": "State the Parallel Axis Theorem.",
    "back": "$$I = I_{cm} + md^2$$ where $$d$$ is the distance between the parallel axis and the centre of mass axis."
  },
  {
    "front": "What is the total KE of an object rolling without slipping?",
    "back": "$$K = \\\\frac{1}{2}mv^2 + \\\\frac{1}{2}I\\\\omega^2$$ (translational + rotational)"
  },
  {
    "front": "A solid cylinder and a hollow hoop roll down the same ramp from rest. Which reaches the bottom first?",
    "back": "The solid cylinder, because it has less rotational inertia ($$I = \\\\frac{1}{2}mr^2$$) relative to its mass than the hoop ($$I = mr^2$$), so more PE converts to translational KE."
  },
  {
    "front": "State Conservation of Angular Momentum.",
    "back": "In an isolated system (no external torque): $$L = I\\\\omega = \\\\text{constant}$$, so $$I_i\\\\omega_i = I_f\\\\omega_f$$."
  },
  {
    "front": "A figure skater pulls in their arms. What happens to their spin rate and why?",
    "back": "Spin rate increases. Pulling in arms reduces $$I$$. Since $$L = I\\\\omega$$ is conserved, $$\\\\omega$$ must increase."
  },
  {
    "front": "What is the relationship between linear speed and angular velocity for a rolling object?",
    "back": "$$v = \\\\omega r$$ where $$r$$ is the radius of the rolling object."
  }
]
`


  'Waves & Oscillations': `
# Waves & Oscillations: The Physics of Periodic Motion

## 0. Introduction
Waves are one of the most pervasive phenomena in nature. Sound is a wave. Light is a wave. The electrons in your atoms behave as waves. Understanding oscillations and waves unlocks acoustics, optics, seismology, telecommunications, and quantum mechanics.

---

## 1. Simple Harmonic Motion (SHM)

### 1.1 What Is SHM?
**Simple Harmonic Motion** is any oscillation where the restoring force is directly proportional to the displacement from equilibrium and directed back toward it:
$$F_{restore} = -kx$$

The minus sign is critical — the force always opposes the displacement. This is **Hooke's Law** for springs, and it also governs the small-angle pendulum.

### 1.2 The SHM Equation of Motion
Applying Newton's Second Law ($F = ma$):
$$-kx = m\ddot{x} \implies \ddot{x} + \frac{k}{m}x = 0$$

Define $\omega_0^2 = k/m$ (natural angular frequency):
$$\ddot{x} + \omega_0^2 x = 0$$

This is the **SHM differential equation**. Its general solution is:
$$x(t) = A\cos(\omega_0 t + \phi)$$

where:
- $A$ = amplitude (maximum displacement from equilibrium)
- $\omega_0 = \sqrt{k/m}$ = natural angular frequency (rad/s)
- $\phi$ = phase constant (determined by initial conditions)
- $T = \frac{2\pi}{\omega_0}$ = period (seconds)
- $f = \frac{\omega_0}{2\pi}$ = frequency (Hz)

### 1.3 Velocity and Acceleration in SHM
Differentiating $x(t) = A\cos(\omega_0 t + \phi)$:
$$v(t) = -A\omega_0\sin(\omega_0 t + \phi)$$
$$a(t) = -A\omega_0^2\cos(\omega_0 t + \phi) = -\omega_0^2 x(t)$$

The acceleration is always proportional to — and opposite in direction from — the displacement. This is the hallmark of SHM.

**Maximum values:**
- Max displacement: $x_{max} = A$
- Max speed: $v_{max} = A\omega_0$ (at equilibrium, $x = 0$)
- Max acceleration: $a_{max} = A\omega_0^2$ (at turning points, $x = \pm A$)

---

## 2. The Spring-Mass System

A mass $m$ on a spring with constant $k$:
$$\omega_0 = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}$$

**Key insight:** Period depends on $m$ and $k$ only — not on amplitude. Swing it gently or hard, the period is the same (for ideal springs).

**Worked Example:** A 0.5 kg mass on a spring ($k = 200\text{ N/m}$) is pulled 0.1 m from rest and released. Find $T$, $f$, $\omega_0$, and $v_{max}$.

$$\omega_0 = \sqrt{\frac{200}{0.5}} = \sqrt{400} = 20\text{ rad/s}$$
$$T = \frac{2\pi}{\omega_0} = \frac{2\pi}{20} = 0.314\text{ s}$$
$$f = \frac{1}{T} = 3.18\text{ Hz}$$
$$v_{max} = A\omega_0 = 0.1\times20 = 2\text{ m/s}$$

---

## 3. The Simple Pendulum

For small angles ($\theta < 15°$), $\sin\theta \approx \theta$ (in radians), and the pendulum obeys SHM:
$$\ddot{\theta} + \frac{g}{L}\theta = 0 \implies \omega_0 = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$

**Remarkable result:** Period depends only on length $L$ and $g$ — not on the bob's mass or the amplitude (for small angles). This is why pendulums were used in clocks for centuries.

**Example:** A grandfather clock pendulum has $T = 2\text{ s}$ (one swing per second). Find $L$.
$$T = 2\pi\sqrt{\frac{L}{g}} \implies L = g\left(\frac{T}{2\pi}\right)^2 = 9.81\times\left(\frac{2}{2\pi}\right)^2 = 9.81\times0.1013 = 0.993\text{ m} \approx 1\text{ m}$$

---

## 4. Energy in SHM

In a frictionless oscillator, energy swaps back and forth between KE and PE:
$$E_{total} = \frac{1}{2}kA^2 = \text{constant}$$

At any displacement $x$:
$$U(x) = \frac{1}{2}kx^2, \quad K(x) = \frac{1}{2}k(A^2 - x^2)$$

- At the **turning points** ($x = \pm A$): all energy is PE, KE = 0
- At **equilibrium** ($x = 0$): all energy is KE, PE = 0

Speed at any position $x$:
$$v = \omega_0\sqrt{A^2 - x^2}$$

---

## 5. Wave Properties

A **wave** is a disturbance that transfers energy through a medium (or vacuum) without net transfer of matter.

### 5.1 Key Wave Quantities

| Quantity | Symbol | Unit | Meaning |
|---|---|---|---|
| Wavelength | $\lambda$ | m | Distance between two consecutive identical points |
| Frequency | $f$ | Hz | Oscillations per second |
| Period | $T$ | s | Time for one complete oscillation; $T = 1/f$ |
| Wave speed | $v$ | m/s | Speed of propagation |
| Amplitude | $A$ | m | Maximum displacement from equilibrium |

The fundamental wave equation:
$$\boxed{v = f\lambda}$$

### 5.2 Transverse vs. Longitudinal Waves

| Type | Particle motion | Examples |
|---|---|---|
| **Transverse** | Perpendicular to wave travel | Light (EM waves), waves on a string |
| **Longitudinal** | Parallel to wave travel (compressions & rarefactions) | Sound, seismic P-waves |

---

## 6. The Wave Equation

A sinusoidal wave travelling in the $+x$ direction:
$$y(x, t) = A\sin(kx - \omega t + \phi)$$

where:
- $k = \frac{2\pi}{\lambda}$ = wave number (rad/m)
- $\omega = 2\pi f$ = angular frequency (rad/s)
- Phase speed: $v = \frac{\omega}{k} = f\lambda$

**Example:** A wave has $A = 0.02\text{ m}$, $f = 50\text{ Hz}$, $v = 340\text{ m/s}$ (sound in air). Find $\lambda$ and $k$.
$$\lambda = \frac{v}{f} = \frac{340}{50} = 6.8\text{ m}$$
$$k = \frac{2\pi}{\lambda} = \frac{2\pi}{6.8} = 0.924\text{ rad/m}$$

---

## 7. Superposition and Interference

When two waves overlap, their displacements add algebraically (**principle of superposition**).

- **Constructive interference:** Waves in phase ($\Delta\phi = 0, 2\pi, 4\pi,\ldots$) — amplitudes add, intensity increases.
- **Destructive interference:** Waves out of phase ($\Delta\phi = \pi, 3\pi,\ldots$) — amplitudes cancel, intensity decreases (or goes to zero).

**Path difference rule:**
- Constructive: $\Delta d = n\lambda$ ($n = 0, 1, 2, \ldots$)
- Destructive: $\Delta d = (n + \frac{1}{2})\lambda$

---

## 8. Standing Waves

When two identical waves travel in opposite directions they form a **standing wave** with fixed **nodes** (zero amplitude) and **antinodes** (maximum amplitude).

For a string of length $L$ fixed at both ends, allowed frequencies (**harmonics**):
$$f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

- $n = 1$: fundamental (1st harmonic) — one half-wavelength fits: $\lambda_1 = 2L$
- $n = 2$: 2nd harmonic — one full wavelength: $\lambda_2 = L$

**Example:** A guitar string ($L = 0.65\text{ m}$, $v = 400\text{ m/s}$). Find the fundamental frequency.
$$f_1 = \frac{v}{2L} = \frac{400}{2\times0.65} = \frac{400}{1.3} \approx 308\text{ Hz}$$

---

## 9. The Doppler Effect

When a source of waves moves relative to an observer, the observed frequency differs from the emitted frequency:
$$f_{obs} = f_{source}\frac{v \pm v_{obs}}{v \mp v_{source}}$$

Use $+v_{obs}$ when observer moves toward source; $-v_{source}$ when source moves toward observer.

**Example:** An ambulance emitting 700 Hz approaches at 30 m/s. Speed of sound = 340 m/s.
$$f_{obs} = 700\times\frac{340}{340 - 30} = 700\times\frac{340}{310} = 700\times1.097 = 767.7\text{ Hz}$$

The siren sounds higher-pitched as it approaches.

---

## 10. Derivation: Period of a Simple Pendulum

**Step 1:** Write the tangential restoring force on the bob.
The bob (mass $m$, string $L$) displaced by angle $\theta$:
$$F_{tangential} = -mg\sin\theta$$

**Step 2:** Apply Newton's Second Law along the arc (arc length $s = L\theta$):
$$m\ddot{s} = -mg\sin\theta \implies mL\ddot{\theta} = -mg\sin\theta$$

**Step 3:** Simplify:
$$\ddot{\theta} = -\frac{g}{L}\sin\theta$$

**Step 4:** Small angle approximation ($\sin\theta \approx \theta$ for $\theta \ll 1$ rad):
$$\ddot{\theta} = -\frac{g}{L}\theta$$

This is the SHM equation with $\omega_0^2 = g/L$.

**Step 5:** Read off the period:
$$\omega_0 = \sqrt{\frac{g}{L}} \implies T = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{L}{g}} \quad \textbf{Q.E.D.}$$

---flashcards---
[
  {
    "front": "What condition defines Simple Harmonic Motion?",
    "back": "The restoring force is proportional to displacement and directed toward equilibrium: $$F = -kx$$."
  },
  {
    "front": "What is the general solution of the SHM equation?",
    "back": "$$x(t) = A\\\\cos(\\\\omega_0 t + \\\\phi)$$ where $$\\\\omega_0 = \\\\sqrt{k/m}$$."
  },
  {
    "front": "For a spring-mass system, what is the period $$T$$?",
    "back": "$$T = 2\\\\pi\\\\sqrt{m/k}$$. It depends only on mass and spring constant, NOT on amplitude."
  },
  {
    "front": "Where is speed maximum and zero in SHM?",
    "back": "Speed is **maximum** at the equilibrium position ($$x=0$$). Speed is **zero** at the turning points ($$x=\\\\pm A$$)."
  },
  {
    "front": "What is the total energy of a SHM oscillator with amplitude $$A$$?",
    "back": "$$E = \\\\frac{1}{2}kA^2$$. It is constant — energy oscillates between KE and PE."
  },
  {
    "front": "What is the period of a simple pendulum?",
    "back": "$$T = 2\\\\pi\\\\sqrt{L/g}$$. Depends only on length and $$g$$, NOT on mass or amplitude (for small angles)."
  },
  {
    "front": "State the fundamental wave equation.",
    "back": "$$v = f\\\\lambda$$ (wave speed = frequency × wavelength)"
  },
  {
    "front": "What is the difference between transverse and longitudinal waves?",
    "back": "Transverse: particle motion perpendicular to wave travel (light, string waves). Longitudinal: particle motion parallel to wave travel (sound)."
  },
  {
    "front": "What path difference gives constructive interference?",
    "back": "$$\\\\Delta d = n\\\\lambda$$ (integer multiples of wavelength)"
  },
  {
    "front": "What are nodes and antinodes in a standing wave?",
    "back": "Nodes: points of zero amplitude (destructive interference). Antinodes: points of maximum amplitude (constructive interference)."
  },
  {
    "front": "What are the allowed frequencies (harmonics) for a string of length $$L$$ fixed at both ends?",
    "back": "$$f_n = \\\\frac{nv}{2L}$$ for $$n = 1, 2, 3, \\\\ldots$$"
  },
  {
    "front": "State the Doppler effect formula.",
    "back": "$$f_{obs} = f_{source}\\\\frac{v \\\\pm v_{obs}}{v \\\\mp v_{source}}$$. Use $$+$$ when observer moves toward source."
  }
]
`


  // Fluid Mechanics & Thermodynamics are in Engineering metadata

  'Electrostatics': `
# Electrostatics: The Physics of Static Electric Charges

## 0. Introduction
Electrostatics is the study of electric charges at rest. It explains why you get a shock touching a door handle after walking on carpet, how lightning forms, how photocopiers work, and underpins all of electronics and chemistry. It is the first chapter of the vast subject of electromagnetism.

---

## 1. Electric Charge

Electric charge is a fundamental property of matter, like mass. It comes in two types:
- **Positive charge** (carried by protons)
- **Negative charge** (carried by electrons)

**The law of charges:**
- Like charges **repel**
- Unlike charges **attract**

The SI unit of charge is the **Coulomb (C)**. The elementary charge (charge of one proton or one electron) is:
$$e = 1.602\times10^{-19}\text{ C}$$

**Conservation of charge:** In any isolated system, the net electric charge is always conserved. Charges can be transferred between objects, but cannot be created or destroyed.

### 1.1 Conductors vs. Insulators
- **Conductors** (metals): electrons are free to move throughout the material. Charge redistributes itself.
- **Insulators** (rubber, glass, plastic): electrons are tightly bound. Charge stays where it is placed.

---

## 2. Coulomb's Law

The electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$:
$$\boxed{F = k_e\frac{|q_1||q_2|}{r^2}}$$

where $k_e = 8.99\times10^9\text{ N·m}^2/\text{C}^2$ is Coulomb's constant.

Equivalently, $k_e = \frac{1}{4\pi\epsilon_0}$ where $\epsilon_0 = 8.854\times10^{-12}\text{ C}^2/\text{N·m}^2$ is the **permittivity of free space**.

**Note the structure:** Coulomb's Law is identical in form to Newton's Law of Gravitation — both are inverse-square laws. The differences:
- Gravity is always attractive; electrostatic force can be attractive or repulsive.
- The electrostatic force is enormously stronger (by a factor of ~$10^{36}$ for electron-proton pairs).

**Worked Example:** Two charges $q_1 = +3\text{ μC}$ and $q_2 = -5\text{ μC}$ are separated by $r = 0.2\text{ m}$. Find the force.

$$F = k_e\frac{|q_1||q_2|}{r^2} = (8.99\times10^9)\frac{(3\times10^{-6})(5\times10^{-6})}{(0.2)^2}$$
$$= (8.99\times10^9)\frac{15\times10^{-12}}{0.04} = (8.99\times10^9)(3.75\times10^{-10}) = 3.37\text{ N}$$

The force is attractive (opposite charges).

---

## 3. The Electric Field

Rather than thinking of charges acting directly on each other at a distance ("action at a distance"), physicists use the concept of the **electric field**.

A charge $Q$ creates an electric field $\vec{E}$ throughout the space around it. Any other charge $q$ placed in this field experiences a force:
$$\vec{F} = q\vec{E}$$

The electric field of a point charge $Q$ at distance $r$:
$$\vec{E} = k_e\frac{Q}{r^2}\hat{r}$$

Units: **N/C** or equivalently **V/m**

**Sign convention:** By definition, $\vec{E}$ points away from positive charges and toward negative charges (in the direction a positive test charge would feel pushed).

### 3.1 Electric Field Lines
Field lines are visual tools:
- They originate on positive charges and terminate on negative charges
- The **density** of lines shows field strength (more lines = stronger field)
- Lines never cross each other
- Lines are always perpendicular to conductor surfaces

### 3.2 Uniform Electric Field
Between two large parallel plates of opposite charge, the field is uniform (same everywhere):
$$E = \frac{\sigma}{\epsilon_0} = \frac{V}{d}$$

where $\sigma$ is surface charge density, $V$ is the voltage across the plates, and $d$ is their separation.

---

## 4. Electric Potential Energy & Potential

### 4.1 Electric Potential Energy
Just as gravity stores gravitational PE when you lift a mass, the electric force stores electric PE when you move a charge against the field.

Work done moving charge $q$ from A to B:
$$W_{field} = -\Delta U_E = -(U_B - U_A)$$

For a charge $q$ at distance $r$ from a point charge $Q$:
$$U_E = k_e\frac{qQ}{r}$$

### 4.2 Electric Potential (Voltage)
The **electric potential** $V$ at a point is the electric PE per unit charge:
$$V = \frac{U_E}{q} = k_e\frac{Q}{r}$$

Unit: **Volt (V)** where $1\text{ V} = 1\text{ J/C}$

The **potential difference** (voltage) between two points:
$$\Delta V = V_B - V_A = -\int_A^B \vec{E}\cdot d\vec{l}$$

For a uniform field: $\Delta V = -Ed$ (where $d$ is displacement along field direction)

> **Key insight:** Voltage is to electric potential energy what height is to gravitational PE. Just as $\Delta U_{grav} = mg\Delta h$, we have $\Delta U_E = q\Delta V$.

### 4.3 The Electron-Volt (eV)
In atomic and particle physics, it is convenient to measure energy in **electron-volts**:
$$1\text{ eV} = 1.602\times10^{-19}\text{ J}$$

An electron accelerated through 1 V gains 1 eV of kinetic energy.

---

## 5. Capacitors

A **capacitor** stores electric charge (and thus energy) on two conducting plates separated by an insulator (dielectric).

$$\boxed{Q = CV}$$

where $C$ is the **capacitance** (unit: **Farad, F**), $Q$ is the stored charge, and $V$ is the voltage across the plates.

For a parallel-plate capacitor:
$$C = \epsilon_0\frac{A}{d}$$

where $A$ is plate area and $d$ is plate separation.

**Energy stored in a capacitor:**
$$U_C = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{QV}{2}$$

**Worked Example:** A $10\text{ μF}$ capacitor is charged to $12\text{ V}$. Find the stored charge and energy.
$$Q = CV = (10\times10^{-6})(12) = 1.2\times10^{-4}\text{ C} = 120\text{ μC}$$
$$U = \frac{1}{2}CV^2 = \frac{1}{2}(10\times10^{-6})(144) = 7.2\times10^{-4}\text{ J} = 0.72\text{ mJ}$$

---

## 6. Gauss's Law

Gauss's Law is a powerful alternative to Coulomb's Law for finding electric fields of symmetric charge distributions:

$$\boxed{\oint_S \vec{E}\cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}}$$

The total electric flux through any closed surface equals the enclosed charge divided by $\epsilon_0$.

**Application — Field outside a uniformly charged sphere:**
By symmetry, $\vec{E}$ is radial. On a spherical Gaussian surface of radius $r > R$:
$$E(4\pi r^2) = \frac{Q}{\epsilon_0} \implies E = \frac{Q}{4\pi\epsilon_0 r^2} = k_e\frac{Q}{r^2}$$

Outside a sphere, it behaves exactly as a point charge. ✓

---

## 7. Derivation: Energy Stored in a Capacitor

**Step 1:** Start with an uncharged capacitor. To add an infinitesimal charge $dq$ to a plate already holding charge $q$, work must be done against the existing voltage $V = q/C$:
$$dW = V\,dq = \frac{q}{C}\,dq$$

**Step 2:** Integrate from $q = 0$ to $q = Q$:
$$W = \int_0^Q \frac{q}{C}\,dq = \frac{1}{C}\left[\frac{q^2}{2}\right]_0^Q = \frac{Q^2}{2C}$$

**Step 3:** Substitute $Q = CV$:
$$U_C = \frac{Q^2}{2C} = \frac{(CV)^2}{2C} = \frac{1}{2}CV^2 \quad \textbf{Q.E.D.}$$

---flashcards---
[
  {
    "front": "What are the two types of electric charge and what is the elementary charge?",
    "back": "Positive and negative. $$e = 1.602\\\\times10^{-19}\\\\text{ C}$$."
  },
  {
    "front": "State Coulomb's Law.",
    "back": "$$F = k_e\\\\frac{|q_1||q_2|}{r^2}$$ where $$k_e = 8.99\\\\times10^9\\\\text{ N·m}^2/\\\\text{C}^2$$."
  },
  {
    "front": "How does Coulomb's Law compare to Newton's Law of Gravitation?",
    "back": "Both are inverse-square laws. But electrostatic force can repel, while gravity is always attractive. Electrostatic force is ~$$10^{36}$$ times stronger between an electron and proton."
  },
  {
    "front": "What is the electric field, and what are its units?",
    "back": "$$\\\\vec{E} = \\\\vec{F}/q$$ — force per unit positive charge. Units: N/C or V/m."
  },
  {
    "front": "What is the electric field of a point charge $$Q$$ at distance $$r$$?",
    "back": "$$E = k_e\\\\frac{Q}{r^2}$$, directed away from positive and toward negative charges."
  },
  {
    "front": "What is electric potential (voltage)?",
    "back": "Electric PE per unit charge: $$V = U_E/q = k_e Q/r$$. Unit: Volt (V) = J/C."
  },
  {
    "front": "How is $$\\\\Delta V$$ related to the electric field in a uniform field?",
    "back": "$$\\\\Delta V = -Ed$$. A stronger field means a steeper potential gradient."
  },
  {
    "front": "What is a capacitor and the formula relating charge, capacitance, and voltage?",
    "back": "A device that stores charge on two plates. $$Q = CV$$."
  },
  {
    "front": "What is the energy stored in a capacitor?",
    "back": "$$U_C = \\\\frac{1}{2}CV^2 = \\\\frac{Q^2}{2C}$$"
  },
  {
    "front": "State Gauss's Law.",
    "back": "$$\\\\oint_S \\\\vec{E}\\\\cdot d\\\\vec{A} = Q_{enc}/\\\\epsilon_0$$. Total electric flux through a closed surface equals the enclosed charge divided by $$\\\\epsilon_0$$."
  },
  {
    "front": "What is 1 electron-volt (eV) in Joules?",
    "back": "$$1\\\\text{ eV} = 1.602\\\\times10^{-19}\\\\text{ J}$$. The KE gained by one electron accelerated through 1 V."
  }
]
`


  'Magnetism & Electromagnetism': `
# Magnetism & Electromagnetism: Forces of the Universe

## 0. Introduction
Electricity and magnetism — once thought to be separate phenomena — are two facets of a single unified force: **electromagnetism**. James Clerk Maxwell's equations (1865) showed this, and in doing so predicted the existence of electromagnetic waves — light itself. This topic is the gateway to all of modern technology: motors, generators, transformers, radio, MRI scanners, and the internet.

---

## 1. Magnetic Fields

A **magnetic field** $\vec{B}$ (unit: Tesla, T) is a region of space where a moving charge or current experiences a force.

**Key rules for magnetic field lines:**
- They form closed loops (no beginning or end — unlike electric field lines)
- They emerge from the **North** pole of a magnet and enter the **South** pole
- The closer together, the stronger the field

---

## 2. Force on a Moving Charge — The Lorentz Force

A charge $q$ moving with velocity $\vec{v}$ in magnetic field $\vec{B}$:
$$\vec{F} = q\vec{v}\times\vec{B}$$

Magnitude: $F = qvB\sin\theta$, where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$.

**Use the Right-Hand Rule:** Point fingers in the direction of $\vec{v}$, curl toward $\vec{B}$ — thumb points in direction of $\vec{F}$ (for positive charge).

**Critical observations:**
- If $\vec{v}$ is parallel to $\vec{B}$ ($\theta = 0$): $F = 0$ — no force
- If $\vec{v}$ is perpendicular to $\vec{B}$ ($\theta = 90°$): $F = qvB$ — maximum force
- $\vec{F}$ is always perpendicular to $\vec{v}$: magnetic force **never does work** and **never changes speed**, only direction

### 2.1 Circular Motion of Charged Particles
Since the magnetic force is always perpendicular to velocity, a charged particle in a uniform field moves in a circle. Centripetal force = magnetic force:
$$qvB = \frac{mv^2}{r} \implies r = \frac{mv}{qB}$$

This **cyclotron radius** (or Larmor radius) is the foundation of particle accelerators and mass spectrometers.

**Example:** A proton ($m = 1.67\times10^{-27}\text{ kg}$, $q = 1.6\times10^{-19}\text{ C}$) moves at $2\times10^6\text{ m/s}$ perpendicular to a $0.5\text{ T}$ field. Find the radius of its circular path.
$$r = \frac{mv}{qB} = \frac{(1.67\times10^{-27})(2\times10^6)}{(1.6\times10^{-19})(0.5)} = \frac{3.34\times10^{-21}}{8\times10^{-20}} = 0.0418\text{ m} \approx 4.2\text{ cm}$$

---

## 3. Force on a Current-Carrying Conductor

A wire carrying current $I$ in a magnetic field $\vec{B}$ experiences a force:
$$\vec{F} = I\vec{L}\times\vec{B} \implies F = BIL\sin\theta$$

where $L$ is the length of wire in the field and $\theta$ is the angle between wire and field.

**This is the operating principle of every electric motor.**

**Example:** A 0.5 m wire carries 3 A perpendicular to a 0.4 T field. Find the force.
$$F = BIL\sin90° = 0.4\times3\times0.5\times1 = 0.6\text{ N}$$

---

## 4. Magnetic Field from Currents

Moving charges create magnetic fields. The magnetic field of a long straight wire at distance $r$:
$$B = \frac{\mu_0 I}{2\pi r}$$

where $\mu_0 = 4\pi\times10^{-7}\text{ T·m/A}$ is the **permeability of free space**.

Direction: Use the Right-Hand Rule — wrap hand around wire with thumb pointing in current direction; fingers curl in the direction of $\vec{B}$.

**Force between two parallel wires:** Two wires with currents $I_1$ and $I_2$ separated by $d$:
$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

- Currents in the **same direction**: wires **attract**
- Currents in **opposite directions**: wires **repel**

---

## 5. Electromagnetic Induction — Faraday's Law

**Faraday's Law** (1831): A changing magnetic flux through a loop induces an EMF (voltage) in that loop:
$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

where magnetic flux $\Phi_B = \int \vec{B}\cdot d\vec{A} = BA\cos\theta$ (for uniform $B$).

The **negative sign** is Lenz's Law: the induced EMF drives a current that opposes the change in flux that caused it.

### 5.1 Lenz's Law
The induced current always creates a magnetic field that **resists** the change in flux:
- Flux increasing → induced current creates field opposing the increase
- Flux decreasing → induced current creates field opposing the decrease

> **Application:** This is why braking systems in trains and rollercoasters use eddy currents — as a metal disc spins in a magnetic field, the induced currents create a braking force opposing the rotation.

---

## 6. Generators and Transformers

### 6.1 The Generator
A coil of $N$ turns rotating at angular frequency $\omega$ in a field $B$:
$$\mathcal{E}(t) = NBA\omega\sin(\omega t) = \mathcal{E}_0\sin(\omega t)$$

The rotating coil continuously changes its flux, producing AC (alternating current). Every power station generator works on this principle.

### 6.2 The Transformer
Transformers change AC voltage using mutual induction between two coils sharing an iron core:
$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

For an ideal (lossless) transformer, power is conserved ($P = IV$):
$$\frac{I_s}{I_p} = \frac{N_p}{N_s}$$

- **Step-up** ($N_s > N_p$): increases voltage, decreases current
- **Step-down** ($N_s < N_p$): decreases voltage, increases current

Power lines use step-up transformers to transmit at very high voltage (low current = less heat loss in wires), then step-down transformers near homes.

---

## 7. Maxwell's Equations (Overview)

Maxwell unified all of electricity and magnetism into four elegant equations:

| Law | Equation | Meaning |
|---|---|---|
| Gauss's Law (E) | $\nabla\cdot\vec{E} = \rho/\epsilon_0$ | Electric fields diverge from charges |
| Gauss's Law (B) | $\nabla\cdot\vec{B} = 0$ | No magnetic monopoles exist |
| Faraday's Law | $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$ | Changing B creates E |
| Ampere-Maxwell | $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\epsilon_0\,\partial\vec{E}/\partial t$ | Currents and changing E create B |

From these, Maxwell derived the speed of electromagnetic waves:
$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3\times10^8\text{ m/s}$$

He recognised this as the speed of light — proving light is an electromagnetic wave.

---flashcards---
[
  {
    "front": "State the Lorentz force law for a moving charge.",
    "back": "$$\\\\vec{F} = q\\\\vec{v}\\\\times\\\\vec{B}$$, magnitude $$F = qvB\\\\sin\\\\theta$$."
  },
  {
    "front": "Why does a magnetic force never do work on a charged particle?",
    "back": "Because $$\\\\vec{F}$$ is always perpendicular to $$\\\\vec{v}$$. Power $$P = \\\\vec{F}\\\\cdot\\\\vec{v} = 0$$, so speed never changes, only direction."
  },
  {
    "front": "What is the cyclotron radius of a charged particle in a magnetic field?",
    "back": "$$r = \\\\frac{mv}{qB}$$. Larger mass or speed = larger circle. Larger charge or field = smaller circle."
  },
  {
    "front": "What is the force on a current-carrying conductor in a magnetic field?",
    "back": "$$F = BIL\\\\sin\\\\theta$$ where $$L$$ is the length of wire in the field."
  },
  {
    "front": "What is the magnetic field at distance $$r$$ from a long straight wire carrying current $$I$$?",
    "back": "$$B = \\\\frac{\\\\mu_0 I}{2\\\\pi r}$$ where $$\\\\mu_0 = 4\\\\pi\\\\times10^{-7}\\\\text{ T·m/A}$$."
  },
  {
    "front": "State Faraday's Law of Electromagnetic Induction.",
    "back": "$$\\\\mathcal{E} = -\\\\frac{d\\\\Phi_B}{dt}$$. A changing magnetic flux induces an EMF that opposes the change (Lenz's Law)."
  },
  {
    "front": "State Lenz's Law.",
    "back": "The induced current always opposes the change in magnetic flux that caused it."
  },
  {
    "front": "What is the transformer equation?",
    "back": "$$\\\\frac{V_s}{V_p} = \\\\frac{N_s}{N_p}$$. For an ideal transformer, power is conserved: $$V_p I_p = V_s I_s$$."
  },
  {
    "front": "What did Maxwell derive from his four equations, and what was its significance?",
    "back": "The speed of EM waves: $$c = 1/\\\\sqrt{\\\\mu_0\\\\epsilon_0} = 3\\\\times10^8\\\\text{ m/s}$$. This proved light is an electromagnetic wave."
  },
  {
    "front": "Two parallel wires carry currents in the same direction. Do they attract or repel?",
    "back": "They attract. Opposite currents repel."
  }
]
`


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

