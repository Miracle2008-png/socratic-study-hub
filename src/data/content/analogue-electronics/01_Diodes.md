# Diodes

## PN Junction

When P-type and N-type semiconductors join, majority carriers diffuse across the junction, leaving a depletion region with a built-in potential:
$$V_{bi} = \frac{k_BT}{q}\ln\frac{N_A N_D}{n_i^2}$$

## Ideal Diode Equation

$$I = I_0\left(e^{V/nV_T} - 1\right)$$

- $I_0$ = reverse saturation current ($\sim 10^{-14}$ A for Si)
- $n$ = ideality factor (1 for diffusion, 2 for recombination)
- $V_T = kT/q \approx 26\,\text{mV}$ at 300 K

**Forward bias** ($V > 0$): Current grows exponentially. Si turn-on $\approx 0.7$ V.  
**Reverse bias** ($V < 0$): $I \approx -I_0$ (leakage only).  
**Breakdown**: Avalanche or Zener at $V = -V_{BR}$.

## Small-Signal Model

For a DC operating point $I_D$:
$$r_d = \frac{nV_T}{I_D}$$

Replace diode with $r_d$ in series with battery $V_{D0} \approx 0.7$ V.

## Zener Diode (Voltage Regulator)

Designed to operate in reverse breakdown at $V_Z$. Circuit:

$$V_{out} = V_Z, \quad R_s = \frac{V_{in} - V_Z}{I_Z + I_L}$$

Choose $R_s$ such that $I_Z > I_{Z,min}$ even at maximum load.

## Rectifier Circuits

| Type | Peak output | Ripple | PIV per diode |
|------|-------------|--------|---------------|
| Half-wave | $V_m$ | $V_m/f RC$ | $2V_m$ |
| Full-wave (centre-tap) | $V_m$ | $V_m/2fRC$ | $2V_m$ |
| Bridge | $V_m$ | $V_m/2fRC$ | $V_m$ |

With filter capacitor $C$, ripple voltage:
$$V_r \approx \frac{V_m}{fRC}\quad\text{(half-wave)},\quad \frac{V_m}{2fRC}\quad\text{(full-wave)}$$