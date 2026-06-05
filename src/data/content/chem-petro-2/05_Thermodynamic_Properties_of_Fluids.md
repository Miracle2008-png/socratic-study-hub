# Thermodynamic Properties of Fluids

Chemical engineers rely heavily on thermodynamic properties like Enthalpy ($H$) and Entropy ($S$) to solve energy balances. However, $H$ and $S$ cannot be measured directly in a laboratory; they can only be calculated. We must link these unmeasurable properties to measurable properties: Pressure ($P$), Volume ($V$), Temperature ($T$), and Heat Capacities ($C_p$, $C_v$).

## 1. Fundamental Property Relations

The first step in calculating thermodynamic properties is combining the First and Second Laws of Thermodynamics into fundamental equations.

For a closed system undergoing a reversible process:
$$ dU = dQ_{\text{rev}} - dW_{\text{rev}} $$
Since $dQ_{\text{rev}} = T dS$ and $dW_{\text{rev}} = P dV$, we obtain the fundamental equation for internal energy:
$$ dU = T dS - P dV $$

By using the definitions of Enthalpy ($H = U + PV$), Helmholtz Energy ($A = U - TS$), and Gibbs Free Energy ($G = H - TS$), we can derive the other three fundamental relations:
$$ dH = T dS + V dP $$
$$ dA = -S dT - P dV $$
$$ dG = -S dT + V dP $$

These four equations are the cornerstone of chemical engineering thermodynamics. They relate energy properties ($U, H, A, G$) to measurable state variables ($T, P, V$) and entropy ($S$).

## 2. Deriving Equations for Enthalpy and Entropy

If we want to calculate the change in enthalpy ($dH$) of a fluid undergoing a process, we know $H$ is a function of $T$ and $P$. The exact differential is:
$$ dH = \left(\frac{\partial H}{\partial T}\right)_P dT + \left(\frac{\partial H}{\partial P}\right)_T dP $$

We already know that $\left(\frac{\partial H}{\partial T}\right)_P = C_p$. 
To find the pressure derivative, we use the fundamental property relation for $dH$ and apply mathematical identities (specifically, Maxwell Relations, covered in the next section) to replace entropy derivatives with measurable $P-V-T$ derivatives.

This yields the general equation for enthalpy change:
$$ dH = C_p dT + \left[ V - T \left(\frac{\partial V}{\partial T}\right)_P \right] dP $$

And similarly, the general equation for entropy change:
$$ dS = \frac{C_p}{T} dT - \left(\frac{\partial V}{\partial T}\right)_P dP $$

## 3. Applying Equations of State

Look closely at the terms in brackets for $dH$ and $dS$. They require the derivative $\left(\frac{\partial V}{\partial T}\right)_P$. 

To evaluate this term, you must use an Equation of State (like the Ideal Gas Law, SRK, or PR). 

- If the fluid is an **ideal gas**, $V = RT/P$. Therefore, $\left(\frac{\partial V}{\partial T}\right)_P = R/P$.
  Plugging this into the $dH$ equation gives:
  $$ dH^{\text{ig}} = C_p^{\text{ig}} dT + \left[ V - T \left(\frac{R}{P}\right) \right] dP $$
  $$ dH^{\text{ig}} = C_p^{\text{ig}} dT + [ V - V ] dP = C_p^{\text{ig}} dT $$
  This mathematically proves that the enthalpy of an ideal gas depends ONLY on temperature, not on pressure.

- If the fluid is a **real gas**, you must use a cubic EOS to calculate the derivative, which requires complex calculus and integration, a task typically handled by software like Aspen Plus.
