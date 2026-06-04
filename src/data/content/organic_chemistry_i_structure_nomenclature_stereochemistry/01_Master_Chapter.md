# Organic Chemistry I: Structure, Nomenclature, and Stereochemistry

## 1. Structure and Bonding
Carbon typically forms four bonds. Its valence electrons exist in atomic orbitals that hybridize to form localized bonding orbitals.
- **$sp^3$ hybridization:** Single bonds, tetrahedral geometry, $109.5^\circ$ bond angle (e.g., alkanes).
- **$sp^2$ hybridization:** One double bond, trigonal planar geometry, $120^\circ$ bond angle (e.g., alkenes).
- **$sp$ hybridization:** One triple bond or two double bonds, linear geometry, $180^\circ$ bond angle (e.g., alkynes).

**Worked Example 1.1: Determining Hybridization and Geometry**
Identify the hybridization and geometry of each carbon in propene ($\text{CH}_3\text{-CH}=\text{CH}_2$).
**Step 1:** Analyze C1 ($\text{CH}_2$). It has a double bond to C2 and two single bonds to H. Total of 3 bonding regions $\rightarrow$ $sp^2$ hybridized, trigonal planar.
**Step 2:** Analyze C2 ($\text{CH}$). It has a double bond to C1, a single bond to C3, and a single bond to H. Total of 3 bonding regions $\rightarrow$ $sp^2$ hybridized, trigonal planar.
**Step 3:** Analyze C3 ($\text{CH}_3$). It has four single bonds (one to C2, three to H). Total of 4 bonding regions $\rightarrow$ $sp^3$ hybridized, tetrahedral.

## 2. IUPAC Nomenclature
Systematic naming of organic compounds follows specific rules:
1. Identify the longest continuous carbon chain (parent chain).
2. Number the chain to give substituents the lowest possible locants.
3. Name and list substituents alphabetically.
4. Use prefixes (di-, tri-, etc.) for multiple identical substituents, but do not use them for alphabetizing.

**Worked Example 2.1: Naming an Alkane**
Provide the IUPAC name for the following structure: $\text{CH}_3\text{-CH(CH}_3\text{)-CH}_2\text{-C(CH}_3\text{)}_2\text{-CH}_2\text{-CH}_3$
**Step 1:** Identify the parent chain. The longest continuous chain has 6 carbons, so the parent name is **hexane**.
**Step 2:** Number the chain from the end closest to the first substituent.
- Left-to-right: substituents at 2, 4, 4.
- Right-to-left: substituents at 3, 3, 5.
The lowest locant set is 2,4,4. So, number left to right.
**Step 3:** Identify substituents: one methyl group at C2, two methyl groups at C4.
**Step 4:** Combine parts: **2,4,4-trimethylhexane**.

## 3. Stereochemistry
Stereoisomers have the same connectivity but a different spatial arrangement of atoms.

### 3.1 Chirality and Enantiomers
A molecule is chiral if it is not superimposable on its mirror image. The most common cause of chirality is a tetrahedral carbon bonded to four different groups (a chiral center or stereocenter). Enantiomers are non-superimposable mirror images.

### 3.2 Cahn-Ingold-Prelog (CIP) R/S Configuration
1. Rank the four groups attached to the chiral center by atomic number (highest = 1, lowest = 4).
2. Orient the molecule so the lowest priority group (4) points away (dashed line).
3. Trace the path from 1 $\rightarrow$ 2 $\rightarrow$ 3.
   - Clockwise = **R** (Rectus)
   - Counterclockwise = **S** (Sinister)

**Worked Example 3.1: Determining R/S Configuration**
Determine the absolute configuration of (2)-bromobutane where the bromine is wedged (pointing toward the viewer).
Structure: $\text{CH}_3-\text{C}^*(\text{Br})(\text{H})-\text{CH}_2\text{-CH}_3$
**Step 1:** Prioritize the groups on C2.
1. -Br (Bromine, highest atomic number)
2. $-\text{CH}_2\text{CH}_3$ (Ethyl, C bonded to C, H, H)
3. $-\text{CH}_3$ (Methyl, C bonded to H, H, H)
4. -H (Hydrogen, lowest atomic number)
**Step 2:** Check orientation. The Br is wedged, and let's assume the main chain is in the plane. This implies the H is dashed (pointing away).
**Step 3:** Trace 1 $\rightarrow$ 2 $\rightarrow$ 3.
Path: -Br (1) $\rightarrow$ -Ethyl (2) $\rightarrow$ -Methyl (3).
Drawing this arc, we go counterclockwise.
**Result:** Since H is dashed and the path is counterclockwise, the configuration is **(S)-2-bromobutane**.

## 4. Conformational Analysis
Conformations are temporary spatial arrangements due to rotation around single ($\sigma$) bonds.

### 4.1 Cyclohexane Chair Conformations
Cyclohexane adopts a "chair" conformation to minimize angle and torsional strain. Substituents can be axial (pointing straight up or down) or equatorial (pointing outward). Bulky groups strongly prefer the equatorial position to avoid 1,3-diaxial interactions.

**Worked Example 4.2: Chair Flips**
Draw the two chair conformations of cis-1-tert-butyl-4-methylcyclohexane and predict the more stable one.
**Step 1:** Note the stereochemistry. "Cis" means both groups point the same relative direction (e.g., both "up" or both "down").
**Step 2:** Draw Chair 1. Let C1 have an "up" tert-butyl group. In this chair, "up" at C1 is **axial**. Let C4 have an "up" methyl group. At C4, "up" is **equatorial**.
- Chair 1: tert-butyl (axial), methyl (equatorial).
**Step 3:** Perform a ring flip to get Chair 2. Axial bonds become equatorial, and equatorial bonds become axial. "Up" remains "up".
- Chair 2: tert-butyl (equatorial), methyl (axial).
**Step 4:** Evaluate stability. The tert-butyl group is extremely bulky and experiences severe 1,3-diaxial steric strain if axial. The methyl group is smaller.
**Conclusion:** Chair 2 is significantly more stable because the bulkier tert-butyl group is in the equatorial position.
