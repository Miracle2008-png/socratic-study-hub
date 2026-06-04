# 6. Half-Range Expansions

What if you are given a function that is only defined on a positive interval, say $[0, L]$? It isn't periodic, and it has no "left half" to determine if it is even or odd.

For example, imagine a physical metal beam of length $L$ that is bent into a curve $f(x) = x(L-x)$. You want to analyze its vibration using Fourier analysis. 

Because we only care about the math between $0$ and $L$, we can **invent** the rest of the function! We can artificially extend the function to the left side $[-L, 0]$, and then artificially loop it infinitely in both directions. 

We can invent the "left half" in two different ways, giving us two different choices for how to solve the problem:

### Choice 1: The Even Extension (Cosine Series)
We can invent the left half to be a perfect mirror image of the right half, forcing the new total function to be **Even**.
Because we forced it to be even, we are guaranteed that $b_n = 0$. 
We construct a **Fourier Cosine Series**:
$$ f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right) $$
$$ a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx $$

### Choice 2: The Odd Extension (Sine Series)
We can invent the left half to be an upside-down mirror image, forcing the new total function to be **Odd**.
Because we forced it to be odd, we are guaranteed that $a_0 = 0$ and $a_n = 0$.
We construct a **Fourier Sine Series**:
$$ f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) $$
$$ b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx $$

**Which one should you choose?**
In pure mathematics, both series will perfectly recreate your original function on the interval $[0, L]$. 
In physics and engineering, the physical boundary conditions make the choice for you.
*   If the ends of your metal beam are free to move (zero slope), you must use a Cosine Series.
*   If the ends of your metal beam are bolted rigidly to a wall (zero displacement), you must use a Sine Series.
