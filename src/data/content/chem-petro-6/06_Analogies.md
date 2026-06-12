# Analogies Between Momentum, Heat, and Mass Transfer

One of the most elegant and practically useful concepts in chemical engineering is the mathematical symmetry between the transfer of momentum, heat, and mass. Because the underlying differential equations governing these three phenomena are identical in form, engineers can use experimental data from one field (like fluid mechanics) to perfectly predict behaviour in another field (like mass transfer).

## 1. The Fundamental Phenomenological Analogy

As seen previously, the foundational 1D transport laws are identical:
*   **Momentum:** $\tau_y = -\nu \frac{d(\rho v_x)}{dy}$
*   **Heat:** $q_y = -\alpha \frac{d(\rho c_p T)}{dy}$
*   **Mass:** $J_{Ay} = -D_{AB} \frac{dC_A}{dy}$

The diffusivities (kinematic viscosity $\nu$, thermal diffusivity $\alpha$, and mass diffusivity $D_{AB}$) all have the exact same SI units: **m²/s**.

## 2. Dimensionless Numbers

Because the physical laws are analogous, the dimensionless groups used to correlate data are also perfectly analogous.

### The Ratios of Diffusivities
*   **Prandtl Number ($Pr = \nu / \alpha$)**: Links momentum to heat transfer. (Is the velocity boundary layer thicker than the thermal boundary layer?)
*   **Schmidt Number ($Sc = \nu / D_{AB}$)**: Links momentum to mass transfer. (Is the velocity boundary layer thicker than the concentration boundary layer?)
*   **Lewis Number ($Le = \alpha / D_{AB}$)**: Links heat to mass transfer. (Crucial for air-conditioning and drying calculations).

### The Transfer Coefficients
*   **Momentum:** Friction Factor ($f$)
*   **Heat:** Nusselt Number ($Nu = \frac{h L}{k}$)
*   **Mass:** Sherwood Number ($Sh = \frac{k_c L}{D_{AB}}$)

## 3. The Reynolds Analogy

In 1874, Osborne Reynolds proposed the first and simplest analogy. He postulated that in highly turbulent flow, the transport of momentum, heat, and mass is dominated by large, chaotic eddies, and molecular diffusion is negligible. If molecular properties don't matter, then $Pr = 1$ and $Sc = 1$.

Under these conditions, Reynolds proved that the dimensionless transfer coefficients are exactly equal to half the friction factor:

$$ \frac{f}{2} = \frac{Nu}{Re \cdot Pr} = \frac{Sh}{Re \cdot Sc} $$

**(Note: $\frac{Nu}{Re \cdot Pr}$ is called the Stanton number for heat transfer, $St_H$. $\frac{Sh}{Re \cdot Sc}$ is the Stanton number for mass transfer, $St_M$).**

**Utility:** If you know the pressure drop in a pipe (which gives you the friction factor $f$), you can immediately calculate the convective heat transfer coefficient ($h$) and the mass transfer coefficient ($k_c$) without doing any thermal or concentration experiments!

**Limitation:** The Reynolds analogy only works for gases where $Pr \approx 1$ and $Sc \approx 1$. It fails catastrophically for liquids (where $Sc$ can be $1000+$).

## 4. The Chilton-Colburn J-Factor Analogy (1933)

To correct the Reynolds analogy for liquids, Chilton and Colburn introduced empirical correction factors based heavily on experimental data. They defined the "J-factors":

*   **J-factor for Heat ($j_H$)**: $j_H = \frac{Nu}{Re \cdot Pr} \cdot Pr^{2/3} = St_H \cdot Pr^{2/3}$
*   **J-factor for Mass ($j_M$)**: $j_M = \frac{Sh}{Re \cdot Sc} \cdot Sc^{2/3} = St_M \cdot Sc^{2/3}$

The Chilton-Colburn Analogy states that for flow inside pipes and over flat plates:
$$ \frac{f}{2} = j_H = j_M $$

This is arguably the most successful and widely used empirical analogy in chemical engineering. It is valid for a massive range of fluids ($0.6 < Pr < 120$ and $0.6 < Sc < 3000$).

## 5. Practical Application: The Wet-Bulb Thermometer

The most famous application of the heat-mass transfer analogy is the wet-bulb thermometer. 
When water evaporates from a wet thermometer bulb into a stream of unsaturated air, mass transfer (evaporation) removes latent heat, cooling the bulb. Simultaneously, the warmer air transfers sensible heat back to the bulb. 
At steady state, the rate of convective heat transfer exactly equals the rate of latent heat removal by mass transfer.

Using the Chilton-Colburn analogy, the ratio of the heat transfer coefficient to the mass transfer coefficient ($h/k_y$) can be derived purely from the Lewis number. For the air-water system, the Lewis number happens to be almost exactly $1.0$. This incredible cosmic coincidence means that $h/k_y \approx C_{p,\text{air}}$, allowing meteorologists to calculate absolute humidity simply by reading two thermometers.

## 6. Transport Analogies

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "rey", "data": { "label": "Reynolds Analogy", "icon": "Activity", "description": "Pr=1, Sc=1 only." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "nums", "data": { "label": "Pr & Sc Corrections", "icon": "Hash", "description": "Pr^2/3, Sc^2/3 factors." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "chil", "data": { "label": "Chilton-Colburn", "icon": "CheckCircle", "description": "jH = jM = f/2" }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "rey", "target": "nums", "animated": true },
    { "source": "nums", "target": "chil", "animated": true }
  ]
}
```
