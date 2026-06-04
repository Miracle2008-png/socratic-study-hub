# Atomic Structure

## 1. The Bohr Model

### Energy Levels of Hydrogen
The energy of the $n$-th stationary state in a hydrogen-like atom is given by:
$$ E_n = -R_H \left(\frac{Z^2}{n^2}\right) $$
where $R_H \approx 13.6 \text{ eV}$ (or $2.18 \times 10^{-18} \text{ J}$) is the Rydberg energy, and $Z$ is the atomic number.

**Worked Example 1:**
Calculate the energy required to excite an electron in a hydrogen atom ($Z=1$) from the ground state ($n=1$) to the first excited state ($n=2$).

*Solution:*
1. Calculate the energy of the ground state ($n=1$):
   $$ E_1 = -13.6 \left(\frac{1^2}{1^2}\right) = -13.6 \text{ eV} $$
2. Calculate the energy of the first excited state ($n=2$):
   $$ E_2 = -13.6 \left(\frac{1^2}{2^2}\right) = -3.4 \text{ eV} $$
3. Calculate the difference:
   $$ \Delta E = E_2 - E_1 = -3.4 - (-13.6) = 10.2 \text{ eV} $$

## 2. Quantum Mechanics and the Schrödinger Equation

### The Wave Function
The Schrödinger equation dictates the behavior of the wave function $\Psi$:
$$ \hat{H}\Psi = E\Psi $$
where $\hat{H}$ is the Hamiltonian operator and $E$ is the energy eigenvalue. The probability density of finding an electron in a volume element $dV$ is $|\Psi|^2 dV$.

### Quantum Numbers
An atomic orbital is uniquely defined by three quantum numbers, with a fourth for electron spin:
1. **Principal Quantum Number ($n$)**: $n = 1, 2, 3, \dots$ (Determines energy level and size)
2. **Azimuthal (Angular) Quantum Number ($l$)**: $l = 0, 1, \dots, n-1$ (Determines orbital shape: s, p, d, f)
3. **Magnetic Quantum Number ($m_l$)**: $m_l = -l, \dots, +l$ (Determines orbital orientation)
4. **Spin Quantum Number ($m_s$)**: $m_s = +\frac{1}{2}, -\frac{1}{2}$

**Worked Example 2:**
List all possible sets of quantum numbers for an electron in a $2p$ orbital.

*Solution:*
1. For a $2p$ orbital, the principal quantum number $n = 2$.
2. The letter $p$ corresponds to $l = 1$.
3. The magnetic quantum number $m_l$ can take values from $-l$ to $+l$, so $m_l \in \{-1, 0, 1\}$.
4. The spin quantum number $m_s$ can be $+\frac{1}{2}$ or $-\frac{1}{2}$.
5. Therefore, there are 6 possible sets:
   - $(2, 1, -1, +\frac{1}{2}), (2, 1, -1, -\frac{1}{2})$
   - $(2, 1, 0, +\frac{1}{2}), (2, 1, 0, -\frac{1}{2})$
   - $(2, 1, 1, +\frac{1}{2}), (2, 1, 1, -\frac{1}{2})$

## 3. Electron Configuration

### Principles of Electron Assignment
- **Aufbau Principle**: Electrons fill orbitals starting from the lowest available energy state.
- **Pauli Exclusion Principle**: No two electrons in an atom can have the same four quantum numbers. Thus, an orbital holds a maximum of 2 electrons with opposite spins.
- **Hund's Rule**: Degenerate orbitals are singly occupied with parallel spins before they are doubly occupied.
