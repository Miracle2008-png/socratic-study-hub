import re

filepath = 'src/data/physicsContentExt.ts'
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

topics['Kinematics'] = r"""# Kinematics: The Geometry of Motion

## 1. Position, Displacement, and Distance
Kinematics is the study of motion without considering the forces that cause it. 
* **Position ($\vec{r}$)**: Where an object is located in a coordinate system.
* **Distance ($d$)**: The total length of the path traveled. It is a scalar (always positive).
* **Displacement ($\Delta\vec{r}$)**: The straight-line vector from the starting position to the final position. $\Delta\vec{r} = \vec{r}_f - \vec{r}_i$. If you walk in a circle and return to your start, your distance is $2\pi r$, but your displacement is $0$.

## 2. Velocity and Speed
* **Average Speed**: Total distance divided by total time.
* **Average Velocity**: Total displacement divided by total time ($\vec{v}_{avg} = \frac{\Delta\vec{r}}{\Delta t}$).
* **Instantaneous Velocity**: The velocity at an exact moment in time, defined using calculus as the derivative of position: $\vec{v} = \frac{d\vec{r}}{dt}$.

## 3. Acceleration
Acceleration is the rate at which velocity changes. 
* **Average Acceleration**: $\vec{a}_{avg} = \frac{\Delta\vec{v}}{\Delta t}$.
* **Instantaneous Acceleration**: The derivative of velocity: $\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$.
Remember: You can accelerate by speeding up, slowing down (deceleration), OR by simply turning (changing direction)!

## 4. Constant Acceleration (The Big Four Equations)
When acceleration is perfectly constant (like free-fall near Earth's surface where $a = -9.81$ m/s$^2$), we use four fundamental kinematic equations:
1. $v = u + at$
2. $s = ut + \frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \frac{1}{2}(u + v)t$
*(Where $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $t$ = time, $s$ = displacement)*

## 5. Projectile Motion (2D Kinematics)
When an object is thrown into the air, its motion is separated into two entirely independent dimensions:
* **Horizontal (x-axis)**: No forces act horizontally (ignoring air resistance), so acceleration is $a_x = 0$. Velocity remains completely constant: $v_x = u\cos\theta$.
* **Vertical (y-axis)**: Gravity acts purely downwards, so $a_y = -g$. Vertical motion dictates how long the object stays in the air (Time of Flight).

The beautiful consequence of this independence is that a bullet dropped from your hand and a bullet fired horizontally from a gun will hit the ground at the *exact same time*.

## Derivation of the First Kinematic Equation
How do we rigorously prove $v = u + at$ for constant acceleration?

**Step 1:** Start with the calculus definition of instantaneous acceleration.
$$ a = \frac{dv}{dt} $$

**Step 2:** Separate the differentials.
$$ dv = a \, dt $$

**Step 3:** Integrate both sides over the time interval from $0$ to $t$. 
The velocity changes from an initial velocity $u$ to a final velocity $v$.
$$ \int_u^v dv = \int_0^t a \, dt $$

**Step 4:** Since $a$ is constant, it can be pulled out of the integral.
$$ \int_u^v dv = a \int_0^t dt $$

**Step 5:** Evaluate the integrals.
$$ [v]_u^v = a [t]_0^t $$
$$ v - u = at $$

**Step 6:** Rearrange.
$$ v = u + at $$
Q.E.D.

## Derivation of the Second Kinematic Equation
How do we prove the displacement formula $s = ut + \frac{1}{2}at^2$?

**Step 1:** Start with the calculus definition of instantaneous velocity.
$$ v = \frac{ds}{dt} $$

**Step 2:** Substitute the first kinematic equation we just derived ($v = u + at$).
$$ \frac{ds}{dt} = u + at $$

**Step 3:** Separate the differentials.
$$ ds = (u + at) \, dt $$

**Step 4:** Integrate both sides from time $0$ to $t$. 
Assume initial displacement is $0$, and final is $s$.
$$ \int_0^s ds = \int_0^t (u + at) \, dt $$

**Step 5:** Evaluate the integrals.
$$ [s]_0^s = \left[ ut + \frac{1}{2}at^2 \right]_0^t $$
$$ s - 0 = \left( ut + \frac{1}{2}at^2 \right) - (0) $$
$$ s = ut + \frac{1}{2}at^2 $$
Q.E.D.

## Derivation of the Third Kinematic Equation
How do we prove the time-independent equation $v^2 = u^2 + 2as$?

**Step 1:** We want an equation without time ($t$). We use the Chain Rule trick to rewrite acceleration.
$$ a = \frac{dv}{dt} $$
By the chain rule, $\frac{dv}{dt} = \frac{dv}{ds} \cdot \frac{ds}{dt}$.

**Step 2:** Recognize that $\frac{ds}{dt}$ is simply velocity $v$.
$$ a = v \frac{dv}{ds} $$

**Step 3:** Separate the differentials.
$$ a \, ds = v \, dv $$

**Step 4:** Integrate both sides.
$$ \int_0^s a \, ds = \int_u^v v \, dv $$

**Step 5:** Evaluate the integrals (remembering $a$ is constant).
$$ a[s]_0^s = \left[ \frac{1}{2}v^2 \right]_u^v $$
$$ as = \frac{1}{2}v^2 - \frac{1}{2}u^2 $$

**Step 6:** Multiply by 2 and rearrange.
$$ 2as = v^2 - u^2 $$
$$ v^2 = u^2 + 2as $$
Q.E.D.
"""

topics['Force & Newton’s laws'] = r"""# Force & Newton's Laws: The Engine of Dynamics

## 1. What is a Force?
A force is a push or a pull resulting from an object's interaction with another object. Forces are vectors (they have magnitude and direction). When multiple forces act on an object, we sum them up using vector addition to find the **Net Force** ($\Sigma\vec{F}$).

## 2. Newton's First Law (Inertia)
*“An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.”*
This is the Law of Inertia. It implies that a net force is NOT required to keep an object moving in deep space; force is only required to *change* its motion. Mass is simply a quantitative measure of an object's inertia (its resistance to changes in velocity).

## 3. Newton's Second Law ($\vec{F} = m\vec{a}$)
*“The acceleration of an object is directly proportional to the net force acting upon it, and inversely proportional to its mass.”*
$$ \Sigma\vec{F} = m\vec{a} $$
However, Newton's original and more profound formulation was based on **momentum** ($\vec{p} = m\vec{v}$). 
He stated that force is the rate of change of momentum:
$$ \Sigma\vec{F} = \frac{d\vec{p}}{dt} $$
If mass is constant, $\frac{d(m\vec{v})}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a}$. But the momentum formulation is vastly superior because it still works for objects that lose mass (like rockets burning fuel) and in the realm of Einstein's Relativity!

## 4. Newton's Third Law (Action & Reaction)
*“For every action, there is an equal and opposite reaction.”*
If object A exerts a force on object B, then object B exerts a force on object A of the exact same magnitude but in the exact opposite direction.
$$ \vec{F}_{A \to B} = -\vec{F}_{B \to A} $$
Crucially, these forces act on *different* objects, which is why they do not simply cancel each other out to zero!

## 5. Free Body Diagrams (FBDs)
To solve any mechanics problem, we isolate the object of interest and draw all forces acting *on* it.
Common forces include:
* **Gravity ($W = mg$)**: Always points straight down to the center of the Earth.
* **Normal Force ($N$)**: The contact force exerted by a surface, always perfectly perpendicular to the surface.
* **Tension ($T$)**: The pulling force transmitted through a string or rope.
* **Friction ($f = \mu N$)**: Resists sliding motion, pointing exactly opposite to the direction of motion.

## Derivation of the Conservation of Momentum
How do we prove that in an isolated collision between two objects, the total momentum before the crash equals the total momentum after? It is a direct mathematical consequence of Newton's 3rd Law!

**Step 1:** Imagine two objects, A and B, colliding.
During the collision, they exert forces on each other. By Newton's Third Law:
$$ \vec{F}_{A \to B} = -\vec{F}_{B \to A} $$

**Step 2:** Use Newton's Second Law in its true momentum form.
We know that $\vec{F} = \frac{d\vec{p}}{dt}$.
Therefore, the force A exerts on B causes B's momentum to change: $\vec{F}_{A \to B} = \frac{d\vec{p}_B}{dt}$.
Likewise, $\vec{F}_{B \to A} = \frac{d\vec{p}_A}{dt}$.

**Step 3:** Substitute these into the Third Law equation.
$$ \frac{d\vec{p}_B}{dt} = -\frac{d\vec{p}_A}{dt} $$

**Step 4:** Move everything to one side.
$$ \frac{d\vec{p}_A}{dt} + \frac{d\vec{p}_B}{dt} = 0 $$
$$ \frac{d}{dt} (\vec{p}_A + \vec{p}_B) = 0 $$

**Step 5:** Interpret the calculus result.
If the derivative (rate of change) of the total momentum $(\vec{p}_A + \vec{p}_B)$ is exactly exactly $0$, that means the total momentum is a **constant**! It never changes over time.
Therefore, the total momentum before the collision equals the total momentum after.
$$ \vec{p}_{initial} = \vec{p}_{final} $$
Q.E.D. The Conservation of Momentum is perfectly proven.
"""

topics['Work, Energy & Power'] = r"""# Work, Energy & Power: The Currency of Physics

## 1. Work: The Transfer of Energy
In physics, "Work" is not effort; it is a very specific mechanical transfer of energy. Work is done when a force causes an object to displace.
If the force is constant and perfectly aligns with the displacement: $W = Fd$.
If the force is applied at an angle $\theta$:
$$ W = Fd \cos\theta $$
This is mathematically equivalent to the dot product: $W = \vec{F} \cdot \vec{d}$.
* If you carry a heavy box and walk horizontally, you do $0$ work on the box because your lifting force (up) is at a $90^\circ$ angle to the displacement (forward), and $\cos(90^\circ) = 0$.

## 2. Kinetic Energy
Kinetic Energy ($K$) is the energy of motion. 
$$ K = \frac{1}{2}mv^2 $$
If you double your driving speed, your kinetic energy quadruples. This is why high-speed car crashes are exponentially more devastating.

## 3. Potential Energy
Potential Energy ($U$) is stored energy based on an object's position in a conservative force field (like gravity or a spring).
* **Gravitational Potential Energy (near Earth)**: $U_g = mgh$
* **Elastic Potential Energy (Spring)**: $U_s = \frac{1}{2}kx^2$ (where $k$ is the spring constant).

## 4. The Law of Conservation of Energy
Energy cannot be created or destroyed, only transformed from one form to another. 
In a closed, frictionless system, the total mechanical energy $E_{total} = K + U$ remains perfectly constant.
If a roller coaster drops from a high peak, it trades its potential energy for kinetic energy as it accelerates downward, but the total sum remains identical.

## 5. Power
Power is the rate at which work is done (or energy is transferred) over time.
$$ P = \frac{W}{t} = \frac{dE}{dt} $$
It is measured in Watts (1 Watt = 1 Joule per second).
Since $W = \vec{F} \cdot \vec{d}$, Power can also be calculated as Force times velocity:
$$ P = \vec{F} \cdot \vec{v} $$

## Derivation of the Kinetic Energy Formula
Why is kinetic energy exactly $\frac{1}{2}mv^2$? Where does this specific formula come from? It is rigorously derived from the Work-Energy Theorem.

**Step 1:** Define Work using calculus.
The total work done by a net force moving an object from position $x_1$ to $x_2$ is the integral of the force over distance:
$$ W = \int_{x_1}^{x_2} F_{net} \, dx $$

**Step 2:** Substitute Newton's Second Law.
We know $F_{net} = ma$. So:
$$ W = \int_{x_1}^{x_2} ma \, dx $$

**Step 3:** Use the Chain Rule trick for acceleration.
We know $a = \frac{dv}{dt}$. By the chain rule, $a = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx}$.
Substitute this into the integral:
$$ W = \int_{x_1}^{x_2} m \left( v \frac{dv}{dx} \right) dx $$

**Step 4:** Cancel the $dx$ differentials.
The integral transforms from an integral over distance ($dx$) to an integral over velocity ($dv$)! The limits change from initial velocity $v_i$ to final velocity $v_f$:
$$ W = \int_{v_i}^{v_f} mv \, dv $$

**Step 5:** Evaluate the integral.
Since mass $m$ is constant, we just integrate $v$:
$$ W = m \left[ \frac{1}{2}v^2 \right]_{v_i}^{v_f} $$
$$ W = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2 $$

**Step 6:** Define Kinetic Energy.
We see that the Work done exactly equals the change in a quantity defined by $\frac{1}{2}mv^2$. We define this quantity as Kinetic Energy ($K$).
$$ W = K_f - K_i = \Delta K $$
Q.E.D. We have proven both the formula for Kinetic Energy and the Work-Energy Theorem in one stroke!
"""

topics['Circular Motion & Gravitation'] = r"""# Circular Motion & Gravitation: The Celestial Clockwork

## 1. Uniform Circular Motion
When an object moves in a perfect circle at a constant speed, its velocity vector is constantly changing direction. Because velocity is changing, the object is absolutely accelerating, even though it never speeds up!
This acceleration always points perfectly inwards toward the center of the circle, and is called **Centripetal Acceleration**:
$$ a_c = \frac{v^2}{r} $$

## 2. Centripetal Force
By Newton's Second Law ($\Sigma F = ma$), there must be a net force pulling the object inward to cause this acceleration. 
$$ F_c = m\frac{v^2}{r} $$
"Centripetal Force" is not a magical new force; it is simply a label for whichever physical force (like string tension, gravity, or friction) is currently keeping the object locked in its circular path.

## 3. Newton's Law of Universal Gravitation
In 1687, Isaac Newton published the profound realization that the force causing an apple to fall to the earth is the *exact same force* keeping the Moon locked in its orbit. 
Every mass in the universe attracts every other mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
$$ F_g = G \frac{m_1 m_2}{r^2} $$
*(Where $G = 6.674 \times 10^{-11} \text{ N m}^2/\text{kg}^2$ is the universal gravitational constant).*

## 4. Gravitational Fields and Orbits
The gravitational field strength $g$ (which is $9.81$ m/s$^2$ on Earth's surface) is calculated by dividing out the test mass:
$$ g = \frac{F_g}{m} = \frac{GM}{r^2} $$
For a satellite to orbit a planet, the gravitational pull provides the exact centripetal force required to keep it in a circle. The satellite is technically in a state of endless free-fall, but it is moving sideways so fast that the Earth curves away beneath it just as fast as it falls!

## 5. Kepler's Laws of Planetary Motion
Before Newton, Johannes Kepler used observational data from Tycho Brahe to formulate three empirical laws:
1. **The Law of Ellipses**: Planets orbit the Sun in ellipses, with the Sun at one focus.
2. **The Law of Equal Areas**: A line drawn from a planet to the Sun sweeps out equal areas in equal time intervals. (Planets whip around faster when they are closer to the Sun).
3. **The Law of Harmonies**: The square of the orbital period is proportional to the cube of the orbital radius.

## Derivation of Centripetal Acceleration
How do we prove $a_c = v^2/r$ for a circle?

**Step 1:** Define the position vector.
Imagine an object moving in a circle of radius $R$ at a constant angular speed $\omega$. Its position vector in the $x-y$ plane is:
$$ \vec{r}(t) = \langle R\cos(\omega t), R\sin(\omega t) \rangle $$

**Step 2:** Find the velocity vector by differentiating.
Take the derivative with respect to time $t$. By the chain rule, $\frac{d}{dt} \cos(\omega t) = -\omega \sin(\omega t)$.
$$ \vec{v}(t) = \frac{d\vec{r}}{dt} = \langle -R\omega\sin(\omega t), R\omega\cos(\omega t) \rangle $$
*(Notice that the dot product $\vec{r} \cdot \vec{v} = 0$, proving velocity is always perfectly tangent to the circle!)*

**Step 3:** Find the acceleration vector by differentiating again.
$$ \vec{a}(t) = \frac{d\vec{v}}{dt} = \langle -R\omega^2\cos(\omega t), -R\omega^2\sin(\omega t) \rangle $$

**Step 4:** Factor out the $-\omega^2$.
$$ \vec{a}(t) = -\omega^2 \langle R\cos(\omega t), R\sin(\omega t) \rangle $$
$$ \vec{a}(t) = -\omega^2 \vec{r}(t) $$
The negative sign proves that acceleration always points in the exact opposite direction of position (i.e., towards the center!).

**Step 5:** Find the magnitude of acceleration.
$|\vec{a}| = \omega^2 |\vec{r}| = \omega^2 R$.
Since the linear speed $v = \omega R$, we can substitute $\omega = \frac{v}{R}$:
$$ a = \left(\frac{v}{R}\right)^2 R = \frac{v^2}{R} $$
Q.E.D.

## Derivation of Kepler's Third Law
How did Newton rigorously prove Kepler's empirical Third Law using Gravity?

**Step 1:** Set up the orbit equations.
Assume a planet of mass $m$ is in a perfectly circular orbit of radius $r$ around a massive star of mass $M$.
The gravitational force $F_g$ provides the centripetal force $F_c$.
$$ F_g = F_c $$
$$ G\frac{Mm}{r^2} = m\frac{v^2}{r} $$

**Step 2:** Simplify the equation.
The mass of the orbiting planet $m$ cancels out entirely (this is why heavy satellites and light satellites orbit at the exact same speed!). Multiply both sides by $r$:
$$ \frac{GM}{r} = v^2 $$

**Step 3:** Introduce the orbital period $T$.
The speed $v$ of the planet is the distance of one full orbit (circumference $= 2\pi r$) divided by the time it takes (Period $= T$).
$$ v = \frac{2\pi r}{T} $$

**Step 4:** Substitute $v$ into the equation.
$$ \frac{GM}{r} = \left( \frac{2\pi r}{T} \right)^2 $$
$$ \frac{GM}{r} = \frac{4\pi^2 r^2}{T^2} $$

**Step 5:** Rearrange to isolate $T^2$.
Cross-multiply to get:
$$ T^2 = \left( \frac{4\pi^2}{GM} \right) r^3 $$
Since $4$, $\pi^2$, $G$, and $M$ are all constant numbers, this proves that $T^2 \propto r^3$.
Q.E.D. Newton proved mathematically what Kepler observed empirically through telescopes!
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded Physics with extensive derivations successfully.")
