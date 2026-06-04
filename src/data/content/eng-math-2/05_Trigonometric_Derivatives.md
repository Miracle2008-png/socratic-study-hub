# 5. Derivatives of Trigonometric Functions

Trigonometric functions are the backbone of engineering analysis for alternating current (AC) circuits, mechanical vibrations, wave propagation, and signal processing (Fourier transforms). You must memorize their derivatives.

### The Six Basic Trig Derivatives
These can all be derived from first principles (using limit properties of sine and cosine) or the quotient rule (for tan, sec, csc, cot).

1.  $$ \frac{d}{dx}[\sin(x)] = \cos(x) $$
2.  $$ \frac{d}{dx}[\cos(x)] = -\sin(x) $$
3.  $$ \frac{d}{dx}[\tan(x)] = \sec^2(x) $$
4.  $$ \frac{d}{dx}[\sec(x)] = \sec(x)\tan(x) $$
5.  $$ \frac{d}{dx}[\csc(x)] = -\csc(x)\cot(x) $$
6.  $$ \frac{d}{dx}[\cot(x)] = -\csc^2(x) $$

**Memory Trick:** 
Notice that the derivative of every "co-" function (cosine, cosecant, cotangent) is always **negative**.

### Combining Trig with Product/Quotient Rules
In engineering, trig functions rarely appear alone. They are usually multiplied by polynomials or other functions, requiring the Product or Quotient rules.

### Worked Example 1: Simple Harmonic Motion
**Problem:** The position of a pendulum is modeled by $x(t) = t^2 \sin(t)$. Find its velocity $v(t)$.

**Solution:**
Because $t^2$ is multiplied by $\sin(t)$, we must use the Product Rule: $u'v + uv'$.
Let $u = t^2 \implies u' = 2t$
Let $v = \sin(t) \implies v' = \cos(t)$

$$ v(t) = (2t)(\sin t) + (t^2)(\cos t) $$
$$ v(t) = 2t \sin(t) + t^2 \cos(t) $$

### Worked Example 2: Deriving Tangent's Derivative
We stated earlier that $\frac{d}{dx}[\tan(x)] = \sec^2(x)$. Let's prove it using the Quotient Rule, since $\tan(x) = \frac{\sin(x)}{\cos(x)}$.

**Solution:**
Let $u = \sin(x) \implies u' = \cos(x)$
Let $v = \cos(x) \implies v' = -\sin(x)$

Apply Quotient Rule: $\frac{u'v - uv'}{v^2}$
$$ \frac{d}{dx}\left[\frac{\sin x}{\cos x}\right] = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{(\cos x)^2} $$
$$ = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} $$
By the Pythagorean trigonometric identity, $\cos^2 x + \sin^2 x = 1$:
$$ = \frac{1}{\cos^2 x} $$
By definition, $\frac{1}{\cos x} = \sec x$, so:
$$ = \sec^2 x $$
