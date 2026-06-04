# 10. Design of Experiments

**Design of Experiments (DOE)** is the systematic planning of experiments to efficiently extract maximum information about a process with minimum experimental runs.

### Completely Randomized Design (CRD)
Assign experimental units randomly to $k$ treatment levels. Randomization prevents systematic bias from lurking variables (time of day, material position in a batch, etc.). The analysis is one-way ANOVA.

### Randomized Complete Block Design (RCBD)
When experimental units are naturally grouped (e.g., tests performed on different days, or on different machines), blocking eliminates between-group variability and increases sensitivity.

The model: $X_{ij} = \mu + \tau_i + \beta_j + \varepsilon_{ij}$

Where $\tau_i$ is the treatment effect and $\beta_j$ is the block effect. The two-way ANOVA table has SS decomposed into Treatment, Block, and Error. Blocking is the experimental analogue of the paired t-test.

### The $2^k$ Factorial Design
The most important DOE structure in engineering. $k$ factors are each tested at exactly two levels (−1 = low, +1 = high). All $2^k$ combinations are tested.

**Example: $2^2$ design (two factors, 4 runs):**

| Run | Factor A | Factor B | Response $Y$ |
|---|---|---|---|
| 1 | − | − | $y_1$ |
| 2 | + | − | $y_2$ |
| 3 | − | + | $y_3$ |
| 4 | + | + | $y_4$ |

**Main effect of A:** Average response when A goes from − to +, averaged over both levels of B:
$$\hat{A} = \frac{(y_2 - y_1) + (y_4 - y_3)}{2}$$

**Interaction AB:** Whether the effect of A changes depending on the level of B:
$$\widehat{AB} = \frac{(y_4 - y_3) - (y_2 - y_1)}{2}$$

### Fractional Factorial Designs
For $k \ge 5$ factors, $2^k$ runs becomes prohibitively expensive ($2^7 = 128$ runs). A **$2^{k-p}$ fractional factorial** runs only $2^{k-p}$ of the full $2^k$ combinations by systematically aliasing (confounding) higher-order interactions with lower-order effects.

The **resolution** of a design determines which effects are aliased:
*   Resolution III: Main effects aliased with two-factor interactions. (Screening designs only.)
*   Resolution IV: Main effects clear of two-factor interactions; two-factor interactions aliased with each other.
*   Resolution V: Main effects and two-factor interactions all clear. (Most desirable for model-building.)

A $2^{7-4}_{\text{III}}$ design screens 7 factors with only $2^3 = 8$ runs — the foundation of Taguchi methods and modern Six Sigma DMAIC projects.
