export const biologyContentExt: Record<string, string> = {
  'Genetics and Heredity': `
# Genetics and Heredity

Genetics is the study of genes, genetic variation, and heredity in organisms. It forms the core of modern biology and explains how traits are passed from parents to offspring.

## Mendelian Genetics

Gregor Mendel established the fundamental laws of inheritance through his experiments with pea plants.

### Law of Segregation
During the formation of gametes (meiosis), the two alleles for a trait separate, so each gamete carries only one allele for each gene.

### Law of Independent Assortment
Genes for different traits can segregate independently during the formation of gametes, assuming the genes are on different chromosomes or far apart on the same chromosome.

### Punnett Squares
A simple mathematical model used to predict the genotypes of a particular cross or breeding experiment. For a monohybrid cross (Aa x Aa):
*   **Genotypic ratio:** 1 (AA) : 2 (Aa) : 1 (aa)
*   **Phenotypic ratio:** 3 (Dominant) : 1 (Recessive)

## Molecular Genetics

Molecular genetics deals with the structure and function of genes at a molecular level, primarily focusing on DNA and RNA.

### The Central Dogma
The central dogma of molecular biology describes the two-step process (transcription and translation) by which the information in genes flows into proteins:

$$ \\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{RNA} \\xrightarrow{\\text{Translation}} \\text{Protein} $$

### DNA Structure
DNA is a double helix composed of nucleotides. Each nucleotide contains:
1.  A phosphate group
2.  A deoxyribose sugar
3.  A nitrogenous base (Adenine, Thymine, Cytosine, or Guanine)

**Chargaff's Rules:** In natural DNA, the amount of Adenine equals Thymine ($A = T$), and Guanine equals Cytosine ($G = C$).

## Non-Mendelian Inheritance

*   **Incomplete Dominance:** The heterozygous phenotype is an intermediate blend of the two homozygous phenotypes (e.g., Red x White = Pink flowers).
*   **Codominance:** Both alleles are fully expressed in the heterozygote (e.g., AB blood type).
*   **Polygenic Traits:** Traits controlled by two or more genes (e.g., skin color, height), often producing a bell-curve distribution.
`,
  'Cellular Respiration': `
# Cellular Respiration

Cellular respiration is the set of metabolic reactions and processes that take place in the cells of organisms to convert biochemical energy from nutrients into adenosine triphosphate (ATP), and then release waste products.

## The Overall Equation

The overall reaction for the aerobic respiration of glucose is:

$$ C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{ATP} $$

## Stages of Cellular Respiration

Aerobic respiration occurs in four major stages:

### 1. Glycolysis
*   **Location:** Cytoplasm
*   **Process:** One molecule of glucose (6-carbon) is split into two molecules of pyruvate (3-carbon).
*   **Net Yield:** 2 ATP, 2 NADH, 2 Pyruvate.
*   **Note:** Glycolysis is anaerobic (does not require oxygen).

### 2. Pyruvate Oxidation
*   **Location:** Mitochondrial Matrix
*   **Process:** Pyruvate is converted into Acetyl-CoA, releasing $CO_2$.
*   **Net Yield:** 2 NADH, 2 $CO_2$, 2 Acetyl-CoA (per glucose molecule).

### 3. The Citric Acid Cycle (Krebs Cycle)
*   **Location:** Mitochondrial Matrix
*   **Process:** Acetyl-CoA combines with oxaloacetate to form citrate. Through a series of redox reactions, the carbon is fully oxidized to $CO_2$.
*   **Net Yield:** 6 NADH, 2 FADH_2, 2 ATP, 4 $CO_2$ (per glucose molecule).

### 4. Oxidative Phosphorylation
*   **Location:** Inner Mitochondrial Membrane
*   **Components:** Electron Transport Chain (ETC) and Chemiosmosis.
*   **Process:** Electrons from NADH and $FADH_2$ are transferred through membrane proteins. The energy released pumps protons ($H^+$) across the membrane, creating an electrochemical gradient.
*   **ATP Synthesis:** Protons flow back through **ATP Synthase**, driving the production of ATP. Oxygen acts as the final electron acceptor, combining with $H^+$ to form water.
*   **Net Yield:** Approximately 26-28 ATP.

## Anaerobic Respiration (Fermentation)

When oxygen is absent, cells undergo fermentation to regenerate $NAD^+$ so glycolysis can continue.
*   **Lactic Acid Fermentation:** Occurs in human muscle cells; produces lactate.
*   **Alcoholic Fermentation:** Occurs in yeast; produces ethanol and $CO_2$.
`,
  'Evolution and Natural Selection': `
# Evolution and Natural Selection

Evolution is the change in the heritable characteristics of biological populations over successive generations.

## Darwin's Theory of Natural Selection

Charles Darwin proposed natural selection as the primary mechanism for evolution. It is based on four key observations:

1.  **Overproduction:** Populations produce more offspring than the environment can support.
2.  **Variation:** Individuals in a population exhibit variation in their traits.
3.  **Heritability:** Many of these variations are inherited from parents to offspring.
4.  **Differential Reproductive Success:** Individuals with traits best suited to their environment are more likely to survive and reproduce.

### Evolutionary Fitness
Fitness describes an organism's ability to survive and reproduce, contributing genes to the next generation's pool.

## Hardy-Weinberg Equilibrium

The Hardy-Weinberg principle provides a mathematical baseline for a non-evolving population. For a gene with two alleles ($p$ and $q$):

**Allele frequency equation:**
$$ p + q = 1 $$

**Genotype frequency equation:**
$$ p^2 + 2pq + q^2 = 1 $$

Where:
*   $p^2$ = frequency of homozygous dominant genotype
*   $2pq$ = frequency of heterozygous genotype
*   $q^2$ = frequency of homozygous recessive genotype

If the observed frequencies deviate from these predictions, the population is evolving.

## Mechanisms of Evolution
*   **Natural Selection:** Environment selects for beneficial traits.
*   **Genetic Drift:** Random fluctuations in allele frequencies, significant in small populations (Founder effect, Bottleneck effect).
*   **Gene Flow:** Transfer of genetic material between populations due to migration.
*   **Mutation:** The ultimate source of new genetic variation.
`,
  'Human Physiology and Anatomy': `
# Human Physiology and Anatomy

Physiology is the study of normal function within living creatures, while anatomy is the study of their physical structure.

## The Nervous System

The nervous system coordinates the body's actions by transmitting signals to and from different parts of its body.

### Action Potentials
Neurons communicate via electrical impulses called action potentials, caused by the movement of ions across the cell membrane.
1.  **Resting State:** Maintained by the $Na^+/K^+$ pump (inside is negative relative to outside, $\\approx -70 mV$).
2.  **Depolarization:** $Na^+$ channels open, sodium rushes in (membrane potential becomes positive).
3.  **Repolarization:** $K^+$ channels open, potassium rushes out (membrane potential becomes negative again).

## The Cardiovascular System

Responsible for transporting oxygen, nutrients, hormones, and cellular waste products throughout the body.

### Cardiac Output ($CO$)
The volume of blood pumped by the heart per minute.

$$ CO = HR \\times SV $$

Where:
*   $HR$ is Heart Rate (beats per minute)
*   $SV$ is Stroke Volume (volume of blood pumped per beat)

## The Endocrine System

A chemical messenger system comprising feedback loops of hormones released by internal glands directly into the circulatory system.

*   **Negative Feedback:** The end product of a pathway inhibits the pathway (e.g., insulin lowering blood glucose, which inhibits further insulin release).
*   **Positive Feedback:** The end product amplifies the pathway (e.g., oxytocin accelerating childbirth).
`,
  'Ecology and Ecosystems': `
# Ecology and Ecosystems

Ecology is the scientific analysis and study of interactions among organisms and their environment.

## Population Dynamics

Populations grow and shrink based on births, deaths, immigration, and emigration.

### Exponential Growth
Occurs when resources are unlimited. The growth rate is proportional to the population size:

$$ \\frac{dN}{dt} = r_{max} N $$

Where $N$ is population size, and $r_{max}$ is the intrinsic rate of increase.

### Logistic Growth
Occurs when resources become limited, introducing a **carrying capacity ($K$)**:

$$ \\frac{dN}{dt} = r_{max} N \\left( \\frac{K - N}{K} \\right) $$

As $N$ approaches $K$, the growth rate approaches zero.

## Trophic Levels and Energy Flow

Energy flows through ecosystems in one direction, typically starting from the sun.

1.  **Primary Producers:** Autotrophs (plants) that convert solar energy into chemical energy.
2.  **Primary Consumers:** Herbivores that eat producers.
3.  **Secondary Consumers:** Carnivores that eat herbivores.

### The 10% Rule
Only about 10% of the energy from one trophic level is transferred to the next. The rest is lost largely through metabolic processes as heat. This explains why food chains rarely exceed 4 or 5 levels.
`,
  'Molecular Biotechnology': `
# Molecular Biotechnology

Biotechnology utilizes biological systems, living organisms, or parts of this to develop or create different products.

## Polymerase Chain Reaction (PCR)

PCR is a technique used to amplify a single copy or a few copies of a piece of DNA, generating thousands to millions of copies.

**The Three Steps (Repeated 25-35 times):**
1.  **Denaturation ($94-96^\\circ C$):** Heat breaks the hydrogen bonds, separating the double-stranded DNA.
2.  **Annealing ($50-65^\\circ C$):** Temperature is lowered to allow DNA primers to attach to the template DNA.
3.  **Extension ($72^\\circ C$):** Taq polymerase synthesizes a new DNA strand complementary to the DNA template strand.

$$ \\text{Number of copies} = 2^n $$
*(where $n$ is the number of cycles)*

## CRISPR-Cas9 Gene Editing

CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a family of DNA sequences found in the genomes of prokaryotic organisms. 

*   **Guide RNA (gRNA):** Designed to match the specific DNA sequence to be edited.
*   **Cas9 Endonuclease:** An enzyme that acts like a pair of molecular scissors, cutting the double-stranded DNA at the location specified by the gRNA.

Once the DNA is cut, the cell's natural repair mechanisms kick in, allowing scientists to either disrupt the gene or insert a desired sequence.
`
};
