# Engineering Mathematics I: Calculus and Linear Algebra

## 1. Differential Calculus
Limits, continuity, and derivatives form the foundation of differential calculus.

### 1.1 Taylor Series Expansion
A function $f(x)$ can be expanded around $x=a$ as:
$$ f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots $$

**Solved Example 1.1: Maclaurin Series**
Find the first four non-zero terms of the Maclaurin series (Taylor series at $a=0$) for $f(x) = \sin(x)$.

*Solution:*
1. Compute derivatives and evaluate at $x=0$:
   - $f(x) = \sin(x) \implies f(0) = 0$
   - $f'(x) = \cos(x) \implies f'(0) = 1$
   - $f''(x) = -\sin(x) \implies f''(0) = 0$
   - $f'''(x) = -\cos(x) \implies f'''(0) = -1$
   - $f^{(4)}(x) = \sin(x) \implies f^{(4)}(0) = 0$
   - $f^{(5)}(x) = \cos(x) \implies f^{(5)}(0) = 1$
2. Substitute into Taylor expansion:
   $$ \sin(x) = 0 + 1 \cdot x + 0 \cdot x^2 + \frac{-1}{3!}x^3 + 0 \cdot x^4 + \frac{1}{5!}x^5 + \dots $$
   $$ \sin(x) \approx x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} $$

## 2. Integral Calculus
Integration evaluates areas, volumes, and accumulates quantities.

### 2.1 Integration by Parts
Derived from the product rule:
$$ \int u \, dv = uv - \int v \, du $$

**Solved Example 2.1: Integration by Parts**
Evaluate the indefinite integral $I = \int x e^{2x} \, dx$.

*Solution:*
1. Choose $u$ and $dv$: Let $u = x$ and $dv = e^{2x} dx$.
2. Compute $du$ and $v$:
   $du = dx$
   $v = \frac{1}{2}e^{2x}$
3. Apply formula:
   $$ \int x e^{2x} \, dx = x \left(\frac{1}{2}e^{2x}\right) - \int \left(\frac{1}{2}e^{2x}\right) dx $$
   $$ = \frac{1}{2}x e^{2x} - \frac{1}{4}e^{2x} + C $$

## 3. Linear Algebra
Vectors, matrices, and linear transformations.

### 3.1 Eigenvalues and Eigenvectors
For a square matrix $A$, a scalar $\lambda$ is an eigenvalue and a non-zero vector $\mathbf{v}$ is an eigenvector if:
$$ A\mathbf{v} = \lambda \mathbf{v} \implies (A - \lambda I)\mathbf{v} = 0 $$
To find eigenvalues, we solve the characteristic equation:
$$ \det(A - \lambda I) = 0 $$

**Solved Example 3.1: Finding Eigenvalues**
Find the eigenvalues of matrix $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

*Solution:*
1. Set up $A - \lambda I$:
   $$ A - \lambda I = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} $$
2. Calculate the determinant:
   $$ \det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2) = 0 $$
   $$ (12 - 4\lambda - 3\lambda + \lambda^2) - 2 = 0 $$
   $$ \lambda^2 - 7\lambda + 10 = 0 $$
3. Solve the quadratic equation:
   $$ (\lambda - 5)(\lambda - 2) = 0 $$
   The eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.
