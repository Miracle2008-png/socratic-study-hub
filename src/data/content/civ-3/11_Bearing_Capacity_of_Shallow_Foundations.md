# Bearing Capacity of Shallow Foundations

## Introduction to Bearing Capacity

A foundation is the structural element that interfaces between a building and the ground, transferring the loads of the superstructure into the underlying soil or rock. Foundations are generally classified as shallow (spread footings, mat foundations) or deep (piles, drilled shafts). Shallow foundations transfer loads relatively near the surface, typically where the depth of embedment ($D_f$) is less than the width of the footing ($B$).

The primary geotechnical requirement for any foundation is that it must not fail in shear. When a heavy load is applied to a footing, it induces shear stresses in the soil beneath it. If these stresses exceed the soil's shear strength, a rupture surface forms, and the foundation plunges downward while pushing the adjacent soil outward and upward. This catastrophic failure is known as a **bearing capacity failure**.

The **Ultimate Bearing Capacity ($q_u$)** is defined as the absolute maximum pressure the soil can support before failing in shear. For design, engineers divide this ultimate value by a Factor of Safety (usually FS = 3) to obtain the **Allowable Bearing Capacity ($q_{all}$)**, ensuring the building is safe and that settlement remains within tolerable limits.

## Terzaghi's Bearing Capacity Theory

Karl Terzaghi (1943) developed the first comprehensive theory for evaluating the ultimate bearing capacity of shallow foundations. He considered a continuous (strip) footing resting on a homogeneous soil.

Terzaghi proposed that the failure zone under a footing consists of three parts:
1. **Wedge Zone**: A triangular wedge of soil immediately beneath the footing that moves downward as a rigid body along with the footing.
2. **Radial Shear Zone**: Two zones radiating outward from the wedge where the soil is sheared and pushed sideways.
3. **Passive Zone**: Two triangular zones bordering the ground surface that are pushed upward and outward (heaving) by the expanding radial zones. The soil above the foundation depth ($D_f$) is assumed to provide a uniform surcharge pressure $q = \gamma \cdot D_f$ resisting this upward movement.

Terzaghi's ultimate bearing capacity equation for a continuous strip footing is:
$$ q_u = c \cdot N_c + q \cdot N_q + \frac{1}{2} \gamma \cdot B \cdot N_\gamma $$

Where:
- **$c$** = Cohesion of the soil underneath the footing.
- **$q$** = Surcharge pressure at the base of the footing ($q = \gamma \cdot D_f$).
- **$\gamma$** = Unit weight of the soil beneath the footing.
- **$B$** = Width of the footing.
- **$N_c, N_q, N_\gamma$** = Terzaghi's Bearing Capacity Factors, which are dimensionless numbers determined strictly by the soil's angle of internal friction ($\phi'$).

The equation beautifully illustrates the three components that contribute to a soil's ability to support load:
1. The cohesive strength of the soil ($c \cdot N_c$).
2. The depth of embedment / surcharge ($q \cdot N_q$).
3. The frictional resistance and weight of the soil itself ($\frac{1}{2} \gamma B N_\gamma$).

## Modifications for Footing Shape and Groundwater

Terzaghi's original equation was for an infinitely long strip footing. To account for rectangular, square, or circular footings, empirical shape factors were introduced.

**Meyerhof's General Bearing Capacity Equation (1963)** expanded on Terzaghi's work, providing a more comprehensive formula that includes shape factors ($s$), depth factors ($d$), and load inclination factors ($i$):
$$ q_u = c N_c s_c d_c i_c + q N_q s_q d_q i_q + \frac{1}{2} \gamma B N_\gamma s_\gamma d_\gamma i_\gamma $$

**The Effect of Groundwater:**
Water significantly reduces bearing capacity because it reduces effective stress. The unit weight ($\gamma$) used in the third term ($\frac{1}{2} \gamma B N_\gamma$) must reflect the effective weight of the soil within the failure zone (roughly a depth of $B$ below the footing).
- If the water table is at or above the footing base, the submerged unit weight ($\gamma' = \gamma_{sat} - \gamma_w$) must be used. This essentially cuts the third term's contribution in half.
- If the water table is located between the footing base and a depth $B$ below it, an interpolated effective unit weight is used.

## Mathematical Examples

### Example 1: Strip Footing on Cohesive Soil (Clay)

A continuous wall footing is to be constructed at a depth of $1.5 \text{ m}$ below the ground surface in a stiff clay. The clay has an undrained shear strength (cohesion, $c$) of $60 \text{ kPa}$ and an internal friction angle $\phi = 0^\circ$ (undrained condition). The unit weight of the clay is $18.5 \text{ kN/m}^3$. Determine the ultimate bearing capacity of the soil. (For $\phi = 0^\circ$, Terzaghi's factors are $N_c = 5.7$, $N_q = 1.0$, $N_\gamma = 0$).

**Solution:**
Identify given parameters:
- $D_f = 1.5 \text{ m}$
- $c = 60 \text{ kPa}$
- $\gamma = 18.5 \text{ kN/m}^3$

Calculate surcharge $q$:
$$ q = \gamma \cdot D_f = 18.5 \cdot 1.5 = 27.75 \text{ kPa} $$

Apply Terzaghi's equation for a strip footing:
$$ q_u = c \cdot N_c + q \cdot N_q + \frac{1}{2} \gamma \cdot B \cdot N_\gamma $$
Since $N_\gamma = 0$, the width of the footing ($B$) does not affect the bearing capacity in purely cohesive soils.
$$ q_u = (60 \cdot 5.7) + (27.75 \cdot 1.0) + 0 $$
$$ q_u = 342 + 27.75 = 369.75 \text{ kPa} $$

If the engineer uses a Factor of Safety of 3, the allowable bearing capacity $q_{all} = 369.75 / 3 = 123.25 \text{ kPa}$.

### Example 2: Square Footing on Sand

A square footing measuring $2 \text{ m} \times 2 \text{ m}$ is placed at a depth of $1.0 \text{ m}$ in a dense, dry sand. The sand has a cohesion $c' = 0$, friction angle $\phi' = 35^\circ$, and unit weight $\gamma = 19 \text{ kN/m}^3$. Calculate the ultimate bearing capacity. 
Use Terzaghi's equation with shape modifications for a square footing:
$$ q_u = 1.3 \cdot c \cdot N_c + q \cdot N_q + 0.4 \cdot \gamma \cdot B \cdot N_\gamma $$
(For $\phi' = 35^\circ$, $N_c = 57.8$, $N_q = 41.4$, $N_\gamma = 42.4$).

**Solution:**
Identify given parameters:
- $B = 2 \text{ m}$
- $D_f = 1.0 \text{ m}$
- $c' = 0$
- $\gamma = 19 \text{ kN/m}^3$

Calculate surcharge $q$:
$$ q = \gamma \cdot D_f = 19 \cdot 1.0 = 19 \text{ kPa} $$

Apply the modified equation:
$$ q_u = (1.3 \cdot 0 \cdot 57.8) + (19 \cdot 41.4) + (0.4 \cdot 19 \cdot 2 \cdot 42.4) $$
$$ q_u = 0 + 786.6 + 644.48 $$
$$ q_u = 1431.08 \text{ kPa} $$

### Example 3: Effect of Water Table

Re-evaluate Example 2. Suppose a severe flood raises the groundwater table to exactly the level of the ground surface. The saturated unit weight of the sand is $\gamma_{sat} = 20.5 \text{ kN/m}^3$. Calculate the new ultimate bearing capacity. ($\gamma_w = 9.81 \text{ kN/m}^3$).

**Solution:**
Because the water table is at the surface, all soil from the surface downward is submerged. We must use effective (submerged) unit weights for both the surcharge term ($q$) and the soil-weight term.

Calculate buoyant unit weight $\gamma'$:
$$ \gamma' = \gamma_{sat} - \gamma_w = 20.5 - 9.81 = 10.69 \text{ kN/m}^3 $$

Calculate new effective surcharge $q'$:
$$ q' = \gamma' \cdot D_f = 10.69 \cdot 1.0 = 10.69 \text{ kPa} $$

Apply the modified equation using $\gamma'$:
$$ q_u = (1.3 \cdot c \cdot N_c) + (q' \cdot N_q) + (0.4 \cdot \gamma' \cdot B \cdot N_\gamma) $$
$$ q_u = 0 + (10.69 \cdot 41.4) + (0.4 \cdot 10.69 \cdot 2 \cdot 42.4) $$
$$ q_u = 442.57 + 362.61 $$
$$ q_u = 805.18 \text{ kPa} $$

Notice the dramatic reduction. The ultimate bearing capacity dropped from $1431 \text{ kPa}$ to $805 \text{ kPa}$ (a 44% decrease) simply because the soil became submerged, halving the effective stress and thereby halving the available shear strength.

## Engineering Applications

Bearing capacity dictates the size, depth, and type of foundation chosen for a structure.

When designing a **column footing for a warehouse**, the engineer calculates the total load the column will carry (say, $1000 \text{ kN}$). If the allowable bearing capacity of the soil ($q_{all}$) is $200 \text{ kPa}$, the minimum required area of the footing is $A = Load / q_{all} = 1000 / 200 = 5 \text{ m}^2$. A square footing of roughly $2.25 \text{ m} \times 2.25 \text{ m}$ would be specified.

The equation reveals why **embedment depth ($D_f$)** is so beneficial. If a surface footing on sand ($D_f = 0$) isn't strong enough, digging a $1.5 \text{ m}$ trench and placing the footing deeper adds the $q N_q$ surcharge term. The soil above the footing acts as a heavy blanket, holding the failure wedges down and drastically increasing the capacity before the soil can heave upward.

If an analysis yields an extremely low bearing capacity (e.g., $q_{all} = 40 \text{ kPa}$) because the site sits on a swampy, organic clay, shallow footings would have to be massively wide, essentially covering the entire site (a mat foundation). Even then, settlement might be intolerable. In this case, the geotechnical engineer discards shallow foundation theory and opts for **deep foundations (piles)**, transferring the load through the weak muck to a deeper layer of dense sand or bedrock.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "A", "label": "Determine Footing Loads"},
    {"id": "B", "label": "Determine Soil Properties (c', \\phi', \\gamma)"},
    {"id": "C", "label": "Locate Groundwater Table"},
    {"id": "D", "label": "Find Bearing Capacity Factors (N_c, N_q, N_\\gamma)"},
    {"id": "E", "label": "Calculate Surcharge (q) considering WT"},
    {"id": "F", "label": "Apply Shape & Depth Factors"},
    {"id": "G", "label": "Calculate Ultimate Bearing Capacity (q_u)"},
    {"id": "H", "label": "Apply Factor of Safety (FS ~ 3)"},
    {"id": "I", "label": "Determine Allowable Capacity (q_all = q_u / FS)"},
    {"id": "J", "label": "Size Footing (Area = Load / q_all)"},
    {"id": "K", "label": "Check Settlement Requirements"}
  ],
  "edges": [
    {"source": "A", "target": "D"},
    {"source": "B", "target": "D"},
    {"source": "C", "target": "E"},
    {"source": "D", "target": "F"},
    {"source": "E", "target": "F"},
    {"source": "F", "target": "G"},
    {"source": "G", "target": "H"},
    {"source": "H", "target": "I"},
    {"source": "I", "target": "J"},
    {"source": "J", "target": "K"}
  ]
}
```
