---
title: "Absorption, Reflection, and Transmission"
---

# Absorption, Reflection, and Transmission

When thermal radiation (Irradiation, $G$) strikes a surface, the energy must be conserved. It can suffer three fates: it can be absorbed by the material, reflected away from the surface, or transmitted through the material.

## 1. The Radiation Balance

By the First Law of Thermodynamics, the total incident radiation $G$ [$W/m^2$] is partitioned:
$$G = G_{abs} + G_{ref} + G_{tr}$$

Dividing by $G$ yields the dimensionless fractions:
$$\alpha + \rho + \tau = 1$$

- **Absorptivity ($\alpha$):** The fraction of incident radiation absorbed by the surface. ($0 \le \alpha \le 1$)
- **Reflectivity ($\rho$):** The fraction of incident radiation reflected by the surface. ($0 \le \rho \le 1$)
- **Transmissivity ($\tau$):** The fraction of incident radiation transmitted through the material. ($0 \le \tau \le 1$)

## 2. Opaque Surfaces

For the vast majority of engineering solids (metals, wood, thick plastics, concrete), thermal radiation cannot penetrate more than a few microns. Transmissivity is zero ($\tau = 0$).

Therefore, for **opaque surfaces**:
$$\alpha + \rho = 1$$

This has profound design implications: a highly reflective surface (high $\rho$) must be a poor absorber (low $\alpha$). A mirror ($\rho \approx 0.95$) absorbs almost no heat ($\alpha \approx 0.05$). A matte black surface ($\rho \approx 0.05$) absorbs almost all incident heat ($\alpha \approx 0.95$).

## 3. Semi-Transparent Media

Materials like glass, water, and certain plastics are semi-transparent ($\tau > 0$). However, transmissivity is highly dependent on wavelength ($\tau_\lambda$).

**The Greenhouse Effect:**
Standard window glass has very specific spectral properties:
- It is highly transparent to short-wavelength radiation ($\tau \approx 0.9$ for $\lambda < 3 \, \mu m$).
- It is almost completely opaque to long-wavelength radiation ($\tau \approx 0$ for $\lambda > 3 \, \mu m$).

1. The sun (5800 K) emits short-wavelength radiation. This passes easily through the glass and into the car/greenhouse, where it is absorbed by the interior surfaces, heating them up.
2. The heated interior surfaces (e.g., 320 K) emit thermal radiation. Because they are at a low temperature, they emit long-wavelength infrared radiation.
3. The glass is completely opaque to this long-wavelength radiation. The heat cannot radiate back out through the glass; it is trapped. The interior temperature skyrockets until convection/conduction losses balance the incoming solar load.

## 4. Types of Reflection

Reflection is not just a single number; its directionality matters.
- **Specular Reflection:** The surface is perfectly smooth (mirror-like). The angle of reflection equals the angle of incidence.
- **Diffuse Reflection:** The surface is rough at the microscopic level. Incident radiation is scattered equally in all directions, regardless of the angle of incidence.

Most real engineering surfaces (unless highly polished) are treated as perfectly diffuse reflectors to simplify calculations.
