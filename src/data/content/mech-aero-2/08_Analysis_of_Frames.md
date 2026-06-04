---
title: "Analysis of Frames"
---

# Analysis of Frames

The systematic analysis of a frame involves applying the equations of rigid-body equilibrium to the entire structure, and then to its individual disconnected members.

## 1. Procedure for Analysis

1. **Determine Global Reactions (If Possible):**
   - Draw an FBD of the entire intact frame.
   - Treat the entire frame as a single rigid body.
   - Calculate the external support reactions using $\sum F_x = 0$, $\sum F_y = 0$, and $\sum M = 0$.
   - *Note:* If the frame is externally statically indeterminate (e.g., supported by two pins, yielding 4 unknown external reactions), you must skip this step and proceed immediately to disassembling the frame.

2. **Disassemble the Frame:**
   - Draw the FBD of each individual multi-force member.
   - Draw the FBD of any pins connecting multiple members (if more than two members connect at a single pin, it is often easier to analyze the pin itself as a separate free body).

3. **Apply Interaction Forces (Newton's 3rd Law):**
   - Identify two-force members and represent their interaction as a single force along their axis.
   - For all other connections, apply the $x$ and $y$ components of the pin reactions. Ensure that matched pairs of interacting forces are drawn equal and opposite on the connected members.

4. **Solve the Equilibrium Equations:**
   - Apply the three equations of equilibrium ($\sum F_x = 0$, $\sum F_y = 0$, $\sum M_O = 0$) to each individual member.
   - Start with members that have three or fewer unknowns.
   - If no member has three or fewer unknowns, write out all the equations for all members and solve the resulting system of simultaneous equations algebraically.

## 2. Pulleys and Cables in Frames

Frames often incorporate pulleys and cables. 
- **Ideal Pulleys:** An ideal pulley is frictionless and massless. It serves only to change the direction of the cable. The tension $T$ in a continuous ideal cable is uniform throughout its entire length.
- **Pulley FBD:** When a pulley is removed from its pin, the pin exerts a reaction force ($R_x, R_y$) on the pulley. By drawing an FBD of the pulley itself and summing forces, you can relate the uniform cable tension to the pin reaction forces.

## 3. Self-Checking

Because a 2D frame with $n$ multi-force members generates $3n$ independent equilibrium equations, you often end up with more equations than strictly necessary to find a specific unknown. 

The remaining unused equations should be used as a self-check. After finding all the internal forces, select a member and sum moments about a point you haven't used yet. If the sum is zero, your preceding calculations are correct.
