# Flow in Annuli and Non-Circular Geometries

Shell momentum balances can be extended beyond simple cylindrical pipes to annuli (the gap between two coaxial cylinders) and other geometries. These configurations appear constantly in heat exchangers, extruders, journal bearings, and wellbore drilling operations.

## 1. Shell Balance for Annular Flow

Consider a viscous fluid flowing in the annular gap between an inner cylinder of radius $\kappa R$ and an outer cylinder of radius $R$, driven by a pressure difference $\Delta P$ over length $L$.

The shell balance proceeds identically to pipe flow, yielding the same ODE:

$$\frac{d}{dr}(r\tau_{rz}) = \frac{\Delta P}{L} r$$

Integrating:

$$\tau_{rz} = \frac{\Delta P}{2L} r + \frac{C_1}{r}$$

Note the extra $C_1/r$ term — this time the symmetry boundary condition ($C_1 = 0$) cannot be applied because the centreline $r = 0$ is not part of the fluid domain. Instead, we have **two no-slip boundary conditions**:

$$v_z(\kappa R) = 0 \quad \text{and} \quad v_z(R) = 0$$

## 2. Velocity Profile in an Annulus

Substituting $\tau_{rz} = -\mu \frac{dv_z}{dr}$ and integrating twice, then applying both boundary conditions, yields:

$$v_z(r) = \frac{\Delta P R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2 + \frac{1-\kappa^2}{\ln(1/\kappa)}\ln\left(\frac{r}{R}\right)\right]$$

The velocity profile in an annulus is **not symmetric** — the maximum velocity does not occur at the midpoint of the gap. It shifts towards the inner cylinder because that is where the curvature-adjusted pressure gradient is strongest.

The radial position of maximum velocity $r_{\max}$ is found by setting $dv_z/dr = 0$:

$$r_{\max} = R\sqrt{\frac{1 - \kappa^2}{2\ln(1/\kappa)}}$$

## 3. Volumetric Flow Rate Through an Annulus

Integrating the velocity profile:

$$Q = \frac{\pi \Delta P R^4}{8\mu L}\left[(1-\kappa^4) - \frac{(1-\kappa^2)^2}{\ln(1/\kappa)}\right]$$

In the limit $\kappa \to 0$ (thin inner cylinder vanishes), this correctly reduces to the Hagen-Poiseuille result for a simple pipe. In the limit $\kappa \to 1$ (narrow gap), the flow approaches plane Couette/Poiseuille flow.

## 4. Equivalent Diameter for Non-Circular Ducts

For turbulent flow in non-circular geometries (rectangular ducts, triangular passages), engineers use the **hydraulic diameter** $D_h$ as an equivalent pipe diameter:

$$D_h = \frac{4 \times \text{Cross-sectional area}}{\text{Wetted perimeter}} = \frac{4A}{P_w}$$

For common geometries:
- **Circular pipe:** $D_h = D$ ✓ (consistent by definition)
- **Square duct** (side $a$): $D_h = \frac{4a^2}{4a} = a$
- **Rectangular duct** ($a \times b$): $D_h = \frac{2ab}{a+b}$
- **Annulus** (radii $R_o$, $R_i$): $D_h = 2(R_o - R_i)$

The hydraulic diameter is then used in the standard friction factor and Reynolds number correlations as if the duct were circular.

## 5. Flow Between Parallel Plates (Slit Flow)

For flow between two parallel plates separated by distance $2B$, width $W$, the shell balance gives a parabolic profile:

$$v_z(y) = \frac{\Delta P B^2}{2\mu L}\left[1 - \left(\frac{y}{B}\right)^2\right]$$

Where $y$ is measured from the centreline. The volumetric flow rate:

$$Q = \frac{2\Delta P B^3 W}{3\mu L}$$

Note the $B^3$ dependence — slit flow is slightly less sensitive to gap size than pipe flow ($R^4$). This result is critical for designing sheet metal extrusion dies and packed bed models.

## 6. Worked Example: Annular Drilling Fluid Flow

**Problem:** Drilling mud ($\mu = 0.02 \, \text{Pa·s}$, $\rho = 1200 \, \text{kg/m}^3$) flows upward in the annulus between a drill pipe (OD = $0.127 \, \text{m}$) and an open borehole (diameter $= 0.216 \, \text{m}$). If the pressure driving the flow is $\Delta P/L = 5000 \, \text{Pa/m}$, estimate the average velocity and confirm the flow regime.

**Solution:**

Inner radius: $R_i = 0.0635 \, \text{m}$; Outer radius: $R_o = 0.108 \, \text{m}$

Hydraulic diameter: $D_h = 2(R_o - R_i) = 2(0.108 - 0.0635) = 0.089 \, \text{m}$

For a narrow annulus approximation, use slit flow with $B = (R_o - R_i)/2 = 0.0223 \, \text{m}$:

$$\langle v_z \rangle \approx \frac{\Delta P}{L} \cdot \frac{B^2}{3\mu} = \frac{5000 \times (0.0223)^2}{3 \times 0.02} = \frac{5000 \times 4.97 \times 10^{-4}}{0.06} \approx 0.041 \, \text{m/s}$$

**Reynolds number** (using $D_h$):
$$Re = \frac{\rho \langle v \rangle D_h}{\mu} = \frac{1200 \times 0.041 \times 0.089}{0.02} = 219$$

Flow is **laminar** ($Re \ll 2100$). The annular slit flow model is appropriate.
