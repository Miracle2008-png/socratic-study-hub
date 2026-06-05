# Introduction to the Finite Element Method

For structures with complex geometry, variable cross-sections, or multiple materials, exact analytical solutions to the governing PDEs are impossible. The **Finite Element Method (FEM)** is the universal numerical technique for solving these problems. It is the computational backbone of every modern structural, thermal, and fluid analysis tool.

## 1. The Core Concept

**Discretization:** The continuous structure is divided into a mesh of small, simple sub-domains called **finite elements** (triangles, quadrilaterals, tetrahedra, hexahedra). Within each element, the displacement field is approximated by simple polynomial **shape functions** $[N]$.

**Assembly:** The stiffness and mass matrices for each element ($[k_e]$, $[m_e]$) are computed analytically from the element geometry and material properties. They are then assembled into the global matrices $[K]$ and $[M]$.

## 2. Element Stiffness Matrix

For a simple 1D bar element of length $L$, cross-section $A$, modulus $E$, with DOF $(u_1, u_2)$ at its two nodes:

$$[k_e] = \frac{EA}{L}\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$$

The element mass matrix (consistent mass formulation):
$$[m_e] = \frac{\rho A L}{6}\begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$$

For beam elements, plate elements, and 3D solid elements, the shape functions are higher-order polynomials and the resulting $[k_e]$ and $[m_e]$ are larger but derived by the same integration process.

## 3. Assembly and Solution

Global matrices $[K]$ and $[M]$ are formed by placing each $[k_e]$ and $[m_e]$ into the appropriate rows/columns corresponding to the shared DOF between adjacent elements. The result is a **sparse** global system (most entries are zero, since elements only connect to their immediate neighbors).

After applying boundary conditions (setting DOF at supports to zero), the system is solved:

- **Static analysis:** $[K]\{u\} = \{F\}$ — direct sparse factorization (LU decomposition).
- **Modal analysis:** $\det([K] - \omega^2[M]) = 0$ — Lanczos eigenvalue solver.
- **Transient dynamics:** $[M]\{\ddot{u}\} + [C]\{\dot{u}\} + [K]\{u\} = \{F(t)\}$ — Newmark-$\beta$ or modal superposition.

## 4. Convergence and Mesh Refinement

FEA solutions are approximate. Accuracy improves by:
- **h-refinement**: Subdividing elements into smaller ones (smaller $h$).
- **p-refinement**: Using higher-order polynomial shape functions within each element.

**Convergence check:** Run the analysis at two different mesh densities. If results change by less than 5%, the coarser mesh is adequate. If not, further refinement is needed. This mesh convergence study is a mandatory step in any credible FEA analysis.
