# Heat Exchanger Network Synthesis (Pinch Analysis)

So far, we have focused on designing single heat exchangers. However, a modern chemical plant or refinery contains dozens or hundreds of hot and cold streams. We must cool the hot streams (e.g., reactor effluents) and heat the cold streams (e.g., feed streams). 

Historically, engineers would use utility steam to heat cold streams and cooling water to cool hot streams. This is massively wasteful. Modern process design uses **Heat Exchanger Networks (HENs)** to recover heat by exchanging thermal energy directly between the process streams themselves, vastly reducing utility consumption. The systematic methodology for designing these networks is called **Pinch Analysis**.

## 1. The Core Concept of Heat Integration

Imagine a process with:
- A hot reactor effluent that needs to be cooled from 200°C to 50°C.
- A cold feed stream that needs to be heated from 30°C to 180°C.

Instead of burning natural gas in a furnace to heat the feed, and paying to pump cooling water to cool the effluent, we simply run the two streams through a heat exchanger against each other. The hot stream heats the cold stream, and the cold stream cools the hot stream. We recover the energy for free (minus the capital cost of the exchanger).

## 2. Composite Curves

In a real plant, there are multiple hot and cold streams. Pinch analysis begins by aggregating them into two curves:

- **Hot Composite Curve:** Plots the total heat capacity rate of all hot streams combined against temperature. It represents the total amount of heat the process *must reject*.
- **Cold Composite Curve:** Plots the total heat capacity rate of all cold streams combined against temperature. It represents the total amount of heat the process *must absorb*.

These two curves are plotted on a single Temperature vs. Enthalpy (T-H) diagram. By sliding the cold composite curve horizontally along the enthalpy axis, we bring it closer to the hot composite curve.

## 3. The Minimum Approach Temperature ($\Delta T_{\min}$)

We can slide the cold curve to the left (increasing heat recovery) until it almost touches the hot curve. The point where the curves come closest together is the **Pinch Point**.

The temperature difference at the pinch point is the **Minimum Approach Temperature ($\Delta T_{\min}$)**. This is the single most important parameter chosen by the designer (typically $10\text{°C}$ to $20\text{°C}$):
- **Small $\Delta T_{\min}$:** High heat recovery, low utility costs, but the driving force is small, requiring massive, expensive heat exchangers.
- **Large $\Delta T_{\min}$:** Low heat recovery, high utility costs, but requires smaller, cheaper heat exchangers.

Finding the optimal $\Delta T_{\min}$ is an economic trade-off between energy costs (OPEX) and capital costs (CAPEX).

## 4. Energy Targets (The Pinch Principle)

Once $\Delta T_{\min}$ is set, the composite curves overlap perfectly define the **Energy Targets**:
- The horizontal overlap region represents the maximum possible heat recovery.
- The overhang of the cold curve at the top represents the **Minimum Hot Utility ($Q_{H,\min}$)** — the absolute minimum amount of steam/furnace heat required by the process.
- The overhang of the hot curve at the bottom represents the **Minimum Cold Utility ($Q_{C,\min}$)** — the absolute minimum amount of cooling water/refrigeration required by the process.

It is physically impossible to operate the plant with less utility energy than these targets.

## 5. The Golden Rules of Pinch Analysis

The pinch point divides the entire process into two thermodynamically distinct regions:
- **Above the Pinch:** The process is a net heat sink. It requires external heating.
- **Below the Pinch:** The process is a net heat source. It requires external cooling.

From this, Bodo Linnhoff established the three golden rules of heat integration:
1. **Do not transfer heat across the pinch.** (If you take heat from the hot side above the pinch and send it to the cold side below the pinch, you are wasting perfectly good high-temperature heat, forcing you to buy more hot utility and more cold utility.)
2. **Do not use cold utility above the pinch.** (Since the region above the pinch needs heat, throwing away heat to cooling water is wasteful.)
3. **Do not use hot utility below the pinch.** (Since the region below the pinch needs to reject heat, adding steam just makes the cooling problem worse.)

If a design violates any of these rules, it is guaranteed to consume more energy than the minimum targets.

## 6. Pinch Analysis Rules

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "pinch", "data": { "label": "Pinch Point", "icon": "Target", "description": "Sets Delta T min." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "r1", "data": { "label": "No Heat Across", "icon": "XCircle", "description": "Wastes energy." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } },
    { "id": "r2", "data": { "label": "No Cold Above", "icon": "ThermometerSnowflake", "description": "Region needs heat." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "r3", "data": { "label": "No Hot Below", "icon": "ThermometerSun", "description": "Region needs cooling." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } }
  ],
  "edges": [
    { "source": "pinch", "target": "r1", "animated": true },
    { "source": "pinch", "target": "r2", "animated": true },
    { "source": "pinch", "target": "r3", "animated": true }
  ]
}
```
