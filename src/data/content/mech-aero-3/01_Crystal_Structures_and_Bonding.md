# Crystal Structures and Bonding

## Introduction

The macroscopic mechanical behaviour of every engineering material — from titanium turbine blades to polymer composites — is rooted in the atomic-scale arrangement of atoms and the forces holding them together. Understanding crystal structures and bonding gives engineers a rational basis for selecting materials, predicting failure modes, and designing alloys or composites that meet demanding aerospace and mechanical specifications.

---

## Atomic Bonding Types

### Metallic Bonding
In metals, outer (valence) electrons are delocalized into a "sea of electrons" surrounding positive ion cores. This electron sea explains the hallmark properties of structural metals: high electrical and thermal conductivity, ductility, malleability, and moderate-to-high stiffness.

**Cohesive energy** (energy to separate all atoms to infinity) scales with bond strength. For aluminium alloys used in airframes:

$$E_{\text{cohesive}} \approx 3.4 \; \text{eV/atom}$$

### Covalent Bonding
Shared electron pairs create directional, often very stiff bonds. Diamond ($E \approx 1050 \; \text{GPa}$) and silicon carbide (SiC, used in ceramic matrix composites for hypersonic structures) are paradigmatic examples. Directionality makes covalent solids hard but brittle.

### Ionic Bonding
Electrostatic attraction between oppositely charged ions. Alumina ($\text{Al}_2\text{O}_3$) coatings on turbine blades rely on ionic bonding for high melting points ($T_m \approx 2072\,^\circ\text{C}$) and oxidation resistance.

### Van der Waals / Secondary Bonds
Weak dispersion forces dominate in polymers and graphite. Although individually feeble (~0.01–0.1 eV), they collectively control inter-laminar shear strength in carbon-fibre-reinforced polymer (CFRP) composites.

---

## Crystal Structures of Engineering Metals

### Face-Centred Cubic (FCC)
Atoms at each corner and each face centre of the unit cell. Packing efficiency = 74%. FCC metals — aluminium, copper, nickel, austenitic stainless steel — are **generally ductile** because of abundant {111}⟨110⟩ slip systems (12 independent).

**Coordination number:** 12  
**Atoms per unit cell:** 4  
**Relation between lattice parameter $a$ and atomic radius $R$:**

$$a = 2\sqrt{2}\,R$$

### Body-Centred Cubic (BCC)
Atom at each corner plus one at the cube centre. Packing efficiency = 68%. BCC metals — iron (α-iron below 912 °C), tungsten, chromium — have fewer easy slip systems and a pronounced **ductile-to-brittle transition temperature (DBTT)**, critical for low-temperature aerospace applications.

$$a = \frac{4R}{\sqrt{3}}$$

### Hexagonal Close-Packed (HCP)
Packing efficiency = 74%, matching FCC, but limited slip systems make HCP metals (titanium, magnesium, zinc) **less ductile** than FCC. Titanium's HCP α-phase transitions to BCC β-phase above 883 °C, enabling diverse microstructures through heat treatment — key to Ti-6Al-4V alloy design.

---

## Miller Indices

Crystallographic planes and directions are described with Miller indices. For a plane with intercepts $(1/h, 1/k, 1/l)$ on the $a$, $b$, $c$ axes, the notation $(hkl)$ identifies the plane family.

**Planar density** of the (110) plane in BCC iron:

$$\rho_{(110)} = \frac{2 \text{ atoms}}{a^2 \sqrt{2}}$$

High planar density → preferred slip planes → governs dislocation motion and yield behaviour.

---

## Worked Examples

### Example 1 — Lattice Parameter from X-Ray Diffraction

**Problem:** X-ray diffraction of FCC nickel (used in superalloy turbine discs) gives a peak for the (220) plane at $2\theta = 78.5°$ with $\lambda = 0.154 \; \text{nm}$. Calculate the lattice parameter $a$.

**Solution:**

Apply Bragg's Law:

$$n\lambda = 2d_{hkl}\sin\theta$$

For $(hkl) = (220)$, the interplanar spacing in cubic systems:

$$d_{220} = \frac{a}{\sqrt{h^2 + k^2 + l^2}} = \frac{a}{\sqrt{4+4+0}} = \frac{a}{2\sqrt{2}}$$

With $n = 1$, $\theta = 39.25°$:

$$d_{220} = \frac{\lambda}{2\sin\theta} = \frac{0.154}{2 \times 0.635} = 0.1213 \; \text{nm}$$

$$a = 2\sqrt{2} \times d_{220} = 2\sqrt{2} \times 0.1213 = 0.343 \; \text{nm}$$

This matches the known value for Ni ($a = 0.352$ nm), within experimental error.

---

### Example 2 — Packing Fraction of FCC

**Problem:** Derive the atomic packing fraction (APF) for an FCC crystal.

**Solution:**

Atoms per cell = 4. Volume of 4 spheres with radius $R$:

$$V_{\text{atoms}} = 4 \times \frac{4}{3}\pi R^3 = \frac{16\pi R^3}{3}$$

Cell edge from touching atoms along face diagonal: $a = 2\sqrt{2}R$, so:

$$V_{\text{cell}} = a^3 = (2\sqrt{2}R)^3 = 16\sqrt{2}\,R^3$$

$$\text{APF} = \frac{16\pi R^3/3}{16\sqrt{2}\,R^3} = \frac{\pi}{3\sqrt{2}} \approx 0.7405$$

FCC packs 74.05% of space, leaving 26% as interstitial voids — channels for carbon diffusion in steel carburisation processes.

---

### Example 3 — Linear Density and Slip Direction

**Problem:** Calculate the linear density along $[110]$ in FCC copper ($a = 0.3615 \; \text{nm}$) and confirm this is the close-packed direction.

**Solution:**

The $[110]$ direction spans a face diagonal of length $a\sqrt{2}$. Atoms centred on the path: corner atom (½) + face atom (1) + corner atom (½) = **2 atoms**.

$$\rho_{[110]} = \frac{2}{a\sqrt{2}} = \frac{2}{0.3615 \times 1.4142} = 3.91 \; \text{atoms/nm}$$

The $[100]$ direction has $\rho_{[100]} = 1/a = 2.77 \; \text{atoms/nm}$, confirming $[110]$ is denser and thus the preferred slip direction. This is why FCC copper is readily drawable into wire.

---

## Defects and Their Engineering Significance

Real crystals contain **point defects** (vacancies, interstitials, substitutional atoms), **line defects** (dislocations), and **planar defects** (grain boundaries, stacking faults). Vacancy concentration at temperature $T$:

$$\frac{N_v}{N} = \exp\!\left(-\frac{Q_v}{k_B T}\right)$$

where $Q_v$ is the vacancy formation energy and $k_B$ is Boltzmann's constant. At turbine operating temperatures (~1000 °C), vacancy concentrations rise dramatically, enabling creep — a critical design constraint for hot-section components.

---

## Aerospace Relevance Summary

| Material | Structure | Key Property | Application |
|---|---|---|---|
| Ti-6Al-4V | α (HCP) + β (BCC) | High strength-to-weight | Fan blades, airframes |
| Inconel 718 | FCC (γ matrix) | Creep resistance | Turbine discs |
| Al 7075 | FCC | High specific strength | Wing skins |
| WC-Co | Mixed | Extreme hardness | Cutting inserts |

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Atomic Bonding Type","description":"Metallic, covalent, ionic, or van der Waals bonds determine fundamental material character"}},{"id":"2","data":{"label":"Crystal Structure","description":"FCC, BCC, or HCP unit cells define atomic packing, coordination, and slip systems"}},{"id":"3","data":{"label":"Lattice Parameter (a)","description":"Determined by X-ray diffraction via Bragg's Law; sets interplanar spacings"}},{"id":"4","data":{"label":"Slip Systems","description":"High-density planes and directions govern dislocation motion and plastic deformation"}},{"id":"5","data":{"label":"Crystal Defects","description":"Vacancies, dislocations, and grain boundaries control strength, diffusion, and creep"}},{"id":"6","data":{"label":"Macroscopic Properties","description":"Elastic modulus, yield strength, ductility, and conductivity emerge from atomic-scale structure"}},{"id":"7","data":{"label":"Engineering Application","description":"Material selection for turbine blades, airframes, and bearings based on crystal-structure properties"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"dictates"},{"id":"e2","source":"2","target":"3","label":"characterised by"},{"id":"e3","source":"2","target":"4","label":"determines"},{"id":"e4","source":"2","target":"5","label":"hosts"},{"id":"e5","source":"4","target":"6","label":"controls plasticity"},{"id":"e6","source":"5","target":"6","label":"modifies"},{"id":"e7","source":"6","target":"7","label":"drives selection"}]}
```
