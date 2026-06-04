# 11. The Convolution Theorem

In Section 3, we explicitly stated that the Laplace Transform of a product is NOT the product of their transforms: $\mathcal{L}\{f(t)g(t)\} \neq F(s)G(s)$.

So, what *does* $F(s)G(s)$ represent in the time domain? 
If you multiply two transforms in the frequency domain, it corresponds to a complex integral operation in the time domain called **Convolution**.

### Definition of Convolution
The convolution of two functions $f$ and $g$ is denoted by an asterisk ($f * g$) and is defined by the integral:
$$ (f * g)(t) = \int_{0}^{t} f(\tau) g(t - \tau) d\tau $$

*(Note: $\tau$ (tau) is just a dummy integration variable that disappears once you evaluate the bounds 0 to $t$).*

### The Convolution Theorem
$$ \mathcal{L}\{(f * g)(t)\} = F(s)G(s) $$
$$ \mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) $$

### Why is this useful?
Sometimes, when you isolate $Y(s)$, you end up with a fraction that is too complicated or impossible to separate using Partial Fractions. If you can visually split it into two known transforms multiplied together, you can find the inverse by evaluating the convolution integral.

### Worked Example
**Problem:** Find $\mathcal{L}^{-1} \left\{ \frac{1}{(s^2 + 1)^2} \right\}$.

**Solution:**
Partial fractions won't help us here. However, notice that this fraction is simply two sine transforms multiplied together:
$$ F(s) = \frac{1}{s^2 + 1} \cdot \frac{1}{s^2 + 1} $$
Let $F_1(s) = \frac{1}{s^2 + 1} \implies f_1(t) = \sin(t)$.
Let $F_2(s) = \frac{1}{s^2 + 1} \implies f_2(t) = \sin(t)$.

By the Convolution Theorem, the inverse is:
$$ \mathcal{L}^{-1} \left\{ F_1(s)F_2(s) \right\} = (f_1 * f_2)(t) $$
$$ = \int_{0}^{t} \sin(\tau) \sin(t - \tau) d\tau $$

To evaluate this integral, we must use a trigonometric product-to-sum identity:
$\sin(A)\sin(B) = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$.

Let $A = \tau$ and $B = t - \tau$.
$A-B = \tau - (t-\tau) = 2\tau - t$.
$A+B = \tau + t - \tau = t$.

Substitute into the integral:
$$ \frac{1}{2} \int_{0}^{t} [\cos(2\tau - t) - \cos(t)] d\tau $$
Integrate with respect to $\tau$ (treating $t$ as a constant):
$$ \frac{1}{2} \left[ \frac{\sin(2\tau - t)}{2} - \tau\cos(t) \right]_{0}^{t} $$
Evaluate at $\tau = t$:
$$ \left( \frac{\sin(t)}{2} - t\cos(t) \right) $$
Subtract evaluation at $\tau = 0$:
$$ - \left( \frac{\sin(-t)}{2} - 0 \right) $$
Because sine is an odd function, $-\sin(-t) = +\sin(t)$:
$$ \frac{1}{2} \left( \frac{\sin(t)}{2} - t\cos(t) + \frac{\sin(t)}{2} \right) $$
Final answer:
$$ \frac{1}{2}(\sin(t) - t\cos(t)) $$
