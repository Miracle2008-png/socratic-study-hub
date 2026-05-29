export const chemistryContentExt: Record<string, string> = {
  // Foundation
  'Atomic structure': `
# Quantum Atomic Structure: Orbitals, Quantum Numbers, and Term Symbols

## 1. Bohr Model Derivation
Niels Bohr modeled the hydrogen atom as an electron orbiting a proton, with quantized angular momentum:
$$ L = m_e v r = n \hbar $$
Equating the electrostatic force to the centripetal force:
$$ \\frac{e^2}{4\\pi\\varepsilon_0 r^2} = \\frac{m_e v^2}{r} $$
Solving these equations simultaneously yields the Bohr radius $r_n$ and quantized energy levels $E_n$:
$$ r_n = n^2 a_0 = n^2 \\frac{4\\pi\\varepsilon_0\\hbar^2}{m_e e^2} \\quad (a_0 \\approx 0.529 \\text{ Å}) $$
$$ E_n = -\\frac{m_e e^4}{32\\pi^2\\varepsilon_0^2\\hbar^2}\\frac{1}{n^2} = -\\frac{13.6 \\text{ eV}}{n^2} $$

---

## 2. Schrödinger Equation & Quantum Orbitals
The Bohr model fails for multi-electron atoms. In modern quantum chemistry, we solve the spatial Schrödinger equation:
$$ \\hat{H}\\psi(\\vec{r}) = E\\psi(\\vec{r}) $$
For a hydrogen-like atom, the wave function separates into radial and angular parts:
$$ \\psi(r, \\theta, \\phi) = R_{nl}(r) Y_{lm}(\theta, \\phi) $$
where $Y_{lm}(\theta, \\phi)$ are the **spherical harmonics**, describing the 3D shapes of the $s, p, d, f$ orbitals.

### The Four Quantum Numbers
1.  **Principal Quantum Number ($n \\in \\mathbb{N}^+$)**: Energy level and size.
2.  **Azimuthal Quantum Number ($l \\in \\{0, \\dots, n-1\\}$)**: Orbital shape ($l=0 \\to s$, $l=1 \\to p$, $l=2 \\to d$, $l=3 \\to f$).
3.  **Magnetic Quantum Number ($m_l \\in \\{-l, \\dots, +l\\}$)**: Spatial orientation of the orbital.
4.  **Spin Quantum Number ($m_s = \\pm 1/2$)**: Intrinsic angular momentum orientation.

---

## 3. Insane Level: Atomic Term Symbols
To describe the total angular momentum state of a multi-electron atom, we use Russel-Saunders coupling to construct **term symbols**:
$$ ^{2S+1}L_J $$
Where:
*   $S$ is the total spin angular momentum. $2S+1$ is the spin multiplicity.
*   $L$ is the total orbital angular momentum (designated by letters: $S, P, D, F, G$ for $L=0, 1, 2, 3, 4$).
*   $J$ is the total angular momentum ($|L-S| \\le J \\le L+S$).

### Hund's Rules for Ground State Determination
1.  Maximize multiplicity (highest $2S+1$).
2.  Maximize total orbital angular momentum (highest $L$) for a given multiplicity.
3.  For subshells less than half-full, choose minimum $J$. For subshells more than half-full, choose maximum $J$.
`,

  'Organic Chemistry I: Structure, Nomenclature & Stereochemistry': `
# Organic Chemistry I: Structure, Nomenclature & Stereochemistry

## 1. Molecular Orbital Theory and Hybridization
The foundation of organic chemistry lies in the quantum mechanical overlap of atomic orbitals to form molecular orbitals (MOs). 
According to LCAO (Linear Combination of Atomic Orbitals), when two atomic orbitals combine, they form two MOs: a lower-energy bonding orbital ($\\sigma$ or $\\pi$) and a higher-energy anti-bonding orbital ($\\sigma^*$ or $\\pi^*$).

*   **$sp^3$ Hybridization**: One $s$ and three $p$ orbitals mix to form four equivalent $sp^3$ degenerate orbitals. These arrange themselves in a perfect **tetrahedron** with bond angles of $109.5^\\circ$ to minimize electron repulsion (VSEPR theory). Example: Methane ($CH_4$).
*   **$sp^2$ Hybridization**: One $s$ and two $p$ orbitals mix, leaving one unhybridized $p$ orbital. The three $sp^2$ orbitals form a **trigonal planar** geometry ($120^\\circ$), while the unhybridized $p$ orbitals overlap laterally to form a $\\pi$ bond. The $\\pi$ bond is weaker than the $\\sigma$ bond because lateral overlap is less efficient than head-on overlap. This weakness makes the $\\pi$ bond the reactive nucleophilic center in alkenes.
*   **$sp$ Hybridization**: One $s$ and one $p$ orbital mix, leaving two unhybridized $p$ orbitals. Forms a **linear** geometry ($180^\\circ$) with two $\\pi$ bonds. Example: Alkynes.

### HOMO-LUMO Interactions
Chemical reactions occur via the overlap of the **Highest Occupied Molecular Orbital (HOMO)** of the nucleophile with the **Lowest Unoccupied Molecular Orbital (LUMO)** of the electrophile. For example, in an $S_N2$ reaction, the HOMO of the incoming nucleophile donates electron density precisely into the $\\sigma^*$ LUMO of the $C-X$ bond, which forces the $C-X$ bond to break.

---

## 2. Advanced IUPAC Nomenclature
To name an organic compound, follow the definitive IUPAC rules strictly in order:

1.  **Identify the Principal Functional Group**: The group with the highest priority dictates the suffix of the name.
    *Priority order*: Carboxylic Acid (oic acid) > Ester (oate) > Amide (amide) > Nitrile (nitrile) > Aldehyde (al) > Ketone (one) > Alcohol (ol) > Amine (amine) > Alkene (ene) > Alkyne (yne).
    *Note*: Halogens (fluoro, chloro) and Ethers (alkoxy) are *always* treated as substituents, never as principal groups.
2.  **Find the Longest Carbon Chain**: The longest continuous carbon chain containing the principal functional group is the parent chain. If there is a tie, choose the chain with the maximum number of substituents.
3.  **Number the Chain**: Number starting from the end that gives the principal functional group the lowest possible locant. If the principal group is equidistant from both ends, assign the lowest locants to the substituents.
4.  **Assemble the Name**: Alphabetize all substituents. (Note: prefixes like *di, tri, tetra, sec-, tert-* are ignored for alphabetization, but *iso, neo, cyclo* are counted).

*Example*: **(2E, 4R)-4-bromo-5-methylhex-2-en-1-ol**.
*   Principal group: Alcohol (-ol) at C1.
*   Chain: 6 carbons containing the double bond (hex-2-en).
*   Substituents: Bromo at C4, Methyl at C5.

### Bicyclic Compounds
Named as *bicyclo[x.y.z]alkane*. Count the number of carbons in each of the three paths connecting the two bridgehead carbons. Order $x, y, z$ from largest to smallest. Numbering starts at one bridgehead, goes around the largest path to the second bridgehead, then around the second largest path.

---

## 3. Stereochemistry: The 3D Architecture of Molecules
Molecules with the same connectivity but different spatial arrangements are **stereoisomers**.

### Chirality and Optical Activity
A carbon atom bonded to four *different* groups is a **chiral center** (stereocenter). A molecule with one chiral center is non-superimposable on its mirror image. These two mirror images are **enantiomers**.
Enantiomers have identical physical properties (boiling point, NMR spectra) except for the direction they rotate plane-polarized light.
$$ [\\alpha]_D = \\frac{\\alpha_{obs}}{c \\times l} $$
Where $[\\alpha]_D$ is the specific rotation, $c$ is concentration (g/mL), and $l$ is path length (dm). A 50/50 mixture of enantiomers is a **racemic mixture** and is optically inactive ($[\\alpha] = 0$).

### The Cahn-Ingold-Prelog (CIP) R/S System
To unambiguously name chiral centers:
1.  Assign priority $1 \\to 4$ based on **atomic number**. (e.g., $-Br > -Cl > -OH > -CH_3 > -H$).
2.  If the first atoms are identical, look at the atoms attached to them, going outward until a difference is found.
3.  Double and triple bonds are treated as if the atom is bonded two or three times to the same element. (e.g., $-C=O$ counts as a carbon bonded to two oxygens).
4.  Rotate the molecule so the lowest priority group (4) points **away** (dashed line).
5.  Trace the path $1 \\to 2 \\to 3$.
    *   Clockwise = **R** (Rectus / Right)
    *   Counter-clockwise = **S** (Sinister / Left)

### Diastereomers and Meso Compounds
A molecule with $n$ chiral centers can have up to $2^n$ stereoisomers.
*   **Diastereomers**: Stereoisomers that are *not* mirror images. They have different physical properties (e.g., different boiling points) and can be separated by distillation.
*   **Meso Compounds**: Molecules that contain chiral centers but possess an internal plane of symmetry, making the overall molecule completely achiral and optically inactive.

### Conformational Analysis of Cyclohexane
Cyclohexane relieves angle and torsional strain by puckering into a **chair conformation**.
*   **Axial bonds** point straight up or down.
*   **Equatorial bonds** point outward along the equator.
*   **Ring Flip**: When cyclohexane undergoes a chair flip, all axial bonds become equatorial, and all equatorial bonds become axial. Up stays up, down stays down.
*   **1,3-Diaxial Interactions**: Bulky groups strongly prefer the equatorial position. If a bulky group (like *tert*-butyl) is axial, its electron cloud heavily clashes with the axial hydrogens on carbons 3 and 5. The energy difference between the axial and equatorial forms is quantified by the **A-value**. For *tert*-butyl, the A-value is so large ($\\approx 5.0$ kcal/mol) that it effectively "locks" the ring, preventing the ring flip.
`,

  'Organic Chemistry II: Hydrocarbon Reactions & Mechanisms': `
# Organic Chemistry II: Hydrocarbon Reactions & Mechanisms

## 1. Radical Halogenation of Alkanes
Because alkanes lack $\\pi$ bonds and polarized heteroatoms, they are largely unreactive. Their primary reaction is halogenation via a radical chain mechanism triggered by UV light ($h\\nu$) or heat ($\\Delta$).

### Mechanism
1.  **Initiation**: Homolytic cleavage of the weak halogen-halogen bond ($Cl-Cl \\to 2 Cl^\\bullet$).
2.  **Propagation**: 
    *   The halogen radical abstracts a hydrogen from the alkane, generating an alkyl radical ($R-H + Cl^\\bullet \\to R^\\bullet + HCl$).
    *   The alkyl radical attacks a new halogen molecule, generating the product and a new halogen radical ($R^\\bullet + Cl_2 \\to R-Cl + Cl^\\bullet$).
3.  **Termination**: Any two radicals collide and couple, terminating the chain reaction.

### Hammond's Postulate & Selectivity
**Chlorination** is exothermic and fast. The transition state resembles the reactants (early TS), so the stability of the intermediate radical doesn't strictly dictate the product. It yields a statistical mixture of primary, secondary, and tertiary chlorides.
**Bromination** is endothermic and slow. The transition state closely resembles the intermediate alkyl radical (late TS, per Hammond's Postulate). Because a tertiary radical ($3^\\circ$) is vastly more stable than a primary radical ($1^\\circ$) due to **hyperconjugation** (donation of electron density from adjacent $C-H$ $\\sigma$ bonds into the radical's half-empty $p$-orbital), bromination is highly regioselective for $3^\\circ$ positions (>99%).

---

## 2. Electrophilic Addition to Alkenes
The electron-rich $\\pi$ bond attacks an electrophile, forming a carbocation intermediate, which is then trapped by a nucleophile.

### Markovnikov's Rule
When $HX$ (e.g., $HBr$) adds to an asymmetric alkene, the proton adds to the less substituted carbon so that the halogen ends up on the more substituted carbon.
*   **Deep Mechanism**: The $\\pi$ electrons attack $H^+$, generating a carbocation. A $3^\\circ$ carbocation is far more stable than a $1^\\circ$ carbocation (due to hyperconjugation and inductive effects). The nucleophile ($Br^-$) then attacks the more stable, more substituted carbocation.
*   **Carbocation Rearrangements**: If a $2^\\circ$ carbocation can undergo a 1,2-hydride shift or 1,2-methide shift to become a more stable $3^\\circ$ carbocation, it will do so instantly, altering the final product skeleton.

### Anti-Markovnikov Hydration (Hydroboration-Oxidation)
To place an $OH$ group on the *less* substituted carbon, we use $BH_3 \\cdot THF$ followed by $H_2O_2, NaOH$.
*   **Mechanism**: Boron is an electron-deficient Lewis acid (empty p-orbital). It coordinates with the $\\pi$ bond. In a concerted, 4-membered transition state, the boron atom attaches to the less sterically hindered carbon, and a hydride ($H^-$) shifts to the more substituted carbon. This results in **syn-addition** (both add to the same face). Oxidation replaces the boron with an $OH$ group with *retention of configuration*.

---

## 3. The Big Four: $S_N1$, $S_N2$, $E1$, $E2$
The competition between nucleophilic substitution and elimination dictates the fate of alkyl halides.

### Substitution Nucleophilic Bimolecular ($S_N2$)
*   **Mechanism**: Concerted. The nucleophile attacks the electrophilic carbon exactly $180^\\circ$ anti to the leaving group.
*   **Kinetics**: $Rate = k[R-X][Nu^-]$.
*   **Stereochemistry**: Complete inversion (Walden Inversion) at the chiral center.
*   **Substrate**: $CH_3-X > 1^\\circ > 2^\\circ$. $3^\\circ$ substrates absolutely cannot undergo $S_N2$ due to extreme steric hindrance blocking the backside trajectory.
*   **Optimal Conditions**: Strong nucleophile (e.g., $CN^-, N_3^-, RS^-$), **Polar Aprotic Solvent** (e.g., DMSO, DMF, Acetone). Protic solvents (like water or ethanol) hydrogen-bond to the nucleophile, building a "cage" around it and destroying its nucleophilicity.

### Substitution Nucleophilic Unimolecular ($S_N1$)
*   **Mechanism**: Stepwise. The leaving group departs autonomously, forming a planar $sp^2$ carbocation (Rate Determining Step). The nucleophile then attacks from either the top or bottom face.
*   **Kinetics**: $Rate = k[R-X]$. (The concentration of the nucleophile does not matter).
*   **Stereochemistry**: Racemization (mix of retention and inversion).
*   **Substrate**: $3^\\circ > 2^\\circ$. $1^\\circ$ substrates cannot form stable carbocations.
*   **Optimal Conditions**: Weak nucleophiles (often just the solvent, like $H_2O$ or $CH_3OH$ - "solvolysis"), **Polar Protic Solvent** (to stabilize the carbocation and the leaving group anion via hydrogen bonding).

### Elimination Bimolecular ($E2$)
*   **Mechanism**: Concerted. A strong base removes a $\\beta$-proton simultaneously as the leaving group departs and the $\\pi$ bond forms.
*   **Stereoelectronics**: Absolutely requires an **Anti-Periplanar** geometry. The $C-H$ bond being broken must be parallel and $180^\\circ$ opposite to the $C-X$ bond. In cyclohexane rings, this means *both* the leaving group and the adjacent hydrogen must be in **axial** positions.
*   **Regioselectivity**: 
    *   **Zaitsev's Rule**: Small bases ($EtO^-, MeO^-$) form the most substituted, most thermodynamically stable alkene.
    *   **Hofmann's Rule**: Bulky, sterically hindered bases ($t-BuO^-$ or LDA) cannot reach the internal protons and thus abstract the most accessible terminal proton, forming the least substituted alkene.

### Elimination Unimolecular ($E1$)
Competes directly with $S_N1$. Forms a carbocation first, then a weak base removes a proton to form the most substituted alkene (Zaitsev). Often driven by applying heat ($\\Delta$).

---

## 4. Aromaticity and Electrophilic Aromatic Substitution (EAS)
Benzene is incredibly stable due to cyclic, continuous electron delocalization.

### Frost Circles & Molecular Orbitals
To prove Huckel's $4n+2$ rule: Inscribe a polygon (e.g., a hexagon for benzene) inside a circle with one vertex pointing straight down. Every vertex represents a molecular orbital energy level. The horizontal center line separates bonding MOs from anti-bonding MOs. For benzene, the 6 $\\pi$-electrons perfectly fill the lowest three bonding MOs, resulting in immense thermodynamic stability. Cyclobutadiene (4 $\\pi$-electrons, an anti-aromatic $4n$ system) has two unpaired electrons in non-bonding orbitals, making it a highly unstable diradical.

### The EAS Mechanism
Benzene acts as a nucleophile, attacking exceptionally strong electrophiles to temporarily disrupt aromaticity (forming the Sigma Complex / Arenium Ion), followed by rapid deprotonation to restore the aromatic ring.
*   **Nitration**: $HNO_3 + H_2SO_4 \\to NO_2^+$ (Nitronium ion).
*   **Friedel-Crafts Alkylation**: $R-Cl + AlCl_3 \\to R^+$ (carbocation electrophile). Subject to carbocation rearrangements and polyalkylation!
*   **Friedel-Crafts Acylation**: $R-COCl + AlCl_3 \\to R-C \\equiv O^+$ (Acylium ion). No rearrangements occur because the acylium ion is resonance-stabilized.

### Directing Effects
*   **Activating Groups (Ortho/Para Directors)**: Groups with lone pairs ($-OH, -NH_2, -OR$) donate electron density via resonance. They stabilize the ortho/para Sigma complex intermediates because the positive charge can be placed directly adjacent to the heteroatom, allowing the lone pair to form a stabilizing $\\pi$ bond (giving all atoms a full octet).
*   **Deactivating Groups (Meta Directors)**: Groups with partial positive charges ($-NO_2, -C \\equiv N, -C=O$) withdraw electron density via inductive and resonance effects. They direct meta because ortho/para attacks force the positive charge of the intermediate to sit directly next to the positively charged substituent, causing intense electrostatic repulsion.
`,

  'Organic Chemistry III: Carbonyls, Alcohols & Amines': `
# Organic Chemistry III: Carbonyls, Alcohols & Amines

## 1. Alcohol & Ether Synthesis and Reactivity
### Alcohols
Alcohols are amphoteric (can act as weak acids or bases).
*   **Grignard Synthesis ($R-MgBr$)**: The carbon-magnesium bond is highly polarized, giving the carbon immense carbanion ($C^-$) character. Grignard reagents are fiercely nucleophilic and highly basic. They attack the electrophilic carbon of formaldehydes to yield $1^\\circ$ alcohols, aldehydes to yield $2^\\circ$ alcohols, and ketones to yield $3^\\circ$ alcohols. They are violently destroyed by any trace of water or protic solvents ($R-MgBr + H_2O \\to R-H + MgBrOH$).
*   **Oxidation Mechanics**: 
    *   **Jones Reagent** ($CrO_3, H_2SO_4, H_2O$): A harsh oxidizer. The alcohol attacks the Chromium, forming a chromate ester intermediate. Base ($H_2O$) removes an alpha-proton, eliminating chromium. Because water is present, aldehydes are immediately hydrated to gem-diols and oxidized a second time all the way to **Carboxylic Acids**.
    *   **Pyridinium Chlorochromate (PCC)**: Anhydrous conditions. Stops at the **Aldehyde** because no gem-diol can form.

### Ethers & Epoxides
*   **Epoxide Ring Opening**: The $C-O-C$ angle in an epoxide is $\\approx 60^\\circ$, creating immense Baeyer ring strain. 
    *   **Basic conditions** (e.g., $NaOCH_3$): Strict $S_N2$. The nucleophile attacks the *less sterically hindered* carbon.
    *   **Acidic conditions** (e.g., $H_2SO_4 / CH_3OH$): The oxygen is protonated, creating an excellent leaving group. The transition state develops significant carbocation character. Thus, the nucleophile attacks the *more highly substituted* carbon because it better supports the partial positive charge.

---

## 2. Carbonyl Chemistry: Aldehydes and Ketones
The defining feature of the carbonyl ($C=O$) is its polar $\\pi$ bond. The oxygen pulls electron density, leaving the carbon highly electrophilic ($sp^2$, planar, unhindered). 

### Acetals and Protecting Groups
Reaction of a ketone with two equivalents of an alcohol (or a diol like ethylene glycol) under strictly **acidic catalysis** forms an acetal ($R_2C(OR')_2$). 
*   **Mechanism**: Protonation of carbonyl oxygen $\\to$ nucleophilic attack by alcohol $\\to$ formation of a hemiacetal $\\to$ protonation of the $OH$ group to make it a water leaving group $\\to$ expulsion of water to form a resonance-stabilized oxocarbenium ion $\\to$ attack by the second alcohol molecule.
*   **Utility**: Acetals are completely inert to strong bases and nucleophiles (like Grignards or $LiAlH_4$). They act as temporary "protecting groups" for ketones/aldehydes. They are easily removed by adding aqueous acid.

### The Wittig Reaction
Converts a ketone/aldehyde directly into an alkene.
1.  **Preparation of Ylide**: A primary alkyl halide reacts with Triphenylphosphine ($PPh_3$) via $S_N2$ to form a phosphonium salt. A super-strong base (like Butyl Lithium, $BuLi$) removes the highly acidic proton next to the positive phosphorus, forming an **Ylide** ($Ph_3P^+-C^-R_2 \\leftrightarrow Ph_3P=CR_2$).
2.  **Mechanism**: The carbanion of the ylide attacks the carbonyl carbon, and the carbonyl oxygen attacks the phosphorus, forming a cyclic 4-membered intermediate called an **oxaphosphetane**.
3.  **Elimination**: The ring collapses, driven by the formation of the incredibly strong $P=O$ double bond (triphenylphosphine oxide), leaving behind the alkene. Unstabilized ylides yield **(Z)-alkenes**, while stabilized ylides yield **(E)-alkenes**.

---

## 3. $\\alpha$-Carbon Chemistry & Enolates
The protons on the carbon adjacent to a carbonyl ($\\alpha$-protons) are unusually acidic ($pKa \\approx 20$ for ketones, $pKa \\approx 9$ for 1,3-diketones) due to resonance stabilization of the resulting enolate (the negative charge is heavily delocalized onto the electronegative oxygen).

### Kinetic vs. Thermodynamic Enolates
For an asymmetric ketone (e.g., 2-methylcyclohexanone):
*   **Kinetic Enolate**: Forms at the *less* substituted $\\alpha$-carbon. Formed fastest. Achieved by using a massive, bulky base (like **LDA**) at extremely cold temperatures ($-78^\\circ C$) where the reaction is irreversible.
*   **Thermodynamic Enolate**: Forms at the *more* substituted $\\alpha$-carbon (yielding a more stable, highly substituted double bond in the enolate). Achieved using a small base (like $NaOCH_3$) at room temperature under reversible conditions.

### The Aldol Condensation
1.  **Enolate Formation**: Base removes an $\\alpha$-proton from Aldehyde A.
2.  **Nucleophilic Attack**: The enolate of A attacks the carbonyl carbon of Aldehyde B, forming a tetrahedral alkoxide.
3.  **Protonation**: Forms a $\\beta$-hydroxy carbonyl compound (The "Aldol" addition product).
4.  **Condensation (Dehydration)**: Upon heating, the remaining $\\alpha$-proton is removed, and the hydroxide group is eliminated (via an $E1cB$ mechanism) to form a highly conjugated, ultra-stable **$\\alpha,\\beta$-unsaturated carbonyl**.

---

## 4. Carboxylic Acid Derivatives
The defining reaction is **Nucleophilic Acyl Substitution** (NAS), not addition. 
Because these derivatives have leaving groups (unlike ketones), the tetrahedral intermediate collapses, reforming the $C=O$ double bond and expelling the leaving group.
*   **Reactivity Ladder**: Acid Chlorides > Acid Anhydrides > Esters > Amides. 
*   **Rule of NAS**: A derivative higher on the ladder can easily be converted to one lower on the ladder, but not vice versa. Acid chlorides react violently with water to form carboxylic acids, but amides require hours of boiling acid to hydrolyze.

### Fischer Esterification
Carboxylic Acid + Alcohol $\\rightleftharpoons$ Ester + Water.
*   **Mechanism**: Completely acid-catalyzed and fully reversible. The carbonyl is protonated to make it ultra-electrophilic. The alcohol attacks, forming a tetrahedral intermediate. Proton transfers turn the original $-OH$ group into $-OH_2^+$, an excellent leaving group. The oxygen lone pair pushes down, kicking out water and reforming the carbonyl. To drive the reaction forward, Le Chatelier's principle is used by removing water via a Dean-Stark trap.
`,

  'Organic Chemistry IV: Spectroscopy & Structural Determination': `
# Organic Chemistry IV: Spectroscopy & Structural Determination

## 1. Infrared (IR) Spectroscopy
IR spectroscopy measures the vibrational transitions of molecular bonds. A bond acts like a quantum mechanical spring; when irradiated with infrared light matching its natural vibrational frequency, it absorbs the photon and undergoes a stretching or bending excitation.
*   **Hooke's Law for Bonds**: The wavenumber ($\\bar{\\nu}$) of absorption is proportional to the bond strength ($k$) and inversely proportional to the reduced mass ($\\mu$) of the two atoms: $\\bar{\\nu} \\propto \\sqrt{k/\\mu}$. Thus, heavy atoms vibrate at lower frequencies (right side of the spectrum), and strong double/triple bonds vibrate at higher frequencies (left side).
*   **Key Absorptions to Memorize**:
    *   **$O-H$ (Alcohols)**: Massive, broad, deep U-shaped tongue around $3200-3600 \\text{ cm}^{-1}$ (broad due to immense hydrogen bonding).
    *   **$O-H$ (Carboxylic Acids)**: Even broader, jagged absorption from $2500-3300 \\text{ cm}^{-1}$ (looks like a hairy beard), often overlapping the $C-H$ stretching region.
    *   **$N-H$ (Amines)**: Medium spikes around $3300 \\text{ cm}^{-1}$. Primary amines ($-NH_2$) have two spikes (symmetric/asymmetric stretching), secondary ($-NH-$) have one, tertiary have none.
    *   **$C \\equiv C$ and $C \\equiv N$**: Sharp, distinct daggers around $2100-2250 \\text{ cm}^{-1}$.
    *   **$C=O$ (Carbonyls)**: The most important peak in IR. A dominant, extremely intense, sharp sword at $1700-1750 \\text{ cm}^{-1}$. (Conjugation lowers this frequency to $\\approx 1680 \\text{ cm}^{-1}$ because resonance gives the $C=O$ bond partial single-bond character, weakening the "spring").

---

## 2. Nuclear Magnetic Resonance (NMR) Spectroscopy
NMR is the ultimate tool for mapping the carbon-hydrogen skeleton of an organic molecule. Nuclei with an odd mass number (like $^1H$ and $^{13}C$) possess quantum mechanical "spin." In a massive external magnetic field ($B_0$), these spins align either with the field ($\\alpha$ state, low energy) or against it ($\\beta$ state, high energy). Radio frequency (RF) pulses provide the exact energy to flip the spins. 

### $^1H$ NMR (Proton NMR)
There are four critical pieces of data in a $^1H$ NMR spectrum:
1.  **Number of Signals**: Represents the number of *chemically non-equivalent* proton environments. Protons that can be interchanged by a plane of symmetry are equivalent and give the same signal.
2.  **Chemical Shift ($\\delta$, ppm)**: Where the peak appears. 
    *   The electron cloud around a nucleus creates a localized magnetic field that *shields* the proton from the external magnet. Shielded protons appear upfield (lower ppm, near 0).
    *   Electronegative atoms (like O, N, halogens) strip electron density away. These **deshielded** protons feel the full force of the magnet and shift downfield (higher ppm).
    *   *Key Shifts*: 
        *   Alkyl ($R-CH_3$): $0.9 - 1.5$ ppm
        *   Adjacent to carbonyl ($\\alpha$-protons): $2.0 - 2.5$ ppm
        *   Next to Oxygen (Ethers/Alcohols): $3.5 - 4.5$ ppm
        *   Alkene (vinylic): $4.5 - 6.5$ ppm
        *   **Aromatic (Benzene ring)**: $6.5 - 8.5$ ppm (Highly deshielded due to the immense magnetic anisotropy of the aromatic $\\pi$-ring current).
        *   Aldehyde: $9.0 - 10.0$ ppm
        *   Carboxylic Acid: $10.0 - 12.0$ ppm
3.  **Integration**: The area under a peak is mathematically proportional to the actual number of protons causing that signal. An integration ratio of 3:2 implies a $CH_3$ group and a $CH_2$ group.
4.  **Spin-Spin Splitting (Coupling)**: The magnetic field of one proton affects its neighbors. A signal will be split into $N+1$ peaks, where $N$ is the number of chemically equivalent protons on *adjacent* carbons.
    *   0 neighbors = Singlet
    *   1 neighbor = Doublet
    *   2 neighbors = Triplet (1:2:1 ratio, Pascal's triangle)
    *   3 neighbors = Quartet (1:3:3:1 ratio)
    *   *Example*: An ethyl group ($-CH_2-CH_3$) invariably shows up as a quartet integrating to 2H, and a triplet integrating to 3H.

### $^{13}C$ NMR
*   Carbon-13 is only 1% naturally abundant, so $C-C$ splitting is not observed. Spectra are run decoupled from protons, meaning every unique carbon appears as a single, clean vertical spike.
*   The chemical shift range is much larger ($0 - 220$ ppm).
*   *Key Shifts*: Carbonyl carbons ($C=O$) appear far downfield ($160 - 220$ ppm). Aromatic carbons ($110 - 150$ ppm). $C-O$ carbons ($50 - 90$ ppm).

---

## 3. Mass Spectrometry (Mass Spec)
Mass spec does not use light. It bombards a molecule with a brutal beam of high-energy electrons (70 eV), violently knocking an electron out of the molecule to form a radical cation known as the **Molecular Ion ($M^{+\\bullet}$)**.
*   **The Molecular Ion Peak (M)**: Gives the exact molecular weight of the intact molecule.
*   **Fragmentation**: The $M^{+\\bullet}$ is so highly energetic that it shatters into smaller pieces. A magnetic sector separates these fragments by their Mass-to-Charge ratio ($m/z$). The most stable fragments (e.g., resonance-stabilized tertiary carbocations) form the most intense peaks. The tallest peak is the **Base Peak** (assigned 100% relative abundance).
*   **Isotope Signatures**:
    *   **Bromine ($Br$)**: Exists naturally as $50.7\\%$ $^{79}Br$ and $49.3\\%$ $^{81}Br$. A molecule containing one Bromine will show an $M$ peak and an $M+2$ peak of **equal height** (1:1 ratio).
    *   **Chlorine ($Cl$)**: Exists naturally as $75\\%$ $^{35}Cl$ and $25\\%$ $^{37}Cl$. A molecule with one Chlorine will show an $M$ and $M+2$ peak in a **3:1 ratio**.
    *   **The Nitrogen Rule**: If a molecule has an *odd* nominal mass, it must contain an *odd* number of nitrogen atoms.
`,

  'Reaction kinetics': `
# Physical Chemistry Kinetics: Michaelis-Menten, Eyring Transition Theory, and Mechanisms

## 1. Rate Laws and Multi-Step Mechanisms
The rate of a chemical reaction is determined by its elementary steps. The slowest step is the Rate-Determining Step (RDS).

---

## 2. Insane Level: Derivation of the Michaelis-Menten Enzyme Kinetics
Enzyme-catalyzed reactions proceed through an enzyme-substrate complex:
$$ E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} ES \\xrightarrow{k_2} E + P $$
where $E$ is free enzyme, $S$ is substrate, $ES$ is complex, and $P$ is product.

We apply the **Steady-State Approximation** to the intermediate $ES$, assuming its concentration remains constant during the main phase of the reaction:
$$ \\frac{d[ES]}{dt} = 0 $$
1.  **Rate of formation and consumption of $ES$**:
    $$ \\frac{d[ES]}{dt} = k_1[E][S] - k_{-1}[ES] - k_2[ES] = 0 $$
2.  **Conservation of Enzyme**:
    Let $[E]_0$ be the total enzyme concentration.
    $$ [E] = [E]_0 - [ES] $$
3.  Substitute $[E]$ into the steady-state equation:
    $$ k_1([E]_0 - [ES])[S] - (k_{-1} + k_2)[ES] = 0 $$
    $$ k_1[E]_0[S] - k_1[ES][S] - (k_{-1} + k_2)[ES] = 0 $$
    $$ k_1[E]_0[S] = [ES]\\Big( k_1[S] + k_{-1} + k_2 \\Big) $$
4.  Solve for $[ES]$:
    $$ [ES] = \\frac{k_1[E]_0[S]}{k_1[S] + k_{-1} + k_2} = \\frac{[E]_0[S]}{[S] + \\frac{k_{-1} + k_2}{k_1}} $$
5.  Define the **Michaelis Constant** $K_M$:
    $$ K_M = \\frac{k_{-1} + k_2}{k_1} \\implies [ES] = \\frac{[E]_0[S]}{[S] + K_M} $$
6.  The rate of product formation (velocity $V$) is:
    $$ V = \\frac{d[P]}{dt} = k_2[ES] = \\frac{k_2[E]_0[S]}{[S] + K_M} $$
7.  The maximum velocity $V_{\\max}$ occurs when all enzyme is saturated with substrate ($[ES] \\approx [E]_0$):
    $$ V_{\\max} = k_2[E]_0 $$
    Substituting this gives the **Michaelis-Menten Equation**:
    $$ V = \\frac{V_{\\max}[S]}{[S] + K_M} $$
    When $[S] = K_M$, the velocity is exactly half of $V_{\\max}$. ∎

---

## 3. Eyring Transition State Theory
Using statistical mechanics, the rate constant is derived by assuming chemical equilibrium between the reactants and the activated transition state complex:
$$ k = \\kappa \\frac{k_B T}{h} e^{-\\frac{\\Delta G^{\\ddagger}}{RT}} $$
Where:
*   $\\kappa$ is the transmission coefficient.
*   $\\Delta G^{\\ddagger}$ is the Gibbs free energy of activation.
*   $k_B$ and $h$ are the Boltzmann and Planck constants.
`,

  'Material & Energy Balances (Chemical Engineering)': `
# Chemical Engineering: Material & Energy Balances

## 1. Introduction to Process Variables
Chemical engineering calculations rely on accurately defining the state and flow of process streams.
*   **Mass and Molar Flow Rates**: The rate at which material is transported through a process line. Mass flow rate ($\\dot{m}$) and molar flow rate ($\\dot{n}$) are related by the molecular weight ($MW$): $\\dot{m} = \\dot{n} \\times MW$.
*   **Compositions**: 
    *   **Mass fraction ($x_i$)**: $x_i = m_i / m_{total}$
    *   **Mole fraction ($y_i$)**: $y_i = n_i / n_{total}$
*   **Pressure**: Absolute pressure is the sum of gauge pressure and atmospheric pressure ($P_{abs} = P_{gauge} + P_{atm}$).
*   **Temperature**: Standard calculations often require absolute temperature scales (Kelvin or Rankine). $T(K) = T(^\\circ C) + 273.15$.

---

## 2. The General Balance Equation
The fundamental law governing all chemical processes is the conservation of mass (and energy). The general balance equation for any conserved quantity (mass, energy, or species) in a system is:
$$ \\text{Accumulation} = \\text{Input} - \\text{Output} + \\text{Generation} - \\text{Consumption} $$

*   **Steady-State**: All variables remain constant over time. Therefore, $\\text{Accumulation} = 0$. The equation simplifies to $\\text{Input} + \\text{Generation} = \\text{Output} + \\text{Consumption}$.
*   **Batch Process**: Material is loaded into a vessel, and products are removed later. No material crosses the boundaries during the process, so $\\text{Input} = 0$ and $\\text{Output} = 0$.
*   **Continuous Process**: Material constantly flows into and out of the system.

### Degree-of-Freedom (DoF) Analysis
Before solving a material balance problem, one must perform a DoF analysis:
$$ N_{DF} = (\\text{Unknown Variables}) - (\\text{Independent Equations}) $$
If $N_{DF} = 0$, the problem has a unique solution. If $N_{DF} > 0$, the problem is underspecified. If $N_{DF} < 0$, it is overspecified.
Independent equations include material balances, phase equilibrium relations (like Raoult's Law), and specified process constraints (e.g., "70% conversion").

---

## 3. Material Balances on Nonreactive Processes
For nonreactive systems, species are neither generated nor consumed.
$$ \\text{Input} = \\text{Output} $$
This applies to both total mass and individual species.

### Multiple-Unit Systems
Most industrial plants involve multiple interconnected units (mixers, reactors, separators).
*   **Bypass Stream**: A stream that skips one or more units and joins the process further downstream. Often used to control the concentration or temperature of a final product.
*   **Recycle Stream**: A stream that returns unreacted material from a downstream separator back to the feed of an upstream unit. Essential for maximizing the efficiency and economics of a process.
*   **Purge Stream**: A small stream bled off a recycle loop to prevent the accumulation of inert or unwanted species that would otherwise build up infinitely in a steady-state recycle process.

---

## 4. Material Balances on Reactive Processes
When chemical reactions occur, individual species are generated and consumed. Total mass is conserved, but total moles are not necessarily conserved.

### Key Concepts
*   **Stoichiometry**: The theoretical molar ratios of reactants and products.
*   **Limiting Reactant**: The reactant that would be exhausted first if the reaction went to completion.
*   **Excess Reactant**: Reactants present in amounts greater than what is stoichiometrically required to react with the limiting reactant. Fractional excess is defined as:
    $$ \\% \\text{Excess} = \\frac{\\text{Moles Fed} - \\text{Stoichiometric Moles}}{\\text{Stoichiometric Moles}} \\times 100\\% $$
*   **Fractional Conversion ($f$)**: The fraction of a reactant (usually the limiting reactant) that has reacted.
    $$ f = \\frac{\\text{Moles Reacted}}{\\text{Moles Fed}} $$

### Methods for Solving Reactive Balances
1.  **Extent of Reaction ($\\xi$)**: Let $\\nu_i$ be the stoichiometric coefficient of species $i$ (positive for products, negative for reactants). 
    $$ n_{i,\\text{out}} = n_{i,\\text{in}} + \\nu_i \\xi $$
    You write one balance equation for each species using the same $\\xi$.
2.  **Atomic Species Balances**: Atoms cannot be created or destroyed. The input of Carbon atoms must equal the output of Carbon atoms. This method requires no knowledge of $\\xi$ or generation/consumption terms.
3.  **Molecular Species Balances**: Uses the full equation $\\text{In} - \\text{Out} + \\text{Gen} - \\text{Cons} = 0$. You relate the generation of products to the consumption of reactants via stoichiometry.

### Combustion Reactions
Combustion of fossil fuels is a special class of reactive processes.
*   **Theoretical Air**: The exact amount of air needed for complete combustion of the fuel to $CO_2$ and $H_2O$.
*   **Excess Air**: Combustors are usually run with excess air to ensure complete combustion.

---

## 5. Fundamentals of Energy Balances
The First Law of Thermodynamics states that energy is conserved. Energy can exist as kinetic energy ($E_k$), potential energy ($E_p$), and internal energy ($U$).

### The Open System (Flow) Energy Balance
For a continuous, steady-state process, enthalpy ($H = U + PV$) is the most useful property because it incorporates both the internal energy and the flow work ($PV$ work) required to push material into and out of the system.
$$ \\Delta \\dot{H} + \\Delta \\dot{E}_k + \\Delta \\dot{E}_p = \\dot{Q} - \\dot{W}_s $$
Where:
*   $\\Delta \\dot{H}$ is the change in enthalpy flow rate between output and input streams.
*   $\\dot{Q}$ is the rate of heat transferred *to* the system.
*   $\\dot{W}_s$ is the shaft work done *by* the system (e.g., a turbine or pump).
In many chemical processes, changes in kinetic and potential energy are negligible compared to enthalpy changes, simplifying the balance to:
$$ \\Delta \\dot{H} = \\dot{Q} - \\dot{W}_s $$

---

## 6. Energy Balances on Nonreactive Processes
To calculate $\\Delta \\dot{H}$, we must define a **reference state** for every species, because absolute enthalpy cannot be measured. We calculate changes in enthalpy relative to this reference state.

### Sensible Heat
Sensible heat refers to changes in temperature without a phase change. The specific enthalpy change is calculated by integrating the constant-pressure heat capacity ($C_p$):
$$ \\Delta \\hat{H} = \\int_{T_1}^{T_2} C_p(T) \\, dT $$
$C_p$ is typically a polynomial function of temperature ($C_p = a + bT + cT^2 + dT^3$).

### Latent Heat
Latent heat is the enthalpy change associated with a phase transition (e.g., melting, boiling) at a constant temperature and pressure.
$$ \\Delta \\hat{H} = \\Delta \\hat{H}_v(T_v) \\quad \\text{(Enthalpy of Vaporization)} $$

### Hypothetical Paths
Because enthalpy is a state function, if you need to calculate $\\Delta \\hat{H}$ for a process that changes temperature, pressure, and phase, you can construct a "hypothetical path" of simpler steps (e.g., heat liquid, vaporize at normal boiling point, heat vapor) and sum their enthalpies.

---

## 7. Energy Balances on Reactive Processes
When chemical reactions occur, the energy required to break and form chemical bonds causes massive changes in enthalpy.

### Heat of Reaction ($\\Delta \\hat{H}_r$)
The enthalpy change when stoichiometric quantities of reactants completely react at a specific temperature and pressure. It is negative for exothermic reactions (releases heat) and positive for endothermic reactions (absorbs heat).

### Heat of Formation ($\\Delta \\hat{H}_f^\\circ$)
The enthalpy change associated with the formation of 1 mole of a compound from its elemental constituents in their standard states (25°C, 1 atm). By definition, $\\Delta \\hat{H}_f^\\circ$ for a pure element in its standard state (like $O_2$ gas or solid $C$) is zero.

### Calculating Heat of Reaction via Hess's Law
Using standard heats of formation, the standard heat of reaction can be calculated:
$$ \\Delta \\hat{H}_r^\\circ = \\sum (\\nu_i \\Delta \\hat{H}_f^\\circ)_{\\text{products}} - \\sum (|\\nu_i| \\Delta \\hat{H}_f^\\circ)_{\\text{reactants}} $$

### Energy Balance Methods
When solving an energy balance for a reactor:
1.  **Heat of Reaction Method**: Best when there is a single reaction. You calculate the reaction enthalpy at the reference temperature ($25^\\circ C$), and add the sensible heats to cool reactants from their inlet temperature to $25^\\circ C$, and heat products from $25^\\circ C$ to their outlet temperature.
2.  **Heat of Formation Method**: Best for multiple reactions. You set the reference state for all species to their elemental constituents at $25^\\circ C$. The enthalpy of any stream is simply the sum of the heats of formation of its components plus their sensible heats from $25^\\circ C$.

### Adiabatic Flame Temperature
If a reactor (like a combustion chamber) is perfectly insulated, $\\dot{Q} = 0$. The **adiabatic flame temperature** is the theoretical maximum temperature the products can reach. All the energy released by the exothermic reaction goes entirely into heating the product gases. You solve for $T_{out}$ iteratively such that $\\Delta \\dot{H} = 0$.
`
};
