---
title: "Blackbody Radiation Laws"
---

# Blackbody Radiation Laws

To understand how real surfaces emit radiation, we first define an idealized standard of perfection: the **blackbody**.

A blackbody is defined by three properties:
1. It absorbs all incident radiation, regardless of wavelength or direction.
2. For a prescribed temperature and wavelength, no surface can emit more energy than a blackbody.
3. It is a diffuse emitter: the radiation it emits is independent of direction.

*Note: The term "blackbody" refers to its perfect absorption (it reflects nothing, so it would look black at room temperature). However, a blackbody at 5800 K (like the sun) looks brilliantly white.*

## 1. Planck's Law (Spectral Distribution)

In 1900, Max Planck derived the theoretical formula for the spectral emissive power of a blackbody, $E_{b\lambda}$ (the energy emitted per unit surface area, per unit time, *per unit wavelength*):

$$E_{b\lambda}(T) = \frac{C_1}{\lambda^5 \left[ \exp\left(\frac{C_2}{\lambda T}\right) - 1 \right]}$$

Where $C_1 = 3.742 \times 10^8 \, W\cdot\mu m^4/m^2$ and $C_2 = 1.439 \times 10^4 \, \mu m\cdot K$.

Plotting $E_{b\lambda}$ versus $\lambda$ yields a family of bell-shaped curves for different temperatures. Key observations:
- The curve for a higher temperature is always entirely above the curve for a lower temperature. A hotter blackbody emits more radiation at *every single wavelength*.
- As temperature increases, the peak of the curve shifts sharply to the left (toward shorter wavelengths).

## 2. Wien's Displacement Law

Wilhelm Wien mathematically proved that the wavelength at which a blackbody emits its *maximum* power ($\lambda_{max}$) is inversely proportional to its absolute temperature:

$$\lambda_{max} T = 2897.8 \, \mu m \cdot K$$

**Application:**
- The sun ($T \approx 5800$ K): $\lambda_{max} = 2898 / 5800 \approx 0.5 \, \mu m$. This is the wavelength of green/yellow visible light. Human eyes evolved specifically to be most sensitive to the peak emission wavelength of our star.
- A human body ($T \approx 310$ K): $\lambda_{max} = 2898 / 310 \approx 9.3 \, \mu m$. This is deep in the infrared. Night-vision goggles and thermal cameras are tuned to detect this 9-10 $\mu$m range to spot people in the dark.

## 3. The Stefan-Boltzmann Law

If we want the *total* emissive power of a blackbody across all wavelengths, we integrate Planck's law from $\lambda = 0$ to $\lambda = \infty$:

$$E_b(T) = \int_0^\infty E_{b\lambda}(T) d\lambda = \sigma T^4$$

This is the **Stefan-Boltzmann Law**.
- $E_b$: Total emissive power of a blackbody [$W/m^2$].
- $T$: Absolute temperature [$K$] — **You must use Kelvin or Rankine!**
- $\sigma$: The Stefan-Boltzmann constant, $\sigma = 5.67 \times 10^{-8} \, W/(m^2 \cdot K^4)$.

Because radiation scales with $T^4$, it is often negligible at room temperature (compared to convection) but absolutely dominates heat transfer at high temperatures (furnaces, combustion chambers, space reentry). Doubling the absolute temperature increases the radiated power by a factor of 16.
