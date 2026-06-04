# Modern Physics: Relativity

## 1. Postulates of Special Relativity
Albert Einstein's Special Theory of Relativity rests on two fundamental postulates:
1. **The Principle of Relativity:** The laws of physics are identical in all inertial frames of reference.
2. **The Constancy of the Speed of Light:** The speed of light in a vacuum, $c$, is the same for all observers, regardless of the motion of the light source or observer.

## 2. The Lorentz Transformations
The Lorentz transformations relate the spacetime coordinates of an event in one inertial frame ($S$) to the coordinates in another frame ($S'$) moving with a constant velocity $v$ relative to $S$ along the x-axis.

$$ x' = \gamma (x - vt) $$
$$ y' = y $$
$$ z' = z $$
$$ t' = \gamma \left( t - \frac{vx}{c^2} \right) $$
where the Lorentz factor is $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$.

## 3. Relativistic Kinematics

### 3.1 Time Dilation
A clock moving relative to an observer is measured to tick slower than a clock at rest relative to the observer.
$$ \Delta t = \gamma \Delta t_0 $$
where $\Delta t_0$ is the proper time (time measured in the frame where the clock is at rest).

**Worked Example 3.1: Muon Decay**
A muon has a mean lifetime of $2.20 \ \mu\text{s}$ in its rest frame. If a muon travels at $0.99c$ relative to Earth, what is its mean lifetime as measured by an Earthbound observer, and how far does it travel in Earth's frame before decaying?
**Step 1:** Calculate the Lorentz factor $\gamma$.
$$ \gamma = \frac{1}{\sqrt{1 - (0.99)^2}} = \frac{1}{\sqrt{1 - 0.9801}} = \frac{1}{\sqrt{0.0199}} \approx 7.089 $$
**Step 2:** Calculate the dilated time $\Delta t$.
$$ \Delta t = \gamma \Delta t_0 = (7.089)(2.20 \times 10^{-6} \text{ s}) \approx 15.6 \ \mu\text{s} $$
**Step 3:** Calculate the distance traveled in Earth's frame.
$$ d = v \Delta t = (0.99 \times 3 \times 10^8 \text{ m/s})(15.6 \times 10^{-6} \text{ s}) \approx 4630 \text{ m} $$

### 3.2 Length Contraction
The length of an object measured in a frame where it is moving is shorter than its proper length (the length measured in its rest frame).
$$ L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \frac{v^2}{c^2}} $$

**Worked Example 3.2: Spaceship Measurement**
A spaceship has a proper length of $100 \text{ m}$. As it passes Earth, an observer on Earth measures its length to be $80 \text{ m}$. How fast is the spaceship moving relative to Earth?
**Step 1:** Set up the length contraction formula.
$$ L = L_0 \sqrt{1 - \frac{v^2}{c^2}} \implies 80 = 100 \sqrt{1 - \frac{v^2}{c^2}} $$
**Step 2:** Isolate the square root term.
$$ 0.8 = \sqrt{1 - \frac{v^2}{c^2}} $$
**Step 3:** Square both sides and solve for $v$.
$$ 0.64 = 1 - \frac{v^2}{c^2} \implies \frac{v^2}{c^2} = 1 - 0.64 = 0.36 $$
$$ v = \sqrt{0.36}c = 0.6c $$

## 4. Relativistic Dynamics

### 4.1 Relativistic Momentum and Energy
- Relativistic Momentum: $\mathbf{p} = \gamma m \mathbf{v}$
- Total Energy: $E = \gamma mc^2$
- Rest Energy: $E_0 = mc^2$
- Kinetic Energy: $K = E - E_0 = (\gamma - 1)mc^2$
- Energy-Momentum Relation: $E^2 = (pc)^2 + (mc^2)^2$

**Worked Example 4.1: Energy of an Electron**
An electron ($m_e = 0.511 \text{ MeV}/c^2$) moves with a speed of $0.8c$. Calculate its total energy, kinetic energy, and momentum.
**Step 1:** Calculate $\gamma$.
$$ \gamma = \frac{1}{\sqrt{1 - 0.8^2}} = \frac{1}{\sqrt{0.36}} = \frac{1}{0.6} = \frac{5}{3} \approx 1.667 $$
**Step 2:** Calculate total energy $E$.
$$ E = \gamma mc^2 = \left(\frac{5}{3}\right)(0.511 \text{ MeV}) \approx 0.852 \text{ MeV} $$
**Step 3:** Calculate kinetic energy $K$.
$$ K = E - mc^2 = 0.852 \text{ MeV} - 0.511 \text{ MeV} = 0.341 \text{ MeV} $$
**Step 4:** Calculate momentum $p$.
Using $p = \gamma m v$:
$$ p = \left(\frac{5}{3}\right)(0.511 \text{ MeV}/c^2)(0.8c) = \frac{5}{3} \times 0.4088 \text{ MeV}/c \approx 0.681 \text{ MeV}/c $$
Alternatively, use $E^2 = (pc)^2 + (mc^2)^2$:
$$ (0.852)^2 = (pc)^2 + (0.511)^2 \implies pc = \sqrt{0.7259 - 0.2611} = \sqrt{0.4648} \approx 0.681 \text{ MeV} $$
So $p = 0.681 \text{ MeV}/c$.
