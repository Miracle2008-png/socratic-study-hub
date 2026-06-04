# 8. The Heaviside Step Function

The true power of the Laplace Transform is its ability to handle discontinuous functions—functions that instantly turn "on" or "off."

In electrical engineering, throwing a switch from off to on is modeled mathematically by the **Heaviside Step Function** (or Unit Step Function).

### Definition of $u(t)$
The standard step function $u(t)$ (sometimes written as $H(t)$) is defined as:
*   $u(t) = 0$ for $t < 0$ (Off)
*   $u(t) = 1$ for $t \ge 0$ (On)

### The Shifted Step Function $u(t-a)$
Usually, we don't throw the switch exactly at time zero. We might wait 5 seconds. We model this by shifting the step function to the right by $a$ seconds: $u(t-a)$.
*   $u(t-a) = 0$ for $t < a$
*   $u(t-a) = 1$ for $t \ge a$

### Modeling Piecewise Functions
The step function acts as a mathematical "On Switch." If you multiply any function by $u(t-a)$, that function is completely silent (zero) until time $a$, at which point it turns on and behaves normally.

**Example:** A 12-volt battery is switched on at $t=3$ seconds.
$$ V(t) = 12 \cdot u(t-3) $$

To create an "Off Switch," subtract a step function.
**Example:** A motor outputs 500 RPM starting at $t=2$ and shuts down completely at $t=7$.
$$ RPM(t) = 500[u(t-2) - u(t-7)] $$
*   Before $t=2$: $500(0 - 0) = 0$
*   Between $t=2$ and $t=7$: $500(1 - 0) = 500$
*   After $t=7$: $500(1 - 1) = 0$

### Laplace Transform of the Step Function
How does a discontinuous step look in the frequency domain? 

If we apply the integral definition $\int_{0}^{\infty} e^{-st} u(t-a) dt$, the $u(t-a)$ is zero from 0 to $a$. So, the integral only exists from $a$ to $\infty$:
$$ \int_{a}^{\infty} e^{-st} (1) dt = \frac{e^{-as}}{s} $$

**The Transform Rule:**
$$ \mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s} $$

Notice that a time delay of '$a$' in the time domain results in multiplying by an exponential $e^{-as}$ in the frequency domain. This is an incredibly important signature to recognize.
