# Nuclear Physics

## 1. Nuclear Properties and Structure
A nucleus is composed of protons ($Z$) and neutrons ($N$), collectively called nucleons ($A = Z + N$). The radius of a nucleus is approximately $R = R_0 A^{1/3}$, where $R_0 \approx 1.2 \text{ fm}$.

### 1.1 Mass Defect and Binding Energy
The mass of a stable nucleus is less than the sum of the masses of its constituent nucleons. This mass difference is the mass defect ($\Delta m$).
$$ \Delta m = [Z m_p + (A-Z) m_n] - M_{\text{nucleus}} $$
The binding energy ($B$) is the energy required to disassemble the nucleus into individual nucleons.
$$ B = \Delta m \cdot c^2 $$
Typically, binding energy per nucleon ($B/A$) peaks around iron-56 at $\approx 8.8 \text{ MeV/nucleon}$.

**Worked Example 1.1: Binding Energy of Helium-4**
Calculate the binding energy and binding energy per nucleon of ${}^4_2\text{He}$. 
Given: $m_p = 1.007276 \text{ u}$, $m_n = 1.008665 \text{ u}$, $M_{\text{He}} = 4.001506 \text{ u}$, $1 \text{ u} = 931.5 \text{ MeV}/c^2$.
**Step 1:** Calculate the total mass of the individual nucleons.
$$ Z=2, N=2 \implies M_{\text{nucleons}} = 2(1.007276) + 2(1.008665) = 2.014552 + 2.017330 = 4.031882 \text{ u} $$
**Step 2:** Calculate the mass defect $\Delta m$.
$$ \Delta m = 4.031882 \text{ u} - 4.001506 \text{ u} = 0.030376 \text{ u} $$
**Step 3:** Calculate the binding energy $B$.
$$ B = \Delta m \times 931.5 \text{ MeV/u} = 0.030376 \times 931.5 \approx 28.30 \text{ MeV} $$
**Step 4:** Calculate the binding energy per nucleon $B/A$.
$$ B/A = \frac{28.30}{4} \approx 7.075 \text{ MeV/nucleon} $$

## 2. Radioactive Decay
Unstable nuclei spontaneously decay by emitting particles or electromagnetic radiation. The decay rate (activity, $A$) is proportional to the number of nuclei present ($N$).
$$ A = -\frac{dN}{dt} = \lambda N $$
Solving this differential equation yields the radioactive decay law:
$$ N(t) = N_0 e^{-\lambda t} $$
The half-life ($t_{1/2}$) is the time required for half the nuclei to decay.
$$ t_{1/2} = \frac{\ln(2)}{\lambda} $$

**Worked Example 2.1: Decay Kinetics**
A sample of Carbon-14 ($t_{1/2} = 5730 \text{ years}$) has an initial activity of $1000 \text{ Bq}$ (decays per second). How much time must elapse for the activity to drop to $250 \text{ Bq}$?
**Step 1:** Determine the number of half-lives that have passed.
$$ A(t) = A_0 \left(\frac{1}{2}\right)^n $$
$$ 250 = 1000 \left(\frac{1}{2}\right)^n \implies 0.25 = \left(\frac{1}{2}\right)^n \implies \frac{1}{4} = \left(\frac{1}{2}\right)^n \implies n = 2 $$
**Step 2:** Calculate total time.
$$ t = n \times t_{1/2} = 2 \times 5730 \text{ years} = 11460 \text{ years} $$

## 3. Types of Decay

### 3.1 Alpha Decay
An unstable heavy nucleus emits an alpha particle (${}^4_2\text{He}$).
$$ {}^A_Z\text{X} \rightarrow {}^{A-4}_{Z-2}\text{Y} + {}^4_2\text{He} + Q $$
The $Q$-value is the energy released: $Q = (M_X - M_Y - M_\alpha)c^2$.

### 3.2 Beta Decay
- **$\beta^-$ decay:** A neutron converts into a proton, emitting an electron and an antineutrino.
  $$ n \rightarrow p + e^- + \bar{\nu}_e $$
- **$\beta^+$ decay:** A proton converts into a neutron, emitting a positron and a neutrino.
  $$ p \rightarrow n + e^+ + \nu_e $$
- **Electron Capture:** An inner orbital electron is captured by the nucleus.
  $$ p + e^- \rightarrow n + \nu_e $$

**Worked Example 3.1: Q-value of Beta Decay**
Determine the maximum kinetic energy of the electron emitted in the $\beta^-$ decay of ${}^{14}_6\text{C} \rightarrow {}^{14}_7\text{N} + e^- + \bar{\nu}_e$. 
Given atomic masses: $M({}^{14}\text{C}) = 14.003241 \text{ u}$, $M({}^{14}\text{N}) = 14.003074 \text{ u}$.
*(Note: Using atomic masses automatically accounts for the mass of the emitted electron, because the product atom has one more electron shell filled than the parent atom.)*
**Step 1:** Calculate mass difference $\Delta m$.
$$ \Delta m = M({}^{14}\text{C}) - M({}^{14}\text{N}) = 14.003241 - 14.003074 = 0.000167 \text{ u} $$
**Step 2:** Calculate $Q$-value.
$$ Q = 0.000167 \text{ u} \times 931.5 \text{ MeV/u} \approx 0.156 \text{ MeV} = 156 \text{ keV} $$
This $Q$-value is the maximum kinetic energy of the electron (when the antineutrino gets zero kinetic energy).
