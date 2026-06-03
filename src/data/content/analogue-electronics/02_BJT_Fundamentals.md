# BJT Fundamentals

## Structure and Regions

A **Bipolar Junction Transistor (BJT)** has three doped regions: Emitter (heavily doped), Base (thin, lightly doped), Collector (moderately doped).

**NPN**: current flows Collector → Emitter when $V_{BE} \approx 0.7$ V and $V_{CE} > V_{CE,sat}$.

## DC Relations

$$I_C = \beta I_B = \alpha I_E$$
$$I_E = I_C + I_B$$
$$\alpha = \frac{\beta}{\beta+1},\quad \beta = \frac{\alpha}{1-\alpha}$$

Typical: $\beta = 50$–$300$.

## Operating Regions

| Region | $V_{BE}$ | $V_{BC}$ | Use |
|--------|---------|---------|-----|
| Cutoff | < 0.5 V | Reverse | Switch OFF |
| Active | ≈ 0.7 V | Reverse | Amplifier |
| Saturation | ≈ 0.7 V | Forward | Switch ON |

## Voltage-Divider Bias (Most Stable)

$$V_B = V_{CC}\frac{R_2}{R_1+R_2},\quad V_E = V_B - 0.7$$
$$I_C \approx I_E = \frac{V_E}{R_E}$$

Stability condition: $R_1 \| R_2 \ll \beta R_E$ (makes $V_B$ independent of $\beta$).

## Early Effect

In reality, $I_C$ increases slightly with $V_{CE}$ due to base-width modulation:
$$I_C = I_S e^{V_{BE}/V_T}\left(1 + \frac{V_{CE}}{V_A}\right)$$

Early voltage $V_A \approx 50$–$200$ V. Output resistance: $r_o = V_A/I_C$.