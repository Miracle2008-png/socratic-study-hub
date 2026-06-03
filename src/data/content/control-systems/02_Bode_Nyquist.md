# Frequency Domain — Bode and Nyquist

## Bode Plot

Plot $|L(j\omega)|_{dB}$ and $\angle L(j\omega)$ vs $\log\omega$.

**Gain Margin (GM)**: $20\log_{10}(1/|L(j\omega_{pc})|)$ where $\omega_{pc}$ is phase crossover (phase = -180°).

$$GM_{dB} = -|L(j\omega_{pc})|_{dB}$$

**Phase Margin (PM)**: $180° + \angle L(j\omega_{gc})$ where $\omega_{gc}$ is gain crossover ($|L| = 0$ dB).

For stability: GM > 0 dB and PM > 0°. **Typical specs**: GM > 6 dB, PM > 30–45°.

## Nyquist Criterion

The number of closed-loop unstable poles:
$$Z = N + P$$

- $N$: clockwise encirclements of $-1+j0$ point by Nyquist plot of $L(j\omega)$
- $P$: number of open-loop unstable poles

For stable open-loop ($P=0$): system is stable iff $N = 0$ (no encirclements of $-1$ point).

## Stability from Bode

Equivalent: system is stable if the gain is below 0 dB when phase reaches -180°.

## Bandwidth and Speed of Response

Closed-loop bandwidth $\omega_{BW}$ ≈ gain crossover frequency $\omega_{gc}$ (rough approximation).

$$T_r \approx \frac{1.8}{\omega_{BW}},\quad T_s \approx \frac{4.6}{\zeta\omega_n}$$

Higher bandwidth → faster response, but more susceptible to noise.