# Soil Compaction

## Introduction to Compaction

Soil compaction is one of the most critical and ubiquitous processes in civil engineering construction. It is the process of densifying soil by applying mechanical energy (using rollers, tampers, or vibration) to expel air from the void spaces between soil particles. Unlike consolidation, which is the expulsion of water under long-term sustained loads, compaction is an immediate reduction in volume achieved by expelling air.

The primary objective of compaction is to improve the engineering properties of the soil mass. Properly compacted soil exhibits:
- **Increased shear strength**, enhancing the bearing capacity for foundations and the stability of slopes.
- **Decreased compressibility**, which minimizes future settlement of structures built on the fill.
- **Decreased permeability**, making it more resistant to water flow, which is crucial for earth dams and landfill liners.
- **Controlled shrink-swell behavior**, particularly important in expansive clay soils.

Whenever soil is excavated and used as fill material for a project—such as an embankment, an earth dam, or a subbase for a highway—it must be compacted to ensure it performs adequately under structural and environmental loads.

## The Role of Water in Compaction

The degree of compaction achievable for a given soil depends heavily on its water content. Water acts as a lubricant between soil particles. 
- At very low water contents, the soil is stiff, and the particles resist moving closer together, resulting in a low dry unit weight.
- As water is added, the particles become lubricated and easily slide into a denser configuration under mechanical effort, increasing the dry unit weight.
- However, if too much water is added, the water begins to take up the void space that could otherwise be occupied by solid particles. Since water is incompressible under typical compaction pressures, the addition of more water physically pushes the soil grains apart, causing the dry unit weight to decrease.

This behavior implies that for any specific soil and specific compaction effort, there is an **Optimum Moisture Content (OMC)** at which the **Maximum Dry Density (MDD)** or maximum dry unit weight is achieved.

## Laboratory Compaction Tests

To determine the OMC and MDD, laboratory tests are conducted to simulate field compaction. The standard procedures are the Standard Proctor Test and the Modified Proctor Test.

### Standard Proctor Test
Developed by R.R. Proctor in the 1930s, this test involves compacting a soil sample in a standard cylindrical mold ($101.6 \text{ mm}$ diameter, $116.4 \text{ mm}$ height, volume roughly $944 \text{ cm}^3$) using a standard hammer ($2.5 \text{ kg}$ dropping from $305 \text{ mm}$). The soil is compacted in three equal layers, with each layer receiving 25 blows from the hammer. 
The test is repeated at several different water contents. The dry unit weight for each test is calculated and plotted against the corresponding water content to create a **compaction curve**.

### Modified Proctor Test
Developed later to simulate the heavier compaction equipment used in modern construction (like airfield pavements), this test applies much greater energy. It uses a heavier hammer ($4.54 \text{ kg}$ dropping from $457 \text{ mm}$) and compacts the soil in five layers, with 25 blows per layer. The resulting compaction curve will show a higher Maximum Dry Density and a lower Optimum Moisture Content compared to the Standard Proctor test for the same soil.

## Zero Air Voids Curve

The theoretical maximum possible dry density at any given water content occurs when the soil is completely saturated ($S = 100\%$), meaning all voids are filled with water and there is zero air. The curve representing this theoretical limit is called the **Zero Air Voids (ZAV) curve**. The actual compaction curve always lies below the ZAV curve because it is practically impossible to remove 100% of the air voids through dynamic compaction.

## Field Compaction and Quality Control

In the field, compaction is achieved using heavy machinery suited to the soil type:
- **Smooth-wheel rollers:** Good for proof-rolling and finishing granular soils.
- **Pneumatic rubber-tired rollers:** Effective for sandy and clayey soils.
- **Sheepsfoot rollers:** Have protrusions (feet) that penetrate the soil, ideal for cohesive soils (clays) as they knead the soil and break up clods.
- **Vibratory rollers:** Extremely effective for granular soils (sands and gravels) as the vibration helps the particles settle into dense configurations.

### Relative Compaction (RC)
To ensure the contractor has achieved adequate compaction in the field, specifications typically require a certain percentage of the laboratory maximum dry density. This is called Relative Compaction ($RC$):
$$ RC = \frac{\gamma_{d(\text{field})}}{\gamma_{d(\text{max, lab})}} \times 100\% $$
Common specifications require $RC$ to be $\ge 95\%$ of the Standard or Modified Proctor maximum dry density. Field density tests, such as the sand cone method or a nuclear density gauge, are performed on-site to verify compliance.

## Mathematical Examples

### Example 1: Calculating Dry Unit Weight from Proctor Data

During a Standard Proctor test, a compacted soil sample in the mold has a total mass of $1.95 \text{ kg}$. The volume of the mold is $944 \text{ cm}^3$. A sample taken for water content determination has a wet mass of $45.2 \text{ g}$ and a dry mass of $39.5 \text{ g}$. Calculate the bulk unit weight ($\gamma$) and the dry unit weight ($\gamma_d$) in $\text{kN/m}^3$. Assume $g = 9.81 \text{ m/s}^2$.

**Solution:**
Calculate Bulk Density ($\rho$):
$$ \rho = \frac{M_t}{V_t} = \frac{1.95 \text{ kg}}{944 \times 10^{-6} \text{ m}^3} = 2065.7 \text{ kg/m}^3 $$

Calculate Bulk Unit Weight ($\gamma$):
$$ \gamma = \rho \cdot g = 2065.7 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 = 20264 \text{ N/m}^3 = 20.26 \text{ kN/m}^3 $$

Calculate Water Content ($w$):
$$ w = \frac{M_w}{M_s} = \frac{45.2 - 39.5}{39.5} = \frac{5.7}{39.5} = 0.1443 = 14.43\% $$

Calculate Dry Unit Weight ($\gamma_d$):
$$ \gamma_d = \frac{\gamma}{1 + w} = \frac{20.26}{1 + 0.1443} = \frac{20.26}{1.1443} = 17.71 \text{ kN/m}^3 $$

### Example 2: Zero Air Voids Curve Calculation

A soil has a specific gravity of solids $G_s = 2.70$. Calculate the theoretical maximum dry unit weight (zero air voids) at a water content of $15\%$. Use $\gamma_w = 9.81 \text{ kN/m}^3$.

**Solution:**
The equation for the zero air voids (ZAV) dry unit weight ($\gamma_{zav}$) is based on the condition where Degree of Saturation $S = 1.0$ (or 100%).
Starting with the unit weight equation:
$$ \gamma_d = \frac{G_s \cdot \gamma_w}{1 + e} $$

Using the phase relationship $S \cdot e = w \cdot G_s$, we set $S = 1$, which gives $e = w \cdot G_s$.
Substitute $e$ into the dry unit weight equation:
$$ \gamma_{zav} = \frac{G_s \cdot \gamma_w}{1 + w \cdot G_s} $$

Now, plug in the given values ($G_s = 2.70$, $w = 0.15$):
$$ \gamma_{zav} = \frac{2.70 \cdot 9.81}{1 + (0.15 \cdot 2.70)} $$
$$ \gamma_{zav} = \frac{26.487}{1 + 0.405} = \frac{26.487}{1.405} = 18.85 \text{ kN/m}^3 $$
Therefore, at $15\%$ moisture content, the dry unit weight cannot possibly exceed $18.85 \text{ kN/m}^3$.

### Example 3: Relative Compaction and Field Specifications

A highway embankment requires a fill material to be compacted to a minimum Relative Compaction (RC) of 95% of the Standard Proctor maximum dry density. Laboratory tests on the proposed borrow soil yielded a maximum dry unit weight of $18.5 \text{ kN/m}^3$ at an optimum moisture content of $13.5\%$.
A field density test (sand cone method) is performed on a compacted lift of the embankment. The measured in-situ bulk unit weight is $19.2 \text{ kN/m}^3$ and the field moisture content is $12\%$. Has the contractor met the compaction specification?

**Solution:**
First, determine the required minimum dry unit weight in the field:
$$ \gamma_{d(\text{required})} = RC \times \gamma_{d(\text{max, lab})} $$
$$ \gamma_{d(\text{required})} = 0.95 \times 18.5 \text{ kN/m}^3 = 17.575 \text{ kN/m}^3 $$

Next, calculate the actual dry unit weight achieved in the field from the field test data:
$$ \gamma_{d(\text{field})} = \frac{\gamma_{\text{field}}}{1 + w_{\text{field}}} $$
$$ \gamma_{d(\text{field})} = \frac{19.2}{1 + 0.12} = \frac{19.2}{1.12} = 17.14 \text{ kN/m}^3 $$

Compare the field value to the required value:
$$ \gamma_{d(\text{field})} = 17.14 \text{ kN/m}^3 $$
$$ \gamma_{d(\text{required})} = 17.575 \text{ kN/m}^3 $$

Since $17.14 < 17.575$, the contractor **has not** met the specification. The Relative Compaction achieved is:
$$ RC_{\text{achieved}} = \frac{17.14}{18.5} \times 100\% = 92.6\% $$
The contractor must provide additional compaction effort (more roller passes) and may need to add slightly more water to move closer to the optimum moisture content of $13.5\%$.

## Engineering Applications

Compaction is the unsung hero of civil infrastructure. 

When constructing **highway pavements**, the subgrade soil must be compacted to prevent rutting and failure of the asphalt or concrete layers above. Poor compaction leads to uneven settlement and pothole formation.

In the construction of **earth dams**, careful compaction of the clay core is essential to create an impermeable barrier that prevents water from seeping through the dam. The compaction must be uniform; otherwise, differential settlement could cause cracks in the core, leading to catastrophic failure.

For **shallow foundations**, if a building is to be constructed on an area that previously had a ravine or depression, the area must be filled with structural fill. This fill must be placed in thin lifts (layers) and rigorously compacted to ensure the new building does not settle excessively under its own weight. Testing the relative compaction guarantees the safety and longevity of the structure above.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Borrow Soil Selection"},
    {"id": "B", "label": "Laboratory Proctor Test"},
    {"id": "C", "label": "Determine OMC and Max Dry Density"},
    {"id": "D", "label": "Field Placement (Lifts)"},
    {"id": "E", "label": "Moisture Conditioning (Add Water/Dry)"},
    {"id": "F", "label": "Mechanical Compaction (Rollers)"},
    {"id": "G", "label": "Field Density Test (Quality Control)"},
    {"id": "H", "label": "Calculate Field Dry Density & RC"},
    {"id": "I", "label": "RC >= 95%?"},
    {"id": "J", "label": "Approve Lift, Proceed to Next"},
    {"id": "K", "label": "Rework: Re-compact or Adjust Moisture"}
  ],
  "edges": [
    {"source": "A", "target": "B"},
    {"source": "B", "target": "C"},
    {"source": "C", "target": "D"},
    {"source": "D", "target": "E"},
    {"source": "E", "target": "F"},
    {"source": "F", "target": "G"},
    {"source": "G", "target": "H"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J", "label": "Yes"},
    {"source": "I", "target": "K", "label": "No"},
    {"source": "K", "target": "E"}
  ]
}
```
