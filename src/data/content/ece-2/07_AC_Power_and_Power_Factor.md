# 7. AC Power and Power Factor

## The Problem with Out-of-Phase Power

In DC circuits, power is simple: $P = V \times I$. 
In AC circuits, calculating power is complicated because the voltage and current are often **out of phase**. Because of inductors and capacitors, the current peak might happen completely out of sync with the voltage peak.

If voltage is positive while current is negative, their product is negative. This means energy is temporarily flowing *backwards* from the load into the power plant!

To manage this, engineers divide AC power into three distinct categories:
1.  **Average (Real) Power ($P$)**
2.  **Reactive Power ($Q$)**
3.  **Apparent Power ($S$)**

---

## 1. Average (Real) Power ($P$)

This is the power that actually does useful work—turning a motor shaft, creating heat, or lighting an LED. Only the **Resistors** in a circuit consume Real Power.
$$ P = V_{\text{rms}} I_{\text{rms}} \cos(\theta_v - \theta_i) $$
Where $\theta_v$ is the phase angle of the voltage, and $\theta_i$ is the phase angle of the current.
*   **Unit:** Watts (W).

## 2. Reactive Power ($Q$)

This is the "sloshing" power. Inductors and capacitors constantly absorb energy from the grid to build their magnetic/electric fields, and then perfectly dump that exact same energy back into the grid a split-second later. It does *zero* useful work, but it physically takes up space on the transmission wires, heating them up!
$$ Q = V_{\text{rms}} I_{\text{rms}} \sin(\theta_v - \theta_i) $$
*   **Unit:** Volt-Amperes Reactive (VAR).

## 3. The Power Factor ($pf$)

The term $\cos(\theta_v - \theta_i)$ in the Real Power equation is so critical that it has its own name: the **Power Factor**.
$$ pf = \cos(\theta_v - \theta_i) $$
*   **Range:** $0$ to $1.0$.
*   A Power Factor of $1.0$ (purely resistive load) means 100% of the energy you draw from the grid is converted to useful work.
*   A Power Factor of $0$ (purely inductive/capacitive load) means you draw massive current from the grid, but do zero useful work.

---

## Engineering Applications

*   **Industrial Billing Penalties:** Large factories are filled with massive induction motors. Inductors cause the current to lag behind the voltage, resulting in a terrible Power Factor (e.g., $pf = 0.6$). The factory draws massive amounts of reactive current from the utility company, heating up the city's power lines, but the utility's Watt-hour meter only bills them for the Real Power (Watts). Because of this, utility companies legally fine industrial plants thousands of dollars a month if their Power Factor drops below $0.9$.
*   **Generator Sizing:** You cannot size a generator based solely on the Watts required by the load. You must size it to handle the total *Apparent Power* ($S$) flowing through the wires.

---

## Worked Examples

### Example 1 — Easy: Finding Real Power

**Problem:** A wall outlet provides $v(t) = 170\cos(377t) \text{ V}$. An air conditioning unit draws a current of $i(t) = 15\cos(377t - 45^\circ) \text{ A}$. Calculate the Real Power consumed by the AC unit and its Power Factor.

**Solution:**
1.  **Extract RMS values:**
    $V_{\text{rms}} = 170 / \sqrt{2} \approx 120\text{V}$.
    $I_{\text{rms}} = 15 / \sqrt{2} \approx 10.6\text{A}$.
2.  **Extract Phase Angles:**
    $\theta_v = 0^\circ$
    $\theta_i = -45^\circ$
3.  **Calculate Power Factor:**
    $$ pf = \cos(\theta_v - \theta_i) = \cos(0 - (-45^\circ)) = \cos(45^\circ) = \mathbf{0.707 \text{ (Lagging)}} $$
    *(It is "lagging" because the current angle is behind the voltage angle, typical of inductive motor loads).*
4.  **Calculate Real Power:**
    $$ P = V_{\text{rms}} I_{\text{rms}} \cos(\theta_v - \theta_i) $$
    $$ P = (120) \times (10.6) \times (0.707) \approx \mathbf{900\text{W}} $$

---

### Example 2 — Medium: Calculating Reactive Power

**Problem:** For the same air conditioning unit in Example 1, calculate the Reactive Power ($Q$) that is sloshing back and forth over the utility lines.

**Solution:**
1.  **Use the Reactive Power Formula:**
    $$ Q = V_{\text{rms}} I_{\text{rms}} \sin(\theta_v - \theta_i) $$
2.  **Substitute the values:**
    $$ Q = (120) \times (10.6) \times \sin(45^\circ) $$
3.  **Solve:**
    Since $\sin(45^\circ) = \cos(45^\circ) = 0.707$, the reactive power equals the real power in this specific geometry:
    $$ Q = \mathbf{900 \text{ VAR}} $$
    *(This means the power lines must carry enough current to support 900W of real work, PLUS 900VAR of useless sloshing power!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "AC Power Components",
        "icon": "BrainCircuit",
        "description": "Because voltage and current are out of phase, power splits into three types."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Real Power (P)",
        "icon": "Activity",
        "description": "Measured in Watts. The actual useful work done by resistors."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Reactive Power (Q)",
        "icon": "Sigma",
        "description": "Measured in VAR. The useless 'sloshing' power stored and released by L and C."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Power Factor (pf)",
        "icon": "Layers",
        "description": "cos(θv - θi). A ratio of 0.0 to 1.0 indicating how efficient the power transfer is."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Complex Power",
        "icon": "Target",
        "description": "Combining P and Q into a single complex number S, and learning how to fix bad Power Factors."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "2", "target": "5", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
