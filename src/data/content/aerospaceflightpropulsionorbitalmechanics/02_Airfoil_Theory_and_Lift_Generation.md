# Airfoil Theory and Lift Generation

## Introduction

The wing airfoil is the aerodynamic heart of any aircraft. From the gentle camber of a Cessna 172's NACA 2412 to the supercritical profiles of the Boeing 787 and the razor-thin double-wedge sections of a Concorde, airfoil design directly governs cruise efficiency, stall characteristics, and transonic behaviour. This module develops thin-airfoil theory, explains the physical mechanisms of lift, and connects classical aerodynamics to modern computational and experimental practice.

---

## 1. Geometry and Nomenclature

An airfoil section is defined by:

- **Chord line** $c$: straight line from leading edge (LE) to trailing edge (TE).
- **Camber line**: locus of midpoints between upper and lower surfaces.
- **Maximum camber** $m$ at location $p$ (both as fractions of $c$).
- **Maximum thickness** $t$ (as fraction of $c$).

A NACA 4-digit airfoil NACA $mptt$ encodes these directly. For NACA 2412: $m = 0.02c$, $p = 0.4c$, $t = 0.12c$.

The **angle of attack** $\alpha$ is the angle between the freestream velocity $V_\infty$ and the chord line.

---

## 2. Thin Airfoil Theory (Joukowski / Munk)

For thin airfoils at small $\alpha$, linearised potential flow gives elegant closed-form results. The airfoil is replaced by a vortex sheet of strength $\gamma(\xi)$ distributed along the chord:

$$\frac{1}{2\pi} \int_0^c \frac{\gamma(\xi)\,d\xi}{x - \xi} = V_\infty \left(\alpha - \frac{dz_c}{dx}\right)$$

### 2.1 Symmetric Airfoil (Zero Camber)

For a flat plate: $dz_c/dx = 0$, solution gives:

$$C_L = 2\pi\alpha \qquad \left(\text{where } \alpha \text{ in radians}\right)$$

The **lift-curve slope** is $a_0 = 2\pi\ \text{rad}^{-1}$ — a fundamental result valid for all thin symmetric airfoils.

### 2.2 Cambered Airfoil

For a general camber line, the solution adds a camber contribution:

$$C_L = 2\pi(\alpha - \alpha_{L=0})$$

where the **zero-lift angle of attack** is:

$$\alpha_{L=0} = -\frac{1}{\pi}\int_0^\pi \frac{dz_c}{dx}(\cos\theta - 1)\,d\theta$$

For a NACA 2412 airfoil, $\alpha_{L=0} \approx -2.1°$, meaning the wing generates lift even at $\alpha = 0°$.

### 2.3 Pitching Moment

The **aerodynamic centre** (AC) — the point about which $C_m$ is independent of $\alpha$ — lies at the **quarter-chord point** $x_{AC} = c/4$ for any thin airfoil. The pitching moment coefficient about the AC:

$$C_{m,c/4} = -\frac{\pi}{2}(A_1 - A_2)$$

where $A_1$, $A_2$ are Fourier coefficients of the camber line slope.

---

## 3. Finite Wing Effects and Induced Drag

A finite-span wing ($b$ = span) creates trailing vortices that induce a downwash velocity $w_i$ behind the wing:

$$w_i = \frac{\Gamma}{4\pi} \cdot \text{(vortex integral)}$$

For an elliptic lift distribution (ideal, achieves minimum induced drag):

$$w_i = \frac{C_L V_\infty}{\pi AR}, \qquad C_{D,i} = \frac{C_L^2}{\pi AR}$$

For non-elliptic distributions, a span efficiency $e \leq 1$ is introduced:

$$C_{D,i} = \frac{C_L^2}{\pi e AR}$$

Winglets on aircraft like the Boeing 737 MAX and Airbus A320neo effectively increase the **aerodynamic span** without geometric span increase, raising $e$ from ~0.85 to ~0.95 and reducing fuel burn by 3–5%.

---

## Worked Examples

### Example 1 — Zero-Lift Angle and $C_L$ for NACA 4415

**Problem:** A NACA 4415 wing ($m = 0.04c$, $p = 0.4c$) is at $\alpha = 5°$. Using thin-airfoil theory, find $C_L$.

**Solution:**

For the NACA 4-digit camber line, the Fourier analysis yields:

$$\alpha_{L=0} = -\frac{2m}{p^2}\left(p - 1 + p\ln p\right) \approx -4° \quad \text{(from tables)}$$

$$C_L = 2\pi(\alpha - \alpha_{L=0}) = 2\pi \times \frac{5 + 4}{57.3} = 2\pi \times 0.1571 = \mathbf{0.987}$$

This agrees with experimental data to within 5%, validating the linear theory below stall.

---

### Example 2 — Induced Drag of an Airbus A320neo

**Problem:** An A320neo ($W = 73\,500\ \text{kg}$, $b = 35.8\ \text{m}$, $S = 122.6\ \text{m}^2$, $e = 0.92$) cruises at 35,000 ft (ISA: $\rho = 0.380\ \text{kg/m}^3$) at $M = 0.78$ ($V = 231\ \text{m/s}$ TAS). Find $C_L$, induced drag $C_{D,i}$, and the induced drag force.

**Solution:**

$$AR = b^2/S = 35.8^2/122.6 = 1282/122.6 = \mathbf{10.46}$$

$$q_\infty = \tfrac{1}{2}\times 0.380 \times 231^2 = 10\,144\ \text{Pa}$$

$$C_L = \frac{73\,500 \times 9.81}{10\,144 \times 122.6} = \frac{720\,735}{1\,243\,654} = \mathbf{0.580}$$

$$C_{D,i} = \frac{(0.580)^2}{\pi \times 0.92 \times 10.46} = \frac{0.3364}{30.24} = \mathbf{0.01113}$$

$$D_i = 0.01113 \times 10\,144 \times 122.6 = \mathbf{13\,840\ \text{N}} \approx 13.8\ \text{kN}$$

Induced drag accounts for roughly 35–40% of total cruise drag for modern narrowbody airliners — a key driver of high-aspect-ratio wing and winglet investment.

---

### Example 3 — Stall Speed Calculation

**Problem:** The A320neo has $C_{L,\max} = 2.45$ (with full flaps). What is the minimum stall speed $V_s$ at sea level ($\rho = 1.225\ \text{kg/m}^3$)?

**Solution:**

At stall, $L = W$:

$$V_s = \sqrt{\frac{2W}{\rho S C_{L,\max}}} = \sqrt{\frac{2 \times 720\,735}{1.225 \times 122.6 \times 2.45}}$$

$$V_s = \sqrt{\frac{1\,441\,470}{368.0}} = \sqrt{3916} = \mathbf{62.6\ \text{m/s}} \approx 122\ \text{knots (KTAS)}$$

FAR 25 requires approach speed $V_{app} \geq 1.23 V_s = 76.9\ \text{m/s}$ (150 KTAS), consistent with published A320 VAPP values.

---

## 4. Supercritical Airfoils and Transonic Design

Classical airfoils suffer from **wave drag** as local Mach number exceeds 1 before $M_\infty = 1$. The **critical Mach number** $M_{cr}$ can be estimated from the pressure minimum:

$$C_{p,cr} = \frac{2}{\gamma M_\infty^2}\left[\left(\frac{2+(\gamma-1)M_\infty^2}{\gamma+1}\right)^{\gamma/(\gamma-1)} - 1\right]$$

Richard Whitcomb's supercritical airfoil (1960s NASA) reduced upper-surface curvature, spreading the pressure recovery aft, raising $M_{cr}$ from ~0.74 to ~0.84 for the same lift coefficient — enabling modern jets to cruise at $M = 0.82$–$0.86$.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Airfoil Geometry","description":"Chord, camber line, thickness distribution define aerodynamic shape"}},{"id":"2","data":{"label":"Thin Airfoil Theory","description":"Vortex sheet model; C_L = 2π(α − α_L=0)"}},{"id":"3","data":{"label":"Zero-Lift Angle","description":"α_L=0 from camber integral; negative for positive camber"}},{"id":"4","data":{"label":"Aerodynamic Centre","description":"Moment reference at c/4; C_m independent of α"}},{"id":"5","data":{"label":"Finite Wing / AR Effect","description":"Trailing vortex system induces downwash; reduces effective α"}},{"id":"6","data":{"label":"Induced Drag","description":"C_Di = C_L²/(π·e·AR); elliptic loading minimises drag"}},{"id":"7","data":{"label":"Stall & C_L,max","description":"Flow separates at high α; sets minimum flight speed V_s"}},{"id":"8","data":{"label":"Supercritical Design","description":"Aft-loaded pressure recovery raises M_cr, reduces wave drag"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"input shape"},{"id":"e2","source":"2","target":"3","label":"camber integral"},{"id":"e3","source":"2","target":"4","label":"moment result"},{"id":"e4","source":"2","target":"5","label":"extend to 3D"},{"id":"e5","source":"5","target":"6","label":"downwash → drag"},{"id":"e6","source":"2","target":"7","label":"α → C_L,max"},{"id":"e7","source":"1","target":"8","label":"transonic redesign"}]}
```
