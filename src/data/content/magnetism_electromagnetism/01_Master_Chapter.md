# Magnetism and Electromagnetism

## 1. Magnetic Fields and Forces

### Magnetic Force on a Moving Charge
The Lorentz force on a charge $q$ moving with velocity $\mathbf{v}$ in a magnetic field $\mathbf{B}$ is:
$$ \mathbf{F}_B = q (\mathbf{v} \times \mathbf{B}) $$
Magnitude: $F = |q|vB\sin\theta$.

**Worked Example 1:**
An electron ($q = -1.6 \times 10^{-19} \text{ C}$, $m = 9.11 \times 10^{-31} \text{ kg}$) enters a uniform magnetic field of $1.5 \text{ T}$ perpendicular to its velocity of $2.0 \times 10^6 \text{ m/s}$. Find the radius of its circular path.

*Solution:*
1. Magnetic force provides centripetal acceleration:
   $$ |q|vB = \frac{mv^2}{r} $$
2. Solve for $r$:
   $$ r = \frac{mv}{|q|B} $$
3. Substitute values:
   $$ r = \frac{(9.11 \times 10^{-31})(2.0 \times 10^6)}{(1.6 \times 10^{-19})(1.5)} = \frac{1.822 \times 10^{-24}}{2.4 \times 10^{-19}} \approx 7.59 \times 10^{-6} \text{ m} $$

### Ampere's Law
$$ \oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enc} $$
Magnetic field of a long straight wire:
$$ B = \frac{\mu_0 I}{2\pi r} $$

## 2. Electromagnetic Induction

### Faraday's Law of Induction
The induced electromotive force (EMF) is the negative rate of change of magnetic flux:
$$ \mathcal{E} = -N \frac{d\Phi_B}{dt} $$
where $\Phi_B = \int \mathbf{B} \cdot d\mathbf{A}$.

**Worked Example 2:**
A flat circular loop of radius $0.10 \text{ m}$ consisting of 50 turns is perpendicular to a magnetic field. The field decreases from $0.50 \text{ T}$ to $0.10 \text{ T}$ in $0.20 \text{ s}$. Calculate the induced EMF.

*Solution:*
1. Calculate the area of the loop:
   $$ A = \pi r^2 = \pi (0.10)^2 \approx 0.0314 \text{ m}^2 $$
2. Change in magnetic flux per turn:
   $$ \Delta \Phi_B = A \Delta B = (0.0314)(0.10 - 0.50) = -0.01256 \text{ Wb} $$
3. Apply Faraday's Law:
   $$ \mathcal{E} = -N \frac{\Delta \Phi_B}{\Delta t} = -50 \left(\frac{-0.01256}{0.20}\right) = -50 (-0.0628) = 3.14 \text{ V} $$

## 3. Inductance and AC Circuits

### Self-Inductance
$$ \mathcal{E} = -L \frac{dI}{dt} $$

### RL Circuit Time Constant
The time constant for an RL circuit is $\tau = L / R$.
Current growth in an RL circuit:
$$ I(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-t/\tau}\right) $$
