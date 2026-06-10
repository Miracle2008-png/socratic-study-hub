# Reaction Rates and Stoichiometry

Before we can calculate how fast a reaction occurs, we must mathematically define what a "reaction rate" actually is, and ensure our definitions are consistent regardless of which chemical species we are measuring.

## 1. Defining the Reaction Rate ($r_A$)

The rate of reaction is defined as the number of moles of a species reacting (or being formed) per unit time, per unit volume.

For a specific chemical species $A$, the rate of reaction is given the symbol **$r_A$**.
*   If $A$ is a **reactant**, it is being consumed. Therefore, $r_A$ is a *negative* number. To make our math easier, we often talk about the "rate of disappearance of $A$", denoted as **$-r_A$**, which is a positive number.
*   If $A$ is a **product**, it is being generated. Therefore, $r_A$ is a *positive* number.

The standard units for reaction rate are $\frac{\text{moles}}{\text{liter} \cdot \text{second}}$ ($\text{mol} / (\text{L} \cdot \text{s})$) or $\frac{\text{kmol}}{\text{m}^3 \cdot \text{h}}$.

### Defining the Rate mathematically
In a closed, constant-volume batch reactor, the rate of reaction of species A is simply the derivative of its concentration with respect to time:

$$ r_A = \frac{dC_A}{dt} $$

Since $A$ is a reactant being consumed, $C_A$ decreases over time, so the derivative $\frac{dC_A}{dt}$ is negative, making $r_A$ negative, as required.

## 2. The Problem with Stoichiometry

Consider the Haber process for synthesizing ammonia:
$$ N_2 + 3H_2 \rightarrow 2NH_3 $$

Imagine you run an experiment and measure the disappearance of Nitrogen gas ($N_2$). You find that Nitrogen is disappearing at a rate of $-r_{N_2} = 10 \text{ mol}/(\text{L}\cdot\text{s})$.

What is the rate of disappearance of Hydrogen ($-r_{H_2}$)?
The stoichiometry tells us that for every 1 mole of $N_2$ consumed, we must consume 3 moles of $H_2$. Therefore, Hydrogen must be disappearing three times faster!
$$ -r_{H_2} = 30 \text{ mol}/(\text{L}\cdot\text{s}) $$

And what is the rate of formation of Ammonia ($r_{NH_3}$)?
For every 1 mole of $N_2$ consumed, 2 moles of $NH_3$ are formed.
$$ r_{NH_3} = 20 \text{ mol}/(\text{L}\cdot\text{s}) $$

**This creates a serious communication problem.** If an engineer asks, "How fast is the Haber reaction?", there are three completely different numbers ($10$, $30$, and $20$) that are all technically correct depending on which molecule you are looking at.

## 3. The Relative Rate of Reaction

To solve this, we define a universal relationship based on the stoichiometric coefficients of the balanced chemical equation.

For a generalized chemical reaction:
$$ aA + bB \rightarrow cC + dD $$

Where $a, b, c, d$ are the stoichiometric coefficients.
The **Relative Rates of Reaction** are related by dividing each species' specific rate by its stoichiometric coefficient:

$$ \frac{r_A}{-a} = \frac{r_B}{-b} = \frac{r_C}{c} = \frac{r_D}{d} $$

*Note that we use negative signs for the reactants ($a, b$) because their individual rates ($r_A, r_B$) are negative numbers, so dividing by a negative coefficient yields a positive overall term.*

Applying this to the Haber process ($N_2 + 3H_2 \rightarrow 2NH_3$):
$$ \frac{r_{N_2}}{-1} = \frac{r_{H_2}}{-3} = \frac{r_{NH_3}}{2} $$

If we know $-r_{N_2} = 10$, then:
$$ \frac{-10}{-1} = \frac{r_{H_2}}{-3} \implies r_{H_2} = -30 $$
$$ \frac{-10}{-1} = \frac{r_{NH_3}}{2} \implies r_{NH_3} = 20 $$

This simple algebraic rule allows you to measure the concentration of just *one* species in the lab, and instantly calculate the reaction rates of every other species in the reactor.
