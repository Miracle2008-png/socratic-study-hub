# Turbulent Flow and the Friction Factor

Laminar shell balance results are elegant but apply only when $Re < 2100$. The vast majority of industrial pipe flows — pumping crude oil through pipelines, pushing cooling water through heat exchangers — operate in the **turbulent regime** ($Re > 4000$). Turbulence demands a fundamentally different approach.

## 1. The Nature of Turbulence

Turbulent flow is characterised by:
- **Irregular, chaotic fluctuations** in velocity, pressure, and temperature at every point.
- **Eddies** of all sizes — from the pipe diameter down to the Kolmogorov microscale ($\sim 0.1 \, \text{mm}$).
- **Greatly enhanced mixing** — turbulent mass and heat transfer coefficients are orders of magnitude larger than laminar values.

We decompose every flow variable into a time-averaged part and a fluctuating part (Reynolds decomposition):

$$v_z = \bar{v}_z + v_z'$$

The time-averaged equations introduce new stress terms called **Reynolds stresses** ($-\rho \overline{v_r' v_z'}$) that represent turbulent momentum transfer. These cannot be determined from first principles without turbulence models.

## 2. The Darcy-Weisbach Equation

Rather than trying to solve the Reynolds-averaged Navier-Stokes equations, engineers use the **Darcy-Weisbach equation** to relate pressure drop to average velocity for any flow regime:

$$\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho \langle v \rangle^2}{2}$$

Where:
- $f$ = **Darcy friction factor** (dimensionless) — the correlation target
- $L/D$ = pipe length-to-diameter ratio
- $\rho \langle v \rangle^2 / 2$ = dynamic pressure of the flow

Equivalently, for the head loss $h_f$ (in metres of fluid):
$$h_f = f \cdot \frac{L}{D} \cdot \frac{\langle v \rangle^2}{2g}$$

## 3. The Friction Factor: Laminar Region

For laminar flow, the Darcy-Weisbach equation combined with the Hagen-Poiseuille Law gives an exact analytical result:

$$f = \frac{64}{Re} \quad (Re < 2100)$$

This is one of the most important results in fluid mechanics — a perfectly clean hyperbolic relationship with no empirical constants.

## 4. The Friction Factor: Turbulent Region and the Moody Chart

For turbulent flow, $f$ depends on both $Re$ and the **relative roughness** $\varepsilon/D$, where $\varepsilon$ is the average surface roughness height of the pipe wall.

The **Colebrook-White equation** is the industry standard (implicit in $f$):

$$\frac{1}{\sqrt{f}} = -2\log_{10}\left(\frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$

Because $f$ appears on both sides, this must be solved iteratively. For engineering calculations, the explicit **Swamee-Jain approximation** is used:

$$f = \frac{0.25}{\left[\log_{10}\left(\frac{\varepsilon/D}{3.7} + \frac{5.74}{Re^{0.9}}\right)\right]^2}$$

The **Moody Chart** is the graphical representation of $f$ vs. $Re$ for various $\varepsilon/D$ values. Key regions:
- **Laminar:** $f = 64/Re$ (straight line, slope −1 on log-log plot)
- **Transition:** $2100 < Re < 4000$ (unreliable, avoid in design)
- **Turbulent smooth pipe:** $f$ decreases with $Re$ (Blasius: $f = 0.316 Re^{-0.25}$ for $Re < 10^5$)
- **Fully rough (complete turbulence):** $f$ becomes constant, independent of $Re$

$$f_{\infty} = \left[\frac{1}{-2\log_{10}(\varepsilon/D / 3.7)}\right]^2$$

## 5. Minor Losses

Real piping systems contain fittings — valves, elbows, tees, reducers. These introduce additional pressure losses called **minor losses**, expressed using a loss coefficient $K_L$:

$$\Delta P_{\text{minor}} = K_L \frac{\rho \langle v \rangle^2}{2}$$

Alternatively, minor losses are expressed as **equivalent lengths** $L_e$, the straight pipe length that would give the same loss. A gate valve fully open has $K_L \approx 0.2$; a globe valve fully open has $K_L \approx 10$.

Total system pressure drop:
$$\Delta P_{\text{total}} = \left(f\frac{L}{D} + \sum K_L\right) \frac{\rho \langle v \rangle^2}{2}$$

## 6. Worked Example: Pipeline Pressure Drop

**Problem:** Water ($\mu = 1.0 \times 10^{-3} \, \text{Pa·s}$, $\rho = 998 \, \text{kg/m}^3$) flows at $Q = 0.02 \, \text{m}^3/\text{s}$ through a $100 \, \text{m}$ horizontal commercial steel pipe ($D = 0.1 \, \text{m}$, $\varepsilon = 4.6 \times 10^{-5} \, \text{m}$). Calculate the pressure drop.

**Step 1 — Average velocity:**
$$\langle v \rangle = \frac{Q}{\pi R^2} = \frac{0.02}{\pi (0.05)^2} = 2.55 \, \text{m/s}$$

**Step 2 — Reynolds number:**
$$Re = \frac{998 \times 2.55 \times 0.1}{1.0 \times 10^{-3}} = 254,490 \quad \text{(turbulent)}$$

**Step 3 — Relative roughness:**
$$\varepsilon/D = 4.6 \times 10^{-4}$$

**Step 4 — Friction factor (Swamee-Jain):**
$$f = \frac{0.25}{\left[\log_{10}\!\left(\frac{4.6\times10^{-4}}{3.7} + \frac{5.74}{(254490)^{0.9}}\right)\right]^2} \approx 0.0182$$

**Step 5 — Pressure drop:**
$$\Delta P = 0.0182 \times \frac{100}{0.1} \times \frac{998 \times 2.55^2}{2} = 18.2 \times 3245 \approx 59{,}000 \, \text{Pa} = 59 \, \text{kPa}$$

## 7. Turbulent Flow & Friction

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "dw", "data": { "label": "Darcy-Weisbach", "icon": "Droplet", "description": "Pressure drop eq." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "lam", "data": { "label": "Laminar f", "icon": "TrendingDown", "description": "f = 64/Re" }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "turb", "data": { "label": "Turbulent f", "icon": "Activity", "description": "Colebrook/Swamee-Jain." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "moody", "data": { "label": "Moody Chart", "icon": "BarChart2", "description": "Visualizes friction factor." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "minor", "data": { "label": "Minor Losses", "icon": "Settings", "description": "Valves & Fittings." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "dw", "target": "lam", "animated": true },
    { "source": "dw", "target": "turb", "animated": true },
    { "source": "turb", "target": "moody", "animated": true },
    { "source": "moody", "target": "minor", "animated": true }
  ]
}
```
