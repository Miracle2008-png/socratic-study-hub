# Heat Transfer in Fluidized Beds

One of the most remarkable properties of fluidized beds is their exceptionally high heat transfer coefficients — rivalling those of boiling liquids — despite being primarily gas-phase systems. This makes them ideal for highly exothermic reactions (FCC, polyolefin production, combustion) where temperature control is critical.

## 1. Mechanisms of Heat Transfer in Fluidized Beds

Three mechanisms contribute to heat transfer between the bed and an immersed surface (tube bundles, bed walls):

### (a) Particle Convection (Dominant for Fine Particles)
Packets of emulsion phase make brief thermal contact with the surface, are refreshed by the bubbles, and carry heat away. This is analogous to the surface-renewal model of mass transfer.

The **packet model** (Mickley & Fairbanks) gives the instantaneous heat transfer coefficient:

$$h_{\text{packet}}(t) = \sqrt{\frac{\rho_s c_{ps} k_s (1-\varepsilon_{mf})}{\pi t}}$$

Where $t$ is the contact time of the packet with the surface.

### (b) Gas Convection (Dominant for Coarse Particles)
In beds of large particles ($d_p > 1 \, \text{mm}$), gas convection between particles and the surface becomes significant, similar to a packed bed heat exchanger.

### (c) Radiation (Dominant at High Temperature)
Above ~700°C, radiation from the hot emulsion phase to the surface becomes the dominant mechanism. This is exploited in fluidized bed combustors to transfer heat from burning char to steam tubes.

## 2. Maximum Heat Transfer Coefficient

For a given system, there is an **optimum fluidization velocity** $v_{\text{opt}}$ at which the bed-to-surface heat transfer coefficient $h_w$ is maximised:

$$h_{w,\text{max}} \approx 35.8 \frac{\rho_s^{0.2} c_{ps}^{0.6} k_g^{0.6} g^{0.2}}{\mu^{0.4}} \quad \text{(Grewal-Saxena correlation)}$$

For air-fluidized silica sand, typical peak values:
- Fine particles ($d_p \sim 100 \, \mu\text{m}$): $h_{w,\text{max}} = 400$–$600 \, \text{W/m}^2\text{K}$
- Coarse particles ($d_p \sim 1 \, \text{mm}$): $h_{w,\text{max}} = 200$–$350 \, \text{W/m}^2\text{K}$

Compare these to single-phase gas convection (~$20$–$80 \, \text{W/m}^2\text{K}$) — the fluidized bed is 5–30× better!

## 3. Distributor Plate Design

The **distributor plate** (or grid plate) at the bottom of a fluidized bed serves two critical functions:
1. **Pressure drop**: Provides sufficient resistance to ensure uniform gas distribution across the full bed cross-section
2. **Bubble initiation**: Controls initial bubble size and thus heat and mass transfer performance

**Design criterion** for the distributor pressure drop $\Delta P_d$:

$$\frac{\Delta P_d}{\Delta P_{\text{bed}}} \geq 0.10 \quad \text{to} \quad 0.30$$

If the distributor pressure drop is too low, gas preferentially channels through one region — creating dead zones of stagnant, poorly fluidized solid. This leads to hot spots in exothermic reactors.

**Common distributor types:**
- **Perforated plate**: Simple holes, easy to fabricate, susceptible to particle weeping
- **Bubble cap distributor**: Caps prevent particle drainage when gas is off
- **Pipe grid (sparger)**: Horizontal pipes with downward-pointing holes, used in large beds and slurry columns

## 4. Fluidized Bed Heat Exchanger Design

For an immersed heat exchanger (e.g., steam-generating tubes in a fluid bed combustor), the required heat transfer area:

$$A = \frac{Q}{h_w \Delta T_{lm}}$$

Where $\Delta T_{lm}$ is the log-mean temperature difference and $h_w$ is the bed-to-tube heat transfer coefficient (use correlations from Section 2).

The **overall heat transfer coefficient** $U$ includes the tube-side film resistance, tube wall conduction, and bed-side resistance:

$$\frac{1}{U} = \frac{1}{h_{\text{bed}}} + \frac{\delta_w}{k_w} + \frac{1}{h_i}$$

For steam-generating tubes in FCC regenerators: $U \approx 200$–$400 \, \text{W/m}^2\text{K}$.

## 5. Temperature Uniformity: The Fluidized Bed Advantage

A critical advantage of fluidized beds for exothermic reactions is **near-perfect temperature uniformity**. The vigorous solid mixing creates a well-mixed, isothermal reactor environment.

Temperature gradients within a bubbling bed are typically:
$$\Delta T_{\text{bed}} < 5\text{°C}$$

This is remarkable compared to fixed bed reactors, where hot spots can be hundreds of degrees above the average temperature, causing catalyst sintering, deactivation, or runaway.

The mixing time scale for solids in a fluidized bed:
$$t_{\text{mix}} \approx \frac{H}{v_b \delta_b} \sim 1\text{–}10 \, \text{s}$$

Much faster than typical reaction time scales in industrial reactors.

## 6. Worked Example: Bed-to-Wall Heat Transfer

**Problem:** A fluidized bed combustor contains burning coal particles at $T_{\text{bed}} = 850\text{°C}$. Steam tubes at $T_w = 300\text{°C}$ are immersed in the bed. The bed-to-tube heat transfer coefficient (including radiation) is estimated as $h_w = 320 \, \text{W/m}^2\text{K}$. If the thermal duty is $Q = 5 \, \text{MW}$, what tube area is required?

**Log-mean temperature difference (isothermal bed, uniform tube temperature):**
$$\Delta T = T_{\text{bed}} - T_w = 850 - 300 = 550\text{°C}$$

**Required area:**
$$A = \frac{Q}{h_w \Delta T} = \frac{5 \times 10^6}{320 \times 550} = \frac{5{,}000{,}000}{176{,}000} = 28.4 \, \text{m}^2$$

For $50 \, \text{mm}$ OD tubes of $4 \, \text{m}$ length: area per tube = $\pi \times 0.05 \times 4 = 0.628 \, \text{m}^2$

Number of tubes required: $28.4 / 0.628 \approx 45 \, \text{tubes}$
