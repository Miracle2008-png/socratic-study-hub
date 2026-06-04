# 4. Linearity & The First Shifting Theorem

The true power of the Laplace Transform table comes from combining basic transforms using operational properties.

### 1. The Linearity Property
Because the Laplace Transform is defined by an integral, and integration is a linear operation, the Laplace Transform is completely linear.
Constants pull out, and addition separates perfectly.
$$ \mathcal{L}\{\alpha f(t) + \beta g(t)\} = \alpha \mathcal{L}\{f(t)\} + \beta \mathcal{L}\{g(t)\} $$

**Worked Example:** Find $\mathcal{L}\{4t^2 - 3\cos(2t) + 5e^{-t}\}$.
Using linearity, we break it into pieces and use our table:
$$ = 4\mathcal{L}\{t^2\} - 3\mathcal{L}\{\cos(2t)\} + 5\mathcal{L}\{e^{-t}\} $$
$$ = 4\left(\frac{2}{s^3}\right) - 3\left(\frac{s}{s^2 + 4}\right) + 5\left(\frac{1}{s - (-1)}\right) $$
$$ F(s) = \frac{8}{s^3} - \frac{3s}{s^2 + 4} + \frac{5}{s + 1} $$

### 2. The First Translation (Shifting) Theorem
What happens if you multiply a function by an exponential, like $e^{at} \cos(kt)$? 
We know this represents a damped or growing oscillation. In the $s$-domain, multiplying by an exponential in the time domain results in a **shift** in the $s$-domain.

**The Theorem:** If $\mathcal{L}\{f(t)\} = F(s)$, then:
$$ \mathcal{L}\{e^{at} f(t)\} = F(s - a) $$

To apply this theorem, you simply ignore the $e^{at}$, take the standard Laplace transform of the remaining function $f(t)$, and then wherever you see an "$s$" in your answer, replace it entirely with "$(s - a)$".

**Worked Example:** Find $\mathcal{L}\{e^{3t} \sin(4t)\}$.
1.  Identify $a = 3$ and $f(t) = \sin(4t)$.
2.  Find the transform of $f(t)$ alone: $F(s) = \frac{4}{s^2 + 16}$.
3.  Apply the shift: Replace every $s$ with $(s - 3)$.
$$ \mathcal{L}\{e^{3t} \sin(4t)\} = \frac{4}{(s - 3)^2 + 16} $$

This theorem allows you to instantly transform complex, real-world damped vibration signals without ever doing an integral!
