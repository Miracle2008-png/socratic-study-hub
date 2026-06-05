---
title: "The S-N Curve (Stress-Life Method)"
---

# The S-N Curve (Stress-Life Method)

The oldest and most common way to design against fatigue is the Stress-Life approach. It relies on extensive empirical testing to determine how many cycles a part can survive at a specific stress level.

## 1. Fatigue Testing

To characterize a material's fatigue life, engineers use a testing machine (like a rotating bending machine).
1.  A standardized, highly polished specimen is loaded to a specific alternating stress amplitude ($S$).
2.  A motor spins or bends the specimen continuously, cycling the stress from tension to compression.
3.  The machine counts the number of cycles ($N$) until the specimen breaks.
4.  This is repeated with dozens of specimens at various stress levels. High stress breaks the part in a few cycles; low stress allows the part to survive millions of cycles.

The resulting data points are plotted on a graph with Stress ($S$) on the linear Y-axis and Number of Cycles to Failure ($N$) on a logarithmic X-axis. This is the **S-N Curve** (or Wöhler curve).

## 2. Low-Cycle vs. High-Cycle Fatigue

The S-N curve is generally divided into two regimes:

*   **Low-Cycle Fatigue (LCF):** Occurs at high stress levels, where localized plastic yielding happens on every cycle. Failure typically occurs in fewer than $10^4$ or $10^5$ cycles. (The Stress-Life method is generally inaccurate here; engineers use the Strain-Life method instead).
*   **High-Cycle Fatigue (HCF):** Occurs at lower stress levels, where deformation remains macroscopically elastic. Failure takes hundreds of thousands or millions of cycles. The S-N curve is the primary tool for HCF design.

## 3. The Fatigue Limit (Endurance Limit)

When plotting S-N curves, materials behave in one of two distinct ways:

**1. Materials WITH a Fatigue Limit (e.g., Steel, Titanium):**
As you test at lower and lower stress levels, the S-N curve eventually flattens out into a horizontal line.
-   This horizontal asymptote is called the **Fatigue Limit** or **Endurance Limit ($S_e$)**.
-   **The Magic Threshold:** If you design a steel component such that the maximum alternating stress is *below* this endurance limit, it will theoretically last forever. It can endure an infinite number of cycles without initiating a fatigue crack.
-   For many steels, the endurance limit is roughly half of its Ultimate Tensile Strength ($S_e \approx 0.5 \times S_{ut}$).

**2. Materials WITHOUT a Fatigue Limit (e.g., Aluminum, Copper, Polymers):**
The S-N curve for these materials never truly flattens out; it continues to slant downwards continuously.
-   No matter how low the applied stress is, the part will *eventually* fail if cycled enough times. There is no true "infinite life."
-   This is a critical design issue for aerospace. Aluminum airplane fuselages and wings have a definitive, finite lifespan.
-   **Fatigue Strength:** Because these materials have no true limit, engineers define a "Fatigue Strength" for a specific, arbitrarily high number of cycles (e.g., "The fatigue strength at $5 \times 10^8$ cycles is 150 MPa").

## 4. Modifying Factors

The theoretical endurance limit ($S_e'$) determined from a perfectly polished laboratory specimen does not represent a real-world part. Engineers must apply a series of "Marin Factors" to drastically reduce the theoretical limit to a safe working limit ($S_e$):

$$S_e = k_a \cdot k_b \cdot k_c \cdot k_d \cdot k_e \cdot S_e'$$

*   **$k_a$ (Surface Finish):** Scratches, rough machining, or forging scale act as stress concentrators, drastically lowering fatigue life. A polished part lasts much longer.
*   **$k_b$ (Size Factor):** Larger parts fail sooner than smaller parts. A larger volume of material statistically contains a higher probability of harboring a microscopic critical flaw.
*   **$k_c$ (Load Type):** Bending, axial tension, and torsion all affect fatigue life differently.
*   **$k_d$ (Temperature):** High temperatures lower fatigue resistance.
*   **$k_e$ (Reliability):** S-N data has massive statistical scatter. If you want 99.9% reliability (rather than 50% survival rate), you must heavily penalize the allowable stress.
