# Concept Drills & Examination Problems

Test your understanding of Chemical Reaction Kinetics with these conceptual questions and data analysis scenarios.

## Drill 1: Stoichiometry and Rates
Consider the combustion of methane:
$$ CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O $$
In a laboratory reactor, you measure the rate of production of water ($H_2O$) to be $100 \text{ mol}/(\text{L}\cdot\text{s})$.
1. What is the rate of formation of $CO_2$ ($r_{CO_2}$)?
2. What is the rate of disappearance of Oxygen ($-r_{O_2}$)?

## Drill 2: Rate Laws and Order
A reaction $A + B \rightarrow C$ has the experimentally determined rate law:
$$ -r_A = k C_A^2 C_B $$
1. What is the overall order of the reaction?
2. If you triple the concentration of A, and simultaneously cut the concentration of B in half, what will happen to the overall rate of the reaction?
3. Is this reaction elementary? How do you know?

## Drill 3: The Arrhenius Equation
You run a reaction at $300\text{ K}$ and calculate a rate constant $k_1 = 0.01 \text{ s}^{-1}$. You run the same reaction at $310\text{ K}$ (just ten degrees hotter) and calculate a new rate constant $k_2 = 0.02 \text{ s}^{-1}$.
1. Does this reaction have a high or low Activation Energy ($E_A$)? (Consider the "rule of thumb" discussed in the modules).
2. If you plotted $\ln(k)$ vs $1/T$ for these two points, what would the slope of the line represent?

## Drill 4: Analyzing Data (Integral Method)
You are analyzing batch reactor data for the reaction $A \rightarrow B$. You calculate $\ln(C_{A0}/C_A)$ for every point in time, plot it against time $t$, and the data forms a perfect straight line passing through the origin.
1. What is the order of this reaction?
2. What are the units of the rate constant $k$?
3. How do you find the numerical value of $k$ from your graph?

## Drill 5: Parallel vs Series Reactions
Consider the parallel reactions:
$$ A \rightarrow B \text{ (Desired), Rate: } r_B = k_1 C_A $$
$$ A \rightarrow C \text{ (Undesired), Rate: } r_C = k_2 C_A^2 $$
You want to maximize the production of B. 
1. Should you design a reactor that operates at a high concentration of A, or a very low concentration of A? Why?

---

### Solutions

**Drill 1:**
Using the relative rate equation: $\frac{-r_{CH_4}}{1} = \frac{-r_{O_2}}{2} = \frac{r_{CO_2}}{1} = \frac{r_{H_2O}}{2}$
1. $r_{H_2O} = 100$. $\implies \frac{r_{CO_2}}{1} = \frac{100}{2} \implies \mathbf{r_{CO_2} = 50 \text{ mol}/(\text{L}\cdot\text{s})}$.
2. $\frac{-r_{O_2}}{2} = \frac{100}{2} \implies \mathbf{-r_{O_2} = 100 \text{ mol}/(\text{L}\cdot\text{s})}$.

**Drill 2:**
1. The overall order is $n = 2 + 1 = \mathbf{3}$ (Third Order).
2. The new rate will be $r_{new} = k (3 C_A)^2 (0.5 C_B) = k (9 C_A^2) (0.5 C_B) = 4.5 \cdot k C_A^2 C_B$. The rate will be **4.5 times faster**.
3. **No**, it is definitely not elementary. If it were elementary, the rate law would exactly match the stoichiometry: $-r_A = k C_A^1 C_B^1$. Since the experimental rate law has an exponent of 2 for A, it does not match. Furthermore, termolecular elementary reactions (three molecules colliding simultaneously, as implied by an overall order of 3) are statistically near impossible.

**Drill 3:**
1. It follows the rule of thumb perfectly (a $10^\circ\text{C}$ increase doubled the rate constant). This indicates a **typical, moderate Activation Energy** for a chemical reaction (often around $50 \text{ kJ/mol}$). If the rate had jumped by a factor of 100, it would indicate an extremely high Activation Energy.
2. The slope of the line represents **$-E_A / R$**.

**Drill 4:**
1. The reaction is **First Order**. Only first-order kinetics yield a straight line when plotting the natural log of concentration vs time.
2. For a first-order reaction ($-r_A = k C_A$), the units of $k$ must be **$\text{time}^{-1}$** (e.g., $1/\text{s}$ or $\text{s}^{-1}$).
3. The numerical value of $k$ is exactly equal to the **slope** of the straight line.

**Drill 5:**
1. The selectivity is $S_{B/C} = \frac{r_B}{r_C} = \frac{k_1 C_A}{k_2 C_A^2} = \frac{k_1}{k_2} \cdot \frac{1}{C_A}$.
Because $C_A$ is in the denominator, you must keep the concentration of A **as low as possible** to maximize the selectivity towards B. (You would use a CSTR reactor, which instantly dilutes the incoming feed).
