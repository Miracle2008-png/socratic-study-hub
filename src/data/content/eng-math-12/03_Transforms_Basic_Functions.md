# 3. Transforms of Basic Functions

Engineers do not evaluate the improper integral $\int_{0}^{\infty} e^{-st} f(t) dt$ every time they need to solve a problem. That would take forever!

Instead, we compute the integrals for a few fundamental functions once, and compile them into a **Table of Laplace Transforms**. Whenever we need to transform a function, we just look it up in the table.

Here are the most essential elementary transforms that you should commit to memory:

### 1. The Constant
As derived on the previous page:
$$ \mathcal{L}\{1\} = \frac{1}{s} $$
*(For any constant $C$, $\mathcal{L}\{C\} = \frac{C}{s}$)*

### 2. The Exponential
$$ \mathcal{L}\{e^{at}\} = \frac{1}{s - a} $$
*(Example: $\mathcal{L}\{e^{3t}\} = \frac{1}{s - 3}$)*

### 3. The Polynomial ($t^n$)
For any positive integer $n$:
$$ \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}} $$
*(Example: $\mathcal{L}\{t^2\} = \frac{2!}{s^3} = \frac{2}{s^3}$)*
*(Example: $\mathcal{L}\{t\} = \frac{1!}{s^2} = \frac{1}{s^2}$)*

### 4. Sine and Cosine
$$ \mathcal{L}\{\sin(kt)\} = \frac{k}{s^2 + k^2} $$
$$ \mathcal{L}\{\cos(kt)\} = \frac{s}{s^2 + k^2} $$
*(Example: $\mathcal{L}\{\sin(4t)\} = \frac{4}{s^2 + 16}$)*

### 5. Hyperbolic Sine and Cosine
$$ \mathcal{L}\{\sinh(kt)\} = \frac{k}{s^2 - k^2} $$
$$ \mathcal{L}\{\cosh(kt)\} = \frac{s}{s^2 - k^2} $$

**Mnemonic Tip:** Notice how similar Sine/Cosine are to their hyperbolic counterparts! The only difference is the sign in the denominator. Standard trig functions have a `$+$` (representing stable oscillation), while hyperbolic functions have a `$-$` (representing exponential growth/decay). Also, "Cosine has the **s** on top".
