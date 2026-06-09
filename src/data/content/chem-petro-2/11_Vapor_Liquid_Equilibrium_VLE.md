# Vapor-Liquid Equilibrium (VLE)

Vapor-Liquid Equilibrium (VLE) is the theoretical foundation for the most important separation process in chemical engineering: Distillation. To separate chemicals, we must know exactly how they distribute themselves between the liquid and vapor phases at a given Temperature and Pressure.

## 1. The General VLE Equation

In Module 9, we established that at equilibrium, the fugacity of species $i$ in the vapor must equal its fugacity in the liquid:
$$ \hat{f}_i^V = \hat{f}_i^L $$

Where:
- **$\hat{f}_i^V$**: Fugacity of species $i$ in the vapor phase.
- **$\hat{f}_i^L$**: Fugacity of species $i$ in the liquid phase.

We can substitute our vapor phase model (using $\hat{\phi}_i$) and our liquid phase model (using $\gamma_i$) into this equation:
$$ y_i \hat{\phi}_i P = x_i \gamma_i f_i $$

Where:
- **$y_i$**: Mole fraction of species $i$ in the vapor phase.
- **$\hat{\phi}_i$**: Partial fugacity coefficient of species $i$ in the vapor phase.
- **$P$**: Total pressure.
- **$x_i$**: Mole fraction of species $i$ in the liquid phase.
- **$\gamma_i$**: Activity coefficient of species $i$ in the liquid phase.
- **$f_i$**: Fugacity of pure liquid $i$.

By approximating the pure liquid fugacity $f_i$ as the pure vapor pressure $P_i^{sat}$ (ignoring the small Poynting correction factor at low pressures), we arrive at the **Gamma-Phi Formulation** of VLE:

$$ y_i \hat{\phi}_i P = x_i \gamma_i P_i^{sat} $$

Where:
- **$P_i^{sat}$**: Saturation (vapor) pressure of pure species $i$.

This is the master equation of phase equilibrium. It applies to almost all typical chemical processes.

## 2. Raoult's Law (The Ideal Case)

If the pressure is low (near 1 atm), the vapor behaves as an ideal gas, so $\hat{\phi}_i = 1$.
If the liquid molecules are very similar (like benzene and toluene), they form an ideal solution, so $\gamma_i = 1$.

Under these perfect conditions, the Gamma-Phi equation reduces to **Raoult's Law**:
$$ y_i P = x_i P_i^{sat} $$

Where:
- **$y_i$**: Mole fraction of species $i$ in the vapor phase.
- **$P$**: Total pressure.
- **$x_i$**: Mole fraction of species $i$ in the liquid phase.
- **$P_i^{sat}$**: Vapor pressure of pure species $i$.

Because it is so simple, Raoult's Law is often used for quick estimations, but it is rarely accurate enough for final equipment design unless the chemicals belong to the same homologous series (e.g., alkanes).

## 3. Modified Raoult's Law

Most chemical mixtures (like ethanol and water) are highly non-ideal in the liquid phase, but at 1 atm, the vapor is still mostly ideal. 
In this case, $\hat{\phi}_i = 1$, but $\gamma_i \neq 1$. The VLE equation becomes **Modified Raoult's Law**:

$$ y_i P = x_i \gamma_i P_i^{sat} $$

Where:
- **$\gamma_i$**: Activity coefficient of species $i$ in the liquid phase.

To solve a VLE problem using Modified Raoult's Law:
1. Find $P_i^{sat}$ at the given $T$ using the Antoine Equation.
2. Calculate $\gamma_i$ using an activity model (like the Wilson equation) based on the liquid mole fractions $x_i$.
3. Solve the equations for the unknown vapor mole fractions $y_i$ and the total pressure $P$ (where $P = \sum x_i \gamma_i P_i^{sat}$).

## 4. Azeotropes

If the liquid phase exhibits massive positive deviations from ideality ($\gamma_i \gg 1$), the molecules "hate" each other so much that they violently escape into the vapor phase, artificially raising the total vapor pressure. 

If this deviation is strong enough, the mixture will reach a point where the vapor composition exactly equals the liquid composition ($y_i = x_i$). This is called an **Azeotrope**.

At an azeotrope:
- The mixture boils at a constant temperature, acting as if it were a pure substance.
- **Distillation fails completely.** Because $y_i = x_i$, boiling the liquid does not change the concentration. 

Ethanol and water form an azeotrope at 95.6% ethanol. This is why you cannot produce 100% pure ethanol using standard distillation; it gets "stuck" at 95.6%. Special thermodynamic tricks (like adding a third chemical, or changing the pressure to shift the azeotropic point) are required to break it.
