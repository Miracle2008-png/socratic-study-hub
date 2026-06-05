# Radiation Heat Transfer: Black Surfaces

Calculating the net heat transfer rate between surfaces is the ultimate goal of radiation analysis. We begin with the simplest case: an enclosure made entirely of perfect blackbodies ($\varepsilon = 1$, $\alpha = 1$, $\rho = 0$).

Because blackbodies reflect nothing, we only have to track the radiation they emit.

## 1. Net Heat Transfer from Surface $i$

For any surface $i$ in an enclosure, the net rate of radiation heat transfer $\dot{Q}_i$ is the difference between what it emits and what it absorbs from all other surfaces.
- Positive $\dot{Q}_i$ means the surface is losing net heat (it must be supplied with energy to maintain its temperature).
- Negative $\dot{Q}_i$ means the surface is gaining net heat.

For a blackbody $i$:
Radiation emitted: $A_i E_{bi} = A_i \sigma T_i^4$

Radiation absorbed: It absorbs everything that hits it. The radiation hitting it comes from all other surfaces $j$. The radiation leaving $j$ is $A_j \sigma T_j^4$, and the fraction that hits $i$ is $F_{j \to i}$.
Radiation absorbed by $i$: $\sum_j A_j F_{j \to i} \sigma T_j^4$

Using reciprocity ($A_j F_{j \to i} = A_i F_{i \to j}$), the absorbed radiation becomes: $\sum_j A_i F_{i \to j} \sigma T_j^4$.

Net heat transfer:
$$\dot{Q}_i = A_i \sigma T_i^4 - \sum_j A_i F_{i \to j} \sigma T_j^4$$

Because $\sum F_{i \to j} = 1$, we can rewrite $A_i \sigma T_i^4$ as $\sum A_i F_{i \to j} \sigma T_i^4$. The equation beautifully simplifies to:
$$\dot{Q}_i = \sum_{j=1}^N A_i F_{i \to j} \sigma (T_i^4 - T_j^4)$$

## 2. Radiation Exchange Between Two Black Surfaces

The most common specific case is finding the net heat exchange *specifically between* surface 1 and surface 2, denoted $\dot{Q}_{12}$.
- Heat from 1 to 2: $A_1 F_{12} \sigma T_1^4$
- Heat from 2 to 1: $A_2 F_{21} \sigma T_2^4$

The net exchange is the difference. Using reciprocity ($A_1 F_{12} = A_2 F_{21}$):
$$\dot{Q}_{12} = A_1 F_{12} \sigma (T_1^4 - T_2^4)$$

**Electrical Analogy:**
This equation can be viewed through the thermal resistance network analogy:
$$\dot{Q}_{12} = \frac{E_{b1} - E_{b2}}{R_{space}}$$
Where the driving potential is the difference in blackbody emissive powers ($\sigma T^4$), and the **space resistance** is:
$$R_{space} = \frac{1}{A_1 F_{12}}$$

This space resistance depends entirely on geometry. If the surfaces are far apart ($F_{12}$ is small), the resistance is huge, and heat transfer is small.

## 3. Key Takeaway

For blackbodies, the analysis is purely geometric. We know exactly what leaves every surface ($\sigma T^4$), and we know none of it bounces. The problem reduces simply to finding the view factors. However, real surfaces reflect radiation, creating infinite bounces that require a more robust network model.
