# MOSFETs

## Structure

**NMOS enhancement-mode**: P-substrate, N+ source/drain, SiO₂ gate insulator, polysilicon gate. Channel forms when $V_{GS} > V_t$.

## Current Equations

**Triode** (linear) region — $V_{DS} < V_{GS} - V_t$:
$$i_D = k_n\left[(V_{GS}-V_t)V_{DS} - \frac{V_{DS}^2}{2}\right]$$

**Saturation** region — $V_{DS} \geq V_{GS} - V_t$:
$$i_D = \frac{k_n}{2}(V_{GS}-V_t)^2(1 + \lambda V_{DS})$$

Where $k_n = \mu_n C_{ox}(W/L)$ is the process transconductance parameter.

**Threshold voltage** $V_t$: modified by body effect $V_{SB}$:
$$V_t = V_{t0} + \gamma(\sqrt{|2\phi_F + V_{SB}|} - \sqrt{|2\phi_F|})$$

## Small-Signal Model

$$g_m = \frac{2I_D}{V_{GS}-V_t} = \sqrt{2k_n I_D},\quad r_o = \frac{|V_A|}{I_D}$$

## Amplifier Configurations

| Config | $A_v$ | $R_{in}$ | $R_{out}$ |
|--------|-------|---------|---------|
| Common Source | $-g_m(R_D\|r_o)$ | $\infty$ | $R_D\|r_o$ |
| Common Gate | $g_m(R_D\|r_o)$ | $1/g_m$ | $R_D\|r_o$ |
| Common Drain (Source follower) | $\approx 1$ | $\infty$ | $1/g_m$ |

## CMOS Inverter

PMOS + NMOS with shared input/output. 

Voltage Transfer Characteristic (VTC): sharp transition at $V_{M} \approx V_{DD}/2$ for symmetric design.

Noise margins: $NM_H = V_{OH} - V_{IH}$, $NM_L = V_{IL} - V_{OL}$.

Power: static = 0 (ideal), dynamic = $C_L V_{DD}^2 f$.