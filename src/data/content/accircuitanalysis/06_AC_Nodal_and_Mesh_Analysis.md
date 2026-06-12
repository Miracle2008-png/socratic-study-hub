# 6. AC Nodal and Mesh Analysis

## Scaling Up the Complexity

Because Impedance ($\mathbf{Z}$) behaves exactly like resistance within the Phasor domain, Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) remain entirely valid.

*   **AC KCL:** The sum of all phasor currents entering a node is zero: $\sum \mathbf{I} = 0$.
*   **AC KVL:** The sum of all phasor voltages around a closed loop is zero: $\sum \mathbf{V} = 0$.

Therefore, the rigid algorithms of **Nodal Analysis** and **Mesh Analysis** that you learned in DC circuits work identically for AC circuits. The only hurdle is the complex arithmetic required to solve the resulting simultaneous equations.

---

## The AC Nodal Algorithm

1.  Convert all time-domain sources ($10\cos(100t)$) to Phasors ($10 \angle 0^\circ$).
2.  Convert all $R$, $L$, and $C$ values to their complex impedances ($\mathbf{Z}_R = R$, $\mathbf{Z}_L = j\omega L$, $\mathbf{Z}_C = -j/\omega C$).
3.  Select a Reference Node (Ground, $0\text{V}$).
4.  Write KCL at each unknown node using AC Ohm's Law: $\mathbf{I} = (\mathbf{V}_A - \mathbf{V}_B) / \mathbf{Z}$.
5.  Solve the system of complex linear equations using matrices or substitution.

---

## Engineering Applications

*   **RF Network Simulation:** Radio Frequency (RF) circuits involve complex meshes of antennas, waveguides, and matching networks. Engineers use Nodal Analysis to ensure that a $2.4\text{GHz}$ Wi-Fi signal propagates through the mesh correctly without reflecting back into the transmitter.
*   **Parasitic Extraction:** In modern microchips, two wires running next to each other accidentally form a tiny capacitor. A long wire accidentally forms a tiny inductor. Simulation software uses massive AC Nodal Matrices to calculate how these "parasitics" delay or distort signals crossing the chip.

---

## Worked Examples

### Example 1 — Medium: Basic AC Nodal Analysis

**Problem:** A single unknown node (Node 1) is connected to a $10 \angle 0^\circ \text{ V}$ source via a $4 \, \Omega$ resistor. It is connected to Ground via a capacitor with $\mathbf{Z}_C = -j2 \, \Omega$. Finally, a $3 \angle 90^\circ \text{ A}$ current source enters Node 1 from the outside. Find the phasor voltage $\mathbf{V}_1$.

**Solution:**
1.  **Write KCL at Node 1 (Assume currents leave):**
    $$ I_{\text{left}} + I_{\text{down}} - I_{\text{source}} = 0 $$
2.  **Express using AC Ohm's Law:**
    $$ \frac{\mathbf{V}_1 - 10 \angle 0^\circ}{4} + \frac{\mathbf{V}_1 - 0}{-j2} - (3 \angle 90^\circ) = 0 $$
3.  **Convert to Rectangular for easier algebra:**
    $10 \angle 0^\circ = 10 + j0 = 10$.
    $3 \angle 90^\circ = 0 + j3 = j3$.
    $$ \frac{\mathbf{V}_1}{4} - \frac{10}{4} + \frac{\mathbf{V}_1}{-j2} - j3 = 0 $$
    *(Recall that $1/-j = j$, so $1/-j2 = j0.5$)*
    $$ 0.25\mathbf{V}_1 - 2.5 + j0.5\mathbf{V}_1 - j3 = 0 $$
4.  **Group terms:**
    $$ \mathbf{V}_1(0.25 + j0.5) = 2.5 + j3 $$
5.  **Solve for $\mathbf{V}_1$:**
    $$ \mathbf{V}_1 = \frac{2.5 + j3}{0.25 + j0.5} $$
6.  **Convert to Polar to divide:**
    Numerator: $\sqrt{2.5^2 + 3^2} \angle \tan^{-1}(3/2.5) = 3.9 \angle 50.2^\circ$
    Denominator: $\sqrt{0.25^2 + 0.5^2} \angle \tan^{-1}(0.5/0.25) = 0.559 \angle 63.4^\circ$
    $$ \mathbf{V}_1 = \frac{3.9 \angle 50.2^\circ}{0.559 \angle 63.4^\circ} = \mathbf{6.98 \angle -13.2^\circ \text{ V}} $$

---

### Example 2 — Hard: AC Mesh Analysis

**Problem:** A two-mesh circuit has a $20 \angle 0^\circ \text{ V}$ source on the left branch. The top of Mesh 1 has a $2 \, \Omega$ resistor. The shared middle branch is an inductor with $\mathbf{Z}_L = j4 \, \Omega$. The top of Mesh 2 has a capacitor with $\mathbf{Z}_C = -j2 \, \Omega$. The right branch is shorted. Find the mesh currents $\mathbf{I}_1$ and $\mathbf{I}_2$.

**Solution:**
1.  **KVL for Mesh 1 (Clockwise):**
    $$ -20 + 2\mathbf{I}_1 + j4(\mathbf{I}_1 - \mathbf{I}_2) = 0 $$
    $$ (2 + j4)\mathbf{I}_1 - j4\mathbf{I}_2 = 20 \quad \text{--- (Eq 1)} $$
2.  **KVL for Mesh 2 (Clockwise):**
    $$ j4(\mathbf{I}_2 - \mathbf{I}_1) + (-j2)\mathbf{I}_2 = 0 $$
    $$ -j4\mathbf{I}_1 + j2\mathbf{I}_2 = 0 $$
    $$ j2\mathbf{I}_2 = j4\mathbf{I}_1 \implies \mathbf{I}_2 = 2\mathbf{I}_1 \quad \text{--- (Eq 2)} $$
3.  **Substitute Eq 2 into Eq 1:**
    $$ (2 + j4)\mathbf{I}_1 - j4(2\mathbf{I}_1) = 20 $$
    $$ 2\mathbf{I}_1 + j4\mathbf{I}_1 - j8\mathbf{I}_1 = 20 $$
    $$ (2 - j4)\mathbf{I}_1 = 20 $$
4.  **Solve for $\mathbf{I}_1$:**
    $$ \mathbf{I}_1 = \frac{20}{2 - j4} $$
    Multiply by complex conjugate to resolve:
    $$ \mathbf{I}_1 = \frac{20(2 + j4)}{2^2 + 4^2} = \frac{40 + j80}{20} = \mathbf{2 + j4 \text{ A}} $$
    In polar: $\mathbf{I}_1 = \mathbf{4.47 \angle 63.4^\circ \text{ A}}$
5.  **Solve for $\mathbf{I}_2$:**
    $$ \mathbf{I}_2 = 2\mathbf{I}_1 = 2(2 + j4) = \mathbf{4 + j8 \text{ A}} $$
    In polar: $\mathbf{I}_2 = \mathbf{8.94 \angle 63.4^\circ \text{ A}}$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Complex Network Analysis",
        "icon": "BrainCircuit",
        "description": "Scaling up KVL and KCL using Phasors."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "1. Convert to Phasors",
        "icon": "Activity",
        "description": "Change all sources to V ∠ φ and all components to Z."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "2. Apply Algorithm",
        "icon": "Sigma",
        "description": "Use Nodal (sum currents to zero) or Mesh (sum voltages to zero)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "3. Complex Matrix Math",
        "icon": "Layers",
        "description": "Group real and imaginary terms. Solve the simultaneous equations."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: AC Power",
        "icon": "Target",
        "description": "We found Voltage and Current. But how do we calculate Power when phase angles don't align?"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
