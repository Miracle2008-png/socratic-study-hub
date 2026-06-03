export const biologyContentExt: Record<string, string> = {

  'Genetics and Heredity': `
# Genetics and Heredity

Genetics is the study of genes, genetic variation, and heredity. It explains how traits are transmitted from parents to offspring via DNA.

## Mendelian Genetics

Gregor Mendel's pea-plant experiments established the two foundational laws of inheritance.

**Law of Segregation:** Each organism carries two alleles for each gene. These separate during meiosis, so each gamete carries exactly one allele.

**Law of Independent Assortment:** Genes on different chromosomes assort independently during gamete formation.

### Punnett Square Ratios
For a monohybrid cross **Aa × Aa**:
- Genotypic ratio: 1 AA : 2 Aa : 1 aa
- Phenotypic ratio: 3 Dominant : 1 Recessive

For a dihybrid cross **AaBb × AaBb**:
- Phenotypic ratio: 9 A\_B\_ : 3 A\_bb : 3 aaB\_ : 1 aabb

## DNA Structure and Replication

DNA is a right-handed double helix of two antiparallel polynucleotide strands held by hydrogen bonds between complementary bases.

**Base pairing (Chargaff's Rules):**
- Adenine (A) pairs with Thymine (T) — 2 hydrogen bonds
- Guanine (G) pairs with Cytosine (C) — 3 hydrogen bonds

**DNA Replication** is semi-conservative: each strand serves as template for a new complementary strand.

Key enzymes:
| Enzyme | Role |
|--------|------|
| Helicase | Unwinds and separates the double helix |
| DNA Polymerase III | Synthesises new strand 5'→3' |
| Primase | Lays down RNA primers |
| DNA Ligase | Joins Okazaki fragments on the lagging strand |

## Transcription and Translation

**Transcription** (nucleus): DNA → mRNA
$$\\text{DNA template} \\xrightarrow{\\text{RNA Polymerase}} \\text{pre-mRNA} \\xrightarrow{\\text{processing}} \\text{mRNA}$$

**Translation** (ribosome): mRNA → Protein
- Codons: triplets of mRNA bases
- Start codon: **AUG** (methionine)
- Stop codons: UAA, UAG, UGA
- tRNA anticodons deliver amino acids; peptide bonds form via peptidyl transferase

## Mutations

| Type | Description | Example |
|------|-------------|---------|
| Point mutation | Single base change | Sickle-cell anaemia (Glu→Val) |
| Frameshift | Insertion or deletion shifts reading frame | Cystic fibrosis deletions |
| Chromosomal | Large-scale rearrangements | Down syndrome (trisomy 21) |

## Non-Mendelian Inheritance

- **Incomplete dominance:** Heterozygote is intermediate (e.g., red × white = pink)
- **Codominance:** Both alleles fully expressed (e.g., AB blood type)
- **Sex-linkage:** Genes on X chromosome; affects males more (e.g., haemophilia)
- **Polygenic traits:** Multiple genes control one trait (e.g., height, skin colour) — produces a normal distribution

## Genetic Crosses — Worked Example

**Problem:** In guinea pigs, black (B) is dominant over white (b). Two heterozygous parents cross. What fraction of offspring are white?

**Solution:**
Bb × Bb → ¼ BB, ½ Bb, ¼ bb

White = bb → probability = **¼ (25%)**
`,

  'Cellular Respiration': `
# Cellular Respiration

Cellular respiration converts glucose chemical energy into ATP — the universal energy currency — releasing $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ as byproducts.

## Overall Equation

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\approx 30{-}32\\;\\text{ATP}$$

## Stage 1: Glycolysis

**Location:** Cytoplasm (anaerobic — no oxygen required)

**Input:** 1 glucose (6C) + 2 ATP (investment)

**Output:** 2 pyruvate (3C) + **4 ATP** (net gain 2) + **2 NADH**

Key steps: glucose → glucose-6-phosphate → fructose-1,6-bisphosphate → 2× glyceraldehyde-3-phosphate → 2× pyruvate

## Stage 2: Pyruvate Oxidation (Link Reaction)

**Location:** Mitochondrial matrix

Each pyruvate is decarboxylated and combined with CoA:
$$\\text{Pyruvate} + \\text{CoA} + \\text{NAD}^+ \\rightarrow \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$

Per glucose: 2 CO₂ released, 2 NADH produced, 2 Acetyl-CoA formed.

## Stage 3: Krebs Cycle (Citric Acid Cycle)

**Location:** Mitochondrial matrix

Acetyl-CoA (2C) combines with oxaloacetate (4C) → citrate (6C) → series of oxidations → regenerates oxaloacetate.

**Per turn** (×2 per glucose):
- 3 NADH, 1 FADH₂, 1 ATP (via GTP), 2 CO₂

**Per glucose totals from Krebs:** 6 NADH, 2 FADH₂, 2 ATP, 4 CO₂

## Stage 4: Oxidative Phosphorylation

**Location:** Inner mitochondrial membrane

**Electron Transport Chain (ETC):**
- NADH and FADH₂ donate electrons to protein complexes (I, II, III, IV)
- Electron flow drives proton ($\\text{H}^+$) pumping from matrix → intermembrane space
- $\\text{O}_2$ is the final electron acceptor: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$

**Chemiosmosis:**
Protons flow back through **ATP Synthase** down their electrochemical gradient, driving ATP synthesis.

$$\\text{ADP} + \\text{P}_i \\xrightarrow{\\text{ATP Synthase}} \\text{ATP}$$

**ATP yield:** ~2.5 ATP per NADH, ~1.5 ATP per FADH₂ → approximately 26–28 ATP from oxidative phosphorylation.

## ATP Summary Table

| Stage | ATP | NADH | FADH₂ |
|-------|-----|------|-------|
| Glycolysis | 2 (net) | 2 | — |
| Pyruvate oxidation | 0 | 2 | — |
| Krebs cycle | 2 | 6 | 2 |
| Oxidative phosphorylation | ~26–28 | consumed | consumed |
| **Total** | **~30–32** | | |

## Fermentation (Anaerobic)

When oxygen is absent, cells ferment to regenerate NAD⁺ (needed for glycolysis to continue):

- **Lactic acid fermentation** (muscle cells, bacteria): pyruvate → lactate
- **Alcoholic fermentation** (yeast): pyruvate → ethanol + CO₂

Fermentation yields only **2 ATP** per glucose — much less efficient than aerobic respiration.

## Photosynthesis vs Respiration

$$\\underbrace{6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light}\\xrightarrow{\\text{photosynthesis}}\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2}_{\\text{reverse of aerobic respiration}}$$

They are complementary: photosynthesis stores energy, respiration releases it.
`,

  'Evolution and Natural Selection': `
# Evolution and Natural Selection

Evolution is the change in allele frequencies in a population over successive generations, driven by natural selection, genetic drift, gene flow, and mutation.

## Darwin's Four Postulates

1. **Variation** — Individuals differ in heritable traits
2. **Heritability** — Traits are passed to offspring
3. **Overproduction** — More offspring are born than survive
4. **Differential survival** — Individuals with favourable traits survive and reproduce more

Result: favourable alleles increase in frequency over generations.

## Types of Natural Selection

| Type | Effect on phenotype distribution | Example |
|------|----------------------------------|---------|
| Directional | Shifts mean toward one extreme | Antibiotic resistance |
| Stabilising | Reduces variance around mean | Human birth weight |
| Disruptive | Favours both extremes, splits distribution | Beak size in finches |

## Hardy-Weinberg Equilibrium

Describes a non-evolving population. For two alleles ($p$ = dominant frequency, $q$ = recessive frequency):

$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

**HWE assumptions** (violation → evolution is occurring):
1. No mutation
2. Random mating
3. No gene flow
4. No genetic drift (infinitely large population)
5. No natural selection

**Worked example:** If 9% of a population shows a recessive phenotype (aa):
$$q^2 = 0.09 \\Rightarrow q = 0.3,\\; p = 0.7$$
$$2pq = 2(0.7)(0.3) = 0.42 = 42\\%\\text{ heterozygous carriers}$$

## Mechanisms of Evolution

**Genetic drift** — Random allele frequency changes; strongest in small populations
- *Founder effect:* New population from small group → low diversity (e.g., Amish)
- *Bottleneck effect:* Population crash → surviving alleles may be unrepresentative (e.g., cheetahs)

**Gene flow** — Migration moves alleles between populations, reducing divergence

**Mutation** — Ultimate source of all new alleles; generally rare per locus per generation ($\\sim 10^{-6}$)

**Sexual selection** — Mate choice drives evolution of secondary sexual characteristics (e.g., peacock feathers)

## Speciation

**Allopatric speciation:** Geographic isolation → independent evolution → reproductive isolation

**Sympatric speciation:** No geographic barrier; reproductive isolation via polyploidy (common in plants) or habitat/behavioural divergence

**Reproductive isolating mechanisms:**
- Pre-zygotic: habitat, temporal, behavioural, mechanical, gametic isolation
- Post-zygotic: hybrid inviability, sterility (e.g., mule)

## Evidence for Evolution

| Type | Examples |
|------|---------|
| Fossil record | Transitional forms (Tiktaalik, Archaeopteryx) |
| Comparative anatomy | Homologous structures (forelimbs of mammals) |
| Molecular biology | Cytochrome c amino acid sequences; shared pseudogenes |
| Biogeography | Island species resemble nearest mainland, not similar-habitat species elsewhere |
`,

  'Human Physiology and Anatomy': `
# Human Physiology and Anatomy

Human physiology studies the functions of body systems, all integrated to maintain **homeostasis** — a stable internal environment.

## Homeostasis and Feedback Loops

All regulatory systems use negative feedback:
$$\\text{Stimulus} \\rightarrow \\text{Receptor} \\rightarrow \\text{Control centre} \\rightarrow \\text{Effector} \\rightarrow \\text{Response}$$

Examples: body temperature, blood glucose, blood pH (7.35–7.45).

## The Nervous System

**Organisation:**
- CNS: brain + spinal cord
- PNS: somatic (voluntary) + autonomic (sympathetic/parasympathetic)

### Action Potentials

Neurons signal via rapid changes in membrane potential:

| Phase | Ion movement | Membrane potential |
|-------|-------------|-------------------|
| Resting | Na⁺/K⁺ pump maintains gradient | −70 mV |
| Depolarisation | Na⁺ rushes in (voltage-gated channels open) | 0 → +40 mV |
| Repolarisation | K⁺ rushes out | +40 → −70 mV |
| Hyperpolarisation | Brief undershoot | < −70 mV |

**Synaptic transmission:** Action potential → neurotransmitter release (e.g., acetylcholine) → binds post-synaptic receptors → EPSP/IPSP

## The Cardiovascular System

**Cardiac output:**
$$CO = HR \\times SV$$

Where $HR$ = heart rate (beats/min), $SV$ = stroke volume (mL/beat). Normal CO ≈ 5 L/min at rest.

**Blood pressure:** $BP = CO \\times TPR$ (total peripheral resistance)

**Cardiac cycle:**
- Systole: ventricles contract, eject blood (120 mmHg systolic)
- Diastole: ventricles relax, fill with blood (80 mmHg diastolic)

**Heart sounds:** S1 ("lub") = AV valves closing; S2 ("dub") = semilunar valves closing

## The Respiratory System

**Boyle's Law drives breathing:**
$$P_1V_1 = P_2V_2$$

Inspiration: diaphragm contracts → thoracic volume ↑ → pressure ↓ → air flows in.

**Gas exchange at alveoli** — Fick's Law of Diffusion:
$$J = -D \\cdot A \\cdot \\frac{\\Delta P}{\\Delta x}$$

Oxygen diffuses from alveoli (high $P_{O_2}$) into blood; CO₂ diffuses out.

**Haemoglobin oxygen dissociation curve:** Sigmoidal shape; cooperativity means small changes in $P_{O_2}$ cause large changes in saturation at tissue level.

## The Endocrine System

Hormones are chemical messengers secreted into blood.

| Gland | Hormone | Function |
|-------|---------|---------|
| Pancreas (β cells) | Insulin | Lowers blood glucose |
| Pancreas (α cells) | Glucagon | Raises blood glucose |
| Adrenal medulla | Adrenaline | Fight-or-flight response |
| Thyroid | Thyroxine (T4) | Raises metabolic rate |
| Anterior pituitary | TSH, FSH, LH, GH | Regulate target glands |

**Negative feedback example (thyroid axis):**
$$\\text{Hypothalamus (TRH)} \\rightarrow \\text{Pituitary (TSH)} \\rightarrow \\text{Thyroid (T4)} \\dashv \\text{Hypothalamus/Pituitary}$$

## The Immune System

**Innate immunity:** Non-specific, immediate (physical barriers, phagocytes, inflammation, fever)

**Adaptive immunity:** Specific, memory-forming
- **Humoral:** B cells → plasma cells → antibodies (IgG, IgM, IgA, IgE, IgD)
- **Cell-mediated:** Cytotoxic T cells (CD8⁺) kill infected/cancerous cells; Helper T cells (CD4⁺) coordinate immune response

**Clonal selection:** Antigen activates specific lymphocyte clones → proliferation → effector cells + memory cells

## The Digestive System

$$\\text{Mouth} \\rightarrow \\text{Oesophagus} \\rightarrow \\text{Stomach} \\rightarrow \\text{Small intestine} \\rightarrow \\text{Large intestine} \\rightarrow \\text{Rectum}$$

- **Stomach:** HCl (pH 1.5–3.5) + pepsinogen → pepsin (protein digestion)
- **Small intestine:** Pancreatic enzymes (lipase, amylase, proteases) + bile emulsifies fats → absorption via villi/microvilli
- **Large intestine:** Water reabsorption; bacterial fermentation of fibre
`,

  'Ecology and Ecosystems': `
# Ecology and Ecosystems

Ecology studies the interactions among organisms and between organisms and their abiotic environment, at levels from individuals to the biosphere.

## Levels of Ecological Organisation

Individual → Population → Community → Ecosystem → Biome → Biosphere

## Population Ecology

### Exponential Growth (unlimited resources)
$$\\frac{dN}{dt} = r_{max} N$$

Solution: $N(t) = N_0 e^{r_{max} t}$ — a J-shaped curve.

### Logistic Growth (resource-limited)
$$\\frac{dN}{dt} = r_{max} N \\left(\\frac{K - N}{K}\\right)$$

- $K$ = carrying capacity
- Growth rate is maximum at $N = K/2$ (inflection point)
- As $N \\to K$, growth rate $\\to 0$ — S-shaped (sigmoidal) curve

### Life History Strategies

| r-strategist | K-strategist |
|---|---|
| Small body size | Large body size |
| Many offspring, little parental care | Few offspring, much parental care |
| Short lifespan | Long lifespan |
| Unstable environments | Stable environments |
| E.g., insects, mice | E.g., elephants, whales |

## Community Ecology

### Species Interactions

| Interaction | Species A | Species B | Example |
|---|---|---|---|
| Mutualism | + | + | Mycorrhizae + plant roots |
| Commensalism | + | 0 | Epiphytes on trees |
| Parasitism | + | − | Tapeworm in host |
| Predation | + | − | Lion + zebra |
| Competition | − | − | Two species for same niche |
| Amensalism | 0 | − | Penicillium inhibiting bacteria |

### Competitive Exclusion Principle
Two species occupying the same ecological niche cannot coexist indefinitely — one will outcompete and exclude the other.

### Keystone Species
Species with a disproportionately large effect on ecosystem structure relative to their abundance (e.g., sea otters controlling urchin populations → maintaining kelp forests).

## Energy Flow in Ecosystems

### Trophic Levels
Primary Producers (autotrophs) → Primary Consumers → Secondary Consumers → Tertiary Consumers → Decomposers

### 10% Rule and Ecological Pyramids
Only ~10% of energy transfers between trophic levels; the rest lost as metabolic heat.

$$\\text{Trophic efficiency} = \\frac{\\text{Production at trophic level } n+1}{\\text{Production at trophic level } n} \\approx 10\\%$$

This limits food chains to typically 4–5 levels.

**Net Primary Productivity (NPP):**
$$NPP = GPP - R_a$$

Where GPP = gross primary productivity, $R_a$ = autotroph respiration.

## Biogeochemical Cycles

**Carbon cycle:** Photosynthesis fixes CO₂; respiration/decomposition/combustion returns it. Ocean acts as major sink.

**Nitrogen cycle:** $\\text{N}_2 \\xrightarrow{\\text{fixation}} \\text{NH}_3 \\xrightarrow{\\text{nitrification}} \\text{NO}_3^- \\xrightarrow{\\text{denitrification}} \\text{N}_2$

Key organisms: Rhizobium (N-fixation in legume root nodules), Nitrosomonas (nitrification), Pseudomonas (denitrification)

**Phosphorus cycle:** No atmospheric reservoir; weathering → soil → organisms → decomposition → soil. Often the limiting nutrient in freshwater systems.

## Biomes

Determined primarily by temperature and precipitation:

| Biome | Climate | Key features |
|---|---|---|
| Tropical rainforest | Hot, wet year-round | High biodiversity, thin nutrient-poor soils |
| Temperate deciduous forest | Seasonal temperature | Deciduous trees, rich soils |
| Grassland/Savanna | Seasonal rainfall | Grasses dominant, large herbivores |
| Desert | <250 mm rain/yr | CAM plants, nocturnal animals |
| Tundra | Cold, permafrost | Low biodiversity, slow decomposition |
| Taiga (boreal forest) | Cold, moderate precipitation | Conifers dominant |

## Conservation Biology

**Biodiversity** = genetic + species + ecosystem diversity.

**Threats:** HIPPO — Habitat loss, Invasive species, Pollution, Population growth, Overexploitation

**Island Biogeography Theory:**
$$S \\approx cA^z$$
Species number $S$ scales with area $A$. Guides reserve design: larger reserves support more species.
`,

  'Molecular Biotechnology': `
# Molecular Biotechnology

Molecular biotechnology applies knowledge of molecular biology to develop tools, therapies, and technologies that manipulate biological systems at the molecular level.

## DNA Manipulation Techniques

### Restriction Enzymes (Restriction Endonucleases)
Bacterial enzymes that cut double-stranded DNA at specific palindromic recognition sequences, producing either blunt ends or **sticky ends** (staggered cuts).

Example — EcoRI cuts at 5'-**GAATTC**-3':
$$5'\\text{---G} \\downarrow \\text{AATTC---}3' \\quad \\rightarrow \\quad 5'\\text{---G} \\quad + \\quad \\text{AATTC---}3'$$

Sticky ends allow complementary fragments to anneal for ligation.

### Gel Electrophoresis
Separates DNA fragments by size in an agarose gel under electric field:
- DNA is negatively charged → migrates toward anode (+)
- Smaller fragments travel farther
- DNA ladder (size marker) run in parallel lane for comparison

$$\\text{Distance migrated} \\propto -\\log(\\text{base pairs})$$

### Polymerase Chain Reaction (PCR)

Exponentially amplifies a target DNA sequence *in vitro*.

**Three steps (repeated 25–40 cycles):**
1. **Denaturation** (94–96°C) — H-bonds break, strands separate
2. **Annealing** (50–65°C) — Primers bind complementary sequences
3. **Extension** (72°C) — Taq polymerase synthesises new strand 5'→3'

$$\\text{Copies after } n \\text{ cycles} = 2^n$$

After 30 cycles: $2^{30} \\approx 10^9$ copies.

**Quantitative PCR (qPCR):** Fluorescent dyes track amplification in real-time → measures starting quantity of template.

## Cloning and Gene Expression

### Recombinant DNA and Plasmid Vectors
1. Cut target gene and vector with same restriction enzyme → compatible sticky ends
2. Mix fragments with DNA ligase → recombinant plasmid formed
3. Transform into host bacteria (heat shock / electroporation)
4. Select transformed colonies (antibiotic resistance, blue-white screening)

### Gene Expression Systems
| Host | Advantage | Use case |
|---|---|---|
| E. coli | Fast, cheap, scalable | Insulin, HGH production |
| Yeast | Post-translational modifications | Hepatitis B vaccine |
| Mammalian cells | Full glycosylation | Antibodies, complex proteins |
| Transgenic organisms | Milk/egg production | Pharming |

## CRISPR-Cas9 Gene Editing

**Components:**
- **Guide RNA (sgRNA):** 20-nt sequence complementary to target DNA
- **Cas9 endonuclease:** Creates double-strand break (DSB) at target site

**Mechanism:**
$$\\text{sgRNA} + \\text{Cas9} \\rightarrow \\text{sgRNA:Cas9 complex} \\xrightarrow{\\text{binds PAM (NGG)}} \\text{DSB at target}$$

**DNA repair pathways:**
- **NHEJ (Non-Homologous End Joining):** Error-prone → insertions/deletions → gene knockout
- **HDR (Homology-Directed Repair):** Uses donor template → precise sequence replacement

Applications: genetic disease correction, cancer immunotherapy (CAR-T cells), crop improvement, functional genomics screens.

## DNA Sequencing

### Sanger Sequencing (First Generation)
Uses chain-terminating ddNTPs (dideoxynucleotides). Fragments of different lengths separated by capillary electrophoresis → reads sequence from size order.

### Next-Generation Sequencing (NGS)
Massively parallel sequencing of millions of fragments simultaneously:
- **Illumina:** Sequencing by synthesis with reversible fluorescent terminators
- **Oxford Nanopore:** Ion current changes as DNA passes through protein pore (long reads)

Cost of sequencing a human genome: $3 billion (2003) → <$1,000 (2023).

## Applications

| Application | Description |
|---|---|
| Insulin production | Human insulin gene in E. coli — replaced animal insulin (1982) |
| Gene therapy | Delivery of functional genes via viral vectors (AAV) to correct genetic disease |
| Forensic DNA profiling | STR (short tandem repeat) analysis — unique individual fingerprint |
| DNA vaccines | mRNA encoding antigen injected → host cells produce antigen → immune response (COVID-19 mRNA vaccines) |
| Synthetic biology | Engineering novel metabolic pathways; e.g., artemisinin (antimalarial) production in yeast |
`,
};
