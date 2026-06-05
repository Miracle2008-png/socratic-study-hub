# Shear and Moment Diagrams Review

To ensure a beam is safe, an engineer must locate the exact cross-section where the internal shear force $V$ and bending moment $M$ reach their absolute maximum values. 
Because $V$ and $M$ vary continuously with the position $x$ along the beam's axis, we must plot them as mathematical functions. These plots are called **Shear and Bending Moment Diagrams**.

## 1. Sign Convention

Consistency is paramount. We universally adopt the following sign convention for internal forces when making an imaginary cut in a beam:

**Looking at the LEFT segment:**
*   Positive Shear ($V$) points **DOWNWARD**.
*   Positive Moment ($M$) is **COUNTER-CLOCKWISE** (tends to make the beam bend concave up, like a "smile").

**Looking at the RIGHT segment (Newton's 3rd Law):**
*   Positive Shear ($V$) points **UPWARD**.
*   Positive Moment ($M$) is **CLOCKWISE** (still makes the beam bend concave up).

## 2. The Method of Equations

The most rigorous way to generate these diagrams is by formulating piecewise mathematical equations for $V(x)$ and $M(x)$.

1.  **Find Support Reactions:** Treat the entire beam as a rigid body and solve for the external reactions at the supports.
2.  **Identify Discontinuities:** The functions for $V(x)$ and $M(x)$ will change abruptly wherever there is a concentrated point load, a concentrated couple moment, or where a distributed load begins or ends. 
    Identify the distinct regions between these discontinuities (e.g., region 1: $0 \le x < 2$m; region 2: $2 \le x \le 5$m).
3.  **Make Conceptual Cuts:** Make an imaginary cut at an arbitrary distance $x$ within the first region. 
4.  **Apply Equilibrium:** Draw the free-body diagram of the cut segment (usually the left side, from $0$ to $x$). Apply the equations of equilibrium:
    $$ \sum F_y = 0 \implies \text{Solve for } V(x) $$
    $$ \sum M_{cut} = 0 \implies \text{Solve for } M(x) $$
5.  **Repeat:** Move your conceptual cut to the next region and repeat the equilibrium analysis. The equations will change because new loads are now included on the left segment.
6.  **Plot:** Plot the resulting piecewise equations against the $x$-axis directly beneath a sketch of the loaded beam.

While mathematically robust, the method of equations becomes extremely tedious for beams with multiple complex loads. Modern engineering practice heavily favors a faster, graphical approach based on differential calculus.
