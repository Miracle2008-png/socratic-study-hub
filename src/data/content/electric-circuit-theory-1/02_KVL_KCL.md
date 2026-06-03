# Kirchhoff's Laws

## Kirchhoff's Current Law (KCL)

The algebraic sum of all currents leaving a node equals zero:
$$\sum_{k=1}^n i_k = 0$$

Equivalently: sum of currents entering = sum of currents leaving.

*Basis*: Conservation of charge (from $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$, at low frequencies).

## Kirchhoff's Voltage Law (KVL)

The algebraic sum of all voltages around any closed loop equals zero:
$$\sum_{k=1}^n v_k = 0$$

*Basis*: Conservative electric field at low frequencies ($\nabla \times \mathbf{E} = 0$, i.e., no changing magnetic flux).

## Systematic Application

**Step 1** — label all branch currents (assign reference directions).  
**Step 2** — apply KCL at $n-1$ independent nodes (where $n$ = number of nodes).  
**Step 3** — apply KVL around $b - n + 1$ independent loops (where $b$ = branches).  
**Step 4** — add element equations ($v = iR$, etc.).  
**Step 5** — solve the system.

## Example: T-network

Three resistors forming a T: $R_1 = 2\,\Omega$ (left), $R_2 = 4\,\Omega$ (right), $R_3 = 6\,\Omega$ (bottom to ground), source $V_s = 10$ V.

KVL left loop: $10 = 2I_1 + 6(I_1 - I_2)$  
KVL right loop: $0 = 4I_2 + 6(I_2 - I_1)$  
Solving: $I_1 = 1.3$ A, $I_2 = 0.78$ A