# 1. The Root-Finding Problem

In engineering, a vast number of problems reduce to finding where a function equals zero: finding the operating point of a circuit, the equilibrium state of a chemical reaction, the critical load of a structure, the natural frequency of a vibrating system, or the zero-crossing of a nonlinear impedance curve.

### Definition
Given a continuous function $f: \mathbb{R} \to \mathbb{R}$, find $x^*$ such that:
$$f(x^*) = 0$$

$x^*$ is called a **root** or **zero** of $f$.

Equivalently, any equation $g(x) = h(x)$ can be rewritten as $f(x) = g(x) - h(x) = 0$, so root-finding is universal.

### The Intermediate Value Theorem (IVT)
If $f$ is continuous on $[a, b]$ and $f(a)$ and $f(b)$ have opposite signs (one positive, one negative), then there exists at least one root in the interval $(a, b)$.

$$f(a) \cdot f(b) < 0 \implies \exists \, x^* \in (a, b) : f(x^*) = 0$$

The IVT is the theoretical foundation for **bracketing methods** — algorithms that maintain an interval $[a, b]$ known to contain a root, then systematically shrink it.

### Types of Roots
*   **Simple root:** $f(x^*) = 0$ and $f'(x^*) \neq 0$. The function crosses zero with a nonzero slope. All standard algorithms converge well.
*   **Multiple root of order $m$:** $f(x^*) = f'(x^*) = \dots = f^{(m-1)}(x^*) = 0$ but $f^{(m)}(x^*) \neq 0$. The function touches zero without crossing (for even $m$) or crosses slowly (for odd $m$). Many algorithms lose convergence speed near multiple roots.

### Convergence Rate
The **order of convergence** $p$ of a root-finding algorithm is defined by:
$$|e_{k+1}| \le C |e_k|^p$$

Where $e_k = x_k - x^*$ is the error at iteration $k$ and $C$ is a constant.
*   $p = 1$: **linear convergence** — each iteration adds roughly one correct digit (slow).
*   $p = 2$: **quadratic convergence** — each iteration roughly doubles the number of correct digits (fast).
*   $p = 1.618$: **superlinear convergence** — intermediate, characteristic of the Secant method.
