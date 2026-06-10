# Vapour-Liquid Equilibrium (VLE) & Raoult's Law

To design a distillation column, we must be able to mathematically predict the exact composition of the vapour phase that forms when a liquid mixture is boiled. This mathematical relationship is called Vapour-Liquid Equilibrium (VLE).

## 1. Defining the Variables

For a binary mixture of a volatile component (A, the "light key") and a less volatile component (B, the "heavy key"):
*   **$x_A$**: The mole fraction of A in the **liquid** phase.
*   **$y_A$**: The mole fraction of A in the **vapour** phase.
*   **$P$**: The total system pressure.
*   **$T$**: The absolute temperature.
*   **$P_A^{sat}$**: The saturation vapour pressure of pure liquid A at temperature T. (Usually calculated using the Antoine Equation).

*Note: Because it is a binary system, $x_B = 1 - x_A$ and $y_B = 1 - y_A$. By convention, we almost always write equations entirely in terms of the light key, A.*

## 2. Raoult's Law (Ideal Mixtures)

Raoult's Law is the simplest thermodynamic model for VLE. It assumes the liquid mixture is perfectly "ideal" — meaning the intermolecular forces between A and A, B and B, and A and B are all identical. (A good example of an ideal mixture is Benzene and Toluene).

Raoult's Law states that the partial pressure ($p_A$) of a component in the vapour is equal to its mole fraction in the liquid multiplied by its pure-component vapour pressure:

$$ p_A = x_A \cdot P_A^{sat}(T) $$

Simultaneously, Dalton's Law of Partial Pressures dictates that the partial pressure in the gas phase is the total pressure multiplied by the vapour mole fraction:

$$ p_A = y_A \cdot P $$

By equating Raoult's Law and Dalton's Law, we arrive at the fundamental equation for Ideal Vapour-Liquid Equilibrium:

$$ y_A \cdot P = x_A \cdot P_A^{sat}(T) $$
$$ y_A = \frac{x_A \cdot P_A^{sat}(T)}{P} $$

This equation tells us exactly what the vapour composition ($y_A$) will be if we know the liquid composition ($x_A$), the total pressure ($P$), and the temperature ($T$). 
Because $P_A^{sat}$ for the light key is always greater than the total pressure $P$ at the boiling point of the mixture, the ratio $P_A^{sat}/P$ is greater than 1. Therefore, **$y_A > x_A$**. The vapour is always richer in the light component than the liquid it boiled from.

## 3. Bubble Point and Dew Point

In a pure substance, boiling occurs at a single, specific temperature. In a mixture, boiling occurs over a range of temperatures.

### The Bubble Point
If you take a subcooled liquid mixture and slowly heat it at constant pressure, the **Bubble Point** is the exact temperature at which the very first microscopic bubble of vapour forms.
At the bubble point, the sum of the partial pressures must exactly equal the total system pressure:
$$ P = p_A + p_B $$
Using Raoult's Law:
$$ P = x_A \cdot P_A^{sat}(T_{\text{bubble}}) + (1 - x_A) \cdot P_B^{sat}(T_{\text{bubble}}) $$
Because $P_A^{sat}$ and $P_B^{sat}$ are highly non-linear functions of temperature (Antoine equation), finding the Bubble Point temperature $T_{\text{bubble}}$ usually requires iterative trial-and-error calculation.

### The Dew Point
If you take a superheated vapour mixture and slowly cool it at constant pressure, the **Dew Point** is the exact temperature at which the very first microscopic drop of liquid condenses.
At the dew point, the sum of the liquid mole fractions must equal 1:
$$ x_A + x_B = 1 $$
Rearranging the ideal VLE equation ($x_A = y_A \cdot P / P_A^{sat}$):
$$ \frac{y_A \cdot P}{P_A^{sat}(T_{\text{dew}})} + \frac{(1 - y_A) \cdot P}{P_B^{sat}(T_{\text{dew}})} = 1 $$
Again, solving for $T_{\text{dew}}$ requires iteration.

The temperature difference between the Bubble Point and the Dew Point is called the boiling range or "glide."

## 4. Non-Ideal Mixtures and Activity Coefficients

Most chemical mixtures are not ideal. The molecules repel or attract each other differently than they attract themselves (e.g., Ethanol and Water). 

To correct Raoult's Law for non-ideality in the liquid phase, we introduce the **Activity Coefficient ($\gamma$)**.
Modified Raoult's Law becomes:
$$ y_A \cdot P = \gamma_A \cdot x_A \cdot P_A^{sat}(T) $$

The activity coefficient $\gamma_A$ is a complex function of temperature, pressure, and, most importantly, liquid composition $x_A$. It is calculated using advanced thermodynamic models like Margules, Van Laar, Wilson, NRTL, or UNIFAC.
*   If $\gamma > 1$ (Positive Deviation): The molecules "dislike" each other and try to escape the liquid phase more easily than Raoult's law predicts. This is the most common non-ideality.
*   If $\gamma < 1$ (Negative Deviation): The molecules "like" each other (e.g., due to hydrogen bonding) and stay in the liquid phase more stubbornly.
