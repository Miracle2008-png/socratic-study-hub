# Reactors in Series and Parallel

If a single reactor cannot achieve the desired conversion, or if building one massive reactor is too expensive, chemical engineers string multiple reactors together.

## 1. CSTRs in Series

We know a single CSTR suffers a massive volume penalty because the *entire* tank operates at the slowest possible rate (the exit condition). 

What if we split that massive tank into two smaller tanks in series?
*   **Tank 1:** Achieves 50% conversion. It operates at the medium reaction rate associated with 50% conversion.
*   **Tank 2:** Takes the 50% feed and pushes it to 90%. It operates at the very slow rate associated with 90% conversion.

By splitting the reactor, Tank 1 is rescued from the slow rate. The total combined volume of the two smaller tanks will be significantly less than the volume of one giant tank doing the whole job.

**The Levenspiel Plot for Series CSTRs:**
Instead of drawing one massive rectangle from $X=0$ to $X_{final}$, we draw multiple smaller rectangles side-by-side.
*   Rectangle 1 is from $X=0$ to $X_1$.
*   Rectangle 2 is from $X_1$ to $X_2$.
Geometrically, it is obvious that a series of stair-step rectangles fills the area under the curve much more efficiently than one massive rectangle.

**The Limit:** As you link more and more CSTRs in series (3, 5, 10, 50...), the stair-steps become infinitely thin. An infinite number of CSTRs in series mathematically perfectly approximates a single Plug Flow Reactor (PFR).

## 2. PFRs in Series

If you connect two Plug Flow Reactors in series, the fluid exits PFR 1 and immediately enters PFR 2. Because there is no back-mixing, the fluid doesn't "know" it changed pipes.

**Rule:** Two PFRs connected in series behave exactly identically to one single, long PFR with a volume equal to $V_1 + V_2$.
The equations integrate seamlessly from $X=0$ to $X_1$, and then from $X_1$ to $X_{final}$.

## 3. Reactors in Parallel

Sometimes a factory needs to increase production capacity. They have an existing reactor, but it cannot handle the higher flow rate. They decide to buy a second reactor and run it in parallel.

**PFRs in Parallel:**
If you have two PFRs in parallel, and you want the final mixed product to have a uniform conversion, you must obey the **Parallel Rule:**
*   You must split the feed precisely so that the *Residence Time* in branch 1 is identical to the *Residence Time* in branch 2.
*   If PFR 1 has twice the volume of PFR 2, you must send exactly twice the flow rate ($F_{A0}$) down branch 1.
*   If you do this, the conversion at the exit of both branches will be identical, and they behave exactly like a single, fatter PFR.

**CSTRs in Parallel:**
The exact same rule applies. To maximize efficiency, feed must be split proportionally to the volumes of the tanks.

## 4. Mixing Reactor Types

The most challenging (and fun) exam problems involve linking a CSTR and a PFR in series. Which should come first?

*   **Normal Kinetics (Rate drops over time):** You want to use the highly efficient PFR when the rate is fastest (at the start). If you use a CSTR first, it instantly drops the concentration and kills your fast rate. **Rule:** For normal kinetics, PFR followed by CSTR requires less volume than CSTR followed by PFR.
*   **Autocatalytic Kinetics (Rate starts slow, then speeds up):** The rate is dead slow at $X=0$. A PFR would waste massive volume waiting for the reaction to speed up. A CSTR acts as a "seed" tank; it operates at the peak fast reaction rate (in the valley of the Levenspiel plot), instantly jumping the fluid to high concentration of product B. You then finish the reaction in a PFR. **Rule:** For autocatalytic, CSTR followed by PFR is optimal.

## 5. Reactor Network Logic

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "cstr", "data": { "label": "CSTRs in Series", "icon": "Layers", "description": "Infinite series = 1 PFR." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "pfr", "data": { "label": "PFRs in Series", "icon": "PlusSquare", "description": "Acts as one long PFR." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "par", "data": { "label": "Parallel", "icon": "GitBranch", "description": "Must split feed by volume." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "mix", "data": { "label": "Mixed Series", "icon": "Shuffle", "description": "Match reactor to rate profile." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } }
  ],
  "edges": [
    { "source": "cstr", "target": "mix", "animated": true },
    { "source": "pfr", "target": "par", "animated": true },
    { "source": "par", "target": "mix", "animated": true }
  ]
}
```
