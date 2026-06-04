# 4. Newton's Divided Differences

To fix the computational inefficiency of Lagrange polynomials, the **Newton form** builds the exact same unique polynomial iteratively. If a new data point is added, the Newton form merely adds one new term without changing the existing terms.

### The Newton Form
The polynomial is written as a sequence of nested terms:
$$P_n(x) = c_0 + c_1(x - x_0) + c_2(x - x_0)(x - x_1) + \dots + c_n(x - x_0)\dots(x - x_{n-1})$$

The coefficients $c_k$ are the **divided differences** of the data.

### Divided Differences Definition
The divided difference depends only on the $y$-values and $x$-values of the nodes.
*   **0th order:** $f[x_i] = y_i$
*   **1st order:** $f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i} = \frac{y_{i+1} - y_i}{x_{i+1} - x_i}$
*   **2nd order:** $f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}$
*   **$k$-th order recursive definition:**
$$f[x_i, \dots, x_{i+k}] = \frac{f[x_{i+1}, \dots, x_{i+k}] - f[x_i, \dots, x_{i+k-1}]}{x_{i+k} - x_i}$$

The coefficients for Newton's polynomial are simply the top row of the divided difference table: $c_k = f[x_0, x_1, \dots, x_k]$.

### The Divided Difference Table
Constructing the coefficients is done efficiently via a table:

| $x$ | $f[\cdot]$ | $f[\cdot, \cdot]$ | $f[\cdot, \cdot, \cdot]$ |
|---|---|---|---|
| $x_0$ | **$y_0$** | | |
| | | **$f[x_0, x_1]$** | |
| $x_1$ | $y_1$ | | **$f[x_0, x_1, x_2]$** |
| | | $f[x_1, x_2]$ | |
| $x_2$ | $y_2$ | | |

The bold top diagonal gives the coefficients $c_0, c_1, c_2$.

### Worked Example
Given points: $(1, 2), (2, 3), (4, 11)$.

| $x_i$ | $f[x_i]$ | 1st Order | 2nd Order |
|---|---|---|---|
| 1 | **2** | | |
| | | $\frac{3-2}{2-1} = \mathbf{1}$ | |
| 2 | 3 | | $\frac{4-1}{4-1} = \mathbf{1}$ |
| | | $\frac{11-3}{4-2} = 4$ | |
| 4 | 11 | | |

Coefficients: $c_0=2$, $c_1=1$, $c_2=1$.
Newton's polynomial: $P_2(x) = 2 + 1(x - 1) + 1(x - 1)(x - 2) = x^2 - 2x + 3$.

### Nested Evaluation (Horner's Scheme)
To evaluate the Newton polynomial efficiently at a specific point $x^*$, factor out the terms from right to left:
$$P_n(x) = c_0 + (x-x_0)[c_1 + (x-x_1)[c_2 + \dots + (x-x_{n-1})c_n]\dots]$$

This requires only $O(n)$ operations, making the Newton form vastly superior to Lagrange for actual computation.
