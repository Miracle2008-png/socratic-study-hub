# Nonlinear Vibrations

All vibration analysis so far has assumed **linearity**: springs obey $F = kx$ exactly, damping is viscous ($F = c\dot{x}$), and all deflections are small. Real physical systems inevitably deviate from linearity, sometimes producing behaviors that linear theory predicts are impossible — yet are routinely observed in practice.

## 1. Sources of Nonlinearity

**Geometric nonlinearity:** At large amplitudes, a cantilever beam's geometric stiffness changes as it deforms. The natural frequency becomes amplitude-dependent.

**Material nonlinearity:** Metal springs can plastically deform. Rubber stiffness is amplitude and frequency dependent.

**Contact and clearance:** Gear backlash, bearing races, and mechanical stops create strongly nonlinear force-displacement relationships — zero stiffness in the gap, high stiffness on contact.

**Coulomb (dry) friction:** Friction force is constant in magnitude regardless of velocity: $F_d = \mu_k N \cdot \text{sign}(\dot{x})$. This is a highly nonlinear dissipation mechanism.

**Geometric stiffening:** Membranes, cables, and rotating structures can stiffen significantly under tension.

## 2. The Duffing Oscillator

The classic model of a nonlinear vibration is the **Duffing equation**:
$$m\ddot{x} + c\dot{x} + kx + \epsilon x^3 = F_0\cos(\Omega t)$$

The $\epsilon x^3$ term represents a cubic hardening ($\epsilon > 0$) or softening ($\epsilon < 0$) spring.

**Hardening spring ($\epsilon > 0$):** Natural frequency increases with amplitude. The resonance peak bends to the right. The frequency response curve becomes multi-valued — **three coexisting solutions exist** for some forcing frequencies. Only two of these are stable; the jump from one stable branch to the other creates the **jump phenomenon** — a sudden discontinuous change in vibration amplitude when sweeping frequency.

**Softening spring ($\epsilon < 0$):** Resonance peak bends left. Also shows jump phenomenon.

## 3. Chaotic Vibration

For certain combinations of nonlinearity, forcing amplitude, and damping, the Duffing oscillator exhibits **deterministic chaos**: the response is completely determined by Newton's laws, yet is exquisitely sensitive to initial conditions and appears random.

**Lyapunov exponents** quantify the rate of divergence of nearby trajectories. Positive Lyapunov exponents indicate chaos.

**Phase portraits** and **Poincaré sections** (sampling the trajectory once per forcing period) visualize the attractor structure:
- Periodic response: Poincaré section is discrete points.
- Quasi-periodic: Closed curve.
- Chaotic: Dense fractal structure — the **strange attractor**.

## 4. Practical Implications

Nonlinear vibrations are not merely academic. Engineering consequences include:
- **Softening joints** causing flutter to occur at lower airspeed than linear prediction.
- **Gear rattle** from backlash nonlinearity generating broadband noise.
- **Subharmonic resonance**: A system can resonate at fractions of the forcing frequency ($\Omega/2$, $\Omega/3$) — impossible in linear theory — exciting structural modes that linear analysis says are never excited.
- **Internal resonance**: Energy transfer between modes when natural frequencies are in integer ratios ($\omega_2 \approx 3\omega_1$), causing unexpected large-amplitude response in modes that are not directly excited.
