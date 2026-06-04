# 2. Review of Power Series

Before we solve differential equations with power series, we must review the calculus of series. 

A power series centered at $x=a$ is defined as:
$$ \sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots $$
For simplicity, we almost always center our series at zero ($a=0$):
$$ y(x) = \sum_{n=0}^{\infty} c_n x^n $$

### Calculus of Series
Because a power series is just a giant polynomial, we can take its derivative term-by-term using the standard power rule!

**The Function:**
$$ y = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots = \sum_{n=0}^{\infty} c_n x^n $$

**The First Derivative:**
$$ y' = c_1 + 2c_2 x + 3c_3 x^2 + \dots = \sum_{n=1}^{\infty} n c_n x^{n-1} $$
*(Notice the sum now starts at $n=1$, because the derivative of the constant $c_0$ is zero!)*

**The Second Derivative:**
$$ y'' = 2c_2 + 6c_3 x + 12c_4 x^2 + \dots = \sum_{n=2}^{\infty} n(n-1) c_n x^{n-2} $$
*(Notice the sum now starts at $n=2$, because the derivative of the constant $c_1$ is zero!)*

### Shifting the Index
When we substitute these series into a differential equation, we will need to add them together. But you can only add two series if their powers of $x$ match exactly (e.g., both must be $x^k$). 

To make the powers match, we use an **Index Shift**.
Let's shift the first derivative series so it has an $x^n$ instead of $x^{n-1}$.
Original: $\sum_{n=1}^{\infty} n c_n x^{n-1}$
Define a new index $k = n - 1$. This means $n = k + 1$.
When $n = 1$, $k = 0$.
Substitute these into the series:
$$ \sum_{k=0}^{\infty} (k+1) c_{k+1} x^k $$

Since $k$ is just a dummy variable, we can rename it back to $n$:
$$ \sum_{n=0}^{\infty} (n+1) c_{n+1} x^n $$

This is the exact same mathematical sum, but written in a form that is compatible for addition! Mastering this index shifting is the most crucial skill for this unit.
