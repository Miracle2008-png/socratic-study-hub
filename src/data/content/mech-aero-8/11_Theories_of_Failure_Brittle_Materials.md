# Theories of Failure: Brittle Materials

Brittle materials (like cast iron, concrete, glass, ceramics) exhibit almost no yielding before catastrophic fracture. 
At the microscopic level, failure is not caused by sliding shear planes. It is caused by atomic bonds being ripped directly apart by tensile forces, or crushed by massive compressive forces.

Furthermore, brittle materials often have vastly different strengths in tension versus compression. (For example, concrete is ten times stronger in compression than it is in tension). Ductile failure theories (Tresca, von Mises) assume symmetric strength and are entirely invalid for brittle analysis.

## 1. Maximum-Normal-Stress Theory (Rankine's Theory)

The simplest theory for brittle failure was proposed by W.J.M. Rankine. He postulated that a brittle material fails purely when the absolute maximum principal normal stress ($\sigma_1$) hits the Ultimate Tensile Strength ($\sigma_{ut}$), OR when the absolute minimum principal normal stress ($\sigma_2$, compression) hits the Ultimate Compressive Strength ($\sigma_{uc}$).

Failure occurs if:
$$ \sigma_1 \ge \sigma_{ut} \quad \text{OR} \quad |\sigma_2| \ge \sigma_{uc} $$

When plotted on a graph of $\sigma_1$ vs $\sigma_2$, this creates a simple rectangular safe zone. While straightforward, extensive experimental testing has proven that this theory is highly inaccurate and often dangerously unconservative when $\sigma_1$ and $\sigma_2$ have opposite signs (one tension, one compression). 
The combination of pulling and crushing simultaneously causes the material to fail much earlier than the rectangle predicts.

## 2. Mohr's Failure Criterion

To account for differing tensile/compressive strengths and the complex interaction of opposite-sign principal stresses, engineers developed Mohr's Failure Criterion.

This is a graphical method. You run three standard tests in a lab: a pure tension test, a pure compression test, and a pure torsion test. You plot the three resulting Mohr's Circles for failure on a single graph.
You then draw an "envelope" line that sits perfectly tangent to the top of all three circles.

To evaluate a complex 3D state of stress, you calculate the principal stresses ($\sigma_1, \sigma_2$), draw that specific Mohr's circle, and see if it breaches the failure envelope. If it touches or crosses the envelope, the part shatters.

## 3. Modified Mohr Criterion

Because drawing tangent envelopes graphically is tedious, engineers developed a simplified mathematical approximation called the **Modified Mohr Criterion**, which perfectly bridges the gap between the Ultimate Tensile and Compressive strengths.

Failure is predicted by checking a set of conditional inequalities:

*   **Case 1 (Both Tension):** If $\sigma_1 > 0$ and $\sigma_2 > 0$, the part fails if:
    $$ \sigma_1 \ge \sigma_{ut} $$
*   **Case 2 (Both Compression):** If $\sigma_1 < 0$ and $\sigma_2 < 0$, the part fails if:
    $$ |\sigma_2| \ge \sigma_{uc} $$
*   **Case 3 (Mixed Signs):** If $\sigma_1 > 0$ (tension) and $\sigma_2 < 0$ (compression), the part fails if:
    $$ \frac{\sigma_1}{\sigma_{ut}} + \frac{|\sigma_2|}{\sigma_{uc}} \ge 1 $$

*(Assuming $\sigma_1$ is the more positive stress).*
The Modified Mohr theory creates an irregular, slanted hexagon as its safe zone, and matches experimental fracture data for brittle materials with exceptional accuracy.
