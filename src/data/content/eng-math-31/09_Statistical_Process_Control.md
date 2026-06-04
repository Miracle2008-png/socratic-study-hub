# 9. Statistical Process Control

**Statistical Process Control (SPC)** applies statistical inference continuously in real time to detect when a manufacturing or operational process has shifted away from its intended operating state.

### The Philosophy
Any process has inherent, unavoidable variability (natural variation from random causes). SPC distinguishes this from **special-cause variation** — a genuine shift due to a broken tool, a bad batch of material, or an operator error — using control charts.

### The Shewhart Control Chart
A control chart plots a sample statistic (usually $\bar{X}$) over time. Three horizontal lines are drawn:
*   **Center Line (CL):** The process target mean $\mu_0$.
*   **Upper Control Limit (UCL):** $\mu_0 + 3\sigma/\sqrt{n}$
*   **Lower Control Limit (LCL):** $\mu_0 - 3\sigma/\sqrt{n}$

The ±3σ limits correspond to $P(\text{false alarm}) = 0.0027$ per point — a false alarm occurs only 2.7 times per 1000 points when the process is in control.

**The $\bar{X}$ chart** monitors the process mean. A point outside UCL or LCL signals a potential mean shift.

**The $R$ chart** (or $S$ chart) monitors the process variability. Both charts are always used together — a process can be correctly centered but highly variable, or vice versa.

### Run Rules (Western Electric Rules)
In addition to individual points beyond ±3σ, patterns within the control limits also signal out-of-control conditions:
*   2 of 3 consecutive points beyond ±2σ.
*   4 of 5 consecutive points beyond ±1σ.
*   8 consecutive points on the same side of the center line (a sustained mean shift).
*   6 consecutive points consistently increasing or decreasing (a trend).

### The $p$-Chart (Fraction Nonconforming)
When each unit is classified as conforming or nonconforming, the proportion defective $\hat{p}$ per sample follows approximately $N(p, p(1-p)/n)$.

$$\text{UCL} = \bar{p} + 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}, \quad \text{LCL} = \bar{p} - 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$$

### Process Capability
**Process Capability Index $C_p$** measures how well the natural variation fits within the specification limits (USL and LSL):
$$C_p = \frac{\text{USL} - \text{LSL}}{6\sigma}$$

$C_p \ge 1.33$ (±4σ process) is typically required for production. Six Sigma quality corresponds to $C_p = 2$.

**$C_{pk}$** additionally penalizes for off-center processes:
$$C_{pk} = \min\!\left(\frac{\text{USL} - \mu}{3\sigma}, \frac{\mu - \text{LSL}}{3\sigma}\right)$$

$C_{pk} < C_p$ whenever the process mean is not centered between the specification limits.
