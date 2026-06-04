# 12. Concept Drills

Test your mastery of Systems of Linear Ordinary Differential Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A 3rd-order linear ordinary differential equation (containing a $y'''$ term) is to be modeled in software. If converted to a system of first-order equations, what size will the resulting coefficient matrix $\mathbf{A}$ be?
Options:
A) 1x3
B) 2x2
C) 3x3
D) 4x4
Answer: C
Explanation: Any $n$-th order linear ODE can be converted into a system of exactly $n$ first-order equations by defining $n$ dummy variables representing the lower-level derivatives. Thus, a 3rd-order ODE translates to a 3x3 coefficient matrix.
```

```drill
Question: You calculate the eigenvalues for a 2x2 homogeneous linear system and find $\lambda = 2 \pm 5i$. What will the phase portrait of this system look like, and is the origin stable?
Options:
A) It will form stable ellipses (a Center).
B) It will form a Saddle Point, which is unstable.
C) It will form a Stable Spiral, spiraling inwards to the origin.
D) It will form an Unstable Spiral, spiraling outwards from the origin.
Answer: D
Explanation: Complex eigenvalues indicate oscillatory behavior (circular/spiral). The stability is dictated by the real part $\alpha$. Since $\alpha = +2$ is positive, the exponential envelope $e^{2t}$ grows to infinity, creating an unstable outward spiral.
```

```drill
Question: When solving $\mathbf{X}' = \mathbf{A}\mathbf{X}$, you find a repeated eigenvalue $\lambda = -4$. However, substituting $\lambda=-4$ back into $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$ yields only one linearly independent eigenvector $\mathbf{v_1}$. What must you do to construct the second solution $\mathbf{X_2}$?
Options:
A) The second solution does not exist; the system cannot be solved.
B) Multiply the first solution by $t$: $\mathbf{X_2} = \mathbf{v_1} t e^{-4t}$.
C) Find a generalized eigenvector $\mathbf{v_2}$ and form the solution $\mathbf{X_2} = (\mathbf{v_1} t + \mathbf{v_2}) e^{-4t}$.
D) Calculate the matrix exponential $e^{\mathbf{A}t}$.
Answer: C
Explanation: For a defective matrix (repeated eigenvalue, but lacking enough eigenvectors), you must multiply the first solution by $t$, but you must also add a generalized eigenvector $\mathbf{v_2}$ to balance the differential system, solving $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v_2} = \mathbf{v_1}$.
```

```drill
Question: Why is the Matrix Exponential $e^{\mathbf{A}t}$ widely used in modern computational engineering to solve $\mathbf{X}' = \mathbf{A}\mathbf{X}$?
Options:
A) Because it instantly diagonalizes any defective matrix.
B) Because it mathematically eliminates the need to calculate eigenvalues and eigenvectors.
C) Because it turns non-linear systems into linear systems.
D) Because $e^{\mathbf{A}t}$ always evaluates to a single scalar number.
Answer: B
Explanation: The Matrix Exponential is defined by its Taylor series $\mathbf{I} + \mathbf{A}t + \frac{1}{2}\mathbf{A}^2t^2 \dots$. Because it relies purely on matrix multiplication and addition, computer algorithms can approximate the solution matrix highly efficiently without ever touching an eigenvalue problem.
```
