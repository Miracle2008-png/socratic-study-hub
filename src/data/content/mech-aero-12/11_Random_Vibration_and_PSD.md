---
title: "Random Vibration and Power Spectral Density"
---

# Random Vibration and Power Spectral Density

Harmonic analysis assumes the forcing function is a neat sinusoid — perfectly periodic and predictable. In reality, most engineering environments generate **random vibration**: road surface roughness, jet engine acoustic noise, ocean wave loading, atmospheric turbulence. These forces have no repeating period; they are genuinely stochastic.

## 1. Characterizing Random Signals

A random vibration signal cannot be described by a single amplitude and frequency. Instead, it is described statistically.

**Root Mean Square (RMS):** The square root of the time-average of the signal squared. For acceleration: $a_{rms} = \sqrt{\langle a(t)^2 \rangle}$. This is the most important single-number descriptor of vibration severity.

**Probability Density Function (PDF):** Most random vibration processes in nature follow a **Gaussian (normal) distribution**. The probability of exceeding 3× the RMS value is only 0.27% — but this still occurs thousands of times per hour in practice.

**Crest Factor:** The ratio of peak amplitude to RMS. For a pure sine wave, crest factor = $\sqrt{2} = 1.414$. For Gaussian random vibration, peaks up to 4–6× the RMS occur regularly.

## 2. Power Spectral Density (PSD)

The **Power Spectral Density** $S(f)$ [units: g²/Hz or (m/s²)²/Hz] describes how the total vibrational energy of a random signal is distributed across frequency.

A plot of $S(f)$ vs. $f$ is the "fingerprint" of the random environment:
*   **White noise PSD:** Flat spectrum — equal energy per Hz at all frequencies. Theoretical only.
*   **Road surface PSD:** Typically proportional to $1/f^2$ — most energy at low frequencies, falling off rapidly.
*   **MIL-STD-810 specifications:** Military standards define specific PSD profiles that equipment must survive, representing aircraft/helicopter/ship environments.

The total RMS acceleration is the square root of the area under the PSD curve:
$$a_{rms} = \sqrt{\int_0^\infty S(f) \, df}$$

## 3. Response of a SDOF System to Random Excitation

When a random force with PSD $S_F(f)$ is applied to a SDOF system, the output acceleration PSD is:
$$S_x(f) = |H(f)|^2 S_F(f)$$

Where $|H(f)|^2$ is the squared magnitude of the **Frequency Response Function** of the SDOF system.

**Physical interpretation:** The FRF acts as a filter. Near the natural frequency, $|H|^2$ is very large (the DMF²), amplifying the input random energy dramatically. A resonant system concentrates input broadband energy into a narrow frequency band, causing large RMS responses even if the input PSD is modest.

**Design implication in aerospace:** Electronic avionics boxes are tested by bolting them to a shaker table running a specified random PSD profile for hours. The test validates structural survival under the actual flight environment's combined broadband excitation.
