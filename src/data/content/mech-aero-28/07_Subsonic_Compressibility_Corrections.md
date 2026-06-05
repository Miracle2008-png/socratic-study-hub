# Subsonic Compressibility Corrections

At low Mach numbers ($M < 0.3$), air behaves as essentially incompressible — density variations are less than 5% and can be neglected without significant error. However, as aircraft approach Mach 0.7–0.8, compressibility effects become critical. The air density varies significantly, and the governing equations change fundamentally.

## 1. The Compressible Potential Flow Equation

For steady, inviscid, **compressible** (but still irrotational) flow, the continuity and Euler equations combine to give the compressible potential flow equation:

$$\left(1 - \frac{u^2}{a^2}\right)\frac{\partial^2\phi}{\partial x^2} + \left(1 - \frac{v^2}{a^2}\right)\frac{\partial^2\phi}{\partial y^2} - \frac{2uv}{a^2}\frac{\partial^2\phi}{\partial x \partial y} = 0$$

where $a$ is the local speed of sound. This is non-linear even for inviscid flow — compressibility introduces non-linearity absent in incompressible potential flow.

## 2. Small Perturbation Theory

For **slender bodies** at small angles of attack, the flow is nearly uniform: $\vec{V} = (V_\infty + u', v', w')$ where the perturbations $u', v', w'$ are much smaller than $V_\infty$.

Substituting and linearizing (neglecting products of small perturbations) gives the **linearized compressible potential equation**:

$$(1 - M_\infty^2)\frac{\partial^2\phi'}{\partial x^2} + \frac{\partial^2\phi'}{\partial y^2} + \frac{\partial^2\phi'}{\partial z^2} = 0$$

where $\phi'$ is the perturbation velocity potential and $M_\infty = V_\infty/a_\infty$ is the free-stream Mach number.

**Critical observation:** This equation is **elliptic** for $M_\infty < 1$ (subsonic — like Laplace's equation, information propagates in all directions), **parabolic** at $M_\infty = 1$, and **hyperbolic** for $M_\infty > 1$ (supersonic — information propagates only downstream, like a wave equation).

## 3. The Prandtl-Glauert Transformation

For subsonic flow ($M_\infty < 1$), the linearized compressible equation can be transformed into Laplace's equation by stretching the $y$ and $z$ coordinates:

$$y' = \beta y, \quad z' = \beta z \qquad \text{where} \quad \beta = \sqrt{1 - M_\infty^2}$$

This means: **solve the incompressible problem in the stretched geometry, then transform back.** The result is the famous **Prandtl-Glauert Rule**:

$$C_{p,compressible} = \frac{C_{p,incompressible}}{\sqrt{1 - M_\infty^2}}$$

$$C_{L,compressible} = \frac{C_{L,incompressible}}{\sqrt{1 - M_\infty^2}}$$

As $M_\infty \to 1$, $C_L \to \infty$ — an obvious physical impossibility. The rule **breaks down** as $M_\infty$ approaches 1 because the linearization assumption fails.

## 4. Critical Mach Number

The **critical Mach number** $M_{cr}$ is the free-stream Mach number at which the local flow velocity somewhere on the wing first reaches Mach 1.0 (typically at the suction peak near the leading edge on the upper surface).

For $M_\infty > M_{cr}$, a pocket of supersonic flow exists over part of the wing, terminated by a shock wave. This marks the onset of **wave drag** — the major transonic design challenge.

**Karman-Tsien rule:** A better empirical compressibility correction than Prandtl-Glauert:
$$C_p = \frac{C_{p,0}}{\sqrt{1 - M_\infty^2} + \frac{M_\infty^2}{1 + \sqrt{1 - M_\infty^2}} \cdot \frac{C_{p,0}}{2}}$$

This remains more accurate closer to $M_{cr}$ but still fails exactly at $M = 1$.
