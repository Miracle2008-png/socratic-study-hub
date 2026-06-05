# Machines and Mechanisms

While frames are rigidly fixed and designed to bear loads, **machines** are designed to transmit and alter forces, and they contain moving parts. Pliers, bolt cutters, hydraulic excavators, and car jacks are all examples of machines.

However, in statics, we analyze machines at a specific, frozen instant in time. We assume the machine is momentarily in static equilibrium under the action of the input and output forces.

## 1. Input vs. Output Forces

The defining characteristic of a machine is that an input force (or torque) is applied at one point, and the machine transmits and modifies this force to produce an output force (or torque) at another point.

- **Mechanical Advantage (MA):** A key metric for a machine. It is the ratio of the output force $F_{out}$ to the input force $F_{in}$.
  $$ MA = \frac{F_{out}}{F_{in}} $$
  A pair of pliers, for example, is designed to have a high mechanical advantage, multiplying the small force of your hand into a massive force at the cutting jaws.

## 2. Analysis Procedure for Machines

The procedure for analyzing a machine is identical to the procedure for analyzing a frame:

1. **Disassemble the Machine:** Break the machine down into its component multi-force members.
2. **Identify Two-Force Members:** Look for links or hydraulic cylinders that are pinned at both ends and carry no transverse loads. These are two-force members (axial force only).
3. **Draw FBDs:** Draw the free-body diagram of each member. Pay strict attention to Newton's Third Law at the connecting pins (equal and opposite forces).
4. **Apply Equilibrium:** Apply $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$ to the individual members.

## 3. Example: Toggle Clamp

A toggle clamp is a classic machine utilizing a near-singular geometry to generate massive output forces. It consists of two links pinned together in the middle.

When the two links are pushed so that they are nearly collinear (forming a straight line), a small lateral input force $P$ applied at the center pin translates into an enormous axial compressive force $F$ in the links.

By drawing an FBD of the center pin, we can see:
$$ \sum F_y = 0 \implies P - 2F \sin\theta = 0 $$
$$ F = \frac{P}{2\sin\theta} $$

As the angle $\theta$ approaches zero (the links become perfectly straight), the denominator approaches zero, and the generated force $F$ approaches infinity. This is the mechanical principle behind locking pliers (Vise-Grips) and bolt cutters.
