# The Nyquist Stability Criterion

While Bode plots are excellent for analyzing the frequency response and stability of most common chemical processes, they have a glaring blind spot. 

The Bode Stability Criterion (checking if $AR < 1$ at $-180^\circ$) assumes that the phase shift drops smoothly and crosses $-180^\circ$ exactly once. However, for highly complex systems, open-loop unstable processes (like an exothermic continuous stirred-tank reactor), or systems with strange multiple dead-times, the Bode plot can twist, turn, and cross $-180^\circ$ multiple times. In these cases, the simple Bode criterion completely fails, giving false predictions of stability.

To rigorously guarantee stability for *any* system in the universe, we must use the ultimate frequency response tool: **The Nyquist Stability Criterion**.

## 1. The Complex Plane and the Nyquist Plot

A Bode plot uses two separate graphs for Amplitude Ratio and Phase. 
A **Nyquist Plot** combines them into a single, elegant curve drawn on the complex plane (Real vs. Imaginary axes).

To draw it, you take your open-loop transfer function $G(i\omega)$. As you sweep the frequency $\omega$ from 0 to $\infty$, $G(i\omega)$ generates a continuous stream of complex numbers.
*   The distance from the origin to the point on the curve is the Amplitude Ratio ($AR$).
*   The angle from the positive Real axis is the Phase Shift ($\phi$).

As frequency sweeps from $0 \to \infty$, you draw a curved path in the complex plane. To complete the Nyquist contour, you then draw the mirror image for $\omega$ from $-\infty \to 0$. This creates a fully closed loop in the complex plane.

## 2. Cauchy's Principle of Argument

The Nyquist criterion is based on a profound theorem from complex variable calculus called Cauchy's Principle of Argument.

Imagine you have a complex function $F(s)$. If you draw a massive closed circle in the $s$-domain that completely encircles the entire right-half plane (the unstable region where $s$ is positive), and you map that circle through your function $F(s)$, the resulting curve will encircle the origin $(0,0)$ a specific number of times.

The number of times it encircles the origin ($N$) is exactly equal to the number of Zeros ($Z$) in the right-half plane minus the number of Poles ($P$) in the right-half plane:
$$ N = Z - P $$

## 3. Deriving the Nyquist Criterion

We care about the stability of the closed-loop system. Stability is determined by the roots of the characteristic equation: $1 + G_{loop}(s) = 0$.

Let our function be $F(s) = 1 + G_{loop}(s)$. 
For our closed-loop system to be stable, this function must have zero roots (Zeros) in the right-half plane. Therefore, we desperately want $Z = 0$.

If we map the frequency response of $G_{loop}(i\omega)$ (which is exactly what the Nyquist Plot is), we are effectively mapping $F(s) - 1$. 
Therefore, instead of counting encirclements of the origin $(0,0)$, we count encirclements of the critical point **$(-1, 0)$**.

*(Note: The point $-1 + 0i$ is mathematically identical to an Amplitude Ratio of 1 and a Phase Shift of $-180^\circ$. This is the exact same critical threshold identified by Bode!)*

## 4. The Official Nyquist Stability Criterion

**"A closed-loop system is stable if and only if the number of counter-clockwise encirclements ($N$) of the critical point $(-1, 0)$ by the Nyquist plot of $G_{loop}(i\omega)$ is exactly equal to the number of unstable open-loop poles ($P$)."**

$$ Z = P - N \quad \text{(We want } Z=0 \text{)}$$

### Applying the Criterion in Practice

1.  **For Open-Loop Stable Systems:** (95% of chemical processes, like tanks and heat exchangers). The open-loop process has zero unstable poles ($P=0$). 
    Therefore, for the closed-loop to be stable, the Nyquist plot must simply **not encircle** the $-1$ point ($N=0$). 
    If the curve wraps around the $-1$ point, the automated plant will explode.

2.  **For Open-Loop Unstable Systems:** (Like a runaway exothermic CSTR reactor that requires constant active cooling just to not blow up). The open-loop process has, for example, 1 unstable pole ($P=1$).
    Therefore, for the controller to successfully stabilize the plant, the Nyquist plot MUST encircle the $-1$ point exactly once in the counter-clockwise direction ($N=1$).
    If it doesn't encircle it, the controller isn't aggressive enough, and the plant blows up.

The Nyquist plot provides a mathematically flawless visual proof of stability for the most terrifying and complex dynamic systems on Earth.
