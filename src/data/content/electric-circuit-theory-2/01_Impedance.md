# Impedance and Admittance

## Impedance Z

Generalised resistance in phasor domain: $\mathbf{Z} = \mathbf{V}/\mathbf{I}$ (ohms)

| Element | Impedance | Admittance $Y = 1/Z$ |
|---------|-----------|---------------------|
| Resistor | $Z_R = R$ | $G = 1/R$ |
| Inductor | $Z_L = j\omega L$ | $1/(j\omega L)$ |
| Capacitor | $Z_C = 1/(j\omega C)$ | $j\omega C$ |

Impedance in rectangular form: $\mathbf{Z} = R + jX$
- Resistance $R$ = real part
- Reactance $X$ = imaginary part ($X_L = \omega L$, $X_C = -1/\omega C$)

## Series and Parallel Combinations

Same rules as resistors:

**Series**: $\mathbf{Z}_{eq} = \mathbf{Z}_1 + \mathbf{Z}_2 + \cdots$

**Parallel**: $\mathbf{Z}_{eq} = \left(\sum \frac{1}{\mathbf{Z}_k}\right)^{-1}$

## Voltage and Current Dividers

**Voltage divider**:
$$\mathbf{V}_2 = \mathbf{V}_s \frac{\mathbf{Z}_2}{\mathbf{Z}_1 + \mathbf{Z}_2}$$

**Current divider** (two parallel impedances):
$$\mathbf{I}_1 = \mathbf{I}_s \frac{\mathbf{Z}_2}{\mathbf{Z}_1 + \mathbf{Z}_2}$$

## Nodal and Mesh in Phasor Domain

All the same techniques as DC analysis, but with complex $\mathbf{Z}$ and phasor sources. KVL and KCL hold for phasors.