# Complex Reactions (Parallel and Series)

Thus far, we have analyzed single reactions: $A \rightarrow B$.
In industrial chemistry, it is rarely that simple. When you heat up chemical A, it might turn into the valuable product B, but it might also simultaneously turn into a toxic byproduct C, or B might react further to form D. 

We must design reactors to maximize the yield of the *desired* product while minimizing the *undesired* ones.

## 1. Parallel (Competing) Reactions

In parallel reactions, the reactant $A$ can follow two (or more) different pathways simultaneously.

$$ A \xrightarrow{k_1} B \text{  (Desired Product)} $$
$$ A \xrightarrow{k_2} C \text{  (Undesired Byproduct)} $$

The rate laws for these two paths are:
*   Rate of forming B: $r_B = k_1 C_A^{\alpha_1}$
*   Rate of forming C: $r_C = k_2 C_A^{\alpha_2}$

**Selectivity ($S$):**
Our goal is to maximize the ratio of Desired to Undesired product. This is called the Selectivity ($S_{B/C}$).
$$ S_{B/C} = \frac{r_B}{r_C} = \frac{k_1 C_A^{\alpha_1}}{k_2 C_A^{\alpha_2}} = \frac{k_1}{k_2} C_A^{(\alpha_1 - \alpha_2)} $$

How do we maximize this equation?
1.  **Concentration Control:**
    *   If $\alpha_1 > \alpha_2$ (the desired reaction is higher order): The exponent $(\alpha_1 - \alpha_2)$ is positive. To maximize $S$, we must keep $C_A$ as high as possible. We use a Batch Reactor or a Plug Flow Reactor (PFR) and avoid diluting the feed.
    *   If $\alpha_1 < \alpha_2$ (the undesired reaction is higher order): The exponent is negative. To maximize $S$, we must keep $C_A$ as *low* as possible. We use a Continuous Stirred Tank Reactor (CSTR) where the feed is instantly diluted into the large tank, keeping the reactant concentration low.
2.  **Temperature Control:**
    The ratio of the rate constants is $\frac{k_1}{k_2} = \frac{A_1 e^{-E_{A1}/RT}}{A_2 e^{-E_{A2}/RT}}$.
    *   If $E_{A1} > E_{A2}$ (Desired reaction has a higher activation energy): Run the reactor at the highest possible temperature. The desired reaction will accelerate much faster than the undesired one.
    *   If $E_{A1} < E_{A2}$: Run the reactor at the lowest possible temperature.

## 2. Series (Consecutive) Reactions

In series reactions, the reactant A forms the desired product B, but B is unstable and continues to react to form the undesired waste C.

$$ A \xrightarrow{k_1} B \text{ (Desired)} \xrightarrow{k_2} C \text{ (Undesired)} $$

This is extremely common in oxidation reactions (e.g., oxidizing methane to methanol, but if it stays in the reactor too long, the methanol oxidizes entirely to $CO_2$ and water).

**The Concentration Profile:**
If you run this in a batch reactor:
1.  $C_A$ starts high and drops exponentially to zero.
2.  $C_B$ starts at zero, climbs rapidly as A reacts, hits a maximum peak, and then begins to fall as it reacts away to form C.
3.  $C_C$ starts at zero, stays low initially, and then climbs steadily as B breaks down, eventually becoming the only thing left in the reactor.

**The Engineering Challenge:**
The key to series reactions is **Residence Time ($\tau$)**. 
You must stop the reaction (or remove the products from the reactor) at the exact moment the concentration of $B$ reaches its peak. 
*   If you stop the reaction too early, you haven't converted enough A.
*   If you let the reaction run too long, all your valuable B has been destroyed into C.

Calculus (setting $\frac{dC_B}{dt} = 0$) allows us to calculate the exact optimum time ($t_{opt}$) to maximize the yield of product B.
