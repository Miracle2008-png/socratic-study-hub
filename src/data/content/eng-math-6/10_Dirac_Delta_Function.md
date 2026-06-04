# 10. The Dirac Delta Function (Impulses)

Not all forces are continuous. What if a bridge is struck by a lightning bolt? What if a baseball is hit by a bat? 

In these cases, a massive amount of force is delivered in an infinitesimally small amount of time. We cannot model this with a standard sine wave or step function. We need the **Dirac Delta Function**, $\delta(t)$.

### Definition of $\delta(t)$
Paul Dirac defined a "function" (more accurately, a mathematical distribution) that is entirely zero everywhere, except at exactly $t=0$, where it spikes to infinity.

However, the area under that infinite spike is exactly 1.
$$ \int_{-\infty}^{\infty} \delta(t) dt = 1 $$

If the impulse happens at time $t=a$, we shift the function: $\delta(t-a)$.

### The Sifting Property
Because the delta function is zero everywhere except at $t=a$, if you multiply any function $f(t)$ by $\delta(t-a)$ and integrate it, the integral "sifts" out the single value of $f(t)$ precisely at $t=a$.
$$ \int_{0}^{\infty} f(t) \delta(t-a) dt = f(a) $$

### Laplace Transform of an Impulse
We can find the Laplace Transform of the Dirac Delta function by directly plugging it into the definition $\int e^{-st} f(t) dt$ and using the Sifting Property!

$$ \mathcal{L}\{\delta(t-a)\} = \int_{0}^{\infty} e^{-st} \delta(t-a) dt $$
The sifting property simply evaluates $e^{-st}$ at $t=a$:
$$ \mathcal{L}\{\delta(t-a)\} = e^{-as} $$

**The Magic of the Delta Transform:**
If the impulse happens right at $t=0$, then $a=0$.
$$ \mathcal{L}\{\delta(t)\} = e^0 = 1 $$

The Laplace transform of a lightning strike at $t=0$ is simply the number $1$. This makes solving differential equations involving violent impacts incredibly easy!

### Worked Example
**Problem:** An undamped mass-spring system $y'' + 9y = 0$ is initially at rest ($y(0)=0, y'(0)=0$). At exactly $t = 2\pi$, it is struck by a hammer with an impulse of 5. Solve for $y(t)$.

**1. Set up the ODE:**
$$ y'' + 9y = 5\delta(t-2\pi) $$

**2. Take the Laplace Transform:**
$$ [s^2 Y(s) - 0 - 0] + 9Y(s) = 5(e^{-2\pi s}) $$

**3. Isolate $Y(s)$:**
$$ Y(s)(s^2 + 9) = 5e^{-2\pi s} $$
$$ Y(s) = \frac{5}{s^2 + 9} e^{-2\pi s} $$

**4. Inverse Transform (using Second Shift Theorem):**
*   Ignore the $e^{-2\pi s}$. We have $\frac{5}{s^2 + 3^2}$.
*   To make it match the sine transform $\frac{3}{s^2 + 3^2}$, pull out the 5 and multiply by $3/3$: $\frac{5}{3} \frac{3}{s^2 + 3^2}$.
*   The unshifted inverse is $f(t) = \frac{5}{3}\sin(3t)$.
*   Apply the shift $(t - 2\pi)$ and step function:
$$ y(t) = \frac{5}{3}\sin(3(t - 2\pi)) \cdot u(t - 2\pi) $$

*(Physically, this means the mass sits perfectly still until exactly $t=2\pi$, at which point it is instantly jolted into a perpetual sine-wave oscillation).*
