# Bubbling Beds and Two-Phase Theory

The two-phase theory of fluidization provides the foundational framework for analysing and designing bubbling fluidized bed reactors. Understanding how gas distributes between the bubble phase and emulsion phase is essential for predicting conversion, heat transfer, and mixing behaviour.

## 1. Two-Phase Theory of Fluidization (Davidson & Harrison)

The **two-phase theory** (Davidson & Harrison, 1963) makes a single critical assumption:

> *All gas in excess of that required for minimum fluidization passes through the bed as bubbles.*

This means:
- **Emulsion phase**: operates exactly at minimum fluidization conditions ($v_{mf}$, $\varepsilon_{mf}$) — it is essentially a dense, slowly percolating suspension
- **Bubble phase**: carries all the excess gas at superficial velocity $(v_s - v_{mf})$

The total superficial velocity is partitioned:
$$v_s = v_{mf} + v_b \delta_b$$

Where $\delta_b$ is the bubble fraction (volume fraction of bed occupied by bubbles) and $v_b$ is the bubble rise velocity.

## 2. Bubble Rise Velocity

A single isolated bubble in a fluidized bed rises at:
$$v_{br} = 0.711\sqrt{gd_b}$$

Where $d_b$ is the bubble diameter (m). This is identical to the Davies-Taylor equation for a bubble rising in a liquid — fluidized beds behave remarkably like liquid systems.

When bubbles interact (swarms), their rise velocity is enhanced:
$$v_b = v_s - v_{mf} + v_{br} = (v_s - v_{mf}) + 0.711\sqrt{gd_b}$$

## 3. Bubble Growth with Height

Bubbles coalesce and grow as they rise up the bed. An empirical correlation for mean bubble diameter at height $h$ above the distributor (Mori & Wen, 1975):

$$d_b(h) = d_{b,\text{max}} - (d_{b,\text{max}} - d_{b,0})\exp\!\left(\frac{-0.3h}{D_T}\right)$$

Where:
- $d_{b,\text{max}} = 0.652[A_c(v_s - v_{mf})]^{0.4}$ = maximum bubble diameter that can exist in a bed of cross-section $A_c$
- $d_{b,0}$ = initial bubble diameter at the distributor plate (depends on distributor design)
- $D_T$ = bed diameter (m)

For a porous plate distributor: $d_{b,0} = 0.00376(v_s - v_{mf})^2$

Bubbles stop growing when $d_b \to d_{b,\text{max}}$ — coalescence and splitting equilibrate at this size.

## 4. Bed Height Expansion

The expanded bed height $H$ relative to the fixed bed height $H_{mf}$ can be estimated from bubble fraction $\delta_b$:

$$\frac{H}{H_{mf}} = \frac{1}{1 - \delta_b}$$

Where $\delta_b = \frac{v_s - v_{mf}}{v_b}$

For a bed with $v_s/v_{mf} = 3$ and $v_{br}$ much larger than $v_s - v_{mf}$, bubble fraction is small, so the bed does not expand dramatically. For slugging beds (large $v_s/v_{mf}$, small $D_T$), the bed can double in height.

## 5. Gas Exchange Between Phases: Interphase Mass Transfer

For gas-phase reactions in a fluidized bed, reactant must transfer from the bubble phase (where there is no catalyst) to the emulsion phase (where the catalyst lives). This **interphase mass transfer** can be the rate-limiting step for fast reactions.

The overall interphase exchange coefficient $K_{be}$ (s⁻¹) per unit bubble volume:
$$K_{be} = K_{bc} + K_{ce}$$

- **Bubble-cloud exchange** $K_{bc} = 4.5\frac{v_{mf}}{d_b} + 5.85\frac{D_g^{0.5} g^{0.25}}{d_b^{1.25}}$ (Kunii-Levenspiel)
- **Cloud-emulsion exchange** $K_{ce} = 6.77\left(\frac{D_g \varepsilon_{mf} v_{br}}{d_b^3}\right)^{0.5}$

Where $D_g$ is the gas-phase diffusivity (m²/s).

## 6. The Kunii-Levenspiel (K-L) Bubbling Bed Model

The most widely used reactor model for bubbling beds divides the bed into three regions:
1. **Bubble phase** — essentially catalyst-free, gas rises rapidly
2. **Cloud/Wake phase** — thin shell of gas and catalyst surrounding each bubble, recirculates with the bubble
3. **Emulsion phase** — the dense suspension of catalyst where most reaction occurs

Gas flows: Bubble → Cloud → Emulsion (in series for slow reactions)

For a first-order reaction with rate constant $k$, the K-L model predicts conversion $X$:

$$\frac{C_{out}}{C_{in}} = \exp\!\left(-\frac{\gamma_b k + \frac{1}{\frac{1}{K_{bc}} + \frac{1}{\gamma_c k + \frac{1}{\frac{1}{K_{ce}} + \frac{1}{\gamma_e k}}}}}{\frac{v_s - v_{mf}}{v_b} \cdot \frac{v_b}{H}}\right)$$

Where $\gamma_b$, $\gamma_c$, $\gamma_e$ are the catalyst volumes per unit bubble volume in each phase.

## 7. Worked Example: Bubble Rise Velocity and Expansion

**Problem:** A fluidized bed reactor ($D_T = 0.5 \, \text{m}$) contains silica catalyst ($\varepsilon_{mf} = 0.45$, $v_{mf} = 0.01 \, \text{m/s}$). Air is supplied at $v_s = 0.05 \, \text{m/s}$. At the bed midpoint, the bubble diameter is measured as $d_b = 0.06 \, \text{m}$. Calculate: (a) the bubble rise velocity, (b) the bubble fraction, (c) the expanded bed height if $H_{mf} = 1.0 \, \text{m}$.

**(a) Bubble rise velocity:**
$$v_{br} = 0.711\sqrt{g d_b} = 0.711\sqrt{9.81 \times 0.06} = 0.711 \times 0.767 = 0.545 \, \text{m/s}$$
$$v_b = (0.05 - 0.01) + 0.545 = 0.585 \, \text{m/s}$$

**(b) Bubble fraction:**
$$\delta_b = \frac{v_s - v_{mf}}{v_b} = \frac{0.04}{0.585} = 0.068$$

**(c) Expanded bed height:**
$$H = \frac{H_{mf}}{1 - \delta_b} = \frac{1.0}{1 - 0.068} = \frac{1.0}{0.932} = 1.073 \, \text{m}$$

The bed expands only about **7.3%** — modest expansion, consistent with a vigorously bubbling but not slugging bed.

## 8. K-L Two Phase Model Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "gas", "data": { "label": "Total Gas Flow", "icon": "Wind", "description": "Superficial velocity." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "bubble", "data": { "label": "Bubble Phase", "icon": "Circle", "description": "Excess gas, no catalyst." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "cloud", "data": { "label": "Cloud/Wake", "icon": "Cloud", "description": "Thin catalyst shell." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "emul", "data": { "label": "Emulsion Phase", "icon": "Layers", "description": "Dense bed, at v_mf." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "gas", "target": "bubble", "animated": true },
    { "source": "gas", "target": "emul", "animated": true },
    { "source": "bubble", "target": "cloud", "label": "Exchange", "animated": true },
    { "source": "cloud", "target": "emul", "label": "Exchange", "animated": true }
  ]
}
```
