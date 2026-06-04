# Ecology and Ecosystems

## 1. Population Ecology
Population growth can be modeled continuously or discretely.

### 1.1 Exponential Growth Model
Under ideal conditions with unlimited resources:
$$ \frac{dN}{dt} = rN $$
Integration yields:
$$ N(t) = N_0 e^{rt} $$
Where $N$ is population size, $t$ is time, and $r$ is the intrinsic rate of increase.

**Solved Example 1.1: Bacterial Growth**
A bacterial population has an initial size of 500 cells and an intrinsic growth rate of $0.05 \text{ min}^{-1}$. Calculate the population size after 2 hours.

*Solution:*
1. Identify variables: $N_0 = 500$, $r = 0.05 \text{ min}^{-1}$, $t = 120 \text{ minutes}$.
2. Apply exponential growth equation:
   $$ N(120) = 500 \cdot e^{(0.05 \times 120)} $$
   $$ N(120) = 500 \cdot e^{6} $$
3. Calculate:
   $$ e^6 \approx 403.43 $$
   $$ N(120) = 500 \times 403.43 = 201,714 \text{ cells} $$

### 1.2 Logistic Growth Model
When resources are limited, populations reach a carrying capacity ($K$):
$$ \frac{dN}{dt} = rN \left(1 - \frac{N}{K}\right) $$

**Solved Example 1.2: Logistic Population Rate**
A population of rabbits in a forest has a carrying capacity of 1000. The maximum intrinsic rate of increase is $0.2 \text{ year}^{-1}$. If the current population is 400, calculate the current population growth rate ($dN/dt$).

*Solution:*
1. Identify variables: $K = 1000$, $r = 0.2$, $N = 400$.
2. Substitute into the logistic equation:
   $$ \frac{dN}{dt} = (0.2)(400) \left(1 - \frac{400}{1000}\right) $$
   $$ \frac{dN}{dt} = 80 (1 - 0.4) = 80 (0.6) = 48 $$
3. The population is currently growing at a rate of 48 rabbits per year.

## 2. Ecosystem Energetics
Energy flow through trophic levels obeys thermodynamic principles. Ecological efficiency ($\lambda$) is typically around 10%.

**Solved Example 2.1: Energy Transfer**
Primary producers in an ecosystem assimilate $5,000,000 \text{ kJ/m}^2\text{/year}$ from sunlight. If the ecological efficiency between each trophic level is 12%, calculate the energy available to tertiary consumers (Trophic Level 4).

*Solution:*
1. Net Primary Production (Trophic Level 1) = $5,000,000 \text{ kJ}$.
2. Energy to Primary Consumers (Trophic Level 2):
   $$ E_2 = E_1 \times 0.12 = 5,000,000 \times 0.12 = 600,000 \text{ kJ} $$
3. Energy to Secondary Consumers (Trophic Level 3):
   $$ E_3 = E_2 \times 0.12 = 600,000 \times 0.12 = 72,000 \text{ kJ} $$
4. Energy to Tertiary Consumers (Trophic Level 4):
   $$ E_4 = E_3 \times 0.12 = 72,000 \times 0.12 = 8,640 \text{ kJ} $$
Energy available to tertiary consumers is $8,640 \text{ kJ/m}^2\text{/year}$.

## 3. Biodiversity Metrics
### Shannon-Wiener Diversity Index ($H'$)
$$ H' = -\sum_{i=1}^S p_i \ln(p_i) $$
Where $p_i$ is the proportion of individuals belonging to species $i$, and $S$ is species richness.

**Solved Example 3.1: Calculating Shannon Index**
An ecosystem consists of three species with the following individual counts: Species A = 60, Species B = 30, Species C = 10. Calculate $H'$.

*Solution:*
1. Total individuals $N = 60 + 30 + 10 = 100$.
2. Proportions:
   - $p_A = 60/100 = 0.6$
   - $p_B = 30/100 = 0.3$
   - $p_C = 10/100 = 0.1$
3. Compute the sum:
   $$ H' = -[ (0.6 \ln 0.6) + (0.3 \ln 0.3) + (0.1 \ln 0.1) ] $$
   $$ H' = -[ (0.6)(-0.5108) + (0.3)(-1.2040) + (0.1)(-2.3026) ] $$
   $$ H' = -[ -0.3065 - 0.3612 - 0.2303 ] = 0.898 $$
The Shannon Diversity Index is 0.898.
