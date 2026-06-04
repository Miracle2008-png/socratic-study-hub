# Single Variable Calculus

## 1. Limits and Continuity

### 1.1 L'Hôpital's Rule
If $ \lim_{x \to c} \frac{f(x)}{g(x)} $ results in $ \frac{0}{0} $ or $ \frac{\infty}{\infty} $, then:
$$ \lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)} $$

**Example 1:**
Evaluate $ \lim_{x \to 0} \frac{\sin x - x}{x^3} $.

*Step 1: Check form.* As $ x \to 0 $, both numerator and denominator go to 0. Apply L'Hôpital's Rule.
$$ \lim_{x \to 0} \frac{\cos x - 1}{3x^2} $$
*Step 2: Still $ \frac{0}{0} $. Apply again.*
$$ \lim_{x \to 0} \frac{-\sin x}{6x} $$
*Step 3: Still $ \frac{0}{0} $. Apply again.*
$$ \lim_{x \to 0} \frac{-\cos x}{6} = -\frac{1}{6} $$

## 2. Differentiation

### 2.1 The Chain Rule
If $ y = f(g(x)) $, then $ \frac{dy}{dx} = f'(g(x)) \cdot g'(x) $.

**Example 2:**
Find $ \frac{dy}{dx} $ for $ y = e^{\sin(2x)} $.
$$ y' = e^{\sin(2x)} \cdot \frac{d}{dx}(\sin(2x)) $$
$$ = e^{\sin(2x)} \cdot \cos(2x) \cdot 2 = 2\cos(2x) e^{\sin(2x)} $$

## 3. Integration Techniques

### 3.1 Integration by Parts
$$ \int u dv = uv - \int v du $$

**Example 3:**
Evaluate $ \int x e^x dx $.
*Step 1: Choose $ u $ and $ dv $.* Let $ u = x $, $ dv = e^x dx $.
*Step 2: Compute $ du $ and $ v $.* $ du = dx $, $ v = e^x $.
*Step 3: Apply formula.*
$$ \int x e^x dx = x e^x - \int e^x dx = x e^x - e^x + C $$

### 3.2 Partial Fractions
For rational functions $ \frac{P(x)}{Q(x)} $ where degree of $ P $ < degree of $ Q $.

**Example 4:**
Evaluate $ \int \frac{1}{x^2 - 1} dx $.
*Step 1: Factor denominator.* $ x^2 - 1 = (x-1)(x+1) $.
*Step 2: Setup partial fractions.*
$$ \frac{1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1} $$
$$ 1 = A(x+1) + B(x-1) $$
*Step 3: Solve for $ A $ and $ B $.*
Set $ x=1 \implies A = 1/2 $.
Set $ x=-1 \implies B = -1/2 $.
*Step 4: Integrate.*
$$ \int \left( \frac{1/2}{x-1} - \frac{1/2}{x+1} \right) dx = \frac{1}{2}\ln|x-1| - \frac{1}{2}\ln|x+1| + C $$

## 4. Fundamental Theorem of Calculus
Part 1: If $ F(x) = \int_a^x f(t) dt $, then $ F'(x) = f(x) $.
Part 2: $ \int_a^b f(x) dx = F(b) - F(a) $ where $ F'(x) = f(x) $.

**Example 5:**
Find $ \frac{d}{dx} \int_2^{x^2} \sin(t) dt $.
Using the Chain Rule along with the FTC:
$$ \frac{d}{dx} F(g(x)) = f(g(x)) \cdot g'(x) $$
$$ = \sin(x^2) \cdot 2x = 2x \sin(x^2) $$
