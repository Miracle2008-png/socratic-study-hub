# Supersonic Thin Airfoil Theory

Supersonic aerodynamics is fundamentally different from subsonic aerodynamics. The hyperbolic nature of the governing equations means disturbances propagate only downstream, within specific **Mach cones**. Analytical solutions that are impossible subsonically become tractable supersonically.

## 1. The Ackeret Theory (Linearized Supersonic Flow)

For a thin airfoil at small angle of attack in supersonic flow ($M_\infty > 1$), the linearized potential flow equation becomes a **wave equation**:

$$(M_\infty^2 - 1)\frac{\partial^2\phi'}{\partial x^2} = \frac{\partial^2\phi'}{\partial y^2}$$

Let $\beta = \sqrt{M_\infty^2 - 1}$ (note: $\beta$ is now real, unlike the subsonic case where $\beta = \sqrt{1-M^2}$).

The solution propagates along **Mach lines** (characteristics) at angle $\mu = \arcsin(1/M_\infty)$ to the flow direction.

**Ackeret's linearized result** for the pressure coefficient on a flat surface inclined at local angle $\theta$ to the free stream:

$$C_p = \frac{\pm 2\theta}{\beta} = \frac{\pm 2\theta}{\sqrt{M_\infty^2 - 1}}$$

where $+$ applies to surfaces deflecting the flow toward the freestream (compression), and $-$ applies to surfaces deflecting away (expansion).

## 2. Lift and Drag of a Supersonic Airfoil

For an **arbitrary thin airfoil** with local upper surface slope $\theta_u(x)$ and lower surface slope $\theta_l(x)$:

$$C_p^{upper} = \frac{-2\theta_u}{\beta}, \qquad C_p^{lower} = \frac{+2\theta_l}{\beta}$$

After integrating over the chord, for a thin airfoil with angle of attack $\alpha$, thickness function $t(x)$, and camber $z_c(x)$:

$$C_L = \frac{4\alpha}{\beta}$$

$$C_D = \frac{4}{\beta}\left(\alpha^2 + \left\langle\left(\frac{dz_c}{dx}\right)^2\right\rangle + \left\langle\left(\frac{dt/2}{dx}\right)^2\right\rangle\right)$$

where $\langle \cdot \rangle$ denotes the mean-square value over the chord.

**Key observation:** In supersonic flow, **all** thin airfoils have wave drag — even a flat plate at zero angle of attack has drag due to thickness. This is fundamentally different from subsonic inviscid flow (zero drag by d'Alembert's paradox).

## 3. Optimal Supersonic Airfoil Shape

Minimizing wave drag for a given thickness ratio $t/c$:
- **Zero camber:** Camber contributes to drag (through $dz_c/dx$ term) without improving lift slope. Symmetric airfoils are optimal for pure supersonic flight.
- **Minimum thickness distribution:** A **double-wedge** (biconvex) or **diamond** cross-section minimizes the thickness-squared term for a given $t/c$.
- **Sharp leading and trailing edges:** Unlike subsonic airfoils which need rounded leading edges, supersonic airfoils need sharp edges to avoid strong bow shocks.

This is why supersonic fighter jet wings look so radically different from subsonic airliner wings: razor-thin, low aspect ratio, sharp leading edges, often delta or cropped delta planforms.

## 4. Comparison of Subsonic vs. Supersonic Behavior

| Property | Subsonic | Supersonic |
|----------|----------|------------|
| Lift slope ($dC_L/d\alpha$) | $2\pi$ (thin airfoil) | $4/\beta$ |
| Wave drag | Zero (ideal) | Always non-zero |
| Optimal leading edge | Round (gentle stagnation) | Sharp (avoid bow shock) |
| Pitching moment AC | $c/4$ | $c/2$ |
| Effect of thickness | Slight lift increase | Pure drag increase |

The shift of the aerodynamic center from $c/4$ to $c/2$ between subsonic and supersonic flight is a major stability challenge for supersonic aircraft — the nose-heavy pitching moment change requires large pitch trim adjustments.
