---
title: "Solving Indeterminate Beams by Superposition"
---

# Solving Indeterminate Beams by Superposition

Direct integration is tedious. A far more elegant and commonly used engineering approach for solving indeterminate beams is the **Method of Superposition**.

This method transforms a complex indeterminate problem into two or more simple, determinate problems that can be solved instantly using handbook formulas.

## 1. The Concept of Redundant Forces

Consider again the propped cantilever beam (fixed at A, roller at B) subjected to a uniform load $w_0$.

1.  **Choose a Redundant Support:** We arbitrarily decide that the roller at B is the "extra" support. 
2.  **Remove the Redundant:** We mentally delete the roller at B. The beam is now just a simple, determinate cantilever beam bolted to the wall. This is called the **Primary Structure**.
3.  **Apply the Real Load:** We apply the uniform load $w_0$ to this simple cantilever. Because the roller is missing, the tip of the beam at B will violently sag downward by a distance we will call $\delta_B$. (We look up the formula for this sag in an appendix: $\delta_B = -w_0 L^4 / 8EI$).
4.  **Apply the Redundant Force:** Now, remove the uniform load. Instead, apply an unknown upward force $B_y$ (representing the missing roller reaction) to the tip of the simple cantilever. This force pushes the tip upward by a distance $\delta'_{B}$. (Appendix formula: $\delta'_{B} = +B_y L^3 / 3EI$).

## 2. Enforcing Compatibility

We have calculated two separate deflections:
*   $\delta_B$ (the downward sag caused by the real load).
*   $\delta'_{B}$ (the upward lift caused by the unknown roller reaction).

Now, we enforce the **compatibility condition** of the real, original structure: In reality, the roller *is* there, and the deflection at B must be exactly zero.

Therefore, the downward sag must be perfectly canceled out by the upward lift:
$$ \delta_B + \delta'_{B} = 0 $$

## 3. Solving for the Reaction

Substitute the handbook formulas into the compatibility equation:
$$ \left( -\frac{w_0 L^4}{8EI} \right) + \left( +\frac{B_y L^3}{3EI} \right) = 0 $$

Notice how brilliant this is: the complex differential equations are gone. We simply solve this single algebraic equation for the unknown reaction force $B_y$:
$$ \frac{B_y L^3}{3EI} = \frac{w_0 L^4}{8EI} $$
$$ B_y = \frac{3 w_0 L}{8} $$

Once the redundant reaction $B_y$ is found, the structure is completely solved. You can use standard statics ($\sum F_y=0, \sum M=0$) to find the remaining wall reactions ($A_y, M_A$).

This method is so powerful it forms the absolute foundation of modern matrix structural analysis (the stiffness method) used by all civil engineering software.
