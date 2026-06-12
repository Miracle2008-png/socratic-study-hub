# Condensers and Evaporators

Condensers and evaporators are specialized heat exchangers where one of the fluids undergoes a **phase change** — transitioning between liquid and vapor. Phase-change heat transfer is fundamentally different from sensible heating/cooling because it occurs at a nearly constant temperature while absorbing or releasing enormous amounts of energy.

## 1. Latent Heat — The Engine of Phase Change

When a substance changes phase (e.g., water boiling at 100°C), it absorbs or releases an enormous amount of energy called **Latent Heat** without any change in temperature.

*   Water's latent heat of vaporization: ~2,260 kJ/kg. This is 5× more energy than heating the same kilogram of water from 0°C to 100°C.
*   This is why steam-based heating systems are so powerful and efficient.
*   In heat exchanger terms, one side maintains a nearly constant temperature while absorbing or releasing massive heat flux.

## 2. Condensers

A condenser cools a hot vapor until it condenses into a liquid, releasing its latent heat to a cooling medium (usually water or air).

**Applications:** Steam power plants, HVAC refrigeration systems, distillation columns, chemical process industries.

### Modes of Condensation

**1. Film Condensation:**
The condensed liquid forms a continuous, thin film that flows down the surface under gravity.
*   The liquid film acts as a thermal resistance between the vapor and the cold wall. The thicker the film grows (toward the bottom of a tube or plate), the higher the resistance and the lower the local heat transfer coefficient.
*   This is the dominant mode on most clean metallic surfaces.
*   Correlation: The **Nusselt condensation theory** gives the average heat transfer coefficient as a function of fluid properties and geometry.

**2. Dropwise Condensation:**
Instead of a film, condensed liquid forms individual droplets that grow, merge, and fall off when large enough, constantly exposing fresh cold metal to the vapor.
*   Produces heat transfer coefficients 5–10 times higher than film condensation because there is no insulating liquid film.
*   Occurs only on special non-wetting, hydrophobic surfaces (e.g., Teflon-coated or treated surfaces). Difficult to sustain long-term in industrial conditions.

## 3. Evaporators and Boilers

An evaporator takes in liquid and adds heat until it vaporizes, absorbing latent heat from the hot side.

**Applications:** Refrigeration (the cold side of a refrigerator), steam generation in power plants (the boiler), desalination, and concentration of solutions (food, pharmaceuticals).

### Pool Boiling Regimes

When a heater surface is submerged in a pool of liquid, the heat transfer behavior depends critically on the temperature difference between the surface ($T_s$) and the fluid saturation temperature ($T_{sat}$). This is the **excess temperature** $\Delta T_e = T_s - T_{sat}$.

**Nucleate Boiling ($\Delta T_e$ = 5–30°C):**
*   Discrete vapor bubbles nucleate at tiny cavities on the surface, grow, detach, and rise through the liquid.
*   Each departing bubble carries away a large pulse of energy and vigorously agitates the surrounding liquid.
*   Heat transfer coefficients are enormous (up to 100,000 W/m²·K for water).
*   **This is the desired operating regime for most boiling equipment.**

**Critical Heat Flux (CHF) — The Leidenfrost Point:**
*   As $\Delta T_e$ increases, bubble generation becomes so intense that a vapor blanket begins to form over the surface.
*   At the **Critical Heat Flux** (CHF), this blanket becomes continuous, and the surface is suddenly thermally insulated by its own steam.
*   The heat flux drops catastrophically while the surface temperature skyrockets — this is **Boiler Burnout** (the film boiling regime). It can melt nuclear fuel rods and boiler tubes.

**Film Boiling ($\Delta T_e$ > ~120°C):**
*   A stable vapor film covers the entire surface.
*   Heat transfer is very poor because vapor is a poor conductor.
*   Paradoxically, a surface can become *cooler* to the touch if its temperature is far above the Leidenfrost point (like a water droplet dancing on a very hot pan).
