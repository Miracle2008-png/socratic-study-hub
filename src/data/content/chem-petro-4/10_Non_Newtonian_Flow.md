# Non-Newtonian Flow in Process Industries

The vast majority of process fluids — polymer melts, slurries, foams, suspensions, emulsions, biological fluids — do not obey Newton's Law of Viscosity. These are **non-Newtonian fluids**, and their behaviour profoundly affects pump sizing, pipe design, mixer selection, and process economics.

## 1. Classification of Non-Newtonian Fluids

All fluids can be classified by their shear stress ($\tau$) vs. shear rate ($\dot{\gamma} = dv/dy$) relationship:

### Time-Independent Fluids
| Type | Behaviour | Examples |
|------|-----------|---------|
| **Power-law (Ostwald-de Waele)** | $\tau = K\dot{\gamma}^n$ | Polymer solutions, blood plasma |
| **Bingham plastic** | $\tau = \tau_0 + \mu_p\dot{\gamma}$ (yield stress) | Drilling mud, toothpaste, mayonnaise |
| **Herschel-Bulkley** | $\tau = \tau_0 + K\dot{\gamma}^n$ (combines both) | Cement slurries, complex muds |
| **Dilatant (shear-thickening)** | $n > 1$ in power law | Dense starch suspensions, wet sand |
| **Pseudoplastic (shear-thinning)** | $n < 1$ in power law | Most polymer melts, ketchup |

### Time-Dependent Fluids
- **Thixotropic**: Viscosity decreases with time at constant shear (gels, paints)
- **Rheopectic**: Viscosity increases with time (rare; some lubricants)

### Viscoelastic Fluids
Exhibit both viscous and elastic behaviour — they flow but also store energy elastically (rubber-like rebound). Examples: polymer melts, biological tissues.

## 2. Power-Law Fluid Flow in Pipes

For a power-law fluid ($\tau = K\dot{\gamma}^n$), the shell momentum balance still applies but with a modified constitutive equation. The result for the velocity profile:

$$v_z(r) = \frac{n}{n+1}\left(\frac{\Delta P}{2KL}\right)^{1/n} \left[R^{(n+1)/n} - r^{(n+1)/n}\right]$$

Note: when $n = 1$ and $K = \mu$, this correctly reduces to the Newtonian parabolic profile.

The volumetric flow rate (Rabinowitsch-Mooney equation):

$$Q = \frac{n\pi}{3n+1}\left(\frac{\Delta P}{2KL}\right)^{1/n} R^{(3n+1)/n}$$

The **apparent viscosity** (effective viscosity at a given shear rate):

$$\mu_{\text{app}}(\dot{\gamma}) = K\dot{\gamma}^{n-1}$$

For pseudoplastic fluids ($n < 1$): apparent viscosity **decreases** as shear rate increases — the fluid thins at high flow rates.

## 3. Bingham Plastics: Plug Flow Zone

Bingham plastics exhibit a **yield stress** $\tau_0$ — the fluid does not move at all until a minimum shear stress is applied. Below the yield stress, the material behaves as a rigid solid.

In pipe flow, this creates a **plug flow zone** near the pipe centre where $\tau < \tau_0$. The plug radius:

$$r_0 = \frac{2L\tau_0}{\Delta P}$$

The fluid only flows in the **annular zone** $r_0 < r < R$, where $\tau > \tau_0$. The velocity profile:

$$v_z(r) = \frac{\Delta P}{4\mu_p L}(R^2 - r^2) - \frac{\tau_0}{\mu_p}(R - r) \quad \text{for } r > r_0$$
$$v_z(r) = v_{\text{plug}} \quad \text{for } r \leq r_0$$

**Buckingham-Reiner equation** for volumetric flow rate:

$$Q = \frac{\pi R^4 \Delta P}{8\mu_p L}\left[1 - \frac{4}{3}\frac{r_0}{R} + \frac{1}{3}\left(\frac{r_0}{R}\right)^4\right]$$

## 4. Generalised Reynolds Number for Non-Newtonian Fluids

The standard Reynolds number must be modified for non-Newtonian fluids. The **Metzner-Reed generalised Reynolds number**:

$$Re_{MR} = \frac{D^n \langle v \rangle^{2-n} \rho}{K' 8^{n-1}}$$

Where $K'$ and $n$ are parameters from the generalised power-law fit. The transition from laminar to turbulent still occurs at $Re_{MR} \approx 2100$, and the laminar friction factor is still:

$$f = \frac{64}{Re_{MR}}$$

## 5. Practical Engineering: Sizing Pumps for Non-Newtonian Fluids

Key considerations when pumping non-Newtonian fluids:

**Do not use the standard Darcy-Weisbach equation** with a constant viscosity — the apparent viscosity varies with shear rate and hence with velocity and pipe diameter.

**Procedure:**
1. Measure the flow curve $\tau$ vs. $\dot{\gamma}$ using a rotational viscometer
2. Fit the appropriate rheological model (power law, Bingham, etc.)
3. Calculate $\Delta P$ using the appropriate analytical or numerical solution
4. Account for **time-dependent effects** — thixotropic fluids may be gel-like at start-up and require high start-up torques
5. Check for **yield stress effects** — Bingham fluids may not restart flow after shutdown without pressure surges

## 6. Worked Example: Pressure Drop for a Drilling Mud

**Problem:** A Bingham plastic drilling mud ($\tau_0 = 8 \, \text{Pa}$, $\mu_p = 0.025 \, \text{Pa·s}$, $\rho = 1200 \, \text{kg/m}^3$) flows at $Q = 0.005 \, \text{m}^3/\text{s}$ through a drill pipe of $D = 0.1 \, \text{m}$, $L = 2000 \, \text{m}$.

**Step 1 — Average velocity:**
$$\langle v \rangle = \frac{Q}{\pi R^2} = \frac{0.005}{\pi(0.05)^2} = 0.637 \, \text{m/s}$$

**Step 2 — Check if flow occurs** (minimum $\Delta P$ to overcome yield stress):
$$\Delta P_{\text{min}} = \frac{2L\tau_0}{R} = \frac{2 \times 2000 \times 8}{0.05} = 640{,}000 \, \text{Pa} = 640 \, \text{kPa}$$

This is the minimum pressure to initiate flow — a significant start-up consideration.

**Step 3 — Approximate as Newtonian** (for fully flowing mud, $\tau \gg \tau_0$, use plastic viscosity):
$$\Delta P_{\text{viscous}} \approx \frac{32 \mu_p L \langle v \rangle}{D^2} = \frac{32 \times 0.025 \times 2000 \times 0.637}{(0.1)^2} = \frac{1019}{0.01} \approx 102{,}000 \, \text{Pa}$$

**Total approximate pressure drop** (yield + viscous):
$$\Delta P \approx \Delta P_{\text{min}} + \Delta P_{\text{viscous}} \approx 640 + 102 = 742 \, \text{kPa}$$

The yield stress contribution dominates, indicating the mud is highly gel-like — typical of weighted drilling muds designed to carry drill cuttings.

## 7. Non-Newtonian Classes Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "ti", "data": { "label": "Time-Independent", "icon": "Clock", "description": "Power-law, Bingham." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "thin", "data": { "label": "Shear-Thinning", "icon": "Minimize2", "description": "Pseudoplastic." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "thick", "data": { "label": "Shear-Thickening", "icon": "Maximize2", "description": "Dilatant." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "td", "data": { "label": "Time-Dependent", "icon": "Activity", "description": "Thixotropic." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "ti", "target": "thin", "animated": true },
    { "source": "ti", "target": "thick", "animated": true }
  ]
}
```
