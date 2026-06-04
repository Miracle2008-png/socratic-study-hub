# Organic Chemistry IV: Spectroscopy and Structural Determination

## 1. Degree of Unsaturation
The Degree of Unsaturation (DoU), or Index of Hydrogen Deficiency (IHD), indicates the sum of rings and $\pi$ bonds in a molecule.
$$ \text{DoU} = C - \frac{H}{2} - \frac{X}{2} + \frac{N}{2} + 1 $$
where $C = \text{carbons}$, $H = \text{hydrogens}$, $X = \text{halogens}$, and $N = \text{nitrogens}$. Oxygen does not affect the calculation.
- $\text{DoU} = 1$: one double bond or one ring.
- $\text{DoU} = 2$: one triple bond, two double bonds, two rings, or one double bond and one ring.
- $\text{DoU} = 4$: frequently indicates a benzene ring (one ring + three double bonds).

**Worked Example 1.1: Calculating DoU**
Calculate the DoU for a molecule with the molecular formula $\text{C}_9\text{H}_{10}\text{O}_2$.
**Step 1:** Apply the formula. $C=9, H=10, X=0, N=0$. (O is ignored).
$$ \text{DoU} = 9 - \frac{10}{2} + 1 = 9 - 5 + 1 = 5 $$
**Step 2:** Interpret the result. A DoU of 5 strongly suggests an aromatic ring (which accounts for 4) plus one additional double bond (likely a carbonyl C=O, given the oxygens) or another ring.

## 2. Infrared (IR) Spectroscopy
IR spectroscopy identifies functional groups based on the vibrational frequencies of bonds.
- **O-H (alcohol):** Broad, strong peak around $3200-3600 \text{ cm}^{-1}$.
- **O-H (carboxylic acid):** Very broad, "hairy" peak around $2500-3300 \text{ cm}^{-1}$.
- **N-H:** Sharp peak(s) around $3300 \text{ cm}^{-1}$ ($1^\circ$ amines have two peaks, $2^\circ$ have one).
- **C-H ($sp^3$):** Just below $3000 \text{ cm}^{-1}$ (e.g., $2850-2950 \text{ cm}^{-1}$).
- **C-H ($sp^2$):** Just above $3000 \text{ cm}^{-1}$ (e.g., $3000-3100 \text{ cm}^{-1}$).
- **C$\equiv$C / C$\equiv$N:** Sharp, medium peak around $2100-2250 \text{ cm}^{-1}$.
- **C=O (carbonyl):** Very strong, sharp peak around $1650-1750 \text{ cm}^{-1}$. (Exact position depends on conjugation and derivative type: esters $\approx 1735$, ketones $\approx 1715$, amides $\approx 1650$).

## 3. Nuclear Magnetic Resonance (NMR) Spectroscopy
NMR determines the carbon-hydrogen framework of a molecule.

### 3.1 Proton ($^1$H) NMR
Key features to analyze:
1. **Number of signals:** Indicates the number of unique proton environments.
2. **Chemical Shift ($\delta$):** Indicates the electronic environment (shielded vs. deshielded).
   - Alkane ($0.9-1.5 \text{ ppm}$)
   - Next to electronegative atom (-O-C-H or -X-C-H) ($3.0-4.0 \text{ ppm}$)
   - Vinylic (C=C-H) ($4.5-6.5 \text{ ppm}$)
   - Aromatic (Ar-H) ($6.5-8.0 \text{ ppm}$)
   - Aldehyde (O=C-H) ($9.0-10.0 \text{ ppm}$)
   - Carboxylic Acid (-COOH) ($10.0-12.0 \text{ ppm}$)
3. **Integration:** The relative area under each peak indicates the ratio of protons giving rise to that signal.
4. **Splitting (Coupling):** The $n+1$ rule states that a signal is split into $n+1$ peaks by $n$ equivalent neighboring protons on adjacent carbons. (e.g., a quartet implies 3 neighboring protons, likely a -$\text{CH}_3$ group).

**Worked Example 3.1: Structure Elucidation from Spectra**
Determine the structure of $\text{C}_4\text{H}_8\text{O}_2$.
IR: Strong peak at $1740 \text{ cm}^{-1}$.
$^1$H NMR:
- $1.2 \text{ ppm}$ (triplet, 3H)
- $2.0 \text{ ppm}$ (singlet, 3H)
- $4.1 \text{ ppm}$ (quartet, 2H)

**Step 1:** Calculate DoU.
$\text{DoU} = 4 - \frac{8}{2} + 1 = 1$. This means 1 double bond or 1 ring.
**Step 2:** Analyze IR.
The peak at $1740 \text{ cm}^{-1}$ confirms a carbonyl (C=O). Given DoU = 1, this accounts for the unsaturation. Since there are 2 oxygens, it's likely an ester or carboxylic acid. No broad O-H peak is mentioned, so it must be an ester.
**Step 3:** Analyze NMR Splitting and Integration.
- The $1.2 \text{ ppm}$ triplet (3H) and $4.1 \text{ ppm}$ quartet (2H) are a classic ethyl group ($-\text{CH}_2\text{CH}_3$). The $-\text{CH}_2-$ is deshielded at $4.1 \text{ ppm}$, suggesting it is directly attached to the ester oxygen ($-\text{O-CH}_2\text{CH}_3$).
- The $2.0 \text{ ppm}$ singlet (3H) indicates a methyl group with no neighboring protons. Its shift ($2.0 \text{ ppm}$) is typical for a methyl adjacent to a carbonyl ($-\text{C(=O)-CH}_3$).
**Step 4:** Assemble the molecule.
Combine the acetyl group ($-\text{C(=O)-CH}_3$) and the ethoxy group ($-\text{O-CH}_2\text{CH}_3$).
**Result:** Ethyl acetate ($\text{CH}_3\text{-C(=O)-O-CH}_2\text{CH}_3$).

### 3.2 Carbon-13 ($^{13}$C) NMR
Provides the number of non-equivalent carbons and their electronic environments. Splitting is typically decoupled, so all signals appear as singlets.
- Aliphatic carbons: $0 - 50 \text{ ppm}$
- Carbons bonded to O or N: $50 - 100 \text{ ppm}$
- Alkene/Aromatic carbons: $100 - 150 \text{ ppm}$
- Carbonyl carbons (C=O): $150 - 220 \text{ ppm}$ (Esters/Amides $\approx 160-180$; Ketones/Aldehydes $\approx 190-220$).
