# Operational Amplifiers

## Ideal Op-Amp Rules

1. $A_{OL} \to \infty$ (open-loop gain)
2. $R_{in} \to \infty$, $R_{out} = 0$
3. **Virtual short**: when negative feedback present, $V_+ = V_-$
4. **No input current**: $I_+ = I_- = 0$

## Key Configurations

### Inverting Amplifier
$$V_{out} = -\frac{R_f}{R_1}V_{in},\quad R_{in} = R_1$$

### Non-Inverting Amplifier
$$V_{out} = \left(1 + \frac{R_f}{R_1}\right)V_{in},\quad R_{in} = \infty$$

### Voltage Follower (Buffer)
$$V_{out} = V_{in},\quad R_{in} = \infty,\quad R_{out} = 0$$

### Summing Amplifier (Inverting)
$$V_{out} = -R_f\left(\frac{V_1}{R_1} + \frac{V_2}{R_2} + \frac{V_3}{R_3}\right)$$

### Difference Amplifier
$$V_{out} = \frac{R_f}{R_1}(V_2 - V_1)\quad\text{(for matched resistors)}$$

### Integrator
$$V_{out} = -\frac{1}{R_1 C}\int V_{in}\,dt$$

Frequency domain: $H(j\omega) = -\frac{1}{j\omega R_1 C}$

### Differentiator
$$V_{out} = -RC\frac{dV_{in}}{dt}$$

## Instrumentation Amplifier

Three op-amp topology with high CMRR:
$$V_{out} = \left(1 + \frac{2R}{R_G}\right)\frac{R_f}{R_1}(V_2 - V_1)$$

Gain set by single resistor $R_G$.