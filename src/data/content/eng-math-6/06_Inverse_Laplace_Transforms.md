# 6. The Inverse Laplace Transform

Once we have successfully solved for $Y(s)$ using algebra, we must translate the equation back into the time domain to see how the system physically behaves over time. This process is called the **Inverse Laplace Transform**, denoted as $\mathcal{L}^{-1}\{F(s)\}$.

Just as the forward transform is linear, the inverse transform is also linear. You can pull out constants and split up addition/subtraction.
$$ \mathcal{L}^{-1}\{aF(s) + bG(s)\} = a\mathcal{L}^{-1}\{F(s)\} + b\mathcal{L}^{-1}\{G(s)\} $$

### Using the Table in Reverse
To find an inverse transform, you do not compute an integral. Instead, you use algebraic manipulation to make your $F(s)$ function look exactly like one of the entries in the right-hand column of your Transform Table, and then simply read across to the left-hand column.

| s-Domain $F(s)$ | Time Domain $f(t)$ |
| :--- | :--- |
| $\frac{1}{s}$ | $1$ |
| $\frac{n!}{s^{n+1}}$ | $t^n$ |
| $\frac{1}{s - a}$ | $e^{at}$ |
| $\frac{k}{s^2 + k^2}$ | $\sin(kt)$ |
| $\frac{s}{s^2 + k^2}$ | $\cos(kt)$ |

### Worked Example 1: Direct Table Lookup
**Problem:** Find $\mathcal{L}^{-1}\left\{ \frac{1}{s-5} \right\}$.

**Solution:**
Looking at the table, this matches the form $\frac{1}{s-a}$ where $a = 5$.
Therefore, $f(t) = e^{5t}$.

### Worked Example 2: Adjusting Constants
Often, the numerator does not perfectly match the table. You must fix it by multiplying and dividing by a constant.

**Problem:** Find $\mathcal{L}^{-1}\left\{ \frac{1}{s^2 + 9} \right\}$.

**Solution:**
The denominator is $s^2 + 3^2$, which looks like the Sine transform ($\frac{k}{s^2 + k^2}$).
However, the Sine transform requires $k$ to be in the numerator. Our $k$ is 3, but the numerator is 1.
We fix this by multiplying the inside by 3, and the outside by $\frac{1}{3}$:
$$ \mathcal{L}^{-1}\left\{ \frac{1}{s^2 + 9} \right\} = \frac{1}{3} \mathcal{L}^{-1}\left\{ \frac{3}{s^2 + 3^2} \right\} $$
Now the inside perfectly matches the table.
$$ f(t) = \frac{1}{3} \sin(3t) $$

### Worked Example 3: Completing the Square
If you have a quadratic denominator that does not factor cleanly, like $s^2 + 4s + 13$, you must Complete the Square to force it into the First Shift Theorem form $(s-a)^2 + k^2$.

**Problem:** Find $\mathcal{L}^{-1}\left\{ \frac{1}{s^2 + 4s + 13} \right\}$.

**Solution:**
1. Complete the square on the bottom: $(s^2 + 4s + 4) + 9 = (s+2)^2 + 3^2$.
2. Rewrite the transform: $\mathcal{L}^{-1}\left\{ \frac{1}{(s+2)^2 + 3^2} \right\}$.
3. Notice this is the Sine transform ($\frac{1}{s^2+3^2}$) that has been shifted by $+2$.
4. According to the First Shift Theorem, an $(s+2)$ shift means we must multiply by $e^{-2t}$ in the time domain. We also need a 3 in the numerator for the sine.
$$ f(t) = \frac{1}{3} e^{-2t} \sin(3t) $$
