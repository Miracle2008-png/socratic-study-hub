---
title: "Surface Emission and Emissivity"
---

# Surface Emission and Emissivity

Real surfaces are not perfect blackbodies. They emit less radiation than a blackbody at the same temperature. To quantify this deviation, we define the property **emissivity**.

## 1. Total Hemispherical Emissivity ($\varepsilon$)

The total hemispherical emissivity $\varepsilon$ is the ratio of the total radiation emitted by a real surface to the total radiation emitted by a blackbody at the exact same temperature:

$$\varepsilon(T) = \frac{E(T)}{E_b(T)} = \frac{E(T)}{\sigma T^4}$$

- $\varepsilon = 1.0$: A perfect blackbody.
- $0 < \varepsilon < 1$: All real surfaces.

The total emissive power of any real surface is therefore:
$$E = \varepsilon \sigma T^4$$

## 2. Spectral and Directional Emissivity

Emissivity is not a single constant for a material; it is a highly complex property that depends on:
1. **Direction ($\theta, \phi$):** Metals typically have high emissivity at shallow grazing angles and low emissivity normal to the surface. Non-metals show the opposite behavior.
2. **Wavelength ($\lambda$):** The *spectral emissivity* $\varepsilon_\lambda$ dictates how well the surface emits at a specific wavelength compared to a blackbody:
   $$\varepsilon_\lambda(\lambda, T) = \frac{E_\lambda(\lambda, T)}{E_{b\lambda}(\lambda, T)}$$

The total hemispherical emissivity $\varepsilon$ is simply the integrated average of $\varepsilon_\lambda$ across all wavelengths and directions.

## 3. Emissivity Values of Real Materials

Emissivity is primarily a surface phenomenon (occurring within the top few microns of the material). Therefore, surface finish, oxidation, and coatings matter more than the bulk material.

**Highly Polished Metals (Low $\varepsilon$):**
- Polished aluminum, silver, gold: $\varepsilon \approx 0.02 - 0.05$.
- They are excellent radiation shields (like the gold foil on satellites or the inner lining of a thermos). Because they are highly reflective, they are terrible emitters.

**Oxidized Metals (Medium $\varepsilon$):**
- Heavily oxidized iron or copper: $\varepsilon \approx 0.5 - 0.8$.
- Oxidation dramatically increases emissivity. A shiny steel pipe emits little heat; a rusted steel pipe radiates significantly more.

**Non-Metals (High $\varepsilon$):**
- Brick, concrete, wood, rubber, skin, white paint, black paint: $\varepsilon \approx 0.85 - 0.95$.
- **Counter-intuitive fact:** To thermal infrared radiation (at room temp), color does not matter! Snow, human skin, and white paint are nearly "black" ($\varepsilon > 0.9$) in the infrared spectrum. A white radiator works just as efficiently as a black radiator at heating a room.

## 4. Selective Surfaces

Engineers often design surfaces with specific spectral emissivities to optimize energy capture.
- A **solar collector panel** should absorb maximum solar radiation (which peaks in the visible/short-wave IR, $\lambda \sim 0.5 \, \mu m$) but emit minimum thermal radiation (which occurs in the long-wave IR, $\lambda \sim 10 \, \mu m$ based on the panel's $100^\circ C$ operating temp).
- Therefore, a perfect solar coating has $\varepsilon_\lambda \approx 1$ for $\lambda < 3 \, \mu m$, and $\varepsilon_\lambda \approx 0$ for $\lambda > 3 \, \mu m$. This is called a *selective surface*.
