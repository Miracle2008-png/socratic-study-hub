# 8. Integrals Involving Sine and Cosine

The semicircle trick on the previous page is brilliant for rational fractions like $1/(x^2+1)$. 
But what if the integral contains oscillating trigonometric waves?

Consider this famous integral from signal processing (the Fourier Transform of a rational pulse):
$$
\int_{-\infty}^{\infty} \frac{\cos(x)}{x^2 + 1} \, dx
$$

If we try to replace $x$ with $z$ and use the giant semicircle $C_R$, we run into a catastrophic problem. 
In Topic 24, we learned that $\cos(z)$ is Unbounded. As you move up into the imaginary plane (which our massive semicircle does), $\cos(z)$ explodes into exponentially massive values!
Therefore, the integral over the giant arc $C_R$ will NOT shrink to zero. It will explode to infinity, and our trick will fail.

### The Euler Swap (Jordan's Lemma)
To fix this, we must use Euler's Formula: $e^{ix} = \cos x + i \sin x$.
We completely delete the $\cos(x)$ from the integral, and temporarily replace it with the exponential function $e^{iz}$!

Why? Because $e^{iz} = e^{i(x+iy)} = e^{ix} \cdot e^{-y}$.
Look at that second term ($e^{-y}$). As you move high up into the upper half-plane ($y \to +\infty$), the term $e^{-y}$ forces the entire function to violently decay to 0! 

This exponential decay is so powerful it perfectly suppresses the exploding boundary of the semicircle. This principle is formally codified as **Jordan's Lemma**.

### Step-by-Step Solution
1.  **Modify the Function:** We define a brand new complex function $f(z) = \frac{e^{iz}}{z^2 + 1}$.
2.  **Find the Singularities:** $z = \pm i$. Only $z = i$ is trapped in the upper semicircle.
3.  **Calculate the Residue:**
    $$
    \text{Res}(f, i) = \lim_{z \to i} \left[ (z - i) \frac{e^{iz}}{(z-i)(z+i)} \right] = \frac{e^{i(i)}}{i + i} = \frac{e^{-1}}{2i} = \frac{1}{2ei}
    $$
4.  **Apply Residue Theorem:**
    $$
    \oint_C = 2\pi i \left( \frac{1}{2ei} \right) = \frac{\pi}{e}
    $$
5.  **Blow up the Semicircle ($R \to \infty$):** By Jordan's Lemma, the giant arc evaluates to 0. 
    Therefore, the integral along the real line must equal the total loop!
    $$
    \int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1} \, dx = \frac{\pi}{e}
    $$
6.  **Extract the Real Part:**
    We know that $e^{ix} = \cos x + i \sin x$. 
    Our target integral only wanted the $\cos(x)$ part! Therefore, we just take the Real Part of our final answer!
    $$
    \text{Real} \left( \frac{\pi}{e} \right) = \mathbf{\frac{\pi}{e}}
    $$

If we had wanted the $\sin(x)$ integral, we would have just taken the Imaginary Part of the answer (which is 0).
