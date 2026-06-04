# 6. The Method of Frobenius

To solve an ODE at a **Regular Singular Point** (usually $x=0$), the standard power series $\sum c_n x^n$ fails because the solution might contain a fractional power (like $\sqrt{x}$) or a negative power (like $1/x$) that cannot be represented by integer polynomials.

Frobenius solved this by proposing a modified guess. We take the standard power series and multiply the entire thing by $x^r$, where $r$ is an unknown constant that can be any real or complex number.

### The Frobenius Series
$$ y(x) = x^r \sum_{n=0}^{\infty} c_n x^n = \sum_{n=0}^{\infty} c_n x^{n+r} $$

By assuming $c_0 \neq 0$, the very first term of this series is $c_0 x^r$. This single $x^r$ term absorbs the "singularity" of the equation. 

### The Derivatives
To use the Method of Frobenius, we take derivatives just like before, but using the $(n+r)$ exponent:
$$ y' = \sum_{n=0}^{\infty} (n+r) c_n x^{n+r-1} $$
$$ y'' = \sum_{n=0}^{\infty} (n+r)(n+r-1) c_n x^{n+r-2} $$

*(Notice that unlike standard series, these sums DO NOT start at $n=1$ or $n=2$. Because $r$ is an unknown fraction, the derivative of $x^r$ is never zero! The sums always start at $n=0$).*

### The Indicial Equation
When you plug the Frobenius series into the differential equation, shift the indices, and group the lowest power of $x$, you will find that the coefficient for that lowest power contains a quadratic equation purely in terms of $r$.

Because $c_0 \neq 0$, this quadratic equation must equal zero. This is called the **Indicial Equation**.
Solving the indicial equation gives two roots: $r_1$ and $r_2$. 

The types of roots you get ($r_1, r_2$) strictly dictate how you construct the two linearly independent solutions to the ODE. There are three cases, detailed on the next three pages.
