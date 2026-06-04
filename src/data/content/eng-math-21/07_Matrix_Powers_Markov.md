# 7. Matrix Powers and Markov Chains

Matrix multiplication is computationally expensive ($O(n^3)$).
Imagine a data scientist tracking the daily probability of millions of users clicking a link. This is modeled using a Transition Matrix $A$. To predict what the users will do in 30 days, the scientist must calculate $A^{30}$.
To predict what the users will do in a year, they must calculate $A^{365}$.

Multiplying a million-by-million matrix by itself 365 times would crash a server farm.

### The Diagonalization Shortcut
This is where Diagonalization ($A = PDP^{-1}$) unleashes its true power. Let's look at what happens when we square a diagonalizable matrix:

$$
A^2 = (P D P^{-1})(P D P^{-1})
$$

Look at the two matrices in the exact middle: $P^{-1} P$.
Any matrix multiplied by its own inverse instantly annihilates into the Identity Matrix ($I$)! The $I$ disappears, leaving:

$$
A^2 = P D (I) D P^{-1}
$$
$$
A^2 = P D^2 P^{-1}
$$

This cascading cancellation happens for any power $k$:
$$
A^k = P D^k P^{-1}
$$

### Why is this so fast?
Look at the term $D^k$. $D$ is a purely diagonal matrix. 
To raise a diagonal matrix to the 365th power, you DO NOT have to do complex matrix multiplication. You literally just raise the individual numbers on the diagonal to the 365th power!

$$
D^{365} = 
\begin{bmatrix}
\lambda_1^{365} & 0 & 0 \\
0 & \lambda_2^{365} & 0 \\
0 & 0 & \lambda_3^{365}
\end{bmatrix}
$$

Instead of performing billions of operations, the computer only performs 3 scalar exponents and two standard matrix multiplications ($P \times D \times P^{-1}$). This algorithm reduces calculation times from weeks down to milliseconds.

### Markov Chains and the Steady State
In systems where probabilities shift over time (Markov Chains), the transition matrix $A$ often has a dominant eigenvalue of exactly $\lambda = 1$, and all other eigenvalues are fractions (e.g., $\lambda = 0.5$).

When we calculate $A^{\infty}$ to see the final, eternal outcome of the system:
*   $1^\infty = 1$ (The dominant state survives).
*   $0.5^\infty \approx 0$ (The fractional states decay to zero and vanish).

The final, permanent state of the system perfectly aligns with the Eigenvector associated with the $\lambda = 1$ eigenvalue! This is called the **Steady-State Vector**.
