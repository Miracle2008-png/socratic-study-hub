---
title: "Vibration Measurement and Instrumentation"
---

# Vibration Measurement and Instrumentation

Theoretical predictions of natural frequencies are only as good as the model assumptions. Real structures have complex geometry, welded joints, and non-ideal boundary conditions. **Experimental vibration analysis** is how engineers validate models, identify real natural frequencies, and diagnose machinery faults.

## 1. The Accelerometer

The most ubiquitous vibration measurement device is the **accelerometer** — a tiny seismic mass connected to a piezoelectric crystal inside a rugged housing. When the housing vibrates, the seismic mass deflects, compressing the crystal, generating a voltage proportional to acceleration.

Integrating the acceleration signal once gives velocity. Integrating twice gives displacement.

**Accelerometer mounting** is critical:
- **Stud-mounted** (threaded directly into structure): Best frequency response, up to 20,000 Hz.
- **Adhesive wax / magnetic base**: Convenient but degrades high-frequency response.
- **Hand-held probe**: Suitable only for very low-frequency, rough measurements.

## 2. The Frequency Spectrum and FFT

A raw time-domain signal (voltage vs. time) from an accelerometer is difficult to interpret directly. The dominant frequencies are hidden inside the waveform.

The **Fast Fourier Transform (FFT)** mathematically decomposes the time-domain signal into its frequency components, producing a **frequency spectrum** (amplitude vs. frequency). Peaks in the spectrum immediately reveal:
*   The natural frequencies of the structure.
*   The rotational speed of the shaft.
*   Harmonics (multiples of the shaft speed) indicating gear mesh, bearing defects, or imbalance.

## 3. Condition Monitoring and Predictive Maintenance

In industrial plants, accelerometers are permanently mounted on critical rotating machinery (turbines, compressors, pumps). Software continuously analyzes the FFT spectrum.

**Fault signatures** appear as predictable frequency components:
*   **Imbalance:** Large peak at 1× rotational speed.
*   **Misalignment:** Peaks at 2× and 3× rotational speed.
*   **Bearing defect (outer race):** Peak at $f_{BPFO} = \frac{N_b}{2}f_r(1 - \frac{d}{D}\cos\alpha)$, where $N_b$ = number of balls, $f_r$ = rotational frequency, $d/D$ = ball/race diameter ratio.
*   **Gear mesh:** Peak at $n \times f_r$ where $n$ = number of gear teeth.

By tracking how these peaks grow over time, engineers can predict bearing failure weeks in advance, scheduling maintenance before catastrophic breakdown — this is **Predictive Maintenance**.

## 4. Modal Testing

To experimentally determine all the natural frequencies and mode shapes of a structure:
1.  Mount accelerometers at many points on the structure.
2.  Strike the structure with an **instrumented impact hammer** (which contains a force sensor to measure the input).
3.  Compute the **Frequency Response Function (FRF)**: ratio of output (acceleration) to input (force) at each frequency.
4.  Peaks in the FRF reveal the natural frequencies. The relative amplitudes across all measurement points define the mode shape.

This experimental mode shape data is then fed back into a finite element model to **validate and correct** the numerical model before physical testing is complete.
