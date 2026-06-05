# Simultaneous Heat and Mass Transfer

In many engineering processes, heat transfer and mass transfer occur at the exact same time and are deeply coupled. You cannot solve one without the other. The evaporation of a water droplet, the drying of a wet towel, and the sublimation of dry ice all involve the latent heat of phase change, which inexorably links the mass flux to the heat flux.

## 1. The Wet-Bulb Temperature (Revisited)

We introduced the wet-bulb temperature in Psychrometrics, but it is actually the classic example of simultaneous heat and mass transfer.

Consider a thermometer whose bulb is wrapped in a wet wick, exposed to a flowing stream of unsaturated air ($T_{\infty}$, $C_{\infty}$).
1.  Because the air is not saturated, water evaporates from the wick. **Mass transfer** occurs outward: $N_A'' = h_m (C_{s} - C_{\infty})$.
2.  Evaporation requires energy (the latent heat of vaporization, $h_{fg}$). This energy is pulled from the liquid water, cooling the wick.
3.  As the wick cools below the air temperature ($T_s < T_{\infty}$), **heat transfer** occurs inward from the air to the wick: $q'' = h (T_{\infty} - T_s)$.
4.  The system reaches a steady state when the heat convected into the wick exactly balances the latent heat carried away by evaporation:

$$ h (T_{\infty} - T_s) = N_A'' \cdot h_{fg} = h_m (C_s - C_{\infty}) \cdot h_{fg} $$

This steady-state surface temperature $T_s$ is the **wet-bulb temperature**.

## 2. The Chilton-Colburn J-Factor Analogy

To solve the equation above, we need both $h$ (heat transfer coefficient) and $h_m$ (mass transfer coefficient). We rarely have empirical correlations for both in a specific complex geometry.

The Chilton-Colburn analogy provides a powerful link between momentum (friction), heat, and mass transfer:

$$ j_H = j_M = \frac{C_f}{2} $$

Where:
*   $j_H = St \cdot Pr^{2/3}$ (Heat transfer j-factor)
*   $j_M = St_m \cdot Sc^{2/3}$ (Mass transfer j-factor)
*   $C_f$ is the skin friction coefficient.

Equating $j_H$ and $j_M$ gives a direct relationship between $h$ and $h_m$:
$$ \frac{h}{h_m} = \rho c_p \left( \frac{Sc}{Pr} \right)^{2/3} = \rho c_p (Le)^{2/3} $$

Where **$Le$ is the Lewis Number** ($Le = \alpha / D_{AB} = Sc / Pr$).
For air-water vapor mixtures, $Le \approx 1$. This extraordinary coincidence means that for air/water systems, $\frac{h}{h_m \rho c_p} \approx 1$. This simplifies psychrometric calculations immensely and is why straight lines on a psychrometric chart work so well.

## 3. Droplet Evaporation and Combustion

The evaporation of a liquid droplet is a classic simultaneous transport problem. As the droplet evaporates, its radius $r(t)$ shrinks.

By writing spherical mass and energy balances around the droplet, we find that the surface area of the droplet (proportional to $D^2$, the diameter squared) decreases linearly with time. This is the famous **$D^2$-Law**:

$$ D(t)^2 = D_0^2 - K t $$

Where $K$ is the evaporation constant, which depends strongly on the thermal conductivity of the surrounding gas and the latent heat of the liquid.

**In Combustion:**
If the evaporating droplet is a liquid fuel (like diesel or jet fuel) in a hot oxidizing environment, it ignites. The droplet is now surrounded by a spherical flame front.
*   Heat from the flame conducts inward to evaporate the fuel.
*   Fuel vapor diffuses outward to the flame front.
*   Oxygen diffuses inward from the surroundings to the flame front.
The $D^2$-Law still applies, but $K$ is vastly larger due to the intense heat of the flame.

## 4. Drying Operations

Industrial drying (e.g., paper manufacturing, milk powder spray drying, lumber kilns) is highly energy-intensive.

In the **Constant-Rate Period** of drying, the surface is wet, and the drying rate is determined by the external simultaneous heat and mass transfer to the surface (the surface is at the wet-bulb temperature).

In the **Falling-Rate Period**, the surface dries, and the evaporation front recedes into the porous solid. Now, heat must conduct inward through the dry solid, and vapor must diffuse outward through the pores. The temperature of the solid rises, approaching the hot air temperature as drying finishes. Managing this temperature profile is critical to avoid burning or degrading the product.
