# Extended Surfaces: Fins

When a fluid has a very poor convective heat transfer coefficient (like a gas), even a large heat exchanger surface area may not be enough to transfer the required heat. The solution is to use **fins** — extended surfaces that protrude from the base wall, dramatically increasing the total surface area available for heat transfer.

Fins are everywhere: on motorcycle engine cylinders, computer heatsinks, refrigerator condenser coils, baseboard heating units, and aircraft oil coolers.

## 1. The Concept

Consider a flat wall separating a hot liquid from a cool gas. The liquid side has a high $h$ (e.g., 5,000 W/m²·K), while the gas side has a low $h$ (e.g., 25 W/m²·K). The gas side is the controlling (bottleneck) resistance.

Adding fins on the gas side increases the effective surface area by a factor of 5–30×. Even though the convective coefficient $h$ on the fin surface is the same as the flat wall, the total convective heat transfer ($\dot{Q} = h A \Delta T$) increases proportionally with area.

## 2. Fin Types

**Straight Fins:** Constant cross-section, uniform thickness. The simplest geometry.
**Trapezoidal Fins:** Tapered — wider at the base, narrower at the tip. Provides more material where stress is highest and less material where it isn't needed. More mass-efficient.
**Annular (Circular) Fins:** Disk-shaped fins mounted concentrically around a tube. Used in tube-fin heat exchangers (like car radiators and refrigerator coils).
**Pin Fins:** Cylindrical rods protruding from the wall. Used in electronics cooling and compact exchangers; can be manufactured by drilling or casting.
**Wavy/Offset-Strip Fins:** Used in plate-fin compact exchangers. Fins are cut and offset to continuously restart the boundary layer, maintaining high heat transfer coefficients.

## 3. Fin Efficiency ($\eta_f$)

A fin is a distributed resistance problem. The base of the fin is attached to the hot wall (at $T_{base}$). Heat must conduct down the fin's length. As it does, the fin cools, and the tip temperature approaches the ambient temperature.

*   The **base** of the fin experiences the full temperature difference $(T_{base} - T_\infty)$ and transfers heat at the maximum possible rate.
*   The **tip** is cooler, so it has a smaller driving force and transfers less heat per unit area.
*   The overall fin is less effective than if the *entire* fin were at the base temperature.

**Fin Efficiency** ($\eta_f$) compares actual performance to this ideal:
$$ \eta_f = \frac{\dot{Q}_{actual}}{\dot{Q}_{ideal}} = \frac{\text{Actual heat transfer}}{\text{Heat transfer if entire fin were at } T_{base}} $$

For a straight fin of length $L$ with an insulated tip:
$$ \eta_f = \frac{\tanh(mL)}{mL} $$

Where the fin parameter $m$ is:
$$ m = \sqrt{\frac{hP}{kA_c}} $$

*   $h$: Convective coefficient.
*   $P$: Perimeter of the fin cross-section.
*   $k$: Thermal conductivity of the fin material.
*   $A_c$: Cross-sectional area of the fin.

**Key Insight from $m$:**
A fin works best (high $\eta_f$) when:
*   **High $k$ (conductivity):** Heat conducts down the fin easily without a large temperature drop. This is why aluminum (high $k$, low density) is the dominant fin material.
*   **Low $h$:** Paradoxically, fins are more efficient when convection is weak (gas cooling). When $h$ is very high (liquid cooling), the fin temperature drops so fast toward the tip that the fin is very inefficient. In liquid cooling, adding fins has diminishing returns.

## 4. Overall Surface Efficiency

In a finned array (many fins covering a surface), not all the base wall area has fins. The total surface efficiency $\eta_o$ combines the fin efficiency and the unfinned area:

$$ \eta_o = 1 - \frac{A_f}{A_{total}}(1 - \eta_f) $$

The overall heat transfer for the finned surface is then:
$$ \dot{Q} = \eta_o h A_{total} (T_{base} - T_\infty) $$
