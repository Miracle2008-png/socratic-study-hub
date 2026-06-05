---
title: "Longitudinal Dynamics: Phugoid and Short Period"
---

# Longitudinal Dynamics: Phugoid and Short Period

Static stability tells us whether an aircraft will tend to return to equilibrium. **Dynamic stability** tells us *how* it returns — the time history of the response. For longitudinal motion (pitch and speed), two distinct oscillatory modes are present: the **phugoid** and the **short period**.

## 1. Linearized Small-Perturbation Equations

For small perturbations about a symmetric, wings-level trim condition, the 6-DOF equations decouple into:
- **Longitudinal:** Involves $u$ (forward speed), $w$ (vertical speed = $V\alpha$), $q$ (pitch rate), $\theta$ (pitch angle).
- **Lateral-directional:** Involves $v$ (sideslip speed), $p$ (roll rate), $r$ (yaw rate), $\phi$ (roll angle).

The linearized longitudinal equations in matrix form:
$$\begin{pmatrix}\dot{u}\\\dot{\alpha}\\\dot{q}\\\dot{\theta}\end{pmatrix} = \mathbf{A}_{lon} \begin{pmatrix}u\\\alpha\\q\\\theta\end{pmatrix} + \mathbf{B}_{lon}\begin{pmatrix}\delta_e\\\delta_{throttle}\end{pmatrix}$$

The $4\times4$ **system matrix** $\mathbf{A}_{lon}$ is filled with stability derivatives. Its eigenvalues (characteristic roots) reveal the natural modes.

## 2. The Short-Period Mode

The short-period mode involves rapid pitching oscillation at nearly constant speed ($u \approx 0$). The aircraft's nose oscillates up and down while forward speed barely changes.

**Frequency:** High — a typical transport aircraft has a short-period natural frequency $\omega_{SP} \approx 0.5–3$ rad/s (period: 2–12 seconds).

**Damping:** Primarily from pitch rate damping ($C_{m_q}$) and angle-of-attack damping ($C_{m_{\dot\alpha}}$). Well-designed aircraft have damping ratio $\zeta_{SP} \approx 0.3–0.8$.

**Physical origin:** When the aircraft pitches nose-up, the tail moves downward into the airstream, generating an increased downforce that resists the pitch motion. The larger the tail, the higher the pitch damping.

**Flying qualities requirement:** The short-period mode must be adequately damped. An under-damped short period (low $\zeta_{SP}$) makes the aircraft feel "porpoisy" and can cause pilot-induced oscillations (PIO) during precision approaches — the pilot's corrections interact with the short-period response to create an unstable feedback loop.

## 3. The Phugoid Mode

The phugoid is a slow, lightly damped oscillation involving airspeed and altitude. It is essentially a continuous energy exchange between kinetic and potential energy.

**Lanchester's physical explanation:**
1. Aircraft is momentarily flying slightly too fast.
2. Excess speed generates extra lift → aircraft climbs.
3. As it climbs, speed decreases (kinetic energy converts to potential energy).
4. When speed drops below trim speed, lift becomes insufficient → aircraft descends.
5. As it descends, speed builds up again → cycle repeats.

**Frequency:** Very low — typical phugoid period is 60–120 seconds (1–2 minutes). The approximation:
$$\omega_{phugoid} \approx \frac{g\sqrt{2}}{V_{trim}}$$

**Damping:** Very light — $\zeta_{phugoid} \approx 0.02–0.05$. The phugoid takes many minutes to damp out. It is so slow that pilots easily correct it manually by trimming.

**Flying qualities requirement:** Even negative phugoid damping is acceptable for certification, as the mode is so slow pilots can easily manage it. Autopilots handle it automatically.

## 4. The Characteristic Equation

The four longitudinal eigenvalues come in two complex conjugate pairs:
$$\lambda = -\zeta\omega_n \pm i\omega_n\sqrt{1-\zeta^2}$$

For each mode:
- Two poles for the short-period (large $\omega_n$, moderate $\zeta$).
- Two poles for the phugoid (small $\omega_n$, very small $\zeta$).

Plotting these in the complex plane (root locus) shows stable modes in the left half-plane ($Re(\lambda) < 0$) — all eigenvalues must have negative real parts for dynamic stability.
