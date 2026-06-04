# Genetics and Heredity

## 1. Mendelian Genetics
Mendel's laws of inheritance provide the foundational rules for trait transmission.

### 1.1 The Law of Segregation
Allele pairs separate during gamete formation, and randomly unite at fertilization.

**Solved Example 1.1: Monohybrid Cross**
In pea plants, tall ($T$) is dominant to dwarf ($t$). A heterozygous tall plant ($Tt$) is crossed with a dwarf plant ($tt$). What are the genotypic and phenotypic ratios of the offspring?

*Solution:*
1. Parental genotypes: $Tt \times tt$
2. Gametes from $Tt$: $50\% \ T, 50\% \ t$
3. Gametes from $tt$: $100\% \ t$
4. Punnett Square results:
   - $Tt$: $50\%$ (Tall)
   - $tt$: $50\%$ (Dwarf)
5. Genotypic ratio: $1 \ Tt : 1 \ tt$
6. Phenotypic ratio: $1 \text{ Tall} : 1 \text{ Dwarf}$

### 1.2 The Law of Independent Assortment
Alleles of two (or more) different genes get sorted into gametes independently of one another.

**Solved Example 1.2: Dihybrid Cross Probability**
Given the cross $AaBbCc \times AaBbCc$, what is the probability of obtaining an offspring with the genotype $AabbCC$?

*Solution:*
Treat each gene locus independently:
1. Cross $Aa \times Aa \rightarrow$ probability of $Aa = 1/2$.
2. Cross $Bb \times Bb \rightarrow$ probability of $bb = 1/4$.
3. Cross $Cc \times Cc \rightarrow$ probability of $CC = 1/4$.
4. Multiply individual probabilities:
   $$ P(AabbCC) = \left(\frac{1}{2}\right) \times \left(\frac{1}{4}\right) \times \left(\frac{1}{4}\right) = \frac{1}{32} $$

## 2. Population Genetics
The Hardy-Weinberg principle states that allele and genotype frequencies in a population will remain constant from generation to generation in the absence of other evolutionary influences.

### Hardy-Weinberg Equations
For a gene with two alleles ($A$ and $a$):
$$ p + q = 1 $$
$$ p^2 + 2pq + q^2 = 1 $$
Where:
- $p$ = frequency of dominant allele
- $q$ = frequency of recessive allele
- $p^2$ = frequency of homozygous dominant genotype
- $2pq$ = frequency of heterozygous genotype
- $q^2$ = frequency of homozygous recessive genotype

**Solved Example 2.1: Calculating Allele Frequencies**
In a population of 1000 individuals, 90 exhibit the recessive trait. Assuming Hardy-Weinberg equilibrium, calculate the frequencies of the dominant and recessive alleles, and the number of heterozygous individuals.

*Solution:*
1. Frequency of homozygous recessive ($q^2$):
   $$ q^2 = \frac{90}{1000} = 0.09 $$
2. Frequency of recessive allele ($q$):
   $$ q = \sqrt{0.09} = 0.3 $$
3. Frequency of dominant allele ($p$):
   $$ p = 1 - q = 1 - 0.3 = 0.7 $$
4. Frequency of heterozygous genotype ($2pq$):
   $$ 2pq = 2(0.7)(0.3) = 0.42 $$
5. Number of heterozygous individuals:
   $$ 0.42 \times 1000 = 420 $$

## 3. Genetic Linkage and Recombination
The recombination frequency (RF) provides an estimate of physical distance between genes on a chromosome.
$$ \text{RF} = \frac{\text{Number of recombinant offspring}}{\text{Total number of offspring}} \times 100\% $$
$1\% \text{ recombination} = 1 \text{ map unit (m.u.) or centiMorgan (cM)}$.

**Solved Example 3.1: Gene Mapping**
In a testcross involving two linked genes ($A$ and $B$), the following offspring were observed:
- Parental types: $AB/ab \ (400)$ and $ab/ab \ (400)$
- Recombinant types: $Ab/ab \ (100)$ and $aB/ab \ (100)$

Calculate the recombination frequency and the distance between genes A and B.

*Solution:*
1. Total offspring = $400 + 400 + 100 + 100 = 1000$
2. Number of recombinants = $100 + 100 = 200$
3. Recombination Frequency:
   $$ \text{RF} = \left( \frac{200}{1000} \right) \times 100\% = 20\% $$
4. Distance: $20 \text{ cM}$ or $20 \text{ map units}$.
