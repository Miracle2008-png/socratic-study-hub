# Equilibrium Stage Separations (Distillation)

While absorption uses continuous packing, **distillation** typically uses discrete stages (trays or plates). At each tray, vapor bubbling up from below intimately mixes with liquid flowing down from above. We model each tray as an **equilibrium stage**: assuming the vapor leaving the tray is in perfect thermodynamic equilibrium with the liquid leaving the tray.

## 1. The Fractional Distillation Column

A typical distillation column has three main sections:
1.  **Feed Stage:** Where the mixture to be separated enters.
2.  **Rectifying Section (Top):** Above the feed. Vapor rises, getting progressively richer in the more volatile component (the "light key"). Liquid is provided by a **condenser** at the top, which condenses the overhead vapor and returns a portion of it down the column as **reflux**.
3.  **Stripping Section (Bottom):** Below the feed. Liquid flows down, getting progressively richer in the less volatile component (the "heavy key"). Vapor is provided by a **reboiler** at the bottom, which boils the bottom liquid and sends vapor back up the column.

## 2. The McCabe-Thiele Method

Developed in 1925, the McCabe-Thiele method is an elegant graphical technique to determine the number of equilibrium stages required for a binary (two-component) distillation.

**Assumptions (Constant Molar Overflow):**
We assume the molar heat of vaporization of both components is identical, and heat losses are zero. Therefore, for every mole of vapor that condenses on a tray, exactly one mole of liquid vaporizes. This means the molar vapor flow rate ($V$) and liquid flow rate ($L$) are constant within a given section of the column.

**The Three Lines on an x-y Diagram:**

**1. The Equilibrium Curve:**
Derived from Raoult's law or experimental VLE data. It represents $y^*$ vs $x$.

**2. The Rectifying Operating Line (ROL):**
A mass balance over the top of the column.
$$ y_{n+1} = \frac{L}{V} x_n + \frac{D}{V} x_D $$
*   $L/V$ is the slope. Since $V = L + D$ (where D is distillate product), $L/V < 1$.
*   Passes through the point $(x_D, x_D)$ on the $y=x$ diagonal line, where $x_D$ is the desired top product purity.

**3. The Stripping Operating Line (SOL):**
A mass balance over the bottom of the column.
$$ y_{m+1} = \frac{\bar{L}}{\bar{V}} x_m - \frac{B}{\bar{V}} x_B $$
*   $\bar{L}/\bar{V}$ is the slope. Since $\bar{L} = \bar{V} + B$ (where B is bottoms product), $\bar{L}/\bar{V} > 1$.
*   Passes through the point $(x_B, x_B)$ on the $y=x$ diagonal line, where $x_B$ is the desired bottoms purity.

**The q-Line (Feed Line):**
The intersection of the ROL and SOL depends on the thermal state of the feed (e.g., cold liquid, saturated liquid, saturated vapor). The q-line originates at $(z_F, z_F)$ on the diagonal, where $z_F$ is the feed composition, and its slope depends on the feed quality $q$.

## 3. Stepping Off the Stages

To find the required number of trays:
1.  Start at $(x_D, x_D)$.
2.  Draw a horizontal line to the left to hit the equilibrium curve. This represents the equilibrium achieved on Stage 1. The coordinates are $(x_1, y_1)$.
3.  Draw a vertical line down to hit the Rectifying Operating Line. This represents the mass balance passing between Stage 1 and Stage 2. The coordinates are $(x_1, y_2)$.
4.  Repeat ("step off") until you cross the q-line. At this point, switch to stepping between the equilibrium curve and the Stripping Operating Line.
5.  Stop when your steps cross $x_B$.

The number of "steps" (triangles) is the number of theoretical equilibrium stages required.

## 4. Reflux Ratio ($R = L/D$)

The reflux ratio is the most critical operating parameter.
*   **Total Reflux ($R = \infty$):** No product is withdrawn ($D=0$). The operating lines coincide with the $y=x$ diagonal. This gives the **minimum number of stages** possible, but zero production.
*   **Minimum Reflux ($R_{min}$):** The reflux ratio is reduced until the operating lines intersect exactly on the equilibrium curve (a "pinch point"). The number of steps becomes infinite. This is the **minimum energy** requirement, but requires an infinitely tall column.
*   **Optimal Reflux:** Real columns operate at $R \approx 1.2$ to $1.5 \times R_{min}$ to balance capital cost (number of trays) against operating cost (reboiler duty).
