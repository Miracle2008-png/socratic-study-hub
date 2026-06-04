# Evolution and Natural Selection

## 1. Mechanisms of Evolution
Evolution is defined as the change in the heritable characteristics of biological populations over successive generations.

### 1.1 Mutation and Natural Selection
Natural selection acts on phenotypic variation driven by genetic mutations.
The relative fitness ($w$) of a genotype is its reproductive success compared to other genotypes.

**Solved Example 1.1: Selection Coefficient**
If the homozygous dominant genotype ($AA$) produces an average of 120 offspring, heterozygous ($Aa$) produces 120, and homozygous recessive ($aa$) produces 90 offspring. Calculate the relative fitness and selection coefficient ($s$) for the $aa$ genotype.

*Solution:*
1. Identify the most fit genotype: $AA$ and $Aa$ both produce the maximum (120).
2. Calculate relative fitness ($w$) by dividing by the maximum:
   - $w_{AA} = 120/120 = 1.0$
   - $w_{Aa} = 120/120 = 1.0$
   - $w_{aa} = 90/120 = 0.75$
3. Calculate the selection coefficient ($s$) for $aa$:
   $$ s = 1 - w_{aa} = 1 - 0.75 = 0.25 $$
Interpretation: The $aa$ genotype suffers a 25% fitness disadvantage.

### 1.2 Change in Allele Frequency ($\Delta q$)
For directional selection against a recessive allele ($aa$) with selection coefficient $s$:
$$ \Delta q = \frac{-s q^2 p}{1 - s q^2} $$

**Solved Example 1.2: Selection Against Recessive Phenotype**
A population has an allele frequency $q = 0.4$ for a lethal recessive trait ($s = 1$). Calculate the change in allele frequency ($\Delta q$) after one generation of selection.

*Solution:*
1. Given: $q = 0.4$, $p = 1 - 0.4 = 0.6$, $s = 1$.
2. Substitute into the formula:
   $$ \Delta q = \frac{-(1)(0.4)^2(0.6)}{1 - (1)(0.4)^2} $$
   $$ \Delta q = \frac{-(0.16)(0.6)}{1 - 0.16} = \frac{-0.096}{0.84} \approx -0.1143 $$
3. New allele frequency $q' = q + \Delta q = 0.4 - 0.1143 = 0.2857$.

## 2. Genetic Drift
Genetic drift is the change in the frequency of an existing gene variant in a population due to random chance. The variance in allele frequency due to drift in one generation is:
$$ V_q = \frac{p \cdot q}{2N_e} $$
where $N_e$ is the effective population size.

**Solved Example 2.1: Variance due to Genetic Drift**
In a population of 50 diploid individuals, the frequency of allele $A$ is $0.5$. Calculate the expected variance in allele frequency in the next generation.

*Solution:*
1. Given: $p = 0.5$, $q = 0.5$, $N_e = 50$.
2. Substitute into the drift variance formula:
   $$ V_q = \frac{(0.5)(0.5)}{2(50)} = \frac{0.25}{100} = 0.0025 $$
3. Standard deviation $\sigma_q = \sqrt{0.0025} = 0.05$.
