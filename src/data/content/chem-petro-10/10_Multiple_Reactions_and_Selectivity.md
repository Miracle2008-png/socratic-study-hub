# Multiple Reactions and Selectivity

In Module 9, we introduced the concept of complex reactions (Parallel and Series). In Reactor Design, our primary objective is to select the right reactor type and operating conditions to maximize the yield of our desired product while starving the undesired side reactions.

## 1. Parallel Reactions (Maximizing Selectivity)

Consider the competing reactions:
1.  **Desired:** $A \rightarrow D$, Rate: $r_D = k_D C_A^{\alpha_1}$
2.  **Undesired:** $A \rightarrow U$, Rate: $r_U = k_U C_A^{\alpha_2}$

We define the **Instantaneous Selectivity ($S_{D/U}$)** as the ratio of the desired rate to the undesired rate:
$$ S_{D/U} = \frac{r_D}{r_U} = \frac{k_D}{k_U} C_A^{(\alpha_1 - \alpha_2)} $$

To maximize profit, we must design a reactor that maximizes $S_{D/U}$. We do this by manipulating the concentration ($C_A$).

### Case A: The desired reaction has a HIGHER order ($\alpha_1 > \alpha_2$)
The exponent $(\alpha_1 - \alpha_2)$ is a positive number.
Therefore, to make $S_{D/U}$ as large as possible, we must keep $C_A$ **as high as possible**.
*   **Best Reactor:** **Plug Flow Reactor (PFR)** or Batch Reactor. In a PFR, the reaction starts at pure, 100% concentration, giving the higher-order desired reaction a massive initial advantage.
*   **Worst Reactor:** CSTR. A CSTR instantly dilutes the feed to a very low concentration, heavily favoring the lower-order undesired side reaction.

### Case B: The desired reaction has a LOWER order ($\alpha_1 < \alpha_2$)
The exponent $(\alpha_1 - \alpha_2)$ is a negative number (e.g., $C_A^{-1}$). 
Mathematically, this is $1 / C_A$. To make this fraction large, we must keep the denominator $C_A$ **as low as possible**.
*   **Best Reactor:** **CSTR**. We want instant dilution. 
*   If we must use a PFR, we do not feed all the $A$ at the entrance. We use a **Membrane Reactor** or a pipe with multiple side-injection ports to slowly drip $A$ into the reactor, keeping its local concentration perpetually near zero.

## 2. Series Reactions (Maximizing Yield)

Consider the consecutive reactions:
$$ A \xrightarrow{k_1} D \text{ (Desired)} \xrightarrow{k_2} U \text{ (Undesired)} $$

Here, our desired product $D$ is in severe danger. The longer we leave it in the reactor, the more of it will be destroyed into the waste $U$. 
The concentration of $D$ will rise, hit a maximum peak, and then fall. Our goal is to stop the reaction exactly at that peak.

**Which reactor gives the highest peak?**
*   **PFR / Batch:** The fluid moves through the PFR together like a solid plug. All molecules spend exactly $\tau$ seconds in the reactor. We can calculate the exact length of pipe needed so that the fluid exits *exactly* at the peak concentration of $D$.
*   **CSTR:** A CSTR is perfectly mixed. This means some molecules exit after 1 second, while other molecules get trapped swirling in the eddies of the tank for 5 hours. 
    *   The molecules that leave early haven't reacted into $D$ yet (wasted $A$).
    *   The molecules trapped for hours have completely reacted into waste $U$ (destroyed $D$).
    Because of this wide spread in residence times, a CSTR "smears" the concentration profile. The peak concentration of $D$ achievable in a CSTR is *always* significantly lower than the peak achievable in a PFR.

**Conclusion:** For series reactions, a **PFR is always superior** to a CSTR for maximizing the yield of the intermediate product.

## 3. The Cross-Product Rule
What if the reaction is $A + B \rightarrow D$, and the undesired reaction is $A + A \rightarrow U$?
You want high B and low A.
**Solution:** Use a Semi-Batch reactor. Fill the tank with pure B. Slowly drip A into the tank. This keeps $C_B$ high and $C_A$ near zero at all times.

## 4. Reactor Selection Guide

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "goal", "data": { "label": "Maximize Product Yield", "icon": "Target", "description": "Select reactor based on kinetics." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "high", "data": { "label": "High Order Desired", "icon": "ArrowUp", "description": "Keep C_A High -> Use PFR." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "low", "data": { "label": "Low Order Desired", "icon": "ArrowDown", "description": "Keep C_A Low -> Use CSTR." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "series", "data": { "label": "Series (A->D->U)", "icon": "Activity", "description": "Catch exact peak -> Use PFR." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "goal", "target": "high", "animated": true },
    { "source": "goal", "target": "low", "animated": true },
    { "source": "goal", "target": "series", "animated": true }
  ]
}
```
