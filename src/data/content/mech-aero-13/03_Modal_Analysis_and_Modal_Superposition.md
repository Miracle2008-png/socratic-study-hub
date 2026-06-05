# Modal Analysis and Modal Superposition

The power of the eigenvalue solution — the natural frequencies and mode shapes — lies in what it enables: the **Modal Superposition Method**, which transforms a complex coupled multi-DOF system into a set of independent SDOF problems that can be solved trivially.

## 1. Modal Coordinate Transformation

The physical coordinates $\{x\}$ are related to the **modal coordinates** (also called principal coordinates or normal coordinates) $\{q\}$ by:
$$\{x\} = [\Phi]\{q\}$$

Each $q_i(t)$ represents how much the $i$-th mode shape contributes to the total response at time $t$.

## 2. Decoupling the Equations of Motion

Substituting $\{x\} = [\Phi]\{q\}$ into the full damped equation of motion $[M]\{\ddot{x}\} + [C]\{\dot{x}\} + [K]\{x\} = \{F(t)\}$ and pre-multiplying by $[\Phi]^T$:

$$[\Phi]^T[M][\Phi]\{\ddot{q}\} + [\Phi]^T[C][\Phi]\{\dot{q}\} + [\Phi]^T[K][\Phi]\{q\} = [\Phi]^T\{F(t)\}$$

Using orthogonality ($[\Phi]^T[M][\Phi] = [m_r]$ diagonal, $[\Phi]^T[K][\Phi] = [k_r]$ diagonal), and assuming **proportional damping** (where $[\Phi]^T[C][\Phi]$ is also diagonal with entries $c_{ri} = 2\zeta_i\omega_i m_{ri}$):

$$m_{ri}\ddot{q}_i + c_{ri}\dot{q}_i + k_{ri}q_i = F_{ri}(t), \quad i = 1, 2, \ldots, n$$

Where $F_{ri}(t) = \{X\}^{(i)T}\{F(t)\}$ is the **modal force** for the $i$-th mode.

**These are $n$ completely independent SDOF equations** — one for each mode. Each can be solved separately using the SDOF techniques from Topic 12.

## 3. The Complete Solution Process

1. **Compute** $[M]$ and $[K]$ matrices from the structural model.
2. **Solve** the eigenvalue problem to find $\omega_i$ and $\{X\}^{(i)}$ for all needed modes.
3. **Compute** modal coordinates $q_i(t)$ by solving each SDOF equation with modal force $F_{ri}(t)$.
4. **Recover** physical response: $\{x(t)\} = \sum_{i=1}^n \{X\}^{(i)} q_i(t)$.

## 4. Mode Truncation

In practice, only the first $m \ll n$ modes are computed and retained:
$$\{x(t)\} \approx \sum_{i=1}^m \{X\}^{(i)} q_i(t)$$

This **modal truncation** works because:
- High-frequency modes have very small static contributions (they are stiff).
- Physical forcing rarely has significant energy content at very high frequencies.
- 10–50 modes typically capture 95%+ of the dynamic response for structural problems.

**Modal superposition is the foundation of all commercial FEA dynamics software.** A structure with 500,000 DOF is reduced to 50 independent SDOF equations — a reduction of 10,000× in computational effort.
