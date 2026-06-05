# Vortex Sheet and Bound Circulation

The concept of a vortex sheet is central to both the mathematical theory of lift and the numerical panel methods used in modern aerodynamics. It provides the physical picture for how an airfoil generates circulation.

## 1. What is a Vortex Sheet?

A **vortex sheet** is an infinitesimally thin surface across which the tangential velocity is discontinuous, while the normal velocity remains continuous. Imagine stacking an infinite number of infinitesimal free vortices side by side to form a surface.

The **vortex sheet strength** $\gamma(x)$ (in units of velocity) represents the velocity jump across the sheet:
$$\gamma(x) = u_{upper} - u_{lower}$$

A vortex sheet with varying $\gamma(x)$ creates a complex velocity field that can be used to model the flow around any shape.

## 2. Modeling an Airfoil as a Vortex Sheet

In thin airfoil theory, the actual airfoil (with finite thickness and camber) is replaced by a single vortex sheet of strength $\gamma(x)$ placed along the chord line (camber line approximation).

The total **circulation** around the airfoil is:
$$\Gamma = \int_0^c \gamma(x) \, dx$$

The **Kutta-Joukowski theorem** then gives the lift per unit span:
$$L' = \rho_\infty V_\infty \Gamma$$

The problem reduces to finding the distribution $\gamma(x)$ that:
1. Makes the camber line a streamline (no normal flow through it).
2. Satisfies the Kutta condition: $\gamma(c) = 0$ at the trailing edge.

## 3. The Fundamental Equation of Thin Airfoil Theory

The no-penetration condition at the camber line, accounting for the induced velocity from the vortex sheet, yields the singular integral equation:

$$\frac{1}{2\pi} \int_0^c \frac{\gamma(\xi)}{\xi - x} d\xi = V_\infty \left(\alpha - \frac{dz_c}{dx}\right)$$

where $dz_c/dx$ is the local slope of the camber line.

This is solved using a change of variable to trigonometric coordinates: $x = \frac{c}{2}(1 - \cos\theta)$, leading to a Fourier series representation of $\gamma$.

## 4. The Glauert Solution

Substituting the Fourier series and applying boundary conditions gives the Glauert solution for the vortex sheet strength:

$$\gamma(\theta) = 2V_\infty \left[A_0 \frac{1 + \cos\theta}{\sin\theta} + \sum_{n=1}^{\infty} A_n \sin(n\theta)\right]$$

Where:
$$A_0 = \alpha - \frac{1}{\pi}\int_0^\pi \frac{dz_c}{dx} d\theta$$
$$A_n = \frac{2}{\pi}\int_0^\pi \frac{dz_c}{dx} \cos(n\theta) d\theta$$

The $A_0$ term represents the contribution of angle of attack; the $A_n$ terms represent the effect of camber shape.

## 5. Physical Significance of the Bound Vortex

By Helmholtz's vortex theorems, a vortex filament cannot end in a fluid — it must either close on itself or end at a solid boundary. The bound vortex on the wing ends at the wingtips, where it curves backward to form the **trailing vortices** that stream behind the aircraft.

This vortex system — bound vortex + trailing vortices — is the physical mechanism for:
1. **Lift:** The Kutta-Joukowski theorem operates on the bound circulation.
2. **Induced drag:** The trailing vortex sheet induces downwash on the wing.
3. **Wake hazard:** Vortex wake turbulence behind large aircraft that can roll smaller following aircraft — the reason for minimum separation distances at airports.
