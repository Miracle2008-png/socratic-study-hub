# 8. Variation of Parameters

While Undetermined Coefficients is fast, it fails entirely if the forcing function $g(x)$ is something like $\tan(x)$, $\ln(x)$, or $\frac{1}{x}$. Differentiating these functions yields entirely new, messy functions, making it impossible to form a finite guess.

For these, we must use the **Variation of Parameters** method. It is a powerful, algorithmic formula that works for *any* continuous $g(x)$.

### The Concept
We start with the homogeneous solution: $y_h = C_1 y_1 + C_2 y_2$.
We assume the particular solution $y_p$ has the exact same structure, but we replace the constants $C_1$ and $C_2$ with unknown variable functions $u_1(x)$ and $u_2(x)$:
$$ y_p = u_1(x)y_1 + u_2(x)y_2 $$

### The Formulas
Through a lengthy matrix derivation (Cramer's Rule), we find that $u_1$ and $u_2$ are given by integrating formulas reliant on the **Wronskian**:
$$ W(x) = \det \begin{bmatrix} y_1 & y_2 \\ y_1' & y_2' \end{bmatrix} = y_1 y_2' - y_2 y_1' $$

The formulas are:
$$ u_1 = \int \frac{-y_2 \cdot g(x)}{W(x)} dx $$
$$ u_2 = \int \frac{y_1 \cdot g(x)}{W(x)} dx $$

*(Note: The ODE **must** be in standard normalized form $y'' + p(x)y' + q(x)y = g(x)$ before extracting $g(x)$).*

### Worked Example
**Problem:** Find $y_p$ for $y'' + y = \sec(x)$.

**1. Find $y_h$:**
$r^2 + 1 = 0 \implies r = \pm i$.
$\alpha = 0, \beta = 1$.
$y_h = C_1 \cos(x) + C_2 \sin(x)$.
So, $y_1 = \cos(x)$ and $y_2 = \sin(x)$.

**2. Calculate the Wronskian:**
$$ W = (\cos x)(\cos x) - (\sin x)(-\sin x) $$
$$ W = \cos^2(x) + \sin^2(x) = 1 $$

**3. Apply the $u_1$ Formula:**
$$ u_1 = \int \frac{-\sin(x) \cdot \sec(x)}{1} dx $$
Since $\sec(x) = \frac{1}{\cos(x)}$:
$$ u_1 = \int -\tan(x) dx = \ln|\cos(x)| $$

**4. Apply the $u_2$ Formula:**
$$ u_2 = \int \frac{\cos(x) \cdot \sec(x)}{1} dx $$
Since $\cos \cdot \sec = 1$:
$$ u_2 = \int 1 dx = x $$

**5. Construct $y_p$:**
$$ y_p = u_1 y_1 + u_2 y_2 $$
$$ y_p = (\ln|\cos x|)\cos(x) + (x)\sin(x) $$
