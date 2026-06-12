# 10. Open Channel Flow

## 1. Introduction to Open Channel Flow

Unlike pipe flow, which is driven by a pressure gradient in a fully enclosed conduit, **Open Channel Flow** occurs when the fluid possesses a free surface exposed to atmospheric pressure. The driving force is exclusively gravity acting down a bed slope.

Civil engineering applications include natural rivers, constructed canals, storm sewers flowing partially full, and irrigation ditches. The presence of a free surface allows the cross-sectional area of flow to vary along the channel, making open channel analysis fundamentally more complex than pressurized pipe flow.

## 2. Uniform Flow and Manning's Equation

When the depth of flow, velocity, and cross-sectional area remain constant along the length of a channel, the flow is termed **Uniform Flow**. This depth is called the normal depth ($y_n$).

In uniform flow, the gravity force driving the water downstream is exactly balanced by the frictional resistance of the channel boundary. The standard empirical formula used to calculate uniform flow is **Manning’s Equation**:
$$ V = \frac{1}{n} R_h^{2/3} S_0^{1/2} $$
where:
- $V$ = Average velocity ($\text{m/s}$)
- $n$ = Manning's roughness coefficient (depends on the channel material: concrete $\approx 0.013$, natural earth $\approx 0.025$)
- $R_h$ = Hydraulic radius $= \frac{A}{P}$ (Area divided by Wetted Perimeter)
- $S_0$ = Longitudinal slope of the channel bed

For discharge ($Q$):
$$ Q = A \times V = \frac{1}{n} A R_h^{2/3} S_0^{1/2} $$

---

### Example 1: Discharge in a Trapezoidal Canal
**Problem:** A concrete-lined trapezoidal irrigation canal ($n = 0.013$) has a bottom width of $4 \text{ m}$ and side slopes of $1:2$ (V:H). The channel is laid on a slope of $S_0 = 0.001$. If the water depth is $2 \text{ m}$ (uniform flow), calculate the discharge.

**Solution:**
1. Calculate the cross-sectional Area ($A$):
$$ A = y(b + zy) = 2(4 + 2(2)) = 2(8) = 16 \text{ m}^2 $$

2. Calculate the Wetted Perimeter ($P$):
$$ P = b + 2y\sqrt{1 + z^2} = 4 + 2(2)\sqrt{1 + 2^2} = 4 + 4\sqrt{5} = 4 + 8.94 = 12.94 \text{ m} $$

3. Calculate the Hydraulic Radius ($R_h$):
$$ R_h = \frac{A}{P} = \frac{16}{12.94} = 1.236 \text{ m} $$

4. Apply Manning's Equation for Discharge:
$$ Q = \frac{1}{0.013} \times (16) \times (1.236)^{2/3} \times (0.001)^{1/2} $$
$$ Q = 76.92 \times 16 \times 1.151 \times 0.0316 = 44.7 \text{ m}^3\text{/s} $$

---

## 3. Specific Energy and Critical Flow

Specific Energy ($E$) is defined as the total head of the flow relative to the channel bottom.
$$ E = y + \frac{V^2}{2g} $$
Using $V = Q/A$, we can rewrite this as:
$$ E = y + \frac{Q^2}{2gA^2} $$

For a given discharge $Q$, plotting $E$ against depth $y$ yields the **Specific Energy Curve**. The curve shows that for any given Specific Energy above a certain minimum, there are two possible flow depths, called **alternate depths**.
- One depth is large (slow velocity) $\rightarrow$ Subcritical.
- One depth is shallow (high velocity) $\rightarrow$ Supercritical.

The point of minimum specific energy corresponds to **Critical Flow**.

## 4. The Froude Number

The Froude Number ($Fr$) dictates the flow regime:
$$ Fr = \frac{V}{\sqrt{g D_h}} $$
where $D_h$ is the hydraulic depth ($D_h = A/T$, where $T$ is the top width of the flow).

1. **Subcritical Flow ($Fr < 1$):** Deep, slow-moving water (e.g., a calm river). Waves can travel upstream. Control is downstream.
2. **Critical Flow ($Fr = 1$):** The transition point. Minimum specific energy for a given discharge.
3. **Supercritical Flow ($Fr > 1$):** Shallow, rapid flow (e.g., water racing down a steep spillway). Waves are swept downstream. Control is upstream.

---

### Example 2: Critical Depth in a Rectangular Channel
**Problem:** A rectangular concrete channel is $3 \text{ m}$ wide and carries a discharge of $12 \text{ m}^3\text{/s}$. Find the critical depth ($y_c$), critical velocity ($V_c$), and the minimum specific energy ($E_{\min}$).

**Solution:**
1. Calculate the unit discharge ($q = Q/b$):
$$ q = \frac{12}{3} = 4 \text{ m}^2\text{/s} $$

2. For a rectangular channel, critical depth is given by:
$$ y_c = \left( \frac{q^2}{g} \right)^{1/3} = \left( \frac{4^2}{9.81} \right)^{1/3} = \left( 1.631 \right)^{1/3} = 1.177 \text{ m} $$

3. Calculate critical velocity ($V_c$):
$$ V_c = \frac{q}{y_c} = \frac{4}{1.177} = 3.398 \text{ m/s} $$
(Check Froude number: $Fr = \frac{V_c}{\sqrt{g y_c}} = \frac{3.398}{\sqrt{9.81 \times 1.177}} = \frac{3.398}{3.398} = 1.0$, which confirms critical flow.)

4. Minimum specific energy ($E_{\min}$):
For a rectangular channel at critical flow, $E_{\min} = \frac{3}{2} y_c$.
$$ E_{\min} = 1.5 \times 1.177 = 1.766 \text{ m} $$

---

## 5. The Hydraulic Jump

When flow transitions from Supercritical to Subcritical, it does so abruptly via a **Hydraulic Jump**. This is a standing wave characterized by extreme turbulence, air entrainment, and massive energy dissipation. 

Engineers purposely induce hydraulic jumps at the base of dam spillways (using a stilling basin) to dissipate kinetic energy and prevent downstream scouring of the riverbed.

The relationship between the supercritical depth before the jump ($y_1$) and the subcritical depth after the jump ($y_2$) in a rectangular channel is given by the Bélanger equation:
$$ \frac{y_2}{y_1} = \frac{1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right) $$

---

### Example 3: Hydraulic Jump Analysis
**Problem:** Water flows down a spillway into a rectangular stilling basin $5 \text{ m}$ wide. The velocity at the toe of the spillway is $15 \text{ m/s}$, and the depth is $0.4 \text{ m}$. Determine the depth of flow after the hydraulic jump and the energy head lost in the jump.

**Solution:**
1. Calculate the Froude number upstream of the jump ($Fr_1$):
$$ Fr_1 = \frac{V_1}{\sqrt{g y_1}} = \frac{15}{\sqrt{9.81 \times 0.4}} = \frac{15}{1.981} = 7.57 $$
Since $Fr_1 > 1$, the flow is highly supercritical.

2. Calculate the downstream depth ($y_2$):
$$ y_2 = \frac{y_1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right) $$
$$ y_2 = \frac{0.4}{2} \left( \sqrt{1 + 8(7.57)^2} - 1 \right) = 0.2 \left( \sqrt{1 + 458.4} - 1 \right) $$
$$ y_2 = 0.2 (21.43 - 1) = 0.2 \times 20.43 = 4.086 \text{ m} $$

3. Calculate velocities and specific energies:
Unit discharge $q = V_1 y_1 = 15 \times 0.4 = 6 \text{ m}^2\text{/s}$.
$$ V_2 = \frac{q}{y_2} = \frac{6}{4.086} = 1.468 \text{ m/s} $$
$$ E_1 = y_1 + \frac{V_1^2}{2g} = 0.4 + \frac{15^2}{19.62} = 0.4 + 11.47 = 11.87 \text{ m} $$
$$ E_2 = y_2 + \frac{V_2^2}{2g} = 4.086 + \frac{1.468^2}{19.62} = 4.086 + 0.11 = 4.20 \text{ m} $$

4. Calculate Energy Loss ($\Delta E$):
$$ \Delta E = E_1 - E_2 = 11.87 - 4.20 = 7.67 \text{ m} $$
The jump dissipates a massive $7.67 \text{ m}$ of head, protecting the downstream channel.

## Conclusion
Open channel flow is governed by the interplay of gravity and boundaries. Classifying flow regimes via the Froude Number and manipulating specific energy are essential for designing safe hydraulic drop structures, channels, and spillways.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "OCF", "label": "Open Channel Flow"},
    {"id": "Uniform", "label": "Uniform Flow\\n(Manning's Eq)"},
    {"id": "Energy", "label": "Specific Energy\\n(E = y + V^2/2g)"},
    {"id": "Froude", "label": "Froude Number\\n(Fr = V/sqrt(gD))"},
    {"id": "Subcritical", "label": "Subcritical (Fr < 1)\\nDeep, Slow"},
    {"id": "Supercritical", "label": "Supercritical (Fr > 1)\\nShallow, Fast"},
    {"id": "Jump", "label": "Hydraulic Jump\\nEnergy Dissipation"}
  ],
  "edges": [
    {"from": "OCF", "to": "Uniform"},
    {"from": "OCF", "to": "Energy"},
    {"from": "Energy", "to": "Froude"},
    {"from": "Froude", "to": "Subcritical"},
    {"from": "Froude", "to": "Supercritical"},
    {"from": "Supercritical", "to": "Jump"},
    {"from": "Jump", "to": "Subcritical"}
  ]
}
```
