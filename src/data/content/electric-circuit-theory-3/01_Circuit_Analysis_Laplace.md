# Circuit Analysis in s-Domain

## Element Impedances in s-Domain

| Element | Time domain | s-domain impedance | Initial condition |
|---------|------------|-------------------|-------------------|
| Resistor | $v = Ri$ | $Z(s) = R$ | — |
| Inductor | $v = L\,di/dt$ | $Z(s) = sL$ | Series voltage source $LI_0$ |
| Capacitor | $i = C\,dv/dt$ | $Z(s) = 1/(sC)$ | Series voltage source $V_0/s$ |

## Procedure

1. Transform the circuit to s-domain (replace elements with impedances, include initial conditions as sources)
2. Apply nodal/mesh analysis using complex impedances
3. Solve for response in s-domain $Y(s)$
4. Take inverse Laplace to get $y(t)$

## Worked Example: Series RLC Step Response

$R = 2\,\Omega$, $L = 1$ H, $C = 1/5$ F, $V_s = 10$ V (step), zero initial conditions.

s-domain KVL:
$$\frac{10}{s} = I(s)\left(2 + s + \frac{5}{s}\right) = I(s)\frac{s^2 + 2s + 5}{s}$$

$$I(s) = \frac{10}{s^2 + 2s + 5} = \frac{10}{(s+1)^2 + 4}$$

$$i(t) = 5e^{-t}\sin 2t\;\text{A},\quad t \geq 0$$

## Transfer Function Approach

$$H(s) = \frac{Y(s)}{X(s)}\bigg|_{\text{zero i.c.}}$$

Output for any input: $Y(s) = H(s)X(s)$, then $y(t) = \mathcal{L}^{-1}\{Y(s)\}$