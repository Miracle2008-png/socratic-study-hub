# 5. Even and Odd Functions (Symmetry)

Evaluating three separate integrals for every single problem is exhausting. But engineers love shortcuts. If a function possesses symmetry, half of the integrals will automatically evaluate to zero, saving us massive amounts of work!

### Even Functions (Cosine Symmetry)
A function is **Even** if it is perfectly symmetric across the y-axis. 
Mathematical definition: $f(-x) = f(x)$.
*Examples: $x^2, \cos(x), |x|$.*

Cosine waves are naturally even functions. 
If you try to build an even function using a Fourier Series, you only need cosine waves. **All of the sine coefficients ($b_n$) are guaranteed to be zero!** 

Furthermore, instead of integrating from $-L$ to $L$, you can just integrate from $0$ to $L$ and double the answer:
$$ a_0 = \frac{2}{L} \int_{0}^{L} f(x) \, dx $$
$$ a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx $$
$$ b_n = 0 $$
*(This is called a Fourier Cosine Series).*

### Odd Functions (Sine Symmetry)
A function is **Odd** if it possesses origin symmetry (if you flip it upside down, it looks exactly the same).
Mathematical definition: $f(-x) = -f(x)$.
*Examples: $x, x^3, \sin(x)$.*

Sine waves are naturally odd functions.
If you try to build an odd function using a Fourier Series, you only need sine waves. **All of the cosine coefficients ($a_0$ and $a_n$) are guaranteed to be zero!**

$$ a_0 = 0 $$
$$ a_n = 0 $$
$$ b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx $$
*(This is called a Fourier Sine Series).*

### How to use this
Before calculating any integrals, look at the graph of your function! 
*   If it looks like a mountain centered exactly on the y-axis, it is even. Throw away the $b_n$ integral.
*   If it looks like a wave passing perfectly diagonally through the origin, it is odd. Throw away the $a_0$ and $a_n$ integrals.

If a function has no symmetry (e.g., $f(x) = e^x$), you must calculate all three integrals.
