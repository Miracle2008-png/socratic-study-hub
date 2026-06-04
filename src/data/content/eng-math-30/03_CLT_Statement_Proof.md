# 3. The Central Limit Theorem: Statement and Proof

### Formal Statement
Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables with mean $\mu$ and finite, non-zero variance $\sigma^2$.

Define the standardized sample mean:
$$Z_n = \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}}$$

Then for any real number $z$:
$$\lim_{n \to \infty} P(Z_n \le z) = \Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^z e^{-t^2/2} dt$$

Where $\Phi(z)$ is the Standard Normal CDF. The distribution of $Z_n$ converges to $N(0,1)$.

### The Proof via Moment Generating Functions
The MGF proof is the clearest path to the result.

**Step 1 — Standardize each $X_i$:**
Let $Y_i = (X_i - \mu)/\sigma$. Then $E[Y_i] = 0$ and $\text{Var}(Y_i) = 1$.
Express: $Z_n = \frac{1}{\sqrt{n}} \sum_{i=1}^n Y_i$.

**Step 2 — Write the MGF of $Z_n$:**
Because the $Y_i$ are i.i.d., the MGF of their sum factors into a product:
$$M_{Z_n}(t) = \left[M_Y\!\left(\frac{t}{\sqrt{n}}\right)\right]^n$$

**Step 3 — Expand the MGF of $Y$ as a Taylor series around $t = 0$:**
$$M_Y(s) = E[e^{sY}] = 1 + s \cdot E[Y] + \frac{s^2}{2} E[Y^2] + O(s^3)$$

Since $E[Y] = 0$ and $E[Y^2] = 1$ (variance of standardized variable):
$$M_Y(s) = 1 + \frac{s^2}{2} + O(s^3)$$

Substitute $s = t/\sqrt{n}$:
$$M_Y\!\left(\frac{t}{\sqrt{n}}\right) = 1 + \frac{t^2}{2n} + O\!\left(n^{-3/2}\right)$$

**Step 4 — Raise to the $n$-th power and take the limit:**
$$M_{Z_n}(t) = \left[1 + \frac{t^2}{2n} + O\!\left(n^{-3/2}\right)\right]^n$$

Using the fundamental limit $\lim_{n \to \infty}(1 + a/n)^n = e^a$:
$$\lim_{n \to \infty} M_{Z_n}(t) = e^{t^2/2}$$

**Step 5 — Identify the limit:**
$e^{t^2/2}$ is exactly the MGF of the Standard Normal $N(0,1)$.

By the Uniqueness Theorem of MGFs, convergence of MGFs implies convergence of distributions.

$$\therefore \quad Z_n \xrightarrow{\text{dist}} N(0,1) \qquad \blacksquare$$
