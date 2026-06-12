# Stresses in a Soil Mass

## Introduction to Stress Distribution

In the previous chapters, we examined the geostatic stresses existing in soil due to its own self-weight. However, civil engineering inherently involves imposing new loads onto the earth—buildings, bridge piers, highway embankments, and heavy machinery. When an external surface load is applied to a soil mass, it induces an increase in stress throughout the soil beneath it.

Understanding how this induced stress is distributed with depth and horizontal distance is a critical prerequisite for evaluating soil deformation (settlement) and determining the safety against shear failure (bearing capacity). If a foundation induces a stress that exceeds the soil's strength at any given depth, failure will occur. If the stress induces large compressive strains in deep, highly compressible clay layers, excessive settlement will damage the structure above.

The distribution of stress in soil is complex due to the material's non-linear, anisotropic, and heterogeneous nature. However, to make practical calculations, geotechnical engineers typically model the soil mass as an **elastic, isotropic, and homogeneous half-space**, utilizing principles from the theory of elasticity.

## Boussinesq's Solution for a Point Load

The fundamental mathematical basis for stress distribution was formulated by the French mathematician Joseph Boussinesq in 1885. He derived equations for the stresses induced in an elastic half-space by a concentrated vertical point load ($P$) applied at the surface.

While exact point loads rarely exist in practice, Boussinesq's theory forms the building block for all other loading geometries. By integrating the point load solution over a specific area, engineers can determine stresses under strip footings, circular tanks, and rectangular building foundations.

According to Boussinesq, the vertical stress increase ($\Delta\sigma_z$) at a depth $z$ and a radial horizontal distance $r$ from the point of load application is:
$$ \Delta\sigma_z = \frac{3P}{2\pi z^2} \left[ \frac{1}{1 + (r/z)^2} \right]^{5/2} $$

This equation reveals key characteristics of stress distribution:
1. **Vertical Attenuation**: The stress $\Delta\sigma_z$ decreases rapidly with depth $z$. Directly beneath the load ($r=0$), it varies inversely with the square of the depth ($1/z^2$).
2. **Lateral Dispersion**: The stress spreads out laterally, creating a "bulb of pressure" beneath the load. The stress is maximum directly under the load and decreases as the horizontal distance $r$ increases.

## Superposition and Complex Loading Areas

Because the Boussinesq theory assumes the soil behaves as a linear elastic material, the **principle of superposition** applies. This means that the total stress induced by multiple loads at any given point in the soil is simply the sum of the stresses induced by each load individually.

This principle allows engineers to calculate stresses under complex foundation geometries. For example, a continuous strip footing (like a wall foundation) can be modeled as a line load. A rectangular foundation can be solved by integrating point loads over the rectangular area.

### Rectangular Loaded Areas
For a uniformly loaded rectangular area with dimensions $B$ (width) and $L$ (length) applying a pressure $q$, the vertical stress increase at a depth $z$ beneath the *corner* of the rectangle is given by Fadum's chart or the following integration:
$$ \Delta\sigma_z = q \cdot I_z $$
Where $I_z$ is an influence factor depending on the ratios $m = B/z$ and $n = L/z$.
To find the stress under the center of a foundation, the rectangle is split into four smaller rectangles sharing a corner at the center, and the stresses are superimposed.

## Approximate Methods: The 2:1 Method

While Boussinesq's rigorous mathematical solutions are precise for an elastic half-space, engineers often use a simplified, approximate method for preliminary design and rapid checks.

The **2:1 Method** assumes that the zone of stress influence spreads out at an angle of 2 vertical to 1 horizontal (roughly $26.6^\circ$). Thus, a rectangular foundation of area $B \times L$ at the surface will distribute its load over an area $(B + z) \times (L + z)$ at a depth $z$.

The approximate stress increase is calculated by taking the total load ($Q = q \cdot B \cdot L$) and dividing it by this expanded area:
$$ \Delta\sigma_z \approx \frac{q \cdot B \cdot L}{(B + z)(L + z)} $$
This method yields surprisingly reasonable estimates for depths equal to or greater than the foundation width $B$.

## Mathematical Examples

### Example 1: Boussinesq Point Load Application

A concentrated point load of $200 \text{ kN}$ is applied at the ground surface. Calculate the vertical stress increase at a depth of $4 \text{ m}$ directly beneath the load, and at a horizontal distance of $3 \text{ m}$ away from the axis of loading at the same depth.

**Solution:**
Given: Point Load $P = 200 \text{ kN}$, Depth $z = 4 \text{ m}$.

1. **Stress directly beneath the load ($r = 0 \text{ m}$):**
   Using Boussinesq's equation:
   $$ \Delta\sigma_z = \frac{3P}{2\pi z^2} \left[ \frac{1}{1 + (r/z)^2} \right]^{5/2} $$
   When $r=0$, the term in brackets becomes $1^{5/2} = 1$.
   $$ \Delta\sigma_z = \frac{3 \cdot 200}{2 \cdot \pi \cdot (4)^2} = \frac{600}{2 \cdot \pi \cdot 16} = \frac{600}{100.53} = 5.97 \text{ kPa} $$

2. **Stress at a horizontal distance ($r = 3 \text{ m}$):**
   Here, $r/z = 3/4 = 0.75$.
   $$ \Delta\sigma_z = \frac{3 \cdot 200}{2\pi (4)^2} \left[ \frac{1}{1 + (0.75)^2} \right]^{5/2} $$
   $$ \Delta\sigma_z = 5.97 \cdot \left[ \frac{1}{1 + 0.5625} \right]^{5/2} = 5.97 \cdot \left[ \frac{1}{1.5625} \right]^{2.5} $$
   $$ \Delta\sigma_z = 5.97 \cdot (0.64)^{2.5} = 5.97 \cdot 0.32768 = 1.96 \text{ kPa} $$
   Notice how the stress drops by roughly 67% just 3 meters away horizontally.

### Example 2: Stress under a Rectangular Footing (2:1 Method)

A rectangular building foundation measures $3 \text{ m}$ by $5 \text{ m}$ and carries a uniformly distributed contact pressure of $150 \text{ kPa}$. Using the approximate 2:1 distribution method, estimate the vertical stress increase at a depth of $6 \text{ m}$ beneath the center of the footing.

**Solution:**
Given parameters: Width $B = 3 \text{ m}$, Length $L = 5 \text{ m}$, Surface pressure $q = 150 \text{ kPa}$, Depth $z = 6 \text{ m}$.

The 2:1 approximation assumes the loaded area expands uniformly by $z/2$ on all sides. So the width increases by $(z/2) + (z/2) = z$.
The dimensions of the stressed area at depth $z = 6 \text{ m}$ are:
$$ B_z = B + z = 3 + 6 = 9 \text{ m} $$
$$ L_z = L + z = 5 + 6 = 11 \text{ m} $$

Calculate the total load $Q$ applied by the foundation:
$$ Q = q \cdot B \cdot L = 150 \text{ kPa} \cdot 3 \text{ m} \cdot 5 \text{ m} = 2250 \text{ kN} $$

Calculate the approximate stress increase $\Delta\sigma_z$ by dividing the total load by the expanded area:
$$ \Delta\sigma_z = \frac{Q}{B_z \cdot L_z} = \frac{2250}{9 \cdot 11} = \frac{2250}{99} = 22.73 \text{ kPa} $$

### Example 3: Superposition of Point Loads

Two columns rest on separate small footings. Column A carries a point load of $500 \text{ kN}$ and Column B carries a point load of $800 \text{ kN}$. The columns are spaced $6 \text{ m}$ apart. Calculate the vertical stress increase at a depth of $5 \text{ m}$ exactly halfway between the two columns.

**Solution:**
The point of interest is $5 \text{ m}$ deep, located $3 \text{ m}$ horizontally from Column A and $3 \text{ m}$ horizontally from Column B.
$z = 5 \text{ m}$, $r_A = 3 \text{ m}$, $r_B = 3 \text{ m}$.
$P_A = 500 \text{ kN}$, $P_B = 800 \text{ kN}$.

1. **Calculate stress induced by Column A:**
   $$ r_A/z = 3/5 = 0.6 $$
   $$ \Delta\sigma_{zA} = \frac{3 \cdot 500}{2\pi(5)^2} \left[ \frac{1}{1 + (0.6)^2} \right]^{5/2} = \frac{1500}{157.08} \left[ \frac{1}{1.36} \right]^{2.5} $$
   $$ \Delta\sigma_{zA} = 9.55 \cdot (0.735)^{2.5} = 9.55 \cdot 0.463 = 4.42 \text{ kPa} $$

2. **Calculate stress induced by Column B:**
   $$ r_B/z = 3/5 = 0.6 $$
   $$ \Delta\sigma_{zB} = \frac{3 \cdot 800}{2\pi(5)^2} \left[ \frac{1}{1 + (0.6)^2} \right]^{5/2} = \frac{2400}{157.08} (0.463) $$
   $$ \Delta\sigma_{zB} = 15.28 \cdot 0.463 = 7.07 \text{ kPa} $$

3. **Superimpose the stresses:**
   Using the principle of superposition, the total stress increase at the midpoint is the sum of the individual stress increases.
   $$ \Delta\sigma_{z(\text{total})} = \Delta\sigma_{zA} + \Delta\sigma_{zB} = 4.42 + 7.07 = 11.49 \text{ kPa} $$

## Engineering Applications

Analyzing stress distribution is a critical, unavoidable step in foundation design.

When designing the foundations for a heavy **multi-story building**, engineers must ensure that the pressure bulbs from adjacent footings do not overlap significantly. If footings are placed too close together, the overlapping stresses superimpose deep in the soil profile. This can lead to massive stresses converging on a deep clay layer, resulting in unexpected and severe settlement. Stress distribution analysis reveals when engineers must switch from isolated footings to a massive combined mat foundation.

In **underground tunneling or excavation**, understanding how surface loads (like an existing highway or building) transmit stress downwards is vital. If a subway tunnel is excavated within the pressure bulb of a surface building, the tunnel lining must be designed to withstand that heavily concentrated stress. 

For **embankment construction** over soft soils, calculating the vertical stress increment allows engineers to predict how much the soft soil will consolidate (squish) over time. If the stress is too high, the soil may fail in shear before it has a chance to consolidate and gain strength, leading engineers to use staged construction, allowing the soil to slowly adapt to partial stress increments over months or years.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Surface Loading Geometry (Point, Line, Area)"},
    {"id": "B", "label": "Determine Foundation Properties (Q, B, L, q)"},
    {"id": "C", "label": "Select Analysis Method"},
    {"id": "D", "label": "Elasticity Theory (Boussinesq, Fadum charts)"},
    {"id": "E", "label": "Approximate Method (2:1 Distribution)"},
    {"id": "F", "label": "Define Point of Interest (Depth z, Radius r)"},
    {"id": "G", "label": "Calculate Influence Factors"},
    {"id": "H", "label": "Calculate Stress Increment (\\Delta\\sigma_z)"},
    {"id": "I", "label": "Apply Superposition for Multiple Loads"},
    {"id": "J", "label": "Use for Settlement and Bearing Capacity Analysis"}
  ],
  "edges": [
    {"source": "A", "target": "B"},
    {"source": "B", "target": "C"},
    {"source": "C", "target": "D"},
    {"source": "C", "target": "E"},
    {"source": "D", "target": "F"},
    {"source": "E", "target": "F"},
    {"source": "F", "target": "G"},
    {"source": "G", "target": "H"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J"}
  ]
}
```
