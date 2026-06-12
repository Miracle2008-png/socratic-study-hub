# 5. Series and Parallel AC Circuits

## Combining Complex Impedances

Now that we have established that Resistors, Capacitors, and Inductors can all be modeled as a complex **Impedance ($\mathbf{Z}$)**, all of the DC circuit reduction techniques we learned in earlier chapters apply perfectly to AC circuits.

*   **Series:** $\mathbf{Z}_{eq} = \mathbf{Z}_1 + \mathbf{Z}_2 + \dots$
*   **Parallel:** $\frac{1}{\mathbf{Z}_{eq}} = \frac{1}{\mathbf{Z}_1} + \frac{1}{\mathbf{Z}_2} + \dots$
    *   (Or for two impedances: $\mathbf{Z}_{eq} = \frac{\mathbf{Z}_1 \mathbf{Z}_2}{\mathbf{Z}_1 + \mathbf{Z}_2}$)

The only difference? You are now doing addition, multiplication, and division with **complex numbers**. 

### The AC Voltage Divider
If you have a series of impedances, the phasor voltage $\mathbf{V}_x$ across a specific impedance $\mathbf{Z}_x$ is:
$$ \mathbf{V}_x = \mathbf{V}_{source} \times \frac{\mathbf{Z}_x}{\mathbf{Z}_{eq}} $$

### The AC Current Divider
If you have two parallel branches $\mathbf{Z}_1$ and $\mathbf{Z}_2$, the phasor current $\mathbf{I}_1$ through branch 1 is:
$$ \mathbf{I}_1 = \mathbf{I}_{total} \times \frac{\mathbf{Z}_2}{\mathbf{Z}_1 + \mathbf{Z}_2} $$

---

## Engineering Applications

*   **RC and RL Filters:** A simple series circuit containing a Resistor and a Capacitor acts as a fundamental filter. By taking the output voltage across the Capacitor (using the Voltage Divider rule), high frequencies are shunted away, leaving only low frequencies (a Low-Pass Filter). Taking the output across the Resistor creates a High-Pass Filter.
*   **Transfer Functions:** Electrical engineers design complex parallel and series meshes of R, L, and C components to create specific "Transfer Functions"—mathematical equations that perfectly sculpt the frequency response of an audio amplifier or an antenna tuner.

---

## Worked Examples

### Example 1 — Easy: Series R-L Circuit

**Problem:** A $100 \angle 0^\circ \text{ V}$ AC source operating at $\omega = 500 \text{ rad/s}$ is connected to a series circuit containing a $30 \, \Omega$ resistor and a $80 \text{ mH}$ inductor. Find the total current phasor $\mathbf{I}$.

**Solution:**
1.  **Find Impedances:**
    $$ \mathbf{Z}_R = 30 \, \Omega $$
    $$ \mathbf{Z}_L = j\omega L = j(500)(0.08) = j40 \, \Omega $$
2.  **Combine in Series:**
    $$ \mathbf{Z}_{eq} = 30 + j40 \, \Omega $$
3.  **Convert to Polar for Division:**
    $$ |\mathbf{Z}_{eq}| = \sqrt{30^2 + 40^2} = 50 \, \Omega $$
    $$ \angle \mathbf{Z}_{eq} = \tan^{-1}\left(\frac{40}{30}\right) \approx 53.1^\circ $$
    $$ \mathbf{Z}_{eq} = 50 \angle 53.1^\circ \, \Omega $$
4.  **Apply AC Ohm's Law:**
    $$ \mathbf{I} = \frac{\mathbf{V}}{\mathbf{Z}_{eq}} = \frac{100 \angle 0^\circ}{50 \angle 53.1^\circ} = \mathbf{2 \angle -53.1^\circ \text{ A}} $$

---

### Example 2 — Medium: The AC Voltage Divider

**Problem:** For the same circuit as Example 1 ($V_s = 100 \angle 0^\circ$, $R = 30$, $Z_L = j40$), use the Voltage Divider rule to find the voltage across the inductor, $\mathbf{V}_L$.

**Solution:**
1.  **Setup the Voltage Divider:**
    $$ \mathbf{V}_L = \mathbf{V}_s \frac{\mathbf{Z}_L}{\mathbf{Z}_R + \mathbf{Z}_L} $$
    $$ \mathbf{V}_L = (100 \angle 0^\circ) \times \frac{j40}{30 + j40} $$
2.  **Convert elements to Polar:**
    $j40 = 40 \angle 90^\circ$
    $30 + j40 = 50 \angle 53.1^\circ$ (from Ex 1)
3.  **Solve:**
    $$ \mathbf{V}_L = (100 \angle 0^\circ) \times \frac{40 \angle 90^\circ}{50 \angle 53.1^\circ} $$
    $$ \mathbf{V}_L = (100 \angle 0^\circ) \times (0.8 \angle 36.9^\circ) = \mathbf{80 \angle 36.9^\circ \text{ V}} $$

---

### Example 3 — Hard: Parallel Admittance and Total Current

**Problem:** An AC source $\mathbf{V}_s = 12 \angle 0^\circ \text{ V}$ is connected to a parallel bank of three components: A $4 \, \Omega$ resistor, an inductor with $\mathbf{Z}_L = j3 \, \Omega$, and a capacitor with $\mathbf{Z}_C = -j6 \, \Omega$. Find the total current drawn from the source.

**Solution:**
1.  Because they are in parallel, it is much easier to sum their **Admittances** ($\mathbf{Y} = 1/\mathbf{Z}$).
    $$ \mathbf{Y}_R = \frac{1}{4} = 0.25 \text{ S} $$
    $$ \mathbf{Y}_L = \frac{1}{j3} = \frac{-j}{3} \approx -j0.333 \text{ S} $$
    $$ \mathbf{Y}_C = \frac{1}{-j6} = \frac{j}{6} \approx j0.167 \text{ S} $$
2.  Sum the Admittances:
    $$ \mathbf{Y}_{eq} = 0.25 - j0.333 + j0.167 = 0.25 - j0.166 \text{ S} $$
3.  Use AC Ohm's Law ($\mathbf{I} = \mathbf{V} \cdot \mathbf{Y}_{eq}$):
    $$ \mathbf{I}_{total} = (12 \angle 0^\circ) \times (0.25 - j0.166) $$
    $$ \mathbf{I}_{total} = 3 - j1.992 \text{ A (Rectangular)} $$
4.  Convert to Polar:
    $$ |\mathbf{I}| = \sqrt{3^2 + 1.992^2} \approx 3.6 \text{ A} $$
    $$ \angle \mathbf{I} = \tan^{-1}\left(\frac{-1.992}{3}\right) \approx -33.6^\circ $$
    $$ \mathbf{I}_{total} = \mathbf{3.6 \angle -33.6^\circ \text{ A}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "AC Topologies",
        "icon": "BrainCircuit",
        "description": "DC rules apply perfectly, just with complex numbers."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Series Addition",
        "icon": "Activity",
        "description": "Z_eq = Z_R + Z_L + Z_C. Easy to do in Rectangular format."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Voltage Divider",
        "icon": "Sigma",
        "description": "V_x = V_s × (Z_x / Z_eq). Great for filter analysis."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Parallel Admittance",
        "icon": "Layers",
        "description": "Y_eq = 1/Z_R + 1/Z_L + 1/Z_C. Summing admittances is cleaner for parallel branches."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Nodal and Mesh in AC",
        "icon": "Target",
        "description": "Scaling up to complex mesh equations with imaginary variables."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "3", "target": "5", "animated": true}
  ]
}
```
