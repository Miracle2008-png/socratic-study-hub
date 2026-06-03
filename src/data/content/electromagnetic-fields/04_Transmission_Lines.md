# Transmission Lines

## Telegrapher's Equations

Distributed model (resistance $R'$, inductance $L'$, conductance $G'$, capacitance $C'$ per unit length):

$$\frac{\partial V}{\partial z} = -(R' + j\omega L')I$$
$$\frac{\partial I}{\partial z} = -(G' + j\omega C')V$$

Propagation constant: $\gamma = \sqrt{(R'+j\omega L')(G'+j\omega C')} = \alpha + j\beta$

**Characteristic impedance**: $Z_0 = \sqrt{(R'+j\omega L')/(G'+j\omega C')}$

**Lossless line** ($R'=G'=0$): $Z_0 = \sqrt{L'/C'}$, $v_p = 1/\sqrt{L'C'}$

## Standing Waves

Reflection coefficient at load:
$$\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0}$$

Voltage Standing Wave Ratio:
$$VSWR = \frac{1+|\Gamma_L|}{1-|\Gamma_L|}$$

$VSWR = 1$: matched ($Z_L = Z_0$). $VSWR \to \infty$: open or short circuit.

## Input Impedance

$$Z_{in} = Z_0\frac{Z_L + jZ_0\tan\beta l}{Z_0 + jZ_L\tan\beta l}$$

Special cases:
- $\lambda/4$ transformer: $Z_{in} = Z_0^2/Z_L$ (impedance inverter)
- Short-circuit stub ($Z_L=0$, length $l$): $Z_{in} = jZ_0\tan\beta l$
- Open-circuit stub ($Z_L=\infty$): $Z_{in} = -jZ_0\cot\beta l$

## Smith Chart

Polar plot of $\Gamma = \Gamma_r + j\Gamma_i$. Constant resistance and reactance circles.

Used for: impedance matching, finding $VSWR$, locating voltage maxima/minima, single/double stub matching.