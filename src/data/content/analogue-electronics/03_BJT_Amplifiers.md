# BJT Amplifiers

## Hybrid-π Small-Signal Model

At Q-point $(I_C, V_{CE})$:
$$g_m = \frac{I_C}{V_T},\quad r_\pi = \frac{\beta}{g_m},\quad r_o = \frac{V_A}{I_C}$$

## Common Emitter (CE)

Most useful: high voltage gain, inverting.

$$A_v = -g_m(R_C \| r_o),\quad R_{in} = r_\pi,\quad R_{out} = R_C \| r_o$$

With emitter resistance $R_E$ (unbypassed):
$$A_v \approx -\frac{R_C}{R_E}\quad\text{(stable, gain-bandwidth traded)}$$

## Common Collector (Emitter Follower)

Voltage gain ≈ 1 (non-inverting), high $R_{in}$, low $R_{out}$ — ideal buffer.

$$A_v \approx 1,\quad R_{in} = r_\pi + (\beta+1)R_E,\quad R_{out} \approx \frac{r_\pi + R_S}{\beta+1}$$

## Common Base (CB)

Non-inverting, low $R_{in} = 1/g_m$, high $R_{out}$. Used in high-frequency and cascode circuits.

$$A_v = g_m R_C,\quad R_{in} = \frac{1}{g_m}$$

## Frequency Response

**Miller effect**: feedback capacitance $C_{\mu}$ from collector to base is multiplied by $(1+|A_v|)$ when referred to input — severely limits bandwidth in CE configuration.

Unity-gain frequency: $f_T = g_m / (2\pi(C_\pi + C_\mu))$

Upper $-3$ dB frequency: $f_H \approx \frac{1}{2\pi R'_{sig}(C_\pi + C_\mu(1+g_m R'_L))}$