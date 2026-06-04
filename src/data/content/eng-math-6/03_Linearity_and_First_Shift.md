# 3. Linearity and the First Shift Theorem

The Laplace Transform has specific algebraic properties that allow us to combine and modify the basic table entries to transform much more complex functions.

### 1. The Property of Linearity
Because the Laplace Transform is an integral, it inherits the properties of integrals. Specifically, it is a **Linear Operator**.

*   Constants can be pulled out: $\mathcal{L}\{c \cdot f(t)\} = c \cdot \mathcal{L}\{f(t)\}$
*   Addition/Subtraction splits: $\mathcal{L}\{f(t) + g(t)\} = \mathcal{L}\{f(t)\} + \mathcal{L}\{g(t)\}$

**Worked Example:** Transform $f(t) = 4t^2 - 3\sin(2t) + 5e^{-t}$
$$ \mathcal{L}\{f(t)\} = 4\mathcal{L}\{t^2\} - 3\mathcal{L}\{\sin(2t)\} + 5\mathcal{L}\{e^{-t}\} $$
Using the table:
$$ F(s) = 4\left(\frac{2!}{s^3}\right) - 3\left(\frac{2}{s^2 + 2^2}\right) + 5\left(\frac{1}{s - (-1)}\right) $$
$$ F(s) = \frac{8}{s^3} - \frac{6}{s^2 + 4} + \frac{5}{s + 1} $$

*(Note: The transform is NOT multiplicative. $\mathcal{L}\{f(t)g(t)\} \neq \mathcal{L}\{f(t)\}\mathcal{L}\{g(t)\}$. You cannot transform a product term-by-term!)*

---

### 2. The First Translation (Shift) Theorem
If you *do* have a product of two functions, you usually have to use integration by parts on the integral definition. However, there is a massive shortcut if one of those functions is an exponential $e^{at}$.

**The Theorem:** Multiplying a function by $e^{at}$ in the time domain simply shifts the variable $s$ by $a$ in the frequency domain.
$$ \mathcal{L}\{e^{at} f(t)\} = F(s - a) $$

**How to use it:**
1. Temporarily ignore the $e^{at}$ term.
2. Find the transform $F(s)$ of the remaining function $f(t)$.
3. Go through $F(s)$ and replace every single '$s$' with '$(s-a)$'.

**Worked Example:** Transform $f(t) = e^{3t} \cos(4t)$
1. Ignore $e^{3t}$. The remaining function is $\cos(4t)$.
2. Transform $\cos(4t) \implies \frac{s}{s^2 + 16}$.
3. Because of the $e^{3t}$ term, $a = 3$. We must shift every $s$ to $(s-3)$.
$$ F(s) = \frac{(s-3)}{(s-3)^2 + 16} $$

**Worked Example:** Transform $f(t) = 5t^2 e^{-2t}$
1. Ignore the exponential. The remaining function is $5t^2$.
2. Transform $5t^2 \implies 5\left(\frac{2}{s^3}\right) = \frac{10}{s^3}$.
3. Because of $e^{-2t}$, $a = -2$. Shift every $s$ to $(s - (-2))$, which is $(s+2)$.
$$ F(s) = \frac{10}{(s+2)^3} $$
