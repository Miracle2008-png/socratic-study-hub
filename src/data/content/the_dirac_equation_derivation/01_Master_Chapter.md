# The Dirac Equation Derivation

## 1. Relativistic Energy and the Klein-Gordon Equation
In special relativity, the energy-momentum relationship is:
$$ E^2 = (pc)^2 + (mc^2)^2 $$
Promoting energy and momentum to quantum mechanical operators:
$$ E \to i\hbar \frac{\partial}{\partial t}, \quad \mathbf{p} \to -i\hbar \nabla $$
Substituting these into the relativistic energy equation yields the Klein-Gordon equation:
$$ -\hbar^2 \frac{\partial^2 \psi}{\partial t^2} = -\hbar^2 c^2 \nabla^2 \psi + m^2 c^4 \psi $$
While perfectly valid for spin-0 bosons, this equation presents issues for probability interpretation (since it yields negative probability densities) due to the second-order time derivative. 

## 2. Factoring the Energy-Momentum Relation
Paul Dirac sought a wave equation that was first-order in both space and time, to retain positive-definite probability densities, taking the form:
$$ i\hbar \frac{\partial \psi}{\partial t} = \left( c \boldsymbol{\alpha} \cdot \mathbf{p} + \beta mc^2 \right) \psi $$

To ensure consistency with the relativistic energy-momentum relation, squaring this Hamiltonian must yield $ E^2 = p^2c^2 + m^2c^4 $. Thus:
$$ H^2 = \left( c \sum_{i=1}^3 \alpha_i p_i + \beta mc^2 \right)^2 $$
Expanding this gives:
$$ H^2 = c^2 \sum_{i,j} \frac{1}{2}(\alpha_i \alpha_j + \alpha_j \alpha_i) p_i p_j + mc^3 \sum_i (\alpha_i \beta + \beta \alpha_i) p_i + \beta^2 m^2 c^4 $$

## 3. The Dirac Matrices
For the expanded Hamiltonian squared to match $ p^2 c^2 + m^2 c^4 $, the coefficients $ \alpha_i $ and $ \beta $ must satisfy the following algebraic relations:
1. $ \alpha_i^2 = 1 $
2. $ \beta^2 = 1 $
3. $ \{ \alpha_i, \alpha_j \} = \alpha_i \alpha_j + \alpha_j \alpha_i = 0 $ for $ i \neq j $
4. $ \{ \alpha_i, \beta \} = 0 $

These relations cannot be satisfied by standard scalar numbers. Dirac realized they must be matrices. The lowest dimension that satisfies these anti-commutation relations is 4x4. The standard representation is:
$$ \alpha_i = \begin{pmatrix} 0 & \sigma_i \\ \sigma_i & 0 \end{pmatrix}, \quad \beta = \begin{pmatrix} I & 0 \\ 0 & -I \end{pmatrix} $$
where $ \sigma_i $ are the 2x2 Pauli matrices, and $ I $ is the 2x2 identity matrix.

## 4. Covariant Form and Gamma Matrices
Multiply the original Dirac equation by $ \beta / c $:
$$ i\hbar \beta \frac{\partial \psi}{\partial (ct)} - \beta \boldsymbol{\alpha} \cdot \mathbf{p} \psi - mc \psi = 0 $$
Define the gamma matrices $ \gamma^\mu $ as:
$$ \gamma^0 = \beta, \quad \gamma^i = \beta \alpha_i \quad (i=1,2,3) $$
The gamma matrices satisfy the Clifford algebra:
$$ \{ \gamma^\mu, \gamma^\nu \} = 2 \eta^{\mu\nu} I $$
where $ \eta^{\mu\nu} $ is the Minkowski metric $ \text{diag}(1, -1, -1, -1) $.

The covariant form of the Dirac equation using Feynman slash notation ($ \not p = \gamma^\mu p_\mu $) becomes:
$$ (i\hbar \gamma^\mu \partial_\mu - mc) \psi = 0 $$

## 5. Free-Particle Plane Wave Solutions
Assume a plane wave solution of the form:
$$ \psi(x) = u(\mathbf{p}) e^{-i(Et - \mathbf{p} \cdot \mathbf{x})/\hbar} $$
Substituting into the Dirac equation yields the matrix eigenvalue problem:
$$ (\gamma^\mu p_\mu - mc) u(\mathbf{p}) = 0 $$
In the rest frame ($ \mathbf{p} = 0, p^0 = mc $):
$$ (\gamma^0 mc - mc) u = 0 \implies (\gamma^0 - I) u = 0 $$
Using the matrix form of $ \gamma^0 = \beta $:
$$ \begin{pmatrix} 0 & 0 \\ 0 & -2I \end{pmatrix} \begin{pmatrix} u_A \\ u_B \end{pmatrix} = 0 $$
This gives positive energy solutions $ u_A = \text{arbitrary}, u_B = 0 $ and negative energy solutions (when reversing the sign in the exponential).
