# 3. The Power Series Method

Let's learn the strategy by solving a differential equation we already know how to solve: $y' - y = 0$.
*(We know the answer is $y = C e^x$).*

**Step 1: Assume a Series Solution**
Let $y = \sum_{n=0}^{\infty} c_n x^n$.
Then $y' = \sum_{n=1}^{\infty} n c_n x^{n-1}$.

**Step 2: Substitute into the ODE**
$$ \sum_{n=1}^{\infty} n c_n x^{n-1} - \sum_{n=0}^{\infty} c_n x^n = 0 $$

**Step 3: Shift Indices to Match Powers of $x$**
We need both sums to feature $x^n$. The second sum is already fine. We shift the first sum by letting $k = n-1$ (so $n = k+1$).
$$ \sum_{k=0}^{\infty} (k+1) c_{k+1} x^k - \sum_{n=0}^{\infty} c_n x^n = 0 $$
Rename $k$ back to $n$:
$$ \sum_{n=0}^{\infty} (n+1) c_{n+1} x^n - \sum_{n=0}^{\infty} c_n x^n = 0 $$

**Step 4: Combine into a Single Sum**
Because both sums now start at $n=0$ and contain $x^n$, we can factor them together!
$$ \sum_{n=0}^{\infty} [ (n+1) c_{n+1} - c_n ] x^n = 0 $$

**Step 5: The Identity Principle**
For this infinite polynomial to be exactly equal to zero for *all* values of $x$, every single coefficient in the brackets must independently equal zero.
$$ (n+1) c_{n+1} - c_n = 0 $$
This equation must hold true for all $n \ge 0$.

**Step 6: Create the Recurrence Relation**
Solve the bracketed equation for the highest-index coefficient ($c_{n+1}$):
$$ c_{n+1} = \frac{c_n}{n+1} $$
This is a **Recurrence Relation**. It tells you how to calculate the next coefficient based on the previous one. We will use this to generate the infinite series on the next page.
