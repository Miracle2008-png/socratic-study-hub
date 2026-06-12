# 6. Voltage and Current Dividers

## Mathematical Shortcuts for Engineers

While you can solve any basic circuit using Ohm's Law and equivalent resistance, doing it step-by-step takes time. The **Voltage Divider** and **Current Divider** formulas are powerful shortcuts that allow engineers to find the voltage across a specific component, or the current through a specific branch, in a single line of math.

---

## 1. The Voltage Divider Rule (Series Circuits)

In a series circuit, the total voltage from the source is divided among the resistors. A larger resistor will "hog" a larger percentage of the total voltage.

To find the voltage drop ($V_x$) across a specific resistor ($R_x$) in a series chain of total equivalent resistance ($R_{eq}$):
$$ V_x = V_{\text{source}} \times \left( \frac{R_x}{R_{eq}} \right) $$

For a simple two-resistor series circuit ($R_1$ and $R_2$):
$$ V_1 = V_{\text{source}} \times \frac{R_1}{R_1 + R_2} $$

---

## 2. The Current Divider Rule (Parallel Circuits)

In a parallel circuit, the total current entering the parallel bank divides among the branches. Current is "lazy"—it prefers the path of least resistance. Therefore, a *smaller* resistor will "hog" a *larger* percentage of the total current.

To find the current ($I_x$) flowing through a specific branch ($R_x$) when the entire parallel bank has an equivalent resistance ($R_{p}$):
$$ I_x = I_{\text{total}} \times \left( \frac{R_{p}}{R_x} \right) $$

**The 2-Resistor Shortcut:**
For exactly two resistors ($R_1$ and $R_2$) in parallel, the formula simplifies beautifully. To find the current in $R_1$, you put the *other* resistor on top of the fraction:
$$ I_1 = I_{\text{total}} \times \frac{R_2}{R_1 + R_2} $$

---

## Engineering Applications

*   **Sensor Reading (Analog to Digital Converters):** Microcontrollers (like an Arduino) can only read *voltage*, not resistance. But environmental sensors (like thermistors for temperature, or photoresistors for light) change their *resistance*. Engineers build a Voltage Divider with the sensor and a fixed known resistor. As the sensor's resistance changes, the divided voltage changes, which the microcontroller can easily read.
*   **Potentiometers:** The volume knob on a stereo is a potentiometer—a mechanical, adjustable voltage divider. Turning the knob slides a contact along a resistive track, instantly changing the ratio of $R_1$ to $R_2$ and scaling the audio signal voltage smoothly from $0\%$ to $100\%$.

---

## Worked Examples

### Example 1 — Easy: A Simple Voltage Divider

**Problem:** A $9\text{V}$ battery is connected to a $10\text{k}\Omega$ resistor and a $5\text{k}\Omega$ resistor in series. Without calculating the total current, find the voltage drop across the $5\text{k}\Omega$ resistor.

**Solution:**
Use the Voltage Divider formula. 
$$ V_{5\text{k}} = V_{\text{source}} \times \frac{R_{5\text{k}}}{R_{10\text{k}} + R_{5\text{k}}} $$
$$ V_{5\text{k}} = 9\text{V} \times \frac{5,000}{15,000} = 9\text{V} \times \frac{1}{3} = \mathbf{3\text{V}} $$
*(The $10\text{k}\Omega$ resistor takes the remaining $6\text{V}$.)*

---

### Example 2 — Medium: The 2-Resistor Current Divider

**Problem:** A total current of $10\text{A}$ is flowing toward a node that splits into two parallel branches. Branch 1 has a $4 \, \Omega$ resistor, and Branch 2 has a $1 \, \Omega$ resistor. How much current flows through the $4 \, \Omega$ resistor?

**Solution:**
Use the 2-Resistor Current Divider shortcut. To find the current in $R_1$ ($4 \, \Omega$), put the *opposite* resistor ($R_2 = 1 \, \Omega$) in the numerator:
$$ I_1 = I_{\text{total}} \times \frac{R_2}{R_1 + R_2} $$
$$ I_{4\Omega} = 10\text{A} \times \frac{1}{4 + 1} = 10 \times \frac{1}{5} = \mathbf{2\text{A}} $$
*(The smaller $1 \, \Omega$ resistor provides an easier path, so it takes the remaining $8\text{A}$.)*

---

### Example 3 — Hard: Designing a Sensor Circuit

**Problem:** You are using a thermistor (temperature sensor) that has a resistance of $10\text{k}\Omega$ at room temperature, and drops to $2\text{k}\Omega$ when exposed to boiling water. Your microcontroller requires an input voltage of exactly $1.0\text{V}$ when the water boils to trigger an alarm. You are powering the circuit with a $5.0\text{V}$ source. 
You build a voltage divider where $R_1$ is a fixed resistor and $R_2$ is the thermistor connected to Ground. The microcontroller reads the voltage *across* the thermistor. What value must you choose for the fixed resistor $R_1$?

**Solution:**
1.  We know the voltage across the thermistor ($V_2$) must be $1.0\text{V}$ when it is at $2\text{k}\Omega$.
2.  Set up the Voltage Divider formula:
    $$ V_2 = V_{\text{source}} \times \frac{R_2}{R_1 + R_2} $$
3.  Substitute the known values:
    $$ 1.0\text{V} = 5.0\text{V} \times \frac{2,000 \, \Omega}{R_1 + 2,000 \, \Omega} $$
4.  Solve for $R_1$:
    $$ \frac{1}{5} = \frac{2000}{R_1 + 2000} $$
    Cross-multiply:
    $$ R_1 + 2000 = 5 \times 2000 $$
    $$ R_1 + 2000 = 10,000 $$
    $$ \mathbf{R_1 = 8,000 \, \Omega \text{ (or 8k}\Omega\text{)}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Divider Rules",
        "icon": "BrainCircuit",
        "description": "Shortcuts to skip calculating the whole circuit."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Voltage Divider",
        "icon": "Activity",
        "description": "For Series Circuits. Voltage scales proportionally to resistance."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Formula: V_x = V_in × (R_x / R_eq)",
        "icon": "Sigma",
        "description": "Bigger resistor gets more voltage."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Current Divider",
        "icon": "Layers",
        "description": "For Parallel Circuits. Current prefers path of least resistance."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Formula: I_1 = I_in × (R_2 / (R_1 + R_2))",
        "icon": "Wrench",
        "description": "Smaller resistor gets more current. Put the opposite R on top!"
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Nodal Analysis",
        "icon": "Target",
        "description": "What happens when the circuit is an impossible web that isn't purely series or parallel? We bring out the heavy math."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "3", "target": "6", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
