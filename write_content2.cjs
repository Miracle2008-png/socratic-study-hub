const fs = require('fs');
const path = require('path');

const base = 'src/data/content';
function write(topic, filename, content) {
  const dir = path.join(base, topic);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('wrote', topic + '/' + filename);
}

// ─── THERMODYNAMICS ──────────────────────────────────────────────────────────

write('thermodynamics', '00_Zeroth_First_Law.md', `
# Thermodynamics — Zeroth and First Law

## Basic Concepts

**System**: region of interest (closed, open, or isolated).  
**Surroundings**: everything outside the system.  
**State**: described by intensive properties (T, P, ρ) independent of mass, and extensive properties (U, H, S, V) proportional to mass.

**Thermodynamic equilibrium**: thermal + mechanical + phase + chemical equilibrium simultaneously.

## Zeroth Law

If system A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. This defines **temperature** as a state property.

## First Law — Closed System

$$\\Delta U = Q - W$$

Sign convention: $Q > 0$ heat into system; $W > 0$ work done by system.

**Work** for a quasi-static process:
$$W = \\int_{V_1}^{V_2} P\\,dV$$

**Internal energy** $U$ is a state function — depends only on state, not path.

For an ideal gas: $U = U(T)$ only (Joule's experiment).

## Specific Heats

$$C_v = \\left(\\frac{\\partial u}{\\partial T}\\right)_v,\\quad C_p = \\left(\\frac{\\partial h}{\\partial T}\\right)_P$$

For ideal gas: $C_p - C_v = R$, and $\\gamma = C_p/C_v$.

$$\\Delta u = C_v \\Delta T,\\quad \\Delta h = C_p \\Delta T\\quad\\text{(ideal gas)}$$

## First Law — Open System (Control Volume)

Steady-flow energy equation:
$$\\dot{Q} - \\dot{W}_s = \\dot{m}\\left[(h_2 - h_1) + \\frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)\\right]$$

For adiabatic, no shaft work, negligible KE/PE: $h_1 = h_2$ (throttling, isenthalpic process).

## Enthalpy

$$H = U + PV,\\quad h = u + Pv$$

Enthalpy is conserved in steady-flow processes with no work or heat exchange other than shaft work.
`);

write('thermodynamics', '01_Second_Law_Entropy.md', `
# Second Law and Entropy

## Kelvin-Planck Statement

It is impossible to construct a device that operates in a cycle and produces work while exchanging heat with only one thermal reservoir.

## Clausius Statement

Heat cannot spontaneously flow from a cold body to a hot body.

## Entropy

For a reversible process:
$$dS = \\frac{\\delta Q_{rev}}{T}$$

For any process between states 1 and 2:
$$S_2 - S_1 \\geq \\int_1^2 \\frac{\\delta Q}{T}$$

**Entropy generation** $S_{gen} \\geq 0$ (= 0 for reversible, > 0 for irreversible). This is the second law.

## TdS Relations

$$T\\,dS = dU + P\\,dV = dH - V\\,dP$$

For ideal gas:
$$\\Delta s = C_v \\ln\\frac{T_2}{T_1} + R\\ln\\frac{v_2}{v_1} = C_p\\ln\\frac{T_2}{T_1} - R\\ln\\frac{P_2}{P_1}$$

## Isentropic Process (Ideal Gas)

For $s = $ const and $\\gamma = C_p/C_v$:
$$\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{(\\gamma-1)/\\gamma} = \\left(\\frac{v_1}{v_2}\\right)^{\\gamma-1}$$
$$Pv^\\gamma = \\text{const}$$

## Efficiency Limits

**Carnot efficiency** (maximum possible between $T_H$ and $T_L$):
$$\\eta_{Carnot} = 1 - \\frac{T_L}{T_H}$$

No real engine can exceed Carnot efficiency. All reversible engines operating between the same reservoirs have the same efficiency.

## Third Law

The entropy of a perfect crystal at absolute zero is zero: $S(0\\,\\text{K}) = 0$.
`);

write('thermodynamics', '02_Power_Cycles.md', `
# Power Cycles

## Ideal Rankine Cycle (Steam Power)

Four processes:
1. **1→2** Isentropic compression in pump: $w_p = v_1(P_2 - P_1)$
2. **2→3** Constant-pressure heat addition in boiler: $q_{in} = h_3 - h_2$
3. **3→4** Isentropic expansion in turbine: $w_t = h_3 - h_4$
4. **4→1** Constant-pressure condensation: $q_{out} = h_4 - h_1$

$$\\eta_{Rankine} = \\frac{w_{net}}{q_{in}} = \\frac{(h_3-h_4)-(h_2-h_1)}{h_3-h_2}$$

**Improvements**: superheating (raises T of heat addition), reheating (expands in two stages), regeneration (feed-water heating from turbine bleed steam).

## Ideal Otto Cycle (Petrol Engine)

Two isentropic + two isochoric processes.

$$\\eta_{Otto} = 1 - \\frac{1}{r^{\\gamma-1}},\\quad r = \\frac{V_{max}}{V_{min}}\\text{ (compression ratio)}$$

Efficiency increases with compression ratio. Typical $r \\approx 8$–$12$, $\\eta \\approx 56\\%$ ideal.

## Ideal Diesel Cycle

Isentropic compression, constant-pressure heat addition, isentropic expansion, constant-volume heat rejection.

$$\\eta_{Diesel} = 1 - \\frac{1}{r^{\\gamma-1}}\\cdot\\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)},\\quad r_c = \\frac{V_3}{V_2}\\text{ (cutoff ratio)}$$

For same $r$: $\\eta_{Diesel} < \\eta_{Otto}$, but Diesel operates at higher $r$.

## Ideal Brayton Cycle (Gas Turbine)

Two isentropic + two isobaric processes.

$$\\eta_{Brayton} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}},\\quad r_p = P_{max}/P_{min}$$

Back work ratio $= w_{compressor}/w_{turbine}$ is high (~40–80%): compressor work is significant.

## Refrigeration (Reversed Carnot / Vapour Compression)

$$COP_{refrigerator} = \\frac{Q_L}{W_{net}} = \\frac{h_1 - h_4}{h_2 - h_1}$$
$$COP_{heat pump} = \\frac{Q_H}{W_{net}} = COP_{ref} + 1$$
`);

write('thermodynamics', '03_Properties_Relations.md', `
# Thermodynamic Properties and Relations

## Steam Tables

For pure substances, state is defined by two independent intensive properties.

**Phases**: compressed liquid, saturated mixture (quality $x = m_{vap}/m_{total}$, $0 \\leq x \\leq 1$), superheated vapour.

In two-phase region at saturation temperature $T_{sat}$:
$$v = v_f + x\\,v_{fg},\\quad h = h_f + x\\,h_{fg},\\quad s = s_f + x\\,s_{fg}$$

## Equations of State

**Ideal gas**: $Pv = RT$, where $R = R_u/M$ (specific gas constant).

**Van der Waals**:
$$\\left(P + \\frac{a}{v^2}\\right)(v - b) = RT$$

Accounts for intermolecular attraction ($a$) and finite molecular volume ($b$).

**Compressibility factor**: $Z = Pv/(RT)$. $Z = 1$ for ideal gas; deviations at high P or low T.

## Maxwell Relations

From the four fundamental relations ($dU, dH, dA, dG$):

$$\\left(\\frac{\\partial T}{\\partial v}\\right)_s = -\\left(\\frac{\\partial P}{\\partial s}\\right)_v$$
$$\\left(\\frac{\\partial T}{\\partial P}\\right)_s = \\left(\\frac{\\partial v}{\\partial s}\\right)_P$$
$$\\left(\\frac{\\partial P}{\\partial T}\\right)_v = \\left(\\frac{\\partial s}{\\partial v}\\right)_T$$
$$\\left(\\frac{\\partial v}{\\partial T}\\right)_P = -\\left(\\frac{\\partial s}{\\partial P}\\right)_T$$

## Gibbs Free Energy

$$G = H - TS,\\quad dG = -S\\,dT + V\\,dP$$

At constant T, P: $\\Delta G < 0$ (spontaneous), $\\Delta G = 0$ (equilibrium), $\\Delta G > 0$ (non-spontaneous).

Used for phase equilibrium and chemical reaction spontaneity.

## Clapeyron Equation

Slope of phase boundary on P-T diagram:
$$\\frac{dP_{sat}}{dT} = \\frac{h_{fg}}{T\\,v_{fg}}$$

Clausius-Clapeyron approximation (vapour as ideal gas):
$$\\ln\\frac{P_2}{P_1} = \\frac{h_{fg}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$
`);

write('thermodynamics', '04_Mixtures_Combustion.md', `
# Mixtures and Combustion

## Ideal Gas Mixtures

For mixture of $N$ components:
$$P = \\sum_{i=1}^N P_i\\quad\\text{(Dalton's law — partial pressures)}$$
$$V = \\sum_{i=1}^N V_i\\quad\\text{(Amagat's law — partial volumes)}$$

Mole fraction: $y_i = N_i/N_{total}$. Then $P_i = y_i P$.

Mixture properties: $\\bar{M} = \\sum y_i M_i$, $\\bar{c}_p = \\sum y_i c_{p,i}$

## Psychrometrics

Moist air = dry air + water vapour.

**Specific humidity**: $\\omega = m_v/m_a = 0.622 P_v/(P - P_v)$

**Relative humidity**: $\\phi = P_v/P_{sat}(T)$

**Dew point**: temperature at which condensation begins.

**Wet-bulb temperature**: temperature of adiabatic saturation.

Adiabatic saturation: $\\omega_2 = \\omega_1 + (h_{f2} - h_{a1} - \\omega_1 h_{g1})/(h_{g2} - h_{f2})$

## Combustion

**Stoichiometric** (theoretical) combustion of octane $C_8H_{18}$:
$$C_8H_{18} + 12.5O_2 \\rightarrow 8CO_2 + 9H_2O$$

Air-fuel ratio: $AF = m_{air}/m_{fuel}$. Stoichiometric AF for octane ≈ 15.1.

**Excess air** = $(AF_{actual} - AF_{stoich})/AF_{stoich} \\times 100\\%$

**Enthalpy of combustion** (heating value):
$$\\bar{h}_c = \\sum_{products} N_i \\bar{h}_f^\\circ - \\sum_{reactants} N_i \\bar{h}_f^\\circ$$

HHV (higher heating value): water as liquid product.  
LHV (lower heating value): water as vapour product.

**Adiabatic flame temperature**: find $T_{prod}$ such that $H_{reactants} = H_{products}$.
`);

write('thermodynamics', '05_Exergy_Availability.md', `
# Exergy and Availability

## Concept

**Exergy** (available work): maximum useful work obtainable from a system as it reaches equilibrium with the environment (dead state $T_0, P_0$).

Unlike energy, exergy is destroyed by irreversibilities.

## Closed System Exergy

$$\\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0)$$

Specific flow exergy:
$$\\psi = (h - h_0) - T_0(s - s_0) + \\frac{V^2}{2} + gz$$

## Exergy Transfer

With heat $Q$ at temperature $T$: $X_{heat} = \\left(1 - \\frac{T_0}{T}\\right)Q$

With work: $X_{work} = W - W_{surr} = W - P_0(V_2 - V_1)$

## Exergy Destruction

$$X_{destroyed} = T_0 S_{gen} \\geq 0$$

Second law says exergy is destroyed whenever entropy is generated.

## Second-Law Efficiency

$$\\eta_{II} = \\frac{\\text{exergy recovered}}{\\text{exergy expended}}$$

For a heat engine: $\\eta_{II} = \\eta_{thermal}/\\eta_{Carnot}$

## Exergy Balance

$$\\dot{X}_{in} - \\dot{X}_{out} - \\dot{X}_{destroyed} = \\frac{d\\Phi_{cv}}{dt}$$

Exergy analysis pinpoints where irreversibilities are largest — more useful than energy analysis for identifying improvement opportunities.
`);

// ─── SIGNALS AND SYSTEMS ─────────────────────────────────────────────────────

write('signals-and-systems', '00_Signals_Basics.md', `
# Signals and Systems — Fundamentals

## Signal Classification

**Continuous-time (CT)**: $x(t)$, defined for all $t \\in \\mathbb{R}$.  
**Discrete-time (DT)**: $x[n]$, defined only at integer $n$.

**Energy and Power**:

$$E_x = \\int_{-\\infty}^{\\infty}|x(t)|^2\\,dt,\\quad P_x = \\lim_{T\\to\\infty}\\frac{1}{2T}\\int_{-T}^T|x(t)|^2\\,dt$$

- Energy signal: $E_x < \\infty$, $P_x = 0$
- Power signal: $P_x < \\infty$, $E_x = \\infty$
- Neither: e.g., $x(t) = e^t$

## Elementary Signals

**Unit step**: $u(t) = 1$ for $t \\geq 0$, else 0.

**Unit impulse (Dirac delta)**: $\\delta(t) = 0$ for $t \\neq 0$, $\\int_{-\\infty}^{\\infty}\\delta(t)\\,dt = 1$.

Sifting property: $\\int_{-\\infty}^{\\infty} x(t)\\delta(t-t_0)\\,dt = x(t_0)$

**Complex exponential**: $x(t) = Ae^{st}$, where $s = \\sigma + j\\omega$.  
For $s = j\\omega$: $e^{j\\omega t} = \\cos\\omega t + j\\sin\\omega t$ (Euler).

## Signal Operations

**Time shift**: $x(t - t_0)$ — right shift by $t_0$.

**Time scaling**: $x(at)$ — compression if $|a| > 1$, expansion if $|a| < 1$.

**Time reversal**: $x(-t)$ — flip about $t = 0$.

**Even/odd decomposition**:
$$x_e(t) = \\frac{x(t)+x(-t)}{2},\\quad x_o(t) = \\frac{x(t)-x(-t)}{2}$$

## System Properties

| Property | Definition |
|----------|-----------|
| **Linearity** | $ax_1 + bx_2 \\to ay_1 + by_2$ |
| **Time-invariance** | $x(t-t_0) \\to y(t-t_0)$ |
| **Causality** | Output depends only on present and past inputs |
| **Stability (BIBO)** | Bounded input $\\Rightarrow$ bounded output |
| **Memory** | Output depends on past/future inputs |
`);

write('signals-and-systems', '01_Convolution.md', `
# Convolution and Impulse Response

## LTI Systems

A **Linear Time-Invariant (LTI)** system is completely characterised by its **impulse response** $h(t)$.

Any input can be decomposed as a sum of scaled, shifted impulses:
$$x(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\delta(t-\\tau)\\,d\\tau$$

Output by superposition:
$$y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)\\,d\\tau = x(t) * h(t)$$

## Convolution Integral

$$y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)\\,d\\tau$$

**Graphical method**:
1. Flip $h(\\tau)$ to get $h(-\\tau)$
2. Shift by $t$ to get $h(t-\\tau)$
3. Multiply by $x(\\tau)$, integrate over all $\\tau$
4. Vary $t$

## Properties of Convolution

- **Commutative**: $x * h = h * x$
- **Associative**: $(x * h_1) * h_2 = x * (h_1 * h_2)$
- **Distributive**: $x * (h_1 + h_2) = x*h_1 + x*h_2$

## Causality and Stability from $h(t)$

**Causal**: $h(t) = 0$ for $t < 0$

**BIBO stable**: $\\int_{-\\infty}^{\\infty}|h(t)|\\,dt < \\infty$

## Discrete-Time Convolution

$$y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^{\\infty} x[k]\\,h[n-k]$$

For FIR filter of length $N$: finite sum from $k=0$ to $N-1$.
`);

write('signals-and-systems', '02_Fourier_Series_Transform.md', `
# Fourier Analysis

## Continuous-Time Fourier Series (CTFS)

For periodic $x(t)$ with period $T_0 = 2\\pi/\\omega_0$:

$$x(t) = \\sum_{k=-\\infty}^{\\infty} c_k e^{jk\\omega_0 t},\\quad c_k = \\frac{1}{T_0}\\int_{T_0} x(t)e^{-jk\\omega_0 t}\\,dt$$

**Parseval's theorem (power)**:
$$P_x = \\frac{1}{T_0}\\int_{T_0}|x(t)|^2\\,dt = \\sum_{k=-\\infty}^{\\infty}|c_k|^2$$

## Continuous-Time Fourier Transform (CTFT)

$$X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}\\,dt$$
$$x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} X(j\\omega)e^{j\\omega t}\\,d\\omega$$

**Key pairs**:

| $x(t)$ | $X(j\\omega)$ |
|--------|--------------|
| $\\delta(t)$ | $1$ |
| $1$ | $2\\pi\\delta(\\omega)$ |
| $u(t)$ | $\\pi\\delta(\\omega)+1/j\\omega$ |
| $e^{-at}u(t)$, $a>0$ | $1/(a+j\\omega)$ |
| $\\text{rect}(t/\\tau)$ | $\\tau\\,\\text{sinc}(\\omega\\tau/2)$ |
| $e^{-at^2}$ | $\\sqrt{\\pi/a}\\,e^{-\\omega^2/4a}$ |

**Convolution theorem**: $x(t)*h(t) \\longleftrightarrow X(j\\omega)H(j\\omega)$

**Parseval's theorem (energy)**: $\\int|x|^2\\,dt = \\frac{1}{2\\pi}\\int|X|^2\\,d\\omega$

## Discrete-Time Fourier Transform (DTFT)

$$X(e^{j\\omega}) = \\sum_{n=-\\infty}^{\\infty} x[n]e^{-j\\omega n}$$

Periodic in $\\omega$ with period $2\\pi$. Inverse:
$$x[n] = \\frac{1}{2\\pi}\\int_{2\\pi} X(e^{j\\omega})e^{j\\omega n}\\,d\\omega$$
`);

write('signals-and-systems', '03_Laplace_Z_Transform.md', `
# Laplace and Z-Transforms

## Laplace Transform (CT Systems)

$$X(s) = \\int_{-\\infty}^{\\infty} x(t)e^{-st}\\,dt,\\quad s = \\sigma + j\\omega$$

**Region of Convergence (ROC)**: set of $s$ for which integral converges. Shape determines causality:
- Causal signal: ROC is right half-plane $\\sigma > \\sigma_0$
- Anti-causal: left half-plane
- Bilateral: vertical strip

**Transfer function**: $H(s) = Y(s)/X(s)$ with zero initial conditions.

**Stability**: all poles of $H(s)$ must lie in the open left-half plane (Re$(s) < 0$).

Relation to Fourier: $X(j\\omega) = X(s)|_{s=j\\omega}$ only if ROC includes $j\\omega$-axis.

## Z-Transform (DT Systems)

$$X(z) = \\sum_{n=-\\infty}^{\\infty} x[n]z^{-n}$$

**Key pairs**:

| $x[n]$ | $X(z)$ | ROC |
|--------|--------|-----|
| $\\delta[n]$ | $1$ | all $z$ |
| $u[n]$ | $z/(z-1)$ | $|z|>1$ |
| $a^n u[n]$ | $z/(z-a)$ | $|z|>|a|$ |
| $n\\,a^n u[n]$ | $az/(z-a)^2$ | $|z|>|a|$ |

**DT Transfer function**: $H(z) = Y(z)/X(z)$

**DT Stability**: all poles inside unit circle $|z| < 1$.

## Sampling Theorem

A CT signal with bandwidth $B$ Hz is perfectly reconstructed from samples at $f_s > 2B$ (Nyquist rate).

In s-domain: sampling creates copies of $X(j\\omega)$ at multiples of $\\omega_s = 2\\pi f_s$.

Aliasing occurs when $f_s < 2B$ — frequencies fold back and overlap.

Relation: $H(e^{j\\omega}) = H(z)|_{z=e^{j\\omega}}$
`);

write('signals-and-systems', '04_Filter_Design.md', `
# Filter Design

## Ideal Filters

| Filter | Pass-band | Stop-band |
|--------|-----------|-----------|
| Low-pass | $|\\omega| < \\omega_c$ | $|\\omega| > \\omega_c$ |
| High-pass | $|\\omega| > \\omega_c$ | $|\\omega| < \\omega_c$ |
| Band-pass | $\\omega_1 < |\\omega| < \\omega_2$ | otherwise |
| Band-stop | otherwise | $\\omega_1 < |\\omega| < \\omega_2$ |

Ideal LPF impulse response: $h(t) = \\frac{\\omega_c}{\\pi}\\text{sinc}(\\omega_c t)$ — non-causal, infinite length.

## Butterworth Filter

Maximally flat, monotone roll-off:
$$|H(j\\omega)|^2 = \\frac{1}{1+(\\omega/\\omega_c)^{2N}}$$

$N$ = filter order. Poles equally spaced on left semicircle of radius $\\omega_c$ in $s$-plane.

## Chebyshev Filters

**Type I**: equiripple in pass-band, monotone in stop-band.  
**Type II**: monotone in pass-band, equiripple in stop-band.

Sharper roll-off than Butterworth for same order, but phase distortion is worse.

## FIR vs IIR Digital Filters

| | FIR | IIR |
|--|-----|-----|
| Poles | At origin only | Anywhere in $z$-plane |
| Stability | Always stable | Must check pole locations |
| Phase | Linear phase possible | Generally non-linear |
| Efficiency | More taps needed | Fewer coefficients |
| Design | Window method, Parks-McClellan | Bilinear transform of analog prototype |

**Bilinear transform**: maps $s$-plane to $z$-plane:
$$s = \\frac{2}{T}\\cdot\\frac{z-1}{z+1}$$

Warps frequency: $\\omega_{digital} = 2\\arctan(\\omega_{analog}\\cdot T/2)$ — pre-warp $\\omega_c$ before design.
`);

write('signals-and-systems', '05_State_Space.md', `
# State-Space Representation

## State Equations

$$\\dot{\\mathbf{x}}(t) = A\\mathbf{x}(t) + B\\mathbf{u}(t)$$
$$\\mathbf{y}(t) = C\\mathbf{x}(t) + D\\mathbf{u}(t)$$

- $\\mathbf{x}$: state vector ($n \\times 1$)
- $\\mathbf{u}$: input vector
- $\\mathbf{y}$: output vector
- $A$: system matrix ($n \\times n$), $B$: input matrix, $C$: output matrix, $D$: feedthrough

## Solution

$$\\mathbf{x}(t) = e^{At}\\mathbf{x}(0) + \\int_0^t e^{A(t-\\tau)}B\\mathbf{u}(\\tau)\\,d\\tau$$

**Matrix exponential**: $e^{At} = \\mathcal{L}^{-1}\\{(sI - A)^{-1}\\}$

## Transfer Function from State Space

$$H(s) = C(sI - A)^{-1}B + D$$

Poles = eigenvalues of $A$.

## Stability

System is asymptotically stable iff all eigenvalues of $A$ have negative real parts.

## Controllability and Observability

**Controllability matrix**: $\\mathcal{C} = [B \\; AB \\; A^2B \\; \\cdots \\; A^{n-1}B]$

System is **controllable** iff $\\text{rank}(\\mathcal{C}) = n$.

**Observability matrix**: $\\mathcal{O} = [C^T \\; (CA)^T \\; \\cdots \\; (CA^{n-1})^T]^T$

System is **observable** iff $\\text{rank}(\\mathcal{O}) = n$.

## Discrete-Time State Space

$$\\mathbf{x}[n+1] = A_d\\mathbf{x}[n] + B_d\\mathbf{u}[n],\\quad \\mathbf{y}[n] = C\\mathbf{x}[n] + D\\mathbf{u}[n]$$

$A_d = e^{AT}$, $B_d = \\int_0^T e^{A\\tau}\\,d\\tau \\cdot B$

Stability: eigenvalues of $A_d$ inside unit circle.
`);

// ─── CONTROL SYSTEMS ─────────────────────────────────────────────────────────

write('control-systems', '00_Block_Diagrams.md', `
# Control Systems — Block Diagrams and Feedback

## Open-Loop vs Closed-Loop

**Open-loop**: output is not fed back. $Y(s) = G(s)U(s)$. Sensitive to disturbances.

**Closed-loop (feedback)**:
$$Y(s) = \\frac{G(s)}{1 + G(s)H(s)}R(s)$$

- $G(s)$: forward-path (plant + controller) transfer function
- $H(s)$: feedback transfer function
- $G(s)H(s)$: open-loop transfer function $L(s)$

**Closed-loop poles** = roots of characteristic equation $1 + L(s) = 0$.

## Block Diagram Algebra

| Configuration | Equivalent |
|--------------|-----------|
| Series | $G_1 G_2$ |
| Parallel | $G_1 + G_2$ |
| Feedback | $G/(1 + GH)$ |
| Moving summing junction past block | $G$, add $1/G$ on moved branch |

## Error Analysis

**Steady-state error** for unity feedback ($H=1$) with input $R(s)$:
$$e_{ss} = \\lim_{s\\to 0} s \\cdot \\frac{1}{1+G(s)} R(s)$$

**System type** = number of integrators in $G(s)$:

| Type | Step error | Ramp error | Parabola error |
|------|-----------|-----------|----------------|
| 0 | $1/(1+K_p)$ | $\\infty$ | $\\infty$ |
| 1 | 0 | $1/K_v$ | $\\infty$ |
| 2 | 0 | 0 | $1/K_a$ |

Position constant: $K_p = \\lim_{s\\to0}G$, Velocity: $K_v = \\lim_{s\\to0}sG$, Acceleration: $K_a = \\lim_{s\\to0}s^2G$.

## Sensitivity

$$S = \\frac{dY/Y}{dG/G} = \\frac{1}{1+L(s)}$$

High loop gain $|L|$ reduces sensitivity to plant variations.
`);

write('control-systems', '01_Root_Locus.md', `
# Root Locus Analysis

## Definition

As gain $K$ varies from 0 to $\\infty$, roots of $1 + KG(s)H(s) = 0$ trace paths in the $s$-plane. These paths form the **root locus**.

## Construction Rules

Given $G(s)H(s) = K\\dfrac{N(s)}{D(s)}$ with $m$ zeros and $n$ poles:

1. **Number of branches**: $n$ (one per pole)
2. **Start** ($K=0$): at open-loop poles
3. **End** ($K\\to\\infty$): at open-loop zeros (or infinity along asymptotes)
4. **Real axis**: segment is on locus if odd number of poles + zeros lie to its right
5. **Asymptotes**: $n-m$ asymptotes with angles $\\theta = \\frac{(2k+1)180°}{n-m}$, $k=0,1,\\ldots$
6. **Asymptote centroid**: $\\sigma_a = \\dfrac{\\sum p_i - \\sum z_j}{n-m}$
7. **Break-away/in points**: solve $dK/ds = 0$ (equivalently $d[N/D]/ds = 0$)
8. **Imaginary axis crossing**: apply Routh criterion or substitute $s = j\\omega$

## Stability from Root Locus

System is stable for $K$ values where all roots have $\\text{Re}(s) < 0$.

Critical gain $K_c$: value at which root locus crosses $j\\omega$ axis.

## Design by Root Locus

Place closed-loop poles at desired locations (specified by $\\zeta$, $\\omega_n$) by choosing $K$ and adding compensators.

- **Lead compensator** ($z > p$, $|z| < |p|$): improves transient response (like PD action)
- **Lag compensator** ($p > z$ near origin): improves steady-state error (like PI action)
`);

write('control-systems', '02_Bode_Nyquist.md', `
# Frequency Domain — Bode and Nyquist

## Bode Plot

Plot $|L(j\\omega)|_{dB}$ and $\\angle L(j\\omega)$ vs $\\log\\omega$.

**Gain Margin (GM)**: $20\\log_{10}(1/|L(j\\omega_{pc})|)$ where $\\omega_{pc}$ is phase crossover (phase = -180°).

$$GM_{dB} = -|L(j\\omega_{pc})|_{dB}$$

**Phase Margin (PM)**: $180° + \\angle L(j\\omega_{gc})$ where $\\omega_{gc}$ is gain crossover ($|L| = 0$ dB).

For stability: GM > 0 dB and PM > 0°. **Typical specs**: GM > 6 dB, PM > 30–45°.

## Nyquist Criterion

The number of closed-loop unstable poles:
$$Z = N + P$$

- $N$: clockwise encirclements of $-1+j0$ point by Nyquist plot of $L(j\\omega)$
- $P$: number of open-loop unstable poles

For stable open-loop ($P=0$): system is stable iff $N = 0$ (no encirclements of $-1$ point).

## Stability from Bode

Equivalent: system is stable if the gain is below 0 dB when phase reaches -180°.

## Bandwidth and Speed of Response

Closed-loop bandwidth $\\omega_{BW}$ ≈ gain crossover frequency $\\omega_{gc}$ (rough approximation).

$$T_r \\approx \\frac{1.8}{\\omega_{BW}},\\quad T_s \\approx \\frac{4.6}{\\zeta\\omega_n}$$

Higher bandwidth → faster response, but more susceptible to noise.
`);

write('control-systems', '03_PID_Control.md', `
# PID Control

## PID Controller

$$u(t) = K_p e(t) + K_i\\int_0^t e(\\tau)\\,d\\tau + K_d\\frac{de(t)}{dt}$$

$$U(s) = \\left(K_p + \\frac{K_i}{s} + K_d s\\right)E(s) = K_p\\left(1 + \\frac{1}{T_i s} + T_d s\\right)E(s)$$

- **Proportional ($K_p$)**: reduces error; too high → oscillation
- **Integral ($K_i$)**: eliminates steady-state error; too high → slow, overshoot
- **Derivative ($K_d$)**: anticipates error rate; improves damping; amplifies noise

## Ziegler-Nichols Tuning

**Step response method**:
Measure process reaction curve: dead time $L$, time constant $T$.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|-----------|-------|-------|-------|
| P | $T/(KL)$ | — | — |
| PI | $0.9T/(KL)$ | $3.33L$ | — |
| PID | $1.2T/(KL)$ | $2L$ | $0.5L$ |

**Ultimate gain method**:
Increase $K_p$ until sustained oscillation. Record $K_u$, $T_u$.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|-----------|-------|-------|-------|
| PID | $0.6K_u$ | $0.5T_u$ | $0.125T_u$ |

## Anti-Windup

When actuator saturates, integrator continues accumulating (windup) causing large transients.

Fix: **integrator clamping** (stop integrating when output is saturated) or **back-calculation** (feed back actuator error to desaturate integrator).

## Digital PID

Position algorithm:
$$u[n] = K_p e[n] + K_i T \\sum_{k=0}^n e[k] + \\frac{K_d}{T}(e[n] - e[n-1])$$

Velocity algorithm (incremental):
$$\\Delta u[n] = K_p(e[n]-e[n-1]) + K_i T\\, e[n] + \\frac{K_d}{T}(e[n]-2e[n-1]+e[n-2])$$
`);

write('control-systems', '04_State_Space_Control.md', `
# State-Space Control Design

## Pole Placement (Full State Feedback)

Control law: $u = -K\\mathbf{x}$ (assumes all states measurable).

Closed-loop system: $\\dot{\\mathbf{x}} = (A - BK)\\mathbf{x}$

Choose $K$ so that eigenvalues of $(A - BK)$ are at desired pole locations.

**Ackermann's formula** (SISO):
$$K = \\begin{bmatrix}0 & 0 & \\cdots & 1\\end{bmatrix} \\mathcal{C}^{-1}\\alpha_c(A)$$

where $\\alpha_c(s) = (s-p_1)(s-p_2)\\cdots(s-p_n)$ is the desired characteristic polynomial.

Requires system to be **controllable**.

## Luenberger Observer (Estimator)

When states are not all measurable, estimate $\\hat{\\mathbf{x}}$ using output $y$:

$$\\dot{\\hat{\\mathbf{x}}} = A\\hat{\\mathbf{x}} + Bu + L(y - C\\hat{\\mathbf{x}})$$

Error $\\mathbf{e} = \\mathbf{x} - \\hat{\\mathbf{x}}$ evolves as $\\dot{\\mathbf{e}} = (A - LC)\\mathbf{e}$.

Choose $L$ to place observer poles faster than controller poles (rule of thumb: observer poles 3–5× faster).

Requires system to be **observable**.

## Separation Principle

Controller and observer can be designed independently. Combined control law: $u = -K\\hat{\\mathbf{x}}$.

Closed-loop poles = controller poles ∪ observer poles.

## LQR (Linear Quadratic Regulator)

Minimise:
$$J = \\int_0^{\\infty} (\\mathbf{x}^T Q \\mathbf{x} + u^T R u)\\,dt$$

Optimal gain: $K^* = R^{-1}B^T P$ where $P$ is solution to algebraic Riccati equation:
$$A^T P + PA - PBR^{-1}B^T P + Q = 0$$

Guarantees stability and provides good gain and phase margins ($GM \\geq 6$ dB, $PM \\geq 60°$).
`);

// ─── ELECTROMAGNETIC FIELDS ───────────────────────────────────────────────────

write('electromagnetic-fields', '00_Electrostatics.md', `
# Electromagnetic Fields — Electrostatics

## Coulomb's Law

Force between two point charges:
$$\\mathbf{F}_{12} = \\frac{q_1 q_2}{4\\pi\\varepsilon_0 r^2}\\hat{\\mathbf{r}}_{12},\\quad \\varepsilon_0 = 8.854\\times10^{-12}\\,\\text{F/m}$$

## Electric Field

$$\\mathbf{E} = \\frac{\\mathbf{F}}{q} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\hat{\\mathbf{r}}\\quad\\text{(point charge)}$$

For a continuous charge distribution:
$$\\mathbf{E}(\\mathbf{r}) = \\frac{1}{4\\pi\\varepsilon_0}\\int \\frac{\\rho(\\mathbf{r}')}{|\\mathbf{r}-\\mathbf{r}'|^2}\\hat{\\mathbf{R}}\\,dV'$$

## Gauss's Law (Integral Form)

$$\\oint_S \\mathbf{E}\\cdot d\\mathbf{A} = \\frac{Q_{enc}}{\\varepsilon_0}$$

Differential form: $\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0$

**Applications** (choose symmetric Gaussian surfaces):

| Geometry | Field |
|----------|-------|
| Point charge | $E = Q/(4\\pi\\varepsilon_0 r^2)$ |
| Infinite line charge $\\rho_L$ | $E = \\rho_L/(2\\pi\\varepsilon_0 r)$ |
| Infinite sheet $\\rho_s$ | $E = \\rho_s/(2\\varepsilon_0)$ |
| Sphere (uniform $\\rho$, inside) | $E = \\rho r/(3\\varepsilon_0)$ |

## Electric Potential

$$V = -\\int_{ref}^P \\mathbf{E}\\cdot d\\mathbf{l},\\quad \\mathbf{E} = -\\nabla V$$

For point charge: $V = Q/(4\\pi\\varepsilon_0 r)$

**Poisson's equation**: $\\nabla^2 V = -\\rho/\\varepsilon_0$

**Laplace's equation** (charge-free region): $\\nabla^2 V = 0$

## Energy and Capacitance

Energy stored in electric field:
$$W_E = \\frac{\\varepsilon_0}{2}\\int |\\mathbf{E}|^2\\,dV = \\frac{1}{2}QV = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2$$

Capacitance $C = Q/V$: parallel plates $C = \\varepsilon A/d$.
`);

write('electromagnetic-fields', '01_Magnetostatics.md', `
# Magnetostatics

## Biot-Savart Law

Magnetic field from current element:
$$d\\mathbf{B} = \\frac{\\mu_0 I}{4\\pi}\\frac{d\\mathbf{l}\\times\\hat{\\mathbf{r}}}{r^2},\\quad \\mu_0 = 4\\pi\\times10^{-7}\\,\\text{H/m}$$

**Infinite straight wire**:
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Circular loop (centre)**:
$$B = \\frac{\\mu_0 I}{2R}$$

## Gauss's Law for Magnetism

$$\\oint_S \\mathbf{B}\\cdot d\\mathbf{A} = 0$$

No magnetic monopoles. Differential: $\\nabla\\cdot\\mathbf{B} = 0$

## Ampere's Law

$$\\oint_C \\mathbf{H}\\cdot d\\mathbf{l} = I_{enc}$$

$$\\mathbf{B} = \\mu_0\\mathbf{H}\\quad\\text{(free space)},\\quad \\mathbf{B} = \\mu_0\\mu_r\\mathbf{H}\\quad\\text{(linear material)}$$

Differential: $\\nabla\\times\\mathbf{H} = \\mathbf{J}$

**Applications**:

| Geometry | Field |
|----------|-------|
| Long solenoid ($n$ turns/m) | $B = \\mu_0 n I$ (inside) |
| Toroid (N turns, radius $r$) | $B = \\mu_0 NI/(2\\pi r)$ |

## Magnetic Force and Inductance

Force on charge: $\\mathbf{F} = q\\mathbf{v}\\times\\mathbf{B}$ (Lorentz force)

Force on current: $d\\mathbf{F} = I\\,d\\mathbf{l}\\times\\mathbf{B}$

**Inductance**: $L = N\\Phi/I = \\mu_0 N^2 A/\\ell$ (solenoid)

Energy in magnetic field:
$$W_M = \\frac{1}{2}LI^2 = \\frac{1}{2\\mu_0}\\int|\\mathbf{B}|^2\\,dV$$
`);

write('electromagnetic-fields', '02_Maxwells_Equations.md', `
# Maxwell's Equations

## Complete Set

| Equation | Differential form | Integral form |
|---------|-------------------|---------------|
| Gauss (E) | $\\nabla\\cdot\\mathbf{D} = \\rho_v$ | $\\oint\\mathbf{D}\\cdot d\\mathbf{A} = Q_{enc}$ |
| Gauss (B) | $\\nabla\\cdot\\mathbf{B} = 0$ | $\\oint\\mathbf{B}\\cdot d\\mathbf{A} = 0$ |
| Faraday | $\\nabla\\times\\mathbf{E} = -\\partial\\mathbf{B}/\\partial t$ | $\\oint\\mathbf{E}\\cdot d\\mathbf{l} = -d\\Phi_B/dt$ |
| Ampere-Maxwell | $\\nabla\\times\\mathbf{H} = \\mathbf{J} + \\partial\\mathbf{D}/\\partial t$ | $\\oint\\mathbf{H}\\cdot d\\mathbf{l} = I_{enc} + I_d$ |

**Constitutive relations** (linear, isotropic media):
$$\\mathbf{D} = \\varepsilon\\mathbf{E} = \\varepsilon_0\\varepsilon_r\\mathbf{E},\\quad \\mathbf{B} = \\mu\\mathbf{H} = \\mu_0\\mu_r\\mathbf{H},\\quad \\mathbf{J} = \\sigma\\mathbf{E}$$

## Displacement Current

Maxwell's key addition: $\\mathbf{J}_d = \\partial\\mathbf{D}/\\partial t$. This term completes Ampere's law and allows wave propagation — a changing E field acts as a source of H.

## Faraday's Law

$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\int_S\\mathbf{B}\\cdot d\\mathbf{A}$$

Motional EMF: $\\mathcal{E} = \\oint(\\mathbf{v}\\times\\mathbf{B})\\cdot d\\mathbf{l} = Bvl$ (straight conductor in uniform B).

Transformer EMF: changing B creates E even when conductor is stationary.

## Boundary Conditions

At interface between media 1 and 2:

$$D_{1n} - D_{2n} = \\rho_s,\\quad E_{1t} = E_{2t}$$
$$B_{1n} = B_{2n},\\quad H_{1t} - H_{2t} = \\mathbf{K}\\times\\hat{n}$$
`);

write('electromagnetic-fields', '03_EM_Waves.md', `
# Electromagnetic Waves

## Wave Equation

From Maxwell's equations in source-free medium:
$$\\nabla^2\\mathbf{E} = \\mu\\varepsilon\\frac{\\partial^2\\mathbf{E}}{\\partial t^2}$$

Wave speed: $v = 1/\\sqrt{\\mu\\varepsilon}$. In free space: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} = 3\\times10^8$ m/s.

## Uniform Plane Wave

$$\\mathbf{E}(z,t) = E_0\\cos(\\omega t - \\beta z)\\hat{x}$$
$$\\mathbf{H}(z,t) = \\frac{E_0}{\\eta}\\cos(\\omega t - \\beta z)\\hat{y}$$

**Wavenumber**: $\\beta = \\omega/v = \\omega\\sqrt{\\mu\\varepsilon}$

**Intrinsic impedance**: $\\eta = \\sqrt{\\mu/\\varepsilon}$. Free space: $\\eta_0 = 377\\,\\Omega$

**E ⊥ H ⊥ direction of propagation** (TEM wave).

## Power Flow — Poynting Vector

$$\\mathbf{S} = \\mathbf{E}\\times\\mathbf{H}\\quad\\text{(W/m}^2\\text{)}$$

Time-average power density:
$$\\mathbf{S}_{av} = \\frac{1}{2}\\text{Re}(\\mathbf{E}\\times\\mathbf{H}^*) = \\frac{|E_0|^2}{2\\eta}\\hat{z}$$

## Propagation in Lossy Media

Complex propagation constant: $\\gamma = \\alpha + j\\beta = j\\omega\\sqrt{\\mu(\\varepsilon - j\\sigma/\\omega)}$

Attenuation constant $\\alpha$ (Np/m): $E \\propto e^{-\\alpha z}$

**Skin depth**: $\\delta = 1/\\alpha = \\sqrt{2/(\\omega\\mu\\sigma)}$

At 50 Hz in copper ($\\sigma = 5.8\\times10^7$ S/m): $\\delta \\approx 9.4$ mm.

## Reflection and Transmission

Normal incidence at planar boundary:

$$\\Gamma = \\frac{\\eta_2 - \\eta_1}{\\eta_2 + \\eta_1}\\quad\\text{(reflection coefficient)}$$
$$\\tau = \\frac{2\\eta_2}{\\eta_2 + \\eta_1}\\quad\\text{(transmission coefficient)}$$

Power check: $|\\Gamma|^2 + \\frac{\\eta_1}{\\eta_2}|\\tau|^2 = 1$
`);

write('electromagnetic-fields', '04_Transmission_Lines.md', `
# Transmission Lines

## Telegrapher's Equations

Distributed model (resistance $R'$, inductance $L'$, conductance $G'$, capacitance $C'$ per unit length):

$$\\frac{\\partial V}{\\partial z} = -(R' + j\\omega L')I$$
$$\\frac{\\partial I}{\\partial z} = -(G' + j\\omega C')V$$

Propagation constant: $\\gamma = \\sqrt{(R'+j\\omega L')(G'+j\\omega C')} = \\alpha + j\\beta$

**Characteristic impedance**: $Z_0 = \\sqrt{(R'+j\\omega L')/(G'+j\\omega C')}$

**Lossless line** ($R'=G'=0$): $Z_0 = \\sqrt{L'/C'}$, $v_p = 1/\\sqrt{L'C'}$

## Standing Waves

Reflection coefficient at load:
$$\\Gamma_L = \\frac{Z_L - Z_0}{Z_L + Z_0}$$

Voltage Standing Wave Ratio:
$$VSWR = \\frac{1+|\\Gamma_L|}{1-|\\Gamma_L|}$$

$VSWR = 1$: matched ($Z_L = Z_0$). $VSWR \\to \\infty$: open or short circuit.

## Input Impedance

$$Z_{in} = Z_0\\frac{Z_L + jZ_0\\tan\\beta l}{Z_0 + jZ_L\\tan\\beta l}$$

Special cases:
- $\\lambda/4$ transformer: $Z_{in} = Z_0^2/Z_L$ (impedance inverter)
- Short-circuit stub ($Z_L=0$, length $l$): $Z_{in} = jZ_0\\tan\\beta l$
- Open-circuit stub ($Z_L=\\infty$): $Z_{in} = -jZ_0\\cot\\beta l$

## Smith Chart

Polar plot of $\\Gamma = \\Gamma_r + j\\Gamma_i$. Constant resistance and reactance circles.

Used for: impedance matching, finding $VSWR$, locating voltage maxima/minima, single/double stub matching.
`);

console.log('All files written!');
