# Shear Strength of Soils

## Introduction to Soil Failure

Unlike concrete or steel, which typically fail in tension or compression, soils almost exclusively fail in **shear**. When a slope collapses in a landslide, or a building foundation punches through the ground, it is because the shear stresses induced by the loads or gravity have exceeded the shear strength of the soil along a critical failure surface.

Shear strength is the internal resistance per unit area that the soil mass offers to resist failure and sliding along any plane inside it. Understanding and quantifying this resistance is arguably the most important task in geotechnical engineering, as it directly dictates the ultimate bearing capacity of foundations, the stability of retaining walls, and the safety of earth dams and natural slopes.

## Mohr-Coulomb Failure Criterion

The accepted framework for defining soil shear strength was established by Charles-Augustin de Coulomb (1776) and later modified using Christian Mohr's stress circles. The **Mohr-Coulomb Failure Criterion** posits that the shear strength of a soil ($\tau_f$) is composed of two independent components:
1.  **Cohesion ($c$)**: The intrinsic bond between soil particles, independent of normal pressure. True cohesion exists in clayey soils due to electrochemical forces.
2.  **Frictional Resistance**: The resistance due to the interlocking of soil particles and friction at contact points. This is directly proportional to the normal stress acting on the shear plane, governed by the angle of internal friction ($\phi$).

Coulomb's original equation expressed strength in terms of total stress ($\sigma$):
$$ \tau_f = c + \sigma \tan(\phi) $$

However, following Terzaghi's discovery of the effective stress principle, it became clear that water cannot resist shear. Frictional resistance relies solely on grain-to-grain contact. Therefore, the failure criterion must be expressed in terms of **effective stress ($\sigma'$)**:
$$ \tau_f = c' + \sigma' \tan(\phi') $$
Where:
- **$\tau_f$** = Shear strength of the soil
- **$c'$** = Effective cohesion intercept
- **$\sigma'$** = Effective normal stress on the failure plane ($\sigma' = \sigma - u$)
- **$\phi'$** = Effective angle of internal friction

For clean sands and gravels, there is no intrinsic bond between particles, so $c' = 0$. The strength equation simplifies to $\tau_f = \sigma' \tan(\phi')$.

## Laboratory Determination of Shear Strength

To determine $c'$ and $\phi'$ for design, engineers conduct laboratory tests on representative soil samples.

### Direct Shear Test
The oldest and simplest test. A soil sample is placed in a split metal box. A normal load is applied vertically. Then, a horizontal force is applied to the top half of the box to shear the sample along a predetermined horizontal plane. The test is repeated on three identical samples under different normal loads. The peak shear stress is plotted against normal stress to yield a straight line; the slope is $\phi'$, and the y-intercept is $c'$.

### Triaxial Shear Test
The most versatile and widely used test. A cylindrical soil specimen is encased in a rubber membrane and placed in a water-filled chamber. A confining fluid pressure ($\sigma_3$) is applied. Then, an axial load (deviator stress, $\Delta\sigma$) is gradually applied until the sample fails. The major principal stress at failure is $\sigma_1 = \sigma_3 + \Delta\sigma_f$. 

By varying the drainage conditions during the application of confining pressure and deviator stress, three main types of triaxial tests are performed to simulate different field scenarios:
1.  **Consolidated-Drained (CD) Test**: Water is allowed to drain freely. Excess pore pressure ($u$) is always zero. This yields long-term effective stress parameters ($c', \phi'$). It is a slow test, often taking days for clays.
2.  **Consolidated-Undrained (CU) Test**: The sample is consolidated under $\sigma_3$, but the drainage valve is closed during shearing. Pore pressure ($u$) is measured, allowing for the calculation of effective stresses.
3.  **Unconsolidated-Undrained (UU) Test**: No drainage is permitted at any stage. This test simulates rapid, short-term loading (e.g., immediate end-of-construction of an embankment on soft clay). It yields the undrained shear strength ($S_u$), where the friction angle $\phi_u$ is often treated as zero.

## Mathematical Examples

### Example 1: Direct Shear Test Analysis

A direct shear test was conducted on a dry sand sample in a $50 \text{ mm} \times 50 \text{ mm}$ shear box. Three tests were performed with different normal loads ($N$). The shear force ($T$) at failure was recorded.
- Test 1: $N = 100 \text{ N}$, $T_f = 65 \text{ N}$
- Test 2: $N = 250 \text{ N}$, $T_f = 160 \text{ N}$
- Test 3: $N = 400 \text{ N}$, $T_f = 255 \text{ N}$
Determine the angle of internal friction ($\phi'$) of the sand.

**Solution:**
Area of the shear box $A = 50 \text{ mm} \times 50 \text{ mm} = 2500 \text{ mm}^2 = 0.0025 \text{ m}^2$.

Calculate normal stress ($\sigma'$) and shear stress at failure ($\tau_f$) for each test:
- Test 1: $\sigma'_1 = 100 / 0.0025 = 40,000 \text{ Pa} = 40 \text{ kPa}$. $\tau_{f1} = 65 / 0.0025 = 26 \text{ kPa}$.
- Test 2: $\sigma'_2 = 250 / 0.0025 = 100,000 \text{ Pa} = 100 \text{ kPa}$. $\tau_{f2} = 160 / 0.0025 = 64 \text{ kPa}$.
- Test 3: $\sigma'_3 = 400 / 0.0025 = 160,000 \text{ Pa} = 160 \text{ kPa}$. $\tau_{f3} = 255 / 0.0025 = 102 \text{ kPa}$.

Since it's a dry sand, we assume cohesion $c' = 0$. The failure envelope equation is $\tau_f = \sigma' \tan(\phi')$.
We can calculate $\tan(\phi')$ for each test and average them:
- $\tan(\phi_1) = \tau_{f1} / \sigma'_1 = 26 / 40 = 0.650 \Rightarrow \phi_1 = 33.0^\circ$
- $\tan(\phi_2) = \tau_{f2} / \sigma'_2 = 64 / 100 = 0.640 \Rightarrow \phi_2 = 32.6^\circ$
- $\tan(\phi_3) = \tau_{f3} / \sigma'_3 = 102 / 160 = 0.6375 \Rightarrow \phi_3 = 32.5^\circ$

Average angle of internal friction $\phi' \approx 32.7^\circ$.

### Example 2: Triaxial Test and Mohr's Circle

A consolidated-drained (CD) triaxial test is conducted on a normally consolidated clay ($c' = 0$). The confining chamber pressure ($\sigma_3'$) is $150 \text{ kPa}$. The sample fails when the added deviator stress ($\Delta\sigma_f$) reaches $210 \text{ kPa}$. Calculate the effective angle of internal friction ($\phi'$).

**Solution:**
In a CD test, effective stress equals total stress because there is no excess pore pressure ($u=0$).
Identify principal stresses at failure:
- Minor principal effective stress, $\sigma_3' = 150 \text{ kPa}$
- Major principal effective stress, $\sigma_1' = \sigma_3' + \Delta\sigma_f = 150 + 210 = 360 \text{ kPa}$

The relationship between principal stresses at failure for a soil with $c'=0$ is derived from the geometry of the Mohr's circle tangent to the failure envelope:
$$ \sin(\phi') = \frac{\sigma_1' - \sigma_3'}{\sigma_1' + \sigma_3'} $$

Substitute the values:
$$ \sin(\phi') = \frac{360 - 150}{360 + 150} = \frac{210}{510} = 0.4117 $$
$$ \phi' = \arcsin(0.4117) = 24.3^\circ $$

### Example 3: Shear Strength with Pore Pressure

A soil element under a dam is subjected to a total normal stress of $\sigma = 280 \text{ kPa}$ and a shear stress of $\tau = 120 \text{ kPa}$. The soil properties are $c' = 20 \text{ kPa}$ and $\phi' = 28^\circ$. Due to reservoir filling, the pore water pressure $u$ in the element rises to $110 \text{ kPa}$. Calculate the available shear strength ($\tau_f$) and determine if the soil element will fail under these conditions.

**Solution:**
First, calculate the effective normal stress ($\sigma'$):
$$ \sigma' = \sigma - u = 280 - 110 = 170 \text{ kPa} $$

Next, use the Mohr-Coulomb failure criterion to calculate the available shear strength at this effective normal stress:
$$ \tau_f = c' + \sigma' \tan(\phi') $$
$$ \tau_f = 20 + 170 \cdot \tan(28^\circ) $$
$$ \tau_f = 20 + 170 \cdot 0.5317 $$
$$ \tau_f = 20 + 90.39 = 110.39 \text{ kPa} $$

Compare available strength to applied stress:
The available shear strength is $\tau_f = 110.39 \text{ kPa}$.
The applied shear stress is $\tau = 120 \text{ kPa}$.
Since $\tau > \tau_f$, the applied stress exceeds the soil's capacity to resist it. The soil element **will fail** in shear.

## Engineering Applications

Shear strength governs the stability of all major earthworks.

In designing an **earthfill dam**, an engineer must ensure the downstream slope doesn't slide away. The critical condition often occurs immediately after construction (short-term stability), analyzed using the undrained shear strength ($S_u$) from UU tests, because the clay core hasn't had time to consolidate. Alternatively, the upstream slope is most vulnerable during a "rapid drawdown" event (when the reservoir is quickly emptied). Water trapped in the soil pores maintains a high pore pressure while the stabilizing weight of the reservoir water is removed, causing effective stress and shear strength to plummet, leading to slope failure.

For **shallow foundations**, the ultimate bearing capacity formula directly incorporates cohesion ($c'$) and the friction angle ($\phi'$). A dense sand with a high friction angle ($\phi' = 38^\circ$) provides a much higher bearing capacity than a loose sand ($\phi' = 28^\circ$), allowing for smaller, more economical footing designs. If engineers build on a weak clay ($S_u = 30 \text{ kPa}$), the foundation will simply punch through the soil, necessitating expensive deep foundations (piles) driven down to stronger strata.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Determine Design Scenario"},
    {"id": "B", "label": "Short-term (End of Construction)"},
    {"id": "C", "label": "Long-term (Steady Seepage)"},
    {"id": "D", "label": "Run UU Triaxial Test"},
    {"id": "E", "label": "Run CD/CU Triaxial Test"},
    {"id": "F", "label": "Obtain Undrained Strength (S_u)"},
    {"id": "G", "label": "Obtain Effective Parameters (c', \\phi')"},
    {"id": "H", "label": "Calculate Effective Normal Stress"},
    {"id": "I", "label": "Apply Mohr-Coulomb: \\tau_f = c' + \\sigma' \\tan(\\phi')"},
    {"id": "J", "label": "Calculate Factor of Safety (FoS = \\tau_f / \\tau_{applied})"}
  ],
  "edges": [
    {"source": "A", "target": "B"},
    {"source": "A", "target": "C"},
    {"source": "B", "target": "D"},
    {"source": "C", "target": "E"},
    {"source": "D", "target": "F"},
    {"source": "E", "target": "G"},
    {"source": "F", "target": "J"},
    {"source": "G", "target": "H"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J"}
  ]
}
```
