# Electrostatics

## 1. Electric Charge and Coulomb's Law

### Coulomb's Law
The magnitude of the electrostatic force between two point charges $q_1$ and $q_2$ separated by a distance $r$ is:
$$ F = k_e \frac{|q_1 q_2|}{r^2} = \frac{1}{4\pi\varepsilon_0} \frac{|q_1 q_2|}{r^2} $$
where $k_e \approx 8.99 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2$ and $\varepsilon_0 \approx 8.85 \times 10^{-12} \text{ C}^2/(\text{N}\cdot\text{m}^2)$.

**Worked Example 1:**
Two point charges, $q_1 = +3.0 \, \mu\text{C}$ and $q_2 = -5.0 \, \mu\text{C}$, are placed $0.20 \text{ m}$ apart. Find the magnitude and direction of the electrostatic force between them.

*Solution:*
1. Convert charges to Coulombs: $q_1 = 3.0 \times 10^{-6} \text{ C}$, $q_2 = -5.0 \times 10^{-6} \text{ C}$.
2. Apply Coulomb's law:
   $$ F = (8.99 \times 10^9) \frac{(3.0 \times 10^{-6})(5.0 \times 10^{-6})}{(0.20)^2} $$
   $$ F = (8.99 \times 10^9) \frac{15.0 \times 10^{-12}}{0.04} $$
   $$ F = \frac{0.13485}{0.04} = 3.37 \text{ N} $$
3. Since the charges have opposite signs, the force is attractive.

## 2. Electric Field and Gauss's Law

### Electric Field of a Point Charge
$$ \mathbf{E} = k_e \frac{q}{r^2} \hat{\mathbf{r}} $$

### Gauss's Law
The electric flux through a closed surface is proportional to the enclosed charge:
$$ \Phi_E = \oint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{enc}}{\varepsilon_0} $$

**Worked Example 2:**
Derive the electric field of an infinite uniformly charged plane with surface charge density $\sigma$.

*Solution:*
1. Choose a Gaussian pillbox spanning the plane, with end caps of area $A$ on both sides.
2. The electric field $\mathbf{E}$ points perpendicularly outward from the plane.
3. Flux through the sides is zero. Total flux through the two end caps is $\Phi_E = 2EA$.
4. The enclosed charge is $Q_{enc} = \sigma A$.
5. Apply Gauss's Law:
   $$ 2EA = \frac{\sigma A}{\varepsilon_0} \implies E = \frac{\sigma}{2\varepsilon_0} $$

## 3. Electric Potential and Capacitance

### Electric Potential
The potential $V$ at a distance $r$ from a point charge $q$ is:
$$ V = k_e \frac{q}{r} $$

### Capacitance
Capacitance $C$ is the ratio of charge to potential difference:
$$ C = \frac{Q}{\Delta V} $$
For a parallel-plate capacitor:
$$ C = \frac{\varepsilon_0 A}{d} $$

**Worked Example 3:**
A parallel-plate capacitor has plate area $0.05 \text{ m}^2$ and separation $2.0 \text{ mm}$. A dielectric with $\kappa = 5.0$ fills the space. Calculate the capacitance.

*Solution:*
1. Formula with dielectric: $C = \frac{\kappa \varepsilon_0 A}{d}$
2. Substitute values:
   $$ C = \frac{5.0 \times (8.85 \times 10^{-12}) \times 0.05}{0.002} $$
   $$ C = \frac{2.2125 \times 10^{-12}}{0.002} = 1.11 \times 10^{-9} \text{ F} = 1.11 \text{ nF} $$
