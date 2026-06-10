# The Ideal Batch Reactor

The **Batch Reactor** is the simplest and most ancient chemical reactor. It is simply a sealed vessel with an agitator (stirrer). 

You fill it with reactants, turn on the heat, let the reaction run for a specified time, and then shut it down to empty the products. It is identical to baking a cake in an oven.

## 1. Deriving the Design Equation

We start with the universal mass balance for species A:
$$ \text{IN} - \text{OUT} + \text{GENERATION} = \text{ACCUMULATION} $$

Let's apply the physical reality of a batch reactor to this equation:
*   **IN = 0** (Once the lid is shut, nothing enters).
*   **OUT = 0** (Nothing leaves until the batch is finished).
*   **GENERATION = $\int r_A dV$**. We assume the agitator is perfect, meaning the tank is perfectly well-mixed. Therefore, $r_A$ is uniform everywhere, and Generation = $r_A \cdot V$.
*   **ACCUMULATION = $\frac{dN_A}{dt}$**.

Plugging these in, the design equation for an ideal perfectly-mixed batch reactor is:

$$ 0 - 0 + r_A \cdot V = \frac{dN_A}{dt} $$
$$ \frac{dN_A}{dt} = r_A \cdot V $$

Because $A$ is a reactant being consumed, $r_A$ is a negative number, so $N_A$ (total moles) goes down over time.

## 2. Expressing in Terms of Conversion ($X$)

Dealing with "total moles" ($N_A$) is annoying. Engineers prefer to design reactors based on **Conversion ($X$)**, which is the fraction of reactant A that has been successfully converted into product.

$$ N_A = N_{A0}(1 - X) $$
Taking the derivative with respect to time:
$$ dN_A = -N_{A0} dX $$

Substitute this into our design equation:
$$ -N_{A0} \frac{dX}{dt} = r_A \cdot V $$
$$ \frac{dX}{dt} = \frac{-r_A \cdot V}{N_{A0}} $$

## 3. Constant Volume Batch Reactors

If the reaction involves only liquids, or if it is a gas reaction taking place in a rigid steel tank, the physical Volume ($V$) of the reacting mixture is perfectly constant.

We know that Concentration ($C_{A0}$) is Moles / Volume ($N_{A0}/V$). 
If we rearrange our equation:
$$ \frac{dX}{dt} = \frac{-r_A}{N_{A0}/V} = \frac{-r_A}{C_{A0}} $$

This is the standard equation for a constant-volume batch reactor.

## 4. Calculating the Batch Time ($t$)

The ultimate goal of batch reactor design is to calculate **$t$**: How long do I need to run this reactor to achieve my target conversion (e.g., 90% conversion)?

We rearrange the equation to separate the variables and integrate from time $t=0$ ($X=0$) to the final time $t$ ($X=X$):

$$ \int_{0}^{t} dt = C_{A0} \int_{0}^{X} \frac{dX}{-r_A} $$

$$ t = C_{A0} \int_{0}^{X} \frac{dX}{-r_A} $$

**How to solve this:**
1.  You must know the kinetic rate law (e.g., $-r_A = k C_A^2$).
2.  You must convert $C_A$ into terms of Conversion ($C_A = C_{A0}(1-X)$).
3.  Substitute the rate law into the integral.
4.  Perform the calculus integration to find the exact time required.

## 5. When to use a Batch Reactor?

*   **Small Scale:** Pharmaceuticals, specialty chemicals, and high-value dyes.
*   **Flexibility:** You can make Chemical X on Monday, wash the tank, and make Chemical Y on Tuesday.
*   **Slow Reactions:** If a reaction takes 48 hours, a continuous flow reactor would have to be miles long. A batch reactor just sits there patiently.
*   **Downside:** High labor costs (filling/emptying), and massive "downtime" (cleaning and heating up) where the factory is making zero product.
