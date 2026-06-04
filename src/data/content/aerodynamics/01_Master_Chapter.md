# Aerodynamics: Master Chapter

## 1. Fundamental Principles and Governing Equations

Aerodynamics is governed by the principles of conservation of mass, momentum, and energy.

### 1.1 Continuity Equation (Conservation of Mass)
For a control volume, the integral form is:
$$ \frac{\partial}{\partial t} \iiint_V \rho \, dV + \iint_S \rho \mathbf{V} \cdot d\mathbf{S} = 0 $$
For steady, incompressible flow in a stream tube:
$$ A_1 V_1 = A_2 V_2 $$

### 1.2 Momentum Equation (Navier-Stokes and Euler)
The differential form of the momentum equation (Navier-Stokes) for an incompressible, Newtonian fluid with constant viscosity $\mu$:
$$ \rho \left( \frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla)\mathbf{V} \right) = -\nabla p + \mu \nabla^2 \mathbf{V} + \rho \mathbf{g} $$
Neglecting viscosity (inviscid flow), this simplifies to the Euler equation:
$$ \rho \frac{D\mathbf{V}}{Dt} = -\nabla p + \rho \mathbf{g} $$

### 1.3 Bernoulli's Equation
Integrating Euler's equation along a streamline for steady, incompressible, inviscid flow yields Bernoulli's equation:
$$ P + \frac{1}{2}\rho V^2 + \rho g z = \text{constant} $$

## 2. Incompressible Flow over Airfoils

### 2.1 Kutta-Joukowski Theorem
The lift per unit span ($L'$) on a two-dimensional body is directly proportional to the circulation ($\Gamma$):
$$ L' = \rho_{\infty} V_{\infty} \Gamma $$

### 2.2 Thin Airfoil Theory
For a thin airfoil, the camber line is placed on the $x$-axis. The fundamental equation of thin airfoil theory states that the flow must be tangent to the camber line:
$$ \frac{1}{2\pi V_{\infty}} \int_0^c \frac{\gamma(\xi)}{x - \xi} d\xi = \alpha - \frac{dz}{dx} $$
Applying the coordinate transformation $x = \frac{c}{2}(1 - \cos\theta)$ and $\xi = \frac{c}{2}(1 - \cos\theta_0)$, the vortex sheet strength is:
$$ \gamma(\theta) = 2V_{\infty} \left( A_0 \frac{1 + \cos\theta}{\sin\theta} + \sum_{n=1}^{\infty} A_n \sin n\theta \right) $$

**Lift Coefficient ($c_l$)**:
$$ c_l = \pi (2A_0 + A_1) $$
For a symmetric airfoil ($dz/dx = 0$), $A_0 = \alpha$ and $A_n = 0$ for $n \ge 1$. Thus, $c_l = 2\pi\alpha$.

### Solved Example 1: Thin Airfoil Theory
**Problem:** Calculate the lift coefficient for a flat plate airfoil at an angle of attack of $5^\circ$.
**Solution:**
1. Convert angle of attack to radians:
   $$ \alpha = 5^\circ \times \frac{\pi}{180^\circ} = 0.08726 \text{ rad} $$
2. For a flat plate (symmetric airfoil), the lift coefficient is:
   $$ c_l = 2\pi\alpha $$
3. Substitute the value:
   $$ c_l = 2\pi(0.08726) = 0.548 $$

## 3. Compressible Flow

### 3.1 Isentropic Flow Relations
For a calorically perfect gas undergoing an isentropic process, the stagnation properties (denoted by subscript 0) are related to the static properties by the Mach number $M$:
$$ \frac{T_0}{T} = 1 + \frac{\gamma - 1}{2} M^2 $$
$$ \frac{P_0}{P} = \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{\gamma}{\gamma-1}} $$
$$ \frac{\rho_0}{\rho} = \left( 1 + \frac{\gamma - 1}{2} M^2 \right)^{\frac{1}{\gamma-1}} $$

### 3.2 Normal Shock Waves
Across a normal shock wave, flow goes from supersonic ($M_1 > 1$) to subsonic ($M_2 < 1$).
Mach number relation:
$$ M_2^2 = \frac{1 + \frac{\gamma - 1}{2} M_1^2}{\gamma M_1^2 - \frac{\gamma - 1}{2}} $$
Pressure ratio:
$$ \frac{P_2}{P_1} = 1 + \frac{2\gamma}{\gamma + 1}(M_1^2 - 1) $$

### Solved Example 2: Normal Shock
**Problem:** Air ($\gamma = 1.4$) flows at $M_1 = 2.0$ and $P_1 = 1 \text{ atm}$. It passes through a normal shock. Calculate the downstream Mach number $M_2$ and static pressure $P_2$.
**Solution:**
1. Calculate $M_2$:
   $$ M_2^2 = \frac{1 + 0.2(2.0)^2}{1.4(2.0)^2 - 0.2} = \frac{1 + 0.8}{5.6 - 0.2} = \frac{1.8}{5.4} = 0.3333 $$
   $$ M_2 = \sqrt{0.3333} = 0.577 $$
2. Calculate $P_2$:
   $$ \frac{P_2}{P_1} = 1 + \frac{2.8}{2.4}(2.0^2 - 1) = 1 + 1.1667(3) = 1 + 3.5 = 4.5 $$
   $$ P_2 = 4.5 \text{ atm} $$
