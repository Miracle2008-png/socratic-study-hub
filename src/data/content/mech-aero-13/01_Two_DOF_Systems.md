# Two-Degree-of-Freedom Systems

A single-degree-of-freedom (SDOF) system has one mass, one spring, one equation of motion, and one natural frequency. The moment a second mass is added, the system becomes fundamentally richer — and more complex.

A **two-DOF system** requires two generalized coordinates to fully describe its configuration, produces two coupled equations of motion, and has **two natural frequencies** with two associated **mode shapes**.

## 1. Example: Two Masses on Springs

Consider two masses $m_1$ and $m_2$ connected in series by springs $k_1$, $k_2$, $k_3$, with $x_1$ and $x_2$ measured from their static equilibrium positions.

Applying Newton's Second Law to each mass:
$$m_1 \ddot{x}_1 = -k_1 x_1 - k_2(x_1 - x_2) = -(k_1 + k_2)x_1 + k_2 x_2$$
$$m_2 \ddot{x}_2 = -k_2(x_2 - x_1) - k_3 x_2 = k_2 x_1 - (k_2 + k_3)x_2$$

## 2. Matrix Form of the Equations

These two equations are coupled — $x_1$ appears in the equation for $x_2$ and vice versa. The compact matrix representation is:

$$[M]\{\ddot{x}\} + [K]\{x\} = \{0\}$$

Where:
$$[M] = \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix}, \quad [K] = \begin{bmatrix} k_1+k_2 & -k_2 \\ -k_2 & k_2+k_3 \end{bmatrix}$$

$[M]$ is the **mass matrix** and $[K]$ is the **stiffness matrix**. For undamped free vibration, both are symmetric.

## 3. Solving for Natural Frequencies

Assume harmonic motion: $\{x\} = \{X\}e^{i\omega t}$. Substituting:
$$(-\omega^2[M] + [K])\{X\} = \{0\}$$

For a non-trivial solution $\{X\} \neq \{0\}$, the determinant must be zero:
$$\det([K] - \omega^2[M]) = 0$$

This is the **characteristic equation** — a polynomial of degree $2n$ (where $n$ = number of DOF). For a 2-DOF system it is a quadratic in $\omega^2$, yielding two roots: $\omega_1^2$ and $\omega_2^2$, giving two natural frequencies $\omega_1 < \omega_2$.

## 4. Mode Shapes

Substituting each natural frequency $\omega_i$ back into $([K] - \omega_i^2[M])\{X\} = \{0\}$ yields the corresponding **mode shape vector** $\{X\}^{(i)}$ — the relative amplitude pattern of the two masses at that frequency.

**Mode 1 (lower frequency):** Both masses move in the **same direction** (in-phase). The relative displacement between them is small.

**Mode 2 (higher frequency):** Masses move in **opposite directions** (out-of-phase). There is a node point between them where displacement is zero.

The complete free vibration response is a superposition of both modes:
$$\{x(t)\} = C_1\{X\}^{(1)}\cos(\omega_1 t + \phi_1) + C_2\{X\}^{(2)}\cos(\omega_2 t + \phi_2)$$

Constants $C_1, C_2, \phi_1, \phi_2$ are determined by four initial conditions ($x_1(0), x_2(0), \dot{x}_1(0), \dot{x}_2(0)$).
