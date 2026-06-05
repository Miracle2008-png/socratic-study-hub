# Shear in Straight Members

To derive an equation for shear stress, we cannot rely on simple kinematic geometry as we did for torsion (plane sections rotate) or bending (plane sections remain plane). 

The transverse shear strain $\gamma$ severely distorts the cross-section of a beam, warping it out-of-plane. Because the strain is non-linear, we cannot use Hooke's Law to directly guess a linear stress distribution. Instead, we must derive the shear stress purely from the principles of horizontal force equilibrium.

## 1. The Equilibrium Approach

We consider a small horizontal segment cut out of a loaded beam. 

Imagine a beam subjected to a varying bending moment, from $M$ at location $x$, to $M + dM$ at location $x + dx$.
Because the bending moment is changing, the normal bending stresses pushing on the left face of our segment are different from the normal stresses pushing on the right face.

Let's isolate a microscopic block of material located at a distance $y^\prime$ above the Neutral Axis, extending up to the top surface of the beam.
*   The total normal force pushing on the left face is $F_{left} = \int (\frac{M y}{I}) dA$
*   The total normal force pushing on the right face is $F_{right} = \int (\frac{(M+dM) y}{I}) dA$

Since $M+dM$ is greater than $M$, there is a severe force imbalance. The block wants to shoot horizontally out of the beam.

## 2. The Role of Longitudinal Shear

To maintain horizontal equilibrium ($\sum F_x = 0$), there must be a balancing force acting on the bottom horizontal surface of this isolated block. 

This balancing force is provided entirely by the **longitudinal shear stress**, $\tau$, acting over the bottom horizontal area of the block ($Area = t \cdot dx$, where $t$ is the thickness of the beam at that specific depth).

The equilibrium equation is:
$$ \text{Force}_{right} - \text{Force}_{left} - \text{Shear Force}_{bottom} = 0 $$
$$ \int \frac{(M+dM)y}{I} dA - \int \frac{My}{I} dA - \tau (t \cdot dx) = 0 $$

## 3. Deriving the General Formula

Simplifying the equilibrium equation:
$$ \int \frac{dM \cdot y}{I} dA = \tau \cdot t \cdot dx $$

We know from calculus that the rate of change of the bending moment is exactly equal to the shear force: $dM/dx = V$.

Substituting $V$ into the equation and rearranging to solve for the shear stress $\tau$ yields the **General Shear Formula**:

$$ \tau = \frac{V}{I t} \int y \, dA $$

The integral $\int y \, dA$ is incredibly important and is given its own symbol, $Q$.
$$ Q = \int_{y^\prime}^{c} y \, dA = \bar{y}^\prime A^\prime $$

This leaves us with the final, standard form of the Shear Formula.
