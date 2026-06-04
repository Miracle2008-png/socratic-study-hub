---
title: "The Method of Joints"
---

# The Method of Joints

The **Method of Joints** is the fundamental technique for determining the internal force in *every single member* of a truss. 

Since the entire truss is in equilibrium, it logically follows that every individual joint within the truss must also be in equilibrium.

## 1. Analytical Procedure

1. **Find Global Reactions:** Usually, the first step is to treat the entire truss as a single rigid body and apply the global equilibrium equations ($\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$) to find the external support reactions.
2. **Select a Starting Joint:** Isolate a joint that has at least one known applied force and **at most two unknown member forces**. (Because a joint is a particle, you only have two coplanar equations: $\sum F_x = 0$ and $\sum F_y = 0$).
3. **Draw the Joint FBD:** Draw the free-body diagram of the pin at the joint. Show all known external forces and the unknown internal member forces.
   - *Best Practice:* Assume all unknown member forces are in **Tension** (pulling away from the pin). If your math yields a positive result, the member is indeed in tension. If it yields a negative result, the member is in compression.
4. **Apply Equilibrium:** Resolve the forces into $x$ and $y$ components and apply:
   $$ \sum F_x = 0 $$
   $$ \sum F_y = 0 $$
   Solve for the two unknown member forces.
5. **Proceed to the Next Joint:** Move to an adjacent joint that now has at most two unknowns (since you just found one or more of the connected forces). Repeat until all desired forces are found.

## 2. Example Application

Consider a simple triangular truss ABC. Joint A is a pin, Joint C is a roller. A downward load $P$ is applied at Joint B.

1. **Global:** Find reactions at A ($A_x, A_y$) and C ($C_y$).
2. **Joint A:** Let's say $A_x = 0$ and $A_y$ is known. The unknown members are AB and AC.
   - FBD of Joint A: Upward force $A_y$, force $F_{AB}$ at an angle $\theta$, and horizontal force $F_{AC}$.
   - $\sum F_y = 0 \implies A_y + F_{AB}\sin\theta = 0 \implies F_{AB} = -A_y / \sin\theta$. (The negative sign means AB is in compression).
   - $\sum F_x = 0 \implies F_{AC} + F_{AB}\cos\theta = 0$. Substitute $F_{AB}$ to find $F_{AC}$.
3. **Joint C:** Now move to joint C. You know $F_{AC}$ and $C_y$. The only unknown is $F_{BC}$. Solve using $\sum F_y = 0$ or $\sum F_x = 0$.

## 3. Checking Results

Because you often finish analyzing the truss at a joint where you already know all the forces (e.g., the last joint has 0 unknowns but 2 equations), you can use those final two equilibrium equations as a mathematical check. If $\sum F_x \neq 0$ or $\sum F_y \neq 0$ at the final joint, an error was made earlier in the process.
