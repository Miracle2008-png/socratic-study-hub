const fs = require('fs');
const path = require('path');

const base = 'src/data/content';

function write(topic, filename, content) {
  const dir = path.join(base, topic);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('wrote', topic + '/' + filename);
}

// ─── ANALOGUE ELECTRONICS ────────────────────────────────────────────────────

write('analogue-electronics', '01_Diodes.md', `
# Diodes

## PN Junction

When P-type and N-type semiconductors join, majority carriers diffuse across the junction, leaving a depletion region with a built-in potential:
$$V_{bi} = \\frac{k_BT}{q}\\ln\\frac{N_A N_D}{n_i^2}$$

## Ideal Diode Equation

$$I = I_0\\left(e^{V/nV_T} - 1\\right)$$

- $I_0$ = reverse saturation current ($\\sim 10^{-14}$ A for Si)
- $n$ = ideality factor (1 for diffusion, 2 for recombination)
- $V_T = kT/q \\approx 26\\,\\text{mV}$ at 300 K

**Forward bias** ($V > 0$): Current grows exponentially. Si turn-on $\\approx 0.7$ V.  
**Reverse bias** ($V < 0$): $I \\approx -I_0$ (leakage only).  
**Breakdown**: Avalanche or Zener at $V = -V_{BR}$.

## Small-Signal Model

For a DC operating point $I_D$:
$$r_d = \\frac{nV_T}{I_D}$$

Replace diode with $r_d$ in series with battery $V_{D0} \\approx 0.7$ V.

## Zener Diode (Voltage Regulator)

Designed to operate in reverse breakdown at $V_Z$. Circuit:

$$V_{out} = V_Z, \\quad R_s = \\frac{V_{in} - V_Z}{I_Z + I_L}$$

Choose $R_s$ such that $I_Z > I_{Z,min}$ even at maximum load.

## Rectifier Circuits

| Type | Peak output | Ripple | PIV per diode |
|------|-------------|--------|---------------|
| Half-wave | $V_m$ | $V_m/f RC$ | $2V_m$ |
| Full-wave (centre-tap) | $V_m$ | $V_m/2fRC$ | $2V_m$ |
| Bridge | $V_m$ | $V_m/2fRC$ | $V_m$ |

With filter capacitor $C$, ripple voltage:
$$V_r \\approx \\frac{V_m}{fRC}\\quad\\text{(half-wave)},\\quad \\frac{V_m}{2fRC}\\quad\\text{(full-wave)}$$
`);

write('analogue-electronics', '02_BJT_Fundamentals.md', `
# BJT Fundamentals

## Structure and Regions

A **Bipolar Junction Transistor (BJT)** has three doped regions: Emitter (heavily doped), Base (thin, lightly doped), Collector (moderately doped).

**NPN**: current flows Collector → Emitter when $V_{BE} \\approx 0.7$ V and $V_{CE} > V_{CE,sat}$.

## DC Relations

$$I_C = \\beta I_B = \\alpha I_E$$
$$I_E = I_C + I_B$$
$$\\alpha = \\frac{\\beta}{\\beta+1},\\quad \\beta = \\frac{\\alpha}{1-\\alpha}$$

Typical: $\\beta = 50$–$300$.

## Operating Regions

| Region | $V_{BE}$ | $V_{BC}$ | Use |
|--------|---------|---------|-----|
| Cutoff | < 0.5 V | Reverse | Switch OFF |
| Active | ≈ 0.7 V | Reverse | Amplifier |
| Saturation | ≈ 0.7 V | Forward | Switch ON |

## Voltage-Divider Bias (Most Stable)

$$V_B = V_{CC}\\frac{R_2}{R_1+R_2},\\quad V_E = V_B - 0.7$$
$$I_C \\approx I_E = \\frac{V_E}{R_E}$$

Stability condition: $R_1 \\| R_2 \\ll \\beta R_E$ (makes $V_B$ independent of $\\beta$).

## Early Effect

In reality, $I_C$ increases slightly with $V_{CE}$ due to base-width modulation:
$$I_C = I_S e^{V_{BE}/V_T}\\left(1 + \\frac{V_{CE}}{V_A}\\right)$$

Early voltage $V_A \\approx 50$–$200$ V. Output resistance: $r_o = V_A/I_C$.
`);

write('analogue-electronics', '03_BJT_Amplifiers.md', `
# BJT Amplifiers

## Hybrid-π Small-Signal Model

At Q-point $(I_C, V_{CE})$:
$$g_m = \\frac{I_C}{V_T},\\quad r_\\pi = \\frac{\\beta}{g_m},\\quad r_o = \\frac{V_A}{I_C}$$

## Common Emitter (CE)

Most useful: high voltage gain, inverting.

$$A_v = -g_m(R_C \\| r_o),\\quad R_{in} = r_\\pi,\\quad R_{out} = R_C \\| r_o$$

With emitter resistance $R_E$ (unbypassed):
$$A_v \\approx -\\frac{R_C}{R_E}\\quad\\text{(stable, gain-bandwidth traded)}$$

## Common Collector (Emitter Follower)

Voltage gain ≈ 1 (non-inverting), high $R_{in}$, low $R_{out}$ — ideal buffer.

$$A_v \\approx 1,\\quad R_{in} = r_\\pi + (\\beta+1)R_E,\\quad R_{out} \\approx \\frac{r_\\pi + R_S}{\\beta+1}$$

## Common Base (CB)

Non-inverting, low $R_{in} = 1/g_m$, high $R_{out}$. Used in high-frequency and cascode circuits.

$$A_v = g_m R_C,\\quad R_{in} = \\frac{1}{g_m}$$

## Frequency Response

**Miller effect**: feedback capacitance $C_{\\mu}$ from collector to base is multiplied by $(1+|A_v|)$ when referred to input — severely limits bandwidth in CE configuration.

Unity-gain frequency: $f_T = g_m / (2\\pi(C_\\pi + C_\\mu))$

Upper $-3$ dB frequency: $f_H \\approx \\frac{1}{2\\pi R'_{sig}(C_\\pi + C_\\mu(1+g_m R'_L))}$
`);

write('analogue-electronics', '04_MOSFETs.md', `
# MOSFETs

## Structure

**NMOS enhancement-mode**: P-substrate, N+ source/drain, SiO₂ gate insulator, polysilicon gate. Channel forms when $V_{GS} > V_t$.

## Current Equations

**Triode** (linear) region — $V_{DS} < V_{GS} - V_t$:
$$i_D = k_n\\left[(V_{GS}-V_t)V_{DS} - \\frac{V_{DS}^2}{2}\\right]$$

**Saturation** region — $V_{DS} \\geq V_{GS} - V_t$:
$$i_D = \\frac{k_n}{2}(V_{GS}-V_t)^2(1 + \\lambda V_{DS})$$

Where $k_n = \\mu_n C_{ox}(W/L)$ is the process transconductance parameter.

**Threshold voltage** $V_t$: modified by body effect $V_{SB}$:
$$V_t = V_{t0} + \\gamma(\\sqrt{|2\\phi_F + V_{SB}|} - \\sqrt{|2\\phi_F|})$$

## Small-Signal Model

$$g_m = \\frac{2I_D}{V_{GS}-V_t} = \\sqrt{2k_n I_D},\\quad r_o = \\frac{|V_A|}{I_D}$$

## Amplifier Configurations

| Config | $A_v$ | $R_{in}$ | $R_{out}$ |
|--------|-------|---------|---------|
| Common Source | $-g_m(R_D\\|r_o)$ | $\\infty$ | $R_D\\|r_o$ |
| Common Gate | $g_m(R_D\\|r_o)$ | $1/g_m$ | $R_D\\|r_o$ |
| Common Drain (Source follower) | $\\approx 1$ | $\\infty$ | $1/g_m$ |

## CMOS Inverter

PMOS + NMOS with shared input/output. 

Voltage Transfer Characteristic (VTC): sharp transition at $V_{M} \\approx V_{DD}/2$ for symmetric design.

Noise margins: $NM_H = V_{OH} - V_{IH}$, $NM_L = V_{IL} - V_{OL}$.

Power: static = 0 (ideal), dynamic = $C_L V_{DD}^2 f$.
`);

write('analogue-electronics', '05_Operational_Amplifiers.md', `
# Operational Amplifiers

## Ideal Op-Amp Rules

1. $A_{OL} \\to \\infty$ (open-loop gain)
2. $R_{in} \\to \\infty$, $R_{out} = 0$
3. **Virtual short**: when negative feedback present, $V_+ = V_-$
4. **No input current**: $I_+ = I_- = 0$

## Key Configurations

### Inverting Amplifier
$$V_{out} = -\\frac{R_f}{R_1}V_{in},\\quad R_{in} = R_1$$

### Non-Inverting Amplifier
$$V_{out} = \\left(1 + \\frac{R_f}{R_1}\\right)V_{in},\\quad R_{in} = \\infty$$

### Voltage Follower (Buffer)
$$V_{out} = V_{in},\\quad R_{in} = \\infty,\\quad R_{out} = 0$$

### Summing Amplifier (Inverting)
$$V_{out} = -R_f\\left(\\frac{V_1}{R_1} + \\frac{V_2}{R_2} + \\frac{V_3}{R_3}\\right)$$

### Difference Amplifier
$$V_{out} = \\frac{R_f}{R_1}(V_2 - V_1)\\quad\\text{(for matched resistors)}$$

### Integrator
$$V_{out} = -\\frac{1}{R_1 C}\\int V_{in}\\,dt$$

Frequency domain: $H(j\\omega) = -\\frac{1}{j\\omega R_1 C}$

### Differentiator
$$V_{out} = -RC\\frac{dV_{in}}{dt}$$

## Instrumentation Amplifier

Three op-amp topology with high CMRR:
$$V_{out} = \\left(1 + \\frac{2R}{R_G}\\right)\\frac{R_f}{R_1}(V_2 - V_1)$$

Gain set by single resistor $R_G$.
`);

write('analogue-electronics', '06_Op_Amp_Non_Ideal.md', `
# Op-Amp Non-Ideal Characteristics

## Finite Open-Loop Gain

Real op-amp: $A_{OL} = 10^5$–$10^6$ (100–120 dB).

Closed-loop gain with finite $A_{OL}$:
$$A_{CL} = \\frac{A_{OL}}{1 + A_{OL}\\beta} \\approx \\frac{1}{\\beta}\\quad\\text{for }A_{OL}\\beta \\gg 1$$

## Gain-Bandwidth Product

$A_{OL}$ rolls off at $-20$ dB/decade above dominant pole $f_p$:
$$A_{OL}(f) = \\frac{A_0}{1 + j f/f_p}$$

**GBW = $A_0 \\cdot f_p$ = constant** (e.g., 1 MHz for LM741, 10 MHz for TL071).

Closed-loop bandwidth: $f_{3dB} = \\text{GBW} / |A_{CL}|$

## Slew Rate

Maximum rate of output voltage change:
$$SR = \\frac{dV_{out}}{dt}\\bigg|_{max}$$

Typical: 0.5 V/μs (LM741) to 1000 V/μs (high-speed).

Full-power bandwidth: $f_{FP} = SR/(2\\pi V_{om})$

## DC Errors

| Parameter | Typical value | Effect |
|-----------|--------------|--------|
| Input offset voltage $V_{OS}$ | 1–10 mV | DC error: $V_{error} = V_{OS}(1+R_f/R_1)$ |
| Input bias current $I_B$ | 1 nA–1 μA | Offset via source resistance |
| Input offset current $I_{OS}$ | $I_{B+} - I_{B-}$ | Use matched resistors to cancel $I_B$ |

## CMRR

$$CMRR = 20\\log_{10}\\frac{A_{diff}}{A_{cm}}\\quad\\text{(dB)}$$

Typical: 80–120 dB. High CMRR essential in differential sensing.

## Stability and Phase Margin

Loop gain $T = A_{OL}\\beta$. System is stable if $|T| < 1$ when $\\angle T = -180°$.

**Phase margin** = 180° + $\\angle T$ at unity gain crossover. Need PM > 45° for stability.

Compensation: dominant-pole compensation (adds capacitor to reduce bandwidth and avoid oscillation).
`);

write('analogue-electronics', '07_Feedback_Oscillators.md', `
# Feedback and Oscillators

## Negative Feedback Topologies

| Topology | Samples | Feedback | Effect |
|----------|---------|----------|--------|
| Series-shunt | $V_{out}$ | $V$ | ↑ $R_{in}$, ↓ $R_{out}$, stabilises $A_v$ |
| Shunt-shunt | $V_{out}$ | $I$ | ↓ $R_{in}$, ↓ $R_{out}$, stabilises $Z_{in}$ |
| Series-series | $I_{out}$ | $V$ | ↑ $R_{in}$, ↑ $R_{out}$, stabilises $g_m$ |
| Shunt-series | $I_{out}$ | $I$ | ↓ $R_{in}$, ↑ $R_{out}$, stabilises $A_i$ |

**Closed-loop gain**: $A_f = \\dfrac{A}{1 + A\\beta}$

**Benefits**: gain stabilised by $\\beta$ (not $A$), bandwidth extended by $(1+A\\beta)$, distortion reduced.

## Barkhausen Criterion for Oscillation

For sustained oscillation, the loop gain must satisfy:
$$|A(j\\omega_0)\\beta(j\\omega_0)| = 1,\\quad \\angle A(j\\omega_0)\\beta(j\\omega_0) = 0°$$

## RC Phase-Shift Oscillator

Three cascaded RC networks each contribute 60° phase shift at oscillation frequency:
$$f_0 = \\frac{1}{2\\pi RC\\sqrt{6}},\\quad A_{min} = 29$$

## Wien Bridge Oscillator

Uses frequency-selective RC bridge network:
$$f_0 = \\frac{1}{2\\pi RC},\\quad A_v = 3$$

Amplitude stabilised by AGC (non-linear element — lamp or diode).

## LC Oscillators

**Colpitts**: capacitive voltage divider provides feedback.
$$f_0 = \\frac{1}{2\\pi\\sqrt{L C_{eq}}},\\quad C_{eq} = \\frac{C_1 C_2}{C_1+C_2}$$

**Hartley**: inductive voltage divider.
$$f_0 = \\frac{1}{2\\pi\\sqrt{(L_1+L_2)C}}$$

**Crystal oscillator**: quartz crystal equivalent circuit — extremely high Q ($10^4$–$10^6$), very stable frequency.

## 555 Timer

**Monostable** (one-shot): output pulse width $t = 1.1RC$

**Astable** (free-running):
$$f = \\frac{1.44}{(R_A + 2R_B)C},\\quad D = \\frac{R_A + R_B}{R_A + 2R_B}$$
`);

// ─── ELECTRIC CIRCUIT THEORY 1 ───────────────────────────────────────────────

write('electric-circuit-theory-1', '00_Introduction.md', `
# Electric Circuit Theory 1 — DC Circuits

## Fundamental Quantities

**Charge** $q$ (coulombs, C): quantised in units of $e = 1.6\\times10^{-19}$ C.

**Current** $i$ (amperes, A): rate of charge flow:
$$i = \\frac{dq}{dt}$$

**Voltage** $v$ (volts, V): energy per unit charge between two points:
$$v_{ab} = \\frac{dw}{dq}$$

**Power** (watts, W): rate of energy delivery:
$$p = vi = i^2 R = \\frac{v^2}{R}$$

**Passive sign convention**: current enters the + terminal → element absorbs power ($p > 0$).

## Energy

$$w = \\int_{t_0}^{t} p\\,d\\tau = \\int_{t_0}^{t} vi\\,d\\tau \\quad\\text{(joules)}$$

## Circuit Elements

| Element | Relation | Symbol |
|---------|---------|--------|
| Resistor | $v = iR$ | R |
| Independent voltage source | $v = V_s$ | Circle with $+/-$ |
| Independent current source | $i = I_s$ | Circle with arrow |
| Dependent sources (VCVS, CCCS, VCCS, CCVS) | Controlled by circuit variable | Diamond |
`);

write('electric-circuit-theory-1', '01_Resistive_Circuits.md', `
# Resistive Circuits

## Ohm's Law
$$v = iR,\\quad G = \\frac{1}{R}\\quad\\text{(siemens, S)}$$

## Series Resistors
$$R_{eq} = R_1 + R_2 + \\cdots + R_n$$

Voltage divider:
$$v_k = v_s \\frac{R_k}{R_1 + R_2 + \\cdots + R_n}$$

## Parallel Resistors
$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n}$$

Two resistors: $R_{eq} = \\dfrac{R_1 R_2}{R_1 + R_2}$

Current divider ($R_1 \\| R_2$):
$$i_1 = i_s \\frac{R_2}{R_1+R_2},\\quad i_2 = i_s \\frac{R_1}{R_1+R_2}$$

## Wye–Delta (Y–Δ) Transformation

**Delta → Wye**:
$$R_1 = \\frac{R_b R_c}{R_a+R_b+R_c},\\quad R_2 = \\frac{R_a R_c}{R_a+R_b+R_c},\\quad R_3 = \\frac{R_a R_b}{R_a+R_b+R_c}$$

**Wye → Delta**:
$$R_a = \\frac{R_1 R_2 + R_2 R_3 + R_3 R_1}{R_1}$$

## Worked Example

$V_s = 12$ V, $R_1 = 4\\,\\Omega$, $R_2 = 8\\,\\Omega$ in parallel, feeding $R_3 = 2\\,\\Omega$ in series.

$R_{23} = \\frac{4\\times8}{4+8} = 2.67\\,\\Omega$, $R_{total} = 2 + 2.67 = 4.67\\,\\Omega$

$I = 12/4.67 = 2.57$ A,  $V_{R1} = 2.57\\times2 = 5.14$ V
`);

write('electric-circuit-theory-1', '02_KVL_KCL.md', `
# Kirchhoff's Laws

## Kirchhoff's Current Law (KCL)

The algebraic sum of all currents leaving a node equals zero:
$$\\sum_{k=1}^n i_k = 0$$

Equivalently: sum of currents entering = sum of currents leaving.

*Basis*: Conservation of charge (from $\\nabla \\cdot \\mathbf{J} + \\partial\\rho/\\partial t = 0$, at low frequencies).

## Kirchhoff's Voltage Law (KVL)

The algebraic sum of all voltages around any closed loop equals zero:
$$\\sum_{k=1}^n v_k = 0$$

*Basis*: Conservative electric field at low frequencies ($\\nabla \\times \\mathbf{E} = 0$, i.e., no changing magnetic flux).

## Systematic Application

**Step 1** — label all branch currents (assign reference directions).  
**Step 2** — apply KCL at $n-1$ independent nodes (where $n$ = number of nodes).  
**Step 3** — apply KVL around $b - n + 1$ independent loops (where $b$ = branches).  
**Step 4** — add element equations ($v = iR$, etc.).  
**Step 5** — solve the system.

## Example: T-network

Three resistors forming a T: $R_1 = 2\\,\\Omega$ (left), $R_2 = 4\\,\\Omega$ (right), $R_3 = 6\\,\\Omega$ (bottom to ground), source $V_s = 10$ V.

KVL left loop: $10 = 2I_1 + 6(I_1 - I_2)$  
KVL right loop: $0 = 4I_2 + 6(I_2 - I_1)$  
Solving: $I_1 = 1.3$ A, $I_2 = 0.78$ A
`);

write('electric-circuit-theory-1', '03_Node_Mesh_Analysis.md', `
# Node and Mesh Analysis

## Nodal Analysis

Choose a **reference node (ground)**. For each remaining node $k$, apply KCL writing currents leaving in terms of node voltages:

$$\\sum_j \\frac{V_k - V_j}{R_{kj}} + \\frac{V_k - V_s}{R_{k,source}} = I_{k,external}$$

Matrix form: $\\mathbf{G}\\mathbf{v} = \\mathbf{i}$

Conductance matrix $\\mathbf{G}$:
- Diagonal: sum of all conductances at node $k$
- Off-diagonal $G_{km}$: negative of conductances between nodes $k$ and $m$

### Supernode
When a voltage source connects two non-reference nodes: treat the two nodes as a single *supernode*, write KCL for the combined region, and add the voltage constraint $V_a - V_b = V_s$.

## Mesh Analysis

Assign clockwise **mesh currents** $I_1, I_2, \\ldots$ Apply KVL to each mesh:

$$\\sum (\\text{self resistance})\\cdot I_k - \\sum (\\text{mutual resistance})\\cdot I_j = V_{k,sources}$$

Matrix form: $\\mathbf{R}\\mathbf{i} = \\mathbf{v}$

Resistance matrix $\\mathbf{R}$:
- Diagonal: sum of resistances in mesh $k$
- Off-diagonal: negative of shared resistances

### Supermesh
When a current source is shared between two meshes: combine the two meshes, write KVL, and add constraint $I_k - I_j = I_s$.

## Comparison

| | Nodal | Mesh |
|--|-------|------|
| Unknowns | Node voltages | Mesh currents |
| Good for | Many current sources | Many voltage sources |
| Equations | $n-1$ | $b - n + 1$ |
`);

write('electric-circuit-theory-1', '04_Network_Theorems.md', `
# Network Theorems

## Superposition

In a linear circuit with multiple independent sources, the response is the sum of responses due to each source acting alone (other sources deactivated: voltage sources → short, current sources → open).

**Limitation**: only for voltage and current, not power (which is nonlinear).

## Thevenin's Theorem

Any linear two-terminal circuit can be replaced by:
- **Thevenin voltage** $V_{th}$ = open-circuit voltage at terminals
- **Thevenin resistance** $R_{th}$ = resistance seen from terminals with all independent sources deactivated

$$V_{th} = V_{oc},\\ R_{th} = \\frac{V_{oc}}{I_{sc}}$$

With dependent sources: must use test source method ($R_{th} = V_x/I_x$).

## Norton's Theorem

Equivalent circuit:
- **Norton current** $I_N = I_{sc}$
- Same $R_{th}$ as Thevenin

**Source transformation**: $V_{th} = I_N R_{th}$

## Maximum Power Transfer

Power delivered to load $R_L$ from Thevenin source:
$$P_L = \\frac{V_{th}^2 R_L}{(R_{th} + R_L)^2}$$

Maximum when $R_L = R_{th}$:
$$P_{max} = \\frac{V_{th}^2}{4R_{th}}$$

Efficiency at MPT = 50% (not used in power systems — used in communications).

## Millman's Theorem

For $n$ parallel branches each with voltage source and series resistance:
$$V_{eq} = \\frac{\\sum V_k/R_k}{\\sum 1/R_k}$$
`);

write('electric-circuit-theory-1', '05_Capacitors_Inductors.md', `
# Capacitors and Inductors

## Capacitor

Stores energy in electric field.

$$i = C\\frac{dv}{dt},\\quad v(t) = \\frac{1}{C}\\int_{-\\infty}^t i\\,d\\tau + v(0)$$

Energy: $w = \\frac{1}{2}Cv^2$

**Key properties**:
- Voltage cannot change instantaneously: $v(0^+) = v(0^-)$
- DC steady state: open circuit ($i = 0$)

Series: $\\frac{1}{C_{eq}} = \\sum \\frac{1}{C_k}$, Parallel: $C_{eq} = \\sum C_k$

## Inductor

Stores energy in magnetic field.

$$v = L\\frac{di}{dt},\\quad i(t) = \\frac{1}{L}\\int_{-\\infty}^t v\\,d\\tau + i(0)$$

Energy: $w = \\frac{1}{2}Li^2$

**Key properties**:
- Current cannot change instantaneously: $i(0^+) = i(0^-)$
- DC steady state: short circuit ($v = 0$)

Series: $L_{eq} = \\sum L_k$, Parallel: $\\frac{1}{L_{eq}} = \\sum \\frac{1}{L_k}$

## Time Constants

**RC circuit**: $\\tau = RC$  
**RL circuit**: $\\tau = L/R$

## First-Order Step Response

General solution for any first-order circuit:
$$x(t) = x(\\infty) + [x(0^+) - x(\\infty)]e^{-t/\\tau},\\quad t > 0$$

**Procedure**:
1. Find $x(0^+)$ (initial condition — capacitor voltage or inductor current)
2. Find $x(\\infty)$ (DC steady state after switch)
3. Find $\\tau$ (time constant from equivalent resistance seen by storage element)
`);

write('electric-circuit-theory-1', '06_RLC_Circuits.md', `
# Second-Order RLC Circuits

## Series RLC — Step Response

KVL: $L\\dfrac{di}{dt} + Ri + \\dfrac{1}{C}\\int i\\,dt = V_s$

Differentiating: $L\\dfrac{d^2i}{dt^2} + R\\dfrac{di}{dt} + \\dfrac{i}{C} = 0$

**Characteristic equation**:
$$s^2 + 2\\alpha s + \\omega_0^2 = 0$$

$$\\alpha = \\frac{R}{2L}\\quad\\text{(damping coefficient)},\\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}\\quad\\text{(resonant frequency)}$$

**Roots**: $s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$

## Three Cases

### Overdamped ($\\alpha > \\omega_0$)
Two distinct real roots $s_1, s_2$:
$$x(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t} + x(\\infty)$$

### Critically Damped ($\\alpha = \\omega_0$)
Repeated root $s = -\\alpha$:
$$x(t) = (A_1 + A_2 t)e^{-\\alpha t} + x(\\infty)$$

Fastest settling without oscillation.

### Underdamped ($\\alpha < \\omega_0$)
Complex roots $s = -\\alpha \\pm j\\omega_d$, where $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$:
$$x(t) = e^{-\\alpha t}(A_1\\cos\\omega_d t + A_2\\sin\\omega_d t) + x(\\infty)$$

Oscillatory response, decaying envelope.

## Parallel RLC

$$\\alpha = \\frac{1}{2RC},\\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}$$

Same characteristic equation, same three cases.

## Quality Factor

$$Q = \\frac{\\omega_0}{2\\alpha}$$

$Q > 0.5$: underdamped. $Q < 0.5$: overdamped. $Q = 0.5$: critically damped.
`);

// ─── ELECTRIC CIRCUIT THEORY 2 ───────────────────────────────────────────────

write('electric-circuit-theory-2', '00_AC_Fundamentals.md', `
# AC Circuit Fundamentals

## Sinusoidal Signals

$$v(t) = V_m\\cos(\\omega t + \\phi)$$

- $V_m$ = amplitude (peak voltage)
- $\\omega = 2\\pi f$ = angular frequency (rad/s)
- $T = 1/f$ = period (s)
- $\\phi$ = phase angle (rad or degrees)

**RMS value**: equivalent DC that delivers same average power.
$$V_{rms} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m$$

UK mains: $V_{rms} = 230$ V, $f = 50$ Hz, $V_m = 325$ V.

## Phase Relationships

$v_1 = V_m\\cos(\\omega t + \\phi_1)$, $v_2 = V_m\\cos(\\omega t + \\phi_2)$

If $\\phi_1 > \\phi_2$: $v_1$ **leads** $v_2$ by $(\\phi_1 - \\phi_2)$.

For R: voltage and current **in phase**.  
For L: voltage **leads** current by 90°.  
For C: voltage **lags** current by 90°.

## Phasors

Transform sinusoids to complex numbers (valid only at single frequency $\\omega$):
$$v(t) = V_m\\cos(\\omega t + \\phi) \\longleftrightarrow \\mathbf{V} = V_m\\angle\\phi$$

Euler's identity: $e^{j\\phi} = \\cos\\phi + j\\sin\\phi$

Operations:
- Addition/subtraction: use rectangular form $a + jb$
- Multiplication/division: use polar form $r\\angle\\theta$

**Differentiation in phasor domain**: $d/dt \\leftrightarrow j\\omega$
`);

write('electric-circuit-theory-2', '01_Impedance.md', `
# Impedance and Admittance

## Impedance Z

Generalised resistance in phasor domain: $\\mathbf{Z} = \\mathbf{V}/\\mathbf{I}$ (ohms)

| Element | Impedance | Admittance $Y = 1/Z$ |
|---------|-----------|---------------------|
| Resistor | $Z_R = R$ | $G = 1/R$ |
| Inductor | $Z_L = j\\omega L$ | $1/(j\\omega L)$ |
| Capacitor | $Z_C = 1/(j\\omega C)$ | $j\\omega C$ |

Impedance in rectangular form: $\\mathbf{Z} = R + jX$
- Resistance $R$ = real part
- Reactance $X$ = imaginary part ($X_L = \\omega L$, $X_C = -1/\\omega C$)

## Series and Parallel Combinations

Same rules as resistors:

**Series**: $\\mathbf{Z}_{eq} = \\mathbf{Z}_1 + \\mathbf{Z}_2 + \\cdots$

**Parallel**: $\\mathbf{Z}_{eq} = \\left(\\sum \\frac{1}{\\mathbf{Z}_k}\\right)^{-1}$

## Voltage and Current Dividers

**Voltage divider**:
$$\\mathbf{V}_2 = \\mathbf{V}_s \\frac{\\mathbf{Z}_2}{\\mathbf{Z}_1 + \\mathbf{Z}_2}$$

**Current divider** (two parallel impedances):
$$\\mathbf{I}_1 = \\mathbf{I}_s \\frac{\\mathbf{Z}_2}{\\mathbf{Z}_1 + \\mathbf{Z}_2}$$

## Nodal and Mesh in Phasor Domain

All the same techniques as DC analysis, but with complex $\\mathbf{Z}$ and phasor sources. KVL and KCL hold for phasors.
`);

write('electric-circuit-theory-2', '02_AC_Power.md', `
# AC Power Analysis

## Instantaneous Power
$$p(t) = v(t)\\cdot i(t) = V_m I_m \\cos(\\omega t + \\theta_v)\\cos(\\omega t + \\theta_i)$$

Using product-to-sum identity:
$$p(t) = \\frac{V_m I_m}{2}\\cos(\\theta_v - \\theta_i) + \\frac{V_m I_m}{2}\\cos(2\\omega t + \\theta_v + \\theta_i)$$

## Average (Real) Power

$$P = \\frac{1}{T}\\int_0^T p\\,dt = \\frac{V_m I_m}{2}\\cos\\theta = V_{rms}I_{rms}\\cos\\theta\\quad\\text{(watts)}$$

where $\\theta = \\theta_v - \\theta_i$ is the impedance angle.

For resistor: $P = I_{rms}^2 R = V_{rms}^2/R$ (all real power).  
For pure L or C: $P = 0$ (no average power consumed).

## Reactive Power

$$Q = V_{rms}I_{rms}\\sin\\theta\\quad\\text{(VAR — volt-ampere reactive)}$$

Positive for inductive ($\\theta > 0$), negative for capacitive ($\\theta < 0$).

## Complex Power

$$\\mathbf{S} = \\frac{1}{2}\\mathbf{V}\\mathbf{I}^* = P + jQ\\quad\\text{(VA)}$$

Apparent power: $|\\mathbf{S}| = V_{rms}I_{rms}$

Power factor: $PF = \\cos\\theta = P/|S|$

**Power factor correction**: add parallel capacitor to bring $PF \\to 1$:
$$C = \\frac{Q_C}{\\omega V_{rms}^2} = \\frac{P(\\tan\\theta_1 - \\tan\\theta_2)}{\\omega V_{rms}^2}$$

## Conservation of Complex Power

In any network: $\\sum \\mathbf{S}_{sources} = \\sum \\mathbf{S}_{loads}$ (real and reactive separately).
`);

write('electric-circuit-theory-2', '03_Resonance.md', `
# Resonance

## Series RLC Resonance

Impedance: $\\mathbf{Z} = R + j\\omega L + 1/(j\\omega C) = R + j(\\omega L - 1/\\omega C)$

At **resonance** $\\omega_0$: imaginary part = 0.
$$\\omega_0 = \\frac{1}{\\sqrt{LC}},\\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$

At $\\omega_0$: $\\mathbf{Z} = R$ (minimum impedance), current is maximum.

**Half-power frequencies** (where $|\\mathbf{Z}| = \\sqrt{2}R$):
$$\\omega_{1,2} = \\pm\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\omega_0^2}$$

**Bandwidth**: $B = \\omega_2 - \\omega_1 = R/L$

**Quality factor**: $Q = \\omega_0/B = \\omega_0 L/R = 1/(\\omega_0 RC)$

At resonance: $V_L = V_C = QV_s$ (voltage magnification!)

## Parallel RLC Resonance

Admittance: $\\mathbf{Y} = G + j\\omega C + 1/(j\\omega L)$

At resonance: $\\omega_0 = 1/\\sqrt{LC}$ (same formula).

At $\\omega_0$: $\\mathbf{Y} = G$ (minimum admittance, maximum impedance), voltage is maximum.

$Q = \\omega_0 C/G = R/(\\omega_0 L)$, Bandwidth $B = G/C = 1/(RC)$

## Frequency Response Plot

$$H(j\\omega) = \\frac{1}{1 + jQ(\\omega/\\omega_0 - \\omega_0/\\omega)}$$

Peak at $\\omega_0$. Sharpness of peak determined by Q.
`);

write('electric-circuit-theory-2', '04_Filters_Bode.md', `
# Filters and Bode Plots

## Transfer Function

$$H(j\\omega) = \\frac{\\mathbf{V}_{out}}{\\mathbf{V}_{in}}$$

## Basic Filter Types

**Low-pass RC**: $H = \\dfrac{1/(j\\omega C)}{R + 1/(j\\omega C)} = \\dfrac{1}{1 + j\\omega RC}$

Corner frequency: $\\omega_c = 1/RC$. Gain = $1/\\sqrt{2}$ at $\\omega_c$.

**High-pass RC**: $H = \\dfrac{R}{R + 1/(j\\omega C)} = \\dfrac{j\\omega RC}{1 + j\\omega RC}$

**Band-pass (series RLC)**: peak at $\\omega_0$, bandwidth $B = R/L$.

**Band-stop (notch)**: zero transmission at $\\omega_0$.

## Bode Plots

Express magnitude in dB: $|H|_{dB} = 20\\log_{10}|H(j\\omega)|$

**Rules for straight-line Bode approximation**:
- Zero at $\\omega = z$: slope increases by $+20$ dB/decade above $z$
- Pole at $\\omega = p$: slope decreases by $-20$ dB/decade above $p$
- Constant gain $K$: $20\\log_{10}K$ horizontal line

Phase contribution:
- Zero: $+45°$/decade around $z$, total $+90°$
- Pole: $-45°$/decade around $p$, total $-90°$

## Butterworth Filter

Maximally flat magnitude response:
$$|H(j\\omega)|^2 = \\frac{1}{1 + (\\omega/\\omega_c)^{2n}}$$

$n$ = filter order. Higher $n$ → steeper roll-off ($-20n$ dB/decade).
`);

write('electric-circuit-theory-2', '05_Three_Phase.md', `
# Three-Phase Circuits

## Balanced Three-Phase Source

Three sinusoidal voltages, equal magnitude, 120° apart:
$$v_a = V_m\\cos\\omega t,\\quad v_b = V_m\\cos(\\omega t - 120°),\\quad v_c = V_m\\cos(\\omega t - 240°)$$

Positive (ABC) sequence. $v_a + v_b + v_c = 0$ always.

## Y-Connection

Line voltage vs phase voltage:
$$V_L = \\sqrt{3}\\,V_{ph}\\angle 30°$$

$V_{ph}$ = voltage from line to neutral. $V_L$ = voltage between lines.

Line current = phase current in Y.

## Δ-Connection

Line voltage = phase voltage ($V_L = V_{ph}$).

Phase current vs line current:
$$I_L = \\sqrt{3}\\,I_{ph}\\angle -30°$$

## Per-Phase Analysis (Balanced System)

Reduce to single-phase equivalent:
1. Convert Δ sources/loads to Y equivalent ($Z_Y = Z_\\Delta / 3$)
2. Solve single-phase circuit with $V_{ph}$ and $Z_Y$
3. Multiply currents/voltages back as needed

## Three-Phase Power

$$P_{total} = 3V_{ph}I_{ph}\\cos\\theta = \\sqrt{3}V_L I_L\\cos\\theta\\quad\\text{(watts)}$$
$$Q_{total} = \\sqrt{3}V_L I_L\\sin\\theta\\quad\\text{(VAR)}$$
$$|S_{total}| = \\sqrt{3}V_L I_L\\quad\\text{(VA)}$$

**Two-wattmeter method** measures total 3-phase power with just 2 wattmeters:
$$P_{total} = W_1 + W_2,\\quad \\tan\\theta = \\sqrt{3}\\frac{W_1-W_2}{W_1+W_2}$$
`);

// ─── ELECTRIC CIRCUIT THEORY 3 ───────────────────────────────────────────────

write('electric-circuit-theory-3', '00_Laplace_Transform.md', `
# Laplace Transform

## Definition

$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} f(t)e^{-st}\\,dt,\\quad s = \\sigma + j\\omega$$

## Common Transform Pairs

| $f(t)$ ($t \\geq 0$) | $F(s)$ |
|---------------------|--------|
| $\\delta(t)$ (impulse) | $1$ |
| $u(t)$ (unit step) | $1/s$ |
| $t$ (ramp) | $1/s^2$ |
| $e^{-at}$ | $1/(s+a)$ |
| $\\sin\\omega t$ | $\\omega/(s^2+\\omega^2)$ |
| $\\cos\\omega t$ | $s/(s^2+\\omega^2)$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{-at}\\sin\\omega t$ | $\\omega/[(s+a)^2+\\omega^2]$ |
| $e^{-at}\\cos\\omega t$ | $(s+a)/[(s+a)^2+\\omega^2]$ |

## Properties

**Linearity**: $\\mathcal{L}\\{af+bg\\} = aF + bG$

**Time shift**: $\\mathcal{L}\\{f(t-a)u(t-a)\\} = e^{-as}F(s)$

**Differentiation**: $\\mathcal{L}\\{f'(t)\\} = sF(s) - f(0^-)$

Second derivative: $\\mathcal{L}\\{f''\\} = s^2 F(s) - sf(0^-) - f'(0^-)$

**Integration**: $\\mathcal{L}\\left\\{\\int_0^t f\\,d\\tau\\right\\} = F(s)/s$

**Frequency shift**: $\\mathcal{L}\\{e^{-at}f(t)\\} = F(s+a)$

## Initial and Final Value Theorems

$$f(0^+) = \\lim_{s\\to\\infty} sF(s)$$
$$f(\\infty) = \\lim_{s\\to 0} sF(s)\\quad\\text{(if final value exists)}$$

## Inverse Laplace — Partial Fractions

For $F(s) = N(s)/D(s)$ with $\\deg N < \\deg D$:

**Distinct real poles**: $F(s) = \\sum_k \\dfrac{K_k}{s - p_k}$, where $K_k = (s-p_k)F(s)|_{s=p_k}$

**Complex conjugate poles**: $(s+a)^2 + \\omega^2$ in denominator → $e^{-at}(A\\cos\\omega t + B\\sin\\omega t)$

**Repeated poles**: $K_k/(s-p)^k$ → $K_k t^{k-1}e^{pt}/(k-1)!$
`);

write('electric-circuit-theory-3', '01_Circuit_Analysis_Laplace.md', `
# Circuit Analysis in s-Domain

## Element Impedances in s-Domain

| Element | Time domain | s-domain impedance | Initial condition |
|---------|------------|-------------------|-------------------|
| Resistor | $v = Ri$ | $Z(s) = R$ | — |
| Inductor | $v = L\\,di/dt$ | $Z(s) = sL$ | Series voltage source $LI_0$ |
| Capacitor | $i = C\\,dv/dt$ | $Z(s) = 1/(sC)$ | Series voltage source $V_0/s$ |

## Procedure

1. Transform the circuit to s-domain (replace elements with impedances, include initial conditions as sources)
2. Apply nodal/mesh analysis using complex impedances
3. Solve for response in s-domain $Y(s)$
4. Take inverse Laplace to get $y(t)$

## Worked Example: Series RLC Step Response

$R = 2\\,\\Omega$, $L = 1$ H, $C = 1/5$ F, $V_s = 10$ V (step), zero initial conditions.

s-domain KVL:
$$\\frac{10}{s} = I(s)\\left(2 + s + \\frac{5}{s}\\right) = I(s)\\frac{s^2 + 2s + 5}{s}$$

$$I(s) = \\frac{10}{s^2 + 2s + 5} = \\frac{10}{(s+1)^2 + 4}$$

$$i(t) = 5e^{-t}\\sin 2t\\;\\text{A},\\quad t \\geq 0$$

## Transfer Function Approach

$$H(s) = \\frac{Y(s)}{X(s)}\\bigg|_{\\text{zero i.c.}}$$

Output for any input: $Y(s) = H(s)X(s)$, then $y(t) = \\mathcal{L}^{-1}\\{Y(s)\\}$
`);

write('electric-circuit-theory-3', '02_Transfer_Functions.md', `
# Transfer Functions and Stability

## Transfer Function

$$H(s) = \\frac{b_m s^m + \\cdots + b_0}{s^n + a_{n-1}s^{n-1} + \\cdots + a_0} = K\\frac{(s-z_1)(s-z_2)\\cdots(s-z_m)}{(s-p_1)(s-p_2)\\cdots(s-p_n)}$$

**Zeros** $z_k$: values of $s$ where $H(s) = 0$  
**Poles** $p_k$: values of $s$ where $H(s) \\to \\infty$

## Stability

System is **BIBO stable** if and only if all poles lie in the **open left-half s-plane** ($\\text{Re}(p_k) < 0$).

- Poles on $j\\omega$ axis: marginally stable (sustained oscillation)
- Poles in right-half plane: unstable (growing response)

## Standard Second-Order System

$$H(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta\\omega_n s + \\omega_n^2}$$

- $\\omega_n$ = natural frequency
- $\\zeta$ = damping ratio

Poles: $s = -\\zeta\\omega_n \\pm j\\omega_n\\sqrt{1-\\zeta^2}$

| $\\zeta$ | Response type |
|---------|--------------|
| $\\zeta > 1$ | Overdamped |
| $\\zeta = 1$ | Critically damped |
| $0 < \\zeta < 1$ | Underdamped (oscillatory) |
| $\\zeta = 0$ | Undamped (pure oscillation) |

## Time-Domain Specifications (Underdamped, Step Response)

$$\\%OS = 100\\,e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}},\\quad T_s \\approx \\frac{4}{\\zeta\\omega_n},\\quad T_r \\approx \\frac{1.8}{\\omega_n}$$
`);

write('electric-circuit-theory-3', '03_Two_Port_Networks.md', `
# Two-Port Networks

## Definition

A two-port has four terminals: port 1 (input: $V_1$, $I_1$) and port 2 (output: $V_2$, $I_2$).

## Parameter Sets

### Z-Parameters (Open-Circuit Impedance)
$$\\begin{pmatrix}V_1\\\\V_2\\end{pmatrix} = \\begin{pmatrix}z_{11}&z_{12}\\\\z_{21}&z_{22}\\end{pmatrix}\\begin{pmatrix}I_1\\\\I_2\\end{pmatrix}$$

$z_{11} = V_1/I_1|_{I_2=0}$ (input impedance with output open)

### Y-Parameters (Short-Circuit Admittance)
$$\\begin{pmatrix}I_1\\\\I_2\\end{pmatrix} = \\begin{pmatrix}y_{11}&y_{12}\\\\y_{21}&y_{22}\\end{pmatrix}\\begin{pmatrix}V_1\\\\V_2\\end{pmatrix}$$

### h-Parameters (Hybrid — used for transistors)
$$\\begin{pmatrix}V_1\\\\I_2\\end{pmatrix} = \\begin{pmatrix}h_{11}&h_{12}\\\\h_{21}&h_{22}\\end{pmatrix}\\begin{pmatrix}I_1\\\\V_2\\end{pmatrix}$$

$h_{21} = I_2/I_1|_{V_2=0}$ = short-circuit current gain ($\\beta$ of BJT)

### ABCD (Transmission) Parameters — Cascade Analysis
$$\\begin{pmatrix}V_1\\\\I_1\\end{pmatrix} = \\begin{pmatrix}A&B\\\\C&D\\end{pmatrix}\\begin{pmatrix}V_2\\\\-I_2\\end{pmatrix}$$

**Cascade connection**: $\\mathbf{T}_{total} = \\mathbf{T}_1 \\mathbf{T}_2 \\mathbf{T}_3 \\cdots$ (matrix multiply)

## Reciprocity

For reciprocal networks (no dependent sources): $z_{12} = z_{21}$, $y_{12} = y_{21}$, $AD - BC = 1$.

## Input Impedance with Load

$$Z_{in} = \\frac{AZ_L + B}{CZ_L + D}$$
`);

write('electric-circuit-theory-3', '04_Fourier_Analysis.md', `
# Fourier Series and Transform

## Fourier Series (Periodic Signals)

For periodic $f(t)$ with period $T = 2\\pi/\\omega_0$:

$$f(t) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\left[a_n\\cos(n\\omega_0 t) + b_n\\sin(n\\omega_0 t)\\right]$$

Coefficients:
$$a_n = \\frac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt,\\quad b_n = \\frac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$$

Complex form:
$$f(t) = \\sum_{n=-\\infty}^{\\infty} c_n e^{jn\\omega_0 t},\\quad c_n = \\frac{1}{T}\\int_0^T f(t)e^{-jn\\omega_0 t}\\,dt$$

## Fourier Transform (Aperiodic Signals)

$$F(j\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-j\\omega t}\\,dt$$

$$f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(j\\omega)e^{j\\omega t}\\,d\\omega$$

Relation to Laplace: $F(j\\omega) = F(s)|_{s=j\\omega}$ (if ROC includes $j\\omega$ axis).

## Key Properties

| Property | Time domain | Frequency domain |
|----------|-------------|-----------------|
| Linearity | $af + bg$ | $aF + bG$ |
| Time shift | $f(t-t_0)$ | $e^{-j\\omega t_0}F$ |
| Frequency shift | $e^{j\\omega_0 t}f(t)$ | $F(\\omega-\\omega_0)$ |
| Convolution | $f*g$ | $F\\cdot G$ |
| Multiplication | $f\\cdot g$ | $\\frac{1}{2\\pi}F*G$ |
| Differentiation | $df/dt$ | $j\\omega F$ |

## Parseval's Theorem

$$\\int_{-\\infty}^{\\infty}|f(t)|^2\\,dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}|F(j\\omega)|^2\\,d\\omega$$

## Circuit Application

System output in frequency domain: $Y(j\\omega) = H(j\\omega)X(j\\omega)$

This is why filters work: $H$ suppresses unwanted frequencies in the input signal's spectrum.
`);

// ─── DIGITAL ELECTRONICS ─────────────────────────────────────────────────────

write('digital-electronics', '00_Number_Systems.md', `
# Number Systems and Binary Arithmetic

## Positional Number Systems

$$N = \\sum_k d_k \\cdot b^k$$

where $b$ = base, $d_k$ = digit at position $k$.

| System | Base | Digits | Prefix |
|--------|------|--------|--------|
| Binary | 2 | 0,1 | 0b |
| Octal | 8 | 0–7 | 0o |
| Decimal | 10 | 0–9 | — |
| Hexadecimal | 16 | 0–9, A–F | 0x |

## Conversion

**Binary → Decimal**: $1011_2 = 1\\cdot8 + 0\\cdot4 + 1\\cdot2 + 1\\cdot1 = 11_{10}$

**Decimal → Binary**: Repeated division by 2, read remainders bottom-up.

**Hex ↔ Binary**: Each hex digit = exactly 4 bits.  
$\\text{A3}_{16} = 1010\\,0011_2$

## Binary Arithmetic

**Addition**: carry when sum $\\geq 2$.

**Subtraction via 2's complement**:
1. Invert all bits (1's complement)
2. Add 1
3. Then add: $A - B = A + \\overline{B} + 1$

Discard carry-out from MSB for correct result.

## Signed Representations

| Format | Range (8-bit) | $-1$ example |
|--------|--------------|-------------|
| Sign-magnitude | $-127$ to $+127$ | $1000\\,0001$ |
| 1's complement | $-127$ to $+127$ | $1111\\,1110$ |
| **2's complement** | $-128$ to $+127$ | $1111\\,1111$ |

2's complement is universal: single zero, simple arithmetic, MSB weight = $-2^{n-1}$.

## Overflow Detection

In 2's complement addition: overflow occurs if carry into MSB ≠ carry out of MSB.
`);

write('digital-electronics', '01_Boolean_Algebra.md', `
# Boolean Algebra

## Axioms

$$0 + 0 = 0,\\quad 1 + 1 = 1,\\quad 0 \\cdot 1 = 0,\\quad \\bar{0} = 1,\\quad \\bar{1} = 0$$

## Key Theorems

| Identity law | $A + 0 = A$, $A \\cdot 1 = A$ |
|---|---|
| Null law | $A + 1 = 1$, $A \\cdot 0 = 0$ |
| Idempotent | $A + A = A$, $A \\cdot A = A$ |
| Complement | $A + \\bar{A} = 1$, $A \\cdot \\bar{A} = 0$ |
| Absorption | $A + AB = A$, $A(A+B) = A$ |
| Consensus | $AB + \\bar{A}C + BC = AB + \\bar{A}C$ |

## DeMorgan's Theorems

$$\\overline{A + B} = \\bar{A}\\cdot\\bar{B}\\quad\\text{(NOR = AND of complements)}$$
$$\\overline{A \\cdot B} = \\bar{A} + \\bar{B}\\quad\\text{(NAND = OR of complements)}$$

To apply: **break the bar, change the operation**.

## Canonical Forms

**Minterm** $m_i$: AND of all variables (complemented if 0). $f = 1$ for this input.

**Maxterm** $M_i$: OR of all variables (complemented if 1). $f = 0$ for this input.

$$f = \\sum m(\\text{minterms where } f=1) = \\prod M(\\text{maxterms where } f=0)$$

**SOP (Sum of Products)**: OR of AND terms. From minterms.  
**POS (Product of Sums)**: AND of OR terms. From maxterms.

## Duality

Swap AND↔OR and 0↔1: any theorem remains valid.
`);

write('digital-electronics', '02_Karnaugh_Maps.md', `
# Karnaugh Maps

## Purpose

Systematic graphical method for Boolean minimisation. Minimises SOP or POS by grouping adjacent minterms.

## Structure

Cells arranged so adjacent cells differ by exactly one variable (Gray code ordering).

**2-variable (4 cells)**: trivial.  
**3-variable (8 cells)**: 2×4 grid.  
**4-variable (16 cells)**: 4×4 grid. Edges wrap around (torus topology).

## Grouping Rules

- Groups must be powers of 2: 1, 2, 4, 8, 16
- Groups must be rectangular (including wrap-around)
- Larger groups = fewer literals
- **Prime implicant**: largest possible group
- **Essential prime implicant**: covers a minterm not covered by any other prime implicant

## Minimisation Procedure

1. Mark all minterms (1-cells)
2. Find all prime implicants
3. Identify essential prime implicants (must include)
4. Cover remaining minterms with fewest additional prime implicants
5. Write SOP: one AND term per group, omit variables that change within the group

## Don't Care Conditions

Cells marked X can be grouped or not — choose to maximise group sizes.

## Example: 4-variable

$f(A,B,C,D) = \\sum m(0,1,3,7,8,9,11,15)$

Groups: $\\{0,1,8,9\\}$ → $\\bar{B}\\bar{C}$; $\\{1,3,9,11\\}$ → $\\bar{B}D$; $\\{3,7,11,15\\}$ → $CD$

Minimal SOP: $f = \\bar{B}\\bar{C} + \\bar{B}D + CD$
`);

write('digital-electronics', '03_Combinational_Logic.md', `
# Combinational Logic Circuits

## Adders

**Half Adder**: inputs A, B; outputs Sum S = A⊕B, Carry C = AB

**Full Adder**: inputs A, B, Cin; outputs:
$$S = A \\oplus B \\oplus C_{in},\\quad C_{out} = AB + C_{in}(A \\oplus B)$$

**Ripple Carry Adder**: chain of $n$ full adders. Carry propagates serially → delay = $n \\cdot t_{FA}$.

**Carry Lookahead Adder**: Generate $G_i = A_i B_i$, Propagate $P_i = A_i \\oplus B_i$.
$$C_{i+1} = G_i + P_i C_i$$

Expand recursively — all carries computed in 2 gate levels, regardless of $n$.

## Multiplexer (MUX)

$2^n$-to-1 MUX with $n$ select lines. Output = input selected by select code.

**Implementing Boolean functions**: route minterms to a MUX.  
Any $n$-variable function using $2^n$-to-1 MUX (connect inputs to 0 or 1).  
Or use $2^{n-1}$-to-1 MUX with one variable on data inputs.

## Decoder

$n$-to-$2^n$ decoder: activates exactly one of $2^n$ outputs for each input code.

**Use as minterm generator**: connect outputs to OR gate to implement any SOP function.

## Encoder and Priority Encoder

Encoder: $2^n$ inputs → $n$-bit code (inverse of decoder). Only one input active at a time.

Priority encoder: multiple inputs may be active; outputs code of highest-priority active input. Also outputs valid-bit V.

## Comparator

1-bit: $A = B$ iff $A \\odot B = 1$, $A > B$ iff $A\\bar{B}=1$.

4-bit: $A = B$ when all bits equal. $A > B$ checked MSB first.
`);

write('digital-electronics', '04_Sequential_Logic.md', `
# Sequential Logic

## Latches

**SR Latch** (NOR-based): Set=1,Reset=0 → Q=1; Set=0,Reset=1 → Q=0; Both 0 → hold; Both 1 → forbidden.

**D Latch** (transparent): When Enable=1, Q follows D. When Enable=0, holds last value.

## Flip-Flops (Edge-Triggered)

Captures input only at clock edge — eliminates transparency issues.

### D Flip-Flop
$Q^+ = D$ on rising clock edge. Most common. Characteristic equation: $Q^+(t+1) = D(t)$.

### JK Flip-Flop
$J=1,K=0$: Set. $J=0,K=1$: Reset. $J=K=0$: Hold. $J=K=1$: Toggle.
$$Q^+ = J\\bar{Q} + \\bar{K}Q$$

### T Flip-Flop
$T=0$: hold. $T=1$: toggle. $Q^+ = T \\oplus Q$. Used in counters.

## Timing Parameters

**Setup time** $t_{su}$: D must be stable before clock edge.  
**Hold time** $t_h$: D must remain stable after clock edge.  
**Propagation delay** $t_{pQ}$: clock edge to output change.

**Maximum clock frequency**: $f_{max} = 1/(t_{pQ} + t_{su} + t_{slack})$

## State Machine Design

1. Define states and state diagram
2. Binary encoding of states
3. Derive next-state equations from excitation table
4. Implement with flip-flops and combinational logic
5. Handle reset/unused states
`);

write('digital-electronics', '05_Counters_Registers.md', `
# Counters and Registers

## Asynchronous (Ripple) Counter

T flip-flops chained: each FF triggered by output of previous.

4-bit binary up counter: $Q_0$ toggles every clock, $Q_1$ toggles every 2 clocks, etc.

**Problem**: propagation delay accumulates through chain → glitches at high frequencies.

## Synchronous Counter

All flip-flops clocked simultaneously. Next-state logic computed combinationally.

4-bit synchronous binary up counter:
- $T_0 = 1$ (always)
- $T_1 = Q_0$
- $T_2 = Q_0 Q_1$
- $T_3 = Q_0 Q_1 Q_2$

Carry-lookahead for large counters avoids delay accumulation.

## Modulo-N Counter

Count 0 to $N-1$, then reset. Use: detect when output = $N-1$, reset synchronously.

BCD counter: modulo-10 (counts 0–9).

## Shift Registers

| Type | Serial In | Serial Out | Parallel In | Parallel Out |
|------|-----------|-----------|------------|-------------|
| SISO | ✓ | ✓ | — | — |
| SIPO | ✓ | — | — | ✓ |
| PISO | — | ✓ | ✓ | — |
| PIPO | — | — | ✓ | ✓ |

**Ring counter**: output of last FF fed back to input. One-hot encoding: $n$-bit ring has $n$ states.

**Johnson counter**: inverted output of last FF fed back. $n$-bit Johnson = $2n$ states.

## Applications

Serial-to-parallel conversion (UART receiver), parallel-to-serial (UART transmitter), pseudo-random sequence generation (LFSR), digital delay lines.
`);

write('digital-electronics', '06_Memory_ADC_DAC.md', `
# Memory, ADC, and DAC

## Memory Types

| Type | Volatile | Writeable | Notes |
|------|----------|-----------|-------|
| SRAM | Yes | Yes | Fast, 6T cell, used as cache |
| DRAM | Yes | Yes | Dense, 1T1C, needs refresh |
| ROM | No | No | Mask programmed |
| EPROM | No | UV erase | |
| EEPROM/Flash | No | Electrically | Block erase |

**Capacity**: $2^n \\times m$ bits with $n$ address lines and $m$-bit data bus.

## ADC — Successive Approximation Register (SAR)

Most common for 8–16 bit resolution.

1. Start with MSB = 1, all others 0 → compare $V_{DAC}$ with $V_{in}$
2. If $V_{DAC} > V_{in}$: clear bit; else keep bit
3. Move to next bit, repeat
4. After $n$ steps: $n$-bit result

Conversion time: $n$ clock cycles.

## Flash ADC

$2^n - 1$ comparators in parallel. All compare simultaneously → 1-cycle conversion.

Fast but exponentially expensive: 8-bit needs 255 comparators.

## DAC — R-2R Ladder

$$V_{out} = -V_{ref}\\left(\\frac{b_{n-1}}{2} + \\frac{b_{n-2}}{4} + \\cdots + \\frac{b_0}{2^n}\\right)$$

Uses only two resistor values (R and 2R). $n$-bit DAC needs only $2n$ resistors.

## Key Specifications

**Resolution**: $\\Delta = V_{FSR}/2^n$ (smallest voltage step)

**Quantisation error**: $\\pm \\frac{1}{2}$LSB

**Nyquist-Shannon theorem**: sample rate $f_s > 2f_{max}$ to avoid aliasing.
$$f_s \\geq 2f_{max}$$

Anti-aliasing low-pass filter must be applied before sampling.
`);

console.log('All files written successfully!');
