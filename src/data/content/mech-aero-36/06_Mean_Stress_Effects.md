---
title: "Mean Stress Effects (Goodman Diagram)"
---

# Mean Stress Effects (Goodman Diagram)

Standard S-N curves are generated using fully reversed bending—meaning the stress cycles from, for example, +100 MPa (tension) to -100 MPa (compression) and back. The *mean* stress is zero.

However, real-world machines rarely operate this way.
-   A suspension bridge cable is always in tension. A truck driving over it adds *more* tension, and leaving removes it, but it never goes into compression.
-   An aircraft wing on the ground sags under its own weight (compression on top). In flight, lift bends it up (tension on top).

This fluctuating stress is defined by two components:
1.  **Alternating Stress ($\sigma_a$):** The amplitude of the cycle (the "bounce").
2.  **Mean Stress ($\sigma_m$):** The average baseline stress around which the alternating stress fluctuates.

## 1. The Danger of Tensile Mean Stress

**Rule of Thumb:** Tension opens cracks; compression closes them.

-   If a part is under a constant tensile mean stress ($\sigma_m > 0$), any tiny fatigue crack that initiates is constantly being pulled open. This accelerates crack growth dramatically, significantly reducing fatigue life.
-   Conversely, a compressive mean stress ($\sigma_m < 0$) squeezes cracks shut. This prevents them from growing and actually *increases* the fatigue life. (This is why springs are often "shot-peened"—blasted with steel balls to hammer the surface into permanent compression, protecting against fatigue).

## 2. The Goodman Line

Because generating a unique S-N curve for every possible combination of mean and alternating stress is prohibitively expensive, engineers use graphical relationships to estimate safe operating limits when a mean stress is present. The most common is the **Modified Goodman Diagram**.

**Constructing the Diagram:**
1.  **X-axis (Mean Stress, $\sigma_m$):** Represents the static, baseline load.
2.  **Y-axis (Alternating Stress, $\sigma_a$):** Represents the dynamic, fluctuating load.

**Plotting the Limits:**
*   If there is *zero alternating stress* ($\sigma_a = 0$), the part is experiencing a static load. It will fail when the mean stress reaches the Ultimate Tensile Strength ($S_{ut}$). Plot a point at $(S_{ut}, 0)$ on the X-axis.
*   If there is *zero mean stress* ($\sigma_m = 0$), the part is experiencing fully reversed fatigue. It will fail (or reach infinite life) at the Endurance Limit ($S_e$). Plot a point at $(0, S_e)$ on the Y-axis.

**The Goodman Line:** Draw a straight line connecting these two points.

## 3. Interpreting the Diagram

The Goodman line represents the boundary of failure for infinite life (or a specific high cycle count).

*   **Inside the envelope (Below the line):** Any combination of mean and alternating stress that plots below the line is considered safe. The part will not fail by fatigue.
*   **Outside the envelope (Above the line):** The part will fail.

**The Equation:**
The mathematical equation for the Goodman line is:
$$ \frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} = 1 $$
If the left side of the equation calculates to > 1, the design is unsafe.

## 4. Other Failure Criteria

The Goodman line is known to be conservative (it predicts failure sooner than it actually happens in reality). Other criteria have been developed to better match experimental data:

*   **Soderberg Line:** Uses the Yield Strength ($S_y$) instead of $S_{ut}$ on the X-axis. It is extremely conservative and rarely used unless yielding must be strictly avoided at all costs.
*   **Gerber Parabola:** Connects the points with a curve instead of a straight line. It is much more accurate for ductile materials but is mathematically slightly more complex to use. It is widely preferred when precise optimization is required.
