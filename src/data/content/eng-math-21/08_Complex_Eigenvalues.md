# 8. Complex Eigenvalues

What happens when we calculate the Characteristic Equation $\det(A - \lambda I) = 0$ and the quadratic formula yields a negative number under the square root?

We get **Complex Eigenvalues**.
For example, a characteristic polynomial might yield $\lambda = a \pm bi$.

### The Geometric Meaning of Complex $\lambda$
Real eigenvalues ($\lambda = 3$) represent physical stretching or shrinking along a straight line.
Complex eigenvalues represent **Rotation**.

If a matrix transformation takes a vector and rotates it by 90 degrees, the vector gets knocked completely off its original line. There are no straight lines that survive the transformation. Therefore, there can be no real eigenvectors! The math correctly outputs complex numbers to indicate that a pure rotation is occurring.

### Rotation Matrices
The classic example of a matrix with complex eigenvalues is the standard 2D Rotation Matrix, which rotates space by an angle $\theta$:

$$
R = 
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$

If you solve $\det(R - \lambda I) = 0$, you get the characteristic equation:
$$
(\cos\theta - \lambda)^2 + \sin^2\theta = 0
$$
$$
\lambda^2 - 2\lambda\cos\theta + (\cos^2\theta + \sin^2\theta) = 0
$$
$$
\lambda^2 - 2\lambda\cos\theta + 1 = 0
$$

Using the quadratic formula, the eigenvalues are beautifully revealed to be Euler's formula:
$$
\lambda = \cos\theta \pm i\sin\theta = e^{\pm i\theta}
$$

### Complex Eigenvectors
Because the eigenvalues are complex numbers, when we plug them back into $(A - \lambda I)\mathbf{x} = \mathbf{0}$, the resulting eigenvectors will also contain imaginary numbers!

Just like complex roots in algebra, complex eigenvalues and eigenvectors always come in perfectly symmetrical **Conjugate Pairs**.
If $\lambda = a + bi$ has an eigenvector $\mathbf{v}$, then you automatically know for free that the sister eigenvalue $\overline{\lambda} = a - bi$ has the sister eigenvector $\overline{\mathbf{v}}$!

### Extracting the Real Rotation
While complex eigenvectors are mathematically correct, engineers prefer real numbers.
There is a specialized theorem that allows us to take the real and imaginary parts of a complex eigenvector and use them to build a real $2\times2$ matrix of the form:
$$
C = 
\begin{bmatrix}
a & -b \\
b & a
\end{bmatrix}
$$
This matrix acts exactly like a scalar multiplication combined with a pure 2D rotation! Complex eigenvalues are the mathematical signature of spinning, oscillating systems (like alternating current circuits and vibrating engine blocks).
