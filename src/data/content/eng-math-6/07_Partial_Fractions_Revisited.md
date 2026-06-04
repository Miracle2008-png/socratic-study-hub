# 7. Partial Fractions Revisited

In Section 5, we solved an ODE and ended up with the frequency-domain equation:
$$ Y(s) = \frac{s + 4}{s(s - 2)} $$

This fraction is not in our transform table. The most crucial skill in the Laplace method is breaking down complex rational functions like this into simple, recognizable table entries. We do this using **Partial Fraction Decomposition**.

### The Decomposition
We want to split $\frac{s + 4}{s(s - 2)}$ into two separate fractions:
$$ \frac{s + 4}{s(s - 2)} = \frac{A}{s} + \frac{B}{s - 2} $$

Multiply the entire equation by the common denominator $s(s-2)$:
$$ s + 4 = A(s - 2) + B(s) $$

### Solving for A and B
We pick strategic values for $s$ to eliminate terms and solve for the constants.

**Let $s = 0$:**
$$ 0 + 4 = A(0 - 2) + B(0) $$
$$ 4 = -2A \implies A = -2 $$

**Let $s = 2$:**
$$ 2 + 4 = A(2 - 2) + B(2) $$
$$ 6 = 2B \implies B = 3 $$

### The Final Inverse Transform
Substitute $A$ and $B$ back into the split fractions:
$$ Y(s) = \frac{-2}{s} + \frac{3}{s - 2} $$

Now, apply the Inverse Laplace Transform ($\mathcal{L}^{-1}$) to both sides. Notice how perfectly these fractions match our basic table!
*   $\frac{-2}{s}$ matches the Constant rule $\frac{1}{s}$.
*   $\frac{3}{s-2}$ matches the Exponential rule $\frac{1}{s-a}$.

$$ y(t) = \mathcal{L}^{-1}\left\{ \frac{-2}{s} \right\} + \mathcal{L}^{-1}\left\{ \frac{3}{s - 2} \right\} $$

$$ y(t) = -2(1) + 3(e^{2t}) $$
$$ y(t) = -2 + 3e^{2t} $$

We have successfully completely solved the differential equation from Section 5!

### The Heaviside Cover-Up Trick
For distinct linear factors (like $s$ and $s-2$), Oliver Heaviside invented a blazing fast shortcut for finding $A$ and $B$ without writing out the algebra.

To find the constant over a factor (e.g., the $B$ over $s-2$):
1. Take the original fraction: $\frac{s + 4}{s(s - 2)}$.
2. Physically cover up the factor $(s-2)$ with your thumb. You are left with $\frac{s + 4}{s}$.
3. Plug in the root of the factor you covered up. Since you covered $(s-2)$, plug in $s = 2$.
4. $\frac{2 + 4}{2} = \frac{6}{2} = 3$. Therefore, $B = 3$.

To find $A$ (the constant over $s$):
1. Cover up $s$ in the original fraction: $\frac{s + 4}{(s - 2)}$.
2. The root of $s$ is $s = 0$. Plug in $0$.
3. $\frac{0 + 4}{0 - 2} = \frac{4}{-2} = -2$. Therefore, $A = -2$.
