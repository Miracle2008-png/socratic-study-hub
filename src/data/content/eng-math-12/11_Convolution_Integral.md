# 11. The Convolution Integral

Suppose you solve an ODE in the $s$-domain and your answer is $Y(s) = F(s)G(s)$. 
It is incredibly tempting to just find the inverse transforms $f(t)$ and $g(t)$ separately and multiply them together: $y(t) = f(t)g(t)$. 

**THIS IS COMPLETELY ILLEGAL AND MATHEMATICALLY WRONG.**
Just as the derivative of a product is not the product of the derivatives (you need the Product Rule), the inverse transform of a product is not the product of the inverses.

If you multiply two functions in the $s$-domain, their counterpart in the time domain is an operation known as **Convolution**, denoted by a star ($*$):
$$ \mathcal{L}^{-1}\{F(s)G(s)\} = f(t) * g(t) $$

### The Definition of Convolution
The convolution of two functions $f$ and $g$ is defined by a specific, moving integral:
$$ (f * g)(t) = \int_{0}^{t} f(\tau) g(t - \tau) \, d\tau $$
*(where $\tau$ is just a dummy variable for integration).*

This integral describes how one function overlaps, slides across, and blends with another function over time. Convolution is commutative, meaning $f * g = g * f$.

### Why is this useful?
Convolution allows you to find the inverse transform of complex products without ever using Partial Fractions!

**Worked Example:** Find $\mathcal{L}^{-1}\left\{\frac{1}{(s^2+1)^2}\right\}$.
Using partial fractions on this would be a nightmare (it's a repeated irreducible quadratic). Instead, let's use Convolution.

**Step 1: Split the product**
$$ Y(s) = \left(\frac{1}{s^2+1}\right) \cdot \left(\frac{1}{s^2+1}\right) = F(s) \cdot G(s) $$

**Step 2: Find the separate inverse transforms**
$f(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin(t)$
$g(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin(t)$

**Step 3: Set up the Convolution Integral**
$y(t) = \sin(t) * \sin(t) = \int_{0}^{t} \sin(\tau) \sin(t - \tau) \, d\tau$

**Step 4: Evaluate the Integral**
Use the trigonometric identity: $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$.
Let $A = \tau$ and $B = t - \tau$.
$A-B = 2\tau - t$.
$A+B = t$.
$$ = \frac{1}{2} \int_{0}^{t} [\cos(2\tau - t) - \cos(t)] d\tau $$
Integrate with respect to $\tau$ (treating $t$ as a constant):
$$ = \frac{1}{2} \left[ \frac{1}{2}\sin(2\tau - t) - \tau\cos(t) \right]_{0}^{t} $$
Evaluate at upper bound $\tau=t$: $\frac{1}{2}\sin(t) - t\cos(t)$.
Evaluate at lower bound $\tau=0$: $\frac{1}{2}\sin(-t) - 0 = -\frac{1}{2}\sin(t)$.
Subtract the bounds:
$$ \frac{1}{2} \left[ \left(\frac{1}{2}\sin(t) - t\cos(t)\right) - \left(-\frac{1}{2}\sin(t)\right) \right] $$
$$ = \frac{1}{2} [\sin(t) - t\cos(t)] $$

We found the complex inverse transform without a single partial fraction.
