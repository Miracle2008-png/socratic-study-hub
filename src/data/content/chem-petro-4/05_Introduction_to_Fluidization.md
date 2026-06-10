# Introduction to Fluidization

Fluidization is the process by which a bed of solid particles is transformed into a fluid-like state by passing a gas or liquid upward through it. Fluidized beds are among the most important reactor and contactor configurations in the chemical and petroleum industries, used in fluid catalytic cracking (FCC), Fischer-Tropsch synthesis, polyethylene production, coal combustion, and pharmaceutical coating.

## 1. The Fixed Bed — Before Fluidization

When fluid flows upward through a packed bed of particles at low velocity, the particles remain stationary. This is the **fixed bed** regime. The pressure drop across a fixed bed is described by the **Ergun Equation**, the fundamental result for packed bed momentum transfer:

$$\frac{\Delta P}{L} = 150 \frac{\mu (1-\varepsilon)^2}{\varepsilon^3 d_p^2} \langle v_s \rangle + 1.75 \frac{\rho (1-\varepsilon)}{\varepsilon^3 d_p} \langle v_s \rangle^2$$

Where:
- $\varepsilon$ = bed **void fraction** (volume fraction of empty space, typically 0.35–0.50)
- $d_p$ = particle diameter (m)
- $\langle v_s \rangle$ = **superficial velocity** = volumetric flow rate / bed cross-section area (m/s)
- The first term = **Blake-Kozeny term** (viscous/laminar contribution, dominates at low $v_s$)
- The second term = **Burke-Plummer term** (inertial/turbulent contribution, dominates at high $v_s$)

**Superficial velocity** is the velocity the fluid would have if the bed were empty — it is NOT the actual interstitial velocity, which is $v_i = v_s / \varepsilon$.

## 2. Minimum Fluidization Velocity

As the upward fluid velocity increases, the pressure drop rises according to the Ergun equation — until a critical point is reached where the **drag force on the particles exactly equals their weight**. At this point, the bed lifts off and begins to fluidize. The corresponding velocity is the **minimum fluidization velocity $v_{mf}$**.

**Force balance at minimum fluidization:**

$$\Delta P = (1 - \varepsilon_{mf})(\rho_s - \rho_f) g L$$

(Pressure drop = net weight of particles per unit bed area)

Setting this equal to the Ergun equation and solving for $v_{mf}$ requires knowing $\varepsilon_{mf}$ (void fraction at minimum fluidization, typically 0.40–0.45 for most particles).

The dimensionless **Archimedes number** $Ar$ (also called the Galileo number) characterises the balance between buoyancy and viscous drag:

$$Ar = \frac{d_p^3 \rho_f (\rho_s - \rho_f) g}{\mu^2}$$

For small particles (viscous regime, $Ar < 10^3$):
$$v_{mf} \approx \frac{d_p^2 (\rho_s - \rho_f) g}{150 \mu} \cdot \frac{\varepsilon_{mf}^3}{(1 - \varepsilon_{mf})}$$

## 3. The Three Regimes of Fluidization

Beyond $v_{mf}$, different fluidization regimes emerge depending on gas velocity and particle type:

### Regime I: Particulate (Smooth) Fluidization — $v > v_{mf}$
Typical of **liquid-solid** systems and very fine gas-solid systems. The bed expands uniformly and smoothly as velocity increases. The bed is homogeneous with no bubbles.

### Regime II: Bubbling Fluidization — $v > v_{mb}$
Typical of most **gas-solid** fluidized beds at moderate velocities. Gas rises through the bed as discrete bubbles (like boiling). The bed has two phases:
- **Bubble phase**: fast-rising pockets of nearly pure gas
- **Emulsion phase**: slow-moving, dense suspension of gas and particles near minimum fluidization

Bubbles coalesce and grow as they rise. When bubbles reach the same diameter as the bed, **slugging** occurs — the bed is periodically lifted and dropped in chunks.

### Regime III: Turbulent Fluidization — $v > v_c$
At even higher velocities, bubbles break apart. The bed becomes a turbulent, churning mixture. Particle entrainment from the bed top (elutriation) becomes significant.

### Regime IV: Pneumatic Transport (Fast Fluidization) — $v \gg v_t$
The gas velocity exceeds the **terminal velocity** $v_t$ of individual particles. All particles are continuously carried out the top — used in **riser reactors** (FCC risers) and **circulating fluidized beds (CFB)**.

## 4. Terminal Velocity of a Single Particle

The terminal (free-fall) velocity $v_t$ is found from the balance of drag and gravity on a single particle:

$$v_t = \sqrt{\frac{4 d_p (\rho_s - \rho_f) g}{3 \rho_f C_D}}$$

Where the drag coefficient $C_D$ depends on the **particle Reynolds number** $Re_p = \rho_f v_t d_p / \mu$:

| Regime | Condition | $C_D$ | Result |
|--------|-----------|--------|--------|
| Stokes | $Re_p < 0.5$ | $24/Re_p$ | $v_t = \frac{d_p^2 (\rho_s - \rho_f)g}{18\mu}$ |
| Intermediate | $0.5 < Re_p < 500$ | $10/Re_p^{0.5}$ | Iterative or use Haider-Levenspiel |
| Newton | $500 < Re_p < 2 \times 10^5$ | $0.44$ | $v_t = 1.74\sqrt{\frac{d_p(\rho_s-\rho_f)g}{\rho_f}}$ |

## 5. Worked Example: Minimum Fluidization of Catalyst Particles

**Problem:** FCC catalyst particles ($d_p = 70 \, \mu\text{m}$, $\rho_s = 1500 \, \text{kg/m}^3$) are fluidized with air ($\rho_f = 1.2 \, \text{kg/m}^3$, $\mu = 1.8 \times 10^{-5} \, \text{Pa·s}$) at atmospheric pressure. Assume $\varepsilon_{mf} = 0.42$. Find $v_{mf}$.

**Archimedes number:**
$$Ar = \frac{(70\times10^{-6})^3 \times 1.2 \times (1500 - 1.2) \times 9.81}{(1.8\times10^{-5})^2} = \frac{3.43\times10^{-13} \times 17,638}{3.24\times10^{-10}} = 18.7$$

Small $Ar$ → Stokes regime. Using the viscous Ergun approximation:

$$v_{mf} = \frac{d_p^2 (\rho_s - \rho_f) g \varepsilon_{mf}^3}{150 \mu (1 - \varepsilon_{mf})} = \frac{(70\times10^{-6})^2 \times 1499 \times 9.81 \times (0.42)^3}{150 \times 1.8\times10^{-5} \times 0.58}$$

$$= \frac{4.9\times10^{-9} \times 1499 \times 9.81 \times 0.0741}{150 \times 1.8\times10^{-5} \times 0.58} = \frac{5.34\times10^{-6}}{1.566\times10^{-3}} \approx 0.0034 \, \text{m/s} = 3.4 \, \text{mm/s}$$

This is a very low velocity — consistent with fine, light FCC catalyst particles that are easily fluidized.
