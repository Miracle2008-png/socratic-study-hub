# Slurry Transport and Solid-Liquid Flow

The transport of solid-liquid mixtures through pipelines is a routine operation in mineral processing, dredging, coal gasification, pharmaceutical manufacturing, and petrochemical plants. Slurry pipelines can transport hundreds of kilometres — iron ore slurries from Brazilian mines to ports, coal slurries across mountain ranges. The engineering of these systems requires combining particle mechanics, rheology, and piping hydraulics.

## 1. Classification of Slurry Flow

The behaviour of a slurry depends critically on particle size and density difference ($\rho_s - \rho_L$). Two broad regimes exist:

### Homogeneous (Non-Settling) Slurries
- Very fine particles ($d_p < 50 \, \mu\text{m}$)
- Particles remain uniformly suspended — the slurry behaves as a **pseudo-homogeneous fluid** with effective viscosity $\mu_{\text{eff}}$ and effective density $\rho_{\text{eff}}$
- Standard pipe flow equations apply using $\mu_{\text{eff}}$ and $\rho_{\text{eff}}$

### Heterogeneous (Settling) Slurries
- Coarser particles ($d_p > 100 \, \mu\text{m}$)
- Significant concentration gradients across the pipe cross-section
- Requires turbulence to keep particles suspended

## 2. Effective Properties of Homogeneous Slurries

**Effective density** (simple volume average):
$$\rho_m = \rho_L(1 - C_v) + \rho_s C_v = \rho_L + C_v(\rho_s - \rho_L)$$

Where $C_v$ is the volumetric concentration of solids.

**Einstein equation** for effective viscosity of dilute suspensions ($C_v < 0.05$):
$$\mu_m = \mu_L(1 + 2.5 C_v)$$

**Thomas equation** for moderate concentrations ($C_v < 0.25$):
$$\mu_m = \mu_L(1 + 2.5 C_v + 10.05 C_v^2 + 0.00273 e^{16.6 C_v})$$

**Krieger-Dougherty equation** for concentrated suspensions (approaching maximum packing $C_{v,\text{max}}$):
$$\mu_m = \mu_L\left(1 - \frac{C_v}{C_{v,\text{max}}}\right)^{-2.5 C_{v,\text{max}}}$$

## 3. Critical Deposition Velocity

For heterogeneous slurries, the **critical deposition velocity $v_c$** is the minimum velocity at which all particles remain in suspension. Below $v_c$, particles settle and form a stationary or sliding bed — catastrophic for pipeline operation (plugging, wear, equipment failure).

The **Durand-Condolios equation**:

$$v_c = F_L \sqrt{2gD\left(\frac{\rho_s - \rho_L}{\rho_L}\right)}$$

Where $F_L$ is the **Durand factor** (0.9–1.8), which depends on particle size and concentration (read from the Durand nomogram or correlated empirically).

For a conservative design: operate at $\langle v \rangle \geq 1.2 v_c$

## 4. Pressure Drop for Heterogeneous Slurries (Durand Method)

For heterogeneous slurries flowing at velocity $v$ above the critical velocity, excess pressure drop above that of the carrier liquid alone:

$$\frac{\Delta P_m - \Delta P_L}{\Delta P_L C_v} = 180\left[\frac{v^2 \sqrt{C_D}}{gD(\rho_s/\rho_L - 1)}\right]^{-1.5}$$

Where $C_D$ is the drag coefficient of the particle at its terminal velocity. This empirical correlation works well for sands and minerals in water over a wide range of conditions.

## 5. Wear and Erosion in Slurry Piping

Solid particles in a fast-moving slurry cause **erosive wear** on pipe walls and fittings. Wear rate is approximately:

$$\dot{W} \propto C_v \rho_s v^n d_p^m$$

Where $n \approx 2.5$–$3.5$ for metals. The severe velocity dependence means:
- **Double the velocity → 6–10× the wear rate**
- **Reduce velocity below $v_c$ → pipe plugging**

This creates a narrow operating window — fast enough to avoid deposition, slow enough to limit wear.

Wear is most severe at:
- **Pipe bends and elbows** (particles impact the outer wall due to inertia)
- **Sudden expansions and contractions** (flow separation creates particle impingement)
- **Valves and pumps** (sliding surfaces with high contact stress)

**Mitigations**: use wear-resistant linings (rubber, ceramic, hardened steel), large-radius bends, hard-facing on pump impellers.

## 6. Worked Example: Slurry Pipeline Design

**Problem:** An iron ore slurry ($\rho_s = 4500 \, \text{kg/m}^3$, $d_p = 0.2 \, \text{mm}$, $C_v = 0.25$) is pumped through a $D = 0.3 \, \text{m}$ pipeline. The carrier is water ($\rho_L = 1000 \, \text{kg/m}^3$, $\mu_L = 0.001 \, \text{Pa·s}$). The Durand factor is $F_L = 1.34$.

**(a) Critical deposition velocity:**
$$v_c = 1.34\sqrt{2 \times 9.81 \times 0.3 \times \frac{4500 - 1000}{1000}} = 1.34\sqrt{2 \times 9.81 \times 0.3 \times 3.5} = 1.34\sqrt{20.6} = 1.34 \times 4.54 = 6.08 \, \text{m/s}$$

Design velocity: $\langle v \rangle = 1.2 \times 6.08 = 7.3 \, \text{m/s}$ (above critical, particles stay suspended)

**(b) Mixture density:**
$$\rho_m = 1000(1 - 0.25) + 4500(0.25) = 750 + 1125 = 1875 \, \text{kg/m}^3$$

**(c) Check — this is a high-density, heterogeneous slurry. Power per unit length:**
$$\dot{W}/L = \Delta P/L \times Q = \frac{\Delta P}{L} \times \frac{\pi D^2}{4} \times \langle v \rangle$$

Using Darcy-Weisbach with $f \approx 0.015$ (turbulent, smooth): $\Delta P/L = 0.015 \times \frac{1875 \times 7.3^2}{2 \times 0.3} = 0.015 \times \frac{99{,}913}{0.6} = 2498 \, \text{Pa/m}$

Total pumping power for $L = 100 \, \text{km}$: $P = 2498 \times 10^5 \times \frac{\pi(0.3)^2}{4} \times 7.3 \approx 128 \, \text{MW}$ — typical of a major mineral slurry pipeline.
