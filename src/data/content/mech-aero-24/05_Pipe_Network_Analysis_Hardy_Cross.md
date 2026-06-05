# Pipe Network Analysis (Hardy Cross Method)

Analyzing a single pipeline is straightforward. But city water distribution systems or chemical plant layouts consist of complex, interconnected webs of pipes, with multiple junctions, parallel branches, and varying diameters.

Solving complex pipe networks requires satisfying two fundamental conservation laws simultaneously.

## 1. The Governing Rules of Networks

These rules are identical to Kirchhoff's laws for electrical circuits, where Head ($H$) is analogous to Voltage, and Flow Rate ($Q$) is analogous to Current.

**Rule 1: Conservation of Mass at Junctions (Nodes)**
Fluid cannot accumulate at a pipe junction. The sum of the volume flow rates entering a node must exactly equal the sum of the flow rates leaving that node.
$$\sum Q_{in} = \sum Q_{out}$$

**Rule 2: Conservation of Energy in Loops**
Between any two nodes in a network, the head loss must be exactly the same regardless of which path the fluid takes.
Consequently, if you trace a closed loop through the pipe network and return to your starting node, the net change in pressure head must be zero. (Head loss in the direction of flow is positive, against the flow is negative).
$$\sum_{\text{closed loop}} h_L = 0$$

## 2. The Non-Linear Problem

Since head loss relates to flow rate by $h_L = K' Q^2$ (from Darcy-Weisbach, lumping constants into $K'$), the loop energy equation becomes:
$$\sum \pm K' Q^2 = 0$$

Unlike electrical resistor circuits ($V = IR$), fluid circuits are **non-linear** because $h_L$ depends on $Q$ squared. Therefore, you cannot solve a pipe network using simple linear algebra matrix inversions. 

## 3. The Hardy Cross Method

Developed by Hardy Cross in 1936, this is a systematic, iterative numerical method for solving non-linear pipe networks. (It is the exact algorithm running under the hood of modern hydraulic software like EPANET).

**The Algorithm:**
1. **Initial Guess:** Assume a flow rate $Q$ for every single pipe in the network. Ensure your guesses satisfy continuity (Rule 1) at every node.
2. **Calculate Head Loss:** For a specific loop, calculate the head loss $h_L = K' Q^2$ for each pipe. Use a sign convention (e.g., clockwise flow is positive, counter-clockwise is negative).
3. **Check Energy:** Sum the head losses around the loop. If the sum is zero, your initial guesses were magically correct! Usually, $\sum h_L \neq 0$.
4. **Calculate the Correction Factor ($\Delta Q$):** Hardy Cross used a Taylor series expansion to derive a flow correction factor for the loop:
   $$\Delta Q = -\frac{\sum (K' Q |Q|)}{\sum (2 K' |Q|)}$$
5. **Apply the Correction:** Add $\Delta Q$ to the flow rate of every pipe in that loop.
6. **Iterate:** Move to the next loop and repeat. Because pipes are shared between adjacent loops, adjusting one loop messes up the adjacent one. You must sweep through all loops repeatedly. With each full sweep, $\Delta Q$ gets smaller and smaller. When $\Delta Q \approx 0$, the network is solved.

*(Note: In modern computerized analysis, the Hardy Cross method has largely been superseded by the more robust Newton-Raphson nodal method, but Hardy Cross remains the standard for teaching network iteration).*
