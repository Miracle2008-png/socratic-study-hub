# Laplace Transforms

Welcome to the comprehensive guide on **Laplace Transforms**. When engineers design control systems, analyze electrical circuits, or predict the behavior of dynamic mechanical systems, they constantly encounter complex differential equations. Solving these directly in the "time domain" ($t$) can be tedious and difficult.

The Laplace Transform is a mathematical magic trick: it converts differential equations in the time domain ($t$) into algebraic equations in the frequency domain ($s$). 

You can think of it like logarithms: before calculators, multiplying large numbers was hard, but taking the logarithm turned multiplication into simple addition. Similarly, the Laplace Transform turns calculus (derivatives and integrals) into simple algebra (multiplication and division). Once you solve the algebra, you take the "Inverse Laplace Transform" to return to the time domain.

---

## 1. The Definition of the Laplace Transform

For a function of time $f(t)$ defined for $t \ge 0$, the Laplace Transform $F(s)$ is defined by the improper integral:

$$ \mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) dt $$

Where $s$ is a complex frequency variable ($s = \sigma + j\omega$).

While you can compute transforms from scratch using this integral, engineers almost always rely on standard tables and properties, just as you would use a multiplication table instead of adding numbers repeatedly.

---

## 2. Standard Laplace Transform Pairs

You must memorize (or have ready access to) these fundamental building blocks. Here, $u(t)$ is the Heaviside step function (which simply means the function "turns on" at $t=0$).

1. **Unit Step (Constant):** $\mathcal{L}\{1\} = \frac{1}{s}$
2. **Exponential:** $\mathcal{L}\{e^{at}\} = \frac{1}{s - a}$
3. **Polynomial (Time):** $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$
4. **Sine Wave:** $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$
5. **Cosine Wave:** $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$

### Example 1: Basic Transform Lookup
**Problem:** Find the Laplace transform of $f(t) = 3e^{-2t} + 5\sin(4t)$.

**Step-by-Step Solution:**
The Laplace Transform is a *linear* operator. This means you can distribute it across addition and pull constants out to the front:
$$ \mathcal{L}\{3e^{-2t} + 5\sin(4t)\} = 3\mathcal{L}\{e^{-2t}\} + 5\mathcal{L}\{\sin(4t)\} $$

Using the table:
- For $e^{-2t}$, $a = -2$. The transform is $\frac{1}{s - (-2)} = \frac{1}{s + 2}$.
- For $\sin(4t)$, $\omega = 4$. The transform is $\frac{4}{s^2 + 4^2} = \frac{4}{s^2 + 16}$.

Substitute these back in:
$$ F(s) = 3\left(\frac{1}{s + 2}\right) + 5\left(\frac{4}{s^2 + 16}\right) $$
$$ F(s) = \frac{3}{s + 2} + \frac{20}{s^2 + 16} $$

---

## 3. The Derivative Property (The Core Magic)

The entire reason Laplace Transforms are useful is because of how they handle derivatives. Taking a derivative in the time domain is equivalent to multiplying by $s$ in the s-domain!

$$ \mathcal{L}\{f'(t)\} = sF(s) - f(0) $$
$$ \mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0) $$

Notice how the initial conditions ($f(0)$ and $f'(0)$) are automatically baked into the equation. This makes Laplace Transforms incredibly powerful for solving initial value problems.

---

## 4. Solving Differential Equations with Laplace

Let's look at the complete workflow for solving an ODE:
1. Take the Laplace transform of both sides of the ODE.
2. Substitute the initial conditions.
3. Solve the resulting algebraic equation for $Y(s)$.
4. Use Partial Fraction Decomposition to break $Y(s)$ into recognizable pieces.
5. Take the Inverse Laplace Transform to find $y(t)$.

### Example 2: Solving an Initial Value Problem
**Problem:** Solve the differential equation $y'' + 3y' + 2y = e^{-t}$ with initial conditions $y(0) = 1$ and $y'(0) = 0$.

**Step-by-Step Solution:**

**1. Transform the ODE:**
Take the Laplace transform of every term. Let $\mathcal{L}\{y(t)\} = Y(s)$.
$$ [s^2 Y(s) - s y(0) - y'(0)] + 3[s Y(s) - y(0)] + 2Y(s) = \frac{1}{s+1} $$

**2. Substitute initial conditions ($y(0)=1, y'(0)=0$):**
$$ [s^2 Y(s) - s(1) - 0] + 3[s Y(s) - 1] + 2Y(s) = \frac{1}{s+1} $$
$$ s^2 Y(s) - s + 3s Y(s) - 3 + 2Y(s) = \frac{1}{s+1} $$

**3. Solve algebraically for $Y(s)$:**
Group all the $Y(s)$ terms on the left, and move everything else to the right.
$$ Y(s)[s^2 + 3s + 2] - s - 3 = \frac{1}{s+1} $$
$$ Y(s)[s^2 + 3s + 2] = \frac{1}{s+1} + s + 3 $$

Notice that $s^2 + 3s + 2$ factors into $(s+1)(s+2)$.
$$ Y(s)(s+1)(s+2) = \frac{1}{s+1} + \frac{(s+3)(s+1)}{s+1} $$
$$ Y(s)(s+1)(s+2) = \frac{s^2 + 4s + 4}{s+1} $$

Divide by $(s+1)(s+2)$:
$$ Y(s) = \frac{s^2 + 4s + 4}{(s+1)^2(s+2)} $$

**4. Partial Fraction Decomposition:**
We need to break this complex fraction into simple pieces we can recognize from the table. The denominator has a repeated linear root $(s+1)^2$ and a distinct linear root $(s+2)$. The setup is:
$$ \frac{s^2 + 4s + 4}{(s+1)^2(s+2)} = \frac{A}{s+1} + \frac{B}{(s+1)^2} + \frac{C}{s+2} $$

Multiply both sides by $(s+1)^2(s+2)$:
$$ s^2 + 4s + 4 = A(s+1)(s+2) + B(s+2) + C(s+1)^2 $$

*To find $B$, set $s = -1$:*
$$ (-1)^2 + 4(-1) + 4 = B(-1+2) $$
$$ 1 - 4 + 4 = B(1) \implies B = 1 $$

*To find $C$, set $s = -2$:*
$$ (-2)^2 + 4(-2) + 4 = C(-2+1)^2 $$
$$ 4 - 8 + 4 = C(1) \implies C = 0 $$

*To find $A$, pick any convenient value for $s$, e.g., $s = 0$:*
$$ 4 = A(1)(2) + B(2) + C(1) $$
$$ 4 = 2A + 2(1) + 0 $$
$$ 4 = 2A + 2 \implies 2A = 2 \implies A = 1 $$

So, we have successfully decomposed the function:
$$ Y(s) = \frac{1}{s+1} + \frac{1}{(s+1)^2} $$

**5. Inverse Laplace Transform:**
Now we convert back to the time domain by looking at our table:
- $\mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = e^{-t}$
- $\mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2}\right\}$ requires the First Shifting Theorem ($\mathcal{L}\{t e^{at}\} = \frac{1}{(s-a)^2}$). Here $a = -1$, so this is $t e^{-t}$.

**Final Answer:**
$$ y(t) = e^{-t} + t e^{-t} $$

You have successfully solved a complex differential equation entirely using algebra!
