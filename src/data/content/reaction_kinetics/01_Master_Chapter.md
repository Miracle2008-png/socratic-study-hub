# Reaction Kinetics

## 1. Rate Laws and Reaction Order

The rate of a general reaction $aA + bB \rightarrow cC + dD$ is given by:
$$ \text{Rate} = k [A]^m [B]^n $$
where $k$ is the rate constant, and $m$ and $n$ are the reaction orders with respect to reactants $A$ and $B$.

**Worked Example 1:**
For a reaction $A + B \rightarrow C$, the following initial rates were observed:
- Exp 1: $[A] = 0.10 \text{ M}, [B] = 0.10 \text{ M}$, Rate = $2.0 \times 10^{-3} \text{ M/s}$
- Exp 2: $[A] = 0.20 \text{ M}, [B] = 0.10 \text{ M}$, Rate = $4.0 \times 10^{-3} \text{ M/s}$
- Exp 3: $[A] = 0.10 \text{ M}, [B] = 0.20 \text{ M}$, Rate = $8.0 \times 10^{-3} \text{ M/s}$
Determine the rate law.

*Solution:*
1. Compare Exp 1 and Exp 2: Doubling $[A]$ doubles the rate. Thus, order with respect to $A$ is 1 ($m=1$).
2. Compare Exp 1 and Exp 3: Doubling $[B]$ quadruples the rate ($8.0/2.0 = 4 = 2^2$). Thus, order with respect to $B$ is 2 ($n=2$).
3. Rate Law: $\text{Rate} = k[A][B]^2$.

## 2. Integrated Rate Laws

### First-Order Reactions
Rate law: $-\frac{d[A]}{dt} = k[A]$
Integrated form:
$$ \ln[A]_t = -kt + \ln[A]_0 $$
Half-life ($t_{1/2}$):
$$ t_{1/2} = \frac{\ln 2}{k} \approx \frac{0.693}{k} $$

**Worked Example 2:**
A first-order reaction has a half-life of 20.0 minutes. How long will it take for the concentration of the reactant to drop to 12.5% of its initial value?

*Solution:*
1. $12.5\%$ is equal to $\frac{1}{8}$ of the initial amount.
2. $\frac{1}{8} = \left(\frac{1}{2}\right)^3$, meaning exactly 3 half-lives have passed.
3. Total time = $3 \times t_{1/2} = 3 \times 20.0 = 60.0 \text{ minutes}$.

*(Alternative analytical method)*
1. $k = \frac{\ln 2}{20} = 0.03465 \text{ min}^{-1}$.
2. $\ln(0.125[A]_0) = -kt + \ln[A]_0 \implies \ln(0.125) = -kt$
3. $t = -\frac{\ln(0.125)}{0.03465} = 60.0 \text{ minutes}$.

## 3. Activation Energy and the Arrhenius Equation

The temperature dependence of the rate constant is described by the Arrhenius equation:
$$ k = A e^{-E_a / RT} $$
where $A$ is the pre-exponential factor, $E_a$ is the activation energy, $R = 8.314 \text{ J/(mol K)}$, and $T$ is the absolute temperature.

Linear form:
$$ \ln k = -\frac{E_a}{R} \left(\frac{1}{T}\right) + \ln A $$

**Worked Example 3:**
The rate constant for a reaction is $1.5 \times 10^{-3} \text{ s}^{-1}$ at $300 \text{ K}$ and $4.5 \times 10^{-3} \text{ s}^{-1}$ at $310 \text{ K}$. Calculate the activation energy.

*Solution:*
1. Apply the two-point Arrhenius equation:
   $$ \ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right) $$
2. Substitute the values:
   $$ \ln\left(\frac{4.5}{1.5}\right) = \frac{E_a}{8.314} \left(\frac{1}{300} - \frac{1}{310}\right) $$
   $$ \ln(3) = \frac{E_a}{8.314} \left(\frac{10}{93000}\right) $$
   $$ 1.0986 = \frac{E_a}{8.314} (1.075 \times 10^{-4}) $$
3. Solve for $E_a$:
   $$ E_a = \frac{1.0986 \times 8.314}{1.075 \times 10^{-4}} \approx 84,965 \text{ J/mol} = 85.0 \text{ kJ/mol} $$
