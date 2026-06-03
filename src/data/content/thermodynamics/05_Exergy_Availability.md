# Exergy and Availability

## Concept

**Exergy** (available work): maximum useful work obtainable from a system as it reaches equilibrium with the environment (dead state $T_0, P_0$).

Unlike energy, exergy is destroyed by irreversibilities.

## Closed System Exergy

$$\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0)$$

Specific flow exergy:
$$\psi = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$$

## Exergy Transfer

With heat $Q$ at temperature $T$: $X_{heat} = \left(1 - \frac{T_0}{T}\right)Q$

With work: $X_{work} = W - W_{surr} = W - P_0(V_2 - V_1)$

## Exergy Destruction

$$X_{destroyed} = T_0 S_{gen} \geq 0$$

Second law says exergy is destroyed whenever entropy is generated.

## Second-Law Efficiency

$$\eta_{II} = \frac{\text{exergy recovered}}{\text{exergy expended}}$$

For a heat engine: $\eta_{II} = \eta_{thermal}/\eta_{Carnot}$

## Exergy Balance

$$\dot{X}_{in} - \dot{X}_{out} - \dot{X}_{destroyed} = \frac{d\Phi_{cv}}{dt}$$

Exergy analysis pinpoints where irreversibilities are largest — more useful than energy analysis for identifying improvement opportunities.