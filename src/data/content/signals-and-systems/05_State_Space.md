# State-Space Representation

## State Equations

$$\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t)$$
$$\mathbf{y}(t) = C\mathbf{x}(t) + D\mathbf{u}(t)$$

- $\mathbf{x}$: state vector ($n \times 1$)
- $\mathbf{u}$: input vector
- $\mathbf{y}$: output vector
- $A$: system matrix ($n \times n$), $B$: input matrix, $C$: output matrix, $D$: feedthrough

## Solution

$$\mathbf{x}(t) = e^{At}\mathbf{x}(0) + \int_0^t e^{A(t-\tau)}B\mathbf{u}(\tau)\,d\tau$$

**Matrix exponential**: $e^{At} = \mathcal{L}^{-1}\{(sI - A)^{-1}\}$

## Transfer Function from State Space

$$H(s) = C(sI - A)^{-1}B + D$$

Poles = eigenvalues of $A$.

## Stability

System is asymptotically stable iff all eigenvalues of $A$ have negative real parts.

## Controllability and Observability

**Controllability matrix**: $\mathcal{C} = [B \; AB \; A^2B \; \cdots \; A^{n-1}B]$

System is **controllable** iff $\text{rank}(\mathcal{C}) = n$.

**Observability matrix**: $\mathcal{O} = [C^T \; (CA)^T \; \cdots \; (CA^{n-1})^T]^T$

System is **observable** iff $\text{rank}(\mathcal{O}) = n$.

## Discrete-Time State Space

$$\mathbf{x}[n+1] = A_d\mathbf{x}[n] + B_d\mathbf{u}[n],\quad \mathbf{y}[n] = C\mathbf{x}[n] + D\mathbf{u}[n]$$

$A_d = e^{AT}$, $B_d = \int_0^T e^{A\tau}\,d\tau \cdot B$

Stability: eigenvalues of $A_d$ inside unit circle.