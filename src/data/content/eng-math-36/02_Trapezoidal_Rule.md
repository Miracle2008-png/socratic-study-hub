# 2. The Trapezoidal Rule

The **Trapezoidal Rule** is the simplest useful numerical integration method. It approximates the area under the curve $f(x)$ as a trapezoid formed by connecting the endpoints $(a, f(a))$ and $(b, f(b))$ with a straight line.

### The Single-Panel Trapezoidal Rule
By integrating the linear interpolation polynomial between $a$ and $b$:
$$\int_a^b f(x) \, dx \approx (b - a) \frac{f(a) + f(b)}{2}$$

This is simply the width $(b-a)$ multiplied by the average height.

**Error of the single panel:**
$$E_T = -\frac{(b-a)^3}{12} f''(\xi), \quad \text{for some } \xi \in [a, b]$$
The error depends heavily on the second derivative (the curvature). If $f(x)$ is a straight line ($f''=0$), the error is zero. If $f(x)$ curves sharply, a single straight line is a poor approximation.

### The Composite Trapezoidal Rule
To reduce the error, we divide the interval $[a, b]$ into $n$ equal sub-intervals (panels) of width $h$:
$$h = \frac{b - a}{n}$$

The nodes are $x_0 = a, x_1 = a+h, \dots, x_n = b$.

Applying the single-panel rule to each sub-interval and summing the results:
$$\int_a^b f(x) \, dx \approx \frac{h}{2} [f(x_0) + f(x_1)] + \frac{h}{2} [f(x_1) + f(x_2)] + \dots + \frac{h}{2} [f(x_{n-1}) + f(x_n)]$$

Notice that every interior point $f(x_i)$ is counted twice (once for the panel on its left, once for the panel on its right), while the endpoints are counted only once.

**Composite Formula:**
$$\int_a^b f(x) \, dx \approx \frac{h}{2} \left[ f(a) + 2\sum_{i=1}^{n-1} f(x_i) + f(b) \right]$$

### Error Analysis of the Composite Rule
The total error is the sum of the errors of the individual panels:
$$E_n = -\frac{b-a}{12} h^2 f''(\mu), \quad \text{for some } \mu \in [a, b]$$

**Key Insight:** The error is proportional to $h^2$. The Trapezoidal Rule is a **second-order** method. 
*   If you double the number of panels ($n \to 2n$, so $h \to h/2$), the error is reduced by a factor of $1/4$.
*   If you increase panels by 10x, error drops by 100x.

### Worked Example
Approximate $\int_0^2 x^2 \, dx$ using $n=4$ panels.
Exact answer: $[x^3/3]_0^2 = 8/3 \approx 2.6667$.

$h = (2-0)/4 = 0.5$. Nodes: $0, 0.5, 1.0, 1.5, 2.0$.
Values: $f(0)=0, f(0.5)=0.25, f(1)=1, f(1.5)=2.25, f(2)=4$.

$$\text{Integral} \approx \frac{0.5}{2} \left[ 0 + 2(0.25 + 1 + 2.25) + 4 \right] = 0.25 [ 0 + 2(3.5) + 4 ] = 0.25 [ 11 ] = 2.75$$

Error = $|2.6667 - 2.75| = 0.0833$. The approximation slightly overestimates because $y=x^2$ curves upward (convex), meaning the straight trapezoid lines always lie above the curve.
