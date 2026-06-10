# Analysis of Batch Reactor Data

We have established that the Rate Law ($-r_A = k C_A^\alpha$) and the Activation Energy must be determined experimentally. But how exactly does an engineer go into a lab and extract those mathematical numbers from a physical beaker of chemicals?

The most common tool for gathering kinetic data is the **Constant-Volume Batch Reactor**.

## 1. The Batch Reactor Setup

A batch reactor is essentially a glorified pot with a stirrer. 
1. You dump a known concentration of reactant A ($C_{A0}$) into the reactor.
2. You seal the reactor and turn on the heater to maintain a perfectly constant temperature (isothermal).
3. The reaction starts. You start a stopwatch.
4. As time passes, Reactant A is consumed, so its concentration ($C_A$) drops.
5. Every few minutes, you take a tiny sample out of the reactor and run it through a chromatograph or spectrometer to measure the exact concentration of $A$ at that specific time $t$.

Your raw data from the lab is simply a table of two columns: **Time ($t$)** and **Concentration ($C_A$)**.

| Time (min) | Concentration of A (mol/L) |
| :--- | :--- |
| 0 | 10.0 |
| 5 | 7.8 |
| 10 | 6.1 |
| 20 | 3.7 |
| 40 | 1.4 |

## 2. The Mathematical Challenge

Our goal is to find the rate law: $-r_A = k C_A^\alpha$. We need to find $k$ and $\alpha$.

Remember the fundamental definition of reaction rate in a batch reactor:
$$ -r_A = -\frac{dC_A}{dt} $$

If we equate the two definitions of rate:
$$ -\frac{dC_A}{dt} = k C_A^\alpha $$

This is a differential equation. 
Our raw data gives us $t$ and $C_A$. But the rate law requires the *derivative* $\frac{dC_A}{dt}$ (the slope of the concentration curve).

There are two distinct mathematical methods to solve this problem and extract the rate parameters from our $t$ vs $C_A$ data table:
1.  **The Integral Method:** We guess the value of $\alpha$ (e.g., guess it is 1st order), integrate the differential equation, and see if our data fits the resulting integrated line. This is easy, robust, and preferred for simple integer reaction orders (0, 1, 2).
2.  **The Differential Method:** We use numerical methods to physically calculate the slope $\frac{dC_A}{dt}$ at every single data point, and then plot the rate directly against concentration. This is harder and prone to statistical noise, but it is necessary if the reaction order $\alpha$ is a weird fraction (like 1.37) or if the rate law is highly complex.

We will explore both methods in detail in the next two modules.

## 3. Conversion ($X_A$)

Before diving into the math, we must introduce a variable that makes reactor design much easier: **Conversion ($X_A$)**.

Concentration ($C_A$) drops from $C_{A0}$ to 0. 
Conversion ($X_A$) is the *fraction* of reactant A that has successfully reacted. It ranges from 0 (at the start) to 1.0 (100% complete).

$$ X_A = \frac{\text{Moles of A reacted}}{\text{Moles of A initially fed}} $$

For a constant-volume system, we can write conversion in terms of concentration:
$$ X_A = \frac{C_{A0} - C_A}{C_{A0}} $$

Rearranging this gives us a very powerful substitution:
$$ C_A = C_{A0}(1 - X_A) $$

If the starting concentration is $10 \text{ mol/L}$, and the conversion is $0.40$ (40%), the current concentration in the reactor is $10(1 - 0.40) = 6 \text{ mol/L}$.
Taking the derivative of this substitution with respect to time gives:
$$ dC_A = -C_{A0} dX_A $$

This allows us to rewrite our batch reactor rate equation entirely in terms of Conversion ($X_A$), which is often much more intuitive for engineers:
$$ C_{A0} \frac{dX_A}{dt} = -r_A $$
