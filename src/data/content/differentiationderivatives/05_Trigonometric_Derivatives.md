# 5. Derivatives of Trigonometric Functions

Trigonometric functions are the mathematical backbone of engineering analysis. They are essential for modeling anything that oscillates, rotates, or repeats. 

### Engineering Context: Why Trig Derivatives Matter
- **Electrical Engineering (AC Circuits):** Alternating current and voltage are sinusoidal. The current through a capacitor is directly proportional to the derivative of the voltage ($I = C \frac{dV}{dt}$). Differentiating a sine wave voltage gives a cosine wave current, mathematically proving the 90° phase shift between voltage and current in capacitors!
- **Mechanical Engineering (Vibrations):** In simple harmonic motion (like a mass on a spring), position is modeled by sine or cosine. Taking the first derivative gives velocity, and the second derivative gives acceleration. You will see that acceleration becomes proportional to the negative of position ($a \propto -x$), which is the fundamental definition of a restoring force.
- **Signal Processing:** Fourier transforms decompose complex signals into infinite sums of sines and cosines. Understanding how these base waves change is critical for filter design and telecommunications.

### The Six Basic Trig Derivatives

These fundamental rules can all be derived from first principles using limits, or by applying the quotient rule to the primary sine and cosine derivatives.

1.  $$ \frac{d}{dx}[\sin(x)] = \cos(x) $$
2.  $$ \frac{d}{dx}[\cos(x)] = -\sin(x) $$
3.  $$ \frac{d}{dx}[\tan(x)] = \sec^2(x) $$
4.  $$ \frac{d}{dx}[\sec(x)] = \sec(x)\tan(x) $$
5.  $$ \frac{d}{dx}[\csc(x)] = -\csc(x)\cot(x) $$
6.  $$ \frac{d}{dx}[\cot(x)] = -\csc^2(x) $$

**Memory Trick:** 
Notice that the derivative of every "co-" function (cosine, cosecant, cotangent) is always **negative**.

---

### Worked Example 1: Easy (Linear Combination)
**Problem:** Find the derivative of $f(x) = 4\sin(x) - 3\cos(x) + 2\tan(x)$.

**Solution:**
Apply the constant multiple and sum rules, differentiating term by term using the core trig identities:
$$ f'(x) = 4(\cos x) - 3(-\sin x) + 2(\sec^2 x) $$
$$ f'(x) = 4\cos(x) + 3\sin(x) + 2\sec^2(x) $$

### Worked Example 2: Medium (Kinematics & Product Rule)
**Problem:** The position of a pendulum over time is modeled by $x(t) = t^2 \sin(t)$. Find its velocity $v(t)$.

**Solution:**
Velocity is the derivative of position, $v(t) = x'(t)$. Because $t^2$ is multiplied by $\sin(t)$, we must use the Product Rule ($u'v + uv'$):
Let $u = t^2 \implies u' = 2t$
Let $v = \sin(t) \implies v' = \cos(t)$

Apply the rule:
$$ v(t) = (2t)(\sin t) + (t^2)(\cos t) $$
$$ v(t) = 2t \sin(t) + t^2 \cos(t) $$

### Worked Example 3: Medium (Proving the Tangent Derivative)
**Problem:** Prove that $\frac{d}{dx}[\tan(x)] = \sec^2(x)$ using the Quotient Rule.

**Solution:**
Express tangent in terms of sine and cosine: $\tan(x) = \frac{\sin(x)}{\cos(x)}$.
Identify High ($u$) and Low ($v$):
$u = \sin(x) \implies u' = \cos(x)$
$v = \cos(x) \implies v' = -\sin(x)$

Apply the Quotient Rule ($\frac{u'v - uv'}{v^2}$):
$$ \frac{d}{dx}\left[\frac{\sin x}{\cos x}\right] = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{(\cos x)^2} $$
$$ = \frac{\cos^2(x) + \sin^2(x)}{\cos^2(x)} $$

Apply the Pythagorean trigonometric identity ($\cos^2(x) + \sin^2(x) = 1$):
$$ = \frac{1}{\cos^2(x)} $$

By definition, $\frac{1}{\cos(x)} = \sec(x)$, therefore:
$$ = \sec^2(x) $$

### Worked Example 4: Hard (Quotient Rule with Trig)
**Problem:** Differentiate $y = \frac{\sin(x)}{1 + \cos(x)}$.

**Solution:**
Identify High ($u$) and Low ($v$):
$u = \sin(x) \implies u' = \cos(x)$
$v = 1 + \cos(x) \implies v' = -\sin(x)$

Apply the Quotient Rule:
$$ y' = \frac{(\cos x)(1 + \cos x) - (\sin x)(-\sin x)}{(1 + \cos x)^2} $$

Expand the numerator:
$$ y' = \frac{\cos(x) + \cos^2(x) + \sin^2(x)}{(1 + \cos x)^2} $$

Recognize the Pythagorean identity ($\cos^2(x) + \sin^2(x) = 1$) in the numerator:
$$ y' = \frac{\cos(x) + 1}{(1 + \cos x)^2} $$

Simplify by canceling the common factor $(1 + \cos x)$:
$$ y' = \frac{1}{1 + \cos x} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Trig Functions",
        "icon": "BrainCircuit",
        "description": "Sin, Cos, Tan"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Derivatives",
        "icon": "ArrowRightCircle",
        "description": "Phase shifted and transformed"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Co-functions",
        "icon": "ArrowRightCircle",
        "description": "Derivatives are always negative!"
      },
      "style": {
        "background": "#991b1b",
        "color": "#fee2e2"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Engineering Use",
        "icon": "CheckCircle",
        "description": "AC power, Vibrations, Waves"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "2",
      "target": "4",
      "animated": true
    }
  ]
}
```
