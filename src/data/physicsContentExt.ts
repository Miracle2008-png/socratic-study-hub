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
# Thermodynamics: Heat, Temperature & Energy

## 0. Introduction
Thermodynamics is the physics of heat, temperature, and energy transfer. It explains why engines work, why ice melts, why stars shine, and sets the ultimate limits on how efficient any machine can ever be. It is built on four sweeping laws that apply universally to everything in the universe.

---

## 1. Temperature and Heat

### 1.1 Temperature
Temperature measures the **average kinetic energy** of particles in a substance. The SI unit is **Kelvin (K)**:
$$T(\text{K}) = T(°C) + 273.15$$

Absolute zero ($0\text{ K} = -273.15°C$) is the lowest possible temperature — the point where all molecular motion ceases.

### 1.2 Heat vs. Internal Energy
- **Internal energy** $U$: total kinetic + potential energy of all molecules in a substance
- **Heat** $Q$: energy transferred between objects due to a temperature difference
- Heat flows from **hot → cold** until thermal equilibrium is reached

### 1.3 Specific Heat Capacity
The energy needed to raise 1 kg of a substance by 1 K:
$$Q = mc\Delta T$$

where $c$ is the specific heat capacity (J/kg·K). Water: $c = 4186\text{ J/kg·K}$ (unusually high — why oceans moderate climate).

**Example:** How much energy heats 2 kg of water from 20°C to 100°C?
$$Q = mc\Delta T = 2\times4186\times80 = 669{,}760\text{ J} \approx 670\text{ kJ}$$

### 1.4 Latent Heat
During a phase change (melting/boiling), temperature stays constant while energy is absorbed:
$$Q = mL$$

where $L$ is the **latent heat** (J/kg). For water: $L_{fusion} = 334\text{ kJ/kg}$, $L_{vaporisation} = 2260\text{ kJ/kg}$.

---

## 2. The Ideal Gas Law

For an ideal gas (no intermolecular interactions, point-mass molecules):
$$\boxed{pV = nRT}$$

where:
- $p$ = pressure (Pa)
- $V$ = volume (m³)
- $n$ = number of moles
- $R = 8.314\text{ J/(mol·K)}$ = universal gas constant
- $T$ = temperature in Kelvin

Equivalently: $pV = Nk_BT$ where $N$ = number of molecules and $k_B = 1.38\times10^{-23}\text{ J/K}$.

**Example:** 2 moles of gas at $27°C = 300\text{ K}$ in a $10\text{ L} = 0.01\text{ m}^3$ container. Find pressure.
$$p = \frac{nRT}{V} = \frac{2\times8.314\times300}{0.01} = \frac{4988.4}{0.01} = 498{,}840\text{ Pa} \approx 4.93\text{ atm}$$

---

## 3. The Four Laws of Thermodynamics

### Zeroth Law: Thermal Equilibrium
If A is in thermal equilibrium with B, and B is in thermal equilibrium with C, then A is in thermal equilibrium with C. This defines temperature as a meaningful physical quantity.

### First Law: Conservation of Energy
$$\boxed{\Delta U = Q - W}$$

Change in internal energy = heat added to system − work done **by** the system.

- $Q > 0$: heat flows **into** the system
- $W > 0$: system does work **on** surroundings (expands)

**Example:** A gas absorbs 500 J of heat and does 200 J of work expanding. $\Delta U = 500 - 200 = 300\text{ J}$.

### Second Law: Entropy Always Increases
Heat never spontaneously flows from cold to hot. In any real (irreversible) process, the total entropy of the universe increases:
$$\Delta S_{universe} \geq 0$$

This is why you can't build a perpetual motion machine, why ice cubes melt but don't spontaneously form, and why all real engines are inefficient.

**Entropy** $S$ measures **disorder** (number of accessible microstates):
$$S = k_B\ln\Omega$$

### Third Law: Absolute Zero
As $T \to 0\text{ K}$, the entropy of a perfect crystal approaches zero. You can approach absolute zero but never reach it exactly.

---

## 4. Thermodynamic Processes

| Process | Constraint | First Law simplification |
|---|---|---|
| **Isothermal** | $T = $ const ($\Delta U = 0$) | $Q = W$ |
| **Adiabatic** | $Q = 0$ (no heat exchange) | $\Delta U = -W$ |
| **Isochoric** (isovolumetric) | $V = $ const ($W = 0$) | $\Delta U = Q$ |
| **Isobaric** | $p = $ const | $\Delta U = Q - p\Delta V$ |

Work done by gas in isobaric expansion:
$$W = p\Delta V = p(V_f - V_i)$$

---

## 5. Heat Engines and the Carnot Limit

A **heat engine** absorbs heat $Q_H$ from a hot reservoir, does work $W$, and dumps waste heat $Q_C$ to a cold reservoir:
$$W = Q_H - Q_C$$

**Thermal efficiency:**
$$\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

The **Carnot engine** is the most efficient possible heat engine operating between temperatures $T_H$ and $T_C$:
$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

No real engine can exceed Carnot efficiency. This is a direct consequence of the Second Law.

**Example:** A steam engine operates between $500\text{ K}$ and $300\text{ K}$. Maximum possible efficiency:
$$\eta_{Carnot} = 1 - \frac{300}{500} = 1 - 0.6 = 0.4 = 40\%$$

Even this theoretical maximum cannot be achieved in practice — real engines are less efficient due to friction, heat losses, etc.

---

## 6. Statistical Mechanics: Entropy and Microstates

Boltzmann connected macroscopic thermodynamics to microscopic physics:
$$S = k_B\ln\Omega$$

where $\Omega$ is the number of **microstates** (specific arrangements of molecules) corresponding to a given macrostate.

**Why entropy increases:** There are overwhelmingly more disordered arrangements than ordered ones. A gas expands to fill a container not because of any force, but simply because there are vastly more ways to be spread out than to be clumped in one corner. The system randomly explores states — and almost always lands in a disordered one.

---

## 7. Thermodynamic Potentials (Advanced)

For systems under various constraints, we define Legendre transforms of $U(S, V, N)$:

| Potential | Definition | Natural Variables | Use |
|---|---|---|---|
| Enthalpy | $H = U + pV$ | $S, p$ | Chemistry at constant pressure |
| Helmholtz free energy | $F = U - TS$ | $T, V$ | Equilibrium at constant $T, V$ |
| Gibbs free energy | $G = H - TS$ | $T, p$ | Chemical equilibrium |

**Gibbs free energy** determines spontaneity: reactions proceed spontaneously when $\Delta G < 0$.

---flashcards---
[
  {
    "front": "What is the relationship between Kelvin and Celsius?",
    "back": "$$T(\\\\text{K}) = T(°C) + 273.15$$. Absolute zero = 0 K = -273.15°C."
  },
  {
    "front": "What is specific heat capacity and its formula?",
    "back": "Energy to raise 1 kg by 1 K: $$Q = mc\\\\Delta T$$."
  },
  {
    "front": "State the Ideal Gas Law.",
    "back": "$$pV = nRT$$ where $$R = 8.314\\\\text{ J/(mol·K)}$$. Also $$pV = Nk_BT$$."
  },
  {
    "front": "State the First Law of Thermodynamics.",
    "back": "$$\\\\Delta U = Q - W$$. Change in internal energy = heat in − work done by system."
  },
  {
    "front": "State the Second Law of Thermodynamics.",
    "back": "The total entropy of the universe never decreases: $$\\\\Delta S_{universe} \\\\geq 0$$. Heat flows hot → cold spontaneously."
  },
  {
    "front": "What is the Carnot efficiency?",
    "back": "$$\\\\eta_{Carnot} = 1 - T_C/T_H$$. The maximum possible efficiency for any heat engine."
  },
  {
    "front": "In an adiabatic process, what is true?",
    "back": "No heat exchange ($$Q = 0$$), so $$\\\\Delta U = -W$$. The system cools when it expands."
  },
  {
    "front": "What is Boltzmann's entropy formula?",
    "back": "$$S = k_B\\\\ln\\\\Omega$$ where $$\\\\Omega$$ is the number of microstates."
  },
  {
    "front": "What is latent heat?",
    "back": "Energy absorbed/released during a phase change at constant temperature: $$Q = mL$$."
  },
  {
    "front": "Why does entropy always increase?",
    "back": "There are overwhelmingly more disordered microstates than ordered ones. Systems naturally drift toward the most probable (highest entropy) state."
  }
]
`,


  'Quantum physics': `
# Quantum Physics: The Strange World of the Very Small

## 0. Introduction
At the subatomic scale, the familiar laws of classical physics break down completely. Particles behave like waves. Energy comes in discrete packets. A particle can be in two places at once until you observe it. These bizarre facts are not speculation — they are the most precisely tested predictions in the history of science, and the foundation of modern technology: transistors, lasers, MRI machines, and solar cells all depend on quantum mechanics.

---

## 1. The Failure of Classical Physics

### 1.1 Blackbody Radiation & the Ultraviolet Catastrophe
Classical physics predicted that a glowing hot object would emit infinite energy at high frequencies — the "ultraviolet catastrophe." It obviously doesn't. Max Planck (1900) solved this by assuming energy is emitted in discrete packets:
$$E = hf = \frac{hc}{\lambda}$$

where $h = 6.626\times10^{-34}\text{ J·s}$ is Planck's constant.

### 1.2 The Photoelectric Effect
When light shines on a metal, electrons are ejected — but only above a **threshold frequency** $f_0$, regardless of intensity. Einstein (1905) explained this: light comes in photons, each carrying energy $E = hf$. Electrons need a minimum energy (the **work function** $\phi$) to escape:
$$K_{max} = hf - \phi$$

This Nobel Prize-winning discovery proved light has particle-like properties.

### 1.3 Atomic Spectra
Hot gases emit light only at specific, discrete wavelengths — not a continuous spectrum. This was inexplicable classically. Bohr explained it: electrons can only occupy specific energy levels and emit photons when jumping between them.

---

## 2. Wave-Particle Duality

### 2.1 Light as Both Wave and Particle
- **Wave evidence:** interference (Young's double-slit), diffraction, polarisation
- **Particle evidence:** photoelectric effect, Compton scattering

### 2.2 De Broglie Hypothesis (Matter Waves)
Louis de Broglie (1924) proposed that all matter has a wave nature:
$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

**Example:** An electron ($m = 9.11\times10^{-31}\text{ kg}$) moving at $v = 2\times10^6\text{ m/s}$:
$$\lambda = \frac{6.626\times10^{-34}}{9.11\times10^{-31}\times2\times10^6} = \frac{6.626\times10^{-34}}{1.822\times10^{-24}} = 3.64\times10^{-10}\text{ m} = 0.364\text{ nm}$$

This is comparable to atomic spacings in crystals — electron diffraction is real and was experimentally confirmed in 1927.

**A human walking at 1 m/s (mass 70 kg):**
$$\lambda = \frac{6.626\times10^{-34}}{70\times1} \approx 10^{-35}\text{ m}$$

Utterly negligible — quantum effects are invisible at human scales.

---

## 3. The Heisenberg Uncertainty Principle

$$\boxed{\Delta x \cdot \Delta p \geq \frac{\hbar}{2}}$$

$$\boxed{\Delta E \cdot \Delta t \geq \frac{\hbar}{2}}$$

where $\hbar = h/2\pi = 1.055\times10^{-34}\text{ J·s}$.

This is **not** a limitation of instruments — it is a fundamental property of nature. The act of measuring position disturbs momentum, and vice versa. The universe is intrinsically fuzzy at the quantum scale.

**Consequence:** Electrons cannot simply spiral into the nucleus (which classical physics would predict). The Uncertainty Principle prevents it — confining an electron to nuclear dimensions would give it enormous momentum uncertainty, meaning enormous kinetic energy that blasts it back out.

---

## 4. The Bohr Model of the Atom

Bohr (1913) proposed quantised orbits: electrons can only orbit where angular momentum is an integer multiple of $\hbar$:
$$L = mvr = n\hbar, \quad n = 1, 2, 3, \ldots$$

### 4.1 Allowed Energy Levels in Hydrogen
$$E_n = -\frac{13.6\text{ eV}}{n^2}$$

- $n=1$: Ground state, $E_1 = -13.6\text{ eV}$
- $n=2$: First excited state, $E_2 = -3.4\text{ eV}$
- $n=\infty$: Ionised (free electron), $E = 0$

**Ionisation energy of hydrogen:** $13.6\text{ eV}$

### 4.2 Photon Emission and Absorption
When an electron falls from level $n_i$ to $n_f < n_i$:
$$hf = E_{n_i} - E_{n_f} = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)\text{ eV}$$

Named series of spectral lines:
- **Lyman series** ($n_f = 1$): UV photons
- **Balmer series** ($n_f = 2$): Visible photons (red, blue-green, violet)
- **Paschen series** ($n_f = 3$): Infrared

**Example:** Electron falls from $n=3$ to $n=2$ (Balmer series):
$$\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) = 13.6\times\frac{5}{36} = 1.89\text{ eV}$$
$$\lambda = \frac{hc}{\Delta E} = \frac{(6.626\times10^{-34})(3\times10^8)}{1.89\times1.6\times10^{-19}} = 656\text{ nm} \quad (\text{red light, H}_\alpha\text{ line})$$

---

## 5. The Schrödinger Equation (Overview)

The modern quantum mechanical description replaces Bohr's orbits with a **wave function** $\psi(x, t)$ whose square gives the **probability density** of finding the particle:
$$P = |\psi|^2$$

The time-independent Schrödinger equation:
$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$$

Key results:
- Energy is automatically quantised — only certain $E$ values give physically acceptable $\psi$
- Particles can **tunnel** through barriers they classically couldn't cross (quantum tunnelling)
- Orbitals are not circular orbits but three-dimensional probability clouds

---

## 6. Quantum Tunnelling

A particle can pass through a potential energy barrier higher than its own energy — something classically impossible. The probability decreases exponentially with barrier thickness, but is non-zero.

**Applications:**
- **Nuclear fusion in stars:** protons overcome Coulomb repulsion in the Sun via tunnelling
- **Scanning Tunnelling Microscope (STM):** images individual atoms using tunnelling current
- **Flash memory:** electrons tunnel through insulating layers to store data

---

## 7. Quantum Numbers and Atomic Orbitals

In the full quantum mechanical treatment, electrons are described by four quantum numbers:

| Quantum Number | Symbol | Values | Meaning |
|---|---|---|---|
| Principal | $n$ | $1, 2, 3, \ldots$ | Energy level / shell |
| Orbital (azimuthal) | $l$ | $0$ to $n-1$ | Shape of orbital (s, p, d, f) |
| Magnetic | $m_l$ | $-l$ to $+l$ | Orientation of orbital |
| Spin | $m_s$ | $+\frac{1}{2}$ or $-\frac{1}{2}$ | Intrinsic angular momentum |

**Pauli Exclusion Principle:** No two electrons in an atom can have the same four quantum numbers. This explains the periodic table.

---flashcards---
[
  {
    "front": "What is a photon's energy in terms of frequency and wavelength?",
    "back": "$$E = hf = hc/\\\\lambda$$ where $$h = 6.626\\\\times10^{-34}\\\\text{ J·s}$$."
  },
  {
    "front": "State the photoelectric effect equation.",
    "back": "$$K_{max} = hf - \\\\phi$$ where $$\\\\phi$$ is the work function. Only photons above threshold frequency $$f_0 = \\\\phi/h$$ eject electrons."
  },
  {
    "front": "What is the de Broglie wavelength of a particle?",
    "back": "$$\\\\lambda = h/p = h/(mv)$$. All matter has wave properties; only observable for tiny masses."
  },
  {
    "front": "State the Heisenberg Uncertainty Principle (position-momentum).",
    "back": "$$\\\\Delta x \\\\cdot \\\\Delta p \\\\geq \\\\hbar/2$$. This is fundamental — not a measurement limitation."
  },
  {
    "front": "What are the energy levels of hydrogen in the Bohr model?",
    "back": "$$E_n = -13.6\\\\text{ eV}/n^2$$. Ground state: $$-13.6\\\\text{ eV}$$; ionisation energy: $$13.6\\\\text{ eV}$$."
  },
  {
    "front": "What frequency photon is emitted when hydrogen's electron falls from $$n=3$$ to $$n=2$$?",
    "back": "$$\\\\Delta E = 13.6(1/4 - 1/9) = 1.89\\\\text{ eV}$$, giving $$\\\\lambda = 656\\\\text{ nm}$$ (red light, Balmer series)."
  },
  {
    "front": "What does the wave function $$\\\\psi$$ represent?",
    "back": "$$|\\\\psi|^2$$ gives the probability density of finding the particle at that location."
  },
  {
    "front": "What is quantum tunnelling?",
    "back": "A particle passing through an energy barrier higher than its kinetic energy — classically impossible but quantum mechanically allowed. Used in STM, flash memory, and fusion in stars."
  },
  {
    "front": "State the Pauli Exclusion Principle.",
    "back": "No two electrons in an atom can have the same four quantum numbers $$(n, l, m_l, m_s)$$. Explains the structure of the periodic table."
  },
  {
    "front": "What is wave-particle duality?",
    "back": "All quantum objects exhibit both wave behaviour (interference, diffraction) and particle behaviour (localised detection, photoelectric effect). Neither description alone is complete."
  }
]
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
`,

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
`,


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
`,


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
`,


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
`,


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
`,


  'Optics': `
# Optics: The Physics of Light

## 0. Introduction
Optics is the study of light and its interactions with matter. It explains rainbows, mirages, eyeglasses, cameras, telescopes, fibre optics, and lasers. There are two main branches: **geometric optics** (light as rays — reflection and refraction) and **wave optics** (light as waves — interference and diffraction).

---

## 1. The Nature of Light

Light is an **electromagnetic wave** with a speed in vacuum:
$$c = 3\times10^8\text{ m/s}$$

The visible spectrum spans roughly $400\text{ nm}$ (violet) to $700\text{ nm}$ (red). In a medium with refractive index $n$:
$$v = \frac{c}{n}$$

Water: $n \approx 1.33$; glass: $n \approx 1.5$; diamond: $n \approx 2.42$

---

## 2. Reflection

### 2.1 Law of Reflection
$$\theta_i = \theta_r$$

The angle of incidence equals the angle of reflection, both measured from the **normal** to the surface.

- **Specular reflection:** Smooth surfaces (mirrors) — parallel rays remain parallel after reflection.
- **Diffuse reflection:** Rough surfaces — parallel rays scatter in all directions. This is how most objects are visible.

### 2.2 Plane Mirrors
The image formed by a plane mirror is:
- **Virtual** (behind the mirror, no actual light converges there)
- **Upright**
- The same size as the object
- As far behind the mirror as the object is in front

---

## 3. Refraction — Snell's Law

When light crosses from one medium to another, it changes speed and direction:
$$\boxed{n_1\sin\theta_1 = n_2\sin\theta_2}$$

- $n_1, n_2$ = refractive indices of the two media
- $\theta_1, \theta_2$ = angles from the **normal**

**Key observations:**
- Light entering a **denser** medium ($n_2 > n_1$): bends **toward** the normal (slows down)
- Light entering a **less dense** medium ($n_2 < n_1$): bends **away** from normal (speeds up)

**Worked Example:** A ray hits a glass surface ($n_{glass} = 1.5$) from air ($n_{air} = 1.0$) at $30°$. Find the refraction angle.
$$1.0\times\sin30° = 1.5\times\sin\theta_2$$
$$\sin\theta_2 = \frac{\sin30°}{1.5} = \frac{0.5}{1.5} = 0.333 \implies \theta_2 = 19.5°$$

Light bends toward the normal as expected (entering denser medium).

### 3.1 Total Internal Reflection
When light travels from denser to less dense medium, if the angle exceeds the **critical angle** $\theta_c$, no refraction occurs — all light reflects internally:
$$\sin\theta_c = \frac{n_2}{n_1} \quad (n_2 < n_1)$$

**Applications:** Optical fibres (internet cables), diamond brilliance, endoscopes, periscopes.

**Example:** Critical angle for glass-air:
$$\sin\theta_c = \frac{1.0}{1.5} = 0.667 \implies \theta_c = 41.8°$$

---

## 4. Lenses

### 4.1 The Thin Lens Equation
$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

where:
- $f$ = focal length (positive for converging, negative for diverging)
- $d_o$ = object distance (always positive)
- $d_i$ = image distance (positive = real image on opposite side; negative = virtual image on same side as object)

### 4.2 Magnification
$$m = -\frac{d_i}{d_o}$$

- $|m| > 1$: image is magnified
- $|m| < 1$: image is diminished
- $m > 0$: upright (virtual) image
- $m < 0$: inverted (real) image

**Example:** An object 30 cm from a converging lens ($f = 10\text{ cm}$). Find the image distance and magnification.
$$\frac{1}{d_i} = \frac{1}{f} - \frac{1}{d_o} = \frac{1}{10} - \frac{1}{30} = \frac{3-1}{30} = \frac{2}{30} \implies d_i = 15\text{ cm}$$
$$m = -\frac{15}{30} = -0.5$$

Image is real (positive $d_i$), inverted ($m < 0$), and half the size ($|m| = 0.5$).

### 4.3 Types of Lenses

| Lens Type | Focal Length | Effect | Example Use |
|---|---|---|---|
| Converging (convex) | $f > 0$ | Brings parallel rays to a focus | Magnifying glass, camera, eye |
| Diverging (concave) | $f < 0$ | Spreads parallel rays apart | Correcting nearsightedness |

---

## 5. Mirrors (Curved)

The mirror equation (same form as thin lens):
$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

For a spherical mirror: $f = R/2$ where $R$ is the radius of curvature.
- **Concave** (converging) mirror: $f > 0$
- **Convex** (diverging) mirror: $f < 0$

> **Convex mirrors** (used as car rear-view mirrors and security mirrors) always produce virtual, upright, diminished images — giving a wide field of view.

---

## 6. Wave Optics — Interference and Diffraction

### 6.1 Young's Double-Slit Experiment
Two slits separated by $d$ produce an interference pattern on a screen at distance $L$. Bright fringes (constructive interference) occur at:
$$d\sin\theta = m\lambda \quad (m = 0, \pm1, \pm2, \ldots)$$

For small angles: fringe spacing $y = \frac{m\lambda L}{d}$

**Example:** Slits $d = 0.1\text{ mm}$, $\lambda = 600\text{ nm}$, screen $L = 1\text{ m}$. Find fringe spacing.
$$\Delta y = \frac{\lambda L}{d} = \frac{(600\times10^{-9})(1)}{0.1\times10^{-3}} = \frac{6\times10^{-7}}{10^{-4}} = 6\times10^{-3}\text{ m} = 6\text{ mm}$$

### 6.2 Diffraction Grating
A grating with $N$ slits per metre produces sharp, bright maxima at:
$$d\sin\theta = m\lambda$$

where $d = 1/N$ is the slit spacing. Used in spectroscopes to separate wavelengths.

### 6.3 Single-Slit Diffraction
A single slit of width $a$ produces a diffraction pattern. Dark fringes at:
$$a\sin\theta = m\lambda \quad (m = \pm1, \pm2, \ldots)$$

---

## 7. Derivation: Snell's Law from Fermat's Principle

**Fermat's Principle:** Light follows the path that takes the **least time** between two points.

**Setup:** Light travels from point A in medium 1 ($n_1$, speed $v_1 = c/n_1$) to point B in medium 2 ($n_2$, speed $v_2 = c/n_2$). The interface is horizontal.

Let $x$ be the horizontal position where light crosses the interface. Total time:
$$t(x) = \frac{\sqrt{a^2 + x^2}}{v_1} + \frac{\sqrt{b^2 + (d-x)^2}}{v_2}$$

Minimise: $dt/dx = 0$:
$$\frac{x}{v_1\sqrt{a^2+x^2}} = \frac{d-x}{v_2\sqrt{b^2+(d-x)^2}}$$

Recognise $\sin\theta_1 = x/\sqrt{a^2+x^2}$ and $\sin\theta_2 = (d-x)/\sqrt{b^2+(d-x)^2}$:
$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2} \implies n_1\sin\theta_1 = n_2\sin\theta_2 \quad \textbf{Q.E.D.}$$

Snell's Law is a consequence of light taking the fastest path.

---flashcards---
[
  {
    "front": "State the Law of Reflection.",
    "back": "The angle of incidence equals the angle of reflection: $$\\\\theta_i = \\\\theta_r$$, both measured from the normal."
  },
  {
    "front": "State Snell's Law of Refraction.",
    "back": "$$n_1\\\\sin\\\\theta_1 = n_2\\\\sin\\\\theta_2$$"
  },
  {
    "front": "What is the refractive index $$n$$ of a medium?",
    "back": "$$n = c/v$$ — ratio of the speed of light in vacuum to its speed in the medium."
  },
  {
    "front": "What is Total Internal Reflection and when does it occur?",
    "back": "When light travels from a denser to less dense medium at an angle exceeding the critical angle: $$\\\\sin\\\\theta_c = n_2/n_1$$. All light is reflected internally."
  },
  {
    "front": "State the thin lens equation.",
    "back": "$$\\\\frac{1}{f} = \\\\frac{1}{d_o} + \\\\frac{1}{d_i}$$"
  },
  {
    "front": "What does a negative image distance $$d_i$$ mean for a lens?",
    "back": "The image is virtual (on the same side as the object) and upright."
  },
  {
    "front": "What is the magnification formula for a lens?",
    "back": "$$m = -d_i/d_o$$. Negative = inverted image; positive = upright. $$|m| > 1$$ = magnified."
  },
  {
    "front": "In Young's double-slit experiment, what is the fringe spacing?",
    "back": "$$\\\\Delta y = \\\\frac{\\\\lambda L}{d}$$ where $$\\\\lambda$$ = wavelength, $$L$$ = screen distance, $$d$$ = slit separation."
  },
  {
    "front": "What is Fermat's Principle and what does it derive?",
    "back": "Light takes the path of least time. Minimising travel time mathematically derives Snell's Law of refraction."
  },
  {
    "front": "What type of image does a convex (diverging) mirror always produce?",
    "back": "Always virtual, upright, and diminished — regardless of object distance."
  }
]
`,


  'Modern Physics & Relativity': `
# Modern Physics & Relativity: Beyond Classical Mechanics

## 0. Introduction
At the dawn of the 20th century, two revolutionary theories shattered the classical worldview: **Special Relativity** (Einstein, 1905) showed that space and time are not absolute; **Quantum Mechanics** showed that energy is quantised and particles behave as waves. Together they form the foundation of all modern physics.

---

## 1. Special Relativity

### 1.1 The Two Postulates
Einstein built his entire theory from two simple postulates:
1. **The Principle of Relativity:** The laws of physics are identical in all inertial (non-accelerating) reference frames.
2. **Constancy of the Speed of Light:** The speed of light in vacuum $c = 3\times10^8\text{ m/s}$ is the same for all observers, regardless of the motion of the source or observer.

These seemingly simple postulates have profound consequences.

### 1.2 Time Dilation
A clock moving at speed $v$ relative to an observer runs **slower**:
$$\Delta t = \gamma\,\Delta t_0$$

where:
- $\Delta t_0$ = **proper time** (time measured in the frame where the clock is at rest)
- $\Delta t$ = dilated time measured by the moving observer
- $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$ = the **Lorentz factor** ($\gamma \geq 1$ always)

> **Muon example:** Cosmic ray muons created 15 km above Earth should decay in $2.2\text{ μs}$ (their proper lifetime), meaning classically they could only travel $\sim 660\text{ m}$ — far short of reaching the ground. Yet we detect them at sea level. Why? From our frame, their clocks run slow (time dilation). From their frame, the atmosphere is Lorentz-contracted. Both explanations agree: muons survive to reach us.

### 1.3 Length Contraction
An object moving at speed $v$ is **shorter** along its direction of motion:
$$L = \frac{L_0}{\gamma}$$

where $L_0$ = **proper length** (length in the object's rest frame). Length contraction only occurs along the direction of motion — perpendicular dimensions are unchanged.

### 1.4 Mass-Energy Equivalence
Einstein's most famous result:
$$\boxed{E = mc^2}$$

More completely, for an object moving at speed $v$:
$$E^2 = (pc)^2 + (mc^2)^2$$

where $p = \gamma mv$ is relativistic momentum. For a particle at rest ($p=0$): $E = mc^2$ (rest energy).

**Example:** How much energy is stored in 1 gram of matter?
$$E = mc^2 = (10^{-3})(3\times10^8)^2 = 9\times10^{13}\text{ J}$$
That is equivalent to ~21 kilotons of TNT — the energy of the Hiroshima atomic bomb.

### 1.5 Relativistic Momentum
$$p = \gamma mv = \frac{mv}{\sqrt{1-v^2/c^2}}$$

As $v \to c$, $\gamma \to \infty$, so momentum and energy diverge. It would take infinite energy to accelerate a massive object to exactly $c$. **Nothing with mass can reach the speed of light.**

---

## 2. Quantum Mechanics

### 2.1 Planck's Quantum Hypothesis
Max Planck (1900) solved the ultraviolet catastrophe by proposing that energy is emitted in discrete packets called **quanta**:
$$E = hf$$

where $h = 6.626\times10^{-34}\text{ J·s}$ is **Planck's constant** and $f$ is frequency.

### 2.2 The Photoelectric Effect
Einstein (1905) explained why shining light on a metal ejects electrons — but only above a threshold frequency:

$$K_{max} = hf - \phi$$

where $\phi$ is the **work function** (minimum energy to eject an electron from the metal). This proved light comes in discrete packets — **photons**. Einstein won the Nobel Prize for this, not for relativity.

**Key observations:**
- Below threshold frequency: no electrons emitted, regardless of intensity
- Above threshold: electron KE depends on frequency, not intensity
- Higher intensity = more electrons, not more energetic ones

### 2.3 Wave-Particle Duality
Light behaves as both a wave (interference, diffraction) and a particle (photoelectric effect, photon). De Broglie proposed that matter also has a wave nature:
$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

This **de Broglie wavelength** is observable for electrons and other small particles (electron diffraction), but utterly negligible for macroscopic objects.

### 2.4 Heisenberg's Uncertainty Principle
It is fundamentally impossible to know both the exact position and exact momentum of a particle simultaneously:
$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

where $\hbar = h/2\pi$. The more precisely you know position, the less precisely you can know momentum (and vice versa). This is not a limitation of measurement technology — it is a fundamental property of nature.

### 2.5 The Bohr Model of the Hydrogen Atom
Niels Bohr (1913) proposed that electrons orbit the nucleus only in specific allowed orbits where angular momentum is quantised:
$$L = mvr = n\hbar, \quad n = 1, 2, 3, \ldots$$

Allowed orbital radii: $r_n = n^2 a_0$ where $a_0 = 0.0529\text{ nm}$ is the **Bohr radius**.

Energy levels: $E_n = -\frac{13.6\text{ eV}}{n^2}$

When an electron jumps from level $n_i$ to $n_f$, it emits or absorbs a photon of frequency:
$$hf = E_i - E_f = 13.6\text{ eV}\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

---flashcards---
[
  {
    "front": "State Einstein's two postulates of Special Relativity.",
    "back": "1. Laws of physics are the same in all inertial frames. 2. The speed of light $$c$$ is the same for all observers."
  },
  {
    "front": "What is time dilation?",
    "back": "A moving clock runs slow: $$\\\\Delta t = \\\\gamma\\\\Delta t_0$$ where $$\\\\gamma = 1/\\\\sqrt{1-v^2/c^2} \\\\geq 1$$."
  },
  {
    "front": "What is length contraction?",
    "back": "A moving object is shorter along its direction of motion: $$L = L_0/\\\\gamma$$."
  },
  {
    "front": "State Einstein's mass-energy equivalence.",
    "back": "$$E = mc^2$$. A 1 gram mass contains $$9\\\\times10^{13}\\\\text{ J}$$ of rest energy."
  },
  {
    "front": "Why can no massive object reach the speed of light?",
    "back": "Relativistic momentum $$p = \\\\gamma mv \\\\to \\\\infty$$ as $$v \\\\to c$$, requiring infinite energy."
  },
  {
    "front": "What is a photon's energy in terms of frequency?",
    "back": "$$E = hf$$ where $$h = 6.626\\\\times10^{-34}\\\\text{ J·s}$$ is Planck's constant."
  },
  {
    "front": "State the photoelectric effect equation.",
    "back": "$$K_{max} = hf - \\\\phi$$ where $$\\\\phi$$ is the work function. Electrons are only emitted above a threshold frequency."
  },
  {
    "front": "What is the de Broglie wavelength?",
    "back": "$$\\\\lambda = h/p = h/(mv)$$. All matter has a wave nature; the wavelength is only observable for very small masses."
  },
  {
    "front": "State Heisenberg's Uncertainty Principle.",
    "back": "$$\\\\Delta x \\\\cdot \\\\Delta p \\\\geq \\\\hbar/2$$. Exact position and momentum cannot both be simultaneously known."
  },
  {
    "front": "What are the energy levels of hydrogen in the Bohr model?",
    "back": "$$E_n = -13.6\\\\text{ eV}/n^2$$. Ground state: $$-13.6\\\\text{ eV}$$; ionisation energy: $$13.6\\\\text{ eV}$$."
  }
]
`,



  'DC Electric Circuits': `
# DC Electric Circuits: The Flow of Charge

## 0. Introduction
Electric circuits are everywhere — from the neurons in your brain to the power grid supplying your home. Understanding DC (Direct Current) circuits is fundamental to all of electronics, engineering, and modern technology.

---

## 1. Electric Current

**Electric current** is the rate of flow of charge:
$$I = \frac{\Delta Q}{\Delta t} = \frac{dQ}{dt}$$

Unit: **Ampere (A)**, where $1\text{ A} = 1\text{ C/s}$.

In a metal, current is carried by electrons flowing opposite to the conventional current direction (a historical convention — conventional current flows from + to −).

---

## 2. Ohm's Law

For most conductors (at constant temperature), current is proportional to voltage:
$$\boxed{V = IR}$$

where $R$ is the **resistance** (unit: **Ohm, Ω**).

Ohm's Law can be rearranged: $I = V/R$ and $R = V/I$.

**Resistivity:** Resistance depends on material and geometry:
$$R = \frac{\rho L}{A}$$

where $\rho$ is the resistivity (Ω·m), $L$ is the wire length, and $A$ is its cross-sectional area.

**Example:** A 240 V lamp has resistance 960 Ω. Find the current.
$$I = \frac{V}{R} = \frac{240}{960} = 0.25\text{ A}$$

---

## 3. Power in Circuits

Electrical power dissipated in a resistor:
$$\boxed{P = IV = I^2R = \frac{V^2}{R}}$$

**Example:** The lamp above ($I = 0.25\text{ A}$, $R = 960\text{ Ω}$):
$$P = I^2R = (0.25)^2\times960 = 0.0625\times960 = 60\text{ W}$$

Energy consumed over time $t$: $E = Pt$ (measured in Joules or kWh: $1\text{ kWh} = 3.6\times10^6\text{ J}$).

---

## 4. Series and Parallel Circuits

### 4.1 Series Circuit
Components connected end-to-end — same current flows through all:
$$I_{total} = I_1 = I_2 = I_3$$
$$V_{total} = V_1 + V_2 + V_3$$
$$R_{total} = R_1 + R_2 + R_3$$

> **Christmas lights in series:** If one bulb blows (breaks), the circuit opens and all lights go off.

### 4.2 Parallel Circuit
Components connected between the same two nodes — same voltage across all:
$$V_{total} = V_1 = V_2 = V_3$$
$$I_{total} = I_1 + I_2 + I_3$$
$$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$$

The total resistance is always **less** than the smallest individual resistor.

> **House wiring is parallel:** each appliance gets the full mains voltage; switching one off doesn't affect others.

**Worked Example:** Resistors $R_1 = 6\text{ Ω}$ and $R_2 = 3\text{ Ω}$ in parallel:
$$\frac{1}{R_{total}} = \frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2} \implies R_{total} = 2\text{ Ω}$$

---

## 5. Kirchhoff's Laws

For more complex circuits, two laws give a complete set of equations:

### 5.1 Kirchhoff's Current Law (KCL)
At any junction, the sum of currents flowing **in** equals the sum flowing **out**:
$$\sum I_{in} = \sum I_{out}$$

This is conservation of charge — charge cannot accumulate at a junction.

### 5.2 Kirchhoff's Voltage Law (KVL)
Around any closed loop, the sum of all voltage rises and drops equals zero:
$$\sum V = 0$$

This is conservation of energy — energy gained from EMF sources equals energy lost in resistors.

**Example:** A loop with EMF $\mathcal{E} = 12\text{ V}$, internal resistance $r = 1\text{ Ω}$, external resistance $R = 5\text{ Ω}$:
$$\mathcal{E} - Ir - IR = 0 \implies 12 = I(r + R) = I(6) \implies I = 2\text{ A}$$

Terminal voltage: $V = \mathcal{E} - Ir = 12 - 2\times1 = 10\text{ V}$

---

## 6. EMF and Internal Resistance

A real battery has an **electromotive force (EMF)** $\mathcal{E}$ (the maximum voltage it can supply) and an **internal resistance** $r$ (resistance of the battery itself):

$$V_{terminal} = \mathcal{E} - Ir$$

At higher currents, the terminal voltage drops (battery "sags"). This is why a car battery can start an engine but struggles under heavy load.

---

## 7. Capacitors in Circuits

In DC circuits, a capacitor **charges up** and then blocks further current flow (since the insulating gap stops charge passing through). Charging through resistance $R$:

$$V_C(t) = V_0\left(1 - e^{-t/RC}\right), \quad I(t) = \frac{V_0}{R}e^{-t/RC}$$

The **time constant** $\tau = RC$ (seconds) determines how quickly the capacitor charges. After $5\tau$, the capacitor is ~99% charged.

---flashcards---
[
  {
    "front": "What is electric current and its unit?",
    "back": "Rate of charge flow: $$I = dQ/dt$$. Unit: Ampere (A) = Coulomb/second."
  },
  {
    "front": "State Ohm's Law.",
    "back": "$$V = IR$$. Voltage = current × resistance."
  },
  {
    "front": "What are the three formulas for electrical power?",
    "back": "$$P = IV = I^2R = V^2/R$$"
  },
  {
    "front": "For resistors in series, what is the total resistance?",
    "back": "$$R_{total} = R_1 + R_2 + R_3 + \\\\ldots$$ (resistances add)."
  },
  {
    "front": "For resistors in parallel, what is the total resistance formula?",
    "back": "$$1/R_{total} = 1/R_1 + 1/R_2 + \\\\ldots$$ Total resistance is always less than the smallest individual resistor."
  },
  {
    "front": "State Kirchhoff's Current Law (KCL).",
    "back": "At any junction: sum of currents in = sum of currents out. (Conservation of charge.)"
  },
  {
    "front": "State Kirchhoff's Voltage Law (KVL).",
    "back": "Around any closed loop, the sum of all voltage rises and drops = 0. (Conservation of energy.)"
  },
  {
    "front": "What is EMF and terminal voltage of a battery?",
    "back": "EMF $$\\\\mathcal{E}$$ is the open-circuit voltage. Terminal voltage: $$V = \\\\mathcal{E} - Ir$$ where $$r$$ is internal resistance."
  },
  {
    "front": "What is the RC time constant and what does it represent?",
    "back": "$$\\\\tau = RC$$. Time for a capacitor to charge to 63% of its final voltage (or discharge to 37%)."
  },
  {
    "front": "Why is house wiring in parallel rather than series?",
    "back": "In parallel, each appliance gets the full mains voltage and operates independently. In series, switching one off breaks the circuit for all."
  }
]
`,

  'Nuclear Physics': `
# Nuclear Physics: The Heart of Matter

## 0. Introduction
The atomic nucleus — a tiny, dense core roughly $10^{-15}$ m across — contains almost all the mass of an atom. Nuclear physics explains radioactive decay, nuclear power, nuclear weapons, carbon dating, and the nuclear fusion reactions that power the Sun.

---

## 1. Nuclear Structure

Every nucleus is built from two types of **nucleons**:
- **Protons** (charge $+e$): determine the element (atomic number $Z$)
- **Neutrons** (charge 0): provide extra strong-force binding

Notation: $^A_Z\text{X}$ where $A = Z + N$ is the mass number and $N$ is the neutron number.

**Isotopes:** Same $Z$, different $N$ (and thus different $A$). For example, $^{12}_6\text{C}$, $^{13}_6\text{C}$, $^{14}_6\text{C}$ are all carbon isotopes.

---

## 2. The Strong Nuclear Force

**Problem:** Protons repel each other via Coulomb's Law. Why don't nuclei fly apart?

**Answer:** The **strong nuclear force** — one of the four fundamental forces of nature. It:
- Is attractive between any nucleons (proton-proton, neutron-proton, neutron-neutron)
- Is much stronger than electromagnetism at short range ($< 3\text{ fm}$)
- Falls to zero very rapidly beyond $\sim 3\text{ fm}$ — it's extremely short-range

This is why large nuclei ($Z > 83$) become unstable: electrostatic repulsion (long-range) eventually overcomes the strong force (short-range).

---

## 3. Binding Energy and Mass Defect

The mass of a nucleus is always **less** than the sum of its constituent nucleons:
$$\Delta m = Zm_p + Nm_n - m_{nucleus}$$

This **mass defect** $\Delta m$ was converted into **binding energy** $E_B$ when the nucleus formed:
$$E_B = \Delta m \cdot c^2$$

**Example:** Helium-4 nucleus ($Z=2$, $N=2$):
$$\Delta m = 2(1.00728) + 2(1.00866) - 4.00151 = 4.03188 - 4.00151 = 0.03037\text{ u}$$
$$E_B = 0.03037\times931.5\text{ MeV/u} = 28.3\text{ MeV}$$

The **binding energy per nucleon** $E_B/A$ peaks around iron-56 ($^{56}_{26}\text{Fe}$) at $\sim 8.8\text{ MeV/nucleon}$ — iron is the most stable nucleus. This is why:
- **Fusion** (combining light nuclei below iron) **releases** energy
- **Fission** (splitting heavy nuclei above iron) **releases** energy
- Both reactions move toward the iron peak

---

## 4. Radioactive Decay

Unstable nuclei spontaneously emit radiation to reach a more stable state.

### 4.1 Types of Radioactive Decay

| Type | Emitted particle | Change in $Z$, $A$ | Penetration |
|---|---|---|---|
| **Alpha** ($\alpha$) | $^4_2\text{He}$ nucleus | $Z-2$, $A-4$ | Stopped by paper |
| **Beta-minus** ($\beta^-$) | Electron $e^-$ + antineutrino | $Z+1$, $A$ unchanged | Stopped by aluminium |
| **Beta-plus** ($\beta^+$) | Positron $e^+$ + neutrino | $Z-1$, $A$ unchanged | Stopped by aluminium |
| **Gamma** ($\gamma$) | High-energy photon | No change | Reduced by lead/concrete |

### 4.2 The Law of Radioactive Decay
The number of undecayed nuclei decreases exponentially:
$$\boxed{N(t) = N_0 e^{-\lambda t}}$$

where $\lambda$ is the **decay constant** (s$^{-1}$).

**Activity** (decays per second, unit: Becquerel Bq):
$$A = -\frac{dN}{dt} = \lambda N = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$$

**Half-life** $t_{1/2}$ — time for half the nuclei to decay:
$$N(t_{1/2}) = \frac{N_0}{2} \implies e^{-\lambda t_{1/2}} = \frac{1}{2} \implies t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

---

## 5. Carbon Dating

Carbon-14 ($^{14}_6\text{C}$) is continuously produced in the upper atmosphere by cosmic ray neutrons hitting nitrogen-14. Living organisms constantly exchange carbon with the environment, maintaining a fixed $^{14}\text{C}/^{12}\text{C}$ ratio. When an organism dies, exchange stops and $^{14}\text{C}$ decays ($t_{1/2} = 5730\text{ years}$).

Measuring the remaining $^{14}\text{C}$ fraction gives the age:
$$t = -\frac{1}{\lambda}\ln\left(\frac{N}{N_0}\right) = \frac{t_{1/2}}{\ln2}\ln\left(\frac{N_0}{N}\right)$$

**Example:** A wood sample has 25% of the original $^{14}\text{C}$. Find its age.
$$N/N_0 = 0.25 = (1/2)^2 \implies \text{2 half-lives} \implies t = 2\times5730 = 11460\text{ years}$$

---

## 6. Nuclear Fission and Fusion

### 6.1 Fission
A heavy nucleus (e.g. $^{235}\text{U}$) absorbs a neutron and splits into two medium-mass daughter nuclei plus more neutrons:
$$^{235}_{92}\text{U} + ^1_0\text{n} \to ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3\,^1_0\text{n} + \text{energy}$$

The released neutrons can trigger further fissions — a **chain reaction**. Controlled: nuclear reactor. Uncontrolled: nuclear weapon.

Energy released per fission: ~200 MeV (vs. ~few eV for chemical reactions — nuclear is ~million times more energetic).

### 6.2 Fusion
Light nuclei (e.g. hydrogen isotopes) combine into heavier nuclei:
$$^2_1\text{H} + ^3_1\text{H} \to ^4_2\text{He} + ^1_0\text{n} + 17.6\text{ MeV}$$

Fusion powers the Sun. Requires extreme temperature ($\sim 10^7\text{ K}$) to overcome Coulomb repulsion — this is **thermonuclear fusion**. Controlled fusion (ITER, tokamak) is still under development.

---

## 7. Derivation: Radioactive Decay Law

**Step 1:** The rate of decay is proportional to the number of undecayed nuclei:
$$\frac{dN}{dt} = -\lambda N$$

The negative sign means $N$ decreases over time.

**Step 2:** Separate variables:
$$\frac{dN}{N} = -\lambda\,dt$$

**Step 3:** Integrate both sides:
$$\int_{N_0}^{N(t)} \frac{dN'}{N'} = -\lambda\int_0^t dt'$$
$$\ln N(t) - \ln N_0 = -\lambda t$$
$$\ln\frac{N(t)}{N_0} = -\lambda t$$

**Step 4:** Exponentiate:
$$N(t) = N_0 e^{-\lambda t} \quad \textbf{Q.E.D.}$$

---flashcards---
[
  {
    "front": "What are the two types of nucleons and what charge do they carry?",
    "back": "Protons (charge $$+e$$) and neutrons (charge 0). Together they make up the atomic nucleus."
  },
  {
    "front": "Why doesn't the nucleus fly apart despite proton-proton repulsion?",
    "back": "The strong nuclear force — much stronger than electromagnetism at short range (< 3 fm) — binds nucleons together."
  },
  {
    "front": "What is the mass defect and how does it relate to binding energy?",
    "back": "$$\\\\Delta m = Zm_p + Nm_n - m_{nucleus}$$. Binding energy: $$E_B = \\\\Delta m \\\\cdot c^2$$."
  },
  {
    "front": "Which nucleus has the highest binding energy per nucleon?",
    "back": "Iron-56 ($$^{56}_{26}\\\\text{Fe}$$), at ~8.8 MeV/nucleon. It is the most stable nucleus."
  },
  {
    "front": "What changes in $$Z$$ and $$A$$ does alpha decay cause?",
    "back": "$$Z$$ decreases by 2, $$A$$ decreases by 4. An alpha particle ($$^4_2\\\\text{He}$$) is emitted."
  },
  {
    "front": "State the radioactive decay law.",
    "back": "$$N(t) = N_0 e^{-\\\\lambda t}$$. Activity: $$A(t) = \\\\lambda N_0 e^{-\\\\lambda t}$$."
  },
  {
    "front": "What is the half-life in terms of decay constant $$\\\\lambda$$?",
    "back": "$$t_{1/2} = \\\\ln2/\\\\lambda \\\\approx 0.693/\\\\lambda$$."
  },
  {
    "front": "How does carbon dating work?",
    "back": "Living organisms maintain a fixed $$^{14}\\\\text{C}/^{12}\\\\text{C}$$ ratio. After death, $$^{14}\\\\text{C}$$ decays ($$t_{1/2} = 5730$$ yr). Measuring remaining $$^{14}\\\\text{C}$$ gives age."
  },
  {
    "front": "What is the difference between fission and fusion?",
    "back": "**Fission**: heavy nucleus splits into smaller ones (nuclear reactor). **Fusion**: light nuclei combine (Sun, H-bomb). Both release energy by moving nuclei toward the iron-56 binding energy peak."
  },
  {
    "front": "Why does nuclear energy release millions of times more energy than chemical reactions?",
    "back": "Nuclear reactions involve the strong force and mass-energy conversion ($$E=mc^2$$), releasing MeV per reaction. Chemical reactions involve electron rearrangement, releasing only eV per reaction."
  }
]
`


};

