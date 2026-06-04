# 2. Periodic Functions & Orthogonality

Before we construct a Fourier Series, we must define the mathematical environment. 
Let $f(x)$ be a periodic function with a period of $p = 2L$. 
This means $f(x + 2L) = f(x)$ for all $x$. 
We will analyze this function over one full period, specifically the symmetric interval $[-L, L]$.

### Inner Products of Functions
In linear algebra, two vectors are **orthogonal** (perpendicular) if their dot product (inner product) is zero. 
We can extend this concept to functions! The inner product of two functions $f(x)$ and $g(x)$ over an interval $[a,b]$ is defined by the integral:
$$ \langle f, g \rangle = \int_{a}^{b} f(x)g(x) \, dx $$

If this integral equals zero, the functions are orthogonal.

### The Orthogonal Trigonometric Set
The entire foundation of Fourier analysis rests on one miraculous property of sines and cosines. 
Consider the infinite set of trigonometric functions:
$$ \left\{ 1, \cos\left(\frac{\pi x}{L}\right), \cos\left(\frac{2\pi x}{L}\right), \dots, \sin\left(\frac{\pi x}{L}\right), \sin\left(\frac{2\pi x}{L}\right), \dots \right\} $$

If you take *any two different functions* from this infinite set, multiply them together, and integrate from $-L$ to $L$, **the answer is exactly zero**.
$$ \int_{-L}^{L} \cos\left(\frac{m\pi x}{L}\right) \cos\left(\frac{n\pi x}{L}\right) \, dx = 0 \quad (m \neq n) $$
$$ \int_{-L}^{L} \sin\left(\frac{m\pi x}{L}\right) \sin\left(\frac{n\pi x}{L}\right) \, dx = 0 \quad (m \neq n) $$
$$ \int_{-L}^{L} \cos\left(\frac{m\pi x}{L}\right) \sin\left(\frac{n\pi x}{L}\right) \, dx = 0 \quad (\text{for all } m, n) $$

Every single function in this infinite set is mutually orthogonal to every other function. They act as independent axes in an infinite-dimensional mathematical space!

### The Norms
What happens if you take the inner product of a function with *itself* ($m = n$)? You don't get zero. You get the "length" (or norm squared) of the function.
$$ \int_{-L}^{L} \cos^2\left(\frac{n\pi x}{L}\right) \, dx = L \quad (n \neq 0) $$
$$ \int_{-L}^{L} \sin^2\left(\frac{n\pi x}{L}\right) \, dx = L $$
$$ \int_{-L}^{L} (1)^2 \, dx = 2L $$

We will use these orthogonality rules to mathematically filter out the exact amplitude of any specific sine wave hiding inside a complex signal!
