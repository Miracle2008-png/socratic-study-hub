---
title: "Radiation Heat Transfer: Gray Surfaces"
---

# Radiation Heat Transfer: Gray Surfaces

Real surfaces are not black; they have an emissivity $\varepsilon < 1$ and a reflectivity $\rho = 1 - \varepsilon$. This completely breaks the simple blackbody equations because radiation striking a surface doesn't just get absorbed; it bounces. Radiation between two gray walls bounces back and forth infinitely.

To solve this without tracking infinite bouncing rays, we use the **Radiosity-Irradiation method** combined with thermal resistance networks.

## 1. Radiosity ($J$)

**Irradiation ($G$)** is the total radiation *striking* a surface.
**Radiosity ($J$)** is the total radiation *leaving* a surface.

For a gray, opaque surface, the radiation leaving is the sum of what it emits plus what it reflects:
$$J = \varepsilon E_b + \rho G = \varepsilon \sigma T^4 + (1 - \varepsilon)G$$

## 2. Surface Resistance

The net heat transfer $\dot{Q}_i$ leaving the surface material and entering the enclosure is the difference between what leaves the surface and what strikes it:
$$\dot{Q}_i = A_i(J_i - G_i)$$

From the radiosity equation, substitute $G_i = \frac{J_i - \varepsilon_i E_{bi}}{1 - \varepsilon_i}$:
$$\dot{Q}_i = A_i \left( J_i - \frac{J_i - \varepsilon_i E_{bi}}{1 - \varepsilon_i} \right) = \frac{E_{bi} - J_i}{\frac{1 - \varepsilon_i}{\varepsilon_i A_i}}$$

This defines the **Surface Resistance**:
$$R_{surface} = \frac{1 - \varepsilon_i}{\varepsilon_i A_i}$$

The surface resistance sits between the blackbody potential $E_{bi} (\sigma T^4)$ deep inside the material and the Radiosity $J_i$ at the surface. 
- If $\varepsilon = 1$ (blackbody), $R_{surface} = 0$, meaning $J_i = E_{bi}$.
- If $\varepsilon$ is small, the resistance is large. The surface struggles to emit its thermal energy into the room.

## 3. The Complete Resistance Network

The radiation exchange between two gray surfaces (1 and 2) can now be modeled as a three-resistor circuit in series:

1. **Surface Resistance 1:** Heat travels from the core of surface 1 ($E_{b1}$) to its surface radiosity node ($J_1$).
2. **Space Resistance:** Heat travels across the geometric space from node $J_1$ to node $J_2$. (Same as the blackbody case: $R_{space} = 1 / (A_1 F_{12})$).
3. **Surface Resistance 2:** Heat travels from the surface radiosity node $J_2$ into the core of surface 2 ($E_{b2}$).

The total heat transfer rate $\dot{Q}_{12}$ is the total potential difference divided by the sum of the three resistances:

$$\dot{Q}_{12} = \frac{\sigma T_1^4 - \sigma T_2^4}{\frac{1 - \varepsilon_1}{\varepsilon_1 A_1} + \frac{1}{A_1 F_{12}} + \frac{1 - \varepsilon_2}{\varepsilon_2 A_2}}$$

## 4. Solving N-Surface Enclosures

For enclosures with 3 or more surfaces, the circuit becomes a network. 
- Every surface $i$ has a surface resistor connecting $E_{bi}$ to its radiosity node $J_i$.
- Every radiosity node is connected to every *other* radiosity node $j$ by a space resistor $1/(A_i F_{ij})$.
- You apply Kirchhoff's Current Law (sum of heat flows into a node = 0) at each unknown $J_i$ node to create a system of linear equations, solve for the unknown radiosities, and then calculate the heat fluxes.
