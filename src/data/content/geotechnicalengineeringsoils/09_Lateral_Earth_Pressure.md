# Lateral Earth Pressure

## Introduction to Earth Pressures

In previous chapters, we analyzed the vertical stresses in a soil mass. However, soil also exerts horizontal forces. When you dig a hole, the vertical sides eventually collapse inward. To maintain a vertical change in elevation—such as for a basement wall, a bridge abutment, or a tunnel shaft—an engineering structure must be constructed to hold the soil back. This structure is called a retaining wall.

To design a retaining wall that won't slide, overturn, or snap, the engineer must accurately calculate the horizontal pressures exerted by the retained soil mass. This horizontal pressure is termed **lateral earth pressure**. Its magnitude depends heavily on the type of soil, the groundwater conditions, and, most importantly, the movement of the retaining structure itself.

## Earth Pressure States

The lateral earth pressure at a depth $z$ is related to the vertical effective stress ($\sigma'_v = \gamma \cdot z$) by a coefficient of lateral earth pressure, $K$.
$$ \sigma'_h = K \cdot \sigma'_v $$

The value of $K$ depends on the lateral strain (movement) of the soil, leading to three distinct states of earth pressure:

1. **At-Rest State ($K_0$)**: 
   If the retaining wall is infinitely rigid and absolutely unyielding (e.g., a heavily braced basement wall tied into concrete floor slabs), the soil is prevented from expanding or contracting laterally. The lateral strain is zero. The pressure exerted is the "at-rest" pressure.
   An empirical formula by Jaky for normally consolidated soils is:
   $$ K_0 = 1 - \sin(\phi') $$

2. **Active State ($K_a$)**: 
   If the retaining wall moves or tilts slightly *away* from the backfill soil, the soil mass stretches laterally. As the soil expands, its shear strength is mobilized, helping to support its own weight. Because the soil is helping to hold itself up, the lateral pressure against the wall decreases. It reaches a minimum possible value when a shear failure wedge fully develops in the soil. This is the "active" earth pressure. The required movement to reach this state is very small (often less than 0.1% of the wall height).

3. **Passive State ($K_p$)**: 
   If the retaining wall is pushed *into* the soil mass (e.g., the soil in front of the toe of a retaining wall resisting sliding), the soil is compressed laterally. This compression mobilizes the soil's shear strength to resist the movement. The pressure against the wall increases until a shear failure wedge is pushed upward and outward. This maximum possible resistance is the "passive" earth pressure. It requires significantly more movement to fully mobilize than the active state.

In magnitude: $K_a < K_0 < K_p$.
Active pressure is a driving force (pushing the wall over), while passive pressure is a resisting force (holding the wall in place).

## Rankine Earth Pressure Theory

Developed by William John Macquorn Rankine in 1857, this theory makes several simplifying assumptions to calculate $K_a$ and $K_p$:
- The soil is a homogeneous, isotropic, semi-infinite mass.
- The back of the retaining wall is perfectly vertical and absolutely smooth (frictionless).
- The soil failure surfaces are planar.

For a horizontal backfill surface and a cohesionless soil (sand, $c'=0$), the Rankine coefficients are derived from Mohr's circle geometry:
$$ K_a = \tan^2\left(45^\circ - \frac{\phi'}{2}\right) = \frac{1 - \sin(\phi')}{1 + \sin(\phi')} $$
$$ K_p = \tan^2\left(45^\circ + \frac{\phi'}{2}\right) = \frac{1 + \sin(\phi')}{1 - \sin(\phi')} $$

Notice that $K_p = \frac{1}{K_a}$.

The active earth pressure distribution against a wall of height $H$ is triangular. The active pressure at depth $z$ is $p_a = K_a \cdot \gamma \cdot z$.
The total active thrust force ($P_a$) per unit length of the wall is the area of this pressure triangle:
$$ P_a = \frac{1}{2} K_a \cdot \gamma \cdot H^2 $$
This resultant force acts at a height of $H/3$ from the base of the wall.

## Coulomb Earth Pressure Theory

Predating Rankine (1776), Coulomb developed a theory based on a limit equilibrium analysis of a sliding wedge of soil. Coulomb's theory is more versatile because it accounts for:
- Wall friction (an angle $\delta$ between the wall and the soil).
- Sloping wall faces.
- Sloping backfill geometry.

While the equations are more algebraically complex, Coulomb's inclusion of wall friction generally yields more realistic (and slightly lower) active pressures than Rankine. For passive pressures, however, Coulomb's assumption of planar failure surfaces severely overestimates passive resistance when wall friction is high, which can be dangerous for design.

## Mathematical Examples

### Example 1: At-Rest vs. Active Pressure Calculation

A rigid basement wall is $5 \text{ m}$ high. It retains a dry, normally consolidated sand backfill with a unit weight $\gamma = 18 \text{ kN/m}^3$ and a friction angle $\phi' = 32^\circ$. Calculate the total lateral thrust on the wall per meter length if the wall is unyielding (at-rest), and calculate the thrust if the wall is allowed to yield slightly (active state using Rankine theory).

**Solution:**
**Case 1: At-Rest State (Unyielding Wall)**
Calculate the at-rest coefficient ($K_0$):
$$ K_0 = 1 - \sin(\phi') = 1 - \sin(32^\circ) = 1 - 0.5299 = 0.470 $$
Calculate total at-rest force ($P_0$):
$$ P_0 = \frac{1}{2} K_0 \cdot \gamma \cdot H^2 $$
$$ P_0 = \frac{1}{2} \cdot 0.470 \cdot 18 \cdot (5)^2 = 0.5 \cdot 0.470 \cdot 18 \cdot 25 = 105.75 \text{ kN/m} $$

**Case 2: Active State (Yielding Wall)**
Calculate the active coefficient ($K_a$):
$$ K_a = \frac{1 - \sin(32^\circ)}{1 + \sin(32^\circ)} = \frac{1 - 0.5299}{1 + 0.5299} = \frac{0.4701}{1.5299} = 0.307 $$
Calculate total active force ($P_a$):
$$ P_a = \frac{1}{2} K_a \cdot \gamma \cdot H^2 $$
$$ P_a = \frac{1}{2} \cdot 0.307 \cdot 18 \cdot (5)^2 = 0.5 \cdot 0.307 \cdot 18 \cdot 25 = 69.08 \text{ kN/m} $$

Conclusion: Allowing the wall to yield slightly reduces the required design load from roughly $106 \text{ kN/m}$ to $69 \text{ kN/m}$, a significant cost savings in structural materials.

### Example 2: Active Earth Pressure with a Surcharge

A $4 \text{ m}$ high retaining wall supports a dry sand backfill ($\gamma = 17 \text{ kN/m}^3, \phi' = 30^\circ$). The surface of the backfill is horizontal, but it carries a uniform surcharge load (like a parked truck) of $q = 25 \text{ kPa}$. Calculate the total active force on the wall and the location of the resultant force.

**Solution:**
Calculate $K_a$:
$$ K_a = \frac{1 - \sin(30^\circ)}{1 + \sin(30^\circ)} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} = 0.333 $$

The pressure distribution has two components:
1. Due to soil weight: A triangle increasing from 0 at the top to $K_a \cdot \gamma \cdot H$ at the base.
2. Due to surcharge: A rectangle of constant pressure $K_a \cdot q$ from top to bottom.

Calculate forces for each component:
Force from soil ($P_{a1}$):
$$ P_{a1} = \frac{1}{2} K_a \cdot \gamma \cdot H^2 = 0.5 \cdot 0.333 \cdot 17 \cdot 4^2 = 45.3 \text{ kN/m} $$
Acting at $y_1 = H/3 = 4/3 = 1.33 \text{ m}$ from the base.

Force from surcharge ($P_{a2}$):
$$ P_{a2} = (K_a \cdot q) \cdot H = (0.333 \cdot 25) \cdot 4 = 8.33 \cdot 4 = 33.3 \text{ kN/m} $$
Acting at $y_2 = H/2 = 4/2 = 2.0 \text{ m}$ from the base.

Total Active Force ($P_{total}$):
$$ P_{total} = P_{a1} + P_{a2} = 45.3 + 33.3 = 78.6 \text{ kN/m} $$

Location of resultant ($\bar{y}$) from the base, using taking moments:
$$ \bar{y} \cdot P_{total} = (P_{a1} \cdot y_1) + (P_{a2} \cdot y_2) $$
$$ \bar{y} = \frac{(45.3 \cdot 1.33) + (33.3 \cdot 2.0)}{78.6} = \frac{60.25 + 66.6}{78.6} = \frac{126.85}{78.6} = 1.61 \text{ m} $$
The resultant force acts $1.61 \text{ m}$ above the base of the wall.

### Example 3: Effect of Groundwater on Earth Pressure

Re-evaluate the wall from Example 1 (Active case: $H=5\text{m}, \phi'=32^\circ, K_a=0.307$). However, due to heavy rain and poor drainage, the groundwater table rises to $2 \text{ m}$ below the surface. The dry unit weight above the water table is $18 \text{ kN/m}^3$, and the saturated unit weight below is $20 \text{ kN/m}^3$. Calculate the total lateral force on the wall. (Assume $\gamma_w = 9.81 \text{ kN/m}^3$).

**Solution:**
The pressure diagram must be split into two zones: $0\text{-}2\text{m}$ (dry) and $2\text{-}5\text{m}$ (submerged).
Water exerts full hydrostatic pressure, independent of $K_a$. Soil exerts pressure based on *effective* stress.

At $z = 0 \text{ m}$: $\sigma'_v = 0$, $u = 0$, $p_a = 0$
At $z = 2 \text{ m}$ (water table):
$$ \sigma'_v = 18 \cdot 2 = 36 \text{ kPa} $$
$$ p_a = K_a \cdot \sigma'_v = 0.307 \cdot 36 = 11.05 \text{ kPa} $$
$$ u = 0 $$

At $z = 5 \text{ m}$ (base):
$$ \sigma'_v = 36 + (\gamma_{sat} - \gamma_w) \cdot 3 = 36 + (20 - 9.81) \cdot 3 = 36 + (10.19 \cdot 3) = 36 + 30.57 = 66.57 \text{ kPa} $$
$$ p_a = K_a \cdot \sigma'_v = 0.307 \cdot 66.57 = 20.44 \text{ kPa} $$
$$ u = \gamma_w \cdot 3 = 9.81 \cdot 3 = 29.43 \text{ kPa} $$

Total forces (areas of the pressure diagrams):
1. Triangle $0\text{-}2\text{m}$ (dry soil): $P_1 = 0.5 \cdot 11.05 \cdot 2 = 11.05 \text{ kN/m}$
2. Rectangle $2\text{-}5\text{m}$ (constant pressure from soil above): $P_2 = 11.05 \cdot 3 = 33.15 \text{ kN/m}$
3. Triangle $2\text{-}5\text{m}$ (increasing pressure from submerged soil): $P_3 = 0.5 \cdot (20.44 - 11.05) \cdot 3 = 0.5 \cdot 9.39 \cdot 3 = 14.09 \text{ kN/m}$
4. Triangle $2\text{-}5\text{m}$ (Hydrostatic water pressure): $P_w = 0.5 \cdot 29.43 \cdot 3 = 44.15 \text{ kN/m}$

Total Force = $P_1 + P_2 + P_3 + P_w = 11.05 + 33.15 + 14.09 + 44.15 = 102.44 \text{ kN/m}$

Notice the severe impact of water: The active force jumped from $69 \text{ kN/m}$ (Example 1) to $102.44 \text{ kN/m}$ primarily due to the addition of hydrostatic water pressure.

## Engineering Applications

Earth pressure theories are the foundation of retaining structure design.

When designing a **cantilever retaining wall** for a highway curve, an engineer relies on the passive earth pressure acting on the buried toe of the wall to prevent the wall from sliding forward across the rock beneath it. If they overestimate the passive resistance $K_p$, the wall will slide and the highway will collapse.

The critical importance of drainage is highlighted by earth pressure analysis. As seen in Example 3, water pressure exerts a massive force on walls. If weep holes in a concrete retaining wall become clogged, groundwater builds up behind the wall. The wall was likely designed for an active soil force of say, $50 \text{ kN}$, but now faces an additional $80 \text{ kN}$ of hydrostatic pressure. This is the leading cause of retaining wall failures globally. Good engineering practice states: "Design for soil pressure, provide drainage for water."

For **braced excavations** (deep trenches for laying sewer pipes), the trench walls are held apart by hydraulic struts. Because the struts prevent the wall from yielding, the soil pressure does not drop to the minimum active state. Engineers must design the struts to withstand much higher pressures, often using empirical apparent earth pressure envelopes developed by Peck to ensure the safety of workers in the trench.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Identify Retaining Structure Type"},
    {"id": "B", "label": "Determine Wall Yielding Condition"},
    {"id": "C", "label": "Unyielding (Basements)"},
    {"id": "D", "label": "Yields Away from Backfill (Retaining Walls)"},
    {"id": "E", "label": "Pushed Into Backfill (Anchor Blocks, Toes)"},
    {"id": "F", "label": "Use At-Rest Theory (K_0)"},
    {"id": "G", "label": "Use Active Theory (K_a)"},
    {"id": "H", "label": "Use Passive Theory (K_p)"},
    {"id": "I", "label": "Define Soil Profile (\\gamma, \\phi', c') and Water Table"},
    {"id": "J", "label": "Calculate Pressure Distribution (\\sigma'_h = K \\cdot \\sigma'_v + u)"},
    {"id": "K", "label": "Calculate Resultant Forces & Overturning Moments"}
  ],
  "edges": [
    {"source": "A", "target": "B"},
    {"source": "B", "target": "C"},
    {"source": "B", "target": "D"},
    {"source": "B", "target": "E"},
    {"source": "C", "target": "F"},
    {"source": "D", "target": "G"},
    {"source": "E", "target": "H"},
    {"source": "F", "target": "I"},
    {"source": "G", "target": "I"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J"},
    {"source": "J", "target": "K"}
  ]
}
```
