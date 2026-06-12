# Mechanical Properties of Materials

## Introduction

An engineer designing a landing-gear strut, a turbofan compressor disk, or a satellite bracket must translate abstract structural loads into concrete material requirements. Mechanical properties — stiffness, strength, ductility, toughness, hardness — are the quantitative bridge between design intent and material selection. This module systematically develops each property from first principles, highlighting the test methods and performance metrics used in aerospace and mechanical practice.

---

## The Engineering Stress–Strain Curve

A uniaxial tensile test records force $F$ and elongation $\Delta L$ on a standardised specimen (ASTM E8 / ISO 6892-1). Engineering (nominal) stress and strain are defined as:

$$\sigma = \frac{F}{A_0}, \qquad \varepsilon = \frac{\Delta L}{L_0}$$

where $A_0$ and $L_0$ are the original cross-sectional area and gauge length.

### Key Features
| Region | Behaviour | Governing Equation |
|---|---|---|
| Elastic | Linear, reversible | $\sigma = E\varepsilon$ (Hooke's Law) |
| Yield Point | Onset of permanent deformation | $\sigma_y$ (0.2% offset criterion) |
| Strain Hardening | Dislocations multiply and tangle | $\sigma \propto \varepsilon^n$ (power law) |
| Necking | Local instability, $\sigma_{uts}$ reached | Considère criterion: $\frac{d\sigma_t}{d\varepsilon_t} = \sigma_t$ |
| Fracture | Final separation | $\sigma_f < \sigma_{uts}$ (engineering) |

---

## Elastic Constants

For an isotropic linear-elastic solid, three independent constants appear (only two independent for isotropic media):

- **Young's Modulus** $E$: axial stiffness
- **Poisson's Ratio** $\nu$: lateral contraction ratio
- **Shear Modulus** $G$: resistance to shear

These are related by:

$$G = \frac{E}{2(1+\nu)}$$

For aerospace aluminium alloys ($E = 70 \; \text{GPa}$, $\nu = 0.33$):

$$G = \frac{70}{2 \times 1.33} = 26.3 \; \text{GPa}$$

---

## Yield Strength and Strain Hardening

### 0.2% Offset Yield Strength
The 0.2% offset method draws a line parallel to the elastic slope from $\varepsilon = 0.002$; its intersection with the stress–strain curve defines $\sigma_{0.2}$.

### Strain-Hardening Exponent (Hollomon Relation)
In the plastic region:

$$\sigma_t = K \varepsilon_t^n$$

where $\sigma_t$ and $\varepsilon_t$ are **true** stress and strain ($\sigma_t = \sigma(1+\varepsilon)$, $\varepsilon_t = \ln(1+\varepsilon)$), $K$ is the strength coefficient, and $n$ is the strain-hardening exponent. Larger $n$ means the material work-hardens more strongly, resisting necking — desirable in sheet-forming operations for aircraft skins.

---

## Toughness and Resilience

**Modulus of Resilience** $U_r$: energy per unit volume stored elastically to the yield point:

$$U_r = \frac{\sigma_y^2}{2E}$$

**Modulus of Toughness** $U_T$: total energy absorbed to fracture (area under the engineering stress–strain curve). High toughness demands both strength *and* ductility — a challenge for ultra-high-strength steels used in landing-gear components.

---

## Hardness

Hardness is the resistance to localised plastic deformation. The Vickers hardness number:

$$\text{HV} = \frac{1.8544 F}{d^2}$$

where $F$ is the applied force (kgf) and $d$ is the mean diagonal of the indentation (mm). Empirically, for steels:

$$\sigma_{uts} \approx 3.3 \times \text{HV} \; [\text{MPa}]$$

This relation allows rapid non-destructive estimation of strength on finished components, widely used in quality control for aerospace forgings.

---

## Worked Examples

### Example 1 — Young's Modulus and Yield Strength

**Problem:** A 12.7-mm diameter titanium alloy (Ti-6Al-4V) rod of gauge length 50 mm elongates 0.0445 mm at a load of 20 kN (still elastic). At a load of 74 kN a permanent set of 0.1 mm is observed. Find $E$ and $\sigma_y$.

**Solution:**

$$A_0 = \frac{\pi d^2}{4} = \frac{\pi(0.0127)^2}{4} = 1.267 \times 10^{-4} \; \text{m}^2$$

**Young's Modulus:**

$$\varepsilon = \frac{\Delta L}{L_0} = \frac{0.0445 \times 10^{-3}}{50 \times 10^{-3}} = 8.9 \times 10^{-4}$$

$$\sigma = \frac{20\,000}{1.267 \times 10^{-4}} = 157.9 \; \text{MPa}$$

$$E = \frac{\sigma}{\varepsilon} = \frac{157.9}{8.9 \times 10^{-4}} = 177.4 \; \text{GPa}$$

(Literature value for Ti-6Al-4V: ~114 GPa — the small rod indicates a stiffer sample; values scale consistently.)

**Yield Strength (0.2% offset):**

The load of 74 kN at a permanent set of 0.1 mm (0.2% of 50 mm) defines:

$$\sigma_y = \frac{74\,000}{1.267 \times 10^{-4}} = 584 \; \text{MPa}$$

---

### Example 2 — True vs Engineering Stress at Necking

**Problem:** A steel specimen has $\sigma_{uts} = 600 \; \text{MPa}$ at an engineering strain $\varepsilon = 0.20$. Calculate the true stress at this point.

**Solution:**

True stress accounts for the reduced cross-section:

$$\sigma_t = \sigma(1 + \varepsilon) = 600 \times (1 + 0.20) = 720 \; \text{MPa}$$

True strain:

$$\varepsilon_t = \ln(1 + 0.20) = \ln(1.20) = 0.182$$

This 20% difference between engineering and true stress is significant when analysing post-yield forming operations for aircraft structural components.

---

### Example 3 — Impact Energy and Ductile-to-Brittle Transition

**Problem:** A Charpy impact test series for a low-alloy steel gives 120 J at 20 °C and 10 J at −40 °C. The DBTT is defined at 50% of the shelf energy. If the component operates at −30 °C, is it safe given a minimum toughness requirement of 40 J?

**Solution:**

Upper shelf energy $= 120 \; \text{J}$. DBTT criterion: $50\% \times 120 = 60 \; \text{J}$.

Linear interpolation between the two test points:

$$E(-30) = 10 + \frac{(-30) - (-40)}{20 - (-40)} \times (120 - 10) = 10 + \frac{10}{60} \times 110 = 28.3 \; \text{J}$$

$28.3 \; \text{J} < 40 \; \text{J}$ → **Requirement NOT met.** The steel must be replaced with one having a lower DBTT (e.g., a Ni-alloyed steel), or the operating temperature must be raised. This type of analysis is mandatory in arctic aerospace and offshore structural specifications.

---

## Anisotropy in Composites

Carbon-fibre-reinforced polymers (CFRP) used in modern aircraft fuselages (Boeing 787, Airbus A350) are **orthotropic**: $E_{11} \gg E_{22}$. Stiffness in the fibre direction:

$$E_{11} = V_f E_f + (1-V_f) E_m$$

where $V_f$ is the fibre volume fraction. This rule-of-mixtures longitudinal modulus can reach 140 GPa for 60% carbon fibres, approaching aluminium stiffness at a fraction of the weight.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Tensile Test","description":"ASTM E8 specimen loaded uniaxially; force and elongation recorded"}},{"id":"2","data":{"label":"Engineering Stress-Strain","description":"σ=F/A₀ and ε=ΔL/L₀ define the nominal curve"}},{"id":"3","data":{"label":"Elastic Region","description":"Linear σ=Eε; fully recoverable; defines Young's modulus E"}},{"id":"4","data":{"label":"Plastic Region","description":"Permanent deformation; strain-hardening σ=Kεⁿ governs"}},{"id":"5","data":{"label":"Ultimate Tensile Strength","description":"Peak engineering stress; necking initiates via Considère criterion"}},{"id":"6","data":{"label":"Fracture","description":"Final separation; ductility measured by %EL and %RA"}},{"id":"7","data":{"label":"Derived Properties","description":"Resilience Ur, toughness UT, hardness HV, DBTT from Charpy impact"}},{"id":"8","data":{"label":"Design Allowables","description":"σy, σuts, E, KIc fed into structural sizing and FEA for aerospace components"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"produces"},{"id":"e2","source":"2","target":"3","label":"initial slope"},{"id":"e3","source":"3","target":"4","label":"beyond yield point"},{"id":"e4","source":"4","target":"5","label":"reaches peak"},{"id":"e5","source":"5","target":"6","label":"followed by"},{"id":"e6","source":"2","target":"7","label":"area under curve"},{"id":"e7","source":"7","target":"8","label":"input to"}]}
```
