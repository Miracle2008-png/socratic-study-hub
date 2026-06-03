# Network Theorems

## Superposition

In a linear circuit with multiple independent sources, the response is the sum of responses due to each source acting alone (other sources deactivated: voltage sources → short, current sources → open).

**Limitation**: only for voltage and current, not power (which is nonlinear).

## Thevenin's Theorem

Any linear two-terminal circuit can be replaced by:
- **Thevenin voltage** $V_{th}$ = open-circuit voltage at terminals
- **Thevenin resistance** $R_{th}$ = resistance seen from terminals with all independent sources deactivated

$$V_{th} = V_{oc},\ R_{th} = \frac{V_{oc}}{I_{sc}}$$

With dependent sources: must use test source method ($R_{th} = V_x/I_x$).

## Norton's Theorem

Equivalent circuit:
- **Norton current** $I_N = I_{sc}$
- Same $R_{th}$ as Thevenin

**Source transformation**: $V_{th} = I_N R_{th}$

## Maximum Power Transfer

Power delivered to load $R_L$ from Thevenin source:
$$P_L = \frac{V_{th}^2 R_L}{(R_{th} + R_L)^2}$$

Maximum when $R_L = R_{th}$:
$$P_{max} = \frac{V_{th}^2}{4R_{th}}$$

Efficiency at MPT = 50% (not used in power systems — used in communications).

## Millman's Theorem

For $n$ parallel branches each with voltage source and series resistance:
$$V_{eq} = \frac{\sum V_k/R_k}{\sum 1/R_k}$$