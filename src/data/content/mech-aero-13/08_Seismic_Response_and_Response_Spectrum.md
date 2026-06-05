# Seismic Response and Response Spectrum Analysis

Earthquakes subject structures to **base acceleration** — the ground beneath the building accelerates chaotically. The resulting structural response depends on both the earthquake's frequency content and the building's dynamic properties. **Response Spectrum Analysis (RSA)** is the industry-standard method for seismic structural design.

## 1. Equation of Motion Under Ground Excitation

Let $u_g(t)$ = ground displacement (measured absolute), $x(t)$ = structural displacement relative to ground.

The absolute displacement of a mass on a SDOF system is $u_g + x$. Applying Newton's Second Law to the mass (in the absolute frame):
$$m(\ddot{u}_g + \ddot{x}) + c\dot{x} + kx = 0$$
$$m\ddot{x} + c\dot{x} + kx = -m\ddot{u}_g(t)$$

The earthquake enters as an **effective force** $F_{eff}(t) = -m\ddot{u}_g(t)$ — the mass experiences the ground acceleration as an inertial body force. This is mathematically identical to applying a direct force $-m\ddot{u}_g$ to the mass of a fixed-base system.

## 2. The Response Spectrum

For a given earthquake ground acceleration record $\ddot{u}_g(t)$, the **spectral displacement** $S_d(T, \zeta)$ is the maximum relative displacement of a SDOF system with period $T = 2\pi/\omega_n$ and damping $\zeta$:
$$S_d(T, \zeta) = \max_t |x(t)|$$

Plotting $S_d$ vs. $T$ for all possible SDOF systems gives the **Displacement Response Spectrum** — a design tool that encapsulates the entire earthquake's dynamic demand into a single curve.

Spectral acceleration: $S_a = \omega_n^2 S_d$. The **Acceleration Response Spectrum** $S_a(T)$ is what structural codes (IBC, Eurocode 8) publish as **design spectra** — standardized smooth curves representing the envelope of many historical earthquakes.

## 3. Response Spectrum Analysis of MDOF Structures

**Step 1:** Compute the natural frequencies $\omega_i$ and mode shapes $\{X\}^{(i)}$.

**Step 2:** For each mode $i$, compute the **Modal Participation Factor**:
$$\Gamma_i = \frac{\{X\}^{(i)T}[M]\{1\}}{M_{ri}}$$

**Step 3:** The peak response of each mode to the earthquake is:
$$\{x\}_{max}^{(i)} = \Gamma_i \cdot S_d(T_i) \cdot \{X\}^{(i)}$$

**Step 4:** Combine modal peak responses using **SRSS** (Square Root of Sum of Squares):
$$\{x\}_{total} \approx \sqrt{\sum_i (\{x\}_{max}^{(i)})^2}$$

SRSS is valid when natural frequencies are well-separated. The more accurate **CQC** (Complete Quadratic Combination) rule handles closely-spaced modes.

**Critical caveat:** RSA gives the statistical maximum response, not the time history. It cannot give the sign of the response or temporal correlations between DOF — for that, full **time history analysis** with actual ground motion records is required.
