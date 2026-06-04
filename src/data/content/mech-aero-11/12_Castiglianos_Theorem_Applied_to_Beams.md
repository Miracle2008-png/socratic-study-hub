---
title: "Castigliano's Theorem Applied to Beams"
---

# Castigliano's Theorem Applied to Beams

Just as Castigliano's theorem provides an alternative to Virtual Work for trusses, it does the same for continuous bending beams and rigid frames.

## 1. The Bending Equation

Recall the total strain energy stored in a bending beam: 
$$ U_i = \int_0^L \frac{M^2}{2EI} dx $$

Applying Castigliano's theorem, we take the partial derivative of this integral with respect to the specific external load $P$ located at the point where we want to find the deflection $\Delta$:

$$ \Delta = \frac{\partial U_i}{\partial P} = \frac{\partial}{\partial P} \int_0^L \frac{M^2}{2EI} dx $$

Using Leibniz's rule to bring the derivative inside the integral, and applying the chain rule to the $M^2$ term, we get:

$$ \Delta = \int_0^L M \left( \frac{\partial M}{\partial P} \right) \frac{1}{EI} dx $$

Compare this to the Virtual Work equation for a beam: $\Delta = \int M \cdot m \frac{1}{EI} dx$. 
Again, they are mathematically identical. The partial derivative term $\left( \frac{\partial M}{\partial P} \right)$ is exactly the virtual internal moment $m$.

## 2. The Procedure

To find deflection using Castigliano:
1.  If there isn't a load acting at the target point in the desired direction, apply a fictitious algebraic force $Q$.
2.  Solve for the external support reactions, keeping the force $P$ (or $Q$) as a literal variable in the equations.
3.  Write the internal moment equations $M(x)$ for each segment of the beam. These equations will contain the variable $P$.
4.  Take the partial derivative of your $M(x)$ equations with respect to $P$. This generates the $\left( \frac{\partial M}{\partial P} \right)$ terms.
5.  Multiply the $M(x)$ equations by the partial derivative terms, and integrate them over the length of the beam.
6.  If you used a fictitious force $Q$, set $Q=0$ to evaluate the final numerical answer.

## 3. Virtual Work vs. Castigliano

Which energy method is better? It is entirely a matter of preference. Both will yield the exact same answer.

*   **Virtual Work** requires you to draw and analyze the structure twice. It is highly visual. It breaks the problem down into smaller, numerical chunks.
*   **Castigliano's Theorem** only requires you to analyze the structure once. However, you must carry algebraic variables ($P$ or $Q$) through all your statics equations, which can lead to massive, sprawling algebraic expressions before you finally take the derivative. 

Most software algorithms for structural analysis utilize the matrix formulation of Virtual Work. Regardless of the method chosen, Energy Methods represent the pinnacle of structural mechanics, allowing engineers to solve highly complex, hyper-indeterminate systems with elegance and efficiency.
