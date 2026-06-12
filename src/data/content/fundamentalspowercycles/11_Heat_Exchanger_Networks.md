# Heat Exchanger Networks and Pinch Analysis

In a large chemical plant or refinery, there are dozens of process streams: some that need heating, some that need cooling. If every hot stream were heated by a furnace and every cold stream were cooled by cooling water, the energy consumption would be enormous.

**Heat Integration** is the systematic methodology for maximizing the reuse of heat between process streams — using hot process streams to heat cold process streams before resorting to external utilities.

## 1. The Concept of Heat Integration

Imagine a crude oil distillation unit. The incoming crude oil must be heated from 20°C to 350°C before entering the distillation column. Meanwhile, the various product streams (naphtha, kerosene, diesel, etc.) leave the column at high temperature and must be cooled before storage.

Instead of burning fuel to heat the crude and using cooling water to cool the products, we route the hot products through heat exchangers to pre-heat the incoming cold crude. This is heat integration.

In a well-designed refinery, heat integration can reduce external energy consumption by 40–60%.

## 2. The Pinch Point

When designing a heat exchanger network (HEN), there is a fundamental thermodynamic limit on how much heat can be recovered. This limit is called the **Pinch Point**.

**Temperature-Enthalpy (T-H) Diagrams:**
*   A "Composite Curve" is drawn by combining all the hot streams into a single curve (Hot Composite) and all the cold streams into another (Cold Composite) on a T-H plot.
*   The horizontal distance between the curves at any temperature represents the heat transferred at that temperature level.
*   The two curves are slid horizontally until they just "pinch" together at the closest point — this minimum temperature approach ($\Delta T_{min}$) between the curves defines the **Pinch Temperature**.

## 3. The Pinch Rules

Pinch Analysis reveals three cardinal rules:

1.  **Do not transfer heat across the Pinch.** Above the Pinch, there is a net deficit of heat (you need external heating). Below the Pinch, there is a net surplus (you need external cooling). Transferring heat from below the Pinch to above is thermodynamically permitted, but it wastes both heating and cooling utilities — like filling a bucket from the top while draining it from the bottom simultaneously.

2.  **Do not use external hot utilities below the Pinch.** This is wasteful: you are heating process streams that already have surplus heat available from other process streams.

3.  **Do not use external cold utilities above the Pinch.** Same logic — you are cooling streams that should be transferring heat to the cold composite.

## 4. Targeting Energy Requirements

Pinch Analysis allows engineers to calculate the **minimum** external hot utility (furnace fuel, steam) and **minimum** cold utility (cooling water, refrigeration) required — *before* designing a single heat exchanger. These are called Energy Targets.

*   **Minimum Hot Utility ($Q_{H,min}$):** The area where the hot composite sits below the cold composite (cold composite has more enthalpy demand than hot supply).
*   **Minimum Cold Utility ($Q_{C,min}$):** The area where the hot composite sits above the cold composite (hot process streams have more enthalpy than cold streams can absorb).

## 5. Network Design

Once energy targets are established, individual heat exchangers are designed to match hot and cold streams near the Pinch. This is done in two separate sub-problems:
1.  Design the network **above the Pinch** to achieve $Q_{H,min}$.
2.  Design the network **below the Pinch** to achieve $Q_{C,min}$.

The result is an optimized heat exchanger network that minimizes external energy costs. This methodology — developed by Bodo Linnhoff in the late 1970s — is one of the most economically impactful developments in process engineering, saving industries billions of dollars annually in energy costs.
