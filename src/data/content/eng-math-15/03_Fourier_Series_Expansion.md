# 3. The Fourier Series Expansion

We can now define the Fourier Series for a periodic function $f(x)$ with period $2L$.
Because the trigonometric functions form an orthogonal basis set, we can represent $f(x)$ as a linear combination of all of them:

$$ f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right] $$

*   $a_0/2$ is the DC offset (the average vertical value of the function). *(Note: It is written with a /2 for mathematical convenience later).*
*   $a_n$ are the amplitudes of the cosine waves.
*   $b_n$ are the amplitudes of the sine waves.
*   $n$ is the harmonic number ($n=1$ is the fundamental frequency, $n=2$ is the second harmonic, twice as fast, etc.).

### Euler-Fourier Formulas (The Sifting Trick)
How do we find the unknown coefficients $a_n$ and $b_n$ for a specific function $f(x)$?
We use the orthogonality rules!

Suppose we want to find $a_5$ (the amplitude of the 5th cosine wave). 
We take the entire infinite Fourier Series equation and multiply both sides by $\cos(\frac{5\pi x}{L})$, and then integrate both sides from $-L$ to $L$.

On the right side of the equation, you will have an infinite number of integrals. But because of orthogonality, every single integral containing $\sin$ multiplied by $\cos$ goes to zero. Every integral containing $\cos(\frac{m\pi x}{L})\cos(\frac{5\pi x}{L})$ goes to zero unless $m=5$. 

Out of the entire infinite sum, only one single term survives! The orthogonality completely sifts away the infinite noise, leaving only the amplitude you want.

This mathematical trick produces three beautiful, explicit formulas for the coefficients, which we will see on the next page.
