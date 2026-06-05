# Virial and Cubic Equations of State

While the generalized compressibility chart is useful for hand calculations, modern chemical process simulators (like Aspen HYSYS) rely on complex mathematical Equations of State (EOS) to calculate $P-V-T$ behavior automatically.

## 1. The Virial Equation of State

The Virial equation is the only equation of state that is grounded in rigorous statistical mechanics rather than pure empirical curve-fitting. It expresses the compressibility factor $Z$ as a power series expansion in terms of molar density ($1/V$):

$$ Z = 1 + \frac{B(T)}{V} + \frac{C(T)}{V^2} + \frac{D(T)}{V^3} + \dots $$

- **$B(T)$**: The Second Virial Coefficient. It accounts for two-body intermolecular interactions.
- **$C(T)$**: The Third Virial Coefficient. It accounts for three-body interactions.

**Truncation**: At low to moderate pressures, three-body collisions are rare, so the equation is truncated after the second term:
$$ Z = 1 + \frac{B P}{RT} $$
This truncated virial equation is highly accurate for gases up to about 15-20 atm.

## 2. Cubic Equations of State

For high pressures and liquid phases, polynomials in Volume ($V$) of degree 3—known as Cubic Equations of State—are the industry standard. They are complex enough to capture both liquid and gas behavior, but simple enough to be solved analytically.

### The van der Waals Equation (1873)
The original cubic equation, which modified the ideal gas law by adding two parameters:
$$ P = \frac{RT}{V - b} - \frac{a}{V^2} $$
- **$b$ (co-volume)**: Accounts for the physical space occupied by the molecules themselves (repulsion).
- **$a$ (attraction)**: Accounts for the intermolecular attractive forces that pull molecules together, reducing pressure.

While historically important, the van der Waals equation is rarely used for industrial design because it is not highly accurate.

### Modern Cubic EOS: SRK and PR
Two advanced cubic equations dominate the petroleum and chemical industries today. Both use critical properties ($T_c, P_c$) and the acentric factor ($\omega$) to calculate their $a$ and $b$ parameters.

1. **Soave-Redlich-Kwong (SRK)**:
   $$ P = \frac{RT}{V - b} - \frac{a(T)}{V(V + b)} $$
   The SRK equation made the attraction parameter $a$ a function of temperature. It is excellent for modeling non-polar hydrocarbon gases and light oils.

2. **Peng-Robinson (PR)**:
   $$ P = \frac{RT}{V - b} - \frac{a(T)}{V(V + b) + b(V - b)} $$
   The PR equation improved upon SRK by modifying the denominator of the attractive term. It provides significantly better predictions of liquid densities and phase equilibrium near the critical point. It is the gold standard for refinery and oil & gas simulation.
