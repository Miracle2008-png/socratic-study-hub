---
title: "The Diesel and Dual Cycles"
---

# The Diesel and Dual Cycles

## 1. The Diesel Cycle

The **Diesel cycle** models the **compression-ignition (diesel) engine**. Unlike the Otto cycle (spark ignition), a diesel engine compresses air only to such high pressure and temperature that the injected diesel fuel autoignites spontaneously — no spark plug needed.

### Key Difference from Otto Cycle

In a diesel engine, fuel is injected at TDC and burns progressively as the piston begins its power stroke. Combustion occurs at **approximately constant pressure** (the piston moves out as fuel burns, maintaining pressure), not at constant volume.

### The Four Processes

**1→2: Isentropic Compression** (same as Otto — very high $r_v = 14$–$25$)
**2→3: Isobaric Heat Addition** (combustion at constant pressure, piston moves)
**3→4: Isentropic Expansion** (power stroke)
**4→1: Isochoric Heat Rejection** (exhaust blowdown)

### Diesel Efficiency

$$\eta_{Diesel} = 1 - \frac{1}{r_v^{\gamma-1}} \cdot \frac{r_c^\gamma - 1}{\gamma(r_c - 1)}$$

Where $r_c = v_3/v_2$ is the **cutoff ratio** — how far the piston travels during constant-pressure combustion.

For the same compression ratio, $\eta_{Diesel} < \eta_{Otto}$ (the cutoff term is always $> 1$). **However**, diesel engines run much higher compression ratios ($r_v = 14$–$25$ vs. $8$–$12$ for petrol), which more than compensates. Real diesel engines are typically 5–10% more efficient than petrol engines of similar displacement.

## 2. The Dual (Sabathe) Cycle

Real diesel engines do not have perfectly isobaric combustion — the initial combustion phase is more nearly isochoric (very rapid pressure rise), followed by isobaric combustion as the piston moves.

The **Dual cycle** models this more accurately with:
- Isochoric heat addition $Q_1$ (rapid initial combustion at TDC)
- Isobaric heat addition $Q_2$ (slower combustion as piston moves)

$$\eta_{Dual} = 1 - \frac{1}{r_v^{\gamma-1}} \cdot \frac{\alpha r_c^\gamma - 1}{(\alpha - 1) + \alpha\gamma(r_c - 1)}$$

Where $\alpha = P_3/P_2$ is the **pressure ratio** for the constant-volume portion.

The Dual cycle neatly reduces to the Otto cycle ($r_c = 1$) and to the Diesel cycle ($\alpha = 1$).

## 3. Comparison Summary

| Parameter | Otto | Diesel | Dual |
|---|---|---|---|
| Ignition | Spark | Compression | Compression |
| Combustion type | Isochoric | Isobaric | Both |
| Typical $r_v$ | 8–12 | 14–25 | 14–20 |
| Fuel | Petrol | Diesel | Diesel/HFO |
| Typical $\eta_{brake}$ | 30–35% | 35–45% | 40–50% |
| Applications | Cars, bikes | Trucks, ships | Large marine |
