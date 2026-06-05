---
title: "Kirchhoff's Law and Gray Surfaces"
---

# Kirchhoff's Law and Gray Surfaces

We have defined two distinct surface properties: Emissivity $\varepsilon$ (how well a surface *emits* radiation relative to a blackbody) and Absorptivity $\alpha$ (what fraction of incident radiation a surface *absorbs*). 

Remarkably, these two properties are deeply connected.

## 1. Kirchhoff's Law

Consider a small body in perfect thermal equilibrium inside a massive, evacuated isothermal cavity (a blackbody enclosure at temperature $T$). 
- Because the body is in equilibrium, its temperature is also $T$, and the heat it absorbs must exactly equal the heat it emits.
- Radiation absorbed: $\alpha G = \alpha E_b(T)$ (since the cavity irradiation $G$ is blackbody emission).
- Radiation emitted: $E = \varepsilon E_b(T)$.

Equating them: $\alpha E_b(T) = \varepsilon E_b(T)$.

Therefore, **Kirchhoff's Law** states that for any surface in thermal equilibrium with its surroundings:
$$\varepsilon_\lambda(T) = \alpha_\lambda(T)$$

The spectral emissivity at a given temperature and wavelength *exactly equals* the spectral absorptivity at that same temperature and wavelength. A good emitter at 5 $\mu$m is necessarily a good absorber at 5 $\mu$m.

## 2. The Gray Surface Approximation

Real surfaces have spectral properties ($\varepsilon_\lambda, \alpha_\lambda$) that wildly jump up and down across the wavelength spectrum. Calculating total radiation exchange with these jagged spectral profiles requires complex numerical integration.

To simplify engineering calculations, we introduce the **Gray Surface Assumption**.
A gray surface is defined as a surface whose spectral emissivity and absorptivity are constant—independent of wavelength.
$$\varepsilon_\lambda = \text{constant} = \varepsilon$$
$$\alpha_\lambda = \text{constant} = \alpha$$

If a surface is gray, then by Kirchhoff's law, its total hemispherical emissivity must equal its total hemispherical absorptivity:
$$\boxed{\varepsilon = \alpha}$$

## 3. When is the Gray Assumption Valid?

The assumption $\varepsilon = \alpha$ is the bedrock of 99% of undergraduate radiation heat transfer problems. But it is only valid if:
1. The surface is truly gray (rare).
2. The surface is exchanging radiation with surroundings that are at a similar temperature.

**When it fails catastrophically:** Solar heating.
- A surface sits outside at $T_s = 300$ K. It is hit by solar irradiation (originating from a $T_{sun} = 5800$ K source).
- The surface's emissivity $\varepsilon$ determines how it emits heat. Because $T_s = 300$ K, it emits entirely in the long-wave IR. Thus, $\varepsilon$ is evaluated in the IR range.
- The surface's absorptivity $\alpha$ determines how much sunlight it absorbs. Because sunlight is short-wave, $\alpha$ is evaluated in the visible/short-wave range.
- White paint has $\alpha_{solar} \approx 0.15$ (reflects light) but $\varepsilon_{IR} \approx 0.90$ (emits IR like a blackbody).
- Here, $\alpha \neq \varepsilon$! Assuming they are equal would lead to massive errors in calculating the surface temperature.

For standard indoor radiation exchange between walls, pipes, and people (all near 300-400 K), the gray surface assumption ($\varepsilon = \alpha$) is highly accurate and universally used.
