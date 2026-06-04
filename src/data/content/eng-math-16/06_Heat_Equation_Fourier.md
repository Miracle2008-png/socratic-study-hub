# 6. Heat Equation: Applying Fourier Series

We established that the fundamental building blocks for heat in a 1D rod (with ends held at zero) are:
$$ u_n(x,t) = \sin\left(\frac{n\pi x}{L}\right) e^{-k \left(\frac{n\pi}{L}\right)^2 t} $$

Each block represents a specific "mode" of heat distribution. 
*   $n=1$ is a large, slow-decaying heat dome in the middle of the rod.
*   $n=10$ is a series of 10 tiny, rapidly decaying hot and cold spots. 
*(Notice how the $n^2$ in the exponential term forces higher frequencies to decay to zero incredibly fast!)*

### The Superposition Principle
Because the Heat Equation is a linear PDE, any linear combination of solutions is also a solution. We can add an infinite number of these blocks together, each scaled by a constant $b_n$:

$$ u(x,t) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) e^{-k \left(\frac{n\pi}{L}\right)^2 t} $$

This infinite sum is the **General Solution** to the Heat Equation for these boundary conditions. 

### Enforcing the Initial Condition
We still need to figure out what the constants $b_n$ are. We do this by applying the final piece of our problem: the initial temperature distribution $u(x,0) = f(x)$.

Plug $t=0$ into our massive general solution. The exponential term $e^0$ becomes 1.
$$ u(x,0) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) = f(x) $$

Look at this equation. It states that the arbitrary function $f(x)$ must be equal to an infinite sum of sine waves. 
**This is exactly a Fourier Sine Series!** (A Half-Range Expansion).

### Calculating the Constants
Because this is just a Fourier Sine Series, we already know the exact formula to calculate the coefficients $b_n$. We use the orthogonality trick!

$$ b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx $$

**The Complete Solution Process:**
1.  You are given an initial heat profile $f(x)$.
2.  Calculate the Fourier Sine coefficients $b_n$ for that specific $f(x)$.
3.  Plug those $b_n$ values into the massive general solution $u(x,t)$. 

You now have a perfect mathematical formula that will tell you the exact temperature at any microscopic point in the rod, at any point in the future!
