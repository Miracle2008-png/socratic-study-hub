# Critical Stress and the Slenderness Ratio

Euler's formula ($P_{cr} = \pi^2 EI / L^2$) calculates the total force required to buckle a column. However, to compare the risk of buckling against the risk of the material simply yielding under compression, we must convert this critical force into a **Critical Stress**.

## 1. Defining Critical Stress ($\sigma_{cr}$)

The nominal compressive stress in a column just as it begins to buckle is simply the critical force divided by the cross-sectional area:
$$ \sigma_{cr} = \frac{P_{cr}}{A} $$

Substitute Euler's formula into this equation:
$$ \sigma_{cr} = \frac{\pi^2 EI}{A L^2} $$

## 2. The Radius of Gyration ($r$)

To clean up this equation, we introduce a geometric property called the **Radius of Gyration ($r$)**. It mathematically relates the Moment of Inertia ($I$) to the cross-sectional Area ($A$):
$$ I = A r^2 \quad \implies \quad r = \sqrt{\frac{I}{A}} $$

The radius of gyration is a physical measure of how far the material is distributed away from the centroidal axis. A larger $r$ means the material is spread out further, creating a stiffer cross-section that is harder to buckle.

Substitute $I = A r^2$ into our critical stress equation:
$$ \sigma_{cr} = \frac{\pi^2 E (A r^2)}{A L^2} $$
The Area ($A$) cancels out. We then group the length variables together to create the final form:

$$ \sigma_{cr} = \frac{\pi^2 E}{(L/r)^2} $$

## 3. The Slenderness Ratio ($L/r$)

The denominator term, **$(L/r)$**, is the most important parameter in all of column design. It is a dimensionless number called the **Slenderness Ratio**.

It perfectly captures the buckling vulnerability of any column:
*   **$L$ (Length):** A longer column is easier to buckle.
*   **$r$ (Radius of Gyration):** A "thinner" cross-section is easier to buckle.

The higher the Slenderness Ratio, the lower the critical stress, and the easier the column will buckle.

## 4. The Euler Curve

If we plot the Critical Stress ($\sigma_{cr}$) on the y-axis against the Slenderness Ratio ($L/r$) on the x-axis, we generate a hyperbolic curve known as the **Euler Curve**.

*   For very high slenderness ratios (long, thin poles), the critical buckling stress is tiny. The column will buckle under its own weight long before the material yields.
*   For very low slenderness ratios (short, fat blocks), the curve rockets upward to infinity. The formula predicts it would take an astronomical stress to buckle the block.

**The Reality Check:**
Euler's equation assumes the material remains perfectly elastic. If the calculated $\sigma_{cr}$ is higher than the material's yield strength ($\sigma_Y$), the equation is invalid. A short, fat block will never buckle; it will simply crush and yield plastically. 
Therefore, the Euler Curve is artificially capped with a flat horizontal line at $\sigma_Y$. A column can never be loaded past its yield strength, regardless of what Euler's formula says.
