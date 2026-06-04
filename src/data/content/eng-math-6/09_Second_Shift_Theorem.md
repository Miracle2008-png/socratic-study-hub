# 9. The Second Shift Theorem (Time Delay)

In Section 3, we learned the First Shift Theorem: shifting the frequency ($s-a$) corresponds to multiplying by an exponential in the time domain ($e^{at}$).

The **Second Shift Theorem** is the exact opposite. A delay in the time domain corresponds to multiplying by an exponential in the frequency domain.

### The Theorem
If a function $f(t)$ is delayed by $a$ seconds, it is written as $f(t-a)$. 
To ensure the function is completely silent during those delay seconds, we multiply it by the shifted step function $u(t-a)$.

The transform of this entire delayed package is:
$$ \mathcal{L}\{f(t-a) \cdot u(t-a)\} = e^{-as} F(s) $$

*(Where $F(s)$ is the normal transform of the un-shifted $f(t)$).*

### Worked Example: Forward Transform
**Problem:** Find the transform of $g(t) = (t-2)^3 \cdot u(t-2)$.

**Solution:**
1. Identify the delay: $a = 2$.
2. Identify the core function $f(t)$ without the shift. If we strip away the $-2$, the core function is $f(t) = t^3$.
3. Transform the core function: $F(s) = \frac{3!}{s^4} = \frac{6}{s^4}$.
4. Multiply by $e^{-as}$:
$$ \mathcal{L}\{(t-2)^3 u(t-2)\} = e^{-2s} \frac{6}{s^4} $$

### The Inverse Second Shift Theorem
When you are solving an ODE and you see an $e^{-as}$ term sitting in your frequency domain answer, you must use the Second Shift Theorem in reverse.

$$ \mathcal{L}^{-1}\{e^{-as} F(s)\} = f(t-a) \cdot u(t-a) $$

**The Algorithm:**
1. Ignore the $e^{-as}$ term for a moment.
2. Look at the remaining function $F(s)$ and find its inverse transform $f(t)$ using your standard table.
3. In that $f(t)$ function, physically erase every '$t$' and replace it with '$(t-a)$'.
4. Multiply the whole thing by $u(t-a)$.

**Worked Example:** Find $\mathcal{L}^{-1} \left\{ \frac{s}{s^2 + 16} e^{-\pi s} \right\}$.

1. Identify $a = \pi$.
2. Ignore $e^{-\pi s}$. The remaining function is $F(s) = \frac{s}{s^2 + 16}$.
3. Transform $F(s)$ to the time domain: $f(t) = \cos(4t)$.
4. Apply the shift. Erase $t$ and write $(t-\pi)$: $\cos(4(t-\pi))$.
5. Multiply by the step function:
$$ \cos(4(t-\pi)) \cdot u(t-\pi) $$
*(Using trig identities, $\cos(4t - 4\pi)$ is exactly the same as $\cos(4t)$, so you could simplify it, but the unsimplified version clearly shows the mechanics of the theorem).*
