# Thermal Stresses

When a homogeneous material is subjected to a change in temperature, it will naturally expand if heated and contract if cooled. 

If this thermal expansion or contraction is freely permitted to occur, the body undergoes a change in dimensions, but **absolutely no stress** develops inside the material.

However, if the body's natural thermal deformation is restricted or prevented by rigid supports, massive internal forces—known as **thermal stresses**—will develop.

## 1. Thermal Strain and Deformation

Experimental evidence shows that for isotropic materials, the thermal deformation is directly proportional to the temperature change $\Delta T$ and the original length $L$.

The thermal strain is:
$$ \epsilon_T = \alpha \Delta T $$

The unconstrained thermal deformation is:
$$ \delta_T = \alpha \Delta T L $$

Where:
- $\alpha$ is the **coefficient of thermal expansion**, a material property (units are $1/^\circ\text{C}$ or $1/^\circ\text{F}$).
- $\Delta T$ is the change in temperature ($T_{final} - T_{initial}$).
- $L$ is the original length of the member.

## 2. Calculating Thermal Stress

A structural member constrained between two perfectly rigid walls and subjected to a temperature increase $\Delta T$ is a classic statically indeterminate problem.

Because the walls are rigid, the member cannot physically expand. 
$$ \delta_{total} = 0 $$

The total deformation is the sum of the thermal expansion (which "wants" to happen) and the mechanical compression caused by the walls pushing back to prevent that expansion.

By the principle of superposition:
$$ \delta_{total} = \delta_{thermal} + \delta_{mechanical} = 0 $$
$$ (\alpha \Delta T L) + \left( \frac{-PL}{AE} \right) = 0 $$

Solving for the internal compressive force $P$:
$$ P = \alpha \Delta T A E $$

The thermal stress $\sigma$ developed in the constrained member is:
$$ \sigma = \frac{P}{A} = \alpha \Delta T E $$

Notice that the thermal stress developed in a rigidly constrained member is completely independent of its length $L$.

## 3. Engineering Implications

Thermal stresses can be incredibly destructive. A long steel bridge deck expanding under the summer sun will generate enough compressive force to buckle the structure or shatter concrete abutments if not properly managed.

Engineers mitigate thermal stress by intentionally installing **expansion joints**—physical gaps that allow the material to freely undergo $\delta_T$ without generating the catastrophic reactive force $P$.
