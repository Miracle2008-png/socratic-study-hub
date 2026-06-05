# Gas Mixtures and Partial Pressures

Engineering systems rarely involve pure gases. Atmospheric air is a mixture of N₂ (78%), O₂ (21%), and Ar (1%). Combustion products are mixtures of CO₂, H₂O, N₂, and O₂. Refrigerant blends (R-410A = R-32 + R-125) are engineered mixtures. Analyzing these systems requires thermodynamics of mixtures.

## 1. Dalton's Law of Additive Pressures

For a mixture of ideal gases at temperature $T$ and volume $V$, **Dalton's Law** states:

**The total pressure of the mixture equals the sum of the partial pressures of each component.**
$$P_{total} = \sum_{i=1}^k P_i$$

Where the **partial pressure** $P_i$ is the pressure that component $i$ alone would exert if it occupied the entire volume at the same temperature:
$$P_i = \frac{n_i R_u T}{V} = y_i P_{total}$$

Where $y_i = n_i/n_{total}$ is the **mole fraction** of component $i$.

## 2. Mixture Composition Descriptions

**Mole fraction:** $y_i = n_i / n_{total}$ (always: $\sum y_i = 1$)

**Mass fraction:** $mf_i = m_i / m_{total}$ (always: $\sum mf_i = 1$)

**Converting between them** (where $M_i$ is the molar mass of component $i$):
$$mf_i = \frac{y_i M_i}{\sum y_j M_j} = \frac{y_i M_i}{M_{mix}}$$

**Apparent molar mass of the mixture:**
$$M_{mix} = \sum y_i M_i$$
Air: $M_{air} = 0.78(28) + 0.21(32) + 0.01(40) = 28.97 \text{ kg/kmol}$

## 3. Mixture Properties

For an ideal gas mixture, each component behaves independently:

**Specific gas constant:** $R_{mix} = R_u / M_{mix}$

**Specific heats:**
$$c_{p,mix} = \sum mf_i \cdot c_{p,i}, \quad c_{v,mix} = \sum mf_i \cdot c_{v,i}$$

**Enthalpy of mixture:**
$$H_{mix} = \sum n_i \bar{h}_i = \sum m_i h_i$$
$$h_{mix} = \sum mf_i \cdot h_i$$

**Entropy of mixing:** When gases mix, entropy increases even though no heat is exchanged and no work is done — this is **entropy of mixing**, a purely statistical thermodynamic consequence of increased disorder:
$$\bar{s}_{mix} = \sum y_i \bar{s}_i - R_u \sum y_i \ln y_i$$

The $-R_u \sum y_i \ln y_i$ term is always positive (entropy increases on mixing), consistent with the Second Law's requirement of irreversibility for spontaneous mixing.

## 4. Psychrometrics: Moist Air

The mixture of dry air and water vapor is **moist air** — critically important for HVAC, drying processes, and meteorology.

**Humidity ratio** $\omega$: mass of water vapor per kg of dry air.
$$\omega = 0.622 \frac{P_v}{P - P_v}$$

**Relative humidity** $\phi$: ratio of vapor pressure $P_v$ to saturation pressure $P_{sat}(T)$:
$$\phi = \frac{P_v}{P_{sat}(T)}$$

When $\phi = 100\%$, the air is saturated — further cooling causes condensation (dew, fog, rain). The **dew point** is the temperature at which $P_{sat} = P_v$.
