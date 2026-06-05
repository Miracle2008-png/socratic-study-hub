# Chemical Equilibrium from Statistical Mechanics

In classical thermodynamics, we determine chemical equilibrium by minimizing the Gibbs free energy, relying on empirical tables of standard enthalpies ($\Delta H^\circ$) and standard entropies ($S^\circ$) measured experimentally.

Statistical mechanics allows us to calculate these equilibrium constants entirely from scratch—using only fundamental constants (Planck's constant, Boltzmann's constant, speed of light) and molecular properties (mass, bond length, vibrational frequency) obtained from quantum mechanics or spectroscopy.

## 1. The Chemical Potential ($\mu$)

In statistical mechanics, the chemical potential $\mu$ of a species is the change in the Helmholtz free energy when one particle is added to the system at constant temperature and volume:
$$ \mu = -k_B T \left( \frac{\partial \ln Z_N}{\partial N} \right)_{T,V} $$

Using the ideal gas partition function $Z_N = \frac{1}{N!}\left(\frac{V z_{int}}{\Lambda^3}\right)^N$ and Stirling's approximation, this differentiates to:
$$ \mu = -k_B T \ln\left[ \frac{V}{N} \frac{z_{int}}{\Lambda^3} \right] $$

Where $z_{int} = z_{rot} \cdot z_{vib} \cdot z_{elec}$ is the internal partition function.

Notice that $\frac{N}{V}$ is the number density ($\rho$). We can rewrite this to separate the concentration dependence from the intrinsic molecular properties:
$$ \mu = \mu^\circ(T) + k_B T \ln(\rho) $$
Where $\mu^\circ(T) = -k_B T \ln(z_{int} / \Lambda^3)$ is the standard chemical potential.

## 2. The Condition for Chemical Equilibrium

Consider a general gas-phase reaction:
$$ aA + bB \rightleftharpoons cC + dD $$

The fundamental thermodynamic condition for equilibrium (at constant T and P) is that the sum of the chemical potentials of the products must equal the reactants, weighted by their stoichiometric coefficients:
$$ c\mu_C + d\mu_D - a\mu_A - b\mu_B = 0 $$

Substitute the expression for $\mu$ derived above into this equilibrium condition:
$$ c[\mu^\circ_C + k_B T \ln(\rho_C)] + d[\mu^\circ_D + k_B T \ln(\rho_D)] - a[\dots] - b[\dots] = 0 $$

Rearranging to group the density terms ($\rho$) on one side and the intrinsic properties ($\mu^\circ$) on the other:
$$ \ln \left( \frac{\rho_C^c \rho_D^d}{\rho_A^a \rho_B^b} \right) = -\frac{c\mu^\circ_C + d\mu^\circ_D - a\mu^\circ_A - b\mu^\circ_B}{k_B T} $$

## 3. Calculating the Equilibrium Constant ($K_c$)

The term inside the logarithm on the left is the definition of the concentration equilibrium constant, $K_c$.

Expanding the right side by substituting back $\mu^\circ_i = -k_B T \ln(z_{int,i} / \Lambda_i^3)$ gives the ultimate statistical mechanical formula for chemical equilibrium:

$$ K_c = \frac{(\frac{z_C}{V})^c (\frac{z_D}{V})^d}{(\frac{z_A}{V})^a (\frac{z_B}{V})^b} e^{-\Delta E_0 / k_B T} $$

*Note: $\frac{z_i}{V}$ is the partition function per unit volume, which is $z_{int} / \Lambda^3$.*

**The $\Delta E_0$ term:**
The partition functions are usually calculated setting the ground state of each molecule to zero energy. However, in a reaction, the ground states of the reactants and products are not at the same energy level. $\Delta E_0$ is the difference in ground-state zero-point energies between the products and reactants (essentially the heat of reaction at absolute zero). It acts as a baseline energy shift.

## 4. Why This Matters

This equation is a triumph of theoretical physics. It proves that macroscopic chemical reactions are governed entirely by microscopic quantum states.

If you want to know how much NOₓ a jet engine will produce at 2,000 K, you don't necessarily have to measure it. You can:
1.  Look up the molecular weight of N₂, O₂, and NO (for $z_{trans}$).
2.  Look up their bond lengths to get moment of inertia (for $z_{rot}$).
3.  Look up their vibrational frequencies from spectroscopy (for $z_{vib}$).
4.  Plug those parameters into the formula above.

The result will accurately predict the equilibrium constant of $N_2 + O_2 \rightleftharpoons 2NO$ at any temperature, matching experimental data flawlessly.
