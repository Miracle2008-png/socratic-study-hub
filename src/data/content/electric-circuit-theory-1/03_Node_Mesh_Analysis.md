# Node and Mesh Analysis

## Nodal Analysis

Choose a **reference node (ground)**. For each remaining node $k$, apply KCL writing currents leaving in terms of node voltages:

$$\sum_j \frac{V_k - V_j}{R_{kj}} + \frac{V_k - V_s}{R_{k,source}} = I_{k,external}$$

Matrix form: $\mathbf{G}\mathbf{v} = \mathbf{i}$

Conductance matrix $\mathbf{G}$:
- Diagonal: sum of all conductances at node $k$
- Off-diagonal $G_{km}$: negative of conductances between nodes $k$ and $m$

### Supernode
When a voltage source connects two non-reference nodes: treat the two nodes as a single *supernode*, write KCL for the combined region, and add the voltage constraint $V_a - V_b = V_s$.

## Mesh Analysis

Assign clockwise **mesh currents** $I_1, I_2, \ldots$ Apply KVL to each mesh:

$$\sum (\text{self resistance})\cdot I_k - \sum (\text{mutual resistance})\cdot I_j = V_{k,sources}$$

Matrix form: $\mathbf{R}\mathbf{i} = \mathbf{v}$

Resistance matrix $\mathbf{R}$:
- Diagonal: sum of resistances in mesh $k$
- Off-diagonal: negative of shared resistances

### Supermesh
When a current source is shared between two meshes: combine the two meshes, write KVL, and add constraint $I_k - I_j = I_s$.

## Comparison

| | Nodal | Mesh |
|--|-------|------|
| Unknowns | Node voltages | Mesh currents |
| Good for | Many current sources | Many voltage sources |
| Equations | $n-1$ | $b - n + 1$ |