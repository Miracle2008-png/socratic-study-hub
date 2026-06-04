# 11. Applications: Electrical Circuits and Statics

Why do we care so much about systems of linear equations? Because nearly every physical system in equilibrium can be perfectly modeled by them.

### Application 1: Circuit Analysis (Kirchhoff's Laws)
When electrical engineers design a motherboard, they must ensure the correct current flows to the CPU. They analyze the circuit using Kirchhoff's Laws:
1.  **Current Law (KCL):** The sum of all currents entering a node must equal the sum of currents leaving the node. ($\sum I_{in} = \sum I_{out}$).
2.  **Voltage Law (KVL):** The sum of all voltage drops around any closed loop must equal zero.

By applying these two laws to a circuit with 5 loops, an engineer immediately generates a system of 5 linear equations. The unknown variables are the currents ($I_1, I_2, \dots, I_5$). The coefficient matrix $A$ is filled with the resistor values (using Ohm's Law $V=IR$), and the constant vector $B$ is filled with the battery voltages. The engineer throws the matrix into software, calculates RREF, and instantly has the current running through every wire.

### Application 2: Statics and Truss Analysis
Civil and mechanical engineers analyze bridges, cranes, and roof trusses using the laws of static equilibrium.
For a structure to not move, break, or collapse, two conditions must be met at every single connecting joint:
1.  The sum of all horizontal forces must be zero: $\sum F_x = 0$
2.  The sum of all vertical forces must be zero: $\sum F_y = 0$

If a bridge truss has 10 joints, the engineer generates 20 linear equations. The unknown variables are the tension and compression forces inside the steel beams ($F_1, F_2, \dots, F_{20}$). The coefficients are the cosines and sines of the angles of the beams.

If the determinant of this massive coefficient matrix drops to zero ($\det(A) = 0$), the matrix becomes singular. In civil engineering, a singular truss matrix means the structure is mechanically unstable—it is a "mechanism" that will physically collapse under its own weight the moment it is built!
