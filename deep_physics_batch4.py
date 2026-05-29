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

topics['Waves & Oscillations'] = r"""# Waves & Oscillations: The Rhythm of Nature

## 1. Simple Harmonic Motion (SHM)
Whenever a restoring force is directly proportional to displacement ($F = -kx$), the object will undergo Simple Harmonic Motion. This applies to masses on springs, swinging pendulums, and even atoms vibrating in a crystal lattice.
The motion follows a sinusoidal wave:
$$ x(t) = A \cos(\omega t + \phi) $$
Where $A$ is amplitude, $\omega$ is angular frequency, and $\phi$ is the phase shift.

## 2. The Wave Equation
A wave is a disturbance that transfers energy through space without permanently transferring matter. 
The 1D Wave Equation is a second-order partial differential equation that perfectly describes any wave (sound, water, or string):
$$ \frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2} $$
The solution is a traveling wave: $y(x,t) = A \sin(kx - \omega t)$.

## 3. Sound and the Doppler Effect
Sound is a longitudinal wave (compressions and rarefactions of air molecules).
When a fire engine speeds towards you, the sound waves bunch up, resulting in a higher pitch (frequency). As it passes and speeds away, the waves stretch out, resulting in a lower pitch.
$$ f' = f_0 \left( \frac{v \pm v_o}{v \mp v_s} \right) $$

## Derivation of the Pendulum Period
Prove that the period of a simple pendulum of length $L$ is exactly $T = 2\pi\sqrt{L/g}$ for small angles.

**Step 1:** Identify the restoring force.
When a pendulum is displaced by an angle $\theta$, gravity pulls it straight down. The component of gravity pulling it tangentially *back* towards the center is:
$$ F = -mg \sin\theta $$

**Step 2:** Apply Newton's Second Law.
$$ -mg \sin\theta = ma $$
Since acceleration along the arc $s$ is $a = d^2s/dt^2$ and $s = L\theta$, we know $a = L \frac{d^2\theta}{dt^2}$.
$$ -mg \sin\theta = m L \frac{d^2\theta}{dt^2} $$

**Step 3:** The Small Angle Approximation.
For small angles (less than 15 degrees), $\sin\theta \approx \theta$ (in radians).
$$ -g \theta = L \frac{d^2\theta}{dt^2} $$
$$ \frac{d^2\theta}{dt^2} = -\left(\frac{g}{L}\right) \theta $$

**Step 4:** Recognize SHM.
This is the defining differential equation of Simple Harmonic Motion ($a = -\omega^2 x$).
Therefore, the angular frequency is:
$$ \omega^2 = \frac{g}{L} \implies \omega = \sqrt{\frac{g}{L}} $$

**Step 5:** Convert to Period.
Since $\omega = 2\pi/T$:
$$ \frac{2\pi}{T} = \sqrt{\frac{g}{L}} $$
$$ T = 2\pi \sqrt{\frac{L}{g}} $$
Q.E.D. The mass of the bob completely cancels out! A heavy pendulum and a light pendulum swing at the exact same rate.
"""

topics['Fluid Mechanics'] = r"""# Fluid Mechanics: The Physics of Flow

## 1. Density and Pressure
* **Density ($\rho$)**: Mass per unit volume ($\rho = m/V$).
* **Pressure ($P$)**: Force per unit area ($P = F/A$).
In a static fluid, pressure increases with absolute depth due to the weight of the fluid above it.
$$ P = P_0 + \rho g h $$
This is why your ears pop at the bottom of a deep swimming pool.

## 2. Archimedes' Principle (Buoyancy)
*“Any object, wholly or partially immersed in a fluid, is buoyed up by a force equal to the weight of the fluid displaced by the object.”*
$$ F_B = \rho_{fluid} V_{disp} g $$
A massive steel aircraft carrier floats because its hull is shaped to displace a volume of water that weighs exactly the same as the entire ship!

## 3. Continuity Equation
For an incompressible fluid (like water) flowing through a pipe, the volume flow rate must remain perfectly constant. If the pipe narrows, the fluid must drastically speed up to push the same volume through.
$$ A_1 v_1 = A_2 v_2 $$

## Derivation of Bernoulli's Equation
Prove that $P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$ for flowing fluids using the Conservation of Energy.

**Step 1:** The Work-Energy Theorem.
The net work done on a chunk of fluid as it moves through a pipe equals its change in mechanical energy (Kinetic + Potential).
$$ W_{net} = \Delta K + \Delta U $$

**Step 2:** Calculate Work.
Work is done by the fluid pressure pushing from behind ($P_1$) and resisting from ahead ($P_2$).
Since $W = Fd$ and $F = PA$:
$$ W_{net} = (P_1 A_1) d_1 - (P_2 A_2) d_2 $$
Since Area times distance is Volume ($V$), and the volume pushed must be equal on both sides:
$$ W_{net} = P_1 V - P_2 V = (P_1 - P_2)V $$

**Step 3:** Calculate Energy Changes.
$$ \Delta K = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2 $$
$$ \Delta U = mgh_2 - mgh_1 $$

**Step 4:** Set them equal.
$$ (P_1 - P_2)V = \left(\frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2\right) + (mgh_2 - mgh_1) $$

**Step 5:** Divide by Volume ($V$).
Because Density $\rho = m/V$:
$$ P_1 - P_2 = \frac{1}{2}\rho v_2^2 - \frac{1}{2}\rho v_1^2 + \rho gh_2 - \rho gh_1 $$

**Step 6:** Group terms by initial (1) and final (2) states.
$$ P_1 + \frac{1}{2}\rho v_1^2 + \rho gh_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho gh_2 $$
Q.E.D. This proves that where fluid velocity is high, fluid pressure must drop to conserve energy—the fundamental principle of airplane wings!
"""

topics['Quantum physics'] = r"""# Quantum Physics: The Strange Micro-World

## 1. Wave-Particle Duality
In the classical world, particles (like baseballs) and waves (like ocean ripples) are totally separate. In the quantum realm, everything is both.
Light acts like a wave in the double-slit experiment, but acts like a particle (photons) in the photoelectric effect.
In 1924, Louis de Broglie hypothesized that if light can act like matter, matter can act like light! Every moving electron, proton, and even your own body has an associated wavelength:
$$ \lambda = \frac{h}{p} $$
(Where $p$ is momentum and $h$ is Planck's constant).

## 2. The Heisenberg Uncertainty Principle
You cannot precisely know both the exact position ($x$) and the exact momentum ($p$) of a quantum particle at the same time. The act of measuring one inherently blurs the other.
$$ \Delta x \Delta p \ge \frac{\hbar}{2} $$
This is not a limitation of our measuring tools. It is a fundamental blurring of the universe itself.

## 3. The Schrödinger Equation
Instead of Newton's $F = ma$ determining exact trajectories, quantum mechanics uses Erwin Schrödinger's wave equation to determine probabilities. 
It calculates the Wavefunction ($\Psi$). The square of the wavefunction ($|\Psi|^2$) tells you the exact mathematical probability of finding the electron at any specific location!

## Derivation of the Bohr Model Radii
How did Niels Bohr calculate the exact orbital radius of an electron in Hydrogen before modern quantum mechanics was invented? He simply quantized angular momentum!

**Step 1:** The Classical Orbit.
The electron is held in circular orbit by the electrostatic force from the proton.
$$ \frac{mv^2}{r} = k_e \frac{e^2}{r^2} $$
$$ mv^2 = k_e \frac{e^2}{r} $$

**Step 2:** Bohr's Quantum Postulate.
Bohr guessed that the angular momentum ($L = mvr$) of the electron could not be any arbitrary number. It had to be a perfect integer multiple of Planck's constant divided by $2\pi$ ($\hbar$).
$$ mvr = n\hbar \implies v = \frac{n\hbar}{mr} $$

**Step 3:** Substitute the velocity.
Plug Bohr's velocity into the classical orbit equation:
$$ m \left( \frac{n\hbar}{mr} \right)^2 = k_e \frac{e^2}{r} $$
$$ m \left( \frac{n^2 \hbar^2}{m^2 r^2} \right) = k_e \frac{e^2}{r} $$

**Step 4:** Solve for $r$.
Cancel one $m$ and one $r$:
$$ \frac{n^2 \hbar^2}{mr} = k_e e^2 $$
$$ r_n = \frac{n^2 \hbar^2}{m k_e e^2} $$
Q.E.D. By simply plugging in $n=1$, $n=2$, etc., this formula perfectly predicted the exact physical sizes of hydrogen atoms, proving that electrons can only exist in very specific, quantized orbits!
"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded Physics Batch 4 with derivations successfully.")
