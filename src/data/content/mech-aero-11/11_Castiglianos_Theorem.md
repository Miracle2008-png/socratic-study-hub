---
title: "Castigliano's Theorem"
---

# Castigliano's Theorem

In 1879, Alberto Castigliano published an incredibly elegant mathematical theorem that bypasses the need to draw "virtual" systems entirely. It relies purely on partial derivatives of the total strain energy equation.

Castigliano's Theorem is functionally identical to the Principle of Virtual Work, but some engineers prefer its purely calculus-based approach.

## 1. Castigliano's Second Theorem

The theorem states:
**The deflection $\Delta$ at any point in a structure, in a specific direction, is equal to the partial derivative of the total internal strain energy ($U_i$) with respect to a load $P$ applied at that exact point and acting in that exact direction.**

Mathematically:
$$ \Delta_j = \frac{\partial U_i}{\partial P_j} $$

Likewise, to find a rotational slope $\theta_j$, you take the partial derivative of the strain energy with respect to a moment $M_j$ applied at that point:
$$ \theta_j = \frac{\partial U_i}{\partial M_j} $$

## 2. The Fictitious Load Trick

The theorem has an obvious logical catch: to take a partial derivative with respect to load $P_j$, a load $P_j$ must actually exist at the point you are analyzing. 

If you want to find the deflection in the middle of a beam, but there is no load applied there, you must invent one.
You place a "fictitious" load $Q$ at the target point. You calculate the strain energy equation keeping $Q$ as an algebraic variable. You take the partial derivative with respect to $Q$. 
Then, right at the very end of the problem, you set $Q = 0$ (because it doesn't actually exist) to find the true deflection.

## 3. Castigliano for Trusses

Recall the total strain energy for a truss: $U_i = \sum \frac{N^2 L}{2AE}$.
Applying Castigliano's theorem (taking the partial derivative with respect to an external load $P$):

$$ \Delta = \frac{\partial}{\partial P} \sum \frac{N^2 L}{2AE} $$

Because $L, A$, and $E$ are constants, the chain rule of differentiation ($\frac{d}{dx} u^2 = 2u \frac{du}{dx}$) yields:

$$ \Delta = \sum N \left( \frac{\partial N}{\partial P} \right) \frac{L}{AE} $$

Compare this to the Virtual Work equation: $\Delta = \sum N \cdot n \frac{L}{AE}$.
They are mathematically identical. The term $\left( \frac{\partial N}{\partial P} \right)$ is exactly the same as the virtual internal force $n$. 

*   **Virtual Work:** You solve the truss a second time with a 1.0 load to find $n$.
*   **Castigliano:** You solve the truss once, keeping the target load $P$ as an algebraic variable, and then take the partial derivative of all your internal forces to find $\left( \frac{\partial N}{\partial P} \right)$.
