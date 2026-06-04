# 8. The Second Shifting Theorem (Time Delay)

Recall the First Shifting Theorem: multiplying by an exponential in the *time domain* ($e^{at}$) creates a shift in the *s-domain* $(s-a)$. 

Because the Laplace Transform is beautifully symmetric, the reverse is also true! Multiplying by an exponential in the *s-domain* ($e^{-as}$) creates a shift in the *time domain* $(t-a)$.

A shift in the time domain is a **Time Delay**.

### The Second Shifting Theorem
If you have an expression in the $s$-domain that contains an exponential $e^{-as}$ multiplied by some function $F(s)$:
$$ \mathcal{L}^{-1}\{e^{-as} F(s)\} = f(t-a) \cdot u(t-a) $$
*(Where $f(t)$ is the inverse transform of $F(s)$ alone).*

**The Meaning:** The $e^{-as}$ tells you two things:
1.  Attach an "on switch" $u(t-a)$ so the function doesn't exist before time $a$.
2.  Delay the function itself by shifting it to the right: replace every '$t$' in $f(t)$ with '$(t-a)$'.

### Worked Example: Forward Transform
Sometimes we must transform a function that is already delayed. The forward version of the theorem is: $\mathcal{L}\{f(t-a) u(t-a)\} = e^{-as} F(s)$.
However, functions are rarely written perfectly shifted. Suppose we want to find $\mathcal{L}\{t^2 u(t-3)\}$.
We cannot use the theorem directly because it's $t^2$, not $(t-3)^2$. We must use an algebraic trick to force a $(t-3)$ to appear:
$$ t^2 = ((t-3) + 3)^2 = (t-3)^2 + 6(t-3) + 9 $$
Now we can transform it term by term! The $u(t-3)$ creates an $e^{-3s}$, and we transform $(t)^2$, $6(t)$, and $9$ normally.
$$ \mathcal{L}\{t^2 u(t-3)\} = e^{-3s} \left( \frac{2}{s^3} + \frac{6}{s^2} + \frac{9}{s} \right) $$

### Worked Example: Inverse Transform
Find the inverse Laplace transform of $Y(s) = \frac{e^{-2s}}{s^2 + 9}$.

**Step 1: Identify the pieces**
We have an $e^{-as}$ term, so we will use the Second Shifting Theorem.
$a = 2$.
The remaining function is $F(s) = \frac{1}{s^2 + 9}$.

**Step 2: Inverse transform $F(s)$**
To match the sine formula ($\frac{k}{s^2+k^2}$), we need a 3 on top. Multiply by 3/3.
$f(t) = \mathcal{L}^{-1}\left\{\frac{1}{3}\frac{3}{s^2+9}\right\} = \frac{1}{3}\sin(3t)$.

**Step 3: Apply the Shift**
Replace every $t$ in $f(t)$ with $(t-2)$, and multiply by $u(t-2)$.
$$ y(t) = \frac{1}{3}\sin(3(t-2)) \cdot u(t-2) $$

Physically, this represents a system that sits completely still at zero until exactly $t=2$, at which point it suddenly begins oscillating with a sine wave!
