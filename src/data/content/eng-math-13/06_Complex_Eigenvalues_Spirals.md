# 6. Complex Eigenvalues

What happens if the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ has a negative discriminant, yielding complex eigenvalues $\lambda = \alpha \pm \beta i$?

As expected, a complex eigenvalue will produce a complex eigenvector $\mathbf{v} = \mathbf{a} + \mathbf{b}i$ (where $\mathbf{a}$ is the real vector part and $\mathbf{b}$ is the imaginary vector part).
Just like with single ODEs, the solution $\mathbf{X} = \mathbf{v} e^{(\alpha + \beta i)t}$ is mathematically correct but physically useless. We must use Euler's formula to separate it into purely real solutions.

### The Real General Solution
Fortunately, complex eigenvalues always come in conjugate pairs. You **only need to use one of them** (usually the positive one, $\lambda = \alpha + \beta i$) to find both parts of the general solution.

Once you find the complex eigenvector $\mathbf{v} = \mathbf{a} + \mathbf{b}i$, you multiply it by $e^{\alpha t}(\cos(\beta t) + i\sin(\beta t))$ and split the result into a real vector $\mathbf{X_1}$ and an imaginary vector $\mathbf{X_2}$.
The final real general solution is formed by combining these two vectors:

$$ \mathbf{X}(t) = C_1 \mathbf{X_1} + C_2 \mathbf{X_2} $$
where:
$$ \mathbf{X_1} = e^{\alpha t} (\mathbf{a}\cos(\beta t) - \mathbf{b}\sin(\beta t)) $$
$$ \mathbf{X_2} = e^{\alpha t} (\mathbf{a}\sin(\beta t) + \mathbf{b}\cos(\beta t)) $$

### Worked Example
**Problem:** Solve $\mathbf{X}' = \begin{bmatrix} 2 & -5 \\ 1 & -2 \end{bmatrix} \mathbf{X}$.

**Step 1: Find Eigenvalues**
$\det \begin{bmatrix} 2-\lambda & -5 \\ 1 & -2-\lambda \end{bmatrix} = (2-\lambda)(-2-\lambda) - (-5) = \lambda^2 - 4 + 5 = \lambda^2 + 1 = 0$.
The eigenvalues are $\lambda = \pm i$. So $\alpha = 0, \beta = 1$.

**Step 2: Find one Complex Eigenvector (use $+i$)**
Subtract $i$ from the main diagonal:
$\begin{bmatrix} 2-i & -5 \\ 1 & -2-i \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
Using the bottom row: $1x + (-2-i)y = 0 \implies x = (2+i)y$.
Let $y=1$, then $x=2+i$.
The complex eigenvector is $\mathbf{v} = \begin{bmatrix} 2+i \\ 1 \end{bmatrix}$.

**Step 3: Split into $\mathbf{a}$ and $\mathbf{b}$ vectors**
Separate the real and imaginary parts of $\mathbf{v}$:
$\mathbf{v} = \begin{bmatrix} 2 \\ 1 \end{bmatrix} + i \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
So $\mathbf{a} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$ and $\mathbf{b} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

**Step 4: Plug into the Formula**
Since $\alpha = 0$, $e^{0} = 1$. Since $\beta = 1$, we use $\cos(t)$ and $\sin(t)$.
$\mathbf{X_1} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}\cos(t) - \begin{bmatrix} 1 \\ 0 \end{bmatrix}\sin(t) = \begin{bmatrix} 2\cos t - \sin t \\ \cos t \end{bmatrix}$
$\mathbf{X_2} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}\sin(t) + \begin{bmatrix} 1 \\ 0 \end{bmatrix}\cos(t) = \begin{bmatrix} 2\sin t + \cos t \\ \sin t \end{bmatrix}$

**General Solution:**
$$ \mathbf{X}(t) = C_1 \begin{bmatrix} 2\cos t - \sin t \\ \cos t \end{bmatrix} + C_2 \begin{bmatrix} 2\sin t + \cos t \\ \sin t \end{bmatrix} $$
