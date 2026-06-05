# Elliptical Lift Distribution and Span Efficiency

The **elliptical lift distribution** is the aerodynamic ideal for a finite wing: it minimizes induced drag for any given combination of wing span and total lift. Understanding why this is optimal, how to achieve it, and how much real wings deviate from it is central to wing design.

## 1. The Elliptical Distribution

An **elliptical span loading** means the local lift per unit span $L'(y) = \rho V_\infty \Gamma(y)$ varies elliptically across the span:

$$\Gamma(y) = \Gamma_0 \sqrt{1 - \left(\frac{2y}{b}\right)^2}$$

where $\Gamma_0$ is the root circulation and $b$ is the wingspan. The resulting distribution looks like the upper half of an ellipse.

**Why is this optimal?**
For an elliptical circulation distribution, the Biot-Savart integral yields a remarkable result: the induced downwash $w$ is **perfectly constant** across the entire span — every section of the wing "sees" the exact same reduction in effective angle of attack.

This uniform downwash means every spanwise strip contributes equally to induced drag per unit of lift generated. Any redistribution of lift away from elliptical creates higher downwash at some sections and lower at others, but the higher-downwash sections pay a disproportionate induced drag penalty — the net result is always higher total induced drag than the elliptical baseline.

## 2. Achieving Elliptical Loading

**Physical elliptical wing (Spitfire):**
If the wing planform is literally shaped as a perfect semi-ellipse, a uniform angle of attack along the span gives an approximately elliptical lift distribution. The Supermarine Spitfire's famous elliptical wings were designed precisely for this reason — minimum induced drag. However, elliptical wings are expensive to manufacture (complex curved leading and trailing edges, no straight-line elements).

**Twisted tapered wing:**
A cheaper approach: use a simple trapezoidal planform (straight-line leading and trailing edges) but apply **aerodynamic twist** — vary the local airfoil or angle of attack along the span so that the product $c(y) \cdot [α(y) - α_{L=0}(y)]$ varies elliptically. Most commercial transport wings use twist distributions of 3–7° (tip trailing edge up) to approach elliptical loading at the cruise condition.

## 3. Span Efficiency Factor ($e$)

Real wings never achieve a perfectly elliptical distribution. The **Oswald span efficiency factor** ($e$, also written $e_0$ or $e_1$) accounts for this:

$$C_{D_i} = \frac{C_L^2}{\pi e AR}$$

For an ideal elliptical wing: $e = 1.0$.
For real wings: $e \approx 0.75–0.95$ depending on planform, twist, and compressibility effects.

**Winglets** improve the effective span efficiency factor above 1.0 for the physical wing span (they increase effective span without increasing actual wingspan), but the "e" for the complete system including winglet always remains $\leq 1.0$.

## 4. Total Wing Drag Polar

The complete drag polar for a wing (or aircraft) at a given flight condition combines all sources:

$$C_D = C_{D_0} + \frac{C_L^2}{\pi e AR}$$

where:
- $C_{D_0}$: **Parasite drag coefficient** — profile drag (skin friction + pressure drag) plus interference drag. Approximately constant with $C_L$.
- $\frac{C_L^2}{\pi e AR}$: **Induced drag coefficient** — increases quadratically with lift.

This parabolic drag polar is the fundamental design tool for aircraft performance analysis. It determines:
- The maximum lift-to-drag ratio $L/D_{max} = \frac{1}{2}\sqrt{\pi e AR / C_{D_0}}$ — the cruise efficiency metric.
- The speed for minimum drag.
- The best glide ratio for gliders and unpowered descents.

A Boeing 787 achieves $L/D_{max} \approx 22:1$; a high-performance sailplane achieves $L/D_{max} \approx 55:1$.
