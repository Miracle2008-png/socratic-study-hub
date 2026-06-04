# 6. Derivatives of Exponential & Logarithmic Functions

Exponential functions ($e^x$) govern growth and decay processes, capacitor charging, and radioactive halflife. Logarithmic functions ($\ln x$) govern sound intensity (decibels), chemical acidity (pH), and signal entropy.

### Euler's Number ($e$)
The number $e \approx 2.71828...$ is a mathematical constant uniquely defined by the property that the slope of the curve $y = e^x$ at any point is exactly equal to its y-value at that point.

This leads to the most elegant derivative in all of calculus:
$$ \frac{d}{dx}[e^x] = e^x $$
The function is its own derivative. It is completely immune to the differentiation operator.

### Natural Logarithm ($\ln x$)
The natural logarithm is the inverse of $e^x$. Its derivative represents a hyperbolic curve:
$$ \frac{d}{dx}[\ln(x)] = \frac{1}{x} \quad (\text{for } x > 0) $$

### General Exponentials and Logarithms
What if the base is not $e$? For a general base $a$:
$$ \frac{d}{dx}[a^x] = a^x \ln(a) $$
*(Notice that if $a=e$, this becomes $e^x \ln(e) = e^x(1) = e^x$.)*

For a general logarithm of base $a$:
$$ \frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)} $$

### Worked Example: Combining Rules
**Problem:** Differentiate $f(x) = \frac{e^x}{\ln(x)}$.

**Solution:**
We must use the Quotient Rule.
Let $u = e^x \implies u' = e^x$
Let $v = \ln(x) \implies v' = \frac{1}{x}$

Apply Quotient Rule: $\frac{u'v - uv'}{v^2}$
$$ f'(x) = \frac{(e^x)(\ln x) - (e^x)\left(\frac{1}{x}\right)}{(\ln x)^2} $$
Factor out $e^x$ from the numerator:
$$ f'(x) = \frac{e^x \left(\ln x - \frac{1}{x}\right)}{(\ln x)^2} $$
