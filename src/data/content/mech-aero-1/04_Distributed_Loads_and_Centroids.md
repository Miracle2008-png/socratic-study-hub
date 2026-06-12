# Distributed Loads and Centroids

## Introduction

Structural loads rarely act as neat point forces. Aerodynamic pressure distributes over every square centimeter of a wing skin. Snow packs uniformly across a roof span. Hydrostatic pressure increases linearly with depth on a dam face. Working with these **distributed loads** requires replacing them with statically equivalent resultants, and that replacement lives at the **centroid** of the load diagram.

Understanding centroids and distributed loads is also the gateway to calculating section properties (area, centroid, moment of inertia) that govern beam bending and buckling analysis in solid mechanics.

---

## Distributed Loads

A distributed load is characterized by its **intensity** $w(x)$ in units of force per length (N/m, kN/m) or force per area (Pa, kPa).

### Resultant Force and Location

The resultant force equals the **area under the load diagram**:

$$
R = \int_0^L w(x)\,dx
$$

The resultant acts through the **centroid** of the load diagram:

$$
\bar{x} = \frac{\int_0^L x\,w(x)\,dx}{\int_0^L w(x)\,dx}
$$

### Common Load Distributions

| Distribution | $w(x)$ | $R$ | $\bar{x}$ from left end |
|---|---|---|---|
| Uniform | $w_0$ | $w_0 L$ | $L/2$ |
| Triangular (zero at left) | $w_0 x/L$ | $\frac{1}{2}w_0 L$ | $2L/3$ |
| Triangular (zero at right) | $w_0(1-x/L)$ | $\frac{1}{2}w_0 L$ | $L/3$ |
| Parabolic | $w_0(x/L)^2$ | $\frac{1}{3}w_0 L$ | $3L/4$ |

---

## Centroids of Areas

The **centroid** $(\bar{x}, \bar{y})$ of an area $A$ is:

$$
\bar{x} = \frac{\int x\,dA}{A}, \qquad \bar{y} = \frac{\int y\,dA}{A}
$$

For composite areas (combining standard shapes), use the **composite method**:

$$
\bar{x} = \frac{\sum A_i \bar{x}_i}{\sum A_i}, \qquad \bar{y} = \frac{\sum A_i \bar{y}_i}{\sum A_i}
$$

**Subtract** areas for holes or cutouts (treat them as negative areas).

### Centroid Table for Common Shapes

| Shape | Area $A$ | $\bar{x}$ | $\bar{y}$ |
|---|---|---|---|
| Rectangle $b \times h$ | $bh$ | $b/2$ | $h/2$ |
| Triangle (base $b$, height $h$) | $bh/2$ | $b/3$ (from apex) | $h/3$ (from base) |
| Semicircle (radius $r$) | $\pi r^2/2$ | $0$ | $4r/(3\pi)$ |
| Quarter circle | $\pi r^2/4$ | $4r/(3\pi)$ | $4r/(3\pi)$ |

---

## Worked Example 1 — Wing Lift Distribution

An aircraft wing of semi-span $s = 8.0\ \text{m}$ carries an elliptic lift distribution:

$$
w(y) = w_0\sqrt{1 - \left(\frac{y}{s}\right)^2}, \quad 0 \le y \le s
$$

with $w_0 = 12\ \text{kN/m}$ at the root. Find the total lift on the semi-wing and the spanwise location of the resultant.

**Total lift (semi-wing):**

$$
L = \int_0^s w_0\sqrt{1-(y/s)^2}\,dy = w_0 \cdot \frac{\pi s}{4} = 12 \times \frac{\pi \times 8}{4}
$$

$$
L = 12 \times 6.283 = 75.4\ \text{kN}
$$

**Centroid location** (standard result for a semi-ellipse):

$$
\bar{y} = \frac{4s}{3\pi} = \frac{4 \times 8}{3\pi} = \frac{32}{9.425} \approx 3.40\ \text{m from root}
$$

This centroid position defines the **aerodynamic center** arm for computing the root bending moment: $M_{root} = L \times \bar{y} = 75.4 \times 3.40 = 256\ \text{kN·m}$ — the primary design load for the wing-root spar.

---

## Worked Example 2 — Hydrostatic Force on a Dam Gate

A vertical rectangular dam gate is $b = 3.0\ \text{m}$ wide and $h = 4.0\ \text{m}$ tall. Water (density $\rho = 1000\ \text{kg/m}^3$, $g = 9.81\ \text{m/s}^2$) fills to the top of the gate. Find the resultant hydrostatic force and its point of application.

Hydrostatic pressure varies linearly with depth $y$ from the surface:

$$
p(y) = \rho g y = 9810y\ \text{Pa}
$$

Distributed load intensity (force per unit height):

$$
w(y) = p(y) \cdot b = 9810y \times 3.0 = 29\,430\,y\ \text{N/m}
$$

**Resultant force** (area of triangular load diagram):

$$
R = \frac{1}{2} w_{max} \cdot h = \frac{1}{2}(29\,430 \times 4.0)(4.0) = \frac{1}{2}(117\,720)(4.0)
$$

$$
R = \frac{1}{2}\rho g h^2 b = \frac{1}{2}(1000)(9.81)(16)(3) = 235.4\ \text{kN}
$$

**Point of application** (centroid of triangle, measured from surface):

$$
\bar{y} = \frac{2}{3}h = \frac{2}{3}(4.0) = 2.67\ \text{m from water surface}
$$

The gate hinge or seal must resist $235.4\ \text{kN}$ applied at $2.67\ \text{m}$ depth — **not** at the geometric center.

---

## Worked Example 3 — I-Beam Centroid by Composite Method

An I-section beam consists of:
- Top flange: $200\ \text{mm} \times 20\ \text{mm}$ (top)
- Web: $20\ \text{mm} \times 160\ \text{mm}$
- Bottom flange: $200\ \text{mm} \times 20\ \text{mm}$ (bottom)

Measure $y$ upward from the bottom edge. Total height = 200 mm.

| Part | $A_i\ (\text{mm}^2)$ | $\bar{y}_i\ (\text{mm})$ | $A_i\bar{y}_i\ (\text{mm}^3)$ |
|------|----------|---------|------------|
| Bottom flange | $200 \times 20 = 4000$ | $10$ | $40\,000$ |
| Web | $20 \times 160 = 3200$ | $100$ | $320\,000$ |
| Top flange | $200 \times 20 = 4000$ | $190$ | $760\,000$ |
| **Total** | $11\,200$ | — | $1\,120\,000$ |

$$
\bar{y} = \frac{1\,120\,000}{11\,200} = 100\ \text{mm}
$$

By symmetry, the centroid lies at mid-height — confirmed. Knowing $\bar{y}$ enables computing the **second moment of area** $I$ about the centroidal axis, the key property for bending stress calculations.

---

## Engineering Applications

- **Beam design**: Replace all distributed loads with resultants before writing equilibrium equations — but remember to restore the distributed load when computing internal shear and moment diagrams.
- **Center of gravity (CG) control**: Aircraft CG must lie within the stability envelope; finding it uses the same centroid formula applied to component weights.
- **Fuel slosh**: As fuel burns, the wing-tank centroid shifts, changing the CG — a critical flight dynamics constraint managed by fuel burn sequencing.

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Identify Distributed Load Profile","description":"Determine w(x) function: uniform, triangular, parabolic, or arbitrary"}},{"id":"2","data":{"label":"Compute Resultant Force","description":"R = ∫w(x)dx — equals area under the load diagram"}},{"id":"3","data":{"label":"Locate Centroid of Load Diagram","description":"x̄ = ∫x·w(x)dx / ∫w(x)dx — centroid of load shape"}},{"id":"4","data":{"label":"Apply Resultant to FBD","description":"Replace distributed load with R acting at x̄ for equilibrium analysis"}},{"id":"5","data":{"label":"Find Area Centroid (Composite Method)","description":"x̄ = ΣAᵢx̄ᵢ / ΣAᵢ for cross-section properties"}},{"id":"6","data":{"label":"Compute Moments of Inertia","description":"I = Σ(Iᵢ + Aᵢdᵢ²) using parallel axis theorem"}},{"id":"7","data":{"label":"Use in Structural Analysis","description":"Section properties drive bending stress, deflection, and buckling calculations"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"integrate"},{"id":"e2","source":"2","target":"3","label":"centroid"},{"id":"e3","source":"3","target":"4","label":"replace"},{"id":"e4","source":"4","target":"5","label":"cross-section"},{"id":"e5","source":"5","target":"6","label":"second moment"},{"id":"e6","source":"6","target":"7","label":"structural design"}]}
```
