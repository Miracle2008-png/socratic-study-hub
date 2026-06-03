# Power Cycles

## Ideal Rankine Cycle (Steam Power)

Four processes:
1. **1→2** Isentropic compression in pump: $w_p = v_1(P_2 - P_1)$
2. **2→3** Constant-pressure heat addition in boiler: $q_{in} = h_3 - h_2$
3. **3→4** Isentropic expansion in turbine: $w_t = h_3 - h_4$
4. **4→1** Constant-pressure condensation: $q_{out} = h_4 - h_1$

$$\eta_{Rankine} = \frac{w_{net}}{q_{in}} = \frac{(h_3-h_4)-(h_2-h_1)}{h_3-h_2}$$

**Improvements**: superheating (raises T of heat addition), reheating (expands in two stages), regeneration (feed-water heating from turbine bleed steam).

## Ideal Otto Cycle (Petrol Engine)

Two isentropic + two isochoric processes.

$$\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}},\quad r = \frac{V_{max}}{V_{min}}\text{ (compression ratio)}$$

Efficiency increases with compression ratio. Typical $r \approx 8$–$12$, $\eta \approx 56\%$ ideal.

## Ideal Diesel Cycle

Isentropic compression, constant-pressure heat addition, isentropic expansion, constant-volume heat rejection.

$$\eta_{Diesel} = 1 - \frac{1}{r^{\gamma-1}}\cdot\frac{r_c^\gamma - 1}{\gamma(r_c - 1)},\quad r_c = \frac{V_3}{V_2}\text{ (cutoff ratio)}$$

For same $r$: $\eta_{Diesel} < \eta_{Otto}$, but Diesel operates at higher $r$.

## Ideal Brayton Cycle (Gas Turbine)

Two isentropic + two isobaric processes.

$$\eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}},\quad r_p = P_{max}/P_{min}$$

Back work ratio $= w_{compressor}/w_{turbine}$ is high (~40–80%): compressor work is significant.

## Refrigeration (Reversed Carnot / Vapour Compression)

$$COP_{refrigerator} = \frac{Q_L}{W_{net}} = \frac{h_1 - h_4}{h_2 - h_1}$$
$$COP_{heat pump} = \frac{Q_H}{W_{net}} = COP_{ref} + 1$$