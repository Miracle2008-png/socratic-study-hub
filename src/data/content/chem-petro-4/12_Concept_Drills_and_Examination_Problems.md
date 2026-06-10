# Concept Drills and Examination Problems

This section consolidates the core concepts of momentum transfer and fluidization into structured examination-style problems. Each problem is designed to test not just calculation ability but physical reasoning — the hallmark of a competent chemical engineer.

---

## Drill 1: Shell Balance from First Principles

**Problem:** A viscous Newtonian fluid ($\mu = 0.8 \, \text{Pa·s}$) flows between two infinite horizontal plates separated by distance $2H = 4 \, \text{cm}$. The upper plate moves at velocity $U = 0.1 \, \text{m/s}$ while the lower plate is stationary. There is no imposed pressure gradient ($dP/dx = 0$). This is **plane Couette flow**.

**(a)** Derive the velocity profile using a shell momentum balance.
**(b)** Find the shear stress exerted on the upper plate.
**(c)** If a pressure gradient $dP/dx = -500 \, \text{Pa/m}$ is now applied in the flow direction, write (without solving) the modified ODE and describe qualitatively how the velocity profile changes.

**Solution:**

**(a)** Shell balance on a layer of thickness $\Delta y$ at height $y$:

$$(\tau_{yx}|_{y+\Delta y} - \tau_{yx}|_y) \cdot W \cdot L = 0 \implies \frac{d\tau_{yx}}{dy} = 0$$

With no pressure gradient, $\tau_{yx} = \text{const}$. Using Newton's law $\tau = \mu \frac{dv_x}{dy}$:

$$\frac{d^2 v_x}{dy^2} = 0 \implies v_x = C_1 y + C_2$$

Boundary conditions: $v_x(0) = 0 \implies C_2 = 0$; $v_x(2H) = U \implies C_1 = U/(2H)$

$$\boxed{v_x(y) = \frac{U}{2H} y = 2.5y \, \text{m/s}}$$

Linear profile — the velocity increases linearly from zero to $U$.

**(b)** Shear stress (constant throughout):
$$\tau = \mu \frac{dv_x}{dy} = \mu \frac{U}{2H} = 0.8 \times \frac{0.1}{0.04} = 2.0 \, \text{Pa}$$

**(c)** With pressure gradient, the shell balance gives:
$$\frac{d\tau}{dy} = \frac{dP}{dx} \implies \mu\frac{d^2v_x}{dy^2} = \frac{dP}{dx} = -500 \, \text{Pa/m}$$

This introduces a parabolic term (Poiseuille component) superimposed on the linear Couette profile. The velocity profile becomes asymmetric — higher velocities near the upper moving plate and a slight concavity towards the lower plate.

---

## Drill 2: Moody Chart Iteration

**Problem:** Water ($\rho = 998 \, \text{kg/m}^3$, $\mu = 10^{-3} \, \text{Pa·s}$) must flow at $Q = 0.05 \, \text{m}^3/\text{s}$ from reservoir A to reservoir B elevated $h = 20 \, \text{m}$ above A, through $L = 500 \, \text{m}$ of cast iron pipe ($\varepsilon = 0.26 \, \text{mm}$). Find the pipe diameter $D$ required.

**This is an implicit problem** — $D$ appears in $Re$, $\varepsilon/D$, $f$, and $\Delta P$ simultaneously.

**Procedure (iterative):**

The energy balance (no pump, $v_1 \approx v_2 \approx 0$ at reservoir surfaces):
$$h = h_f = f \frac{L}{D} \frac{\langle v \rangle^2}{2g}$$

With $\langle v \rangle = 4Q/(\pi D^2)$:
$$20 = f \frac{500}{D} \frac{(4 \times 0.05)^2}{2 \times 9.81 \times \pi^2 D^4} = f \frac{500}{D} \frac{0.01013}{D^4} = \frac{5.07f}{D^5}$$

**Guess $f = 0.02$** (reasonable turbulent value):
$$D^5 = \frac{5.07 \times 0.02}{20} = 5.07\times10^{-3} \implies D = (5.07\times10^{-3})^{0.2} = 0.218 \, \text{m}$$

**Check $Re$ and $\varepsilon/D$:**
$$\langle v \rangle = \frac{4(0.05)}{\pi(0.218)^2} = 1.34 \, \text{m/s}, \quad Re = \frac{998 \times 1.34 \times 0.218}{10^{-3}} = 291{,}000$$
$$\varepsilon/D = 0.00026/0.218 = 1.19\times10^{-3}$$

**Colebrook to update $f$:**
$$\frac{1}{\sqrt{f}} = -2\log\!\left(\frac{1.19\times10^{-3}}{3.7} + \frac{2.51}{291000\sqrt{f}}\right) \implies f \approx 0.0205$$

Second iteration with $f = 0.0205$: $D = 0.219 \, \text{m}$. Converged.

**Select standard pipe size:** $D = 0.25 \, \text{m}$ (10-inch nominal), which provides margin and reduces velocity.

---

## Drill 3: Fluidization Regime Diagnosis

**Problem:** Identify the fluidization regime for each condition below. Given: FCC catalyst $d_p = 65 \, \mu\text{m}$, $\rho_s = 1480 \, \text{kg/m}^3$; air at 500°C: $\rho_f = 0.44 \, \text{kg/m}^3$, $\mu = 3.5\times10^{-5} \, \text{Pa·s}$. Calculate $v_{mf}$ and $v_t$ first.

**Archimedes number:**
$$Ar = \frac{(65\times10^{-6})^3 \times 0.44 \times (1480 - 0.44) \times 9.81}{(3.5\times10^{-5})^2} = 11.6$$

**Minimum fluidization ($Ar < 100$, viscous regime):**
$$v_{mf} = \frac{Ar \mu}{18 \rho_f d_p} = \frac{11.6 \times 3.5\times10^{-5}}{18 \times 0.44 \times 65\times10^{-6}} = 0.0079 \, \text{m/s} \approx 7.9 \, \text{mm/s}$$

**Terminal velocity (Stokes regime, $Re_p \ll 1$):**
$$v_t = \frac{d_p^2 (\rho_s - \rho_f) g}{18\mu} = \frac{(65\times10^{-6})^2 \times 1480 \times 9.81}{18 \times 3.5\times10^{-5}} = 0.097 \, \text{m/s}$$

**Regime diagnosis:**

| Superficial velocity $v_s$ | Regime |
|---------------------------|--------|
| $v_s < 7.9 \, \text{mm/s}$ | Fixed bed (no fluidization) |
| $7.9 \, \text{mm/s} < v_s < \sim 0.02 \, \text{m/s}$ | Bubbling fluidized bed |
| $0.02 \, \text{m/s} < v_s < 0.05 \, \text{m/s}$ | Turbulent fluidized bed |
| $v_s > 0.097 \, \text{m/s}$ | Pneumatic transport (CFB/riser) |

FCC risers typically operate at $v_s = 5$–$15 \, \text{m/s}}$ — deep in the pneumatic transport regime, consistent with a dilute, high-velocity riser reactor.

---

## Drill 4: Pump NPSH Check

**Problem:** A process pump (NPSH$_R = 3.5 \, \text{m}$) draws water at 80°C ($P_v = 47.4 \, \text{kPa}$, $\rho = 972 \, \text{kg/m}^3$) from an open vented tank. The pump centreline is $3.0 \, \text{m}$ above the water surface. Suction line friction head = $0.8 \, \text{m}$. Is the installation safe?

$$\text{NPSH}_A = \frac{P_{\text{atm}} - P_v}{\rho g} - z_s - h_{f,\text{suction}}$$

$$= \frac{101{,}325 - 47{,}400}{972 \times 9.81} - 3.0 - 0.8 = \frac{53{,}925}{9,535} - 3.8 = 5.66 - 3.8 = 1.86 \, \text{m}$$

Since $\text{NPSH}_A = 1.86 \, \text{m} < \text{NPSH}_R = 3.5 \, \text{m}$, **cavitation will occur**. The installation is **not safe**.

**Remedies:**
1. Lower the pump (reduce $z_s$ to ≤ $5.66 - 3.5 - 0.8 = 1.36 \, \text{m}$ above the tank)
2. Reduce suction line friction (larger diameter, shorter pipe, fewer fittings)
3. Install a booster pump at the tank outlet
4. Lower water temperature to reduce vapour pressure
