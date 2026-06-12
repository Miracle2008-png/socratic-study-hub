# 8. Complex Power and Power Factor Correction

## The Power Triangle

Because Real Power ($P$) and Reactive Power ($Q$) are offset by exactly 90 degrees in phase, we can combine them into a single complex number called **Complex Power ($\mathbf{S}$)**.

$$ \mathbf{S} = P + jQ $$

If you plot this on the complex plane, it forms a right triangle known as the **Power Triangle**:
*   The horizontal axis is $P$ (Watts).
*   The vertical axis is $Q$ (VAR).
*   The hypotenuse is the magnitude $|\mathbf{S}|$, called **Apparent Power**.
*   The angle of the triangle ($\theta$) is the phase difference between voltage and current.

### Apparent Power ($|\mathbf{S}|$)
Apparent Power is the raw product of RMS voltage and RMS current, ignoring phase completely. It is measured in **Volt-Amperes (VA)**.
$$ |\mathbf{S}| = V_{\text{rms}} I_{\text{rms}} $$
$$ |\mathbf{S}| = \sqrt{P^2 + Q^2} $$

*Note: Transformers, generators, and UPS systems are always rated in VA or kVA, not Watts, because they must be sized to handle the raw Apparent Power flowing through their wires, regardless of how much of it is useless reactive slosh.*

---

## Power Factor Correction (PFC)

Industrial motors are massive inductors, creating huge positive $+Q$ (lagging reactive power). This results in a massive Apparent Power $|\mathbf{S}|$ that strains the grid and incurs heavy utility fines.

**The Solution:** Capacitors generate negative $-Q$ (leading reactive power). 
If a factory installs a massive bank of capacitors in parallel with their motors, the capacitors will supply the exact reactive power the motors need. The sloshing power bounces back and forth strictly *inside* the factory between the motors and the capacitors.
From the perspective of the utility power plant miles away, $Q_{\text{total}} = 0$, the Power Triangle collapses flat, and the Power Factor becomes $1.0$.

---

## Engineering Applications

*   **Saving Millions of Dollars:** A cement manufacturing plant might have a $10\text{MW}$ real power demand, but a terrible $0.6$ power factor due to crushers and conveyor belts. By doing the math below and installing a $13\text{MVAR}$ capacitor bank, they raise their power factor to $0.95$, eliminating utility penalties and saving millions of dollars a year in billing.
*   **Switch-Mode Power Supplies:** Computer power supplies must have Active Power Factor Correction (PFC) circuits built into them by law in many countries to ensure residential grids aren't flooded with reactive power.

---

## Worked Examples

### Example 1 — Medium: The Power Triangle

**Problem:** A factory draws an Apparent Power of $500\text{kVA}$ at a lagging power factor of $0.8$. Calculate the Real Power ($P$) and the Reactive Power ($Q$) to construct the Power Triangle.

**Solution:**
1.  **Find Real Power ($P$):**
    We know $P = |\mathbf{S}| \times pf$  *(since $pf = \cos\theta$, and adjacent = hypotenuse $\times \cos\theta$)*
    $$ P = 500\text{kVA} \times 0.8 = \mathbf{400\text{kW}} $$
2.  **Find the Phase Angle ($\theta$):**
    $$ \theta = \cos^{-1}(0.8) \approx 36.87^\circ $$
3.  **Find Reactive Power ($Q$):**
    Using trigonometry ($Q = |\mathbf{S}| \sin\theta$):
    $$ Q = 500\text{kVA} \times \sin(36.87^\circ) = 500 \times 0.6 = \mathbf{300\text{kVAR}} $$
*(The Power Triangle has a base of $400$, a height of $300$, and a hypotenuse of $500$.)*

---

### Example 2 — Hard: Calculating the Correction Capacitor

**Problem:** The factory from Example 1 ($P = 400\text{kW}$, $Q_{old} = +300\text{kVAR}$) is being fined by the utility. The factory is supplied by a $480\text{V}_{\text{rms}}$, $60\text{Hz}$ grid ($\omega = 377 \text{ rad/s}$). 
They hire you to correct their power factor to $0.95$ lagging. What size capacitor ($C$) in Farads must you place in parallel with the factory?

**Solution:**
1.  **Target the New Triangle:**
    Real power $P$ never changes. $P = 400\text{kW}$.
    The new desired power factor is $0.95$. Let's find the new angle:
    $$ \theta_{new} = \cos^{-1}(0.95) \approx 18.19^\circ $$
2.  **Calculate the New Desired $Q$:**
    Using tangent ($\tan\theta = \text{Opposite}/\text{Adjacent} = Q/P$):
    $$ Q_{new} = P \tan(\theta_{new}) = 400\text{kW} \times \tan(18.19^\circ) \approx 400 \times 0.328 = \mathbf{131.4\text{kVAR}} $$
3.  **Find the Correction Needed ($Q_C$):**
    The factory currently has $300\text{kVAR}$. We need it to be $131.4\text{kVAR}$. The capacitor must absorb the difference.
    $$ Q_C = Q_{old} - Q_{new} = 300 - 131.4 = \mathbf{168.6\text{kVAR}} $$
    *(We need a capacitor bank that generates $-168.6\text{kVAR}$).*
4.  **Size the Capacitor ($C$):**
    The formula for the reactive power of a capacitor is $Q_C = \omega C V_{\text{rms}}^2$.
    $$ C = \frac{Q_C}{\omega V_{\text{rms}}^2} = \frac{168,600}{377 \times (480)^2} $$
    $$ C = \frac{168,600}{377 \times 230,400} = \frac{168,600}{86,860,800} \approx 0.00194 \text{ F} $$
    $$ \mathbf{C = 1940 \mu\text{F}} $$
*(Installing a $1940\mu\text{F}$ capacitor across the $480\text{V}$ line will perfectly fix their power factor!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Complex Power (S = P + jQ)",
        "icon": "BrainCircuit",
        "description": "Combining Real and Reactive power into a single phasor triangle."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Apparent Power (|S|)",
        "icon": "Activity",
        "description": "The hypotenuse. Measured in VA. Used to rate transformers and cables."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Power Factor Problem",
        "icon": "Sigma",
        "description": "Large motor inductances cause large Q, making |S| huge, drawing massive useless current."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Power Factor Correction",
        "icon": "Layers",
        "description": "Install Parallel Capacitors! They generate -Q, canceling the motor's +Q."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Resonance",
        "icon": "Target",
        "description": "What happens when the Inductor and Capacitor perfectly cancel each other out at a specific frequency?"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "2", "target": "5", "animated": true}
  ]
}
```
