# Molecular Biotechnology

## 1. Recombinant DNA Technology
Recombinant DNA techniques involve restriction, ligation, and amplification of DNA.

### 1.1 Polymerase Chain Reaction (PCR) Kinetics
The theoretical amplification of DNA in PCR is governed by:
$$ Y = N (1 + E)^n $$
Where:
- $Y$ = final yield of DNA
- $N$ = initial number of target DNA molecules
- $E$ = amplification efficiency ($0 \le E \le 1$)
- $n$ = number of cycles

**Solved Example 1.1: PCR Amplification Yield**
A researcher starts with 50 copies of a target DNA sequence. If the PCR efficiency is 90% ($E=0.9$), calculate the number of target copies after 30 cycles.

*Solution:*
1. Identify variables: $N = 50$, $E = 0.9$, $n = 30$.
2. Substitute into the formula:
   $$ Y = 50 \times (1 + 0.9)^{30} $$
   $$ Y = 50 \times (1.9)^{30} $$
3. Calculate $(1.9)^{30}$:
   $$ (1.9)^{30} \approx 9.09 \times 10^7 $$
4. Compute final yield:
   $$ Y = 50 \times 9.09 \times 10^7 = 4.54 \times 10^9 \text{ copies} $$

## 2. Enzyme Kinetics in Bioprocessing
Biotechnological processes heavily rely on enzymes modeled by Michaelis-Menten kinetics:
$$ v = \frac{V_{max} [S]}{K_m + [S]} $$
Where:
- $v$ = initial reaction velocity
- $V_{max}$ = maximum reaction velocity
- $[S]$ = substrate concentration
- $K_m$ = Michaelis constant

**Solved Example 2.1: Determining Initial Velocity**
An engineered enzyme has a $V_{max}$ of $120 \ \mu\text{mol/min}$ and a $K_m$ of $5 \text{ mM}$. Calculate the initial velocity when the substrate concentration is $2 \text{ mM}$ and when it is $50 \text{ mM}$.

*Solution:*
1. At $[S] = 2 \text{ mM}$:
   $$ v = \frac{120 \times 2}{5 + 2} = \frac{240}{7} = 34.29 \ \mu\text{mol/min} $$
2. At $[S] = 50 \text{ mM}$:
   $$ v = \frac{120 \times 50}{5 + 50} = \frac{6000}{55} = 109.09 \ \mu\text{mol/min} $$

### 2.2 Lineweaver-Burk Plot
The reciprocal equation allows linear graphical analysis:
$$ \frac{1}{v} = \frac{K_m}{V_{max}} \frac{1}{[S]} + \frac{1}{V_{max}} $$

**Solved Example 2.2: Parameter Estimation**
Linear regression of $1/v$ versus $1/[S]$ yields a line with y-intercept $= 0.05 \ (\mu\text{mol/min})^{-1}$ and slope $= 0.2 \text{ min}$. Determine $V_{max}$ and $K_m$.

*Solution:*
1. Y-intercept is $1/V_{max}$:
   $$ \frac{1}{V_{max}} = 0.05 \implies V_{max} = \frac{1}{0.05} = 20 \ \mu\text{mol/min} $$
2. Slope is $K_m / V_{max}$:
   $$ \frac{K_m}{20} = 0.2 \implies K_m = 0.2 \times 20 = 4 \text{ mM} $$

## 3. Bioreactor Kinetics
Cell growth in a batch bioreactor during the exponential phase:
$$ X = X_0 e^{\mu t} $$
Where $X$ is cell concentration and $\mu$ is specific growth rate. Monod equation describes $\mu$ based on limiting substrate:
$$ \mu = \frac{\mu_{max} [S]}{K_s + [S]} $$

**Solved Example 3.1: Monod Growth Kinetics**
A recombinant E. coli strain has a maximum specific growth rate $\mu_{max} = 0.8 \text{ h}^{-1}$ and saturation constant $K_s = 0.2 \text{ g/L}$ for glucose. If the current glucose concentration is $0.05 \text{ g/L}$, calculate the specific growth rate $\mu$.

*Solution:*
1. Substitute values into Monod equation:
   $$ \mu = \frac{0.8 \times 0.05}{0.2 + 0.05} $$
   $$ \mu = \frac{0.04}{0.25} = 0.16 \text{ h}^{-1} $$
The cells are growing significantly below their maximum potential due to substrate limitation.
