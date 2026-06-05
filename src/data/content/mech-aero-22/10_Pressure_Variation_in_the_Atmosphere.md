---
title: "Pressure Variation in the Atmosphere"
---

# Pressure Variation in the Atmosphere

For liquids, density $\rho$ is constant, yielding the simple linear relationship $P = P_{atm} + \rho g h$. 
For gases like the Earth's atmosphere, density is highly compressible. As you go higher in altitude, the pressure drops, so the gas expands, meaning the density $\rho$ also drops. 

To find the pressure at a given altitude, we must couple the hydrostatic equation with the Ideal Gas Law.

## 1. The Governing Differential Equation

Hydrostatic equation: $\frac{dP}{dz} = -\rho g$
Ideal Gas Law: $\rho = \frac{P}{RT}$

Substitute the density into the hydrostatic equation:
$$\frac{dP}{dz} = -\frac{P g}{RT}$$
$$\frac{dP}{P} = -\frac{g}{R} \frac{dz}{T}$$

To integrate this from sea level ($z=0, P_0$) to altitude $z$, we absolutely must know how temperature $T$ varies with altitude $z$.

## 2. Isothermal Atmosphere (Simplification)

If we assume the temperature of the atmosphere is constant ($T = T_0$)—which is somewhat valid for the lower stratosphere—the integral is straightforward:
$$\int_{P_0}^P \frac{dP}{P} = -\frac{g}{RT_0} \int_0^z dz$$
$$\ln\left(\frac{P}{P_0}\right) = -\frac{g z}{RT_0}$$

**Exponential Decay:**
$$P(z) = P_0 e^{-gz/RT_0}$$
In an isothermal atmosphere, pressure drops exponentially with altitude.

## 3. The US Standard Atmosphere (The Troposphere)

In reality, in the troposphere (from sea level up to about 11,000 meters, where almost all weather and commercial aviation occurs), the temperature drops linearly with altitude.

$$T(z) = T_0 - \alpha z$$
Where the standard lapse rate is $\alpha = 0.0065 \, K/m$ (or 6.5°C per kilometer), and sea-level temperature $T_0 = 288.15 \, K$ (15°C).

Substituting this into the differential equation:
$$\frac{dP}{P} = -\frac{g}{R(T_0 - \alpha z)} dz$$

Integrating from $(0, P_0)$ to $(z, P)$ yields:
$$P(z) = P_0 \left( 1 - \frac{\alpha z}{T_0} \right)^{\frac{g}{\alpha R}}$$

Since density $\rho = P/RT$, the density variation is:
$$\rho(z) = \rho_0 \left( 1 - \frac{\alpha z}{T_0} \right)^{\frac{g}{\alpha R} - 1}$$

## 4. Altimetry

An altimeter in an aircraft is essentially just a highly sensitive barometer. It measures the static outside air pressure. Using the Standard Atmosphere equation above, it works backward to calculate the altitude $z$ and displays it to the pilot.

Because real weather causes local pressure fluctuations, the "sea-level pressure" $P_0$ changes day to day. Pilots must calibrate their altimeters to the local $P_0$ (the altimeter setting, provided by air traffic control) to ensure they do not fly into a mountain while thinking they are at a safe altitude.
