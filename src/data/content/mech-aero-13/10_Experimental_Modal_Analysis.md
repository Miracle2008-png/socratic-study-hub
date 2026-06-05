# Experimental Modal Analysis

Analytical and FEA modal analysis predict modal properties from mathematical models. **Experimental Modal Analysis (EMA)** measures the actual modal properties of a physical structure directly. EMA is used to validate FEA models, identify unexpected resonances, and characterize structures too complex to model analytically.

## 1. The Fundamental Theorem of EMA

The **Frequency Response Function** $H_{jk}(\omega)$ (response at DOF $j$ to excitation at DOF $k$) is expressible as a sum of modal contributions:

$$H_{jk}(\omega) = \sum_{i=1}^n \frac{A_{ijk}}{\omega_i^2 - \omega^2 + 2i\zeta_i\omega_i\omega}$$

Where $A_{ijk} = X_j^{(i)} X_k^{(i)} / m_{ri}$ is the **residue** (modal constant) of the $i$-th mode at the $j$-$k$ DOF pair.

**Consequence:** Every peak in $|H_{jk}(\omega)|$ marks a natural frequency. The width of each peak reveals the damping ratio. The relative magnitudes across all measurement points reveal the mode shape. **All this information is encoded in the FRF.**

## 2. Test Setup

**Boundary conditions:** The structure must be either:
- **Free-free**: Suspended on very soft bungee cords/foam, simulating zero constraint. Natural frequencies of the free structure are measured.
- **Fixed base**: Rigidly attached to a heavy seismic mass. Simulates operational boundary conditions.

**Excitation methods:**
- **Instrumented Impact Hammer**: Contains a force sensor. Single-hit excitation. No setup time. Broadband excitation limited by hammer tip stiffness. Most common method.
- **Electrodynamic Shaker with stinger**: Provides controlled, sustained excitation. Better signal-to-noise at low frequencies. The stinger (thin rod) prevents the shaker from constraining the structure rotationally.

**Response measurement:** Accelerometers at many DOF. Alternatively, **non-contact laser vibrometry** (measures velocity via Doppler shift) avoids mass-loading the structure.

## 3. Modal Parameter Extraction

Measured FRFs are curve-fitted to extract $\omega_i$, $\zeta_i$, and mode shapes. Modern algorithms:

- **SDOF methods** (Circle Fit, Peak Picking): Fit one mode at a time. Fast but inaccurate near closely-spaced modes.
- **PolyMAX**: The industry standard. Fits all modes simultaneously across all measured FRFs. Produces a **stabilization diagram** that distinguishes physical modes from mathematical artifacts.

## 4. FEA Model Correlation and Updating

After EMA, the experimental mode shapes are compared to FEA predictions using the **Modal Assurance Criterion (MAC)**:

$$MAC_{ij} = \frac{|\{X\}_{exp}^{(i)T}\{X\}_{FEA}^{(j)}|^2}{(\{X\}_{exp}^{(i)T}\{X\}_{exp}^{(i)})(\{X\}_{FEA}^{(j)T}\{X\}_{FEA}^{(j)})}$$

$MAC = 1.0$: Perfect correlation. $MAC = 0$: No correlation.

If MAC values are low, **FEA model updating** adjusts uncertain model parameters (joint stiffnesses, material properties) until analytical and experimental modes match. This validated FEA model can then be trusted for predicting response in untested load conditions.
