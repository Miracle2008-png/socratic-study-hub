# 10. The Dirac Delta Function (Impulse Force)

What happens if you strike a mass on a spring with a hammer, or lightning strikes a circuit? 

These forces transfer a massive amount of energy into the system in a time frame so short (a fraction of a millisecond) that it is practically instantaneous. We cannot model this using normal continuous functions or even step functions. We need a mathematical tool to represent an **Impulse Force**.

We model this using the **Dirac Delta Function**, denoted $\delta(t-a)$.

### Definition of $\delta(t-a)$
The Dirac Delta function represents a hammer strike exactly at time $t=a$.
*   $\delta(t-a) = 0$ for all $t \neq a$.
*   $\delta(t-a) = \infty$ exactly at $t = a$.
*   The total integral (area under the curve) is exactly equal to 1: $\int_{-\infty}^{\infty} \delta(t-a) \, dt = 1$.

*(Note: The Delta "function" is not a true function in the strict mathematical sense. It is a "distribution" or "generalized function" defined purely by how it behaves inside an integral).*

### The Sifting Property
Because the Delta function is zero everywhere except at $t=a$, integrating it against any other function $f(t)$ "sifts out" or isolates the exact value of $f(t)$ at $t=a$.
$$ \int_{-\infty}^{\infty} f(t) \delta(t-a) \, dt = f(a) $$

### The Laplace Transform of the Delta Function
What is the Laplace transform of a hammer strike at $t=a$? 
We just use the definition of the transform and the Sifting Property:
$$ \mathcal{L}\{\delta(t-a)\} = \int_{0}^{\infty} e^{-st} \delta(t-a) \, dt $$
The sifting property pulls out the value of the function $e^{-st}$ at exactly $t=a$.
$$ \mathcal{L}\{\delta(t-a)\} = e^{-as} $$

**The Ultimate Consequence:**
What if the strike happens exactly at $t=0$?
$$ \mathcal{L}\{\delta(t)\} = e^0 = \mathbf{1} $$

The Laplace Transform of a unit impulse force is simply the number 1! This means that in the $s$-domain, the most violent, explosive, instantaneous force possible is mathematically the absolute easiest thing to work with.

### Solving an Impulse IVP
**Problem:** A spring-mass system $y'' + y = 0$ is resting at zero ($y(0)=0, y'(0)=0$). At $t=2\pi$, it is struck by a hammer with force $3\delta(t-2\pi)$. Find the motion.

ODE: $y'' + y = 3\delta(t-2\pi)$.

**Step 1: Transform**
$$ [s^2 Y(s) - 0 - 0] + Y(s) = 3e^{-2\pi s} $$
$$ Y(s) (s^2 + 1) = 3e^{-2\pi s} \implies Y(s) = \frac{3e^{-2\pi s}}{s^2 + 1} $$

**Step 2: Inverse Transform**
The $e^{-2\pi s}$ dictates a time delay (Second Shifting Theorem) with $a = 2\pi$.
The remaining function is $F(s) = \frac{3}{s^2 + 1}$, which inverses to $f(t) = 3\sin(t)$.
Applying the shift:
$$ y(t) = 3\sin(t - 2\pi) u(t - 2\pi) $$
*(Because sine is periodic with period $2\pi$, $\sin(t-2\pi)$ simplifies exactly to $\sin(t)$).*
$$ y(t) = 3\sin(t) u(t - 2\pi) $$

Physically: The mass sits completely still until $t=2\pi$. The hammer strikes, and it instantly begins bouncing forever with a sine wave of amplitude 3!
