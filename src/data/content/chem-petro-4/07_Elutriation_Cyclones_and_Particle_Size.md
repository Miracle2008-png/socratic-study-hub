# Elutriation, Cyclones and Particle Size Distribution

In industrial fluidized beds operating above minimum fluidization, fine particles are constantly being carried out of the bed by the upward-flowing gas. This is called **elutriation**. Managing particle entrainment and recovering particles from the exit gas stream is a critical engineering challenge. Cyclone separators are the primary tool for gas-solid separation in these systems.

## 1. Elutriation and Entrainment

**Elutriation** is the preferential removal of fine particles from a polydisperse bed by the gas stream. A particle is elutriated when the gas superficial velocity $v_s$ exceeds its terminal velocity $v_t$:

$$v_s > v_t \implies \text{particle is carried out}$$

In a polydisperse bed, the **elutriation rate constant** $K_i^*$ (kg/m²·s) for particles of size $d_{p,i}$ at height $z$ above the bed surface:

$$K_i^* = K_\infty^* \exp(-a_e z)$$

Where $K_\infty^*$ is the elutriation rate at the bed surface and $a_e$ is a decay constant. Well above the bed, the gas-solid concentration decays exponentially to a dilute **transport disengaging height (TDH)** — above this height, carryover rate is constant.

The **total entrainment flux** (kg/m²·s) at the bed exit is:

$$F_e = \sum_i x_i K_i^*$$

Where $x_i$ is the mass fraction of size class $i$ in the bed.

## 2. Particle Size Distribution (PSD)

Real particles are never uniform — they have a distribution of sizes. PSDs are characterised by:
- **Mean diameters**: The arithmetic mean $\bar{d}_p = \sum x_i d_{p,i}$, or the **Sauter mean diameter** $d_{32}$ for mass-surface applications:

$$d_{32} = \frac{1}{\sum_i (x_i / d_{p,i})}$$

The Sauter mean is critical in mass transfer calculations because it correctly weights the specific surface area.

- **Standard distributions**: Rosin-Rammler (common for crushed particles):
$$R(d_p) = \exp\!\left[-\left(\frac{d_p}{\bar{d}}\right)^n\right]$$

Where $R$ is the mass fraction of particles **larger** than $d_p$, $\bar{d}$ is the characteristic size, and $n$ is the spread parameter.

## 3. Cyclone Separators: Operating Principle

A **cyclone** is a conical separator that uses centrifugal force (not filters) to separate solid particles from a gas stream. Gas enters tangentially, creating a spiralling vortex. Centrifugal force throws particles to the outer wall, where they slide down to a collection hopper. Clean gas exits through a central vortex finder tube.

The **centrifugal acceleration** in a cyclone of radius $R_c$ with tangential velocity $v_\theta$:

$$a_c = \frac{v_\theta^2}{r} \gg g \quad \text{(typically 5–2500 times gravity)}$$

This is why cyclones can collect particles as fine as 5–10 μm that gravity settling cannot handle.

## 4. Cyclone Efficiency: Cut Diameter

The **cut diameter $d_{50}$** is the particle diameter collected with 50% efficiency. It is the most common measure of cyclone performance:

$$d_{50} = \sqrt{\frac{9\mu B}{N_e \pi \rho_s v_{\text{in}}}}$$

Where (Lapple model):
- $B$ = cyclone width (m)
- $N_e$ = number of effective turns made by the gas (typically 5)
- $v_{\text{in}}$ = inlet gas velocity (m/s)

**Separation efficiency** for a particle of diameter $d_p$ relative to the cut diameter:

$$\eta(d_p) = \frac{1}{1 + (d_{50}/d_p)^2}$$

This S-shaped curve shows that very large particles ($d_p \gg d_{50}$) are collected at nearly 100% efficiency, while very small particles ($d_p \ll d_{50}$) pass straight through.

## 5. Cyclone Pressure Drop

Higher cyclone efficiency (smaller $d_{50}$) requires higher inlet velocities, but this increases pressure drop — a fundamental trade-off:

$$\Delta P_{\text{cyclone}} = N_H \cdot \frac{1}{2}\rho_g v_{\text{in}}^2$$

Where $N_H$ is the number of inlet velocity heads lost (typically 6–18, depending on design).

For fine particle recovery, engineers use **banks of small cyclones in parallel** — smaller diameter gives smaller $d_{50}$ at the same inlet velocity. This is the design philosophy of multi-cyclone systems (e.g., in FCC regenerators).

## 6. FCC Cyclone System Design Context

In a **Fluid Catalytic Cracking (FCC)** unit, the regenerator operates as a turbulent fluidized bed at ~700°C. Enormous amounts of catalyst are continuously circulated:
- Catalyst inventory: 100–300 tonnes
- Catalyst circulation rate: 500–1500 tonnes/hour
- Gas velocity in riser: 10–15 m/s (pneumatic transport regime)

Two-stage cyclone systems in the regenerator capture >99.9% of the catalyst, reducing stack emissions to <50 mg/Nm³. First-stage cyclones capture coarse particles ($d_{50} \sim 20 \, \mu\text{m}$); second-stage captures fines ($d_{50} \sim 5 \, \mu\text{m}$).

## 7. Worked Example: Cyclone Cut Diameter

**Problem:** A cyclone ($B = 0.25 \, \text{m}$, $N_e = 5$) receives flue gas ($\rho_g = 0.5 \, \text{kg/m}^3$, $\mu = 3.5 \times 10^{-5} \, \text{Pa·s}$) with catalyst particles ($\rho_s = 1500 \, \text{kg/m}^3$) at an inlet velocity of $v_{\text{in}} = 20 \, \text{m/s}$. Find the cut diameter and the collection efficiency for a 15 μm particle.

**Cut diameter:**
$$d_{50} = \sqrt{\frac{9 \times 3.5\times10^{-5} \times 0.25}{5 \times \pi \times 1500 \times 20}} = \sqrt{\frac{7.875\times10^{-5}}{471{,}239}} = \sqrt{1.67\times10^{-10}} = 1.29\times10^{-5} \, \text{m} = 12.9 \, \mu\text{m}$$

**Collection efficiency for 15 μm particles:**
$$\eta = \frac{1}{1 + (12.9/15)^2} = \frac{1}{1 + 0.738} = \frac{1}{1.738} = 0.575 = 57.5\%$$

A single cyclone only captures 57.5% of 15 μm particles — a second-stage cyclone or bag filter is needed for compliance.

## 8. Cyclone Separator Logic

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "in", "data": { "label": "Gas/Solid Inlet", "icon": "ArrowRight", "description": "Tangential entry." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "vor", "data": { "label": "Centrifugal Vortex", "icon": "RefreshCw", "description": "Forces particles to wall." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "solid", "data": { "label": "Solids Exit", "icon": "Download", "description": "To hopper." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "gas", "data": { "label": "Clean Gas Exit", "icon": "ArrowUp", "description": "Via vortex finder." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "in", "target": "vor", "animated": true },
    { "source": "vor", "target": "solid", "animated": true },
    { "source": "vor", "target": "gas", "animated": true }
  ]
}
```
