# 8. Frobenius: Roots Differing by an Integer

If you solve the indicial equation and find two distinct roots $r_1$ and $r_2$, but their difference ($r_1 - r_2$) **is a positive integer** $N$, we run into the division-by-zero trap on the smaller root $r_2$.

### The Fix
Frobenius proved that you can always find the first solution $y_1(x)$ simply by using the larger root $r_1$. Because $r_1$ is larger, adding $n$ to it will never accidentally step backwards to hit the zero-denominator trap at $r_2$.

$$ y_1(x) = \sum_{n=0}^{\infty} c_n x^{n+r_1} $$

However, finding the second solution $y_2(x)$ requires a modification. Because the standard series fails for $r_2$, we must add a logarithmic term containing the first solution!

The second solution takes the form:
$$ y_2(x) = C y_1(x) \ln(x) + \sum_{n=0}^{\infty} b_n x^{n+r_2} $$

*   The constant $C$ might be zero. If $C$ evaluates to zero, you got lucky—the logarithmic term vanishes, and the standard series actually works for the smaller root (this happens when the numerator of the recurrence relation also becomes zero at exactly the right time, canceling out the zero in the denominator).
*   If $C \neq 0$, the logarithmic term is required to maintain linear independence.

### The Process (In Brief)
To find the coefficients $b_n$ and the constant $C$ for the second solution, you must substitute the massive proposed $y_2(x)$ equation (including the derivative of $y_1 \ln(x)$ using the product rule) back into the original differential equation. 
This algebra is famously brutal. In modern engineering, we rely on computer algebra systems (like Mathematica) to calculate these integer-difference Frobenius series.
