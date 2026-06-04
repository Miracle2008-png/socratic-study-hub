# 8. Nonhomogeneous Equations (The General Strategy)

Until now, we have only solved homogeneous equations ($y'' + py' + qy = 0$). We modeled closed systems that were left alone to oscillate or decay.

Now we introduce the **Nonhomogeneous Equation**:
$$ y'' + p(x)y' + q(x)y = g(x) $$

The function $g(x)$ represents an external **Driving Force**. Imagine a mass on a spring, but instead of just letting it bounce, you grab the mass and physically push and pull it according to the function $g(x)$.

### The Structure of the Solution
Solving a nonhomogeneous equation is a two-part process. The General Solution is always the sum of two distinct pieces:
$$ y(x) = y_c(x) + y_p(x) $$

1.  **The Complementary Solution ($y_c$):**
    This is the general solution to the associated *homogeneous* equation ($g(x)=0$). It contains the arbitrary constants $C_1$ and $C_2$. It represents the natural, internal behavior of the system if you were to shut off the external force.
    *(You already know how to find this using the Characteristic Equation!)*

2.  **The Particular Solution ($y_p$):**
    This is *any single, specific* function (with no arbitrary constants) that satisfies the full nonhomogeneous equation. It represents the forced, steady-state behavior imposed on the system by the external force $g(x)$.

### Why does this sum work?
By the linearity of the derivative, if we plug $(y_c + y_p)$ into the left side of the differential equation:
$$ (y_c + y_p)'' + p(y_c + y_p)' + q(y_c + y_p) $$
We can group the $y_c$ terms and $y_p$ terms separately:
$$ [y_c'' + p y_c' + q y_c] + [y_p'' + p y_p' + q y_p] $$

Because $y_c$ is the solution to the homogeneous equation, the first bracket evaluates exactly to $0$.
Because $y_p$ is a solution to the nonhomogeneous equation, the second bracket evaluates exactly to $g(x)$.
$$ 0 + g(x) = g(x) $$
The equation is perfectly satisfied!

### The Two Methods
Finding $y_c$ is easy. Finding $y_p$ is the challenge. There are two primary techniques for finding the particular solution:
1.  **The Method of Undetermined Coefficients:** A fast, educated-guessing method that works only if $g(x)$ is a simple polynomial, exponential, or sine/cosine wave.
2.  **Variation of Parameters:** A robust, brute-force integral method that works for any $g(x)$, but is computationally exhausting.

We will cover both methods on the next two pages.
