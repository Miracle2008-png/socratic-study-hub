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

topics['Rotational Mechanics'] = r"""# Rotational Mechanics: The Physics of Spinning

## 1. The Rotational Analogy
Everything you learned in linear kinematics and dynamics has an exact, beautiful mathematical twin in the world of rotation!
* Position ($x$) $\to$ Angle ($\theta$)
* Velocity ($v$) $\to$ Angular Velocity ($\omega$)
* Acceleration ($a$) $\to$ Angular Acceleration ($\alpha$)
* Mass ($m$) $\to$ Moment of Inertia ($I$)
* Force ($F$) $\to$ Torque ($\tau$)
* Momentum ($p$) $\to$ Angular Momentum ($L$)

## 2. Moment of Inertia ($I$)
Mass measures how hard it is to push an object. **Moment of Inertia** measures how hard it is to *spin* an object.
Crucially, $I$ depends not just on how much mass an object has, but *where* that mass is located relative to the axis of rotation. 
Mass further away from the axis is exponentially harder to spin.
For a discrete point mass: $I = mr^2$.
For a continuous object, it is the integral: $I = \int r^2 \, dm$.

## 3. Torque ($\tau$)
Torque is a twisting force that causes angular acceleration.
$$ \vec{\tau} = \vec{r} \times \vec{F} $$
Magnitude: $\tau = rF \sin\theta$.
To maximize torque (like using a wrench to untighten a bolt), you want to apply the force as far away from the pivot as possible ($r$), and perfectly perpendicular to the wrench ($\theta = 90^\circ$).

## 4. Newton's Second Law for Rotation
Just as $F = ma$, the rotational equivalent is:
$$ \Sigma\tau = I\alpha $$
If you apply a net torque to a wheel, it will undergo angular acceleration. A heavier wheel (larger $I$) will accelerate slower.

## 5. Angular Momentum ($L$)
Angular momentum is the quantity of rotation.
$$ \vec{L} = I\vec{\omega} = \vec{r} \times \vec{p} $$
**Conservation of Angular Momentum:** If there is zero net external torque on a system, its total angular momentum is perfectly conserved. 
This is why an ice skater spins blindingly fast when they pull their arms in! By pulling mass closer to the axis, their Moment of Inertia ($I$) drops. To keep $L$ constant, their angular velocity ($\omega$) must drastically increase!

## Derivation of the Moment of Inertia for a Uniform Rod
Prove that the moment of inertia of a uniform rod of mass $M$ and length $L$, spinning exactly around its center, is $I = \frac{1}{12}ML^2$.

**Step 1:** The Integral Definition.
$$ I = \int r^2 \, dm $$

**Step 2:** Relate mass to position.
Assume the rod is uniform, meaning its linear mass density $\lambda$ is constant.
$$ \lambda = \frac{M}{L} $$
Therefore, a microscopic slice of the rod with width $dx$ has mass $dm$:
$$ dm = \lambda \, dx = \left(\frac{M}{L}\right) dx $$

**Step 3:** Set up the integral.
Let the center of the rod be $x = 0$. The rod spans from $x = -L/2$ to $x = +L/2$.
Substitute $r = x$ and $dm$.
$$ I = \int_{-L/2}^{L/2} x^2 \left(\frac{M}{L}\right) dx $$

**Step 4:** Evaluate the integral.
Pull the constants out.
$$ I = \frac{M}{L} \left[ \frac{x^3}{3} \right]_{-L/2}^{L/2} $$

**Step 5:** Plug in the limits.
$$ I = \frac{M}{3L} \left( \left(\frac{L}{2}\right)^3 - \left(-\frac{L}{2}\right)^3 \right) $$
$$ I = \frac{M}{3L} \left( \frac{L^3}{8} - \left(-\frac{L^3}{8}\right) \right) $$
$$ I = \frac{M}{3L} \left( \frac{2L^3}{8} \right) = \frac{M}{3L} \left( \frac{L^3}{4} \right) $$

**Step 6:** Simplify.
$$ I = \frac{ML^3}{12L} = \frac{1}{12}ML^2 $$
Q.E.D.

## Derivation of Rotational Kinetic Energy
Prove that the kinetic energy of a purely rotating object is $K_{rot} = \frac{1}{2}I\omega^2$.

**Step 1:** Consider a rigid body as a collection of $N$ tiny point masses $m_i$.
Each point mass is distance $r_i$ from the axis of rotation, and is moving with a linear speed $v_i$.

**Step 2:** Sum the standard kinetic energy of all particles.
$$ K_{total} = \sum_{i=1}^N \frac{1}{2} m_i v_i^2 $$

**Step 3:** Convert linear velocity to angular velocity.
Because the object is rigid, every single particle has the *exact same* angular velocity $\omega$. 
We know $v_i = r_i \omega$.
$$ K_{total} = \sum_{i=1}^N \frac{1}{2} m_i (r_i \omega)^2 $$
$$ K_{total} = \sum_{i=1}^N \frac{1}{2} m_i r_i^2 \omega^2 $$

**Step 4:** Factor out the constants.
Both $\frac{1}{2}$ and $\omega^2$ are constant for the entire object.
$$ K_{total} = \frac{1}{2} \left( \sum_{i=1}^N m_i r_i^2 \right) \omega^2 $$

**Step 5:** Identify the Moment of Inertia.
The term in the parenthesis is the exact definition of the total Moment of Inertia $I$.
$$ K_{rot} = \frac{1}{2}I\omega^2 $$
Q.E.D.
"""

topics['Thermodynamics'] = r"""# Thermodynamics: The Laws of Heat and Chaos

## 1. The Zeroth Law (Thermal Equilibrium)
If system A is in thermal equilibrium with system B, and system B is in thermal equilibrium with system C, then system A is perfectly in thermal equilibrium with system C. 
This seems painfully obvious, but it is the foundational rule that makes the concept of a "Thermometer" logically possible!

## 2. The First Law (Conservation of Energy)
Energy cannot be created or destroyed. The change in internal energy ($\Delta U$) of a gas is exactly equal to the heat added to the system ($Q$) minus the work done BY the system ($W$).
$$ \Delta U = Q - W $$
* **Isothermal Process**: Temperature is constant ($\Delta U = 0$). All heat added is converted instantly into work ($Q = W$).
* **Adiabatic Process**: A process so fast or perfectly insulated that zero heat escapes ($Q = 0$). Thus $\Delta U = -W$. (When you release gas from a pressurized spray can, it expands, does work, and immediately gets freezing cold!).

## 3. The Second Law (Entropy & Time)
*“The total entropy (disorder) of an isolated system can never decrease over time.”*
$$ \Delta S \ge 0 $$
The First Law says you can't get something for nothing. The Second Law says you can't even break even! 
Because of entropy, no engine can ever be 100% efficient. Some energy will *always* be lost as useless, chaotic waste heat. This law gives the universe its "Arrow of Time"—you can easily scramble an egg, but you can never un-scramble it.

## 4. The Third Law (Absolute Zero)
As the temperature of a system approaches Absolute Zero ($0$ Kelvin, or $-273.15^\circ$ C), the entropy of a perfect crystal approaches a constant minimum (zero). 
Because removing heat requires work, and that work generates its own entropy, it is physically impossible to ever reach exactly Absolute Zero.

## 5. Heat Engines and Refrigerators
A heat engine takes heat from a hot reservoir ($Q_H$), uses some of it to do useful mechanical work ($W$), and exhausts the rest to a cold reservoir ($Q_C$).
Efficiency: $e = \frac{W}{Q_H} = \frac{Q_H - Q_C}{Q_H} = 1 - \frac{Q_C}{Q_H}$.
A refrigerator simply runs this process in reverse!

## Derivation of the Ideal Gas Law (Kinetic Theory)
How do we prove $PV = nRT$ (or $PV = NkT$) just by looking at microscopic atoms bouncing in a box?

**Step 1:** Consider a single atom of mass $m$ bouncing horizontally in a cubic box of side length $L$.
Its horizontal velocity is $v_x$. When it hits the right wall and bounces back elastically, its momentum changes from $mv_x$ to $-mv_x$.
$$ \Delta p = 2mv_x $$

**Step 2:** Calculate the time between collisions with that specific wall.
The atom must travel to the left wall and back (distance $2L$) before hitting the right wall again.
$$ \Delta t = \frac{2L}{v_x} $$

**Step 3:** Calculate the average force exerted by this ONE atom on the wall.
By Newton's 2nd Law, $F = \frac{\Delta p}{\Delta t}$.
$$ F_{atom} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L} $$

**Step 4:** Calculate the total Pressure on the wall from $N$ atoms.
Pressure is Total Force divided by Area ($L^2$).
$$ P = \frac{F_{total}}{L^2} = \frac{N \cdot \frac{m\bar{v}_x^2}{L}}{L^2} = \frac{Nm\bar{v}_x^2}{L^3} $$
Since $L^3$ is the Volume ($V$):
$$ P = \frac{Nm\bar{v}_x^2}{V} $$

**Step 5:** Relate 1D velocity to 3D velocity.
Atoms move randomly in 3D ($x, y, z$). By the Pythagorean theorem, $\bar{v}^2 = \bar{v}_x^2 + \bar{v}_y^2 + \bar{v}_z^2$.
Since motion is random, all three directions are equal: $\bar{v}^2 = 3\bar{v}_x^2$, so $\bar{v}_x^2 = \frac{1}{3}\bar{v}^2$.
$$ P = \frac{Nm(\frac{1}{3}\bar{v}^2)}{V} = \frac{N}{3V}m\bar{v}^2 $$

**Step 6:** Introduce Temperature.
The microscopic definition of Temperature is that the average kinetic energy of an atom is $\frac{3}{2}kT$.
$$ \frac{1}{2}m\bar{v}^2 = \frac{3}{2}kT \implies m\bar{v}^2 = 3kT $$

**Step 7:** Substitute into the Pressure equation.
$$ P = \frac{N}{3V} (3kT) $$
$$ P = \frac{NkT}{V} $$
$$ PV = NkT $$
Q.E.D. We derived macroscopic thermodynamics purely from microscopic Newtonian mechanics!

## Derivation of Carnot Engine Efficiency
What is the absolute maximum efficiency *any* engine can theoretically achieve in the universe?

**Step 1:** The Carnot Cycle consists of two perfectly reversible isothermal (constant T) and two perfectly reversible adiabatic (no heat transfer) processes.
For a reversible cycle, the total change in entropy of the universe is exactly zero.
$$ \Delta S_{univ} = 0 $$

**Step 2:** Sum the entropy changes.
Entropy leaves the hot reservoir ($-Q_H/T_H$) and enters the cold reservoir ($+Q_C/T_C$). The engine itself returns to its exact starting state.
$$ \frac{Q_C}{T_C} - \frac{Q_H}{T_H} = 0 $$
$$ \frac{Q_C}{T_C} = \frac{Q_H}{T_H} \implies \frac{Q_C}{Q_H} = \frac{T_C}{T_H} $$

**Step 3:** Use the standard efficiency formula.
By the First Law, the work done is $W = Q_H - Q_C$.
Efficiency $e = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$.

**Step 4:** Substitute the entropy relation.
$$ e_{carnot} = 1 - \frac{T_C}{T_H} $$
Q.E.D. 
This profound formula proves that even a perfectly frictionless engine is physically capped by the temperatures it operates between. To get 100% efficiency, you would need to exhaust into a reservoir at absolute zero!
"""

topics['Electrostatics'] = r"""# Electrostatics: The Invisible Force

## 1. Electric Charge ($q$)
Charge is a fundamental, quantized property of matter. It comes in two flavors: positive (protons) and negative (electrons).
* Like charges repel.
* Opposite charges attract.
Charge is always conserved; it can only be transferred, never created or destroyed.

## 2. Coulomb's Law
The electrostatic force between two point charges ($q_1, q_2$) is directly proportional to their product and inversely proportional to the square of the distance ($r$) between them.
$$ \vec{F}_E = k_e \frac{q_1 q_2}{r^2} \hat{r} $$
Where $k_e = \frac{1}{4\pi\varepsilon_0} \approx 8.99 \times 10^9 \text{ N m}^2/\text{C}^2$.
Notice how this formula is a mirror image of Newton's Law of Gravity! However, the electric force between two electrons is roughly $10^{42}$ times stronger than their gravitational attraction.

## 3. The Electric Field ($\vec{E}$)
A charge doesn't just "reach out" across empty space to push another charge. It creates an invisible "Electric Field" everywhere in space. When a second charge enters this field, the field pushes it.
$$ \vec{E} = \frac{\vec{F}}{q} = k_e \frac{Q}{r^2} \hat{r} $$
Electric field lines originate on positive charges and terminate on negative charges.

## 4. Gauss's Law (Maxwell's First Equation)
Gauss's Law is a more profound, topological formulation of Coulomb's Law. It states that the total "Electric Flux" (the number of field lines) piercing outward through any closed imaginary 3D surface is directly proportional to the total charge enclosed *inside* that surface.
$$ \oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0} $$
This law is incredibly powerful for finding the electric field of highly symmetric objects (like spheres, infinite lines, or flat sheets) without doing horrific calculus.

## 5. Electric Potential ($V$) and Voltage
Just as lifting a rock creates gravitational potential energy, pushing a positive charge toward another positive charge stores **Electric Potential Energy** ($U_E$).
Electric Potential ($V$), commonly known as Voltage, is simply the potential energy *per unit charge*.
$$ V = \frac{U_E}{q} $$
$$ V = k_e \frac{Q}{r} $$
The electric field is exactly the negative spatial gradient (slope) of the voltage: $\vec{E} = -\nabla V$.

## Derivation of the Electric Field of an Infinite Line Charge
Use Gauss's Law to derive the electric field at a distance $r$ from an infinitely long straight wire with uniform linear charge density $\lambda$ (Coulombs/meter).

**Step 1:** Choose a Gaussian Surface.
Because the wire has cylindrical symmetry, we choose a closed imaginary cylinder of radius $r$ and length $L$, perfectly centered around the wire.

**Step 2:** Analyze the Electric Flux ($\Phi_E$).
The electric field lines point radially outward from the wire.
* The flux through the two flat end-caps of the cylinder is $0$, because the field lines run parallel to the caps ($\vec{E} \cdot d\vec{A} = 0$).
* The flux through the curved barrel is $E \times Area$, because $\vec{E}$ is perfectly constant and perpendicular to the surface everywhere.
$$ \oint \vec{E} \cdot d\vec{A} = E(2\pi r L) $$

**Step 3:** Calculate the enclosed charge ($Q_{enc}$).
The amount of wire trapped inside our imaginary cylinder has length $L$.
$$ Q_{enc} = \lambda L $$

**Step 4:** Apply Gauss's Law.
$$ \oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0} $$
$$ E(2\pi r L) = \frac{\lambda L}{\varepsilon_0} $$

**Step 5:** Solve for $E$.
The arbitrary length $L$ beautifully cancels out!
$$ E = \frac{\lambda}{2\pi \varepsilon_0 r} $$
Q.E.D. The field drops off as $1/r$, not $1/r^2$!

## Derivation of the Capacitance of a Parallel-Plate Capacitor
Prove that the capacitance of two parallel metal plates of area $A$ separated by a distance $d$ is $C = \frac{\varepsilon_0 A}{d}$.

**Step 1:** The Electric Field of one plate.
Using Gauss's Law on an infinite 2D sheet of charge with surface density $\sigma = Q/A$, the field is $E = \frac{\sigma}{2\varepsilon_0}$.

**Step 2:** The total Electric Field between two plates.
One plate is $+Q$ and the other is $-Q$. Their fields point in the exact same direction between the plates and add together!
$$ E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A\varepsilon_0} $$

**Step 3:** Find the Voltage (Potential Difference).
In a uniform electric field, the voltage difference is simply the field times the distance.
$$ V = E \cdot d $$
$$ V = \left( \frac{Q}{A\varepsilon_0} \right) d $$

**Step 4:** Define Capacitance.
Capacitance is defined as the amount of charge stored per volt of potential difference ($C = Q/V$).
Substitute our equation for $V$:
$$ C = \frac{Q}{\left( \frac{Q d}{A\varepsilon_0} \right)} $$

**Step 5:** Simplify.
The $Q$'s cancel completely!
$$ C = \frac{\varepsilon_0 A}{d} $$
Q.E.D. This proves that a capacitor's ability to store charge depends *purely on its geometric physical shape*, not on the battery hooked up to it!
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded Physics Batch 2 with derivations successfully.")
