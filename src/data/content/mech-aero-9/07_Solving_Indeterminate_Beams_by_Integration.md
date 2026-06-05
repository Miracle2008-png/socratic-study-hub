# Solving Indeterminate Beams by Integration

The most rigorous method for solving a statically indeterminate beam is direct integration of the elastic curve ($EI v'' = M$). 

This method is mathematically flawless but can become algebraically intense. It is best applied using Macaulay brackets to keep the equations manageable.

## 1. The Algebraic Setup

Consider a propped cantilever beam: fixed to a wall on the left ($x=0$) and resting on a roller on the right ($x=L$). A uniform load $w_0$ is applied across the entire length.

1.  **Identify Unknowns:** The wall provides a vertical reaction $A_y$ and a moment reaction $M_A$. The roller provides a vertical reaction $B_y$. There are 3 unknowns, but only 2 statics equations. The beam is indeterminate to the first degree.
2.  **Write the Load Equation:** Using the unknown reactions as algebraic variables, write the Macaulay equation for the load $w(x)$.
    $$ w(x) = A_y \langle x - 0 \rangle^{-1} + M_A \langle x - 0 \rangle^{-2} - w_0 \langle x - 0 \rangle^0 + B_y \langle x - L \rangle^{-1} $$
3.  **Integrate to find Moment:** Integrate twice to find the internal moment $M(x)$. The unknown variables ($A_y, M_A$) will still be inside this equation.
4.  **Integrate for Deflection:** Integrate $M(x)$ twice more to find $EI\theta(x)$ and $EIv(x)$. You now have two new constants of integration ($C_1, C_2$).

You are now looking at a massive algebraic equation for deflection $v(x)$ that contains four unknown variables: $A_y, M_A, C_1, C_2$.

## 2. Applying Boundary Conditions

To solve for these four unknowns, you must identify four physical boundary conditions from the drawing of the beam:

*   **At the Wall ($x=0$):**
    1.  The deflection is zero: $v(0) = 0$
    2.  The slope is zero: $\theta(0) = 0$
*   **At the Roller ($x=L$):**
    3.  The deflection is zero: $v(L) = 0$
*   **Internal Hinge (if present):**
    4.  The internal moment is zero: $M(x_{hinge}) = 0$ (This is a condition on the $M(x)$ equation, not the deflection equation).

In our propped cantilever example, we only have three geometric boundary conditions, but we also have one usable statics equation ($\sum M = 0$).

## 3. Solving the System

You plug these known $(x, v)$ and $(x, \theta)$ coordinate pairs into your massive integrated equations. 
This generates a system of simultaneous algebraic equations.

Solving this matrix yields the exact numerical values for the redundant support reactions ($A_y, M_A, B_y$) and the integration constants ($C_1, C_2$).
Once the redundant reactions are known, the beam is no longer indeterminate. You can draw the shear and moment diagrams and calculate the maximum stresses exactly as you would for any simple beam.
