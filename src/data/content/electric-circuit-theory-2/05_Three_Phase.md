# Three-Phase Circuits

## Balanced Three-Phase Source

Three sinusoidal voltages, equal magnitude, 120° apart:
$$v_a = V_m\cos\omega t,\quad v_b = V_m\cos(\omega t - 120°),\quad v_c = V_m\cos(\omega t - 240°)$$

Positive (ABC) sequence. $v_a + v_b + v_c = 0$ always.

## Y-Connection

Line voltage vs phase voltage:
$$V_L = \sqrt{3}\,V_{ph}\angle 30°$$

$V_{ph}$ = voltage from line to neutral. $V_L$ = voltage between lines.

Line current = phase current in Y.

## Δ-Connection

Line voltage = phase voltage ($V_L = V_{ph}$).

Phase current vs line current:
$$I_L = \sqrt{3}\,I_{ph}\angle -30°$$

## Per-Phase Analysis (Balanced System)

Reduce to single-phase equivalent:
1. Convert Δ sources/loads to Y equivalent ($Z_Y = Z_\Delta / 3$)
2. Solve single-phase circuit with $V_{ph}$ and $Z_Y$
3. Multiply currents/voltages back as needed

## Three-Phase Power

$$P_{total} = 3V_{ph}I_{ph}\cos\theta = \sqrt{3}V_L I_L\cos\theta\quad\text{(watts)}$$
$$Q_{total} = \sqrt{3}V_L I_L\sin\theta\quad\text{(VAR)}$$
$$|S_{total}| = \sqrt{3}V_L I_L\quad\text{(VA)}$$

**Two-wattmeter method** measures total 3-phase power with just 2 wattmeters:
$$P_{total} = W_1 + W_2,\quad \tan\theta = \sqrt{3}\frac{W_1-W_2}{W_1+W_2}$$