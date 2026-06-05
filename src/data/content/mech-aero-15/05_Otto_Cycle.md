# The Otto Cycle: Petrol Engines

The **Otto cycle** is the ideal thermodynamic model for the **spark-ignition (petrol/gasoline) internal combustion engine** — the engine powering most passenger cars, motorcycles, and small aircraft. Nikolaus Otto built the first practical four-stroke engine in 1876 based on this cycle.

## 1. The Four Strokes vs. The Thermodynamic Cycle

The physical four-stroke engine (intake, compression, power, exhaust) is idealized into a closed thermodynamic cycle operating on a fixed mass of air-fuel mixture, with combustion modeled as instantaneous heat addition at constant volume.

## 2. The Ideal Otto Cycle (Four Processes)

All processes act on a fixed mass inside the cylinder:

**Process 1→2: Isentropic Compression**
Piston compresses the fresh charge adiabatically from BDC (bottom dead center, $v_1$) to TDC ($v_2$). Temperature rises from $T_1$ to $T_2$.

**Process 2→3: Isochoric Heat Addition (Combustion)**
Spark fires. Rapid combustion releases heat $Q_{in}$ at constant volume (piston momentarily stationary at TDC). Pressure and temperature spike.
$$Q_{in} = mc_v(T_3 - T_2)$$

**Process 3→4: Isentropic Expansion (Power Stroke)**
Hot high-pressure gases push the piston down to BDC, doing work on the crankshaft.

**Process 4→1: Isochoric Heat Rejection (Exhaust Blowdown)**
Exhaust valve opens at BDC. Gases cool at constant volume, pressure drops to atmospheric.
$$Q_{out} = mc_v(T_4 - T_1)$$

## 3. Thermal Efficiency and Compression Ratio

The **compression ratio** $r_v = v_1/v_2$ is the single most important parameter:

$$\boxed{\eta_{Otto} = 1 - \frac{Q_{out}}{Q_{in}} = 1 - \frac{1}{r_v^{\gamma - 1}}}$$

For air ($\gamma = 1.4$):
| $r_v$ | $\eta_{Otto}$ |
|---|---|
| 6 | 51.2% |
| 8 | 56.5% |
| 10 | 60.2% |
| 12 | 63.0% |

**Higher compression ratio → higher efficiency.** But: high $r_v$ causes autoignition (knocking) before the spark fires, destroying the engine. Premium (high-octane) fuel resists autoignition, enabling higher $r_v$. Typical petrol engines: $r_v = 8$–$12$.

## 4. Real Engine Losses

Ideal Otto efficiency vastly overpredicts real engine performance. Real engines lose efficiency due to:
- **Heat transfer** during compression and expansion (not truly isentropic).
- **Finite combustion time** (combustion not instantaneous).
- **Exhaust losses** (exhaust valve opens before full expansion).
- **Friction** (rings, bearings, valve train).
- **Pumping losses** (intake/exhaust strokes against atmospheric pressure).

Real petrol engine indicated thermal efficiency: ~38%. Brake efficiency (at the flywheel): ~30–35%.
