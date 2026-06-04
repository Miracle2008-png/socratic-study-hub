# 5. Case 3: Complex Conjugate Roots

When the characteristic equation has a negative discriminant ($b^2 - 4ac < 0$), the quadratic formula yields two complex conjugate roots: 
$$ r = \alpha \pm \beta i $$
Where $\alpha$ is the real part, and $\beta$ is the imaginary part.

### Euler's Formula
If we plug these complex roots into our general solution $y = C_1 e^{r_1 t} + C_2 e^{r_2 t}$, we get exponentials with imaginary powers. In engineering, our inputs (like force) and outputs (like position) are strictly real numbers. We must convert these imaginary exponentials into real functions.

We use Leonhard Euler's legendary identity, which links exponentials to trigonometry:
$$ e^{i\theta} = \cos(\theta) + i \sin(\theta) $$

By substituting Euler's formula into our complex exponential solution, the imaginary terms cancel out (they are absorbed into the arbitrary constants $C_1$ and $C_2$). 

### The General Solution
The resulting pure-real solution is:
$$ y(t) = e^{\alpha t} (C_1 \cos(\beta t) + C_2 \sin(\beta t)) $$

### Physical Interpretation: The Underdamped System
This equation contains two distinct parts:
1.  **$e^{\alpha t}$:** This is the exponential envelope. In mechanical systems, $\alpha$ is always negative, representing energy lost to friction. This causes the amplitude to decay over time.
2.  **$\cos(\beta t) + \sin(\beta t)$:** This is a pure oscillating wave. It dictates that the system will bounce back and forth across the equilibrium point.

An underdamped system is one that rings or oscillates, like a struck guitar string or a car driving over a bump with bad shock absorbers. It bounces up and down, with each bounce getting smaller until it stops.

### Worked Example
**Problem:** Solve $y'' + 2y' + 10y = 0$.

**1. Form the Characteristic Equation:**
$$ r^2 + 2r + 10 = 0 $$

**2. Find the roots:**
Use the quadratic formula:
$$ r = \frac{-2 \pm \sqrt{4 - 4(1)(10)}}{2} $$
$$ r = \frac{-2 \pm \sqrt{-36}}{2} $$
$$ r = \frac{-2 \pm 6i}{2} $$
$$ r = -1 \pm 3i $$

**3. Identify $\alpha$ and $\beta$:**
$\alpha = -1$ (The decay rate).
$\beta = 3$ (The frequency of oscillation).

**4. Write the General Solution:**
$$ y(t) = e^{-t} (C_1 \cos(3t) + C_2 \sin(3t)) $$
